<!-- Page: /payment-processor/customer-detail-3 | One portable local customer workspace, with coherent removal/reset. -->
<script setup lang="ts">
useHead({ title: 'Customer Detail 3 · Blocks Admin' })

// @copy:customer-overview:start
import { computed, reactive, ref, useId } from 'vue'
type OverviewCustomer = { id: string, name: string, email: string, created: string, edited: string }
type OverviewTransaction = { id: string, title: string, status: 'Succeeded' | 'Declined', method: string, date: string, amount: number }
type OverviewDemo = {
  customer: OverviewCustomer | null,
  transactions: OverviewTransaction[],
  subscriptions: { id: string, name: string, amount: number, renewal: string }[],
  invoices: { id: string, amount: number, status: 'Open' | 'Paid' }[],
  methods: string[], mandates: string[]
}
const overviewInitial: OverviewDemo = {
  customer: { id: 'cus_0Nc5kjuQhtcEhS2p6SOxz', name: 'Northstar Supply Co.', email: 'billing.northstar@example.com', created: '2026-04-06T10:00:00Z', edited: '2026-06-18T09:00:00Z' },
  transactions: [
    { id: 'txn_demo_001', title: 'Invoice payment', status: 'Succeeded', method: 'Visa ending 4242', date: '2026-06-19T15:00:00Z', amount: 18420 },
    { id: 'txn_demo_002', title: 'Subscription renewal', status: 'Succeeded', method: 'ACH ending 7781', date: '2026-06-14T12:00:00Z', amount: 2400 },
    { id: 'txn_demo_003', title: 'Payment retry', status: 'Declined', method: 'Mastercard ending 1881', date: '2026-06-08T08:00:00Z', amount: 840 },
  ],
  subscriptions: [
    { id: 'sub_demo_001', name: 'Platform processing', amount: 2400, renewal: '2026-07-06T00:00:00Z' },
    { id: 'sub_demo_002', name: 'Advanced risk monitoring', amount: 480, renewal: '2026-07-12T00:00:00Z' },
  ],
  invoices: [{ id: 'INV-DEMO-001', amount: 18420, status: 'Paid' }, { id: 'INV-DEMO-002', amount: 840, status: 'Open' }, { id: 'INV-DEMO-003', amount: 1000, status: 'Open' }],
  methods: ['Visa ending 4242', 'ACH ending 7781', 'Mastercard ending 1881'],
  mandates: ['DEMO-ACH-001 (not an authorization)', 'DEMO-ACH-002 (not an authorization)'],
}
const overviewDemo = ref<OverviewDemo>(structuredClone(overviewInitial))
const overviewProfileOpen = ref(false)
const overviewProfileDraft = reactive({ name: '', email: '' })
const overviewProfileError = ref('')
const overviewNotice = ref('')
const overviewProfileFormId = useId()
function editOverviewCustomer() {
  if (!overviewDemo.value.customer) return
  Object.assign(overviewProfileDraft, overviewDemo.value.customer)
  overviewProfileError.value = ''; overviewProfileOpen.value = true
}
function saveOverviewCustomer() {
  const name = overviewProfileDraft.name.trim(), email = overviewProfileDraft.email.trim()
  if (!name || name.length > 100) { overviewProfileError.value = 'Enter a name between 1 and 100 characters.'; return }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) { overviewProfileError.value = 'Enter a valid example email.'; return }
  if (!overviewDemo.value.customer) return
  Object.assign(overviewDemo.value.customer, { name, email, edited: '2026-06-19T18:00:00Z' })
  overviewProfileOpen.value = false; overviewNotice.value = 'Demo profile updated in memory. No external customer was changed.'
}
const overviewSearch = ref('')
const overviewStatus = ref('All statuses')
const overviewTransactions = computed(() => overviewDemo.value.transactions.filter(transaction =>
  (!overviewSearch.value.trim() || `${transaction.id} ${transaction.title} ${transaction.method}`.toLowerCase().includes(overviewSearch.value.trim().toLowerCase()))
  && (overviewStatus.value === 'All statuses' || transaction.status === overviewStatus.value)).sort((a, b) => b.date.localeCompare(a.date)))
