<!-- Page: /project-management/dashboard-4 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Dashboard 4 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchProjects": ""
})

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "projects": "mobMobile App Redesign",
    "projectsText6": "mob",
    "projectsText8": "Mobile App Redesign",
    "status": "On Track",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-success/80 text-success dark:text-success bg-success/5",
    "statusClass3": "size-1.5 rounded-full bg-success",
    "priority": "High",
    "owner": "James Lee",
    "ownerAlt5": "James Lee",
    "ownerSrc6": "/reference/a99c47c2fa3dc656.png",
    "dueDate": "May 24, 2026"
  },
  {
    "_id": "2",
    "projects": "apiAPI Stabilization",
    "projectsText6": "api",
    "projectsText8": "API Stabilization",
    "status": "Blocked",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-error/80 text-error dark:text-error bg-error/5",
    "statusClass3": "size-1.5 rounded-full bg-error",
    "priority": "High",
    "owner": "Ava Reed",
    "ownerAlt5": "Ava Reed",
    "ownerSrc6": "/reference/146332adc3a2c901.png",
    "dueDate": "May 20, 2026"
  },
  {
    "_id": "3",
    "projects": "lauLaunch Readiness",
    "projectsText6": "lau",
    "projectsText8": "Launch Readiness",
    "status": "On Track",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-success/80 text-success dark:text-success bg-success/5",
    "statusClass3": "size-1.5 rounded-full bg-success",
    "priority": "High",
    "owner": "Olivia Bennett",
    "ownerAlt5": "Olivia Bennett",
    "ownerSrc6": "/reference/5985a55c7498fe2e.png",
    "dueDate": "Jun 3, 2026"
  },
  {
    "_id": "4",
    "projects": "desDesign System Rollout",
    "projectsText6": "des",
    "projectsText8": "Design System Rollout",
    "status": "Dependency",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-default text-muted bg-(--ui-bg-muted)/20",
    "statusClass3": "size-1.5 rounded-full bg-(--ui-text-muted)",
    "priority": "Medium",
    "owner": "Kiara Laras",
    "ownerAlt5": "Kiara Laras",
    "ownerSrc6": "/reference/9310a24e0d573ddb.png",
    "dueDate": "May 29, 2026"
  },
  {
    "_id": "5",
    "projects": "qaQA Regression Pass",
    "projectsText6": "qa",
    "projectsText8": "QA Regression Pass",
    "status": "At Risk",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-warning/80 text-warning dark:text-warning bg-warning/5",
    "statusClass3": "size-1.5 rounded-full bg-warning",
    "priority": "High",
    "owner": "Michael Chen",
    "ownerAlt5": "Michael Chen",
    "ownerSrc6": "/reference/247ac7c76922347b.png",
    "dueDate": "May 31, 2026"
  },
  {
    "_id": "6",
    "projects": "onbCustomer Onboarding Flow",
    "projectsText6": "onb",
    "projectsText8": "Customer Onboarding Flow",
    "status": "At Risk",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-warning/80 text-warning dark:text-warning bg-warning/5",
    "statusClass3": "size-1.5 rounded-full bg-warning",
    "priority": "Medium",
    "owner": "Sophia Martinez",
    "ownerAlt5": "Sophia Martinez",
    "ownerSrc6": "/reference/ac13c01a479a177b.png",
    "dueDate": "May 27, 2026"
  },
  {
    "_id": "7",
    "projects": "bilBilling Migration",
    "projectsText6": "bil",
    "projectsText8": "Billing Migration",
    "status": "Dependency",
    "statusClass2": "inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-default text-muted bg-(--ui-bg-muted)/20",
    "statusClass3": "size-1.5 rounded-full bg-(--ui-text-muted)",
    "priority": "Low",
    "owner": "Ben Lewis",
    "ownerAlt5": "Ben Lewis",
    "ownerSrc6": "/reference/ada84674117f0188.png",
    "dueDate": "Jun 7, 2026"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "projects",
    "header": "Projects"
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
    "accessorKey": "owner",
    "header": "Owner"
  },
  {
    "accessorKey": "dueDate",
    "header": "Due date"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.searchProjects || '').toLowerCase()
  const keys = ["projects","status","priority","owner","dueDate"] as const
  return table1Rows.value.filter(row => !query || keys.some(key => String(row[key]).toLowerCase().includes(query)))
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
  if (actionDialog.mode === 'delete' && actionDialog.recordId) {
    if (actionDialog.table === 1) table1Rows.value = table1Rows.value.filter(row => row._id !== actionDialog.recordId)
  }
  toast.add({ title: actionDialog.mode === 'delete' ? 'Item removed' : 'Changes saved', color: 'success', icon: 'i-lucide-check' })
  actionDialog.open = false
}

