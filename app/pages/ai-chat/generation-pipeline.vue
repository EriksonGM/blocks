<!-- Page: /ai-chat/generation-pipeline | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "YouTube content · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "pasteYouTubeURL": "",
  "field2": "00:00  You don't need a studio to start a podcast. Today we'll set up a recording space using the equipment you already have.\n\n00:42  Start with the room. Curtains, a rug, and a shelf of books reduce the echo before you buy another microphone.\n\n02:18  Keep the microphone a hand's width from your mouth. Speak slightly across it, rather than directly into it, to soften plosives.\n\n04:06  Record a thirty-second test. Listen for fans, keyboard noise, and clipping. Turn the input gain down before the loudest moment.\n\n06:35  Build a repeatable setup. Mark the mic position, save your recording settings, and keep a short checklist beside the desk.\n\n08:02  Your first episode doesn't need to be perfect. A clear idea, a comfortable guest, and understandable audio are enough to begin.",
  "field3": "Start recording with the equipment you already have. In this episode: room treatment, microphone placement, gain, and a repeatable recording checklist.\n\n00:00 Start with what you have\n00:42 Treat the room\n02:18 Place the microphone\n04:06 Record a test\n06:35 Save your setup",
  "inspectAnObject": "Inspect an object",
  "field5": ""
})

