<!-- Page: /project-management/dashboard-1 | Local workspace blocks; no authentication or business API. -->
<script setup lang="ts">
useHead({ title: 'Dashboard 1 · Blocks Admin' })

// @copy:workspace-user:start
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue'
import type { FormError } from '@nuxt/ui'

const currentUserId = 'nina'
const profile = reactive({ name: 'Nina Oliver', email: 'nina@example.com', timezone: 'UTC' })
// @copy:workspace-user:end

// @copy:workspace-issues:start
type WorkspaceIssue = { id: string, title: string, status: string, priority: string, assignee: string, reporter: string, watching: boolean, labels: string[], dueDate: string }
const issues = ref<WorkspaceIssue[]>([
  { id: 'RFC-101', title: 'Finalize issue timeline architecture', status: 'In Progress', priority: 'high', assignee: 'nina', reporter: 'nina', watching: true, labels: ['timeline', 'frontend'], dueDate: '2026-04-10' },
  { id: 'RFC-102', title: 'Review gantt interaction states', status: 'Todo', priority: 'medium', assignee: 'unassigned', reporter: 'nina', watching: false, labels: ['review'], dueDate: '2026-04-06' },
  { id: 'RFC-103', title: 'Sync issue filters with project views', status: 'Review', priority: 'high', assignee: 'kai', reporter: 'kai', watching: true, labels: ['views', 'filters'], dueDate: '2026-04-16' },
  { id: 'RFC-104', title: 'Document timeline accessibility', status: 'Backlog', priority: 'medium', assignee: 'unassigned', reporter: 'nina', watching: true, labels: ['accessibility'], dueDate: '2026-04-20' },
  { id: 'RFC-105', title: 'Create empty and loading timeline states', status: 'Todo', priority: 'medium', assignee: 'unassigned', reporter: 'lena', watching: true, labels: ['states'], dueDate: '2026-04-21' },
  { id: 'RFC-106', title: 'Add mock dependencies and handoff notes', status: 'Done', priority: 'low', assignee: 'lena', reporter: 'lena', watching: true, labels: ['handoff'], dueDate: '2026-04-07' },
  { id: 'RFC-107', title: 'Polish the quarter view density', status: 'Review', priority: 'medium', assignee: 'ava', reporter: 'nina', watching: false, labels: ['density'], dueDate: '2026-04-08' },
  { id: 'RFC-108', title: 'Prepare timeline release notes', status: 'Backlog', priority: 'low', assignee: 'nina', reporter: 'ava', watching: true, labels: ['release'], dueDate: '2026-04-24' },
])
const statusOptions = ['Backlog', 'Todo', 'In Progress', 'Review', 'Done']
const statusColors = { Backlog: 'neutral', Todo: 'info', 'In Progress': 'warning', Review: 'primary', Done: 'success' } as const
function statusColor(status: string) { return statusColors[status as keyof typeof statusColors] || 'neutral' }
const members = computed(() => [
  { label: 'No owner', value: 'unassigned' }, { label: profile.name, value: 'nina' },
  { label: 'Kai Young', value: 'kai' }, { label: 'Lena Moss', value: 'lena' }, { label: 'Ava Reed', value: 'ava' },
])
function assigneeName(id: string) { return members.value.find(member => member.value === id)?.label || 'No owner' }
// @copy:workspace-issues:end

// @copy:workspace-summary:start
const overviewStats = computed(() => [
  { label: 'Issues created', count: issues.value.filter(issue => issue.reporter === currentUserId).length, icon: 'i-lucide-file-plus-corner' },
  { label: 'Issues assigned', count: issues.value.filter(issue => issue.assignee === currentUserId).length, icon: 'i-lucide-user-round-check' },
  { label: 'Issues subscribed', count: issues.value.filter(issue => issue.watching).length, icon: 'i-lucide-bell' },
])
// @copy:workspace-summary:end

