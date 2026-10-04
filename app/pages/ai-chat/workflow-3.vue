<!-- Page: /ai-chat/workflow-3 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Workflow 3 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "message": ""
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

const messages = ref<{ id: string, role: 'user' | 'assistant', text: string }[]>([])
function sendMessage(field: keyof typeof form) {
  const message = String(form[field]).trim()
  if (!message) return
  messages.value.push({ id: 'user-' + messages.value.length, role: 'user', text: message })
  messages.value.push({ id: 'assistant-' + messages.value.length, role: 'assistant', text: 'Your message has been added to this demo conversation. Connect sendMessage to your AI API for real responses.' })
  Object.assign(form, { [field]: '' })
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/workflow-3">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="flex min-h-0 flex-1 overflow-hidden">
        <div class="flex min-h-0 min-w-0 flex-1 flex-col">
          <div class="flex min-h-0 flex-1 flex-col">
            <h1 class="sr-only text-highlighted">Workflow 3 · Multi-agent review</h1>
            <div class="flex h-12 shrink-0 items-center border-b px-4 border-default">
              <span class="text-xs font-medium">Workflow thread</span>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default ml-auto size-7" aria-label="Close workflow" type="button" @click="openAction(&quot;Close workflow&quot;)">
                <UIcon name="i-lucide-panel-right-open" class="size-4" />
              </UButton>
            </div>
            <div data-slot="message-scroller" class="group/message-scroller relative flex size-full flex-col overflow-hidden min-h-0 flex-1">
              <div role="region" aria-label="Conversation messages" data-slot="message-scroller-viewport" class="size-full min-h-0 min-w-0 scroll-fade-b scrollbar-thin scrollbar-gutter-stable overflow-y-auto overscroll-contain contain-content data-autoscrolling:scrollbar-thumb-transparent data-autoscrolling:scrollbar-track-transparent">
                <div role="log" data-slot="message-scroller-content" class="flex h-max flex-col min-h-full gap-0">
                  <div data-slot="message-scroller-item" class="min-w-0 shrink-0 [contain-intrinsic-size:auto_10rem] [content-visibility:auto] min-h-full">
                    <div class="mx-auto flex w-full max-w-xl flex-col gap-8 px-4 py-8 sm:px-5">
                      <div data-slot="message" class="group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse">
                        <div data-slot="message-content" class="flex w-full min-w-0 flex-col gap-2.5 wrap-break-word group-data-[align=end]/message:*:data-slot:self-end">
                          <div data-slot="bubble" class="group/bubble relative flex w-fit min-w-0 flex-col gap-1 group-data-[align=end]/message:self-end data-[align=end]:self-end data-[variant=ghost]:max-w-full *:data-[slot=bubble-content]:bg-muted [&amp;&gt;[data-slot=bubble-content]:is(button,a):hover]:bg-[color-mix(in_oklch,var(--ui-bg-muted),var(--ui-text-highlighted)_5%)] max-w-[88%] md:max-w-[72%]">
                            <div data-slot="bubble-content" class="w-fit max-w-full min-w-0 overflow-hidden rounded-3xl border-transparent px-3 py-2.5 text-sm wrap-break-word group-data-[align=end]/bubble:self-end [button]:text-left [button,a]:transition-colors [button,a]:outline-none [button,a]:focus-visible:border-accented [button,a]:focus-visible:ring-3 [button,a]:focus-visible:ring-(--ui-border-accented)/30 border-0 leading-6">Show me how the agents handed work off, where the implementation was reopened, and what evidence reached the final approval.</div>
                          </div>
                        </div>
                      </div>
                      <div data-slot="message" class="group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse">
                        <div data-slot="message-avatar" class="flex w-fit min-w-8 shrink-0 items-center justify-center group-has-data-[slot=message-footer]/message:-translate-y-8 self-start overflow-visible rounded-none bg-transparent">
                          <svg viewBox="0 0 64 64" class="drop-shadow-sm size-8" width="100%" height="100%">
                            <defs>
                              <linearGradient id="_R_pardbsnpfknmlb_" x1="10" y1="8" x2="54" y2="56" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stop-color="var(--ui-text-highlighted)" />
                                <stop offset="0.52" stop-color="var(--ui-text-muted)" />
                                <stop offset="1" stop-color="var(--ui-text-highlighted)" />
                              </linearGradient>
                              <mask id="_R_pardbsnpfknmlb_-mask" x="0" y="0" width="64" height="64">
                                <rect width="64" height="64" fill="var(--ui-text-highlighted)" />
                                <path d="M 56.58 32.00 C 56.58 33.07 56.51 34.15 56.37 35.21 C 56.23 36.27 56.02 37.33 55.75 38.36 C 55.47 39.40 55.12 40.42 54.71 41.41 C 54.30 42.40 53.83 43.37 53.29 44.29 C 52.76 45.22 52.16 46.12 51.50 46.97 C 50.85 47.81 50.14 48.63 49.38 49.38 C 48.63 50.14 47.81 50.85 46.97 51.50 C 46.12 52.16 45.22 52.76 44.29 53.29 C 43.37 53.83 42.40 54.30 41.41 54.71 C 40.42 55.12 39.40 55.47 38.36 55.75 C 37.33 56.02 36.27 56.23 35.21 56.37 C 34.15 56.51 33.07 56.58 32.00 56.58 C 30.93 56.58 29.85 56.51 28.79 56.37 C 27.73 56.23 26.67 56.02 25.64 55.75 C 24.60 55.47 23.58 55.12 22.59 54.71 C 21.60 54.30 20.63 53.83 19.71 53.29 C 18.78 52.76 17.88 52.16 17.03 51.50 C 16.19 50.85 15.37 50.14 14.62 49.38 C 13.86 48.63 13.15 47.81 12.50 46.97 C 11.84 46.12 11.24 45.22 10.71 44.29 C 10.17 43.37 9.70 42.40 9.29 41.41 C 8.88 40.42 8.53 39.40 8.25 38.36 C 7.98 37.33 7.77 36.27 7.63 35.21 C 7.49 34.15 7.42 33.07 7.42 32.00 C 7.42 30.93 7.49 29.85 7.63 28.79 C 7.77 27.73 7.98 26.67 8.25 25.64 C 8.53 24.60 8.88 23.58 9.29 22.59 C 9.70 21.60 10.17 20.63 10.71 19.71 C 11.24 18.78 11.84 17.88 12.50 17.03 C 13.15 16.19 13.86 15.37 14.62 14.62 C 15.37 13.86 16.19 13.15 17.03 12.50 C 17.88 11.84 18.78 11.24 19.71 10.71 C 20.63 10.17 21.60 9.70 22.59 9.29 C 23.58 8.88 24.60 8.53 25.64 8.25 C 26.67 7.98 27.73 7.77 28.79 7.63 C 29.85 7.49 30.93 7.42 32.00 7.42 C 33.07 7.42 34.15 7.49 35.21 7.63 C 36.27 7.77 37.33 7.98 38.36 8.25 C 39.40 8.53 40.42 8.88 41.41 9.29 C 42.40 9.70 43.37 10.17 44.29 10.71 C 45.22 11.24 46.12 11.84 46.97 12.50 C 47.81 13.15 48.63 13.86 49.38 14.62 C 50.14 15.37 50.85 16.19 51.50 17.03 C 52.16 17.88 52.76 18.78 53.29 19.71 C 53.83 20.63 54.30 21.60 54.71 22.59 C 55.12 23.58 55.47 24.60 55.75 25.64 C 56.02 26.67 56.23 27.73 56.37 28.79 C 56.51 29.85 56.58 30.93 56.58 32.00 Z" transform="translate(0 0) rotate(0.00 32 32)" fill="var(--ui-text-inverted)" />
                                <rect x="25.1" y="25.200000000000003" width="3.8" height="8.2" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(-0.87 -0.55) rotate(-11 27 29.3) translate(0 29.3) scale(1 1.000) translate(0 -29.3)" />
                                <rect x="35.1" y="25.200000000000003" width="3.8" height="8.2" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(-0.87 -0.55) rotate(-11 37 29.3) translate(0 29.3) scale(1 1.000) translate(0 -29.3)" />
                              </mask>
                            </defs>
                            <rect width="64" height="64" fill="url(#_R_pardbsnpfknmlb_)" mask="url(#_R_pardbsnpfknmlb_-mask)" />
                          </svg>
                        </div>
                        <div data-slot="message-content" class="flex w-full min-w-0 flex-col wrap-break-word group-data-[align=end]/message:*:data-slot:self-end gap-3">
                          <div class="mb-1 flex items-center gap-2">
                            <span class="text-[13px] font-medium">Shadcnblocks AI</span>
                            <span class="text-muted text-xs">Workflow agent</span>
                          </div>
                          <div class="prose prose-sm dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-p:leading-7 prose-li:my-0 prose-pre:overflow-x-auto prose-pre:rounded-xl prose-pre:border prose-pre:bg-(--ui-bg-muted)/40 prose-code:before:content-none prose-code:after:content-none prose-a:font-medium prose-a:underline prose-a:underline-offset-4 max-w-none px-1.5 text-[15px] leading-7 [&amp;&gt;*:first-child]:mt-0 [&amp;&gt;*:last-child]:mb-0 border-default">
                            <p>The completed run preserves parallel ownership, the reviewer-to-implementer revision loop, and the evidence that converged at approval. You can replay the route without losing the final audit state.</p>
                          </div>
                          <section class="bg-default mt-1 overflow-hidden rounded-xl border shadow-xs border-default">
                            <header class="bg-(--ui-bg-muted)/25 flex h-11 items-center gap-2.5 border-b px-3 border-default">
                              <span class="bg-default grid size-7 shrink-0 place-items-center rounded-lg border shadow-xs border-default">
                                <UIcon name="i-lucide-git-branch" class="text-muted size-3.5" />
                              </span>
                              <div class="min-w-0 flex-1">
                                <p class="truncate text-xs font-medium">Release migration · run review</p>
                                <p class="text-muted truncate text-[10px]">Interactive workflow workspace</p>
                              </div>
                              <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 h-5 rounded-md px-1.5 text-[9px] font-normal border-default">Reviewed</div>
                            </header>
                            <div class="p-2.5">
                              <div class="mt-2 grid grid-cols-3 divide-x overflow-hidden rounded-lg border border-default">
                                <div class="bg-(--ui-bg-muted)/10 min-w-0 px-2 py-1.5">
                                  <p class="truncate text-[11px] font-medium tabular-nums">5</p>
                                  <p class="text-muted mt-0.5 truncate text-[9px]">Agents</p>
                                </div>
                                <div class="bg-(--ui-bg-muted)/10 min-w-0 px-2 py-1.5">
                                  <p class="truncate text-[11px] font-medium tabular-nums">1</p>
                                  <p class="text-muted mt-0.5 truncate text-[9px]">Revisions</p>
                                </div>
                                <div class="bg-(--ui-bg-muted)/10 min-w-0 px-2 py-1.5">
                                  <p class="truncate text-[11px] font-medium tabular-nums">3m 39s</p>
                                  <p class="text-muted mt-0.5 truncate text-[9px]">Total time</p>
                                </div>
                              </div>
                            </div>
                            <footer class="flex h-10 items-center justify-between gap-2 border-t px-3 border-default">
                              <span class="text-muted flex items-center gap-1.5 text-[10px]">
                                <span class="size-1.5 rounded-full bg-success" />
                                Workspace ready
                              </span>
                              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default rounded-md h-7 px-2.5 text-[10px] shadow-xs" aria-label="Open workflow" type="button" @click="openAction(&quot;Open workflow&quot;)">
                                <UIcon name="i-lucide-maximize-2" class="size-4" />
                                Open workflow
                              </UButton>
                            </footer>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 size-6 absolute inset-s-1/2 -translate-x-1/2 border-default bg-default text-highlighted transition-[translate,scale,opacity] duration-200 hover:bg-muted hover:text-highlighted data-[active=false]:pointer-events-none data-[active=false]:scale-95 data-[active=false]:opacity-0 data-[active=false]:duration-400 data-[active=false]:ease-[cubic-bezier(0.7,0,0.84,0)] data-[active=true]:translate-y-0 data-[active=true]:scale-100 data-[active=true]:opacity-100 data-[active=true]:ease-[cubic-bezier(0.23,1,0.32,1)] data-[direction=end]:bottom-4 data-[direction=end]:data-[active=false]:translate-y-full data-[direction=start]:top-4 data-[direction=start]:data-[active=false]:-translate-y-full rtl:translate-x-1/2 data-[direction=start]:[&amp;_svg]:rotate-180 bottom-3 shadow-md" data-slot="message-scroller-button" aria-label="Scroll to latest message" type="button" @click="openAction(&quot;Scroll to latest message&quot;)">
                <UIcon name="i-lucide-arrow-down" class="size-4" />
              </UButton>
            </div>
            <div class="bg-default shrink-0 px-4 pt-3 pb-4 sm:px-5">
              <!-- Form: controls and draft state are declared in this page -->
              <UForm :state="form" @submit="saveForm" class="relative mx-auto w-full max-w-xl" aria-label="Continue Workflow 3 · Multi-agent review">
                <!-- Chat composer: form.message -->
                <div v-if="messages.length" class="my-4 space-y-4">
                  <UChatMessage v-for="message in messages" :key="message.id" :id="message.id" :role="message.role" :parts="[{ type: 'text', text: message.text }]" :side="message.role === 'user' ? 'right' : 'left'" :variant="message.role === 'user' ? 'soft' : 'naked'" />
                </div>
                <UChatPrompt v-model="form.message" :autofocus="false" color="primary" :rows="3" placeholder="Ask for a workflow change…" data-slot="input-group" class="group/input-group relative flex w-full min-w-0 border outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 h-auto flex-col items-stretch transition-[border-color,box-shadow] duration-200 bg-default border-default has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/30 gap-0 rounded-2xl shadow-sm has-[[data-slot=input-group-control]:focus-visible]:ring-3" @submit="sendMessage(&quot;message&quot;)" :ui="{ base: 'px-4 py-3 text-sm', footer: 'p-0 w-full' }">
                  <template #footer>
                    <div role="group" data-slot="input-group-addon" class="h-auto py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last justify-start group-has-[&gt;input]/input-group:pb-2 [.border-t]:pt-2 grid w-full cursor-default grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 pt-0 pb-3">
                      <div class="flex min-w-0 items-center gap-1">
                        <UButton color="neutral" variant="soft" class="justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default flex items-center gap-2 text-sm shadow-none size-8 p-0 has-[&gt;svg]:p-0" aria-label="Add workflow context" type="button" @click="openAction(&quot;Add workflow context&quot;)">
                          <UIcon name="i-lucide-plus" class="size-4" />
                          <span class="sr-only">Add workflow context</span>
                        </UButton>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md px-3 h-8 text-xs" aria-label="Canvas" type="button" @click="openAction(&quot;Canvas&quot;)">
                          <UIcon name="i-lucide-git-branch" class="size-4" />
                          Canvas
                        </UButton>
                      </div>
                      <div class="flex min-w-0 items-center gap-1 shrink-0">
                        <UButton color="neutral" variant="soft" class="justify-center whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default py-2 flex items-center shadow-none h-8 max-w-48 gap-1.5 rounded-lg px-2 text-xs font-normal" aria-label="5.6 Sol" type="button" @click="openAction(&quot;5.6 Sol&quot;)">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-3.5 shrink-0" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
                          </svg>
                          <span class="truncate">5.6 Sol</span>
                          <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0" />
                        </UButton>
                        <UButton color="primary" variant="solid" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 flex items-center gap-2 text-sm shadow-none size-8 p-0 has-[&gt;svg]:p-0 rounded-full" aria-label="Send message" type="button" :disabled="!form.message.trim()" @click="sendMessage(&quot;message&quot;)">
                          <UIcon name="i-lucide-arrow-up" class="size-4" />
                          <span class="sr-only">Send message</span>
                        </UButton>
                      </div>
                    </div>
                  </template>
                </UChatPrompt>
              </UForm>
            </div>
          </div>
        </div>
        <USeparator orientation="horizontal" aria-label="Resize workflow workspace" class="group bg-(--ui-border) relative z-10 hidden w-px shrink-0 cursor-col-resize outline-none min-[980px]:block" />
        <div class="hidden min-h-0 min-w-[360px] min-[980px]:flex shrink-0" style="width:72%">
          <section class="bg-default flex size-full min-h-0 flex-col overflow-hidden">
            <header class="flex min-h-12 shrink-0 items-center gap-3 border-b px-3 border-default">
              <span class="bg-muted grid size-7 shrink-0 place-items-center rounded-lg">
                <UIcon name="i-lucide-history" class="text-muted size-3.5" />
              </span>
              <div class="min-w-0 flex-1">
                <p class="truncate text-xs font-medium">Multi-agent release review</p>
                <p class="text-muted truncate text-[10px]">Run review · planned and observed handoffs</p>
              </div>
              <div class="items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 hidden h-6 gap-1.5 rounded-md px-2 text-[10px] font-normal sm:flex border-default">
                <span class="size-1.5 rounded-full bg-success" />
                Evidence complete
              </div>
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default rounded-md size-7 px-0 text-xs shadow-xs sm:h-7 sm:w-auto sm:px-2.5" aria-label="Replay run" type="button" @click="openAction(&quot;Replay run&quot;)">
                <UIcon name="i-lucide-play" class="size-4" />
                <span class="hidden sm:inline">Replay run</span>
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-7" aria-label="Expand workflow workspace" type="button" @click="openAction(&quot;Expand workflow workspace&quot;)">
                <UIcon name="i-lucide-expand" class="size-4" />
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-7" aria-label="Close workflow workspace" type="button" @click="openAction(&quot;Close workflow workspace&quot;)">
                <UIcon name="i-lucide-x" class="size-4" />
              </UButton>
            </header>
            <div class="bg-(--ui-bg-muted)/10 flex h-14 shrink-0 items-center gap-2 overflow-x-auto border-b px-3 border-default">
              <div class="bg-default flex min-w-24 items-center gap-2 rounded-lg border px-2.5 py-2 shadow-xs border-default">
                <span class="grid size-4 shrink-0 place-items-center rounded-full border border-success bg-success">
                  <UIcon name="i-lucide-check" class="size-2.5 text-inverted" />
                </span>
                <span class="truncate text-[10px] font-medium">Plan</span>
              </div>
              <span class="bg-(--ui-border) h-px w-4 shrink-0" />
              <div class="bg-default flex min-w-24 items-center gap-2 rounded-lg border px-2.5 py-2 shadow-xs border-default">
                <span class="grid size-4 shrink-0 place-items-center rounded-full border border-success bg-success">
                  <UIcon name="i-lucide-check" class="size-2.5 text-inverted" />
                </span>
                <span class="truncate text-[10px] font-medium">Parallel work</span>
              </div>
              <span class="bg-(--ui-border) h-px w-4 shrink-0" />
              <div class="bg-default flex min-w-24 items-center gap-2 rounded-lg border px-2.5 py-2 shadow-xs border-default">
                <span class="grid size-4 shrink-0 place-items-center rounded-full border border-success bg-success">
                  <UIcon name="i-lucide-check" class="size-2.5 text-inverted" />
                </span>
                <span class="truncate text-[10px] font-medium">Verification</span>
              </div>
              <span class="bg-(--ui-border) h-px w-4 shrink-0" />
              <div class="bg-default flex min-w-24 items-center gap-2 rounded-lg border px-2.5 py-2 shadow-xs border-default">
                <span class="grid size-4 shrink-0 place-items-center rounded-full border border-warning bg-warning">
                  <UIcon name="i-lucide-rotate-cw" class="size-2.5 text-inverted" />
                </span>
                <span class="truncate text-[10px] font-medium">Revision</span>
              </div>
              <span class="bg-(--ui-border) h-px w-4 shrink-0" />
              <div class="bg-default flex min-w-24 items-center gap-2 rounded-lg border px-2.5 py-2 shadow-xs border-default">
                <span class="grid size-4 shrink-0 place-items-center rounded-full border border-success bg-success">
                  <UIcon name="i-lucide-check" class="size-2.5 text-inverted" />
                </span>
                <span class="truncate text-[10px] font-medium">Approval</span>
              </div>
              <span class="bg-(--ui-border) h-px w-4 shrink-0" />
              <div class="bg-default flex min-w-24 items-center gap-2 rounded-lg border px-2.5 py-2 shadow-xs border-default">
                <span class="grid size-4 shrink-0 place-items-center rounded-full border border-success bg-success">
                  <UIcon name="i-lucide-check" class="size-2.5 text-inverted" />
                </span>
                <span class="truncate text-[10px] font-medium">Release</span>
              </div>
            </div>
            <div class="relative flex min-h-0 flex-1">
              <div class="relative min-h-0 min-w-0 flex-1 overflow-hidden">
                <!-- Workflow canvas 1: local pointer and zoom handlers -->
                <div aria-label="Multi-agent release review" class="workflow-canvas !bg-default light" style="width: 100%; height: 100%; overflow: hidden; position: relative; z-index: 0;" role="application" :ref="element => setCanvasRoot(1, element)" @pointerdown="canvasPointerDown(1, $event)" @pointermove="canvasPointerMove($event)" @pointerup="canvasDrag = undefined" @pointercancel="canvasDrag = undefined" @wheel.ctrl.prevent="zoomCanvas(1, $event.deltaY < 0 ? 1.1 : 1 / 1.1)">
                  <div class="workflow-canvas__renderer" style="position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;">
                    <div class="workflow-canvas__pane selection" style="position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;">
                      <div class="workflow-canvas__viewport workflow-canvas__viewport workflow-canvas__container" style="transform: translate(-45.35px, 239.95px) scale(0.55);">
                        <div class="workflow-canvas__edges">
                          <svg class="workflow-canvas__marker" width="100%" height="100%">
                            <defs>
                              <marker class="workflow-canvas__arrowhead" id="1__color=var(--border)&amp;height=14&amp;type=arrowclosed&amp;width=14">
                                <polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4" style="stroke-width: 1; stroke: var(--ui-border); fill: var(--ui-border);" />
                              </marker>
                              <marker class="workflow-canvas__arrowhead" id="1__color=var(--foreground)&amp;height=14&amp;type=arrowclosed&amp;width=14">
                                <polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4" style="stroke-width: 1; stroke: var(--ui-text-highlighted); fill: var(--ui-text-highlighted);" />
                              </marker>
                            </defs>
                          </svg>
                          <svg style="z-index: 0;" viewBox="0 0 165 82.5" width="100%" height="100%">
                            <g class="workflow-canvas__edge workflow-canvas__edge-default nopan selectable" role="group" data-id="planner-researcher" aria-label="Edge from planner to researcher">
                              <path id="planner-researcher" d="M268,283 C307,283 307,141 346,141" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-border); stroke-width: 1.5;" />
                              <path d="M268,283 C307,283 307,141 346,141" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                            </g>
                          </svg>
                          <svg style="z-index: 0;" viewBox="0 0 165 82.5" width="100%" height="100%">
                            <g class="workflow-canvas__edge workflow-canvas__edge-default nopan selectable" role="group" data-id="planner-implementer" aria-label="Edge from planner to implementer">
                              <path id="planner-implementer" d="M268,283 C307,283 307,441 346,441" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-border); stroke-width: 1.5;" />
                              <path d="M268,283 C307,283 307,441 346,441" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                            </g>
                          </svg>
                          <svg style="z-index: 0;" viewBox="0 0 165 82.5" width="100%" height="100%">
                            <g class="workflow-canvas__edge workflow-canvas__edge-default nopan selectable" role="group" data-id="researcher-tester" aria-label="Edge from researcher to tester">
                              <path id="researcher-tester" d="M618,141 C667,141 667,130.5 716,130.5" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-border); stroke-width: 1.5;" />
                              <path d="M618,141 C667,141 667,130.5 716,130.5" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                            </g>
                          </svg>
                          <svg style="z-index: 0;" viewBox="0 0 165 82.5" width="100%" height="100%">
                            <g class="workflow-canvas__edge workflow-canvas__edge-animated nopan selectable" role="group" data-id="implementer-reviewer" aria-label="Edge from implementer to reviewer">
                              <path id="implementer-reviewer" d="M618,441 C667,441 667,441 716,441" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-highlighted); stroke-width: 1.5;" />
                              <path d="M618,441 C667,441 667,441 716,441" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                              <circle fill="var(--ui-primary)" r="3.5">
                                <animatemotion />
                              </circle>
                            </g>
                          </svg>
                          <svg style="z-index: 0;" viewBox="0 0 165 82.5" width="100%" height="100%">
                            <g class="workflow-canvas__edge workflow-canvas__edge-default nopan selectable" role="group" data-id="tester-approval" aria-label="Edge from tester to approval">
                              <path id="tester-approval" d="M988,130.5 C1037,130.5 1037,280 1086,280" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-border); stroke-width: 1.5;" />
                              <path d="M988,130.5 C1037,130.5 1037,280 1086,280" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                            </g>
                          </svg>
                          <svg style="z-index: 0;" viewBox="0 0 165 82.5" width="100%" height="100%">
                            <g class="workflow-canvas__edge workflow-canvas__edge-default nopan selectable" role="group" data-id="reviewer-approval" aria-label="Edge from reviewer to approval">
                              <path id="reviewer-approval" d="M988,441 C1037,441 1037,280 1086,280" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-border); stroke-width: 1.5;" />
                              <path d="M988,441 C1037,441 1037,280 1086,280" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                            </g>
                          </svg>
                          <svg style="z-index: 0;" viewBox="0 0 165 82.5" width="100%" height="100%">
                            <g class="workflow-canvas__edge workflow-canvas__edge-default nopan selectable" role="group" data-id="approval-published" aria-label="Edge from approval to published">
                              <path id="approval-published" d="M1358,280 C1402,280 1402,280 1446,280" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-border); stroke-width: 1.5;" />
                              <path d="M1358,280 C1402,280 1402,280 1446,280" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                            </g>
                          </svg>
                          <svg style="z-index: 0;" viewBox="0 0 165 82.5" width="100%" height="100%">
                            <g class="workflow-canvas__edge workflow-canvas__edge-temporary nopan selectable" role="group" data-id="reviewer-implementer" aria-label="Edge from reviewer to implementer">
                              <path id="reviewer-implementer" d="M988 441L1008 441L326 441L346 441" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-dasharray: 3, 7; stroke-linecap: round; stroke-width: 1.25; opacity: 0.55;" />
                              <path d="M988 441L1008 441L326 441L346 441" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                            </g>
                          </svg>
                        </div>
                        <div class="workflow-canvas__edgelabel-renderer" />
                        <div class="workflow-canvas__nodes" style="position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;">
                          <div class="workflow-canvas__node workflow-canvas__node-workflow selectable" data-id="planner" role="group" style="z-index: 0; transform: translate(0px, 180px); pointer-events: all; visibility: visible;">
                            <div class="text-default border group/node node-container bg-default relative h-auto w-[16.5rem] gap-0 overflow-visible rounded-xl py-0 shadow-[0_8px_24px_color-mix(in_oklab,_var(--ui-info)_7.000000000000001%,_transparent)] transition-[border-color,box-shadow,transform] duration-200 border-default">
                              <div data-nodeid="planner" data-id="1-planner-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan size-2.5! border-2! border-(--ui-bg)! bg-(--ui-text-muted)! shadow-[0_0_0_1px_var(--ui-border)]! transition-colors group-hover/node:bg-(--ui-text-highlighted)! source connectable connectablestart connectableend connectionindicator" />
                              <div class="flex flex-col space-y-1.5 p-6 bg-(--ui-bg-muted)/25 gap-1 rounded-t-xl border-b py-3 pr-20 pl-3.5 border-default">
                                <div class="flex min-w-0 items-center gap-2.5">
                                  <span class="grid size-8 shrink-0 place-items-center rounded-lg ring-1 bg-muted text-muted ring-default">
                                    <UIcon name="i-lucide-user-round" class="size-3.5" />
                                  </span>
                                  <div class="min-w-0">
                                    <p class="text-muted truncate font-mono text-[9px] tracking-[0.08em] uppercase">Planning agent</p>
                                    <div class="font-semibold tracking-tight text-[13px] truncate">Plan release migration</div>
                                  </div>
                                </div>
                                <div class="absolute top-3 right-3 flex items-center">
                                  <span class="inline-flex items-center gap-1 text-[10px] font-medium text-success dark:text-success">
                                    <UIcon name="i-lucide-circle-check" class="size-3" />
                                    Completed
                                  </span>
                                </div>
                                <div class="text-muted text-[11px] leading-4 mt-1.5 line-clamp-2">Break the request into verifiable workstreams and checkpoints.</div>
                              </div>
                              <div class="p-6 px-3.5 py-3">
                                <div class="space-y-2">
                                  <div class="flex min-w-0 items-center gap-2 text-[10px]">
                                    <span class="relative grid size-3 shrink-0 place-items-center rounded-full border border-success bg-success">
                                      <UIcon name="i-lucide-check" class="size-2 text-inverted" />
                                    </span>
                                    <span class="min-w-0 truncate">Map requirements</span>
                                  </div>
                                  <div class="flex min-w-0 items-center gap-2 text-[10px]">
                                    <span class="relative grid size-3 shrink-0 place-items-center rounded-full border border-success bg-success">
                                      <UIcon name="i-lucide-check" class="size-2 text-inverted" />
                                    </span>
                                    <span class="min-w-0 truncate">Assign workstreams</span>
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center p-6 bg-(--ui-bg-muted)/15 min-h-9 rounded-b-xl border-t px-3.5 py-2 justify-between gap-3 border-default">
                                <div class="flex min-w-0 items-center gap-1.5 text-[10px]">
                                  <span class="size-1.5 shrink-0 rounded-full bg-success" />
                                  <span class="text-muted truncate">Planner</span>
                                </div>
                                <div class="flex shrink-0 items-center gap-2">
                                  <span class="text-muted font-mono text-[9px]">100%</span>
                                  <span class="bg-muted block h-1 w-10 overflow-hidden rounded-full">
                                    <span class="block h-full rounded-full bg-(--ui-text-highlighted)/65" style="width: 100%;" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="workflow-canvas__node workflow-canvas__node-workflow selectable" data-id="researcher" role="group" style="z-index: 0; transform: translate(350px, 30px); pointer-events: all; visibility: visible;">
                            <div class="text-default border group/node node-container bg-default relative h-auto w-[16.5rem] gap-0 overflow-visible rounded-xl py-0 shadow-[0_8px_24px_color-mix(in_oklab,_var(--ui-info)_7.000000000000001%,_transparent)] transition-[border-color,box-shadow,transform] duration-200 border-default">
                              <div data-nodeid="researcher" data-id="1-researcher-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan size-2.5! border-2! border-(--ui-bg)! bg-(--ui-text-muted)! shadow-[0_0_0_1px_var(--ui-border)]! transition-colors group-hover/node:bg-(--ui-text-highlighted)! target connectable connectablestart connectableend connectionindicator" />
                              <div data-nodeid="researcher" data-id="1-researcher-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan size-2.5! border-2! border-(--ui-bg)! bg-(--ui-text-muted)! shadow-[0_0_0_1px_var(--ui-border)]! transition-colors group-hover/node:bg-(--ui-text-highlighted)! source connectable connectablestart connectableend connectionindicator" />
                              <div class="flex flex-col space-y-1.5 p-6 bg-(--ui-bg-muted)/25 gap-1 rounded-t-xl border-b py-3 pr-20 pl-3.5 border-default">
                                <div class="flex min-w-0 items-center gap-2.5">
                                  <span class="grid size-8 shrink-0 place-items-center rounded-lg ring-1 bg-muted text-muted ring-default">
                                    <UIcon name="i-lucide-user-round" class="size-3.5" />
                                  </span>
                                  <div class="min-w-0">
                                    <p class="text-muted truncate font-mono text-[9px] tracking-[0.08em] uppercase">Research agent</p>
                                    <div class="font-semibold tracking-tight text-[13px] truncate">Audit dependencies</div>
                                  </div>
                                </div>
                                <div class="absolute top-3 right-3 flex items-center">
                                  <span class="inline-flex items-center gap-1 text-[10px] font-medium text-success dark:text-success">
                                    <UIcon name="i-lucide-circle-check" class="size-3" />
                                    Completed
                                  </span>
                                </div>
                                <div class="text-muted text-[11px] leading-4 mt-1.5 line-clamp-2">Verify package contracts and migration risks independently.</div>
                              </div>
                              <div class="p-6 px-3.5 py-3">
                                <div class="bg-(--ui-bg-muted)/35 space-y-1.5 rounded-lg border px-2.5 py-2 border-default">
                                  <div class="flex min-w-0 items-center gap-2 text-[10px]">
                                    <UIcon name="i-lucide-square-terminal" class="text-muted size-3 shrink-0" />
                                    <span class="text-muted shrink-0">Tool</span>
                                    <span class="min-w-0 truncate font-mono">search</span>
                                  </div>
                                  <div class="flex min-w-0 items-center gap-2 text-[10px]">
                                    <UIcon name="i-lucide-file-code-corner" class="text-muted size-3 shrink-0" />
                                    <span class="text-muted shrink-0">File</span>
                                    <span class="min-w-0 truncate font-mono">package.json</span>
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center p-6 bg-(--ui-bg-muted)/15 min-h-9 rounded-b-xl border-t px-3.5 py-2 justify-between gap-3 border-default">
                                <div class="flex min-w-0 items-center gap-1.5 text-[10px]">
                                  <span class="size-1.5 shrink-0 rounded-full bg-success" />
                                  <span class="text-muted truncate">Researcher</span>
                                </div>
                                <div class="flex shrink-0 items-center gap-2">
                                  <span class="text-muted font-mono text-[9px]">100%</span>
                                  <span class="bg-muted block h-1 w-10 overflow-hidden rounded-full">
                                    <span class="block h-full rounded-full bg-(--ui-text-highlighted)/65" style="width: 100%;" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="workflow-canvas__node workflow-canvas__node-workflow selectable" data-id="implementer" role="group" style="z-index: 0; transform: translate(350px, 330px); pointer-events: all; visibility: visible;">
                            <div class="text-default border group/node node-container bg-default relative h-auto w-[16.5rem] gap-0 overflow-visible rounded-xl py-0 shadow-[0_8px_24px_color-mix(in_oklab,_var(--ui-info)_7.000000000000001%,_transparent)] transition-[border-color,box-shadow,transform] duration-200 border-warning/50">
                              <div data-nodeid="implementer" data-id="1-implementer-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan size-2.5! border-2! border-(--ui-bg)! bg-(--ui-text-muted)! shadow-[0_0_0_1px_var(--ui-border)]! transition-colors group-hover/node:bg-(--ui-text-highlighted)! target connectable connectablestart connectableend connectionindicator" />
                              <div data-nodeid="implementer" data-id="1-implementer-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan size-2.5! border-2! border-(--ui-bg)! bg-(--ui-text-muted)! shadow-[0_0_0_1px_var(--ui-border)]! transition-colors group-hover/node:bg-(--ui-text-highlighted)! source connectable connectablestart connectableend connectionindicator" />
                              <div class="flex flex-col space-y-1.5 p-6 bg-(--ui-bg-muted)/25 gap-1 rounded-t-xl border-b py-3 pr-20 pl-3.5 border-default">
                                <div class="flex min-w-0 items-center gap-2.5">
                                  <span class="grid size-8 shrink-0 place-items-center rounded-lg ring-1 bg-muted text-muted ring-default">
                                    <UIcon name="i-lucide-braces" class="size-3.5" />
                                  </span>
                                  <div class="min-w-0">
                                    <p class="text-muted truncate font-mono text-[9px] tracking-[0.08em] uppercase">Implementation agent</p>
                                    <div class="font-semibold tracking-tight text-[13px] truncate">Apply migration</div>
                                  </div>
                                </div>
                                <div class="absolute top-3 right-3 flex items-center">
                                  <span class="inline-flex items-center gap-1 text-[10px] font-medium text-warning dark:text-warning">
                                    <UIcon name="i-lucide-rotate-cw" class="size-3" />
                                    Revised
                                  </span>
                                </div>
                                <div class="text-muted text-[11px] leading-4 mt-1.5 line-clamp-2">Implement the scoped changes and record touched surfaces.</div>
                              </div>
                              <div class="p-6 px-3.5 py-3">
                                <div class="bg-(--ui-bg-muted)/35 space-y-1.5 rounded-lg border px-2.5 py-2 border-default">
                                  <div class="flex min-w-0 items-center gap-2 text-[10px]">
                                    <UIcon name="i-lucide-square-terminal" class="text-muted size-3 shrink-0" />
                                    <span class="text-muted shrink-0">Tool</span>
                                    <span class="min-w-0 truncate font-mono">apply_patch</span>
                                  </div>
                                  <div class="flex min-w-0 items-center gap-2 text-[10px]">
                                    <UIcon name="i-lucide-file-code-corner" class="text-muted size-3 shrink-0" />
                                    <span class="text-muted shrink-0">File</span>
                                    <span class="min-w-0 truncate font-mono">src/lib/runtime-adapter.ts</span>
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center p-6 bg-(--ui-bg-muted)/15 min-h-9 rounded-b-xl border-t px-3.5 py-2 justify-between gap-3 border-default">
                                <div class="flex min-w-0 items-center gap-1.5 text-[10px]">
                                  <span class="size-1.5 shrink-0 rounded-full bg-warning" />
                                  <span class="text-muted truncate">Implementer</span>
                                </div>
                                <div class="flex shrink-0 items-center gap-2">
                                  <span class="text-muted font-mono text-[9px]">100%</span>
                                  <span class="bg-muted block h-1 w-10 overflow-hidden rounded-full">
                                    <span class="block h-full rounded-full bg-(--ui-text-highlighted)/65" style="width: 100%;" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="workflow-canvas__node workflow-canvas__node-workflow selectable" data-id="tester" role="group" style="z-index: 0; transform: translate(720px, 30px); pointer-events: all; visibility: visible;">
                            <div class="text-default border group/node node-container bg-default relative h-auto w-[16.5rem] gap-0 overflow-visible rounded-xl py-0 shadow-[0_8px_24px_color-mix(in_oklab,_var(--ui-info)_7.000000000000001%,_transparent)] transition-[border-color,box-shadow,transform] duration-200 border-default">
                              <div data-nodeid="tester" data-id="1-tester-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan size-2.5! border-2! border-(--ui-bg)! bg-(--ui-text-muted)! shadow-[0_0_0_1px_var(--ui-border)]! transition-colors group-hover/node:bg-(--ui-text-highlighted)! target connectable connectablestart connectableend connectionindicator" />
                              <div data-nodeid="tester" data-id="1-tester-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan size-2.5! border-2! border-(--ui-bg)! bg-(--ui-text-muted)! shadow-[0_0_0_1px_var(--ui-border)]! transition-colors group-hover/node:bg-(--ui-text-highlighted)! source connectable connectablestart connectableend connectionindicator" />
                              <div class="flex flex-col space-y-1.5 p-6 bg-(--ui-bg-muted)/25 gap-1 rounded-t-xl border-b py-3 pr-20 pl-3.5 border-default">
                                <div class="flex min-w-0 items-center gap-2.5">
                                  <span class="grid size-8 shrink-0 place-items-center rounded-lg ring-1 bg-muted text-muted ring-default">
                                    <UIcon name="i-lucide-wrench" class="size-3.5" />
                                  </span>
                                  <div class="min-w-0">
                                    <p class="text-muted truncate font-mono text-[9px] tracking-[0.08em] uppercase">Verification agent</p>
                                    <div class="font-semibold tracking-tight text-[13px] truncate">Verify contracts</div>
                                  </div>
                                </div>
                                <div class="absolute top-3 right-3 flex items-center">
                                  <span class="inline-flex items-center gap-1 text-[10px] font-medium text-success dark:text-success">
                                    <UIcon name="i-lucide-circle-check" class="size-3" />
                                    Completed
                                  </span>
                                </div>
                                <div class="text-muted text-[11px] leading-4 mt-1.5 line-clamp-2">Run focused checks against both parallel workstreams.</div>
                              </div>
                              <div class="p-6 px-3.5 py-3">
                                <div class="bg-(--ui-bg-muted)/35 space-y-1.5 rounded-lg border px-2.5 py-2 border-default">
                                  <div class="flex min-w-0 items-center gap-2 text-[10px]">
                                    <UIcon name="i-lucide-square-terminal" class="text-muted size-3 shrink-0" />
                                    <span class="text-muted shrink-0">Tool</span>
                                    <span class="min-w-0 truncate font-mono">pnpm test</span>
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center p-6 bg-(--ui-bg-muted)/15 min-h-9 rounded-b-xl border-t px-3.5 py-2 justify-between gap-3 border-default">
                                <div class="flex min-w-0 items-center gap-1.5 text-[10px]">
                                  <span class="size-1.5 shrink-0 rounded-full bg-success" />
                                  <span class="text-muted truncate">Tester</span>
                                </div>
                                <div class="flex shrink-0 items-center gap-2">
                                  <span class="text-muted font-mono text-[9px]">100%</span>
                                  <span class="bg-muted block h-1 w-10 overflow-hidden rounded-full">
                                    <span class="block h-full rounded-full bg-(--ui-text-highlighted)/65" style="width: 100%;" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="workflow-canvas__node workflow-canvas__node-workflow selectable" data-id="reviewer" role="group" style="z-index: 0; transform: translate(720px, 330px); pointer-events: all; visibility: visible;">
                            <div class="text-default border group/node node-container bg-default relative h-auto w-[16.5rem] gap-0 overflow-visible rounded-xl py-0 shadow-[0_8px_24px_color-mix(in_oklab,_var(--ui-info)_7.000000000000001%,_transparent)] transition-[border-color,box-shadow,transform] duration-200 border-default">
                              <div data-nodeid="reviewer" data-id="1-reviewer-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan size-2.5! border-2! border-(--ui-bg)! bg-(--ui-text-muted)! shadow-[0_0_0_1px_var(--ui-border)]! transition-colors group-hover/node:bg-(--ui-text-highlighted)! target connectable connectablestart connectableend connectionindicator" />
                              <div data-nodeid="reviewer" data-id="1-reviewer-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan size-2.5! border-2! border-(--ui-bg)! bg-(--ui-text-muted)! shadow-[0_0_0_1px_var(--ui-border)]! transition-colors group-hover/node:bg-(--ui-text-highlighted)! source connectable connectablestart connectableend connectionindicator" />
                              <div class="flex flex-col space-y-1.5 p-6 bg-(--ui-bg-muted)/25 gap-1 rounded-t-xl border-b py-3 pr-20 pl-3.5 border-default">
                                <div class="flex min-w-0 items-center gap-2.5">
                                  <span class="grid size-8 shrink-0 place-items-center rounded-lg ring-1 bg-muted text-muted ring-default">
                                    <UIcon name="i-lucide-shield-check" class="size-3.5" />
                                  </span>
                                  <div class="min-w-0">
                                    <p class="text-muted truncate font-mono text-[9px] tracking-[0.08em] uppercase">Review agent</p>
                                    <div class="font-semibold tracking-tight text-[13px] truncate">Review changed surfaces</div>
                                  </div>
                                </div>
                                <div class="absolute top-3 right-3 flex items-center">
                                  <span class="inline-flex items-center gap-1 text-[10px] font-medium text-success dark:text-success">
                                    <UIcon name="i-lucide-circle-check" class="size-3" />
                                    Completed
                                  </span>
                                </div>
                                <div class="text-muted text-[11px] leading-4 mt-1.5 line-clamp-2">Compare declared scope with observed files and request one revision.</div>
                              </div>
                              <div class="p-6 px-3.5 py-3">
                                <div class="bg-(--ui-bg-muted)/35 space-y-1.5 rounded-lg border px-2.5 py-2 border-default">
                                  <div class="flex min-w-0 items-center gap-2 text-[10px]">
                                    <UIcon name="i-lucide-square-terminal" class="text-muted size-3 shrink-0" />
                                    <span class="text-muted shrink-0">Tool</span>
                                    <span class="min-w-0 truncate font-mono">diff</span>
                                  </div>
                                  <div class="flex min-w-0 items-center gap-2 text-[10px]">
                                    <UIcon name="i-lucide-file-code-corner" class="text-muted size-3 shrink-0" />
                                    <span class="text-muted shrink-0">File</span>
                                    <span class="min-w-0 truncate font-mono">src/lib/runtime-adapter.ts</span>
                                  </div>
                                </div>
                              </div>
                              <div class="flex items-center p-6 bg-(--ui-bg-muted)/15 min-h-9 rounded-b-xl border-t px-3.5 py-2 justify-between gap-3 border-default">
                                <div class="flex min-w-0 items-center gap-1.5 text-[10px]">
                                  <span class="size-1.5 shrink-0 rounded-full bg-success" />
                                  <span class="text-muted truncate">Reviewer</span>
                                </div>
                                <div class="flex shrink-0 items-center gap-2">
                                  <span class="text-muted font-mono text-[9px]">100%</span>
                                  <span class="bg-muted block h-1 w-10 overflow-hidden rounded-full">
                                    <span class="block h-full rounded-full bg-(--ui-text-highlighted)/65" style="width: 100%;" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="workflow-canvas__node workflow-canvas__node-workflow selectable" data-id="approval" role="group" style="z-index: 0; transform: translate(1090px, 180px); pointer-events: all; visibility: visible;">
                            <div class="text-default border group/node node-container bg-default relative h-auto w-[16.5rem] gap-0 overflow-visible rounded-xl py-0 shadow-[0_8px_24px_color-mix(in_oklab,_var(--ui-info)_7.000000000000001%,_transparent)] transition-[border-color,box-shadow,transform] duration-200 border-default">
                              <div data-nodeid="approval" data-id="1-approval-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan size-2.5! border-2! border-(--ui-bg)! bg-(--ui-text-muted)! shadow-[0_0_0_1px_var(--ui-border)]! transition-colors group-hover/node:bg-(--ui-text-highlighted)! target connectable connectablestart connectableend connectionindicator" />
                              <div data-nodeid="approval" data-id="1-approval-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan size-2.5! border-2! border-(--ui-bg)! bg-(--ui-text-muted)! shadow-[0_0_0_1px_var(--ui-border)]! transition-colors group-hover/node:bg-(--ui-text-highlighted)! source connectable connectablestart connectableend connectionindicator" />
                              <div class="flex flex-col space-y-1.5 p-6 bg-(--ui-bg-muted)/25 gap-1 rounded-t-xl border-b py-3 pr-20 pl-3.5 border-default">
                                <div class="flex min-w-0 items-center gap-2.5">
                                  <span class="grid size-8 shrink-0 place-items-center rounded-lg ring-1 bg-muted text-muted ring-default">
                                    <UIcon name="i-lucide-lock-keyhole" class="size-3.5" />
                                  </span>
                                  <div class="min-w-0">
                                    <p class="text-muted truncate font-mono text-[9px] tracking-[0.08em] uppercase">Human checkpoint</p>
                                    <div class="font-semibold tracking-tight text-[13px] truncate">Approve release</div>
                                  </div>
                                </div>
                                <div class="absolute top-3 right-3 flex items-center">
                                  <span class="inline-flex items-center gap-1 text-[10px] font-medium text-success dark:text-success">
                                    <UIcon name="i-lucide-circle-check" class="size-3" />
                                    Completed
                                  </span>
                                </div>
                                <div class="text-muted text-[11px] leading-4 mt-1.5 line-clamp-2">Review evidence from every agent before publishing the run.</div>
                              </div>
                              <div class="p-6 px-3.5 py-3">
                                <p class="text-muted text-[10px] leading-4">Select the node to inspect its configuration and dependencies.</p>
                              </div>
                              <div class="flex items-center p-6 bg-(--ui-bg-muted)/15 min-h-9 rounded-b-xl border-t px-3.5 py-2 justify-between gap-3 border-default">
                                <div class="flex min-w-0 items-center gap-1.5 text-[10px]">
                                  <span class="size-1.5 shrink-0 rounded-full bg-success" />
                                  <span class="text-muted truncate">Rakesh</span>
                                </div>
                                <div class="flex shrink-0 items-center gap-2">
                                  <span class="text-muted font-mono text-[9px]">100%</span>
                                  <span class="bg-muted block h-1 w-10 overflow-hidden rounded-full">
                                    <span class="block h-full rounded-full bg-(--ui-text-highlighted)/65" style="width: 100%;" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="workflow-canvas__node workflow-canvas__node-workflow selectable" data-id="published" role="group" style="z-index: 0; transform: translate(1450px, 180px); pointer-events: all; visibility: visible;">
                            <div class="text-default border group/node node-container bg-default relative h-auto w-[16.5rem] gap-0 overflow-visible rounded-xl py-0 shadow-[0_8px_24px_color-mix(in_oklab,_var(--ui-info)_7.000000000000001%,_transparent)] transition-[border-color,box-shadow,transform] duration-200 border-default">
                              <div data-nodeid="published" data-id="1-published-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan size-2.5! border-2! border-(--ui-bg)! bg-(--ui-text-muted)! shadow-[0_0_0_1px_var(--ui-border)]! transition-colors group-hover/node:bg-(--ui-text-highlighted)! target connectable connectablestart connectableend connectionindicator" />
                              <div class="flex flex-col space-y-1.5 p-6 bg-(--ui-bg-muted)/25 gap-1 rounded-t-xl border-b py-3 pr-20 pl-3.5 border-default">
                                <div class="flex min-w-0 items-center gap-2.5">
                                  <span class="grid size-8 shrink-0 place-items-center rounded-lg ring-1 bg-muted text-muted ring-default">
                                    <UIcon name="i-lucide-shield-check" class="size-3.5" />
                                  </span>
                                  <div class="min-w-0">
                                    <p class="text-muted truncate font-mono text-[9px] tracking-[0.08em] uppercase">Run output</p>
                                    <div class="font-semibold tracking-tight text-[13px] truncate">Release ready</div>
                                  </div>
                                </div>
                                <div class="absolute top-3 right-3 flex items-center">
                                  <span class="inline-flex items-center gap-1 text-[10px] font-medium text-success dark:text-success">
                                    <UIcon name="i-lucide-circle-check" class="size-3" />
                                    Completed
                                  </span>
                                </div>
                                <div class="text-muted text-[11px] leading-4 mt-1.5 line-clamp-2">All required evidence is attached and the guarded path completed.</div>
                              </div>
                              <div class="p-6 px-3.5 py-3">
                                <p class="text-muted text-[10px] leading-4">Select the node to inspect its configuration and dependencies.</p>
                              </div>
                              <div class="flex items-center p-6 bg-(--ui-bg-muted)/15 min-h-9 rounded-b-xl border-t px-3.5 py-2 justify-between gap-3 border-default">
                                <div class="flex min-w-0 items-center gap-1.5 text-[10px]">
                                  <span class="size-1.5 shrink-0 rounded-full bg-success" />
                                  <span class="text-muted truncate">Workflow system</span>
                                </div>
                                <div class="flex shrink-0 items-center gap-2">
                                  <span class="text-muted font-mono text-[9px]">100%</span>
                                  <span class="bg-muted block h-1 w-10 overflow-hidden rounded-full">
                                    <span class="block h-full rounded-full bg-(--ui-text-highlighted)/65" style="width: 100%;" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="workflow-canvas__viewport-portal" />
                      </div>
                    </div>
                  </div>
                  <svg class="workflow-canvas__background" style="position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; --xy-background-pattern-color-props: color-mix(in oklab, var(--ui-text-muted) 32%, transparent);" width="100%" height="100%">
                    <pattern id="pattern-1" x="-1.3500000000000192" y="2.3499999999999694" width="8.8" height="8.8" patternUnits="userSpaceOnUse" patternTransform="translate(-4.4,-4.4)">
                      <circle cx="0.41250000000000003" cy="0.41250000000000003" r="0.41250000000000003" class="workflow-canvas__background-pattern dots" />
                    </pattern>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-1)" />
                  </svg>
                  <div class="workflow-canvas__panel workflow-canvas__controls vertical bg-default! m-3! gap-0.5 overflow-hidden rounded-xl! border p-1 shadow-lg! [&amp;&gt;button]:text-muted! [&amp;&gt;button]:hover:bg-muted! [&amp;&gt;button]:hover:text-highlighted! [&amp;&gt;button]:size-8! [&amp;&gt;button]:rounded-lg! [&amp;&gt;button]:border-0! [&amp;&gt;button]:bg-transparent! bottom left border-default" aria-label="Control Panel">
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
                <div class="bg-(--ui-bg)/90 absolute right-3 bottom-3 z-10 hidden rounded-lg border px-1 shadow-sm backdrop-blur lg:block border-default">
                  <div class="flex items-center gap-3 px-2 py-1 text-[10px]">
                    <span class="text-muted flex items-center gap-1.5 capitalize">
                      <span class="size-1.5 rounded-full bg-info" />
                      running
                    </span>
                    <span class="text-muted flex items-center gap-1.5 capitalize">
                      <span class="size-1.5 rounded-full bg-success" />
                      completed
                    </span>
                    <span class="text-muted flex items-center gap-1.5 capitalize">
                      <span class="size-1.5 rounded-full bg-(--ui-text-muted)/50" />
                      waiting
                    </span>
                    <span class="text-muted flex items-center gap-1.5 capitalize">
                      <span class="size-1.5 rounded-full bg-warning" />
                      blocked
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-default flex h-10 shrink-0 items-center gap-3 overflow-x-auto border-t px-3 text-[10px] border-default">
              <span class="flex shrink-0 items-center gap-1.5 font-medium">
                <UIcon name="i-lucide-shield-check" class="size-3.5" />
                Run evidence
              </span>
              <span class="bg-(--ui-border) h-4 w-px shrink-0" />
              <span class="text-muted shrink-0">5 agents</span>
              <span class="text-muted shrink-0">1 revision</span>
              <span class="text-muted shrink-0">6 evidence items</span>
              <span class="ml-auto flex shrink-0 items-center gap-1.5 text-success">
                <UIcon name="i-lucide-check" class="size-3" />
                Human approved
              </span>
            </div>
          </section>
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
