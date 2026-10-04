<!-- Page: /ai-chat/evidence-comparison-matrix | All content, state and styles live in this file. -->
<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const route = useRoute()

useHead({ title: "Evidence comparison matrix · Blocks Admin" })

const toast = useToast()

// Table 1: edit the rows and column definitions here.

const table1Rows = ref([
  {
    "_id": "1",
    "claimAssessment": "SupportsParticipants wanted something worth sharing before they invited a colleague.",
    "claimAssessmentArialabel2": "Inspect Customer interviews for Import a document before introducing collaboration",
    "claimAssessmentClass3": "hover:bg-muted focus-visible:outline-accented flex min-h-24 w-full flex-col rounded-md p-3 text-left transition-colors focus-visible:outline-2",
    "claimAssessmentClass4": "flex items-center gap-2 text-xs font-medium",
    "claimAssessmentName5": "i-lucide-check",
    "claimAssessmentText7": "Supports",
    "claimAssessmentText9": "Participants wanted something worth sharing before they invited a colleague.",
    "oBSERVEDSOURCE01CustomerInterviews": "QualifiesPeople joining an established team already had shared content waiting for them.",
    "oBSERVEDSOURCE01CustomerInterviewsArialabel2": "Inspect Support review for Import a document before introducing collaboration",
    "oBSERVEDSOURCE01CustomerInterviewsClass3": "hover:bg-muted focus-visible:outline-accented flex min-h-24 w-full flex-col rounded-md p-3 text-left transition-colors focus-visible:outline-2",
    "oBSERVEDSOURCE01CustomerInterviewsClass4": "flex items-center gap-2 text-xs font-medium",
    "oBSERVEDSOURCE01CustomerInterviewsName5": "i-lucide-circle-question-mark",
    "oBSERVEDSOURCE01CustomerInterviewsText7": "Qualifies",
    "oBSERVEDSOURCE01CustomerInterviewsText9": "People joining an established team already had shared content waiting for them.",
    "oBSERVEDSOURCE02SupportReview": "SupportsBegin with a document, then offer sharing as the next useful action.",
    "oBSERVEDSOURCE02SupportReviewArialabel2": "Inspect Design proposal for Import a document before introducing collaboration",
    "oBSERVEDSOURCE02SupportReviewName5": "i-lucide-check",
    "oBSERVEDSOURCE02SupportReviewText7": "Supports",
    "oBSERVEDSOURCE02SupportReviewText9": "Begin with a document, then offer sharing as the next useful action.",
    "pROPOSALNOTINDEPENDENTEVIDENCEDesignProposal": "",
    "importADocumentBeforeIntroducingCollaborationQualified": "",
    "requireATeamInvitationToFinishSetupConflict": "",
    "showDocumentVisibilityBeforeSendingInvitationsAgreement": "",
    "aGuidedTourImprovesFirstWeekRetentionEvidenceGap": ""
  },
  {
    "_id": "2",
    "claimAssessment": "ConflictsSolo participants wanted to explore before deciding who else should join.",
    "claimAssessmentArialabel2": "Inspect Customer interviews for Require a team invitation to finish setup",
    "claimAssessmentClass3": "hover:bg-muted focus-visible:outline-accented flex min-h-24 w-full flex-col rounded-md p-3 text-left transition-colors focus-visible:outline-2 bg-(--ui-error)/5 ring-1 ring-info/50",
    "claimAssessmentClass4": "flex items-center gap-2 text-xs font-medium text-error",
    "claimAssessmentName5": "i-lucide-triangle-alert",
    "claimAssessmentText7": "Conflicts",
    "claimAssessmentText9": "Solo participants wanted to explore before deciding who else should join.",
    "oBSERVEDSOURCE01CustomerInterviews": "ConflictsIndividual accounts asked how to skip the team invitation step.",
    "oBSERVEDSOURCE01CustomerInterviewsArialabel2": "Inspect Support review for Require a team invitation to finish setup",
    "oBSERVEDSOURCE01CustomerInterviewsClass3": "hover:bg-muted focus-visible:outline-accented flex min-h-24 w-full flex-col rounded-md p-3 text-left transition-colors focus-visible:outline-2 bg-(--ui-error)/5",
    "oBSERVEDSOURCE01CustomerInterviewsClass4": "flex items-center gap-2 text-xs font-medium text-error",
    "oBSERVEDSOURCE01CustomerInterviewsName5": "i-lucide-triangle-alert",
    "oBSERVEDSOURCE01CustomerInterviewsText7": "Conflicts",
    "oBSERVEDSOURCE01CustomerInterviewsText9": "Individual accounts asked how to skip the team invitation step.",
    "oBSERVEDSOURCE02SupportReview": "SupportsThe initial concept makes one teammate invitation the last required setup step.",
    "oBSERVEDSOURCE02SupportReviewArialabel2": "Inspect Design proposal for Require a team invitation to finish setup",
    "oBSERVEDSOURCE02SupportReviewName5": "i-lucide-check",
    "oBSERVEDSOURCE02SupportReviewText7": "Supports",
    "oBSERVEDSOURCE02SupportReviewText9": "The initial concept makes one teammate invitation the last required setup step.",
    "pROPOSALNOTINDEPENDENTEVIDENCEDesignProposal": "",
    "importADocumentBeforeIntroducingCollaborationQualified": "",
    "requireATeamInvitationToFinishSetupConflict": "",
    "showDocumentVisibilityBeforeSendingInvitationsAgreement": "",
    "aGuidedTourImprovesFirstWeekRetentionEvidenceGap": ""
  },
  {
    "_id": "3",
    "claimAssessment": "SupportsBefore sharing, participants checked whether others could see the whole workspace.",
    "claimAssessmentArialabel2": "Inspect Customer interviews for Show document visibility before sending invitations",
    "claimAssessmentClass3": "hover:bg-muted focus-visible:outline-accented flex min-h-24 w-full flex-col rounded-md p-3 text-left transition-colors focus-visible:outline-2",
    "claimAssessmentClass4": "flex items-center gap-2 text-xs font-medium",
    "claimAssessmentName5": "i-lucide-check",
    "claimAssessmentText7": "Supports",
    "claimAssessmentText9": "Before sharing, participants checked whether others could see the whole workspace.",
    "oBSERVEDSOURCE01CustomerInterviews": "SupportsQuestions about private versus shared files recur in invitation requests.",
    "oBSERVEDSOURCE01CustomerInterviewsArialabel2": "Inspect Support review for Show document visibility before sending invitations",
    "oBSERVEDSOURCE01CustomerInterviewsClass3": "hover:bg-muted focus-visible:outline-accented flex min-h-24 w-full flex-col rounded-md p-3 text-left transition-colors focus-visible:outline-2",
    "oBSERVEDSOURCE01CustomerInterviewsClass4": "flex items-center gap-2 text-xs font-medium",
    "oBSERVEDSOURCE01CustomerInterviewsName5": "i-lucide-check",
    "oBSERVEDSOURCE01CustomerInterviewsText7": "Supports",
    "oBSERVEDSOURCE01CustomerInterviewsText9": "Questions about private versus shared files recur in invitation requests.",
    "oBSERVEDSOURCE02SupportReview": "SupportsShow an audience preview alongside the invitation action.",
    "oBSERVEDSOURCE02SupportReviewArialabel2": "Inspect Design proposal for Show document visibility before sending invitations",
    "oBSERVEDSOURCE02SupportReviewName5": "i-lucide-check",
    "oBSERVEDSOURCE02SupportReviewText7": "Supports",
    "oBSERVEDSOURCE02SupportReviewText9": "Show an audience preview alongside the invitation action.",
    "pROPOSALNOTINDEPENDENTEVIDENCEDesignProposal": "",
    "importADocumentBeforeIntroducingCollaborationQualified": "",
    "requireATeamInvitationToFinishSetupConflict": "",
    "showDocumentVisibilityBeforeSendingInvitationsAgreement": "",
    "aGuidedTourImprovesFirstWeekRetentionEvidenceGap": ""
  },
  {
    "_id": "4",
    "claimAssessment": "No evidenceInterviews did not measure first-week retention or compare guided tours.",
    "claimAssessmentArialabel2": "Inspect Customer interviews for A guided tour improves first-week retention",
    "claimAssessmentClass3": "hover:bg-muted focus-visible:outline-accented flex min-h-24 w-full flex-col rounded-md p-3 text-left transition-colors focus-visible:outline-2",
    "claimAssessmentClass4": "flex items-center gap-2 text-xs font-medium",
    "claimAssessmentName5": "i-lucide-minus",
    "claimAssessmentText7": "No evidence",
    "claimAssessmentText9": "Interviews did not measure first-week retention or compare guided tours.",
    "oBSERVEDSOURCE01CustomerInterviews": "No evidenceSupport themes contain no retention measurements.",
    "oBSERVEDSOURCE01CustomerInterviewsArialabel2": "Inspect Support review for A guided tour improves first-week retention",
    "oBSERVEDSOURCE01CustomerInterviewsClass3": "hover:bg-muted focus-visible:outline-accented flex min-h-24 w-full flex-col rounded-md p-3 text-left transition-colors focus-visible:outline-2",
    "oBSERVEDSOURCE01CustomerInterviewsClass4": "flex items-center gap-2 text-xs font-medium",
    "oBSERVEDSOURCE01CustomerInterviewsName5": "i-lucide-minus",
    "oBSERVEDSOURCE01CustomerInterviewsText7": "No evidence",
    "oBSERVEDSOURCE01CustomerInterviewsText9": "Support themes contain no retention measurements.",
    "oBSERVEDSOURCE02SupportReview": "QualifiesA short tour might help unfamiliar users; test it against learning through real work.",
    "oBSERVEDSOURCE02SupportReviewArialabel2": "Inspect Design proposal for A guided tour improves first-week retention",
    "oBSERVEDSOURCE02SupportReviewName5": "i-lucide-circle-question-mark",
    "oBSERVEDSOURCE02SupportReviewText7": "Qualifies",
    "oBSERVEDSOURCE02SupportReviewText9": "A short tour might help unfamiliar users; test it against learning through real work.",
    "pROPOSALNOTINDEPENDENTEVIDENCEDesignProposal": "",
    "importADocumentBeforeIntroducingCollaborationQualified": "",
    "requireATeamInvitationToFinishSetupConflict": "",
    "showDocumentVisibilityBeforeSendingInvitationsAgreement": "",
    "aGuidedTourImprovesFirstWeekRetentionEvidenceGap": ""
  }
])
type Table1Row = (typeof table1Rows.value)[number]