const overviewPaid = computed(() => overviewDemo.value.transactions.filter(transaction => transaction.status === 'Succeeded').reduce((sum, transaction) => sum + transaction.amount, 0))
const overviewOpenInvoices = computed(() => overviewDemo.value.invoices.filter(invoice => invoice.status === 'Open'))
const overviewOpenBalance = computed(() => overviewOpenInvoices.value.reduce((sum, invoice) => sum + invoice.amount, 0))
const overviewMonthly = computed(() => overviewDemo.value.subscriptions.reduce((sum, subscription) => sum + subscription.amount, 0))
const overviewLastPayment = computed(() => overviewDemo.value.transactions.filter(transaction => transaction.status === 'Succeeded').map(transaction => transaction.date).sort().at(-1))
const overviewMoney = (amount: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)
const overviewDate = (date: string) => new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'UTC' }).format(new Date(date))
const overviewDeleteOpen = ref(false)
const overviewDeleteConfirmation = ref('')
function requestOverviewRemoval() { overviewDeleteConfirmation.value = ''; overviewDeleteOpen.value = true }
function removeOverviewCustomer() {
  if (!overviewDemo.value.customer || overviewDeleteConfirmation.value !== overviewDemo.value.customer.id) return
  overviewDemo.value = { customer: null, transactions: [], subscriptions: [], invoices: [], methods: [], mandates: [] }
  overviewProfileOpen.value = false; overviewDeleteOpen.value = false; overviewSearch.value = ''; overviewStatus.value = 'All statuses'; overviewNotice.value = ''
}
function restoreOverviewDemo() { overviewDemo.value = structuredClone(overviewInitial); overviewSearch.value = ''; overviewStatus.value = 'All statuses'; overviewNotice.value = 'Fresh demo restored; earlier edits were not persisted.' }
// @copy:customer-overview:end
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/customer-detail-3">
    <div class="min-h-0 flex-1 overflow-y-auto"><main class="mx-auto max-w-6xl p-4 sm:p-6 lg:p-8">
      <section data-copy-block="processor-customer-overview" tabindex="0" aria-label="Example customer profile and financial history" class="min-w-0 space-y-5">
        <p class="text-sm text-muted">Local demo snapshot: Jun 19, 2026 at 18:00 UTC. No live payments, risk checks or account mandates.</p>
        <p v-if="overviewNotice" role="status" class="text-sm text-muted">{{ overviewNotice }}</p>
        <div v-if="overviewDemo.customer" class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div class="min-w-0 space-y-5">
            <UCard><template #header><div class="flex items-start justify-between gap-3"><div class="min-w-0"><h1 data-overview-name class="text-xl font-semibold text-highlighted">{{ overviewDemo.customer.name }}</h1><p class="mt-1 text-sm text-muted">Business customer (fictional)</p></div><UButton icon="i-lucide-pencil" aria-label="Edit overview customer profile" color="neutral" variant="outline" @click="editOverviewCustomer" /></div></template><dl class="grid gap-4 text-sm sm:grid-cols-2"><div><dt class="text-xs text-muted">Example email</dt><dd class="mt-1 break-all">{{ overviewDemo.customer.email }}</dd></div><div><dt class="text-xs text-muted">Customer ID (read-only)</dt><dd class="mt-1 break-all font-mono">{{ overviewDemo.customer.id }}</dd></div><div><dt class="text-xs text-muted">Created (UTC)</dt><dd class="mt-1">{{ overviewDate(overviewDemo.customer.created) }}</dd></div><div><dt class="text-xs text-muted">Last edited (UTC)</dt><dd class="mt-1">{{ overviewDate(overviewDemo.customer.edited) }}</dd></div></dl></UCard>
            <UCard><template #header><h2 class="font-semibold text-highlighted">Transaction history</h2><p class="mt-1 text-xs text-muted">Recorded successful total: {{ overviewMoney(overviewPaid) }} USD. Declined attempts are excluded; filters do not change this total.</p></template><div class="grid gap-3 sm:grid-cols-2"><UFormField label="Search transaction or method"><UInput v-model="overviewSearch" name="overviewTransactionSearch" type="search" icon="i-lucide-search" class="w-full" /></UFormField><UFormField label="Transaction status"><USelect v-model="overviewStatus" :items="['All statuses', 'Succeeded', 'Declined']" aria-label="Overview transaction status" class="w-full" /></UFormField></div><p data-overview-count class="mt-3 text-sm text-muted" aria-live="polite">{{ overviewTransactions.length }} of {{ overviewDemo.transactions.length }} transactions match.</p><ol class="mt-3 divide-y divide-default"><li v-for="transaction in overviewTransactions" :key="transaction.id" :data-overview-transaction="transaction.id" class="space-y-2 py-4"><div class="flex flex-wrap justify-between gap-2"><h3 class="font-medium">{{ transaction.title }}</h3><UBadge :label="transaction.status" :color="transaction.status === 'Succeeded' ? 'success' : 'error'" variant="subtle" /></div><code class="block text-xs text-muted">{{ transaction.id }}</code><p class="text-sm text-muted">{{ transaction.method }} · <time :datetime="transaction.date">{{ overviewDate(transaction.date) }} UTC</time></p><p class="font-semibold">{{ overviewMoney(transaction.amount) }} USD</p></li></ol><p v-if="!overviewTransactions.length" class="mt-4 text-sm text-muted">No transactions match these filters.</p></UCard>
            <UCard><template #header><h2 class="font-semibold text-highlighted">Active subscriptions</h2><p class="mt-1 text-xs text-muted">{{ overviewDemo.subscriptions.length }} demo subscriptions · monthly base total {{ overviewMoney(overviewMonthly) }} USD.</p></template><ul class="divide-y divide-default"><li v-for="subscription in overviewDemo.subscriptions" :key="subscription.id" :data-overview-subscription="subscription.id" class="space-y-2 py-3"><h3 class="font-medium">{{ subscription.name }}</h3><p class="text-sm text-muted">Monthly · renews {{ overviewDate(subscription.renewal) }} UTC</p><p class="font-medium">{{ overviewMoney(subscription.amount) }} USD</p></li></ul></UCard>
            <UCard><h2 class="font-semibold text-highlighted">Remove demo customer</h2><p class="mt-1 text-sm text-muted">Clears this in-memory customer and the displayed demo collections. It does not cancel subscriptions or delete accounts at any payment provider.</p><UButton label="Remove demo customer" aria-label="Remove overview demo customer" color="error" variant="outline" icon="i-lucide-trash-2" class="mt-4" @click="requestOverviewRemoval" /></UCard>
          </div>
          <aside class="min-w-0 space-y-5">
            <UCard><template #header><h2 class="font-semibold text-highlighted">Account summary</h2></template><dl data-overview-summary class="space-y-4 text-sm"><div><dt class="text-xs text-muted">Open invoices</dt><dd>{{ overviewOpenInvoices.length }} · {{ overviewMoney(overviewOpenBalance) }} USD</dd></div><div><dt class="text-xs text-muted">Payment metadata</dt><dd>{{ overviewDemo.methods.length }} items</dd></div><div><dt class="text-xs text-muted">Demo mandates</dt><dd>{{ overviewDemo.mandates.length }} examples, not authorizations</dd></div><div><dt class="text-xs text-muted">Risk label (demo)</dt><dd>Clear · not a live assessment</dd></div><div><dt class="text-xs text-muted">Last successful payment (UTC)</dt><dd>{{ overviewLastPayment ? overviewDate(overviewLastPayment) : 'None recorded' }}</dd></div></dl></UCard>
            <UCard><template #header><h2 class="font-semibold text-highlighted">Open invoice samples</h2></template><ul class="space-y-3 text-sm"><li v-for="invoice in overviewOpenInvoices" :key="invoice.id"><code class="block text-xs">{{ invoice.id }}</code><p>{{ overviewMoney(invoice.amount) }} USD</p></li></ul></UCard>
            <UCard><template #header><h2 class="font-semibold text-highlighted">Demo methods and mandates</h2></template><ul class="space-y-2 text-sm"><li v-for="method in overviewDemo.methods" :key="method">{{ method }}</li></ul><ul class="mt-4 space-y-2 text-xs text-muted"><li v-for="mandate in overviewDemo.mandates" :key="mandate" class="break-words">{{ mandate }}</li></ul></UCard>
          </aside>
        </div>
        <UCard v-else data-overview-removed><h1 class="text-xl font-semibold text-highlighted">Demo customer removed</h1><p class="mt-2 text-sm text-muted">The local customer and demo histories have been cleared. No external account or payment was changed.</p><UButton label="Restore fresh demo" aria-label="Restore overview customer demo" class="mt-4" @click="restoreOverviewDemo" /></UCard>
        <UModal v-model:open="overviewProfileOpen" title="Edit demo customer profile" description="Changes name and example email in memory. Customer ID, creation date and financial records remain unchanged."><template #body><form :id="overviewProfileFormId" class="space-y-4" novalidate @submit.prevent="saveOverviewCustomer"><p class="break-all font-mono text-xs text-muted">{{ overviewDemo.customer?.id }}</p><UFormField label="Company name"><UInput v-model="overviewProfileDraft.name" name="overviewCustomerName" maxlength="100" class="w-full" /></UFormField><UFormField label="Example email"><UInput v-model="overviewProfileDraft.email" name="overviewCustomerEmail" type="email" maxlength="254" class="w-full" /></UFormField><p v-if="overviewProfileError" role="alert" class="text-sm text-error">{{ overviewProfileError }}</p></form></template><template #footer><UButton label="Cancel" aria-label="Cancel overview customer edit" color="neutral" variant="outline" @click="overviewProfileOpen = false" /><UButton label="Save locally" aria-label="Save overview customer profile" type="submit" :form="overviewProfileFormId" /></template></UModal>
        <UModal v-model:open="overviewDeleteOpen" title="Remove this demo customer?" description="Clears only this example in memory, including demo collections. No real cancellation, customer deletion or payment operation."><template #body><p class="mb-3 break-all text-sm">Type {{ overviewDemo.customer?.id }} to confirm.</p><UFormField label="Customer ID confirmation"><UInput v-model="overviewDeleteConfirmation" name="overviewDeleteConfirmation" autocomplete="off" class="w-full" /></UFormField></template><template #footer><UButton label="Cancel" aria-label="Cancel overview customer removal" color="neutral" variant="outline" @click="overviewDeleteOpen = false" /><UButton label="Confirm local removal" aria-label="Confirm overview customer removal" color="error" :disabled="overviewDeleteConfirmation !== overviewDemo.customer?.id" @click="removeOverviewCustomer" /></template></UModal>
      </section>
    </main></div>
    <BlockCopyTools page="/payment-processor/customer-detail-3" />
  </div>
</template>
