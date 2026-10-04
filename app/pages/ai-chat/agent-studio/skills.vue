<!-- Page: /ai-chat/agent-studio/skills | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Skills workspace · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchSkillsOrAgents": "",
  "allTypes": "All types"
})

const allTypesOptions = [
  "All types",
  "Research",
  "Strategy",
  "Engineering",
  "Writing",
  "Support"
]

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "skill": "signal-clusteringResearchGroup customer feedback into evidence-backed themes.",
    "skillArialabel5": "signal-clustering",
    "skillText7": "signal-clustering",
    "skillText9": "Research",
    "skillText11": "Group customer feedback into evidence-backed themes.",
    "usedBy": "Customer signal analyst+1",
    "usedByGroup": "0",
    "usedByArialabel3": "Manage agents for signal-clustering",
    "usedByText7": "Customer signal analyst",
    "updated": "2h ago",
    "actions": "",
    "actionsArialabel3": "Actions for signal-clustering",
    "actionsId5": "radix-_R_45jpmlubsnpfknmlb_"
  },
  {
    "_id": "2",
    "skill": "opportunity-scoringStrategyRank opportunities by reach, impact, and confidence.",
    "skillArialabel5": "opportunity-scoring",
    "skillText7": "opportunity-scoring",
    "skillText9": "Strategy",
    "skillText11": "Rank opportunities by reach, impact, and confidence.",
    "usedBy": "Customer signal analyst",
    "usedByGroup": "1",
    "usedByArialabel3": "Manage agents for opportunity-scoring",
    "usedByText7": "Customer signal analyst",
    "updated": "Yesterday",
    "actions": "",
    "actionsArialabel3": "Actions for opportunity-scoring",
    "actionsId5": "radix-_R_49jpmlubsnpfknmlb_"
  },
  {
    "_id": "3",
    "skill": "release-reviewEngineeringReview a change for regressions and rollout risks.",
    "skillArialabel5": "release-review",
    "skillText7": "release-review",
    "skillText9": "Engineering",
    "skillText11": "Review a change for regressions and rollout risks.",
    "usedBy": "Release reviewer",
    "usedByGroup": "1",
    "usedByArialabel3": "Manage agents for release-review",
    "usedByText7": "Release reviewer",
    "updated": "3d ago",
    "actions": "",
    "actionsArialabel3": "Actions for release-review",
    "actionsId5": "radix-_R_4djpmlubsnpfknmlb_"
  },
  {
    "_id": "4",
    "skill": "source-checkResearchVerify claims against the original material.",
    "skillArialabel5": "source-check",
    "skillText7": "source-check",
    "skillText9": "Research",
    "skillText11": "Verify claims against the original material.",
    "usedBy": "Customer signal analyst+1",
    "usedByGroup": "0",
    "usedByArialabel3": "Manage agents for source-check",
    "usedByText7": "Customer signal analyst",
    "updated": "4d ago",
    "actions": "",
    "actionsArialabel3": "Actions for source-check",
    "actionsId5": "radix-_R_4hjpmlubsnpfknmlb_"
  },
  {
    "_id": "5",
    "skill": "concise-writingWritingTurn detailed findings into a clear decision brief.",
    "skillArialabel5": "concise-writing",
    "skillText7": "concise-writing",
    "skillText9": "Writing",
    "skillText11": "Turn detailed findings into a clear decision brief.",
    "usedBy": "Knowledge curator+1",
    "usedByGroup": "0",
    "usedByArialabel3": "Manage agents for concise-writing",
    "usedByText7": "Knowledge curator",
    "updated": "1w ago",
    "actions": "",
    "actionsArialabel3": "Actions for concise-writing",
    "actionsId5": "radix-_R_4ljpmlubsnpfknmlb_"
  },
  {
    "_id": "6",
    "skill": "ticket-triageSupportIdentify urgency and route support requests.",
    "skillArialabel5": "ticket-triage",
    "skillText7": "ticket-triage",
    "skillText9": "Support",
    "skillText11": "Identify urgency and route support requests.",
    "usedBy": "Support coordinator",
    "usedByGroup": "1",
    "usedByArialabel3": "Manage agents for ticket-triage",
    "usedByText7": "Support coordinator",
    "updated": "1w ago",
    "actions": "",
    "actionsArialabel3": "Actions for ticket-triage",
    "actionsId5": "radix-_R_4pjpmlubsnpfknmlb_"
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "skill",
    "header": "Skill"
  },
  {
    "accessorKey": "usedBy",
    "header": "Used by"
  },
  {
    "accessorKey": "updated",
    "header": "Updated"
  },
  {
    "accessorKey": "actions",
    "header": ""
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = String(form.searchSkillsOrAgents || '').toLowerCase()
  const keys = ["skill","usedBy","updated","actions"] as const
  return table1Rows.value.filter(row => !query || keys.some(key => String(row[key]).toLowerCase().includes(query)))
})

