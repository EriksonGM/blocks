<!-- Page: /project-management/project-detail-2 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Project Detail 2 · Blocks Admin" })

const toast = useToast()

const actionDialog = reactive({ open: false, title: '', mode: 'edit', name: '', description: '', recordId: '', table: 0 })
function openAction(label: string, recordId = '', table = 0) {
  Object.assign(actionDialog, { open: true, title: label, mode: /delete|remove|archive/i.test(label) ? 'delete' : 'edit', recordId, table })
}
function confirmAction() {
  toast.add({ title: actionDialog.mode === 'delete' ? 'Item removed' : 'Changes saved', color: 'success', icon: 'i-lucide-check' })
  actionDialog.open = false
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/project-detail-2">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default flex h-full min-h-0 flex-1 flex-col overflow-hidden">
          <div class="flex min-h-0 w-full max-w-full flex-1 flex-col overflow-x-hidden overflow-y-auto xl:flex-row xl:overflow-hidden">
            <div class="flex max-w-full min-w-0 flex-1 flex-col xl:overflow-hidden">
              <div class="border-default flex min-h-14 items-center justify-between gap-3 border-b px-4 sm:px-6 lg:px-8">
                <div class="text-muted flex min-w-0 items-center gap-2 text-sm sm:gap-3">
                  <span class="shrink-0">Projects</span>
                  <UIcon name="i-lucide-chevron-right" class="size-4 shrink-0" />
                  <span class="hidden shrink-0 min-[390px]:inline">Program</span>
                  <UIcon name="i-lucide-chevron-right" class="hidden size-4 shrink-0 min-[390px]:inline" />
                  <span class="hidden shrink-0 sm:inline">Build track</span>
                  <UIcon name="i-lucide-chevron-right" class="hidden size-4 shrink-0 sm:inline" />
                  <span class="text-highlighted truncate font-medium">Internal PM System</span>
                </div>
                <div class="flex shrink-0 items-center gap-2">
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-9 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                    <UIcon name="i-lucide-star" class="size-4" />
                  </UButton>
                  <UButton color="neutral" variant="outline" class="items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default px-3 text-xs hidden h-9 gap-2 rounded-md min-[390px]:inline-flex" aria-label="Share" type="button" @click="openAction(&quot;Share&quot;)">
                    <UIcon name="i-lucide-share-2" class="size-4" />
                    Share
                  </UButton>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-9 rounded-md" aria-label="Open project details" type="button" @click="openAction(&quot;Open project details&quot;)">
                    <UIcon name="i-lucide-ellipsis" class="size-4" />
                  </UButton>
                </div>
              </div>
              <div class="min-h-0 flex-1 xl:overflow-y-auto">
                <div class="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-5 sm:gap-5 sm:px-6 sm:py-6 lg:px-8">
                  <section class="space-y-4">
                    <h1 class="text-2xl leading-tight font-semibold tracking-tight sm:text-3xl text-highlighted">Internal PM System</h1>
                    <div class="flex flex-wrap items-center gap-2">
                      <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm bg-primary/10 text-primary hover:bg-primary/10 border-none border-default">Build track</div>
                      <div class="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted gap-1.5 rounded-md border-default">
                        <UIcon name="i-lucide-users" class="size-3.5" />
                        2 contributors
                      </div>
                      <div class="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted gap-1.5 rounded-md border-default">
                        <UIcon name="i-lucide-settings" class="size-3.5" />
                        Ops system
                      </div>
                    </div>
                    <div class="grid grid-cols-2 gap-x-4 gap-y-3 text-sm sm:flex sm:flex-wrap sm:items-center sm:gap-x-8">
                      <span class="flex min-w-0 items-center gap-2">
                        <UIcon name="i-lucide-file-text" class="text-muted size-4 shrink-0" />
                        <span class="truncate">PM-OPS-02</span>
                      </span>
                      <span class="flex min-w-0 items-center gap-2">
                        <span class="border-chart-2 size-3 shrink-0 rounded-full border-2" />
                        <span class="truncate">Medium</span>
                      </span>
                      <span class="text-muted flex min-w-0 items-center gap-2">
                        <UIcon name="i-lucide-link-2" class="size-4 shrink-0" />
                        <span class="text-highlighted truncate">United States</span>
                      </span>
                      <span class="text-muted flex min-w-0 items-center gap-2">
                        <UIcon name="i-lucide-git-branch" class="size-4 shrink-0" />
                        <span class="text-highlighted truncate">Improvement 4 weeks</span>
                      </span>
                      <span class="text-muted flex min-w-0 items-center gap-2">
                        <UIcon name="i-lucide-clock-3" class="size-4 shrink-0" />
                        <span class="text-highlighted truncate">Just now</span>
                      </span>
                    </div>
                  </section>
                  <section class="bg-muted overflow-hidden rounded-[14px] border p-1 border-default">
                    <div class="grid grid-cols-2 gap-1 md:grid-cols-4">
                      <div class="bg-default flex min-h-24 flex-col justify-between rounded-[10px] border p-3.5 sm:p-4 border-default">
                        <div class="text-muted flex items-center gap-2 text-sm">
                          Timeline health
                          <UIcon name="i-lucide-info" class="size-3.5" />
                        </div>
                        <div class="flex items-end justify-between gap-3">
                          <p class="text-2xl font-semibold tracking-tight text-highlighted">
                            20
                            <span class="text-muted text-sm">%</span>
                          </p>
                          <span class="bg-muted text-muted grid size-5 place-items-center rounded-full">
                            <UIcon name="i-lucide-git-branch" class="size-3" />
                          </span>
                        </div>
                      </div>
                      <div class="bg-default flex min-h-24 flex-col justify-between rounded-[10px] border p-3.5 sm:p-4 border-default">
                        <p class="text-muted flex items-center gap-2 text-sm">
                          <UIcon name="i-lucide-calendar-days" class="size-4" />
                          Due date
                        </p>
                        <div class="flex items-end justify-between gap-3">
                          <p class="text-2xl font-semibold tracking-tight text-highlighted">02 Feb</p>
                          <UIcon name="i-lucide-clock-3" class="text-muted size-4" />
                        </div>
                      </div>
                      <div class="bg-default flex min-h-24 flex-col justify-between rounded-[10px] border p-3.5 sm:p-4 border-default">
                        <p class="text-muted flex items-center gap-2 text-sm">
                          <UIcon name="i-lucide-circle-check" class="size-4" />
                          Tasks closed
                        </p>
                        <div class="flex items-end justify-between gap-3">
                          <p class="text-2xl font-semibold tracking-tight text-highlighted">
                            1
                            <span class="text-muted text-sm">/ 6</span>
                          </p>
                          <UIcon name="i-lucide-circle-check" class="text-muted size-4" />
                        </div>
                      </div>
                      <div class="bg-default flex min-h-24 flex-col justify-between rounded-[10px] border p-3.5 sm:p-4 border-default">
                        <p class="text-muted flex items-center gap-2 text-sm">
                          <UIcon name="i-lucide-file" class="size-4" />
                          Project files
                        </p>
                        <div class="flex items-end justify-between gap-3">
                          <p class="text-2xl font-semibold tracking-tight text-highlighted">6</p>
                          <UIcon name="i-lucide-file-text" class="text-muted size-4" />
                        </div>
                      </div>
                    </div>
                    <div class="bg-default text-muted mt-1 flex flex-wrap gap-x-3 gap-y-1 rounded-[10px] border px-4 py-2.5 text-sm border-default">
                      <span>
                        Delivery confidence:
                        <span class="text-highlighted font-medium">At risk</span>
                      </span>
                      <span>Due in 5 days</span>
                      <span>17% completed</span>
                    </div>
                  </section>
                  <section class="bg-default overflow-hidden rounded-[14px] border border-default">
                    <div class="md:hidden">
                      <div class="grid grid-cols-6 border-b border-default">
                        <div class="border-default min-h-20 px-4 py-3 col-span-2 border-b border-r">
                          <p class="text-muted text-xs">Issues</p>
                          <p class="mt-1 text-xl font-semibold tracking-tight text-highlighted">6</p>
                        </div>
                        <div class="border-default min-h-20 px-4 py-3 col-span-2 border-b border-r">
                          <p class="text-muted text-xs">In progress</p>
                          <p class="mt-1 text-xl font-semibold tracking-tight text-highlighted">1</p>
                        </div>
                        <div class="border-default min-h-20 px-4 py-3 col-span-2 border-b">
                          <p class="text-muted text-xs">Links sent</p>
                          <p class="mt-1 text-xl font-semibold tracking-tight text-highlighted">3</p>
                        </div>
                        <div class="border-default min-h-20 px-4 py-3 col-span-3 border-r">
                          <p class="text-muted text-xs">Blocked</p>
                          <p class="mt-1 text-xl font-semibold tracking-tight text-highlighted">1</p>
                        </div>
                        <div class="border-default min-h-20 px-4 py-3 col-span-3">
                          <p class="text-muted text-xs">Done</p>
                          <p class="mt-1 text-xl font-semibold tracking-tight text-highlighted">1</p>
                        </div>
                      </div>
                      <div class="relative h-32 border-b border-default">
                        <svg class="pointer-events-none absolute inset-x-0 top-6 h-20 w-full" viewBox="0 0 1000 150" preserveAspectRatio="none" width="100%" height="100%">
                          <defs>
                            <linearGradient id="project-detail-flow-gradient-mobile" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%" stop-color="var(--ui-primary)" stop-opacity="0.06" />
                              <stop offset="22%" stop-color="var(--ui-primary)" stop-opacity="0.1" />
                              <stop offset="45%" stop-color="var(--ui-primary)" stop-opacity="0.18" />
                              <stop offset="70%" stop-color="var(--ui-primary)" stop-opacity="0.34" />
                              <stop offset="100%" stop-color="var(--ui-primary)" stop-opacity="0.62" />
                            </linearGradient>
                          </defs>
                          <path d="M0 38 C62 29 112 31 158 39 C206 48 238 58 300 61 C354 64 382 55 430 56 C486 58 524 70 586 73 C646 76 684 68 742 69 C804 70 838 82 900 85 C942 87 972 84 1000 85 L1000 106 C940 105 902 111 846 112 C792 113 758 104 704 103 C640 102 600 112 538 111 C476 110 434 100 376 100 C318 100 276 111 216 109 C158 107 120 97 66 100 C38 101 16 105 0 106 Z" fill="url(#project-detail-flow-gradient-mobile)" />
                        </svg>
                        <div class="pointer-events-none absolute inset-x-4 top-[62px]">
                          <span class="bg-default text-muted absolute -translate-x-1/2 rounded-full border px-1.5 py-0.5 text-[11px] font-medium shadow-sm border-default" style="left:24%">17%</span>
                          <span class="bg-default text-muted absolute -translate-x-1/2 rounded-full border px-1.5 py-0.5 text-[11px] font-medium shadow-sm border-default" style="left:45%">50%</span>
                          <span class="bg-default text-muted absolute -translate-x-1/2 rounded-full border px-1.5 py-0.5 text-[11px] font-medium shadow-sm border-default" style="left:64%">33%</span>
                          <span class="bg-default text-muted absolute -translate-x-1/2 rounded-full border px-1.5 py-0.5 text-[11px] font-medium shadow-sm border-default" style="left:84%">17%</span>
                        </div>
                      </div>
                    </div>
                    <div class="relative hidden min-h-[230px] md:grid md:grid-cols-5">
                      <div class="min-h-[230px] border-b p-4 md:border-r md:border-b-0 md:last:border-r-0 border-default">
                        <p class="text-muted text-sm">Issues</p>
                        <p class="mt-2 text-lg font-semibold tracking-tight text-highlighted">6</p>
                      </div>
                      <div class="min-h-[230px] border-b p-4 md:border-r md:border-b-0 md:last:border-r-0 border-default">
                        <p class="text-muted text-sm">In progress</p>
                        <p class="mt-2 text-lg font-semibold tracking-tight text-highlighted">1</p>
                      </div>
                      <div class="min-h-[230px] border-b p-4 md:border-r md:border-b-0 md:last:border-r-0 border-default">
                        <p class="text-muted text-sm">Links sent</p>
                        <p class="mt-2 text-lg font-semibold tracking-tight text-highlighted">3</p>
                      </div>
                      <div class="min-h-[230px] border-b p-4 md:border-r md:border-b-0 md:last:border-r-0 border-default">
                        <p class="text-muted text-sm">Blocked</p>
                        <p class="mt-2 text-lg font-semibold tracking-tight text-highlighted">1</p>
                      </div>
                      <div class="min-h-[230px] border-b p-4 md:border-r md:border-b-0 md:last:border-r-0 border-default">
                        <p class="text-muted text-sm">Done</p>
                        <p class="mt-2 text-lg font-semibold tracking-tight text-highlighted">1</p>
                      </div>
                      <svg class="pointer-events-none absolute inset-x-0 top-16 bottom-0 h-[150px] w-full" viewBox="0 0 1000 150" preserveAspectRatio="none" width="100%" height="100%">
                        <defs>
                          <linearGradient id="project-detail-flow-gradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stop-color="var(--ui-primary)" stop-opacity="0.06" />
                            <stop offset="22%" stop-color="var(--ui-primary)" stop-opacity="0.1" />
                            <stop offset="45%" stop-color="var(--ui-primary)" stop-opacity="0.18" />
                            <stop offset="70%" stop-color="var(--ui-primary)" stop-opacity="0.34" />
                            <stop offset="100%" stop-color="var(--ui-primary)" stop-opacity="0.62" />
                          </linearGradient>
                        </defs>
                        <path d="M0 38 C62 29 112 31 158 39 C206 48 238 58 300 61 C354 64 382 55 430 56 C486 58 524 70 586 73 C646 76 684 68 742 69 C804 70 838 82 900 85 C942 87 972 84 1000 85 L1000 106 C940 105 902 111 846 112 C792 113 758 104 704 103 C640 102 600 112 538 111 C476 110 434 100 376 100 C318 100 276 111 216 109 C158 107 120 97 66 100 C38 101 16 105 0 106 Z" fill="url(#project-detail-flow-gradient)" />
                      </svg>
                      <div class="pointer-events-none absolute inset-x-0 top-[126px]">
                        <span class="bg-default text-muted absolute -translate-x-1/2 rounded-full border px-2.5 py-1 text-xs font-medium shadow-sm border-default" style="left:24%">17% →</span>
                        <span class="bg-default text-muted absolute -translate-x-1/2 rounded-full border px-2.5 py-1 text-xs font-medium shadow-sm border-default" style="left:45%">50% →</span>
                        <span class="bg-default text-muted absolute -translate-x-1/2 rounded-full border px-2.5 py-1 text-xs font-medium shadow-sm border-default" style="left:64%">33% →</span>
                        <span class="bg-default text-muted absolute -translate-x-1/2 rounded-full border px-2.5 py-1 text-xs font-medium shadow-sm border-default" style="left:84%">17% →</span>
                      </div>
                    </div>
                    <div class="text-muted flex flex-wrap items-center gap-2 border-t px-4 py-3 text-sm border-default">
                      <UIcon name="i-lucide-lightbulb" class="text-primary size-4" />
                      <span>
                        <span class="text-primary font-medium">Insight:</span>
                         1 blocker is slowing delivery validation.
                      </span>
                      <span class="text-(--ui-border) hidden sm:inline">•</span>
                      <UButton color="neutral" variant="ghost" class="text-primary font-medium" aria-label="Review dependency path" type="button" @click="openAction(&quot;Review dependency path&quot;)">
                        Review dependency path
                      </UButton>
                    </div>
                  </section>
                  <div class="flex items-center gap-6 overflow-x-auto border-b px-1 text-sm sm:gap-8 sm:px-3 border-default">
                    <UButton color="neutral" variant="outline" class="shrink-0 border-b-2 py-3 text-muted border-transparent" aria-label="Overview" type="button" @click="openAction(&quot;Overview&quot;)">
                      Overview
                    </UButton>
                    <UButton color="neutral" variant="outline" class="shrink-0 border-b-2 py-3 text-muted border-transparent" aria-label="Tasks" type="button" @click="openAction(&quot;Tasks&quot;)">
                      Tasks
                    </UButton>
                    <UButton color="neutral" variant="outline" class="shrink-0 border-b-2 py-3 text-muted border-transparent" aria-label="Issues" type="button" @click="openAction(&quot;Issues&quot;)">
                      Issues
                    </UButton>
                    <UButton color="neutral" variant="outline" class="shrink-0 border-b-2 py-3 border-(--ui-text-highlighted) font-semibold" aria-label="Dependencies" type="button" @click="openAction(&quot;Dependencies&quot;)">
                      Dependencies
                    </UButton>
                    <UButton color="neutral" variant="outline" class="shrink-0 border-b-2 py-3 text-muted border-transparent" aria-label="Timeline" type="button" @click="openAction(&quot;Timeline&quot;)">
                      Timeline
                    </UButton>
                    <UButton color="neutral" variant="outline" class="shrink-0 border-b-2 py-3 text-muted border-transparent" aria-label="Activity" type="button" @click="openAction(&quot;Activity&quot;)">
                      Activity
                    </UButton>
                    <UButton color="neutral" variant="outline" class="shrink-0 border-b-2 py-3 text-muted border-transparent" aria-label="Comments" type="button" @click="openAction(&quot;Comments&quot;)">
                      Comments
                    </UButton>
                  </div>
                  <section class="bg-default overflow-hidden border-y border-default">
                    <div class="relative h-[320px] overflow-hidden sm:h-[360px]">
                      <!-- Workflow canvas 1: local pointer and zoom handlers -->
                      <div class="workflow-canvas !bg-default [&amp;_.workflow-canvas__controls]:!bg-default [&amp;_.workflow-canvas__controls-button]:!border-default [&amp;_.workflow-canvas__controls-button]:!bg-default [&amp;_.workflow-canvas__controls-button]:!text-highlighted [&amp;_.workflow-canvas__attribution]:hidden [&amp;_.workflow-canvas__controls]:!flex [&amp;_.workflow-canvas__controls]:!flex-row [&amp;_.workflow-canvas__controls]:!overflow-hidden [&amp;_.workflow-canvas__controls]:!rounded-md [&amp;_.workflow-canvas__controls]:!border [&amp;_.workflow-canvas__controls]:!shadow-sm [&amp;_.workflow-canvas__controls-button]:!size-8 [&amp;_.workflow-canvas__panel]:!m-3 sm:[&amp;_.workflow-canvas__panel]:!m-5 light" style="width: 100%; height: 100%; overflow: hidden; position: relative; z-index: 0;" role="application" :ref="element => setCanvasRoot(1, element)" @pointerdown="canvasPointerDown(1, $event)" @pointermove="canvasPointerMove($event)" @pointerup="canvasDrag = undefined" @pointercancel="canvasDrag = undefined" @wheel.ctrl.prevent="zoomCanvas(1, $event.deltaY < 0 ? 1.1 : 1 / 1.1)">
                        <div class="workflow-canvas__renderer" style="position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;">
                          <div class="workflow-canvas__pane draggable" style="position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;">
                            <div class="workflow-canvas__viewport workflow-canvas__viewport workflow-canvas__container" style="transform: translate(18.3333px, 58.45px) scale(0.566667);">
                              <div class="workflow-canvas__edges">
                                <svg class="workflow-canvas__marker" width="100%" height="100%">
                                  <defs>
                                    <marker class="workflow-canvas__arrowhead" id="1__color=var(--muted-foreground)&amp;type=arrowclosed">
                                      <polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4" style="stroke-width: 1; stroke: var(--ui-text-muted); fill: var(--ui-text-muted);" />
                                    </marker>
                                  </defs>
                                </svg>
                                <svg style="z-index: 0;" viewBox="0 0 169.99996948242188 85" width="100%" height="100%">
                                  <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="discovery-core" aria-label="Edge from discovery to core">
                                    <path d="M293 109L313 109L 320,109Q 325,109 325,114L 325,209Q 325,214 330,214L337 214L357 214" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-dasharray: 6, 6; stroke-width: 1.5;" />
                                    <path d="M293 109L313 109L 320,109Q 325,109 325,114L 325,209Q 325,214 330,214L337 214L357 214" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                                  </g>
                                </svg>
                                <svg style="z-index: 0;" viewBox="0 0 169.99996948242188 85" width="100%" height="100%">
                                  <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="assets-core" aria-label="Edge from assets to core">
                                    <path d="M283 307L303 307L 315,307Q 320,307 320,302L 320,219Q 320,214 325,214L337 214L357 214" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-dasharray: 6, 6; stroke-width: 1.5;" />
                                    <path d="M283 307L303 307L 315,307Q 320,307 320,302L 320,219Q 320,214 325,214L337 214L357 214" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                                  </g>
                                </svg>
                                <svg style="z-index: 0;" viewBox="0 0 169.99996948242188 85" width="100%" height="100%">
                                  <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="core-design" aria-label="Edge from core to design">
                                    <path d="M623 214L643 214L 685,214Q 690,214 690,209L 690,84Q 690,79 695,79L737 79L757 79" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-dasharray: 6, 6; stroke-width: 1.5;" />
                                    <path d="M623 214L643 214L 685,214Q 690,214 690,209L 690,84Q 690,79 695,79L737 79L757 79" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                                  </g>
                                </svg>
                                <svg style="z-index: 0;" viewBox="0 0 169.99996948242188 85" width="100%" height="100%">
                                  <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="core-engineering" aria-label="Edge from core to engineering">
                                    <path d="M623 214L643 214L 687.5,214Q 690,214 690,211.5L 690,211.5Q 690,209 692.5,209L737 209L757 209" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-dasharray: 6, 6; stroke-width: 1.5;" />
                                    <path d="M623 214L643 214L 687.5,214Q 690,214 690,211.5L 690,211.5Q 690,209 692.5,209L737 209L757 209" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                                  </g>
                                </svg>
                                <svg style="z-index: 0;" viewBox="0 0 169.99996948242188 85" width="100%" height="100%">
                                  <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="core-notes" aria-label="Edge from core to notes">
                                    <path d="M623 214L643 214L 685,214Q 690,214 690,219L 690,347Q 690,352 695,352L737 352L757 352" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-dasharray: 6, 6; stroke-width: 1.5;" />
                                    <path d="M623 214L643 214L 685,214Q 690,214 690,219L 690,347Q 690,352 695,352L737 352L757 352" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                                  </g>
                                </svg>
                                <svg style="z-index: 0;" viewBox="0 0 169.99996948242188 85" width="100%" height="100%">
                                  <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="design-rollout" aria-label="Edge from design to rollout">
                                    <path d="M1023 79L1043 79L 1046.5,79Q 1050,79 1050,82.5L 1050,220.5Q 1050,224 1053.5,224L1057 224L1077 224" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-dasharray: 6, 6; stroke-width: 1.5;" />
                                    <path d="M1023 79L1043 79L 1046.5,79Q 1050,79 1050,82.5L 1050,220.5Q 1050,224 1053.5,224L1057 224L1077 224" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                                  </g>
                                </svg>
                                <svg style="z-index: 0;" viewBox="0 0 169.99996948242188 85" width="100%" height="100%">
                                  <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="engineering-rollout" aria-label="Edge from engineering to rollout">
                                    <path d="M1023 209L1043 209L 1046.5,209Q 1050,209 1050,212.5L 1050,220.5Q 1050,224 1053.5,224L1057 224L1077 224" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-dasharray: 6, 6; stroke-width: 1.5;" />
                                    <path d="M1023 209L1043 209L 1046.5,209Q 1050,209 1050,212.5L 1050,220.5Q 1050,224 1053.5,224L1057 224L1077 224" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                                  </g>
                                </svg>
                                <svg style="z-index: 0;" viewBox="0 0 169.99996948242188 85" width="100%" height="100%">
                                  <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="notes-rollout" aria-label="Edge from notes to rollout">
                                    <path d="M1023 352L1043 352L 1046.5,352Q 1050,352 1050,348.5L 1050,227.5Q 1050,224 1053.5,224L1057 224L1077 224" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-dasharray: 6, 6; stroke-width: 1.5;" />
                                    <path d="M1023 352L1043 352L 1046.5,352Q 1050,352 1050,348.5L 1050,227.5Q 1050,224 1053.5,224L1057 224L1077 224" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                                  </g>
                                </svg>
                              </div>
                              <div class="workflow-canvas__edgelabel-renderer" />
                              <div class="workflow-canvas__nodes" style="position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;">
                                <div class="workflow-canvas__node workflow-canvas__node-dependency nopan selectable draggable" data-id="discovery" role="group" style="z-index: 0; transform: translate(40px, 70px); pointer-events: all; visibility: visible; width: 250px;">
                                  <div class="group bg-default relative rounded-md border px-4 py-3 shadow-sm border-default">
                                    <div data-nodeid="discovery" data-id="1-discovery-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                    <div data-nodeid="discovery" data-id="1-discovery-null-target" class="workflow-canvas__handle workflow-canvas__handle-top nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                    <div class="flex min-w-0 items-center gap-2">
                                      <span class="size-2.5 shrink-0 rounded-full bg-chart-1" />
                                      <p class="truncate text-sm font-medium">Initial discovery &amp; alignment</p>
                                    </div>
                                    <div class="mt-3 flex items-center">
                                      <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) -mr-1 size-5 border border-default">
                                        <img class="aspect-square h-full w-full" alt="" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                                      </span>
                                      <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) -mr-1 size-5 border border-default">
                                        <img class="aspect-square h-full w-full" alt="" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                                      </span>
                                      <span class="bg-muted text-muted ml-2 grid size-5 place-items-center rounded-full text-[10px]">+1</span>
                                    </div>
                                    <div data-nodeid="discovery" data-id="1-discovery-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                    <div data-nodeid="discovery" data-id="1-discovery-null-source" class="workflow-canvas__handle workflow-canvas__handle-bottom nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                  </div>
                                </div>
                                <div class="workflow-canvas__node workflow-canvas__node-dependency nopan selectable draggable" data-id="assets" role="group" style="z-index: 0; transform: translate(40px, 270px); pointer-events: all; visibility: visible; width: 240px;">
                                  <div class="group bg-default relative rounded-md border px-4 py-3 shadow-sm border-default">
                                    <div data-nodeid="assets" data-id="1-assets-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                    <div data-nodeid="assets" data-id="1-assets-null-target" class="workflow-canvas__handle workflow-canvas__handle-top nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                    <div class="flex min-w-0 items-center gap-2">
                                      <span class="size-2.5 shrink-0 rounded-full bg-(--ui-text-muted)/50" />
                                      <p class="truncate text-sm font-medium">Client assets and files</p>
                                    </div>
                                    <div class="text-muted mt-3 flex items-center gap-2 text-xs">
                                      <UIcon name="i-lucide-package" class="size-3.5" />
                                      External
                                    </div>
                                    <div data-nodeid="assets" data-id="1-assets-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                    <div data-nodeid="assets" data-id="1-assets-null-source" class="workflow-canvas__handle workflow-canvas__handle-bottom nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                  </div>
                                </div>
                                <div class="workflow-canvas__node workflow-canvas__node-dependency nopan selectable draggable" data-id="core" role="group" style="z-index: 0; transform: translate(360px, 175px); pointer-events: all; visibility: visible; width: 260px;">
                                  <div class="group bg-default relative rounded-md border px-4 py-3 shadow-sm border-primary ring-primary ring-1">
                                    <div data-nodeid="core" data-id="1-core-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                    <div data-nodeid="core" data-id="1-core-null-target" class="workflow-canvas__handle workflow-canvas__handle-top nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                    <div class="flex min-w-0 items-center gap-2">
                                      <span class="size-2.5 shrink-0 rounded-full bg-chart-2" />
                                      <p class="truncate text-sm font-medium">Internal PM System</p>
                                    </div>
                                    <div class="mt-3 flex items-center">
                                      <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) -mr-1 size-5 border border-default">
                                        <img class="aspect-square h-full w-full" alt="" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                                      </span>
                                      <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) -mr-1 size-5 border border-default">
                                        <img class="aspect-square h-full w-full" alt="" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                                      </span>
                                      <span class="bg-muted text-muted ml-2 grid size-5 place-items-center rounded-full text-[10px]">+1</span>
                                    </div>
                                    <div data-nodeid="core" data-id="1-core-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                    <div data-nodeid="core" data-id="1-core-null-source" class="workflow-canvas__handle workflow-canvas__handle-bottom nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                  </div>
                                </div>
                                <div class="workflow-canvas__node workflow-canvas__node-dependency nopan selectable draggable" data-id="design" role="group" style="z-index: 0; transform: translate(760px, 40px); pointer-events: all; visibility: visible; width: 260px;">
                                  <div class="group bg-default relative rounded-md border px-4 py-3 shadow-sm border-default">
                                    <div data-nodeid="design" data-id="1-design-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                    <div data-nodeid="design" data-id="1-design-null-target" class="workflow-canvas__handle workflow-canvas__handle-top nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                    <div class="flex min-w-0 items-center gap-2">
                                      <span class="size-2.5 shrink-0 rounded-full bg-chart-2" />
                                      <p class="truncate text-sm font-medium">Design &amp; validation</p>
                                    </div>
                                    <div class="mt-3 flex items-center">
                                      <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) -mr-1 size-5 border border-default">
                                        <img class="aspect-square h-full w-full" alt="" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                                      </span>
                                      <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) -mr-1 size-5 border border-default">
                                        <img class="aspect-square h-full w-full" alt="" src="/reference/247ac7c76922347b.png" loading="lazy" />
                                      </span>
                                    </div>
                                    <div data-nodeid="design" data-id="1-design-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                    <div data-nodeid="design" data-id="1-design-null-source" class="workflow-canvas__handle workflow-canvas__handle-bottom nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                  </div>
                                </div>
                                <div class="workflow-canvas__node workflow-canvas__node-dependency nopan selectable draggable" data-id="engineering" role="group" style="z-index: 0; transform: translate(760px, 170px); pointer-events: all; visibility: visible; width: 260px;">
                                  <div class="group bg-default relative rounded-md border px-4 py-3 shadow-sm border-default">
                                    <div data-nodeid="engineering" data-id="1-engineering-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                    <div data-nodeid="engineering" data-id="1-engineering-null-target" class="workflow-canvas__handle workflow-canvas__handle-top nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                    <div class="flex min-w-0 items-center gap-2">
                                      <span class="size-2.5 shrink-0 rounded-full bg-chart-1" />
                                      <p class="truncate text-sm font-medium">Engineering delivery</p>
                                    </div>
                                    <div class="mt-3 flex items-center">
                                      <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) -mr-1 size-5 border border-default">
                                        <img class="aspect-square h-full w-full" alt="" src="/reference/ada84674117f0188.png" loading="lazy" />
                                      </span>
                                      <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) -mr-1 size-5 border border-default">
                                        <img class="aspect-square h-full w-full" alt="" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                                      </span>
                                      <span class="bg-muted text-muted ml-2 grid size-5 place-items-center rounded-full text-[10px]">+2</span>
                                    </div>
                                    <div data-nodeid="engineering" data-id="1-engineering-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                    <div data-nodeid="engineering" data-id="1-engineering-null-source" class="workflow-canvas__handle workflow-canvas__handle-bottom nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                  </div>
                                </div>
                                <div class="workflow-canvas__node workflow-canvas__node-dependency nopan selectable draggable" data-id="notes" role="group" style="z-index: 0; transform: translate(760px, 315px); pointer-events: all; visibility: visible; width: 260px;">
                                  <div class="group bg-default relative rounded-md border px-4 py-3 shadow-sm border-default">
                                    <div data-nodeid="notes" data-id="1-notes-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                    <div data-nodeid="notes" data-id="1-notes-null-target" class="workflow-canvas__handle workflow-canvas__handle-top nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                    <div class="flex min-w-0 items-center gap-2">
                                      <span class="size-2.5 shrink-0 rounded-full bg-(--ui-text-muted)/50" />
                                      <p class="truncate text-sm font-medium">Stakeholder notes</p>
                                    </div>
                                    <div class="text-muted mt-3 flex items-center gap-2 text-xs">
                                      <UIcon name="i-lucide-package" class="size-3.5" />
                                      External
                                    </div>
                                    <div data-nodeid="notes" data-id="1-notes-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                    <div data-nodeid="notes" data-id="1-notes-null-source" class="workflow-canvas__handle workflow-canvas__handle-bottom nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                  </div>
                                </div>
                                <div class="workflow-canvas__node workflow-canvas__node-dependency nopan selectable draggable" data-id="rollout" role="group" style="z-index: 0; transform: translate(1080px, 185px); pointer-events: all; visibility: visible; width: 190px;">
                                  <div class="group bg-default relative rounded-md border px-4 py-3 shadow-sm border-default">
                                    <div data-nodeid="rollout" data-id="1-rollout-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                    <div data-nodeid="rollout" data-id="1-rollout-null-target" class="workflow-canvas__handle workflow-canvas__handle-top nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 target connectable connectablestart connectableend connectionindicator" />
                                    <div class="flex min-w-0 items-center gap-2">
                                      <span class="size-2.5 shrink-0 rounded-full bg-chart-2" />
                                      <p class="truncate text-sm font-medium">QA and rollout</p>
                                    </div>
                                    <div class="mt-3 flex items-center">
                                      <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) -mr-1 size-5 border border-default">
                                        <img class="aspect-square h-full w-full" alt="" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                                      </span>
                                      <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) -mr-1 size-5 border border-default">
                                        <img class="aspect-square h-full w-full" alt="" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                                      </span>
                                    </div>
                                    <div data-nodeid="rollout" data-id="1-rollout-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                    <div data-nodeid="rollout" data-id="1-rollout-null-source" class="workflow-canvas__handle workflow-canvas__handle-bottom nodrag nopan !bg-(--ui-text-muted) !size-2 !border-0 !opacity-0 transition-opacity group-hover:!opacity-100 source connectable connectablestart connectableend connectionindicator" />
                                  </div>
                                </div>
                              </div>
                              <div class="workflow-canvas__viewport-portal" />
                            </div>
                          </div>
                        </div>
                        <svg class="workflow-canvas__background" style="position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; --xy-background-pattern-color-props: var(--ui-primary));" width="100%" height="100%">
                          <pattern id="pattern-1" x="0.20000000000003837" y="4.050000000000004" width="9.066666666666666" height="9.066666666666666" patternUnits="userSpaceOnUse" patternTransform="translate(-4.533333333333333,-4.533333333333333)">
                            <circle cx="0.2833333333333333" cy="0.2833333333333333" r="0.2833333333333333" class="workflow-canvas__background-pattern dots" />
                          </pattern>
                          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-1)" />
                        </svg>
                        <div class="workflow-canvas__panel workflow-canvas__controls vertical top right" aria-label="Control Panel">
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
                          <UButton color="neutral" variant="ghost" class="workflow-canvas__controls-button workflow-canvas__controls-interactive" title="Toggle Interactivity" aria-label="Toggle Interactivity" type="button" @click="openAction(&quot;Toggle Interactivity&quot;)">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32" width="100%" height="100%">
                              <path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" />
                            </svg>
                          </UButton>
                        </div>
                        <div id="react-flow__node-desc-1" style="display: none;">Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.</div>
                        <div id="react-flow__edge-desc-1" style="display: none;">Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.</div>
                        <div id="react-flow__aria-live-1" style="position: absolute; width: 1px; height: 1px; margin: -1px; border: 0px; padding: 0px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(100%);" />
                      </div>
                    </div>
                    <div class="flex min-h-14 flex-wrap items-center gap-x-5 gap-y-2 border-t px-4 py-3 text-sm sm:px-5 border-default">
                      <span class="flex items-center gap-2">
                        <span class="size-3 rounded-full bg-chart-1" />
                        On Track
                      </span>
                      <span class="flex items-center gap-2">
                        <span class="size-3 rounded-full bg-chart-2" />
                        At Risk
                      </span>
                      <span class="flex items-center gap-2">
                        <span class="size-3 rounded-full bg-(--ui-error)" />
                        Blocked
                      </span>
                      <span class="flex items-center gap-2">
                        <span class="size-3 rounded-full bg-(--ui-text-muted)/50" />
                        External
                      </span>
                      <span class="flex items-center gap-2">
                        <span class="border-(--ui-text-muted) h-px w-8 border-t border-dashed border-default" />
                        Dependency
                      </span>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div class="border-default hidden border-l xl:flex">
              <aside class="border-default bg-default text-default flex min-h-0 w-full min-w-0 shrink-0 flex-col overflow-hidden xl:w-[340px]">
                <div class="divide-default flex min-h-0 flex-1 flex-col divide-y overflow-y-auto">
                  <section class="p-5">
                    <div class="flex items-center justify-between">
                      <h2 class="flex items-center gap-2 font-semibold text-highlighted">
                        <UIcon name="i-lucide-clipboard-list" class="size-4" />
                        Backlog
                      </h2>
                      <span class="bg-muted rounded-full px-2 py-0.5 text-xs">5</span>
                    </div>
                    <div class="mt-4 space-y-3">
                      <div class="flex items-center gap-3 text-sm">
                        <span class="text-muted">⠿</span>
                        <span class="min-w-0 flex-1 truncate">Automate status reports</span>
                        <UIcon name="i-lucide-chevron-right" class="text-muted size-4" />
                      </div>
                      <div class="flex items-center gap-3 text-sm">
                        <span class="text-muted">⠿</span>
                        <span class="min-w-0 flex-1 truncate">Advanced search and filters</span>
                        <UIcon name="i-lucide-chevron-right" class="text-muted size-4" />
                      </div>
                      <div class="flex items-center gap-3 text-sm">
                        <span class="text-muted">⠿</span>
                        <span class="min-w-0 flex-1 truncate">Timesheet enhancements</span>
                        <UIcon name="i-lucide-chevron-right" class="text-muted size-4" />
                      </div>
                      <div class="flex items-center gap-3 text-sm">
                        <span class="text-muted">⠿</span>
                        <span class="min-w-0 flex-1 truncate">Resource planning view</span>
                        <UIcon name="i-lucide-chevron-right" class="text-muted size-4" />
                      </div>
                      <div class="flex items-center gap-3 text-sm">
                        <span class="text-muted">⠿</span>
                        <span class="min-w-0 flex-1 truncate">Mobile notifications</span>
                        <UIcon name="i-lucide-chevron-right" class="text-muted size-4" />
                      </div>
                    </div>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default mt-4 h-8 rounded-md px-2.5 text-xs shadow-none" aria-label="View full backlog" type="button" @click="openAction(&quot;View full backlog&quot;)">
                      View full backlog
                      <UIcon name="i-lucide-chevron-right" class="size-3.5" />
                    </UButton>
                  </section>
                  <section class="p-5">
                    <div class="flex items-center justify-between">
                      <h2 class="flex items-center gap-2 font-semibold text-highlighted">
                        <UIcon name="i-lucide-users" class="size-4" />
                        Contributors
                      </h2>
                      <span class="bg-muted rounded-full px-2 py-0.5 text-xs">2</span>
                    </div>
                    <div class="mt-4 space-y-4">
                      <div class="flex items-center gap-3">
                        <div class="relative">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-9">
                            <img class="aspect-square h-full w-full" alt="Marcus Chen" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                          </span>
                          <span class="border-(--ui-bg) bg-primary absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border border-default" />
                        </div>
                        <div>
                          <p class="text-sm font-medium">Marcus Chen</p>
                          <p class="text-muted text-sm">Program Lead</p>
                        </div>
                      </div>
                      <div class="flex items-center gap-3">
                        <div class="relative">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-9">
                            <img class="aspect-square h-full w-full" alt="Priya Shah" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                          </span>
                          <span class="border-(--ui-bg) bg-primary absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border border-default" />
                        </div>
                        <div>
                          <p class="text-sm font-medium">Priya Shah</p>
                          <p class="text-muted text-sm">Product Manager</p>
                        </div>
                      </div>
                    </div>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default mt-4 h-8 rounded-md px-2.5 text-xs shadow-none" aria-label="View contributors" type="button" @click="openAction(&quot;View contributors&quot;)">
                      View contributors
                      <UIcon name="i-lucide-chevron-right" class="size-3.5" />
                    </UButton>
                  </section>
                  <section class="p-5">
                    <h2 class="flex items-center gap-2 font-semibold text-highlighted">
                      <UIcon name="i-lucide-clock-3" class="size-4" />
                      Time
                    </h2>
                    <div class="mt-4 space-y-3 text-sm">
                      <div class="flex justify-between gap-4">
                        <span class="text-muted">Start date</span>
                        <span>02 Jan 2024</span>
                      </div>
                      <div class="flex justify-between gap-4">
                        <span class="text-muted">Target date</span>
                        <span>02 Feb 2024</span>
                      </div>
                      <div class="flex justify-between gap-4">
                        <span class="text-muted">Last updated</span>
                        <span>Just now</span>
                      </div>
                    </div>
                  </section>
                  <section class="p-5">
                    <h2 class="flex items-center gap-2 font-semibold text-highlighted">
                      <UIcon name="i-lucide-file-text" class="size-4" />
                      Notes
                    </h2>
                    <p class="mt-4 text-sm leading-5">Waiting on client assets to unblock design validation.</p>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default mt-5 h-8 rounded-md px-2.5 text-xs shadow-none" aria-label="Add note" type="button" @click="openAction(&quot;Add note&quot;)">
                      Add note
                      <UIcon name="i-lucide-chevron-right" class="size-3.5" />
                    </UButton>
                  </section>
                </div>
              </aside>
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