// @copy:workspace-status:start
const issueStatusStats = computed(() => statusOptions.map(status => ({ status, count: issues.value.filter(issue => issue.status === status).length })))
// @copy:workspace-status:end

// @copy:workspace-hours:start
const workPeriod = ref('5D')
const workPeriods = ['5D', '2W', '1M', '6M', '1Y']
const workHistory: Record<string, { label: string, minutes: number }[]> = {
  '5D': [{ label: 'Mon', minutes: 420 }, { label: 'Tue', minutes: 480 }, { label: 'Wed', minutes: 432 }, { label: 'Thu', minutes: 480 }, { label: 'Fri', minutes: 480 }],
  '2W': [{ label: 'W1', minutes: 2292 }, { label: 'W2', minutes: 2160 }],
  '1M': [{ label: 'W1', minutes: 2292 }, { label: 'W2', minutes: 2160 }, { label: 'W3', minutes: 2280 }, { label: 'W4', minutes: 2040 }],
  '6M': [{ label: 'Nov', minutes: 8100 }, { label: 'Dec', minutes: 7600 }, { label: 'Jan', minutes: 8500 }, { label: 'Feb', minutes: 8200 }, { label: 'Mar', minutes: 8772 }, { label: 'Apr', minutes: 6900 }],
  '1Y': [{ label: 'Q2', minutes: 24000 }, { label: 'Q3', minutes: 25800 }, { label: 'Q4', minutes: 23100 }, { label: 'Q1', minutes: 25472 }],
}
const workSamples = computed(() => workHistory[workPeriod.value] || [])
const workMinutes = computed(() => workSamples.value.reduce((sum, sample) => sum + sample.minutes, 0))
const workTotal = computed(() => `${Math.floor(workMinutes.value / 60)} hours · ${workMinutes.value % 60} mins`)
function workX(index: number) { return 25 + index * 310 / Math.max(1, workSamples.value.length - 1) }
function workY(minutes: number) { return 125 - minutes / Math.max(1, ...workSamples.value.map(sample => sample.minutes)) * 90 }
const workPoints = computed(() => workSamples.value.map((sample, index) => `${workX(index)},${workY(sample.minutes)}`).join(' '))
// @copy:workspace-hours:end

// @copy:workspace-timer:start
const timerIssue = ref('RFC-101')
const timerOptions = computed(() => issues.value.map(issue => ({ label: `${issue.id} · ${issue.title}`, value: issue.id })))
const timerRunning = ref(false)
const elapsedMs = ref(0)
let accumulatedMs = 0
let startedAt = 0
let timerInterval: ReturnType<typeof setInterval> | undefined
function updateTimer() { if (timerRunning.value) elapsedMs.value = accumulatedMs + performance.now() - startedAt }
function toggleTimer() {
  if (timerRunning.value) { updateTimer(); accumulatedMs = elapsedMs.value; timerRunning.value = false }
  else { startedAt = performance.now(); timerRunning.value = true }
}
function resetTimer() { timerRunning.value = false; accumulatedMs = 0; elapsedMs.value = 0 }
const timerText = computed(() => {
  const seconds = Math.floor(elapsedMs.value / 1000)
  return [Math.floor(seconds / 3600), Math.floor(seconds / 60) % 60, seconds % 60].map(value => String(value).padStart(2, '0')).join(':')
})
onMounted(() => { timerInterval = setInterval(updateTimer, 250) })
onUnmounted(() => { if (timerInterval) clearInterval(timerInterval) })
// @copy:workspace-timer:end

// @copy:workspace-issue-board:start
import type { TableColumn } from '@nuxt/ui'