const table1Columns: TableColumn<Table1Row>[] = [
  {
    "accessorKey": "claimAssessment",
    "header": "Claim / assessment"
  },
  {
    "accessorKey": "oBSERVEDSOURCE01CustomerInterviews",
    "header": "OBSERVED SOURCE 01Customer interviews"
  },
  {
    "accessorKey": "oBSERVEDSOURCE02SupportReview",
    "header": "OBSERVED SOURCE 02Support review"
  },
  {
    "accessorKey": "pROPOSALNOTINDEPENDENTEVIDENCEDesignProposal",
    "header": "PROPOSAL · NOT INDEPENDENT EVIDENCEDesign proposal"
  },
  {
    "accessorKey": "importADocumentBeforeIntroducingCollaborationQualified",
    "header": "Import a document before introducing collaborationQualified"
  },
  {
    "accessorKey": "requireATeamInvitationToFinishSetupConflict",
    "header": "Require a team invitation to finish setupConflict"
  },
  {
    "accessorKey": "showDocumentVisibilityBeforeSendingInvitationsAgreement",
    "header": "Show document visibility before sending invitationsAgreement"
  },
  {
    "accessorKey": "aGuidedTourImprovesFirstWeekRetentionEvidenceGap",
    "header": "A guided tour improves first-week retentionEvidence gap"
  }
]

