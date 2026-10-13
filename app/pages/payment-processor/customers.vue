<!-- Page: /payment-processor/customers | Portable, read-only example customer directory. -->
<script setup lang="ts">
useHead({ title: 'Customers · Blocks Admin' })

// @copy:processor-customers:start
import { computed, reactive, ref, watch } from 'vue'
import type { TableColumn } from '@nuxt/ui'
type ProcessorCustomer = { id: string, name: string, email: string, status: 'Active' | 'Review' | 'Blocked', phone: string, createdAt: string }
const processorCustomers: ProcessorCustomer[] = [
  { id: 'cus_Q8mL2vN4aZp9XwR6tKcE1', name: 'Avery Stone', email: 'avery.stone@example.com', status: 'Active', phone: '+1 415 555 0914', createdAt: '2026-05-23T16:18:00Z' },
  { id: 'cus_Z3xH7bR1qTn5MpL9sVdC0', name: 'Juniper Labs', email: 'billing.juniper@example.com', status: 'Review', phone: '', createdAt: '2026-05-21T11:02:00Z' },
  { id: 'cus_M7pQ1fC8yLw4DkS2nAaR5', name: 'Maya Chen', email: 'maya.chen@example.com', status: 'Active', phone: '+44 20 7946 0188', createdAt: '2026-05-17T20:44:00Z' },
  { id: 'cus_B2rT6nY9gVq3LsE0hPwK8', name: 'Drift Supply', email: 'accounts.drift@example.com', status: 'Blocked', phone: '', createdAt: '2026-05-13T13:29:00Z' },
  { id: 'cus_K9dW4sF2aJm8QpX7cRnL3', name: 'Theo Ramirez', email: 'theo.ramirez@example.com', status: 'Active', phone: '+61 2 5550 4420', createdAt: '2026-05-09T06:57:00Z' },
  { id: 'cus_R4cV0mN8uBd6TzQ1xLfP9', name: 'Orbit Kitchen', email: 'finance.orbit@example.com', status: 'Review', phone: '', createdAt: '2026-05-04T21:35:00Z' },
  { id: 'cus_Y1hL5qE7sGp2VnD8kTbM4', name: 'Priya Nair', email: 'priya.nair@example.com', status: 'Active', phone: '+91 98765 20418', createdAt: '2026-04-30T14:10:00Z' },
  { id: 'cus_D6nA3xK0pWs9JqR2vHcF5', name: 'Harbor Nine', email: 'receipts.harbor@example.com', status: 'Review', phone: '', createdAt: '2026-04-22T00:07:00Z' },
  { id: 'cus_T0vP8mC3zQr6NxL1aYdS7', name: 'Nolan Pierce', email: 'nolan.pierce@example.com', status: 'Active', phone: '+1 646 555 8821', createdAt: '2026-04-18T19:41:00Z' },
  { id: 'cus_L5sJ2uB9fVx4CpN8qWmE0', name: 'Cobalt Press', email: 'ops.cobalt@example.com', status: 'Blocked', phone: '', createdAt: '2026-04-11T10:22:00Z' },
]
const filters = reactive({ search: '', status: 'All statuses', period: 'All dates', from: '2026-04-01', to: '2026-05-31' })
const dateError = computed(() => filters.period !== 'Custom range' ? undefined : !filters.from || !filters.to ? 'Choose both UTC dates.' : filters.from > filters.to ? 'Start date must not be after end date.' : undefined)
const sortKey = ref<keyof ProcessorCustomer>('createdAt')
const descending = ref(true)
const sortOptions = [{ label: 'Created at', value: 'createdAt' }, { label: 'Name', value: 'name' }, { label: 'Customer ID', value: 'id' }, { label: 'Email', value: 'email' }, { label: 'Status', value: 'status' }, { label: 'Phone', value: 'phone' }]
const sortCustomer = (key: keyof ProcessorCustomer) => { if (sortKey.value === key) descending.value = !descending.value; else { sortKey.value = key; descending.value = false } }
const filteredProcessorCustomers = computed(() => {
  if (dateError.value) return []
  const query = filters.search.trim().toLowerCase()
  return processorCustomers.filter(customer => {
    const date = customer.createdAt.slice(0, 10)
    return (!query || `${customer.name} ${customer.id} ${customer.email}`.toLowerCase().includes(query))
      && (filters.status === 'All statuses' || customer.status === filters.status)
      && (filters.period === 'All dates' || (filters.period === 'May 2026' ? date.startsWith('2026-05') : filters.period === 'April 2026' ? date.startsWith('2026-04') : date >= filters.from && date <= filters.to))
  }).sort((a, b) => (a[sortKey.value].localeCompare(b[sortKey.value], 'en') || a.id.localeCompare(b.id, 'en')) * (descending.value ? -1 : 1))
})
const processorPage = ref(1)
const pageSize = ref(5)
const processorPageCount = computed(() => Math.max(1, Math.ceil(filteredProcessorCustomers.value.length / pageSize.value)))
const currentProcessorPage = computed(() => Math.min(processorPage.value, processorPageCount.value))
const pageCustomers = computed(() => filteredProcessorCustomers.value.slice((currentProcessorPage.value - 1) * pageSize.value, currentProcessorPage.value * pageSize.value))
const firstVisible = computed(() => filteredProcessorCustomers.value.length ? (currentProcessorPage.value - 1) * pageSize.value + 1 : 0)
const lastVisible = computed(() => Math.min(currentProcessorPage.value * pageSize.value, filteredProcessorCustomers.value.length))
watch([() => filters.search, () => filters.status, () => filters.period, () => filters.from, () => filters.to, sortKey, descending, pageSize], () => { processorPage.value = 1 })
function resetProcessorFilters() { Object.assign(filters, { search: '', status: 'All statuses', period: 'All dates', from: '2026-04-01', to: '2026-05-31' }); sortKey.value = 'createdAt'; descending.value = true; processorPage.value = 1 }
const processorHeaders: { key: keyof ProcessorCustomer, label: string }[] = [{ key: 'name', label: 'Customer name' }, { key: 'id', label: 'Customer ID' }, { key: 'email', label: 'Email' }, { key: 'status', label: 'Status' }, { key: 'phone', label: 'Phone number' }, { key: 'createdAt', label: 'Created at (UTC)' }]
const processorColumns: TableColumn<ProcessorCustomer>[] = processorHeaders.map(column => ({ accessorKey: column.key, header: column.label }))
const processorStatusColor = (status: ProcessorCustomer['status']) => status === 'Active' ? 'success' as const : status === 'Review' ? 'warning' as const : 'error' as const
const processorStatusIcon = (status: ProcessorCustomer['status']) => status === 'Active' ? 'i-lucide-circle-check' : status === 'Review' ? 'i-lucide-clock-3' : 'i-lucide-circle-x'
const processorDate = (date: string) => new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'UTC' }).format(new Date(date))
const selectedProcessorCustomer = ref<ProcessorCustomer | null>(null)
const processorDetailOpen = ref(false)
function showProcessorCustomer(customer: ProcessorCustomer) { selectedProcessorCustomer.value = customer; processorDetailOpen.value = true }
// @copy:processor-customers:end
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/customers">
    <div class="min-h-0 flex-1 overflow-y-auto"><main class="mx-auto w-full max-w-7xl p-4 sm:p-6">
      <section data-copy-block="processor-customer-directory" tabindex="0" aria-label="Payment processor example customer directory" class="min-w-0 space-y-5">
        <header><h1 class="text-2xl font-semibold text-highlighted">Customers</h1><p class="mt-1 text-sm text-muted">{{ processorCustomers.length }} example records · read-only local demo, not connected to a payment provider.</p></header>
        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"><UFormField label="Search customer, ID or email"><UInput v-model="filters.search" name="processorCustomerSearch" type="search" icon="i-lucide-search" placeholder="Search customers" class="w-full" /></UFormField><UFormField label="Status"><USelect v-model="filters.status" :items="['All statuses', 'Active', 'Review', 'Blocked']" aria-label="Processor customer status filter" class="w-full" /></UFormField><UFormField label="Created at (UTC)"><USelect v-model="filters.period" :items="['All dates', 'May 2026', 'April 2026', 'Custom range']" aria-label="Processor customer date range" class="w-full" /></UFormField></div>
        <div v-if="filters.period === 'Custom range'" class="grid gap-3 sm:grid-cols-2"><UFormField label="From (UTC, inclusive)" :error="dateError"><UInput v-model="filters.from" name="processorCustomerFrom" type="date" class="w-full" /></UFormField><UFormField label="To (UTC, inclusive)"><UInput v-model="filters.to" name="processorCustomerTo" type="date" class="w-full" /></UFormField></div>
        <div class="flex flex-wrap items-end justify-between gap-3"><div class="flex flex-wrap items-end gap-2"><UFormField label="Sort by"><USelect v-model="sortKey" :items="sortOptions" aria-label="Processor customer sort field" class="min-w-36" /></UFormField><UButton :label="descending ? 'Descending' : 'Ascending'" :icon="descending ? 'i-lucide-arrow-down' : 'i-lucide-arrow-up'" aria-label="Toggle processor sort direction" color="neutral" variant="outline" @click="descending = !descending" /></div><UButton label="Reset filters" aria-label="Reset processor customer filters" color="neutral" variant="ghost" @click="resetProcessorFilters" /></div>
        <p data-processor-count class="text-sm text-muted">{{ filteredProcessorCustomers.length }} of {{ processorCustomers.length }} records match. Dates are UTC; statuses are demo labels, not live risk decisions.</p>
        <div class="hidden min-w-0 overflow-x-auto rounded-lg border border-default md:block"><UTable :data="pageCustomers" :columns="processorColumns" :get-row-id="row => row.id" :ui="{ th: 'bg-muted', td: 'border-b border-default' }">
          <template v-for="column in processorHeaders" :key="column.key" #[`${column.key}-header`]><UButton :label="column.label" :aria-label="`Sort processor customers by ${column.key}`" :trailing-icon="sortKey === column.key ? descending ? 'i-lucide-arrow-down' : 'i-lucide-arrow-up' : undefined" color="neutral" variant="ghost" size="xs" @click="sortCustomer(column.key)" /></template>
          <template #name-cell="{ row }"><div class="flex items-center gap-3"><span class="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary" aria-hidden="true">{{ row.original.name.split(' ').map(part => part[0]).slice(0, 2).join('') }}</span><UButton :label="row.original.name" :aria-label="`View processor customer ${row.original.id}`" color="neutral" variant="link" class="p-0 text-highlighted" @click="showProcessorCustomer(row.original)" /></div></template>
          <template #id-cell="{ row }"><code class="text-xs">{{ row.original.id }}</code></template><template #status-cell="{ row }"><UBadge :label="row.original.status" :icon="processorStatusIcon(row.original.status)" :color="processorStatusColor(row.original.status)" variant="subtle" /></template><template #phone-cell="{ row }">{{ row.original.phone || 'Not provided' }}</template><template #createdAt-cell="{ row }"><time :datetime="row.original.createdAt">{{ processorDate(row.original.createdAt) }}</time></template><template #empty><p class="p-5 text-sm text-muted">No customers match these filters.</p></template>
        </UTable></div>
        <div class="space-y-3 md:hidden"><UCard v-for="customer in pageCustomers" :key="customer.id" :data-processor-mobile="customer.id"><div class="flex flex-wrap items-center justify-between gap-2"><UButton :label="customer.name" :aria-label="`View mobile processor customer ${customer.id}`" color="neutral" variant="link" class="p-0 text-highlighted" @click="showProcessorCustomer(customer)" /><UBadge :label="customer.status" :icon="processorStatusIcon(customer.status)" :color="processorStatusColor(customer.status)" variant="subtle" /></div><code class="mt-2 block break-all text-xs text-muted">{{ customer.id }}</code><dl class="mt-4 space-y-3 text-sm"><div><dt class="text-xs text-muted">Email</dt><dd class="break-all">{{ customer.email }}</dd></div><div><dt class="text-xs text-muted">Phone number</dt><dd>{{ customer.phone || 'Not provided' }}</dd></div><div><dt class="text-xs text-muted">Created at (UTC)</dt><dd><time :datetime="customer.createdAt">{{ processorDate(customer.createdAt) }}</time></dd></div></dl></UCard><p v-if="!pageCustomers.length" class="rounded-lg border border-default p-5 text-sm text-muted">No customers match these filters.</p></div>
        <footer class="flex flex-wrap items-center justify-between gap-3"><p data-processor-pagination class="text-sm text-muted">Showing {{ firstVisible }}–{{ lastVisible }} of {{ filteredProcessorCustomers.length }} customers · Page {{ currentProcessorPage }} / {{ processorPageCount }}</p><div class="flex flex-wrap items-center gap-2"><USelect v-model="pageSize" :items="[{ label: '5 per page', value: 5 }, { label: '10 per page', value: 10 }]" aria-label="Processor customers per page" /><UButton label="Previous" aria-label="Previous processor customers" icon="i-lucide-chevron-left" :disabled="currentProcessorPage === 1" color="neutral" variant="outline" @click="processorPage = currentProcessorPage - 1" /><UButton label="Next" aria-label="Next processor customers" trailing-icon="i-lucide-chevron-right" :disabled="currentProcessorPage === processorPageCount" color="neutral" variant="outline" @click="processorPage = currentProcessorPage + 1" /></div></footer>
        <UModal v-model:open="processorDetailOpen" :title="selectedProcessorCustomer?.name || 'Example customer'" description="Read-only demo record. No payment methods, charges or live account checks."><template #body><dl v-if="selectedProcessorCustomer" class="space-y-4 text-sm"><div><dt class="text-xs text-muted">Customer ID</dt><dd class="break-all font-mono">{{ selectedProcessorCustomer.id }}</dd></div><div><dt class="text-xs text-muted">Email</dt><dd class="break-all">{{ selectedProcessorCustomer.email }}</dd></div><div><dt class="text-xs text-muted">Status</dt><dd class="mt-1"><UBadge :label="selectedProcessorCustomer.status" :color="processorStatusColor(selectedProcessorCustomer.status)" variant="subtle" /></dd></div><div><dt class="text-xs text-muted">Phone</dt><dd>{{ selectedProcessorCustomer.phone || 'Not provided' }}</dd></div><div><dt class="text-xs text-muted">Created at (UTC)</dt><dd>{{ processorDate(selectedProcessorCustomer.createdAt) }}</dd></div></dl></template><template #footer><UButton label="Close" aria-label="Close processor customer details" @click="processorDetailOpen = false" /></template></UModal>
      </section>
    </main></div>
    <BlockCopyTools page="/payment-processor/customers" />
  </div>
</template>
