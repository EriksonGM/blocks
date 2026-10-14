<!-- Page: /project-management/issue-kanban-1 | Local issue board: filters, moves and additions stay in component memory. -->
<script setup lang="ts">
useHead({ title: 'Issue Kanban 1 · Blocks Admin' })

// @copy:kanban-base:start
import { computed, reactive, ref } from 'vue'
// @copy:kanban-base:end

// @copy:kanban-data:start
type KanbanPriority = 'high' | 'medium' | 'low'
type KanbanStatus = 'Backlog' | 'Todo' | 'In Progress' | 'Review' | 'Done'
type KanbanIssue = { id: string, title: string, detail: string, status: KanbanStatus, priority: KanbanPriority, updated: string, subs: number, assignee: string, blocked: boolean }
type KanbanColumn = { status: KanbanStatus, dot: string, badge: string }

const kanbanColumns: KanbanColumn[] = [
  { status: 'Backlog', dot: 'bg-accented dark:bg-accented', badge: 'inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-default bg-default text-default dark:border-default dark:bg-(--ui-bg)/70 dark:text-default' },
  { status: 'Todo', dot: 'bg-info dark:bg-info', badge: 'inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-info/20 bg-info/10 text-info dark:border-info dark:bg-info/35 dark:text-info' },
  { status: 'In Progress', dot: 'bg-warning dark:bg-warning', badge: 'inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-warning/20 bg-warning/10 text-warning dark:border-warning dark:bg-warning/35 dark:text-warning' },
  { status: 'Review', dot: 'bg-secondary dark:bg-secondary', badge: 'inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-secondary/20 bg-secondary/10 text-secondary dark:border-secondary dark:bg-secondary/35 dark:text-secondary' },
  { status: 'Done', dot: 'bg-success dark:bg-success', badge: 'inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:border-success dark:bg-success/35 dark:text-success' },
]

const kanbanInitialIssues: KanbanIssue[] = [
  { id: 'RFC-104', title: 'Document drag and resize behavior', detail: '', status: 'Backlog', priority: 'high', updated: 'Blocked', subs: 0, assignee: '', blocked: true },
  { id: 'RFC-108', title: 'Prepare issue calendar follow-up screen', detail: '', status: 'Backlog', priority: 'medium', updated: 'No owner yet', subs: 0, assignee: '', blocked: false },
  { id: 'RFC-109', title: 'Map unresolved import states', detail: 'Cover empty, delayed, and failed dependency states.', status: 'Backlog', priority: 'medium', updated: 'Queued yesterday', subs: 2, assignee: '', blocked: false },
  { id: 'RFC-110', title: 'Draft permissions matrix', detail: 'List role behavior before access work starts.', status: 'Backlog', priority: 'low', updated: 'Added to backlog', subs: 0, assignee: 'Kai Young', blocked: false },
  { id: 'RFC-102', title: 'Review gantt interaction states', detail: '', status: 'Todo', priority: 'medium', updated: 'Updated today', subs: 1, assignee: '', blocked: false },
  { id: 'RFC-105', title: 'Create empty and loading timeline states', detail: '', status: 'Todo', priority: 'medium', updated: 'Updated today', subs: 2, assignee: '', blocked: false },
  { id: 'RFC-111', title: 'Define compact issue row actions', detail: 'Confirm the small-screen action set for issue cards.', status: 'Todo', priority: 'high', updated: 'Planned today', subs: 3, assignee: 'Ava Reed', blocked: false },
  { id: 'RFC-112', title: 'Validate bulk selection copy', detail: 'Review toolbar labels for multi-select workflows.', status: 'Todo', priority: 'medium', updated: 'Moved to todo', subs: 1, assignee: '', blocked: false },
  { id: 'RFC-101', title: 'Finalize issue timeline architecture', detail: '', status: 'In Progress', priority: 'high', updated: 'Updated 2h ago', subs: 3, assignee: 'Nina Oliver', blocked: false },
  { id: 'RFC-113', title: 'Wire activity stream pagination', detail: 'Keep the activity panel responsive with larger histories.', status: 'In Progress', priority: 'high', updated: 'Updated 30m ago', subs: 4, assignee: 'Lena Moss', blocked: false },
  { id: 'RFC-114', title: 'Tune drag preview affordances', detail: 'Make drag feedback clearer across dense boards.', status: 'In Progress', priority: 'medium', updated: 'In progress', subs: 2, assignee: '', blocked: false },
  { id: 'RFC-103', title: 'Sync issue filters with project views', detail: '', status: 'Review', priority: 'high', updated: 'Updated yesterday', subs: 4, assignee: 'Kai Young', blocked: false },
  { id: 'RFC-107', title: 'Polish the quarter view density', detail: '', status: 'Review', priority: 'medium', updated: 'Updated today', subs: 2, assignee: 'Ava Reed', blocked: false },
  { id: 'RFC-115', title: 'Review dependency warning variants', detail: 'Check blocked, stale, and missing dependency treatments.', status: 'Review', priority: 'medium', updated: 'Ready for review', subs: 2, assignee: 'Nina Oliver', blocked: false },
  { id: 'RFC-116', title: 'QA keyboard reorder flow', detail: 'Verify keyboard parity for board movement patterns.', status: 'Review', priority: 'high', updated: 'Blocked on QA notes', subs: 1, assignee: '', blocked: true },
  { id: 'RFC-106', title: 'Add mock dependencies and handoff notes', detail: '', status: 'Done', priority: 'low', updated: 'Closed today', subs: 1, assignee: 'Lena Moss', blocked: false },
  { id: 'RFC-117', title: 'Ship saved filter presets', detail: 'Persist personal filters for repeated triage sessions.', status: 'Done', priority: 'low', updated: 'Closed yesterday', subs: 1, assignee: 'Ava Reed', blocked: false },
  { id: 'RFC-118', title: 'Archive legacy issue badges', detail: 'Remove stale badge variants from issue surfaces.', status: 'Done', priority: 'medium', updated: 'Closed today', subs: 0, assignee: '', blocked: false },
]