// Restore drafts after hydration; the first client render matches SSR.
onMounted(() => {
  const key = 'nuxt-ui-page:' + route.path
  try {
    const draft = localStorage.getItem(key)
    if (draft) Object.assign(form, JSON.parse(draft))
  } catch { /* Use the defaults when no draft exists. */ }
  watch(form, value => localStorage.setItem(key, JSON.stringify(value)), { deep: true, flush: 'sync' })
})

const actionDialog = reactive({ open: false, title: '', mode: 'edit', name: '', description: '', recordId: '', table: 0 })
function openAction(label: string, recordId = '', table = 0) {
  Object.assign(actionDialog, { open: true, title: label, mode: /delete|remove|archive/i.test(label) ? 'delete' : 'edit', recordId, table })
}
function confirmAction() {
  if (actionDialog.mode === 'delete' && actionDialog.recordId) {
    if (actionDialog.table === 1) table1Rows.value = table1Rows.value.filter(row => row._id !== actionDialog.recordId)
  }
  toast.add({ title: actionDialog.mode === 'delete' ? 'Item removed' : 'Changes saved', color: 'success', icon: 'i-lucide-check' })
  actionDialog.open = false
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/agent-studio/skills">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="min-h-0 flex-1 overflow-y-auto">
        <div class="px-5 py-7 sm:px-8">
          <div class="mb-8 flex items-start justify-between gap-4">
            <div>
              <h1 class="text-xl font-semibold tracking-tight text-highlighted">Skills</h1>
              <p class="text-muted mt-1 text-xs">A shared way of doing good work.</p>
            </div>
            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Create skill" type="button" @click="openAction(&quot;Create skill&quot;)">
              <UIcon name="i-lucide-plus" class="size-3.5" />
              Create skill
            </UButton>
          </div>
          <section>
            <div class="mb-3 flex items-center justify-between">
              <h2 id="packs-title" class="text-sm font-medium text-highlighted">Start with a collection</h2>
              <span class="text-muted hidden text-[11px] sm:block">Curated for the way your team works</span>
            </div>
            <div class="grid gap-4 md:grid-cols-3">
              <article class="group overflow-hidden rounded-xl border border-default">
                <div class="relative flex h-[106px] items-center justify-center overflow-hidden border-b bg-success/10 dark:bg-success/20 border-default">
                  <div class="absolute inset-0 opacity-30" />
                  <div class="relative flex items-center">
                    <div class="size-14 rounded-full border border-success/40 bg-success/15" />
                    <div class="-ml-6 size-14 rounded-full border border-success/60 bg-success/25" />
                    <div class="-ml-6 size-14 rounded-full border border-success/40 bg-success/15" />
                  </div>
                  <span class="text-muted absolute right-3 bottom-2 text-[10px]">3 skills</span>
                </div>
                <div class="p-4">
                  <p class="text-muted mb-1.5 text-[10px]">Research &amp; strategy</p>
                  <h3 class="text-[13px] font-medium text-highlighted">Customer intelligence</h3>
                  <p class="text-muted mt-1 text-xs leading-5">From scattered feedback to a clear next step.</p>
                  <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default rounded-md mt-3 h-7 px-0 text-xs hover:bg-transparent" aria-label="View collection" type="button" @click="openAction(&quot;View collection&quot;)">
                    View collection
                    <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                  </UButton>
                </div>
              </article>
              <article class="group overflow-hidden rounded-xl border border-default">
                <div class="relative flex h-[106px] items-center justify-center overflow-hidden border-b bg-(--ui-bg-muted)/40 border-default">
                  <div class="absolute inset-0 opacity-30 bg-[radial-gradient(var(--ui-text-muted)_1px,transparent_1px)] bg-size-[12px_12px]" />
                  <div class="relative flex -rotate-6 gap-2">
                    <div class="bg-default flex size-11 items-center justify-center rounded-lg border font-mono text-sm text-success shadow-sm border-default">&lt;/&gt;</div>
                    <div class="bg-default mt-4 flex size-11 items-center justify-center rounded-lg border shadow-sm border-default">
                      <UIcon name="i-lucide-check" class="size-5 text-success" />
                    </div>
                  </div>
                  <span class="text-muted absolute right-3 bottom-2 text-[10px]">2 skills</span>
                </div>
                <div class="p-4">
                  <p class="text-muted mb-1.5 text-[10px]">Development</p>
                  <h3 class="text-[13px] font-medium text-highlighted">Engineering review</h3>
                  <p class="text-muted mt-1 text-xs leading-5">Ship changes with evidence and confidence.</p>
                  <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default rounded-md mt-3 h-7 px-0 text-xs hover:bg-transparent" aria-label="View collection" type="button" @click="openAction(&quot;View collection&quot;)">
                    View collection
                    <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                  </UButton>
                </div>
              </article>
              <article class="group overflow-hidden rounded-xl border border-default">
                <div class="relative flex h-[106px] items-center justify-center overflow-hidden border-b bg-default dark:bg-(--ui-bg)/30 border-default">
                  <div class="absolute inset-0 opacity-30" />
                  <div class="bg-default relative w-28 rotate-[-4deg] space-y-2 rounded-lg border p-3 shadow-sm border-default">
                    <div class="flex gap-2">
                      <span class="size-2 rounded-full bg-success/70" />
                      <span class="bg-muted h-2 w-14 rounded" />
                    </div>
                    <div class="bg-muted h-1 w-20 rounded" />
                    <div class="bg-muted h-1 w-16 rounded" />
                  </div>
                  <span class="text-muted absolute right-3 bottom-2 text-[10px]">2 skills</span>
                </div>
                <div class="p-4">
                  <p class="text-muted mb-1.5 text-[10px]">Customer experience</p>
                  <h3 class="text-[13px] font-medium text-highlighted">Support operations</h3>
                  <p class="text-muted mt-1 text-xs leading-5">Triage quickly. Keep the human in the loop.</p>
                  <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default rounded-md mt-3 h-7 px-0 text-xs hover:bg-transparent" aria-label="View collection" type="button" @click="openAction(&quot;View collection&quot;)">
                    View collection
                    <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                  </UButton>
                </div>
              </article>
            </div>
          </section>
          <section class="mt-10">
            <h2 id="individual-title" class="mb-4 flex items-center gap-2 text-sm font-medium text-highlighted">
              Workspace skills
              <span class="text-muted text-xs font-normal">6</span>
            </h2>
            <div class="mb-4 flex flex-wrap items-center gap-2">
              <div class="relative w-full sm:w-64">
                <UIcon name="i-lucide-search" class="text-muted absolute top-2.5 left-2.5 size-3.5" />
                <UInput v-model="form.searchSkillsOrAgents" type="text" aria-label="Search studio skills" placeholder="Search skills or agents…" name="searchSkillsOrAgents" class="flex w-full rounded-md md:text-sm h-9 pl-8 text-sm" :ui="{ base: 'h-full' }" />
              </div>
              <USelect v-model="form.allTypes" :items="allTypesOptions" aria-label="Skill type" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between rounded-md border bg-transparent px-3 py-2 whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-9 w-40 text-sm" />
            </div>
            <div class="overflow-hidden rounded-lg border border-default">
              <div class="relative w-full overflow-auto">
                <!-- Table 1: Skill / Used by / Updated -->
                <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full caption-bottom text-sm table-fixed" aria-label="Workspace skills" style="min-width:768px" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #skill-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Skill" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #skill-cell="{ row }">
                    <div class="min-w-0 py-1">
                      <div class="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented rounded-sm text-left text-[13px] font-medium outline-none hover:underline focus-visible:ring-2" :aria-label="row.original.skillArialabel5" type="button" @click="openAction(&quot;signal-clustering&quot;, row.original._id, 1)">
                          {{ row.original.skillText7 }}
                        </UButton>
                        <span class="text-muted bg-muted rounded border px-1.5 py-0.5 text-[10px] leading-3 border-default">{{ row.original.skillText9 }}</span>
                      </div>
                      <p class="text-muted mt-1.5 text-xs leading-5">{{ row.original.skillText11 }}</p>
                    </div>
                  </template>
                  <template #usedBy-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Used by" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #usedBy-cell="{ row }">
                    <template v-if="row.original.usedByGroup === '0'">
                      <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented flex w-full min-w-0 items-center gap-2 rounded-sm text-left text-xs outline-none hover:underline focus-visible:ring-2" :aria-label="row.original.usedByArialabel3" type="button" @click="openAction(&quot;Customer signal analyst+1&quot;, row.original._id, 1)">
                        <span class="truncate">{{ row.original.usedByText7 }}</span>
                        <span class="text-muted bg-muted shrink-0 rounded px-1.5 py-0.5 text-[10px] tabular-nums">+1</span>
                      </UButton>
                    </template>
                    <template v-if="row.original.usedByGroup === '1'">
                      <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented flex w-full min-w-0 items-center gap-2 rounded-sm text-left text-xs outline-none hover:underline focus-visible:ring-2" :aria-label="row.original.usedByArialabel3" type="button" @click="openAction(&quot;Customer signal analyst&quot;, row.original._id, 1)">
                        <span class="truncate">{{ row.original.usedBy }}</span>
                      </UButton>
                    </template>
                  </template>
                  <template #updated-header="{ column }">
                    <UButton color="neutral" variant="ghost" size="xs" label="Updated" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
                  </template>
                  <template #updated-cell="{ row }">
                    <span class="text-muted text-xs whitespace-nowrap">{{ row.original.updated }}</span>
                  </template>
                  <template #actions-cell="{ row }">
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" :aria-label="row.original.actionsArialabel3" type="button" @click="openAction(&quot;Actions for signal-clustering&quot;, row.original._id, 1)">
                      <UIcon name="i-lucide-ellipsis" class="size-4" />
                    </UButton>
                  </template>
                </UTable>
              </div>
            </div>
            <footer class="text-muted flex flex-wrap items-center justify-between gap-3 py-3 text-xs">
              <span>6 of 6 skills</span>
              <span>4 workspace agents</span>
            </footer>
          </section>
        </div>
      </div>
    </div>
    <!-- Page-local action dialog -->
    <UModal v-model:open="actionDialog.open" :title="actionDialog.title" description="Update the details below.">
      <template #body>
        <p v-if="actionDialog.mode === 'delete'" class="text-sm text-muted">Are you sure you want to remove this item?</p>
        <div v-else class="space-y-4">
          <UFormField label="Name"><UInput v-model="actionDialog.name" class="w-full" /></UFormField>
          <UFormField label="Description"><UTextarea v-model="actionDialog.description" class="w-full" /></UFormField>
        </div>
      </template>
      <template #footer>
        <div class="flex w-full justify-end gap-2">
          <UButton color="neutral" variant="outline" @click="actionDialog.open = false">Cancel</UButton>
          <UButton :color="actionDialog.mode === 'delete' ? 'error' : 'primary'" @click="confirmAction">{{ actionDialog.mode === 'delete' ? 'Remove' : 'Save changes' }}</UButton>
        </div>
      </template>
    </UModal>
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