const issueView = ref('overview')
const issueViews = [{ label: 'Overview', value: 'overview' }, { label: 'Assigned to me', value: 'assigned' }, { label: 'Reported by me', value: 'reported' }, { label: 'Watching', value: 'watching' }, { label: 'Updates', value: 'updates' }]
const issueSearch = ref('')
const issueStatusFilter = ref('All statuses')
const issueSorting = ref([{ id: 'id', desc: false }])
const visibleIssues = computed(() => issues.value.filter(issue => {
  const query = issueSearch.value.trim().toLowerCase()
  return (issueView.value !== 'assigned' || issue.assignee === currentUserId)
    && (issueView.value !== 'reported' || issue.reporter === currentUserId)
    && (issueView.value !== 'watching' || issue.watching)
    && (issueStatusFilter.value === 'All statuses' || issue.status === issueStatusFilter.value)
    && (!query || `${issue.id} ${issue.title} ${assigneeName(issue.assignee)} ${issue.labels.join(' ')}`.toLowerCase().includes(query))
}))
const issueColumns: TableColumn<WorkspaceIssue>[] = [{ accessorKey: 'id', header: 'Issues', enableSorting: true }, { accessorKey: 'status', header: 'Status', enableSorting: true }, { accessorKey: 'priority', header: 'Priority' }, { accessorKey: 'assignee', header: 'Assignee' }, { accessorKey: 'labels', header: 'Labels' }, { accessorKey: 'dueDate', header: 'Due date', enableSorting: true }]
const updates = ref([{ id: 2, issue: 'RFC-103', message: 'Issue moved to Review.' }, { id: 1, issue: 'RFC-106', message: 'Handoff notes marked as Done.' }])
const issueDialogOpen = ref(false)
const editingIssueId = ref('')
const issueDraft = reactive({ title: '', status: 'Todo', priority: 'medium', assignee: 'unassigned', dueDate: '', watching: false })
const issueFeedback = ref('Changes affect this local demonstration only.')
function openIssue(id: string) {
  const issue = issues.value.find(issue => issue.id === id)
  if (!issue) return
  editingIssueId.value = id
  Object.assign(issueDraft, { title: issue.title, status: issue.status, priority: issue.priority, assignee: issue.assignee, dueDate: issue.dueDate, watching: issue.watching })
  issueDialogOpen.value = true
}
function validateIssue(state: Partial<typeof issueDraft>): FormError[] {
  const errors: FormError[] = []
  if (!state.title?.trim()) errors.push({ name: 'title', message: 'Enter an issue title.' })
  const date = state.dueDate || ''
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(Date.parse(date)) || new Date(date).toISOString().slice(0, 10) !== date) errors.push({ name: 'dueDate', message: 'Enter a valid due date.' })
  return errors
}
function saveIssue() {
  if (validateIssue(issueDraft).length) return
  const issue = issues.value.find(issue => issue.id === editingIssueId.value)
  if (!issue) return
  Object.assign(issue, issueDraft, { title: issueDraft.title.trim() })
  updates.value.unshift({ id: (updates.value[0]?.id || 0) + 1, issue: issue.id, message: `Local changes saved: ${issue.status}, ${issue.priority} priority.` })
  issueFeedback.value = `${issue.id} updated locally.`
  issueDialogOpen.value = false
}
// @copy:workspace-issue-board:end

