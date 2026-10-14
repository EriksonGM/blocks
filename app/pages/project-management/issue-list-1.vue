<!-- Page: /project-management/issue-list-1 | Local issue board demo. No issue tracker service is contacted. -->
<script setup lang="ts">
useHead({ title: 'Issue List 1 · Blocks Admin' })

// @copy:issue-list-base:start
import { computed, reactive, ref } from 'vue'
import type { FormError } from '@nuxt/ui'

type IssueStatus = 'Backlog' | 'Todo' | 'In Progress' | 'Review' | 'Done'
type IssuePriority = 'high' | 'medium' | 'low' | 'None'
type BoardIssue = { id: string, title: string, status: IssueStatus, priority: IssuePriority, subIssues: number, updated: string, assignee: string | null }

function issueInitials(name: string) { return name.split(' ').map(part => part[0]).slice(0, 2).join('').toUpperCase() }
const issueStatusOrder: IssueStatus[] = ['Backlog', 'Todo', 'In Progress', 'Review', 'Done']
const issuePriorityOrder: IssuePriority[] = ['high', 'medium', 'low', 'None']
const issueStatusDot: Record<IssueStatus, string> = { Backlog: 'bg-accented', Todo: 'bg-info', 'In Progress': 'bg-warning', Review: 'bg-secondary', Done: 'bg-success' }
const issueStatusBadge: Record<IssueStatus, string> = {
  Backlog: 'border-default bg-default text-default',
  Todo: 'border-info/20 bg-info/10 text-info',
  'In Progress': 'border-warning/20 bg-warning/10 text-warning',
  Review: 'border-secondary/20 bg-secondary/10 text-secondary',
  Done: 'border-success/20 bg-success/10 text-success',
}
function issueStatusRing(status: IssueStatus) {
  return status === 'Backlog' ? 'border-accented text-dimmed' : status === 'Todo' ? 'border-info text-info' : status === 'In Progress' ? 'border-warning text-warning' : status === 'Review' ? 'border-secondary text-secondary' : 'border-success text-success'
}
function issuePriorityLabel(priority: IssuePriority) { return priority === 'None' ? 'no priority' : `${priority} priority` }
function issueSubLabel(count: number) { return `${count} sub-issue${count === 1 ? '' : 's'}` }
// @copy:issue-list-base:end

// @copy:issue-list-data:start
const boardMembers = ['Nina Oliver', 'Kai Young', 'Ava Reed', 'Lena Moss', 'Ben Lewis', 'Maya Rao']
const boardIssues = ref<BoardIssue[]>([
  { id: 'RFC-101', title: 'Finalize issue timeline architecture', status: 'In Progress', priority: 'high', subIssues: 3, updated: 'Updated 2h ago', assignee: 'Nina Oliver' },
  { id: 'RFC-102', title: 'Review gantt interaction states', status: 'Todo', priority: 'medium', subIssues: 1, updated: 'Updated today', assignee: null },
  { id: 'RFC-103', title: 'Sync issue filters with project views', status: 'Review', priority: 'high', subIssues: 4, updated: 'Updated yesterday', assignee: 'Kai Young' },
  { id: 'RFC-104', title: 'Document drag and resize behavior', status: 'Backlog', priority: 'None', subIssues: 0, updated: 'Updated Apr 22', assignee: null },
  { id: 'RFC-105', title: 'Create empty and loading timeline states', status: 'Todo', priority: 'medium', subIssues: 2, updated: 'Updated today', assignee: null },
  { id: 'RFC-106', title: 'Add mock dependencies and handoff notes', status: 'Done', priority: 'low', subIssues: 1, updated: 'Closed today', assignee: 'Lena Moss' },
  { id: 'RFC-107', title: 'Polish the quarter view density', status: 'Review', priority: 'medium', subIssues: 2, updated: 'Updated today', assignee: 'Ava Reed' },
  { id: 'RFC-108', title: 'Prepare issue calendar follow-up screen', status: 'Backlog', priority: 'None', subIssues: 0, updated: 'Updated Apr 22', assignee: null },
])
const boardNotice = ref('Fixed example snapshot for the Renewal Forecast Console. Filters, edits and removals stay in this page.')
// @copy:issue-list-data:end

