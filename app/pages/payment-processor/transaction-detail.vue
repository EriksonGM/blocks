<!-- Page: /payment-processor/transaction-detail | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Transaction Detail · Blocks Admin" })

const toast = useToast()

const actionDialog = reactive({ open: false, title: '', mode: 'edit', name: '', description: '', recordId: '', table: 0 })
function openAction(label: string, recordId = '', table = 0) {
  Object.assign(actionDialog, { open: true, title: label, mode: /delete|remove|archive/i.test(label) ? 'delete' : 'edit', recordId, table })
}
function confirmAction() {
  toast.add({ title: actionDialog.mode === 'delete' ? 'Item removed' : 'Changes saved', color: 'success', icon: 'i-lucide-check' })
  actionDialog.open = false
}

async function copyValue(value: string) {
  await navigator.clipboard.writeText(value)
  toast.add({ title: 'Copied to clipboard', color: 'success' })
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/transaction-detail">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted h-full min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <header class="border-default bg-(--ui-bg-muted)/30 border-b">
            <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
              <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary underline-offset-4 hover:underline py-2 mb-6 h-8 gap-2 px-0" aria-label="Back to transactions" type="button" @click="openAction(&quot;Back to transactions&quot;)">
                <UIcon name="i-lucide-arrow-left" class="size-4" />
                Back to transactions
              </UButton>
              <div class="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
                <div class="min-w-0">
                  <div class="mb-3 flex flex-wrap items-center gap-2">
                    <UBadge color="neutral" variant="subtle" class="inline-flex items-center gap-2 rounded-md border border-warning/25 bg-warning/10 px-2.5 py-1 text-xs font-semibold text-warning dark:bg-warning/10 dark:text-warning">
                      <span class="size-2 rounded-full bg-warning" />
                      Pending review
                    </UBadge>
                    <span class="text-muted inline-flex items-center gap-1.5 text-sm font-medium">
                      <UIcon name="i-lucide-fingerprint-pattern" class="size-4" />
                      pay_ONfo13LR30lnWj5e1r6z4
                    </span>
                  </div>
                  <div class="flex min-w-0 flex-wrap items-center gap-3">
                    <h1 class="text-3xl font-semibold tracking-tight text-highlighted">Transaction txn_R8M42QH91L6C</h1>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-9 rounded-md" aria-label="Edit transaction" type="button" @click="openAction(&quot;Edit transaction&quot;)">
                      <UIcon name="i-lucide-square-pen" class="size-4" />
                      <span class="sr-only">Edit transaction</span>
                    </UButton>
                  </div>
                  <p class="text-muted mt-3 max-w-2xl text-sm">Review payment evidence, processor routing, and audit changes before releasing the capture hold.</p>
                </div>
                <div class="flex shrink-0 items-center gap-2">
                  <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 px-4 py-2 h-9 rounded-md" aria-label="Approve" type="button" @click="openAction(&quot;Approve&quot;)">
                    <UIcon name="i-lucide-circle-check" class="size-4" />
                    Approve
                  </UButton>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default px-4 py-2 h-9 rounded-md" aria-label="Refund" type="button" @click="openAction(&quot;Refund&quot;)">
                    <UIcon name="i-lucide-refresh-ccw" class="size-4" />
                    Refund
                  </UButton>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-10 rounded-md" aria-label="More actions" type="button" @click="openAction(&quot;More actions&quot;)">
                    <UIcon name="i-lucide-ellipsis-vertical" class="size-4" />
                    <span class="sr-only">More actions</span>
                  </UButton>
                </div>
              </div>
            </div>
          </header>
          <div class="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-10 sm:px-6 lg:px-8 xl:grid-cols-[minmax(0,1fr)_19rem]">
            <div class="min-w-0">
              <div class="mb-4 rounded-sm border border-warning/25 bg-warning/80 p-4 text-warning dark:bg-warning/10 dark:text-warning">
                <div class="flex gap-3">
                  <UIcon name="i-lucide-triangle-alert" class="mt-0.5 size-5 shrink-0 text-warning dark:text-warning" />
                  <p class="text-sm leading-6">This ACH debit is inside a manual review window because the customer exceeded the new-account velocity limit. Confirm the invoice, authorization file, and bank ownership before approval.</p>
                </div>
              </div>
              <section class="py-7 first:pt-0">
                <div class="mb-6 flex items-center gap-4">
                  <h2 class="text-highlighted shrink-0 text-xl font-semibold tracking-tight text-highlighted">Transaction Details</h2>
                  <div class="bg-(--ui-border) h-px min-w-8 flex-1" />
                </div>
                <dl class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <dt class="text-muted text-[13px] leading-none font-medium">Transaction ID</dt>
                    <dd class="text-highlighted mt-2 min-w-0 text-sm font-medium">txn_R8M42QH91L6C</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-[13px] leading-none font-medium">Amount</dt>
                    <dd class="text-highlighted mt-2 min-w-0 text-sm font-medium">$8,120.50</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-[13px] leading-none font-medium">Customer</dt>
                    <dd class="text-highlighted mt-2 min-w-0 text-sm font-medium">Helio Supply</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-[13px] leading-none font-medium">Payment method</dt>
                    <dd class="text-highlighted mt-2 min-w-0 text-sm font-medium">ACH debit</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-[13px] leading-none font-medium">Processor</dt>
                    <dd class="text-highlighted mt-2 min-w-0 text-sm font-medium">Adyen</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-[13px] leading-none font-medium">Source</dt>
                    <dd class="text-highlighted mt-2 min-w-0 text-sm font-medium">Hosted checkout</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-[13px] leading-none font-medium">Currency</dt>
                    <dd class="text-highlighted mt-2 min-w-0 text-sm font-medium">USD</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-[13px] leading-none font-medium">Created</dt>
                    <dd class="text-highlighted mt-2 min-w-0 text-sm font-medium">May 29, 2026, 08:56 IST</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-[13px] leading-none font-medium">Settlement</dt>
                    <dd class="text-highlighted mt-2 min-w-0 text-sm font-medium">Expected Jun 02, 2026</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-[13px] leading-none font-medium">Ledger account</dt>
                    <dd class="text-highlighted mt-2 min-w-0 text-sm font-medium">Operating balance</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-[13px] leading-none font-medium">Descriptor</dt>
                    <dd class="text-highlighted mt-2 min-w-0 text-sm font-medium">HELIO-SUPPLY-0429</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-[13px] leading-none font-medium">Statement ID</dt>
                    <dd class="text-highlighted mt-2 min-w-0 text-sm font-medium">STMT-8462-HS</dd>
                  </div>
                </dl>
                <div class="mt-8">
                  <p class="text-muted mb-3 text-[13px] leading-none font-medium">Supporting documents</p>
                  <div class="grid gap-3 sm:grid-cols-3">
                    <div class="border-default bg-default flex min-w-0 items-center gap-3 rounded-md border p-3">
                      <div class="bg-muted grid size-10 shrink-0 place-items-center rounded-md">
                        <UIcon name="i-lucide-file-text" class="text-muted size-5" />
                      </div>
                      <div class="min-w-0 flex-1">
                        <p class="truncate text-sm font-semibold text-highlighted">bank-authorization.pdf</p>
                        <p class="text-muted truncate text-xs">Uploaded May 29, 2026 at 09:04</p>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 shrink-0" aria-label="Document actions" type="button" @click="openAction(&quot;Document actions&quot;)">
                        <UIcon name="i-lucide-ellipsis-vertical" class="size-4" />
                        <span class="sr-only">Document actions</span>
                      </UButton>
                    </div>
                    <div class="border-default bg-default flex min-w-0 items-center gap-3 rounded-md border p-3">
                      <div class="bg-muted grid size-10 shrink-0 place-items-center rounded-md">
                        <UIcon name="i-lucide-file-text" class="text-muted size-5" />
                      </div>
                      <div class="min-w-0 flex-1">
                        <p class="truncate text-sm font-semibold text-highlighted">risk-review-note.txt</p>
                        <p class="text-muted truncate text-xs">Added by Priya Shah at 09:18</p>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 shrink-0" aria-label="Document actions" type="button" @click="openAction(&quot;Document actions&quot;)">
                        <UIcon name="i-lucide-ellipsis-vertical" class="size-4" />
                        <span class="sr-only">Document actions</span>
                      </UButton>
                    </div>
                    <div class="border-default bg-default flex min-w-0 items-center gap-3 rounded-md border p-3">
                      <div class="bg-muted grid size-10 shrink-0 place-items-center rounded-md">
                        <UIcon name="i-lucide-file-text" class="text-muted size-5" />
                      </div>
                      <div class="min-w-0 flex-1">
                        <p class="truncate text-sm font-semibold text-highlighted">invoice-20486.pdf</p>
                        <p class="text-muted truncate text-xs">Generated from billing workspace</p>
                      </div>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 shrink-0" aria-label="Document actions" type="button" @click="openAction(&quot;Document actions&quot;)">
                        <UIcon name="i-lucide-ellipsis-vertical" class="size-4" />
                        <span class="sr-only">Document actions</span>
                      </UButton>
                    </div>
                  </div>
                </div>
              </section>
              <section class="py-7 first:pt-0">
                <div class="mb-6 flex items-center gap-4">
                  <h2 class="text-highlighted shrink-0 text-xl font-semibold tracking-tight text-highlighted">Processor Context</h2>
                  <div class="bg-(--ui-border) h-px min-w-8 flex-1" />
                </div>
                <dl class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 xl:grid-cols-3">
                  <div>
                    <dt class="text-muted text-[13px] leading-none font-medium">Merchant route</dt>
                    <dd class="text-highlighted mt-2 min-w-0 text-sm font-medium">North America / ACH</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-[13px] leading-none font-medium">Invoice</dt>
                    <dd class="text-highlighted mt-2 min-w-0 text-sm font-medium">INV-20486</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-[13px] leading-none font-medium">Customer email</dt>
                    <dd class="text-highlighted mt-2 min-w-0 text-sm font-medium">billing@helio.supply</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-[13px] leading-none font-medium">Capture mode</dt>
                    <dd class="text-highlighted mt-2 min-w-0 text-sm font-medium">Automatic after bank confirmation</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-[13px] leading-none font-medium">Verification</dt>
                    <dd class="text-highlighted mt-2 min-w-0 text-sm font-medium">Micro-deposit fallback enabled</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-[13px] leading-none font-medium">Location</dt>
                    <dd class="text-highlighted mt-2 min-w-0 text-sm font-medium">Austin, TX</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-[13px] leading-none font-medium">IP address</dt>
                    <dd class="text-highlighted mt-2 min-w-0 text-sm font-medium">198.51.100.42</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-[13px] leading-none font-medium">Webhook delivery</dt>
                    <dd class="text-highlighted mt-2 min-w-0 text-sm font-medium">2 delivered, 1 retry scheduled</dd>
                  </div>
                </dl>
              </section>
              <section class="py-7 first:pt-0">
                <div class="mb-6 flex items-center gap-4">
                  <h2 class="text-highlighted shrink-0 text-xl font-semibold tracking-tight text-highlighted">Operational Notes</h2>
                  <div class="bg-(--ui-border) h-px min-w-8 flex-1" />
                </div>
                <div class="grid gap-4 md:grid-cols-3">
                  <div class="border-default rounded-md border p-4">
                    <UIcon name="i-lucide-shield-check" class="text-muted size-5" />
                    <h3 class="mt-4 text-sm font-semibold text-highlighted">Risk posture</h3>
                    <p class="text-muted mt-2 text-sm">Low dispute history, elevated transaction size.</p>
                  </div>
                  <div class="border-default rounded-md border p-4">
                    <UIcon name="i-lucide-banknote" class="text-muted size-5" />
                    <h3 class="mt-4 text-sm font-semibold text-highlighted">Funds movement</h3>
                    <p class="text-muted mt-2 text-sm">Debit is authorized but settlement has not started.</p>
                  </div>
                  <div class="border-default rounded-md border p-4">
                    <UIcon name="i-lucide-message-square-text" class="text-muted size-5" />
                    <h3 class="mt-4 text-sm font-semibold text-highlighted">Customer thread</h3>
                    <p class="text-muted mt-2 text-sm">Billing contact confirmed the invoice by email.</p>
                  </div>
                </div>
              </section>
              <section class="py-7 first:pt-0">
                <div class="mb-6 flex items-center gap-4">
                  <h2 class="text-highlighted shrink-0 text-xl font-semibold tracking-tight text-highlighted">History</h2>
                  <div class="bg-(--ui-border) h-px min-w-8 flex-1" />
                </div>
                <ol class="space-y-0">
                  <li class="grid grid-cols-[5rem_2rem_minmax(0,1fr)] gap-4">
                    <div class="pt-0.5 text-sm">
                      <p class="font-medium">May 29</p>
                      <p class="text-muted">09:22</p>
                    </div>
                    <div class="relative flex justify-center">
                      <span class="bg-(--ui-border) absolute top-7 bottom-0 w-px" />
                      <span class="relative z-10 mt-1 size-3 rounded-full border-2 border-warning bg-warning" />
                    </div>
                    <div class="pb-7">
                      <div class="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <p class="text-sm font-semibold text-highlighted">Review window opened</p>
                        <span class="text-muted text-sm">by Risk engine</span>
                      </div>
                      <p class="text-muted mt-1 text-sm">ACH velocity threshold requested a second approval before capture.</p>
                    </div>
                  </li>
                  <li class="grid grid-cols-[5rem_2rem_minmax(0,1fr)] gap-4">
                    <div class="pt-0.5 text-sm">
                      <p class="font-medium">May 29</p>
                      <p class="text-muted">09:18</p>
                    </div>
                    <div class="relative flex justify-center">
                      <span class="bg-(--ui-border) absolute top-7 bottom-0 w-px" />
                      <span class="bg-default relative z-10 mt-1 size-3 rounded-full border-2 border-default" />
                    </div>
                    <div class="pb-7">
                      <div class="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <p class="text-sm font-semibold text-highlighted">Internal note added</p>
                        <span class="text-muted text-sm">by Priya Shah</span>
                      </div>
                      <p class="text-muted mt-1 text-sm">Finance confirmed the purchase order and matching invoice total.</p>
                    </div>
                  </li>
                  <li class="grid grid-cols-[5rem_2rem_minmax(0,1fr)] gap-4">
                    <div class="pt-0.5 text-sm">
                      <p class="font-medium">May 29</p>
                      <p class="text-muted">09:03</p>
                    </div>
                    <div class="relative flex justify-center">
                      <span class="bg-(--ui-border) absolute top-7 bottom-0 w-px" />
                      <span class="relative z-10 mt-1 size-3 rounded-full border-2 border-success bg-success" />
                    </div>
                    <div class="pb-7">
                      <div class="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <p class="text-sm font-semibold text-highlighted">Bank account verified</p>
                        <span class="text-muted text-sm">by Adyen</span>
                      </div>
                      <p class="text-muted mt-1 text-sm">Account ownership passed through processor verification.</p>
                    </div>
                  </li>
                  <li class="grid grid-cols-[5rem_2rem_minmax(0,1fr)] gap-4">
                    <div class="pt-0.5 text-sm">
                      <p class="font-medium">May 29</p>
                      <p class="text-muted">08:56</p>
                    </div>
                    <div class="relative flex justify-center">
                      <span class="bg-default relative z-10 mt-1 size-3 rounded-full border-2 border-default" />
                    </div>
                    <div class="pb-7">
                      <div class="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <p class="text-sm font-semibold text-highlighted">Transaction created</p>
                        <span class="text-muted text-sm">by Checkout</span>
                      </div>
                      <p class="text-muted mt-1 text-sm">Hosted checkout submitted an ACH debit for Helio Supply.</p>
                    </div>
                  </li>
                </ol>
              </section>
            </div>
            <aside class="lg:sticky lg:top-6">
              <!-- Card 1: Pending review -->
              <UCard class="overflow-hidden rounded-md" :ui="{ body: 'contents' }">
                <div class="p-6">
                  <div>
                    <div class="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-warning dark:text-warning">
                      <span class="size-2 rounded-full bg-warning" />
                      Pending review
                    </div>
                    <p class="mt-2 text-3xl font-semibold tracking-tight text-highlighted">$8,120.50</p>
                  </div>
                  <div class="mt-6 grid grid-cols-2 gap-3">
                    <div class="bg-(--ui-bg-muted)/50 rounded-md p-3">
                      <p class="text-muted text-xs font-medium">Processor fee</p>
                      <p class="mt-1 text-sm font-semibold text-highlighted">$183.63</p>
                    </div>
                    <div class="bg-(--ui-bg-muted)/50 rounded-md p-3">
                      <p class="text-muted text-xs font-medium">Net after fees</p>
                      <p class="mt-1 text-sm font-semibold text-highlighted">$7,936.87</p>
                    </div>
                  </div>
                  <div class="border-default mt-6 border-t pt-5">
                    <div class="flex items-start gap-3">
                      <div class="grid size-9 shrink-0 place-items-center rounded-md bg-warning/10 text-warning dark:bg-warning/10 dark:text-warning">
                        <UIcon name="i-lucide-triangle-alert" class="size-5" />
                      </div>
                      <div class="min-w-0">
                        <p class="text-sm font-semibold text-highlighted">Manual verification required</p>
                        <p class="text-muted mt-1 text-sm">Confirm authorization before release. Capture is paused until the review outcome is logged.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border-default grid grid-cols-2 border-t">
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default px-4 py-2 h-12 rounded-none" aria-label="Copy ID" type="button" @click="copyValue(&quot;Copy ID&quot;)">
                    <UIcon name="i-lucide-copy" class="size-4" />
                    Copy ID
                  </UButton>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default px-4 py-2 h-12 rounded-none border-l border-default" aria-label="Receipt" type="button" @click="openAction(&quot;Receipt&quot;)">
                    <UIcon name="i-lucide-download" class="size-4" />
                    Receipt
                  </UButton>
                </div>
              </UCard>
              <div class="mt-5 flex items-center gap-2">
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default px-4 py-2 h-10 flex-1 rounded-md" aria-label="Email customer" type="button" @click="openAction(&quot;Email customer&quot;)">
                  <UIcon name="i-lucide-mail" class="size-4" />
                  Email customer
                </UButton>
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
</style>
