<!-- Page: /payment-processor/customer-detail-2 | Fictional subscription ledger with local profile editing. -->
<script setup lang="ts">
useHead({ title: 'Customer Detail 2 · Blocks Admin' })

// @copy:subscription-data:start
import { computed, reactive, ref, useId } from 'vue'
type SubscriptionInvoice = { id: string, status: 'Open' | 'Paid' | 'Overdue', method: string, base: number, usage: number, due: string }
type CustomerSubscription = { id: string, name: string, monthly: number, renewal: string, invoices: SubscriptionInvoice[] }
const customerSubscriptions: CustomerSubscription[] = [
  { id: 'retainer', name: 'Monthly retainer', monthly: 2400, renewal: '2026-07-06', invoices: [
    { id: 'INV-20486', status: 'Open', method: 'Visa ending 4242', base: 2400, usage: 16020, due: '2026-07-19' },
    { id: 'INV-20041', status: 'Paid', method: 'ACH ending 7781', base: 2400, usage: 21600, due: '2026-06-19' },
    { id: 'INV-19890', status: 'Paid', method: 'Mastercard ending 1881', base: 2400, usage: 5200, due: '2026-05-19' },
  ] },
  { id: 'design', name: 'Product design sprint', monthly: 480, renewal: '2026-07-12', invoices: [
    { id: 'INV-20342', status: 'Open', method: 'ACH ending 7781', base: 480, usage: 12420, due: '2026-07-12' },
    { id: 'INV-20198', status: 'Overdue', method: 'Visa ending 4242', base: 480, usage: 9000, due: '2026-06-28' },
  ] },
  { id: 'brand', name: 'Brand identity system', monthly: 190, renewal: '2026-07-18', invoices: [
    { id: 'INV-19972', status: 'Paid', method: 'Mastercard ending 1881', base: 190, usage: 0, due: '2026-06-18' },
    { id: 'INV-19726', status: 'Paid', method: 'Mastercard ending 1881', base: 190, usage: 0, due: '2026-05-18' },
  ] },
]
const subscriptionMoney = (amount: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)
const subscriptionDate = (value: string) => new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(value + 'T00:00:00Z'))
const subscriptionInvoiceAmount = (invoice: SubscriptionInvoice) => invoice.base + invoice.usage
// @copy:subscription-data:end

// @copy:subscription-profile:start
const subscriptionProfile = reactive({ name: 'Northstar Supply Co.', email: 'billing.northstar@example.com', phone: '+1 312 555 0128', owner: 'Priya Menon', location: 'Chicago, IL', taxId: 'DEMO-US-84-3927710' })
const subscriptionProfileOpen = ref(false)
const subscriptionProfileDraft = reactive({ ...subscriptionProfile })
const subscriptionProfileError = ref('')
const subscriptionProfileNotice = ref('')
const subscriptionProfileFormId = useId()
const subscriptionOutstanding = computed(() => customerSubscriptions.flatMap(subscription => subscription.invoices).filter(invoice => invoice.status !== 'Paid').reduce((sum, invoice) => sum + subscriptionInvoiceAmount(invoice), 0))
const subscriptionMonthlyTotal = computed(() => customerSubscriptions.reduce((sum, subscription) => sum + subscription.monthly, 0))
const subscriptionNextRenewal = computed(() => customerSubscriptions.map(subscription => subscription.renewal).sort()[0]!)
function editSubscriptionProfile() { Object.assign(subscriptionProfileDraft, subscriptionProfile); subscriptionProfileError.value = ''; subscriptionProfileOpen.value = true }
function saveSubscriptionProfile() {
  const draft = subscriptionProfileDraft
  if (!draft.name.trim() || draft.name.trim().length > 100 || !draft.owner.trim() || !draft.location.trim() || !draft.taxId.trim()) { subscriptionProfileError.value = 'Enter a company name (up to 100 characters), owner, location and demo tax ID.'; return }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(draft.email.trim()) || draft.email.length > 254) { subscriptionProfileError.value = 'Enter a valid example email.'; return }
  if (draft.phone.trim() && (!/^\+?[\d ()-]+$/.test(draft.phone.trim()) || draft.phone.replace(/\D/g, '').length < 7 || draft.phone.replace(/\D/g, '').length > 15)) { subscriptionProfileError.value = 'Enter a valid demo phone number or leave it blank.'; return }
  for (const key of Object.keys(subscriptionProfile) as (keyof typeof subscriptionProfile)[]) subscriptionProfile[key] = draft[key].trim()
  subscriptionProfileNotice.value = 'Example profile saved locally. No account, identity or tax record was updated.'; subscriptionProfileOpen.value = false
}
// @copy:subscription-profile:end

