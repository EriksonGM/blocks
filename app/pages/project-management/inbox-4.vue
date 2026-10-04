<!-- Page: /project-management/inbox-4 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Inbox 4 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchMail": ""
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

function exportCsv() {
  const rows = Object.entries(form).map(([name, value]) => [name, String(value)])
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "project-management-inbox-4.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/inbox-4">
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
            <header class="flex h-16 shrink-0 items-center justify-between border-b px-4 dark:border-(--ui-text-inverted)/8 border-default">
              <div>
                <h1 class="text-xl font-semibold tracking-tight text-highlighted">Inbox</h1>
                <p class="text-sm text-muted dark:text-muted">5 conversations</p>
              </div>
              <div class="flex items-center gap-2">
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-9 lg:hidden" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                  <UIcon name="i-lucide-plus" class="size-4" />
                </UButton>
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-9" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                  <UIcon name="i-lucide-sliders-horizontal" class="size-4" />
                </UButton>
              </div>
            </header>
            <div class="border-b p-3 dark:border-(--ui-text-inverted)/8 border-default">
              <div class="relative">
                <UIcon name="i-lucide-search" class="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-dimmed" />
                <UInput v-model="form.searchMail" type="text" placeholder="Search mail..." name="searchMail" class="flex w-full rounded-md text-base md:text-sm h-10 pl-9" :ui="{ base: 'h-full' }" />
              </div>
            </div>
            <div data-slot="scroll-area" class="relative overflow-hidden min-h-0 flex-1 [&amp;&gt;[data-slot=scroll-area-viewport]&gt;div]:!block" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
              <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                <div style="min-width:100%;display:table">
                  <UButton color="neutral" variant="outline" class="group grid w-full grid-cols-[auto_minmax(0,1fr)] gap-4 border-b px-6 py-5 text-left transition dark:border-(--ui-text-inverted)/8 bg-(--ui-bg)/80 dark:bg-(--ui-bg)/5 border-default" aria-label="Final review before timeline architecture handoffCan you confirm the resize behavior notes and the remaining calendar follow-up copy before we send this to engineering?ptimeline-handoff.pdfmcalendar-copy.mdNina Oliver · 09:24" type="button" @click="copyValue(&quot;Final review before timeline architecture handoffCan you confirm the resize behavior notes and the remaining calendar follow-up copy before we send this to engineering?ptimeline-handoff.pdfmcalendar-copy.mdNina Oliver · 09:24&quot;)">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full mt-1 size-10">
                      <img class="aspect-square h-full w-full" alt="Nina Oliver" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                    </span>
                    <div class="min-w-0">
                      <div class="flex min-w-0 items-center gap-2">
                        <p class="truncate text-base font-semibold text-highlighted dark:text-highlighted text-highlighted">Final review before timeline architecture handoff</p>
                        <UIcon name="i-lucide-shield-check" class="size-4 shrink-0 text-info" />
                        <UIcon name="i-lucide-star" class="size-4 shrink-0 fill-warning text-warning" />
                      </div>
                      <p class="mt-2 truncate text-sm leading-6 text-toned dark:text-default">Can you confirm the resize behavior notes and the remaining calendar follow-up copy before we send this to engineering?</p>
                      <div class="mt-3 flex flex-wrap items-center gap-2">
                        <span class="inline-flex h-8 items-center gap-2 rounded-lg border bg-default px-3 text-sm font-medium text-default shadow-[0_1px_1px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-(--ui-bg)/5 dark:text-default border-default">
                          <span class="inline-flex size-4 items-center justify-center rounded border text-[8px] leading-none font-bold uppercase border-error/20 bg-error/10 text-error dark:border-error/20 dark:bg-error/10 dark:text-error">p</span>
                          timeline-handoff.pdf
                        </span>
                        <span class="inline-flex h-8 items-center gap-2 rounded-lg border bg-default px-3 text-sm font-medium text-default shadow-[0_1px_1px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-(--ui-bg)/5 dark:text-default border-default">
                          <span class="inline-flex size-4 items-center justify-center rounded border text-[8px] leading-none font-bold uppercase border-info/20 bg-info/10 text-info dark:border-info/20 dark:bg-info/10 dark:text-info">m</span>
                          calendar-copy.md
                        </span>
                        <span class="ml-auto hidden text-xs text-muted sm:inline dark:text-muted">Nina Oliver · 09:24</span>
                      </div>
                    </div>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="group grid w-full grid-cols-[auto_minmax(0,1fr)] gap-4 border-b px-6 py-5 text-left transition dark:border-(--ui-text-inverted)/8 bg-default hover:bg-default dark:bg-[var(--ui-bg-inverted)] dark:hover:bg-(--ui-bg)/5 border-default" aria-label="Dark mode borders are ready for one more passI pushed the latest screenshots. Calendar 2 now matches the quieter border model from Calendar 1.pdark-mode-review.pngAva Reed · 10:02" type="button" @click="openAction(&quot;Dark mode borders are ready for one more passI pushed the latest screenshots. Calendar 2 now matches the quieter border model from Calendar 1.pdark-mode-review.pngAva Reed · 10:02&quot;)">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full mt-1 size-10">
                      <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/62828bc2a489837e.png" loading="lazy" />
                    </span>
                    <div class="min-w-0">
                      <div class="flex min-w-0 items-center gap-2">
                        <p class="truncate text-base font-semibold text-highlighted dark:text-highlighted text-highlighted">Dark mode borders are ready for one more pass</p>
                        <UIcon name="i-lucide-shield-check" class="size-4 shrink-0 text-info" />
                      </div>
                      <p class="mt-2 truncate text-sm leading-6 text-toned dark:text-default">I pushed the latest screenshots. Calendar 2 now matches the quieter border model from Calendar 1.</p>
                      <div class="mt-3 flex flex-wrap items-center gap-2">
                        <span class="inline-flex h-8 items-center gap-2 rounded-lg border bg-default px-3 text-sm font-medium text-default shadow-[0_1px_1px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-(--ui-bg)/5 dark:text-default border-default">
                          <span class="inline-flex size-4 items-center justify-center rounded border text-[8px] leading-none font-bold uppercase border-secondary/20 bg-secondary/10 text-secondary dark:border-secondary/20 dark:bg-secondary/10 dark:text-secondary">p</span>
                          dark-mode-review.png
                        </span>
                        <span class="ml-auto hidden text-xs text-muted sm:inline dark:text-muted">Ava Reed · 10:02</span>
                      </div>
                    </div>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="group grid w-full grid-cols-[auto_minmax(0,1fr)] gap-4 border-b px-6 py-5 text-left transition dark:border-(--ui-text-inverted)/8 bg-default hover:bg-default dark:bg-[var(--ui-bg-inverted)] dark:hover:bg-(--ui-bg)/5 border-default" aria-label="Kanban reorder issue looks fixed in local testingThe drag target now uses the actual item midpoint instead of the stale list index. Reorder feels consistent across columns.mreorder-recording.movKai Young · Yesterday" type="button" @click="openAction(&quot;Kanban reorder issue looks fixed in local testingThe drag target now uses the actual item midpoint instead of the stale list index. Reorder feels consistent across columns.mreorder-recording.movKai Young · Yesterday&quot;)">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full mt-1 size-10">
                      <img class="aspect-square h-full w-full" alt="Kai Young" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                    </span>
                    <div class="min-w-0">
                      <div class="flex min-w-0 items-center gap-2">
                        <p class="truncate text-base font-semibold text-highlighted dark:text-highlighted text-highlighted">Kanban reorder issue looks fixed in local testing</p>
                        <UIcon name="i-lucide-star" class="size-4 shrink-0 fill-warning text-warning" />
                      </div>
                      <p class="mt-2 truncate text-sm leading-6 text-toned dark:text-default">The drag target now uses the actual item midpoint instead of the stale list index. Reorder feels consistent across columns.</p>
                      <div class="mt-3 flex flex-wrap items-center gap-2">
                        <span class="inline-flex h-8 items-center gap-2 rounded-lg border bg-default px-3 text-sm font-medium text-default shadow-[0_1px_1px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-(--ui-bg)/5 dark:text-default border-default">
                          <span class="inline-flex size-4 items-center justify-center rounded border text-[8px] leading-none font-bold uppercase border-secondary/20 bg-secondary/10 text-secondary dark:border-secondary/20 dark:bg-secondary/10 dark:text-secondary">m</span>
                          reorder-recording.mov
                        </span>
                        <span class="ml-auto hidden text-xs text-muted sm:inline dark:text-muted">Kai Young · Yesterday</span>
                      </div>
                    </div>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="group grid w-full grid-cols-[auto_minmax(0,1fr)] gap-4 border-b px-6 py-5 text-left transition dark:border-(--ui-text-inverted)/8 bg-default hover:bg-default dark:bg-[var(--ui-bg-inverted)] dark:hover:bg-(--ui-bg)/5 border-default" aria-label="Partner call notes and follow-up ownersThe customer likes the new inbox direction. They asked for clearer owners and a simpler attachment row.dpartner-call-notes.docxMorgan Lee · Mon" type="button" @click="openAction(&quot;Partner call notes and follow-up ownersThe customer likes the new inbox direction. They asked for clearer owners and a simpler attachment row.dpartner-call-notes.docxMorgan Lee · Mon&quot;)">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full mt-1 size-10">
                      <img class="aspect-square h-full w-full" alt="Morgan Lee" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                    </span>
                    <div class="min-w-0">
                      <div class="flex min-w-0 items-center gap-2">
                        <p class="truncate text-base font-semibold text-highlighted dark:text-highlighted text-highlighted">Partner call notes and follow-up owners</p>
                        <UIcon name="i-lucide-shield-check" class="size-4 shrink-0 text-info" />
                      </div>
                      <p class="mt-2 truncate text-sm leading-6 text-toned dark:text-default">The customer likes the new inbox direction. They asked for clearer owners and a simpler attachment row.</p>
                      <div class="mt-3 flex flex-wrap items-center gap-2">
                        <span class="inline-flex h-8 items-center gap-2 rounded-lg border bg-default px-3 text-sm font-medium text-default shadow-[0_1px_1px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-(--ui-bg)/5 dark:text-default border-default">
                          <span class="inline-flex size-4 items-center justify-center rounded border text-[8px] leading-none font-bold uppercase border-info/20 bg-info/10 text-info dark:border-info/20 dark:bg-info/10 dark:text-info">d</span>
                          partner-call-notes.docx
                        </span>
                        <span class="ml-auto hidden text-xs text-muted sm:inline dark:text-muted">Morgan Lee · Mon</span>
                      </div>
                    </div>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="group grid w-full grid-cols-[auto_minmax(0,1fr)] gap-4 border-b px-6 py-5 text-left transition dark:border-(--ui-text-inverted)/8 bg-default hover:bg-default dark:bg-[var(--ui-bg-inverted)] dark:hover:bg-(--ui-bg)/5 border-default" aria-label="Payout reconciliation export is readyYour reconciliation export for the April payout window is ready to download from the finance workspace.capril-reconciliation.csvStripe · Tue" type="button" @click="exportCsv()">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full mt-1 size-10">
                      <img class="aspect-square h-full w-full" alt="Stripe" src="/reference/6f77b9b90a56c3cc.png" loading="lazy" />
                    </span>
                    <div class="min-w-0">
                      <div class="flex min-w-0 items-center gap-2">
                        <p class="truncate text-base font-semibold text-highlighted dark:text-highlighted text-highlighted">Payout reconciliation export is ready</p>
                      </div>
                      <p class="mt-2 truncate text-sm leading-6 text-toned dark:text-default">Your reconciliation export for the April payout window is ready to download from the finance workspace.</p>
                      <div class="mt-3 flex flex-wrap items-center gap-2">
                        <span class="inline-flex h-8 items-center gap-2 rounded-lg border bg-default px-3 text-sm font-medium text-default shadow-[0_1px_1px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-(--ui-bg)/5 dark:text-default border-default">
                          <span class="inline-flex size-4 items-center justify-center rounded border text-[8px] leading-none font-bold uppercase border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/10 dark:text-success">c</span>
                          april-reconciliation.csv
                        </span>
                        <span class="ml-auto hidden text-xs text-muted sm:inline dark:text-muted">Stripe · Tue</span>
                      </div>
                    </div>
                  </UButton>
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
