<!-- Page: /project-management/dashboard-3 | Independent, local command-center examples. -->
<script setup lang="ts">
useHead({ title: 'Dashboard 3 · Blocks Admin' })

// @copy:command-vue:start
import { computed, reactive, ref, useId } from 'vue'
// @copy:command-vue:end

// @copy:command-portfolio:start
const commandProjects = [
  { id: 'SHD-001', name: 'Shadcnblocks', status: 'On Track', budget: 5000000, spent: 3000000, manager: 'Kiara Laras', lead: 'Joe Tesla', members: ['Kiara Laras', 'Joe Tesla', 'Tania Brooks', 'Ben Lewis'] },
  { id: 'REV-241', name: 'Revenue dashboard v2', status: 'On Track', budget: 2800000, spent: 1500000, manager: 'Ava Reed', lead: 'Tania Brooks', members: ['Ava Reed', 'Tania Brooks', 'Maya Rao'] },
  { id: 'ONB-118', name: 'Onboarding flow launch', status: 'At Risk', budget: 3300000, spent: 2200000, manager: 'Kiara Laras', lead: 'Riya Sharma', members: ['Kiara Laras', 'Riya Sharma', 'Cameron Williamson'] },
  { id: 'API-092', name: 'Public API v1', status: 'Off Track', budget: 3000000, spent: 2000000, manager: 'Ben Lewis', lead: 'Joe Tesla', members: ['Ben Lewis', 'Joe Tesla'] },
]
const commandSearch = ref('')
const commandMatches = computed(() => commandProjects.filter(project => `${project.name} ${project.id} ${project.manager}`.toLowerCase().includes(commandSearch.value.trim().toLowerCase())))
const commandSelectedId = ref('SHD-001')
const commandSelected = computed(() => commandProjects.find(project => project.id === commandSelectedId.value)!)
const commandBudget = computed(() => commandProjects.reduce((sum, project) => sum + project.budget, 0))
const commandSpent = computed(() => commandProjects.reduce((sum, project) => sum + project.spent, 0))
const commandBurn = computed(() => Math.round(commandSpent.value / commandBudget.value * 100))
const commandCounts = computed(() => ['On Track', 'At Risk', 'Off Track'].map(status => ({ status, count: commandProjects.filter(project => project.status === status).length })))
const commandProjectColor = (status: string) => status === 'On Track' ? 'success' as const : status === 'At Risk' ? 'warning' as const : 'error' as const
const commandMoney = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)
const commandDirectoryOpen = ref(false)
const commandRefreshCount = ref(0)
const commandNotice = ref('')
function refreshCommandSummary() { commandRefreshCount.value++; commandNotice.value = `Local summary recalculated (${commandRefreshCount.value}). The fixed May 11, 2026 snapshot is unchanged; no server was contacted.` }
function selectCommandProject(id: string) { commandSelectedId.value = id; commandDirectoryOpen.value = false; commandNotice.value = `Selected ${commandSelected.value.name}.` }
// @copy:command-portfolio:end

// @copy:command-sprint:start
const commandSprint = ref('current')
const commandSprintSamples = {
  current: { label: 'May 4–10, 2026', completed: [8, 12, 17, 20, 25, 29, 32], scope: [24, 32, 36, 40, 43, 45, 47] },
  previous: { label: 'Apr 27–May 3, 2026', completed: [6, 14, 20, 27, 32, 38, 40], scope: [36, 36, 38, 40, 42, 44, 44] },
}
const commandSprintData = computed(() => commandSprintSamples[commandSprint.value as keyof typeof commandSprintSamples])
const commandSprintDone = computed(() => commandSprintData.value.completed.at(-1)!)
const commandSprintScope = computed(() => commandSprintData.value.scope.at(-1)!)
const commandSprintPercent = computed(() => Math.round(commandSprintDone.value / commandSprintScope.value * 100))
const commandDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const commandSprintRows = computed(() => commandDays.map((day, index) => ({ day, completed: commandSprintData.value.completed[index]!, scope: commandSprintData.value.scope[index]! })))
const commandSprintPoints = computed(() => commandSprintRows.value.map((row, index) => `${40 + index * 45},${170 - row.scope * 3}`).join(' '))
// @copy:command-sprint:end