const kanbanIssues = ref<KanbanIssue[]>(kanbanInitialIssues.map(issue => ({ ...issue })))
const kanbanFilter = reactive({ query: '', status: 'All statuses', priority: 'All priorities', assignee: 'Everyone' })
const kanbanToolbarNotice = ref('')
const kanbanBoardNotice = ref('')

const kanbanFiltered = computed(() => {
  const query = kanbanFilter.query.trim().toLowerCase()
  return kanbanIssues.value.filter(issue => {
    if (kanbanFilter.status !== 'All statuses' && issue.status !== kanbanFilter.status) return false
    if (kanbanFilter.priority !== 'All priorities' && issue.priority !== kanbanFilter.priority) return false
    if (kanbanFilter.assignee === 'Assigned' && !issue.assignee) return false
    if (kanbanFilter.assignee === 'Unassigned' && issue.assignee) return false
    if (kanbanFilter.assignee !== 'Everyone' && kanbanFilter.assignee !== 'Assigned' && kanbanFilter.assignee !== 'Unassigned' && issue.assignee !== kanbanFilter.assignee) return false
    return !query || `${issue.id} ${issue.title} ${issue.assignee}`.toLowerCase().includes(query)
  })
})
const kanbanColumnCounts = computed(() => kanbanColumns.map(column => ({ status: column.status, count: kanbanFiltered.value.filter(issue => issue.status === column.status).length })))
function kanbanColumnIssues(status: KanbanStatus) { return kanbanFiltered.value.filter(issue => issue.status === status) }
function kanbanInitials(name: string) { return name.split(' ').map(part => part[0] || '').slice(0, 2).join('') }
function kanbanMoveItems(issue: KanbanIssue) {
  return kanbanColumns
    .filter(column => column.status !== issue.status)
    .map(column => ({ label: `Move to ${column.status}`, icon: 'i-lucide-arrow-right', onSelect: () => kanbanMoveIssue(issue.id, column.status) }))
}
function kanbanMoveIssue(id: string, status: KanbanStatus) {
  const issue = kanbanIssues.value.find(item => item.id === id)
  if (!issue || issue.status === status) return
  issue.status = status
  kanbanBoardNotice.value = `${id} moved to ${status} locally. No server was contacted.`
}
function kanbanResetBoard() {
  kanbanIssues.value = kanbanInitialIssues.map(issue => ({ ...issue }))
  kanbanToolbarNotice.value = `Board reset to the ${kanbanInitialIssues.length}-issue local snapshot. No server was contacted.`
}
function kanbanClearFilters() {
  Object.assign(kanbanFilter, { query: '', status: 'All statuses', priority: 'All priorities', assignee: 'Everyone' })
  kanbanToolbarNotice.value = 'Filters cleared. The full local board is shown again.'
}
// @copy:kanban-data:end

