<!-- Page: /project-management/project-list-1 | Local project card directory with working search, filters, sorting and detail previews. -->
<script setup lang="ts">
useHead({ title: 'Project List 1 · Blocks Admin' })

// @copy:project-list-base:start
import { computed, reactive, ref } from 'vue'
// @copy:project-list-base:end

// @copy:project-list-data:start
import type { FormError } from '@nuxt/ui'

type ProjectStatus = 'Active' | 'At Risk'
type Project = { id: string, name: string, status: ProjectStatus, cycle: string, cycleWeeks: number, memberCount: number, health: number, due: string, tasksClosed: number, tasksTotal: number, updated: string, icon: string }
// Fixed snapshot date keeps every derived value deterministic in SSR, screenshots and copied demos.
const referenceDate = '2026-01-11'
const projects = ref<Project[]>([
  { id: 'REV-241', name: 'Revenue Insights Revamp', status: 'Active', cycle: 'Improvement', cycleWeeks: 4, memberCount: 3, health: 58, due: '2026-02-14', tasksClosed: 1, tasksTotal: 11, updated: '2026-01-09', icon: 'i-lucide-trending-up' },
  { id: 'ONB-118', name: 'Enterprise Onboarding Flow', status: 'Active', cycle: 'Launch', cycleWeeks: 6, memberCount: 4, health: 72, due: '2026-02-22', tasksClosed: 5, tasksTotal: 14, updated: '2026-01-11', icon: 'i-lucide-users' },
  { id: 'CLM-084', name: 'Claims Resolution Workspace', status: 'At Risk', cycle: 'Fix', cycleWeeks: 2, memberCount: 3, health: 24, due: '2026-01-20', tasksClosed: 3, tasksTotal: 9, updated: '2026-01-06', icon: 'i-lucide-layers' },
  { id: 'RTL-062', name: 'Retail Launch Readiness', status: 'Active', cycle: 'Improvement', cycleWeeks: 3, memberCount: 3, health: 85, due: '2026-03-03', tasksClosed: 8, tasksTotal: 12, updated: '2026-01-10', icon: 'i-lucide-store' },
  { id: 'MOB-092', name: 'Mobile Release Train', status: 'Active', cycle: 'Launch', cycleWeeks: 5, memberCount: 4, health: 45, due: '2026-02-01', tasksClosed: 6, tasksTotal: 18, updated: '2026-01-08', icon: 'i-lucide-smartphone' },
  { id: 'INV-176', name: 'Inventory Accuracy Audit', status: 'Active', cycle: 'Maintenance', cycleWeeks: 8, memberCount: 3, health: 91, due: '2026-03-18', tasksClosed: 11, tasksTotal: 13, updated: '2026-01-05', icon: 'i-lucide-package' },
  { id: 'KB-057', name: 'Knowledge Base Migration', status: 'Active', cycle: 'Improvement', cycleWeeks: 4, memberCount: 3, health: 66, due: '2026-02-08', tasksClosed: 4, tasksTotal: 10, updated: '2026-01-07', icon: 'i-lucide-book-open' },
  { id: 'SLA-203', name: 'Partner SLA Tracker', status: 'At Risk', cycle: 'Fix', cycleWeeks: 3, memberCount: 3, health: 38, due: '2026-01-24', tasksClosed: 2, tasksTotal: 7, updated: '2026-01-04', icon: 'i-lucide-handshake' },
  { id: 'HIR-074', name: 'Hiring Pipeline Cleanup', status: 'Active', cycle: 'Maintenance', cycleWeeks: 6, memberCount: 4, health: 78, due: '2026-02-28', tasksClosed: 9, tasksTotal: 15, updated: '2026-01-10', icon: 'i-lucide-user-round-search' },
  { id: 'REN-133', name: 'Renewal Forecast Console', status: 'At Risk', cycle: 'Launch', cycleWeeks: 2, memberCount: 3, health: 15, due: '2026-01-17', tasksClosed: 7, tasksTotal: 20, updated: '2026-01-03', icon: 'i-lucide-refresh-ccw' },
])
function daysLeft(due: string) { return Math.round((Date.parse(`${due}T00:00:00Z`) - Date.parse(`${referenceDate}T00:00:00Z`)) / 86400000) }
function dueLabel(due: string) { return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${due}T00:00:00Z`)) }
function weeksLabel(days: number) { const weeks = Math.max(1, Math.round(days / 7)); return `${weeks} ${weeks === 1 ? 'week' : 'weeks'}` }
function healthBar(health: number) { return health >= 70 ? 'bg-success' : health >= 40 ? 'bg-warning' : 'bg-error' }
function statusColor(status: ProjectStatus) { return status === 'At Risk' ? 'warning' as const : 'success' as const }
// @copy:project-list-data:end

// @copy:project-list-toolbar:start
const search = ref('')
const sort = ref('Newest first')
const sortOptions = ['Newest first', 'Oldest first', 'Name A–Z', 'Name Z–A']
const teamSize = ref('Team size')
const teamSizeOptions = ['Team size', '3 members', '4+ members']
const filterOpen = ref(false)
const filterStatus = ref('All statuses')
const filterDueSoon = ref(false)
const statusOptions = ['All statuses', 'Active', 'At Risk']
const visibleProjects = computed(() => {
  const query = search.value.trim().toLowerCase()
  return projects.value.filter(project => {
    return (!query || `${project.id} ${project.name} ${project.cycle}`.toLowerCase().includes(query))
      && (filterStatus.value === 'All statuses' || project.status === filterStatus.value)
      && (teamSize.value === 'Team size' || (teamSize.value === '3 members' ? project.memberCount === 3 : project.memberCount >= 4))
      && (!filterDueSoon.value || daysLeft(project.due) <= 14)
  }).sort((a, b) => sort.value === 'Oldest first' ? a.updated.localeCompare(b.updated)
    : sort.value === 'Name A–Z' ? a.name.localeCompare(b.name, 'en')
      : sort.value === 'Name Z–A' ? b.name.localeCompare(a.name, 'en')
        : b.updated.localeCompare(a.updated))
})
const activeCount = computed(() => projects.value.filter(project => project.status === 'Active').length)
const createOpen = ref(false)
const createDraft = reactive({ name: '', cycle: 'Improvement', cycleWeeks: '4', memberCount: '3', due: '2026-03-01', status: 'Active' as ProjectStatus })
const createNotice = ref('')
function openCreate() { Object.assign(createDraft, { name: '', cycle: 'Improvement', cycleWeeks: '4', memberCount: '3', due: '2026-03-01', status: 'Active' }); createNotice.value = ''; createOpen.value = true }
function validateCreate(state: Partial<typeof createDraft>): FormError[] {
  const errors: FormError[] = []
  const name = state.name?.trim() || ''
  if (name.length < 1 || name.length > 80) errors.push({ name: 'name', message: 'Enter a project name between 1 and 80 characters.' })
  if (!/^\d{4}-\d{2}-\d{2}$/.test(state.due || '') || !Number.isFinite(Date.parse(`${state.due}T00:00:00Z`))) errors.push({ name: 'due', message: 'Enter a valid due date.' })
  const weeks = Number(state.cycleWeeks)
  if (!Number.isInteger(weeks) || weeks < 1 || weeks > 26) errors.push({ name: 'cycleWeeks', message: 'Enter a cycle length between 1 and 26 weeks.' })
  const size = Number(state.memberCount)
  if (!Number.isInteger(size) || size < 1 || size > 12) errors.push({ name: 'memberCount', message: 'Enter a team size between 1 and 12.' })
  return errors
}
function createProject() {
  if (validateCreate(createDraft).length) return
  const id = `DEMO-${Math.floor(300 + Math.random() * 700)}`
  projects.value.push({ id, name: createDraft.name.trim(), status: createDraft.status, cycle: createDraft.cycle, cycleWeeks: Number(createDraft.cycleWeeks), memberCount: Number(createDraft.memberCount), health: 0, due: createDraft.due, tasksClosed: 0, tasksTotal: 0, updated: referenceDate, icon: 'i-lucide-folder-kanban' })
  createNotice.value = `${id} created locally with 0% health and no tasks. No server was contacted.`
  createOpen.value = false
}
function resetFilters() { search.value = ''; teamSize.value = 'Team size'; filterStatus.value = 'All statuses'; filterDueSoon.value = false }
// @copy:project-list-toolbar:end

// @copy:project-list-directory:start
const starred = ref<string[]>([])
const detailOpen = ref(false)
const detailId = ref('')
const detailStatus = ref<ProjectStatus>('Active')
const detailProject = computed(() => projects.value.find(project => project.id === detailId.value))
const directoryNotice = ref('Search, filters, sorting and starring stay in this page. Nothing is sent to a server.')
function openDetail(project: Project) { detailId.value = project.id; detailStatus.value = project.status; detailOpen.value = true }
function saveDetail() {
  const project = detailProject.value
  if (!project) return
  project.status = detailStatus.value
  directoryNotice.value = `${project.id} marked ${project.status} locally. No server was contacted.`
  detailOpen.value = false
}
function toggleStar(id: string) {
  starred.value = starred.value.includes(id) ? starred.value.filter(value => value !== id) : [...starred.value, id]
  directoryNotice.value = `${id} ${starred.value.includes(id) ? 'starred' : 'unstarred'} locally.`
}
// @copy:project-list-directory:end
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/project-list-1">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main id="main-content" class="bg-default flex min-h-0 flex-1 flex-col overflow-hidden dark:bg-[radial-gradient(circle_at_top,color-mix(in_oklab,_var(--ui-bg)_3.5000000000000004%,_transparent),transparent_28%)]">
          <section data-copy-block="project-list-toolbar" tabindex="0" aria-label="Project search, filters and creation" class="shrink-0 border-b border-default">
            <div class="flex flex-col gap-3 px-4 py-4 sm:px-6 lg:min-h-14 lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:py-0">
              <div class="flex min-w-0 items-center justify-between gap-3">
                <div class="flex min-w-0 items-center gap-2.5 text-sm font-medium">
                  <UIcon name="i-lucide-folder-kanban" class="text-muted size-4 shrink-0" />
                  <span class="truncate">Projects</span>
                </div>
                <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-primary px-3 text-xs font-medium text-inverted shadow-sm hover:bg-primary/90 lg:hidden" aria-label="Add project" icon="i-lucide-plus" @click="openCreate" />
              </div>
              <div class="grid min-w-0 grid-cols-2 items-center gap-2 lg:flex lg:flex-wrap lg:justify-end">
                <div class="relative col-span-2 w-full lg:col-span-1 lg:w-[220px]">
                  <UIcon name="i-lucide-search" class="text-muted pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2" />
                  <UInput v-model="search" type="search" placeholder="Search projects..." name="projectListSearch" aria-label="Search projects" class="w-full pl-8" :ui="{ base: 'h-9' }" />
                </div>
                <USelect v-model="sort" :items="sortOptions" aria-label="Sort projects" class="h-9 w-full gap-1.5 rounded-md border border-default bg-default px-3 text-sm text-highlighted shadow-none hover:bg-elevated lg:h-8 lg:w-[156px]" />
                <USelect v-model="teamSize" :items="teamSizeOptions" aria-label="Filter by team size" class="h-9 w-full gap-1.5 rounded-md border border-default bg-default px-3 text-sm text-highlighted shadow-none hover:bg-elevated lg:h-8 lg:w-[132px]" />
                <UButton color="neutral" variant="outline" class="col-span-2 inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-md border border-default bg-default px-3 text-xs font-medium text-highlighted shadow-xs hover:bg-elevated hover:text-default sm:col-span-1 lg:h-8 lg:w-auto" aria-label="Filters" @click="filterOpen = true">
                  <UIcon name="i-lucide-sliders-horizontal" class="size-3.5" />
                  Filters
                </UButton>
                <UButton color="primary" variant="solid" class="hidden h-8 items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-primary px-3 text-xs font-medium text-inverted shadow-sm hover:bg-primary/90 lg:inline-flex" aria-label="Add project" icon="i-lucide-plus" @click="openCreate" />
              </div>
            </div>
            <div class="flex items-center justify-between gap-3 px-4 pb-3 sm:px-6">
              <p class="text-sm text-muted" aria-live="polite">{{ visibleProjects.length }} of {{ projects.length }} projects · snapshot {{ dueLabel(referenceDate) }}</p>
              <UBadge color="neutral" variant="subtle" :label="`${activeCount} active`" icon="i-lucide-check" class="hidden md:inline-flex" />
            </div>
            <UModal v-model:open="filterOpen" title="Filter projects" description="Filters apply to this local page snapshot only. Sample data stays fictional.">
              <template #body>
                <div class="space-y-4">
                  <UFormField label="Status"><USelect v-model="filterStatus" :items="statusOptions" aria-label="Filter projects by status" class="w-full" /></UFormField>
                  <USwitch v-model="filterDueSoon" label="Due within 14 days of the snapshot" aria-label="Only show projects due within 14 days" />
                  <p class="text-sm text-muted" aria-live="polite">{{ visibleProjects.length }} of {{ projects.length }} projects match.</p>
                  <p class="text-xs text-muted">Team size is filtered from the toolbar select, currently “{{ teamSize }}”.</p>
                </div>
              </template>
              <template #footer>
                <div class="flex w-full justify-end gap-2">
                  <UButton label="Reset filters" aria-label="Reset project filters" color="neutral" variant="outline" @click="resetFilters" />
                  <UButton label="Done" aria-label="Close project filters" @click="filterOpen = false" />
                </div>
              </template>
            </UModal>
            <UModal v-model:open="createOpen" title="Create demo project" description="Adds a fictional project card to this page only. No server is contacted.">
              <template #body>
                <UForm :state="createDraft" :validate="validateCreate" class="space-y-4" @submit="createProject">
                  <UFormField label="Project name" name="name" required><UInput v-model="createDraft.name" name="projectListNewName" class="w-full" /></UFormField>
                  <UFormField label="Cycle" name="cycle"><USelect v-model="createDraft.cycle" :items="['Improvement', 'Launch', 'Fix', 'Maintenance']" aria-label="New project cycle" class="w-full" /></UFormField>
                  <UFormField label="Cycle length in weeks" name="cycleWeeks" required><UInput v-model="createDraft.cycleWeeks" type="number" min="1" max="26" name="projectListCycleWeeks" class="w-full" /></UFormField>
                  <UFormField label="Team size" name="memberCount" required><UInput v-model="createDraft.memberCount" type="number" min="1" max="12" name="projectListTeamSize" class="w-full" /></UFormField>
                  <UFormField label="Due date" name="due" required><UInput v-model="createDraft.due" type="date" name="projectListDueDate" class="w-full" /></UFormField>
                  <UFormField label="Status" name="status"><USelect v-model="createDraft.status" :items="['Active', 'At Risk']" aria-label="New project status" class="w-full" /></UFormField>
                  <div class="flex justify-end gap-2">
                    <UButton label="Cancel" aria-label="Cancel project creation" color="neutral" variant="outline" @click="createOpen = false" />
                    <UButton label="Create locally" aria-label="Create demo project" type="submit" />
                  </div>
                </UForm>
              </template>
            </UModal>
            <p v-if="createNotice" role="status" class="px-4 pb-4 text-sm text-muted sm:px-6">{{ createNotice }}</p>
          </section>

          <section data-copy-block="project-list-directory" tabindex="0" aria-label="Project card directory" class="min-w-0 flex-1 space-y-4 overflow-y-auto px-4 py-5 sm:px-6">
            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              <UCard v-for="project in visibleProjects" :key="project.id" :data-project-card="project.id" class="group w-full overflow-hidden rounded-xl shadow-none transition-colors" :ui="{ body: 'contents' }">
                <div class="relative h-[160px] w-full overflow-hidden bg-gradient-to-br from-primary/15 via-muted to-muted">
                  <UIcon :name="project.icon" class="absolute -right-4 -bottom-5 size-28 text-primary/15" />
                  <div class="absolute inset-0 flex flex-col justify-between px-5 pt-4 pb-4">
                    <div class="flex items-start justify-between gap-3">
                      <UBadge :label="project.status" :color="statusColor(project.status)" variant="subtle" class="rounded-full px-2.5 py-0.5 text-[11px] font-medium" />
                      <div class="flex items-center gap-1.5">
                        <UButton color="neutral" variant="outline" class="size-7 rounded-md border-default bg-default/80 p-0 shadow-none hover:bg-elevated" :aria-label="`Open details for ${project.id}`" @click="openDetail(project)">
                          <UIcon name="i-lucide-link-2" class="size-3.5" />
                        </UButton>
                        <UButton color="neutral" variant="outline" class="size-7 rounded-md border-default bg-default/80 p-0 shadow-none hover:bg-elevated" :aria-label="`Star ${project.id}`" :aria-pressed="starred.includes(project.id)" @click="toggleStar(project.id)">
                          <UIcon name="i-lucide-star" class="size-3.5" :class="starred.includes(project.id) ? 'text-warning' : ''" />
                        </UButton>
                      </div>
                    </div>
                    <div class="min-w-0">
                      <div class="mb-1.5 flex items-center gap-2">
                        <div class="h-4 w-1 rounded-full" :class="healthBar(project.health)" />
                        <span class="text-[11px] font-medium tracking-[0.18em] text-muted uppercase">{{ project.id }}</span>
                      </div>
                      <h3 class="truncate text-lg font-semibold text-highlighted">{{ project.name }}</h3>
                    </div>
                  </div>
                </div>
                <div class="space-y-4 p-5">
                  <div class="grid grid-cols-2 gap-x-4 gap-y-3">
                    <div class="space-y-0.5">
                      <span class="text-[11px] font-medium text-muted">Cycle</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-sm font-medium text-highlighted">{{ project.cycle }}</span>
                        <span class="text-[11px] text-muted">{{ project.cycleWeeks }} weeks</span>
                      </div>
                    </div>
                    <div class="space-y-0.5">
                      <span class="text-[11px] font-medium text-muted">Team</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-sm font-medium text-highlighted">{{ project.memberCount }} members</span>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="text-[11px] font-medium text-muted">Timeline health</span>
                      <span class="text-[11px] text-muted">{{ daysLeft(project.due) }} days left</span>
                    </div>
                    <div class="flex items-center gap-2.5">
                      <div class="h-1.5 flex-1 rounded-full bg-muted">
                        <div class="h-full rounded-full" :class="healthBar(project.health)" :style="{ width: `${project.health}%` }" />
                      </div>
                      <span class="text-sm font-semibold tabular-nums text-highlighted">{{ project.health }}%</span>
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-default pt-3.5">
                    <div class="space-y-0.5">
                      <span class="text-[11px] font-medium text-muted">Due date</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-sm font-medium text-highlighted">{{ dueLabel(project.due) }}</span>
                        <span class="text-[11px] text-muted">in {{ weeksLabel(daysLeft(project.due)) }}</span>
                      </div>
                    </div>
                    <div class="space-y-0.5">
                      <span class="text-[11px] font-medium text-muted">Tasks closed</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-sm font-medium text-highlighted">{{ project.tasksClosed }}/{{ project.tasksTotal }}</span>
                        <span class="text-[11px] text-muted">{{ project.tasksTotal - project.tasksClosed }} open tasks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </UCard>
            </div>
            <p v-if="!visibleProjects.length" class="rounded-lg border border-default p-6 text-sm text-muted">No projects match the current search and filters.</p>
            <p role="status" class="text-sm text-muted">{{ directoryNotice }}</p>
            <UModal v-model:open="detailOpen" :title="detailProject?.name || 'Project'" description="Local demo preview. Status changes apply to this page snapshot only.">
              <template #body>
                <div v-if="detailProject" class="space-y-4">
                  <p class="text-sm text-muted">{{ detailProject.id }} · {{ detailProject.cycle }} · {{ detailProject.cycleWeeks }} weeks · {{ detailProject.memberCount }} members</p>
                  <div class="flex items-center gap-2.5">
                    <div class="h-1.5 flex-1 rounded-full bg-muted">
                      <div class="h-full rounded-full" :class="healthBar(detailProject.health)" :style="{ width: `${detailProject.health}%` }" />
                    </div>
                    <span class="text-sm font-semibold tabular-nums">{{ detailProject.health }}%</span>
                  </div>
                  <dl class="grid grid-cols-2 gap-3 text-sm">
                    <div><dt class="text-xs text-muted">Due date</dt><dd>{{ dueLabel(detailProject.due) }} · in {{ weeksLabel(daysLeft(detailProject.due)) }}</dd></div>
                    <div><dt class="text-xs text-muted">Tasks closed</dt><dd>{{ detailProject.tasksClosed }}/{{ detailProject.tasksTotal }} · {{ detailProject.tasksTotal - detailProject.tasksClosed }} open</dd></div>
                  </dl>
                  <UFormField label="Status"><USelect v-model="detailStatus" :items="['Active', 'At Risk']" aria-label="Project status in detail dialog" class="w-full" /></UFormField>
                </div>
              </template>
              <template #footer>
                <div class="flex w-full justify-end gap-2">
                  <UButton label="Close" aria-label="Close project details" color="neutral" variant="outline" @click="detailOpen = false" />
                  <UButton label="Save status locally" aria-label="Save project status" @click="saveDetail" />
                </div>
              </template>
            </UModal>
          </section>
        </main>
      </div>
    </div>
    <BlockCopyTools page="/project-management/project-list-1" />
  </div>
</template>

<style scoped>

.page-content { min-height: 0; color: var(--ui-text); --chart-1: var(--ui-primary); --chart-2: var(--ui-text-highlighted); --chart-3: var(--ui-text-muted); --chart-4: var(--ui-text-dimmed); --chart-5: var(--ui-border-accented); --chart-6: var(--ui-border); --radius: var(--ui-radius); }
.page-content > div { min-height: 100%; }
.page-content *, .page-content ::before, .page-content ::after { border-color: var(--ui-border); }
.page-content [data-slot="scroll-area-viewport"] { overflow: auto !important; scrollbar-width: thin; }
.page-content [data-slot="scroll-area-scrollbar"] { display: none; }
.page-content pre { overflow: auto; }
.page-content img { object-fit: cover; }
</style>
