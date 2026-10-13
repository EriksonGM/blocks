<!-- Page: /developers/events-&-logs | Portable log explorer and independent visitor summaries. -->
<script setup lang="ts">
definePageMeta({ alias: ['/developers/events-%26-logs'] })
useHead({ title: 'Events & Logs · Blocks Admin' })

// @copy:events-vue:start
import { computed, reactive, ref, useId } from 'vue'
// @copy:events-vue:end

// @copy:event-log-explorer:start
import type { TableColumn } from '@nuxt/ui'

type LogRecord = { timestamp: string, level: 'INFO' | 'WARN' | 'ERROR' | 'DEBUG', message: string, source: string, environment: string, type: string }
const demoLogs: LogRecord[] = [
  { timestamp: '2026-10-03T10:30:15Z', level: 'INFO', message: 'Application started successfully', source: 'app.js', environment: 'Production', type: 'Lifecycle' },
  { timestamp: '2026-10-03T10:31:23Z', level: 'WARN', message: 'High memory usage detected', source: 'system.monitor.js', environment: 'Production', type: 'System' },
  { timestamp: '2026-10-03T10:32:46Z', level: 'ERROR', message: 'Failed to connect to database', source: 'database.js', environment: 'Production', type: 'Database' },
  { timestamp: '2026-10-03T10:33:12Z', level: 'INFO', message: 'User authentication successful', source: 'auth.js', environment: 'Production', type: 'Authentication' },
  { timestamp: '2026-10-03T10:34:57Z', level: 'DEBUG', message: 'Cache miss for key: user_preferences', source: 'cache.js', environment: 'Development', type: 'Cache' },
  { timestamp: '2026-10-03T10:35:30Z', level: 'INFO', message: 'API request received: GET /api/users', source: 'api.js', environment: 'Development', type: 'Request' },
  { timestamp: '2026-10-03T10:36:05Z', level: 'WARN', message: 'Deprecated function called: oldFunction()', source: 'legacy.js', environment: 'Production', type: 'Compatibility' },
]
const logs = ref(demoLogs.map(row => ({ ...row })))
const filters = reactive({ search: '', period: 'All records', warning: false, error: false, environment: 'All environments', type: 'All types', from: '2026-10-03T10:00', to: '2026-10-03T10:40' })
const periodOptions = ['All records', 'Past 5 minutes', 'Past 30 minutes', 'Custom']
const environmentOptions = ['All environments', 'Production', 'Development']
const typeOptions = ['All types', 'Lifecycle', 'System', 'Database', 'Authentication', 'Cache', 'Request', 'Compatibility']
const showFilters = ref(true)
const filterPanelId = useId()
const demoReferenceTime = Date.parse('2026-10-03T10:40:00Z')
const customRangeError = computed(() => filters.period === 'Custom' && (!Number.isFinite(Date.parse(filters.from + 'Z')) || !Number.isFinite(Date.parse(filters.to + 'Z')) || filters.from > filters.to)
  ? 'Enter a valid UTC range with the start before the end.' : '')
