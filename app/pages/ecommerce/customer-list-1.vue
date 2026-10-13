<!-- Page: /ecommerce/customer-list-1 | Local demo directory. No customer API or persistent storage. -->
<script setup lang="ts">
useHead({ title: 'Customer List 1 · Blocks Admin' })

// @copy:customer-data:start
import { computed, reactive, ref } from 'vue'
type Customer = { id: string, name: string, email: string, orders: number, spend: number, status: 'Active' | 'VIP' | 'At risk', lastOrder: string | null, joined: string }
const customers = ref<Customer[]>([
  { id: 'CUS-1742', name: 'Theo Hammond', email: 'theo.hammond@example.com', orders: 96, spend: 18410, status: 'VIP', lastOrder: '2026-03-21', joined: '2025-04-02' },
  { id: 'CUS-7102', name: 'Avery Brooks', email: 'avery.brooks@example.com', orders: 42, spend: 6124, status: 'Active', lastOrder: '2026-03-20', joined: '2025-08-12' },
  { id: 'CUS-2465', name: 'Sienna Blair', email: 'sienna.blair@example.com', orders: 74, spend: 11130, status: 'VIP', lastOrder: '2026-03-20', joined: '2025-05-02' },
  { id: 'CUS-8431', name: 'Camila Hart', email: 'camila.hart@example.com', orders: 13, spend: 2148, status: 'Active', lastOrder: '2026-03-19', joined: '2026-02-15' },
  { id: 'CUS-2844', name: 'Miles Yoon', email: 'miles.yoon@example.com', orders: 67, spend: 12480, status: 'VIP', lastOrder: '2026-03-18', joined: '2025-03-10' },
  { id: 'CUS-3378', name: 'Leila Forde', email: 'leila.forde@example.com', orders: 58, spend: 9040, status: 'VIP', lastOrder: '2026-03-17', joined: '2025-06-02' },
  { id: 'CUS-6619', name: 'Zara Quinn', email: 'zara.quinn@example.com', orders: 21, spend: 3822, status: 'Active', lastOrder: '2026-03-14', joined: '2025-09-14' },
  { id: 'CUS-1287', name: 'Imani Rhodes', email: 'imani.rhodes@example.com', orders: 31, spend: 5180, status: 'Active', lastOrder: '2026-03-08', joined: '2025-12-20' },
  { id: 'CUS-4926', name: 'Rory Bennett', email: 'rory.bennett@example.com', orders: 17, spend: 2895, status: 'Active', lastOrder: '2026-02-27', joined: '2026-01-06' },
  { id: 'CUS-5290', name: 'Nora Castillo', email: 'nora.castillo@example.com', orders: 8, spend: 1386, status: 'At risk', lastOrder: '2026-01-26', joined: '2025-10-26' },
  { id: 'CUS-7306', name: 'Elias Mercer', email: 'elias.mercer@example.com', orders: 11, spend: 1742, status: 'At risk', lastOrder: '2026-01-14', joined: '2025-11-14' },
])
// Fixed reference date keeps SSR, screenshots and copied demos deterministic.
const referenceDate = '2026-03-22'
const money = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)
const dateLabel = (value: string | null) => value ? new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`)) : 'No orders'
const averageOrder = (customer: Customer) => customer.orders ? customer.spend / customer.orders : 0
// @copy:customer-data:end

// @copy:customer-metrics:start
const customerMetrics = computed(() => {
  const count = customers.value.length
  return [
    { key: 'count', label: 'Customers', value: String(count), detail: 'All local demo records', icon: 'i-lucide-users' },
    { key: 'new', label: 'New customers', value: String(customers.value.filter(customer => customer.joined >= '2026-02-21' && customer.joined <= referenceDate).length), detail: 'Joined in the last 30 days', icon: 'i-lucide-user-plus' },
    { key: 'repeat', label: 'Repeat rate', value: `${count ? (customers.value.filter(customer => customer.orders > 1).length / count * 100).toFixed(1) : '0.0'}%`, detail: 'Customers with 2+ orders', icon: 'i-lucide-refresh-ccw' },
    { key: 'value', label: 'Avg. lifetime spend', value: money(count ? customers.value.reduce((sum, customer) => sum + customer.spend, 0) / count : 0), detail: 'Total spend / all customers', icon: 'i-lucide-dollar-sign' },
  ]
})
// @copy:customer-metrics:end

// @copy:customer-directory:start
import type { FormError, TableColumn } from '@nuxt/ui'
const search = ref('')
const status = ref('All')
const period = ref('All dates')
const valueBand = ref('All values')
const order = ref('Recent order')
const statusTabs = [{ label: 'All customers', value: 'All' }, { label: 'Active', value: 'Active' }, { label: 'VIP', value: 'VIP' }, { label: 'At risk', value: 'At risk' }]
const visibleCustomers = computed(() => {
  const query = search.value.trim().toLowerCase()
  const cutoff = period.value === 'Last 30 days' ? '2026-02-21' : period.value === 'Last 90 days' ? '2025-12-23' : '2026-01-01'
  return customers.value.filter(customer => {
    return (!query || `${customer.id} ${customer.name} ${customer.email}`.toLowerCase().includes(query))
      && (status.value === 'All' || customer.status === status.value)
      && (period.value === 'All dates' || !!customer.lastOrder && customer.lastOrder >= cutoff && customer.lastOrder <= referenceDate)
      && (valueBand.value === 'All values' || (valueBand.value === 'High value' ? customer.spend >= 10000 : valueBand.value === 'Mid value' ? customer.spend >= 3000 && customer.spend < 10000 : customer.spend < 3000))
  }).sort((a, b) => order.value === 'Name A–Z' ? a.name.localeCompare(b.name, 'en') : order.value === 'Spend: high to low' ? b.spend - a.spend || a.id.localeCompare(b.id) : order.value === 'Orders: high to low' ? b.orders - a.orders || a.id.localeCompare(b.id) : (b.lastOrder || '').localeCompare(a.lastOrder || '') || a.id.localeCompare(b.id))
})
function clearFilters() { search.value = ''; status.value = 'All'; period.value = 'All dates'; valueBand.value = 'All values'; order.value = 'Recent order' }
const statusColor = (value: Customer['status']) => value === 'VIP' ? 'warning' as const : value === 'Active' ? 'success' as const : 'error' as const
const manageOpen = ref(false)
const columnOptions = [{ key: 'orders', label: 'Orders' }, { key: 'spend', label: 'Total spend' }, { key: 'average', label: 'Avg. order value' }, { key: 'lastOrder', label: 'Last order' }] as const
const showColumns = reactive({ orders: true, spend: true, average: true, lastOrder: true })
const columns = computed<TableColumn<Customer>[]>(() => [
  { accessorKey: 'id', header: 'Customer ID' }, { accessorKey: 'name', header: 'Customer' },
  ...(showColumns.orders ? [{ accessorKey: 'orders', header: 'Orders' }] : []),
  ...(showColumns.spend ? [{ accessorKey: 'spend', header: 'Total spend' }] : []),
  ...(showColumns.average ? [{ id: 'average', header: 'Avg. order value' }] : []),
  { accessorKey: 'status', header: 'Status' },
  ...(showColumns.lastOrder ? [{ accessorKey: 'lastOrder', header: 'Last order' }] : []),
  { id: 'actions', header: 'Actions' },
])
const editor = reactive({ open: false, id: '', name: '', email: '', status: 'Active' as Customer['status'] })
const editorVersion = ref(0)
let nextCustomer = 9001
const message = ref('Example records only. Filters use March 22, 2026 as their reference date; lifetime totals are not date-filtered.')
function openCustomer(customer?: Customer) {
  Object.assign(editor, { open: true, id: customer?.id || '', name: customer?.name || '', email: customer?.email || '', status: customer?.status || 'Active' })
  editorVersion.value += 1
}
function validateEditor(state: Partial<typeof editor>): FormError[] {
  const errors: FormError[] = []
  if (!state.name?.trim()) errors.push({ name: 'name', message: 'Enter a customer name.' })
  if (!state.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email.trim())) errors.push({ name: 'email', message: 'Enter a valid example email.' })
  else if (customers.value.some(customer => customer.id !== state.id && customer.email.toLowerCase() === state.email!.trim().toLowerCase())) errors.push({ name: 'email', message: 'This email already belongs to a demo customer.' })
  return errors
}
function saveCustomer() {
  if (validateEditor(editor).length) return
  const values = { name: editor.name.trim(), email: editor.email.trim(), status: editor.status }
  if (editor.id) {
    const customer = customers.value.find(customer => customer.id === editor.id)
    if (!customer) return
    Object.assign(customer, values)
    message.value = `${customer.id} updated locally. No external customer was changed.`
  } else {
    const id = `CUS-${nextCustomer++}`
    customers.value.push({ id, ...values, orders: 0, spend: 0, lastOrder: null, joined: referenceDate })
    clearFilters()
    message.value = `${id} created locally with no orders. No external account was created.`
  }
  editor.open = false
}
const removeTarget = ref<Customer | null>(null)
const removeOpen = ref(false)
function requestRemove(customer: Customer) { removeTarget.value = customer; removeOpen.value = true }
function removeCustomer() {
  if (!removeTarget.value) return
  const id = removeTarget.value.id
  customers.value = customers.value.filter(customer => customer.id !== id)
  removeOpen.value = false; removeTarget.value = null
  message.value = `${id} removed from this in-memory demo only.`
}
// @copy:customer-directory:end
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/customer-list-1">
    <div class="min-h-0 flex-1 overflow-y-auto">
      <main class="mx-auto w-full max-w-7xl space-y-6 p-4 sm:p-6">
        <header><h1 class="text-2xl font-semibold text-highlighted">Customers</h1><p class="mt-1 text-sm text-muted">Track retention, value and recent purchase activity in a local example directory.</p></header>
        <section data-copy-block="ecommerce-customer-metrics" tabindex="0" aria-label="Customer metrics" class="space-y-3">
          <p class="text-xs text-muted">All demo records · as of {{ dateLabel(referenceDate) }} · independent of directory filters</p>
          <div class="grid grid-cols-1 gap-3 min-[380px]:grid-cols-2 xl:grid-cols-4"><UCard v-for="metric in customerMetrics" :key="metric.key" :data-customer-metric="metric.key"><div class="flex items-center gap-2 text-sm text-muted"><UIcon :name="metric.icon" class="size-4 shrink-0" />{{ metric.label }}</div><p class="mt-3 text-2xl font-semibold text-highlighted">{{ metric.value }}</p><p class="mt-1 text-xs text-muted">{{ metric.detail }}</p></UCard></div>
        </section>
        <section data-copy-block="ecommerce-customer-directory" tabindex="0" aria-label="Customer directory" class="min-w-0 space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-3"><h2 class="text-lg font-semibold text-highlighted">Customer directory</h2><UButton label="Create demo customer" aria-label="Create directory customer" icon="i-lucide-plus" @click="openCustomer()" /></div>
          <UTabs v-model="status" :items="statusTabs" :content="false" variant="link" class="w-full" :ui="{ list: 'overflow-x-auto overflow-y-hidden', trigger: 'shrink-0' }" />
          <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><UFormField label="Search customers"><UInput v-model="search" name="directorySearch" placeholder="Name, ID or email" icon="i-lucide-search" class="w-full" /></UFormField><UFormField label="Last order date"><USelect v-model="period" :items="['All dates', 'Last 30 days', 'Last 90 days', 'This year']" aria-label="Directory date range" class="w-full" /></UFormField><UFormField label="Lifetime spend"><USelect v-model="valueBand" :items="['All values', 'High value', 'Mid value', 'Entry value']" aria-label="Directory value band" class="w-full" /></UFormField><UFormField label="Sort customers"><USelect v-model="order" :items="['Recent order', 'Name A–Z', 'Spend: high to low', 'Orders: high to low']" aria-label="Directory sort" class="w-full" /></UFormField></div>
          <div class="flex flex-wrap items-center justify-between gap-2"><p data-directory-count class="text-sm text-muted">{{ visibleCustomers.length }} of {{ customers.length }} customers · High ≥ $10,000; mid $3,000–$9,999</p><div class="flex gap-2"><UButton label="Clear filters" aria-label="Clear directory filters" color="neutral" variant="ghost" @click="clearFilters" /><UButton label="Manage table" aria-label="Manage customer columns" icon="i-lucide-settings-2" color="neutral" variant="outline" @click="manageOpen = true" /></div></div>
          <div class="hidden min-w-0 overflow-x-auto rounded-lg border border-default md:block"><UTable :data="visibleCustomers" :columns="columns" :get-row-id="row => row.id" :ui="{ th: 'bg-muted', td: 'border-b border-default' }">
            <template #id-cell="{ row }"><span class="text-xs font-medium">{{ row.original.id }}</span></template>
            <template #name-cell="{ row }"><div class="flex items-center gap-3"><span class="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary" aria-hidden="true">{{ row.original.name.split(' ').map(part => part[0]).slice(0, 2).join('') }}</span><div><UButton :label="row.original.name" :aria-label="`Edit directory customer ${row.original.id}`" color="neutral" variant="link" class="p-0 text-highlighted" @click="openCustomer(row.original)" /><p class="text-xs text-muted">{{ row.original.email }}</p></div></div></template>
            <template #spend-cell="{ row }">{{ money(row.original.spend) }}</template><template #average-cell="{ row }">{{ money(averageOrder(row.original)) }}</template><template #status-cell="{ row }"><UBadge :label="row.original.status" :color="statusColor(row.original.status)" variant="subtle" /></template><template #lastOrder-cell="{ row }">{{ dateLabel(row.original.lastOrder) }}</template>
            <template #actions-cell="{ row }"><UButton icon="i-lucide-trash-2" :aria-label="`Remove directory customer ${row.original.id}`" color="neutral" variant="ghost" @click="requestRemove(row.original)" /></template>
            <template #empty><p class="p-6 text-sm text-muted">No customers match these filters.</p></template>
          </UTable></div>
          <div class="space-y-3 md:hidden"><UCard v-for="customer in visibleCustomers" :key="customer.id" :data-directory-mobile="customer.id"><div class="flex items-start justify-between gap-2"><div class="min-w-0"><p class="text-xs text-muted">{{ customer.id }}</p><UButton :label="customer.name" :aria-label="`Edit mobile customer ${customer.id}`" color="neutral" variant="link" class="p-0 text-highlighted" @click="openCustomer(customer)" /><p class="break-all text-xs text-muted">{{ customer.email }}</p></div><UButton icon="i-lucide-trash-2" :aria-label="`Remove mobile customer ${customer.id}`" color="neutral" variant="ghost" @click="requestRemove(customer)" /></div><UBadge :label="customer.status" :color="statusColor(customer.status)" variant="subtle" class="mt-3" /><dl class="mt-4 grid grid-cols-2 gap-3 text-sm"><div v-if="showColumns.orders"><dt class="text-xs text-muted">Orders</dt><dd>{{ customer.orders }}</dd></div><div v-if="showColumns.spend"><dt class="text-xs text-muted">Total spend</dt><dd>{{ money(customer.spend) }}</dd></div><div v-if="showColumns.average"><dt class="text-xs text-muted">Avg. order</dt><dd>{{ money(averageOrder(customer)) }}</dd></div><div v-if="showColumns.lastOrder"><dt class="text-xs text-muted">Last order</dt><dd>{{ dateLabel(customer.lastOrder) }}</dd></div></dl></UCard><p v-if="!visibleCustomers.length" class="rounded-lg border border-default p-6 text-sm text-muted">No customers match these filters.</p></div>
          <p class="text-sm text-muted" role="status">{{ message }}</p>
          <UModal v-model:open="editor.open" :title="editor.id ? `Edit ${editor.id}` : 'Create demo customer'" description="Use example details. Changes stay in this component’s memory only."><template #body><UForm :key="editorVersion" :state="editor" :validate="validateEditor" class="space-y-4" @submit="saveCustomer"><UFormField label="Name" name="name" required><UInput v-model="editor.name" name="directoryCustomerName" class="w-full" /></UFormField><UFormField label="Email" name="email" required><UInput v-model="editor.email" name="directoryCustomerEmail" class="w-full" /></UFormField><UFormField label="Status" name="status"><USelect v-model="editor.status" :items="['Active', 'VIP', 'At risk']" aria-label="Directory customer status" class="w-full" /></UFormField><div class="flex justify-end gap-2"><UButton label="Cancel" aria-label="Cancel directory edit" color="neutral" variant="outline" @click="editor.open = false" /><UButton label="Save locally" aria-label="Save directory customer" type="submit" /></div></UForm></template></UModal>
          <UModal v-model:open="manageOpen" title="Manage customer columns" description="Identity, status and actions stay visible. Optional fields also apply to mobile cards."><template #body><div class="space-y-4"><USwitch v-for="column in columnOptions" :key="column.key" v-model="showColumns[column.key]" :label="column.label" :aria-label="`Show customer ${column.key}`" /></div></template><template #footer><UButton label="Done" aria-label="Close customer columns" @click="manageOpen = false" /></template></UModal>
          <UModal v-model:open="removeOpen" :title="`Remove ${removeTarget?.name || 'customer'}?`" description="Only the in-memory demo record is removed; no external data is affected."><template #body><p class="text-sm text-muted">{{ removeTarget?.id }} · {{ removeTarget?.email }}</p></template><template #footer><div class="flex w-full justify-end gap-2"><UButton label="Cancel" aria-label="Cancel customer removal" color="neutral" variant="outline" @click="removeOpen = false" /><UButton label="Remove locally" aria-label="Confirm customer removal" color="error" @click="removeCustomer" /></div></template></UModal>
        </section>
      </main>
    </div>
    <BlockCopyTools page="/ecommerce/customer-list-1" />
  </div>
</template>