// @copy:subscription-ledger:start
const subscriptionSearch = ref('')
const subscriptionStatus = ref('All statuses')
const subscriptionSort = ref<'id' | 'amount' | 'due'>('due')
const subscriptionDescending = ref(true)
const allSubscriptionInvoices = computed(() => customerSubscriptions.flatMap(subscription => subscription.invoices))
const displayedSubscriptions = computed(() => customerSubscriptions.map(subscription => ({ ...subscription, invoices: subscription.invoices.filter(invoice =>
  (!subscriptionSearch.value.trim() || `${invoice.id} ${invoice.method} ${subscription.name}`.toLowerCase().includes(subscriptionSearch.value.trim().toLowerCase()))
  && (subscriptionStatus.value === 'All statuses' || invoice.status === subscriptionStatus.value)).sort((a, b) => {
    const order = subscriptionSort.value === 'amount' ? subscriptionInvoiceAmount(a) - subscriptionInvoiceAmount(b) : a[subscriptionSort.value].localeCompare(b[subscriptionSort.value], 'en')
    return (order || a.id.localeCompare(b.id, 'en')) * (subscriptionDescending.value ? -1 : 1)
  }) })))
const matchingSubscriptionCount = computed(() => displayedSubscriptions.value.reduce((sum, subscription) => sum + subscription.invoices.length, 0))
const subscriptionInvoiceColor = (status: SubscriptionInvoice['status']) => status === 'Paid' ? 'success' as const : status === 'Overdue' ? 'error' as const : 'info' as const
function sortSubscriptionInvoices(key: 'id' | 'amount' | 'due') { if (subscriptionSort.value === key) subscriptionDescending.value = !subscriptionDescending.value; else { subscriptionSort.value = key; subscriptionDescending.value = false } }
function resetSubscriptionInvoices() { subscriptionSearch.value = ''; subscriptionStatus.value = 'All statuses'; subscriptionSort.value = 'due'; subscriptionDescending.value = true; subscriptionDownloadNotice.value = '' }
const subscriptionInvoiceOpen = ref(false)
const selectedSubscriptionInvoice = ref<{ subscription: string, invoice: SubscriptionInvoice } | null>(null)
function showSubscriptionInvoice(subscription: string, invoice: SubscriptionInvoice) { selectedSubscriptionInvoice.value = { subscription, invoice }; subscriptionInvoiceOpen.value = true }
const subscriptionDownloadNotice = ref('')
function downloadSubscriptionInvoice(subscription: string, invoice: SubscriptionInvoice) {
  const rows = [
    ['Invoice', 'Subscription', 'Customer ID', 'Status', 'Due (UTC)', 'Method (demo)', 'Base (USD)', 'Usage (USD)', 'Total (USD)'],
    [invoice.id, subscription, 'cus_9Kx41L', invoice.status, invoice.due, invoice.method, String(invoice.base), String(invoice.usage), String(subscriptionInvoiceAmount(invoice))],
  ]
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\r\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a'); anchor.href = url; anchor.download = invoice.id + '-demo.csv'; anchor.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
  subscriptionDownloadNotice.value = `Demo CSV prepared for ${invoice.id}. Not a legal invoice or payment receipt.`
}
// @copy:subscription-ledger:end
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/customer-detail-2">
    <div class="min-h-0 flex-1 overflow-y-auto"><main class="mx-auto max-w-7xl space-y-8 p-4 sm:p-6 lg:p-8">
      <section data-copy-block="processor-subscription-profile" tabindex="0" aria-label="Example subscription customer profile" class="space-y-5">
        <header class="flex flex-wrap items-start justify-between gap-3"><div class="min-w-0"><h1 data-subscription-name class="text-2xl font-semibold text-highlighted">{{ subscriptionProfile.name }}</h1><p class="mt-1 text-sm text-muted">{{ customerSubscriptions.length }} example subscriptions · {{ subscriptionMoney(subscriptionOutstanding) }} outstanding (Open + Overdue) · next renewal {{ subscriptionDate(subscriptionNextRenewal) }} UTC.</p><p class="mt-2 text-xs text-muted">Snapshot: July 1, 2026 (UTC). Fictional data, not a live billing or risk assessment.</p></div><UButton label="Edit demo profile" aria-label="Edit subscription customer profile" color="neutral" variant="outline" icon="i-lucide-pencil" @click="editSubscriptionProfile" /></header>
        <UCard><dl class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"><div><dt class="text-xs text-muted">Customer ID (read-only)</dt><dd class="mt-1 font-mono text-sm">cus_9Kx41L</dd></div><div><dt class="text-xs text-muted">Billing contact</dt><dd class="mt-1 break-all text-sm">{{ subscriptionProfile.email }}</dd></div><div><dt class="text-xs text-muted">Reminder phone (demo)</dt><dd class="mt-1 text-sm">{{ subscriptionProfile.phone || 'Not provided' }}</dd></div><div><dt class="text-xs text-muted">Owner</dt><dd class="mt-1 text-sm">{{ subscriptionProfile.owner }}</dd></div><div><dt class="text-xs text-muted">Location</dt><dd class="mt-1 text-sm">{{ subscriptionProfile.location }}</dd></div><div><dt class="text-xs text-muted">Tax ID (fictional)</dt><dd class="mt-1 break-all text-sm">{{ subscriptionProfile.taxId }}</dd></div><div><dt class="text-xs text-muted">Monthly base total (USD)</dt><dd class="mt-1 text-sm">{{ subscriptionMoney(subscriptionMonthlyTotal) }} · excludes usage</dd></div><div><dt class="text-xs text-muted">Payment metadata</dt><dd class="mt-1 text-sm">Visa 4242 · ACH 7781 · Mastercard 1881</dd></div><div><dt class="text-xs text-muted">Created / status</dt><dd class="mt-1 text-sm">Jun 2, 2026 UTC · Active (demo)</dd></div></dl></UCard>
        <p v-if="subscriptionProfileNotice" role="status" class="text-sm text-muted">{{ subscriptionProfileNotice }}</p>
        <UModal v-model:open="subscriptionProfileOpen" title="Edit example customer profile" description="Only changes this local demo. Customer ID and financial history are read-only."><template #body><form :id="subscriptionProfileFormId" class="space-y-4" novalidate @submit.prevent="saveSubscriptionProfile"><UFormField label="Company name"><UInput v-model="subscriptionProfileDraft.name" name="subscriptionCustomerName" maxlength="100" class="w-full" /></UFormField><UFormField label="Example email"><UInput v-model="subscriptionProfileDraft.email" name="subscriptionCustomerEmail" type="email" maxlength="254" class="w-full" /></UFormField><UFormField label="Demo phone (optional)"><UInput v-model="subscriptionProfileDraft.phone" name="subscriptionCustomerPhone" type="tel" class="w-full" /></UFormField><UFormField label="Owner"><UInput v-model="subscriptionProfileDraft.owner" name="subscriptionCustomerOwner" maxlength="100" class="w-full" /></UFormField><UFormField label="Location"><UInput v-model="subscriptionProfileDraft.location" name="subscriptionCustomerLocation" maxlength="100" class="w-full" /></UFormField><UFormField label="Fictional tax ID"><UInput v-model="subscriptionProfileDraft.taxId" name="subscriptionCustomerTaxId" maxlength="100" class="w-full" /></UFormField><p v-if="subscriptionProfileError" role="alert" class="text-sm text-error">{{ subscriptionProfileError }}</p></form></template><template #footer><UButton label="Cancel" aria-label="Cancel subscription customer profile" color="neutral" variant="outline" @click="subscriptionProfileOpen = false" /><UButton label="Save locally" aria-label="Save subscription customer profile" type="submit" :form="subscriptionProfileFormId" /></template></UModal>
      </section>

      <section data-copy-block="processor-subscription-ledger" tabindex="0" aria-label="Example subscription invoices" class="space-y-5">
        <header><h2 class="text-lg font-semibold text-highlighted">Subscription invoices</h2><p class="mt-1 text-sm text-muted">Historical charges include base + usage. Renewal prices are monthly base fees, not the invoice totals. No collection, retry or reminder is sent.</p></header>
        <div class="grid gap-3 sm:grid-cols-2"><UFormField label="Search invoice, method or subscription"><UInput v-model="subscriptionSearch" name="subscriptionInvoiceSearch" type="search" icon="i-lucide-search" class="w-full" /></UFormField><UFormField label="Invoice status"><USelect v-model="subscriptionStatus" :items="['All statuses', 'Open', 'Paid', 'Overdue']" aria-label="Subscription invoice status" class="w-full" /></UFormField></div>
        <div class="flex flex-wrap items-end gap-2"><UFormField label="Sort all groups"><USelect v-model="subscriptionSort" :items="[{ label: 'Due date', value: 'due' }, { label: 'Amount', value: 'amount' }, { label: 'Invoice ID', value: 'id' }]" aria-label="Subscription invoice sort" /></UFormField><UButton :label="subscriptionDescending ? 'Descending' : 'Ascending'" aria-label="Toggle subscription invoice order" color="neutral" variant="outline" @click="subscriptionDescending = !subscriptionDescending" /><UButton label="Reset filters" aria-label="Reset subscription invoice filters" color="neutral" variant="ghost" @click="resetSubscriptionInvoices" /></div>
        <p data-subscription-count aria-live="polite" class="text-sm text-muted">{{ matchingSubscriptionCount }} of {{ allSubscriptionInvoices.length }} invoice records match.</p><p v-if="subscriptionDownloadNotice" role="status" class="text-sm text-muted">{{ subscriptionDownloadNotice }}</p>
        <UCard v-for="subscription in displayedSubscriptions" :key="subscription.id" :data-subscription-group="subscription.id">
          <template #header><div class="flex flex-wrap justify-between gap-3"><div><h3 class="font-semibold text-highlighted">{{ subscription.name }}</h3><p class="mt-1 text-sm text-muted">Monthly base: {{ subscriptionMoney(subscription.monthly) }} USD · {{ subscription.invoices.length }} matching invoices</p></div><p class="text-sm text-muted">Renews {{ subscriptionDate(subscription.renewal) }} UTC</p></div></template>
          <div v-if="subscription.invoices.length" class="hidden overflow-x-auto md:block"><table class="w-full text-left text-sm"><caption class="sr-only">{{ subscription.name }} invoice records</caption><thead class="text-muted"><tr><th scope="col" class="p-3"><UButton label="Invoice" aria-label="Sort subscription invoices by ID" color="neutral" variant="ghost" size="xs" @click="sortSubscriptionInvoices('id')" /></th><th scope="col" class="p-3">Status</th><th scope="col" class="p-3">Method</th><th scope="col" class="p-3"><UButton label="Amount (USD)" aria-label="Sort subscription invoices by amount" color="neutral" variant="ghost" size="xs" @click="sortSubscriptionInvoices('amount')" /></th><th scope="col" class="p-3"><UButton label="Due (UTC)" aria-label="Sort subscription invoices by due date" color="neutral" variant="ghost" size="xs" @click="sortSubscriptionInvoices('due')" /></th><th scope="col" class="p-3">Demo CSV</th></tr></thead><tbody><tr v-for="invoice in subscription.invoices" :key="invoice.id" :data-subscription-invoice="invoice.id" class="border-t border-default"><td class="p-3"><UButton :label="invoice.id" :aria-label="`View subscription invoice ${invoice.id}`" color="neutral" variant="link" @click="showSubscriptionInvoice(subscription.name, invoice)" /></td><td class="p-3"><UBadge :label="invoice.status" :color="subscriptionInvoiceColor(invoice.status)" variant="subtle" /></td><td class="p-3">{{ invoice.method }}</td><td class="p-3">{{ subscriptionMoney(subscriptionInvoiceAmount(invoice)) }}</td><td class="p-3 whitespace-nowrap"><time :datetime="invoice.due">{{ subscriptionDate(invoice.due) }}</time></td><td class="p-3"><UButton icon="i-lucide-download" :aria-label="`Download demo CSV ${invoice.id}`" color="neutral" variant="outline" @click="downloadSubscriptionInvoice(subscription.name, invoice)" /></td></tr></tbody></table></div>
          <div class="space-y-4 md:hidden"><article v-for="invoice in subscription.invoices" :key="invoice.id" :data-subscription-mobile="invoice.id" class="space-y-3 border-b border-default pb-4 last:border-b-0 last:pb-0"><div class="flex flex-wrap items-center justify-between gap-2"><UButton :label="invoice.id" :aria-label="`View mobile subscription invoice ${invoice.id}`" color="neutral" variant="link" class="p-0" @click="showSubscriptionInvoice(subscription.name, invoice)" /><UBadge :label="invoice.status" :color="subscriptionInvoiceColor(invoice.status)" variant="subtle" /></div><dl class="space-y-2 text-sm"><div><dt class="text-xs text-muted">Method (demo)</dt><dd>{{ invoice.method }}</dd></div><div><dt class="text-xs text-muted">Total (USD)</dt><dd>{{ subscriptionMoney(subscriptionInvoiceAmount(invoice)) }}</dd></div><div><dt class="text-xs text-muted">Due (UTC)</dt><dd>{{ subscriptionDate(invoice.due) }}</dd></div></dl><UButton label="Download demo CSV" :aria-label="`Download mobile demo CSV ${invoice.id}`" icon="i-lucide-download" color="neutral" variant="outline" @click="downloadSubscriptionInvoice(subscription.name, invoice)" /></article></div>
          <p v-if="!subscription.invoices.length" class="text-sm text-muted">No invoices in this subscription match the filters.</p>
        </UCard>
        <UModal v-model:open="subscriptionInvoiceOpen" :title="selectedSubscriptionInvoice?.invoice.id || 'Example invoice'" description="Fictional invoice breakdown. This is not a legal document, payment receipt or live balance."><template #body><dl v-if="selectedSubscriptionInvoice" class="space-y-4 text-sm"><div><dt class="text-xs text-muted">Subscription / customer</dt><dd>{{ selectedSubscriptionInvoice.subscription }} · cus_9Kx41L</dd></div><div><dt class="text-xs text-muted">Due (UTC)</dt><dd>{{ subscriptionDate(selectedSubscriptionInvoice.invoice.due) }}</dd></div><div><dt class="text-xs text-muted">Demo status / method</dt><dd>{{ selectedSubscriptionInvoice.invoice.status }} · {{ selectedSubscriptionInvoice.invoice.method }}</dd></div><div><dt class="text-xs text-muted">Base + usage = total (USD)</dt><dd>{{ subscriptionMoney(selectedSubscriptionInvoice.invoice.base) }} + {{ subscriptionMoney(selectedSubscriptionInvoice.invoice.usage) }} = {{ subscriptionMoney(subscriptionInvoiceAmount(selectedSubscriptionInvoice.invoice)) }}</dd></div></dl></template><template #footer><UButton label="Close" aria-label="Close subscription invoice details" @click="subscriptionInvoiceOpen = false" /></template></UModal>
      </section>
    </main></div>
    <BlockCopyTools page="/payment-processor/customer-detail-2" />
  </div>
</template>