const filteredLogs = computed(() => logs.value.filter(row => {
  const query = filters.search.trim().toLowerCase()
  const time = Date.parse(row.timestamp)
  const age = (demoReferenceTime - time) / 60000
  const selectedLevels = [...(filters.warning ? ['WARN'] : []), ...(filters.error ? ['ERROR'] : [])]
  const periodMatches = filters.period === 'All records' || (filters.period === 'Custom'
    ? !customRangeError.value && time >= Date.parse(filters.from + 'Z') && time <= Date.parse(filters.to + 'Z')
    : age >= 0 && age <= (filters.period === 'Past 5 minutes' ? 5 : 30))
  return periodMatches && (!query || Object.values(row).some(value => value.toLowerCase().includes(query)))
    && (!selectedLevels.length || selectedLevels.includes(row.level))
    && (filters.environment === 'All environments' || row.environment === filters.environment)
    && (filters.type === 'All types' || row.type === filters.type)
}))
const warningCount = computed(() => logs.value.filter(row => row.level === 'WARN').length)
const errorCount = computed(() => logs.value.filter(row => row.level === 'ERROR').length)
const sorting = ref([{ id: 'timestamp', desc: false }])
const logColumns: TableColumn<LogRecord>[] = [
  { accessorKey: 'timestamp', header: 'Timestamp (UTC)', enableSorting: true },
  { accessorKey: 'level', header: 'Level', enableSorting: true },
  { accessorKey: 'message', header: 'Message', enableSorting: true },
  { accessorKey: 'source', header: 'Source', enableSorting: true },
  { accessorKey: 'environment', header: 'Environment', enableSorting: true },
]
const levelColors = { INFO: 'neutral', WARN: 'warning', ERROR: 'error', DEBUG: 'info' } as const
const logFeedback = ref('Static demo data. No live stream or external log service is connected.')
function resetFilters() {
  Object.assign(filters, { search: '', period: 'All records', warning: false, error: false, environment: 'All environments', type: 'All types', from: '2026-10-03T10:00', to: '2026-10-03T10:40' })
}
function reloadDemo() {
  logs.value = demoLogs.map(row => ({ ...row }))
  resetFilters()
  sorting.value = [{ id: 'timestamp', desc: false }]
  logFeedback.value = 'Original demo records restored. No network request was made.'
}
const importOpen = ref(false)
const importText = ref('')
const importError = ref('')
function openImport() {
  importText.value = ''
  importError.value = ''
  importOpen.value = true
}
function loadImportExample() {
  importText.value = JSON.stringify([{ timestamp: '2026-10-03T10:38:00Z', level: 'INFO', message: 'Imported demonstration event', source: 'example.js', environment: 'Development', type: 'Request' }], null, 2)
  importError.value = ''
}
function isLogRecord(value: unknown): value is LogRecord {
  if (!value || typeof value !== 'object') return false
  const row = value as Record<string, unknown>
  if (!['timestamp', 'level', 'message', 'source', 'environment', 'type'].every(field => typeof row[field] === 'string')) return false
  return typeof row.timestamp === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(row.timestamp) && Number.isFinite(Date.parse(row.timestamp))
    && new Date(row.timestamp).toISOString().replace('.000Z', 'Z') === row.timestamp
    && ['INFO', 'WARN', 'ERROR', 'DEBUG'].includes(String(row.level))
    && ['message', 'source'].every(field => typeof row[field] === 'string' && String(row[field]).trim().length > 0)
    && ['Production', 'Development'].includes(String(row.environment))
    && typeOptions.slice(1).includes(String(row.type))
}
function importLogs() {
  try {
    if (importText.value.length > 100000) throw new Error('Use at most 100 KB of JSON.')
    const parsed: unknown = JSON.parse(importText.value)
    if (!Array.isArray(parsed) || !parsed.length || parsed.length > 100 || !parsed.every(isLogRecord)) {
      throw new Error('Use an array of 1–100 records with UTC timestamps, valid levels, message, source, environment and type. Load the example for the expected format.')
    }
    logs.value = parsed.map(row => ({ timestamp: row.timestamp, level: row.level, message: row.message, source: row.source, environment: row.environment, type: row.type }))
    resetFilters()
    sorting.value = [{ id: 'timestamp', desc: false }]
    logFeedback.value = `${logs.value.length} local records imported. No data was uploaded.`
    importOpen.value = false
  } catch (error) {
    importError.value = error instanceof SyntaxError ? 'Enter valid JSON before importing.' : error instanceof Error ? error.message : 'Unable to import these records.'
  }
}
// @copy:event-log-explorer:end

