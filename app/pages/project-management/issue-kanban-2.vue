<!-- Page: /project-management/issue-kanban-2 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Issue Kanban 2 · Blocks Admin" })

const toast = useToast()

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/issue-kanban-2">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default flex h-full min-h-0 flex-1 flex-col overflow-hidden">
          <div class="border-b border-default">
            <div class="flex min-h-14 items-center gap-4 px-4 sm:px-6">
              <div class="no-scrollbar flex min-w-0 flex-1 items-center overflow-x-auto">
                <div class="flex shrink-0 items-center gap-2 pr-1">
                  <div class="bg-muted text-highlighted flex size-7 items-center justify-center rounded-md">
                    <UIcon name="i-lucide-folder-kanban" class="size-4" />
                  </div>
                  <span class="text-(--ui-text-highlighted)/85 max-w-48 truncate px-2 text-[14px] font-medium">Renewal Forecast Console</span>
                </div>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-8 shrink-0 rounded-md" aria-label="Project options" type="button" @click="openAction(&quot;Project options&quot;)">
                  <UIcon name="i-lucide-ellipsis" class="size-4" />
                </UButton>
                <div class="mx-4 h-5 w-px shrink-0 border-l border-default" />
                <div class="flex items-center gap-1">
                  <UButton color="neutral" variant="soft" class="relative z-10 flex items-center rounded-md px-2 py-1.5 text-[13px] font-medium transition-colors bg-muted text-highlighted" aria-label="Issues" type="button" @click="openAction(&quot;Issues&quot;)">
                    Issues
                    <span class="bg-(--ui-text-highlighted) absolute bottom-[-14px] left-1/2 h-0.5 w-[80%] -translate-x-1/2 rounded-t-md" />
                  </UButton>
                  <UButton color="neutral" variant="soft" class="relative z-10 flex items-center rounded-md px-2 py-1.5 text-[13px] font-medium transition-colors text-muted hover:bg-(--ui-bg-muted)/50 hover:text-highlighted" aria-label="Cycles" type="button" @click="openAction(&quot;Cycles&quot;)">
                    Cycles
                  </UButton>
                  <UButton color="neutral" variant="soft" class="relative z-10 flex items-center rounded-md px-2 py-1.5 text-[13px] font-medium transition-colors text-muted hover:bg-(--ui-bg-muted)/50 hover:text-highlighted" aria-label="Modules" type="button" @click="openAction(&quot;Modules&quot;)">
                    Modules
                  </UButton>
                  <UButton color="neutral" variant="soft" class="relative z-10 flex items-center rounded-md px-2 py-1.5 text-[13px] font-medium transition-colors text-muted hover:bg-(--ui-bg-muted)/50 hover:text-highlighted" aria-label="Views" type="button" @click="openAction(&quot;Views&quot;)">
                    Views
                  </UButton>
                  <UButton color="neutral" variant="soft" class="relative z-10 flex items-center rounded-md px-2 py-1.5 text-[13px] font-medium transition-colors text-muted hover:bg-(--ui-bg-muted)/50 hover:text-highlighted" aria-label="Pages" type="button" @click="openAction(&quot;Pages&quot;)">
                    Pages
                  </UButton>
                </div>
              </div>
              <div class="flex shrink-0 items-center gap-2">
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-8" aria-label="Filter issues" type="button" @click="openAction(&quot;Filter issues&quot;)">
                  <UIcon name="i-lucide-sliders-horizontal" class="size-3.5" />
                </UButton>
                <UButton color="primary" variant="solid" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 rounded-md px-3 text-xs h-8 shrink-0 gap-1.5" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                  <UIcon name="i-lucide-plus" class="size-3.5" />
                  Add issue
                </UButton>
              </div>
            </div>
          </div>
          <div class="flex min-h-11 items-center justify-between border-b px-4 py-1.5 sm:px-6 border-default">
            <div class="text-highlighted text-[14px] font-semibold">18 Issues</div>
            <div class="text-muted text-[13px] font-medium">Grouped by status</div>
          </div>
          <section class="border-b bg-(--ui-bg)/60 px-4 py-3 sm:px-6 sm:py-4 dark:bg-(--ui-bg)/40 border-default">
            <div class="grid grid-cols-2 gap-2.5 sm:gap-3 xl:grid-cols-4">
              <div class="rounded-xl border border-default bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] sm:rounded-2xl sm:p-4 dark:border-default dark:bg-default">
                <div class="flex items-start justify-between gap-2 sm:gap-3">
                  <div class="min-w-0">
                    <p class="text-muted text-[12px] font-medium">Open issues</p>
                    <p class="mt-1.5 text-xl font-semibold tracking-tight text-highlighted sm:mt-2 sm:text-2xl dark:text-highlighted text-highlighted">15</p>
                  </div>
                  <span class="flex size-8 shrink-0 items-center justify-center rounded-lg border border-default bg-default sm:size-9 sm:rounded-xl dark:border-default dark:bg-default">
                    <UIcon name="i-lucide-circle-dot" class="size-3.5 sm:size-4 text-info" />
                  </span>
                </div>
                <p class="text-muted mt-2 line-clamp-2 text-[12px] font-medium sm:mt-3">18 total on board</p>
              </div>
              <div class="rounded-xl border border-default bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] sm:rounded-2xl sm:p-4 dark:border-default dark:bg-default">
                <div class="flex items-start justify-between gap-2 sm:gap-3">
                  <div class="min-w-0">
                    <p class="text-muted text-[12px] font-medium">Active work</p>
                    <p class="mt-1.5 text-xl font-semibold tracking-tight text-highlighted sm:mt-2 sm:text-2xl dark:text-highlighted text-highlighted">7</p>
                  </div>
                  <span class="flex size-8 shrink-0 items-center justify-center rounded-lg border border-default bg-default sm:size-9 sm:rounded-xl dark:border-default dark:bg-default">
                    <UIcon name="i-lucide-trending-up" class="size-3.5 sm:size-4 text-warning" />
                  </span>
                </div>
                <p class="text-muted mt-2 line-clamp-2 text-[12px] font-medium sm:mt-3">In progress or review</p>
              </div>
              <div class="rounded-xl border border-default bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] sm:rounded-2xl sm:p-4 dark:border-default dark:bg-default">
                <div class="flex items-start justify-between gap-2 sm:gap-3">
                  <div class="min-w-0">
                    <p class="text-muted text-[12px] font-medium">Blocked</p>
                    <p class="mt-1.5 text-xl font-semibold tracking-tight text-highlighted sm:mt-2 sm:text-2xl dark:text-highlighted text-highlighted">2</p>
                  </div>
                  <span class="flex size-8 shrink-0 items-center justify-center rounded-lg border border-default bg-default sm:size-9 sm:rounded-xl dark:border-default dark:bg-default">
                    <UIcon name="i-lucide-circle-alert" class="size-3.5 sm:size-4 text-error" />
                  </span>
                </div>
                <p class="text-muted mt-2 line-clamp-2 text-[12px] font-medium sm:mt-3">Needs attention</p>
              </div>
              <div class="rounded-xl border border-default bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] sm:rounded-2xl sm:p-4 dark:border-default dark:bg-default">
                <div class="flex items-start justify-between gap-2 sm:gap-3">
                  <div class="min-w-0">
                    <p class="text-muted text-[12px] font-medium">Completion</p>
                    <p class="mt-1.5 text-xl font-semibold tracking-tight text-highlighted sm:mt-2 sm:text-2xl dark:text-highlighted text-highlighted">17%</p>
                  </div>
                  <span class="flex size-8 shrink-0 items-center justify-center rounded-lg border border-default bg-default sm:size-9 sm:rounded-xl dark:border-default dark:bg-default">
                    <UIcon name="i-lucide-circle-check" class="size-3.5 sm:size-4 text-success" />
                  </span>
                </div>
                <p class="text-muted mt-2 line-clamp-2 text-[12px] font-medium sm:mt-3">50% assigned</p>
              </div>
            </div>
          </section>
          <div class="min-h-0 flex-1 overflow-hidden px-4 py-4 sm:px-6">
            <div class="no-scrollbar flex h-full min-h-0 items-stretch overflow-x-auto pb-2 gap-4">
              <section class="flex h-full min-h-0 shrink-0 flex-col overflow-hidden w-[320px] bg-default rounded-t-2xl border-x border-t border-(--ui-border)/80 dark:border-default">
                <div class="sticky top-0 z-10 flex min-h-12 items-center gap-3 rounded-t-2xl border-b px-3 bg-default dark:bg-(--ui-bg)/60 border-default">
                  <span class="size-2 rounded-full bg-accented dark:bg-accented" />
                  <h2 class="text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Backlog</h2>
                  <span class="rounded-full px-1.5 py-0.5 text-[11px] font-medium bg-default text-toned dark:bg-default dark:text-default">4</span>
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted ml-auto size-7 rounded-md" aria-label="Add issue to Backlog" type="button" @click="openAction(&quot;Add issue to Backlog&quot;)">
                    <UIcon name="i-lucide-plus" class="size-4" />
                  </UButton>
                </div>
                <div class="min-h-0 flex-1 overflow-y-auto p-3">
                  <div class="flex flex-col gap-3">
                    <article class="group relative border bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition dark:bg-default rounded-xl border-default dark:border-default hover:border-accented hover:shadow-[0_8px_24px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:hover:border-default">
                      <div class="flex items-start justify-between gap-3">
                        <div class="min-w-0">
                          <p class="truncate text-[11px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">RFC-104</p>
                          <h3 class="mt-1 line-clamp-2 text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Document drag and resize behavior</h3>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100" aria-label="More actions for Document drag and resize behavior" type="button" @click="openAction(&quot;More actions for Document drag and resize behavior&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="text-muted mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>Blocked</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span>Blocked</span>
                      </div>
                      <div class="mt-3 flex items-center justify-between gap-3">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-default bg-default text-default dark:border-default dark:bg-(--ui-bg)/70 dark:text-default">
                          <span class="size-1.5 rounded-full bg-accented dark:bg-accented" />
                          Backlog
                        </UBadge>
                        <div class="flex items-center gap-2">
                          <span class="text-muted inline-flex size-7 items-center justify-center rounded-full border border-dashed border-accented dark:border-default">
                            <UIcon name="i-lucide-users" class="size-3.5" />
                          </span>
                        </div>
                      </div>
                    </article>
                    <article class="group relative border bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition dark:bg-default rounded-xl border-default dark:border-default hover:border-accented hover:shadow-[0_8px_24px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:hover:border-default">
                      <div class="flex items-start justify-between gap-3">
                        <div class="min-w-0">
                          <p class="truncate text-[11px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">RFC-108</p>
                          <h3 class="mt-1 line-clamp-2 text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Prepare issue calendar follow-up screen</h3>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100" aria-label="More actions for Prepare issue calendar follow-up screen" type="button" @click="openAction(&quot;More actions for Prepare issue calendar follow-up screen&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="text-muted mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>No owner yet</span>
                      </div>
                      <div class="mt-3 flex items-center justify-between gap-3">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-default bg-default text-default dark:border-default dark:bg-(--ui-bg)/70 dark:text-default">
                          <span class="size-1.5 rounded-full bg-accented dark:bg-accented" />
                          Backlog
                        </UBadge>
                        <div class="flex items-center gap-2">
                          <span class="text-muted inline-flex size-7 items-center justify-center rounded-full border border-dashed border-accented dark:border-default">
                            <UIcon name="i-lucide-users" class="size-3.5" />
                          </span>
                        </div>
                      </div>
                    </article>
                    <article class="group relative border bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition dark:bg-default rounded-xl border-default dark:border-default hover:border-accented hover:shadow-[0_8px_24px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:hover:border-default">
                      <div class="flex items-start justify-between gap-3">
                        <div class="min-w-0">
                          <p class="truncate text-[11px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">RFC-109</p>
                          <h3 class="mt-1 line-clamp-2 text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Map unresolved import states</h3>
                          <p class="text-muted mt-2 text-[12px] line-clamp-2">Cover empty, delayed, and failed dependency states.</p>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100" aria-label="More actions for Map unresolved import states" type="button" @click="openAction(&quot;More actions for Map unresolved import states&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="text-muted mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>Queued yesterday</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span class="capitalize">medium</span>
                      </div>
                      <div class="mt-3 flex items-center justify-between gap-3">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-default bg-default text-default dark:border-default dark:bg-(--ui-bg)/70 dark:text-default">
                          <span class="size-1.5 rounded-full bg-accented dark:bg-accented" />
                          Backlog
                        </UBadge>
                        <div class="flex items-center gap-2">
                          <span class="text-muted text-[11px] font-medium">2 sub</span>
                          <span class="text-muted inline-flex size-7 items-center justify-center rounded-full border border-dashed border-accented dark:border-default">
                            <UIcon name="i-lucide-users" class="size-3.5" />
                          </span>
                        </div>
                      </div>
                    </article>
                    <article class="group relative border bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition dark:bg-default rounded-xl border-default dark:border-default hover:border-accented hover:shadow-[0_8px_24px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:hover:border-default">
                      <div class="flex items-start justify-between gap-3">
                        <div class="min-w-0">
                          <p class="truncate text-[11px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">RFC-110</p>
                          <h3 class="mt-1 line-clamp-2 text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Draft permissions matrix</h3>
                          <p class="text-muted mt-2 text-[12px] line-clamp-2">List role behavior before access work starts.</p>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100" aria-label="More actions for Draft permissions matrix" type="button" @click="openAction(&quot;More actions for Draft permissions matrix&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="text-muted mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>Added to backlog</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span class="capitalize">low</span>
                      </div>
                      <div class="mt-3 flex items-center justify-between gap-3">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-default bg-default text-default dark:border-default dark:bg-(--ui-bg)/70 dark:text-default">
                          <span class="size-1.5 rounded-full bg-accented dark:bg-accented" />
                          Backlog
                        </UBadge>
                        <div class="flex items-center gap-2">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-7 border border-inverted shadow-sm dark:border-default">
                            <img class="aspect-square h-full w-full" alt="Kai Young" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                  <UButton color="neutral" variant="outline" class="text-muted hover:text-highlighted mt-3 flex min-h-9 w-full items-center gap-2 text-[12px] font-medium transition rounded-lg border border-dashed border-accented bg-default px-3 dark:border-default dark:bg-default" aria-label="New issue" type="button" @click="openAction(&quot;New issue&quot;)">
                    <UIcon name="i-lucide-plus" class="size-3.5" />
                    New issue
                  </UButton>
                </div>
              </section>
              <section class="flex h-full min-h-0 shrink-0 flex-col overflow-hidden w-[320px] bg-default rounded-t-2xl border-x border-t border-(--ui-border)/80 dark:border-default">
                <div class="sticky top-0 z-10 flex min-h-12 items-center gap-3 rounded-t-2xl border-b px-3 bg-default dark:bg-(--ui-bg)/60 border-default">
                  <span class="size-2 rounded-full bg-info dark:bg-info" />
                  <h2 class="text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Todo</h2>
                  <span class="rounded-full px-1.5 py-0.5 text-[11px] font-medium bg-default text-toned dark:bg-default dark:text-default">4</span>
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted ml-auto size-7 rounded-md" aria-label="Add issue to Todo" type="button" @click="openAction(&quot;Add issue to Todo&quot;)">
                    <UIcon name="i-lucide-plus" class="size-4" />
                  </UButton>
                </div>
                <div class="min-h-0 flex-1 overflow-y-auto p-3">
                  <div class="flex flex-col gap-3">
                    <article class="group relative border bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition dark:bg-default rounded-xl border-default dark:border-default hover:border-accented hover:shadow-[0_8px_24px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:hover:border-default">
                      <div class="flex items-start justify-between gap-3">
                        <div class="min-w-0">
                          <p class="truncate text-[11px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">RFC-102</p>
                          <h3 class="mt-1 line-clamp-2 text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Review gantt interaction states</h3>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100" aria-label="More actions for Review gantt interaction states" type="button" @click="openAction(&quot;More actions for Review gantt interaction states&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="text-muted mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>Updated today</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span class="capitalize">medium</span>
                      </div>
                      <div class="mt-3 flex items-center justify-between gap-3">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-info/20 bg-info/10 text-info dark:border-info dark:bg-info/35 dark:text-info">
                          <span class="size-1.5 rounded-full bg-info dark:bg-info" />
                          Todo
                        </UBadge>
                        <div class="flex items-center gap-2">
                          <span class="text-muted text-[11px] font-medium">1 sub</span>
                          <span class="text-muted inline-flex size-7 items-center justify-center rounded-full border border-dashed border-accented dark:border-default">
                            <UIcon name="i-lucide-users" class="size-3.5" />
                          </span>
                        </div>
                      </div>
                    </article>
                    <article class="group relative border bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition dark:bg-default rounded-xl border-default dark:border-default hover:border-accented hover:shadow-[0_8px_24px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:hover:border-default">
                      <div class="flex items-start justify-between gap-3">
                        <div class="min-w-0">
                          <p class="truncate text-[11px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">RFC-105</p>
                          <h3 class="mt-1 line-clamp-2 text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Create empty and loading timeline states</h3>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100" aria-label="More actions for Create empty and loading timeline states" type="button" @click="openAction(&quot;More actions for Create empty and loading timeline states&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="text-muted mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>Updated today</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span class="capitalize">medium</span>
                      </div>
                      <div class="mt-3 flex items-center justify-between gap-3">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-info/20 bg-info/10 text-info dark:border-info dark:bg-info/35 dark:text-info">
                          <span class="size-1.5 rounded-full bg-info dark:bg-info" />
                          Todo
                        </UBadge>
                        <div class="flex items-center gap-2">
                          <span class="text-muted text-[11px] font-medium">2 sub</span>
                          <span class="text-muted inline-flex size-7 items-center justify-center rounded-full border border-dashed border-accented dark:border-default">
                            <UIcon name="i-lucide-users" class="size-3.5" />
                          </span>
                        </div>
                      </div>
                    </article>
                    <article class="group relative border bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition dark:bg-default rounded-xl border-default dark:border-default hover:border-accented hover:shadow-[0_8px_24px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:hover:border-default">
                      <div class="flex items-start justify-between gap-3">
                        <div class="min-w-0">
                          <p class="truncate text-[11px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">RFC-111</p>
                          <h3 class="mt-1 line-clamp-2 text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Define compact issue row actions</h3>
                          <p class="text-muted mt-2 text-[12px] line-clamp-2">Confirm the small-screen action set for issue cards.</p>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100" aria-label="More actions for Define compact issue row actions" type="button" @click="openAction(&quot;More actions for Define compact issue row actions&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="text-muted mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>Planned today</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span class="capitalize">high</span>
                      </div>
                      <div class="mt-3 flex items-center justify-between gap-3">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-info/20 bg-info/10 text-info dark:border-info dark:bg-info/35 dark:text-info">
                          <span class="size-1.5 rounded-full bg-info dark:bg-info" />
                          Todo
                        </UBadge>
                        <div class="flex items-center gap-2">
                          <span class="text-muted text-[11px] font-medium">3 sub</span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-7 border border-inverted shadow-sm dark:border-default">
                            <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                          </span>
                        </div>
                      </div>
                    </article>
                    <article class="group relative border bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition dark:bg-default rounded-xl border-default dark:border-default hover:border-accented hover:shadow-[0_8px_24px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:hover:border-default">
                      <div class="flex items-start justify-between gap-3">
                        <div class="min-w-0">
                          <p class="truncate text-[11px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">RFC-112</p>
                          <h3 class="mt-1 line-clamp-2 text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Validate bulk selection copy</h3>
                          <p class="text-muted mt-2 text-[12px] line-clamp-2">Review toolbar labels for multi-select workflows.</p>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100" aria-label="More actions for Validate bulk selection copy" type="button" @click="copyValue(&quot;More actions for Validate bulk selection copy&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="text-muted mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>Moved to todo</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span class="capitalize">medium</span>
                      </div>
                      <div class="mt-3 flex items-center justify-between gap-3">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-info/20 bg-info/10 text-info dark:border-info dark:bg-info/35 dark:text-info">
                          <span class="size-1.5 rounded-full bg-info dark:bg-info" />
                          Todo
                        </UBadge>
                        <div class="flex items-center gap-2">
                          <span class="text-muted text-[11px] font-medium">1 sub</span>
                          <span class="text-muted inline-flex size-7 items-center justify-center rounded-full border border-dashed border-accented dark:border-default">
                            <UIcon name="i-lucide-users" class="size-3.5" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                  <UButton color="neutral" variant="outline" class="text-muted hover:text-highlighted mt-3 flex min-h-9 w-full items-center gap-2 text-[12px] font-medium transition rounded-lg border border-dashed border-accented bg-default px-3 dark:border-default dark:bg-default" aria-label="New issue" type="button" @click="openAction(&quot;New issue&quot;)">
                    <UIcon name="i-lucide-plus" class="size-3.5" />
                    New issue
                  </UButton>
                </div>
              </section>
              <section class="flex h-full min-h-0 shrink-0 flex-col overflow-hidden w-[320px] bg-default rounded-t-2xl border-x border-t border-(--ui-border)/80 dark:border-default">
                <div class="sticky top-0 z-10 flex min-h-12 items-center gap-3 rounded-t-2xl border-b px-3 bg-default dark:bg-(--ui-bg)/60 border-default">
                  <span class="size-2 rounded-full bg-warning dark:bg-warning" />
                  <h2 class="text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">In Progress</h2>
                  <span class="rounded-full px-1.5 py-0.5 text-[11px] font-medium bg-default text-toned dark:bg-default dark:text-default">3</span>
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted ml-auto size-7 rounded-md" aria-label="Add issue to In Progress" type="button" @click="openAction(&quot;Add issue to In Progress&quot;)">
                    <UIcon name="i-lucide-plus" class="size-4" />
                  </UButton>
                </div>
                <div class="min-h-0 flex-1 overflow-y-auto p-3">
                  <div class="flex flex-col gap-3">
                    <article class="group relative border bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition dark:bg-default rounded-xl border-default dark:border-default hover:border-accented hover:shadow-[0_8px_24px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:hover:border-default">
                      <div class="flex items-start justify-between gap-3">
                        <div class="min-w-0">
                          <p class="truncate text-[11px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">RFC-101</p>
                          <h3 class="mt-1 line-clamp-2 text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Finalize issue timeline architecture</h3>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100" aria-label="More actions for Finalize issue timeline architecture" type="button" @click="openAction(&quot;More actions for Finalize issue timeline architecture&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="text-muted mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>Updated 2h ago</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span class="capitalize">high</span>
                      </div>
                      <div class="mt-3 flex items-center justify-between gap-3">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-warning/20 bg-warning/10 text-warning dark:border-warning dark:bg-warning/35 dark:text-warning">
                          <span class="size-1.5 rounded-full bg-warning dark:bg-warning" />
                          In Progress
                        </UBadge>
                        <div class="flex items-center gap-2">
                          <span class="text-muted text-[11px] font-medium">3 sub</span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-7 border border-inverted shadow-sm dark:border-default">
                            <img class="aspect-square h-full w-full" alt="Nina Oliver" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                          </span>
                        </div>
                      </div>
                    </article>
                    <article class="group relative border bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition dark:bg-default rounded-xl border-default dark:border-default hover:border-accented hover:shadow-[0_8px_24px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:hover:border-default">
                      <div class="flex items-start justify-between gap-3">
                        <div class="min-w-0">
                          <p class="truncate text-[11px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">RFC-113</p>
                          <h3 class="mt-1 line-clamp-2 text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Wire activity stream pagination</h3>
                          <p class="text-muted mt-2 text-[12px] line-clamp-2">Keep the activity panel responsive with larger histories.</p>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100" aria-label="More actions for Wire activity stream pagination" type="button" @click="openAction(&quot;More actions for Wire activity stream pagination&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="text-muted mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>Updated 30m ago</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span class="capitalize">high</span>
                      </div>
                      <div class="mt-3 flex items-center justify-between gap-3">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-warning/20 bg-warning/10 text-warning dark:border-warning dark:bg-warning/35 dark:text-warning">
                          <span class="size-1.5 rounded-full bg-warning dark:bg-warning" />
                          In Progress
                        </UBadge>
                        <div class="flex items-center gap-2">
                          <span class="text-muted text-[11px] font-medium">4 sub</span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-7 border border-inverted shadow-sm dark:border-default">
                            <img class="aspect-square h-full w-full" alt="Lena Moss" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                          </span>
                        </div>
                      </div>
                    </article>
                    <article class="group relative border bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition dark:bg-default rounded-xl border-default dark:border-default hover:border-accented hover:shadow-[0_8px_24px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:hover:border-default">
                      <div class="flex items-start justify-between gap-3">
                        <div class="min-w-0">
                          <p class="truncate text-[11px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">RFC-114</p>
                          <h3 class="mt-1 line-clamp-2 text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Tune drag preview affordances</h3>
                          <p class="text-muted mt-2 text-[12px] line-clamp-2">Make drag feedback clearer across dense boards.</p>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100" aria-label="More actions for Tune drag preview affordances" type="button" @click="openAction(&quot;More actions for Tune drag preview affordances&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="text-muted mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>In progress</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span class="capitalize">medium</span>
                      </div>
                      <div class="mt-3 flex items-center justify-between gap-3">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-warning/20 bg-warning/10 text-warning dark:border-warning dark:bg-warning/35 dark:text-warning">
                          <span class="size-1.5 rounded-full bg-warning dark:bg-warning" />
                          In Progress
                        </UBadge>
                        <div class="flex items-center gap-2">
                          <span class="text-muted text-[11px] font-medium">2 sub</span>
                          <span class="text-muted inline-flex size-7 items-center justify-center rounded-full border border-dashed border-accented dark:border-default">
                            <UIcon name="i-lucide-users" class="size-3.5" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                  <UButton color="neutral" variant="outline" class="text-muted hover:text-highlighted mt-3 flex min-h-9 w-full items-center gap-2 text-[12px] font-medium transition rounded-lg border border-dashed border-accented bg-default px-3 dark:border-default dark:bg-default" aria-label="New issue" type="button" @click="openAction(&quot;New issue&quot;)">
                    <UIcon name="i-lucide-plus" class="size-3.5" />
                    New issue
                  </UButton>
                </div>
              </section>
              <section class="flex h-full min-h-0 shrink-0 flex-col overflow-hidden w-[320px] bg-default rounded-t-2xl border-x border-t border-(--ui-border)/80 dark:border-default">
                <div class="sticky top-0 z-10 flex min-h-12 items-center gap-3 rounded-t-2xl border-b px-3 bg-default dark:bg-(--ui-bg)/60 border-default">
                  <span class="size-2 rounded-full bg-secondary dark:bg-secondary" />
                  <h2 class="text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Review</h2>
                  <span class="rounded-full px-1.5 py-0.5 text-[11px] font-medium bg-default text-toned dark:bg-default dark:text-default">4</span>
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted ml-auto size-7 rounded-md" aria-label="Add issue to Review" type="button" @click="openAction(&quot;Add issue to Review&quot;)">
                    <UIcon name="i-lucide-plus" class="size-4" />
                  </UButton>
                </div>
                <div class="min-h-0 flex-1 overflow-y-auto p-3">
                  <div class="flex flex-col gap-3">
                    <article class="group relative border bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition dark:bg-default rounded-xl border-default dark:border-default hover:border-accented hover:shadow-[0_8px_24px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:hover:border-default">
                      <div class="flex items-start justify-between gap-3">
                        <div class="min-w-0">
                          <p class="truncate text-[11px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">RFC-103</p>
                          <h3 class="mt-1 line-clamp-2 text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Sync issue filters with project views</h3>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100" aria-label="More actions for Sync issue filters with project views" type="button" @click="openAction(&quot;More actions for Sync issue filters with project views&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="text-muted mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>Updated yesterday</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span class="capitalize">high</span>
                      </div>
                      <div class="mt-3 flex items-center justify-between gap-3">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-secondary/20 bg-secondary/10 text-secondary dark:border-secondary dark:bg-secondary/35 dark:text-secondary">
                          <span class="size-1.5 rounded-full bg-secondary dark:bg-secondary" />
                          Review
                        </UBadge>
                        <div class="flex items-center gap-2">
                          <span class="text-muted text-[11px] font-medium">4 sub</span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-7 border border-inverted shadow-sm dark:border-default">
                            <img class="aspect-square h-full w-full" alt="Kai Young" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                          </span>
                        </div>
                      </div>
                    </article>
                    <article class="group relative border bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition dark:bg-default rounded-xl border-default dark:border-default hover:border-accented hover:shadow-[0_8px_24px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:hover:border-default">
                      <div class="flex items-start justify-between gap-3">
                        <div class="min-w-0">
                          <p class="truncate text-[11px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">RFC-107</p>
                          <h3 class="mt-1 line-clamp-2 text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Polish the quarter view density</h3>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100" aria-label="More actions for Polish the quarter view density" type="button" @click="openAction(&quot;More actions for Polish the quarter view density&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="text-muted mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>Updated today</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span class="capitalize">medium</span>
                      </div>
                      <div class="mt-3 flex items-center justify-between gap-3">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-secondary/20 bg-secondary/10 text-secondary dark:border-secondary dark:bg-secondary/35 dark:text-secondary">
                          <span class="size-1.5 rounded-full bg-secondary dark:bg-secondary" />
                          Review
                        </UBadge>
                        <div class="flex items-center gap-2">
                          <span class="text-muted text-[11px] font-medium">2 sub</span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-7 border border-inverted shadow-sm dark:border-default">
                            <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                          </span>
                        </div>
                      </div>
                    </article>
                    <article class="group relative border bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition dark:bg-default rounded-xl border-default dark:border-default hover:border-accented hover:shadow-[0_8px_24px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:hover:border-default">
                      <div class="flex items-start justify-between gap-3">
                        <div class="min-w-0">
                          <p class="truncate text-[11px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">RFC-115</p>
                          <h3 class="mt-1 line-clamp-2 text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Review dependency warning variants</h3>
                          <p class="text-muted mt-2 text-[12px] line-clamp-2">Check blocked, stale, and missing dependency treatments.</p>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100" aria-label="More actions for Review dependency warning variants" type="button" @click="openAction(&quot;More actions for Review dependency warning variants&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="text-muted mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>Ready for review</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span class="capitalize">medium</span>
                      </div>
                      <div class="mt-3 flex items-center justify-between gap-3">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-secondary/20 bg-secondary/10 text-secondary dark:border-secondary dark:bg-secondary/35 dark:text-secondary">
                          <span class="size-1.5 rounded-full bg-secondary dark:bg-secondary" />
                          Review
                        </UBadge>
                        <div class="flex items-center gap-2">
                          <span class="text-muted text-[11px] font-medium">2 sub</span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-7 border border-inverted shadow-sm dark:border-default">
                            <img class="aspect-square h-full w-full" alt="Nina Oliver" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                          </span>
                        </div>
                      </div>
                    </article>
                    <article class="group relative border bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition dark:bg-default rounded-xl border-default dark:border-default hover:border-accented hover:shadow-[0_8px_24px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:hover:border-default">
                      <div class="flex items-start justify-between gap-3">
                        <div class="min-w-0">
                          <p class="truncate text-[11px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">RFC-116</p>
                          <h3 class="mt-1 line-clamp-2 text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">QA keyboard reorder flow</h3>
                          <p class="text-muted mt-2 text-[12px] line-clamp-2">Verify keyboard parity for board movement patterns.</p>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100" aria-label="More actions for QA keyboard reorder flow" type="button" @click="openAction(&quot;More actions for QA keyboard reorder flow&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="text-muted mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>Blocked on QA notes</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span class="capitalize">high</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span>Blocked</span>
                      </div>
                      <div class="mt-3 flex items-center justify-between gap-3">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-secondary/20 bg-secondary/10 text-secondary dark:border-secondary dark:bg-secondary/35 dark:text-secondary">
                          <span class="size-1.5 rounded-full bg-secondary dark:bg-secondary" />
                          Review
                        </UBadge>
                        <div class="flex items-center gap-2">
                          <span class="text-muted text-[11px] font-medium">1 sub</span>
                          <span class="text-muted inline-flex size-7 items-center justify-center rounded-full border border-dashed border-accented dark:border-default">
                            <UIcon name="i-lucide-users" class="size-3.5" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                  <UButton color="neutral" variant="outline" class="text-muted hover:text-highlighted mt-3 flex min-h-9 w-full items-center gap-2 text-[12px] font-medium transition rounded-lg border border-dashed border-accented bg-default px-3 dark:border-default dark:bg-default" aria-label="New issue" type="button" @click="openAction(&quot;New issue&quot;)">
                    <UIcon name="i-lucide-plus" class="size-3.5" />
                    New issue
                  </UButton>
                </div>
              </section>
              <section class="flex h-full min-h-0 shrink-0 flex-col overflow-hidden w-[320px] bg-default rounded-t-2xl border-x border-t border-(--ui-border)/80 dark:border-default">
                <div class="sticky top-0 z-10 flex min-h-12 items-center gap-3 rounded-t-2xl border-b px-3 bg-default dark:bg-(--ui-bg)/60 border-default">
                  <span class="size-2 rounded-full bg-success dark:bg-success" />
                  <h2 class="text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Done</h2>
                  <span class="rounded-full px-1.5 py-0.5 text-[11px] font-medium bg-default text-toned dark:bg-default dark:text-default">3</span>
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted ml-auto size-7 rounded-md" aria-label="Add issue to Done" type="button" @click="openAction(&quot;Add issue to Done&quot;)">
                    <UIcon name="i-lucide-plus" class="size-4" />
                  </UButton>
                </div>
                <div class="min-h-0 flex-1 overflow-y-auto p-3">
                  <div class="flex flex-col gap-3">
                    <article class="group relative border bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition dark:bg-default rounded-xl border-default dark:border-default hover:border-accented hover:shadow-[0_8px_24px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:hover:border-default">
                      <div class="flex items-start justify-between gap-3">
                        <div class="min-w-0">
                          <p class="truncate text-[11px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">RFC-106</p>
                          <h3 class="mt-1 line-clamp-2 text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Add mock dependencies and handoff notes</h3>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100" aria-label="More actions for Add mock dependencies and handoff notes" type="button" @click="openAction(&quot;More actions for Add mock dependencies and handoff notes&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="text-muted mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>Closed today</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span class="capitalize">low</span>
                      </div>
                      <div class="mt-3 flex items-center justify-between gap-3">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:border-success dark:bg-success/35 dark:text-success">
                          <span class="size-1.5 rounded-full bg-success dark:bg-success" />
                          Done
                        </UBadge>
                        <div class="flex items-center gap-2">
                          <span class="text-muted text-[11px] font-medium">1 sub</span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-7 border border-inverted shadow-sm dark:border-default">
                            <img class="aspect-square h-full w-full" alt="Lena Moss" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                          </span>
                        </div>
                      </div>
                    </article>
                    <article class="group relative border bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition dark:bg-default rounded-xl border-default dark:border-default hover:border-accented hover:shadow-[0_8px_24px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:hover:border-default">
                      <div class="flex items-start justify-between gap-3">
                        <div class="min-w-0">
                          <p class="truncate text-[11px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">RFC-117</p>
                          <h3 class="mt-1 line-clamp-2 text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Ship saved filter presets</h3>
                          <p class="text-muted mt-2 text-[12px] line-clamp-2">Persist personal filters for repeated triage sessions.</p>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100" aria-label="More actions for Ship saved filter presets" type="button" @click="openAction(&quot;More actions for Ship saved filter presets&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="text-muted mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>Closed yesterday</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span class="capitalize">low</span>
                      </div>
                      <div class="mt-3 flex items-center justify-between gap-3">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:border-success dark:bg-success/35 dark:text-success">
                          <span class="size-1.5 rounded-full bg-success dark:bg-success" />
                          Done
                        </UBadge>
                        <div class="flex items-center gap-2">
                          <span class="text-muted text-[11px] font-medium">1 sub</span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-7 border border-inverted shadow-sm dark:border-default">
                            <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                          </span>
                        </div>
                      </div>
                    </article>
                    <article class="group relative border bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition dark:bg-default rounded-xl border-default dark:border-default hover:border-accented hover:shadow-[0_8px_24px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:hover:border-default">
                      <div class="flex items-start justify-between gap-3">
                        <div class="min-w-0">
                          <p class="truncate text-[11px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">RFC-118</p>
                          <h3 class="mt-1 line-clamp-2 text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Archive legacy issue badges</h3>
                          <p class="text-muted mt-2 text-[12px] line-clamp-2">Remove stale badge variants from issue surfaces.</p>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100" aria-label="More actions for Archive legacy issue badges" type="button" @click="openAction(&quot;More actions for Archive legacy issue badges&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="size-4" />
                        </UButton>
                      </div>
                      <div class="text-muted mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                        <span>Closed today</span>
                        <span class="text-inverted dark:text-dimmed">/</span>
                        <span class="capitalize">medium</span>
                      </div>
                      <div class="mt-3 flex items-center justify-between gap-3">
                        <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:border-success dark:bg-success/35 dark:text-success">
                          <span class="size-1.5 rounded-full bg-success dark:bg-success" />
                          Done
                        </UBadge>
                        <div class="flex items-center gap-2">
                          <span class="text-muted inline-flex size-7 items-center justify-center rounded-full border border-dashed border-accented dark:border-default">
                            <UIcon name="i-lucide-users" class="size-3.5" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                  <UButton color="neutral" variant="outline" class="text-muted hover:text-highlighted mt-3 flex min-h-9 w-full items-center gap-2 text-[12px] font-medium transition rounded-lg border border-dashed border-accented bg-default px-3 dark:border-default dark:bg-default" aria-label="New issue" type="button" @click="openAction(&quot;New issue&quot;)">
                    <UIcon name="i-lucide-plus" class="size-3.5" />
                    New issue
                  </UButton>
                </div>
              </section>
            </div>
          </div>
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