function exportCsv() {
  const rows = table1FilteredRows.value.map(row => ["projects","status","priority","owner","dueDate"].map(key => String(row[key as keyof typeof row])))
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "project-management-dashboard-4.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}

// Canvas interaction is local to this page; no graph renderer is imported.
const canvasRoots = new Map<number, HTMLElement>()
const canvasViews = new Map<number, { x: number, y: number, scale: number }>()
let canvasDrag: { canvas: number, element?: HTMLElement, startX: number, startY: number, x: number, y: number } | undefined
function setCanvasRoot(index: number, element: unknown) {
  if (element instanceof HTMLElement) { canvasRoots.set(index, element); nextTick(() => fitCanvas(index)) }
  else canvasRoots.delete(index)
}
function canvasView(index: number) {
  if (!canvasViews.has(index)) canvasViews.set(index, { x: 0, y: 0, scale: 1 })
  return canvasViews.get(index)!
}
function paintCanvas(index: number) {
  const element = canvasRoots.get(index)?.querySelector<HTMLElement>('.workflow-canvas__viewport')
  const view = canvasView(index)
  if (element) element.style.transform = 'translate(' + view.x + 'px, ' + view.y + 'px) scale(' + view.scale + ')'
}
function zoomCanvas(index: number, factor: number) {
  const view = canvasView(index)
  view.scale = Math.max(0.15, Math.min(2.5, view.scale * factor))
  paintCanvas(index)
}
function fitCanvas(index: number) {
  const root = canvasRoots.get(index)
  const nodes = root?.querySelectorAll<HTMLElement>('.workflow-canvas__node')
  if (!root || !nodes?.length || !root.clientWidth || !root.clientHeight) return
  const bounds = [...nodes].map(node => {
    const match = node.style.transform.match(/translate\(([-\d.]+)px,?\s*([-\d.]+)px\)/)
    return { x: Number(match?.[1] || 0), y: Number(match?.[2] || 0), width: node.offsetWidth, height: node.offsetHeight }
  })
  const x = Math.min(...bounds.map(node => node.x)), y = Math.min(...bounds.map(node => node.y))
  const width = Math.max(...bounds.map(node => node.x + node.width)) - x
  const height = Math.max(...bounds.map(node => node.y + node.height)) - y
  const view = canvasView(index)
  view.scale = Math.max(0.15, Math.min(1, (root.clientWidth - 90) / width, (root.clientHeight - 130) / height))
  view.x = (root.clientWidth - width * view.scale) / 2 - x * view.scale
  view.y = (root.clientHeight - height * view.scale) / 2 - y * view.scale
  paintCanvas(index)
}
function canvasPointerDown(index: number, event: PointerEvent) {
  const target = event.target as HTMLElement
  if (target.closest('button, input, textarea, a, .nodrag')) return
  const element = target.closest<HTMLElement>('.workflow-canvas__node') || undefined
  const match = element?.style.transform.match(/translate\(([-\d.]+)px,?\s*([-\d.]+)px\)/)
  const view = canvasView(index)
  canvasDrag = { canvas: index, element, startX: event.clientX, startY: event.clientY, x: element ? Number(match?.[1] || 0) : view.x, y: element ? Number(match?.[2] || 0) : view.y }
  canvasRoots.get(index)?.setPointerCapture(event.pointerId)
}
function canvasPointerMove(event: PointerEvent) {
  if (!canvasDrag) return
  const view = canvasView(canvasDrag.canvas)
  const dx = event.clientX - canvasDrag.startX, dy = event.clientY - canvasDrag.startY
  if (canvasDrag.element) canvasDrag.element.style.transform = 'translate(' + (canvasDrag.x + dx / view.scale) + 'px, ' + (canvasDrag.y + dy / view.scale) + 'px)'
  else { view.x = canvasDrag.x + dx; view.y = canvasDrag.y + dy; paintCanvas(canvasDrag.canvas) }
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/dashboard-4">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="bg-default flex min-h-[calc(100dvh-1px)] w-full overflow-hidden">
          <div class="flex min-w-0 flex-1 flex-col">
            <header class="bg-default min-w-0 border-b px-3 py-3 sm:px-4 lg:px-6 border-default">
              <div class="flex min-w-0 flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div class="flex min-w-0 items-center gap-2 text-sm">
                  <span class="text-muted">Projects</span>
                  <span class="text-muted">/</span>
                  <span class="truncate font-medium">Product Launch Portfolio</span>
                </div>
                <div class="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-2 lg:flex lg:items-center">
                  <div class="relative min-w-0 lg:w-[260px]">
                    <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                    <UInput v-model="form.searchProjects" type="text" placeholder="Search projects..." name="searchProjects" class="flex w-full text-base md:text-sm h-9 rounded-[6px] pl-9" :ui="{ base: 'h-full' }" />
                  </div>
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-9 rounded-[6px]" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                    <UIcon name="i-lucide-bell" class="size-4" />
                  </UButton>
                </div>
              </div>
            </header>
            <main class="dark:bg-default min-w-0 flex-1 overflow-auto bg-(--ui-bg-muted)/50 px-3 pt-3 pb-20 sm:px-4 sm:pt-4 md:px-6 md:pt-5">
              <div class="mx-auto max-w-[1700px] space-y-3 sm:space-y-4">
                <div class="flex min-w-0 flex-wrap items-start justify-between gap-3">
                  <div class="min-w-0">
                    <div class="text-muted flex items-center gap-2 text-xs">
                      <img alt="Shadcnblocks" width="16" height="16" class="size-4 dark:hidden" style="color:transparent" src="/reference/4eb49a7be0892386.svg" loading="lazy" />
                      <span>Shadcnblocks</span>
                      <span>/</span>
                      <span>Project Delivery</span>
                    </div>
                    <h1 class="mt-2 text-2xl leading-tight font-semibold tracking-tight text-highlighted">Project Dependency Map</h1>
                    <p class="text-muted mt-1 max-w-2xl text-sm">Track delivery risk, owners, blockers, and dependent milestones across active projects.</p>
                  </div>
                  <div class="flex min-w-0 flex-wrap items-center gap-2">
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default h-9 rounded-[6px] px-3 text-xs shadow-none" aria-label="Filter" type="button" @click="openAction(&quot;Filter&quot;)">
                      <UIcon name="i-lucide-funnel" class="size-4" />
                      Filter
                    </UButton>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default h-9 rounded-[6px] px-3 text-xs shadow-none" aria-label="View options" type="button" @click="openAction(&quot;View options&quot;)">
                      <UIcon name="i-lucide-sliders-horizontal" class="size-4" />
                      View options
                      <UIcon name="i-lucide-chevron-down" class="size-3.5" />
                    </UButton>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default h-9 rounded-[6px] px-3 text-xs shadow-none" aria-label="Export" type="button" @click="exportCsv()">
                      <UIcon name="i-lucide-download" class="size-4" />
                      Export
                    </UButton>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-2.5 sm:gap-3 xl:grid-cols-4">
                  <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none p-3 sm:p-4 border-default" style="opacity: 1; transform: none;">
                    <div class="flex min-w-0 items-center gap-2.5 sm:gap-3">
                      <span class="bg-muted text-muted grid size-8 shrink-0 place-items-center rounded-[6px] sm:size-9">
                        <UIcon name="i-lucide-list-todo" class="size-4" />
                      </span>
                      <span class="min-w-0 text-[13px] leading-tight font-medium sm:text-sm">Create issue</span>
                    </div>
                  </section>
                  <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none p-3 sm:p-4 border-default" style="opacity: 1; transform: none;">
                    <div class="flex min-w-0 items-center gap-2.5 sm:gap-3">
                      <span class="bg-muted text-muted grid size-8 shrink-0 place-items-center rounded-[6px] sm:size-9">
                        <UIcon name="i-lucide-flag" class="size-4" />
                      </span>
                      <span class="min-w-0 text-[13px] leading-tight font-medium sm:text-sm">Schedule milestone</span>
                    </div>
                  </section>
                  <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none p-3 sm:p-4 border-default" style="opacity: 1; transform: none;">
                    <div class="flex min-w-0 items-center gap-2.5 sm:gap-3">
                      <span class="bg-muted text-muted grid size-8 shrink-0 place-items-center rounded-[6px] sm:size-9">
                        <UIcon name="i-lucide-calendar-plus" class="size-4" />
                      </span>
                      <span class="min-w-0 text-[13px] leading-tight font-medium sm:text-sm">Plan sprint</span>
                    </div>
                  </section>
                  <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none p-3 sm:p-4 border-default" style="opacity: 1; transform: none;">
                    <div class="flex min-w-0 items-center gap-2.5 sm:gap-3">
                      <span class="bg-muted text-muted grid size-8 shrink-0 place-items-center rounded-[6px] sm:size-9">
                        <UIcon name="i-lucide-plus" class="size-4" />
                      </span>
                      <span class="min-w-0 text-[13px] leading-tight font-medium sm:text-sm">Add project</span>
                    </div>
                  </section>
                </div>
                <div class="grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1fr)_360px]">
                  <div class="min-w-0 space-y-4">
                    <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none p-3 sm:p-4 border-default" style="opacity: 1; transform: none;">
                      <div class="bg-default relative h-[360px] overflow-hidden rounded-[8px] border sm:h-[500px] lg:h-[620px] border-default">
                        <!-- Workflow canvas 1: local pointer and zoom handlers -->
                        <div class="workflow-canvas !bg-default [&amp;_.workflow-canvas__controls-button]:!border-default [&amp;_.workflow-canvas__controls-button]:!bg-default [&amp;_.workflow-canvas__controls-button]:!text-highlighted [&amp;_.workflow-canvas__attribution]:hidden [&amp;_.workflow-canvas__panel]:!m-3 sm:[&amp;_.workflow-canvas__panel]:!m-5 light" style="width: 100%; height: 100%; overflow: hidden; position: relative; z-index: 0;" role="application" :ref="element => setCanvasRoot(1, element)" @pointerdown="canvasPointerDown(1, $event)" @pointermove="canvasPointerMove($event)" @pointerup="canvasDrag = undefined" @pointercancel="canvasDrag = undefined" @wheel.ctrl.prevent="zoomCanvas(1, $event.deltaY < 0 ? 1.1 : 1 / 1.1)">
                          <div class="workflow-canvas__renderer" style="position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;">
                            <div class="workflow-canvas__pane draggable" style="position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;">
                              <div class="workflow-canvas__viewport workflow-canvas__viewport workflow-canvas__container" style="transform: translate(20.4353px, 121.65px) scale(0.64271);">
                                <div class="workflow-canvas__edges">
                                  <svg class="workflow-canvas__marker" width="100%" height="100%">
                                    <defs>
                                      <marker class="workflow-canvas__arrowhead" id="1__color=rgb(113 113 122)&amp;type=arrowclosed">
                                        <polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4" style="stroke-width: 1; stroke: var(--ui-text-muted); fill: var(--ui-text-muted);" />
                                      </marker>
                                      <marker class="workflow-canvas__arrowhead" id="1__color=rgb(239 68 68)&amp;type=arrowclosed">
                                        <polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4" style="stroke-width: 1; stroke: var(--ui-error); fill: var(--ui-error);" />
                                      </marker>
                                    </defs>
                                  </svg>
                                  <svg style="z-index: 0;" viewBox="0 0 192.81317138671875 96.40655517578125" width="100%" height="100%">
                                    <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="mobile-launch" aria-label="Edge from mobile to launch">
                                      <path d="M319 117.5L339 117.5L 527.5,117.5Q 532.5,117.5 532.5,122.5L532.5 209L532.5 229" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-dasharray: 6, 6; stroke-width: 1.5;" />
                                      <path d="M319 117.5L339 117.5L 527.5,117.5Q 532.5,117.5 532.5,122.5L532.5 209L532.5 229" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                                    </g>
                                  </svg>
                                  <svg style="z-index: 0;" viewBox="0 0 192.81317138671875 96.40655517578125" width="100%" height="100%">
                                    <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="launch-qa" aria-label="Edge from launch to qa">
                                      <path d="M658 277.5L 673,277.5Q 678,277.5 678,272.5L 678,232Q 678,227 683,227L 900,227Q 905,227 905,232L905 247" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-dasharray: 6, 6; stroke-width: 1.5;" />
                                      <path d="M658 277.5L 673,277.5Q 678,277.5 678,272.5L 678,232Q 678,227 683,227L 900,227Q 905,227 905,232L905 247" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                                    </g>
                                  </svg>
                                  <svg style="z-index: 0;" viewBox="0 0 192.81317138671875 96.40655517578125" width="100%" height="100%">
                                    <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="launch-design-system" aria-label="Edge from launch to design-system">
                                      <path d="M658 277.5L 673,277.5Q 678,277.5 678,272.5L 678,54Q 678,49 683,49L 835,49Q 840,49 840,54L840 69" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-dasharray: 6, 6; stroke-width: 1.5;" />
                                      <path d="M658 277.5L 673,277.5Q 678,277.5 678,272.5L 678,54Q 678,49 683,49L 835,49Q 840,49 840,54L840 69" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                                    </g>
                                  </svg>
                                  <svg style="z-index: 0;" viewBox="0 0 192.81317138671875 96.40655517578125" width="100%" height="100%">
                                    <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="api-onboarding" aria-label="Edge from api to onboarding">
                                      <path d="M274 295.5L 289,295.5Q 294,295.5 294,300.5L 294,392Q 294,397 289,397L 260,397Q 255,397 255,402L255 417" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-error); stroke-dasharray: 6, 6; stroke-width: 1.5;" />
                                      <path d="M274 295.5L 289,295.5Q 294,295.5 294,300.5L 294,392Q 294,397 289,397L 260,397Q 255,397 255,402L255 417" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                                    </g>
                                  </svg>
                                  <svg style="z-index: 0;" viewBox="0 0 192.81317138671875 96.40655517578125" width="100%" height="100%">
                                    <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="billing-launch" aria-label="Edge from billing to launch">
                                      <path d="M893 445.5L 908,445.5Q 913,445.5 913,440.5L 913,214Q 913,209 908,209L 537.5,209Q 532.5,209 532.5,214L532.5 229" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-dasharray: 6, 6; stroke-width: 1.5;" />
                                      <path d="M893 445.5L 908,445.5Q 913,445.5 913,440.5L 913,214Q 913,209 908,209L 537.5,209Q 532.5,209 532.5,214L532.5 229" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                                    </g>
                                  </svg>
                                </div>
                                <div class="workflow-canvas__edgelabel-renderer" />
                                <div class="workflow-canvas__nodes" style="position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;">
                                  <div class="workflow-canvas__node workflow-canvas__node-program nopan selectable draggable" data-id="mobile" role="group" style="z-index: 0; transform: translate(86px, 72px); pointer-events: all; visibility: visible; width: 230px;">
                                    <div class="group relative rounded-[7px] border p-3 shadow-sm backdrop-blur transition-shadow dark:bg-[var(--ui-bg-inverted)]/95 border-success/80 bg-success/5">
                                      <div data-nodeid="mobile" data-id="1-mobile-null-target" class="workflow-canvas__handle workflow-canvas__handle-top nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                      <div data-nodeid="mobile" data-id="1-mobile-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                      <p class="truncate text-xs font-medium">Mobile App Redesign</p>
                                      <p class="text-muted mt-1 text-[11px]">Project · 72%</p>
                                      <div class="mt-3 flex items-center gap-2">
                                        <span class="size-2 rounded-full bg-success" />
                                        <span class="text-xs text-success dark:text-success">On Track</span>
                                        <span class="text-muted ml-auto text-[11px]">8 issues</span>
                                      </div>
                                      <div data-nodeid="mobile" data-id="1-mobile-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                      <div data-nodeid="mobile" data-id="1-mobile-null-source" class="workflow-canvas__handle workflow-canvas__handle-bottom nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                    </div>
                                  </div>
                                  <div class="workflow-canvas__node workflow-canvas__node-program nopan selectable draggable" data-id="api" role="group" style="z-index: 0; transform: translate(46px, 250px); pointer-events: all; visibility: visible; width: 225px;">
                                    <div class="group relative rounded-[7px] border p-3 shadow-sm backdrop-blur transition-shadow dark:bg-[var(--ui-bg-inverted)]/95 border-error/80 bg-error/5">
                                      <div data-nodeid="api" data-id="1-api-null-target" class="workflow-canvas__handle workflow-canvas__handle-top nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                      <div data-nodeid="api" data-id="1-api-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                      <p class="truncate text-xs font-medium">API Stabilization</p>
                                      <p class="text-muted mt-1 text-[11px]">Dependency · 44%</p>
                                      <div class="mt-3 flex items-center gap-2">
                                        <span class="size-2 rounded-full bg-error" />
                                        <span class="text-xs text-error dark:text-error">Blocked</span>
                                        <span class="text-muted ml-auto text-[11px]">13 issues</span>
                                      </div>
                                      <div data-nodeid="api" data-id="1-api-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                      <div data-nodeid="api" data-id="1-api-null-source" class="workflow-canvas__handle workflow-canvas__handle-bottom nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                    </div>
                                  </div>
                                  <div class="workflow-canvas__node workflow-canvas__node-program nopan selectable draggable" data-id="launch" role="group" style="z-index: 0; transform: translate(410px, 232px); pointer-events: all; visibility: visible; width: 245px;">
                                    <div class="group relative rounded-[7px] border p-3 shadow-sm backdrop-blur transition-shadow dark:bg-[var(--ui-bg-inverted)]/95 border-success/80 bg-success/5">
                                      <div data-nodeid="launch" data-id="1-launch-null-target" class="workflow-canvas__handle workflow-canvas__handle-top nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                      <div data-nodeid="launch" data-id="1-launch-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                      <p class="truncate text-xs font-medium">Launch Readiness</p>
                                      <p class="text-muted mt-1 text-[11px]">Project · 68%</p>
                                      <div class="mt-3 flex items-center gap-2">
                                        <span class="size-2 rounded-full bg-success" />
                                        <span class="text-xs text-success dark:text-success">On Track</span>
                                        <span class="text-muted ml-auto text-[11px]">6 issues</span>
                                      </div>
                                      <div data-nodeid="launch" data-id="1-launch-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                      <div data-nodeid="launch" data-id="1-launch-null-source" class="workflow-canvas__handle workflow-canvas__handle-bottom nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                    </div>
                                  </div>
                                  <div class="workflow-canvas__node workflow-canvas__node-program nopan selectable draggable" data-id="design-system" role="group" style="z-index: 0; transform: translate(730px, 72px); pointer-events: all; visibility: visible; width: 220px;">
                                    <div class="group relative rounded-[7px] border p-3 shadow-sm backdrop-blur transition-shadow dark:bg-[var(--ui-bg-inverted)]/95 border-default bg-(--ui-bg-muted)/20">
                                      <div data-nodeid="design-system" data-id="1-design-system-null-target" class="workflow-canvas__handle workflow-canvas__handle-top nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                      <div data-nodeid="design-system" data-id="1-design-system-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                      <p class="truncate text-xs font-medium">Design System Rollout</p>
                                      <p class="text-muted mt-1 text-[11px]">Dependency · 58%</p>
                                      <div class="mt-3 flex items-center gap-2">
                                        <span class="size-2 rounded-full bg-(--ui-text-muted)" />
                                        <span class="text-xs text-muted">Dependency</span>
                                        <span class="text-muted ml-auto text-[11px]">4 issues</span>
                                      </div>
                                      <div data-nodeid="design-system" data-id="1-design-system-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                      <div data-nodeid="design-system" data-id="1-design-system-null-source" class="workflow-canvas__handle workflow-canvas__handle-bottom nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                    </div>
                                  </div>
                                  <div class="workflow-canvas__node workflow-canvas__node-program nopan selectable draggable" data-id="qa" role="group" style="z-index: 0; transform: translate(790px, 250px); pointer-events: all; visibility: visible; width: 230px;">
                                    <div class="group relative rounded-[7px] border p-3 shadow-sm backdrop-blur transition-shadow dark:bg-[var(--ui-bg-inverted)]/95 border-warning/80 bg-warning/5">
                                      <div data-nodeid="qa" data-id="1-qa-null-target" class="workflow-canvas__handle workflow-canvas__handle-top nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                      <div data-nodeid="qa" data-id="1-qa-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                      <p class="truncate text-xs font-medium">QA Regression Pass</p>
                                      <p class="text-muted mt-1 text-[11px]">Dependency · 51%</p>
                                      <div class="mt-3 flex items-center gap-2">
                                        <span class="size-2 rounded-full bg-warning" />
                                        <span class="text-xs text-warning dark:text-warning">At Risk</span>
                                        <span class="text-muted ml-auto text-[11px]">11 issues</span>
                                      </div>
                                      <div data-nodeid="qa" data-id="1-qa-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                      <div data-nodeid="qa" data-id="1-qa-null-source" class="workflow-canvas__handle workflow-canvas__handle-bottom nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                    </div>
                                  </div>
                                  <div class="workflow-canvas__node workflow-canvas__node-program nopan selectable draggable" data-id="onboarding" role="group" style="z-index: 0; transform: translate(120px, 420px); pointer-events: all; visibility: visible; width: 270px;">
                                    <div class="group relative rounded-[7px] border p-3 shadow-sm backdrop-blur transition-shadow dark:bg-[var(--ui-bg-inverted)]/95 border-warning/80 bg-warning/5">
                                      <div data-nodeid="onboarding" data-id="1-onboarding-null-target" class="workflow-canvas__handle workflow-canvas__handle-top nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                      <div data-nodeid="onboarding" data-id="1-onboarding-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                      <p class="truncate text-xs font-medium">Customer Onboarding Flow</p>
                                      <p class="text-muted mt-1 text-[11px]">Project · 39%</p>
                                      <div class="mt-3 flex items-center gap-2">
                                        <span class="size-2 rounded-full bg-warning" />
                                        <span class="text-xs text-warning dark:text-warning">At Risk</span>
                                        <span class="text-muted ml-auto text-[11px]">9 issues</span>
                                      </div>
                                      <div data-nodeid="onboarding" data-id="1-onboarding-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                      <div data-nodeid="onboarding" data-id="1-onboarding-null-source" class="workflow-canvas__handle workflow-canvas__handle-bottom nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                    </div>
                                  </div>
                                  <div class="workflow-canvas__node workflow-canvas__node-program nopan selectable draggable" data-id="billing" role="group" style="z-index: 0; transform: translate(665px, 400px); pointer-events: all; visibility: visible; width: 225px;">
                                    <div class="group relative rounded-[7px] border p-3 shadow-sm backdrop-blur transition-shadow dark:bg-[var(--ui-bg-inverted)]/95 border-default bg-(--ui-bg-muted)/20">
                                      <div data-nodeid="billing" data-id="1-billing-null-target" class="workflow-canvas__handle workflow-canvas__handle-top nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                      <div data-nodeid="billing" data-id="1-billing-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                      <p class="truncate text-xs font-medium">Billing Migration</p>
                                      <p class="text-muted mt-1 text-[11px]">Dependency · 63%</p>
                                      <div class="mt-3 flex items-center gap-2">
                                        <span class="size-2 rounded-full bg-(--ui-text-muted)" />
                                        <span class="text-xs text-muted">Dependency</span>
                                        <span class="text-muted ml-auto text-[11px]">5 issues</span>
                                      </div>
                                      <div data-nodeid="billing" data-id="1-billing-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                      <div data-nodeid="billing" data-id="1-billing-null-source" class="workflow-canvas__handle workflow-canvas__handle-bottom nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                    </div>
                                  </div>
                                </div>
                                <div class="workflow-canvas__viewport-portal" />
                              </div>
                            </div>
                          </div>
                          <svg class="workflow-canvas__background" style="position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; --xy-background-pattern-color-props: var(--ui-primary));" width="100%" height="100%">
                            <pattern id="pattern-1" x="5.010266940451714" y="13.674537987679656" width="15.42505133470226" height="15.42505133470226" patternUnits="userSpaceOnUse" patternTransform="translate(-7.71252566735113,-7.71252566735113)">
                              <circle cx="0.3213552361396304" cy="0.3213552361396304" r="0.3213552361396304" class="workflow-canvas__background-pattern dots" />
                            </pattern>
                            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-1)" />
                          </svg>
                          <div class="workflow-canvas__panel workflow-canvas__controls vertical overflow-hidden rounded-[6px] border shadow-sm top left border-default" aria-label="Control Panel">
                            <UButton color="neutral" variant="ghost" class="workflow-canvas__controls-button workflow-canvas__controls-zoomin" title="Zoom In" aria-label="Zoom In" type="button" @click="zoomCanvas(1, 1.15)">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100%" height="100%">
                                <path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" />
                              </svg>
                            </UButton>
                            <UButton color="neutral" variant="ghost" class="workflow-canvas__controls-button workflow-canvas__controls-zoomout" title="Zoom Out" aria-label="Zoom Out" type="button" @click="zoomCanvas(1, 1 / 1.15)">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5" width="100%" height="100%">
                                <path d="M0 0h32v4.2H0z" />
                              </svg>
                            </UButton>
                            <UButton color="neutral" variant="ghost" class="workflow-canvas__controls-button workflow-canvas__controls-fitview" title="Fit View" aria-label="Fit View" type="button" @click="fitCanvas(1)">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30" width="100%" height="100%">
                                <path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" />
                              </svg>
                            </UButton>
                          </div>
                          <div id="react-flow__node-desc-1" style="display: none;">Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.</div>
                          <div id="react-flow__edge-desc-1" style="display: none;">Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.</div>
                          <div id="react-flow__aria-live-1" style="position: absolute; width: 1px; height: 1px; margin: -1px; border: 0px; padding: 0px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(100%);" />
                        </div>
                        <div class="absolute right-3 bottom-3 left-3 flex max-h-24 flex-wrap items-center gap-x-4 gap-y-2 overflow-hidden border-t pt-3 text-xs sm:right-6 sm:bottom-6 sm:left-6 sm:max-h-none sm:gap-5 sm:pt-4 border-default">
                          <span class="flex items-center gap-2">
                            <span class="size-2 rounded-full bg-success" />
                            <span class="text-muted">On Track</span>
                          </span>
                          <span class="flex items-center gap-2">
                            <span class="size-2 rounded-full bg-warning" />
                            <span class="text-muted">At Risk</span>
                          </span>
                          <span class="flex items-center gap-2">
                            <span class="size-2 rounded-full bg-error" />
                            <span class="text-muted">Blocked</span>
                          </span>
                          <span class="flex items-center gap-2">
                            <span class="size-2 rounded-full bg-(--ui-text-muted)" />
                            <span class="text-muted">Dependency</span>
                          </span>
                          <span class="text-muted flex items-center gap-2 sm:ml-auto">
                            <span class="inline-block h-px w-7 border-t border-dashed border-default" />
                            Dependency
                          </span>
                        </div>
                      </div>
                    </section>
                    <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none overflow-hidden p-0 border-default" style="opacity: 1; transform: none;">
                      <div class="grid gap-3 px-4 py-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                        <h2 class="text-base font-semibold text-highlighted">Active Projects (7)</h2>
                        <div class="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
                          <div class="relative min-w-0 sm:w-[220px]">
                            <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                            <UInput v-model="form.searchProjects" type="text" placeholder="Search projects..." name="searchProjects" class="flex w-full md:text-sm h-8 rounded-[6px] pl-9 text-xs" :ui="{ base: 'h-full' }" />
                          </div>
                          <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default h-8 rounded-[6px] px-3 text-xs shadow-none" aria-label="View all" type="button" @click="openAction(&quot;View all&quot;)">
                            View all
                          </UButton>
                        </div>
                      </div>
                      <div class="horizontal-scrollbar overflow-x-auto border-t border-default">
                        <!-- Table 1: Projects / Status / Priority / Owner / Due date -->
                        <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="bg-default w-full min-w-[980px] border-separate border-spacing-0" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #projects-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Projects" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #projects-cell="{ row }">
                            <div class="flex items-center justify-between gap-3">
                              <div class="min-w-0">
                                <div class="flex items-center gap-3">
                                  <span class="shrink-0 text-[11px] font-medium tracking-[0.12em] text-muted uppercase dark:text-muted">{{ row.original.projectsText6 }}</span>
                                  <span class="truncate text-[13px] font-medium text-highlighted dark:text-highlighted">{{ row.original.projectsText8 }}</span>
                                </div>
                              </div>
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-7 rounded-md opacity-0 transition-opacity group-hover:opacity-100" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;, row.original._id, 1)">
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
                              <span>{{ row.original.status }}</span>
                            </UBadge>
                          </template>
                          <template #priority-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Priority" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #priority-cell="{ row }">
                            <div class="inline-flex items-center gap-2">
                              <UIcon name="i-lucide-flag" class="text-muted size-3.5" />
                              <span>{{ row.original.priority }}</span>
                            </div>
                          </template>
                          <template #owner-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Owner" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #owner-cell="{ row }">
                            <div class="inline-flex items-center gap-2">
                              <span class="relative flex shrink-0 overflow-hidden rounded-full size-6">
                                <img class="aspect-square h-full w-full" :alt="row.original.ownerAlt5" :src="row.original.ownerSrc6" loading="lazy" />
                              </span>
                              <span class="truncate text-[13px]">{{ row.original.owner }}</span>
                            </div>
                          </template>
                          <template #dueDate-header="{ column }">
                            <UButton color="neutral" variant="ghost" size="xs" label="Due date" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                          </template>
                          <template #dueDate-cell="{ row }">
                            <div class="inline-flex items-center gap-2">
                              <UIcon name="i-lucide-calendar-days" class="text-muted size-3.5" />
                              <span>{{ row.original.dueDate }}</span>
                            </div>
                          </template>
                        </UTable>
                      </div>
                    </section>
                  </div>
                  <div class="min-w-0 space-y-4">
                    <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none p-4 border-default" style="opacity: 1; transform: none;">
                      <h2 class="text-base font-semibold text-highlighted">Project Health</h2>
                      <div class="mt-5 grid grid-cols-[112px_minmax(0,1fr)] items-center gap-4 sm:grid-cols-[132px_minmax(0,1fr)]">
                        <div class="relative size-28 sm:size-32">
                          <svg viewBox="0 0 120 120" class="size-full -rotate-90" width="100%" height="100%">
                            <circle cx="60" cy="60" r="42" fill="none" stroke="var(--ui-primary)" stroke-width="18" />
                            <circle cx="60" cy="60" r="42" fill="none" stroke="var(--ui-success)" stroke-width="18" stroke-dasharray="75 264" />
                            <circle cx="60" cy="60" r="42" fill="none" stroke="var(--ui-warning)" stroke-width="18" stroke-dasharray="38 264" />
                            <circle cx="60" cy="60" r="42" fill="none" stroke="var(--ui-error)" stroke-width="18" stroke-dasharray="38 264" />
                          </svg>
                          <div class="absolute inset-0 grid place-items-center text-center">
                            <div>
                              <p class="text-2xl font-semibold text-highlighted">7</p>
                              <p class="text-muted text-[11px]">Total</p>
                            </div>
                          </div>
                        </div>
                        <div class="space-y-3">
                          <div class="flex items-center gap-3 text-xs">
                            <span class="size-2.5 rounded-full bg-success" />
                            <span class="text-muted min-w-0 flex-1">On Track</span>
                            <span class="font-medium">2</span>
                          </div>
                          <div class="flex items-center gap-3 text-xs">
                            <span class="size-2.5 rounded-full bg-warning" />
                            <span class="text-muted min-w-0 flex-1">At Risk</span>
                            <span class="font-medium">1</span>
                          </div>
                          <div class="flex items-center gap-3 text-xs">
                            <span class="size-2.5 rounded-full bg-error" />
                            <span class="text-muted min-w-0 flex-1">Blocked</span>
                            <span class="font-medium">1</span>
                          </div>
                          <div class="flex items-center gap-3 text-xs">
                            <span class="size-2.5 rounded-full bg-(--ui-text-muted)" />
                            <span class="text-muted min-w-0 flex-1">Dependency</span>
                            <span class="font-medium">3</span>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none p-4 border-default" style="opacity: 1; transform: none;">
                      <h2 class="text-base font-semibold text-highlighted">Critical Path</h2>
                      <div class="mt-5 space-y-2">
                        <div>
                          <div class="flex gap-3">
                            <span class="mt-1.5 size-2.5 rounded-full bg-error" />
                            <div class="min-w-0">
                              <p class="truncate text-xs">API Stabilization</p>
                              <p class="mt-1 text-xs text-error dark:text-error">Error budget review · Blocked</p>
                            </div>
                          </div>
                          <div class="text-muted ml-1 h-6 border-l border-default" />
                        </div>
                        <div>
                          <div class="flex gap-3">
                            <span class="mt-1.5 size-2.5 rounded-full bg-warning" />
                            <div class="min-w-0">
                              <p class="truncate text-xs">Customer Onboarding Flow</p>
                              <p class="mt-1 text-xs text-warning dark:text-warning">Usability review · At Risk</p>
                            </div>
                          </div>
                          <div class="text-muted ml-1 h-6 border-l border-default" />
                        </div>
                        <div>
                          <div class="flex gap-3">
                            <span class="mt-1.5 size-2.5 rounded-full bg-success" />
                            <div class="min-w-0">
                              <p class="truncate text-xs">Launch Readiness</p>
                              <p class="mt-1 text-xs text-success dark:text-success">Beta release · On Track</p>
                            </div>
                          </div>
                          <div class="text-muted ml-1 h-6 border-l border-default" />
                        </div>
                        <div>
                          <div class="flex gap-3">
                            <span class="mt-1.5 size-2.5 rounded-full bg-warning" />
                            <div class="min-w-0">
                              <p class="truncate text-xs">QA Regression Pass</p>
                              <p class="mt-1 text-xs text-warning dark:text-warning">Regression freeze · At Risk</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none p-4 border-default" style="opacity: 1; transform: none;">
                      <h2 class="text-base font-semibold text-highlighted">Needs Attention</h2>
                      <div class="mt-5 rounded-[7px] border border-error/20 bg-error/5 p-3">
                        <p class="text-sm font-medium text-error dark:text-error">API Stabilization is blocked</p>
                        <p class="text-muted mt-2 text-xs leading-5">13 open issues are delaying Customer Onboarding Flow and the next launch readiness review.</p>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default mt-3 h-8 rounded-[6px] px-2 text-xs text-error dark:text-error" aria-label="View details" type="button" @click="openAction(&quot;View details&quot;)">
                          View details
                          <UIcon name="i-lucide-chevron-right" class="size-3.5" />
                        </UButton>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </main>
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