// @copy:command-budget:start
const commandFiscalYear = ref('FY2026')
const commandBudgetSamples = {
  FY2026: { budget: 14100000, actual: [0, 2700000, 4800000, 6900000, 8700000], forecast: [8700000, 10600000, 12600000, 13700000, 13900000] },
  FY2025: { budget: 12000000, actual: [0, 2100000, 3900000, 5600000, 7200000], forecast: [7200000, 8500000, 9800000, 10800000, 11400000] },
}
const commandBudgetData = computed(() => commandBudgetSamples[commandFiscalYear.value as keyof typeof commandBudgetSamples])
const commandBudgetActual = computed(() => commandBudgetData.value.actual.at(-1)!)
const commandBudgetPercent = computed(() => Math.round(commandBudgetActual.value / commandBudgetData.value.budget * 100))
const commandBudgetForecast = computed(() => commandBudgetData.value.forecast.at(-1)!)
const commandBudgetMoney = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)
const commandMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
const commandBudgetRows = computed(() => commandMonths.map((month, index) => ({ month, amount: index < 5 ? commandBudgetData.value.actual[index]! : commandBudgetData.value.forecast[index - 4]!, type: index < 5 ? 'Actual' : 'Forecast' })))
const commandBudgetY = (value: number) => 170 - value / 16000000 * 150
const commandBudgetActualPoints = computed(() => commandBudgetData.value.actual.map((value, index) => `${45 + index * 38},${commandBudgetY(value)}`).join(' '))
const commandBudgetForecastPoints = computed(() => commandBudgetData.value.forecast.map((value, index) => `${197 + index * 38},${commandBudgetY(value)}`).join(' '))
// @copy:command-budget:end

// @copy:command-milestones:start
const commandMilestones = ref([
  { id: 'REV-241', title: 'Revenue dashboard v2', due: '2026-05-14', status: 'On Track', owner: 'Ava Reed', detail: 'Validate revenue rollups and publish the new summary widgets.' },
  { id: 'ONB-118', title: 'Onboarding flow launch', due: '2026-05-21', status: 'At Risk', owner: 'Kiara Laras', detail: 'Finish keyboard validation and resolve the invite-step blocker.' },
  { id: 'MBL-304', title: 'Mobile app beta', due: '2026-05-28', status: 'On Track', owner: 'Tania Brooks', detail: 'Complete the device matrix before the internal beta handoff.' },
  { id: 'API-092', title: 'Public API v1', due: '2026-06-04', status: 'At Risk', owner: 'Ben Lewis', detail: 'Review rate limits and confirm the migration guide.' },
  { id: 'INF-072', title: 'Infrastructure audit', due: '2026-06-11', status: 'On Track', owner: 'Ben Lewis', detail: 'Document recovery procedures and run a local audit rehearsal.' },
])
const commandMilestoneStatus = ref('All statuses')
const commandAllMilestones = ref(false)
const commandMilestoneMatches = computed(() => commandMilestones.value.filter(item => commandMilestoneStatus.value === 'All statuses' || item.status === commandMilestoneStatus.value).sort((a, b) => a.due.localeCompare(b.due)))
const commandShownMilestones = computed(() => commandAllMilestones.value ? commandMilestoneMatches.value : commandMilestoneMatches.value.slice(0, 3))
const commandMilestoneOpen = ref(false)
const commandMilestoneId = ref('')
const commandMilestoneDraft = ref('On Track')
const commandMilestoneSelected = computed(() => commandMilestones.value.find(item => item.id === commandMilestoneId.value))
const commandMilestoneNotice = ref('')
const commandMilestoneFormId = useId()
function editCommandMilestone(id: string) { commandMilestoneId.value = id; commandMilestoneDraft.value = commandMilestoneSelected.value!.status; commandMilestoneOpen.value = true }
function saveCommandMilestone() { if (!commandMilestoneSelected.value || !['On Track', 'At Risk', 'Completed'].includes(commandMilestoneDraft.value)) return; commandMilestoneSelected.value.status = commandMilestoneDraft.value; commandMilestoneNotice.value = `${commandMilestoneSelected.value.id} status updated locally. Other blocks use their own snapshots.`; commandMilestoneOpen.value = false }
const commandMilestoneDate = (value: string) => new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(value + 'T00:00:00Z'))
// @copy:command-milestones:end