const inspectAnObjectOptions = [
  "Podcast setup.mp4",
  "Transcript",
  "Title ideas",
  "Thumbnail / 01",
  "Thumbnail / 02",
  "Description & chapters",
  "YouTube preview"
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

function saveForm() {
  toast.add({ title: "Changes saved", color: 'success', icon: 'i-lucide-check' })
}

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/generation-pipeline">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="relative min-h-0 flex-1">
        <!-- Workflow canvas 1: local pointer and zoom handlers -->
        <div style="width:100%;height:100%;overflow:hidden;position:relative;z-index:0" class="workflow-canvas !bg-default light" role="application" :ref="element => setCanvasRoot(1, element)" @pointerdown="canvasPointerDown(1, $event)" @pointermove="canvasPointerMove($event)" @pointerup="canvasDrag = undefined" @pointercancel="canvasDrag = undefined" @wheel.ctrl.prevent="zoomCanvas(1, $event.deltaY < 0 ? 1.1 : 1 / 1.1)">
          <div class="workflow-canvas__renderer" style="position:absolute;width:100%;height:100%;top:0;left:0">
            <div class="workflow-canvas__pane selection" style="position:absolute;width:100%;height:100%;top:0;left:0">
              <div class="workflow-canvas__viewport workflow-canvas__viewport workflow-canvas__container" style="transform: translate(43px, 114.875px) scale(0.669512);">
                <div class="workflow-canvas__edges">
                  <svg style="z-index: 0;" viewBox="0 0 200.85366821289062 100.42681884765625" width="100%" height="100%">
                    <g class="workflow-canvas__edge workflow-canvas__edge-default nopan selectable" role="group" data-id="source:transcript" aria-label="Edge from source to transcript">
                      <path d="M337,424 C377.5,424 377.5,414 418,414" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--chart-2); stroke-width: 1.25; opacity: 0.8;" />
                      <path d="M337,424 C377.5,424 377.5,414 418,414" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                    </g>
                  </svg>
                  <svg style="z-index: 0;" viewBox="0 0 200.85366821289062 100.42681884765625" width="100%" height="100%">
                    <g class="workflow-canvas__edge workflow-canvas__edge-default nopan selectable" role="group" data-id="transcript:titles" aria-label="Edge from transcript to titles">
                      <path d="M792,414 C837.5,414 837.5,136.5 883,136.5" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--chart-1); stroke-width: 1.25; opacity: 0.8;" />
                      <path d="M792,414 C837.5,414 837.5,136.5 883,136.5" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                    </g>
                  </svg>
                  <svg style="z-index: 0;" viewBox="0 0 200.85366821289062 100.42681884765625" width="100%" height="100%">
                    <g class="workflow-canvas__edge workflow-canvas__edge-default nopan selectable" role="group" data-id="transcript:thumb-1" aria-label="Edge from transcript to thumb-1">
                      <path d="M792,414 C837.5,414 837.5,489 883,489" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--chart-1); stroke-width: 1.25; opacity: 0.8;" />
                      <path d="M792,414 C837.5,414 837.5,489 883,489" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                    </g>
                  </svg>
                  <svg style="z-index: 0;" viewBox="0 0 200.85366821289062 100.42681884765625" width="100%" height="100%">
                    <g class="workflow-canvas__edge workflow-canvas__edge-default nopan selectable" role="group" data-id="transcript:thumb-2" aria-label="Edge from transcript to thumb-2">
                      <path d="M792,414 C1042.5,414 1042.5,489 1293,489" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--chart-1); stroke-width: 1.25; opacity: 0.8;" />
                      <path d="M792,414 C1042.5,414 1042.5,489 1293,489" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                    </g>
                  </svg>
                  <svg style="z-index: 0;" viewBox="0 0 200.85366821289062 100.42681884765625" width="100%" height="100%">
                    <g class="workflow-canvas__edge workflow-canvas__edge-default nopan selectable" role="group" data-id="transcript:description" aria-label="Edge from transcript to description">
                      <path d="M792,414 C837.5,414 837.5,884 883,884" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--chart-1); stroke-width: 1.25; opacity: 0.8;" />
                      <path d="M792,414 C837.5,414 837.5,884 883,884" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                    </g>
                  </svg>
                  <svg style="z-index: 0;" viewBox="0 0 200.85366821289062 100.42681884765625" width="100%" height="100%">
                    <g class="workflow-canvas__edge workflow-canvas__edge-default nopan selectable" role="group" data-id="titles:publish" aria-label="Edge from titles to publish">
                      <path d="M1277,136.5 C1285,136.5 1285,154 1293,154" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--chart-1); stroke-width: 1.25; opacity: 0.8;" />
                      <path d="M1277,136.5 C1285,136.5 1285,154 1293,154" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                    </g>
                  </svg>
                  <svg style="z-index: 0;" viewBox="0 0 200.85366821289062 100.42681884765625" width="100%" height="100%">
                    <g class="workflow-canvas__edge workflow-canvas__edge-default nopan selectable" role="group" data-id="thumb-1:publish" aria-label="Edge from thumb-1 to publish">
                      <path d="M1237,489 C1265,489 1265,154 1293,154" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--chart-2); stroke-width: 1.25; opacity: 0.8;" />
                      <path d="M1237,489 C1265,489 1265,154 1293,154" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                    </g>
                  </svg>
                </div>
                <div class="workflow-canvas__edgelabel-renderer" />
                <div class="workflow-canvas__nodes" style="position:absolute;width:100%;height:100%;top:0;left:0">
                  <div class="workflow-canvas__node workflow-canvas__node-media nopan selectable draggable" data-id="source" role="group" style="z-index: 0; transform: translate(0px, 220px); pointer-events: all; visibility: visible; width: 330px; height: 380px;">
                    <article class="relative flex size-full flex-col" aria-label="Source: Podcast setup.mp4">
                      <div class="media-drag text-muted flex h-7 shrink-0 cursor-grab items-center justify-between gap-2 text-[10px] active:cursor-grabbing">
                        <span class="flex min-w-0 items-center gap-1.5 truncate">
                          <span class="size-1.5 shrink-0 rounded-full" style="background: var(--chart-2);" />
                          Podcast setup.mp4
                        </span>
                        <UButton color="neutral" variant="ghost" class="nodrag hover:text-highlighted rounded p-1" aria-label="Inspect Podcast setup.mp4" type="button" @click="openAction(&quot;Inspect Podcast setup.mp4&quot;)">
                          <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                        </UButton>
                      </div>
                      <div class="relative min-h-0 flex-1 rounded-md">
                        <div data-nodeid="source" data-id="1-source-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 source connectable connectablestart connectableend connectionindicator" aria-label="Output from Podcast setup.mp4" style="background: var(--chart-2);" />
                        <!-- Card 1: 08:24Recording your first podcastSample episode · paste a URL to try the workflowTranscrib -->
                        <UCard class="flex h-full flex-col overflow-hidden rounded-md" :ui="{ body: 'contents' }">
                          <div class="relative min-h-0 flex-1 overflow-hidden max-h-[200px]">
                            <img alt="Podcast source frame" class="size-full object-cover object-[60%_center]" src="/reference/d599ae530532d33c.png" loading="lazy" />
                            <span class="absolute right-2 bottom-2 rounded bg-(--ui-bg-inverted)/75 px-1.5 py-0.5 font-mono text-[10px] text-inverted">08:24</span>
                          </div>
                          <div class="nodrag nopan flex flex-col gap-2 p-3">
                            <p class="text-xs font-medium">Recording your first podcast</p>
                            <p class="text-muted text-[10px]">Sample episode · paste a URL to try the workflow</p>
                            <!-- Form: controls and draft state are declared in this page -->
                            <UForm :state="form" @submit="saveForm" class="flex gap-1">
                              <UInput v-model="form.pasteYouTubeURL" type="text" aria-label="YouTube video URL" placeholder="Paste YouTube URL" name="pasteYouTubeURL" class="flex w-full rounded-md md:text-sm h-8 min-w-0 text-xs" :ui="{ base: 'h-full' }" />
                              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-6" aria-label="Use YouTube URL" type="submit">
                                <UIcon name="i-lucide-link-2" class="size-4" />
                              </UButton>
                            </UForm>
                            <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-8 rounded-md px-3 text-xs" aria-label="Transcribe video" type="button" @click="openAction(&quot;Transcribe video&quot;)">
                              <UIcon name="i-lucide-file-text" class="size-4" />
                              Transcribe video
                            </UButton>
                          </div>
                        </UCard>
                      </div>
                    </article>
                  </div>
                  <div class="workflow-canvas__node workflow-canvas__node-media nopan selectable draggable" data-id="transcript" role="group" style="z-index: 0; transform: translate(425px, 105px); pointer-events: all; visibility: visible; width: 360px; height: 590px;">
                    <article class="relative flex size-full flex-col" aria-label="Transcript: Transcript">
                      <div class="media-drag text-muted flex h-7 shrink-0 cursor-grab items-center justify-between gap-2 text-[10px] active:cursor-grabbing">
                        <span class="flex min-w-0 items-center gap-1.5 truncate">
                          <span class="size-1.5 shrink-0 rounded-full" style="background: var(--chart-1);" />
                          Transcript
                        </span>
                        <UButton color="neutral" variant="ghost" class="nodrag hover:text-highlighted rounded p-1" aria-label="Inspect Transcript" type="button" @click="openAction(&quot;Inspect Transcript&quot;)">
                          <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                        </UButton>
                      </div>
                      <div class="relative min-h-0 flex-1 rounded-md">
                        <div data-nodeid="transcript" data-id="1-transcript-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 target connectable connectablestart connectableend connectionindicator" aria-label="Input to Transcript" style="background: var(--chart-1);" />
                        <div data-nodeid="transcript" data-id="1-transcript-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 source connectable connectablestart connectableend connectionindicator" aria-label="Output from Transcript" style="background: var(--chart-1);" />
                        <!-- Card 2: TranscriptEN · sample00:00  You don't need a studio to start a podcast. Today we'll set up -->
                        <UCard class="flex h-full flex-col overflow-hidden rounded-md" :ui="{ body: 'contents' }">
                          <div class="text-muted flex items-center justify-between border-b px-3 py-2 text-[9px] tracking-wider uppercase border-default">
                            <span>Transcript</span>
                            <span>EN · sample</span>
                          </div>
                          <UTextarea v-model="form.field2" :rows="4" aria-label="Transcript text: Transcript" name="field2" class="nodrag nopan nowheel min-h-0 flex-1 resize-none p-3 text-xs leading-relaxed outline-none" :ui="{ base: 'h-full' }" />
                        </UCard>
                      </div>
                    </article>
                  </div>
                  <div class="workflow-canvas__node workflow-canvas__node-media nopan selectable draggable" data-id="titles" role="group" style="z-index: 0; transform: translate(890px, 0px); pointer-events: all; visibility: visible; width: 380px; height: 245px;">
                    <article class="relative flex size-full flex-col" aria-label="Titles: Title ideas">
                      <div class="media-drag text-muted flex h-7 shrink-0 cursor-grab items-center justify-between gap-2 text-[10px] active:cursor-grabbing">
                        <span class="flex min-w-0 items-center gap-1.5 truncate">
                          <span class="size-1.5 shrink-0 rounded-full" style="background: var(--chart-1);" />
                          Title ideas
                        </span>
                        <UButton color="neutral" variant="ghost" class="nodrag hover:text-highlighted rounded p-1" aria-label="Inspect Title ideas" type="button" @click="openAction(&quot;Inspect Title ideas&quot;)">
                          <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                        </UButton>
                      </div>
                      <div class="relative min-h-0 flex-1 rounded-md">
                        <div data-nodeid="titles" data-id="1-titles-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 target connectable connectablestart connectableend connectionindicator" aria-label="Input to Title ideas" style="background: var(--chart-1);" />
                        <div data-nodeid="titles" data-id="1-titles-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 source connectable connectablestart connectableend connectionindicator" aria-label="Output from Title ideas" style="background: var(--chart-1);" />
                        <!-- Card 3: TitlesFrom transcript01Record your first podcast—with the gear you have023 fixes that make -->
                        <UCard class="flex h-full flex-col overflow-hidden rounded-md" :ui="{ body: 'contents' }">
                          <div class="text-muted flex items-center justify-between border-b px-3 py-2 text-[9px] tracking-wider uppercase border-default">
                            <span>Titles</span>
                            <span>From transcript</span>
                          </div>
                          <div class="nodrag flex flex-col gap-1 p-2">
                            <UButton color="neutral" variant="soft" class="hover:bg-muted flex items-start gap-2 rounded p-2 text-left text-xs leading-5 disabled:opacity-50 bg-muted" aria-label="01Record your first podcast—with the gear you have" type="button" @click="openAction(&quot;01Record your first podcast—with the gear you have&quot;)">
                              <span class="text-muted shrink-0 font-mono text-[9px]">01</span>
                              <span>Record your first podcast—with the gear you have</span>
                              <UIcon name="i-lucide-check" class="mt-1 ml-auto size-3 shrink-0" />
                            </UButton>
                            <UButton color="neutral" variant="soft" class="hover:bg-muted flex items-start gap-2 rounded p-2 text-left text-xs leading-5 disabled:opacity-50" aria-label="023 fixes that make a budget mic sound better" type="button" @click="openAction(&quot;023 fixes that make a budget mic sound better&quot;)">
                              <span class="text-muted shrink-0 font-mono text-[9px]">02</span>
                              <span>3 fixes that make a budget mic sound better</span>
                            </UButton>
                            <UButton color="neutral" variant="soft" class="hover:bg-muted flex items-start gap-2 rounded p-2 text-left text-xs leading-5 disabled:opacity-50" aria-label="03Your room matters more than your microphone" type="button" @click="openAction(&quot;03Your room matters more than your microphone&quot;)">
                              <span class="text-muted shrink-0 font-mono text-[9px]">03</span>
                              <span>Your room matters more than your microphone</span>
                            </UButton>
                          </div>
                        </UCard>
                      </div>
                    </article>
                  </div>
                  <div class="workflow-canvas__node workflow-canvas__node-media nopan selectable draggable" data-id="thumb-1" role="group" style="z-index: 0; transform: translate(890px, 345px); pointer-events: all; visibility: visible; width: 340px; height: 260px;">
                    <article class="relative flex size-full flex-col" aria-label="Thumbnail: Thumbnail / 01">
                      <div class="media-drag text-muted flex h-7 shrink-0 cursor-grab items-center justify-between gap-2 text-[10px] active:cursor-grabbing">
                        <span class="flex min-w-0 items-center gap-1.5 truncate">
                          <span class="size-1.5 shrink-0 rounded-full" style="background: var(--chart-2);" />
                          Thumbnail / 01
                        </span>
                        <UButton color="neutral" variant="ghost" class="nodrag hover:text-highlighted rounded p-1" aria-label="Inspect Thumbnail / 01" type="button" @click="openAction(&quot;Inspect Thumbnail / 01&quot;)">
                          <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                        </UButton>
                      </div>
                      <div class="relative min-h-0 flex-1 rounded-md">
                        <div data-nodeid="thumb-1" data-id="1-thumb-1-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 target connectable connectablestart connectableend connectionindicator" aria-label="Input to Thumbnail / 01" style="background: var(--chart-2);" />
                        <div data-nodeid="thumb-1" data-id="1-thumb-1-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 source connectable connectablestart connectableend connectionindicator" aria-label="Output from Thumbnail / 01" style="background: var(--chart-2);" />
                        <!-- Card 4: EPISODE 01 -->
                        <UCard class="flex h-full flex-col overflow-hidden rounded-md" :ui="{ body: 'contents' }">
                          <div class="relative aspect-video w-full overflow-hidden" style="background: var(--ui-secondary); color: var(--ui-text-highlighted);">
                            <img alt="Podcast host at the microphone" class="absolute inset-y-0 right-0 h-full w-[56%] object-cover object-[61%_center]" src="/reference/d599ae530532d33c.png" loading="lazy" />
                            <div class="absolute inset-y-0 left-0 w-[66%]" style="background: linear-gradient(90deg, var(--ui-secondary) 68%, transparent);" />
                            <div class="absolute inset-y-0 left-0 flex w-[62%] flex-col justify-center px-[6%]">
                              <span class="mb-3 text-[8px] font-bold tracking-[.18em]">STUDIO NOTES</span>
                              <p class="text-[31px] leading-[.98] font-black tracking-[-.055em] whitespace-pre-line">START YOUR
