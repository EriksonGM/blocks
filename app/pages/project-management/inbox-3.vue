<!-- Page: /project-management/inbox-3 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Inbox 3 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "replyOrLeaveANote": ""
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
  toast.add({ title: actionDialog.mode === 'delete' ? 'Item removed' : 'Changes saved', color: 'success', icon: 'i-lucide-check' })
  actionDialog.open = false
}

async function copyValue(value: string) {
  await navigator.clipboard.writeText(value)
  toast.add({ title: 'Copied to clipboard', color: 'success' })
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/inbox-3">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="bg-default text-highlighted flex min-h-0 flex-1 overflow-hidden">
          <section class="flex min-h-0 w-full min-w-0 flex-col border-r md:w-[42.857%] md:max-w-[42.857%] border-default">
            <header class="flex h-10 shrink-0 items-center justify-between border-b px-4 border-default">
              <div class="flex items-center gap-2">
                <h2 class="text-lg font-semibold text-highlighted">Inbox</h2>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md text-xs size-7 p-0" aria-label="Inbox actions" type="button" @click="openAction(&quot;Inbox actions&quot;)">
                  <UIcon name="i-lucide-ellipsis" class="size-4" />
                  <span class="sr-only">Inbox actions</span>
                </UButton>
              </div>
              <div class="flex items-center gap-2">
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md text-xs size-7 p-0" aria-label="Mark all as read" type="button" @click="openAction(&quot;Mark all as read&quot;)">
                  <UIcon name="i-lucide-check-check" class="size-4" />
                  <span class="sr-only">Mark all as read</span>
                </UButton>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md text-xs size-7 p-0" aria-label="Display options" type="button" @click="openAction(&quot;Display options&quot;)">
                  <UIcon name="i-lucide-sliders-horizontal" class="size-4" />
                  <span class="sr-only">Display options</span>
                </UButton>
              </div>
            </header>
            <div data-slot="scroll-area" class="relative overflow-hidden min-h-0 flex-1 [&amp;&gt;[data-slot=scroll-area-viewport]&gt;div]:!block" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
              <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                <div style="min-width:100%;display:table">
                  <div class="flex flex-col pb-1">
                    <UButton color="neutral" variant="ghost" class="w-full px-1 py-0.5 text-left" aria-label="RFC-101Finalize issue timeline architectureNina attached the revised rollout map10h" type="button" @click="openAction(&quot;RFC-101Finalize issue timeline architectureNina attached the revised rollout map10h&quot;)">
                      <div class="hover:bg-(--ui-bg-muted)/80 flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 transition-colors">
                        <div class="shrink-0">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-8">
                            <img class="aspect-square h-full w-full" alt="Nina Oliver" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                          </span>
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="flex items-center gap-1.5">
                            <div class="bg-primary size-2 shrink-0 rounded-full" />
                            <span class="text-muted shrink-0 text-sm font-medium">RFC-101</span>
                            <h4 class="text-highlighted min-w-0 flex-1 truncate text-sm font-medium text-highlighted">Finalize issue timeline architecture</h4>
                            <div class="shrink-0">
                              <svg viewBox="0 0 14 14" fill="none" class="size-3.5 text-primary" width="100%" height="100%">
                                <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="2" />
                                <circle cx="7" cy="7" r="2" stroke="currentColor" stroke-dasharray="3.2 100" stroke-width="4" transform="rotate(-90 7 7)" />
                              </svg>
                            </div>
                          </div>
                          <div class="flex items-center justify-between gap-1.5 transition-opacity">
                            <p class="text-muted min-w-0 truncate text-sm">Nina attached the revised rollout map</p>
                            <span class="text-muted shrink-0 text-xs">10h</span>
                          </div>
                        </div>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="w-full px-1 py-0.5 text-left" aria-label="RFC-101Finalize issue timeline architectureMorgan mentioned the dependency map in the launch handoff thread1w" type="button" @click="openAction(&quot;RFC-101Finalize issue timeline architectureMorgan mentioned the dependency map in the launch handoff thread1w&quot;)">
                      <div class="hover:bg-(--ui-bg-muted)/80 flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 transition-colors">
                        <div class="shrink-0">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-8">
                            <img class="aspect-square h-full w-full" alt="Morgan Lee" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                          </span>
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="flex items-center gap-1.5">
                            <span class="text-muted shrink-0 text-sm font-medium opacity-50">RFC-101</span>
                            <h4 class="text-highlighted min-w-0 flex-1 truncate text-sm font-medium opacity-50 text-highlighted">Finalize issue timeline architecture</h4>
                            <div class="shrink-0">
                              <svg viewBox="0 0 14 14" fill="none" class="size-3.5 text-primary" width="100%" height="100%">
                                <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="2" />
                                <circle cx="7" cy="7" r="2" stroke="currentColor" stroke-dasharray="3.2 100" stroke-width="4" transform="rotate(-90 7 7)" />
                              </svg>
                            </div>
                          </div>
                          <div class="flex items-center justify-between gap-1.5 transition-opacity opacity-50">
                            <p class="text-muted min-w-0 truncate text-sm">Morgan mentioned the dependency map in the launch handoff thread</p>
                            <span class="text-muted shrink-0 text-xs">1w</span>
                          </div>
                        </div>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="w-full px-1 py-0.5 text-left" aria-label="RFC-102Review gantt interaction statesInteraction states renamed for the Gantt review1d" type="button" @click="openAction(&quot;RFC-102Review gantt interaction statesInteraction states renamed for the Gantt review1d&quot;)">
                      <div class="hover:bg-(--ui-bg-muted)/80 flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 transition-colors">
                        <div class="shrink-0">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-8">
                            <img class="aspect-square h-full w-full" alt="Morgan Lee" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                          </span>
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="flex items-center gap-1.5">
                            <div class="bg-primary size-2 shrink-0 rounded-full" />
                            <span class="text-muted shrink-0 text-sm font-medium">RFC-102</span>
                            <h4 class="text-highlighted min-w-0 flex-1 truncate text-sm font-medium text-highlighted">Review gantt interaction states</h4>
                            <div class="shrink-0">
                              <svg viewBox="0 0 14 14" fill="none" class="size-3.5 text-primary/60" width="100%" height="100%">
                                <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="2" />
                                <circle cx="7" cy="7" r="2" stroke="currentColor" stroke-dasharray="0 100" stroke-width="4" transform="rotate(-90 7 7)" />
                              </svg>
                            </div>
                          </div>
                          <div class="flex items-center justify-between gap-1.5 transition-opacity">
                            <p class="text-muted min-w-0 truncate text-sm">Interaction states renamed for the Gantt review</p>
                            <span class="text-muted shrink-0 text-xs">1d</span>
                          </div>
                        </div>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="w-full px-1 py-0.5 text-left" aria-label="RFC-103Sync issue filters with project viewsFilters now match the saved project view rules2d" type="button" @click="openAction(&quot;RFC-103Sync issue filters with project viewsFilters now match the saved project view rules2d&quot;)">
                      <div class="hover:bg-(--ui-bg-muted)/80 flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 transition-colors bg-(--ui-bg-elevated)/80">
                        <div class="shrink-0">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-8">
                            <img class="aspect-square h-full w-full" alt="Timeline sync" src="/reference/0a5fda67e048ade8.png" loading="lazy" />
                          </span>
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="flex items-center gap-1.5">
                            <div class="bg-primary size-2 shrink-0 rounded-full" />
                            <span class="text-muted shrink-0 text-sm font-medium">RFC-103</span>
                            <h4 class="text-highlighted min-w-0 flex-1 truncate text-sm font-medium text-highlighted">Sync issue filters with project views</h4>
                            <div class="shrink-0">
                              <svg viewBox="0 0 14 14" fill="none" class="size-3.5 text-primary/80" width="100%" height="100%">
                                <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="2" />
                                <circle cx="7" cy="7" r="2" stroke="currentColor" stroke-dasharray="5 100" stroke-width="4" transform="rotate(-90 7 7)" />
                              </svg>
                            </div>
                          </div>
                          <div class="flex items-center justify-between gap-1.5 transition-opacity">
                            <p class="text-muted min-w-0 truncate text-sm">Filters now match the saved project view rules</p>
                            <span class="text-muted shrink-0 text-xs">2d</span>
                          </div>
                        </div>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="w-full px-1 py-0.5 text-left" aria-label="RFC-103Sync issue filters with project viewsAvi flagged one workspace filter edge case before sign-off3d" type="button" @click="openAction(&quot;RFC-103Sync issue filters with project viewsAvi flagged one workspace filter edge case before sign-off3d&quot;)">
                      <div class="hover:bg-(--ui-bg-muted)/80 flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 transition-colors">
                        <div class="shrink-0">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-8">
                            <img class="aspect-square h-full w-full" alt="Avi Kapoor" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                          </span>
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="flex items-center gap-1.5">
                            <span class="text-muted shrink-0 text-sm font-medium opacity-50">RFC-103</span>
                            <h4 class="text-highlighted min-w-0 flex-1 truncate text-sm font-medium opacity-50 text-highlighted">Sync issue filters with project views</h4>
                            <div class="shrink-0">
                              <svg viewBox="0 0 14 14" fill="none" class="size-3.5 text-primary/80" width="100%" height="100%">
                                <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="2" />
                                <circle cx="7" cy="7" r="2" stroke="currentColor" stroke-dasharray="5 100" stroke-width="4" transform="rotate(-90 7 7)" />
                              </svg>
                            </div>
                          </div>
                          <div class="flex items-center justify-between gap-1.5 transition-opacity opacity-50">
                            <p class="text-muted min-w-0 truncate text-sm">Avi flagged one workspace filter edge case before sign-off</p>
                            <span class="text-muted shrink-0 text-xs">3d</span>
                          </div>
                        </div>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="w-full px-1 py-0.5 text-left" aria-label="RFC-104Document drag and resize behaviorSarah asked for one more resize edge case4d" type="button" @click="openAction(&quot;RFC-104Document drag and resize behaviorSarah asked for one more resize edge case4d&quot;)">
                      <div class="hover:bg-(--ui-bg-muted)/80 flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 transition-colors">
                        <div class="shrink-0">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-8">
                            <img class="aspect-square h-full w-full" alt="Sarah Patel" src="/reference/247ac7c76922347b.png" loading="lazy" />
                          </span>
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="flex items-center gap-1.5">
                            <span class="text-muted shrink-0 text-sm font-medium opacity-50">RFC-104</span>
                            <h4 class="text-highlighted min-w-0 flex-1 truncate text-sm font-medium opacity-50 text-highlighted">Document drag and resize behavior</h4>
                            <div class="shrink-0">
                              <svg viewBox="0 0 14 14" fill="none" class="size-3.5 text-muted" width="100%" height="100%">
                                <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-dasharray="1.4 1.74" stroke-width="2" />
                              </svg>
                            </div>
                          </div>
                          <div class="flex items-center justify-between gap-1.5 transition-opacity opacity-50">
                            <p class="text-muted min-w-0 truncate text-sm">Sarah asked for one more resize edge case</p>
                            <span class="text-muted shrink-0 text-xs">4d</span>
                          </div>
                        </div>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="w-full px-1 py-0.5 text-left" aria-label="RFC-105Create empty and loading timeline statesEmpty-state copy is ready for timeline QA6d" type="button" @click="copyValue(&quot;RFC-105Create empty and loading timeline statesEmpty-state copy is ready for timeline QA6d&quot;)">
                      <div class="hover:bg-(--ui-bg-muted)/80 flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 transition-colors">
                        <div class="shrink-0">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-8">
                            <img class="aspect-square h-full w-full" alt="QA Bot" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                          </span>
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="flex items-center gap-1.5">
                            <span class="text-muted shrink-0 text-sm font-medium opacity-50">RFC-105</span>
                            <h4 class="text-highlighted min-w-0 flex-1 truncate text-sm font-medium opacity-50 text-highlighted">Create empty and loading timeline states</h4>
                            <div class="shrink-0">
                              <svg viewBox="0 0 14 14" fill="none" class="size-3.5 text-primary/60" width="100%" height="100%">
                                <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="2" />
                                <circle cx="7" cy="7" r="2" stroke="currentColor" stroke-dasharray="0 100" stroke-width="4" transform="rotate(-90 7 7)" />
                              </svg>
                            </div>
                          </div>
                          <div class="flex items-center justify-between gap-1.5 transition-opacity opacity-50">
                            <p class="text-muted min-w-0 truncate text-sm">Empty-state copy is ready for timeline QA</p>
                            <span class="text-muted shrink-0 text-xs">6d</span>
                          </div>
                        </div>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="w-full px-1 py-0.5 text-left" aria-label="RFC-105Create empty and loading timeline statesQA Bot reopened the loading skeleton review after visual drift1w" type="button" @click="openAction(&quot;RFC-105Create empty and loading timeline statesQA Bot reopened the loading skeleton review after visual drift1w&quot;)">
                      <div class="hover:bg-(--ui-bg-muted)/80 flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 transition-colors">
                        <div class="shrink-0">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-8">
                            <img class="aspect-square h-full w-full" alt="QA Bot" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                          </span>
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="flex items-center gap-1.5">
                            <div class="bg-primary size-2 shrink-0 rounded-full" />
                            <span class="text-muted shrink-0 text-sm font-medium">RFC-105</span>
                            <h4 class="text-highlighted min-w-0 flex-1 truncate text-sm font-medium text-highlighted">Create empty and loading timeline states</h4>
                            <div class="shrink-0">
                              <svg viewBox="0 0 14 14" fill="none" class="size-3.5 text-primary/60" width="100%" height="100%">
                                <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="2" />
                                <circle cx="7" cy="7" r="2" stroke="currentColor" stroke-dasharray="0 100" stroke-width="4" transform="rotate(-90 7 7)" />
                              </svg>
                            </div>
                          </div>
                          <div class="flex items-center justify-between gap-1.5 transition-opacity">
                            <p class="text-muted min-w-0 truncate text-sm">QA Bot reopened the loading skeleton review after visual drift</p>
                            <span class="text-muted shrink-0 text-xs">1w</span>
                          </div>
                        </div>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="w-full px-1 py-0.5 text-left" aria-label="RFC-106Add mock dependencies and handoff notesHandoff notes accepted by release owner1w" type="button" @click="openAction(&quot;RFC-106Add mock dependencies and handoff notesHandoff notes accepted by release owner1w&quot;)">
                      <div class="hover:bg-(--ui-bg-muted)/80 flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 transition-colors">
                        <div class="shrink-0">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-8">
                            <img class="aspect-square h-full w-full" alt="Timeline sync" src="/reference/0a5fda67e048ade8.png" loading="lazy" />
                          </span>
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="flex items-center gap-1.5">
                            <span class="text-muted shrink-0 text-sm font-medium opacity-50">RFC-106</span>
                            <h4 class="text-highlighted min-w-0 flex-1 truncate text-sm font-medium opacity-50 text-highlighted">Add mock dependencies and handoff notes</h4>
                            <div class="shrink-0">
                              <svg viewBox="0 0 14 14" fill="none" class="size-3.5 text-primary/75" width="100%" height="100%">
                                <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="2" />
                                <path d="M4.5 7 6.35 8.85 9.65 5.15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                              </svg>
                            </div>
                          </div>
                          <div class="flex items-center justify-between gap-1.5 transition-opacity opacity-50">
                            <p class="text-muted min-w-0 truncate text-sm">Handoff notes accepted by release owner</p>
                            <span class="text-muted shrink-0 text-xs">1w</span>
                          </div>
                        </div>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="w-full px-1 py-0.5 text-left" aria-label="RFC-107Polish the quarter view densityQuarter density review is waiting on screenshots1w" type="button" @click="openAction(&quot;RFC-107Polish the quarter view densityQuarter density review is waiting on screenshots1w&quot;)">
                      <div class="hover:bg-(--ui-bg-muted)/80 flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 transition-colors">
                        <div class="shrink-0">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-8">
                            <img class="aspect-square h-full w-full" alt="Caleb Kim" src="/reference/62828bc2a489837e.png" loading="lazy" />
                          </span>
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="flex items-center gap-1.5">
                            <div class="bg-primary size-2 shrink-0 rounded-full" />
                            <span class="text-muted shrink-0 text-sm font-medium">RFC-107</span>
                            <h4 class="text-highlighted min-w-0 flex-1 truncate text-sm font-medium text-highlighted">Polish the quarter view density</h4>
                            <div class="shrink-0">
                              <svg viewBox="0 0 14 14" fill="none" class="size-3.5 text-primary/80" width="100%" height="100%">
                                <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="2" />
                                <circle cx="7" cy="7" r="2" stroke="currentColor" stroke-dasharray="5 100" stroke-width="4" transform="rotate(-90 7 7)" />
                              </svg>
                            </div>
                          </div>
                          <div class="flex items-center justify-between gap-1.5 transition-opacity">
                            <p class="text-muted min-w-0 truncate text-sm">Quarter density review is waiting on screenshots</p>
                            <span class="text-muted shrink-0 text-xs">1w</span>
                          </div>
                        </div>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="w-full px-1 py-0.5 text-left" aria-label="RFC-108Prepare issue calendar follow-up screenCalendar follow-up screen was added to backlog2w" type="button" @click="openAction(&quot;RFC-108Prepare issue calendar follow-up screenCalendar follow-up screen was added to backlog2w&quot;)">
                      <div class="hover:bg-(--ui-bg-muted)/80 flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 transition-colors">
                        <div class="shrink-0">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-8">
                            <img class="aspect-square h-full w-full" alt="Avi Kapoor" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                          </span>
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="flex items-center gap-1.5">
                            <span class="text-muted shrink-0 text-sm font-medium opacity-50">RFC-108</span>
                            <h4 class="text-highlighted min-w-0 flex-1 truncate text-sm font-medium opacity-50 text-highlighted">Prepare issue calendar follow-up screen</h4>
                            <div class="shrink-0">
                              <svg viewBox="0 0 14 14" fill="none" class="size-3.5 text-muted" width="100%" height="100%">
                                <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-dasharray="1.4 1.74" stroke-width="2" />
                              </svg>
                            </div>
                          </div>
                          <div class="flex items-center justify-between gap-1.5 transition-opacity opacity-50">
                            <p class="text-muted min-w-0 truncate text-sm">Calendar follow-up screen was added to backlog</p>
                            <span class="text-muted shrink-0 text-xs">2w</span>
                          </div>
                        </div>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="w-full px-1 py-0.5 text-left" aria-label="RFC-108Prepare issue calendar follow-up screenTimeline sync attached the first follow-up screen checklist2w" type="button" @click="openAction(&quot;RFC-108Prepare issue calendar follow-up screenTimeline sync attached the first follow-up screen checklist2w&quot;)">
                      <div class="hover:bg-(--ui-bg-muted)/80 flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 transition-colors">
                        <div class="shrink-0">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-8">
                            <img class="aspect-square h-full w-full" alt="Timeline sync" src="/reference/0a5fda67e048ade8.png" loading="lazy" />
                          </span>
                        </div>
                        <div class="min-w-0 flex-1">
                          <div class="flex items-center gap-1.5">
                            <span class="text-muted shrink-0 text-sm font-medium opacity-50">RFC-108</span>
                            <h4 class="text-highlighted min-w-0 flex-1 truncate text-sm font-medium opacity-50 text-highlighted">Prepare issue calendar follow-up screen</h4>
                            <div class="shrink-0">
                              <svg viewBox="0 0 14 14" fill="none" class="size-3.5 text-muted" width="100%" height="100%">
                                <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-dasharray="1.4 1.74" stroke-width="2" />
                              </svg>
                            </div>
                          </div>
                          <div class="flex items-center justify-between gap-1.5 transition-opacity opacity-50">
                            <p class="text-muted min-w-0 truncate text-sm">Timeline sync attached the first follow-up screen checklist</p>
                            <span class="text-muted shrink-0 text-xs">2w</span>
                          </div>
                        </div>
                      </div>
                    </UButton>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="hidden min-h-0 min-w-0 flex-1 md:block">
            <div class="flex h-full min-w-0 flex-col">
              <header class="flex h-10 shrink-0 items-center justify-between border-b px-4 border-default">
                <div class="flex items-center gap-3">
                  <span class="text-sm font-medium">RFC-103</span>
                </div>
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-7 gap-1" aria-label="Mark as read" type="button" @click="openAction(&quot;Mark as read&quot;)">
                  <UIcon name="i-lucide-check" class="size-4" />
                  Mark as read
                </UButton>
              </header>
              <div data-slot="scroll-area" class="relative overflow-hidden min-h-0 flex-1 [&amp;&gt;[data-slot=scroll-area-viewport]&gt;div]:!block" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
                <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                  <div style="min-width:100%;display:table">
                    <div class="mx-auto flex w-full max-w-[760px] flex-col gap-5 px-8 pt-12 pb-10">
                      <div class="text-muted flex flex-wrap items-center gap-2 text-xs">
                        <span class="text-highlighted font-medium">RFC-103</span>
                        <span class="text-(--ui-text-muted)/60">·</span>
                        <span class="inline-flex items-center gap-1.5">
                          <svg viewBox="0 0 14 14" fill="none" class="size-3.5 text-primary/80" width="100%" height="100%">
                            <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="2" />
                            <circle cx="7" cy="7" r="2" stroke="currentColor" stroke-dasharray="5 100" stroke-width="4" transform="rotate(-90 7 7)" />
                          </svg>
                          Review
                        </span>
                        <span class="text-(--ui-text-muted)/60">·</span>
                        <span>Status change</span>
                        <span class="text-(--ui-text-muted)/60">·</span>
                        <span>Timeline sync · 2d</span>
                      </div>
                      <div class="flex flex-col gap-2.5">
                        <h3 class="text-highlighted text-[1.5rem] leading-tight font-semibold md:text-[1.625rem] text-highlighted">Sync issue filters with project views</h3>
                        <p class="text-muted text-sm leading-6">Project issue in review for the Renewal Forecast Console workspace.</p>
                      </div>
                      <div class="max-w-[68ch]">
                        <p class="text-highlighted text-sm leading-6">Saved project views and spreadsheet filters now need to tell the same story, otherwise triage changes depending on where the team opens the issue.</p>
                      </div>
                      <div class="flex max-w-[72ch] flex-col gap-6">
                        <section class="flex flex-col gap-3">
                          <h4 class="text-highlighted text-base font-semibold text-highlighted">What changed</h4>
                          <ul class="flex list-disc flex-col gap-4 pl-5">
                            <li class="marker:text-muted">
                              <p class="text-highlighted text-sm leading-6">Saved view rules now drive the toolbar</p>
                              <p class="text-muted mt-1 text-sm leading-6">The spreadsheet filter state resolves from the same project view rules used elsewhere in the workspace.</p>
                            </li>
                            <li class="marker:text-muted">
                              <p class="text-highlighted text-sm leading-6">Display controls are synced</p>
                              <p class="text-muted mt-1 text-sm leading-6">Toolbar filters and issue view settings now move together instead of drifting per surface.</p>
                            </li>
                          </ul>
                        </section>
                        <section class="flex flex-col gap-3">
                          <h4 class="text-highlighted text-base font-semibold text-highlighted">What to verify</h4>
                          <ul class="flex list-disc flex-col gap-4 pl-5">
                            <li class="marker:text-muted">
                              <p class="text-highlighted text-sm leading-6">Workspace cache edge case</p>
                              <p class="text-muted mt-1 text-sm leading-6">Avi flagged one cache path that still needs a final browser pass before the review note goes out.</p>
                            </li>
                            <li class="marker:text-muted">
                              <p class="text-highlighted text-sm leading-6">Cross-surface consistency</p>
                              <p class="text-muted mt-1 text-sm leading-6">Confirm the inbox summary, spreadsheet state, and saved view all show the same filtered issue set.</p>
                            </li>
                          </ul>
                        </section>
                        <section class="flex flex-col gap-3">
                          <h4 class="text-highlighted text-base font-semibold text-highlighted">Notes for the handoff</h4>
                          <ul class="flex list-disc flex-col gap-4 pl-5">
                            <li class="marker:text-muted">
                              <p class="text-highlighted text-sm leading-6">Mention the saved view source</p>
                              <p class="text-muted mt-1 text-sm leading-6">Any release note should call out that filters are now inherited from project views, not duplicated locally.</p>
                            </li>
                            <li class="marker:text-muted">
                              <p class="text-highlighted text-sm leading-6">Keep the QA note short</p>
                              <p class="text-muted mt-1 text-sm leading-6">One sentence on the fixed edge case is enough once the browser verification lands.</p>
                            </li>
                          </ul>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-default shrink-0 border-t px-4 py-4 border-default">
                <div class="mx-auto w-full max-w-[720px]">
                  <div class="relative flex w-full flex-col">
                    <UTextarea v-model="form.replyOrLeaveANote" :rows="4" placeholder="Reply or leave a note..." name="replyOrLeaveANote" class="flex w-full text-base md:text-sm min-h-20 resize-none rounded-xl pb-14" :ui="{ base: 'h-full' }" />
                    <div class="absolute right-3 bottom-3 flex items-center gap-3">
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 w-9" aria-label="Attach file" type="button" @click="openAction(&quot;Attach file&quot;)">
                        <UIcon name="i-lucide-paperclip" class="size-4" />
                      </UButton>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-elevated text-default shadow-xs hover:bg-(--ui-bg-elevated)/80 h-9 w-9" aria-label="Send comment" type="button" @click="openAction(&quot;Send comment&quot;)">
                        <UIcon name="i-lucide-send" class="size-4" />
                      </UButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
