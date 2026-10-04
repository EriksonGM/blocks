<!-- Page: /ai-chat/embedded-commerce-copilot | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Commerce copilot · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "includeInternalNote": true,
  "field2": "The shipment missed its original estimate and has a carrier exception. There is no confirmed replacement delivery date. Flag the order for follow-up and prepare an update that acknowledges the delay without promising a delivery date.",
  "includeCustomerReplyDraft": true,
  "field4": "Hi Maya, your order #1048 has encountered a carrier sorting delay. The original delivery estimate has passed, and a revised date has not yet been confirmed. We’re sorry for the delay. We will share a new estimate once it is confirmed.",
  "includePriorityChange": true,
  "normalHigh": "NormalHigh"
})

const normalHighOptions = [
  "Normal",
  "High"
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

function exportCsv() {
  const rows = Object.entries(form).map(([name, value]) => [name, String(value)])
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "ai-chat-embedded-commerce-copilot.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/embedded-commerce-copilot">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="flex min-h-0 flex-1 flex-col overflow-y-auto xl:overflow-hidden">
        <div class="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b px-5 py-3 md:px-7 border-default">
          <div class="flex flex-wrap gap-1" aria-label="Select order">
            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-elevated text-default shadow-xs hover:bg-(--ui-bg-elevated)/80 h-8 rounded-md px-3 text-xs" aria-label="#1048Maya Chen" type="button" @click="openAction(&quot;#1048Maya Chen&quot;)">
              <span class="font-mono">#1048</span>
              <span class="hidden sm:inline">Maya Chen</span>
            </UButton>
            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="#1052Alex Morgan" type="button" @click="openAction(&quot;#1052Alex Morgan&quot;)">
              <span class="font-mono">#1052</span>
              <span class="hidden sm:inline">Alex Morgan</span>
            </UButton>
            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="#1039Sam Rivera" type="button" @click="openAction(&quot;#1039Sam Rivera&quot;)">
              <span class="font-mono">#1039</span>
              <span class="hidden sm:inline">Sam Rivera</span>
            </UButton>
          </div>
          <span class="text-muted text-[11px]">Sample orders · local changes only</span>
        </div>
        <div class="flex min-h-0 flex-1 flex-col xl:flex-row">
          <div class="min-w-0 flex-1 xl:overflow-y-auto">
            <div class="mx-auto max-w-[940px] space-y-7 p-5 md:p-7">
              <header>
                <p class="text-muted flex items-center gap-1.5 text-xs">
                  Orders 
                  <UIcon name="i-lucide-chevron-right" class="size-3" />
                   Order detail
                </p>
                <div class="mt-3 flex flex-wrap items-center gap-3">
                  <h1 class="text-2xl font-semibold tracking-tight text-highlighted">Order #1048</h1>
                  <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 font-normal border-warning/20 text-warning dark:text-warning">Delayed</div>
                  <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 font-normal border-default">Normal priority</div>
                </div>
                <p class="text-muted mt-2 text-xs">Placed September 3, 2026 · Online store · Paid</p>
              </header>
              <section class="flex items-start gap-3 rounded-xl border p-4 border-default" aria-label="Order exception">
                <span class="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-warning/10 text-warning dark:text-warning">
                  <UIcon name="i-lucide-truck" class="size-4" />
                </span>
                <div>
                  <h2 class="text-sm font-medium text-highlighted">Delivery exception</h2>
                  <p class="text-muted mt-1 text-[13px] leading-6">Carrier reports a sorting delay. A revised delivery date has not been confirmed.</p>
                </div>
              </section>
              <section class="overflow-hidden rounded-xl border border-default" aria-label="Order items">
                <div class="flex items-center justify-between border-b px-5 py-3 border-default">
                  <h2 class="text-sm font-medium text-highlighted">Items</h2>
                  <span class="text-muted text-xs">3units</span>
                </div>
                <div class="flex items-center gap-3 border-b px-5 py-4 last:border-b-0 border-default">
                  <div class="bg-muted flex size-12 shrink-0 items-center justify-center rounded-lg">
                    <UIcon name="i-lucide-package" class="text-muted size-5" />
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-medium">Everyday carry tote</p>
                    <p class="text-muted mt-1 text-xs">Canvas / Natural · Qty 1</p>
                  </div>
                  <span class="shrink-0 text-sm tabular-nums">$68.00</span>
                </div>
                <div class="flex items-center gap-3 border-b px-5 py-4 last:border-b-0 border-default">
                  <div class="bg-muted flex size-12 shrink-0 items-center justify-center rounded-lg">
                    <UIcon name="i-lucide-package" class="text-muted size-5" />
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-medium">Field notebook</p>
                    <p class="text-muted mt-1 text-xs">A5 / Slate · Qty 2</p>
                  </div>
                  <span class="shrink-0 text-sm tabular-nums">$24.00</span>
                </div>
                <div class="bg-(--ui-bg-muted)/25 flex justify-between border-t px-5 py-3 text-sm border-default">
                  <span>Total paid</span>
                  <span class="font-semibold tabular-nums">$92.00</span>
                </div>
              </section>
              <section class="grid gap-5 sm:grid-cols-2" aria-label="Customer and delivery">
                <div>
                  <h2 class="mb-3 text-sm font-medium text-highlighted">Customer</h2>
                  <div class="flex items-center gap-3">
                    <span class="bg-muted flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-medium">MC</span>
                    <div class="min-w-0">
                      <p class="text-[13px] font-medium">Maya Chen</p>
                      <p class="text-muted mt-0.5 truncate text-xs">maya.chen@example.com</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 class="mb-3 text-sm font-medium text-highlighted">Delivery destination</h2>
                  <p class="flex items-center gap-2 text-[13px]">
                    <UIcon name="i-lucide-map-pin" class="text-muted size-4" />
                    Portland, OR
                  </p>
                  <p class="text-muted mt-2 text-xs">Address verified in the sample record</p>
                </div>
              </section>
              <section class="scroll-m-5 rounded-xl border p-5 transition-shadow outline-none border-default" aria-label="Shipment evidence">
                <div class="mb-5 flex items-center justify-between">
                  <h2 class="text-sm font-medium text-highlighted">Shipment timeline</h2>
                  <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted text-[10px] font-normal border-default">Source S1</div>
                </div>
                <div>
                  <div class="relative flex gap-3 pb-5 last:pb-0">
                    <div class="bg-(--ui-border) absolute top-4 bottom-0 left-[7px] w-px" />
                    <span class="bg-default relative mt-1 size-4 shrink-0 rounded-full border border-(--ui-text-highlighted)/50 border-default">
                      <span class="absolute inset-1 rounded-full bg-(--ui-text-highlighted)" />
                    </span>
                    <div>
                      <p class="text-[13px] font-medium">Delivery exception</p>
                      <p class="text-muted mt-1 text-xs leading-5">Carrier reports a sorting delay. A revised delivery date has not been confirmed.</p>
                      <p class="text-muted mt-1.5 text-[10px]">Sep 7 · 09:12</p>
                    </div>
                  </div>
                  <div class="relative flex gap-3 pb-5 last:pb-0">
                    <div class="bg-(--ui-border) absolute top-4 bottom-0 left-[7px] w-px" />
                    <span class="bg-default relative mt-1 size-4 shrink-0 rounded-full border border-default">
                      <span class="absolute inset-1 rounded-full bg-(--ui-text-muted)/40" />
                    </span>
                    <div>
                      <p class="text-[13px] font-medium">Departed fulfillment center</p>
                      <p class="text-muted mt-1 text-xs leading-5">Two items packed in one shipment. Tracking reference: DEMO-1048.</p>
                      <p class="text-muted mt-1.5 text-[10px]">Sep 5 · 16:40</p>
                    </div>
                  </div>
                  <div class="relative flex gap-3 pb-5 last:pb-0">
                    <span class="bg-default relative mt-1 size-4 shrink-0 rounded-full border border-default">
                      <span class="absolute inset-1 rounded-full bg-(--ui-text-muted)/40" />
                    </span>
                    <div>
                      <p class="text-[13px] font-medium">Order confirmed</p>
                      <p class="text-muted mt-1 text-xs leading-5">Payment received. Original estimated delivery: September 6.</p>
                      <p class="text-muted mt-1.5 text-[10px]">Sep 3 · 11:24</p>
                    </div>
                  </div>
                </div>
              </section>
              <section aria-label="Internal order notes">
                <div class="mb-4 flex items-center justify-between">
                  <h2 class="text-sm font-medium text-highlighted">
                    Internal notes
                    <span class="text-muted ml-1 font-normal">1</span>
                  </h2>
                  <span class="text-muted text-[10px]">Not visible to the customer</span>
                </div>
                <div class="space-y-3">
                  <div class="rounded-lg border p-4 border-default">
                    <p class="text-muted mb-2 text-[11px]">Operations</p>
                    <p class="text-[13px] leading-6 break-words whitespace-pre-wrap">Customer requested an update when a revised estimate is available.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <aside class="bg-(--ui-bg-muted)/15 flex w-full shrink-0 flex-col border-t xl:w-[400px] xl:overflow-y-auto xl:border-t-0 xl:border-l border-default" aria-label="Embedded commerce copilot">
            <div class="bg-default flex items-center justify-between border-b px-5 py-4 border-default">
              <div class="flex items-center gap-2">
                <UIcon name="i-lucide-clipboard-check" class="size-4" />
                <h2 class="text-sm font-semibold text-highlighted">Order copilot</h2>
              </div>
              <span class="text-muted text-[10px]">Grounded sample analysis</span>
            </div>
            <div class="space-y-5 p-5">
              <div class="bg-default flex items-center gap-2 rounded-lg border px-3 py-2.5 text-xs border-default">
                <span class="size-1.5 rounded-full bg-success" />
                <span class="text-muted">Working with</span>
                <span class="font-medium">Order #1048</span>
                <span class="text-muted ml-auto font-mono text-[10px]">rev 0</span>
              </div>
              <div>
                <p class="text-sm leading-6">The shipment missed its original estimate and has a carrier exception. There is no confirmed replacement delivery date.</p>
                <p class="text-muted mt-3 text-[13px] leading-6">Flag the order for follow-up and prepare an update that acknowledges the delay without promising a delivery date.</p>
                <div class="mt-3 flex flex-wrap gap-2">
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 bg-default h-7 text-[11px]" aria-label="Shipment eventsS1" type="button" @click="openAction(&quot;Shipment eventsS1&quot;)">
                    <UIcon name="i-lucide-arrow-down-left" class="size-4" />
                    Shipment events
                    <span class="text-muted">S1</span>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 bg-default h-7 text-[11px]" aria-label="Support policyP1" type="button" @click="openAction(&quot;Support policyP1&quot;)">
                    <UIcon name="i-lucide-file-text" class="size-4" />
                    Support policy
                    <span class="text-muted">P1</span>
                  </UButton>
                </div>
              </div>
              <div class="bg-default overflow-hidden rounded-xl border shadow-xs border-default">
                <div class="flex items-center justify-between border-b px-4 py-3 border-default">
                  <h3 class="text-xs font-semibold text-highlighted">Proposed changes</h3>
                  <span class="text-muted text-[10px]">3 selected</span>
                </div>
                <div class="space-y-5 p-4">
                  <div>
                    <label class="mb-2 flex items-center gap-2 text-xs font-medium">
                      <UCheckbox v-model="form.includeInternalNote" aria-label="Include internal note" />
                      Add internal note
                    </label>
                    <UTextarea v-model="form.field2" :rows="4" aria-label="Proposed internal note" name="field2" class="flex w-full rounded-md md:text-sm min-h-28 resize-y text-xs leading-5" :ui="{ base: 'h-full' }" />
                  </div>
                  <div>
                    <label class="mb-2 flex items-center gap-2 text-xs font-medium">
                      <UCheckbox v-model="form.includeCustomerReplyDraft" aria-label="Include customer reply draft" />
                      Save reply draft
                      <span class="text-muted ml-auto text-[10px] font-normal">Does not send</span>
                    </label>
                    <UTextarea v-model="form.field4" :rows="4" aria-label="Proposed customer reply" name="field4" class="flex w-full rounded-md md:text-sm min-h-36 resize-y text-xs leading-5" :ui="{ base: 'h-full' }" />
                  </div>
                  <div class="flex items-center justify-between gap-3">
                    <label class="flex items-center gap-2 text-xs font-medium">
                      <UCheckbox v-model="form.includePriorityChange" aria-label="Include priority change" />
                      Set priority
                    </label>
                    <USelect v-model="form.normalHigh" :items="normalHighOptions" aria-label="Proposed order priority" class="bg-default rounded-md border px-2 py-1.5 text-xs border-default" />
                  </div>
                </div>
                <div class="border-t p-4 border-default">
                  <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-8 rounded-md px-3 text-xs w-full" aria-label="Apply 3 reviewedchanges" type="button" disabled @click="openAction(&quot;Apply 3 reviewedchanges&quot;)">
                    <UIcon name="i-lucide-check" class="size-4" />
                    Apply 3 reviewedchanges
                  </UButton>
                </div>
              </div>
              <div class="text-muted flex items-start gap-2 text-[11px] leading-5">
                <UIcon name="i-lucide-shield-check" class="mt-0.5 size-3.5 shrink-0" />
                <p>Review every field before applying. Changes are stored in this browser; no orders, shipments or messages are changed in an external system.</p>
              </div>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-0 text-xs" aria-label="Export this order" type="button" @click="exportCsv()">
                <UIcon name="i-lucide-download" class="size-4" />
                Export this order
                <UIcon name="i-lucide-arrow-up-right" class="ml-1" />
              </UButton>
            </div>
          </aside>
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
</style>