// @copy:event-visitor-summary:start
const visitorTab = ref('pages')
const visitorTabs = [{ label: 'Pages', value: 'pages' }, { label: 'Routes', value: 'routes' }, { label: 'Hostnames', value: 'hostnames' }]
const visitorData: Record<string, { name: string, visitors: number }[]> = {
  pages: [{ name: '/api-keys', visitors: 112 }, { name: '/overview', visitors: 45 }, { name: '/event-logs', visitors: 24 }, { name: '/login', visitors: 134 }, { name: '/otp', visitors: 120 }, { name: '/settings', visitors: 18 }],
  routes: [{ name: 'GET /api/users', visitors: 184 }, { name: 'POST /api/events', visitors: 78 }, { name: 'GET /api/keys', visitors: 32 }, { name: 'POST /api/auth', visitors: 26 }, { name: 'GET /api/health', visitors: 20 }, { name: 'GET /api/version', visitors: 12 }],
  hostnames: [{ name: 'app.example.com', visitors: 210 }, { name: 'api.example.com', visitors: 132 }, { name: 'docs.example.com', visitors: 64 }, { name: 'staging.example.com', visitors: 47 }, { name: 'localhost', visitors: 12 }, { name: 'preview.example.com', visitors: 8 }],
}
const visitorRows = computed(() => visitorData[visitorTab.value] || [])
const visitorsOpen = ref(false)
// @copy:event-visitor-summary:end