// @copy:command-team:start
type CommandMember = { id: number, name: string, email: string, status: string, detail: string }
const commandMembers = ref<CommandMember[]>([
  { id: 1, name: 'Cameron Williamson', email: 'cameron@example.com', status: 'Absent', detail: 'Replaced by Kiara Laras' },
  { id: 2, name: 'Maya Rao', email: 'maya@example.com', status: 'Absent', detail: 'Coverage by Ava Reed' },
  { id: 3, name: 'Tania Brooks', email: 'tania@example.com', status: 'Away', detail: 'Synergy · 25 min at snapshot' },
  { id: 4, name: 'Riya Sharma', email: 'riya@example.com', status: 'Away', detail: 'Discovery · 18 min at snapshot' },
  { id: 5, name: 'Joe Tesla', email: 'joe@example.com', status: 'Away', detail: 'Apex · 12 min at snapshot' },
  { id: 6, name: 'Ava Reed', email: 'ava@example.com', status: 'Away', detail: 'Console · 10 min at snapshot' },
  { id: 7, name: 'Kiara Laras', email: 'kiara@example.com', status: 'Available', detail: 'Pulse' },
  { id: 8, name: 'Ben Lewis', email: 'ben@example.com', status: 'Available', detail: 'Infrastructure' },
])
const commandMemberStatus = ref('All statuses')
const commandMemberMatches = computed(() => commandMembers.value.filter(member => commandMemberStatus.value === 'All statuses' || member.status === commandMemberStatus.value))
const commandInviteOpen = ref(false)
const commandInviteDraft = reactive({ name: '', email: '' })
const commandInviteError = ref('')
const commandInviteNotice = ref('')
const commandInviteFormId = useId()
let commandNextMemberId = 9
function openCommandInvite() { Object.assign(commandInviteDraft, { name: '', email: '' }); commandInviteError.value = ''; commandInviteOpen.value = true }
function saveCommandInvite() {
  const name = commandInviteDraft.name.trim(), email = commandInviteDraft.email.trim().toLowerCase()
  if (!name || name.length > 100) { commandInviteError.value = 'Enter a name between 1 and 100 characters.'; return }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) { commandInviteError.value = 'Enter a valid example email.'; return }
  if (commandMembers.value.some(member => member.email.toLowerCase() === email)) { commandInviteError.value = 'This example email is already in the team.'; return }
  commandMembers.value.push({ id: commandNextMemberId++, name, email, status: 'Invited', detail: 'Local invitation preview, not delivered' })
  commandInviteNotice.value = `Invitation preview created for ${name}; no email was sent.`; commandMemberStatus.value = 'All statuses'; commandInviteOpen.value = false
}
// @copy:command-team:end

// @copy:command-activity:start
const commandActivity = ref([
  { id: 'RFC-112', title: 'Commented on RFC-112', detail: 'Filters API performance improvements: review caching and query plans.', time: '2026-05-11T09:50:00Z', unread: true },
  { id: 'RFC-126', title: 'Moved RFC-126 to Review', detail: 'Export module CSV support is ready for peer review.', time: '2026-05-11T09:00:00Z', unread: true },
  { id: 'RFC-101', title: 'Closed RFC-101', detail: 'Timeline engine refactor passed the local validation suite.', time: '2026-05-11T08:00:00Z', unread: false },
  { id: 'ONB-118', title: 'Updated ONB-118', detail: 'Onboarding stepper UI tweaks need keyboard testing.', time: '2026-05-11T07:00:00Z', unread: false },
  { id: 'REV-241', title: 'Reviewed REV-241', detail: 'Revenue aggregation sample approved for the next milestone.', time: '2026-05-10T16:00:00Z', unread: false },
])
const commandActivityFilter = ref('All activity')
const commandAllActivity = ref(false)
const commandActivityUnread = computed(() => commandActivity.value.filter(item => item.unread).length)
const commandActivityMatches = computed(() => commandActivity.value.filter(item => commandActivityFilter.value === 'All activity' || item.unread))
const commandActivityShown = computed(() => commandAllActivity.value ? commandActivityMatches.value : commandActivityMatches.value.slice(0, 3))
const commandActivitySelectedId = ref('')
const commandActivitySelected = computed(() => commandActivity.value.find(item => item.id === commandActivitySelectedId.value))
const commandActivityOpen = ref(false)
const commandActivityNotice = ref('')
function openCommandActivity(id: string) { commandActivitySelectedId.value = id; commandActivityOpen.value = true }
function readCommandActivity() { if (commandActivitySelected.value) commandActivitySelected.value.unread = false; commandActivityOpen.value = false; commandActivityNotice.value = 'Marked as read locally.' }
const commandActivityDate = (value: string) => new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'UTC' }).format(new Date(value))
// @copy:command-activity:end