PODCAST</p>
                              <span class="mt-4 w-fit rounded-sm border border-current px-1.5 py-0.5 text-[8px] font-semibold border-default">EPISODE 01</span>
                            </div>
                          </div>
                          <div class="nodrag mt-auto flex items-center justify-between gap-2 px-3 py-2">
                            <span class="text-muted text-[10px]">1280 × 720</span>
                            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-elevated text-default shadow-xs hover:bg-(--ui-bg-elevated)/80 h-8 rounded-md px-3 text-xs" aria-label="Selected" type="button" @click="openAction(&quot;Selected&quot;)">
                              <UIcon name="i-lucide-check" class="size-4" />
                              Selected
                            </UButton>
                          </div>
                        </UCard>
                      </div>
                    </article>
                  </div>
                  <div class="workflow-canvas__node workflow-canvas__node-media nopan selectable draggable" data-id="thumb-2" role="group" style="z-index: 0; transform: translate(1300px, 345px); pointer-events: all; visibility: visible; width: 340px; height: 260px;">
                    <article class="relative flex size-full flex-col" aria-label="Thumbnail: Thumbnail / 02">
                      <div class="media-drag text-muted flex h-7 shrink-0 cursor-grab items-center justify-between gap-2 text-[10px] active:cursor-grabbing">
                        <span class="flex min-w-0 items-center gap-1.5 truncate">
                          <span class="size-1.5 shrink-0 rounded-full" style="background: var(--chart-2);" />
                          Thumbnail / 02
                        </span>
                        <UButton color="neutral" variant="ghost" class="nodrag hover:text-highlighted rounded p-1" aria-label="Inspect Thumbnail / 02" type="button" @click="openAction(&quot;Inspect Thumbnail / 02&quot;)">
                          <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                        </UButton>
                      </div>
                      <div class="relative min-h-0 flex-1 rounded-md">
                        <div data-nodeid="thumb-2" data-id="1-thumb-2-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 target connectable connectablestart connectableend connectionindicator" aria-label="Input to Thumbnail / 02" style="background: var(--chart-2);" />
                        <div data-nodeid="thumb-2" data-id="1-thumb-2-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 source connectable connectablestart connectableend connectionindicator" aria-label="Output from Thumbnail / 02" style="background: var(--chart-2);" />
                        <!-- Card 5: EPISODE 01 -->
                        <UCard class="flex h-full flex-col overflow-hidden rounded-md" :ui="{ body: 'contents' }">
                          <div class="relative aspect-video w-full overflow-hidden" style="background: var(--ui-secondary); color: var(--ui-success);">
                            <img alt="Podcast host at the microphone" class="absolute inset-y-0 right-0 h-full w-[56%] object-cover object-[61%_center]" src="/reference/d599ae530532d33c.png" loading="lazy" />
                            <div class="absolute inset-y-0 left-0 w-[66%]" style="background: linear-gradient(90deg, var(--ui-secondary) 68%, transparent);" />
                            <div class="absolute inset-y-0 left-0 flex w-[62%] flex-col justify-center px-[6%]">
                              <span class="mb-3 text-[8px] font-bold tracking-[.18em]">STUDIO NOTES</span>
                              <p class="text-[31px] leading-[.98] font-black tracking-[-.055em] whitespace-pre-line">BETTER AUDIO