// @copy:kanban-new-issue:start
const kanbanNewPriorityOptions = ['high', 'medium', 'low']
const kanbanNewOpen = ref(false)
const kanbanNewDraft = reactive({ title: '', detail: '', priority: 'medium' as KanbanPriority, status: 'Backlog' as KanbanStatus })
const kanbanNewError = ref('')
let kanbanNextId = 119
function kanbanOpenNew(status: KanbanStatus) {
  Object.assign(kanbanNewDraft, { title: '', detail: '', priority: 'medium' as KanbanPriority, status })
  kanbanNewError.value = ''
  kanbanNewOpen.value = true
}
function kanbanSaveNew() {
  const title = kanbanNewDraft.title.trim()
  if (!title || title.length > 120) { kanbanNewError.value = 'Enter a title between 1 and 120 characters.'; return }
  const id = `RFC-${kanbanNextId++}`
  kanbanIssues.value.push({ id, title, detail: kanbanNewDraft.detail.trim(), status: kanbanNewDraft.status, priority: kanbanNewDraft.priority, updated: 'Added locally', subs: 0, assignee: '', blocked: false })
  kanbanToolbarNotice.value = `${id} added to ${kanbanNewDraft.status} locally. No server was contacted.`
  kanbanNewOpen.value = false
}
// @copy:kanban-new-issue:end

