<!-- Page: /ecommerce/add-customer | Portable customer editor; all data stays in memory. -->
<script setup lang="ts">
useHead({ title: 'Add Customer · Blocks Admin' })

// @copy:customer-editor:start
import { reactive, ref, useId } from 'vue'
import type { FormError, FormErrorEvent } from '@nuxt/ui'

type Address = { id: number, label: string, recipient: string, street: string, unit: string, city: string, state: string, postalCode: string, country: string }
type Contact = { id: number, label: string, email: string, phone: string }
type DemoCard = { id: number, brand: string, last4: string, expiry: string, holder: string }
function emptyAddress(id: number, label: string): Address { return { id, label, recipient: '', street: '', unit: '', city: '', state: '', postalCode: '', country: 'United States' } }
function initialCustomer() {
  return {
    firstName: '', lastName: '', customerId: 'CUS-2418', company: '', status: 'Active', source: 'Online store', owner: 'Avery Hall',
    channel: 'Email', marketingOptIn: false,
    contacts: [{ id: 1, label: 'Primary', email: '', phone: '' }] as Contact[],
    billing: emptyAddress(1, 'Billing'), shipping: [emptyAddress(1, 'Primary shipping')],
    cards: [] as DemoCard[], defaultCardId: 0, segments: [] as string[], notes: '',
  }
}
type CustomerDraft = ReturnType<typeof initialCustomer>
const customer = reactive(initialCustomer())
const editorId = useId()
const formVersion = ref(0)
let nextItemId = 2
const sections = [{ key: 'account', label: 'Account' }, { key: 'contacts', label: 'Contacts' }, { key: 'billing', label: 'Billing' }, { key: 'shipping', label: 'Shipping' }, { key: 'cards', label: 'Cards' }, { key: 'preferences', label: 'Preferences' }]
const addressFields = [{ key: 'recipient', label: 'Recipient' }, { key: 'street', label: 'Street address' }, { key: 'unit', label: 'Suite, building, floor' }, { key: 'city', label: 'City' }, { key: 'state', label: 'State / region' }, { key: 'postalCode', label: 'Postal code' }, { key: 'country', label: 'Country' }] as const
const feedback = ref('Demo only. Use example details; changes, drafts and previews are not persisted or sent to a server.')
const draft = ref<CustomerDraft | null>(null)
const submitted = ref<CustomerDraft | null>(null)
function snapshot(): CustomerDraft { return JSON.parse(JSON.stringify(customer)) }
function saveDraft() { draft.value = snapshot(); feedback.value = 'Draft saved in memory. Reloading this component loses it.' }
function restoreDraft() { if (!draft.value) return; Object.assign(customer, JSON.parse(JSON.stringify(draft.value))); formVersion.value += 1; submitted.value = null; segmentText.value = ''; segmentError.value = ''; feedback.value = 'In-memory draft restored.' }
function resetCustomer() { Object.assign(customer, initialCustomer()); submitted.value = null; formVersion.value += 1; segmentText.value = ''; segmentError.value = ''; feedback.value = 'Customer form reset. A saved in-memory draft can still be restored.' }
function jumpToSection(key: string) { const element = document.getElementById(`${editorId}-${key}`); element?.scrollIntoView({ block: 'start' }); element?.focus({ preventScroll: true }) }
function addContact() { customer.contacts.push({ id: nextItemId++, label: `Contact ${customer.contacts.length + 1}`, email: '', phone: '' }) }
function removeContact(id: number) { if (customer.contacts.length > 1) customer.contacts = customer.contacts.filter(contact => contact.id !== id) }
function addShipping() { customer.shipping.push(emptyAddress(nextItemId++, `Shipping ${customer.shipping.length + 1}`)) }
function addCard() { const id = nextItemId++; customer.cards.push({ id, brand: 'Visa', last4: '', expiry: '', holder: '' }); if (!customer.defaultCardId) customer.defaultCardId = id }
function removeCard(id: number) { customer.cards = customer.cards.filter(card => card.id !== id); if (customer.defaultCardId === id) customer.defaultCardId = customer.cards[0]?.id || 0 }
const segmentText = ref('')
const segmentError = ref('')
function addSegment() {
  const value = segmentText.value.trim()
  if (!value) { segmentError.value = 'Enter a segment name.'; return }
  if (customer.segments.some(segment => segment.toLowerCase() === value.toLowerCase())) { segmentError.value = 'This segment already exists.'; return }
  customer.segments.push(value); segmentText.value = ''; segmentError.value = ''
}
function addressStarted(address: Address) { return [address.recipient, address.street, address.unit, address.city, address.state, address.postalCode].some(value => value.trim()) }
function validateCustomer(state: Partial<CustomerDraft>): FormError[] {
  const errors: FormError[] = []
  if (!state.firstName?.trim()) errors.push({ name: 'firstName', message: 'Enter a first name.' })
  if (!state.lastName?.trim()) errors.push({ name: 'lastName', message: 'Enter a last name.' })
  for (const [index, contact] of (state.contacts || []).entries()) {
    if (!contact.label.trim()) errors.push({ name: `contacts.${index}.label`, message: 'Enter a contact label.' })
    if (contact.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) errors.push({ name: `contacts.${index}.email`, message: 'Enter a valid example email address.' })
    else if ((index === 0 && state.channel === 'Email' || !contact.phone.trim()) && !contact.email.trim()) errors.push({ name: `contacts.${index}.email`, message: 'Enter a contact email or phone number.' })
    if (index === 0 && state.channel !== 'Email' && !contact.phone.trim()) errors.push({ name: `contacts.${index}.phone`, message: 'A phone number is required for SMS or Phone.' })
    else if (contact.phone && (!/^\+?[\d ().-]+$/.test(contact.phone) || contact.phone.replace(/\D/g, '').length < 6 || contact.phone.replace(/\D/g, '').length > 15)) errors.push({ name: `contacts.${index}.phone`, message: 'Enter an example phone number with 6–15 digits.' })
  }
  function checkAddress(address: Address, prefix: string) {
    if (!addressStarted(address)) return
    for (const key of ['street', 'city', 'postalCode', 'country'] as const) {
      if (!address[key].trim()) errors.push({ name: `${prefix}.${key}`, message: 'Complete this address field or clear the optional address.' })
    }
  }
  if (state.billing) checkAddress(state.billing, 'billing')
  state.shipping?.forEach((address, index) => checkAddress(address, `shipping.${index}`))
  state.cards?.forEach((card, index) => {
    if (!/^\d{4}$/.test(card.last4)) errors.push({ name: `cards.${index}.last4`, message: 'Enter exactly four demonstration digits.' })
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(card.expiry)) errors.push({ name: `cards.${index}.expiry`, message: 'Use MM/YY with a valid month.' })
    if (!card.holder.trim()) errors.push({ name: `cards.${index}.holder`, message: 'Enter a demo cardholder name.' })
  })
  return errors
}
function onCustomerError(event: FormErrorEvent) { feedback.value = 'Correct the highlighted fields before creating the demo customer.'; const id = event.errors[0]?.id; if (id) { const element = document.getElementById(id); element?.focus(); element?.scrollIntoView({ block: 'center' }) } }
function createCustomer() {
  if (validateCustomer(customer).length) return
  const result = snapshot()
  result.firstName = result.firstName.trim(); result.lastName = result.lastName.trim()
  result.shipping = result.shipping.filter(addressStarted)
  submitted.value = result
  feedback.value = `Demo customer ${result.customerId} created in memory. No account, payment method or marketing subscription was created externally.`
}
// @copy:customer-editor:end
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/add-customer">
    <div class="min-h-0 flex-1 overflow-y-auto">
      <main class="mx-auto w-full max-w-7xl space-y-6 p-4 sm:p-6">
        <header class="space-y-1"><h1 class="text-2xl font-semibold text-highlighted">Add New Customer</h1><p class="text-sm text-muted">Build an example customer record with contacts, addresses and preferences.</p></header>
        <section data-copy-block="ecommerce-add-customer-editor" tabindex="0" aria-label="Demo customer creation editor" class="min-w-0 space-y-5">
          <UForm :key="formVersion" :state="customer" :validate="validateCustomer" class="space-y-5" @submit="createCustomer" @error="onCustomerError">
            <div class="flex flex-wrap gap-2"><UButton label="Reset form" aria-label="Reset customer form" color="neutral" variant="outline" @click="resetCustomer" /><UButton label="Save draft" aria-label="Save customer draft" color="neutral" variant="outline" @click="saveDraft" /><UButton label="Restore draft" aria-label="Restore customer draft" color="neutral" variant="outline" :disabled="!draft" @click="restoreDraft" /><UButton label="Create demo customer" aria-label="Submit demo customer" type="submit" /></div>
            <div class="grid min-w-0 items-start gap-6 lg:grid-cols-[180px_minmax(0,1fr)]">
              <nav aria-label="Customer editor sections" class="flex gap-2 overflow-x-auto lg:sticky lg:top-4 lg:flex-col"><UButton v-for="section in sections" :key="section.key" :label="section.label" :aria-label="`Go to customer ${section.key}`" color="neutral" variant="ghost" class="shrink-0 justify-start" @click="jumpToSection(section.key)" /></nav>
              <div class="min-w-0 space-y-6">
                <UCard :id="`${editorId}-account`" tabindex="-1" class="scroll-mt-4"><template #header><h2 class="font-semibold text-highlighted">Account</h2><p class="mt-1 text-sm text-muted">Customer identity, source and ownership.</p></template><div class="grid gap-4 sm:grid-cols-2"><UFormField label="First name" name="firstName" required><UInput v-model="customer.firstName" name="customerFirstName" class="w-full" /></UFormField><UFormField label="Last name" name="lastName" required><UInput v-model="customer.lastName" name="customerLastName" class="w-full" /></UFormField><UFormField label="Demo customer ID" name="customerId"><UInput v-model="customer.customerId" readonly class="w-full" /></UFormField><UFormField label="Company" name="company"><UInput v-model="customer.company" name="customerCompany" class="w-full" /></UFormField><UFormField label="Status" name="status"><USelect v-model="customer.status" :items="['Active', 'VIP', 'At risk']" aria-label="Customer account status" class="w-full" /></UFormField><UFormField label="Source" name="source"><USelect v-model="customer.source" :items="['Online store', 'Subscription', 'Marketplace', 'Retail partner']" aria-label="Customer source" class="w-full" /></UFormField><UFormField label="Account owner" name="owner" class="sm:col-span-2"><USelect v-model="customer.owner" :items="['Avery Hall', 'Riley Chen', 'Jordan Lee', 'Mina Patel']" aria-label="Customer account owner" class="w-full" /></UFormField></div></UCard>
                <UCard :id="`${editorId}-contacts`" tabindex="-1" class="scroll-mt-4"><template #header><h2 class="font-semibold text-highlighted">Contacts</h2></template><div class="space-y-5"><UFormField label="Preferred channel" name="channel"><USelect v-model="customer.channel" :items="['Email', 'SMS', 'Phone']" aria-label="Customer preferred channel" class="w-full sm:max-w-xs" /></UFormField><USwitch v-model="customer.marketingOptIn" label="Marketing opt-in (demo)" description="Local preference only; no campaign or consent is submitted." /><div v-for="(contact, index) in customer.contacts" :key="contact.id" :data-customer-contact="contact.id" class="space-y-4 rounded-lg border border-default p-4"><div class="flex items-center justify-between gap-2"><h3 class="text-sm font-medium">Contact {{ index + 1 }}</h3><UButton icon="i-lucide-trash-2" :aria-label="`Remove customer contact ${contact.id}`" :disabled="customer.contacts.length === 1" color="neutral" variant="ghost" @click="removeContact(contact.id)" /></div><div class="grid gap-4 sm:grid-cols-2"><UFormField label="Label" :name="`contacts.${index}.label`"><UInput v-model="contact.label" class="w-full" /></UFormField><UFormField label="Email" :name="`contacts.${index}.email`"><UInput v-model="contact.email" :name="`customerContactEmail${index}`" class="w-full" /></UFormField><UFormField label="Phone" :name="`contacts.${index}.phone`"><UInput v-model="contact.phone" :name="`customerContactPhone${index}`" type="tel" class="w-full" /></UFormField></div></div><UButton label="Add contact" aria-label="Add customer contact" icon="i-lucide-plus" color="neutral" variant="outline" @click="addContact" /></div></UCard>
                <UCard :id="`${editorId}-billing`" tabindex="-1" class="scroll-mt-4"><template #header><h2 class="font-semibold text-highlighted">Billing address</h2><p class="mt-1 text-sm text-muted">Optional. Complete the address when entering any address details.</p></template><div class="grid gap-4 sm:grid-cols-2"><UFormField v-for="field in addressFields" :key="field.key" :label="field.label" :name="`billing.${field.key}`"><UInput v-model="customer.billing[field.key]" :name="`customerBilling${field.key}`" class="w-full" /></UFormField></div></UCard>
                <UCard :id="`${editorId}-shipping`" tabindex="-1" class="scroll-mt-4"><template #header><h2 class="font-semibold text-highlighted">Shipping addresses</h2></template><div class="space-y-4"><div v-for="(address, index) in customer.shipping" :key="address.id" :data-customer-shipping="address.id" class="space-y-4 rounded-lg border border-default p-4"><div class="flex items-center justify-between gap-2"><h3 class="text-sm font-medium">Shipping {{ index + 1 }}</h3><UButton icon="i-lucide-trash-2" :aria-label="`Remove customer shipping ${address.id}`" color="neutral" variant="ghost" @click="customer.shipping = customer.shipping.filter(entry => entry.id !== address.id)" /></div><UFormField label="Label" :name="`shipping.${index}.label`"><UInput v-model="address.label" class="w-full" /></UFormField><div class="grid gap-4 sm:grid-cols-2"><UFormField v-for="field in addressFields" :key="field.key" :label="field.label" :name="`shipping.${index}.${field.key}`"><UInput v-model="address[field.key]" :name="`customerShipping${index}${field.key}`" class="w-full" /></UFormField></div></div><UButton label="Add shipping address" aria-label="Add customer shipping" icon="i-lucide-plus" color="neutral" variant="outline" @click="addShipping" /></div></UCard>
                <UCard :id="`${editorId}-cards`" tabindex="-1" class="scroll-mt-4"><template #header><h2 class="font-semibold text-highlighted">Demo card metadata</h2><p class="mt-1 text-sm text-muted">Use fictional last-four digits only. No full card number, CVC, tokenization or payment processing.</p></template><div class="space-y-4"><p v-if="!customer.cards.length" class="text-sm text-muted">No demo cards added.</p><div v-for="(card, index) in customer.cards" :key="card.id" :data-customer-card="card.id" class="space-y-4 rounded-lg border border-default p-4"><div class="flex flex-wrap items-center justify-between gap-2"><p class="text-sm font-medium">{{ card.brand }} ending in {{ card.last4 || '—' }}</p><div class="flex items-center gap-2"><UButton :label="customer.defaultCardId === card.id ? 'Default' : 'Set default'" :aria-label="`Set customer card ${card.id} default`" :disabled="customer.defaultCardId === card.id" color="neutral" variant="outline" size="xs" @click="customer.defaultCardId = card.id" /><UButton icon="i-lucide-trash-2" :aria-label="`Remove customer card ${card.id}`" color="neutral" variant="ghost" @click="removeCard(card.id)" /></div></div><div class="grid gap-4 sm:grid-cols-2"><UFormField label="Brand"><USelect v-model="card.brand" :items="['Visa', 'Mastercard', 'Amex', 'Discover']" :aria-label="`Customer card ${index} brand`" class="w-full" /></UFormField><UFormField label="Demo last four digits" :name="`cards.${index}.last4`"><UInput v-model="card.last4" :name="`customerCardLast4${index}`" maxlength="4" class="w-full" /></UFormField><UFormField label="Expiry (MM/YY)" :name="`cards.${index}.expiry`"><UInput v-model="card.expiry" :name="`customerCardExpiry${index}`" placeholder="08/28" class="w-full" /></UFormField><UFormField label="Demo cardholder" :name="`cards.${index}.holder`"><UInput v-model="card.holder" :name="`customerCardHolder${index}`" class="w-full" /></UFormField></div></div><UButton label="Add demo card" aria-label="Add customer demo card" icon="i-lucide-plus" color="neutral" variant="outline" @click="addCard" /></div></UCard>
                <UCard :id="`${editorId}-preferences`" tabindex="-1" class="scroll-mt-4"><template #header><h2 class="font-semibold text-highlighted">Preferences &amp; notes</h2></template><div class="space-y-4"><div class="flex flex-wrap gap-2"><UBadge v-for="segment in customer.segments" :key="segment" color="neutral" variant="subtle">{{ segment }}<UButton icon="i-lucide-x" :aria-label="`Remove customer segment ${segment}`" color="neutral" variant="ghost" size="xs" @click="customer.segments = customer.segments.filter(value => value !== segment)" /></UBadge></div><UFormField label="New segment" :error="segmentError || undefined"><div class="flex flex-wrap gap-2"><UInput v-model="segmentText" name="customerSegment" class="min-w-0 flex-1" @keydown.enter.prevent="addSegment" /><UButton label="Add segment" aria-label="Add customer segment" color="neutral" variant="outline" @click="addSegment" /></div></UFormField><UFormField label="Internal notes" name="notes"><UTextarea v-model="customer.notes" name="customerNotes" :rows="4" class="w-full" /></UFormField></div></UCard>
              </div>
            </div>
          </UForm>
          <p class="text-sm text-muted" role="status">{{ feedback }}</p>
          <UCard v-if="submitted"><template #header><h2 class="font-semibold text-highlighted">Created demo customer preview</h2></template><pre data-customer-snapshot class="max-h-96 overflow-auto whitespace-pre-wrap break-words text-xs">{{ JSON.stringify(submitted, null, 2) }}</pre></UCard>
        </section>
      </main>
    </div>
    <BlockCopyTools page="/ecommerce/add-customer" />
  </div>
</template>