FOR $0</p>
                              <span class="mt-4 w-fit rounded-sm border border-current px-1.5 py-0.5 text-[8px] font-semibold border-default">EPISODE 01</span>
                            </div>
                          </div>
                          <div class="nodrag mt-auto flex items-center justify-between gap-2 px-3 py-2">
                            <span class="text-muted text-[10px]">1280 × 720</span>
                            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Use thumbnail" type="button" @click="openAction(&quot;Use thumbnail&quot;)">
                              Use thumbnail
                            </UButton>
                          </div>
                        </UCard>
                      </div>
                    </article>
                  </div>
                  <div class="workflow-canvas__node workflow-canvas__node-media nopan selectable draggable" data-id="description" role="group" style="z-index: 0; transform: translate(890px, 715px); pointer-events: all; visibility: visible; width: 380px; height: 310px;">
                    <article class="relative flex size-full flex-col" aria-label="Description: Description &amp; chapters">
                      <div class="media-drag text-muted flex h-7 shrink-0 cursor-grab items-center justify-between gap-2 text-[10px] active:cursor-grabbing">
                        <span class="flex min-w-0 items-center gap-1.5 truncate">
                          <span class="size-1.5 shrink-0 rounded-full" style="background: var(--chart-1);" />
                          Description &amp; chapters
                        </span>
                        <UButton color="neutral" variant="ghost" class="nodrag hover:text-highlighted rounded p-1" aria-label="Inspect Description &amp; chapters" type="button" @click="openAction(&quot;Inspect Description & chapters&quot;)">
                          <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                        </UButton>
                      </div>
                      <div class="relative min-h-0 flex-1 rounded-md">
                        <div data-nodeid="description" data-id="1-description-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 target connectable connectablestart connectableend connectionindicator" aria-label="Input to Description &amp; chapters" style="background: var(--chart-1);" />
                        <div data-nodeid="description" data-id="1-description-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 source connectable connectablestart connectableend connectionindicator" aria-label="Output from Description &amp; chapters" style="background: var(--chart-1);" />
                        <!-- Card 6: DescriptionFrom transcriptStart recording with the equipment you already have. In this epi -->
                        <UCard class="flex h-full flex-col overflow-hidden rounded-md" :ui="{ body: 'contents' }">
                          <div class="text-muted flex items-center justify-between border-b px-3 py-2 text-[9px] tracking-wider uppercase border-default">
                            <span>Description</span>
                            <span>From transcript</span>
                          </div>
                          <UTextarea v-model="form.field3" :rows="4" aria-label="Description text: Description &amp; chapters" name="field3" class="nodrag nopan nowheel min-h-0 flex-1 resize-none p-3 text-xs leading-relaxed outline-none" :ui="{ base: 'h-full' }" />
                        </UCard>
                      </div>
                    </article>
                  </div>
                  <div class="workflow-canvas__node workflow-canvas__node-media nopan selectable draggable" data-id="publish" role="group" style="z-index: 0; transform: translate(1300px, 0px); pointer-events: all; visibility: visible; width: 340px; height: 280px;">
                    <article class="relative flex size-full flex-col" aria-label="YouTube preview: YouTube preview">
                      <div class="media-drag text-muted flex h-7 shrink-0 cursor-grab items-center justify-between gap-2 text-[10px] active:cursor-grabbing">
                        <span class="flex min-w-0 items-center gap-1.5 truncate">
                          <span class="size-1.5 shrink-0 rounded-full" style="background: var(--chart-2);" />
                          YouTube preview
                        </span>
                        <UButton color="neutral" variant="ghost" class="nodrag hover:text-highlighted rounded p-1" aria-label="Inspect YouTube preview" type="button" @click="openAction(&quot;Inspect YouTube preview&quot;)">
                          <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                        </UButton>
                      </div>
                      <div class="relative min-h-0 flex-1 rounded-md">
                        <div data-nodeid="publish" data-id="1-publish-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !border-(--ui-bg) !size-3.5 !border-2 target connectable connectablestart connectableend connectionindicator" aria-label="Input to YouTube preview" style="background: var(--chart-2);" />
                        <!-- Card 7: EPISODE 01 -->
                        <UCard class="flex h-full flex-col overflow-hidden rounded-md" :ui="{ body: 'contents' }">
                          <div class="relative aspect-video w-full overflow-hidden" style="background: var(--ui-secondary); color: var(--ui-text-highlighted);">
                            <img alt="Podcast host at the microphone" class="absolute inset-y-0 right-0 h-full w-[56%] object-cover object-[61%_center]" src="/reference/d599ae530532d33c.png" loading="lazy" />
                            <div class="absolute inset-y-0 left-0 w-[66%]" style="background: linear-gradient(90deg, var(--ui-secondary) 68%, transparent);" />
                            <div class="absolute inset-y-0 left-0 flex w-[62%] flex-col justify-center px-[6%]">
                              <span class="mb-3 text-[8px] font-bold tracking-[.18em]">STUDIO NOTES</span>
                              <p class="text-[31px] leading-[.98] font-black tracking-[-.055em] whitespace-pre-line">START YOUR