.workflow-canvas { position: relative; overflow: hidden; touch-action: none; }
.workflow-canvas__renderer, .workflow-canvas__pane, .workflow-canvas__container { position: absolute; inset: 0; }
.workflow-canvas__viewport { transform-origin: 0 0; z-index: 2; }
.workflow-canvas__nodes, .workflow-canvas__edges, .workflow-canvas__edgelabel-renderer { position: absolute; inset: 0; pointer-events: none; }
.workflow-canvas__node { position: absolute; user-select: none; pointer-events: auto; cursor: grab; }
.workflow-canvas__node:active { cursor: grabbing; }
.workflow-canvas__edges svg { position: absolute; width: 100%; height: 100%; overflow: visible; }
.workflow-canvas__edge-path { fill: none; stroke: var(--ui-text-muted); stroke-width: 1.5; }
.workflow-canvas__edge-interaction { fill: none; stroke-opacity: 0; }
.workflow-canvas__background-pattern { fill: var(--ui-border-accented); }
.workflow-canvas__handle { position: absolute; width: 6px; height: 6px; border-radius: 100%; background: var(--ui-text-muted); }
.workflow-canvas__handle-left { left: 0; top: 50%; transform: translate(-50%, -50%); }
.workflow-canvas__handle-right { right: 0; top: 50%; transform: translate(50%, -50%); }
.workflow-canvas__handle-top { top: 0; left: 50%; transform: translate(-50%, -50%); }
.workflow-canvas__handle-bottom { bottom: 0; left: 50%; transform: translate(-50%, 50%); }
.workflow-canvas__panel { position: absolute; z-index: 5; margin: 12px; }
.workflow-canvas__panel.top { top: 0; }
.workflow-canvas__panel.bottom { bottom: 0; }
.workflow-canvas__panel.left { left: 0; }
.workflow-canvas__panel.right { right: 0; }
.workflow-canvas__controls { display: flex; flex-direction: column; }
.workflow-canvas__controls button { padding: 8px; }
.workflow-canvas__controls svg { width: 14px; height: 14px; }
.workflow-canvas__attribution { font-size: 10px; opacity: 0.6; }
</style>
