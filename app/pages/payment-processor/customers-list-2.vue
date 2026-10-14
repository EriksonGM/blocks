<!-- Page: /payment-processor/customers-list-2 | Local example payment accounts, never live risk or payment operations. -->
<script setup lang="ts">
useHead({ title: 'Customers List 2 · Blocks Admin' })

// @copy:payment-accounts-data:start
import { computed, reactive, ref } from 'vue'
type PaymentAccount = {
  id: string, name: string, email: string, account: string, spend: number, openInvoices: number,
  lastPayment: string, method: 'Card' | 'ACH' | 'Wire', methodLabel: string,
  status: 'Active' | 'Review' | 'Blocked', kyc: 'Verified' | 'Pending' | 'Rejected'
}
// Fictional companies, amounts in USD, dates in UTC. Card metadata is not a usable payment method.
const paymentAccounts: PaymentAccount[] = [
  { id: 'cus_9Kx41L', name: 'Northstar Supply Co.', email: 'billing.northstar@example.com', account: 'Business account', spend: 128420, openInvoices: 12000, lastPayment: '2026-06-12', method: 'Card', methodLabel: 'Visa ending 4242', status: 'Active', kyc: 'Verified' },
  { id: 'cus_8Vn20P', name: 'Aster Labs', email: 'finance.aster@example.com', account: 'Startup account', spend: 84750, openInvoices: 8500, lastPayment: '2026-06-10', method: 'ACH', methodLabel: 'ACH verified', status: 'Review', kyc: 'Pending' },
  { id: 'cus_7Qs88B', name: 'Meridian Health', email: 'ap.meridian@example.com', account: 'Enterprise account', spend: 210300, openInvoices: 21000, lastPayment: '2026-06-09', method: 'Card', methodLabel: 'Amex ending 3005', status: 'Active', kyc: 'Verified' },
  { id: 'cus_6Bd19Q', name: 'Rivergate Studios', email: 'ops.rivergate@example.com', account: 'Creator account', spend: 32180, openInvoices: 3200, lastPayment: '2026-06-07', method: 'Card', methodLabel: 'Mastercard ending 1881', status: 'Blocked', kyc: 'Rejected' },
  { id: 'cus_5Zp62T', name: 'Kite Retail Group', email: 'payments.kite@example.com', account: 'Business account', spend: 96040, openInvoices: 9600, lastPayment: '2026-06-04', method: 'ACH', methodLabel: 'ACH verified', status: 'Active', kyc: 'Verified' },
  { id: 'cus_4Ta73R', name: 'Bluebird Events', email: 'accounts.bluebird@example.com', account: 'Seasonal account', spend: 58600, openInvoices: 5800, lastPayment: '2026-06-01', method: 'Card', methodLabel: 'Visa ending 9021', status: 'Review', kyc: 'Pending' },
  { id: 'cus_3Lm44D', name: 'Prairie Foods', email: 'ar.prairie@example.com', account: 'Marketplace seller', spend: 141980, openInvoices: 14000, lastPayment: '2026-05-29', method: 'Card', methodLabel: 'Mastercard ending 6409', status: 'Active', kyc: 'Verified' },
  { id: 'cus_2Er35N', name: 'Nomad Robotics', email: 'billing.nomad@example.com', account: 'Enterprise account', spend: 301220, openInvoices: 30100, lastPayment: '2026-05-27', method: 'Wire', methodLabel: 'Wire enabled', status: 'Active', kyc: 'Verified' },
  { id: 'cus_1Cb90W', name: 'Harbor Fleet', email: 'payables.harbor@example.com', account: 'Business account', spend: 73450, openInvoices: 7300, lastPayment: '2026-05-24', method: 'Card', methodLabel: 'Visa ending 1155', status: 'Review', kyc: 'Pending' },
  { id: 'cus_0Aj27K', name: 'Luma Learning', email: 'admin.luma@example.com', account: 'Nonprofit account', spend: 45760, openInvoices: 4500, lastPayment: '2026-05-21', method: 'ACH', methodLabel: 'ACH verified', status: 'Active', kyc: 'Verified' },
]
const accountMoney = (amount: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount)
// @copy:payment-accounts-data:end

