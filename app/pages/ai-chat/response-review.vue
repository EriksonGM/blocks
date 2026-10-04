<!-- Page: /ai-chat/response-review | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Response review · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "rV1042ToReviewRV1043ToReviewRV1044ToReviewRV1045ToReview": "RV-1042 · To reviewRV-1043 · To reviewRV-1044 · To reviewRV-1045 · To review",
  "reviewNotes": ""
})

const rV1042ToReviewRV1043ToReviewRV1044ToReviewRV1045ToReviewOptions = [
  "RV-1042 · To review",
  "RV-1043 · To review",
  "RV-1044 · To review",
  "RV-1045 · To review"
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/response-review">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="styles-module__mi3KTG__screen">
        <header class="styles-module__mi3KTG__queueHeader">
          <div>
            <NuxtLink class="styles-module__mi3KTG__breadcrumb" to="/ai-chat/evaluations">
              Evaluations 
              <span>/</span>
               Review queues
            </NuxtLink>
            <h1>
              Support answer quality
              <span class="styles-module__mi3KTG__queueBadge">Manual review</span>
            </h1>
            <p>Review answers against workspace knowledge before adding them to the support dataset.</p>
          </div>
          <div class="styles-module__mi3KTG__progress">
            <span>
              <strong>0</strong>
               of 4 reviewed
            </span>
            <div>
              <span style="width:0%" />
            </div>
          </div>
        </header>
        <div class="styles-module__mi3KTG__toolbar">
          <div class="styles-module__mi3KTG__caseSelector">
            <span class="styles-module__mi3KTG__label">Response</span>
            <USelect v-model="form.rV1042ToReviewRV1043ToReviewRV1044ToReviewRV1045ToReview" :items="rV1042ToReviewRV1043ToReviewRV1044ToReviewRV1045ToReviewOptions" aria-label="Select response" />
            <span class="styles-module__mi3KTG__toolbarTopic">Workspace access</span>
          </div>
          <div class="styles-module__mi3KTG__paging">
            <span>1 / 4</span>
            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Previous response" type="button" disabled @click="openAction(&quot;Previous response&quot;)">
              <UIcon name="i-lucide-arrow-left" class="size-4" />
            </UButton>
            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Next response" type="button" @click="openAction(&quot;Next response&quot;)">
              <UIcon name="i-lucide-arrow-right" class="size-4" />
            </UButton>
          </div>
        </div>
        <div class="styles-module__mi3KTG__workspace">
          <div class="styles-module__mi3KTG__evidence">
            <div class="styles-module__mi3KTG__conversationHeading">
              <div>
                <span class="styles-module__mi3KTG__label">Conversation</span>
                <h2>Inviting teammates to a workspace</h2>
              </div>
              <span class="styles-module__mi3KTG__channel">Web chat</span>
            </div>
            <div class="styles-module__mi3KTG__customer">
              <span class="styles-module__mi3KTG__avatar">MC</span>
              <div>
                <strong>Maya Chen</strong>
                <p>Northstar Studio</p>
              </div>
              <time>10:42 AM</time>
            </div>
            <div class="styles-module__mi3KTG__messages">
              <div class="styles-module__mi3KTG__message">
                <span class="styles-module__mi3KTG__speaker">Maya</span>
                <p>I’m the owner of our design workspace, but not an organization admin. Can I invite two contractors to just this workspace?</p>
              </div>
              <div class="styles-module__mi3KTG__answer">
                <div class="styles-module__mi3KTG__answerHeading">
                  <strong>Support assistant</strong>
                  <span>Answer under review</span>
                </div>
                <p>Only organization administrators can invite new members. Ask your organization admin to open Settings → Members and send invitations to the contractors. Once they join, your admin can add them to the design workspace.</p>
                <UButton color="neutral" variant="ghost" class="styles-module__mi3KTG__citation" aria-label="Invite people to a workspace1" type="button" @click="openAction(&quot;Invite people to a workspace1&quot;)">
                  <UIcon name="i-lucide-file-text" class="size-4" />
                  Invite people to a workspace
                  <span>1</span>
                </UButton>
              </div>
              <div class="styles-module__mi3KTG__message">
                <span class="styles-module__mi3KTG__speaker">Maya</span>
                <p>Does that mean I need to contact our IT team every time? I thought workspace owners could manage their own members.</p>
              </div>
            </div>
            <section id="review-source" class="styles-module__mi3KTG__source">
              <UButton color="neutral" variant="ghost" class="styles-module__mi3KTG__sourceToggle" aria-label="Source evidence 1" type="button" @click="openAction(&quot;Source evidence 1&quot;)">
                <span>
                  Source evidence 
                  <span class="styles-module__mi3KTG__sourceCount">1</span>
                </span>
                <UIcon name="i-lucide-chevron-down" class="size-4" />
              </UButton>
              <div class="styles-module__mi3KTG__sourceBody">
                <div class="styles-module__mi3KTG__sourceTitle">
                  <UIcon name="i-lucide-file-text" class="size-4" />
                  <div>
                    <h3>Invite people to a workspace</h3>
                    <p>Roles &amp; permissions / Workspace members</p>
                  </div>
                </div>
                <blockquote>Workspace owners and organization administrators can invite people to a workspace. Owners can invite members and guests to workspaces they own. Guest access is limited to the selected workspace and does not grant access to other organization resources.</blockquote>
                <div class="styles-module__mi3KTG__sourceFooter">
                  <span>Knowledge base</span>
                  <span>Updated Sep 12, 2026</span>
                </div>
              </div>
            </section>
          </div>
          <aside class="styles-module__mi3KTG__review" aria-label="Review response">
            <div class="styles-module__mi3KTG__reviewHeading">
              <h2>Your review</h2>
              <span>Not submitted</span>
            </div>
            <div class="styles-module__mi3KTG__reviewContent">
              <div class="styles-module__mi3KTG__reason">
                <strong>Customer questioned the answer</strong>
                <p>Source contradicts the stated permission requirement.</p>
              </div>
              <fieldset class="styles-module__mi3KTG__field">
                <legend>Is the answer accurate?</legend>
                <p>Compare factual claims with the source.</p>
                <div class="styles-module__mi3KTG__options">
                  <UButton color="neutral" variant="ghost" aria-label="Accurate" type="button" @click="openAction(&quot;Accurate&quot;)">
                    Accurate
                  </UButton>
                  <UButton color="neutral" variant="ghost" aria-label="Partly accurate" type="button" @click="openAction(&quot;Partly accurate&quot;)">
                    Partly accurate
                  </UButton>
                  <UButton color="neutral" variant="ghost" aria-label="Incorrect" type="button" @click="openAction(&quot;Incorrect&quot;)">
                    Incorrect
                  </UButton>
                </div>
              </fieldset>
              <fieldset class="styles-module__mi3KTG__field">
                <legend>Did it resolve the request?</legend>
                <div class="styles-module__mi3KTG__options">
                  <UButton color="neutral" variant="ghost" aria-label="Resolved" type="button" @click="openAction(&quot;Resolved&quot;)">
                    Resolved
                  </UButton>
                  <UButton color="neutral" variant="ghost" aria-label="Partially" type="button" @click="openAction(&quot;Partially&quot;)">
                    Partially
                  </UButton>
                  <UButton color="neutral" variant="ghost" aria-label="Unresolved" type="button" @click="openAction(&quot;Unresolved&quot;)">
                    Unresolved
                  </UButton>
                </div>
              </fieldset>
              <div class="styles-module__mi3KTG__field">
                <label for="review-notes">
                  Reviewer notes 
                  <span>Optional</span>
                </label>
                <UTextarea v-model="form.reviewNotes" :rows="4" placeholder="What should we improve?" name="reviewNotes" id="review-notes" class="flex min-h-[60px] w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
              </div>
              <div class="styles-module__mi3KTG__destination">
                <span class="styles-module__mi3KTG__label">Save to dataset</span>
                <strong>Customer support · September review</strong>
                <p>Includes the response, source, and your annotations.</p>
              </div>
            </div>
            <footer class="styles-module__mi3KTG__reviewFooter">
              <p role="status">Your review stays editable after saving.</p>
              <div>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Skip for now" type="button" @click="openAction(&quot;Skip for now&quot;)">
                  Skip for now
                </UButton>
                <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-8 rounded-md px-3 text-xs" aria-label="Save and next" type="button" @click="openAction(&quot;Save and next&quot;)">
                  Save and next
                  <UIcon name="i-lucide-check" class="size-4" />
                </UButton>
              </div>
            </footer>
          </aside>
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
