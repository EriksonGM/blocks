<!-- Page: /ai-chat/canvas-workbench | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Subagent canvas · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "sendAFollowUpEnterToSubmit": "",
  "sendAFollowUpEnterToSubmit2": "",
  "sendAFollowUpEnterToSubmit3": "",
  "openATask": "Open a task"
})

const openATaskOptions = [
  "Map the onboarding flow",
  "Build the invite experience",
  "Review the implementation"
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/canvas-workbench">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="m-0 flex min-h-0 flex-1 flex-col">
        <div class="relative flex min-h-0 flex-1 flex-col">
          <!-- Workflow canvas 1: local pointer and zoom handlers -->
          <div style="width:100%;height:100%;overflow:hidden;position:relative;z-index:0" class="workflow-canvas !bg-default light" role="application" :ref="element => setCanvasRoot(1, element)" @pointerdown="canvasPointerDown(1, $event)" @pointermove="canvasPointerMove($event)" @pointerup="canvasDrag = undefined" @pointercancel="canvasDrag = undefined" @wheel.ctrl.prevent="zoomCanvas(1, $event.deltaY < 0 ? 1.1 : 1 / 1.1)">
            <div class="workflow-canvas__renderer" style="position:absolute;width:100%;height:100%;top:0;left:0">
              <div class="workflow-canvas__pane selection" style="position:absolute;width:100%;height:100%;top:0;left:0">
                <div class="workflow-canvas__viewport workflow-canvas__viewport workflow-canvas__container" style="transform: translate(109.485px, 41px) scale(0.817822);">
                  <div class="workflow-canvas__edges">
                    <svg style="z-index: 0;" viewBox="0 0 245.34652709960938 122.67327880859375" width="100%" height="100%">
                      <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="research:review" aria-label="Edge from research to review">
                        <path d="M659.9999935040877 239.99994653052175L658.9999935040877 239.99994653052175L 650.4999935040877,239.99994653052175Q 641.9999935040877,239.99994653052175 641.9999935040877,248.49994653052175L 641.9999935040877,760.999909214849Q 641.9999935040877,769.999909214849 650.9999935040877,769.999909214849L659.9999935040877 769.999909214849" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-width: 1.5;" />
                        <path d="M659.9999935040877 239.99994653052175L658.9999935040877 239.99994653052175L 650.4999935040877,239.99994653052175Q 641.9999935040877,239.99994653052175 641.9999935040877,248.49994653052175L 641.9999935040877,760.999909214849Q 641.9999935040877,769.999909214849 650.9999935040877,769.999909214849L659.9999935040877 769.999909214849" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                      </g>
                    </svg>
                    <svg style="z-index: 0;" viewBox="0 0 245.34652709960938 122.67327880859375" width="100%" height="100%">
                      <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="design:review" aria-label="Edge from design to review">
                        <path d="M619.9998525404022 767.5935936204638L637.9998525404022 767.5935936204638L 638.9998877813237,767.5935936204638Q 639.999923022245,767.5935936204638 639.999923022245,768.5936288613852L 639.999923022245,768.9998739739276Q 639.999923022245,769.999909214849 640.9999582631663,769.999909214849L641.9999935040877 769.999909214849L659.9999935040877 769.999909214849" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-width: 1.5;" />
                        <path d="M619.9998525404022 767.5935936204638L637.9998525404022 767.5935936204638L 638.9998877813237,767.5935936204638Q 639.999923022245,767.5935936204638 639.999923022245,768.5936288613852L 639.999923022245,768.9998739739276Q 639.999923022245,769.999909214849 640.9999582631663,769.999909214849L641.9999935040877 769.999909214849L659.9999935040877 769.999909214849" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                      </g>
                    </svg>
                  </div>
                  <div class="workflow-canvas__edgelabel-renderer" />
                  <div class="workflow-canvas__nodes" style="position:absolute;width:100%;height:100%;top:0;left:0">
                    <div class="workflow-canvas__node workflow-canvas__node-agentTask nopan selectable draggable" data-id="research" role="group" style="z-index: 0; transform: translate(680px, 0px); pointer-events: all; visibility: visible; width: 500px; height: 480px;">
                      <article class="brainless-terminal flex h-full w-full flex-col overflow-visible rounded-xl border border-[var(--ui-text-toned)] bg-[var(--ui-bg-inverted)] text-[var(--ui-bg)] shadow-xl shadow-black/10 border-default" aria-label="Research: Map the onboarding flow">
                        <div data-nodeid="research" data-id="1-research-null-target" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !flex !h-7 !w-10 !items-center !justify-center !rounded-md !border-2 !border-[var(--ui-text-muted)] !bg-[var(--ui-bg-inverted)] !font-mono !text-[10px] !font-semibold !text-[var(--ui-bg)] hover:!border-[var(--ui-info)] hover:!bg-[var(--ui-bg-inverted)] target connectable connectablestart connectableend connectionindicator" aria-label="Input to Map the onboarding flow" title="Drop another terminal’s OUT here to connect">
                          <span class="pointer-events-none">IN</span>
                        </div>
                        <div title="Drag this title bar to move the terminal" class="agent-drag flex h-10 shrink-0 items-center gap-2 rounded-t-xl border-b border-[var(--ui-text-highlighted)] bg-[var(--ui-bg-inverted)] px-3 cursor-grab active:cursor-grabbing border-default">
                          <UIcon name="i-lucide-search" class="size-3 shrink-0 text-[var(--ui-text-muted)]" />
                          <span class="min-w-0 truncate font-mono text-[11px]">sub-agent · research — Map the onboarding flow</span>
                          <UButton color="neutral" variant="ghost" class="nodrag ml-auto shrink-0 rounded p-1 text-[var(--ui-text-muted)] hover:bg-(--ui-bg)/10 hover:text-inverted" aria-label="Open Map the onboarding flow" type="button" @click="openAction(&quot;Open Map the onboarding flow&quot;)">
                            <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                          </UButton>
                        </div>
                        <div class="nodrag nopan shrink-0 px-4 pt-3">
                          <div class="min-w-0 rounded-[6px] border border-[var(--ui-text-toned)] px-3 py-3 font-mono text-[13px] leading-[1.7] text-[var(--ui-bg)] sm:px-4 border-default">
                            <div class="flex min-w-0 flex-wrap items-baseline gap-x-2">
                              <span class="font-medium">OpenAI Codex</span>
                              <span class="text-[var(--ui-text-muted)]">(v0.153.4)</span>
                            </div>
                            <div class="mt-2 grid min-w-0 grid-cols-[max-content_minmax(0,1fr)] gap-x-3">
                              <span class="text-[var(--ui-text-muted)]">model:</span>
                              <span class="min-w-0 break-words">gpt-5.6-sol high</span>
                              <span class="text-[var(--ui-text-muted)]">directory:</span>
                              <span class="truncate">shadcnblocks-admin</span>
                            </div>
                          </div>
                        </div>
                        <div class="nodrag nopan nowheel min-h-0 flex-1 overflow-auto px-4 py-3 [scrollbar-color:#444_transparent]" aria-label="Map the onboarding flow activity">
                          <div class="space-y-3">
                            <div class="flex min-w-0 gap-2 font-mono text-[13px] leading-[1.6] text-[var(--ui-bg)]">
                              <span class="min-w-0 flex-1 break-words">
                                <div class="break-words whitespace-pre-wrap">Review the existing team settings and map the invite journey. Identify edge cases around pending invitations, duplicate emails, and role assignment.</div>
                              </span>
                            </div>
                            <div class="font-mono text-[13px] leading-[1.6] text-[var(--ui-bg)]">
                              <div class="break-words whitespace-pre-wrap">I’ll trace the existing team flow and collect the states the invitation dialog needs.</div>
                            </div>
                            <details class="group font-mono text-[13px] leading-[1.55] [&amp;_summary::-webkit-details-marker]:hidden">
                              <summary class="flex min-w-0 list-none items-baseline gap-2 outline-none cursor-pointer focus-visible:ring-1 focus-visible:ring-[var(--ui-info)]/60">
                                <span class="min-w-0 break-words text-[var(--ui-info)]">rg -n 'invite|pending|role' src/features/team</span>
                                <span class="shrink-0 text-[var(--ui-text-muted)] group-open:hidden">▸</span>
                              </summary>
                              <pre class="mt-1 overflow-x-auto pl-4 whitespace-pre-wrap text-[var(--ui-text-muted)]">team-settings.tsx:42  Invite people
invitation-row.tsx:18  status: pending | accepted | expired
permissions.ts:9  owner | admin | member</pre>
                            </details>
                            <div class="font-mono text-[13px] leading-[1.6] text-[var(--ui-bg)]">
                              <div class="break-words whitespace-pre-wrap">The team table already supports pending rows. The missing pieces are duplicate-email handling, expiry, and an explicit Admin permission check.</div>
                            </div>
                            <div class="font-mono text-[13px] leading-[1.6] text-[var(--ui-bg)]">
                              <div class="break-words whitespace-pre-wrap">## Onboarding flow

The primary journey is **invite → accept → join the workspace**.

- Default new invitations to Member. Make Admin an explicit choice.
- Keep pending invitations in the team table with a “Resend invite” action.
- Flag duplicate emails before submission and preserve valid entries.
- Show expired invitations separately from delivery failures.

The invite dialog should return focus to its trigger after closing. On mobile, keep the role selector beside each email and the submit action visible.</div>
                            </div>
                          </div>
                        </div>
                        <div class="nodrag nopan shrink-0 px-4 pb-3">
                          <div class="mb-2 flex min-h-5 items-center justify-between gap-2 font-mono text-[11px]">
                            <span class="text-[var(--ui-text-muted)]">Complete · demo-res</span>
                            <UButton color="neutral" variant="ghost" class="shrink-0 text-[var(--ui-info)] hover:underline" aria-label="Open output ↗" type="button" @click="openAction(&quot;Open output ↗&quot;)">
                              Open output ↗
                            </UButton>
                          </div>
                          <div class="min-w-0 font-mono text-[13px] leading-[1.6]">
                            <div class="min-w-0 py-[1lh] pr-[1ch]" style="background: var(--ui-text-toned); color: var(--ui-bg);">
                              <div class="flex min-w-0 items-center">
                                <UInput v-model="form.sendAFollowUpEnterToSubmit" type="text" aria-label="Message Map the onboarding flow" placeholder="Send a follow-up · Enter to submit" style="color: var(--ui-bg); caret-color: var(--ui-bg);" name="sendAFollowUpEnterToSubmit" class="term-input min-w-0 flex-1 outline-none" :ui="{ base: 'h-full' }" />
                              </div>
                            </div>
                            <div class="flex min-w-0 flex-wrap items-baseline gap-x-3 pl-[2ch] text-[12px]">
                              <span class="min-w-0 break-words">
                                <span style="color: var(--ui-secondary);">gpt-5.6-sol high</span>
                                <span style="color: var(--ui-text-muted);"> · </span>
                                <span style="color: var(--ui-success);">shadcnblocks-admin</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div data-nodeid="research" data-id="1-research-null-source" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !flex !h-7 !w-10 !items-center !justify-center !rounded-md !border-2 !border-[var(--ui-info)] !bg-[var(--ui-info)] !font-mono !text-[10px] !font-semibold !text-[var(--ui-info)] hover:!bg-[var(--ui-info)] source connectable connectablestart connectableend connectionindicator" aria-label="Output from Map the onboarding flow" title="Drag OUT to another terminal’s IN to connect">
                          <span class="pointer-events-none">OUT</span>
                        </div>
                      </article>
                    </div>
                    <div class="workflow-canvas__node workflow-canvas__node-agentTask nopan selectable draggable" data-id="design" role="group" style="z-index: 0; transform: translate(0px, 0px); pointer-events: all; visibility: visible; width: 600px; height: 1010px;">
                      <article class="brainless-terminal flex h-full w-full flex-col overflow-visible rounded-xl border border-[var(--ui-text-toned)] bg-[var(--ui-bg-inverted)] text-[var(--ui-bg)] shadow-xl shadow-black/10 border-default" aria-label="Design: Build the invite experience">
                        <div data-nodeid="design" data-id="1-design-null-target" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !flex !h-7 !w-10 !items-center !justify-center !rounded-md !border-2 !border-[var(--ui-text-muted)] !bg-[var(--ui-bg-inverted)] !font-mono !text-[10px] !font-semibold !text-[var(--ui-bg)] hover:!border-[var(--ui-info)] hover:!bg-[var(--ui-bg-inverted)] target connectable connectablestart connectableend connectionindicator" aria-label="Input to Build the invite experience" title="Drop another terminal’s OUT here to connect" style="top: 24%;">
                          <span class="pointer-events-none">IN</span>
                        </div>
                        <div title="Drag this title bar to move the terminal" class="agent-drag flex h-10 shrink-0 items-center gap-2 rounded-t-xl border-b border-[var(--ui-text-highlighted)] bg-[var(--ui-bg-inverted)] px-3 cursor-grab active:cursor-grabbing border-default">
                          <UIcon name="i-lucide-pencil-ruler" class="size-3 shrink-0 text-[var(--ui-text-muted)]" />
                          <span class="min-w-0 truncate font-mono text-[11px]">main — Build the invite experience</span>
                          <UButton color="neutral" variant="ghost" class="nodrag ml-auto shrink-0 rounded p-1 text-[var(--ui-text-muted)] hover:bg-(--ui-bg)/10 hover:text-inverted" aria-label="Open Build the invite experience" type="button" @click="openAction(&quot;Open Build the invite experience&quot;)">
                            <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                          </UButton>
                        </div>
                        <div class="nodrag nopan shrink-0 px-4 pt-3">
                          <div class="min-w-0 rounded-[6px] border border-[var(--ui-text-toned)] px-3 py-3 font-mono text-[13px] leading-[1.7] text-[var(--ui-bg)] sm:px-4 border-default">
                            <div class="flex min-w-0 flex-wrap items-baseline gap-x-2">
                              <span class="font-medium">OpenAI Codex</span>
                              <span class="text-[var(--ui-text-muted)]">(v0.153.4)</span>
                            </div>
                            <div class="mt-2 grid min-w-0 grid-cols-[max-content_minmax(0,1fr)] gap-x-3">
                              <span class="text-[var(--ui-text-muted)]">model:</span>
                              <span class="min-w-0 break-words">gpt-5.6-sol high</span>
                              <span class="text-[var(--ui-text-muted)]">directory:</span>
                              <span class="truncate">shadcnblocks-admin</span>
                            </div>
                          </div>
                        </div>
                        <div class="nodrag nopan nowheel min-h-0 flex-1 overflow-auto px-4 py-3 [scrollbar-color:#444_transparent]" aria-label="Build the invite experience activity">
                          <div class="space-y-3">
                            <div class="flex min-w-0 gap-2 font-mono text-[13px] leading-[1.6] text-[var(--ui-bg)]">
                              <span class="min-w-0 flex-1 break-words">
                                <div class="break-words whitespace-pre-wrap">Create a team invitation dialog using the existing shadcn components. Include email entry, role selection, pending invitations, and clear success and error states.</div>
                              </span>
                            </div>
                            <div class="font-mono text-[13px] leading-[1.6] text-[var(--ui-bg)]">
                              <div class="break-words whitespace-pre-wrap">I’ll reuse the team settings layout and build the invite dialog with the existing Field, Select, and Dialog components.</div>
                            </div>
                            <details class="group font-mono text-[13px] leading-[1.55] [&amp;_summary::-webkit-details-marker]:hidden">
                              <summary class="flex min-w-0 list-none items-baseline gap-2 outline-none cursor-pointer focus-visible:ring-1 focus-visible:ring-[var(--ui-info)]/60">
                                <span class="min-w-0 break-words text-[var(--ui-info)]">Read src/features/team/team-settings.tsx</span>
                                <span class="shrink-0 text-[var(--ui-text-muted)] group-open:hidden">▸</span>
                              </summary>
                              <pre class="mt-1 overflow-x-auto pl-4 whitespace-pre-wrap text-[var(--ui-text-muted)]">Existing page: team table, role badges, row actions, Invite people trigger.</pre>
                            </details>
                            <details class="group font-mono text-[13px] leading-[1.55] [&amp;_summary::-webkit-details-marker]:hidden">
                              <summary class="flex min-w-0 list-none items-baseline gap-2 outline-none cursor-pointer focus-visible:ring-1 focus-visible:ring-[var(--ui-info)]/60">
                                <span class="min-w-0 break-words text-[var(--ui-info)]">Edited src/features/team/invite-dialog.tsx</span>
                                <span class="shrink-0 text-[var(--ui-text-muted)] group-open:hidden">▸</span>
                              </summary>
                              <pre class="mt-1 overflow-x-auto pl-4 whitespace-pre-wrap text-[var(--ui-text-muted)]">+ &lt;DialogTitle&gt;Invite people&lt;/DialogTitle&gt;
+ &lt;FieldLabel&gt;Email address&lt;/FieldLabel&gt;
+ &lt;Select defaultValue=&quot;member&quot;&gt;…&lt;/Select&gt;
+ &lt;Button disabled=&#123;isSending&#125;&gt;Send invitations&lt;/Button&gt;</pre>
                            </details>
                            <details class="group font-mono text-[13px] leading-[1.55] [&amp;_summary::-webkit-details-marker]:hidden">
                              <summary class="flex min-w-0 list-none items-baseline gap-2 outline-none cursor-pointer focus-visible:ring-1 focus-visible:ring-[var(--ui-info)]/60">
                                <span class="min-w-0 break-words text-[var(--ui-info)]">pnpm test -- invite-dialog</span>
                                <span class="shrink-0 text-[var(--ui-text-muted)] group-open:hidden">▸</span>
                              </summary>
                              <pre class="mt-1 overflow-x-auto pl-4 whitespace-pre-wrap text-[var(--ui-text-muted)]">✓ rejects invalid and duplicate emails
✓ preserves valid entries after a partial failure
✓ restores focus when the dialog closes
12 passed · 0 failed</pre>
                            </details>
                            <div class="font-mono text-[13px] leading-[1.6] text-[var(--ui-bg)]">
                              <div class="break-words whitespace-pre-wrap">## Invite experience

Added an invitation dialog with email entry, per-person roles, and inline validation.

- Empty, validating, sending, success, and partial-failure states.
- Pending invitations share the team table’s columns and row actions.
- A successful invite announces “Invitation sent” and adds a pending row.
- Small screens use a full-width dialog with a persistent submit action.

Changed: src/features/team/invite-dialog.tsx, invitation-row.tsx, and team-settings.tsx.

Ready for the accessibility and permissions review.</div>
                            </div>
                          </div>
                        </div>
                        <div class="nodrag nopan shrink-0 px-4 pb-3">
                          <div class="mb-2 flex min-h-5 items-center justify-between gap-2 font-mono text-[11px]">
                            <span class="text-[var(--ui-text-muted)]">Complete · demo-des</span>
                            <UButton color="neutral" variant="ghost" class="shrink-0 text-[var(--ui-info)] hover:underline" aria-label="Open output ↗" type="button" @click="openAction(&quot;Open output ↗&quot;)">
                              Open output ↗
                            </UButton>
                          </div>
                          <div class="min-w-0 font-mono text-[13px] leading-[1.6]">
                            <div class="min-w-0 py-[1lh] pr-[1ch]" style="background: var(--ui-text-toned); color: var(--ui-bg);">
                              <div class="flex min-w-0 items-center">
                                <UInput v-model="form.sendAFollowUpEnterToSubmit2" type="text" aria-label="Message Build the invite experience" placeholder="Send a follow-up · Enter to submit" style="color: var(--ui-bg); caret-color: var(--ui-bg);" name="sendAFollowUpEnterToSubmit2" class="term-input min-w-0 flex-1 outline-none" :ui="{ base: 'h-full' }" />
                              </div>
                            </div>
                            <div class="flex min-w-0 flex-wrap items-baseline gap-x-3 pl-[2ch] text-[12px]">
                              <span class="min-w-0 break-words">
                                <span style="color: var(--ui-secondary);">gpt-5.6-sol high</span>
                                <span style="color: var(--ui-text-muted);"> · </span>
                                <span style="color: var(--ui-success);">shadcnblocks-admin</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div data-nodeid="design" data-id="1-design-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !flex !h-7 !w-10 !items-center !justify-center !rounded-md !border-2 !border-[var(--ui-info)] !bg-[var(--ui-info)] !font-mono !text-[10px] !font-semibold !text-[var(--ui-info)] hover:!bg-[var(--ui-info)] source connectable connectablestart connectableend connectionindicator" aria-label="Output from Build the invite experience" title="Drag OUT to another terminal’s IN to connect" style="top: 76%;">
                          <span class="pointer-events-none">OUT</span>
                        </div>
                      </article>
                    </div>
                    <div class="workflow-canvas__node workflow-canvas__node-agentTask nopan selectable draggable" data-id="review" role="group" style="z-index: 0; transform: translate(680px, 530px); pointer-events: all; visibility: visible; width: 500px; height: 480px;">
                      <article class="brainless-terminal flex h-full w-full flex-col overflow-visible rounded-xl border border-[var(--ui-text-toned)] bg-[var(--ui-bg-inverted)] text-[var(--ui-bg)] shadow-xl shadow-black/10 border-default" aria-label="Review: Review the implementation">
                        <div data-nodeid="review" data-id="1-review-null-target" class="workflow-canvas__handle workflow-canvas__handle-left nodrag nopan !flex !h-7 !w-10 !items-center !justify-center !rounded-md !border-2 !border-[var(--ui-text-muted)] !bg-[var(--ui-bg-inverted)] !font-mono !text-[10px] !font-semibold !text-[var(--ui-bg)] hover:!border-[var(--ui-info)] hover:!bg-[var(--ui-bg-inverted)] target connectable connectablestart connectableend connectionindicator" aria-label="Input to Review the implementation" title="Drop another terminal’s OUT here to connect">
                          <span class="pointer-events-none">IN</span>
                        </div>
                        <div title="Drag this title bar to move the terminal" class="agent-drag flex h-10 shrink-0 items-center gap-2 rounded-t-xl border-b border-[var(--ui-text-highlighted)] bg-[var(--ui-bg-inverted)] px-3 cursor-grab active:cursor-grabbing border-default">
                          <UIcon name="i-lucide-shield-check" class="size-3 shrink-0 text-[var(--ui-text-muted)]" />
                          <span class="min-w-0 truncate font-mono text-[11px]">sub-agent · review — Review the implementation</span>
                          <UButton color="neutral" variant="ghost" class="nodrag ml-auto shrink-0 rounded p-1 text-[var(--ui-text-muted)] hover:bg-(--ui-bg)/10 hover:text-inverted" aria-label="Open Review the implementation" type="button" @click="openAction(&quot;Open Review the implementation&quot;)">
                            <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                          </UButton>
                        </div>
                        <div class="nodrag nopan shrink-0 px-4 pt-3">
                          <div class="min-w-0 rounded-[6px] border border-[var(--ui-text-toned)] px-3 py-3 font-mono text-[13px] leading-[1.7] text-[var(--ui-bg)] sm:px-4 border-default">
                            <div class="flex min-w-0 flex-wrap items-baseline gap-x-2">
                              <span class="font-medium">OpenAI Codex</span>
                              <span class="text-[var(--ui-text-muted)]">(v0.153.4)</span>
                            </div>
                            <div class="mt-2 grid min-w-0 grid-cols-[max-content_minmax(0,1fr)] gap-x-3">
                              <span class="text-[var(--ui-text-muted)]">model:</span>
                              <span class="min-w-0 break-words">gpt-5.6-sol high</span>
                              <span class="text-[var(--ui-text-muted)]">directory:</span>
                              <span class="truncate">shadcnblocks-admin</span>
                            </div>
                          </div>
                        </div>
                        <div class="nodrag nopan nowheel min-h-0 flex-1 overflow-auto px-4 py-3 [scrollbar-color:#444_transparent]" aria-label="Review the implementation activity">
                          <div class="space-y-3">
                            <div class="flex min-w-0 gap-2 font-mono text-[13px] leading-[1.6] text-[var(--ui-bg)]">
                              <span class="min-w-0 flex-1 break-words">
                                <div class="break-words whitespace-pre-wrap">Review the research and invitation flow together. Check keyboard access, validation, responsive layout, and the owner/admin/member permissions. Summarize what is ready to ship.</div>
                              </span>
                            </div>
                            <div class="font-mono text-[13px] leading-[1.6] text-[var(--ui-bg)]">
                              <div class="break-words whitespace-pre-wrap">I have the onboarding findings and the invitation implementation. I’ll check the edge cases, role boundaries, and keyboard flow.</div>
                            </div>
                            <details class="group font-mono text-[13px] leading-[1.55] [&amp;_summary::-webkit-details-marker]:hidden">
                              <summary class="flex min-w-0 list-none items-baseline gap-2 outline-none cursor-pointer focus-visible:ring-1 focus-visible:ring-[var(--ui-info)]/60">
                                <span class="min-w-0 break-words text-[var(--ui-info)]">git diff -- src/features/team</span>
                                <span class="shrink-0 text-[var(--ui-text-muted)] group-open:hidden">▸</span>
                              </summary>
                              <pre class="mt-1 overflow-x-auto pl-4 whitespace-pre-wrap text-[var(--ui-text-muted)]">3 files changed · 184 insertions · 22 deletions</pre>
                            </details>
                            <details class="group font-mono text-[13px] leading-[1.55] [&amp;_summary::-webkit-details-marker]:hidden">
                              <summary class="flex min-w-0 list-none items-baseline gap-2 outline-none cursor-pointer focus-visible:ring-1 focus-visible:ring-[var(--ui-info)]/60">
                                <span class="min-w-0 break-words text-[var(--ui-info)]">pnpm test -- team-accessibility team-permissions</span>
                                <span class="shrink-0 text-[var(--ui-text-muted)] group-open:hidden">▸</span>
                              </summary>
                              <pre class="mt-1 overflow-x-auto pl-4 whitespace-pre-wrap text-[var(--ui-text-muted)]">✓ owner-only Admin invitations
✓ keyboard navigation and focus restoration
✓ 375px layout and error announcements
18 passed · 0 failed</pre>
                            </details>
                            <div class="font-mono text-[13px] leading-[1.6] text-[var(--ui-bg)]">
                              <div class="break-words whitespace-pre-wrap">## Review complete

The flow covers the research requirements and is ready for handoff.

✓ Member is the default role; only owners can invite an Admin.
✓ Duplicate and invalid emails have actionable inline errors.
✓ Focus returns to the Invite people button; status updates are announced.
✓ Pending, expired, and failed invitations have distinct actions.
✓ The dialog works at 375px without horizontal scrolling.

One follow-up: add an invitation-expiry timestamp to the pending row’s tooltip.</div>
                            </div>
                          </div>
                        </div>
                        <div class="nodrag nopan shrink-0 px-4 pb-3">
                          <div class="mb-2 flex min-h-5 items-center justify-between gap-2 font-mono text-[11px]">
                            <span class="text-[var(--ui-text-muted)]">Complete · demo-rev</span>
                            <UButton color="neutral" variant="ghost" class="shrink-0 text-[var(--ui-info)] hover:underline" aria-label="Open output ↗" type="button" @click="openAction(&quot;Open output ↗&quot;)">
                              Open output ↗
                            </UButton>
                          </div>
                          <div class="min-w-0 font-mono text-[13px] leading-[1.6]">
                            <div class="min-w-0 py-[1lh] pr-[1ch]" style="background: var(--ui-text-toned); color: var(--ui-bg);">
                              <div class="flex min-w-0 items-center">
                                <UInput v-model="form.sendAFollowUpEnterToSubmit3" type="text" aria-label="Message Review the implementation" placeholder="Send a follow-up · Enter to submit" style="color: var(--ui-bg); caret-color: var(--ui-bg);" name="sendAFollowUpEnterToSubmit3" class="term-input min-w-0 flex-1 outline-none" :ui="{ base: 'h-full' }" />
                              </div>
                            </div>
                            <div class="flex min-w-0 flex-wrap items-baseline gap-x-3 pl-[2ch] text-[12px]">
                              <span class="min-w-0 break-words">
                                <span style="color: var(--ui-secondary);">gpt-5.6-sol high</span>
                                <span style="color: var(--ui-text-muted);"> · </span>
                                <span style="color: var(--ui-success);">shadcnblocks-admin</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div data-nodeid="review" data-id="1-review-null-source" class="workflow-canvas__handle workflow-canvas__handle-right nodrag nopan !flex !h-7 !w-10 !items-center !justify-center !rounded-md !border-2 !border-[var(--ui-info)] !bg-[var(--ui-info)] !font-mono !text-[10px] !font-semibold !text-[var(--ui-info)] hover:!bg-[var(--ui-info)] source connectable connectablestart connectableend connectionindicator" aria-label="Output from Review the implementation" title="Drag OUT to another terminal’s IN to connect">
                          <span class="pointer-events-none">OUT</span>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div class="workflow-canvas__viewport-portal" />
                </div>
              </div>
            </div>
            <svg class="workflow-canvas__background" style="position:absolute;width:100%;height:100%;top:0;left:0;--xy-background-pattern-color-props:color-mix(in oklab, var(--ui-text-muted) 32%, transparent)" width="100%" height="100%">
              <pattern id="pattern-1" x="4.803960396039642" y="1.744554455445547" width="13.085148514851484" height="13.085148514851484" patternUnits="userSpaceOnUse" patternTransform="translate(-6.542574257425742,-6.542574257425742)">
                <circle cx="0.6133663366336634" cy="0.6133663366336634" r="0.6133663366336634" class="workflow-canvas__background-pattern dots" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-1)" />
            </svg>
            <div class="workflow-canvas__panel workflow-canvas__attribution bottom right">
              <NuxtLink aria-label="React Flow attribution" to="https://reactflow.dev?utm_source=attribution" external>
                React Flow
              </NuxtLink>
            </div>
            <div id="react-flow__node-desc-1" style="display:none">Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.</div>
            <div id="react-flow__edge-desc-1" style="display:none">Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.</div>
            <div id="react-flow__aria-live-1" style="position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%)" />
          </div>
          <div class="absolute top-3 left-3 w-52 sm:hidden">
            <USelect v-model="form.openATask" :items="openATaskOptions" aria-label="Open a task" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 w-full items-center justify-between rounded-md border px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 bg-default" />
          </div>
          <div class="bg-default absolute bottom-3 left-3 flex items-center rounded-lg border p-1 shadow-sm border-default">
            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 w-9" aria-label="Zoom out" type="button" @click="openAction(&quot;Zoom out&quot;)">
              <UIcon name="i-lucide-zoom-out" class="size-4" />
            </UButton>
            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 w-9" aria-label="Zoom in" type="button" @click="openAction(&quot;Zoom in&quot;)">
              <UIcon name="i-lucide-zoom-in" class="size-4" />
            </UButton>
            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 w-9" aria-label="Fit tasks" type="button" @click="openAction(&quot;Fit tasks&quot;)">
              <UIcon name="i-lucide-maximize" class="size-4" />
            </UButton>
          </div>
          <div class="bg-default text-muted absolute right-3 bottom-3 hidden rounded-lg border px-3 py-2 text-xs sm:block border-default">
            <span id="agent-canvas-help" class="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span class="flex items-center gap-1.5">
                <UIcon name="i-lucide-grip-vertical" class="size-3.5" />
                Drag the title bar to move
              </span>
              <span class="flex items-center gap-1.5">
                Drag 
                <strong>OUT</strong>
                <UIcon name="i-lucide-move-right" class="size-3.5" />
                <strong>IN</strong>
                 to connect
              </span>
            </span>
          </div>
        </div>
        <footer class="text-muted flex h-9 shrink-0 items-center gap-2 border-t px-3 text-[10px] border-default">
          <span class="size-1.5 rounded-full bg-primary" />
          <UButton color="neutral" variant="ghost" class="hover:text-highlighted truncate" aria-label="Scripted demo" type="button" @click="openAction(&quot;Scripted demo&quot;)">
            Scripted demo
          </UButton>
          <span class="hidden sm:inline">· Mock activity · No model calls</span>
          <span class="ml-auto truncate">Team completed</span>
        </footer>
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