// @copy:payment-accounts-summary:start
const accountMetrics = computed(() => [
  { label: 'Active customers', value: String(paymentAccounts.filter(account => account.status === 'Active').length), icon: 'i-lucide-users' },
  { label: 'Lifetime spend (USD)', value: accountMoney(paymentAccounts.reduce((sum, account) => sum + account.spend, 0)), icon: 'i-lucide-badge-dollar-sign' },
  { label: 'Open invoices (USD)', value: accountMoney(paymentAccounts.reduce((sum, account) => sum + account.openInvoices, 0)), icon: 'i-lucide-receipt-text' },
  { label: 'Needs review', value: String(paymentAccounts.filter(account => account.status === 'Review').length), icon: 'i-lucide-shield-alert' },
])
// @copy:payment-accounts-summary:end

// @copy:payment-accounts-directory:start
import type { TableColumn } from '@nuxt/ui'
type AccountView = 'customers' | 'methods' | 'risk'
type AccountSort = 'name' | 'id' | 'spend' | 'lastPayment' | 'method' | 'status' | 'kyc' | 'openInvoices'
const accountView = ref<AccountView>('customers')
const accountTabs = [
  { label: 'All Customers', value: 'customers', slot: 'directory' as const },
  { label: 'Payment Methods', value: 'methods', slot: 'directory' as const },
  { label: 'Risk & KYC', value: 'risk', slot: 'directory' as const },
]
const accountFilters = reactive({ search: '', status: 'All statuses', method: 'All methods', period: 'All dates', from: '2026-05-01', to: '2026-06-30' })
function validAccountDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const date = new Date(value + 'T00:00:00Z')
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value
}
const accountDateError = computed(() => accountFilters.period !== 'Custom range' ? undefined
  : !validAccountDate(accountFilters.from) || !validAccountDate(accountFilters.to) ? 'Choose both valid UTC dates.'
  : accountFilters.from > accountFilters.to ? 'Start date must not be after end date.' : undefined)
