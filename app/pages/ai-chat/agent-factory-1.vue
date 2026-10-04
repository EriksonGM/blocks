<!-- Page: /ai-chat/agent-factory-1 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Agent Factory 1 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "taskSearch": ""
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/agent-factory-1">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <h1 class="sr-only text-highlighted">Agent Factory 1</h1>
      <div class="flex h-12 shrink-0 items-center gap-3 border-b px-3 sm:px-4 border-default">
        <div class="flex min-w-0 items-center gap-2">
          <span class="bg-muted grid size-7 place-items-center rounded-md">
            <UIcon name="i-lucide-box" class="size-3.5" />
          </span>
          <span class="truncate text-sm font-medium">Release factory</span>
          <div class="items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted hidden font-normal sm:inline-flex border-default">
            <UIcon name="i-lucide-git-branch" class="size-3" />
            main
          </div>
        </div>
        <div class="relative ml-auto hidden w-56 md:block">
          <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2" />
          <UInput v-model="form.taskSearch" type="text" aria-label="Search tasks" placeholder="Search tasks" name="taskSearch" class="flex w-full rounded-md md:text-sm h-8 pl-8 text-xs" :ui="{ base: 'h-full' }" />
        </div>
        <span class="text-muted hidden text-xs lg:inline">7 tasks</span>
        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-8" aria-label="Filter tasks" type="button" @click="openAction(&quot;Filter tasks&quot;)">
          <UIcon name="i-lucide-list-filter" class="size-3.5" />
        </UButton>
        <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 rounded-md px-3 h-8 text-xs" aria-label="New task" type="button" @click="openAction(&quot;New task&quot;)">
          <UIcon name="i-lucide-plus" class="size-3.5" />
          New task
        </UButton>
      </div>
      <div class="grid min-h-0 flex-1 grid-cols-[minmax(0,1fr)]">
        <div class="bg-default min-h-0 min-w-0 overflow-hidden">
          <div class="bg-default flex h-full min-h-0 flex-1 flex-col overflow-hidden">
            <div class="min-h-0 flex-1 overflow-hidden bg-(--ui-bg)/80 px-3 py-3 sm:px-4 dark:bg-(--ui-bg)/40">
              <div class="no-scrollbar flex h-full min-h-0 items-stretch overflow-x-auto pb-2 gap-5">
                <section class="flex h-full min-h-0 shrink-0 flex-col overflow-hidden w-[320px] bg-transparent">
                  <div class="sticky top-0 z-10 flex min-h-12 items-center justify-between gap-3 bg-(--ui-bg)/95 px-1 backdrop-blur dark:bg-(--ui-bg)/90">
                    <UBadge color="neutral" variant="subtle" class="inline-flex h-6 w-28 items-center gap-1.5 rounded-md border px-2 text-[12px] font-semibold border-default bg-default text-default dark:border-default dark:bg-(--ui-bg)/70 dark:text-default">
                      <span class="h-3 w-1 rounded-full bg-accented dark:bg-accented" />
                      Backlog
                    </UBadge>
                    <div class="flex items-center gap-2">
                      <span class="text-muted min-w-4 text-right text-[12px] font-medium">2</span>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-7 rounded-md" aria-label="Add issue to Backlog" type="button" @click="openAction(&quot;Add issue to Backlog&quot;)">
                        <UIcon name="i-lucide-plus" class="size-4" />
                      </UButton>
                    </div>
                  </div>
                  <div class="min-h-0 flex-1 overflow-y-auto px-1 pb-3">
                    <div class="flex flex-col gap-3">
                      <article role="group" aria-label="Update agent run description to reflect full execution control. Press Enter to select; use left and right arrow keys to move status." class="group relative border bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition dark:bg-default rounded-lg border-(--ui-border)/80 dark:border-(--ui-border)/80 hover:border-(--ui-border-accented)/80 hover:shadow-[0_10px_24px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:hover:border-(--ui-border)/80">
                        <div class="flex items-start justify-between gap-3">
                          <div class="min-w-0">
                            <p class="truncate text-[11px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">ARC-207</p>
                            <h3 class="mt-1 line-clamp-2 text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Update agent run description to reflect full execution control</h3>
                            <p class="text-muted mt-2 text-[12px] line-clamp-2">Clarify what the factory can change before the first run starts.</p>
                          </div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100" aria-label="More actions for Update agent run description to reflect full execution control" type="button" @click="openAction(&quot;More actions for Update agent run description to reflect full execution control&quot;)">
                            <UIcon name="i-lucide-ellipsis" class="size-4" />
                          </UButton>
                        </div>
                        <div class="text-muted mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                          <span>Maintenance</span>
                          <span class="text-inverted dark:text-dimmed">/</span>
                          <span class="capitalize">low</span>
                        </div>
                        <div class="mt-3 flex items-center justify-between gap-3">
                          <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-default bg-default text-default dark:border-default dark:bg-(--ui-bg)/70 dark:text-default">
                            <span class="size-1.5 rounded-full bg-accented dark:bg-accented" />
                            Backlog
                          </UBadge>
                          <div class="flex items-center gap-2">
                            <span class="size-7 rounded-full border border-dashed border-default" />
                          </div>
                        </div>
                      </article>
                      <article role="group" aria-label="Check task graph against product brief. Press Enter to select; use left and right arrow keys to move status." class="group relative border bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition dark:bg-default rounded-lg border-(--ui-border)/80 dark:border-(--ui-border)/80 hover:border-(--ui-border-accented)/80 hover:shadow-[0_10px_24px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:hover:border-(--ui-border)/80">
                        <div class="flex items-start justify-between gap-3">
                          <div class="min-w-0">
                            <p class="truncate text-[11px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">ARC-211</p>
                            <h3 class="mt-1 line-clamp-2 text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Check task graph against product brief</h3>
                            <p class="text-muted mt-2 text-[12px] line-clamp-2">Review dependencies and identify missing implementation steps.</p>
                          </div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100" aria-label="More actions for Check task graph against product brief" type="button" @click="openAction(&quot;More actions for Check task graph against product brief&quot;)">
                            <UIcon name="i-lucide-ellipsis" class="size-4" />
                          </UButton>
                        </div>
                        <div class="text-muted mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                          <span>Feature</span>
                          <span class="text-inverted dark:text-dimmed">/</span>
                          <span class="capitalize">medium</span>
                        </div>
                        <div class="mt-3 flex items-center justify-between gap-3">
                          <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-default bg-default text-default dark:border-default dark:bg-(--ui-bg)/70 dark:text-default">
                            <span class="size-1.5 rounded-full bg-accented dark:bg-accented" />
                            Backlog
                          </UBadge>
                          <div class="flex items-center gap-2">
                            <svg viewBox="0 0 64 64" class="drop-shadow-sm shrink-0 size-7" width="100%" height="100%">
                              <defs>
                                <linearGradient id="_R_l58ondbsnpfknmlb_" x1="10" y1="8" x2="54" y2="56">
                                  <stop offset="0" stop-color="var(--ui-info)" />
                                  <stop offset="0.52" stop-color="var(--ui-info)" />
                                  <stop offset="1" stop-color="var(--ui-info)" />
                                </linearGradient>
                                <mask id="_R_l58ondbsnpfknmlb_-mask" x="0" y="0" width="64" height="64">
                                  <rect width="64" height="64" fill="var(--ui-text-highlighted)" />
                                  <path d="M 54.70 32.09 C 54.83 33.19 54.89 34.31 54.89 35.40 C 54.90 36.50 54.83 37.59 54.72 38.66 C 54.60 39.73 54.43 40.79 54.21 41.81 C 53.99 42.83 53.71 43.83 53.39 44.79 C 53.07 45.74 52.71 46.67 52.29 47.55 C 51.88 48.43 51.42 49.27 50.92 50.05 C 50.41 50.83 49.86 51.56 49.26 52.24 C 48.65 52.91 48.00 53.53 47.27 54.08 C 46.55 54.64 45.78 55.13 44.91 55.55 C 44.03 55.98 43.12 56.33 42.03 56.62 C 40.95 56.91 40.05 57.12 38.38 57.27 C 36.71 57.41 34.13 57.49 32.00 57.49 C 29.87 57.49 27.29 57.41 25.62 57.27 C 23.95 57.12 23.05 56.91 21.97 56.62 C 20.88 56.33 19.97 55.98 19.09 55.55 C 18.22 55.13 17.45 54.64 16.73 54.08 C 16.00 53.53 15.35 52.91 14.74 52.24 C 14.14 51.56 13.59 50.83 13.08 50.05 C 12.58 49.27 12.12 48.43 11.71 47.55 C 11.29 46.67 10.93 45.74 10.61 44.79 C 10.29 43.83 10.01 42.83 9.79 41.81 C 9.57 40.79 9.40 39.73 9.28 38.66 C 9.17 37.59 9.10 36.50 9.11 35.40 C 9.11 34.31 9.17 33.19 9.30 32.09 C 9.43 30.98 9.62 29.87 9.89 28.77 C 10.15 27.68 10.49 26.58 10.89 25.51 C 11.29 24.44 11.77 23.39 12.31 22.37 C 12.84 21.34 13.45 20.34 14.11 19.39 C 14.77 18.43 15.50 17.50 16.26 16.62 C 17.03 15.75 17.85 14.91 18.68 14.13 C 19.52 13.34 20.40 12.61 21.27 11.93 C 22.14 11.26 23.04 10.64 23.90 10.09 C 24.77 9.54 25.64 9.04 26.45 8.62 C 27.27 8.20 28.08 7.84 28.79 7.55 C 29.51 7.27 30.22 7.05 30.75 6.90 C 31.29 6.76 31.58 6.69 32.00 6.69 C 32.42 6.69 32.71 6.76 33.25 6.90 C 33.78 7.05 34.49 7.27 35.21 7.55 C 35.92 7.84 36.73 8.20 37.55 8.62 C 38.36 9.04 39.23 9.54 40.10 10.09 C 40.96 10.64 41.86 11.26 42.73 11.93 C 43.60 12.61 44.48 13.34 45.32 14.13 C 46.15 14.91 46.97 15.75 47.74 16.62 C 48.50 17.50 49.23 18.43 49.89 19.39 C 50.55 20.34 51.16 21.34 51.69 22.37 C 52.23 23.39 52.71 24.44 53.11 25.51 C 53.51 26.58 53.85 27.68 54.11 28.77 C 54.38 29.87 54.57 30.98 54.70 32.09 Z" transform="translate(0 0) rotate(0.00 32 32)" fill="var(--ui-text-inverted)" />
                                  <rect x="25.599999999999998" y="26.700000000000003" width="3.6" height="7.8" rx="1.8" fill="var(--ui-text-highlighted)" transform="translate(0.00 0.00) rotate(-11 27.4 30.6) translate(0 30.6) scale(1 1.000) translate(0 -30.6)" />
                                  <rect x="34.800000000000004" y="26.700000000000003" width="3.6" height="7.8" rx="1.8" fill="var(--ui-text-highlighted)" transform="translate(0.00 0.00) rotate(-11 36.6 30.6) translate(0 30.6) scale(1 1.000) translate(0 -30.6)" />
                                </mask>
                              </defs>
                              <rect width="64" height="64" fill="url(#_R_l58ondbsnpfknmlb_)" />
                            </svg>
                          </div>
                        </div>
                      </article>
                    </div>
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-3 flex min-h-9 w-full items-center gap-2 text-[12px] font-medium transition rounded-md px-1" aria-label="New issue" type="button" @click="openAction(&quot;New issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      New issue
                    </UButton>
                  </div>
                </section>
                <section class="flex h-full min-h-0 shrink-0 flex-col overflow-hidden w-[320px] bg-transparent">
                  <div class="sticky top-0 z-10 flex min-h-12 items-center justify-between gap-3 bg-(--ui-bg)/95 px-1 backdrop-blur dark:bg-(--ui-bg)/90">
                    <UBadge color="neutral" variant="subtle" class="inline-flex h-6 w-28 items-center gap-1.5 rounded-md border px-2 text-[12px] font-semibold border-info/20 bg-info/10 text-info dark:border-info dark:bg-info/35 dark:text-info">
                      <span class="h-3 w-1 rounded-full bg-info dark:bg-info" />
                      Todo
                    </UBadge>
                    <div class="flex items-center gap-2">
                      <span class="text-muted min-w-4 text-right text-[12px] font-medium">2</span>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-7 rounded-md" aria-label="Add issue to Todo" type="button" @click="openAction(&quot;Add issue to Todo&quot;)">
                        <UIcon name="i-lucide-plus" class="size-4" />
                      </UButton>
                    </div>
                  </div>
                  <div class="min-h-0 flex-1 overflow-y-auto px-1 pb-3">
                    <div class="flex flex-col gap-3">
                      <article role="group" aria-label="Add branch-aware launch configuration. Press Enter to select; use left and right arrow keys to move status." class="group relative border bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition dark:bg-default rounded-lg border-(--ui-border)/80 dark:border-(--ui-border)/80 hover:border-(--ui-border-accented)/80 hover:shadow-[0_10px_24px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:hover:border-(--ui-border)/80">
                        <div class="flex items-start justify-between gap-3">
                          <div class="min-w-0">
                            <p class="truncate text-[11px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">ARC-214</p>
                            <h3 class="mt-1 line-clamp-2 text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Add branch-aware launch configuration</h3>
                            <p class="text-muted mt-2 text-[12px] line-clamp-2">Let operators run an agent in the active branch or an isolated branch.</p>
                          </div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100" aria-label="More actions for Add branch-aware launch configuration" type="button" @click="openAction(&quot;More actions for Add branch-aware launch configuration&quot;)">
                            <UIcon name="i-lucide-ellipsis" class="size-4" />
                          </UButton>
                        </div>
                        <div class="text-muted mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                          <span>Feature</span>
                          <span class="text-inverted dark:text-dimmed">/</span>
                          <span class="capitalize">high</span>
                        </div>
                        <div class="mt-3 flex items-center justify-between gap-3">
                          <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-info/20 bg-info/10 text-info dark:border-info dark:bg-info/35 dark:text-info">
                            <span class="size-1.5 rounded-full bg-info dark:bg-info" />
                            Todo
                          </UBadge>
                          <div class="flex items-center gap-2">
                            <svg viewBox="0 0 64 64" class="drop-shadow-sm shrink-0 size-7" width="100%" height="100%">
                              <defs>
                                <linearGradient id="_R_l398ndbsnpfknmlb_" x1="10" y1="8" x2="54" y2="56">
                                  <stop offset="0" stop-color="var(--ui-secondary)" />
                                  <stop offset="0.52" stop-color="var(--ui-error)" />
                                  <stop offset="1" stop-color="var(--ui-warning)" />
                                </linearGradient>
                                <mask id="_R_l398ndbsnpfknmlb_-mask" x="0" y="0" width="64" height="64">
                                  <rect width="64" height="64" fill="var(--ui-text-highlighted)" />
                                  <path d="M 55.30 32.00 C 55.30 34.92 55.26 38.74 55.20 40.76 C 55.14 42.78 55.04 43.16 54.91 44.14 C 54.79 45.12 54.63 45.88 54.43 46.62 C 54.24 47.37 54.02 48.01 53.75 48.61 C 53.49 49.21 53.20 49.74 52.86 50.24 C 52.53 50.74 52.16 51.18 51.75 51.59 C 51.34 52.00 50.89 52.36 50.39 52.69 C 49.89 53.02 49.35 53.31 48.75 53.57 C 48.14 53.83 47.50 54.06 46.74 54.25 C 45.99 54.44 45.22 54.60 44.24 54.73 C 43.25 54.85 42.87 54.95 40.83 55.01 C 38.79 55.07 34.94 55.10 32.00 55.10 C 29.06 55.10 25.21 55.07 23.17 55.01 C 21.13 54.95 20.75 54.85 19.76 54.73 C 18.78 54.60 18.01 54.44 17.26 54.25 C 16.50 54.06 15.86 53.83 15.25 53.57 C 14.65 53.31 14.11 53.02 13.61 52.69 C 13.11 52.36 12.66 52.00 12.25 51.59 C 11.84 51.18 11.47 50.74 11.14 50.24 C 10.80 49.74 10.51 49.21 10.25 48.61 C 9.98 48.01 9.76 47.37 9.57 46.62 C 9.37 45.88 9.21 45.12 9.09 44.14 C 8.96 43.16 8.86 42.78 8.80 40.76 C 8.74 38.74 8.70 34.92 8.70 32.00 C 8.70 29.08 8.74 25.26 8.80 23.24 C 8.86 21.22 8.96 20.84 9.09 19.86 C 9.21 18.88 9.37 18.12 9.57 17.38 C 9.76 16.63 9.98 15.99 10.25 15.39 C 10.51 14.79 10.80 14.26 11.14 13.76 C 11.47 13.26 11.84 12.82 12.25 12.41 C 12.66 12.00 13.11 11.64 13.61 11.31 C 14.11 10.98 14.65 10.69 15.25 10.43 C 15.86 10.17 16.50 9.94 17.26 9.75 C 18.01 9.56 18.78 9.40 19.76 9.27 C 20.75 9.15 21.13 9.05 23.17 8.99 C 25.21 8.93 29.06 8.90 32.00 8.90 C 34.94 8.90 38.79 8.93 40.83 8.99 C 42.87 9.05 43.25 9.15 44.24 9.27 C 45.22 9.40 45.99 9.56 46.74 9.75 C 47.50 9.94 48.14 10.17 48.75 10.43 C 49.35 10.69 49.89 10.98 50.39 11.31 C 50.89 11.64 51.34 12.00 51.75 12.41 C 52.16 12.82 52.53 13.26 52.86 13.76 C 53.20 14.26 53.49 14.79 53.75 15.39 C 54.02 15.99 54.24 16.63 54.43 17.38 C 54.63 18.12 54.79 18.88 54.91 19.86 C 55.04 20.84 55.14 21.22 55.20 23.24 C 55.26 25.26 55.30 29.08 55.30 32.00 Z" transform="translate(0 0) rotate(0.00 32 32)" fill="var(--ui-text-inverted)" />
                                  <rect x="25.1" y="25.3" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.00 0.00) rotate(-11 27 29.3) translate(0 29.3) scale(1 1.000) translate(0 -29.3)" />
                                  <rect x="35.1" y="25.3" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.00 0.00) rotate(-11 37 29.3) translate(0 29.3) scale(1 1.000) translate(0 -29.3)" />
                                </mask>
                              </defs>
                              <rect width="64" height="64" fill="url(#_R_l398ndbsnpfknmlb_)" />
                            </svg>
                          </div>
                        </div>
                      </article>
                      <article role="group" aria-label="Persist conversation memory between agent handoffs. Press Enter to select; use left and right arrow keys to move status." class="group relative border bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition dark:bg-default rounded-lg border-(--ui-border)/80 dark:border-(--ui-border)/80 hover:border-(--ui-border-accented)/80 hover:shadow-[0_10px_24px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:hover:border-(--ui-border)/80">
                        <div class="flex items-start justify-between gap-3">
                          <div class="min-w-0">
                            <p class="truncate text-[11px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">ARC-218</p>
                            <h3 class="mt-1 line-clamp-2 text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Persist conversation memory between agent handoffs</h3>
                            <p class="text-muted mt-2 text-[12px] line-clamp-2">Keep the relevant run context when a task moves from Builder to Reviewer.</p>
                          </div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100" aria-label="More actions for Persist conversation memory between agent handoffs" type="button" @click="openAction(&quot;More actions for Persist conversation memory between agent handoffs&quot;)">
                            <UIcon name="i-lucide-ellipsis" class="size-4" />
                          </UButton>
                        </div>
                        <div class="text-muted mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                          <span>Feature</span>
                          <span class="text-inverted dark:text-dimmed">/</span>
                          <span class="capitalize">high</span>
                        </div>
                        <div class="mt-3 flex items-center justify-between gap-3">
                          <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-info/20 bg-info/10 text-info dark:border-info dark:bg-info/35 dark:text-info">
                            <span class="size-1.5 rounded-full bg-info dark:bg-info" />
                            Todo
                          </UBadge>
                          <div class="flex items-center gap-2">
                            <svg viewBox="0 0 64 64" class="drop-shadow-sm shrink-0 size-7" width="100%" height="100%">
                              <defs>
                                <linearGradient id="_R_l598ndbsnpfknmlb_" x1="10" y1="8" x2="54" y2="56">
                                  <stop offset="0" stop-color="var(--ui-secondary)" />
                                  <stop offset="0.52" stop-color="var(--ui-error)" />
                                  <stop offset="1" stop-color="var(--ui-warning)" />
                                </linearGradient>
                                <mask id="_R_l598ndbsnpfknmlb_-mask" x="0" y="0" width="64" height="64">
                                  <rect width="64" height="64" fill="var(--ui-text-highlighted)" />
                                  <path d="M 55.30 32.00 C 55.30 34.92 55.26 38.74 55.20 40.76 C 55.14 42.78 55.04 43.16 54.91 44.14 C 54.79 45.12 54.63 45.88 54.43 46.62 C 54.24 47.37 54.02 48.01 53.75 48.61 C 53.49 49.21 53.20 49.74 52.86 50.24 C 52.53 50.74 52.16 51.18 51.75 51.59 C 51.34 52.00 50.89 52.36 50.39 52.69 C 49.89 53.02 49.35 53.31 48.75 53.57 C 48.14 53.83 47.50 54.06 46.74 54.25 C 45.99 54.44 45.22 54.60 44.24 54.73 C 43.25 54.85 42.87 54.95 40.83 55.01 C 38.79 55.07 34.94 55.10 32.00 55.10 C 29.06 55.10 25.21 55.07 23.17 55.01 C 21.13 54.95 20.75 54.85 19.76 54.73 C 18.78 54.60 18.01 54.44 17.26 54.25 C 16.50 54.06 15.86 53.83 15.25 53.57 C 14.65 53.31 14.11 53.02 13.61 52.69 C 13.11 52.36 12.66 52.00 12.25 51.59 C 11.84 51.18 11.47 50.74 11.14 50.24 C 10.80 49.74 10.51 49.21 10.25 48.61 C 9.98 48.01 9.76 47.37 9.57 46.62 C 9.37 45.88 9.21 45.12 9.09 44.14 C 8.96 43.16 8.86 42.78 8.80 40.76 C 8.74 38.74 8.70 34.92 8.70 32.00 C 8.70 29.08 8.74 25.26 8.80 23.24 C 8.86 21.22 8.96 20.84 9.09 19.86 C 9.21 18.88 9.37 18.12 9.57 17.38 C 9.76 16.63 9.98 15.99 10.25 15.39 C 10.51 14.79 10.80 14.26 11.14 13.76 C 11.47 13.26 11.84 12.82 12.25 12.41 C 12.66 12.00 13.11 11.64 13.61 11.31 C 14.11 10.98 14.65 10.69 15.25 10.43 C 15.86 10.17 16.50 9.94 17.26 9.75 C 18.01 9.56 18.78 9.40 19.76 9.27 C 20.75 9.15 21.13 9.05 23.17 8.99 C 25.21 8.93 29.06 8.90 32.00 8.90 C 34.94 8.90 38.79 8.93 40.83 8.99 C 42.87 9.05 43.25 9.15 44.24 9.27 C 45.22 9.40 45.99 9.56 46.74 9.75 C 47.50 9.94 48.14 10.17 48.75 10.43 C 49.35 10.69 49.89 10.98 50.39 11.31 C 50.89 11.64 51.34 12.00 51.75 12.41 C 52.16 12.82 52.53 13.26 52.86 13.76 C 53.20 14.26 53.49 14.79 53.75 15.39 C 54.02 15.99 54.24 16.63 54.43 17.38 C 54.63 18.12 54.79 18.88 54.91 19.86 C 55.04 20.84 55.14 21.22 55.20 23.24 C 55.26 25.26 55.30 29.08 55.30 32.00 Z" transform="translate(0 0) rotate(0.00 32 32)" fill="var(--ui-text-inverted)" />
                                  <rect x="25.1" y="25.3" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.00 0.00) rotate(-11 27 29.3) translate(0 29.3) scale(1 1.000) translate(0 -29.3)" />
                                  <rect x="35.1" y="25.3" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.00 0.00) rotate(-11 37 29.3) translate(0 29.3) scale(1 1.000) translate(0 -29.3)" />
                                </mask>
                              </defs>
                              <rect width="64" height="64" fill="url(#_R_l598ndbsnpfknmlb_)" />
                            </svg>
                          </div>
                        </div>
                      </article>
                    </div>
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-3 flex min-h-9 w-full items-center gap-2 text-[12px] font-medium transition rounded-md px-1" aria-label="New issue" type="button" @click="openAction(&quot;New issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      New issue
                    </UButton>
                  </div>
                </section>
                <section class="flex h-full min-h-0 shrink-0 flex-col overflow-hidden w-[320px] bg-transparent">
                  <div class="sticky top-0 z-10 flex min-h-12 items-center justify-between gap-3 bg-(--ui-bg)/95 px-1 backdrop-blur dark:bg-(--ui-bg)/90">
                    <UBadge color="neutral" variant="subtle" class="inline-flex h-6 w-28 items-center gap-1.5 rounded-md border px-2 text-[12px] font-semibold border-warning/20 bg-warning/10 text-warning dark:border-warning dark:bg-warning/35 dark:text-warning">
                      <span class="h-3 w-1 rounded-full bg-warning dark:bg-warning" />
                      In Progress
                    </UBadge>
                    <div class="flex items-center gap-2">
                      <span class="text-muted min-w-4 text-right text-[12px] font-medium">2</span>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-7 rounded-md" aria-label="Add issue to In Progress" type="button" @click="openAction(&quot;Add issue to In Progress&quot;)">
                        <UIcon name="i-lucide-plus" class="size-4" />
                      </UButton>
                    </div>
                  </div>
                  <div class="min-h-0 flex-1 overflow-y-auto px-1 pb-3">
                    <div class="flex flex-col gap-3">
                      <article role="group" aria-label="Prevent null-byte arguments in generated commands. Press Enter to select; use left and right arrow keys to move status." class="group relative border bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition dark:bg-default rounded-lg border-(--ui-border)/80 dark:border-(--ui-border)/80 hover:border-(--ui-border-accented)/80 hover:shadow-[0_10px_24px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:hover:border-(--ui-border)/80">
                        <div class="flex items-start justify-between gap-3">
                          <div class="min-w-0">
                            <p class="truncate text-[11px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">ARC-220</p>
                            <h3 class="mt-1 line-clamp-2 text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Prevent null-byte arguments in generated commands</h3>
                            <p class="text-muted mt-2 text-[12px] line-clamp-2">Validate generated command input before a workspace process starts.</p>
                          </div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100" aria-label="More actions for Prevent null-byte arguments in generated commands" type="button" @click="openAction(&quot;More actions for Prevent null-byte arguments in generated commands&quot;)">
                            <UIcon name="i-lucide-ellipsis" class="size-4" />
                          </UButton>
                        </div>
                        <div class="text-muted mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                          <span>Agent running</span>
                          <span class="text-inverted dark:text-dimmed">/</span>
                          <span class="capitalize">high</span>
                        </div>
                        <div class="mt-3 flex items-center justify-between gap-3">
                          <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-warning/20 bg-warning/10 text-warning dark:border-warning dark:bg-warning/35 dark:text-warning">
                            <span class="size-1.5 rounded-full bg-warning dark:bg-warning" />
                            In Progress
                          </UBadge>
                          <div class="flex items-center gap-2">
                            <svg viewBox="0 0 64 64" class="drop-shadow-sm shrink-0 size-7" width="100%" height="100%">
                              <defs>
                                <linearGradient id="_R_l39ondbsnpfknmlb_" x1="10" y1="8" x2="54" y2="56">
                                  <stop offset="0" stop-color="var(--ui-secondary)" />
                                  <stop offset="0.52" stop-color="var(--ui-warning)" />
                                  <stop offset="1" stop-color="var(--ui-error)" />
                                </linearGradient>
                                <mask id="_R_l39ondbsnpfknmlb_-mask" x="0" y="0" width="64" height="64">
                                  <rect width="64" height="64" fill="var(--ui-text-highlighted)" />
                                  <path d="M 48.17 32.00 C 48.58 32.71 49.00 33.45 49.50 34.30 C 49.99 35.16 50.50 36.04 51.12 37.12 C 51.75 38.21 52.39 39.32 53.25 40.80 C 54.10 42.28 56.75 45.13 56.25 46.00 C 55.75 46.87 51.95 46.00 50.25 46.00 C 48.54 46.00 47.25 46.00 46.00 46.00 C 44.75 46.00 43.73 46.00 42.74 46.00 C 41.76 46.00 40.91 46.00 40.08 46.00 C 39.26 46.00 38.52 46.00 37.80 46.00 C 37.08 46.00 36.41 46.00 35.75 46.00 C 35.09 46.00 34.47 46.00 33.84 46.00 C 33.22 46.00 32.61 46.00 32.00 46.00 C 31.39 46.00 30.78 46.00 30.16 46.00 C 29.53 46.00 28.91 46.00 28.25 46.00 C 27.59 46.00 26.92 46.00 26.20 46.00 C 25.48 46.00 24.74 46.00 23.92 46.00 C 23.09 46.00 22.24 46.00 21.26 46.00 C 20.27 46.00 19.25 46.00 18.00 46.00 C 16.75 46.00 15.46 46.00 13.75 46.00 C 12.05 46.00 8.25 46.87 7.75 46.00 C 7.25 45.13 9.90 42.28 10.75 40.80 C 11.61 39.32 12.25 38.21 12.88 37.12 C 13.50 36.04 14.01 35.16 14.50 34.30 C 15.00 33.45 15.42 32.71 15.83 32.00 C 16.25 31.29 16.62 30.65 16.98 30.02 C 17.34 29.40 17.67 28.82 18.00 28.25 C 18.33 27.68 18.64 27.14 18.95 26.60 C 19.27 26.05 19.57 25.53 19.88 25.00 C 20.18 24.47 20.48 23.95 20.80 23.40 C 21.11 22.86 21.42 22.32 21.75 21.75 C 22.08 21.18 22.41 20.60 22.78 19.98 C 23.14 19.35 23.51 18.71 23.92 18.00 C 24.33 17.29 24.75 16.55 25.25 15.70 C 25.74 14.84 26.25 13.96 26.88 12.88 C 27.50 11.79 28.14 10.68 29.00 9.20 C 29.85 7.72 31.00 4.00 32.00 4.00 C 33.00 4.00 34.15 7.72 35.00 9.20 C 35.86 10.68 36.50 11.79 37.12 12.88 C 37.75 13.96 38.26 14.84 38.75 15.70 C 39.25 16.55 39.67 17.29 40.08 18.00 C 40.49 18.71 40.86 19.35 41.22 19.98 C 41.59 20.60 41.92 21.18 42.25 21.75 C 42.58 22.32 42.89 22.86 43.20 23.40 C 43.52 23.95 43.82 24.47 44.12 25.00 C 44.43 25.53 44.73 26.05 45.05 26.60 C 45.36 27.14 45.67 27.68 46.00 28.25 C 46.33 28.82 46.66 29.40 47.02 30.02 C 47.38 30.65 47.75 31.29 48.17 32.00 Z" transform="translate(0 0) rotate(0.71 32 32)" fill="var(--ui-text-inverted)" />
                                  <rect x="25.65" y="26.9" width="3.5" height="7.2" rx="1.75" fill="var(--ui-text-highlighted)" transform="translate(0.00 0.00) rotate(-11 27.4 30.5) translate(0 30.5) scale(1 1.000) translate(0 -30.5)" />
                                  <rect x="34.85" y="26.9" width="3.5" height="7.2" rx="1.75" fill="var(--ui-text-highlighted)" transform="translate(0.00 0.00) rotate(-11 36.6 30.5) translate(0 30.5) scale(1 1.000) translate(0 -30.5)" />
                                </mask>
                              </defs>
                              <rect width="64" height="64" fill="url(#_R_l39ondbsnpfknmlb_)" />
                            </svg>
                          </div>
                        </div>
                      </article>
                      <article role="group" aria-label="Review mobile task inspector behavior. Press Enter to select; use left and right arrow keys to move status." class="group relative border bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition dark:bg-default rounded-lg border-(--ui-border)/80 dark:border-(--ui-border)/80 hover:border-(--ui-border-accented)/80 hover:shadow-[0_10px_24px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:hover:border-(--ui-border)/80">
                        <div class="flex items-start justify-between gap-3">
                          <div class="min-w-0">
                            <p class="truncate text-[11px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">ARC-223</p>
                            <h3 class="mt-1 line-clamp-2 text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Review mobile task inspector behavior</h3>
                            <p class="text-muted mt-2 text-[12px] line-clamp-2">Validate the full-screen inspector and launch sequence on narrow screens.</p>
                          </div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100" aria-label="More actions for Review mobile task inspector behavior" type="button" @click="openAction(&quot;More actions for Review mobile task inspector behavior&quot;)">
                            <UIcon name="i-lucide-ellipsis" class="size-4" />
                          </UButton>
                        </div>
                        <div class="text-muted mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                          <span>Maintenance</span>
                          <span class="text-inverted dark:text-dimmed">/</span>
                          <span class="capitalize">medium</span>
                        </div>
                        <div class="mt-3 flex items-center justify-between gap-3">
                          <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-warning/20 bg-warning/10 text-warning dark:border-warning dark:bg-warning/35 dark:text-warning">
                            <span class="size-1.5 rounded-full bg-warning dark:bg-warning" />
                            In Progress
                          </UBadge>
                          <div class="flex items-center gap-2">
                            <svg viewBox="0 0 64 64" class="drop-shadow-sm shrink-0 size-7" width="100%" height="100%">
                              <defs>
                                <linearGradient id="_R_l59ondbsnpfknmlb_" x1="10" y1="8" x2="54" y2="56">
                                  <stop offset="0" stop-color="var(--ui-success)" />
                                  <stop offset="0.52" stop-color="var(--ui-success)" />
                                  <stop offset="1" stop-color="var(--ui-info)" />
                                </linearGradient>
                                <mask id="_R_l59ondbsnpfknmlb_-mask" x="0" y="0" width="64" height="64">
                                  <rect width="64" height="64" fill="var(--ui-text-highlighted)" />
                                  <path d="M 59.07 32.00 C 59.07 33.10 57.76 34.27 57.16 35.31 C 56.55 36.36 56.00 37.33 55.44 38.28 C 54.89 39.24 54.37 40.14 53.85 41.05 C 53.32 41.96 52.82 42.83 52.30 43.72 C 51.79 44.61 51.28 45.49 50.76 46.39 C 50.24 47.30 49.71 48.21 49.16 49.16 C 48.61 50.12 48.05 51.08 47.45 52.13 C 46.84 53.18 46.49 54.89 45.53 55.44 C 44.58 56.00 42.92 55.44 41.71 55.44 C 40.50 55.44 39.39 55.44 38.28 55.44 C 37.18 55.44 36.13 55.44 35.09 55.44 C 34.04 55.44 33.03 55.44 32.00 55.44 C 30.97 55.44 29.96 55.44 28.91 55.44 C 27.87 55.44 26.82 55.44 25.72 55.44 C 24.61 55.44 23.50 55.44 22.29 55.44 C 21.08 55.44 19.42 56.00 18.47 55.44 C 17.51 54.89 17.16 53.18 16.55 52.13 C 15.95 51.08 15.39 50.12 14.84 49.16 C 14.29 48.21 13.76 47.30 13.24 46.39 C 12.72 45.49 12.21 44.61 11.70 43.72 C 11.18 42.83 10.68 41.96 10.15 41.05 C 9.63 40.14 9.11 39.24 8.56 38.28 C 8.00 37.33 7.45 36.36 6.84 35.31 C 6.24 34.27 4.93 33.10 4.93 32.00 C 4.93 30.90 6.24 29.73 6.84 28.69 C 7.45 27.64 8.00 26.67 8.56 25.72 C 9.11 24.76 9.63 23.86 10.15 22.95 C 10.68 22.04 11.18 21.17 11.70 20.28 C 12.21 19.39 12.72 18.51 13.24 17.61 C 13.76 16.70 14.29 15.79 14.84 14.84 C 15.39 13.88 15.95 12.92 16.55 11.87 C 17.16 10.82 17.51 9.11 18.47 8.56 C 19.42 8.00 21.08 8.56 22.29 8.56 C 23.50 8.56 24.61 8.56 25.72 8.56 C 26.82 8.56 27.87 8.56 28.91 8.56 C 29.96 8.56 30.97 8.56 32.00 8.56 C 33.03 8.56 34.04 8.56 35.09 8.56 C 36.13 8.56 37.18 8.56 38.28 8.56 C 39.39 8.56 40.50 8.56 41.71 8.56 C 42.92 8.56 44.58 8.00 45.53 8.56 C 46.49 9.11 46.84 10.82 47.45 11.87 C 48.05 12.92 48.61 13.88 49.16 14.84 C 49.71 15.79 50.24 16.70 50.76 17.61 C 51.28 18.51 51.79 19.39 52.30 20.28 C 52.82 21.17 53.32 22.04 53.85 22.95 C 54.37 23.86 54.89 24.76 55.44 25.72 C 56.00 26.67 56.55 27.64 57.16 28.69 C 57.76 29.73 59.07 30.90 59.07 32.00 Z" transform="translate(0 0) rotate(0.00 32 32)" fill="var(--ui-text-inverted)" />
                                  <rect x="25.1" y="25.6" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.00 0.00) rotate(-11 27 29.6) translate(0 29.6) scale(1 1.000) translate(0 -29.6)" />
                                  <rect x="35.1" y="25.6" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.00 0.00) rotate(-11 37 29.6) translate(0 29.6) scale(1 1.000) translate(0 -29.6)" />
                                </mask>
                              </defs>
                              <rect width="64" height="64" fill="url(#_R_l59ondbsnpfknmlb_)" />
                            </svg>
                          </div>
                        </div>
                      </article>
                    </div>
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-3 flex min-h-9 w-full items-center gap-2 text-[12px] font-medium transition rounded-md px-1" aria-label="New issue" type="button" @click="openAction(&quot;New issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      New issue
                    </UButton>
                  </div>
                </section>
                <section class="flex h-full min-h-0 shrink-0 flex-col overflow-hidden w-[320px] bg-transparent">
                  <div class="sticky top-0 z-10 flex min-h-12 items-center justify-between gap-3 bg-(--ui-bg)/95 px-1 backdrop-blur dark:bg-(--ui-bg)/90">
                    <UBadge color="neutral" variant="subtle" class="inline-flex h-6 w-28 items-center gap-1.5 rounded-md border px-2 text-[12px] font-semibold border-success/20 bg-success/10 text-success dark:border-success dark:bg-success/35 dark:text-success">
                      <span class="h-3 w-1 rounded-full bg-success dark:bg-success" />
                      Done
                    </UBadge>
                    <div class="flex items-center gap-2">
                      <span class="text-muted min-w-4 text-right text-[12px] font-medium">1</span>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-7 rounded-md" aria-label="Add issue to Done" type="button" @click="openAction(&quot;Add issue to Done&quot;)">
                        <UIcon name="i-lucide-plus" class="size-4" />
                      </UButton>
                    </div>
                  </div>
                  <div class="min-h-0 flex-1 overflow-y-auto px-1 pb-3">
                    <div class="flex flex-col gap-3">
                      <article role="group" aria-label="Add repository context to factory runs. Press Enter to select; use left and right arrow keys to move status." class="group relative border bg-default p-3 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition dark:bg-default rounded-lg border-(--ui-border)/80 dark:border-(--ui-border)/80 hover:border-(--ui-border-accented)/80 hover:shadow-[0_10px_24px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:hover:border-(--ui-border)/80">
                        <div class="flex items-start justify-between gap-3">
                          <div class="min-w-0">
                            <p class="truncate text-[11px] font-semibold tracking-[0.12em] text-muted uppercase dark:text-muted text-highlighted">ARC-201</p>
                            <h3 class="mt-1 line-clamp-2 text-[14px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Add repository context to factory runs</h3>
                            <p class="text-muted mt-2 text-[12px] line-clamp-2">Attach selected repository metadata to each dispatched run.</p>
                          </div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted -mr-1 size-7 shrink-0 rounded-md opacity-0 transition-opacity group-hover:opacity-100" aria-label="More actions for Add repository context to factory runs" type="button" @click="openAction(&quot;More actions for Add repository context to factory runs&quot;)">
                            <UIcon name="i-lucide-ellipsis" class="size-4" />
                          </UButton>
                        </div>
                        <div class="text-muted mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
                          <span>Feature</span>
                          <span class="text-inverted dark:text-dimmed">/</span>
                          <span class="capitalize">medium</span>
                        </div>
                        <div class="mt-3 flex items-center justify-between gap-3">
                          <UBadge color="neutral" variant="subtle" class="inline-flex h-6 items-center gap-1.5 rounded-md border px-2 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:border-success dark:bg-success/35 dark:text-success">
                            <span class="size-1.5 rounded-full bg-success dark:bg-success" />
                            Done
                          </UBadge>
                          <div class="flex items-center gap-2">
                            <svg viewBox="0 0 64 64" class="drop-shadow-sm shrink-0 size-7" width="100%" height="100%">
                              <defs>
                                <linearGradient id="_R_aja8ndbsnpfknmlb_" x1="10" y1="8" x2="54" y2="56">
                                  <stop offset="0" stop-color="var(--ui-success)" />
                                  <stop offset="0.52" stop-color="var(--ui-success)" />
                                  <stop offset="1" stop-color="var(--ui-info)" />
                                </linearGradient>
                                <mask id="_R_aja8ndbsnpfknmlb_-mask" x="0" y="0" width="64" height="64">
                                  <rect width="64" height="64" fill="var(--ui-text-highlighted)" />
                                  <path d="M 59.07 32.00 C 59.07 33.10 57.76 34.27 57.16 35.31 C 56.55 36.36 56.00 37.33 55.44 38.28 C 54.89 39.24 54.37 40.14 53.85 41.05 C 53.32 41.96 52.82 42.83 52.30 43.72 C 51.79 44.61 51.28 45.49 50.76 46.39 C 50.24 47.30 49.71 48.21 49.16 49.16 C 48.61 50.12 48.05 51.08 47.45 52.13 C 46.84 53.18 46.49 54.89 45.53 55.44 C 44.58 56.00 42.92 55.44 41.71 55.44 C 40.50 55.44 39.39 55.44 38.28 55.44 C 37.18 55.44 36.13 55.44 35.09 55.44 C 34.04 55.44 33.03 55.44 32.00 55.44 C 30.97 55.44 29.96 55.44 28.91 55.44 C 27.87 55.44 26.82 55.44 25.72 55.44 C 24.61 55.44 23.50 55.44 22.29 55.44 C 21.08 55.44 19.42 56.00 18.47 55.44 C 17.51 54.89 17.16 53.18 16.55 52.13 C 15.95 51.08 15.39 50.12 14.84 49.16 C 14.29 48.21 13.76 47.30 13.24 46.39 C 12.72 45.49 12.21 44.61 11.70 43.72 C 11.18 42.83 10.68 41.96 10.15 41.05 C 9.63 40.14 9.11 39.24 8.56 38.28 C 8.00 37.33 7.45 36.36 6.84 35.31 C 6.24 34.27 4.93 33.10 4.93 32.00 C 4.93 30.90 6.24 29.73 6.84 28.69 C 7.45 27.64 8.00 26.67 8.56 25.72 C 9.11 24.76 9.63 23.86 10.15 22.95 C 10.68 22.04 11.18 21.17 11.70 20.28 C 12.21 19.39 12.72 18.51 13.24 17.61 C 13.76 16.70 14.29 15.79 14.84 14.84 C 15.39 13.88 15.95 12.92 16.55 11.87 C 17.16 10.82 17.51 9.11 18.47 8.56 C 19.42 8.00 21.08 8.56 22.29 8.56 C 23.50 8.56 24.61 8.56 25.72 8.56 C 26.82 8.56 27.87 8.56 28.91 8.56 C 29.96 8.56 30.97 8.56 32.00 8.56 C 33.03 8.56 34.04 8.56 35.09 8.56 C 36.13 8.56 37.18 8.56 38.28 8.56 C 39.39 8.56 40.50 8.56 41.71 8.56 C 42.92 8.56 44.58 8.00 45.53 8.56 C 46.49 9.11 46.84 10.82 47.45 11.87 C 48.05 12.92 48.61 13.88 49.16 14.84 C 49.71 15.79 50.24 16.70 50.76 17.61 C 51.28 18.51 51.79 19.39 52.30 20.28 C 52.82 21.17 53.32 22.04 53.85 22.95 C 54.37 23.86 54.89 24.76 55.44 25.72 C 56.00 26.67 56.55 27.64 57.16 28.69 C 57.76 29.73 59.07 30.90 59.07 32.00 Z" transform="translate(0 0) rotate(0.00 32 32)" fill="var(--ui-text-inverted)" />
                                  <rect x="25.1" y="25.6" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.00 0.00) rotate(-11 27 29.6) translate(0 29.6) scale(1 1.000) translate(0 -29.6)" />
                                  <rect x="35.1" y="25.6" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.00 0.00) rotate(-11 37 29.6) translate(0 29.6) scale(1 1.000) translate(0 -29.6)" />
                                </mask>
                              </defs>
                              <rect width="64" height="64" fill="url(#_R_aja8ndbsnpfknmlb_)" />
                            </svg>
                          </div>
                        </div>
                      </article>
                    </div>
                    <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-3 flex min-h-9 w-full items-center gap-2 text-[12px] font-medium transition rounded-md px-1" aria-label="New issue" type="button" @click="openAction(&quot;New issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-3.5" />
                      New issue
                    </UButton>
                  </div>
                </section>
              </div>
            </div>
          </div>
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
