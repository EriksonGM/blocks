<!-- Page: /ecommerce/customer-detail-1 | Local example profile, history and message drafts. -->
<script setup lang="ts">
useHead({ title: 'Customer Detail 1 · Blocks Admin' })

// @copy:customer-detail-data:start
import { computed, reactive, ref } from 'vue'
import type { FormError } from '@nuxt/ui'
const profile = reactive({ id: 'CUS-1742', name: 'Theo Hammond', status: 'VIP', email: 'theo.hammond@example.com', phone: '+1 (206) 555-0198', source: 'Online store', lastOnline: 'Mar 22, 2026, 11:24 AM UTC', recipient: 'Theo Hammond', street: '7841 Mercer Street, Suite 12', unit: 'Capitol Hill, Building North', city: 'Seattle', state: 'WA', postalCode: '98102', country: 'United States', segments: ['VIP', 'Skincare Routine', 'High retention'] })
const history = ref([
  { id: 3, title: 'Order ORD-34021 placed', detail: 'Online store · Processing · $389.00', date: 'Mar 18, 2026' },
  { id: 2, title: 'Product review submitted', detail: 'Botanical Body Polish · 5 out of 5', date: 'Mar 04, 2026' },
  { id: 1, title: 'Order ORD-33682 delivered', detail: 'Marketplace · $168.00', date: 'Mar 02, 2026' },
])
let nextHistoryId = 4
function recordLocalActivity(title: string, detail: string) { history.value.unshift({ id: nextHistoryId++, title, detail, date: 'Local session' }) }
const profileStatusColor = computed(() => profile.status === 'VIP' ? 'warning' as const : profile.status === 'Active' ? 'success' as const : 'error' as const)
// @copy:customer-detail-data:end

// @copy:customer-detail-header:start
const messageOpen = ref(false)
const messageVersion = ref(0)
const messageDraft = reactive({ subject: '', body: '' })
const savedMessages = ref<{ recipient: string, subject: string, body: string }[]>([])
function openMessage() { messageVersion.value += 1; messageOpen.value = true }
function validateMessage(state: Partial<typeof messageDraft>): FormError[] {
  const errors: FormError[] = []
  if (!state.subject?.trim()) errors.push({ name: 'subject', message: 'Enter a subject.' })
  if (!state.body?.trim()) errors.push({ name: 'body', message: 'Enter a message.' })
  return errors
}
function saveMessage() {
  if (validateMessage(messageDraft).length) return
  savedMessages.value.unshift({ recipient: profile.email, subject: messageDraft.subject.trim(), body: messageDraft.body.trim() })
  recordLocalActivity('Message draft saved locally', messageDraft.subject.trim())
  messageDraft.subject = ''; messageDraft.body = ''; messageOpen.value = false
}
// @copy:customer-detail-header:end

// @copy:customer-detail-history:start
const historyTab = ref('purchases')
const historyTabs = [{ label: 'Purchases', value: 'purchases' }, { label: 'Reviews', value: 'reviews' }, { label: 'Activity', value: 'activity' }]
const purchases = [
  { id: 'ORD-34021', status: 'Processing', date: 'Mar 18, 2026', source: 'Online store', items: [{ name: 'Radiance Ritual Set', sku: 'SKU-SKIN-4006', quantity: 1, price: 305 }, { name: 'Barrier Repair Drops', sku: 'SKU-TREAT-6612', quantity: 1, price: 84 }] },
  { id: 'ORD-33682', status: 'Delivered', date: 'Feb 27, 2026', source: 'Marketplace', items: [{ name: 'Botanical Body Polish', sku: 'SKU-BODY-6118', quantity: 2, price: 84 }] },
  { id: 'ORD-33340', status: 'Delivered', date: 'Jan 19, 2026', source: 'Subscription', items: [{ name: 'Barrier Repair Drops', sku: 'SKU-TREAT-6612', quantity: 1, price: 84 }] },
]
const reviews = [
  { id: 1, product: 'Botanical Body Polish', rating: 5, date: 'Mar 04, 2026', title: 'A staple in my routine', body: 'The texture is gentle and the scent is subtle. I ordered a second jar.' },
  { id: 2, product: 'Barrier Repair Drops', rating: 4, date: 'Jan 26, 2026', title: 'Easy to use', body: 'Works well in my evening routine. I would prefer a smaller travel bottle.' },
]
const purchaseTotal = (purchase: typeof purchases[number]) => purchase.items.reduce((sum, item) => sum + item.quantity * item.price, 0)
const detailMoney = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
// @copy:customer-detail-history:end

