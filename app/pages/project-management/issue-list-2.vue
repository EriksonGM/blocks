<!-- Page: /project-management/issue-list-2 | Local grouped issue list demo. No issue tracker service is contacted. -->
<script setup lang="ts">
useHead({ title: 'Issue List 2 · Blocks Admin' })

// @copy:issue-list2-base:start
import { computed, reactive, ref } from 'vue'
import type { FormError } from '@nuxt/ui'

type List2Status = 'Backlog' | 'Todo' | 'In Progress' | 'Review' | 'Done'
type List2Issue = { id: string, title: string, status: List2Status, module: string, comments: number, estimate: string, due: string, pullRequest: boolean, assignee: string | null }

function list2Initials(name: string) { return name.split(' ').map(part => part[0]).slice(0, 2).join('').toUpperCase() }
const list2StatusOrder: List2Status[] = ['Backlog', 'Todo', 'In Progress', 'Review', 'Done']
const list2StatusColor: Record<List2Status, string> = { Backlog: 'text-dimmed', Todo: 'text-info', 'In Progress': 'text-warning', Review: 'text-secondary', Done: 'text-success' }
const list2StatusHeader: Record<List2Status, string> = {
  Backlog: 'border-accented bg-(--ui-bg-elevated)/70 text-toned',
  Todo: 'border-info/20 bg-info/60 text-info',
  'In Progress': 'border-warning/20 bg-warning/60 text-warning',
  Review: 'border-secondary/20 bg-secondary/60 text-secondary',
  Done: 'border-success/20 bg-success/60 text-success',
}
function list2StatusIcon(status: List2Status) { return status === 'Backlog' ? 'i-lucide-circle' : 'i-lucide-check' }
// @copy:issue-list2-base:end

// @copy:issue-list2-data:start
const list2Members = ['Nina Oliver', 'Kai Young', 'Ava Reed', 'Lena Moss', 'Ben Lewis']
const list2Issues = ref<List2Issue[]>([
  { id: 'RFC-101', title: 'Finalize issue timeline architecture', status: 'In Progress', module: 'Platform', comments: 0, estimate: '0h', due: '12 May', pullRequest: true, assignee: 'Nina Oliver' },
  { id: 'RFC-102', title: 'Review gantt interaction states', status: 'Todo', module: 'Planning', comments: 1, estimate: '0h', due: '9 May', pullRequest: false, assignee: null },
  { id: 'RFC-103', title: 'Sync issue filters with project views', status: 'Review', module: 'Views', comments: 2, estimate: '0h', due: '8 Feb', pullRequest: true, assignee: null },
  { id: 'RFC-104', title: 'Document drag and resize behavior', status: 'Backlog', module: 'Guidelines', comments: 0, estimate: '0h', due: '7 Oct', pullRequest: false, assignee: null },
  { id: 'RFC-105', title: 'Create empty and loading timeline states', status: 'Todo', module: 'States', comments: 0, estimate: '0h', due: '21 Apr', pullRequest: false, assignee: null },
  { id: 'RFC-106', title: 'Add mock dependencies and handoff notes', status: 'Done', module: 'Operations', comments: 1, estimate: '0h', due: '7 Apr', pullRequest: false, assignee: 'Lena Moss' },
  { id: 'RFC-107', title: 'Polish the quarter view density', status: 'Review', module: 'Density', comments: 0, estimate: '0h', due: '26 Jun', pullRequest: true, assignee: 'Ava Reed' },
  { id: 'RFC-108', title: 'Prepare issue calendar follow-up screen', status: 'Backlog', module: 'Calendar', comments: 1, estimate: '0h', due: '20 Mar', pullRequest: true, assignee: null },
  { id: 'RFC-109', title: 'Verify saved view presets across workspaces', status: 'Review', module: 'Views', comments: 1, estimate: '0h', due: '18 Jun', pullRequest: true, assignee: null },
  { id: 'RFC-110', title: 'Define backlog import edge cases', status: 'Backlog', module: 'Import', comments: 0, estimate: '0h', due: '4 Aug', pullRequest: false, assignee: null },
  { id: 'RFC-111', title: 'Map keyboard shortcuts to list rows', status: 'Todo', module: 'Accessibility', comments: 2, estimate: '0h', due: '2 May', pullRequest: false, assignee: null },
  { id: 'RFC-112', title: 'Tune inline issue activity affordances', status: 'In Progress', module: 'Activity', comments: 2, estimate: '0h', due: '22 May', pullRequest: true, assignee: 'Kai Young' },
  { id: 'RFC-113', title: 'Connect keyboard focus states to list navigation', status: 'In Progress', module: 'Accessibility', comments: 0, estimate: '0h', due: '30 May', pullRequest: false, assignee: null },
  { id: 'RFC-114', title: 'Retire the legacy cycle picker', status: 'Done', module: 'Planning', comments: 0, estimate: '0h', due: '3 Apr', pullRequest: false, assignee: null },
  { id: 'RFC-115', title: 'Document the local board limitations', status: 'Done', module: 'Guidelines', comments: 1, estimate: '0h', due: '15 Apr', pullRequest: false, assignee: 'Lena Moss' },
])
const list2Notice = ref('Fixed example snapshot. Filters, edits and removals stay in this page only.')
// @copy:issue-list2-data:end