// @copy:issue-list-directory:start
const boardFilters = reactive({ query: '', status: 'All statuses', priority: 'All priorities' })
const boardFilterOpen = ref(false)
const boardCollapsed = reactive<Record<string, boolean>>({})
const boardMemberItems = computed(() => [{ label: 'No owner', value: '' }, ...boardMembers.map(member => ({ label: member, value: member }))])
const boardMatches = computed(() => {
  const query = boardFilters.query.trim().toLowerCase()
  return boardIssues.value.filter(issue => (!query || `${issue.id} ${issue.title}`.toLowerCase().includes(query))
    && (boardFilters.status === 'All statuses' || issue.status === boardFilters.status)
    && (boardFilters.priority === 'All priorities' || issue.priority === boardFilters.priority))
    .sort((a, b) => issueStatusOrder.indexOf(a.status) - issueStatusOrder.indexOf(b.status) || a.id.localeCompare(b.id))
})
const boardGroups = computed(() => issueStatusOrder
  .map(status => ({ status, issues: boardMatches.value.filter(issue => issue.status === status) }))
  .filter(group => group.issues.length > 0))
const boardTotal = computed(() => boardIssues.value.length)
const boardShown = computed(() => boardMatches.value.length)
const boardActiveFilters = computed(() => [boardFilters.query.trim() ? 1 : 0, boardFilters.status === 'All statuses' ? 0 : 1, boardFilters.priority === 'All priorities' ? 0 : 1].reduce((sum, value) => sum + value, 0))
function clearBoardFilters() { Object.assign(boardFilters, { query: '', status: 'All statuses', priority: 'All priorities' }); boardNotice.value = 'Filters cleared.' }
function toggleBoardGroup(status: string) { boardCollapsed[status] = !boardCollapsed[status] }
function setAllBoardGroups(collapsed: boolean) { issueStatusOrder.forEach(status => { boardCollapsed[status] = collapsed }); boardNotice.value = collapsed ? 'All groups collapsed locally.' : 'All groups expanded locally.' }
const boardOptionItems = computed(() => [[
  { label: 'Filter issues', icon: 'i-lucide-sliders-horizontal', onSelect: () => { boardFilterOpen.value = true } },
  { label: 'Add issue', icon: 'i-lucide-plus', onSelect: () => openBoardEditor() },
], [
  { label: 'Expand all groups', icon: 'i-lucide-maximize', onSelect: () => setAllBoardGroups(false) },
  { label: 'Collapse all groups', icon: 'i-lucide-minimize', onSelect: () => setAllBoardGroups(true) },
]])
const boardEditorOpen = ref(false)
const boardEditorId = ref('')
const boardEditorDraft = reactive({ title: '', status: 'Todo' as IssueStatus, priority: 'medium' as IssuePriority, assignee: '' })
function openBoardEditor(issue?: BoardIssue, status: IssueStatus = 'Todo') {
  boardEditorId.value = issue?.id || ''
  Object.assign(boardEditorDraft, { title: issue?.title || '', status: issue?.status || status, priority: issue?.priority || 'medium', assignee: issue?.assignee || '' })
  boardEditorOpen.value = true
}
function validateBoardDraft(state: Partial<typeof boardEditorDraft>): FormError[] {
  const title = state.title?.trim() || ''
  if (!title) return [{ name: 'title', message: 'Enter an issue title.' }]
  if (title.length > 120) return [{ name: 'title', message: 'Keep the title under 120 characters.' }]
  return []
}
function saveBoardIssue() {
  if (validateBoardDraft(boardEditorDraft).length) return
  const values = { title: boardEditorDraft.title.trim(), status: boardEditorDraft.status, priority: boardEditorDraft.priority, assignee: boardEditorDraft.assignee || null }
  if (boardEditorId.value) {
    const issue = boardIssues.value.find(item => item.id === boardEditorId.value)
    if (!issue) return
    Object.assign(issue, values)
    boardNotice.value = `${issue.id} updated locally. No issue tracker was contacted.`
  } else {
    const used = boardIssues.value.map(issue => Number(issue.id.slice(4)))
    const next = (used.length ? Math.max(...used) : 100) + 1
    boardIssues.value.push({ id: `RFC-${next}`, subIssues: 0, updated: 'Created just now', ...values })
    boardNotice.value = `RFC-${next} created locally with no assignee notification.`
  }
  boardEditorOpen.value = false
}
const boardAssignOpen = ref(false)
const boardAssignId = ref('')
const boardAssignDraft = ref('')
const boardAssignIssue = computed(() => boardIssues.value.find(issue => issue.id === boardAssignId.value))
function openBoardAssign(issue: BoardIssue) { boardAssignId.value = issue.id; boardAssignDraft.value = issue.assignee || ''; boardAssignOpen.value = true }
function saveBoardAssign() {
  if (!boardAssignIssue.value) return
  boardAssignIssue.value.assignee = boardAssignDraft.value || null
  boardNotice.value = `${boardAssignId.value} assigned to ${boardAssignDraft.value || 'no owner'} locally; nobody was notified.`
  boardAssignOpen.value = false
}
function advanceBoardIssue(id: string) {
  const issue = boardIssues.value.find(item => item.id === id)
  if (!issue) return
  const next = issueStatusOrder[issueStatusOrder.indexOf(issue.status) + 1]
  if (!next) { boardNotice.value = `${id} is already in the final status.`; return }
  issue.status = next
  boardNotice.value = `${id} moved to ${next} in this local board only.`
}
function removeBoardIssue(id: string) {
  boardIssues.value = boardIssues.value.filter(issue => issue.id !== id)
  boardNotice.value = `${id} removed from this in-memory board only.`
}
function boardRowMenu(issue: BoardIssue) {
  return [[
    { label: 'Edit issue', icon: 'i-lucide-pencil', onSelect: () => openBoardEditor(issue) },
    { label: issue.assignee ? 'Reassign issue' : 'Assign issue', icon: 'i-lucide-user-round', onSelect: () => openBoardAssign(issue) },
  ], [
    { label: 'Move to next status', icon: 'i-lucide-arrow-right', onSelect: () => advanceBoardIssue(issue.id) },
    { label: 'Remove issue', icon: 'i-lucide-trash-2', color: 'error' as const, onSelect: () => removeBoardIssue(issue.id) },
  ]]
}
// @copy:issue-list-directory:end
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/issue-list-1">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default flex h-full min-h-0 flex-1 flex-col overflow-hidden">
          <section data-copy-block="issue-list-toolbar" tabindex="0" aria-label="Issue board toolbar" class="border-b border-default">
            <div class="flex min-h-14 items-center gap-4 px-4 sm:px-6">
              <div class="no-scrollbar flex min-w-0 flex-1 items-center overflow-x-auto">
                <div class="flex shrink-0 items-center gap-2 pr-1">
                  <div class="bg-muted text-highlighted flex size-7 items-center justify-center rounded-md">
                    <UIcon name="i-lucide-folder-kanban" class="size-4" />
                  </div>
                  <span class="text-(--ui-text-highlighted)/85 max-w-48 truncate px-2 text-[14px] font-medium">Renewal Forecast Console</span>
                </div>
                <UDropdownMenu :items="boardOptionItems" :content="{ align: 'start' }">
                  <UButton color="neutral" variant="soft" class="inline-flex size-8 shrink-0 items-center justify-center rounded-md hover:bg-elevated" aria-label="Project options" icon="i-lucide-ellipsis" />
                </UDropdownMenu>
              </div>
              <div class="flex shrink-0 items-center gap-2">
                <UButton color="neutral" variant="outline" class="inline-flex size-8 items-center justify-center rounded-md border border-default bg-default shadow-xs hover:bg-elevated" :aria-label="`Filter issues${boardActiveFilters ? ` (${boardActiveFilters} active)` : ''}`" icon="i-lucide-sliders-horizontal" @click="boardFilterOpen = true" />
                <UButton color="primary" variant="solid" class="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-md px-3 text-xs shadow-sm" aria-label="Add issue" icon="i-lucide-plus" @click="openBoardEditor()">
                  Add issue
                </UButton>
              </div>
            </div>
            <p role="status" class="px-4 pb-2 text-xs text-muted sm:px-6">{{ boardNotice }}</p>
          </section>
          <section data-copy-block="issue-list-board" tabindex="0" aria-label="Issues grouped by status" class="flex min-h-0 flex-1 flex-col">
            <div class="flex min-h-11 flex-wrap items-center justify-between gap-2 border-b px-4 py-1.5 sm:px-6 border-default">
              <div class="text-highlighted text-[14px] font-semibold">{{ boardShown }} of {{ boardTotal }} Issues</div>
              <div class="text-muted text-[13px] font-medium">Grouped by status</div>
            </div>
            <div class="flex-1 overflow-auto">
              <div v-for="group in boardGroups" :key="group.status" class="border-b last:border-b-0 border-default">
                <div class="sticky top-0 z-10 flex min-h-[50px] items-center gap-3 border-b px-4 sm:px-6 border-default bg-default dark:bg-(--ui-bg)/60">
                  <UButton color="neutral" variant="ghost" class="flex min-w-0 items-center gap-2.5 text-[14px] font-semibold text-highlighted" :aria-label="`${boardCollapsed[group.status] ? 'Expand' : 'Collapse'} ${group.status} group`" @click="toggleBoardGroup(group.status)">
                    <UIcon :name="boardCollapsed[group.status] ? 'i-lucide-chevron-right' : 'i-lucide-chevron-down'" class="text-muted size-4" />
                    <span class="flex size-4 shrink-0 items-center justify-center rounded-full border" :class="issueStatusRing(group.status)">
                      <span class="size-1.5 rounded-full" :class="issueStatusDot[group.status]" />
                    </span>
                    <span>{{ group.status }}</span>
                    <span class="text-muted rounded-full bg-default px-1.5 py-0.5 text-[11px] font-medium">{{ group.issues.length }}</span>
                  </UButton>
                  <UButton color="neutral" variant="soft" class="ml-auto inline-flex size-7 items-center justify-center rounded-md hover:bg-elevated" :aria-label="`Add issue to ${group.status}`" icon="i-lucide-plus" @click="openBoardEditor(undefined, group.status)" />
                </div>
                <div v-if="!boardCollapsed[group.status]">
                  <div v-for="issue in group.issues" :key="issue.id" class="group hover:bg-(--ui-bg-muted)/30 grid min-h-[50px] grid-cols-[88px_minmax(0,1fr)_auto] items-center gap-4 border-b px-4 transition-colors sm:px-6 border-default">
                    <div class="min-w-0">
                      <p class="truncate text-[12px] font-semibold tracking-[0.12em] text-muted uppercase">{{ issue.id }}</p>
                    </div>
                    <div class="min-w-0 py-2">
                      <p class="truncate text-[14px] font-semibold text-highlighted">{{ issue.title }}</p>
                      <div class="text-muted mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>{{ issue.updated }}</span>
                        <span aria-hidden="true">/</span>
                        <span class="capitalize">{{ issuePriorityLabel(issue.priority) }}</span>
                        <template v-if="issue.subIssues">
                          <span aria-hidden="true">/</span>
                          <span>{{ issueSubLabel(issue.subIssues) }}</span>
                        </template>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium" :class="issueStatusBadge[issue.status]">
                        <span class="size-1.5 rounded-full" :class="issueStatusDot[issue.status]" />
                        <span>{{ issue.status }}</span>
                      </UBadge>
                      <div v-if="issue.assignee" class="inline-flex h-7 items-center gap-2 rounded-md border border-default bg-default px-2">
                        <span class="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[9px] font-semibold text-primary" aria-hidden="true">{{ issueInitials(issue.assignee) }}</span>
                        <span class="hidden text-[12px] font-medium text-toned xl:inline">{{ issue.assignee }}</span>
                      </div>
                      <UButton v-else color="neutral" variant="soft" class="inline-flex size-7 items-center justify-center rounded-md opacity-70 transition-opacity group-hover:opacity-100" :aria-label="`Assign ${issue.id}`" icon="i-lucide-user-round" @click="openBoardAssign(issue)" />
                      <UDropdownMenu :items="boardRowMenu(issue)" :content="{ align: 'end' }">
                        <UButton color="neutral" variant="soft" class="inline-flex size-7 items-center justify-center rounded-md opacity-70 transition-opacity group-hover:opacity-100" :aria-label="`More actions for ${issue.id}`" icon="i-lucide-ellipsis" />
                      </UDropdownMenu>
                    </div>
                  </div>
                  <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted flex min-h-8 w-full items-center gap-2 bg-(--ui-bg)/65 px-4 text-[12px] font-medium sm:px-6" :aria-label="`New issue in ${group.status}`" icon="i-lucide-plus" @click="openBoardEditor(undefined, group.status)">
                    New issue
                  </UButton>
                </div>
              </div>
              <p v-if="!boardGroups.length" class="p-6 text-sm text-muted" role="status">No issues match the current filters. Clear the filters to see the full board.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
    <UModal data-copy-fragment="issue-list-filter-dialog" v-model:open="boardFilterOpen" title="Filter issues" description="Filters apply to this local board only; no issue tracker is queried.">
      <template #body>
        <div class="space-y-4">
          <UFormField label="Search"><UInput v-model="boardFilters.query" name="boardFilterQuery" placeholder="Issue ID or title" icon="i-lucide-search" class="w-full" /></UFormField>
          <UFormField label="Status"><USelect v-model="boardFilters.status" :items="['All statuses', ...issueStatusOrder]" aria-label="Filter issues by status" class="w-full" /></UFormField>
          <UFormField label="Priority"><USelect v-model="boardFilters.priority" :items="['All priorities', ...issuePriorityOrder]" aria-label="Filter issues by priority" class="w-full" /></UFormField>
          <p class="text-sm text-muted" aria-live="polite">{{ boardShown }} of {{ boardTotal }} issues match.</p>
        </div>
      </template>
      <template #footer>
        <div class="flex w-full justify-end gap-2">
          <UButton label="Clear filters" aria-label="Clear issue filters" color="neutral" variant="outline" @click="clearBoardFilters" />
          <UButton label="Show results" aria-label="Apply issue filters" @click="boardFilterOpen = false" />
        </div>
      </template>
    </UModal>
    <UModal data-copy-fragment="issue-list-editor-dialog" v-model:open="boardEditorOpen" :title="boardEditorId ? `Edit ${boardEditorId}` : 'Create issue'" description="Saved in this page's memory only. Nothing is sent to an issue tracker.">
      <template #body>
        <UForm :state="boardEditorDraft" :validate="validateBoardDraft" class="space-y-4" novalidate @submit="saveBoardIssue">
          <UFormField label="Title" name="title" required><UInput v-model="boardEditorDraft.title" name="boardIssueTitle" class="w-full" /></UFormField>
          <UFormField label="Status" name="status"><USelect v-model="boardEditorDraft.status" :items="issueStatusOrder" aria-label="Issue status" class="w-full" /></UFormField>
          <UFormField label="Priority" name="priority"><USelect v-model="boardEditorDraft.priority" :items="issuePriorityOrder" aria-label="Issue priority" class="w-full" /></UFormField>
          <UFormField label="Assignee" name="assignee"><USelect v-model="boardEditorDraft.assignee" :items="boardMemberItems" aria-label="Issue assignee" class="w-full" /></UFormField>
          <div class="flex justify-end gap-2">
            <UButton label="Cancel" aria-label="Cancel issue editor" color="neutral" variant="outline" @click="boardEditorOpen = false" />
            <UButton label="Save locally" aria-label="Save issue" type="submit" />
          </div>
        </UForm>
      </template>
    </UModal>
    <UModal data-copy-fragment="issue-list-assign-dialog" v-model:open="boardAssignOpen" :title="`Assign ${boardAssignId || 'issue'}`" description="Local reassignment preview. No workspace member is notified.">
      <template #body>
        <UFormField label="Assignee"><USelect v-model="boardAssignDraft" :items="boardMemberItems" aria-label="Assign member" class="w-full" /></UFormField>
      </template>
      <template #footer>
        <div class="flex w-full justify-end gap-2">
          <UButton label="Cancel" aria-label="Cancel issue assignment" color="neutral" variant="outline" @click="boardAssignOpen = false" />
          <UButton label="Assign locally" aria-label="Save issue assignment" @click="saveBoardAssign" />
        </div>
      </template>
    </UModal>
    <BlockCopyTools page="/project-management/issue-list-1" />
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
