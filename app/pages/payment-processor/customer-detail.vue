<!-- Page: /payment-processor/customer-detail | Local billing demo, not a payment-provider integration. -->
<script setup lang="ts">
useHead({ title: 'Customer Detail · Blocks Admin' })

// @copy:billing-vue:start
import { computed, reactive, ref, useId } from 'vue'
// @copy:billing-vue:end

// @copy:billing-plan:start
const billingPlan = reactive({ name: 'Team Premium', cycle: 'Monthly', members: 12 })
const billingPlanAmount = computed(() => (billingPlan.name === 'Team Premium' ? 120 : 60) * (billingPlan.cycle === 'Annual' ? 10 : 1))
const planDialogOpen = ref(false)
const planDraft = reactive({ name: '', cycle: '', members: '12' })
const planError = ref('')
const planNotice = ref('')
const planFormId = useId()
function editBillingPlan() { Object.assign(planDraft, { ...billingPlan, members: String(billingPlan.members) }); planError.value = ''; planDialogOpen.value = true }
function saveBillingPlan() {
  const members = Number(planDraft.members)
  if (!Number.isInteger(members) || members < 1 || members > 100) { planError.value = 'Enter a whole number of members between 1 and 100.'; return }
  if (!['Team Premium', 'Team Standard'].includes(planDraft.name) || !['Monthly', 'Annual'].includes(planDraft.cycle)) { planError.value = 'Choose a valid plan and cycle.'; return }
  Object.assign(billingPlan, { name: planDraft.name, cycle: planDraft.cycle, members })
  planNotice.value = 'Demo plan updated locally. No subscription or charge was changed.'; planDialogOpen.value = false
}
const planNextDate = computed(() => billingPlan.cycle === 'Annual' ? '2027-12-20' : '2027-01-19')
const planDate = (value: string) => new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeZone: 'UTC' }).format(new Date(value + 'T00:00:00Z'))
const planMoney = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
// @copy:billing-plan:end

// @copy:billing-cards:start
type BillingCard = { id: number, brand: string, last4: string, expiry: string }
const billingCards = ref<BillingCard[]>([
  { id: 1, brand: 'Google/Visa', last4: '9862', expiry: '2032-12' },
  { id: 2, brand: 'Mastercard', last4: '7299', expiry: '2030-02' },
  { id: 3, brand: 'Apple/JCB', last4: '9834', expiry: '2033-08' },
])
const defaultBillingCard = ref(1)
let nextBillingCardId = 4
const billingCardDialog = ref(false)
const billingCardDraft = reactive({ id: 0, brand: 'Google/Visa', last4: '', expiry: '2030-01', isDefault: false })
const billingCardError = ref('')
const billingCardNotice = ref('')
const billingCardRemoving = ref(false)
const billingCardFormId = useId()
const billingCardBrands = ['Google/Visa', 'Mastercard', 'Apple/JCB']
function editBillingCard(card?: BillingCard) {
  Object.assign(billingCardDraft, card ? { ...card, isDefault: card.id === defaultBillingCard.value } : { id: 0, brand: 'Google/Visa', last4: '', expiry: '2030-01', isDefault: false })
  billingCardError.value = ''; billingCardRemoving.value = false; billingCardDialog.value = true
}
function saveBillingCard() {
  const draft = billingCardDraft
  if (!billingCardBrands.includes(draft.brand)) { billingCardError.value = 'Choose a supported demo brand.'; return }
  if (!/^\d{4}$/.test(draft.last4)) { billingCardError.value = 'Enter exactly four digits, never a full card number.'; return }
  if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(draft.expiry) || draft.expiry < '2026-12') { billingCardError.value = 'Choose an expiration month on or after December 2026.'; return }
  if (billingCards.value.some(card => card.id !== draft.id && card.brand === draft.brand && card.last4 === draft.last4)) { billingCardError.value = 'This demo card already exists.'; return }
  const id = draft.id || nextBillingCardId++
  const card = { id, brand: draft.brand, last4: draft.last4, expiry: draft.expiry }
  if (draft.id) billingCards.value = billingCards.value.map(current => current.id === id ? card : current)
  else billingCards.value.push(card)
  if (draft.isDefault) defaultBillingCard.value = id
  // Unchecking the current default cannot leave a non-empty collection without a default.
  billingCardNotice.value = 'Demo metadata saved in memory. No payment method was registered.'; billingCardDialog.value = false
}
function removeBillingCard() {
  if (billingCards.value.length <= 1) { billingCardError.value = 'Keep at least one demo card.'; return }
  billingCards.value = billingCards.value.filter(card => card.id !== billingCardDraft.id)
  if (defaultBillingCard.value === billingCardDraft.id) defaultBillingCard.value = billingCards.value[0]!.id
  billingCardNotice.value = 'Demo card removed locally. A default card is still selected.'; billingCardDialog.value = false
}
// @copy:billing-cards:end

