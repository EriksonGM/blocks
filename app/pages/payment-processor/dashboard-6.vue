<!-- Page: /payment-processor/dashboard-6 | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Dashboard 6 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "last24Hours": "Last 24 hours"
})

const last24HoursOptions = [
  "Last 24 hours",
  "Last 7 days",
  "Last 30 days"
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "time": "10:42:18",
    "payment": "pay_3k9wq2",
    "rule": "Velocity: attempts per card",
    "detail": "6 attempts in 9 min · card ••••4242",
    "action": "Blocked",
    "actionClass2": "inline-flex rounded-full border px-2 py-0.5 text-[11px] font-medium border-error/20 bg-error/10 text-error dark:border-error/20 dark:bg-error/30 dark:text-error"
  },
  {
    "_id": "2",
    "time": "10:37:04",
    "payment": "pay_8mzx41",
    "rule": "Fraud score 0.91 > 0.85",
    "detail": "device fingerprint reused ×14",
    "action": "Blocked",
    "actionClass2": "inline-flex rounded-full border px-2 py-0.5 text-[11px] font-medium border-error/20 bg-error/10 text-error dark:border-error/20 dark:bg-error/30 dark:text-error"
  },
  {
    "_id": "3",
    "time": "10:15:52",
    "payment": "pay_1qd07b",
    "rule": "AVS postal mismatch",
    "detail": "SW1A 1AA ≠ SW1A 2AB",
    "action": "Challenged",
    "actionClass2": "inline-flex rounded-full border px-2 py-0.5 text-[11px] font-medium border-warning/20 bg-warning/10 text-warning dark:border-warning/20 dark:bg-warning/30 dark:text-warning"
  },
  {
    "_id": "4",
    "time": "09:58:30",
    "payment": "pay_7vbn55",
    "rule": "3DS required (EU SCA)",
    "detail": "€1,240.00 · exemption denied",
    "action": "Challenged",
    "actionClass2": "inline-flex rounded-full border px-2 py-0.5 text-[11px] font-medium border-warning/20 bg-warning/10 text-warning dark:border-warning/20 dark:bg-warning/30 dark:text-warning"
  },
  {
    "_id": "5",
    "time": "09:30:11",
    "payment": "pay_0hk22a",
    "rule": "Issuer timeout (> 5000ms)",
    "detail": "Checkout.com 5,204ms → Stripe",
    "action": "Rerouted",
    "actionClass2": "inline-flex rounded-full border px-2 py-0.5 text-[11px] font-medium border-info/20 bg-info/10 text-info dark:border-info/20 dark:bg-info/30 dark:text-info"
  },
  {
    "_id": "6",
    "time": "09:12:47",
    "payment": "pay_4pl9c3",
    "rule": "Soft decline scheduler",
    "detail": "insufficient_funds · retry in 4h",
    "action": "Retried",
    "actionClass2": "inline-flex rounded-full border px-2 py-0.5 text-[11px] font-medium border-accented bg-default text-toned dark:border-default dark:bg-(--ui-bg)/60 dark:text-default"
  },
  {
    "_id": "7",
    "time": "08:45:09",
    "payment": "pay_9tz61m",
    "rule": "Rate limit exceeded",
    "detail": "412 req/min on sk_live_••••8f2c",
    "action": "Blocked",
    "actionClass2": "inline-flex rounded-full border px-2 py-0.5 text-[11px] font-medium border-error/20 bg-error/10 text-error dark:border-error/20 dark:bg-error/30 dark:text-error"
  },
  {
    "_id": "8",
    "time": "08:20:33",
    "payment": "pay_2ncw84",
    "rule": "3DS challenge abandoned",
    "detail": "challenge timeout · 120s",
    "action": "Retried",
    "actionClass2": "inline-flex rounded-full border px-2 py-0.5 text-[11px] font-medium border-accented bg-default text-toned dark:border-default dark:bg-(--ui-bg)/60 dark:text-default"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "time",
    "header": "Time"
  },
  {
    "accessorKey": "payment",
    "header": "Payment"
  },
  {
    "accessorKey": "rule",
    "header": "Rule"
  },
  {
    "accessorKey": "detail",
    "header": "Detail"
  },
  {
    "accessorKey": "action",
    "header": "Action"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = ''
  const keys = ["time","payment","rule","detail","action"] as const
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/dashboard-6">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted min-h-0 flex-1 overflow-y-auto">
          <div class="mx-auto flex w-full max-w-[1536px] min-w-0 flex-col gap-4 p-4 md:p-6">
            <header class="flex flex-wrap items-center justify-between gap-3">
              <div class="flex min-w-0 items-center gap-1.5">
                <span class="text-muted truncate text-sm">Routing profiles</span>
                <UIcon name="i-lucide-chevron-right" class="text-muted size-4 shrink-0" />
                <h1 class="truncate text-lg font-semibold tracking-tight text-highlighted">Global card acceptance</h1>
              </div>
              <div class="flex shrink-0 items-center gap-2">
                <USelect v-model="form.last24Hours" :items="last24HoursOptions" aria-label="Last 24 hours" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-8 w-[160px]" />
                <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-8 rounded-md px-3 text-xs" aria-label="New rule" type="button" @click="openAction(&quot;New rule&quot;)">
                  <UIcon name="i-lucide-plus" class="size-4" />
                  New rule
                </UButton>
              </div>
            </header>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <!-- Card 1: 128.4k -->
              <UCard class="flex min-w-0 flex-col rounded-lg" :ui="{ body: 'contents' }">
                <div class="flex items-center justify-between gap-2 px-4 pt-3.5">
                  <div class="flex min-w-0 items-center gap-1.5">
                    <p class="truncate text-sm font-medium">Payments routed</p>
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted shrink-0 transition-colors" aria-label="About Payments routed" type="button" @click="openAction(&quot;About Payments routed&quot;)">
                      <UIcon name="i-lucide-info" class="size-3.5" />
                    </UButton>
                  </div>
                  <UIcon name="i-lucide-credit-card" class="text-muted size-4 shrink-0" />
                </div>
                <div class="px-4 py-3">
                  <p class="text-3xl font-semibold tracking-tight tabular-nums text-highlighted">
                    128.4
                    <span class="text-muted ml-1 text-base font-normal">k</span>
                  </p>
                </div>
                <div class="mt-auto flex min-h-11 flex-wrap items-center gap-x-3 gap-y-2 border-t px-4 py-2.5 border-default">
                  <span class="shrink-0 text-xs font-medium tabular-nums">150k</span>
                </div>
              </UCard>
              <!-- Card 2: 94.5% -->
              <UCard class="flex min-w-0 flex-col rounded-lg" :ui="{ body: 'contents' }">
                <div class="flex items-center justify-between gap-2 px-4 pt-3.5">
                  <div class="flex min-w-0 items-center gap-1.5">
                    <p class="truncate text-sm font-medium">Authorization rate</p>
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted shrink-0 transition-colors" aria-label="About Authorization rate" type="button" @click="openAction(&quot;About Authorization rate&quot;)">
                      <UIcon name="i-lucide-info" class="size-3.5" />
                    </UButton>
                  </div>
                  <UIcon name="i-lucide-shield-check" class="text-muted size-4 shrink-0" />
                </div>
                <div class="px-4 py-3">
                  <p class="text-3xl font-semibold tracking-tight tabular-nums text-highlighted">
                    94.5
                    <span class="text-muted ml-1 text-base font-normal">%</span>
                  </p>
                </div>
                <div class="mt-auto flex min-h-11 flex-wrap items-center gap-x-3 gap-y-2 border-t px-4 py-2.5 border-default">
                  <span class="shrink-0 text-xs font-medium tabular-nums text-success dark:text-success">94%</span>
                </div>
              </UCard>
              <!-- Card 3: 444ms -->
              <UCard class="flex min-w-0 flex-col rounded-lg" :ui="{ body: 'contents' }">
                <div class="flex items-center justify-between gap-2 px-4 pt-3.5">
                  <div class="flex min-w-0 items-center gap-1.5">
                    <p class="truncate text-sm font-medium">Avg auth latency</p>
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted shrink-0 transition-colors" aria-label="About Avg auth latency" type="button" @click="openAction(&quot;About Avg auth latency&quot;)">
                      <UIcon name="i-lucide-info" class="size-3.5" />
                    </UButton>
                  </div>
                  <UIcon name="i-lucide-gauge" class="text-muted size-4 shrink-0" />
                </div>
                <div class="px-4 py-3">
                  <p class="text-3xl font-semibold tracking-tight tabular-nums text-highlighted">
                    444
                    <span class="text-muted ml-1 text-base font-normal">ms</span>
                  </p>
                </div>
                <div class="mt-auto flex min-h-11 flex-wrap items-center gap-x-3 gap-y-2 border-t px-4 py-2.5 border-default">
                  <span class="shrink-0 text-xs font-medium tabular-nums">400ms</span>
                </div>
              </UCard>
              <!-- Card 4: 3.1k -->
              <UCard class="flex min-w-0 flex-col rounded-lg" :ui="{ body: 'contents' }">
                <div class="flex items-center justify-between gap-2 px-4 pt-3.5">
                  <div class="flex min-w-0 items-center gap-1.5">
                    <p class="truncate text-sm font-medium">Blocked by rules</p>
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted shrink-0 transition-colors" aria-label="About Blocked by rules" type="button" @click="openAction(&quot;About Blocked by rules&quot;)">
                      <UIcon name="i-lucide-info" class="size-3.5" />
                    </UButton>
                  </div>
                  <UIcon name="i-lucide-shield-x" class="text-muted size-4 shrink-0" />
                </div>
                <div class="px-4 py-3">
                  <p class="text-3xl font-semibold tracking-tight tabular-nums text-highlighted">
                    3.1
                    <span class="text-muted ml-1 text-base font-normal">k</span>
                  </p>
                </div>
                <div class="mt-auto flex min-h-11 flex-wrap items-center gap-x-3 gap-y-2 border-t px-4 py-2.5 border-default">
                  <span class="flex items-center gap-1 text-xs font-medium tabular-nums text-error dark:text-error">
                    <UIcon name="i-lucide-arrow-up-right" class="size-3.5 shrink-0" />
                    +6.1%
                    <span class="text-muted font-normal">vs previous</span>
                  </span>
                </div>
              </UCard>
            </div>
            <!-- Card 5: Visa58.9k · 95.4%+0.6%Mastercard41.2k · 94.8%+0.3%Amex13.6k · 91.2%-1.4%Discover7.1k · 89. -->
            <UCard class="overflow-hidden rounded-lg" :ui="{ body: 'contents' }">
              <div class="-mt-px -ml-px grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                <div class="flex min-w-0 items-center gap-3 border-t border-l px-4 py-3 border-default">
                  <span class="grid size-9 shrink-0 place-items-center rounded-md ring-1 ring-inset bg-success/10 text-success ring-success/20 dark:bg-success/50 dark:text-success dark:ring-success/20">
                    <UIcon name="i-lucide-arrow-up" class="size-4" />
                  </span>
                  <div class="min-w-0">
                    <p class="truncate text-sm font-medium">Visa</p>
                    <p class="flex flex-wrap items-baseline gap-x-2 text-xs">
                      <span class="text-muted tabular-nums">58.9k · 95.4%</span>
                      <span class="font-medium tabular-nums text-success dark:text-success">+0.6%</span>
                    </p>
                  </div>
                </div>
                <div class="flex min-w-0 items-center gap-3 border-t border-l px-4 py-3 border-default">
                  <span class="grid size-9 shrink-0 place-items-center rounded-md ring-1 ring-inset bg-success/10 text-success ring-success/20 dark:bg-success/50 dark:text-success dark:ring-success/20">
                    <UIcon name="i-lucide-arrow-up" class="size-4" />
                  </span>
                  <div class="min-w-0">
                    <p class="truncate text-sm font-medium">Mastercard</p>
                    <p class="flex flex-wrap items-baseline gap-x-2 text-xs">
                      <span class="text-muted tabular-nums">41.2k · 94.8%</span>
                      <span class="font-medium tabular-nums text-success dark:text-success">+0.3%</span>
                    </p>
                  </div>
                </div>
                <div class="flex min-w-0 items-center gap-3 border-t border-l px-4 py-3 border-default">
                  <span class="grid size-9 shrink-0 place-items-center rounded-md ring-1 ring-inset bg-error/10 text-error ring-error/20 dark:bg-error/50 dark:text-error dark:ring-error/20">
                    <UIcon name="i-lucide-arrow-down" class="size-4" />
                  </span>
                  <div class="min-w-0">
                    <p class="truncate text-sm font-medium">Amex</p>
                    <p class="flex flex-wrap items-baseline gap-x-2 text-xs">
                      <span class="text-muted tabular-nums">13.6k · 91.2%</span>
                      <span class="font-medium tabular-nums text-error dark:text-error">-1.4%</span>
                    </p>
                  </div>
                </div>
                <div class="flex min-w-0 items-center gap-3 border-t border-l px-4 py-3 border-default">
                  <span class="grid size-9 shrink-0 place-items-center rounded-md ring-1 ring-inset bg-error/10 text-error ring-error/20 dark:bg-error/50 dark:text-error dark:ring-error/20">
                    <UIcon name="i-lucide-arrow-down" class="size-4" />
                  </span>
                  <div class="min-w-0">
                    <p class="truncate text-sm font-medium">Discover</p>
                    <p class="flex flex-wrap items-baseline gap-x-2 text-xs">
                      <span class="text-muted tabular-nums">7.1k · 89.7%</span>
                      <span class="font-medium tabular-nums text-error dark:text-error">-0.8%</span>
                    </p>
                  </div>
                </div>
                <div class="flex min-w-0 items-center gap-3 border-t border-l px-4 py-3 border-default">
                  <span class="grid size-9 shrink-0 place-items-center rounded-md ring-1 ring-inset bg-success/10 text-success ring-success/20 dark:bg-success/50 dark:text-success dark:ring-success/20">
                    <UIcon name="i-lucide-arrow-up" class="size-4" />
                  </span>
                  <div class="min-w-0">
                    <p class="truncate text-sm font-medium">UnionPay</p>
                    <p class="flex flex-wrap items-baseline gap-x-2 text-xs">
                      <span class="text-muted tabular-nums">4.5k · 93.1%</span>
                      <span class="font-medium tabular-nums text-success dark:text-success">+0.2%</span>
                    </p>
                  </div>
                </div>
              </div>
            </UCard>
            <div class="grid min-w-0 grid-cols-1 gap-4 xl:grid-cols-12">
              <div class="flex min-w-0 flex-col gap-4 xl:col-span-8">
                <section class="bg-default flex min-w-0 flex-col rounded-lg border border-default">
                  <header class="flex min-h-14 shrink-0 flex-wrap items-center justify-between gap-2 border-b px-4 py-2.5 border-default">
                    <h2 class="flex items-center gap-2 text-sm font-medium text-highlighted">
                      <UIcon name="i-lucide-network" class="text-muted size-4 shrink-0" />
                      Acquirer traffic &amp; health
                    </h2>
                    <span class="text-muted text-xs">Last 24 hours · updated Jul 21 / 10:03 AM</span>
                  </header>
                  <div class="h-[34rem] w-full overflow-hidden rounded-b-lg xl:h-[46rem]">
                    <!-- Workflow canvas 1: local pointer and zoom handlers -->
                    <div class="workflow-canvas !bg-default [&amp;_.workflow-canvas__controls]:!bg-default [&amp;_.workflow-canvas__controls-button]:!border-default [&amp;_.workflow-canvas__controls-button]:!bg-default [&amp;_.workflow-canvas__controls-button]:!text-highlighted [&amp;_.workflow-canvas__attribution]:hidden [&amp;_.workflow-canvas__controls]:!flex [&amp;_.workflow-canvas__controls]:!flex-row [&amp;_.workflow-canvas__controls]:!overflow-hidden [&amp;_.workflow-canvas__controls]:!rounded-md [&amp;_.workflow-canvas__controls]:!border [&amp;_.workflow-canvas__controls]:!shadow-sm [&amp;_.workflow-canvas__controls-button]:!size-8 [&amp;_.workflow-canvas__panel]:!m-3 light" style="width: 100%; height: 100%; overflow: hidden; position: relative; z-index: 0;" role="application" :ref="element => setCanvasRoot(1, element)" @pointerdown="canvasPointerDown(1, $event)" @pointermove="canvasPointerMove($event)" @pointerup="canvasDrag = undefined" @pointercancel="canvasDrag = undefined" @wheel.ctrl.prevent="zoomCanvas(1, $event.deltaY < 0 ? 1.1 : 1 / 1.1)">
                      <div class="workflow-canvas__renderer" style="position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;">
                        <div class="workflow-canvas__pane draggable" style="position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;">
                          <div class="workflow-canvas__viewport workflow-canvas__viewport workflow-canvas__container" style="transform: translate(283.22px, 44px) scale(0.791209);">
                            <div class="workflow-canvas__edges">
                              <svg class="workflow-canvas__marker" width="100%" height="100%">
                                <defs>
                                  <marker class="workflow-canvas__arrowhead" id="1__color=var(--muted-foreground)&amp;type=arrowclosed">
                                    <polyline class="arrowclosed" stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4" style="stroke-width: 1; stroke: var(--ui-text-muted); fill: var(--ui-text-muted);" />
                                  </marker>
                                </defs>
                              </svg>
                              <svg style="z-index: 0;" viewBox="0 0 237.36260986328125 118.68133544921875" width="100%" height="100%">
                                <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="intake-risk" aria-label="Edge from intake to risk">
                                  <path d="M116 114L116 134L116 140.5L116 140.5L116 147L116 167" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-width: 1.5;" />
                                  <path d="M116 114L116 134L116 140.5L116 140.5L116 147L116 167" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                                </g>
                              </svg>
                              <svg style="z-index: 0;" viewBox="0 0 237.36260986328125 118.68133544921875" width="100%" height="100%">
                                <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="risk-blocked" aria-label="Edge from risk to blocked">
                                  <path d="M116 286L 116,301Q 116,306 111,306L -19,306Q -24,306 -24,301L -24,152Q -24,147 -29,147L -159,147Q -164,147 -164,152L-164 167" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-width: 1.5;" />
                                  <path d="M116 286L 116,301Q 116,306 111,306L -19,306Q -24,306 -24,301L -24,152Q -24,147 -29,147L -159,147Q -164,147 -164,152L-164 167" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                                </g>
                              </svg>
                              <svg style="z-index: 0;" viewBox="0 0 237.36260986328125 118.68133544921875" width="100%" height="100%">
                                <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="risk-router" aria-label="Edge from risk to router">
                                  <path d="M116 286L116 306L116 312.5L116 312.5L116 319L116 339" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-width: 1.5;" />
                                  <path d="M116 286L116 306L116 312.5L116 312.5L116 319L116 339" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                                </g>
                              </svg>
                              <svg style="z-index: 0;" viewBox="0 0 237.36260986328125 118.68133544921875" width="100%" height="100%">
                                <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="router-stripe" aria-label="Edge from router to stripe">
                                  <path d="M116 458L116 478L 116,481.25Q 116,484.5 112.75,484.5L -160.75,484.5Q -164,484.5 -164,487.75L-164 491L-164 511" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-width: 1.5;" />
                                  <path d="M116 458L116 478L 116,481.25Q 116,484.5 112.75,484.5L -160.75,484.5Q -164,484.5 -164,487.75L-164 491L-164 511" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                                </g>
                              </svg>
                              <svg style="z-index: 0;" viewBox="0 0 237.36260986328125 118.68133544921875" width="100%" height="100%">
                                <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="router-adyen" aria-label="Edge from router to adyen">
                                  <path d="M116 458L116 478L116 484.5L116 484.5L116 491L116 511" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-width: 1.5;" />
                                  <path d="M116 458L116 478L116 484.5L116 484.5L116 491L116 511" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                                </g>
                              </svg>
                              <svg style="z-index: 0;" viewBox="0 0 237.36260986328125 118.68133544921875" width="100%" height="100%">
                                <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="router-checkout" aria-label="Edge from router to checkout">
                                  <path d="M116 458L116 478L 116,481.25Q 116,484.5 119.25,484.5L 392.75,484.5Q 396,484.5 396,487.75L396 491L396 511" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-width: 1.5;" />
                                  <path d="M116 458L116 478L 116,481.25Q 116,484.5 119.25,484.5L 392.75,484.5Q 396,484.5 396,487.75L396 491L396 511" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                                </g>
                              </svg>
                              <svg style="z-index: 0;" viewBox="0 0 237.36260986328125 118.68133544921875" width="100%" height="100%">
                                <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="stripe-authorized" aria-label="Edge from stripe to authorized">
                                  <path d="M-164 674L-164 694L -164,697.25Q -164,700.5 -160.75,700.5L 112.75,700.5Q 116,700.5 116,703.75L116 707L116 727" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-width: 1.5;" />
                                  <path d="M-164 674L-164 694L -164,697.25Q -164,700.5 -160.75,700.5L 112.75,700.5Q 116,700.5 116,703.75L116 707L116 727" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                                </g>
                              </svg>
                              <svg style="z-index: 0;" viewBox="0 0 237.36260986328125 118.68133544921875" width="100%" height="100%">
                                <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="adyen-authorized" aria-label="Edge from adyen to authorized">
                                  <path d="M116 674L116 694L116 700.5L116 700.5L116 707L116 727" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-width: 1.5;" />
                                  <path d="M116 674L116 694L116 700.5L116 700.5L116 707L116 727" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                                </g>
                              </svg>
                              <svg style="z-index: 0;" viewBox="0 0 237.36260986328125 118.68133544921875" width="100%" height="100%">
                                <g class="workflow-canvas__edge workflow-canvas__edge-smoothstep nopan selectable" role="group" data-id="checkout-authorized" aria-label="Edge from checkout to authorized">
                                  <path d="M396 674L396 694L 396,697.25Q 396,700.5 392.75,700.5L 119.25,700.5Q 116,700.5 116,703.75L116 707L116 727" fill="none" class="workflow-canvas__edge-path" style="stroke: var(--ui-text-muted); stroke-width: 1.5;" />
                                  <path d="M396 674L396 694L 396,697.25Q 396,700.5 392.75,700.5L 119.25,700.5Q 116,700.5 116,703.75L116 707L116 727" fill="none" stroke-opacity="0" stroke-width="20" class="workflow-canvas__edge-interaction" />
                                </g>
                              </svg>
                            </div>
                            <div class="workflow-canvas__edgelabel-renderer" />
                            <div class="workflow-canvas__nodes" style="position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;">
                              <div class="workflow-canvas__node workflow-canvas__node-routeStep nopan selectable draggable" data-id="intake" role="group" style="z-index: 0; transform: translate(0px, 0px); pointer-events: all; visibility: visible; width: 232px;">
                                <div class="bg-default hover:border-(--ui-text-highlighted)/20 w-full rounded-xl border shadow-sm transition-colors border-default">
                                  <div class="flex min-w-0 items-center gap-2.5 border-b px-3 py-2.5 border-default">
                                    <span class="grid size-7 shrink-0 place-items-center rounded-md ring-1 ring-inset bg-primary/10 text-primary ring-primary/20">
                                      <UIcon name="i-lucide-credit-card" class="size-4" />
                                    </span>
                                    <p class="min-w-0 flex-1 truncate text-sm font-semibold text-highlighted">Payment intake</p>
                                  </div>
                                  <dl class="flex flex-col gap-1.5 px-3 py-2.5">
                                    <div class="flex items-center justify-between gap-3">
                                      <dt class="text-muted truncate text-xs">Endpoint</dt>
                                      <dd class="shrink-0 font-mono text-xs tabular-nums">/v1/payment_intents</dd>
                                    </div>
                                    <div class="flex items-center justify-between gap-3">
                                      <dt class="text-muted truncate text-xs">Intents</dt>
                                      <dd class="shrink-0 font-mono text-xs tabular-nums">128.4k</dd>
                                    </div>
                                  </dl>
                                  <div data-nodeid="intake" data-id="1-intake-null-source" class="workflow-canvas__handle workflow-canvas__handle-bottom nodrag nopan !size-2.5 !border-0 !bg-transparent !opacity-0 source connectable connectablestart connectableend connectionindicator" />
                                </div>
                              </div>
                              <div class="workflow-canvas__node workflow-canvas__node-routeStep nopan selectable draggable" data-id="risk" role="group" style="z-index: 0; transform: translate(0px, 172px); pointer-events: all; visibility: visible; width: 232px;">
                                <div class="bg-default hover:border-(--ui-text-highlighted)/20 w-full rounded-xl border shadow-sm transition-colors border-default">
                                  <div data-nodeid="risk" data-id="1-risk-null-target" class="workflow-canvas__handle workflow-canvas__handle-top nodrag nopan !size-2.5 !border-0 !bg-transparent !opacity-0 target connectable connectablestart connectableend connectionindicator" />
                                  <div class="flex min-w-0 items-center gap-2.5 border-b px-3 py-2.5 border-default">
                                    <span class="grid size-7 shrink-0 place-items-center rounded-md ring-1 ring-inset bg-warning/10 text-warning ring-warning/20 dark:bg-warning/50 dark:text-warning dark:ring-warning/20">
                                      <UIcon name="i-lucide-shield-check" class="size-4" />
                                    </span>
                                    <p class="min-w-0 flex-1 truncate text-sm font-semibold text-highlighted">Risk gate</p>
                                  </div>
                                  <dl class="flex flex-col gap-1.5 px-3 py-2.5">
                                    <div class="flex items-center justify-between gap-3">
                                      <dt class="text-muted truncate text-xs">Checks</dt>
                                      <dd class="shrink-0 font-mono text-xs tabular-nums">AVS · 3DS · Fraud</dd>
                                    </div>
                                    <div class="flex items-center justify-between gap-3">
                                      <dt class="text-muted truncate text-xs">Blocked</dt>
                                      <dd class="shrink-0 font-mono text-xs tabular-nums">3.1k</dd>
                                    </div>
                                  </dl>
                                  <div data-nodeid="risk" data-id="1-risk-null-source" class="workflow-canvas__handle workflow-canvas__handle-bottom nodrag nopan !size-2.5 !border-0 !bg-transparent !opacity-0 source connectable connectablestart connectableend connectionindicator" />
                                </div>
                              </div>
                              <div class="workflow-canvas__node workflow-canvas__node-routeStep nopan selectable draggable" data-id="blocked" role="group" style="z-index: 0; transform: translate(-280px, 172px); pointer-events: all; visibility: visible; width: 232px;">
                                <div class="bg-default hover:border-(--ui-text-highlighted)/20 w-full rounded-xl border shadow-sm transition-colors border-default">
                                  <div data-nodeid="blocked" data-id="1-blocked-null-target" class="workflow-canvas__handle workflow-canvas__handle-top nodrag nopan !size-2.5 !border-0 !bg-transparent !opacity-0 target connectable connectablestart connectableend connectionindicator" />
                                  <div class="flex min-w-0 items-center gap-2.5 border-b px-3 py-2.5 border-default">
                                    <span class="grid size-7 shrink-0 place-items-center rounded-md ring-1 ring-inset bg-warning/10 text-warning ring-warning/20 dark:bg-warning/50 dark:text-warning dark:ring-warning/20">
                                      <UIcon name="i-lucide-shield-x" class="size-4" />
                                    </span>
                                    <p class="min-w-0 flex-1 truncate text-sm font-semibold text-highlighted">Blocked</p>
                                  </div>
                                  <dl class="flex flex-col gap-1.5 px-3 py-2.5">
                                    <div class="flex items-center justify-between gap-3">
                                      <dt class="text-muted truncate text-xs">Rules hit</dt>
                                      <dd class="shrink-0 font-mono text-xs tabular-nums">3.1k</dd>
                                    </div>
                                  </dl>
                                </div>
                              </div>
                              <div class="workflow-canvas__node workflow-canvas__node-routeStep nopan selectable draggable" data-id="router" role="group" style="z-index: 0; transform: translate(0px, 344px); pointer-events: all; visibility: visible; width: 232px;">
                                <div class="bg-default hover:border-(--ui-text-highlighted)/20 w-full rounded-xl border shadow-sm transition-colors border-default">
                                  <div data-nodeid="router" data-id="1-router-null-target" class="workflow-canvas__handle workflow-canvas__handle-top nodrag nopan !size-2.5 !border-0 !bg-transparent !opacity-0 target connectable connectablestart connectableend connectionindicator" />
                                  <div class="flex min-w-0 items-center gap-2.5 border-b px-3 py-2.5 border-default">
                                    <span class="grid size-7 shrink-0 place-items-center rounded-md ring-1 ring-inset bg-primary/10 text-primary ring-primary/20">
                                      <UIcon name="i-lucide-split" class="size-4" />
                                    </span>
                                    <p class="min-w-0 flex-1 truncate text-sm font-semibold text-highlighted">Dynamic router</p>
                                  </div>
                                  <dl class="flex flex-col gap-1.5 px-3 py-2.5">
                                    <div class="flex items-center justify-between gap-3">
                                      <dt class="text-muted truncate text-xs">Profile</dt>
                                      <dd class="shrink-0 font-mono text-xs tabular-nums">Global card</dd>
                                    </div>
                                    <div class="flex items-center justify-between gap-3">
                                      <dt class="text-muted truncate text-xs">Routed</dt>
                                      <dd class="shrink-0 font-mono text-xs tabular-nums">125.3k</dd>
                                    </div>
                                  </dl>
                                  <div data-nodeid="router" data-id="1-router-null-source" class="workflow-canvas__handle workflow-canvas__handle-bottom nodrag nopan !size-2.5 !border-0 !bg-transparent !opacity-0 source connectable connectablestart connectableend connectionindicator" />
                                </div>
                              </div>
                              <div class="workflow-canvas__node workflow-canvas__node-routeStep nopan selectable draggable" data-id="stripe" role="group" style="z-index: 0; transform: translate(-280px, 516px); pointer-events: all; visibility: visible; width: 232px;">
                                <div class="bg-default hover:border-(--ui-text-highlighted)/20 w-full rounded-xl border shadow-sm transition-colors border-default">
                                  <div data-nodeid="stripe" data-id="1-stripe-null-target" class="workflow-canvas__handle workflow-canvas__handle-top nodrag nopan !size-2.5 !border-0 !bg-transparent !opacity-0 target connectable connectablestart connectableend connectionindicator" />
                                  <div class="flex min-w-0 items-center gap-2.5 border-b px-3 py-2.5 border-default">
                                    <span class="grid size-7 shrink-0 place-items-center rounded-md ring-1 ring-inset bg-muted text-highlighted ring-default">
                                      <UIcon name="i-lucide-network" class="size-4" />
                                    </span>
                                    <p class="min-w-0 flex-1 truncate text-sm font-semibold text-highlighted">Stripe</p>
                                    <span class="size-2 shrink-0 rounded-full bg-success" title="Healthy" />
                                  </div>
                                  <dl class="flex flex-col gap-1.5 px-3 py-2.5">
                                    <div class="flex items-center justify-between gap-3">
                                      <dt class="text-muted truncate text-xs">Traffic</dt>
                                      <dd class="shrink-0 font-mono text-xs tabular-nums">62% · 77.7k</dd>
                                    </div>
                                    <div class="flex items-center justify-between gap-3">
                                      <dt class="text-muted truncate text-xs">Auth rate</dt>
                                      <dd class="shrink-0 font-mono text-xs tabular-nums">95.8%</dd>
                                    </div>
                                    <div class="flex items-center justify-between gap-3">
                                      <dt class="text-muted truncate text-xs">Avg latency</dt>
                                      <dd class="shrink-0 font-mono text-xs tabular-nums">380ms</dd>
                                    </div>
                                    <div class="flex items-center justify-between gap-3">
                                      <dt class="text-muted truncate text-xs">Authorized</dt>
                                      <dd class="shrink-0 font-mono text-xs tabular-nums">74.4k</dd>
                                    </div>
                                  </dl>
                                  <div data-nodeid="stripe" data-id="1-stripe-null-source" class="workflow-canvas__handle workflow-canvas__handle-bottom nodrag nopan !size-2.5 !border-0 !bg-transparent !opacity-0 source connectable connectablestart connectableend connectionindicator" />
                                </div>
                              </div>
                              <div class="workflow-canvas__node workflow-canvas__node-routeStep nopan selectable draggable" data-id="adyen" role="group" style="z-index: 0; transform: translate(0px, 516px); pointer-events: all; visibility: visible; width: 232px;">
                                <div class="bg-default hover:border-(--ui-text-highlighted)/20 w-full rounded-xl border shadow-sm transition-colors border-default">
                                  <div data-nodeid="adyen" data-id="1-adyen-null-target" class="workflow-canvas__handle workflow-canvas__handle-top nodrag nopan !size-2.5 !border-0 !bg-transparent !opacity-0 target connectable connectablestart connectableend connectionindicator" />
                                  <div class="flex min-w-0 items-center gap-2.5 border-b px-3 py-2.5 border-default">
                                    <span class="grid size-7 shrink-0 place-items-center rounded-md ring-1 ring-inset bg-muted text-highlighted ring-default">
                                      <UIcon name="i-lucide-network" class="size-4" />
                                    </span>
                                    <p class="min-w-0 flex-1 truncate text-sm font-semibold text-highlighted">Adyen</p>
                                    <span class="size-2 shrink-0 rounded-full bg-success" title="Healthy" />
                                  </div>
                                  <dl class="flex flex-col gap-1.5 px-3 py-2.5">
                                    <div class="flex items-center justify-between gap-3">
                                      <dt class="text-muted truncate text-xs">Traffic</dt>
                                      <dd class="shrink-0 font-mono text-xs tabular-nums">27% · 33.8k</dd>
                                    </div>
                                    <div class="flex items-center justify-between gap-3">
                                      <dt class="text-muted truncate text-xs">Auth rate</dt>
                                      <dd class="shrink-0 font-mono text-xs tabular-nums">94.1%</dd>
                                    </div>
                                    <div class="flex items-center justify-between gap-3">
                                      <dt class="text-muted truncate text-xs">Avg latency</dt>
                                      <dd class="shrink-0 font-mono text-xs tabular-nums">402ms</dd>
                                    </div>
                                    <div class="flex items-center justify-between gap-3">
                                      <dt class="text-muted truncate text-xs">Authorized</dt>
                                      <dd class="shrink-0 font-mono text-xs tabular-nums">31.8k</dd>
                                    </div>
                                  </dl>
                                  <div data-nodeid="adyen" data-id="1-adyen-null-source" class="workflow-canvas__handle workflow-canvas__handle-bottom nodrag nopan !size-2.5 !border-0 !bg-transparent !opacity-0 source connectable connectablestart connectableend connectionindicator" />
                                </div>
                              </div>
                              <div class="workflow-canvas__node workflow-canvas__node-routeStep nopan selectable draggable" data-id="checkout" role="group" style="z-index: 0; transform: translate(280px, 516px); pointer-events: all; visibility: visible; width: 232px;">
                                <div class="bg-default hover:border-(--ui-text-highlighted)/20 w-full rounded-xl border shadow-sm transition-colors border-default">
                                  <div data-nodeid="checkout" data-id="1-checkout-null-target" class="workflow-canvas__handle workflow-canvas__handle-top nodrag nopan !size-2.5 !border-0 !bg-transparent !opacity-0 target connectable connectablestart connectableend connectionindicator" />
                                  <div class="flex min-w-0 items-center gap-2.5 border-b px-3 py-2.5 border-default">
                                    <span class="grid size-7 shrink-0 place-items-center rounded-md ring-1 ring-inset bg-muted text-highlighted ring-default">
                                      <UIcon name="i-lucide-network" class="size-4" />
                                    </span>
                                    <p class="min-w-0 flex-1 truncate text-sm font-semibold text-highlighted">Checkout.com</p>
                                    <span class="size-2 shrink-0 rounded-full bg-warning" title="Degraded" />
                                  </div>
                                  <dl class="flex flex-col gap-1.5 px-3 py-2.5">
                                    <div class="flex items-center justify-between gap-3">
                                      <dt class="text-muted truncate text-xs">Traffic</dt>
                                      <dd class="shrink-0 font-mono text-xs tabular-nums">11% · 13.8k</dd>
                                    </div>
                                    <div class="flex items-center justify-between gap-3">
                                      <dt class="text-muted truncate text-xs">Auth rate</dt>
                                      <dd class="shrink-0 font-mono text-xs tabular-nums">88.4%</dd>
                                    </div>
                                    <div class="flex items-center justify-between gap-3">
                                      <dt class="text-muted truncate text-xs">Avg latency</dt>
                                      <dd class="shrink-0 font-mono text-xs tabular-nums">910ms</dd>
                                    </div>
                                    <div class="flex items-center justify-between gap-3">
                                      <dt class="text-muted truncate text-xs">Authorized</dt>
                                      <dd class="shrink-0 font-mono text-xs tabular-nums">12.2k</dd>
                                    </div>
                                  </dl>
                                  <div data-nodeid="checkout" data-id="1-checkout-null-source" class="workflow-canvas__handle workflow-canvas__handle-bottom nodrag nopan !size-2.5 !border-0 !bg-transparent !opacity-0 source connectable connectablestart connectableend connectionindicator" />
                                </div>
                              </div>
                              <div class="workflow-canvas__node workflow-canvas__node-routeStep nopan selectable draggable" data-id="authorized" role="group" style="z-index: 0; transform: translate(0px, 732px); pointer-events: all; visibility: visible; width: 232px;">
                                <div class="bg-default hover:border-(--ui-text-highlighted)/20 w-full rounded-xl border shadow-sm transition-colors border-default">
                                  <div data-nodeid="authorized" data-id="1-authorized-null-target" class="workflow-canvas__handle workflow-canvas__handle-top nodrag nopan !size-2.5 !border-0 !bg-transparent !opacity-0 target connectable connectablestart connectableend connectionindicator" />
                                  <div class="flex min-w-0 items-center gap-2.5 border-b px-3 py-2.5 border-default">
                                    <span class="grid size-7 shrink-0 place-items-center rounded-md ring-1 ring-inset bg-success/10 text-success ring-success/20 dark:bg-success/50 dark:text-success dark:ring-success/20">
                                      <UIcon name="i-lucide-circle-check-big" class="size-4" />
                                    </span>
                                    <p class="min-w-0 flex-1 truncate text-sm font-semibold text-highlighted">Authorized</p>
                                  </div>
                                  <dl class="flex flex-col gap-1.5 px-3 py-2.5">
                                    <div class="flex items-center justify-between gap-3">
                                      <dt class="text-muted truncate text-xs">Captured</dt>
                                      <dd class="shrink-0 font-mono text-xs tabular-nums">118.4k</dd>
                                    </div>
                                  </dl>
                                </div>
                              </div>
                            </div>
                            <div class="workflow-canvas__viewport-portal" />
                          </div>
                        </div>
                      </div>
                      <svg class="workflow-canvas__background" style="position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; --xy-background-pattern-color-props: color-mix(in oklab, var(--ui-text-muted) 32%, transparent);" width="100%" height="100%">
                        <pattern id="pattern-1" x="4.714285714285712" y="6.021978021978024" width="12.659340659340659" height="12.659340659340659" patternUnits="userSpaceOnUse" patternTransform="translate(-6.329670329670329,-6.329670329670329)">
                          <circle cx="0.5934065934065934" cy="0.5934065934065934" r="0.5934065934065934" class="workflow-canvas__background-pattern dots" />
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
                </section>
                <section class="bg-default flex min-w-0 flex-col rounded-lg border border-default">
                  <header class="flex min-h-14 shrink-0 flex-wrap items-center justify-between gap-2 border-b px-4 py-2.5 border-default">
                    <h2 class="flex items-center gap-2 text-sm font-medium text-highlighted">
                      <UIcon name="i-lucide-shield-x" class="text-muted size-4 shrink-0" />
                      Risk &amp; decline exceptions
                    </h2>
                  </header>
                  <div class="horizontal-scrollbar flex shrink-0 items-center gap-1 overflow-x-auto border-b px-4 py-2 border-default">
                    <UButton color="neutral" variant="soft" class="shrink-0 rounded-sm px-2.5 py-1 text-xs font-medium transition-colors bg-elevated text-default" aria-label="All8" type="button" @click="openAction(&quot;All8&quot;)">
                      All
                      <span class="ml-1.5 tabular-nums opacity-60">8</span>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="shrink-0 rounded-sm px-2.5 py-1 text-xs font-medium transition-colors text-muted hover:text-highlighted" aria-label="Blocked3" type="button" @click="openAction(&quot;Blocked3&quot;)">
                      Blocked
                      <span class="ml-1.5 tabular-nums opacity-60">3</span>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="shrink-0 rounded-sm px-2.5 py-1 text-xs font-medium transition-colors text-muted hover:text-highlighted" aria-label="Challenged2" type="button" @click="openAction(&quot;Challenged2&quot;)">
                      Challenged
                      <span class="ml-1.5 tabular-nums opacity-60">2</span>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="shrink-0 rounded-sm px-2.5 py-1 text-xs font-medium transition-colors text-muted hover:text-highlighted" aria-label="Rerouted1" type="button" @click="openAction(&quot;Rerouted1&quot;)">
                      Rerouted
                      <span class="ml-1.5 tabular-nums opacity-60">1</span>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="shrink-0 rounded-sm px-2.5 py-1 text-xs font-medium transition-colors text-muted hover:text-highlighted" aria-label="Retried2" type="button" @click="openAction(&quot;Retried2&quot;)">
                      Retried
                      <span class="ml-1.5 tabular-nums opacity-60">2</span>
                    </UButton>
                  </div>
                  <div class="horizontal-scrollbar overflow-x-auto">
                    <div class="relative w-full overflow-auto">
                      <!-- Table 1: Time / Payment / Rule / Detail / Action -->
                      <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #time-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Time" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #time-cell="{ row }">
                          {{ row.original.time }}
                        </template>
                        <template #payment-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Payment" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #payment-cell="{ row }">
                          {{ row.original.payment }}
                        </template>
                        <template #rule-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Rule" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #rule-cell="{ row }">
                          {{ row.original.rule }}
                        </template>
                        <template #detail-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Detail" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #detail-cell="{ row }">
                          {{ row.original.detail }}
                        </template>
                        <template #action-header="{ column }">
                          <UButton color="neutral" variant="ghost" size="xs" label="Action" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                        </template>
                        <template #action-cell="{ row }">
                          <UBadge color="neutral" variant="subtle" :class="row.original.actionClass2">
                            {{ row.original.action }}
                          </UBadge>
                        </template>
                      </UTable>
                    </div>
                  </div>
                </section>
              </div>
              <div class="flex min-w-0 flex-col xl:col-span-4">
                <section class="bg-default flex min-w-0 flex-col rounded-lg border min-h-0 border-default">
                  <header class="flex min-h-14 shrink-0 flex-wrap items-center justify-between gap-2 border-b px-4 py-2.5 border-default">
                    <h2 class="flex items-center gap-2 text-sm font-medium text-highlighted">
                      <UIcon name="i-lucide-activity" class="text-muted size-4 shrink-0" />
                      Active routing profile
                    </h2>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Edit profile" type="button" @click="openAction(&quot;Edit profile&quot;)">
                      <UIcon name="i-lucide-pencil" class="size-3.5" />
                      Edit profile
                    </UButton>
                  </header>
                  <div class="vertical-scrollbar flex min-w-0 flex-col gap-6 overflow-y-auto p-4">
                    <section class="flex min-w-0 flex-col gap-3">
                      <h3 class="text-muted text-xs font-medium tracking-wide uppercase text-highlighted">1. Ingress (entry point)</h3>
                      <dl class="bg-(--ui-bg-muted)/30 divide-y rounded-md border border-default">
                        <div class="flex items-center justify-between gap-3 px-3 py-2.5">
                          <dt class="text-muted truncate text-sm">Endpoint</dt>
                          <dd class="flex shrink-0 items-center gap-2">
                            <span class="font-mono text-xs">/v1/payment_intents</span>
                            <span class="bg-muted text-highlighted rounded-sm border px-2 py-0.5 font-mono text-xs border-default">POST</span>
                          </dd>
                        </div>
                        <div class="flex items-center justify-between gap-3 px-3 py-2.5">
                          <dt class="text-muted truncate text-sm">Auth protocol</dt>
                          <dd class="flex shrink-0 items-center gap-2">
                            <span class="font-mono text-xs">Secret key + HMAC (strict)</span>
                          </dd>
                        </div>
                        <div class="flex items-center justify-between gap-3 px-3 py-2.5">
                          <dt class="text-muted truncate text-sm">Idempotency</dt>
                          <dd class="flex shrink-0 items-center gap-2">
                            <span class="font-mono text-xs">Required · 24h window</span>
                          </dd>
                        </div>
                        <div class="flex items-center justify-between gap-3 px-3 py-2.5">
                          <dt class="text-muted truncate text-sm">Rate limit</dt>
                          <dd class="flex shrink-0 items-center gap-2">
                            <span class="font-mono text-xs">req/min per key</span>
                            <span class="bg-muted text-highlighted rounded-sm border px-2 py-0.5 font-mono text-xs border-default">400</span>
                          </dd>
                        </div>
                      </dl>
                    </section>
                    <section class="flex min-w-0 flex-col gap-3">
                      <h3 class="text-muted text-xs font-medium tracking-wide uppercase text-highlighted">2. Pre-authorization (risk checks)</h3>
                      <div class="grid grid-cols-1 gap-3">
                        <div class="bg-(--ui-bg-muted)/30 min-w-0 rounded-md border border-default">
                          <div class="flex items-center gap-2 border-b px-3 py-2 border-default">
                            <UIcon name="i-lucide-credit-card" class="text-muted size-3.5 shrink-0" />
                            <p class="truncate text-sm font-medium">AVS / CVV</p>
                          </div>
                          <dl class="flex flex-col gap-2 px-3 py-2.5">
                            <div class="flex items-center justify-between gap-3">
                              <dt class="text-muted truncate text-xs">Mode</dt>
                              <dd class="shrink-0">
                                <span class="bg-muted text-highlighted rounded-sm border px-2 py-0.5 font-mono text-xs border-default">FULL</span>
                              </dd>
                            </div>
                            <div class="flex items-center justify-between gap-3">
                              <dt class="text-muted truncate text-xs">On fail</dt>
                              <dd class="shrink-0">
                                <span class="bg-muted text-highlighted rounded-sm border px-2 py-0.5 font-mono text-xs border-default">CHALLENGE</span>
                              </dd>
                            </div>
                          </dl>
                        </div>
                        <div class="bg-(--ui-bg-muted)/30 min-w-0 rounded-md border border-default">
                          <div class="flex items-center gap-2 border-b px-3 py-2 border-default">
                            <UIcon name="i-lucide-shield-check" class="text-muted size-3.5 shrink-0" />
                            <p class="truncate text-sm font-medium">3D Secure</p>
                          </div>
                          <dl class="flex flex-col gap-2 px-3 py-2.5">
                            <div class="flex items-center justify-between gap-3">
                              <dt class="text-muted truncate text-xs">Trigger</dt>
                              <dd class="shrink-0">
                                <span class="bg-muted text-highlighted rounded-sm border px-2 py-0.5 font-mono text-xs border-default">RISK</span>
                              </dd>
                            </div>
                            <div class="flex items-center justify-between gap-3">
                              <dt class="text-muted truncate text-xs">Version</dt>
                              <dd class="shrink-0">
                                <span class="bg-muted text-highlighted rounded-sm border px-2 py-0.5 font-mono text-xs border-default">2.2</span>
                              </dd>
                            </div>
                          </dl>
                        </div>
                        <div class="bg-(--ui-bg-muted)/30 min-w-0 rounded-md border border-default">
                          <div class="flex items-center gap-2 border-b px-3 py-2 border-default">
                            <UIcon name="i-lucide-fingerprint-pattern" class="text-muted size-3.5 shrink-0" />
                            <p class="truncate text-sm font-medium">Fraud score</p>
                          </div>
                          <dl class="flex flex-col gap-2 px-3 py-2.5">
                            <div class="flex items-center justify-between gap-3">
                              <dt class="text-muted truncate text-xs">Threshold</dt>
                              <dd class="shrink-0">
                                <span class="bg-muted text-highlighted rounded-sm border px-2 py-0.5 font-mono text-xs border-default">0.85</span>
                              </dd>
                            </div>
                            <div class="flex items-center justify-between gap-3">
                              <dt class="text-muted truncate text-xs">Action</dt>
                              <dd class="shrink-0">
                                <span class="bg-muted text-highlighted rounded-sm border px-2 py-0.5 font-mono text-xs border-default">BLOCK</span>
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </div>
                    </section>
                    <section class="flex min-w-0 flex-col gap-3">
                      <h3 class="text-muted text-xs font-medium tracking-wide uppercase text-highlighted">3. Dynamic router (decision matrix)</h3>
                      <div class="flex flex-col gap-3">
                        <div class="min-w-0 rounded-md border border-default">
                          <div class="bg-(--ui-bg-muted)/30 flex items-center justify-between gap-2 border-b px-3 py-2 border-default">
                            <div class="flex items-center gap-2">
                              <span class="text-sm font-medium">Rule 01</span>
                              <span class="rounded-full border px-2 py-0.5 text-[11px] font-medium border-error/20 bg-error/10 text-error dark:border-error/20 dark:bg-error/30 dark:text-error">High</span>
                            </div>
                            <UIcon name="i-lucide-square-arrow-out-up-right" class="text-muted size-3.5 shrink-0" />
                          </div>
                          <div class="flex flex-col gap-2.5 px-3 py-3">
                            <div class="bg-(--ui-bg-muted)/30 flex flex-wrap items-center gap-1.5 rounded-sm border px-2.5 py-2 font-mono text-xs border-default">
                              <span class="text-muted">IF</span>
                              <span class="bg-muted text-highlighted rounded-sm border px-2 py-0.5 font-mono text-xs border-default">currency</span>
                              <span class="text-muted">==</span>
                              <span class="bg-muted text-highlighted rounded-sm border px-2 py-0.5 font-mono text-xs border-default">EUR</span>
                              <span class="bg-muted text-highlighted rounded-sm border px-2 py-0.5 font-mono text-xs border-default">GBP</span>
                              <span class="text-muted">AND</span>
                              <span class="bg-muted text-highlighted rounded-sm border px-2 py-0.5 font-mono text-xs border-default">amount</span>
                              <span class="text-muted">&gt;</span>
                              <span class="bg-muted text-highlighted rounded-sm border px-2 py-0.5 font-mono text-xs border-default">500.00</span>
                            </div>
                            <dl class="flex flex-col gap-2">
                              <div class="flex items-center justify-between gap-3">
                                <dt class="text-muted truncate text-sm">Route to</dt>
                                <dd class="shrink-0">
                                  <span class="bg-muted text-highlighted rounded-sm border px-2 py-0.5 font-mono text-xs border-default">Adyen</span>
                                </dd>
                              </div>
                              <div class="flex items-center justify-between gap-3">
                                <dt class="text-muted truncate text-sm">Retries</dt>
                                <dd class="shrink-0">
                                  <span class="bg-muted text-highlighted rounded-sm border px-2 py-0.5 font-mono text-xs border-default">2</span>
                                </dd>
                              </div>
                              <div class="flex items-center justify-between gap-3">
                                <dt class="text-muted truncate text-sm">Fallback</dt>
                                <dd class="shrink-0">
                                  <span class="bg-muted text-highlighted rounded-sm border px-2 py-0.5 font-mono text-xs border-default">Stripe</span>
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </div>
                        <div class="min-w-0 rounded-md border border-default">
                          <div class="bg-(--ui-bg-muted)/30 flex items-center justify-between gap-2 border-b px-3 py-2 border-default">
                            <div class="flex items-center gap-2">
                              <span class="text-sm font-medium">Rule 02</span>
                              <span class="rounded-full border px-2 py-0.5 text-[11px] font-medium border-warning/20 bg-warning/10 text-warning dark:border-warning/20 dark:bg-warning/30 dark:text-warning">Medium</span>
                            </div>
                            <UIcon name="i-lucide-square-arrow-out-up-right" class="text-muted size-3.5 shrink-0" />
                          </div>
                          <div class="flex flex-col gap-2.5 px-3 py-3">
                            <div class="bg-(--ui-bg-muted)/30 flex flex-wrap items-center gap-1.5 rounded-sm border px-2.5 py-2 font-mono text-xs border-default">
                              <span class="text-muted">IF</span>
                              <span class="bg-muted text-highlighted rounded-sm border px-2 py-0.5 font-mono text-xs border-default">card_brand</span>
                              <span class="text-muted">==</span>
                              <span class="bg-muted text-highlighted rounded-sm border px-2 py-0.5 font-mono text-xs border-default">Amex</span>
                            </div>
                            <dl class="flex flex-col gap-2">
                              <div class="flex items-center justify-between gap-3">
                                <dt class="text-muted truncate text-sm">Route to</dt>
                                <dd class="shrink-0">
                                  <span class="bg-muted text-highlighted rounded-sm border px-2 py-0.5 font-mono text-xs border-default">Stripe</span>
                                </dd>
                              </div>
                              <div class="flex items-center justify-between gap-3">
                                <dt class="text-muted truncate text-sm">Retries</dt>
                                <dd class="shrink-0">
                                  <span class="bg-muted text-highlighted rounded-sm border px-2 py-0.5 font-mono text-xs border-default">1</span>
                                </dd>
                              </div>
                              <div class="flex items-center justify-between gap-3">
                                <dt class="text-muted truncate text-sm">Fallback</dt>
                                <dd class="shrink-0">
                                  <span class="bg-muted text-highlighted rounded-sm border px-2 py-0.5 font-mono text-xs border-default">Adyen</span>
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </div>
                        <div class="min-w-0 rounded-md border border-default">
                          <div class="bg-(--ui-bg-muted)/30 flex items-center justify-between gap-2 border-b px-3 py-2 border-default">
                            <div class="flex items-center gap-2">
                              <span class="text-sm font-medium">Rule 03</span>
                              <span class="rounded-full border px-2 py-0.5 text-[11px] font-medium border-accented bg-default text-toned dark:border-default dark:bg-(--ui-bg)/60 dark:text-default">Low</span>
                            </div>
                            <UIcon name="i-lucide-square-arrow-out-up-right" class="text-muted size-3.5 shrink-0" />
                          </div>
                          <div class="flex flex-col gap-2.5 px-3 py-3">
                            <div class="bg-(--ui-bg-muted)/30 flex flex-wrap items-center gap-1.5 rounded-sm border px-2.5 py-2 font-mono text-xs border-default">
                              <span class="text-muted">ELSE</span>
                              <span class="bg-muted text-highlighted rounded-sm border px-2 py-0.5 font-mono text-xs border-default">any unmatched payment</span>
                            </div>
                            <dl class="flex flex-col gap-2">
                              <div class="flex items-center justify-between gap-3">
                                <dt class="text-muted truncate text-sm">Route to</dt>
                                <dd class="shrink-0">
                                  <span class="bg-muted text-highlighted rounded-sm border px-2 py-0.5 font-mono text-xs border-default">Stripe</span>
                                </dd>
                              </div>
                              <div class="flex items-center justify-between gap-3">
                                <dt class="text-muted truncate text-sm">Retries</dt>
                                <dd class="shrink-0">
                                  <span class="bg-muted text-highlighted rounded-sm border px-2 py-0.5 font-mono text-xs border-default">3</span>
                                </dd>
                              </div>
                              <div class="flex items-center justify-between gap-3">
                                <dt class="text-muted truncate text-sm">Fallback</dt>
                                <dd class="shrink-0">
                                  <span class="bg-muted text-highlighted rounded-sm border px-2 py-0.5 font-mono text-xs border-default">Checkout.com</span>
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </section>
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