PODCAST</p>
                              <span class="mt-4 w-fit rounded-sm border border-current px-1.5 py-0.5 text-[8px] font-semibold border-default">EPISODE 01</span>
                            </div>
                          </div>
                          <div class="flex gap-2 p-3">
                            <span class="bg-muted flex size-7 shrink-0 items-center justify-center rounded-full text-[9px] font-bold">SN</span>
                            <div>
                              <p class="text-xs leading-4 font-medium">Record your first podcast—with the gear you have</p>
                              <p class="text-muted mt-1 text-[10px]">Studio Notes · Preview</p>
                            </div>
                          </div>
                        </UCard>
                      </div>
                    </article>
                  </div>
                </div>
                <div class="workflow-canvas__viewport-portal" />
              </div>
            </div>
          </div>
          <svg class="workflow-canvas__background" style="position:absolute;width:100%;height:100%;top:0;left:0;--xy-background-pattern-color-props:color-mix(in oklab, var(--ui-text-muted) 32%, transparent)" width="100%" height="100%">
            <pattern id="pattern-1" x="0.15121951219511942" y="7.7530487804877986" width="10.71219512195122" height="10.71219512195122" patternUnits="userSpaceOnUse" patternTransform="translate(-5.35609756097561,-5.35609756097561)">
              <circle cx="0.5021341463414635" cy="0.5021341463414635" r="0.5021341463414635" class="workflow-canvas__background-pattern dots" />
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
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 w-9" aria-label="Add thumbnail branch" type="button" @click="openAction(&quot;Add thumbnail branch&quot;)">
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
      <UInput type="file" accept="image/png,image/jpeg,image/webp" aria-label="Upload source image" name="field5" class="hidden" @change="form.field5 = ($event.target as HTMLInputElement).files?.[0]?.name || ''" />
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