// @copy:customer-detail-info:start
const infoOpen = ref(false)
const infoVersion = ref(0)
const infoMode = ref<'contact' | 'address' | 'segments'>('contact')
const infoState = reactive({ name: '', status: 'VIP', email: '', phone: '', recipient: '', street: '', unit: '', city: '', state: '', postalCode: '', country: '', segmentsText: '' })
const infoFeedback = ref('Example profile. Edits affect only this component’s memory.')
const infoAddressFields = [{ key: 'recipient', label: 'Recipient' }, { key: 'street', label: 'Street address' }, { key: 'unit', label: 'Suite, building, floor' }, { key: 'city', label: 'City' }, { key: 'state', label: 'State / region' }, { key: 'postalCode', label: 'Postal code' }, { key: 'country', label: 'Country' }] as const
function editInfo(mode: typeof infoMode.value) { infoMode.value = mode; Object.assign(infoState, profile, { segmentsText: profile.segments.join('\n') }); infoVersion.value += 1; infoOpen.value = true }
function validateInfo(state: Partial<typeof infoState>): FormError[] {
  const errors: FormError[] = []
  if (infoMode.value === 'contact') {
    if (!state.name?.trim()) errors.push({ name: 'name', message: 'Enter a customer name.' })
    if (!state.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email.trim())) errors.push({ name: 'email', message: 'Enter a valid example email.' })
    if (state.phone && (!/^\+?[\d ().-]+$/.test(state.phone) || state.phone.replace(/\D/g, '').length < 6 || state.phone.replace(/\D/g, '').length > 15)) errors.push({ name: 'phone', message: 'Use a phone number with 6–15 digits.' })
  } else if (infoMode.value === 'address') {
    for (const key of ['recipient', 'street', 'city', 'postalCode', 'country'] as const) if (!state[key]?.trim()) errors.push({ name: key, message: 'Complete this address field.' })
  } else {
    const segments = (state.segmentsText || '').split('\n').map(value => value.trim()).filter(Boolean)
    if (new Set(segments.map(value => value.toLowerCase())).size !== segments.length) errors.push({ name: 'segmentsText', message: 'Segment names must be unique.' })
  }
  return errors
}
function saveInfo() {
  if (validateInfo(infoState).length) return
  if (infoMode.value === 'contact') Object.assign(profile, { name: infoState.name.trim(), email: infoState.email.trim(), phone: infoState.phone.trim(), status: infoState.status })
  else if (infoMode.value === 'address') for (const field of infoAddressFields) profile[field.key] = infoState[field.key].trim()
  else profile.segments = infoState.segmentsText.split('\n').map(value => value.trim()).filter(Boolean)
  recordLocalActivity(`Customer ${infoMode.value} updated locally`, 'No external record was changed.')
  infoFeedback.value = `Customer ${infoMode.value} updated in memory only.`
  infoOpen.value = false
}
// @copy:customer-detail-info:end
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/customer-detail-1">
    <div class="min-h-0 flex-1 overflow-y-auto"><main class="mx-auto w-full max-w-7xl space-y-6 p-4 sm:p-6">
      <nav aria-label="Customer detail navigation" class="flex flex-wrap gap-2"><UButton to="/ecommerce/customer-list-1" label="Customer list" icon="i-lucide-arrow-left" color="neutral" variant="ghost" /><UButton to="/ecommerce/edit-customer/cus-1742" label="Full example editor" color="neutral" variant="ghost" /></nav>
      <section data-copy-block="ecommerce-customer-profile" tabindex="0" aria-label="Customer profile and message drafts" class="space-y-4">
        <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><div class="flex min-w-0 items-center gap-4"><span class="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xl font-semibold text-primary" aria-hidden="true">{{ profile.name.split(' ').map(part => part[0]).slice(0, 2).join('') }}</span><div class="min-w-0"><h1 class="break-words text-2xl font-semibold text-highlighted sm:text-3xl">{{ profile.name }}</h1><div class="mt-2 flex flex-wrap items-center gap-2"><UBadge :label="profile.status" :color="profileStatusColor" variant="subtle" /><span class="text-sm text-muted">{{ profile.id }}</span></div></div></div><UButton label="Compose demo message" aria-label="Compose customer message" icon="i-lucide-message-square-more" class="shrink-0 justify-center" @click="openMessage" /></div>
        <p class="text-sm text-muted">Example profile. Message drafts are saved locally in memory, never sent by email or SMS.</p>
        <UCard v-if="savedMessages.length"><template #header><h2 class="font-semibold text-highlighted">Local message drafts ({{ savedMessages.length }})</h2></template><ul class="space-y-4"><li v-for="(message, index) in savedMessages" :key="index" data-customer-message><p class="break-all text-xs text-muted">Draft for {{ message.recipient }} · Not sent</p><p class="mt-1 font-medium">{{ message.subject }}</p><p class="mt-1 whitespace-pre-wrap break-words text-sm text-muted">{{ message.body }}</p></li></ul></UCard>
        <UModal v-model:open="messageOpen" title="Compose demo message" description="A local draft only. No email provider, message service or network request."><template #body><UForm :key="messageVersion" :state="messageDraft" :validate="validateMessage" class="space-y-4" @submit="saveMessage"><p class="break-all text-sm text-muted">Example recipient: {{ profile.email }}</p><UFormField label="Subject" name="subject" required><UInput v-model="messageDraft.subject" name="customerMessageSubject" class="w-full" /></UFormField><UFormField label="Message" name="body" required><UTextarea v-model="messageDraft.body" name="customerMessageBody" :rows="5" class="w-full" /></UFormField><div class="flex justify-end gap-2"><UButton label="Close" aria-label="Close customer message" color="neutral" variant="outline" @click="messageOpen = false" /><UButton label="Save local draft" aria-label="Save customer message draft" type="submit" /></div></UForm></template></UModal>
      </section>
      <div class="grid min-w-0 items-start gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <section data-copy-block="ecommerce-customer-history" tabindex="0" aria-label="Customer purchase, review and activity history" class="min-w-0 space-y-4">
          <UTabs v-model="historyTab" :items="historyTabs" :content="false" variant="link" :ui="{ list: 'overflow-x-auto overflow-y-hidden', trigger: 'shrink-0' }" />
          <div v-if="historyTab === 'purchases'" class="space-y-4"><p class="text-sm text-muted">Three sample purchases, not the full lifetime order history. Item subtotals include no additional tax or shipping.</p><UCard v-for="purchase in purchases" :key="purchase.id" :data-customer-purchase="purchase.id"><div class="flex flex-wrap items-start justify-between gap-3"><div><div class="flex flex-wrap items-center gap-2"><h2 class="font-semibold text-highlighted">{{ purchase.id }}</h2><UBadge :label="purchase.status" :color="purchase.status === 'Delivered' ? 'success' : 'warning'" variant="subtle" /></div><p class="mt-1 text-sm text-muted">Placed {{ purchase.date }} · {{ purchase.source }}</p></div><div><p class="text-xs text-muted">Order total</p><p class="text-lg font-semibold text-highlighted">{{ detailMoney(purchaseTotal(purchase)) }}</p></div></div><ul class="mt-5 space-y-3"><li v-for="item in purchase.items" :key="item.sku" class="flex items-start gap-3"><span class="flex size-11 shrink-0 items-center justify-center rounded-md bg-muted" aria-hidden="true"><UIcon name="i-lucide-package" class="size-5 text-muted" /></span><div class="min-w-0 flex-1"><p class="text-sm font-medium">{{ item.name }}</p><p class="text-xs text-muted">{{ item.sku }} · Qty {{ item.quantity }} × {{ detailMoney(item.price) }}</p></div><p class="text-sm">{{ detailMoney(item.quantity * item.price) }}</p></li></ul></UCard></div>
          <div v-else-if="historyTab === 'reviews'" class="space-y-4"><p class="text-sm text-muted">Sample product reviews from the example customer.</p><UCard v-for="review in reviews" :key="review.id" data-customer-review><h2 class="font-semibold text-highlighted">{{ review.product }}</h2><p class="mt-1 text-sm text-muted">{{ review.date }} · {{ review.rating }} out of 5 stars</p><div class="mt-3 flex gap-1" aria-hidden="true"><UIcon v-for="star in 5" :key="star" name="i-lucide-star" class="size-4" :class="star <= review.rating ? 'text-warning' : 'text-dimmed'" /></div><h3 class="mt-3 text-sm font-medium">{{ review.title }}</h3><p class="mt-1 text-sm text-muted">{{ review.body }}</p></UCard></div>
          <UCard v-else><template #header><h2 class="font-semibold text-highlighted">Customer activity</h2><p class="mt-1 text-sm text-muted">Historical examples plus local changes in this component. No external events are fetched.</p></template><ol class="space-y-5"><li v-for="activity in history" :key="activity.id" data-customer-activity class="border-l-2 border-default pl-4"><p class="text-xs text-muted">{{ activity.date }}</p><h3 class="mt-1 text-sm font-medium">{{ activity.title }}</h3><p class="mt-1 text-sm text-muted">{{ activity.detail }}</p></li></ol></UCard>
        </section>
        <section data-copy-block="ecommerce-customer-details" tabindex="0" aria-label="Customer details and local editors" class="min-w-0 space-y-3">
          <UCard><template #header><h2 class="font-semibold text-highlighted">Customer details</h2><p class="mt-1 text-xs text-muted">{{ profile.name }} · {{ profile.id }}</p></template><div class="space-y-5"><dl class="space-y-3 text-sm"><div class="flex justify-between gap-3"><dt class="text-muted">Customer source</dt><dd>{{ profile.source }}</dd></div><div><dt class="text-muted">Last online (example)</dt><dd class="mt-1">{{ profile.lastOnline }}</dd></div></dl><USeparator /><div><div class="flex items-center justify-between gap-2"><h3 class="text-sm font-semibold">Shipping address</h3><UButton icon="i-lucide-pencil" aria-label="Edit customer shipping address" color="neutral" variant="ghost" @click="editInfo('address')" /></div><div class="mt-3 flex items-center gap-3 rounded-lg border border-default bg-muted p-4"><UIcon name="i-lucide-map-pin" class="size-6 shrink-0 text-primary" /><div><p class="text-sm font-medium">{{ profile.city }}, {{ profile.state }}</p><p class="text-xs text-muted">Location summary · not a live map</p></div></div><address class="mt-3 break-words text-sm not-italic leading-6"><p class="font-medium">{{ profile.recipient }}</p><p class="text-muted">{{ profile.street }}</p><p v-if="profile.unit" class="text-muted">{{ profile.unit }}</p><p class="text-muted">{{ profile.city }}, {{ profile.state }} {{ profile.postalCode }}</p><p class="text-muted">{{ profile.country }}</p></address></div><USeparator /><div><div class="flex items-center justify-between gap-2"><h3 class="text-sm font-semibold">Contact information</h3><UButton icon="i-lucide-pencil" aria-label="Edit customer contact information" color="neutral" variant="ghost" @click="editInfo('contact')" /></div><p class="mt-2 break-all text-sm">{{ profile.email }}</p><p class="mt-1 text-sm text-muted">{{ profile.phone || 'No phone number' }}</p></div><USeparator /><div><div class="flex items-center justify-between gap-2"><h3 class="text-sm font-semibold">Segments</h3><UButton icon="i-lucide-pencil" aria-label="Edit customer detail segments" color="neutral" variant="ghost" @click="editInfo('segments')" /></div><div class="mt-2 flex flex-wrap gap-2"><UBadge v-for="segment in profile.segments" :key="segment" :label="segment" color="neutral" variant="subtle" class="max-w-full break-all whitespace-normal" /><p v-if="!profile.segments.length" class="text-sm text-muted">No segments assigned.</p></div></div></div></UCard>
          <p class="text-xs text-muted" role="status">{{ infoFeedback }}</p>
          <UModal v-model:open="infoOpen" :title="`Edit customer ${infoMode}`" description="Edit fictional profile details in memory only."><template #body><UForm :key="infoVersion" :state="infoState" :validate="validateInfo" class="space-y-4" @submit="saveInfo"><template v-if="infoMode === 'contact'"><UFormField label="Customer name" name="name" required><UInput v-model="infoState.name" name="detailCustomerName" class="w-full" /></UFormField><UFormField label="Status"><USelect v-model="infoState.status" :items="['Active', 'VIP', 'At risk']" aria-label="Detail customer status" class="w-full" /></UFormField><UFormField label="Email" name="email" required><UInput v-model="infoState.email" name="detailCustomerEmail" class="w-full" /></UFormField><UFormField label="Phone" name="phone"><UInput v-model="infoState.phone" name="detailCustomerPhone" type="tel" class="w-full" /></UFormField></template><div v-else-if="infoMode === 'address'" class="grid gap-4 sm:grid-cols-2"><UFormField v-for="field in infoAddressFields" :key="field.key" :label="field.label" :name="field.key"><UInput v-model="infoState[field.key]" :name="`detailAddress${field.key}`" class="w-full" /></UFormField></div><UFormField v-else label="Segments (one per line)" name="segmentsText"><UTextarea v-model="infoState.segmentsText" name="detailCustomerSegments" :rows="5" class="w-full" /></UFormField><div class="flex justify-end gap-2"><UButton label="Cancel" aria-label="Cancel customer detail edit" color="neutral" variant="outline" @click="infoOpen = false" /><UButton label="Save locally" aria-label="Save customer detail edit" type="submit" /></div></UForm></template></UModal>
        </section>
      </div>
    </main></div>
    <BlockCopyTools page="/ecommerce/customer-detail-1" />
  </div>
</template>