// @copy:billing-invoices:start
type BillingInvoice = { id: string, date: string, base: number, overage: number, status: 'Paid' | 'Declined' }
const billingInvoices: BillingInvoice[] = [
  { id: 'SD862840-48', date: '2026-12-20', base: 120, overage: 0, status: 'Paid' },
  { id: 'SD862840-47', date: '2026-11-20', base: 120, overage: 0, status: 'Paid' },
  { id: 'SD862840-46', date: '2026-10-19', base: 120, overage: 20, status: 'Paid' },
  { id: 'SD862840-45-1', date: '2026-10-19', base: 120, overage: 20, status: 'Declined' },
  { id: 'SD862840-41', date: '2026-06-20', base: 120, overage: 20, status: 'Paid' },
]
const invoiceSearch = ref('')
const invoiceStatus = ref('All statuses')
const invoiceSort = ref<'date' | 'amount' | 'id'>('date')
const invoiceDescending = ref(true)
const expandedInvoice = ref('')
const invoiceRegionId = useId()
const invoiceAmount = (invoice: BillingInvoice) => invoice.base + invoice.overage
const invoiceMoney = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
const invoiceDate = (date: string) => new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(date + 'T00:00:00Z'))
const matchingBillingInvoices = computed(() => billingInvoices.filter(invoice => (!invoiceSearch.value.trim() || invoice.id.toLowerCase().includes(invoiceSearch.value.trim().toLowerCase()))
  && (invoiceStatus.value === 'All statuses' || invoice.status === invoiceStatus.value)).sort((a, b) => {
  const order = invoiceSort.value === 'amount' ? invoiceAmount(a) - invoiceAmount(b) : a[invoiceSort.value].localeCompare(b[invoiceSort.value], 'en')
  return (order || a.id.localeCompare(b.id, 'en')) * (invoiceDescending.value ? -1 : 1)
}))
const billingPaidTotal = computed(() => billingInvoices.filter(invoice => invoice.status === 'Paid').reduce((total, invoice) => total + invoiceAmount(invoice), 0))
function resetBillingInvoices() { invoiceSearch.value = ''; invoiceStatus.value = 'All statuses'; invoiceSort.value = 'date'; invoiceDescending.value = true; expandedInvoice.value = '' }
// @copy:billing-invoices:end
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/customer-detail">
    <div class="min-h-0 flex-1 overflow-y-auto"><main class="mx-auto max-w-6xl space-y-8 p-4 sm:p-6 lg:p-8">
      <section data-copy-block="processor-billing-plan" tabindex="0" aria-label="Example customer and billing plan" class="space-y-5">
        <header class="flex items-start gap-3"><span class="flex size-11 shrink-0 items-center justify-center rounded-full bg-muted font-semibold" aria-hidden="true">NS</span><div class="min-w-0"><h1 class="text-2xl font-semibold text-highlighted">Northstar Supply Co.</h1><p class="mt-1 break-all text-sm text-muted">Business account · billing.northstar@example.com · cus_9Kx41L</p><p class="mt-2 text-xs text-muted">Local demo as of Dec 20, 2026 (UTC). No live customer, billing or risk checks.</p></div></header>
        <UCard><div class="flex flex-col justify-between gap-5 lg:flex-row lg:items-center"><dl class="grid flex-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"><div><dt class="text-xs text-muted">Demo plan</dt><dd data-billing-plan class="mt-1 font-semibold text-highlighted">{{ billingPlan.name }}</dd></div><div><dt class="text-xs text-muted">Amount per cycle (USD)</dt><dd data-billing-price class="mt-1 font-semibold">{{ planMoney(billingPlanAmount) }}</dd></div><div><dt class="text-xs text-muted">Cycle</dt><dd class="mt-1">{{ billingPlan.cycle }}</dd></div><div><dt class="text-xs text-muted">Next billing date (UTC)</dt><dd class="mt-1"><time :datetime="planNextDate">{{ planDate(planNextDate) }}</time></dd></div><div><dt class="text-xs text-muted">Members</dt><dd data-billing-members class="mt-1">{{ billingPlan.members }} members</dd></div></dl><UButton label="Edit demo plan" aria-label="Edit demo billing plan" @click="editBillingPlan" /></div></UCard>
        <p v-if="planNotice" role="status" class="text-sm text-muted">{{ planNotice }}</p>
        <UModal v-model:open="planDialogOpen" title="Edit demo plan" description="Changes affect only this example. Annual pricing is ten monthly installments; historical invoices are unchanged."><template #body><form :id="planFormId" class="space-y-4" novalidate @submit.prevent="saveBillingPlan"><UFormField label="Plan"><USelect v-model="planDraft.name" :items="['Team Premium', 'Team Standard']" aria-label="Demo billing plan" class="w-full" /></UFormField><UFormField label="Cycle"><USelect v-model="planDraft.cycle" :items="['Monthly', 'Annual']" aria-label="Demo billing cycle" class="w-full" /></UFormField><UFormField label="Members (1–100)" :error="planError || undefined"><UInput v-model="planDraft.members" name="billingMembers" type="number" min="1" max="100" class="w-full" /></UFormField></form></template><template #footer><UButton label="Cancel" aria-label="Cancel demo billing plan" color="neutral" variant="outline" @click="planDialogOpen = false" /><UButton label="Save locally" aria-label="Save demo billing plan" type="submit" :form="planFormId" /></template></UModal>
      </section>

      <section data-copy-block="processor-billing-cards" tabindex="0" aria-label="Example card metadata manager" class="space-y-4">
        <header class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="text-lg font-semibold text-highlighted">Payment methods</h2><p class="mt-1 text-sm text-muted">{{ billingCards.length }} demo cards · last four digits and expiry only. No PAN, CVC or usable payment credentials.</p></div><UButton label="Add demo card" aria-label="Add demo billing card" color="neutral" variant="outline" @click="editBillingCard()" /></header>
        <p class="text-xs text-muted">Expiry is compared with December 2026, the fixed example date. Default is a local preference, not authorization to collect money.</p>
        <div class="hidden overflow-x-auto rounded-lg border border-default md:block"><table class="w-full text-left text-sm"><caption class="sr-only">Fictional card metadata</caption><thead class="bg-muted text-muted"><tr><th scope="col" class="p-3">Payment method</th><th scope="col" class="p-3">Ending</th><th scope="col" class="p-3">Role</th><th scope="col" class="p-3">Expires</th><th scope="col" class="p-3">Manage</th></tr></thead><tbody><tr v-for="card in billingCards" :key="card.id" :data-billing-card="card.id" class="border-t border-default"><td class="p-3 font-medium">{{ card.brand }}</td><td class="p-3">{{ card.last4 }}</td><td class="p-3"><UBadge :label="card.id === defaultBillingCard ? 'Default' : 'Backup'" :color="card.id === defaultBillingCard ? 'success' : 'neutral'" variant="subtle" /></td><td class="p-3"><time :datetime="card.expiry">{{ card.expiry }}</time></td><td class="p-3"><UButton icon="i-lucide-settings" :aria-label="`Manage demo billing card ${card.id}`" color="neutral" variant="outline" @click="editBillingCard(card)" /></td></tr></tbody></table></div>
        <div class="space-y-3 md:hidden"><UCard v-for="card in billingCards" :key="card.id" :data-billing-card-mobile="card.id"><div class="flex items-center justify-between gap-3"><h3 class="font-medium">{{ card.brand }} · {{ card.last4 }}</h3><UButton icon="i-lucide-settings" :aria-label="`Manage mobile demo billing card ${card.id}`" color="neutral" variant="outline" @click="editBillingCard(card)" /></div><p class="mt-2 text-sm text-muted">Expires {{ card.expiry }}</p><UBadge class="mt-2" :label="card.id === defaultBillingCard ? 'Default' : 'Backup'" :color="card.id === defaultBillingCard ? 'success' : 'neutral'" variant="subtle" /></UCard></div>
        <p v-if="billingCardNotice" role="status" class="text-sm text-muted">{{ billingCardNotice }}</p>
        <UModal v-model:open="billingCardDialog" :title="billingCardRemoving ? 'Remove demo card?' : billingCardDraft.id ? 'Edit demo card metadata' : 'Add demo card metadata'" description="This is a local metadata demonstration, not a card vault or payment form."><template #body><p v-if="billingCardRemoving" class="text-sm">Remove {{ billingCardDraft.brand }} ending {{ billingCardDraft.last4 }} from this example? Removing the default assigns the first remaining card.</p><form v-else :id="billingCardFormId" class="space-y-4" novalidate @submit.prevent="saveBillingCard"><UFormField label="Demo brand"><USelect v-model="billingCardDraft.brand" :items="billingCardBrands" aria-label="Demo billing card brand" class="w-full" /></UFormField><UFormField label="Last four digits only"><UInput v-model="billingCardDraft.last4" name="billingCardLast4" inputmode="numeric" maxlength="4" class="w-full" /></UFormField><UFormField label="Expiration month"><UInput v-model="billingCardDraft.expiry" name="billingCardExpiry" type="month" min="2026-12" class="w-full" /></UFormField><UCheckbox v-model="billingCardDraft.isDefault" name="billingCardDefault" label="Set as default (the current default stays selected when unchecked)" /><p v-if="billingCardError" role="alert" class="text-sm text-error">{{ billingCardError }}</p></form><p v-if="billingCardRemoving && billingCardError" role="alert" class="text-sm text-error">{{ billingCardError }}</p></template><template #footer><div class="flex w-full flex-wrap justify-end gap-2"><UButton label="Cancel" aria-label="Cancel demo billing card" color="neutral" variant="outline" @click="billingCardDialog = false" /><UButton v-if="billingCardRemoving" label="Confirm removal" aria-label="Confirm demo billing card removal" color="error" @click="removeBillingCard" /><template v-else><UButton v-if="billingCardDraft.id" label="Remove demo card" aria-label="Remove demo billing card" color="error" variant="outline" :disabled="billingCards.length <= 1" @click="billingCardRemoving = true; billingCardError = ''" /><UButton label="Save metadata" aria-label="Save demo billing card" type="submit" :form="billingCardFormId" /></template></div></template></UModal>
      </section>

      <section data-copy-block="processor-billing-invoices" tabindex="0" aria-label="Example invoice history" class="space-y-4">
        <header><h2 class="text-lg font-semibold text-highlighted">Invoices</h2><p class="mt-1 text-sm text-muted">Five historical samples · paid total {{ invoiceMoney(billingPaidTotal) }} USD. Declined attempts are excluded. Editing the demo plan does not alter history.</p></header>
        <div class="grid gap-3 sm:grid-cols-2"><UFormField label="Search invoice ID"><UInput v-model="invoiceSearch" name="billingInvoiceSearch" type="search" icon="i-lucide-search" class="w-full" /></UFormField><UFormField label="Invoice status"><USelect v-model="invoiceStatus" :items="['All statuses', 'Paid', 'Declined']" aria-label="Billing invoice status" class="w-full" /></UFormField></div>
        <div class="flex flex-wrap items-end gap-2"><UFormField label="Sort invoices"><USelect v-model="invoiceSort" :items="[{ label: 'Date', value: 'date' }, { label: 'Amount', value: 'amount' }, { label: 'Invoice ID', value: 'id' }]" aria-label="Billing invoice sort" /></UFormField><UButton :label="invoiceDescending ? 'Descending' : 'Ascending'" aria-label="Toggle billing invoice order" color="neutral" variant="outline" @click="invoiceDescending = !invoiceDescending" /><UButton label="Reset filters" aria-label="Reset billing invoice filters" color="neutral" variant="ghost" @click="resetBillingInvoices" /></div>
        <p data-billing-invoice-count aria-live="polite" class="text-sm text-muted">{{ matchingBillingInvoices.length }} of {{ billingInvoices.length }} invoices match.</p>
        <UCard v-for="invoice in matchingBillingInvoices" :key="invoice.id" :data-billing-invoice="invoice.id" :ui="{ body: 'p-0 sm:p-0' }"><UButton color="neutral" variant="ghost" class="w-full justify-between p-4 text-left" :aria-label="`Toggle invoice ${invoice.id}`" :aria-expanded="expandedInvoice === invoice.id" :aria-controls="invoiceRegionId + '-' + invoice.id" @click="expandedInvoice = expandedInvoice === invoice.id ? '' : invoice.id"><span class="grid flex-1 gap-3 sm:grid-cols-4"><span class="break-all font-medium">{{ invoice.id }}</span><time :datetime="invoice.date" class="text-muted">{{ invoiceDate(invoice.date) }} UTC</time><span>{{ invoiceMoney(invoiceAmount(invoice)) }} USD</span><span><UBadge :label="invoice.status" :color="invoice.status === 'Paid' ? 'success' : 'error'" variant="subtle" /></span></span><UIcon :name="expandedInvoice === invoice.id ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'" class="size-4 shrink-0" /></UButton><div v-if="expandedInvoice === invoice.id" :id="invoiceRegionId + '-' + invoice.id" role="region" :aria-label="`Details of ${invoice.id}`" class="space-y-2 border-t border-default p-4 text-sm"><p>Premium Monthly · base {{ invoiceMoney(invoice.base) }} + usage {{ invoiceMoney(invoice.overage) }} = {{ invoiceMoney(invoiceAmount(invoice)) }} USD.</p><p class="text-muted">{{ invoice.status === 'Paid' ? 'Recorded as paid in this fictional history.' : 'Declined example attempt. No retry or charge is performed.' }}</p></div></UCard>
        <p v-if="!matchingBillingInvoices.length" class="rounded-lg border border-default p-5 text-sm text-muted">No invoices match these filters.</p>
      </section>
    </main></div>
    <BlockCopyTools page="/payment-processor/customer-detail" />
  </div>
</template>