// @copy:command-throughput:start
const commandThroughputWeeks = [
  { week: 'Mar 23', planned: 20, completed: 18 }, { week: 'Mar 30', planned: 24, completed: 22 },
  { week: 'Apr 6', planned: 18, completed: 16 }, { week: 'Apr 13', planned: 28, completed: 24 },
  { week: 'Apr 20', planned: 30, completed: 27 }, { week: 'Apr 27', planned: 26, completed: 25 },
  { week: 'May 4', planned: 32, completed: 28 }, { week: 'May 11', planned: 30, completed: 20 },
]
const commandThroughputRange = ref('4')
const commandThroughputData = computed(() => commandThroughputWeeks.slice(-Number(commandThroughputRange.value)))
const commandThroughputPlanned = computed(() => commandThroughputData.value.reduce((sum, week) => sum + week.planned, 0))
const commandThroughputDone = computed(() => commandThroughputData.value.reduce((sum, week) => sum + week.completed, 0))
const commandThroughputPercent = computed(() => Math.round(commandThroughputDone.value / commandThroughputPlanned.value * 100))
// @copy:command-throughput:end
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/dashboard-3">
    <div class="min-h-0 flex-1 overflow-y-auto bg-muted/30"><main class="mx-auto max-w-7xl space-y-5 p-4 sm:p-6 lg:p-8">
      <section data-copy-block="command-portfolio" tabindex="0" aria-label="Portfolio health and current project" class="space-y-4">
        <header class="flex flex-wrap items-start justify-between gap-3"><div><h1 class="text-2xl font-semibold text-highlighted">Command Center</h1><p class="mt-1 text-sm text-muted">Local example snapshots · May 11, 2026, 10:00 UTC. No live project or presence service.</p></div><UButton label="Refresh local summary" aria-label="Refresh command summary" icon="i-lucide-refresh-cw" color="neutral" variant="outline" @click="refreshCommandSummary" /></header>
        <UCard><dl data-command-summary class="grid gap-4 sm:grid-cols-2 lg:grid-cols-6"><div><dt class="text-xs text-muted">Portfolio health</dt><dd class="mt-1 font-semibold text-warning">Needs attention</dd><p class="mt-1 text-xs text-muted">At-risk or off-track samples</p></div><div><dt class="text-xs text-muted">Projects</dt><dd class="mt-1 text-xl font-semibold">{{ commandProjects.length }}</dd><p class="text-xs text-muted">Example portfolio only</p></div><div v-for="item in commandCounts" :key="item.status"><dt class="text-xs text-muted">{{ item.status }}</dt><dd class="mt-1 text-xl font-semibold">{{ item.count }}</dd><p class="text-xs text-muted">{{ Math.round(item.count / commandProjects.length * 100) }}%</p></div><div><dt class="text-xs text-muted">Budget burn</dt><dd class="mt-1 text-xl font-semibold">{{ commandBurn }}%</dd><p class="mt-1 text-xs text-muted">{{ commandMoney(commandSpent) }} / {{ commandMoney(commandBudget) }} USD</p></div></dl></UCard>
        <UCard><template #header><div class="flex flex-wrap items-center justify-between gap-2"><h2 class="font-semibold text-highlighted">Current project</h2><UButton label="Browse projects" aria-label="Browse command projects" color="neutral" variant="outline" @click="commandDirectoryOpen = true" /></div></template><div class="space-y-4"><UFormField label="Selected project"><USelect v-model="commandSelectedId" :items="commandProjects.map(project => ({ label: project.name, value: project.id }))" aria-label="Command selected project" class="w-full sm:max-w-sm" /></UFormField><div data-command-selected class="space-y-3"><div class="flex flex-wrap items-center gap-2"><h3 class="font-semibold">{{ commandSelected.name }}</h3><UBadge :label="commandSelected.status" :color="commandProjectColor(commandSelected.status)" variant="subtle" /></div><dl class="grid gap-4 text-sm sm:grid-cols-3"><div><dt class="text-xs text-muted">Project manager</dt><dd>{{ commandSelected.manager }}</dd></div><div><dt class="text-xs text-muted">Design lead</dt><dd>{{ commandSelected.lead }}</dd></div><div><dt class="text-xs text-muted">Spent / budget (USD)</dt><dd>{{ commandMoney(commandSelected.spent) }} / {{ commandMoney(commandSelected.budget) }}</dd></div></dl><p class="text-sm text-muted">{{ commandSelected.members.length }} members: {{ commandSelected.members.join(', ') }}.</p></div></div></UCard>
        <p v-if="commandNotice" role="status" class="text-sm text-muted">{{ commandNotice }}</p>
        <UModal v-model:open="commandDirectoryOpen" title="Browse example projects" description="Search by name, project ID or manager. Selecting a row changes the current-project card only."><template #body><UFormField label="Search projects"><UInput v-model="commandSearch" name="commandProjectSearch" type="search" icon="i-lucide-search" class="w-full" /></UFormField><p data-command-project-count class="my-3 text-sm text-muted" aria-live="polite">{{ commandMatches.length }} of {{ commandProjects.length }} projects match.</p><ul class="space-y-3"><li v-for="project in commandMatches" :key="project.id" class="rounded-lg border border-default p-3"><h3 class="font-semibold">{{ project.name }}</h3><p class="my-2 text-sm text-muted">{{ project.id }} · {{ project.manager }} · {{ project.status }}</p><UButton label="Select project" :aria-label="`Select command project ${project.id}`" color="neutral" variant="outline" @click="selectCommandProject(project.id)" /></li></ul><p v-if="!commandMatches.length" class="text-sm text-muted">No projects match this search.</p></template><template #footer><UButton label="Close" aria-label="Close command project browser" @click="commandDirectoryOpen = false" /></template></UModal>
      </section>

      <div class="grid min-w-0 gap-5 lg:grid-cols-2">
        <section data-copy-block="command-sprint" tabindex="0" aria-label="Sprint point progress" class="min-w-0"><UCard class="h-full"><template #header><h2 class="font-semibold text-highlighted">Sprint health</h2><p class="mt-1 text-xs text-muted">Cumulative story points, not issue counts.</p></template><UFormField label="Sprint"><USelect v-model="commandSprint" :items="[{ label: 'This sprint', value: 'current' }, { label: 'Previous sprint', value: 'previous' }]" aria-label="Command sprint period" class="w-full" /></UFormField><p data-command-sprint-total class="my-4 text-sm">{{ commandSprintDone }} / {{ commandSprintScope }} points · {{ commandSprintPercent }}% · {{ commandSprintData.label }} UTC.</p><figure><svg viewBox="0 0 350 210" role="img" aria-label="Cumulative completed bars and scope line, in story points" class="block w-full"><title>Sprint health in story points</title><g v-for="tick in [0, 25, 50]" :key="tick"><line x1="25" x2="330" :y1="170 - tick * 3" :y2="170 - tick * 3" stroke="var(--ui-border)" /><text x="20" :y="174 - tick * 3" text-anchor="end" fill="var(--ui-text-muted)" font-size="10">{{ tick }}</text></g><g v-for="(row, index) in commandSprintRows" :key="row.day"><rect :x="30 + index * 45" :y="170 - row.completed * 3" width="20" :height="row.completed * 3" rx="3" fill="var(--ui-primary)" /><text :x="40 + index * 45" y="190" text-anchor="middle" fill="var(--ui-text-muted)" font-size="10">{{ row.day }}</text></g><polyline :points="commandSprintPoints" fill="none" stroke="var(--ui-text-highlighted)" stroke-width="2" stroke-dasharray="4 3" /></svg><figcaption class="text-xs text-muted">Solid bars: completed · dashed line: scope. Scope changes during the sprint.</figcaption></figure><details class="mt-4 text-sm"><summary class="cursor-pointer">View daily point data</summary><div class="mt-2 overflow-x-auto"><table class="w-full text-left text-xs"><caption class="sr-only">Cumulative sprint points</caption><thead><tr><th scope="col" class="p-2">Day</th><th scope="col" class="p-2">Completed</th><th scope="col" class="p-2">Scope</th></tr></thead><tbody><tr v-for="row in commandSprintRows" :key="row.day"><th scope="row" class="p-2">{{ row.day }}</th><td class="p-2">{{ row.completed }}</td><td class="p-2">{{ row.scope }}</td></tr></tbody></table></div></details></UCard></section>

        <section data-copy-block="command-budget" tabindex="0" aria-label="Budget actual and forecast" class="min-w-0">
          <UCard class="h-full">
            <template #header><h2 class="font-semibold text-highlighted">Budget Burn</h2><p class="mt-1 text-xs text-muted">Jan–May actual (May is month-to-date); Jun–Sep forecast, not recorded spend.</p></template>
            <UFormField label="Fiscal year"><USelect v-model="commandFiscalYear" :items="['FY2026', 'FY2025']" aria-label="Command fiscal year" class="w-full" /></UFormField>
            <p data-command-budget-total class="my-4 text-sm">{{ commandBudgetMoney(commandBudgetActual) }} / {{ commandBudgetMoney(commandBudgetData.budget) }} USD · {{ commandBudgetPercent }}% at the May 11 sample ({{ commandFiscalYear }}).</p>
            <figure>
              <svg viewBox="0 0 380 210" role="img" aria-label="Actual and forecast cumulative spend in millions of US dollars" class="block w-full">
                <title>Budget actual and forecast, millions USD</title>
                <g v-for="tick in [0, 8, 16]" :key="tick"><line x1="45" x2="350" :y1="commandBudgetY(tick * 1000000)" :y2="commandBudgetY(tick * 1000000)" stroke="var(--ui-border)" /><text x="40" :y="commandBudgetY(tick * 1000000) + 4" text-anchor="end" fill="var(--ui-text-muted)" font-size="10">${{ tick }}M</text></g>
                <polyline :points="commandBudgetActualPoints" fill="none" stroke="var(--ui-primary)" stroke-width="3" />
                <polyline :points="commandBudgetForecastPoints" fill="none" stroke="var(--ui-text-highlighted)" stroke-width="2" stroke-dasharray="4 3" />
                <g v-for="(row, index) in commandBudgetRows" :key="row.month"><text :x="45 + index * 38" y="190" text-anchor="middle" fill="var(--ui-text-muted)" font-size="10">{{ row.month }}</text></g>
              </svg>
              <figcaption class="text-xs text-muted">Solid: actual · dashed: forecast. September forecast: {{ commandBudgetMoney(commandBudgetForecast) }} USD.</figcaption>
            </figure>
            <details class="mt-4 text-sm"><summary class="cursor-pointer">View monthly budget data</summary><div class="mt-2 overflow-x-auto"><table class="w-full text-left text-xs"><caption class="sr-only">Budget actual and forecast USD</caption><thead><tr><th scope="col" class="p-2">Month</th><th scope="col" class="p-2">Type</th><th scope="col" class="p-2">USD</th></tr></thead><tbody><tr v-for="row in commandBudgetRows" :key="row.month"><th scope="row" class="p-2">{{ row.month }}</th><td class="p-2">{{ row.type }}</td><td class="p-2">{{ commandBudgetMoney(row.amount) }}</td></tr></tbody></table></div></details>
          </UCard>
        </section>
      </div>

      <div class="grid min-w-0 items-start gap-5 xl:grid-cols-3">
        <section data-copy-block="command-milestones" tabindex="0" aria-label="Local upcoming milestone tracker" class="min-w-0"><UCard><template #header><h2 class="font-semibold text-highlighted">Upcoming milestones</h2><p class="mt-1 text-xs text-muted">Snapshot May 11, 2026 · local status edits only.</p></template><UFormField label="Milestone status"><USelect v-model="commandMilestoneStatus" :items="['All statuses', 'On Track', 'At Risk', 'Completed']" aria-label="Command milestone status" class="w-full" /></UFormField><p data-command-milestone-count class="my-3 text-sm text-muted" aria-live="polite">{{ commandShownMilestones.length }} shown · {{ commandMilestoneMatches.length }} matching of {{ commandMilestones.length }} samples.</p><ul class="space-y-3"><li v-for="item in commandShownMilestones" :key="item.id" :data-command-milestone="item.id" class="space-y-2 rounded-lg border border-default p-3"><h3 class="font-medium">{{ item.title }}</h3><p class="text-xs text-muted">{{ item.id }} · {{ commandMilestoneDate(item.due) }} UTC</p><div class="flex flex-wrap items-center justify-between gap-2"><UBadge :label="item.status" :color="item.status === 'At Risk' ? 'warning' : 'success'" variant="subtle" /><UButton label="Details" :aria-label="`View command milestone ${item.id}`" color="neutral" variant="outline" size="xs" @click="editCommandMilestone(item.id)" /></div></li></ul><p v-if="!commandMilestoneMatches.length" class="text-sm text-muted">No milestones match this status.</p><UButton :label="commandAllMilestones ? 'Show fewer milestones' : 'View all milestones'" aria-label="Toggle all command milestones" color="neutral" variant="ghost" class="mt-3" @click="commandAllMilestones = !commandAllMilestones" /><p v-if="commandMilestoneNotice" role="status" class="mt-3 text-xs text-muted">{{ commandMilestoneNotice }}</p></UCard><UModal v-model:open="commandMilestoneOpen" :title="commandMilestoneSelected?.title || 'Milestone'" description="Edit only this milestone snapshot. Dates and owners are read-only; no external project is changed."><template #body><form :id="commandMilestoneFormId" class="space-y-4" @submit.prevent="saveCommandMilestone"><p class="text-sm">{{ commandMilestoneSelected?.id }} · {{ commandMilestoneSelected?.owner }}</p><p class="text-sm text-muted">{{ commandMilestoneSelected?.detail }}</p><UFormField label="Milestone demo status"><USelect v-model="commandMilestoneDraft" :items="['On Track', 'At Risk', 'Completed']" aria-label="Command milestone draft status" class="w-full" /></UFormField></form></template><template #footer><UButton label="Cancel" aria-label="Cancel command milestone edit" color="neutral" variant="outline" @click="commandMilestoneOpen = false" /><UButton label="Save locally" aria-label="Save command milestone status" type="submit" :form="commandMilestoneFormId" /></template></UModal></section>

        <section data-copy-block="command-team" tabindex="0" aria-label="Local team status and invitation preview" class="min-w-0"><UCard><template #header><div class="flex flex-wrap items-center justify-between gap-2"><h2 class="font-semibold text-highlighted">Status Tracker</h2><UButton label="Invite preview" aria-label="Open command invite preview" icon="i-lucide-user-plus" color="neutral" variant="outline" size="xs" @click="openCommandInvite" /></div><p class="mt-2 text-xs text-muted">Fictional presence at May 11, 2026, 10:00 UTC. Away durations are fixed samples, not timers.</p></template><UFormField label="Team status"><USelect v-model="commandMemberStatus" :items="['All statuses', 'Absent', 'Away', 'Available', 'Invited']" aria-label="Command team status" class="w-full" /></UFormField><p data-command-team-count class="my-3 text-sm text-muted" aria-live="polite">{{ commandMemberMatches.length }} of {{ commandMembers.length }} members match.</p><ul class="space-y-3"><li v-for="member in commandMemberMatches" :key="member.id" :data-command-member="member.id" class="rounded-lg border border-default p-3"><div class="flex flex-wrap items-center justify-between gap-2"><h3 class="font-medium">{{ member.name }}</h3><UBadge :label="member.status" :color="member.status === 'Available' ? 'success' : member.status === 'Away' ? 'warning' : 'neutral'" variant="subtle" /></div><p class="mt-2 text-xs text-muted">{{ member.detail }}</p></li></ul><p v-if="!commandMemberMatches.length" class="text-sm text-muted">No members match this status.</p><p v-if="commandInviteNotice" role="status" class="mt-3 text-xs text-muted">{{ commandInviteNotice }}</p></UCard><UModal v-model:open="commandInviteOpen" title="Create invitation preview" description="Adds a fictional member locally. No email or workspace invitation is sent."><template #body><form :id="commandInviteFormId" class="space-y-4" novalidate @submit.prevent="saveCommandInvite"><UFormField label="Example member name"><UInput v-model="commandInviteDraft.name" name="commandInviteName" maxlength="100" class="w-full" /></UFormField><UFormField label="Example member email"><UInput v-model="commandInviteDraft.email" name="commandInviteEmail" type="email" maxlength="254" class="w-full" /></UFormField><p v-if="commandInviteError" role="alert" class="text-sm text-error">{{ commandInviteError }}</p></form></template><template #footer><UButton label="Cancel" aria-label="Cancel command invite" color="neutral" variant="outline" @click="commandInviteOpen = false" /><UButton label="Create local preview" aria-label="Save command invite preview" type="submit" :form="commandInviteFormId" /></template></UModal></section>

        <section data-copy-block="command-activity" tabindex="0" aria-label="Local activity and notifications" class="min-w-0"><UCard><template #header><h2 class="font-semibold text-highlighted">Recent activity</h2><p class="mt-1 text-xs text-muted">{{ commandActivityUnread }} unread notifications in this snapshot.</p></template><UFormField label="Activity filter"><USelect v-model="commandActivityFilter" :items="['All activity', 'Unread only']" aria-label="Command activity filter" class="w-full" /></UFormField><p data-command-activity-count class="my-3 text-sm text-muted" aria-live="polite">{{ commandActivityShown.length }} shown · {{ commandActivityMatches.length }} matching of {{ commandActivity.length }} samples.</p><ol class="space-y-3"><li v-for="item in commandActivityShown" :key="item.id" :data-command-activity="item.id" class="space-y-2 rounded-lg border border-default p-3"><h3 class="font-medium">{{ item.title }}</h3><p class="text-xs text-muted"><time :datetime="item.time">{{ commandActivityDate(item.time) }} UTC</time></p><div class="flex flex-wrap items-center justify-between gap-2"><UBadge :label="item.unread ? 'Unread' : 'Read'" color="neutral" variant="subtle" /><UButton label="Details" :aria-label="`View command activity ${item.id}`" color="neutral" variant="outline" size="xs" @click="openCommandActivity(item.id)" /></div></li></ol><p v-if="!commandActivityMatches.length" class="text-sm text-muted">No activity matches this filter.</p><UButton :label="commandAllActivity ? 'Show fewer activities' : 'View all activity'" aria-label="Toggle all command activity" color="neutral" variant="ghost" class="mt-3" @click="commandAllActivity = !commandAllActivity" /><p v-if="commandActivityNotice" role="status" class="mt-3 text-xs text-muted">{{ commandActivityNotice }}</p></UCard><UModal v-model:open="commandActivityOpen" :title="commandActivitySelected?.title || 'Activity'" description="A fictional workspace event; marking it read changes this local block only."><template #body><p class="text-sm">{{ commandActivitySelected?.detail }}</p></template><template #footer><UButton label="Close" aria-label="Close command activity" color="neutral" variant="outline" @click="commandActivityOpen = false" /><UButton label="Mark as read" aria-label="Mark command activity read" :disabled="!commandActivitySelected?.unread" @click="readCommandActivity" /></template></UModal></section>
      </div>

      <section data-copy-block="command-throughput" tabindex="0" aria-label="Weekly delivery throughput" class="min-w-0">
        <UCard>
          <template #header><h2 class="font-semibold text-highlighted">Delivery throughput</h2><p class="mt-1 text-xs text-muted">Weekly issue counts · separate from sprint story points. May 11 is a partial-week snapshot, not a forecast.</p></template>
          <UFormField label="Week range"><USelect v-model="commandThroughputRange" :items="[{ label: 'Last 4 weeks', value: '4' }, { label: 'Last 8 weeks', value: '8' }]" aria-label="Command throughput range" class="w-full sm:max-w-xs" /></UFormField>
          <p data-command-throughput-total class="my-4 text-sm">{{ commandThroughputDone }} completed / {{ commandThroughputPlanned }} planned issues · {{ commandThroughputPercent }}% for the selected range.</p>
          <figure class="max-w-3xl">
            <svg viewBox="0 0 500 200" role="img" aria-label="Planned and completed weekly issue counts" class="block w-full">
              <title>Delivery throughput, weekly issue counts</title>
              <g v-for="tick in [0, 20, 40]" :key="tick"><line x1="25" x2="490" :y1="160 - tick * 3.5" :y2="160 - tick * 3.5" stroke="var(--ui-border)" /><text x="20" :y="164 - tick * 3.5" text-anchor="end" fill="var(--ui-text-muted)" font-size="10">{{ tick }}</text></g>
              <g v-for="(week, index) in commandThroughputData" :key="week.week"><rect :x="35 + index * 450 / commandThroughputData.length" :y="160 - week.planned * 3.5" width="16" :height="week.planned * 3.5" fill="var(--ui-bg-accented)" stroke="var(--ui-text-muted)" /><rect :x="53 + index * 450 / commandThroughputData.length" :y="160 - week.completed * 3.5" width="16" :height="week.completed * 3.5" fill="var(--ui-primary)" /><text :x="52 + index * 450 / commandThroughputData.length" y="180" text-anchor="middle" fill="var(--ui-text-muted)" font-size="10">{{ week.week }}</text></g>
            </svg>
            <figcaption class="text-xs text-muted">Outlined bars: planned · solid bars: completed. Week-start labels in 2026 (UTC).</figcaption>
          </figure>
          <details class="mt-4 text-sm"><summary class="cursor-pointer">View weekly issue data</summary><div class="mt-2 overflow-x-auto"><table class="w-full text-left text-xs"><caption class="sr-only">Weekly issue counts for selected range</caption><thead><tr><th scope="col" class="p-2">Week</th><th scope="col" class="p-2">Planned</th><th scope="col" class="p-2">Completed</th></tr></thead><tbody><tr v-for="week in commandThroughputData" :key="week.week"><th scope="row" class="p-2">{{ week.week }}</th><td class="p-2">{{ week.planned }}</td><td class="p-2">{{ week.completed }}</td></tr></tbody></table></div></details>
        </UCard>
      </section>
    </main></div>
    <BlockCopyTools page="/project-management/dashboard-3" />
  </div>
</template>
