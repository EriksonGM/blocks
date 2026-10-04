<!-- Page: /payment-processor/create-invoice-3 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Create Invoice 3 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "field1": "INV-0003",
  "uSD": "USD$",
  "field3": "Shadcnblocks.com",
  "field4": "billing@shadcnblocks.com",
  "field5": "Level 12, 45 Clarence Street\nSydney NSW 2000",
  "field6": "Olivia Bennett",
  "field7": "finance@northstar.studio",
  "field8": "18 Collins Street\nMelbourne VIC 3000",
  "field9": "Elite lifetime workspace",
  "field10": "Lifetime access to Shadcnblocks pro blocks and components.",
  "field11": 1,
  "field12": 399,
  "field13": "Template implementation pack",
  "field14": "Production-ready Next.js and Astro templates for launch pages.",
  "field15": 9,
  "field16": 79,
  "field17": "Admin kit integration",
  "field18": "Dashboard layouts, application shells, tables, and chart blocks.",
  "field19": 1,
  "field20": 540,
  "field21": 10,
  "field22": "Payment due within 14 days by bank transfer.",
  "field23": "Thank you for choosing Shadcnblocks. Please include the invoice number with your payment."
})

const uSDOptions = [
  "USD $",
  "EUR €",
  "GBP £",
  "INR ₹",
  "CAD $",
  "AUD $",
  "SGD $"
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
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/create-invoice-3">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="bg-default relative flex min-h-0 flex-1 flex-col overflow-hidden">
          <div class="grid min-h-0 min-w-0 flex-1 xl:grid-cols-[minmax(440px,540px)_minmax(0,1fr)] 2xl:grid-cols-[minmax(500px,620px)_minmax(0,1fr)]">
            <section class="flex min-h-0 flex-col border-r border-default">
              <div class="min-h-0 flex-1 overflow-y-auto">
                <div class="grid gap-7 p-5 lg:p-7">
                  <header class="border-(--ui-border)/80">
                    <p class="text-muted text-[11px] font-bold tracking-[0.16em] uppercase text-highlighted">Create invoice</p>
                    <div class="mt-1 flex flex-wrap items-end justify-between">
                      <div>
                        <h1 class="text-xl font-semibold tracking-tight text-highlighted">Invoice draft</h1>
                      </div>
                      <p class="text-muted text-[13px]">3 items in draft</p>
                    </div>
                  </header>
                  <section class="border-(--ui-border)/80 grid gap-4 pt-2">
                    <div class="flex min-w-0 items-center gap-3 pb-2">
                      <span class="border-default bg-default grid size-8 shrink-0 place-items-center rounded-md border">
                        <UIcon name="i-lucide-file-text" class="text-muted size-4" />
                      </span>
                      <h2 class="text-highlighted shrink-0 text-sm font-semibold text-highlighted">Invoice Details</h2>
                      <span class="border-default min-w-0 flex-1 border-t border-dashed" />
                    </div>
                    <div class="grid gap-3 sm:grid-cols-2">
                      <div class="grid gap-2 text-xs">
                        <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Invoice Number</label>
                        <UInput v-model="form.field1" type="text" name="field1" class="flex w-full rounded-md h-8 text-[13px] md:text-[13px]" :ui="{ base: 'h-full' }" />
                      </div>
                      <div class="grid gap-2">
                        <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Currency</label>
                        <USelect v-model="form.uSD" :items="uSDOptions" aria-label="USD$" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between rounded-md border bg-transparent py-2 whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-8 px-2.5 text-[13px] md:text-[13px]" />
                      </div>
                      <div class="grid gap-2">
                        <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Invoice Date</label>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center whitespace-nowrap rounded-md transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default py-2 w-full justify-start gap-2 text-left font-normal h-8 px-2.5 text-[13px] md:text-[13px]" aria-label="17/06/2026" type="button" @click="openAction(&quot;17/06/2026&quot;)">
                          <UIcon name="i-lucide-calendar" class="text-muted size-3.5" />
                          <span class="tabular-nums">17/06/2026</span>
                        </UButton>
                      </div>
                      <div class="grid gap-2">
                        <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Due Date</label>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center whitespace-nowrap rounded-md transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default py-2 w-full justify-start gap-2 text-left font-normal h-8 px-2.5 text-[13px] md:text-[13px]" aria-label="01/07/2026" type="button" @click="openAction(&quot;01/07/2026&quot;)">
                          <UIcon name="i-lucide-calendar" class="text-muted size-3.5" />
                          <span class="tabular-nums">01/07/2026</span>
                        </UButton>
                      </div>
                    </div>
                  </section>
                  <section class="border-(--ui-border)/80 grid gap-4 pt-2">
                    <div class="flex min-w-0 items-center gap-3 pb-2">
                      <span class="border-default bg-default grid size-8 shrink-0 place-items-center rounded-md border">
                        <UIcon name="i-lucide-users-round" class="text-muted size-4" />
                      </span>
                      <h2 class="text-highlighted shrink-0 text-sm font-semibold text-highlighted">Sender &amp; Client</h2>
                      <span class="border-default min-w-0 flex-1 border-t border-dashed" />
                    </div>
                    <div class="grid gap-3 sm:grid-cols-2">
                      <div class="grid gap-2">
                        <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Company</label>
                        <UInput v-model="form.field3" type="text" name="field3" class="flex w-full rounded-md h-8 text-[13px] md:text-[13px]" :ui="{ base: 'h-full' }" />
                      </div>
                      <div class="grid gap-2">
                        <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Company Email</label>
                        <UInput v-model="form.field4" type="text" name="field4" class="flex w-full rounded-md h-8 text-[13px] md:text-[13px]" :ui="{ base: 'h-full' }" />
                      </div>
                      <div class="grid gap-2 sm:col-span-2">
                        <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Company Address</label>
                        <UTextarea v-model="form.field5" :rows="4" name="field5" class="flex w-full rounded-md min-h-16 text-[13px] md:text-[13px]" :ui="{ base: 'h-full' }" />
                      </div>
                      <div class="grid gap-2">
                        <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Client</label>
                        <UInput v-model="form.field6" type="text" name="field6" class="flex w-full rounded-md h-8 text-[13px] md:text-[13px]" :ui="{ base: 'h-full' }" />
                      </div>
                      <div class="grid gap-2">
                        <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Client Email</label>
                        <UInput v-model="form.field7" type="text" name="field7" class="flex w-full rounded-md h-8 text-[13px] md:text-[13px]" :ui="{ base: 'h-full' }" />
                      </div>
                      <div class="grid gap-2 sm:col-span-2">
                        <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Client Address</label>
                        <UTextarea v-model="form.field8" :rows="4" name="field8" class="flex w-full rounded-md min-h-16 text-[13px] md:text-[13px]" :ui="{ base: 'h-full' }" />
                      </div>
                    </div>
                  </section>
                  <section class="border-(--ui-border)/80 grid gap-4 pt-2">
                    <div class="flex min-w-0 items-center gap-3 pb-2">
                      <span class="border-default bg-default grid size-8 shrink-0 place-items-center rounded-md border">
                        <UIcon name="i-lucide-receipt-text" class="text-muted size-4" />
                      </span>
                      <h2 class="text-highlighted shrink-0 text-sm font-semibold text-highlighted">Line Items</h2>
                      <span class="border-default min-w-0 flex-1 border-t border-dashed" />
                      <span class="text-muted shrink-0 text-[11px] font-semibold tracking-[0.12em] uppercase">3 items</span>
                    </div>
                    <div class="grid gap-3">
                      <div class="bg-(--ui-bg-muted)/25 grid gap-3 rounded-lg border p-3 shadow-[0_10px_28px_-24px_color-mix(in_oklch,var(--ui-text-highlighted)_40%,transparent)] border-default">
                        <div class="flex items-center justify-between gap-3">
                          <div>
                            <div class="text-sm font-semibold">Item 1</div>
                            <div class="text-muted text-xs">$399.00</div>
                          </div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" aria-label="Remove item" type="button" @click="openAction(&quot;Remove item&quot;)">
                            <UIcon name="i-lucide-trash-2" class="size-4" />
                          </UButton>
                        </div>
                        <div class="grid gap-2">
                          <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Name</label>
                          <UInput v-model="form.field9" type="text" name="field9" class="flex w-full rounded-md h-8 text-[13px] md:text-[13px]" :ui="{ base: 'h-full' }" />
                        </div>
                        <div class="grid gap-2">
                          <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Description</label>
                          <UInput v-model="form.field10" type="text" name="field10" class="flex w-full rounded-md h-8 text-[13px] md:text-[13px]" :ui="{ base: 'h-full' }" />
                        </div>
                        <div class="grid gap-3 sm:grid-cols-3">
                          <div class="grid gap-2">
                            <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Quantity</label>
                            <UInput v-model.number="form.field11" type="number" min="0" name="field11" class="flex w-full rounded-md h-8 text-[13px] md:text-[13px]" :ui="{ base: 'h-full' }" />
                          </div>
                          <div class="grid gap-2">
                            <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Unit Price</label>
                            <UInput v-model.number="form.field12" type="number" min="0" name="field12" class="flex w-full rounded-md h-8 text-[13px] md:text-[13px]" :ui="{ base: 'h-full' }" />
                          </div>
                          <div class="grid gap-2">
                            <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Amount</label>
                            <div class="bg-default flex h-8 items-center rounded-md border px-2.5 text-sm font-medium border-default">$399.00</div>
                          </div>
                        </div>
                      </div>
                      <div class="bg-(--ui-bg-muted)/25 grid gap-3 rounded-lg border p-3 shadow-[0_10px_28px_-24px_color-mix(in_oklch,var(--ui-text-highlighted)_40%,transparent)] border-default">
                        <div class="flex items-center justify-between gap-3">
                          <div>
                            <div class="text-sm font-semibold">Item 2</div>
                            <div class="text-muted text-xs">$711.00</div>
                          </div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" aria-label="Remove item" type="button" @click="openAction(&quot;Remove item&quot;)">
                            <UIcon name="i-lucide-trash-2" class="size-4" />
                          </UButton>
                        </div>
                        <div class="grid gap-2">
                          <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Name</label>
                          <UInput v-model="form.field13" type="text" name="field13" class="flex w-full rounded-md h-8 text-[13px] md:text-[13px]" :ui="{ base: 'h-full' }" />
                        </div>
                        <div class="grid gap-2">
                          <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Description</label>
                          <UInput v-model="form.field14" type="text" name="field14" class="flex w-full rounded-md h-8 text-[13px] md:text-[13px]" :ui="{ base: 'h-full' }" />
                        </div>
                        <div class="grid gap-3 sm:grid-cols-3">
                          <div class="grid gap-2">
                            <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Quantity</label>
                            <UInput v-model.number="form.field15" type="number" min="0" name="field15" class="flex w-full rounded-md h-8 text-[13px] md:text-[13px]" :ui="{ base: 'h-full' }" />
                          </div>
                          <div class="grid gap-2">
                            <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Unit Price</label>
                            <UInput v-model.number="form.field16" type="number" min="0" name="field16" class="flex w-full rounded-md h-8 text-[13px] md:text-[13px]" :ui="{ base: 'h-full' }" />
                          </div>
                          <div class="grid gap-2">
                            <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Amount</label>
                            <div class="bg-default flex h-8 items-center rounded-md border px-2.5 text-sm font-medium border-default">$711.00</div>
                          </div>
                        </div>
                      </div>
                      <div class="bg-(--ui-bg-muted)/25 grid gap-3 rounded-lg border p-3 shadow-[0_10px_28px_-24px_color-mix(in_oklch,var(--ui-text-highlighted)_40%,transparent)] border-default">
                        <div class="flex items-center justify-between gap-3">
                          <div>
                            <div class="text-sm font-semibold">Item 3</div>
                            <div class="text-muted text-xs">$540.00</div>
                          </div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" aria-label="Remove item" type="button" @click="openAction(&quot;Remove item&quot;)">
                            <UIcon name="i-lucide-trash-2" class="size-4" />
                          </UButton>
                        </div>
                        <div class="grid gap-2">
                          <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Name</label>
                          <UInput v-model="form.field17" type="text" name="field17" class="flex w-full rounded-md h-8 text-[13px] md:text-[13px]" :ui="{ base: 'h-full' }" />
                        </div>
                        <div class="grid gap-2">
                          <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Description</label>
                          <UInput v-model="form.field18" type="text" name="field18" class="flex w-full rounded-md h-8 text-[13px] md:text-[13px]" :ui="{ base: 'h-full' }" />
                        </div>
                        <div class="grid gap-3 sm:grid-cols-3">
                          <div class="grid gap-2">
                            <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Quantity</label>
                            <UInput v-model.number="form.field19" type="number" min="0" name="field19" class="flex w-full rounded-md h-8 text-[13px] md:text-[13px]" :ui="{ base: 'h-full' }" />
                          </div>
                          <div class="grid gap-2">
                            <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Unit Price</label>
                            <UInput v-model.number="form.field20" type="number" min="0" name="field20" class="flex w-full rounded-md h-8 text-[13px] md:text-[13px]" :ui="{ base: 'h-full' }" />
                          </div>
                          <div class="grid gap-2">
                            <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Amount</label>
                            <div class="bg-default flex h-8 items-center rounded-md border px-2.5 text-sm font-medium border-default">$540.00</div>
                          </div>
                        </div>
                      </div>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-primary h-10 w-full border-dashed text-sm font-semibold" aria-label="Add a New Item" type="button" @click="openAction(&quot;Add a New Item&quot;)">
                        <UIcon name="i-lucide-plus" class="size-4" />
                        Add a New Item
                      </UButton>
                    </div>
                  </section>
                  <section class="border-(--ui-border)/80 grid gap-4 pt-2">
                    <div class="flex min-w-0 items-center gap-3 pb-2">
                      <span class="border-default bg-default grid size-8 shrink-0 place-items-center rounded-md border">
                        <UIcon name="i-lucide-hand-coins" class="text-muted size-4" />
                      </span>
                      <h2 class="text-highlighted shrink-0 text-sm font-semibold text-highlighted">Settlement</h2>
                      <span class="border-default min-w-0 flex-1 border-t border-dashed" />
                    </div>
                    <div class="grid gap-3 sm:grid-cols-2">
                      <div class="grid gap-2">
                        <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Tax Rate</label>
                        <UInput v-model.number="form.field21" type="number" min="0" name="field21" class="flex w-full rounded-md h-8 text-[13px] md:text-[13px]" :ui="{ base: 'h-full' }" />
                      </div>
                      <div class="grid gap-2">
                        <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Payment Terms</label>
                        <UInput v-model="form.field22" type="text" name="field22" class="flex w-full rounded-md h-8 text-[13px] md:text-[13px]" :ui="{ base: 'h-full' }" />
                      </div>
                      <div class="grid gap-2 sm:col-span-2">
                        <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted text-[11px] font-bold tracking-wide uppercase">Notes</label>
                        <UTextarea v-model="form.field23" :rows="4" name="field23" class="flex w-full rounded-md min-h-16 text-[13px] md:text-[13px]" :ui="{ base: 'h-full' }" />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <footer class="bg-default shrink-0 border-t border-default">
                <div class="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-end lg:px-7">
                  <div class="flex flex-wrap items-center gap-2">
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default px-4 py-2 h-9 rounded-md" aria-label="Save draft" type="button" @click="openAction(&quot;Save draft&quot;)">
                      <UIcon name="i-lucide-check" class="size-4" />
                      Save draft
                    </UButton>
                    <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 px-4 py-2 h-9 rounded-md" to="blob:https://shadcnblocks-admin.vercel.app/8a22e1f0-6471-4389-adab-fd9272d5a651">
                      <UIcon name="i-lucide-download" class="size-4" />
                      Download PDF
                    </NuxtLink>
                  </div>
                </div>
              </footer>
            </section>
            <section class="bg-(--ui-bg-muted)/30 min-h-0 min-w-0 overflow-hidden">
              <div class="flex h-full min-h-[720px] min-w-0 flex-col">
                <iframe src="/reference/2b89d9bc55c8bde0.pdf" title="Invoice PDF preview" class="min-h-0 w-full min-w-0 flex-1 border-0" />
              </div>
            </section>
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
</style>