// @copy:issue-list2-directory:start
const list2Filters = reactive({ status: 'All statuses', module: 'All modules', unassignedOnly: false })
const list2FilterOpen = ref(false)
const list2Collapsed = reactive<Record<string, boolean>>({ Todo: true, Done: true })
const list2MemberItems = computed(() => [{ label: 'No owner', value: '' }, ...list2Members.map(member => ({ label: member, value: member }))])
const list2ModuleItems = computed(() => ['All modules', ...new Set(list2Issues.value.map(issue => issue.module))].sort())
const list2Matches = computed(() => list2Issues.value.filter(issue => (list2Filters.status === 'All statuses' || issue.status === list2Filters.status)
  && (list2Filters.module === 'All modules' || issue.module === list2Filters.module)
  && (!list2Filters.unassignedOnly || !issue.assignee)))
const list2Groups = computed(() => list2StatusOrder.map(status => ({ status, issues: list2Matches.value.filter(issue => issue.status === status) })).filter(group => group.issues.length > 0))
const list2Total = computed(() => list2Issues.value.length)
const list2Shown = computed(() => list2Matches.value.length)
const list2ActiveFilters = computed(() => [list2Filters.status === 'All statuses' ? 0 : 1, list2Filters.module === 'All modules' ? 0 : 1, list2Filters.unassignedOnly ? 1 : 0].reduce((sum, value) => sum + value, 0))
function clearList2Filters() { Object.assign(list2Filters, { status: 'All statuses', module: 'All modules', unassignedOnly: false }); list2Notice.value = 'Filters cleared.' }
function toggleList2Group(status: string) { list2Collapsed[status] = !list2Collapsed[status] }
function setAllList2Groups(collapsed: boolean) { list2StatusOrder.forEach(status => { list2Collapsed[status] = collapsed }); list2Notice.value = collapsed ? 'All groups collapsed locally.' : 'All groups expanded locally.' }
const list2OptionItems = computed(() => [[
  { label: 'Filter issues', icon: 'i-lucide-sliders-horizontal', onSelect: () => { list2FilterOpen.value = true } },
  { label: 'Add issue', icon: 'i-lucide-plus', onSelect: () => openList2Editor() },
], [
  { label: 'Expand all groups', icon: 'i-lucide-maximize', onSelect: () => setAllList2Groups(false) },
  { label: 'Collapse all groups', icon: 'i-lucide-minimize', onSelect: () => setAllList2Groups(true) },
]])
const list2EditorOpen = ref(false)
const list2EditorId = ref('')
const list2EditorDraft = reactive({ title: '', status: 'Todo' as List2Status, module: 'Planning' })
function openList2Editor(issue?: List2Issue, status: List2Status = 'Todo') {
  list2EditorId.value = issue?.id || ''
  Object.assign(list2EditorDraft, { title: issue?.title || '', status: issue?.status || status, module: issue?.module || 'Planning' })
  list2EditorOpen.value = true
}
function validateList2Draft(state: Partial<typeof list2EditorDraft>): FormError[] {
  const title = state.title?.trim() || ''
  if (!title) return [{ name: 'title', message: 'Enter an issue title.' }]
  if (title.length > 120) return [{ name: 'title', message: 'Keep the title under 120 characters.' }]
  return []
}
function saveList2Issue() {
  if (validateList2Draft(list2EditorDraft).length) return
  const values = { title: list2EditorDraft.title.trim(), status: list2EditorDraft.status, module: list2EditorDraft.module }
  if (list2EditorId.value) {
    const issue = list2Issues.value.find(item => item.id === list2EditorId.value)
    if (!issue) return
    Object.assign(issue, values)
    list2Notice.value = `${issue.id} updated locally. No issue tracker was contacted.`
  } else {
    const used = list2Issues.value.map(issue => Number(issue.id.slice(4)))
    const next = (used.length ? Math.max(...used) : 100) + 1
    list2Issues.value.push({ id: `RFC-${next}`, ...values, comments: 0, estimate: '0h', due: 'Not set', pullRequest: false, assignee: null })
    list2Notice.value = `RFC-${next} created locally in ${values.status}.`
  }
  list2EditorOpen.value = false
}
const list2AssignOpen = ref(false)
const list2AssignId = ref('')
const list2AssignDraft = ref('')
const list2AssignIssue = computed(() => list2Issues.value.find(issue => issue.id === list2AssignId.value))
function openList2Assign(issue: List2Issue) { list2AssignId.value = issue.id; list2AssignDraft.value = issue.assignee || ''; list2AssignOpen.value = true }
function saveList2Assign() {
  if (!list2AssignIssue.value) return
  list2AssignIssue.value.assignee = list2AssignDraft.value || null
  list2Notice.value = `${list2AssignId.value} assigned to ${list2AssignDraft.value || 'no owner'} locally; nobody was notified.`
  list2AssignOpen.value = false
}
function advanceList2Issue(id: string) {
  const issue = list2Issues.value.find(item => item.id === id)
  if (!issue) return
  const next = list2StatusOrder[list2StatusOrder.indexOf(issue.status) + 1]
  if (!next) { list2Notice.value = `${id} is already in the final status.`; return }
  issue.status = next
  list2Notice.value = `${id} moved to ${next} in this local board only.`
}
function removeList2Issue(id: string) {
  list2Issues.value = list2Issues.value.filter(issue => issue.id !== id)
  list2Notice.value = `${id} removed from this in-memory list only.`
}
function list2RowMenu(issue: List2Issue) {
  return [[
    { label: 'Edit issue', icon: 'i-lucide-pencil', onSelect: () => openList2Editor(issue) },
    { label: issue.assignee ? 'Reassign issue' : 'Assign issue', icon: 'i-lucide-user-round', onSelect: () => openList2Assign(issue) },
  ], [
    { label: 'Move to next status', icon: 'i-lucide-arrow-right', onSelect: () => advanceList2Issue(issue.id) },
    { label: 'Remove issue', icon: 'i-lucide-trash-2', color: 'error' as const, onSelect: () => removeList2Issue(issue.id) },
  ]]
}
// @copy:issue-list2-directory:end
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/issue-list-2">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default flex h-full min-h-0 flex-1 flex-col overflow-hidden">
          <section data-copy-block="issue-list2-toolbar" tabindex="0" aria-label="Issue list toolbar" class="border-default border-b">
            <div class="flex min-h-14 items-center gap-4 px-4 sm:px-6">
              <div class="no-scrollbar flex min-w-0 flex-1 items-center overflow-x-auto">
                <div class="flex shrink-0 items-center gap-2 pr-1">
                  <div class="bg-muted text-highlighted flex size-7 items-center justify-center rounded-md">
                    <UIcon name="i-lucide-folder-kanban" class="size-4" />
                  </div>
                  <span class="text-(--ui-text-highlighted)/85 max-w-48 truncate px-2 text-[14px] font-medium">Renewal Forecast Console</span>
                </div>
                <UDropdownMenu :items="list2OptionItems" :content="{ align: 'start' }">
                  <UButton color="neutral" variant="soft" class="inline-flex size-8 shrink-0 items-center justify-center rounded-md hover:bg-elevated" aria-label="Project options" icon="i-lucide-ellipsis" />
                </UDropdownMenu>
              </div>
              <div class="flex shrink-0 items-center gap-2">
                <UButton color="neutral" variant="outline" class="inline-flex size-8 items-center justify-center rounded-md border border-default bg-default shadow-xs hover:bg-elevated" :aria-label="`Filter issues${list2ActiveFilters ? ` (${list2ActiveFilters} active)` : ''}`" icon="i-lucide-sliders-horizontal" @click="list2FilterOpen = true" />
                <UButton color="primary" variant="solid" class="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-md px-3 text-xs shadow-sm" aria-label="Add issue" icon="i-lucide-plus" @click="openList2Editor()">
                  Add issue
                </UButton>
              </div>
            </div>
            <p role="status" class="px-4 pb-2 text-xs text-muted sm:px-6">{{ list2Notice }}</p>
          </section>
          <section data-copy-block="issue-list2-board" tabindex="0" aria-label="Issues grouped by status" class="flex min-h-0 flex-1 flex-col">
            <div class="flex min-h-11 flex-wrap items-center justify-between gap-2 border-b px-4 py-1.5 sm:px-6 border-default">
              <div class="text-highlighted text-[14px] font-semibold">{{ list2Shown }} of {{ list2Total }} Issues</div>
              <div class="text-muted text-[13px] font-medium">Grouped by status</div>
            </div>
            <div class="flex-1 overflow-auto bg-default p-3">
              <div class="min-w-[760px] space-y-2 md:min-w-0">
                <section v-for="group in list2Groups" :key="group.status" class="overflow-hidden rounded-[4px] border border-accented dark:border-default">
                  <UButton color="neutral" variant="outline" class="flex h-[42px] w-full items-center gap-2 px-3 text-left text-[14px] font-medium" :class="list2StatusHeader[group.status]" :aria-label="`${list2Collapsed[group.status] ? 'Expand' : 'Collapse'} ${group.status} group`" @click="toggleList2Group(group.status)">
                    <UIcon :name="list2Collapsed[group.status] ? 'i-lucide-chevron-right' : 'i-lucide-chevron-down'" class="size-3.5" />
                    <span class="inline-flex size-3.5 items-center justify-center rounded-full border" :class="list2StatusColor[group.status]">
                      <UIcon :name="list2StatusIcon(group.status)" class="size-2.5" />
                    </span>
                    <span>{{ group.status }}</span>
                    <span class="text-muted">{{ group.issues.length }}</span>
                  </UButton>
                  <div v-if="!list2Collapsed[group.status]">
                    <div v-for="issue in group.issues" :key="issue.id" class="group grid h-11 grid-cols-[34px_92px_34px_minmax(260px,1fr)_auto] items-center border-b border-default bg-(--ui-bg-muted)/60 text-[13px] transition-colors last:border-b-0 hover:bg-(--ui-bg-elevated)/70">
                      <div class="flex justify-end pr-1.5" :class="list2StatusColor[issue.status]">
                        <UIcon name="i-lucide-signal" class="size-3.5" />
                      </div>
                      <div class="truncate font-medium text-muted">{{ issue.id }}</div>
                      <div class="flex items-center justify-center" :class="list2StatusColor[issue.status]">
                        <span class="inline-flex size-3.5 items-center justify-center rounded-full border">
                          <UIcon :name="list2StatusIcon(issue.status)" class="size-2.5" />
                        </span>
                      </div>
                      <div class="flex min-w-0 items-center gap-2 pr-4">
                        <UIcon v-if="issue.pullRequest" name="i-lucide-git-pull-request" class="size-4 shrink-0" :class="list2StatusColor[issue.status]" />
                        <span class="truncate text-highlighted">{{ issue.title }}</span>
                        <UBadge v-if="issue.comments" color="neutral" variant="subtle" class="inline-flex h-6 shrink-0 items-center gap-1 rounded-full border border-accented bg-default px-2 text-[12px]">
                          <UIcon name="i-lucide-message-circle" class="size-3.5" />
                          {{ issue.comments }}
                        </UBadge>
                      </div>
                      <div class="flex h-full items-center text-muted">
                        <div class="flex w-36 items-center justify-start border-l border-default px-3">
                          <UBadge color="neutral" variant="subtle" class="inline-flex h-7 max-w-full items-center gap-1.5 rounded-full border border-default bg-default px-2 text-[12px]">
                            <UIcon name="i-lucide-tag" class="size-4" />
                            <span class="truncate">{{ issue.module }}</span>
                          </UBadge>
                        </div>
                        <div class="flex w-16 items-center gap-1 border-l border-default px-3">
                          <UIcon name="i-lucide-circle" class="size-4 text-dimmed" />
                          <span>{{ issue.estimate }}</span>
                        </div>
                        <div class="w-20 border-l border-default px-3">{{ issue.due }}</div>
                        <div class="flex w-12 justify-center">
                          <UButton color="neutral" variant="outline" class="inline-flex size-7 items-center justify-center rounded-md border border-default bg-default hover:bg-(--ui-bg-elevated)/70" :aria-label="`Assign ${issue.id}`" icon="i-lucide-user-round" @click="openList2Assign(issue)" />
                        </div>
                      </div>
                    </div>
                    <UButton color="neutral" variant="ghost" class="flex h-11 w-full items-center gap-2 px-3 text-left text-[13px] text-muted" :aria-label="`More actions for ${group.status} group`" icon="i-lucide-plus" @click="openList2Editor(undefined, group.status)">
                      New issue in {{ group.status }}
                    </UButton>
                  </div>
                </section>
                <p v-if="!list2Groups.length" class="rounded-lg border border-default p-6 text-sm text-muted" role="status">No issues match the current filters.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
    <UModal data-copy-fragment="issue-list2-filter-dialog" v-model:open="list2FilterOpen" title="Filter issues" description="Filters apply to this local list only; no issue tracker is queried.">
      <template #body>
        <div class="space-y-4">
          <UFormField label="Status"><USelect v-model="list2Filters.status" :items="['All statuses', ...list2StatusOrder]" aria-label="Filter issues by status" class="w-full" /></UFormField>
          <UFormField label="Module"><USelect v-model="list2Filters.module" :items="list2ModuleItems" aria-label="Filter issues by module" class="w-full" /></UFormField>
          <UFormField label="Ownership"><UCheckbox v-model="list2Filters.unassignedOnly" label="Only issues without an owner" aria-label="Show only unassigned issues" /></UFormField>
          <p class="text-sm text-muted" aria-live="polite">{{ list2Shown }} of {{ list2Total }} issues match.</p>
        </div>
      </template>
      <template #footer>
        <div class="flex w-full justify-end gap-2">
          <UButton label="Clear filters" aria-label="Clear issue filters" color="neutral" variant="outline" @click="clearList2Filters" />
          <UButton label="Show results" aria-label="Apply issue filters" @click="list2FilterOpen = false" />
        </div>
      </template>
    </UModal>
    <UModal data-copy-fragment="issue-list2-editor-dialog" v-model:open="list2EditorOpen" :title="list2EditorId ? `Edit ${list2EditorId}` : 'Create issue'" description="Saved in this page's memory only. Nothing is sent to an issue tracker.">
      <template #body>
        <UForm :state="list2EditorDraft" :validate="validateList2Draft" class="space-y-4" novalidate @submit="saveList2Issue">
          <UFormField label="Title" name="title" required><UInput v-model="list2EditorDraft.title" name="list2IssueTitle" class="w-full" /></UFormField>
          <UFormField label="Status" name="status"><USelect v-model="list2EditorDraft.status" :items="list2StatusOrder" aria-label="Issue status" class="w-full" /></UFormField>
          <UFormField label="Module" name="module"><UInput v-model="list2EditorDraft.module" name="list2IssueModule" class="w-full" /></UFormField>
          <div class="flex justify-end gap-2">
            <UButton label="Cancel" aria-label="Cancel issue editor" color="neutral" variant="outline" @click="list2EditorOpen = false" />
            <UButton label="Save locally" aria-label="Save issue" type="submit" />
          </div>
        </UForm>
      </template>
    </UModal>
    <UModal data-copy-fragment="issue-list2-assign-dialog" v-model:open="list2AssignOpen" :title="`Assign ${list2AssignId || 'issue'}`" description="Local reassignment preview. No workspace member is notified.">
      <template #body>
        <UFormField label="Assignee"><USelect v-model="list2AssignDraft" :items="list2MemberItems" aria-label="Assign member" class="w-full" /></UFormField>
      </template>
      <template #footer>
        <div class="flex w-full justify-end gap-2">
          <UButton label="Cancel" aria-label="Cancel issue assignment" color="neutral" variant="outline" @click="list2AssignOpen = false" />
          <UButton label="Assign locally" aria-label="Save issue assignment" @click="saveList2Assign" />
        </div>
      </template>
    </UModal>
    <BlockCopyTools page="/project-management/issue-list-2" />
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