const table1Sorting = ref<{ id: string, desc: boolean }[]>([])

const table1Selection = ref<Record<string, boolean>>({})

const table1FilteredRows = computed(() => {
  const query = ''
  const keys = ["claimAssessment","oBSERVEDSOURCE01CustomerInterviews","oBSERVEDSOURCE02SupportReview","pROPOSALNOTINDEPENDENTEVIDENCEDesignProposal","importADocumentBeforeIntroducingCollaborationQualified","requireATeamInvitationToFinishSetupConflict","showDocumentVisibilityBeforeSendingInvitationsAgreement","aGuidedTourImprovesFirstWeekRetentionEvidenceGap"] as const
  return table1Rows.value.filter(row => !query || keys.some(key => String(row[key]).toLowerCase().includes(query)))
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/evidence-comparison-matrix">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="flex-1 overflow-auto p-6 lg:p-9">
        <div class="mb-5 max-w-2xl">
          <p class="text-muted mb-3 text-xs font-medium tracking-widest uppercase">Onboarding study / Evidence review</p>
          <h1 class="text-2xl font-semibold tracking-tight text-highlighted">Where do the sources agree?</h1>
          <p class="text-muted mt-2 text-sm">Scan the pattern. Select a claim to read the sources together.</p>
        </div>
        <div class="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div class="flex flex-wrap gap-1" aria-label="Filter claims">
            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-elevated text-default shadow-xs hover:bg-(--ui-bg-elevated)/80 h-8 rounded-md px-3 text-xs" aria-label="All claims" type="button" @click="openAction(&quot;All claims&quot;)">
              All claims
            </UButton>
            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Conflict" type="button" @click="openAction(&quot;Conflict&quot;)">
              Conflict
            </UButton>
            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Agreement" type="button" @click="openAction(&quot;Agreement&quot;)">
              Agreement
            </UButton>
            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Qualified" type="button" @click="openAction(&quot;Qualified&quot;)">
              Qualified
            </UButton>
            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Evidence gap" type="button" @click="openAction(&quot;Evidence gap&quot;)">
              Evidence gap
            </UButton>
          </div>
          <p class="text-muted text-xs">0 of 12 cells reviewed</p>
        </div>
        <div class="max-h-[460px] overflow-auto rounded-lg border border-default">
          <!-- Table 1: Claim / assessment / OBSERVED SOURCE 01Customer interviews / OBSERVED SOURCE 02Support review / PROPOSAL · NOT INDEPENDENT EVIDENCEDesign proposal / Import a document before introducing collaborationQualified / Require a team invitation to finish setupConflict / Show document visibility before sending invitationsAgreement / A guided tour improves first-week retentionEvidence gap -->
          <UTable v-model:sorting="table1Sorting" v-model:row-selection="table1Selection" :data="table1FilteredRows" :columns="table1Columns" class="w-full min-w-[840px] border-collapse text-sm" :ui="{ th: 'px-4 py-3 bg-muted text-muted', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted' }">
<template #claimAssessment-header="{ column }">
              <UButton color="neutral" variant="ghost" size="xs" label="Claim / assessment" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
            </template>
            <template #claimAssessment-cell="{ row }">
              <UButton color="neutral" variant="soft" :class="row.original.claimAssessmentClass3" :aria-label="row.original.claimAssessmentArialabel2" type="button" @click="openAction(&quot;SupportsParticipants wanted something worth sharing before they invited a colleague.&quot;, row.original._id, 1)">
                <span :class="row.original.claimAssessmentClass4">
                  <UIcon :name="row.original.claimAssessmentName5" class="size-4" />
                  {{ row.original.claimAssessmentText7 }}
                </span>
                <span class="text-muted mt-2 line-clamp-2 text-xs leading-5">{{ row.original.claimAssessmentText9 }}</span>
              </UButton>
            </template>
            <template #oBSERVEDSOURCE01CustomerInterviews-header="{ column }">
              <UButton color="neutral" variant="ghost" size="xs" label="OBSERVED SOURCE 01Customer interviews" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
            </template>
            <template #oBSERVEDSOURCE01CustomerInterviews-cell="{ row }">
              <UButton color="neutral" variant="soft" :class="row.original.oBSERVEDSOURCE01CustomerInterviewsClass3" :aria-label="row.original.oBSERVEDSOURCE01CustomerInterviewsArialabel2" type="button" @click="openAction(&quot;QualifiesPeople joining an established team already had shared content waiting for them.&quot;, row.original._id, 1)">
                <span :class="row.original.oBSERVEDSOURCE01CustomerInterviewsClass4">
                  <UIcon :name="row.original.oBSERVEDSOURCE01CustomerInterviewsName5" class="size-4" />
                  {{ row.original.oBSERVEDSOURCE01CustomerInterviewsText7 }}
                </span>
                <span class="text-muted mt-2 line-clamp-2 text-xs leading-5">{{ row.original.oBSERVEDSOURCE01CustomerInterviewsText9 }}</span>
              </UButton>
            </template>
            <template #oBSERVEDSOURCE02SupportReview-header="{ column }">
              <UButton color="neutral" variant="ghost" size="xs" label="OBSERVED SOURCE 02Support review" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
            </template>
            <template #oBSERVEDSOURCE02SupportReview-cell="{ row }">
              <UButton color="neutral" variant="soft" class="hover:bg-muted focus-visible:outline-accented flex min-h-24 w-full flex-col rounded-md p-3 text-left transition-colors focus-visible:outline-2" :aria-label="row.original.oBSERVEDSOURCE02SupportReviewArialabel2" type="button" @click="openAction(&quot;SupportsBegin with a document, then offer sharing as the next useful action.&quot;, row.original._id, 1)">
                <span class="flex items-center gap-2 text-xs font-medium">
                  <UIcon :name="row.original.oBSERVEDSOURCE02SupportReviewName5" class="size-4" />
                  {{ row.original.oBSERVEDSOURCE02SupportReviewText7 }}
                </span>
                <span class="text-muted mt-2 line-clamp-2 text-xs leading-5">{{ row.original.oBSERVEDSOURCE02SupportReviewText9 }}</span>
              </UButton>
            </template>
            <template #pROPOSALNOTINDEPENDENTEVIDENCEDesignProposal-header="{ column }">
              <UButton color="neutral" variant="ghost" size="xs" label="PROPOSAL · NOT INDEPENDENT EVIDENCEDesign proposal" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
            </template>
            <template #pROPOSALNOTINDEPENDENTEVIDENCEDesignProposal-cell="{ row }">

            </template>
            <template #importADocumentBeforeIntroducingCollaborationQualified-header="{ column }">
              <UButton color="neutral" variant="ghost" size="xs" label="Import a document before introducing collaborationQualified" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
            </template>
            <template #importADocumentBeforeIntroducingCollaborationQualified-cell="{ row }">

            </template>
            <template #requireATeamInvitationToFinishSetupConflict-header="{ column }">
              <UButton color="neutral" variant="ghost" size="xs" label="Require a team invitation to finish setupConflict" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
            </template>
            <template #requireATeamInvitationToFinishSetupConflict-cell="{ row }">

            </template>
            <template #showDocumentVisibilityBeforeSendingInvitationsAgreement-header="{ column }">
              <UButton color="neutral" variant="ghost" size="xs" label="Show document visibility before sending invitationsAgreement" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
            </template>
            <template #showDocumentVisibilityBeforeSendingInvitationsAgreement-cell="{ row }">

            </template>
            <template #aGuidedTourImprovesFirstWeekRetentionEvidenceGap-header="{ column }">
              <UButton color="neutral" variant="ghost" size="xs" label="A guided tour improves first-week retentionEvidence gap" :trailing-icon="column.getIsSorted() ? 'i-lucide-arrow-down' : undefined" @click="column.toggleSorting(column.getIsSorted() === 'asc')" />
            </template>
            <template #aGuidedTourImprovesFirstWeekRetentionEvidenceGap-cell="{ row }">

            </template>
          </UTable>
        </div>
        <section class="mt-5 rounded-xl border border-default" aria-label="Selected claim evidence">
          <div class="bg-(--ui-bg-muted)/20 flex flex-wrap items-center justify-between gap-2 border-b px-5 py-3 border-default">
            <div>
              <p class="text-muted mb-1 text-[10px] tracking-wider uppercase">Read the sources together</p>
              <h2 class="text-sm font-semibold text-highlighted">Require a team invitation to finish setup</h2>
            </div>
            <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted border-default">Conflict</div>
          </div>
          <div class="grid divide-y lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            <article class="flex flex-col p-5 bg-info/5">
              <div class="mb-3 flex items-center justify-between gap-2">
                <h3 class="text-xs font-medium text-highlighted">Customer interviews</h3>
                <span class="flex items-center gap-1 text-[10px] text-error">
                  <UIcon name="i-lucide-triangle-alert" class="size-3" />
                  Conflicts
                </span>
              </div>
              <blockquote class="border-l-2 pl-3 text-[13px] leading-6">Solo participants wanted to explore before deciding who else should join.</blockquote>
              <p class="text-muted mt-3 text-xs leading-5">A required invitation prevents these participants from completing setup.</p>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 mt-3 self-start text-xs" aria-label="Mark as reviewed" type="button" @click="openAction(&quot;Mark as reviewed&quot;)">
                Mark as reviewed
              </UButton>
            </article>
            <article class="flex flex-col p-5">
              <div class="mb-3 flex items-center justify-between gap-2">
                <h3 class="text-xs font-medium text-highlighted">Support review</h3>
                <span class="flex items-center gap-1 text-[10px] text-error">
                  <UIcon name="i-lucide-triangle-alert" class="size-3" />
                  Conflicts
                </span>
              </div>
              <blockquote class="border-l-2 pl-3 text-[13px] leading-6">Individual accounts asked how to skip the team invitation step.</blockquote>
              <p class="text-muted mt-3 text-xs leading-5">Support notes identify friction with mandatory invitations.</p>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 mt-3 self-start text-xs" aria-label="Mark as reviewed" type="button" @click="openAction(&quot;Mark as reviewed&quot;)">
                Mark as reviewed
              </UButton>
            </article>
            <article class="flex flex-col p-5">
              <div class="mb-3 flex items-center justify-between gap-2">
                <h3 class="text-xs font-medium text-highlighted">Design proposal</h3>
                <span class="flex items-center gap-1 text-[10px]">
                  <UIcon name="i-lucide-check" class="size-3" />
                  Supports
                </span>
              </div>
              <blockquote class="border-l-2 pl-3 text-[13px] leading-6">The initial concept makes one teammate invitation the last required setup step.</blockquote>
              <p class="text-muted mt-3 text-xs leading-5">This earlier design concept conflicts with the observed needs. Resolve before implementation.</p>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 mt-3 self-start text-xs" aria-label="Mark as reviewed" type="button" @click="openAction(&quot;Mark as reviewed&quot;)">
                Mark as reviewed
              </UButton>
            </article>
          </div>
        </section>
        <div class="text-muted mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs">
          <span class="flex items-center gap-2">
            <UIcon name="i-lucide-check" class="size-3.5" />
            Supports
          </span>
          <span class="flex items-center gap-2">
            <UIcon name="i-lucide-triangle-alert" class="size-3.5" />
            Conflicts
          </span>
          <span class="flex items-center gap-2">
            <UIcon name="i-lucide-circle-question-mark" class="size-3.5" />
            Qualifies
          </span>
          <span class="flex items-center gap-2">
            <UIcon name="i-lucide-minus" class="size-3.5" />
            No evidence
          </span>
        </div>
        <p class="text-muted mt-6 max-w-2xl text-xs leading-5">Agreement shows alignment within this sample, not proof. The design proposal is a hypothesis and is not independent research evidence.</p>
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
