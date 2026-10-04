<!-- Page: /project-management/inbox-email-1 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Inbox Email 1 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "writeAReply": ""
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
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/inbox-email-1">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted flex min-h-0 flex-1 overflow-hidden">
          <aside class="hidden w-72 shrink-0 flex-col border-r bg-(--ui-bg)/80 lg:flex dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)] border-default">
            <div class="flex h-16 shrink-0 items-center justify-between border-b px-4 dark:border-(--ui-text-inverted)/8 border-default">
              <div class="flex items-center gap-3">
                <div class="flex size-9 items-center justify-center rounded-xl border bg-default shadow-sm dark:border-(--ui-text-inverted)/10 dark:bg-(--ui-bg)/5 border-default">
                  <UIcon name="i-lucide-mail" class="size-4" />
                </div>
                <div>
                  <p class="text-sm font-semibold text-highlighted dark:text-highlighted text-highlighted">Project Mail</p>
                  <p class="text-xs text-muted dark:text-muted">Renewal workspace</p>
                </div>
              </div>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                <UIcon name="i-lucide-chevron-down" class="size-4" />
              </UButton>
            </div>
            <div class="p-3">
              <UButton color="primary" variant="solid" class="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 px-4 py-2 h-10 w-full justify-start gap-2" aria-label="Compose" type="button" @click="openAction(&quot;Compose&quot;)">
                <UIcon name="i-lucide-plus" class="size-4" />
                Compose
              </UButton>
            </div>
            <div data-slot="scroll-area" class="relative overflow-hidden min-h-0 flex-1 px-3 pb-4" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
              <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                <div style="min-width:100%;display:table">
                  <div class="space-y-1">
                    <UButton color="neutral" variant="ghost" class="flex h-10 w-full items-center gap-3 rounded-lg px-3 text-sm font-medium transition bg-muted text-highlighted dark:bg-(--ui-bg)/8 dark:text-highlighted" aria-label="Inbox18" type="button" @click="openAction(&quot;Inbox18&quot;)">
                      <UIcon name="i-lucide-inbox" class="size-4" />
                      <span class="min-w-0 flex-1 truncate text-left">Inbox</span>
                      <span class="rounded-full px-2 py-0.5 text-xs bg-inverted text-inverted dark:bg-default dark:text-dimmed">18</span>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="flex h-10 w-full items-center gap-3 rounded-lg px-3 text-sm font-medium transition text-toned hover:bg-muted hover:text-highlighted dark:text-muted dark:hover:bg-(--ui-bg)/8 dark:hover:text-highlighted" aria-label="Sent9" type="button" @click="openAction(&quot;Sent9&quot;)">
                      <UIcon name="i-lucide-send" class="size-4" />
                      <span class="min-w-0 flex-1 truncate text-left">Sent</span>
                      <span class="rounded-full px-2 py-0.5 text-xs bg-muted text-muted dark:bg-(--ui-bg)/8 dark:text-muted">9</span>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="flex h-10 w-full items-center gap-3 rounded-lg px-3 text-sm font-medium transition text-toned hover:bg-muted hover:text-highlighted dark:text-muted dark:hover:bg-(--ui-bg)/8 dark:hover:text-highlighted" aria-label="Drafts3" type="button" @click="openAction(&quot;Drafts3&quot;)">
                      <UIcon name="i-lucide-file-text" class="size-4" />
                      <span class="min-w-0 flex-1 truncate text-left">Drafts</span>
                      <span class="rounded-full px-2 py-0.5 text-xs bg-muted text-muted dark:bg-(--ui-bg)/8 dark:text-muted">3</span>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="flex h-10 w-full items-center gap-3 rounded-lg px-3 text-sm font-medium transition text-toned hover:bg-muted hover:text-highlighted dark:text-muted dark:hover:bg-(--ui-bg)/8 dark:hover:text-highlighted" aria-label="Archive42" type="button" @click="openAction(&quot;Archive42&quot;)">
                      <UIcon name="i-lucide-archive" class="size-4" />
                      <span class="min-w-0 flex-1 truncate text-left">Archive</span>
                      <span class="rounded-full px-2 py-0.5 text-xs bg-muted text-muted dark:bg-(--ui-bg)/8 dark:text-muted">42</span>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="flex h-10 w-full items-center gap-3 rounded-lg px-3 text-sm font-medium transition text-toned hover:bg-muted hover:text-highlighted dark:text-muted dark:hover:bg-(--ui-bg)/8 dark:hover:text-highlighted" aria-label="Trash0" type="button" @click="openAction(&quot;Trash0&quot;)">
                      <UIcon name="i-lucide-trash-2" class="size-4" />
                      <span class="min-w-0 flex-1 truncate text-left">Trash</span>
                      <span class="rounded-full px-2 py-0.5 text-xs bg-muted text-muted dark:bg-(--ui-bg)/8 dark:text-muted">0</span>
                    </UButton>
                  </div>
                  <div class="mt-6">
                    <div class="mb-2 flex items-center justify-between px-3">
                      <p class="text-xs font-semibold tracking-wide text-muted uppercase text-highlighted">Spaces</p>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-7" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                        <UIcon name="i-lucide-plus" class="size-3.5" />
                      </UButton>
                    </div>
                    <div class="space-y-1">
                      <UButton color="neutral" variant="ghost" class="flex h-9 w-full items-center gap-3 rounded-lg px-3 text-sm text-toned transition hover:bg-muted hover:text-highlighted dark:text-muted dark:hover:bg-(--ui-bg)/8 dark:hover:text-highlighted" aria-label="Renewal Forecast8" type="button" @click="openAction(&quot;Renewal Forecast8&quot;)">
                        <UIcon name="i-lucide-folder" class="size-4" />
                        <span class="min-w-0 flex-1 truncate text-left">Renewal Forecast</span>
                        <span class="text-xs text-dimmed">8</span>
                      </UButton>
                      <UButton color="neutral" variant="ghost" class="flex h-9 w-full items-center gap-3 rounded-lg px-3 text-sm text-toned transition hover:bg-muted hover:text-highlighted dark:text-muted dark:hover:bg-(--ui-bg)/8 dark:hover:text-highlighted" aria-label="Platform QA5" type="button" @click="openAction(&quot;Platform QA5&quot;)">
                        <UIcon name="i-lucide-folder" class="size-4" />
                        <span class="min-w-0 flex-1 truncate text-left">Platform QA</span>
                        <span class="text-xs text-dimmed">5</span>
                      </UButton>
                      <UButton color="neutral" variant="ghost" class="flex h-9 w-full items-center gap-3 rounded-lg px-3 text-sm text-toned transition hover:bg-muted hover:text-highlighted dark:text-muted dark:hover:bg-(--ui-bg)/8 dark:hover:text-highlighted" aria-label="Design Partners4" type="button" @click="openAction(&quot;Design Partners4&quot;)">
                        <UIcon name="i-lucide-folder" class="size-4" />
                        <span class="min-w-0 flex-1 truncate text-left">Design Partners</span>
                        <span class="text-xs text-dimmed">4</span>
                      </UButton>
                      <UButton color="neutral" variant="ghost" class="flex h-9 w-full items-center gap-3 rounded-lg px-3 text-sm text-toned transition hover:bg-muted hover:text-highlighted dark:text-muted dark:hover:bg-(--ui-bg)/8 dark:hover:text-highlighted" aria-label="Finance Ops3" type="button" @click="openAction(&quot;Finance Ops3&quot;)">
                        <UIcon name="i-lucide-folder" class="size-4" />
                        <span class="min-w-0 flex-1 truncate text-left">Finance Ops</span>
                        <span class="text-xs text-dimmed">3</span>
                      </UButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <section class="flex min-h-0 min-w-0 flex-1 flex-col bg-default dark:bg-[var(--ui-bg-inverted)]">
            <header class="flex h-16 shrink-0 items-center justify-between border-b px-5 dark:border-(--ui-text-inverted)/8 border-default">
              <NuxtLink class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md text-xs gap-2 px-2" to="/project-management/inbox-4">
                <UIcon name="i-lucide-arrow-left" class="size-4" />
                Back
              </NuxtLink>
              <div class="flex items-center gap-2">
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs gap-2" aria-label="Archive" type="button" @click="openAction(&quot;Archive&quot;)">
                  <UIcon name="i-lucide-archive" class="size-4" />
                  Archive
                </UButton>
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs gap-2" aria-label="Star" type="button" @click="openAction(&quot;Star&quot;)">
                  <UIcon name="i-lucide-star" class="size-4" />
                  Star
                </UButton>
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs gap-2" aria-label="Snooze" type="button" @click="openAction(&quot;Snooze&quot;)">
                  <UIcon name="i-lucide-clock-3" class="size-4" />
                  Snooze
                </UButton>
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-9" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                  <UIcon name="i-lucide-ellipsis-vertical" class="size-4" />
                </UButton>
              </div>
            </header>
            <div data-slot="scroll-area" class="relative overflow-hidden min-h-0 flex-1" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
              <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                <div style="min-width:100%;display:table">
                  <article class="mx-auto w-full max-w-5xl px-5 py-6">
                    <div class="flex flex-col gap-4 border-b pb-6 dark:border-(--ui-text-inverted)/8 border-default">
                      <div class="flex items-start gap-4">
                        <span class="relative flex shrink-0 overflow-hidden rounded-full size-12">
                          <img class="aspect-square h-full w-full" alt="Nina Oliver" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                        </span>
                        <div class="min-w-0 flex-1">
                          <div class="flex flex-wrap items-center gap-2">
                            <h1 class="text-xl font-semibold tracking-tight text-highlighted sm:text-2xl dark:text-highlighted text-highlighted">Final review before timeline architecture handoff</h1>
                            <UIcon name="i-lucide-shield-check" class="size-5 text-info" />
                          </div>
                          <div class="mt-2 flex flex-wrap items-center gap-2 text-sm">
                            <span class="font-medium text-highlighted dark:text-highlighted">Nina Oliver</span>
                            <span class="rounded-full bg-muted px-2 py-0.5 text-xs text-toned dark:bg-(--ui-bg)/8 dark:text-default">Product lead</span>
                            <span class="inline-flex items-center gap-1 text-xs text-muted dark:text-muted">
                              <UIcon name="i-lucide-clock-3" class="size-3.5" />
                              09:24 AM
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="py-6">
                      <div class="min-w-0">
                        <div class="space-y-5 text-base leading-7 text-default dark:text-default">
                          <p>Can you confirm the resize behavior notes and the remaining calendar follow-up copy before we send this to engineering?</p>
                          <p>The timeline architecture section is approved, but I want the disabled calendar state and overlap behavior to read cleanly in the implementation brief.</p>
                          <p>If the wording looks good, I will attach it to the release thread and mark the handoff ready for review.</p>
                        </div>
                        <div class="mt-6 flex flex-wrap gap-2">
                          <span class="inline-flex h-8 items-center gap-2 rounded-lg border bg-default px-3 text-sm font-medium text-default shadow-[0_1px_1px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-(--ui-bg)/5 dark:text-default border-default">
                            <UIcon name="i-lucide-paperclip" class="size-4 text-dimmed" />
                            timeline-handoff.pdf
                          </span>
                          <span class="inline-flex h-8 items-center gap-2 rounded-lg border bg-default px-3 text-sm font-medium text-default shadow-[0_1px_1px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-(--ui-bg)/5 dark:text-default border-default">
                            <UIcon name="i-lucide-paperclip" class="size-4 text-dimmed" />
                            calendar-copy.md
                          </span>
                        </div>
                        <div class="mt-8">
                          <div class="mb-4 flex gap-6 border-b text-sm font-medium dark:border-(--ui-text-inverted)/8 border-default">
                            <UButton color="neutral" variant="outline" class="border-b-2 pb-3 border-accented text-highlighted dark:border-default dark:text-highlighted" aria-label="All" type="button" @click="openAction(&quot;All&quot;)">
                              All
                            </UButton>
                            <UButton color="neutral" variant="outline" class="border-b-2 pb-3 border-transparent text-muted dark:text-muted" aria-label="Comments" type="button" @click="openAction(&quot;Comments&quot;)">
                              Comments
                            </UButton>
                            <UButton color="neutral" variant="outline" class="border-b-2 pb-3 border-transparent text-muted dark:text-muted" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                              Actions
                            </UButton>
                          </div>
                          <div class="rounded-xl border bg-default shadow-sm dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] border-default">
                            <div class="flex border-b text-sm font-medium dark:border-(--ui-text-inverted)/8 border-default">
                              <UButton color="neutral" variant="outline" class="border-b-2 border-accented px-4 py-3 text-highlighted dark:border-default dark:text-highlighted" aria-label="Reply to Nina" type="button" @click="openAction(&quot;Reply to Nina&quot;)">
                                Reply to Nina
                              </UButton>
                              <UButton color="neutral" variant="ghost" class="px-4 py-3 text-muted hover:text-highlighted dark:text-muted dark:hover:text-highlighted" aria-label="Internal comment" type="button" @click="openAction(&quot;Internal comment&quot;)">
                                Internal comment
                              </UButton>
                            </div>
                            <div class="flex items-center gap-1 border-b px-3 py-2 text-muted dark:border-(--ui-text-inverted)/8 border-default">
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                                <UIcon name="i-lucide-bold" class="size-4" />
                              </UButton>
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                                <UIcon name="i-lucide-italic" class="size-4" />
                              </UButton>
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                                <UIcon name="i-lucide-underline" class="size-4" />
                              </UButton>
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                                <UIcon name="i-lucide-list" class="size-4" />
                              </UButton>
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                                <UIcon name="i-lucide-link" class="size-4" />
                              </UButton>
                              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                                <UIcon name="i-lucide-paperclip" class="size-4" />
                              </UButton>
                            </div>
                            <UTextarea v-model="form.writeAReply" :rows="4" placeholder="Write a reply..." name="writeAReply" class="flex w-full rounded-md text-base md:text-sm min-h-32 resize-none" :ui="{ base: 'h-full' }" />
                            <div class="flex items-center gap-2 border-t px-4 py-3 dark:border-(--ui-text-inverted)/8 border-default">
                              <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Send reply" type="button" @click="openAction(&quot;Send reply&quot;)">
                                Send reply
                              </UButton>
                              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Save draft" type="button" @click="openAction(&quot;Save draft&quot;)">
                                Save draft
                              </UButton>
                            </div>
                          </div>
                          <div class="before:bg-(--ui-border) relative mt-8 space-y-5 before:absolute before:top-3.5 before:bottom-3.5 before:left-3.5 before:w-px dark:before:bg-(--ui-bg)/10">
                            <div class="relative grid grid-cols-[1.75rem_minmax(0,1fr)] gap-5">
                              <span class="flex shrink-0 overflow-hidden rounded-full relative z-10 size-7 border-2 border-inverted dark:border-[var(--ui-text-highlighted)]">
                                <img class="aspect-square h-full w-full" alt="Nina Oliver" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                              </span>
                              <div class="min-w-0">
                                <div class="text-sm">
                                  <span class="font-semibold text-highlighted dark:text-highlighted">Nina Oliver</span>
                                  <span class="text-muted dark:text-muted">raised this email from Renewal Forecast · 12 minutes ago</span>
                                </div>
                                <div class="mt-2 max-w-2xl rounded-lg px-3 py-2 text-sm leading-6 bg-muted text-default dark:bg-(--ui-bg)/8 dark:text-default">Asked for final confirmation before the timeline architecture handoff goes to engineering.</div>
                              </div>
                            </div>
                            <div class="relative grid grid-cols-[1.75rem_minmax(0,1fr)] gap-5">
                              <span class="flex shrink-0 overflow-hidden rounded-full relative z-10 size-7 border-2 border-inverted dark:border-[var(--ui-text-highlighted)]">
                                <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/62828bc2a489837e.png" loading="lazy" />
                              </span>
                              <div class="min-w-0">
                                <div class="text-sm">
                                  <span class="font-semibold text-highlighted dark:text-highlighted">Ava Reed</span>
                                  <span class="text-muted dark:text-muted">Internal note · 8 minutes ago</span>
                                </div>
                                <div class="mt-2 max-w-2xl rounded-lg px-3 py-2 text-sm leading-6 bg-warning/10 text-warning dark:bg-warning/10 dark:text-warning">Dark-mode screenshots are attached in the QA thread. Main open question is disabled calendar state weight.</div>
                              </div>
                            </div>
                            <div class="relative grid grid-cols-[1.75rem_minmax(0,1fr)] gap-5">
                              <span class="flex shrink-0 overflow-hidden rounded-full relative z-10 size-7 border-2 border-inverted dark:border-[var(--ui-text-highlighted)]">
                                <img class="aspect-square h-full w-full" alt="Kai Young" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                              </span>
                              <div class="min-w-0">
                                <div class="text-sm">
                                  <span class="font-semibold text-highlighted dark:text-highlighted">Kai Young</span>
                                  <span class="text-muted dark:text-muted">5 minutes ago</span>
                                </div>
                                <div class="mt-2 max-w-2xl rounded-lg px-3 py-2 text-sm leading-6 bg-muted text-default dark:bg-(--ui-bg)/8 dark:text-default">Resize behavior is now consistent with the current drag affordance. I am checking the overlap copy before closing the implementation brief.</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </main>
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
