<!-- Page: /ai-chat/document-comparison | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Document 5 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "comparisonChangesOnly": false,
  "onboardingGuideOriginal": "Onboarding guide · Original",
  "onboardingGuideProposed": "Onboarding guide · Proposed"
})

const onboardingGuideOriginalOptions = [
  "Onboarding guide · Original",
  "Onboarding guide · Proposed"
]

const onboardingGuideProposedOptions = [
  "Onboarding guide · Original",
  "Onboarding guide · Proposed"
]

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
  toast.add({ title: actionDialog.mode === 'delete' ? 'Item removed' : 'Changes saved', color: 'success', icon: 'i-lucide-check' })
  actionDialog.open = false
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/document-comparison">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="@container/comparison flex min-h-0 flex-1 flex-col">
        <div class="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b px-5 py-3 border-default">
          <div>
            <h1 class="text-sm font-medium text-highlighted">Review the onboarding guide</h1>
            <p class="text-muted mt-1 text-xs">Original demo documents · changes stay in this session</p>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <UCheckbox v-model="form.comparisonChangesOnly" aria-label="Toggle setting" />
            <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mr-3 text-xs" for="comparison-changes-only">Changes only</label>
            <span class="text-muted text-xs">0 of 5 reviewed</span>
            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Previous difference" type="button" @click="openAction(&quot;Previous difference&quot;)">
              <UIcon name="i-lucide-chevron-up" class="size-4" />
            </UButton>
            <span class="text-xs tabular-nums">1/ 5</span>
            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Next difference" type="button" @click="openAction(&quot;Next difference&quot;)">
              <UIcon name="i-lucide-chevron-down" class="size-4" />
            </UButton>
          </div>
        </div>
        <div class="grid shrink-0 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 border-b px-4 py-3 border-default">
          <div class="min-w-0">
            <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted mb-1 block text-xs">Before</label>
            <USelect v-model="form.onboardingGuideOriginal" :items="onboardingGuideOriginalOptions" aria-label="Before document" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-full" />
            <p class="text-muted mt-1 truncate text-xs">Maya Chen · September 2</p>
          </div>
          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Swap documents" type="button" @click="openAction(&quot;Swap documents&quot;)">
            <UIcon name="i-lucide-arrow-left-right" class="size-4" />
          </UButton>
          <div class="min-w-0">
            <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted mb-1 block text-xs">After</label>
            <USelect v-model="form.onboardingGuideProposed" :items="onboardingGuideProposedOptions" aria-label="After document" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-full" />
            <p class="text-muted mt-1 truncate text-xs">Alex Rivera · September 6</p>
          </div>
        </div>
        <div class="min-h-0 flex-1 overflow-y-auto" aria-label="Aligned document readers">
          <div class="mx-auto max-w-6xl px-4 py-6 @min-[48rem]/comparison:px-8">
            <section aria-label="Title: unchanged" class="mb-1 rounded-md border border-transparent outline-offset-2 border-default">
              <div class="flex flex-wrap items-center justify-between gap-2 px-4 pt-3">
                <h2 class="text-muted text-xs font-medium text-highlighted">Title</h2>
              </div>
              <div class="grid @min-[48rem]/comparison:grid-cols-2">
                <div class="min-w-0 px-4 pt-2 pb-5">
                  <p class="text-muted mb-2 text-[10px] uppercase @min-[48rem]/comparison:hidden">before</p>
                  <p class="text-sm leading-7 whitespace-pre-wrap">Team onboarding guide</p>
                </div>
                <div class="min-w-0 px-4 pt-2 pb-5 border-t @min-[48rem]/comparison:border-t-0 @min-[48rem]/comparison:border-l border-default">
                  <p class="text-muted mb-2 text-[10px] uppercase @min-[48rem]/comparison:hidden">after</p>
                  <p class="text-sm leading-7 whitespace-pre-wrap">Team onboarding guide</p>
                </div>
              </div>
            </section>
            <section aria-label="Subtitle: unchanged" class="mb-1 rounded-md border border-transparent outline-offset-2 border-default">
              <div class="flex flex-wrap items-center justify-between gap-2 px-4 pt-3">
                <h2 class="text-muted text-xs font-medium text-highlighted">Subtitle</h2>
              </div>
              <div class="grid @min-[48rem]/comparison:grid-cols-2">
                <div class="min-w-0 px-4 pt-2 pb-5">
                  <p class="text-muted mb-2 text-[10px] uppercase @min-[48rem]/comparison:hidden">before</p>
                  <p class="text-sm leading-7 whitespace-pre-wrap">First-week working agreement</p>
                </div>
                <div class="min-w-0 px-4 pt-2 pb-5 border-t @min-[48rem]/comparison:border-t-0 @min-[48rem]/comparison:border-l border-default">
                  <p class="text-muted mb-2 text-[10px] uppercase @min-[48rem]/comparison:hidden">after</p>
                  <p class="text-sm leading-7 whitespace-pre-wrap">First-week working agreement</p>
                </div>
              </div>
            </section>
            <section aria-label="Purpose: unchanged" class="mb-1 rounded-md border border-transparent outline-offset-2 border-default">
              <div class="flex flex-wrap items-center justify-between gap-2 px-4 pt-3">
                <h2 class="text-muted text-xs font-medium text-highlighted">Purpose</h2>
              </div>
              <div class="grid @min-[48rem]/comparison:grid-cols-2">
                <div class="min-w-0 px-4 pt-2 pb-5">
                  <p class="text-muted mb-2 text-[10px] uppercase @min-[48rem]/comparison:hidden">before</p>
                  <p class="text-sm leading-7 whitespace-pre-wrap">Make the first week useful for teams joining Northstar. This guide defines the setup sequence, shared document permissions, and the point at which a team is ready to work independently.</p>
                </div>
                <div class="min-w-0 px-4 pt-2 pb-5 border-t @min-[48rem]/comparison:border-t-0 @min-[48rem]/comparison:border-l border-default">
                  <p class="text-muted mb-2 text-[10px] uppercase @min-[48rem]/comparison:hidden">after</p>
                  <p class="text-sm leading-7 whitespace-pre-wrap">Make the first week useful for teams joining Northstar. This guide defines the setup sequence, shared document permissions, and the point at which a team is ready to work independently.</p>
                </div>
              </div>
            </section>
            <section aria-label="First session: changed" class="mb-1 rounded-md border outline-offset-2 border-default bg-(--ui-bg-muted)/20">
              <div class="flex flex-wrap items-center justify-between gap-2 px-4 pt-3">
                <h2 class="text-muted text-xs font-medium text-highlighted">First session</h2>
                <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented flex items-center gap-2 rounded px-1 py-0.5 text-xs focus-visible:ring-2" aria-label="changedSelected" type="button" @click="openAction(&quot;changedSelected&quot;)">
                  <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted capitalize border-default">changed</div>
                  <span>Selected</span>
                </UButton>
              </div>
              <div class="grid @min-[48rem]/comparison:grid-cols-2">
                <div class="min-w-0 px-4 pt-2 pb-5">
                  <p class="text-muted mb-2 text-[10px] uppercase @min-[48rem]/comparison:hidden">before</p>
                  <p class="text-sm leading-7 whitespace-pre-wrap">
                    Create a workspace and 
                    <del class="bg-(--ui-error)/10 text-error">invite</del>
                    <del class="bg-(--ui-error)/10 text-error">one</del>
                    <del class="bg-(--ui-error)/10 text-error">teammate</del>
                     before 
                    <del class="bg-(--ui-error)/10 text-error">importing</del>
                     a 
                    <del class="bg-(--ui-error)/10 text-error">document.</del>
                     A team invitation is 
                    <del class="bg-(--ui-error)/10 text-error">required to</del>
                    <del class="bg-(--ui-error)/10 text-error">complete</del>
                     setup. The checklist closes after the 
                    <del class="bg-(--ui-error)/10 text-error">invitation</del>
                    is 
                    <del class="bg-(--ui-error)/10 text-error">sent.</del>
                  </p>
                </div>
                <div class="min-w-0 px-4 pt-2 pb-5 border-t @min-[48rem]/comparison:border-t-0 @min-[48rem]/comparison:border-l border-default">
                  <p class="text-muted mb-2 text-[10px] uppercase @min-[48rem]/comparison:hidden">after</p>
                  <p class="text-sm leading-7 whitespace-pre-wrap">
                    Create a workspace and 
                    <ins class="bg-success/10 text-success no-underline">import</ins>
                    <ins class="bg-success/10 text-success no-underline">a</ins>
                    <ins class="bg-success/10 text-success no-underline">document</ins>
                     before 
                    <ins class="bg-success/10 text-success no-underline">inviting</ins>
                     a 
                    <ins class="bg-success/10 text-success no-underline">teammate.</ins>
                     A team invitation is 
                    <ins class="bg-success/10 text-success no-underline">optional</ins>
                    <ins class="bg-success/10 text-success no-underline">during</ins>
                     setup. The checklist closes after the 
                    <ins class="bg-success/10 text-success no-underline">first</ins>
                    <ins class="bg-success/10 text-success no-underline">document </ins>
                    is 
                    <ins class="bg-success/10 text-success no-underline">ready to use.</ins>
                  </p>
                </div>
              </div>
            </section>
            <section aria-label="Document visibility: changed" class="mb-1 rounded-md border border-transparent outline-offset-2 border-default">
              <div class="flex flex-wrap items-center justify-between gap-2 px-4 pt-3">
                <h2 class="text-muted text-xs font-medium text-highlighted">Document visibility</h2>
                <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented flex items-center gap-2 rounded px-1 py-0.5 text-xs focus-visible:ring-2" aria-label="changedSelect change" type="button" @click="openAction(&quot;changedSelect change&quot;)">
                  <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted capitalize border-default">changed</div>
                  <span>Select change</span>
                </UButton>
              </div>
              <div class="grid @min-[48rem]/comparison:grid-cols-2">
                <div class="min-w-0 px-4 pt-2 pb-5">
                  <p class="text-muted mb-2 text-[10px] uppercase @min-[48rem]/comparison:hidden">before</p>
                  <p class="text-sm leading-7 whitespace-pre-wrap">
                    Imported documents are 
                    <del class="bg-(--ui-error)/10 text-error">shared</del>
                    <del class="bg-(--ui-error)/10 text-error">with</del>
                    <del class="bg-(--ui-error)/10 text-error">everyone</del>
                    <del class="bg-(--ui-error)/10 text-error">in</del>
                    <del class="bg-(--ui-error)/10 text-error">the</del>
                    <del class="bg-(--ui-error)/10 text-error">workspace.</del>
                    <del class="bg-(--ui-error)/10 text-error">Workspace</del>
                    <del class="bg-(--ui-error)/10 text-error">members</del>
                    can 
                    <del class="bg-(--ui-error)/10 text-error">edit</del>
                    <del class="bg-(--ui-error)/10 text-error">shared</del>
                    <del class="bg-(--ui-error)/10 text-error">documents.</del>
                    <del class="bg-(--ui-error)/10 text-error">Review</del>
                     the 
                    <del class="bg-(--ui-error)/10 text-error">member</del>
                    <del class="bg-(--ui-error)/10 text-error">list</del>
                    before 
                    <del class="bg-(--ui-error)/10 text-error">adding</del>
                    <del class="bg-(--ui-error)/10 text-error">sensitive</del>
                    <del class="bg-(--ui-error)/10 text-error">material.</del>
                  </p>
                </div>
                <div class="min-w-0 px-4 pt-2 pb-5 border-t @min-[48rem]/comparison:border-t-0 @min-[48rem]/comparison:border-l border-default">
                  <p class="text-muted mb-2 text-[10px] uppercase @min-[48rem]/comparison:hidden">after</p>
                  <p class="text-sm leading-7 whitespace-pre-wrap">
                    Imported documents are 
                    <ins class="bg-success/10 text-success no-underline">private</ins>
                    <ins class="bg-success/10 text-success no-underline">to</ins>
                    <ins class="bg-success/10 text-success no-underline">their</ins>
                    <ins class="bg-success/10 text-success no-underline">owner.</ins>
                    <ins class="bg-success/10 text-success no-underline">Owners</ins>
                    <ins class="bg-success/10 text-success no-underline">choose</ins>
                    <ins class="bg-success/10 text-success no-underline">which</ins>
                    <ins class="bg-success/10 text-success no-underline">documents</ins>
                    <ins class="bg-success/10 text-success no-underline">to share and whether collaborators </ins>
                    can 
                    <ins class="bg-success/10 text-success no-underline">view</ins>
                    <ins class="bg-success/10 text-success no-underline">or</ins>
                    <ins class="bg-success/10 text-success no-underline">edit.</ins>
                    <ins class="bg-success/10 text-success no-underline">Show</ins>
                     the 
                    <ins class="bg-success/10 text-success no-underline">audience</ins>
                    <ins class="bg-success/10 text-success no-underline">and</ins>
                    <ins class="bg-success/10 text-success no-underline">access level </ins>
                    before 
                    <ins class="bg-success/10 text-success no-underline">sending</ins>
                    <ins class="bg-success/10 text-success no-underline">an</ins>
                    <ins class="bg-success/10 text-success no-underline">invitation.</ins>
                  </p>
                </div>
              </div>
            </section>
            <section aria-label="Live training: removed" class="mb-1 rounded-md border border-transparent outline-offset-2 border-default">
              <div class="flex flex-wrap items-center justify-between gap-2 px-4 pt-3">
                <h2 class="text-muted text-xs font-medium text-highlighted">Live training</h2>
                <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented flex items-center gap-2 rounded px-1 py-0.5 text-xs focus-visible:ring-2" aria-label="removedSelect change" type="button" @click="openAction(&quot;removedSelect change&quot;)">
                  <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted capitalize border-default">removed</div>
                  <span>Select change</span>
                </UButton>
              </div>
              <div class="grid @min-[48rem]/comparison:grid-cols-2">
                <div class="min-w-0 px-4 pt-2 pb-5">
                  <p class="text-muted mb-2 text-[10px] uppercase @min-[48rem]/comparison:hidden">before</p>
                  <p class="text-sm leading-7 whitespace-pre-wrap">
                    <del class="bg-(--ui-error)/10 text-error">Every new team must attend a 60-minute live training session before the end of its first week. The workspace owner schedules the session for all invited members.</del>
                  </p>
                </div>
                <div class="min-w-0 px-4 pt-2 pb-5 border-t @min-[48rem]/comparison:border-t-0 @min-[48rem]/comparison:border-l border-default">
                  <p class="text-muted mb-2 text-[10px] uppercase @min-[48rem]/comparison:hidden">after</p>
                  <p class="text-muted text-sm italic">Section absent in this document</p>
                </div>
              </div>
            </section>
            <section aria-label="First-week check-in: changed" class="mb-1 rounded-md border border-transparent outline-offset-2 border-default">
              <div class="flex flex-wrap items-center justify-between gap-2 px-4 pt-3">
                <h2 class="text-muted text-xs font-medium text-highlighted">First-week check-in</h2>
                <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented flex items-center gap-2 rounded px-1 py-0.5 text-xs focus-visible:ring-2" aria-label="changedSelect change" type="button" @click="openAction(&quot;changedSelect change&quot;)">
                  <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted capitalize border-default">changed</div>
                  <span>Select change</span>
                </UButton>
              </div>
              <div class="grid @min-[48rem]/comparison:grid-cols-2">
                <div class="min-w-0 px-4 pt-2 pb-5">
                  <p class="text-muted mb-2 text-[10px] uppercase @min-[48rem]/comparison:hidden">before</p>
                  <p class="text-sm leading-7 whitespace-pre-wrap">
                    On Friday, the workspace owner reports 
                    <del class="bg-(--ui-error)/10 text-error">how</del>
                    <del class="bg-(--ui-error)/10 text-error">many</del>
                    <del class="bg-(--ui-error)/10 text-error">invitations</del>
                    <del class="bg-(--ui-error)/10 text-error">were</del>
                    <del class="bg-(--ui-error)/10 text-error">sent</del>
                    <del class="bg-(--ui-error)/10 text-error">and</del>
                    <del class="bg-(--ui-error)/10 text-error">whether</del>
                    <del class="bg-(--ui-error)/10 text-error">the</del>
                    <del class="bg-(--ui-error)/10 text-error">setup</del>
                    <del class="bg-(--ui-error)/10 text-error">checklist</del>
                    <del class="bg-(--ui-error)/10 text-error">was</del>
                    <del class="bg-(--ui-error)/10 text-error">completed.</del>
                     The onboarding team reviews the report on 
                    <del class="bg-(--ui-error)/10 text-error">Monday.</del>
                  </p>
                </div>
                <div class="min-w-0 px-4 pt-2 pb-5 border-t @min-[48rem]/comparison:border-t-0 @min-[48rem]/comparison:border-l border-default">
                  <p class="text-muted mb-2 text-[10px] uppercase @min-[48rem]/comparison:hidden">after</p>
                  <p class="text-sm leading-7 whitespace-pre-wrap">
                    On Friday, the workspace owner reports 
                    <ins class="bg-success/10 text-success no-underline">whether</ins>
                    <ins class="bg-success/10 text-success no-underline">the</ins>
                    <ins class="bg-success/10 text-success no-underline">team</ins>
                    <ins class="bg-success/10 text-success no-underline">completed</ins>
                    <ins class="bg-success/10 text-success no-underline">a</ins>
                    <ins class="bg-success/10 text-success no-underline">shared</ins>
                    <ins class="bg-success/10 text-success no-underline">task</ins>
                    <ins class="bg-success/10 text-success no-underline">and</ins>
                    <ins class="bg-success/10 text-success no-underline">records</ins>
                    <ins class="bg-success/10 text-success no-underline">any</ins>
                    <ins class="bg-success/10 text-success no-underline">setup</ins>
                    <ins class="bg-success/10 text-success no-underline">blockers.</ins>
                     The onboarding team reviews the report on 
                    <ins class="bg-success/10 text-success no-underline">Monday before recommending another cohort.</ins>
                  </p>
                </div>
              </div>
            </section>
            <section aria-label="Getting help: unchanged" class="mb-1 rounded-md border border-transparent outline-offset-2 border-default">
              <div class="flex flex-wrap items-center justify-between gap-2 px-4 pt-3">
                <h2 class="text-muted text-xs font-medium text-highlighted">Getting help</h2>
              </div>
              <div class="grid @min-[48rem]/comparison:grid-cols-2">
                <div class="min-w-0 px-4 pt-2 pb-5">
                  <p class="text-muted mb-2 text-[10px] uppercase @min-[48rem]/comparison:hidden">before</p>
                  <p class="text-sm leading-7 whitespace-pre-wrap">Use the help menu to contact the onboarding team. Include the workspace name and the step you were trying to complete. Never include passwords or private customer documents.</p>
                </div>
                <div class="min-w-0 px-4 pt-2 pb-5 border-t @min-[48rem]/comparison:border-t-0 @min-[48rem]/comparison:border-l border-default">
                  <p class="text-muted mb-2 text-[10px] uppercase @min-[48rem]/comparison:hidden">after</p>
                  <p class="text-sm leading-7 whitespace-pre-wrap">Use the help menu to contact the onboarding team. Include the workspace name and the step you were trying to complete. Never include passwords or private customer documents.</p>
                </div>
              </div>
            </section>
            <section aria-label="If setup stalls: added" class="mb-1 rounded-md border border-transparent outline-offset-2 border-default">
              <div class="flex flex-wrap items-center justify-between gap-2 px-4 pt-3">
                <h2 class="text-muted text-xs font-medium text-highlighted">If setup stalls</h2>
                <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented flex items-center gap-2 rounded px-1 py-0.5 text-xs focus-visible:ring-2" aria-label="addedSelect change" type="button" @click="openAction(&quot;addedSelect change&quot;)">
                  <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted capitalize border-default">added</div>
                  <span>Select change</span>
                </UButton>
              </div>
              <div class="grid @min-[48rem]/comparison:grid-cols-2">
                <div class="min-w-0 px-4 pt-2 pb-5">
                  <p class="text-muted mb-2 text-[10px] uppercase @min-[48rem]/comparison:hidden">before</p>
                  <p class="text-muted text-sm italic">Section absent in this document</p>
                </div>
                <div class="min-w-0 px-4 pt-2 pb-5 border-t @min-[48rem]/comparison:border-t-0 @min-[48rem]/comparison:border-l border-default">
                  <p class="text-muted mb-2 text-[10px] uppercase @min-[48rem]/comparison:hidden">after</p>
                  <p class="text-sm leading-7 whitespace-pre-wrap">
                    <ins class="bg-success/10 text-success no-underline">Keep the imported document and save the unfinished checklist. The owner can resume from the last completed step. Offer a 15-minute office-hours session when the team asks for help.</ins>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <footer class="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t px-5 py-3 border-default">
          <div class="min-w-0">
            <p class="text-sm font-medium">First session</p>
            <p class="text-muted text-xs">Review one passage in its full document context.</p>
          </div>
          <div class="flex gap-2">
            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Mark reviewed" type="button" @click="openAction(&quot;Mark reviewed&quot;)">
              Mark reviewed
            </UButton>
            <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-8 rounded-md px-3 text-xs" aria-label="Ask about this change" type="button" @click="openAction(&quot;Ask about this change&quot;)">
              Ask about this change
            </UButton>
          </div>
        </footer>
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
