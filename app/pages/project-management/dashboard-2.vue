<!-- Page: /project-management/dashboard-2 | Portable planning dashboard with local demo operations. -->
<script setup lang="ts">
useHead({ title: 'Dashboard 2 · Blocks Admin' })

// @copy:planning-base:start
import { computed, reactive, ref } from 'vue'
import type { FormError } from '@nuxt/ui'

function validDate(value: string) { return /^\d{4}-\d{2}-\d{2}$/.test(value) && Number.isFinite(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value }
function initials(name: string) { return name.split(' ').map(part => part[0]).slice(0, 2).join('').toUpperCase() }
// @copy:planning-base:end

// @copy:planning-data:start
const projects = ref([
  { id: 'REV-241', name: 'Revenue Insights Revamp', manager: 'Tania Brooks', lead: 'Kiara Laras', start: '2026-04-08', end: '2026-04-16' },
  { id: 'ONB-118', name: 'Enterprise Onboarding Flow', manager: 'Cameron Williamson', lead: 'Joe Tesla', start: '2026-04-10', end: '2026-04-18' },
])
const planningIssues = ref([
  { id: 'RFC-101', title: 'Finalize issue timeline architecture', project: 'REV-241', status: 'In Progress', start: '2026-04-02', end: '2026-04-10' },
  { id: 'RFC-102', title: 'Review gantt interaction states', project: 'REV-241', status: 'Todo', start: '2026-04-04', end: '2026-04-06' },
  { id: 'RFC-103', title: 'Sync issue filters with project views', project: 'REV-241', status: 'Review', start: '2026-04-08', end: '2026-04-16' },
  { id: 'RFC-104', title: 'Document timeline accessibility', project: 'ONB-118', status: 'Backlog', start: '2026-04-22', end: '2026-04-25' },
  { id: 'RFC-105', title: 'Create empty and loading timeline states', project: 'ONB-118', status: 'Todo', start: '2026-04-14', end: '2026-04-21' },
  { id: 'RFC-106', title: 'Add mock dependencies and handoff notes', project: 'ONB-118', status: 'Done', start: '2026-03-29', end: '2026-04-03' },
])
const plannedMilestones = ref([{ id: 1, name: 'Prototype handoff', date: '2026-04-20', project: 'REV-241' }])
const plannedSprints = ref([{ id: 1, name: 'Timeline sprint', start: '2026-04-13', end: '2026-04-24', project: 'REV-241' }])
const activity = ref([{ id: 3, author: 'Kiara', message: 'Updated wireframes', detail: 'Checkout flow screens moved to review', unread: true }, { id: 2, author: 'Joe', message: 'Cleared blocker', detail: 'Deployment checklist is ready', unread: true }, { id: 1, author: 'Tania', message: 'Commented on brand guide', detail: 'Logo spacing needs one final pass', unread: false }])
function addActivity(message: string, detail: string) { activity.value.unshift({ id: (activity.value[0]?.id || 0) + 1, author: 'You', message, detail, unread: true }) }
const planningStatuses = ['Backlog', 'Todo', 'In Progress', 'Review', 'Done']
const planningColors = { Backlog: 'neutral', Todo: 'info', 'In Progress': 'warning', Review: 'primary', Done: 'success' } as const
function planningColor(status: string) { return planningColors[status as keyof typeof planningColors] || 'neutral' }
// @copy:planning-data:end

// @copy:planning-actions:start
type PlanningKind = 'Issue' | 'Milestone' | 'Sprint' | 'Project'
const planningActions: { kind: PlanningKind, label: string, icon: string }[] = [{ kind: 'Issue', label: 'Create issue', icon: 'i-lucide-list-todo' }, { kind: 'Milestone', label: 'Schedule milestone', icon: 'i-lucide-flag' }, { kind: 'Sprint', label: 'Plan sprint', icon: 'i-lucide-calendar-plus' }, { kind: 'Project', label: 'Add project', icon: 'i-lucide-plus' }]
const planningOpen = ref(false)
const planningKind = ref<PlanningKind>('Issue')
const planningDraft = reactive({ name: '', project: 'REV-241', start: '2026-04-15', end: '2026-04-20' })
const projectOptions = computed(() => projects.value.map(project => ({ label: project.name, value: project.id })))
const planningFeedback = ref('Create local demonstration records. Nothing is deployed or sent to a service.')
const planningSerial = ref(109)
function openPlanning(kind: PlanningKind) { planningKind.value = kind; Object.assign(planningDraft, { name: '', project: projects.value[0]?.id || '', start: '2026-04-15', end: '2026-04-20' }); planningOpen.value = true }
function validatePlanning(state: Partial<typeof planningDraft>): FormError[] {
  const errors: FormError[] = []
  if (!state.name?.trim()) errors.push({ name: 'name', message: 'Enter a name for this record.' })
  if (!validDate(state.start || '')) errors.push({ name: 'start', message: 'Enter a valid start date.' })
  if (planningKind.value !== 'Milestone' && (!validDate(state.end || '') || (state.end || '') < (state.start || ''))) errors.push({ name: 'end', message: 'The end date must be on or after the start.' })
  if (planningKind.value !== 'Project' && !projects.value.some(project => project.id === state.project)) errors.push({ name: 'project', message: 'Select an existing demo project.' })
  return errors
}
function createPlanningRecord() {
  if (validatePlanning(planningDraft).length) return
  const id = planningSerial.value++
  const name = planningDraft.name.trim()
  if (planningKind.value === 'Issue') planningIssues.value.push({ id: `RFC-${id}`, title: name, project: planningDraft.project, status: 'Todo', start: planningDraft.start, end: planningDraft.end })
  else if (planningKind.value === 'Milestone') plannedMilestones.value.push({ id, name, date: planningDraft.start, project: planningDraft.project })
  else if (planningKind.value === 'Sprint') plannedSprints.value.push({ id, name, start: planningDraft.start, end: planningDraft.end, project: planningDraft.project })
  else projects.value.push({ id: `DEMO-${id}`, name, manager: 'You', lead: 'Unassigned', start: planningDraft.start, end: planningDraft.end })
  planningFeedback.value = `${planningKind.value} “${name}” created locally.`
  addActivity(`Created ${planningKind.value.toLowerCase()}`, name)
  planningOpen.value = false
}
// @copy:planning-actions:end

// @copy:planning-metrics:start
const planningMetrics = computed(() => [{ label: 'Total projects', value: projects.value.length }, { label: 'Total issues', value: planningIssues.value.length }, { label: 'In Progress', value: planningIssues.value.filter(issue => issue.status === 'In Progress').length }, { label: 'Completed', value: planningIssues.value.filter(issue => issue.status === 'Done').length }])
const planningStatusCounts = computed(() => planningStatuses.map(status => ({ status, count: planningIssues.value.filter(issue => issue.status === status).length })))
// @copy:planning-metrics:end

// @copy:planning-timeline:start
const issueMapRange = ref('Week')
const issueMapRanges = [{ label: 'Week', value: 'Week' }, { label: 'Month', value: 'Month' }, { label: 'Quarter', value: 'Quarter' }]
const mapWindow = computed(() => issueMapRange.value === 'Week' ? { start: '2026-04-13', end: '2026-04-19' } : issueMapRange.value === 'Month' ? { start: '2026-04-01', end: '2026-04-30' } : { start: '2026-04-01', end: '2026-06-30' })
const mappedIssues = computed(() => planningIssues.value.filter(issue => issue.end >= mapWindow.value.start && issue.start <= mapWindow.value.end))
function mapBar(issue: { start: string, end: string }) {
  const start = Date.parse(mapWindow.value.start)
  const end = Date.parse(mapWindow.value.end) + 86400000
  const left = (Math.max(start, Date.parse(issue.start)) - start) / (end - start) * 100
  const width = (Math.min(end, Date.parse(issue.end) + 86400000) - Math.max(start, Date.parse(issue.start))) / (end - start) * 100
  return { left: `${left}%`, width: `${width}%` }
}
const timelineDetailOpen = ref(false)
const timelineDetailId = ref('')
const timelineDetail = computed(() => planningIssues.value.find(issue => issue.id === timelineDetailId.value))
function openTimeline(id: string) { timelineDetailId.value = id; timelineDetailOpen.value = true }
// @copy:planning-timeline:end

// @copy:planning-projects:start
const projectSearch = ref('')
const filteredProjects = computed(() => projects.value.filter(project => `${project.id} ${project.name} ${project.manager} ${project.lead}`.toLowerCase().includes(projectSearch.value.trim().toLowerCase())))
const projectDetailOpen = ref(false)
const projectDetailId = ref('')
const selectedProject = computed(() => projects.value.find(project => project.id === projectDetailId.value))
function openProject(id: string) { projectDetailId.value = id; projectDetailOpen.value = true }
// @copy:planning-projects:end

// @copy:planning-milestones:start
const milestoneRange = ref('1 Month')
const milestoneRanges = ['1 Month', '3 Months', '6 Months', '1 Year']
const milestoneHistory = [{ label: 'Jan', target: 42, actual: 48 }, { label: 'Feb', target: 31, actual: 24 }, { label: 'Mar', target: 36, actual: 49 }, { label: 'Apr', target: 85, actual: 82 }, { label: 'May', target: 77, actual: 94 }, { label: 'Jun', target: 74, actual: 51 }, { label: 'Jul', target: 60, actual: 56 }, { label: 'Aug', target: 70, actual: 72 }, { label: 'Sep', target: 65, actual: 60 }, { label: 'Oct', target: 80, actual: 81 }, { label: 'Nov', target: 75, actual: 73 }, { label: 'Dec', target: 74, actual: 51 }]
const milestoneSamples = computed(() => milestoneHistory.slice(-(milestoneRange.value === '1 Month' ? 1 : milestoneRange.value === '3 Months' ? 3 : milestoneRange.value === '6 Months' ? 6 : 12)))
function milestoneX(index: number) { return 20 + (index + 0.5) * 320 / milestoneSamples.value.length - Math.min(18, 110 / milestoneSamples.value.length) - 1 }
const milestoneBarWidth = computed(() => Math.min(18, 110 / milestoneSamples.value.length))
// @copy:planning-milestones:end

// @copy:planning-notes:start
const notes = ref([{ id: 1, title: 'Confirm revenue review owners', description: 'Assign final reviewers for REV-241 dashboard exceptions.', done: false }, { id: 2, title: 'Prep onboarding handoff notes', description: 'Summarize open blockers before the ONB-118 team sync.', done: true }, { id: 3, title: 'Review overdue issue lanes', description: 'Check backlog spillover before updating the weekly plan.', done: true }])
const noteOpen = ref(false)
const noteDraft = reactive({ title: '', description: '' })
function openNote() { Object.assign(noteDraft, { title: '', description: '' }); noteOpen.value = true }
function validateNote(state: Partial<typeof noteDraft>): FormError[] { return state.title?.trim() ? [] : [{ name: 'title', message: 'Enter a note title.' }] }
function addNote() { if (validateNote(noteDraft).length) return; notes.value.push({ id: (notes.value.at(-1)?.id || 0) + 1, title: noteDraft.title.trim(), description: noteDraft.description.trim(), done: false }); noteOpen.value = false }
// @copy:planning-notes:end

// @copy:planning-activity:start
const activityOpen = ref(false)
const notificationsOpen = ref(false)
const unreadActivity = computed(() => activity.value.filter(entry => entry.unread).length)
function markActivityRead() { activity.value.forEach(entry => { entry.unread = false }) }
// @copy:planning-activity:end

// @copy:planning-members:start
const teamMembers = ref([{ name: 'Kiara Laras', email: 'kiara@example.com', role: 'Editor' }, { name: 'Joe Tesla', email: 'joe@example.com', role: 'Editor' }, { name: 'Tania Brooks', email: 'tania@example.com', role: 'Admin' }, { name: 'Cameron Williamson', email: 'cameron@example.com', role: 'Editor' }, { name: 'Robert Fox', email: 'robert@example.com', role: 'Viewer' }])
const memberOpen = ref(false)
const memberDraft = reactive({ name: '', email: '', role: 'Viewer' })
const memberFeedback = ref('Demo workspace members. No invitations or emails are sent.')
function openMember() { Object.assign(memberDraft, { name: '', email: '', role: 'Viewer' }); memberOpen.value = true }
function validateMember(state: Partial<typeof memberDraft>): FormError[] {
  const errors: FormError[] = []
  if (!state.name?.trim()) errors.push({ name: 'name', message: 'Enter a member name.' })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email || '')) errors.push({ name: 'email', message: 'Enter a valid example email address.' })
  else if (teamMembers.value.some(member => member.email.toLowerCase() === state.email?.trim().toLowerCase())) errors.push({ name: 'email', message: 'This email already belongs to a demo member.' })
  return errors
}
function addMember() { if (validateMember(memberDraft).length) return; teamMembers.value.push({ name: memberDraft.name.trim(), email: memberDraft.email.trim(), role: memberDraft.role }); memberFeedback.value = `${memberDraft.name.trim()} added locally. No invitation was sent.`; memberOpen.value = false }
// @copy:planning-members:end
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/dashboard-2">
    <div class="min-h-0 flex-1 overflow-y-auto bg-muted/30">
      <main class="mx-auto w-full max-w-[1600px] space-y-5 p-4 sm:p-6">
        <header class="space-y-1"><h1 class="text-2xl font-semibold text-highlighted">Planning dashboard</h1><p class="text-sm text-muted">Local project examples, with a fixed April 2026 issue map. No live project service is connected.</p></header>
        <div class="grid min-w-0 items-start gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div class="min-w-0 space-y-5">
            <section data-copy-block="project-planning-actions" tabindex="0" aria-label="Quick planning actions" class="space-y-3">
              <h2 class="text-sm font-semibold">Quick actions</h2>
              <div class="grid grid-cols-2 gap-3 lg:grid-cols-4">
                <UButton v-for="action in planningActions" :key="action.kind" :label="action.label" :aria-label="`Create demo ${action.kind.toLowerCase()}`" :icon="action.icon" color="neutral" variant="outline" class="min-h-16 justify-start whitespace-normal" :ui="{ label: 'whitespace-normal text-left' }" @click="openPlanning(action.kind)" />
              </div>
              <p class="text-xs text-muted" role="status">{{ planningFeedback }}</p>
              <ul v-if="plannedSprints.length > 1" class="text-xs text-muted"><li v-for="sprint in plannedSprints.slice(1)" :key="sprint.id">{{ sprint.name }} · {{ sprint.start }} – {{ sprint.end }}</li></ul>
            </section>
            <section data-copy-block="project-planning-metrics" tabindex="0" aria-label="Project planning totals" class="grid grid-cols-2 gap-3 lg:grid-cols-4"><UCard v-for="metric in planningMetrics" :key="metric.label"><p class="text-xs text-muted">{{ metric.label }}</p><p class="mt-2 text-2xl font-semibold text-highlighted" :data-planning-metric="metric.label">{{ metric.value }}</p></UCard></section>
            <UCard data-copy-block="project-issue-map" tabindex="0" aria-label="Time-based issue map" class="min-w-0">
              <template #header><div class="flex flex-wrap items-center justify-between gap-3"><div><h2 class="font-semibold text-highlighted">Time-Based Issue Map</h2><p class="mt-1 text-xs text-muted">{{ mapWindow.start }} – {{ mapWindow.end }} · {{ mappedIssues.length }} overlapping demo issues</p></div><UTabs v-model="issueMapRange" :items="issueMapRanges" :content="false" variant="link" :ui="{ trigger: 'px-3' }" /></div></template>
              <div class="overflow-x-auto"><div class="min-w-[640px] space-y-3"><div class="ml-36 flex justify-between text-xs text-muted"><span>{{ mapWindow.start }}</span><span>Fixed demo range</span><span>{{ mapWindow.end }}</span></div><div v-for="issue in mappedIssues" :key="issue.id" :data-issue-map-row="issue.id" class="grid grid-cols-[128px_minmax(0,1fr)] items-center gap-4"><div><p class="text-xs font-semibold">{{ issue.id }}</p><UBadge :label="issue.status" :color="planningColor(issue.status)" variant="subtle" size="sm" /></div><div class="relative h-12 rounded-lg bg-muted"><UButton :aria-label="`Open ${issue.id} timeline details`" :title="`${issue.title} · ${issue.start} – ${issue.end}`" :color="planningColor(issue.status)" variant="soft" class="absolute top-1 h-10 min-w-0 justify-start overflow-hidden px-2 text-xs" :style="mapBar(issue)" @click="openTimeline(issue.id)"><span class="truncate">{{ issue.title }}</span></UButton></div></div></div></div>
              <template #footer><p class="text-xs text-muted">Ranges clip the displayed bars to their boundaries. Use the issue buttons for full dates and details; scroll the map horizontally on small screens.</p></template>
              <UModal v-model:open="timelineDetailOpen" :title="timelineDetail?.id || 'Issue details'" description="Demonstration timeline record, not a live issue."><template #body><div v-if="timelineDetail" class="space-y-3 text-sm"><h3 class="font-medium">{{ timelineDetail.title }}</h3><p class="text-muted">{{ timelineDetail.project }} · {{ timelineDetail.status }}</p><p>{{ timelineDetail.start }} – {{ timelineDetail.end }}</p></div></template><template #footer><UButton label="Close" aria-label="Close timeline issue details" color="neutral" variant="outline" @click="timelineDetailOpen = false" /></template></UModal>
            </UCard>
            <section data-copy-block="project-current-projects" tabindex="0" aria-label="Current demo projects" class="min-w-0 space-y-4">
              <div class="flex flex-wrap items-center justify-between gap-3"><h2 class="font-semibold text-highlighted">Current Projects</h2><UButton label="New project" aria-label="Add current demo project" icon="i-lucide-plus" @click="openPlanning('Project')" /></div><UInput v-model="projectSearch" aria-label="Search current projects" placeholder="Search projects…" icon="i-lucide-search" class="w-full" />
              <div class="grid gap-4 md:grid-cols-2"><UCard v-for="project in filteredProjects" :key="project.id" :data-planning-project="project.id" class="min-w-0"><template #header><div class="flex items-center justify-between gap-2"><p class="text-sm font-semibold">{{ project.id }}</p><UButton label="See details" :aria-label="`Open ${project.id} project details`" color="neutral" variant="outline" size="xs" @click="openProject(project.id)" /></div></template><h3 class="break-words font-semibold text-highlighted">{{ project.name }}</h3><dl class="mt-4 space-y-3 text-sm"><div><dt class="text-xs text-muted">Project Manager</dt><dd>{{ project.manager }}</dd></div><div><dt class="text-xs text-muted">Team Lead</dt><dd>{{ project.lead }}</dd></div><div><dt class="text-xs text-muted">Timeline</dt><dd>{{ project.start }} – {{ project.end }}</dd></div></dl></UCard></div><p v-if="!filteredProjects.length" class="text-sm text-muted" role="status">No projects match your search.</p>
              <UModal v-model:open="projectDetailOpen" :title="selectedProject?.name || 'Project details'" description="Local demo project details."><template #body><div v-if="selectedProject" class="space-y-3 text-sm"><p>{{ selectedProject.id }}</p><p>Manager: {{ selectedProject.manager }}</p><p>Lead: {{ selectedProject.lead }}</p><p>{{ selectedProject.start }} – {{ selectedProject.end }}</p><p class="text-muted">{{ planningIssues.filter(issue => issue.project === selectedProject?.id).length }} demonstration issues linked to this project.</p></div></template><template #footer><UButton label="Close" aria-label="Close current project details" color="neutral" variant="outline" @click="projectDetailOpen = false" /></template></UModal>
            </section>
            <div class="grid min-w-0 gap-5 lg:grid-cols-2">
              <UCard data-copy-block="project-milestone-tracker" tabindex="0" aria-label="Milestone tracker" class="min-w-0"><template #header><h2 class="font-semibold text-highlighted">Milestone Tracker</h2><p class="mt-1 text-xs text-muted">Fixed target/actual sample history for 2025, separate from planned demo milestones.</p></template><USelect v-model="milestoneRange" :items="milestoneRanges" aria-label="Milestone history range" class="mb-4 w-full" /><svg viewBox="0 0 360 200" role="img" :aria-label="`Milestone history: ${milestoneSamples.map(sample => `${sample.label} target ${sample.target}, actual ${sample.actual}`).join('; ')}`" class="block w-full"><line v-for="y in [30, 90, 150]" :key="y" x1="20" x2="340" :y1="y" :y2="y" stroke="var(--ui-border)" /><g v-for="(sample, index) in milestoneSamples" :key="sample.label"><rect :x="milestoneX(index)" :y="150 - sample.target * 1.2" :width="milestoneBarWidth" :height="sample.target * 1.2" rx="2" fill="var(--ui-text-dimmed)" /><rect :x="milestoneX(index) + milestoneBarWidth + 2" :y="150 - sample.actual * 1.2" :width="milestoneBarWidth" :height="sample.actual * 1.2" rx="2" fill="var(--ui-primary)" /><text :x="milestoneX(index) + milestoneBarWidth" y="175" text-anchor="middle" fill="var(--ui-text-muted)" font-size="9">{{ sample.label }}</text></g></svg><p class="mb-4 text-xs text-muted">Dimmed: target · Primary: actual</p><ul class="space-y-2 text-xs text-muted" aria-label="Planned demonstration milestones"><li v-for="milestone in plannedMilestones" :key="milestone.id">{{ milestone.name }} · {{ milestone.project }} · {{ milestone.date }}</li></ul></UCard>
              <UCard data-copy-block="project-planning-notes" tabindex="0" aria-label="Local planning notes" class="min-w-0"><template #header><div class="flex items-center justify-between gap-3"><h2 class="font-semibold text-highlighted">Notes</h2><UButton label="Add note" aria-label="Add planning note" icon="i-lucide-plus" color="neutral" variant="outline" size="xs" @click="openNote" /></div></template><ul class="space-y-4"><li v-for="note in notes" :key="note.id" :data-planning-note="note.id"><UCheckbox v-model="note.done" :label="note.title" :aria-label="`Complete note ${note.id}`" /><p class="mt-1 pl-6 text-xs text-muted">{{ note.description }}</p></li></ul><p class="mt-5 text-xs text-muted" role="status">{{ notes.filter(note => note.done).length }} of {{ notes.length }} notes complete · Stored in memory only.</p><UModal v-model:open="noteOpen" title="Add local note" description="Store an example note in this component only."><template #body><UForm :state="noteDraft" :validate="validateNote" class="space-y-4" @submit="addNote"><UFormField label="Title" name="title" required><UInput v-model="noteDraft.title" name="planningNoteTitle" class="w-full" /></UFormField><UFormField label="Description" name="description"><UTextarea v-model="noteDraft.description" name="planningNoteDescription" class="w-full" /></UFormField><div class="flex justify-end gap-2"><UButton label="Cancel" aria-label="Cancel planning note" color="neutral" variant="outline" @click="noteOpen = false" /><UButton label="Add note" aria-label="Save planning note" type="submit" /></div></UForm></template></UModal></UCard>
            </div>
          </div>
          <aside class="min-w-0 space-y-5">
            <UCard data-copy-block="project-planning-activity" tabindex="0" aria-label="Planning activity log"><template #header><h2 class="font-semibold text-highlighted">Activity</h2><p class="mt-1 text-xs text-muted">Example activity and changes made locally.</p></template><ul class="space-y-5"><li v-for="entry in activity.slice(0, 3)" :key="entry.id" class="flex gap-3"><span class="grid size-8 shrink-0 place-items-center rounded-full bg-muted text-xs">{{ initials(entry.author) }}</span><div class="min-w-0"><p class="break-words text-sm font-medium">{{ entry.author }} · {{ entry.message }}</p><p class="mt-1 break-words text-xs text-muted">{{ entry.detail }}</p></div></li></ul><div class="mt-5 flex flex-wrap gap-2"><UButton label="Open activity log" aria-label="Open planning activity log" color="neutral" variant="outline" size="xs" @click="activityOpen = true" /><UButton :label="`Notifications (${unreadActivity})`" aria-label="Open planning notifications" color="neutral" variant="outline" size="xs" @click="notificationsOpen = true" /></div><UModal v-model:open="activityOpen" title="Planning activity log" description="All local example activity records."><template #body><ul class="space-y-4"><li v-for="entry in activity" :key="entry.id" class="text-sm"><p>{{ entry.author }} · {{ entry.message }}</p><p class="text-muted">{{ entry.detail }}</p></li></ul></template><template #footer><UButton label="Close" aria-label="Close planning activity log" color="neutral" variant="outline" @click="activityOpen = false" /></template></UModal><UModal v-model:open="notificationsOpen" title="Demo notifications" description="Unread local activity, not notifications from a server."><template #body><ul v-if="unreadActivity" class="space-y-3"><li v-for="entry in activity.filter(entry => entry.unread)" :key="entry.id" class="text-sm">{{ entry.author }} · {{ entry.message }}</li></ul><p v-else class="text-sm text-muted">No unread demo notifications.</p></template><template #footer><div class="flex gap-2"><UButton label="Mark all read" aria-label="Mark planning notifications read" :disabled="!unreadActivity" @click="markActivityRead" /><UButton label="Close" aria-label="Close planning notifications" color="neutral" variant="outline" @click="notificationsOpen = false" /></div></template></UModal></UCard>
            <UCard data-copy-block="project-planning-members" tabindex="0" aria-label="Demo project members"><template #header><div class="flex items-center justify-between gap-3"><h2 class="font-semibold text-highlighted">Members</h2><UBadge :label="String(teamMembers.length)" color="neutral" variant="subtle" /></div></template><ul class="space-y-3"><li v-for="member in teamMembers" :key="member.email" class="flex items-center gap-3"><span class="grid size-8 shrink-0 place-items-center rounded-full bg-muted text-xs">{{ initials(member.name) }}</span><div class="min-w-0"><p class="break-words text-sm">{{ member.name }}</p><p class="text-xs text-muted">{{ member.role }}</p></div></li></ul><UButton label="Add demo member" aria-label="Add planning demo member" icon="i-lucide-users" class="mt-5" color="neutral" variant="outline" @click="openMember" /><p class="mt-3 text-xs text-muted" role="status">{{ memberFeedback }}</p><UModal v-model:open="memberOpen" title="Add demo member" description="Simulate a workspace invitation locally. No email is sent."><template #body><UForm :state="memberDraft" :validate="validateMember" class="space-y-4" @submit="addMember"><UFormField label="Name" name="name" required><UInput v-model="memberDraft.name" name="planningMemberName" class="w-full" /></UFormField><UFormField label="Email" name="email" required><UInput v-model="memberDraft.email" name="planningMemberEmail" class="w-full" /></UFormField><UFormField label="Role" name="role"><USelect v-model="memberDraft.role" :items="['Viewer', 'Editor', 'Admin']" aria-label="Demo member role" class="w-full" /></UFormField><div class="flex justify-end gap-2"><UButton label="Cancel" aria-label="Cancel demo member" color="neutral" variant="outline" @click="memberOpen = false" /><UButton label="Add locally" aria-label="Save demo member" type="submit" /></div></UForm></template></UModal></UCard>
            <UCard data-copy-block="project-planning-status" tabindex="0" aria-label="Planning issue status"><template #header><h2 class="font-semibold text-highlighted">Issue Status</h2><p class="mt-1 text-xs text-muted">{{ planningIssues.length }} issues across the example projects.</p></template><ul class="space-y-4"><li v-for="entry in planningStatusCounts" :key="entry.status"><div class="mb-2 flex justify-between gap-3 text-sm"><span>{{ entry.status }}</span><span class="text-muted">{{ entry.count }}</span></div><UProgress :model-value="planningIssues.length ? entry.count / planningIssues.length * 100 : 0" :color="planningColor(entry.status)" :aria-label="`${entry.status} share of demo issues`" /></li></ul></UCard>
          </aside>
        </div>
        <UModal data-copy-fragment="planning-dialog" v-model:open="planningOpen" :title="`Create demo ${planningKind.toLowerCase()}`" description="Create an in-memory record. No project service is contacted."><template #body><UForm :state="planningDraft" :validate="validatePlanning" class="space-y-4" @submit="createPlanningRecord"><UFormField label="Name" name="name" required><UInput v-model="planningDraft.name" name="planningRecordName" class="w-full" /></UFormField><UFormField v-if="planningKind !== 'Project'" label="Project" name="project"><USelect v-model="planningDraft.project" :items="projectOptions" aria-label="Planning record project" class="w-full" /></UFormField><UFormField :label="planningKind === 'Milestone' ? 'Date' : 'Start date'" name="start" required><UInput v-model="planningDraft.start" type="date" aria-label="Planning record start" class="w-full" /></UFormField><UFormField v-if="planningKind !== 'Milestone'" label="End date" name="end" required><UInput v-model="planningDraft.end" type="date" aria-label="Planning record end" class="w-full" /></UFormField><div class="flex justify-end gap-2"><UButton label="Cancel" aria-label="Cancel planning record" color="neutral" variant="outline" @click="planningOpen = false" /><UButton label="Create locally" aria-label="Save planning record" type="submit" /></div></UForm></template></UModal>
      </main>
    </div>
    <BlockCopyTools page="/project-management/dashboard-2" />
  </div>
</template>