const accountSort = ref<AccountSort>('lastPayment')
const accountDescending = ref(true)
const accountSortItems = [
  { label: 'Customer', value: 'name' }, { label: 'Account ID', value: 'id' }, { label: 'Lifetime spend', value: 'spend' },
  { label: 'Last payment', value: 'lastPayment' }, { label: 'Method', value: 'method' },
  { label: 'Risk status', value: 'status' }, { label: 'KYC', value: 'kyc' }, { label: 'Open invoices', value: 'openInvoices' },
]
const visibleAccounts = computed(() => {
  if (accountDateError.value) return []
  const query = accountFilters.search.trim().toLowerCase()
  return paymentAccounts.filter(account => (!query || `${account.name} ${account.email} ${account.id} ${account.account} ${account.methodLabel}`.toLowerCase().includes(query))
    && (accountFilters.status === 'All statuses' || account.status === accountFilters.status)
    && (accountFilters.method === 'All methods' || account.method === accountFilters.method)
    && (accountFilters.period === 'All dates' || (accountFilters.period === 'June 2026' ? account.lastPayment.startsWith('2026-06')
      : accountFilters.period === 'May 2026' ? account.lastPayment.startsWith('2026-05') : account.lastPayment >= accountFilters.from && account.lastPayment <= accountFilters.to)))
    .sort((a, b) => {
      const left = a[accountSort.value], right = b[accountSort.value]
      const order = typeof left === 'number' && typeof right === 'number' ? left - right : String(left).localeCompare(String(right), 'en')
      return (order || a.id.localeCompare(b.id, 'en')) * (accountDescending.value ? -1 : 1)
    })
})
const accountHeaders = computed<{ key: keyof PaymentAccount, label: string }[]>(() => [
  { key: 'name', label: 'Customer' }, { key: 'id', label: 'Account' },
  ...(accountView.value === 'customers' ? [{ key: 'spend' as const, label: 'Lifetime spend (USD)' }, { key: 'lastPayment' as const, label: 'Last payment (UTC)' }, { key: 'status' as const, label: 'Risk status' }]
    : accountView.value === 'methods' ? [{ key: 'method' as const, label: 'Payment method' }, { key: 'lastPayment' as const, label: 'Last payment (UTC)' }, { key: 'spend' as const, label: 'Lifetime spend (USD)' }]
    : [{ key: 'status' as const, label: 'Risk status' }, { key: 'kyc' as const, label: 'KYC' }, { key: 'openInvoices' as const, label: 'Open invoices (USD)' }]),
])
const accountColumns = computed<TableColumn<PaymentAccount>[]>(() => accountHeaders.value.map(header => ({ accessorKey: header.key, header: header.label })))
function sortAccounts(key: keyof PaymentAccount) {
  if (accountSort.value === key) accountDescending.value = !accountDescending.value
  else { accountSort.value = key as AccountSort; accountDescending.value = false }
}
function resetAccounts() {
  Object.assign(accountFilters, { search: '', status: 'All statuses', method: 'All methods', period: 'All dates', from: '2026-05-01', to: '2026-06-30' })
  accountSort.value = 'lastPayment'; accountDescending.value = true; accountExportNotice.value = ''
}
const accountStatusColor = (status: PaymentAccount['status']) => status === 'Active' ? 'success' as const : status === 'Review' ? 'warning' as const : 'error' as const
const accountKycColor = (kyc: PaymentAccount['kyc']) => kyc === 'Verified' ? 'success' as const : kyc === 'Pending' ? 'warning' as const : 'error' as const
const accountDate = (date: string) => new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(date + 'T00:00:00Z'))
const selectedAccount = ref<PaymentAccount | null>(null)
const accountDetailOpen = ref(false)
function showAccount(account: PaymentAccount) { selectedAccount.value = account; accountDetailOpen.value = true }
const accountExportNotice = ref('')
function exportAccounts() {
  if (!visibleAccounts.value.length || accountDateError.value) return
  const headers = accountHeaders.value
  const rows = [headers.map(header => header.label), ...visibleAccounts.value.map(account => headers.map(header =>
    header.key === 'name' ? `${account.name} (${account.email})` : header.key === 'method' ? account.methodLabel : String(account[header.key])))]
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\r\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url; anchor.download = `payment-accounts-${accountView.value}.csv`; anchor.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
  accountExportNotice.value = `CSV prepared: ${visibleAccounts.value.length} records from ${accountTabs.find(tab => tab.value === accountView.value)?.label}.`
}
// @copy:payment-accounts-directory:end
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/customers-list-2">
    <div class="min-h-0 flex-1 overflow-y-auto">
      <main class="mx-auto w-full max-w-7xl space-y-6 p-4 sm:p-6">
        <section data-copy-block="payment-account-summary" tabindex="0" aria-label="Example customer payment account summary" class="space-y-5">
          <header>
            <h1 class="text-2xl font-semibold text-highlighted">Customers</h1>
            <p class="mt-1 text-sm text-muted">{{ paymentAccounts.length }} fictional accounts · read-only local demo, not connected to a payment provider.</p>
          </header>
          <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <UCard v-for="metric in accountMetrics" :key="metric.label" :data-account-metric="metric.label">
              <div class="flex items-center gap-3"><span class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted"><UIcon :name="metric.icon" class="size-5 text-highlighted" /></span><div><p class="text-lg font-semibold text-highlighted">{{ metric.value }}</p><p class="text-xs text-muted">{{ metric.label }}</p></div></div>
            </UCard>
          </div>
          <p class="text-xs text-muted">Totals cover all example accounts, not the filtered list. Lifetime spend is not volume processed this month.</p>
        </section>

        <section data-copy-block="payment-account-directory" tabindex="0" aria-label="Example customer payment accounts" class="min-w-0 space-y-5">
          <h2 class="text-lg font-semibold text-highlighted">Payment accounts</h2>
          <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <UFormField label="Search customer, ID or method"><UInput v-model="accountFilters.search" name="paymentAccountSearch" type="search" icon="i-lucide-search" placeholder="Search accounts" class="w-full" /></UFormField>
            <UFormField label="Risk status"><USelect v-model="accountFilters.status" :items="['All statuses', 'Active', 'Review', 'Blocked']" aria-label="Payment account status filter" class="w-full" /></UFormField>
            <UFormField label="Payment method"><USelect v-model="accountFilters.method" :items="['All methods', 'Card', 'ACH', 'Wire']" aria-label="Payment account method filter" class="w-full" /></UFormField>
            <UFormField label="Last payment (UTC)"><USelect v-model="accountFilters.period" :items="['All dates', 'June 2026', 'May 2026', 'Custom range']" aria-label="Payment account date range" class="w-full" /></UFormField>
          </div>
          <div v-if="accountFilters.period === 'Custom range'" class="grid gap-3 sm:grid-cols-2">
            <UFormField label="From (UTC, inclusive)" :error="accountDateError"><UInput v-model="accountFilters.from" name="paymentAccountFrom" type="date" class="w-full" /></UFormField>
            <UFormField label="To (UTC, inclusive)"><UInput v-model="accountFilters.to" name="paymentAccountTo" type="date" class="w-full" /></UFormField>
          </div>
          <div class="flex flex-wrap items-end justify-between gap-3">
            <div class="flex flex-wrap items-end gap-2"><UFormField label="Sort by"><USelect v-model="accountSort" :items="accountSortItems" aria-label="Payment account sort field" class="min-w-36" /></UFormField><UButton :label="accountDescending ? 'Descending' : 'Ascending'" :icon="accountDescending ? 'i-lucide-arrow-down' : 'i-lucide-arrow-up'" aria-label="Toggle payment account sort direction" color="neutral" variant="outline" @click="accountDescending = !accountDescending" /></div>
            <div class="flex flex-wrap gap-2"><UButton label="Reset filters" aria-label="Reset payment account filters" color="neutral" variant="ghost" @click="resetAccounts" /><UButton label="Export CSV" aria-label="Export filtered payment accounts" icon="i-lucide-download" :disabled="!visibleAccounts.length" @click="exportAccounts" /></div>
          </div>
          <p data-account-count class="text-sm text-muted" aria-live="polite">{{ visibleAccounts.length }} of {{ paymentAccounts.length }} accounts match. Filters and sort apply to every view.</p>
          <p class="text-xs text-muted">Risk and KYC are demo labels, not live checks. Card details are fictional metadata, never PAN or CVC.</p>
          <p v-if="accountExportNotice" role="status" class="text-sm text-muted">{{ accountExportNotice }}</p>

          <UTabs v-model="accountView" :items="accountTabs" variant="link" :ui="{ list: 'w-full', trigger: 'min-h-11 flex-1 px-2 text-xs sm:text-sm', label: 'whitespace-normal text-center overflow-visible' }">
            <template #directory>
              <div class="hidden min-w-0 overflow-x-auto rounded-lg border border-default md:block">
                <!-- Table: real per-view columns; computed order shared with mobile and CSV. -->
                <UTable :data="visibleAccounts" :columns="accountColumns" :get-row-id="row => row.id" :ui="{ th: 'bg-muted', td: 'border-b border-default' }">
                  <template v-for="header in accountHeaders" :key="header.key" #[`${header.key}-header`]><UButton :label="header.label" :aria-label="`Sort payment accounts by ${header.key}`" :trailing-icon="accountSort === header.key ? accountDescending ? 'i-lucide-arrow-down' : 'i-lucide-arrow-up' : undefined" color="neutral" variant="ghost" size="xs" @click="sortAccounts(header.key)" /></template>
                  <template #name-cell="{ row }"><UButton :label="row.original.name" :aria-label="`View payment account ${row.original.id}`" color="neutral" variant="link" class="p-0 font-semibold text-highlighted" @click="showAccount(row.original)" /><p class="mt-1 text-xs text-muted">{{ row.original.email }}</p></template>
                  <template #id-cell="{ row }"><code class="text-xs">{{ row.original.id }}</code><p class="mt-1 text-xs text-muted">{{ row.original.account }}</p></template>
                  <template #spend-cell="{ row }"><span class="font-medium">{{ accountMoney(row.original.spend) }}</span></template>
                  <template #lastPayment-cell="{ row }"><time :datetime="row.original.lastPayment + 'T00:00:00Z'">{{ accountDate(row.original.lastPayment) }}</time></template>
                  <template #method-cell="{ row }">{{ row.original.methodLabel }}</template>
                  <template #status-cell="{ row }"><UBadge :label="row.original.status" :color="accountStatusColor(row.original.status)" variant="subtle" /></template>
                  <template #kyc-cell="{ row }"><UBadge :label="row.original.kyc" :color="accountKycColor(row.original.kyc)" variant="subtle" /></template>
                  <template #openInvoices-cell="{ row }">{{ accountMoney(row.original.openInvoices) }}</template>
                  <template #empty><p class="p-5 text-sm text-muted">No accounts match these filters.</p></template>
                </UTable>
              </div>
              <div class="space-y-3 md:hidden">
                <UCard v-for="account in visibleAccounts" :key="account.id" :data-account-mobile="account.id">
                  <UButton :label="account.name" :aria-label="`View mobile payment account ${account.id}`" color="neutral" variant="link" class="p-0 font-semibold text-highlighted" @click="showAccount(account)" /><p class="mt-1 break-all text-xs text-muted">{{ account.email }}</p><code class="mt-2 block text-xs">{{ account.id }}</code><p class="text-xs text-muted">{{ account.account }}</p>
                  <dl class="mt-4 space-y-3 text-sm">
                    <template v-if="accountView === 'customers'"><div><dt class="text-xs text-muted">Lifetime spend (USD)</dt><dd>{{ accountMoney(account.spend) }}</dd></div><div><dt class="text-xs text-muted">Risk status</dt><dd class="mt-1"><UBadge :label="account.status" :color="accountStatusColor(account.status)" variant="subtle" /></dd></div></template>
                    <template v-else-if="accountView === 'methods'"><div><dt class="text-xs text-muted">Payment method</dt><dd>{{ account.methodLabel }}</dd></div><div><dt class="text-xs text-muted">Lifetime spend (USD)</dt><dd>{{ accountMoney(account.spend) }}</dd></div></template>
                    <template v-else><div><dt class="text-xs text-muted">Risk status</dt><dd class="mt-1"><UBadge :label="account.status" :color="accountStatusColor(account.status)" variant="subtle" /></dd></div><div><dt class="text-xs text-muted">KYC</dt><dd class="mt-1"><UBadge :label="account.kyc" :color="accountKycColor(account.kyc)" variant="subtle" /></dd></div><div><dt class="text-xs text-muted">Open invoices (USD)</dt><dd>{{ accountMoney(account.openInvoices) }}</dd></div></template>
                    <div v-if="accountView !== 'risk'"><dt class="text-xs text-muted">Last payment (UTC)</dt><dd><time :datetime="account.lastPayment + 'T00:00:00Z'">{{ accountDate(account.lastPayment) }}</time></dd></div>
                  </dl>
                </UCard>
                <p v-if="!visibleAccounts.length" class="rounded-lg border border-default p-5 text-sm text-muted">No accounts match these filters.</p>
              </div>
            </template>
          </UTabs>

          <UModal v-model:open="accountDetailOpen" :title="selectedAccount?.name || 'Example payment account'" description="Read-only fictional account. No payments, external identity checks or account updates.">
            <template #body><dl v-if="selectedAccount" class="grid gap-4 text-sm sm:grid-cols-2">
              <div><dt class="text-xs text-muted">Account ID</dt><dd class="font-mono">{{ selectedAccount.id }}</dd></div><div><dt class="text-xs text-muted">Account type</dt><dd>{{ selectedAccount.account }}</dd></div>
              <div class="sm:col-span-2"><dt class="text-xs text-muted">Email</dt><dd class="break-all">{{ selectedAccount.email }}</dd></div><div><dt class="text-xs text-muted">Payment method</dt><dd>{{ selectedAccount.methodLabel }}</dd></div><div><dt class="text-xs text-muted">Last payment (UTC)</dt><dd>{{ accountDate(selectedAccount.lastPayment) }}</dd></div>
              <div><dt class="text-xs text-muted">Lifetime spend (USD)</dt><dd>{{ accountMoney(selectedAccount.spend) }}</dd></div><div><dt class="text-xs text-muted">Open invoices (USD)</dt><dd>{{ accountMoney(selectedAccount.openInvoices) }}</dd></div><div><dt class="text-xs text-muted">Risk status</dt><dd class="mt-1"><UBadge :label="selectedAccount.status" :color="accountStatusColor(selectedAccount.status)" variant="subtle" /></dd></div><div><dt class="text-xs text-muted">KYC</dt><dd class="mt-1"><UBadge :label="selectedAccount.kyc" :color="accountKycColor(selectedAccount.kyc)" variant="subtle" /></dd></div>
            </dl></template>
            <template #footer><UButton label="Close" aria-label="Close payment account details" @click="accountDetailOpen = false" /></template>
          </UModal>
        </section>
      </main>
    </div>
    <BlockCopyTools page="/payment-processor/customers-list-2" />
  </div>
</template>