// @copy:event-referrer-summary:start
const referrerTab = ref('referrers')
const referrerTabs = [{ label: 'Referrers', value: 'referrers' }, { label: 'UTM Parameters', value: 'utm' }]
const referrerData: Record<string, { name: string, visitors: number }[]> = {
  referrers: [{ name: 'facebook.com', visitors: 8 }, { name: 'github.com', visitors: 6 }, { name: 'google.com', visitors: 5 }, { name: 'lnkd.in', visitors: 9 }, { name: 'vercel.com', visitors: 2 }, { name: 'Direct', visitors: 14 }],
  utm: [{ name: 'utm_source=newsletter', visitors: 18 }, { name: 'utm_source=search', visitors: 16 }, { name: 'utm_medium=email', visitors: 12 }, { name: 'utm_campaign=launch', visitors: 10 }, { name: 'utm_campaign=docs', visitors: 6 }, { name: 'utm_medium=social', visitors: 4 }],
}
const referrerRows = computed(() => referrerData[referrerTab.value] || [])
const referrersOpen = ref(false)
// @copy:event-referrer-summary:end
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/developers/events-&amp;-logs">
    <div class="min-h-0 flex-1 overflow-y-auto">
      <main class="mx-auto w-full max-w-7xl space-y-6 p-4 sm:p-6">
        <header class="space-y-1"><h1 class="text-2xl font-bold text-highlighted">Events &amp; Logs</h1><p class="text-sm text-muted">Explore local example events and independent visitor summaries.</p></header>
        <UCard data-copy-block="developer-log-explorer" tabindex="0" aria-label="Local event log explorer" class="min-w-0" :ui="{ body: 'p-0 sm:p-0' }">
          <template #header>
            <div class="flex flex-wrap items-center justify-between gap-3"><h2 class="font-semibold text-highlighted">Application logs</h2><div class="flex flex-wrap gap-2"><UBadge label="Static demo" color="neutral" variant="subtle" /><UButton label="Import JSON" aria-label="Import local log JSON" icon="i-lucide-upload" color="neutral" variant="outline" @click="openImport" /></div></div>
          </template>
          <div class="grid min-w-0" :class="showFilters ? 'lg:grid-cols-[240px_minmax(0,1fr)]' : 'grid-cols-1'">
            <aside v-show="showFilters" :id="filterPanelId" class="space-y-5 border-b border-default p-4 lg:border-r lg:border-b-0" aria-label="Log filters">
              <div class="flex items-center justify-between"><h3 class="text-sm font-semibold text-highlighted">Filters</h3><UButton label="Reset" aria-label="Reset log filters" color="neutral" variant="outline" size="xs" @click="resetFilters" /></div>
              <UFormField label="Timeline"><USelect v-model="filters.period" :items="periodOptions" aria-label="Log time period" class="w-full" /></UFormField>
              <p class="text-xs text-muted">Relative periods end at 03 Oct 2026, 10:40 UTC in this fixed demo.</p>
              <div v-if="filters.period === 'Custom'" class="space-y-3">
                <UFormField label="From (UTC)"><UInput v-model="filters.from" type="datetime-local" aria-label="Log range start UTC" class="w-full" /></UFormField>
                <UFormField label="To (UTC)" :error="customRangeError || undefined"><UInput v-model="filters.to" type="datetime-local" aria-label="Log range end UTC" class="w-full" /></UFormField>
              </div>
              <fieldset class="space-y-3"><legend class="mb-3 text-sm font-medium">Contains level</legend><UCheckbox v-model="filters.warning" :label="`Warning (${warningCount})`" aria-label="Filter warning logs" /><UCheckbox v-model="filters.error" :label="`Error (${errorCount})`" aria-label="Filter error logs" /><p class="text-xs text-muted">No selection shows all levels.</p></fieldset>
              <UFormField label="Environment"><USelect v-model="filters.environment" :items="environmentOptions" aria-label="Log environment" class="w-full" /></UFormField>
              <UFormField label="Event type"><USelect v-model="filters.type" :items="typeOptions" aria-label="Log event type" class="w-full" /></UFormField>
            </aside>
            <div class="min-w-0">
              <div class="flex flex-wrap items-center gap-2 border-b border-default p-3"><UButton icon="i-lucide-filter" aria-label="Toggle log filters" :aria-expanded="showFilters" :aria-controls="filterPanelId" color="neutral" variant="outline" @click="showFilters = !showFilters" /><UInput v-model="filters.search" type="search" aria-label="Search event logs" placeholder="Search logs…" icon="i-lucide-search" class="min-w-0 flex-1 basis-40" /><UButton label="Reload demo" aria-label="Reload example logs" icon="i-lucide-refresh-cw" color="neutral" variant="outline" @click="reloadDemo" /></div>
              <UTable v-model:sorting="sorting" :data="filteredLogs" :columns="logColumns" class="w-full" :ui="{ th: 'bg-muted', td: 'border-b border-default' }" aria-label="Event log records">
                <template #timestamp-header="{ column }"><UButton label="Timestamp (UTC)" aria-label="Sort event timestamps" color="neutral" variant="ghost" size="xs" :icon="column.getIsSorted() === 'desc' ? 'i-lucide-arrow-down' : 'i-lucide-arrow-up'" @click="column.toggleSorting(column.getIsSorted() === 'asc')" /></template>
                <template #timestamp-cell="{ row }"><span class="whitespace-nowrap text-xs">{{ row.original.timestamp.replace('T', ' ').replace('Z', '') }}</span></template>
                <template #level-header="{ column }"><UButton label="Level" aria-label="Sort event levels" color="neutral" variant="ghost" size="xs" @click="column.toggleSorting(column.getIsSorted() === 'asc')" /></template>
                <template #level-cell="{ row }"><UBadge :label="row.original.level" :color="levelColors[row.original.level]" variant="subtle" /></template>
                <template #message-cell="{ row }"><span class="block min-w-48 max-w-sm whitespace-normal break-words">{{ row.original.message }}</span></template>
                <template #empty><p class="p-6 text-center text-sm text-muted">No logs match the current filters.</p></template>
              </UTable>
              <p class="border-t border-default p-4 text-xs text-muted" role="status">{{ filteredLogs.length }} of {{ logs.length }} records · {{ logFeedback }}</p>
            </div>
          </div>
          <UModal v-model:open="importOpen" title="Import local log records" description="Paste JSON to replace the in-memory records. No file or data is uploaded.">
            <template #body><div class="space-y-4"><UFormField label="Log JSON" :error="importError || undefined"><UTextarea v-model="importText" :rows="12" aria-label="Local log JSON" class="w-full" :ui="{ base: 'font-mono text-xs' }" /></UFormField><UButton label="Load example" aria-label="Load example log JSON" color="neutral" variant="outline" @click="loadImportExample" /></div></template>
            <template #footer><div class="flex w-full flex-wrap justify-end gap-2"><UButton label="Cancel" aria-label="Cancel log import" color="neutral" variant="outline" @click="importOpen = false" /><UButton label="Import records" aria-label="Confirm local log import" @click="importLogs" /></div></template>
          </UModal>
        </UCard>
        <div class="grid min-w-0 gap-6 lg:grid-cols-2">
          <UCard data-copy-block="developer-visitor-summary" tabindex="0" aria-label="Visitor breakdown" class="min-w-0">
            <template #header><h2 class="font-semibold text-highlighted">Visitors</h2><p class="mt-1 text-xs text-muted">Independent sample analytics, not calculated from the log table.</p></template>
            <UTabs v-model="visitorTab" :items="visitorTabs" :content="false" variant="link" class="mb-4 w-full" :ui="{ trigger: 'min-w-0' }" />
            <ul class="space-y-2" aria-label="Visitor summary rows"><li v-for="entry in visitorRows.slice(0, 5)" :key="entry.name" class="flex items-center justify-between gap-4 rounded-lg bg-muted/30 px-3 py-2 text-sm"><span class="min-w-0 break-all">{{ entry.name }}</span><span class="shrink-0 font-semibold text-highlighted">{{ entry.visitors }}</span></li></ul>
            <template #footer><UButton label="View all" aria-label="View all visitor records" icon="i-lucide-maximize" color="neutral" variant="outline" size="sm" @click="visitorsOpen = true" /></template>
            <UModal v-model:open="visitorsOpen" title="All visitor records" description="Complete demonstration breakdown for the selected tab.">
              <template #body><ul class="space-y-3"><li v-for="entry in visitorRows" :key="entry.name" class="flex justify-between gap-4 text-sm"><span class="min-w-0 break-all">{{ entry.name }}</span><span class="shrink-0 font-semibold">{{ entry.visitors }}</span></li></ul></template>
              <template #footer><UButton label="Close" aria-label="Close visitor records" color="neutral" variant="outline" @click="visitorsOpen = false" /></template>
            </UModal>
          </UCard>
          <UCard data-copy-block="developer-referrer-summary" tabindex="0" aria-label="Referrer breakdown" class="min-w-0">
            <template #header><h2 class="font-semibold text-highlighted">Traffic sources</h2><p class="mt-1 text-xs text-muted">Independent sample referrers and campaign parameters.</p></template>
            <UTabs v-model="referrerTab" :items="referrerTabs" :content="false" variant="link" class="mb-4 w-full" :ui="{ trigger: 'min-w-0' }" />
            <ul class="space-y-2" aria-label="Referrer summary rows"><li v-for="entry in referrerRows.slice(0, 5)" :key="entry.name" class="flex items-center justify-between gap-4 rounded-lg bg-muted/30 px-3 py-2 text-sm"><span class="min-w-0 break-all">{{ entry.name }}</span><span class="shrink-0 font-semibold text-highlighted">{{ entry.visitors }}</span></li></ul>
            <template #footer><UButton label="View all" aria-label="View all referrer records" icon="i-lucide-maximize" color="neutral" variant="outline" size="sm" @click="referrersOpen = true" /></template>
            <UModal v-model:open="referrersOpen" title="All traffic source records" description="Complete demonstration breakdown for the selected tab.">
              <template #body><ul class="space-y-3"><li v-for="entry in referrerRows" :key="entry.name" class="flex justify-between gap-4 text-sm"><span class="min-w-0 break-all">{{ entry.name }}</span><span class="shrink-0 font-semibold">{{ entry.visitors }}</span></li></ul></template>
              <template #footer><UButton label="Close" aria-label="Close referrer records" color="neutral" variant="outline" @click="referrersOpen = false" /></template>
            </UModal>
          </UCard>
        </div>
      </main>
    </div>
    <BlockCopyTools page="/developers/events-&amp;-logs" />
  </div>
</template>