// @copy:kanban-toolbar:start
const kanbanStatusOptions = computed(() => ['All statuses', ...kanbanColumns.map(column => column.status)])
const kanbanPriorityOptions = ['All priorities', 'high', 'medium', 'low']
const kanbanAssigneeOptions = computed(() => ['Everyone', 'Assigned', 'Unassigned', ...[...new Set(kanbanIssues.value.map(issue => issue.assignee).filter(Boolean))].sort()])
const kanbanFilterOpen = ref(false)
const kanbanBoardItems = computed(() => [
  { label: 'Reset local board', icon: 'i-lucide-rotate-ccw', onSelect: () => kanbanResetBoard() },
  { label: 'Clear filters', icon: 'i-lucide-list-filter', onSelect: () => kanbanClearFilters() },
])
// @copy:kanban-toolbar:end
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/issue-kanban-1">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default flex h-full min-h-0 flex-1 flex-col overflow-hidden">
          <section data-copy-block="kanban-toolbar" tabindex="0" aria-label="Board toolbar with local filters and actions" class="shrink-0">
            <div class="border-b border-default">
              <div class="flex min-h-14 items-center gap-4 px-4 sm:px-6">
                <div class="no-scrollbar flex min-w-0 flex-1 items-center overflow-x-auto">
                  <div class="flex shrink-0 items-center gap-2 pr-1">
                    <div class="bg-muted text-highlighted flex size-7 items-center justify-center rounded-md">
                      <UIcon name="i-lucide-folder-kanban" class="size-4" />
                    </div>
                    <span class="text-(--ui-text-highlighted)/85 max-w-48 truncate px-2 text-[14px] font-medium">Renewal Forecast Console</span>
                  </div>
                  <UDropdownMenu :items="kanbanBoardItems" :content="{ align: 'start' }">
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-8 shrink-0 rounded-md" aria-label="Project options" type="button">
                      <UIcon name="i-lucide-ellipsis" class="size-4" />
                    </UButton>
                  </UDropdownMenu>
                  <div class="mx-4 h-5 w-px shrink-0 border-l border-default" />
                  <div class="flex items-center gap-1">
                    <span class="relative z-10 flex items-center rounded-md px-2 py-1.5 text-[13px] font-medium transition-colors bg-muted text-highlighted" aria-current="page">
                      Issues
                      <span class="bg-(--ui-text-highlighted) absolute bottom-[-14px] left-1/2 h-0.5 w-[80%] -translate-x-1/2 rounded-t-md" />
                    </span>
                  </div>
                </div>
                <div class="flex shrink-0 items-center gap-2">
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-8" aria-label="Filter issues" :aria-expanded="kanbanFilterOpen" type="button" @click="kanbanFilterOpen = !kanbanFilterOpen">
                    <UIcon name="i-lucide-sliders-horizontal" class="size-3.5" />
                  </UButton>
                  <UButton color="primary" variant="solid" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 rounded-md px-3 text-xs h-8 shrink-0 gap-1.5" aria-label="Add issue" type="button" @click="kanbanOpenNew('Backlog')">
                    <UIcon name="i-lucide-plus" class="size-3.5" />
                    Add issue
                  </UButton>
                </div>
              </div>
            </div>
            <div v-if="kanbanFilterOpen" class="border-b border-default px-4 py-3 sm:px-6">
              <div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                <UFormField label="Search issues">
                  <UInput v-model="kanbanFilter.query" name="kanbanIssueSearch" type="search" icon="i-lucide-search" placeholder="ID, title or assignee" class="w-full" />
                </UFormField>
                <UFormField label="Status">
                  <USelect v-model="kanbanFilter.status" :items="kanbanStatusOptions" aria-label="Filter issues by status" class="w-full" />
                </UFormField>
                <UFormField label="Priority">
                  <USelect v-model="kanbanFilter.priority" :items="kanbanPriorityOptions" aria-label="Filter issues by priority" class="w-full" />
                </UFormField>
                <UFormField label="Assignee">
                  <USelect v-model="kanbanFilter.assignee" :items="kanbanAssigneeOptions" aria-label="Filter issues by assignee" class="w-full" />
                </UFormField>
              </div>
              <div class="mt-3 flex flex-wrap items-center justify-between gap-2">
                <p class="text-muted text-[12px]" aria-live="polite">{{ kanbanFiltered.length }} of {{ kanbanIssues.length }} issues match the current filters.</p>
                <UButton label="Clear filters" aria-label="Clear issue filters" color="neutral" variant="outline" size="xs" @click="kanbanClearFilters" />
              </div>
            </div>
            <p v-if="kanbanToolbarNotice" role="status" class="text-muted border-b border-default px-4 py-2 text-[12px] sm:px-6">{{ kanbanToolbarNotice }}</p>
          </section>
          <div data-copy-block="kanban-counts" tabindex="0" aria-label="Board issue counts" class="flex min-h-11 items-center justify-between border-b px-4 py-1.5 sm:px-6 border-default">
            <div class="text-highlighted text-[14px] font-semibold">{{ kanbanFiltered.length }} of {{ kanbanIssues.length }} issues</div>
            <div class="text-muted text-[13px] font-medium">Grouped by status · local snapshot</div>
          </div>
          <div data-copy-block="kanban-board" tabindex="0" aria-label="Issue board columns" class="min-h-0 flex-1 overflow-hidden px-4 py-4 sm:px-6">
            <div class="no-scrollbar flex h-full min-h-0 items-stretch overflow-x-auto pb-2 gap-4">
              <section v-for="column in kanbanColumns" :key="column.status" :data-kanban-column="column.status" class="flex h-full min-h-0 shrink-0 flex-col overflow-hidden w-[320px] bg-default rounded-t-2xl border-x border-t border-(--ui-border)/80 dark:border-default">
                <div class="sticky top-0 z-10 flex min-h-12 items-center gap-3 rounded-t-2xl border-b px-3 bg-default dark:bg-(--ui-bg)/60 border-default">
                  <span class="size-2 rounded-full" :class="column.dot" />
                  <h2 class="text-[14px] font-semibold text-highlighted">{{ column.status }}</h2>
                  <span class="rounded-full px-1.5 py-0.5 text-[11px] font-medium bg-default text-toned dark:bg-default dark:text-default">{{ kanbanColumnIssues(column.status).length }}</span>
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted ml-auto size-7 rounded-md" :aria-label="`Add issue to ${column.status}`" type="button" @click="kanbanOpenNew(column.status)">
                    <UIcon name="i-lucide-plus" class="size-4" />
                  </UButton>
                </div>
                <div class="min-h-0 flex-1 overflow-y-auto p-3">
                  <div class="flex flex-col gap-3">
                    <article v-for="issue in kanbanColumnIssues(column.status)" :key="issue.id" :data-kanban-issue="issue.id" class="group relative border bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition dark:bg-default rounded-xl border-default dark:border-default hover:border-accented hover:shadow-[0_8px_24px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:hover:border-default">
                      <div class="flex items-start justify-between gap-3">
                        <div class="min-w-0">
                          <p class="truncate text-[11px] font-semibold tracking-[0.12em] text-muted uppercase">{{ issue.id }}</p>
                          <h3 class="mt-1 line-clamp-2 text-[14px] font-semibold text-highlighted">{{ issue.title }}</h3>
                          <p v-if="issue.detail" class="text-muted mt-2 text-[12px] line-clamp-2">{{ issue.detail }}</p>
                        </div>
                        <UDropdownMenu :items="kanbanMoveItems(issue)" :content="{ align: 'end' }">
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100" :aria-label="`Move issue ${issue.id}`" type="button">
                            <UIcon name="i-lucide-ellipsis" class="size-4" />
                          </UButton>
                        </UDropdownMenu>
                      </div>
                      <div class="text-muted mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>{{ issue.updated }}</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span class="capitalize">{{ issue.priority }}</span>
                        <template v-if="issue.blocked">
                          <span class="text-inverted dark:text-dimmed">/</span>
                          <span>Blocked</span>
                        </template>
                      </div>
                      <div class="mt-3 flex items-center justify-between gap-3">
                        <UBadge color="neutral" variant="subtle" :class="column.badge">
                          <span class="size-1.5 rounded-full" :class="column.dot" />
                          {{ issue.status }}
                        </UBadge>
                        <div class="flex items-center gap-2">
                          <span v-if="issue.subs" class="text-muted text-[11px] font-medium">{{ issue.subs }} sub</span>
                          <span v-if="issue.assignee" class="text-default relative flex size-7 shrink-0 items-center justify-center overflow-hidden rounded-full border border-inverted bg-muted text-[10px] font-semibold shadow-sm dark:border-default" :title="issue.assignee">{{ kanbanInitials(issue.assignee) }}</span>
                          <span v-else class="text-muted inline-flex size-7 items-center justify-center rounded-full border border-dashed border-accented dark:border-default">
                            <UIcon name="i-lucide-users" class="size-3.5" />
                          </span>
                        </div>
                      </div>
                    </article>
                    <p v-if="!kanbanColumnIssues(column.status).length" class="text-muted rounded-lg border border-dashed border-default p-3 text-[12px]">No issues in this column match the current filters.</p>
                  </div>
                  <UButton color="neutral" variant="outline" class="text-muted hover:text-highlighted mt-3 flex min-h-9 w-full items-center gap-2 text-[12px] font-medium transition rounded-lg border border-dashed border-accented bg-default px-3 dark:border-default dark:bg-default" aria-label="New issue" type="button" @click="kanbanOpenNew(column.status)">
                    <UIcon name="i-lucide-plus" class="size-3.5" />
                    New issue
                  </UButton>
                </div>
              </section>
            </div>
            <p v-if="!kanbanFiltered.length" class="text-muted mt-3 text-[12px]" role="status">No issues match the current filters. Clear the filters to see the whole local board.</p>
            <p v-if="kanbanBoardNotice" role="status" class="text-muted mt-2 text-[12px]">{{ kanbanBoardNotice }}</p>
          </div>
        </main>
      </div>
    </div>
    <!-- Local create dialog: adds an in-memory issue only. -->
    <UModal data-copy-fragment="kanban-new-issue" v-model:open="kanbanNewOpen" title="Add a local issue" description="Adds an issue to this in-memory board only. No tracker or server is contacted.">
      <template #body>
        <form class="space-y-4" novalidate @submit.prevent="kanbanSaveNew">
          <UFormField label="Title" required>
            <UInput v-model="kanbanNewDraft.title" name="kanbanIssueTitle" placeholder="Short issue summary" class="w-full" />
          </UFormField>
          <UFormField label="Detail">
            <UTextarea v-model="kanbanNewDraft.detail" name="kanbanIssueDetail" placeholder="Optional description" class="w-full" />
          </UFormField>
          <UFormField label="Priority">
            <USelect v-model="kanbanNewDraft.priority" :items="kanbanNewPriorityOptions" aria-label="New issue priority" class="w-full" />
          </UFormField>
          <UFormField label="Status">
            <USelect v-model="kanbanNewDraft.status" :items="kanbanColumns.map(column => column.status)" aria-label="New issue status" class="w-full" />
          </UFormField>
          <p v-if="kanbanNewError" class="text-error text-[12px]" role="alert">{{ kanbanNewError }}</p>
        </form>
      </template>
      <template #footer>
        <div class="flex w-full justify-end gap-2">
          <UButton label="Cancel" aria-label="Cancel new issue" color="neutral" variant="outline" @click="kanbanNewOpen = false" />
          <UButton label="Add locally" aria-label="Save new issue" @click="kanbanSaveNew" />
        </div>
      </template>
    </UModal>
    <BlockCopyTools page="/project-management/issue-kanban-1" />
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