// @copy:workspace-panel:start
const profileOpen = ref(false)
const profileDraft = reactive({ ...profile })
const profileMessage = ref('Example member profile, stored in memory only.')
const timezoneOptions = ['UTC', 'Europe/London', 'America/New_York', 'Asia/Tokyo']
function editProfile() { Object.assign(profileDraft, profile); profileOpen.value = true }
function validateProfile(state: Partial<typeof profileDraft>): FormError[] {
  const errors: FormError[] = []
  if (!state.name?.trim()) errors.push({ name: 'name', message: 'Enter a display name.' })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email || '')) errors.push({ name: 'email', message: 'Enter a valid example email address.' })
  return errors
}
function saveProfile() {
  if (validateProfile(profileDraft).length) return
  Object.assign(profile, profileDraft, { name: profileDraft.name.trim(), email: profileDraft.email.trim() })
  profileMessage.value = 'Profile updated locally. No account service was contacted.'
  profileOpen.value = false
}
const agendaTab = ref('meetings')
const agendaTabs = [{ label: 'Meetings', value: 'meetings' }, { label: 'Events', value: 'events' }, { label: 'Focus', value: 'focus' }]
const agenda: Record<string, { id: string, title: string, time: string, tag: string, details: string }[]> = {
  meetings: [
    { id: 'planning', title: 'Timeline planning review', time: '09:00–09:45 UTC', tag: 'Roadmap', details: 'Review architecture with Nina, Kai and Ava. Example Google Meet room; no live call is connected.' },
    { id: 'handoff', title: 'Design handoff sync', time: '11:30–12:00 UTC', tag: 'Design', details: 'Discuss timeline states with Lena and Nina. Example Zoom meeting; no join link is configured.' },
    { id: 'release', title: 'Release readiness check', time: '15:00–15:30 UTC', tag: 'Launch', details: 'Check the issue handoff list with the project team. No external calendar is connected.' },
  ],
  events: [{ id: 'demo', title: 'Product demo', time: '13:00–14:00 UTC', tag: 'Demo', details: 'Walk through the timeline prototype and gather local feedback.' }, { id: 'retro', title: 'Sprint retrospective', time: '16:00–16:45 UTC', tag: 'Team', details: 'Review the sample sprint outcomes and next steps.' }],
  focus: [{ id: 'architecture', title: 'Architecture focus block', time: '10:00–11:00 UTC', tag: 'Focus', details: 'Reserved time to work on RFC-101 without meetings.' }, { id: 'docs', title: 'Documentation focus block', time: '14:00–15:00 UTC', tag: 'Focus', details: 'Prepare accessibility notes for RFC-104.' }],
}
const agendaRows = computed(() => agenda[agendaTab.value] || [])
const expandedAgenda = ref<string[]>([])
function toggleAgenda(id: string) { expandedAgenda.value = expandedAgenda.value.includes(id) ? expandedAgenda.value.filter(value => value !== id) : [...expandedAgenda.value, id] }
// @copy:workspace-panel:end
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/dashboard-1">
    <div class="min-h-0 flex-1 overflow-y-auto">
      <main class="mx-auto w-full max-w-[1600px] space-y-6 p-4 sm:p-6">
        <header class="space-y-1"><h1 class="text-2xl font-semibold text-highlighted">My workspace</h1><p class="text-sm text-muted">{{ profile.name }} · Local demonstration. Sample issue dates and history belong to April 2026.</p></header>
        <div class="grid min-w-0 items-start gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
          <div class="min-w-0 space-y-6">
            <section data-copy-block="project-workspace-summary" tabindex="0" aria-label="Personal issue summary" class="space-y-3">
              <h2 class="font-medium text-highlighted">Overview</h2><p class="text-xs text-muted">Personal counts for {{ profile.name }}, calculated from the example issues.</p>
              <div class="grid gap-3 sm:grid-cols-3"><UCard v-for="stat in overviewStats" :key="stat.label"><div class="flex items-center gap-3"><div class="grid size-10 shrink-0 place-items-center rounded-lg bg-muted"><UIcon :name="stat.icon" class="size-5" /></div><div class="min-w-0"><p class="text-xs text-muted">{{ stat.label }}</p><p class="text-lg font-semibold text-highlighted">{{ stat.count }}</p></div></div></UCard></div>
            </section>
            <section data-copy-block="project-workspace-status" tabindex="0" aria-label="Issue status summary" class="space-y-3">
              <h2 class="font-medium text-highlighted">Issue status</h2><div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"><UCard v-for="entry in issueStatusStats" :key="entry.status"><UBadge :label="entry.status" :color="statusColor(entry.status)" variant="subtle" /><p class="mt-2 text-lg font-semibold text-highlighted" :data-workspace-status="entry.status">{{ entry.count }}</p></UCard></div>
            </section>
            <div class="grid min-w-0 items-stretch gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
              <UCard data-copy-block="project-work-hours" tabindex="0" aria-label="Work hour analysis" class="min-w-0">
                <template #header><h2 class="font-medium text-highlighted">Work Hour Analysis</h2></template>
                <p class="text-xs text-muted">Total Work</p><p class="mt-1 text-xl font-semibold text-highlighted" data-work-total>{{ workTotal }}</p>
                <div class="my-4 flex flex-wrap gap-2"><UButton v-for="value in workPeriods" :key="value" :label="value" :aria-label="`Work history ${value}`" :aria-pressed="workPeriod === value" color="neutral" :variant="workPeriod === value ? 'soft' : 'outline'" size="xs" @click="workPeriod = value" /></div>
                <svg viewBox="0 0 360 160" role="img" :aria-label="`Work history in minutes: ${workSamples.map(sample => sample.minutes).join(', ')}`" class="block max-h-44 w-full text-primary"><line v-for="y in [35, 80, 125]" :key="y" x1="25" x2="335" :y1="y" :y2="y" stroke="var(--ui-border)" stroke-dasharray="4 5" /><polyline :points="workPoints" fill="none" stroke="currentColor" stroke-width="2.5" /><g v-for="(sample, index) in workSamples" :key="sample.label"><circle :cx="workX(index)" :cy="workY(sample.minutes)" r="3" fill="currentColor" /><text :x="workX(index)" y="150" text-anchor="middle" fill="var(--ui-text-muted)" font-size="11">{{ sample.label }}</text></g></svg>
                <template #footer><p class="text-xs text-muted">Fixed example history includes extra hours. The local timer does not modify these historical samples.</p></template>
              </UCard>
              <UCard data-copy-block="project-time-tracker" tabindex="0" aria-label="Local issue time tracker" class="min-w-0">
                <template #header><h2 class="font-medium text-highlighted">Time Tracker</h2></template>
                <USelect v-model="timerIssue" :items="timerOptions" aria-label="Tracked issue" :disabled="timerRunning" class="w-full" @update:model-value="resetTimer" />
                <div class="mt-4 space-y-3 rounded-lg bg-muted px-3 py-6 text-center"><p class="text-xs text-muted">{{ timerRunning ? 'Running' : elapsedMs ? 'Paused' : 'Awaiting' }}</p><p class="text-3xl font-medium tabular-nums text-highlighted" data-work-timer>{{ timerText }}</p><div class="flex justify-center gap-2"><UButton :label="timerRunning ? 'Pause' : elapsedMs ? 'Resume' : 'Start'" aria-label="Toggle workspace timer" :icon="timerRunning ? 'i-lucide-pause' : 'i-lucide-play'" @click="toggleTimer" /><UButton icon="i-lucide-rotate-ccw" aria-label="Reset workspace timer" color="neutral" variant="outline" @click="resetTimer" /></div></div>
                <template #footer><p class="text-xs text-muted">In-memory timer only. Changing issue resets it; no time entry is submitted.</p></template>
              </UCard>
            </div>
            <section data-copy-block="project-my-issues" tabindex="0" aria-label="Personal workspace issues" class="min-w-0 space-y-4">
              <h2 class="font-medium text-highlighted">My issues</h2>
              <UTabs v-model="issueView" :items="issueViews" :content="false" variant="link" class="w-full" :ui="{ list: 'justify-start overflow-x-auto', trigger: 'shrink-0' }" />
              <template v-if="issueView !== 'updates'">
                <div class="flex flex-wrap gap-3"><UInput v-model="issueSearch" aria-label="Search workspace issues" placeholder="Search issues…" icon="i-lucide-search" class="min-w-0 flex-1 basis-48" /><USelect v-model="issueStatusFilter" :items="['All statuses', ...statusOptions]" aria-label="Workspace issue status" class="w-44" /></div>
                <UCard class="hidden min-w-0 md:block" :ui="{ body: 'p-0 sm:p-0' }">
                  <UTable v-model:sorting="issueSorting" :data="visibleIssues" :columns="issueColumns" class="w-full" aria-label="Workspace issue records">
                    <template #id-header="{ column }"><UButton label="Issues" aria-label="Sort workspace issues" color="neutral" variant="ghost" size="xs" @click="column.toggleSorting(column.getIsSorted() === 'asc')" /></template>
                    <template #id-cell="{ row }"><UButton :aria-label="`Edit ${row.original.id}`" color="neutral" variant="link" class="flex max-w-sm flex-col items-start gap-1 text-left whitespace-normal" @click="openIssue(row.original.id)"><span class="text-xs text-muted">{{ row.original.id }}</span><span>{{ row.original.title }}</span></UButton></template>
                    <template #status-cell="{ row }"><UBadge :label="row.original.status" :color="statusColor(row.original.status)" variant="subtle" /></template>
                    <template #assignee-cell="{ row }"><span class="text-sm">{{ assigneeName(row.original.assignee) }}</span></template>
                    <template #labels-cell="{ row }"><div class="flex flex-wrap gap-1"><UBadge v-for="label in row.original.labels" :key="label" :label="label" color="neutral" variant="outline" /></div></template>
                    <template #empty><p class="p-5 text-sm text-muted">No issues match your filters.</p></template>
                  </UTable>
                </UCard>
                <div class="space-y-3 md:hidden"><UCard v-for="issue in visibleIssues" :key="issue.id" :data-workspace-issue="issue.id"><UButton :aria-label="`Edit ${issue.id} on mobile`" color="neutral" variant="link" class="h-auto max-w-full flex-col items-start gap-1 p-0 text-left whitespace-normal" @click="openIssue(issue.id)"><span class="text-xs text-muted">{{ issue.id }}</span><span>{{ issue.title }}</span></UButton><div class="mt-3 flex flex-wrap gap-2"><UBadge :label="issue.status" :color="statusColor(issue.status)" variant="subtle" /><UBadge :label="issue.priority" color="neutral" variant="outline" /></div><p class="mt-3 text-xs text-muted">{{ assigneeName(issue.assignee) }} · Due {{ issue.dueDate }}</p><div class="mt-2 flex flex-wrap gap-1"><UBadge v-for="label in issue.labels" :key="label" :label="label" color="neutral" variant="outline" /></div></UCard><p v-if="!visibleIssues.length" class="text-sm text-muted">No issues match your filters.</p></div>
                <p class="text-xs text-muted" role="status">{{ visibleIssues.length }} of {{ issues.length }} example issues · {{ issueFeedback }}</p>
              </template>
              <UCard v-else><ul class="space-y-4" aria-label="Workspace issue updates"><li v-for="update in updates" :key="update.id" class="space-y-1"><p class="text-sm font-medium">{{ update.issue }}</p><p class="text-sm text-muted">{{ update.message }}</p></li></ul></UCard>
              <UModal v-model:open="issueDialogOpen" :title="`Edit ${editingIssueId}`" description="Update this demonstration record in memory only.">
                <template #body><UForm :state="issueDraft" :validate="validateIssue" class="space-y-4" @submit="saveIssue"><UFormField label="Title" name="title" required><UInput v-model="issueDraft.title" name="workspaceIssueTitle" class="w-full" /></UFormField><div class="grid gap-4 sm:grid-cols-2"><UFormField label="Status" name="status"><USelect v-model="issueDraft.status" :items="statusOptions" aria-label="Edited issue status" class="w-full" /></UFormField><UFormField label="Priority" name="priority"><USelect v-model="issueDraft.priority" :items="['low', 'medium', 'high']" aria-label="Edited issue priority" class="w-full" /></UFormField></div><UFormField label="Assignee" name="assignee"><USelect v-model="issueDraft.assignee" :items="members" aria-label="Edited issue assignee" class="w-full" /></UFormField><UFormField label="Due date" name="dueDate" required><UInput v-model="issueDraft.dueDate" type="date" aria-label="Edited issue due date" class="w-full" /></UFormField><UCheckbox v-model="issueDraft.watching" label="Watch this issue" /><div class="flex justify-end gap-2"><UButton label="Cancel" aria-label="Cancel workspace issue changes" color="neutral" variant="outline" @click="issueDialogOpen = false" /><UButton label="Save changes" aria-label="Save workspace issue changes" type="submit" /></div></UForm></template>
              </UModal>
            </section>
          </div>
          <aside class="min-w-0">
            <UCard data-copy-block="project-workspace-panel" tabindex="0" aria-label="Workspace profile and agenda" class="min-w-0">
              <template #header><div class="flex items-center justify-between gap-3"><div class="min-w-0"><h2 class="break-words font-semibold text-highlighted">{{ profile.name }}</h2><p class="break-all text-xs text-muted">{{ profile.email }}</p></div><UButton icon="i-lucide-pen-line" aria-label="Edit workspace profile" color="neutral" variant="outline" @click="editProfile" /></div></template>
              <dl class="grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-3 text-sm"><dt class="text-muted">Joined on</dt><dd>Jan 10, 2026</dd><dt class="text-muted">Timezone</dt><dd class="break-all">{{ profile.timezone }}</dd></dl><p class="mt-4 text-xs text-muted" role="status">{{ profileMessage }}</p><USeparator class="my-5" />
              <h3 class="mb-3 text-sm font-medium">Sample agenda · Apr 3, 2026</h3><p class="mb-3 text-xs text-muted">Times below are explicitly UTC, regardless of profile timezone.</p>
              <UTabs v-model="agendaTab" :items="agendaTabs" :content="false" variant="link" class="mb-4 w-full" :ui="{ trigger: 'min-w-0 px-2' }" />
              <ul class="space-y-3"><li v-for="entry in agendaRows" :key="entry.id" class="space-y-2 rounded-lg bg-muted p-3"><div class="flex items-start justify-between gap-2"><div class="min-w-0"><p class="break-words text-sm font-medium">{{ entry.title }}</p><p class="mt-1 text-xs text-muted">{{ entry.time }}</p></div><UButton :icon="expandedAgenda.includes(entry.id) ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'" :aria-label="`Toggle ${entry.title} details`" :aria-expanded="expandedAgenda.includes(entry.id)" color="neutral" variant="ghost" size="xs" @click="toggleAgenda(entry.id)" /></div><UBadge :label="entry.tag" color="neutral" variant="subtle" /><p v-if="expandedAgenda.includes(entry.id)" class="text-xs text-muted">{{ entry.details }}</p></li></ul>
              <UModal v-model:open="profileOpen" title="Edit workspace profile" description="Local demonstration fields, not an authentication account.">
                <template #body><UForm :state="profileDraft" :validate="validateProfile" class="space-y-4" @submit="saveProfile"><UFormField label="Display name" name="name" required><UInput v-model="profileDraft.name" name="workspaceProfileName" class="w-full" /></UFormField><UFormField label="Email" name="email" required><UInput v-model="profileDraft.email" name="workspaceProfileEmail" class="w-full" /></UFormField><UFormField label="Timezone" name="timezone"><USelect v-model="profileDraft.timezone" :items="timezoneOptions" aria-label="Workspace profile timezone" class="w-full" /></UFormField><div class="flex justify-end gap-2"><UButton label="Cancel" aria-label="Cancel workspace profile changes" color="neutral" variant="outline" @click="profileOpen = false" /><UButton label="Save profile" aria-label="Save workspace profile changes" type="submit" /></div></UForm></template>
              </UModal>
            </UCard>
          </aside>
        </div>
      </main>
    </div>
    <BlockCopyTools page="/project-management/dashboard-1" />
  </div>
</template>
