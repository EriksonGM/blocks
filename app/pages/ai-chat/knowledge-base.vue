<!-- Page: /ai-chat/knowledge-base | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Document 6 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchTitlesSources": "",
  "kbNoteInput": "",
  "askAboutRefundPolicy": ""
})

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "All6",
    "value": "0"
  },
  {
    "label": "Read2",
    "value": "1"
  },
  {
    "label": "Unread4",
    "value": "2"
  },
  {
    "label": "Starred2",
    "value": "3"
  }
]

const tabs2Active = ref("0")

const tabs2Items = [
  {
    "label": "Notes 0",
    "value": "0"
  },
  {
    "label": "Highlights 0",
    "value": "1"
  }
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

function saveForm() {
  toast.add({ title: "Changes saved", color: 'success', icon: 'i-lucide-check' })
}

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/knowledge-base">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="grid min-h-0 flex-1 grid-cols-1 xl:grid-cols-[280px_minmax(0,1fr)_340px] 2xl:grid-cols-[320px_minmax(0,1fr)_400px]">
        <section aria-label="Library" class="flex min-h-0 flex-col border-b xl:overflow-y-auto xl:border-r xl:border-b-0 border-default">
          <div class="shrink-0 p-4 pb-3">
            <div class="mb-3 flex items-baseline justify-between">
              <h2 class="text-sm font-semibold text-highlighted">Library</h2>
              <span class="text-muted text-xs">6 docs</span>
            </div>
            <div class="relative">
              <UIcon name="i-lucide-search" class="text-muted pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2" />
              <UInput v-model="form.searchTitlesSources" type="text" aria-label="Search the library" placeholder="Search titles, sources…" name="searchTitlesSources" class="flex w-full rounded-md md:text-sm h-9 pl-8 text-[13px]" :ui="{ base: 'h-full' }" />
            </div>
            <UTabs v-model="tabs1Active" :items="tabs1Items" :content="false" color="primary" variant="link" class="mt-2 flex gap-1" aria-label="Library filter" />
          </div>
          <ul class="min-h-0 flex-1 px-2 pb-4 xl:overflow-y-auto">
            <li class="relative">
              <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full flex-col gap-2 rounded-lg px-3 py-3 pr-9 text-left bg-muted" aria-label="Refund policySupport playbookM. Okafor · SupportJune 2026 · 12 pagesPage9/ 12 · 2 min left" type="button" @click="openAction(&quot;Refund policySupport playbookM. Okafor · SupportJune 2026 · 12 pagesPage9/ 12 · 2 min left&quot;)">
                <span class="flex items-start gap-2.5">
                  <span class="flex min-w-0 flex-1 flex-col gap-0.5">
                    <span class="line-clamp-2 text-[13px] leading-5 font-medium break-words">Refund policy</span>
                    <span class="text-muted truncate text-[11px]">Support playbook</span>
                    <span class="text-muted truncate text-[11px]">M. Okafor · Support</span>
                    <span class="text-muted text-[11px]">June 2026 · 12 pages</span>
                  </span>
                </span>
                <span class="bg-(--ui-text-muted)/15 h-1 overflow-hidden rounded-full">
                  <span class="bg-(--ui-text-highlighted) block h-full rounded-full" style="width: 75%;" />
                </span>
                <span class="text-muted text-[11px]">Page9/ 12 · 2 min left</span>
              </UButton>
              <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted absolute top-2.5 right-2.5 rounded p-1" aria-label="Unstar Refund policy" type="button" @click="openAction(&quot;Unstar Refund policy&quot;)">
                <UIcon name="i-lucide-bookmark" class="size-3.5" />
              </UButton>
            </li>
            <li class="relative">
              <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full flex-col gap-2 rounded-lg px-3 py-3 pr-9 text-left" aria-label="Onboarding runbookPeople opsD. Kim · PeopleMay 2026 · 18 pagesPage7/ 18 · 8 min left" type="button" @click="openAction(&quot;Onboarding runbookPeople opsD. Kim · PeopleMay 2026 · 18 pagesPage7/ 18 · 8 min left&quot;)">
                <span class="flex items-start gap-2.5">
                  <span class="flex min-w-0 flex-1 flex-col gap-0.5">
                    <span class="line-clamp-2 text-[13px] leading-5 font-medium break-words">Onboarding runbook</span>
                    <span class="text-muted truncate text-[11px]">People ops</span>
                    <span class="text-muted truncate text-[11px]">D. Kim · People</span>
                    <span class="text-muted text-[11px]">May 2026 · 18 pages</span>
                  </span>
                </span>
                <span class="bg-(--ui-text-muted)/15 h-1 overflow-hidden rounded-full">
                  <span class="bg-(--ui-text-highlighted) block h-full rounded-full" style="width: 40%;" />
                </span>
                <span class="text-muted text-[11px]">Page7/ 18 · 8 min left</span>
              </UButton>
              <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted absolute top-2.5 right-2.5 rounded p-1" aria-label="Star Onboarding runbook" type="button" @click="openAction(&quot;Star Onboarding runbook&quot;)">
                <UIcon name="i-lucide-bookmark" class="size-3.5" />
              </UButton>
            </li>
            <li class="relative">
              <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full flex-col gap-2 rounded-lg px-3 py-3 pr-9 text-left" aria-label="Security review checklistEngineeringS. Rao · EngineeringJuly 2026 · 9 pagesPage9/ 9 · Completed" type="button" @click="openAction(&quot;Security review checklistEngineeringS. Rao · EngineeringJuly 2026 · 9 pagesPage9/ 9 · Completed&quot;)">
                <span class="flex items-start gap-2.5">
                  <span class="flex min-w-0 flex-1 flex-col gap-0.5">
                    <span class="line-clamp-2 text-[13px] leading-5 font-medium break-words">Security review checklist</span>
                    <span class="text-muted truncate text-[11px]">Engineering</span>
                    <span class="text-muted truncate text-[11px]">S. Rao · Engineering</span>
                    <span class="text-muted text-[11px]">July 2026 · 9 pages</span>
                  </span>
                </span>
                <span class="bg-(--ui-text-muted)/15 h-1 overflow-hidden rounded-full">
                  <span class="bg-(--ui-text-highlighted) block h-full rounded-full" style="width: 100%;" />
                </span>
                <span class="text-muted text-[11px]">Page9/ 9 · Completed</span>
              </UButton>
              <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted absolute top-2.5 right-2.5 rounded p-1" aria-label="Star Security review checklist" type="button" @click="openAction(&quot;Star Security review checklist&quot;)">
                <UIcon name="i-lucide-bookmark" class="size-3.5" />
              </UButton>
            </li>
            <li class="relative">
              <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full flex-col gap-2 rounded-lg px-3 py-3 pr-9 text-left" aria-label="Pricing memoFinanceL. Chen · FinanceApril 2026 · 15 pagesPage1/ 15 · Unread" type="button" @click="openAction(&quot;Pricing memoFinanceL. Chen · FinanceApril 2026 · 15 pagesPage1/ 15 · Unread&quot;)">
                <span class="flex items-start gap-2.5">
                  <span class="flex min-w-0 flex-1 flex-col gap-0.5">
                    <span class="line-clamp-2 text-[13px] leading-5 font-medium break-words">Pricing memo</span>
                    <span class="text-muted truncate text-[11px]">Finance</span>
                    <span class="text-muted truncate text-[11px]">L. Chen · Finance</span>
                    <span class="text-muted text-[11px]">April 2026 · 15 pages</span>
                  </span>
                </span>
                <span class="bg-(--ui-text-muted)/15 h-1 overflow-hidden rounded-full">
                  <span class="bg-(--ui-text-highlighted) block h-full rounded-full" style="width: 0%;" />
                </span>
                <span class="text-muted text-[11px]">Page1/ 15 · Unread</span>
              </UButton>
              <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted absolute top-2.5 right-2.5 rounded p-1" aria-label="Star Pricing memo" type="button" @click="openAction(&quot;Star Pricing memo&quot;)">
                <UIcon name="i-lucide-bookmark" class="size-3.5" />
              </UButton>
            </li>
            <li class="relative">
              <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full flex-col gap-2 rounded-lg px-3 py-3 pr-9 text-left" aria-label="Checkout outage postmortemEngineeringS. Rao · EngineeringAugust 2026 · 11 pagesPage7/ 11 · 4 min left" type="button" @click="openAction(&quot;Checkout outage postmortemEngineeringS. Rao · EngineeringAugust 2026 · 11 pagesPage7/ 11 · 4 min left&quot;)">
                <span class="flex items-start gap-2.5">
                  <span class="flex min-w-0 flex-1 flex-col gap-0.5">
                    <span class="line-clamp-2 text-[13px] leading-5 font-medium break-words">Checkout outage postmortem</span>
                    <span class="text-muted truncate text-[11px]">Engineering</span>
                    <span class="text-muted truncate text-[11px]">S. Rao · Engineering</span>
                    <span class="text-muted text-[11px]">August 2026 · 11 pages</span>
                  </span>
                </span>
                <span class="bg-(--ui-text-muted)/15 h-1 overflow-hidden rounded-full">
                  <span class="bg-(--ui-text-highlighted) block h-full rounded-full" style="width: 60%;" />
                </span>
                <span class="text-muted text-[11px]">Page7/ 11 · 4 min left</span>
              </UButton>
              <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted absolute top-2.5 right-2.5 rounded p-1" aria-label="Unstar Checkout outage postmortem" type="button" @click="openAction(&quot;Unstar Checkout outage postmortem&quot;)">
                <UIcon name="i-lucide-bookmark" class="size-3.5" />
              </UButton>
            </li>
            <li class="relative">
              <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex w-full flex-col gap-2 rounded-lg px-3 py-3 pr-9 text-left" aria-label="Expense guidelinesFinanceL. Chen · FinanceMarch 2026 · 7 pagesPage7/ 7 · Completed" type="button" @click="openAction(&quot;Expense guidelinesFinanceL. Chen · FinanceMarch 2026 · 7 pagesPage7/ 7 · Completed&quot;)">
                <span class="flex items-start gap-2.5">
                  <span class="flex min-w-0 flex-1 flex-col gap-0.5">
                    <span class="line-clamp-2 text-[13px] leading-5 font-medium break-words">Expense guidelines</span>
                    <span class="text-muted truncate text-[11px]">Finance</span>
                    <span class="text-muted truncate text-[11px]">L. Chen · Finance</span>
                    <span class="text-muted text-[11px]">March 2026 · 7 pages</span>
                  </span>
                </span>
                <span class="bg-(--ui-text-muted)/15 h-1 overflow-hidden rounded-full">
                  <span class="bg-(--ui-text-highlighted) block h-full rounded-full" style="width: 100%;" />
                </span>
                <span class="text-muted text-[11px]">Page7/ 7 · Completed</span>
              </UButton>
              <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted absolute top-2.5 right-2.5 rounded p-1" aria-label="Star Expense guidelines" type="button" @click="openAction(&quot;Star Expense guidelines&quot;)">
                <UIcon name="i-lucide-bookmark" class="size-3.5" />
              </UButton>
            </li>
          </ul>
        </section>
        <section aria-label="Document reader" class="min-h-0 border-b xl:overflow-y-auto xl:border-b-0 border-default">
          <div class="mx-auto flex max-w-2xl flex-col gap-5 px-5 py-6 md:px-8 2xl:max-w-3xl">
            <div>
              <p class="text-muted mb-2 text-xs">Support playbook · June 2026 · 12 pages</p>
              <h1 class="text-2xl font-semibold tracking-tight text-highlighted">Refund policy</h1>
              <p class="text-muted mt-2 text-sm leading-relaxed">When money moves back to a customer, speed and clarity matter more than process. This policy sets the window, the approvers, and the exact words to use.</p>
              <div class="mt-3 flex flex-wrap gap-1.5">
                <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 font-normal border-default">Refunds</div>
                <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 font-normal border-default">Support</div>
                <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 font-normal border-default">Policy</div>
              </div>
            </div>
            <figure class="rounded-xl border p-4 border-default">
              <blockquote class="border-l-2 pl-3 text-sm leading-7">Refunds within 30 days of purchase are approved automatically up to $500. Anything older or larger needs a lead's sign-off in the ticket, with the reason quoted back to the customer.</blockquote>
              <figcaption class="text-muted mt-2 text-[11px]">Key passage ·not highlighted</figcaption>
            </figure>
            <section>
              <h2 class="mb-2 text-lg font-semibold text-highlighted">1. The 30-day window</h2>
              <p class="text-muted mb-3 text-sm leading-7">The window opens at purchase, not delivery. Digital goods and physical shipments follow the same clock so agents never have to compute two timelines on a live ticket.</p>
              <p class="text-muted mb-3 text-sm leading-7">Edge cases — preorders, backorders, gift purchases — anchor to the charge date on the receipt. When the receipt is ambiguous, the newer date wins.</p>
            </section>
            <section>
              <h2 class="mb-2 text-lg font-semibold text-highlighted">2. Approvals</h2>
              <p class="text-muted mb-3 text-sm leading-7">Leads approve in the ticket thread, never in a side channel. The approval must quote the reason so a future audit can reconstruct the decision without chasing chat logs.</p>
              <p class="text-muted mb-3 text-sm leading-7">Repeat refunds to the same customer within 90 days route to a lead regardless of amount.</p>
            </section>
            <div class="flex flex-wrap gap-2">
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Explain" type="button" @click="openAction(&quot;Explain&quot;)">
                <UIcon name="i-lucide-bot" class="size-4" />
                Explain
              </UButton>
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Highlight" type="button" @click="openAction(&quot;Highlight&quot;)">
                <UIcon name="i-lucide-highlighter" class="size-4" />
                Highlight
              </UButton>
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Add Note" type="button" @click="openAction(&quot;Add Note&quot;)">
                <UIcon name="i-lucide-notebook-pen" class="size-4" />
                Add Note
              </UButton>
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Saved" type="button" @click="openAction(&quot;Saved&quot;)">
                <UIcon name="i-lucide-bookmark" class="size-4" />
                Saved
              </UButton>
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Generate Citation" type="button" @click="openAction(&quot;Generate Citation&quot;)">
                <UIcon name="i-lucide-quote" class="size-4" />
                Generate Citation
              </UButton>
            </div>
            <div>
              <UTabs v-model="tabs2Active" :items="tabs2Items" :content="false" color="primary" variant="link" class="flex gap-1 border-b border-default" aria-label="Reader panel" />
              <div class="py-3">
                <p class="text-muted py-4 text-center text-xs">No notes on this document yet.</p>
                <div class="mt-2 flex gap-2">
                  <UInput v-model="form.kbNoteInput" type="text" aria-label="Add a note" placeholder="Add a note…" name="kbNoteInput" id="kb-note-input" class="flex w-full rounded-md md:text-sm h-9 text-[13px]" :ui="{ base: 'h-full' }" />
                  <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 rounded-md px-3 text-xs h-9 shrink-0" aria-label="Add" type="button" disabled @click="openAction(&quot;Add&quot;)">
                    Add
                  </UButton>
                </div>
              </div>
            </div>
            <div>
              <h2 class="mb-2 text-sm font-medium text-highlighted">Related documents</h2>
              <div class="flex flex-col gap-1">
                <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex items-center justify-between rounded-lg px-3 py-2 text-left text-[13px]" aria-label="Pricing memo" type="button" @click="openAction(&quot;Pricing memo&quot;)">
                  Pricing memo
                  <UIcon name="i-lucide-link-2" class="text-muted size-3.5" />
                </UButton>
                <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/60 flex items-center justify-between rounded-lg px-3 py-2 text-left text-[13px]" aria-label="Checkout outage postmortem" type="button" @click="openAction(&quot;Checkout outage postmortem&quot;)">
                  Checkout outage postmortem
                  <UIcon name="i-lucide-link-2" class="text-muted size-3.5" />
                </UButton>
              </div>
            </div>
            <p role="status" class="text-muted text-xs">All answers quote the document in front of you.</p>
          </div>
        </section>
        <aside aria-label="Ask the library" class="flex min-h-[420px] flex-col border-t xl:min-h-0 xl:border-t-0 xl:border-l border-default">
          <div class="flex shrink-0 items-center gap-2 border-b px-4 py-3 border-default">
            <UIcon name="i-lucide-bot" class="size-4" />
            <h2 class="text-sm font-medium text-highlighted">Ask the library</h2>
            <span class="text-muted ml-auto text-[11px]">Local answers · no model</span>
          </div>
          <div class="text-muted shrink-0 border-b px-4 py-2 text-[11px] border-default">
            Reading:
            <span class="text-highlighted font-medium">Refund policy</span>
          </div>
          <div class="min-h-0 flex-1 overflow-y-auto px-4 py-4">
            <div class="flex flex-col gap-4">
              <div class="flex gap-2.5">
                <span class="bg-muted flex size-6 shrink-0 items-center justify-center rounded-md">
                  <UIcon name="i-lucide-bot" class="size-3.5" />
                </span>
                <p class="min-w-0 flex-1 text-[13px] leading-6 break-words">This library holds 6 company documents. I answer from the one you are reading — pick a suggested question or ask your own.</p>
              </div>
              <div />
            </div>
          </div>
          <div class="shrink-0 border-t px-3 pt-2 pb-3 border-default">
            <div class="mb-2 flex gap-1.5 overflow-x-auto pb-0.5">
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 h-7 shrink-0 text-xs" aria-label="Refund window?" type="button" @click="openAction(&quot;Refund window?&quot;)">
                Refund window?
              </UButton>
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 h-7 shrink-0 text-xs" aria-label="Repeat refunds?" type="button" @click="openAction(&quot;Repeat refunds?&quot;)">
                Repeat refunds?
              </UButton>
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 h-7 shrink-0 text-xs" aria-label="Preorders?" type="button" @click="openAction(&quot;Preorders?&quot;)">
                Preorders?
              </UButton>
            </div>
            <!-- Form: controls and draft state are declared in this page -->
            <UForm :state="form" @submit="saveForm" class="flex gap-2">
              <UInput v-model="form.askAboutRefundPolicy" type="text" aria-label="Ask about this document" placeholder="Ask about Refund policy…" name="askAboutRefundPolicy" class="flex w-full rounded-md md:text-sm h-9 min-w-0 flex-1 text-[13px]" :ui="{ base: 'h-full' }" />
              <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 w-9 shrink-0" aria-label="Send question" type="submit" disabled>
                <UIcon name="i-lucide-arrow-up" class="size-4" />
              </UButton>
            </UForm>
            <p class="mt-1.5 flex items-center gap-1.5 text-[11px]">
              <UIcon name="i-lucide-check" class="size-3 text-success" />
              <span class="text-muted">Answers quote the document in front of you.</span>
            </p>
          </div>
        </aside>
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
