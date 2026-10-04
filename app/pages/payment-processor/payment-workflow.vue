<!-- Page: /payment-processor/payment-workflow | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Payment Workflow · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "checklistConnect": true,
  "checklistSkus": true,
  "checklistReceipt": false,
  "checklistLedger": false
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/payment-workflow">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted flex min-h-0 flex-1 flex-col overflow-hidden">
          <div class="flex items-center gap-2 border-b px-4 py-3 lg:px-6 border-default">
            <nav aria-label="Breadcrumb" class="flex min-w-0 items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase">
              <UIcon name="i-lucide-git-branch" class="text-muted size-3.5 shrink-0" />
              <span class="text-muted hidden shrink-0 sm:inline">Workflows</span>
              <span class="text-muted hidden shrink-0 sm:inline">/</span>
              <span class="truncate">Paid order fulfillment</span>
            </nav>
            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 shrink-0 rounded-md" aria-label="Add to favorites" type="button" @click="openAction(&quot;Add to favorites&quot;)">
              <UIcon name="i-lucide-star" class="size-4" />
            </UButton>
            <div class="ml-auto flex shrink-0 items-center gap-2">
              <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 rounded-full px-2.5 text-[11px] font-medium shadow-none border-warning/20 bg-warning/10 text-warning dark:border-warning/20 dark:bg-warning/40 dark:text-warning">Draft changes</div>
              <UButton color="neutral" variant="soft" class="items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default hidden size-8 rounded-md lg:inline-flex" aria-label="Hide details" type="button" @click="openAction(&quot;Hide details&quot;)">
                <UIcon name="i-lucide-panel-right" class="size-4" />
              </UButton>
            </div>
          </div>
          <div class="flex items-center gap-6 border-b px-4 lg:px-6 border-default">
            <UButton color="neutral" variant="outline" class="flex h-11 shrink-0 items-center gap-2 border-b-2 text-sm font-medium transition-colors border-b-foreground text-highlighted" aria-label="Editor" type="button" @click="openAction(&quot;Editor&quot;)">
              <UIcon name="i-lucide-workflow" class="size-4" />
              Editor
            </UButton>
            <UButton color="neutral" variant="outline" class="flex h-11 shrink-0 items-center gap-2 border-b-2 text-sm font-medium transition-colors text-muted hover:text-highlighted border-b-transparent" aria-label="Runs" type="button" @click="openAction(&quot;Runs&quot;)">
              <UIcon name="i-lucide-play" class="size-4" />
              Runs
            </UButton>
          </div>
          <div class="vertical-scrollbar grid min-h-0 flex-1 grid-cols-1 overflow-y-auto lg:overflow-hidden lg:grid-cols-[minmax(0,1fr)_minmax(20rem,22rem)] xl:grid-cols-[minmax(0,1fr)_minmax(22rem,24rem)]">
            <div class="flex min-h-0 flex-col">
              <div class="relative min-h-[26rem] flex-1 overflow-hidden">
                <div class="pointer-events-none absolute inset-x-4 bottom-4 z-10 flex justify-center lg:inset-x-6">
                  <div class="bg-default pointer-events-auto flex w-full max-w-3xl flex-col gap-3 rounded-xl border px-4 py-3 shadow-lg sm:flex-row sm:items-center sm:justify-between border-default">
                    <div class="flex min-w-0 items-center gap-3">
                      <span class="grid size-8 shrink-0 place-items-center rounded-full bg-info/10 text-info dark:bg-info/50 dark:text-info">
                        <UIcon name="i-lucide-info" class="size-4" />
                      </span>
                      <p class="truncate text-sm font-medium">This workflow has unpublished changes</p>
                    </div>
                    <div class="flex shrink-0 items-center gap-2">
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default px-4 py-2 h-8 rounded-md text-xs" aria-label="Discard changes" type="button" @click="openAction(&quot;Discard changes&quot;)">
                        Discard changes
                      </UButton>
                      <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 px-4 py-2 h-8 rounded-md text-xs" aria-label="Publish changes" type="button" @click="openAction(&quot;Publish changes&quot;)">
                        Publish changes
                      </UButton>
                    </div>
                  </div>
                </div>
                <!-- Workflow canvas 1: local pointer and zoom handlers -->
                <div class="workflow-canvas !bg-default [&amp;_.workflow-canvas__controls]:!bg-default [&amp;_.workflow-canvas__controls-button]:!border-default [&amp;_.workflow-canvas__controls-button]:!bg-default [&amp;_.workflow-canvas__controls-button]:!text-highlighted [&amp;_.workflow-canvas__attribution]:hidden [&amp;_.workflow-canvas__controls]:!flex [&amp;_.workflow-canvas__controls]:!flex-row [&amp;_.workflow-canvas__controls]:!overflow-hidden [&amp;_.workflow-canvas__controls]:!rounded-md [&amp;_.workflow-canvas__controls]:!border [&amp;_.workflow-canvas__controls]:!shadow-sm [&amp;_.workflow-canvas__controls-button]:!size-8 [&amp;_.workflow-canvas__panel]:!m-3 sm:[&amp;_.workflow-canvas__panel]:!m-5 light" style="width: 100%; height: 100%; overflow: hidden; position: relative; z-index: 0;" role="application" :ref="element => setCanvasRoot(1, element)" @pointerdown="canvasPointerDown(1, $event)" @pointermove="canvasPointerMove($event)" @pointerup="canvasDrag = undefined" @pointercancel="canvasDrag = undefined" @wheel.ctrl.prevent="zoomCanvas(1, $event.deltaY < 0 ? 1.1 : 1 / 1.1)">
                  <div class="workflow-canvas__renderer" style="position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;">
                    <div class="workflow-canvas__pane draggable" style="position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;">
                      <div class="workflow-canvas__viewport workflow-canvas__viewport workflow-canvas__container" style="transform: translate(-29.3333px, 114.722px) scale(0.777778);">
                        <div class="workflow-canvas__edges">
                          <svg class="workflow-canvas__marker" width="100%" height="100%">
                            <defs>
                              <marker class="workflow-canvas__arrowhead" id="1__color=var(--muted-foreground)&amp;type=arrowclosed">
                                <polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4" style="stroke-width: 1; stroke: var(--ui-text-muted); fill: var(--ui-text-muted);" />
                              </marker>
                            </defs>
                          </svg>
                          <svg style="z-index: 0;" viewBox="0 0 233.3333282470703 116.66665649414062" width="100%" height="100%">
                            <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="trigger-branch" aria-label="Edge from trigger to branch">
                              <path d="M552 121L552 141L552 151L552 151L552 161L552 181" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-width: 1.5;" />
                              <path d="M552 121L552 141L552 151L552 151L552 161L552 181" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                            </g>
                          </svg>
                          <svg style="z-index: 0;" viewBox="0 0 233.3333282470703 116.66665649414062" width="100%" height="100%">
                            <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="branch-single-license" aria-label="Edge from branch to single-license">
                              <path d="M552 283L552 303L 552,313Q 552,318 547,318L 257,318Q 252,318 252,323L252 333L252 353" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-width: 1.5;" />
                              <path d="M552 283L552 303L 552,313Q 552,318 547,318L 257,318Q 252,318 252,323L252 333L252 353" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                              <g transform="translate(393.5725450515747 311.57142877578735)" class="workflow-canvas__edge-textwrapper">
                                <rect width="32.854909896850586" x="-8" y="-4" height="20.857142448425293" class="workflow-canvas__edge-textbg" rx="999" ry="999" style="fill: var(--ui-bg); stroke: var(--ui-text-muted); stroke-opacity: 0.35;" />
                                <text class="workflow-canvas__edge-text" y="6.4285712242126465" style="fill: var(--ui-text-muted); font-size: 10px; font-weight: 600; letter-spacing: 0.08em;">NO</text>
                              </g>
                            </g>
                          </svg>
                          <svg style="z-index: 0;" viewBox="0 0 233.3333282470703 116.66665649414062" width="100%" height="100%">
                            <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="branch-team-license" aria-label="Edge from branch to team-license">
                              <path d="M552 283L552 303L 552,313Q 552,318 557,318L 847,318Q 852,318 852,323L852 333L852 353" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-width: 1.5;" />
                              <path d="M552 283L552 303L 552,313Q 552,318 557,318L 847,318Q 852,318 852,323L852 333L852 353" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                              <g transform="translate(690.9609375 311.57142877578735)" class="workflow-canvas__edge-textwrapper">
                                <rect width="38.078125" x="-8" y="-4" height="20.857142448425293" class="workflow-canvas__edge-textbg" rx="999" ry="999" style="fill: var(--ui-bg); stroke: var(--ui-text-muted); stroke-opacity: 0.35;" />
                                <text class="workflow-canvas__edge-text" y="6.4285712242126465" style="fill: var(--ui-text-muted); font-size: 10px; font-weight: 600; letter-spacing: 0.08em;">YES</text>
                              </g>
                            </g>
                          </svg>
                          <svg style="z-index: 0;" viewBox="0 0 233.3333282470703 116.66665649414062" width="100%" height="100%">
                            <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="single-license-single-email" aria-label="Edge from single-license to single-email">
                              <path d="M252 455L252 475L252 485L252 485L252 495L252 515" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-width: 1.5;" />
                              <path d="M252 455L252 475L252 485L252 485L252 495L252 515" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                            </g>
                          </svg>
                          <svg style="z-index: 0;" viewBox="0 0 233.3333282470703 116.66665649414062" width="100%" height="100%">
                            <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="team-license-team-email" aria-label="Edge from team-license to team-email">
                              <path d="M852 455L852 475L852 485L852 485L852 495L852 515" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-width: 1.5;" />
                              <path d="M852 455L852 475L852 485L852 485L852 495L852 515" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                            </g>
                          </svg>
                          <svg style="z-index: 0;" viewBox="0 0 233.3333282470703 116.66665649414062" width="100%" height="100%">
                            <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="single-email-ledger" aria-label="Edge from single-email to ledger">
                              <path d="M252 617L252 637L 252,647Q 252,652 257,652L 547,652Q 552,652 552,657L552 667L552 687" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-width: 1.5;" />
                              <path d="M252 617L252 637L 252,647Q 252,652 257,652L 547,652Q 552,652 552,657L552 667L552 687" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                            </g>
                          </svg>
                          <svg style="z-index: 0;" viewBox="0 0 233.3333282470703 116.66665649414062" width="100%" height="100%">
                            <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="team-email-ledger" aria-label="Edge from team-email to ledger">
                              <path d="M852 617L852 637L 852,647Q 852,652 847,652L 557,652Q 552,652 552,657L552 667L552 687" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-width: 1.5;" />
                              <path d="M852 617L852 637L 852,647Q 852,652 847,652L 557,652Q 552,652 552,657L552 667L552 687" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                            </g>
                          </svg>
                        </div>
                        <div class="workflow-canvas__edgelabel-renderer" />
                        <div class="workflow-canvas__nodes" style="position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;">
                          <div class="workflow-canvas__node workflow-canvas__node-workflowStep nopan selectable draggable" data-id="trigger" role="group" style="z-index: 0; transform: translate(420px, 0px); pointer-events: all; visibility: visible; width: 264px;">
                            <div class="w-full">
                              <div class="text-muted flex items-center justify-between gap-3 px-1 pb-2 text-[10px] font-semibold tracking-[0.14em] uppercase">
                                <span class="truncate">trigger</span>
                                <span class="truncate">Payments</span>
                              </div>
                              <div class="bg-default relative rounded-xl border px-3 py-3 shadow-sm transition-colors border-(--ui-text-highlighted)/25 ring-(--ui-text-highlighted)/15 ring-2 border-default">
                                <div class="flex min-w-0 items-center gap-2.5">
                                  <span class="grid size-7 shrink-0 place-items-center rounded-md ring-1 ring-inset bg-info/10 text-info dark:bg-info/50 dark:text-info ring-info/15 dark:ring-info/20">
                                    <UIcon name="i-lucide-credit-card" class="size-4" />
                                  </span>
                                  <p class="truncate text-sm font-semibold text-highlighted">Payment succeeded</p>
                                </div>
                                <p class="text-muted mt-2 line-clamp-2 min-h-8 text-xs leading-4">A live charge cleared for a shadcnblocks order</p>
                                <div data-nodeid="trigger" data-id="1-trigger-null-source" class="workflow-canvas__handle workflow-canvas__handle-bottom nodrag nopan !bg-default !border-(--ui-text-muted)/60 !size-2.5 !border source connectable connectablestart connectableend connectionindicator" />
                              </div>
                            </div>
                          </div>
                          <div class="workflow-canvas__node workflow-canvas__node-workflowStep nopan selectable draggable" data-id="branch" role="group" style="z-index: 0; transform: translate(420px, 162px); pointer-events: all; visibility: visible; width: 264px;">
                            <div class="w-full">
                              <div class="text-muted flex items-center justify-between gap-3 px-1 pb-2 text-[10px] font-semibold tracking-[0.14em] uppercase">
                                <span class="truncate">logic</span>
                                <span class="truncate">Conditions</span>
                              </div>
                              <div class="bg-default relative rounded-xl border px-3 py-3 shadow-sm transition-colors hover:border-(--ui-text-highlighted)/20 border-default">
                                <div data-nodeid="branch" data-id="1-branch-null-target" class="workflow-canvas__handle workflow-canvas__handle-top nodrag nopan !bg-default !border-(--ui-text-muted)/60 !size-2.5 !border target connectable connectablestart connectableend connectionindicator" />
                                <div class="flex min-w-0 items-center gap-2.5">
                                  <span class="grid size-7 shrink-0 place-items-center rounded-md ring-1 ring-inset bg-warning/10 text-warning dark:bg-warning/50 dark:text-warning ring-warning/15 dark:ring-warning/20">
                                    <UIcon name="i-lucide-git-branch" class="size-4" />
                                  </span>
                                  <p class="truncate text-sm font-semibold text-highlighted">If / else</p>
                                </div>
                                <p class="text-muted mt-2 line-clamp-2 min-h-8 text-xs leading-4">If the order contains a team license</p>
                                <div data-nodeid="branch" data-id="1-branch-null-source" class="workflow-canvas__handle workflow-canvas__handle-bottom nodrag nopan !bg-default !border-(--ui-text-muted)/60 !size-2.5 !border source connectable connectablestart connectableend connectionindicator" />
                              </div>
                            </div>
                          </div>
                          <div class="workflow-canvas__node workflow-canvas__node-workflowStep nopan selectable draggable" data-id="single-license" role="group" style="z-index: 0; transform: translate(120px, 334px); pointer-events: all; visibility: visible; width: 264px;">
                            <div class="w-full">
                              <div class="text-muted flex items-center justify-between gap-3 px-1 pb-2 text-[10px] font-semibold tracking-[0.14em] uppercase">
                                <span class="truncate">action</span>
                                <span class="truncate">Fulfillment</span>
                              </div>
                              <div class="bg-default relative rounded-xl border px-3 py-3 shadow-sm transition-colors hover:border-(--ui-text-highlighted)/20 border-default">
                                <div data-nodeid="single-license" data-id="1-single-license-null-target" class="workflow-canvas__handle workflow-canvas__handle-top nodrag nopan !bg-default !border-(--ui-text-muted)/60 !size-2.5 !border target connectable connectablestart connectableend connectionindicator" />
                                <div class="flex min-w-0 items-center gap-2.5">
                                  <span class="grid size-7 shrink-0 place-items-center rounded-md ring-1 ring-inset bg-error/10 text-error dark:bg-error/50 dark:text-error ring-error/15 dark:ring-error/20">
                                    <UIcon name="i-lucide-key-round" class="size-4" />
                                  </span>
                                  <p class="truncate text-sm font-semibold text-highlighted">Issue license key</p>
                                </div>
                                <p class="text-muted mt-2 line-clamp-2 min-h-8 text-xs leading-4">Single seat, no expiry</p>
                                <div data-nodeid="single-license" data-id="1-single-license-null-source" class="workflow-canvas__handle workflow-canvas__handle-bottom nodrag nopan !bg-default !border-(--ui-text-muted)/60 !size-2.5 !border source connectable connectablestart connectableend connectionindicator" />
                              </div>
                            </div>
                          </div>
                          <div class="workflow-canvas__node workflow-canvas__node-workflowStep nopan selectable draggable" data-id="single-email" role="group" style="z-index: 0; transform: translate(120px, 496px); pointer-events: all; visibility: visible; width: 264px;">
                            <div class="w-full">
                              <div class="text-muted flex items-center justify-between gap-3 px-1 pb-2 text-[10px] font-semibold tracking-[0.14em] uppercase">
                                <span class="truncate">action</span>
                                <span class="truncate">Communication</span>
                              </div>
                              <div class="bg-default relative rounded-xl border px-3 py-3 shadow-sm transition-colors hover:border-(--ui-text-highlighted)/20 border-default">
                                <div data-nodeid="single-email" data-id="1-single-email-null-target" class="workflow-canvas__handle workflow-canvas__handle-top nodrag nopan !bg-default !border-(--ui-text-muted)/60 !size-2.5 !border target connectable connectablestart connectableend connectionindicator" />
                                <div class="flex min-w-0 items-center gap-2.5">
                                  <span class="grid size-7 shrink-0 place-items-center rounded-md ring-1 ring-inset bg-error/10 text-error dark:bg-error/50 dark:text-error ring-error/15 dark:ring-error/20">
                                    <UIcon name="i-lucide-mail" class="size-4" />
                                  </span>
                                  <p class="truncate text-sm font-semibold text-highlighted">Send email</p>
                                </div>
                                <p class="text-muted mt-2 line-clamp-2 min-h-8 text-xs leading-4">Template: Receipt and downloads</p>
                                <div data-nodeid="single-email" data-id="1-single-email-null-source" class="workflow-canvas__handle workflow-canvas__handle-bottom nodrag nopan !bg-default !border-(--ui-text-muted)/60 !size-2.5 !border source connectable connectablestart connectableend connectionindicator" />
                              </div>
                            </div>
                          </div>
                          <div class="workflow-canvas__node workflow-canvas__node-workflowStep nopan selectable draggable" data-id="team-license" role="group" style="z-index: 0; transform: translate(720px, 334px); pointer-events: all; visibility: visible; width: 264px;">
                            <div class="w-full">
                              <div class="text-muted flex items-center justify-between gap-3 px-1 pb-2 text-[10px] font-semibold tracking-[0.14em] uppercase">
                                <span class="truncate">action</span>
                                <span class="truncate">Fulfillment</span>
                              </div>
                              <div class="bg-default relative rounded-xl border px-3 py-3 shadow-sm transition-colors hover:border-(--ui-text-highlighted)/20 border-default">
                                <div data-nodeid="team-license" data-id="1-team-license-null-target" class="workflow-canvas__handle workflow-canvas__handle-top nodrag nopan !bg-default !border-(--ui-text-muted)/60 !size-2.5 !border target connectable connectablestart connectableend connectionindicator" />
                                <div class="flex min-w-0 items-center gap-2.5">
                                  <span class="grid size-7 shrink-0 place-items-center rounded-md ring-1 ring-inset bg-error/10 text-error dark:bg-error/50 dark:text-error ring-error/15 dark:ring-error/20">
                                    <UIcon name="i-lucide-key-round" class="size-4" />
                                  </span>
                                  <p class="truncate text-sm font-semibold text-highlighted">Issue license key</p>
                                </div>
                                <p class="text-muted mt-2 line-clamp-2 min-h-8 text-xs leading-4">Team seat pool, 25 seats</p>
                                <div data-nodeid="team-license" data-id="1-team-license-null-source" class="workflow-canvas__handle workflow-canvas__handle-bottom nodrag nopan !bg-default !border-(--ui-text-muted)/60 !size-2.5 !border source connectable connectablestart connectableend connectionindicator" />
                              </div>
                            </div>
                          </div>
                          <div class="workflow-canvas__node workflow-canvas__node-workflowStep nopan selectable draggable" data-id="team-email" role="group" style="z-index: 0; transform: translate(720px, 496px); pointer-events: all; visibility: visible; width: 264px;">
                            <div class="w-full">
                              <div class="text-muted flex items-center justify-between gap-3 px-1 pb-2 text-[10px] font-semibold tracking-[0.14em] uppercase">
                                <span class="truncate">action</span>
                                <span class="truncate">Communication</span>
                              </div>
                              <div class="bg-default relative rounded-xl border px-3 py-3 shadow-sm transition-colors hover:border-(--ui-text-highlighted)/20 border-default">
                                <div data-nodeid="team-email" data-id="1-team-email-null-target" class="workflow-canvas__handle workflow-canvas__handle-top nodrag nopan !bg-default !border-(--ui-text-muted)/60 !size-2.5 !border target connectable connectablestart connectableend connectionindicator" />
                                <div class="flex min-w-0 items-center gap-2.5">
                                  <span class="grid size-7 shrink-0 place-items-center rounded-md ring-1 ring-inset bg-error/10 text-error dark:bg-error/50 dark:text-error ring-error/15 dark:ring-error/20">
                                    <UIcon name="i-lucide-mail" class="size-4" />
                                  </span>
                                  <p class="truncate text-sm font-semibold text-highlighted">Send email</p>
                                </div>
                                <p class="text-muted mt-2 line-clamp-2 min-h-8 text-xs leading-4">Template: Team onboarding</p>
                                <div data-nodeid="team-email" data-id="1-team-email-null-source" class="workflow-canvas__handle workflow-canvas__handle-bottom nodrag nopan !bg-default !border-(--ui-text-muted)/60 !size-2.5 !border source connectable connectablestart connectableend connectionindicator" />
                              </div>
                            </div>
                          </div>
                          <div class="workflow-canvas__node workflow-canvas__node-workflowStep nopan selectable draggable" data-id="ledger" role="group" style="z-index: 0; transform: translate(420px, 668px); pointer-events: all; visibility: visible; width: 264px;">
                            <div class="w-full">
                              <div class="text-muted flex items-center justify-between gap-3 px-1 pb-2 text-[10px] font-semibold tracking-[0.14em] uppercase">
                                <span class="truncate">action</span>
                                <span class="truncate">Accounting</span>
                              </div>
                              <div class="bg-default relative rounded-xl border px-3 py-3 shadow-sm transition-colors hover:border-(--ui-text-highlighted)/20 border-default">
                                <div data-nodeid="ledger" data-id="1-ledger-null-target" class="workflow-canvas__handle workflow-canvas__handle-top nodrag nopan !bg-default !border-(--ui-text-muted)/60 !size-2.5 !border target connectable connectablestart connectableend connectionindicator" />
                                <div class="flex min-w-0 items-center gap-2.5">
                                  <span class="grid size-7 shrink-0 place-items-center rounded-md ring-1 ring-inset bg-error/10 text-error dark:bg-error/50 dark:text-error ring-error/15 dark:ring-error/20">
                                    <UIcon name="i-lucide-receipt-text" class="size-4" />
                                  </span>
                                  <p class="truncate text-sm font-semibold text-highlighted">Post to ledger</p>
                                </div>
                                <p class="text-muted mt-2 line-clamp-2 min-h-8 text-xs leading-4">Recognize revenue for the period</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="workflow-canvas__viewport-portal" />
                      </div>
                    </div>
                  </div>
                  <svg class="workflow-canvas__background" style="position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; --xy-background-pattern-color-props: var(--ui-border);" width="100%" height="100%">
                    <pattern id="pattern-1" x="-4.444444444444425" y="2.7222222222222268" width="12.444444444444445" height="12.444444444444445" patternUnits="userSpaceOnUse" patternTransform="translate(-6.222222222222222,-6.222222222222222)">
                      <circle cx="0.3888888888888889" cy="0.3888888888888889" r="0.3888888888888889" class="workflow-canvas__background-pattern dots" />
                    </pattern>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-1)" />
                  </svg>
                  <div class="workflow-canvas__panel workflow-canvas__controls vertical top left" aria-label="Control Panel">
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
              </div>
            </div>
            <aside class="vertical-scrollbar min-h-0 overflow-y-auto border-t lg:border-t-0 lg:border-l border-default">
              <div class="border-b px-5 py-5 border-default">
                <div class="flex items-center gap-2.5">
                  <span class="grid size-8 shrink-0 place-items-center rounded-md bg-info/10 text-info ring-1 ring-info/15 ring-inset dark:bg-info/50 dark:text-info dark:ring-info/20">
                    <UIcon name="i-lucide-workflow" class="size-4" />
                  </span>
                  <p class="truncate text-sm font-semibold text-highlighted">Paid order fulfillment</p>
                </div>
                <p class="text-muted mt-3 text-sm leading-relaxed">When a payment clears, issue the license the customer actually bought, send the matching receipt, and post the revenue to the ledger.</p>
              </div>
              <div class="border-b px-5 py-5 border-default">
                <p class="text-muted text-[11px] font-semibold tracking-[0.14em] uppercase text-highlighted">Selected step</p>
                <div class="mt-3 flex items-center gap-2.5">
                  <span class="grid size-8 shrink-0 place-items-center rounded-md ring-1 ring-inset bg-info/10 text-info dark:bg-info/50 dark:text-info ring-info/15 dark:ring-info/20">
                    <UIcon name="i-lucide-credit-card" class="size-4" />
                  </span>
                  <div class="min-w-0">
                    <p class="truncate text-sm font-semibold text-highlighted">Payment succeeded</p>
                    <p class="text-muted truncate text-xs">trigger · Payments</p>
                  </div>
                </div>
                <dl class="mt-4 space-y-2.5">
                  <div class="flex items-start justify-between gap-4">
                    <dt class="text-muted shrink-0 text-xs">Event</dt>
                    <dd class="min-w-0 text-right text-xs font-medium break-words">payment_intent.succeeded</dd>
                  </div>
                  <div class="flex items-start justify-between gap-4">
                    <dt class="text-muted shrink-0 text-xs">Mode</dt>
                    <dd class="min-w-0 text-right text-xs font-medium break-words">Live payments only</dd>
                  </div>
                  <div class="flex items-start justify-between gap-4">
                    <dt class="text-muted shrink-0 text-xs">Source</dt>
                    <dd class="min-w-0 text-right text-xs font-medium break-words">Checkout and invoice payments</dd>
                  </div>
                  <div class="flex items-start justify-between gap-4">
                    <dt class="text-muted shrink-0 text-xs">Debounce</dt>
                    <dd class="min-w-0 text-right text-xs font-medium break-words">Skip duplicate intents for 60s</dd>
                  </div>
                </dl>
              </div>
              <div class="border-b px-5 py-5 border-default">
                <div class="flex items-center justify-between gap-3">
                  <p class="text-sm font-semibold text-highlighted">Checklist</p>
                  <span class="text-muted text-xs tabular-nums">2/4</span>
                </div>
                <p class="text-muted mt-1 text-xs">Finish these before publishing to live payments.</p>
                <ul class="mt-3 space-y-2.5">
                  <li class="flex items-start gap-2.5">
                    <UCheckbox v-model="form.checklistConnect" aria-label="Toggle setting" />
                    <label class="cursor-pointer text-sm leading-snug text-muted line-through" for="checklist-connect">Connect a live payment method</label>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <UCheckbox v-model="form.checklistSkus" aria-label="Toggle setting" />
                    <label class="cursor-pointer text-sm leading-snug text-muted line-through" for="checklist-skus">Map license SKUs to products</label>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <UCheckbox v-model="form.checklistReceipt" aria-label="Toggle setting" />
                    <label class="cursor-pointer text-sm leading-snug" for="checklist-receipt">Verify the receipt email template</label>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <UCheckbox v-model="form.checklistLedger" aria-label="Toggle setting" />
                    <label class="cursor-pointer text-sm leading-snug" for="checklist-ledger">Point the ledger at the right account</label>
                  </li>
                </ul>
              </div>
              <div class="px-5 py-5">
                <p class="text-sm font-semibold text-highlighted">Helpful resources</p>
                <ul class="mt-3 space-y-1">
                  <li>
                    <NuxtLink class="text-muted hover:text-highlighted flex items-center justify-between gap-3 rounded-md py-1.5 text-sm transition-colors" to="#">
                      <span class="truncate">Payment event reference</span>
                      <UIcon name="i-lucide-external-link" class="size-3.5 shrink-0" />
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="text-muted hover:text-highlighted flex items-center justify-between gap-3 rounded-md py-1.5 text-sm transition-colors" to="#">
                      <span class="truncate">Branching and conditions</span>
                      <UIcon name="i-lucide-external-link" class="size-3.5 shrink-0" />
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="text-muted hover:text-highlighted flex items-center justify-between gap-3 rounded-md py-1.5 text-sm transition-colors" to="#">
                      <span class="truncate">Retry and failure handling</span>
                      <UIcon name="i-lucide-external-link" class="size-3.5 shrink-0" />
                    </NuxtLink>
                  </li>
                </ul>
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
