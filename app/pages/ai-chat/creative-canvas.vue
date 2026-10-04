<!-- Page: /ai-chat/creative-canvas | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Video variations · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "field1": "Keep the speaker and studio unchanged. Start at a medium portrait crop and move slowly toward the microphone. One continuous shot, no cuts.",
  "field2": "Preserve the speaker, microphone, and warm studio lighting. Move the camera gently to the left. Keep the face in frame throughout.",
  "field3": "Begin with a tight close-up and slowly reveal more of the recording setup. Preserve the expression and microphone position. No scene changes.",
  "field4": "Use the second result as the reference. Tighten the frame and make the movement more subtle. Keep the same lighting and background.",
  "inspectAnObject": "Inspect an object",
  "field6": ""
})

const inspectAnObjectOptions = [
  "Podcast / source frame",
  "01 / Slow push in",
  "01 / Push in",
  "02 / Slide left",
  "02 / Slide left",
  "03 / Pull back",
  "03 / Pull back",
  "Refine / closer framing",
  "04 / Refined take"
]

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/creative-canvas">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="relative min-h-0 flex-1">
        <!-- Workflow canvas 1: local pointer and zoom handlers -->
        <div style="width:100%;height:100%;overflow:hidden;position:relative;z-index:0" class="workflow-canvas !bg-default light" role="application" :ref="element => setCanvasRoot(1, element)" @pointerdown="canvasPointerDown(1, $event)" @pointermove="canvasPointerMove($event)" @pointerup="canvasDrag = undefined" @pointercancel="canvasDrag = undefined" @wheel.ctrl.prevent="zoomCanvas(1, $event.deltaY < 0 ? 1.1 : 1 / 1.1)">
          <div class="workflow-canvas__renderer" style="position:absolute;width:100%;height:100%;top:0;left:0">
            <div class="workflow-canvas__pane selection" style="position:absolute;width:100%;height:100%;top:0;left:0">
              <div class="workflow-canvas__viewport workflow-canvas__viewport workflow-canvas__container" style="transform: translate(43px, 141.997px) scale(0.582493);">
                <div class="workflow-canvas__edges">
                  <svg style="z-index: 0;" viewBox="0 0 174.74801635742188 87.37399291992188" width="100%" height="100%">
                    <g class="workflow-canvas__edge workflow-canvas__edge-default nopan selectable" role="group" data-id="source:prompt-1" aria-label="Edge from source to prompt-1">
                      <path d="M282,514 C345,514 345,129 408,129" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--chart-2); stroke-width: 1.25; opacity: 0.8;" />
                      <path d="M282,514 C345,514 345,129 408,129" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                    </g>
                  </svg>
                  <svg style="z-index: 0;" viewBox="0 0 174.74801635742188 87.37399291992188" width="100%" height="100%">
                    <g class="workflow-canvas__edge workflow-canvas__edge-default nopan selectable" role="group" data-id="prompt-1:clip-1" aria-label="Edge from prompt-1 to clip-1">
                      <path d="M732,129 C795,129 795,171.5 858,171.5" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--chart-3); stroke-width: 1.25; opacity: 0.8;" />
                      <path d="M732,129 C795,129 795,171.5 858,171.5" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                    </g>
                  </svg>
                  <svg style="z-index: 0;" viewBox="0 0 174.74801635742188 87.37399291992188" width="100%" height="100%">
                    <g class="workflow-canvas__edge workflow-canvas__edge-default nopan selectable" role="group" data-id="source:clip-1" aria-label="Edge from source to clip-1">
                      <path d="M282,514 C570,514 570,171.5 858,171.5" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--chart-2); stroke-width: 1.25; opacity: 0.8;" />
                      <path d="M282,514 C570,514 570,171.5 858,171.5" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                    </g>
                  </svg>
                  <svg style="z-index: 0;" viewBox="0 0 174.74801635742188 87.37399291992188" width="100%" height="100%">
                    <g class="workflow-canvas__edge workflow-canvas__edge-default nopan selectable" role="group" data-id="source:prompt-2" aria-label="Edge from source to prompt-2">
                      <path d="M282,514 C345,514 345,514 408,514" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--chart-2); stroke-width: 1.25; opacity: 0.8;" />
                      <path d="M282,514 C345,514 345,514 408,514" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                    </g>
                  </svg>
                  <svg style="z-index: 0;" viewBox="0 0 174.74801635742188 87.37399291992188" width="100%" height="100%">
                    <g class="workflow-canvas__edge workflow-canvas__edge-default nopan selectable" role="group" data-id="prompt-2:clip-2" aria-label="Edge from prompt-2 to clip-2">
                      <path d="M732,514 C795,514 795,556.5 858,556.5" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--chart-3); stroke-width: 1.25; opacity: 0.8;" />
                      <path d="M732,514 C795,514 795,556.5 858,556.5" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                    </g>
                  </svg>
                  <svg style="z-index: 0;" viewBox="0 0 174.74801635742188 87.37399291992188" width="100%" height="100%">
                    <g class="workflow-canvas__edge workflow-canvas__edge-default nopan selectable" role="group" data-id="source:clip-2" aria-label="Edge from source to clip-2">
                      <path d="M282,514 C570,514 570,556.5 858,556.5" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--chart-2); stroke-width: 1.25; opacity: 0.8;" />
                      <path d="M282,514 C570,514 570,556.5 858,556.5" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                    </g>
                  </svg>
                  <svg style="z-index: 0;" viewBox="0 0 174.74801635742188 87.37399291992188" width="100%" height="100%">
                    <g class="workflow-canvas__edge workflow-canvas__edge-default nopan selectable" role="group" data-id="source:prompt-3" aria-label="Edge from source to prompt-3">
                      <path d="M282,514 C345,514 345,899 408,899" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--chart-2); stroke-width: 1.25; opacity: 0.8;" />
                      <path d="M282,514 C345,514 345,899 408,899" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                    </g>
                  </svg>
                  <svg style="z-index: 0;" viewBox="0 0 174.74801635742188 87.37399291992188" width="100%" height="100%">
                    <g class="workflow-canvas__edge workflow-canvas__edge-default nopan selectable" role="group" data-id="prompt-3:clip-3" aria-label="Edge from prompt-3 to clip-3">
                      <path d="M732,899 C795,899 795,941.5 858,941.5" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--chart-3); stroke-width: 1.25; opacity: 0.8;" />
                      <path d="M732,899 C795,899 795,941.5 858,941.5" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                    </g>
                  </svg>
                  <svg style="z-index: 0;" viewBox="0 0 174.74801635742188 87.37399291992188" width="100%" height="100%">
                    <g class="workflow-canvas__edge workflow-canvas__edge-default nopan selectable" role="group" data-id="source:clip-3" aria-label="Edge from source to clip-3">
                      <path d="M282,514 C570,514 570,941.5 858,941.5" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--chart-2); stroke-width: 1.25; opacity: 0.8;" />
                      <path d="M282,514 C570,514 570,941.5 858,941.5" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                    </g>
                  </svg>
                  <svg style="z-index: 0;" viewBox="0 0 174.74801635742188 87.37399291992188" width="100%" height="100%">
                    <g class="workflow-canvas__edge workflow-canvas__edge-default nopan selectable" role="group" data-id="clip-2:refine" aria-label="Edge from clip-2 to refine">
                      <path d="M1097,556.5 C1150,556.5 1150,514 1203,514" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--chart-2); stroke-width: 1.25; opacity: 0.8;" />
                      <path d="M1097,556.5 C1150,556.5 1150,514 1203,514" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                    </g>
                  </svg>
                  <svg style="z-index: 0;" viewBox="0 0 174.74801635742188 87.37399291992188" width="100%" height="100%">
                    <g class="workflow-canvas__edge workflow-canvas__edge-default nopan selectable" role="group" data-id="refine:final" aria-label="Edge from refine to final">
                      <path d="M1527,514 C1590,514 1590,556.5 1653,556.5" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--chart-3); stroke-width: 1.25; opacity: 0.8;" />
                      <path d="M1527,514 C1590,514 1590,556.5 1653,556.5" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                    </g>
                  </svg>
                </div>
                <div class="workflow-canvas__edgelabel-renderer" />
                <div class="workflow-canvas__nodes" style="position:absolute;width:100%;height:100%;top:0;left:0">
                  <div class="workflow-canvas__node workflow-canvas__node-media nopan selectable draggable" data-id="source" role="group" style="z-index: 0; transform: translate(0px, 295px); pointer-events: all; visibility: visible; width: 275px; height: 410px;">
                    <article class="relative flex size-full flex-col" aria-label="Source: Podcast / source frame">
                      <div class="media-drag text-muted flex h-7 shrink-0 cursor-grab items-center justify-between gap-2 text-[10px] active:cursor-grabbing">
                        <span class="flex min-w-0 items-center gap-1.5 truncate">
                          <span class="size-1.5 shrink-0 rounded-full" style="background: var(--chart-2);" />
                          Podcast / source frame
                        </span>
                        <UButton color="neutral" variant="ghost" class="nodrag hover:text-highlighted rounded p-1" aria-label="Inspect Podcast / source frame" type="button" @click="openAction(&quot;Inspect Podcast / source frame&quot;)">
                          <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                        </UButton>
                      </div>
                      <div class="relative min-h-0 flex-1 rounded-md">
                        <div data-nodeid="source" data-id="1-source-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 source connectable connectablestart connectableend connectionindicator" aria-label="Output from Podcast / source frame" style="background: var(--chart-2);" />
                        <!-- Card 1: SOURCE FRAMEReference image -->
                        <UCard class="flex h-full flex-col overflow-hidden rounded-md" :ui="{ body: 'contents' }">
                          <div class="relative min-h-0 flex-1 overflow-hidden">
                            <img alt="Podcast source frame" class="size-full object-cover object-[60%_center]" src="/reference/d599ae530532d33c.png" loading="lazy" />
                            <span class="absolute right-2 bottom-2 rounded bg-(--ui-bg-inverted)/75 px-1.5 py-0.5 font-mono text-[10px] text-inverted">SOURCE FRAME</span>
                          </div>
                          <div class="nodrag flex items-center justify-between gap-2 px-3 py-2">
                            <span class="text-muted text-[10px]">Reference image</span>
                            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Replace source image" type="button" @click="openAction(&quot;Replace source image&quot;)">
                              <UIcon name="i-lucide-upload" class="size-4" />
                            </UButton>
                          </div>
                        </UCard>
                      </div>
                    </article>
                  </div>
                  <div class="workflow-canvas__node workflow-canvas__node-media nopan selectable draggable" data-id="prompt-1" role="group" style="z-index: 0; transform: translate(415px, 0px); pointer-events: all; visibility: visible; width: 310px; height: 230px;">
                    <article class="relative flex size-full flex-col" aria-label="Prompt: 01 / Slow push in">
                      <div class="media-drag text-muted flex h-7 shrink-0 cursor-grab items-center justify-between gap-2 text-[10px] active:cursor-grabbing">
                        <span class="flex min-w-0 items-center gap-1.5 truncate">
                          <span class="size-1.5 shrink-0 rounded-full" style="background: var(--chart-3);" />
                          01 / Slow push in
                        </span>
                        <UButton color="neutral" variant="ghost" class="nodrag hover:text-highlighted rounded p-1" aria-label="Inspect 01 / Slow push in" type="button" @click="openAction(&quot;Inspect 01 / Slow push in&quot;)">
                          <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                        </UButton>
                      </div>
                      <div class="relative min-h-0 flex-1 rounded-md">
                        <div data-nodeid="prompt-1" data-id="1-prompt-1-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 target connectable connectablestart connectableend connectionindicator" aria-label="Input to 01 / Slow push in" style="background: var(--chart-3);" />
                        <div data-nodeid="prompt-1" data-id="1-prompt-1-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 source connectable connectablestart connectableend connectionindicator" aria-label="Output from 01 / Slow push in" style="background: var(--chart-3);" />
                        <!-- Card 2: PromptText → videoKeep the speaker and studio unchanged. Start at a medium portrait crop a -->
                        <UCard class="flex h-full flex-col overflow-hidden rounded-md" :ui="{ body: 'contents' }">
                          <div class="text-muted flex items-center justify-between border-b px-3 py-2 text-[9px] tracking-wider uppercase border-default">
                            <span>Prompt</span>
                            <span>Text → video</span>
                          </div>
                          <UTextarea v-model="form.field1" :rows="4" aria-label="Prompt text: 01 / Slow push in" name="field1" class="nodrag nopan nowheel min-h-0 flex-1 resize-none p-3 outline-none font-mono text-[11px] leading-5" :ui="{ base: 'h-full' }" />
                          <div class="text-muted flex items-center justify-between border-t px-3 py-2 font-mono text-[9px] border-default">
                            <span>9:16</span>
                            <span>6s</span>
                            <span>push</span>
                          </div>
                        </UCard>
                      </div>
                    </article>
                  </div>
                  <div class="workflow-canvas__node workflow-canvas__node-media nopan selectable draggable" data-id="clip-1" role="group" style="z-index: 0; transform: translate(865px, 0px); pointer-events: all; visibility: visible; width: 225px; height: 315px;">
                    <article class="relative flex size-full flex-col" aria-label="Motion preview: 01 / Push in">
                      <div class="media-drag text-muted flex h-7 shrink-0 cursor-grab items-center justify-between gap-2 text-[10px] active:cursor-grabbing">
                        <span class="flex min-w-0 items-center gap-1.5 truncate">
                          <span class="size-1.5 shrink-0 rounded-full" style="background: var(--chart-2);" />
                          01 / Push in
                        </span>
                        <UButton color="neutral" variant="ghost" class="nodrag hover:text-highlighted rounded p-1" aria-label="Inspect 01 / Push in" type="button" @click="openAction(&quot;Inspect 01 / Push in&quot;)">
                          <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                        </UButton>
                      </div>
                      <div class="relative min-h-0 flex-1 rounded-md">
                        <div data-nodeid="clip-1" data-id="1-clip-1-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 target connectable connectablestart connectableend connectionindicator" aria-label="Input to 01 / Push in" style="background: var(--chart-2);" />
                        <div data-nodeid="clip-1" data-id="1-clip-1-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 source connectable connectablestart connectableend connectionindicator" aria-label="Output from 01 / Push in" style="background: var(--chart-2);" />
                        <div class="relative h-full overflow-hidden rounded-md bg-inverted">
                          <img alt="01 / Push in" class="size-full object-cover object-[60%_center]" src="/reference/d599ae530532d33c.png" loading="lazy" />
                          <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-(--ui-bg-inverted)/90 to-transparent px-3 pt-10 pb-3 text-inverted">
                            <div class="flex items-center justify-between">
                              <UButton color="neutral" variant="ghost" class="nodrag nopan flex size-8 items-center justify-center rounded-full bg-(--ui-bg)/15 hover:bg-(--ui-bg)/25" aria-label="Play 01 / Push in" type="button" @click="openAction(&quot;Play 01 / Push in&quot;)">
                                <UIcon name="i-lucide-play" class="size-4" />
                              </UButton>
                              <span class="font-mono text-[10px]">6s ·push in</span>
                            </div>
                            <div class="mt-2 h-0.5 overflow-hidden bg-(--ui-bg)/25">
                              <div class="h-full origin-left scale-x-0 bg-default" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div class="workflow-canvas__node workflow-canvas__node-media nopan selectable draggable" data-id="prompt-2" role="group" style="z-index: 0; transform: translate(415px, 385px); pointer-events: all; visibility: visible; width: 310px; height: 230px;">
                    <article class="relative flex size-full flex-col" aria-label="Prompt: 02 / Slide left">
                      <div class="media-drag text-muted flex h-7 shrink-0 cursor-grab items-center justify-between gap-2 text-[10px] active:cursor-grabbing">
                        <span class="flex min-w-0 items-center gap-1.5 truncate">
                          <span class="size-1.5 shrink-0 rounded-full" style="background: var(--chart-3);" />
                          02 / Slide left
                        </span>
                        <UButton color="neutral" variant="ghost" class="nodrag hover:text-highlighted rounded p-1" aria-label="Inspect 02 / Slide left" type="button" @click="openAction(&quot;Inspect 02 / Slide left&quot;)">
                          <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                        </UButton>
                      </div>
                      <div class="relative min-h-0 flex-1 rounded-md">
                        <div data-nodeid="prompt-2" data-id="1-prompt-2-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 target connectable connectablestart connectableend connectionindicator" aria-label="Input to 02 / Slide left" style="background: var(--chart-3);" />
                        <div data-nodeid="prompt-2" data-id="1-prompt-2-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 source connectable connectablestart connectableend connectionindicator" aria-label="Output from 02 / Slide left" style="background: var(--chart-3);" />
                        <!-- Card 3: PromptText → videoPreserve the speaker, microphone, and warm studio lighting. Move the cam -->
                        <UCard class="flex h-full flex-col overflow-hidden rounded-md" :ui="{ body: 'contents' }">
                          <div class="text-muted flex items-center justify-between border-b px-3 py-2 text-[9px] tracking-wider uppercase border-default">
                            <span>Prompt</span>
                            <span>Text → video</span>
                          </div>
                          <UTextarea v-model="form.field2" :rows="4" aria-label="Prompt text: 02 / Slide left" name="field2" class="nodrag nopan nowheel min-h-0 flex-1 resize-none p-3 outline-none font-mono text-[11px] leading-5" :ui="{ base: 'h-full' }" />
                          <div class="text-muted flex items-center justify-between border-t px-3 py-2 font-mono text-[9px] border-default">
                            <span>9:16</span>
                            <span>6s</span>
                            <span>slide</span>
                          </div>
                        </UCard>
                      </div>
                    </article>
                  </div>
                  <div class="workflow-canvas__node workflow-canvas__node-media nopan selectable draggable" data-id="clip-2" role="group" style="z-index: 0; transform: translate(865px, 385px); pointer-events: all; visibility: visible; width: 225px; height: 315px;">
                    <article class="relative flex size-full flex-col" aria-label="Motion preview: 02 / Slide left">
                      <div class="media-drag text-muted flex h-7 shrink-0 cursor-grab items-center justify-between gap-2 text-[10px] active:cursor-grabbing">
                        <span class="flex min-w-0 items-center gap-1.5 truncate">
                          <span class="size-1.5 shrink-0 rounded-full" style="background: var(--chart-2);" />
                          02 / Slide left
                        </span>
                        <UButton color="neutral" variant="ghost" class="nodrag hover:text-highlighted rounded p-1" aria-label="Inspect 02 / Slide left" type="button" @click="openAction(&quot;Inspect 02 / Slide left&quot;)">
                          <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                        </UButton>
                      </div>
                      <div class="relative min-h-0 flex-1 rounded-md">
                        <div data-nodeid="clip-2" data-id="1-clip-2-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 target connectable connectablestart connectableend connectionindicator" aria-label="Input to 02 / Slide left" style="background: var(--chart-2);" />
                        <div data-nodeid="clip-2" data-id="1-clip-2-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 source connectable connectablestart connectableend connectionindicator" aria-label="Output from 02 / Slide left" style="background: var(--chart-2);" />
                        <div class="relative h-full overflow-hidden rounded-md bg-inverted">
                          <img alt="02 / Slide left" class="size-full object-cover object-[60%_center]" src="/reference/d599ae530532d33c.png" loading="lazy" />
                          <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-(--ui-bg-inverted)/90 to-transparent px-3 pt-10 pb-3 text-inverted">
                            <div class="flex items-center justify-between">
                              <UButton color="neutral" variant="ghost" class="nodrag nopan flex size-8 items-center justify-center rounded-full bg-(--ui-bg)/15 hover:bg-(--ui-bg)/25" aria-label="Play 02 / Slide left" type="button" @click="openAction(&quot;Play 02 / Slide left&quot;)">
                                <UIcon name="i-lucide-play" class="size-4" />
                              </UButton>
                              <span class="font-mono text-[10px]">6s ·slide</span>
                            </div>
                            <div class="mt-2 h-0.5 overflow-hidden bg-(--ui-bg)/25">
                              <div class="h-full origin-left scale-x-0 bg-default" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div class="workflow-canvas__node workflow-canvas__node-media nopan selectable draggable" data-id="prompt-3" role="group" style="z-index: 0; transform: translate(415px, 770px); pointer-events: all; visibility: visible; width: 310px; height: 230px;">
                    <article class="relative flex size-full flex-col" aria-label="Prompt: 03 / Pull back">
                      <div class="media-drag text-muted flex h-7 shrink-0 cursor-grab items-center justify-between gap-2 text-[10px] active:cursor-grabbing">
                        <span class="flex min-w-0 items-center gap-1.5 truncate">
                          <span class="size-1.5 shrink-0 rounded-full" style="background: var(--chart-3);" />
                          03 / Pull back
                        </span>
                        <UButton color="neutral" variant="ghost" class="nodrag hover:text-highlighted rounded p-1" aria-label="Inspect 03 / Pull back" type="button" @click="openAction(&quot;Inspect 03 / Pull back&quot;)">
                          <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                        </UButton>
                      </div>
                      <div class="relative min-h-0 flex-1 rounded-md">
                        <div data-nodeid="prompt-3" data-id="1-prompt-3-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 target connectable connectablestart connectableend connectionindicator" aria-label="Input to 03 / Pull back" style="background: var(--chart-3);" />
                        <div data-nodeid="prompt-3" data-id="1-prompt-3-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 source connectable connectablestart connectableend connectionindicator" aria-label="Output from 03 / Pull back" style="background: var(--chart-3);" />
                        <!-- Card 4: PromptText → videoBegin with a tight close-up and slowly reveal more of the recording setu -->
                        <UCard class="flex h-full flex-col overflow-hidden rounded-md" :ui="{ body: 'contents' }">
                          <div class="text-muted flex items-center justify-between border-b px-3 py-2 text-[9px] tracking-wider uppercase border-default">
                            <span>Prompt</span>
                            <span>Text → video</span>
                          </div>
                          <UTextarea v-model="form.field3" :rows="4" aria-label="Prompt text: 03 / Pull back" name="field3" class="nodrag nopan nowheel min-h-0 flex-1 resize-none p-3 outline-none font-mono text-[11px] leading-5" :ui="{ base: 'h-full' }" />
                          <div class="text-muted flex items-center justify-between border-t px-3 py-2 font-mono text-[9px] border-default">
                            <span>9:16</span>
                            <span>6s</span>
                            <span>pull</span>
                          </div>
                        </UCard>
                      </div>
                    </article>
                  </div>
                  <div class="workflow-canvas__node workflow-canvas__node-media nopan selectable draggable" data-id="clip-3" role="group" style="z-index: 0; transform: translate(865px, 770px); pointer-events: all; visibility: visible; width: 225px; height: 315px;">
                    <article class="relative flex size-full flex-col" aria-label="Motion preview: 03 / Pull back">
                      <div class="media-drag text-muted flex h-7 shrink-0 cursor-grab items-center justify-between gap-2 text-[10px] active:cursor-grabbing">
                        <span class="flex min-w-0 items-center gap-1.5 truncate">
                          <span class="size-1.5 shrink-0 rounded-full" style="background: var(--chart-2);" />
                          03 / Pull back
                        </span>
                        <UButton color="neutral" variant="ghost" class="nodrag hover:text-highlighted rounded p-1" aria-label="Inspect 03 / Pull back" type="button" @click="openAction(&quot;Inspect 03 / Pull back&quot;)">
                          <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                        </UButton>
                      </div>
                      <div class="relative min-h-0 flex-1 rounded-md">
                        <div data-nodeid="clip-3" data-id="1-clip-3-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 target connectable connectablestart connectableend connectionindicator" aria-label="Input to 03 / Pull back" style="background: var(--chart-2);" />
                        <div data-nodeid="clip-3" data-id="1-clip-3-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 source connectable connectablestart connectableend connectionindicator" aria-label="Output from 03 / Pull back" style="background: var(--chart-2);" />
                        <div class="relative h-full overflow-hidden rounded-md bg-inverted">
                          <img alt="03 / Pull back" class="size-full object-cover object-[60%_center]" src="/reference/d599ae530532d33c.png" loading="lazy" />
                          <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-(--ui-bg-inverted)/90 to-transparent px-3 pt-10 pb-3 text-inverted">
                            <div class="flex items-center justify-between">
                              <UButton color="neutral" variant="ghost" class="nodrag nopan flex size-8 items-center justify-center rounded-full bg-(--ui-bg)/15 hover:bg-(--ui-bg)/25" aria-label="Play 03 / Pull back" type="button" @click="openAction(&quot;Play 03 / Pull back&quot;)">
                                <UIcon name="i-lucide-play" class="size-4" />
                              </UButton>
                              <span class="font-mono text-[10px]">6s ·pull back</span>
                            </div>
                            <div class="mt-2 h-0.5 overflow-hidden bg-(--ui-bg)/25">
                              <div class="h-full origin-left scale-x-0 bg-default" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div class="workflow-canvas__node workflow-canvas__node-media nopan selectable draggable" data-id="refine" role="group" style="z-index: 0; transform: translate(1210px, 385px); pointer-events: all; visibility: visible; width: 310px; height: 230px;">
                    <article class="relative flex size-full flex-col" aria-label="Prompt: Refine / closer framing">
                      <div class="media-drag text-muted flex h-7 shrink-0 cursor-grab items-center justify-between gap-2 text-[10px] active:cursor-grabbing">
                        <span class="flex min-w-0 items-center gap-1.5 truncate">
                          <span class="size-1.5 shrink-0 rounded-full" style="background: var(--chart-3);" />
                          Refine / closer framing
                        </span>
                        <UButton color="neutral" variant="ghost" class="nodrag hover:text-highlighted rounded p-1" aria-label="Inspect Refine / closer framing" type="button" @click="openAction(&quot;Inspect Refine / closer framing&quot;)">
                          <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                        </UButton>
                      </div>
                      <div class="relative min-h-0 flex-1 rounded-md">
                        <div data-nodeid="refine" data-id="1-refine-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 target connectable connectablestart connectableend connectionindicator" aria-label="Input to Refine / closer framing" style="background: var(--chart-3);" />
                        <div data-nodeid="refine" data-id="1-refine-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 source connectable connectablestart connectableend connectionindicator" aria-label="Output from Refine / closer framing" style="background: var(--chart-3);" />
                        <!-- Card 5: PromptText → videoUse the second result as the reference. Tighten the frame and make the m -->
                        <UCard class="flex h-full flex-col overflow-hidden rounded-md" :ui="{ body: 'contents' }">
                          <div class="text-muted flex items-center justify-between border-b px-3 py-2 text-[9px] tracking-wider uppercase border-default">
                            <span>Prompt</span>
                            <span>Text → video</span>
                          </div>
                          <UTextarea v-model="form.field4" :rows="4" aria-label="Prompt text: Refine / closer framing" name="field4" class="nodrag nopan nowheel min-h-0 flex-1 resize-none p-3 outline-none font-mono text-[11px] leading-5" :ui="{ base: 'h-full' }" />
                          <div class="text-muted flex items-center justify-between border-t px-3 py-2 font-mono text-[9px] border-default">
                            <span>9:16</span>
                            <span>6s</span>
                            <span>push</span>
                          </div>
                        </UCard>
                      </div>
                    </article>
                  </div>
                  <div class="workflow-canvas__node workflow-canvas__node-media nopan selectable draggable" data-id="final" role="group" style="z-index: 0; transform: translate(1660px, 385px); pointer-events: all; visibility: visible; width: 225px; height: 315px;">
                    <article class="relative flex size-full flex-col" aria-label="Motion preview: 04 / Refined take">
                      <div class="media-drag text-muted flex h-7 shrink-0 cursor-grab items-center justify-between gap-2 text-[10px] active:cursor-grabbing">
                        <span class="flex min-w-0 items-center gap-1.5 truncate">
                          <span class="size-1.5 shrink-0 rounded-full" style="background: var(--chart-2);" />
                          04 / Refined take
                        </span>
                        <UButton color="neutral" variant="ghost" class="nodrag hover:text-highlighted rounded p-1" aria-label="Inspect 04 / Refined take" type="button" @click="openAction(&quot;Inspect 04 / Refined take&quot;)">
                          <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                        </UButton>
                      </div>
                      <div class="relative min-h-0 flex-1 rounded-md">
                        <div data-nodeid="final" data-id="1-final-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 target connectable connectablestart connectableend connectionindicator" aria-label="Input to 04 / Refined take" style="background: var(--chart-2);" />
                        <div data-nodeid="final" data-id="1-final-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 source connectable connectablestart connectableend connectionindicator" aria-label="Output from 04 / Refined take" style="background: var(--chart-2);" />
                        <div class="relative h-full overflow-hidden rounded-md bg-inverted">
                          <img alt="04 / Refined take" class="size-full object-cover object-[60%_center]" src="/reference/d599ae530532d33c.png" loading="lazy" />
                          <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-(--ui-bg-inverted)/90 to-transparent px-3 pt-10 pb-3 text-inverted">
                            <div class="flex items-center justify-between">
                              <UButton color="neutral" variant="ghost" class="nodrag nopan flex size-8 items-center justify-center rounded-full bg-(--ui-bg)/15 hover:bg-(--ui-bg)/25" aria-label="Play 04 / Refined take" type="button" @click="openAction(&quot;Play 04 / Refined take&quot;)">
                                <UIcon name="i-lucide-play" class="size-4" />
                              </UButton>
                              <span class="font-mono text-[10px]">6s ·push in</span>
                            </div>
                            <div class="mt-2 h-0.5 overflow-hidden bg-(--ui-bg)/25">
                              <div class="h-full origin-left scale-x-0 bg-default" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div class="workflow-canvas__viewport-portal" />
              </div>
            </div>
          </div>
          <svg class="workflow-canvas__background" style="position:absolute;width:100%;height:100%;top:0;left:0;--xy-background-pattern-color-props:color-mix(in oklab, var(--ui-text-muted) 32%, transparent)" width="100%" height="100%">
            <pattern id="pattern-1" x="5.720424403183024" y="2.198938992042441" width="9.319893899204244" height="9.319893899204244" patternUnits="userSpaceOnUse" patternTransform="translate(-4.659946949602122,-4.659946949602122)">
              <circle cx="0.4368700265251989" cy="0.4368700265251989" r="0.4368700265251989" class="workflow-canvas__background-pattern dots" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-1)" />
          </svg>
          <div class="workflow-canvas__panel !m-3 top left">
            <div class="bg-default flex flex-col gap-1 rounded-lg border p-1 shadow-sm border-default">
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-elevated text-default shadow-xs hover:bg-(--ui-bg-elevated)/80 h-9 w-9" aria-label="Select and move" type="button" @click="openAction(&quot;Select and move&quot;)">
                <UIcon name="i-lucide-mouse-pointer-2" class="size-4" />
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 w-9" aria-label="Pan canvas" type="button" @click="openAction(&quot;Pan canvas&quot;)">
                <UIcon name="i-lucide-hand" class="size-4" />
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 w-9" aria-label="Add video branch" type="button" @click="openAction(&quot;Add video branch&quot;)">
                <UIcon name="i-lucide-plus" class="size-4" />
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 w-9" aria-label="Replace source image" type="button" @click="openAction(&quot;Replace source image&quot;)">
                <UIcon name="i-lucide-upload" class="size-4" />
              </UButton>
            </div>
          </div>
          <div class="workflow-canvas__panel !m-3 bottom left">
            <div class="bg-default flex items-center gap-1 rounded-lg border p-1 shadow-sm border-default">
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 w-9" aria-label="Zoom out" type="button" @click="zoomCanvas(1, 1 / 1.15)">
                <UIcon name="i-lucide-minus" class="size-4" />
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 w-9" aria-label="Fit canvas" type="button" @click="openAction(&quot;Fit canvas&quot;)">
                <UIcon name="i-lucide-focus" class="size-4" />
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 w-9" aria-label="Zoom in" type="button" @click="zoomCanvas(1, 1.15)">
                <UIcon name="i-lucide-plus" class="size-4" />
              </UButton>
            </div>
          </div>
          <div class="workflow-canvas__panel !m-3 sm:hidden bottom right">
            <USelect v-model="form.inspectAnObject" :items="inspectAnObjectOptions" aria-label="Inspect canvas object" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 bg-default w-44" />
          </div>
          <div class="workflow-canvas__panel workflow-canvas__attribution bottom right">
            <NuxtLink aria-label="React Flow attribution" to="https://reactflow.dev?utm_source=attribution" external>
              React Flow
            </NuxtLink>
          </div>
          <div id="react-flow__node-desc-1" style="display:none">Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.</div>
          <div id="react-flow__edge-desc-1" style="display:none">Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.</div>
          <div id="react-flow__aria-live-1" style="position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%)" />
        </div>
      </div>
      <footer class="text-muted flex h-7 shrink-0 items-center justify-between gap-3 border-t px-3 text-[10px] border-default">
        <span>
          Scripted demo · sample media
          <span class="hidden sm:inline">· Drag headings · connect ports</span>
        </span>
        <span role="status">Saved locally</span>
      </footer>
      <UInput type="file" accept="image/png,image/jpeg,image/webp" aria-label="Upload source image" name="field6" class="hidden" @change="form.field6 = ($event.target as HTMLInputElement).files?.[0]?.name || ''" />
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
