<!-- Page: /project-management/dashboard-2 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Dashboard 2 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchProjects": ""
})

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "Week",
    "value": "0"
  },
  {
    "label": "Month",
    "value": "1"
  },
  {
    "label": "Quarter",
    "value": "2"
  }
]

const tabs2Active = ref("0")

const tabs2Items = [
  {
    "label": "1 Month",
    "value": "0"
  },
  {
    "label": "3 Months",
    "value": "1"
  },
  {
    "label": "6 Month",
    "value": "2"
  },
  {
    "label": "1 Year",
    "value": "3"
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/dashboard-2">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="bg-default flex min-h-[calc(100dvh-1px)] w-full overflow-hidden">
          <div class="flex min-w-0 flex-1 flex-col">
            <header class="bg-default min-w-0 border-b px-3 py-3 sm:px-4 lg:px-6 border-default">
              <div class="flex min-w-0 flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div class="flex min-w-0 items-center justify-between gap-3">
                  <div class="flex min-w-0 items-center gap-2 text-sm">
                    <span class="text-muted truncate">Shadcnblocks</span>
                    <span class="text-muted">/</span>
                    <span class="font-medium">Dashboard</span>
                  </div>
                  <div class="flex shrink-0 items-center gap-2 lg:hidden">
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-9 rounded-[6px]" aria-label="Notifications" type="button" @click="openAction(&quot;Notifications&quot;)">
                      <UIcon name="i-lucide-bell" class="size-4" />
                    </UButton>
                    <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 py-2 h-9 rounded-[6px] px-3" aria-label="Invite" type="button" @click="openAction(&quot;Invite&quot;)">
                      <UIcon name="i-lucide-users" class="size-4" />
                      <span class="hidden min-[380px]:inline">Invite</span>
                    </UButton>
                  </div>
                </div>
                <div class="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-2 lg:flex lg:items-center">
                  <div class="relative min-w-0 lg:w-[240px]">
                    <UIcon name="i-lucide-search" class="text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                    <UInput v-model="form.searchProjects" type="text" placeholder="Search projects..." name="searchProjects" class="flex w-full text-base md:text-sm h-9 rounded-[6px] pl-9" :ui="{ base: 'h-full' }" />
                  </div>
                  <div class="flex -space-x-2">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-6 border-2 sm:size-7">
                      <img class="aspect-square h-full w-full" alt="Kiara Laras" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                    </span>
                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-6 border-2 sm:size-7">
                      <img class="aspect-square h-full w-full" alt="Joe Tesla" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                    </span>
                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-6 border-2 sm:size-7">
                      <img class="aspect-square h-full w-full" alt="Tania Brooks" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                    </span>
                    <span class="border-(--ui-bg) bg-muted grid size-6 place-items-center rounded-full border-2 text-[10px] font-medium sm:size-7 sm:text-[11px]">+2</span>
                  </div>
                  <UButton color="primary" variant="solid" class="items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 px-4 py-2 hidden h-9 rounded-[6px] lg:inline-flex" aria-label="Invite" type="button" @click="openAction(&quot;Invite&quot;)">
                    <UIcon name="i-lucide-users" class="size-4" />
                    Invite
                  </UButton>
                  <UButton color="neutral" variant="soft" class="items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default hidden size-9 rounded-[6px] lg:inline-flex" aria-label="Notifications" type="button" @click="openAction(&quot;Notifications&quot;)">
                    <UIcon name="i-lucide-bell" class="size-4" />
                  </UButton>
                </div>
              </div>
            </header>
            <main class="dark:bg-default min-w-0 flex-1 overflow-auto bg-(--ui-bg-muted)/50 px-3 pt-3 pb-16 sm:px-4 sm:pt-4 md:px-6 md:pt-6 md:pb-24">
              <div class="mx-auto max-w-[1540px] space-y-3 sm:space-y-4">
                <div class="flex min-w-0 flex-wrap items-center justify-between gap-3">
                  <h1 class="text-xl font-semibold tracking-tight text-highlighted">Dashboard</h1>
                  <div class="text-muted flex items-center gap-2 text-xs">
                    <UIcon name="i-lucide-clock-3" class="size-3.5" />
                    <span>3 min ago</span>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-7 rounded-[6px]" aria-label="Refresh dashboard" type="button" @click="openAction(&quot;Refresh dashboard&quot;)">
                      <UIcon name="i-lucide-refresh-cw" class="size-3.5" />
                    </UButton>
                  </div>
                </div>
                <div class="grid items-start gap-4 xl:grid-cols-[minmax(0,1fr)_330px]">
                  <div class="min-w-0 space-y-4">
                    <div class="grid grid-cols-2 gap-2.5 sm:gap-3 xl:grid-cols-4">
                      <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none p-3 sm:p-4 border-default" style="opacity: 1; transform: none;">
                        <div class="flex min-w-0 items-center gap-2.5 sm:gap-3">
                          <span class="bg-muted text-muted grid size-8 shrink-0 place-items-center rounded-[6px] sm:size-9">
                            <UIcon name="i-lucide-list-todo" class="size-4" />
                          </span>
                          <span class="min-w-0 text-[13px] leading-tight font-medium sm:text-sm">Create issue</span>
                        </div>
                      </section>
                      <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none p-3 sm:p-4 border-default" style="opacity: 1; transform: none;">
                        <div class="flex min-w-0 items-center gap-2.5 sm:gap-3">
                          <span class="bg-muted text-muted grid size-8 shrink-0 place-items-center rounded-[6px] sm:size-9">
                            <UIcon name="i-lucide-flag" class="size-4" />
                          </span>
                          <span class="min-w-0 text-[13px] leading-tight font-medium sm:text-sm">Schedule milestone</span>
                        </div>
                      </section>
                      <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none p-3 sm:p-4 border-default" style="opacity: 1; transform: none;">
                        <div class="flex min-w-0 items-center gap-2.5 sm:gap-3">
                          <span class="bg-muted text-muted grid size-8 shrink-0 place-items-center rounded-[6px] sm:size-9">
                            <UIcon name="i-lucide-calendar-plus" class="size-4" />
                          </span>
                          <span class="min-w-0 text-[13px] leading-tight font-medium sm:text-sm">Plan sprint</span>
                        </div>
                      </section>
                      <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none p-3 sm:p-4 border-default" style="opacity: 1; transform: none;">
                        <div class="flex min-w-0 items-center gap-2.5 sm:gap-3">
                          <span class="bg-muted text-muted grid size-8 shrink-0 place-items-center rounded-[6px] sm:size-9">
                            <UIcon name="i-lucide-plus" class="size-4" />
                          </span>
                          <span class="min-w-0 text-[13px] leading-tight font-medium sm:text-sm">Add project</span>
                        </div>
                      </section>
                    </div>
                    <div class="grid grid-cols-2 gap-2.5 sm:gap-3 xl:grid-cols-4">
                      <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none p-3 sm:p-4 border-default" style="opacity: 1; transform: none;">
                        <div class="flex items-start justify-between gap-2 sm:gap-3">
                          <div class="min-w-0">
                            <p class="text-muted truncate text-[11px] sm:text-xs">Total Projects</p>
                            <p class="mt-1 text-xl font-semibold tracking-tight sm:mt-2 sm:text-2xl text-highlighted">12</p>
                            <p class="text-muted truncate text-[11px] sm:text-xs">Active Projects</p>
                          </div>
                          <UIcon name="i-lucide-ellipsis" class="text-muted size-4 shrink-0" />
                        </div>
                      </section>
                      <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none p-3 sm:p-4 border-default" style="opacity: 1; transform: none;">
                        <div class="flex items-start justify-between gap-2 sm:gap-3">
                          <div class="min-w-0">
                            <p class="text-muted truncate text-[11px] sm:text-xs">Total Task</p>
                            <p class="mt-1 text-xl font-semibold tracking-tight sm:mt-2 sm:text-2xl text-highlighted">108</p>
                            <p class="text-muted truncate text-[11px] sm:text-xs">Tasks Created</p>
                          </div>
                          <UIcon name="i-lucide-ellipsis" class="text-muted size-4 shrink-0" />
                        </div>
                      </section>
                      <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none p-3 sm:p-4 border-default" style="opacity: 1; transform: none;">
                        <div class="flex items-start justify-between gap-2 sm:gap-3">
                          <div class="min-w-0">
                            <p class="text-muted truncate text-[11px] sm:text-xs">In Progress</p>
                            <p class="mt-1 text-xl font-semibold tracking-tight sm:mt-2 sm:text-2xl text-highlighted">12</p>
                            <p class="text-muted truncate text-[11px] sm:text-xs">Task</p>
                          </div>
                          <UIcon name="i-lucide-ellipsis" class="text-muted size-4 shrink-0" />
                        </div>
                      </section>
                      <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none p-3 sm:p-4 border-default" style="opacity: 1; transform: none;">
                        <div class="flex items-start justify-between gap-2 sm:gap-3">
                          <div class="min-w-0">
                            <p class="text-muted truncate text-[11px] sm:text-xs">Completed</p>
                            <p class="mt-1 text-xl font-semibold tracking-tight sm:mt-2 sm:text-2xl text-highlighted">76</p>
                            <p class="text-muted truncate text-[11px] sm:text-xs">Task</p>
                          </div>
                          <UIcon name="i-lucide-ellipsis" class="text-muted size-4 shrink-0" />
                        </div>
                      </section>
                    </div>
                    <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none p-4 sm:p-5 border-default" style="opacity: 1; transform: none;">
                      <div class="mb-5 flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <h2 class="text-base font-semibold text-highlighted">Time-Based Issue Map</h2>
                          <p class="text-muted mt-1 text-xs">Weekly Gantt summary from active issues</p>
                        </div>
                        <UTabs v-model="tabs1Active" :items="tabs1Items" :content="false" color="primary" variant="link" class="bg-muted flex rounded-[6px] p-1 text-xs" aria-label="Issue map range" />
                      </div>
                      <div class="grid grid-cols-[112px_minmax(0,1fr)] gap-x-4">
                        <div />
                        <div class="relative mb-3 h-7">
                          <div class="text-muted flex h-full items-end justify-between text-xs">
                            <span>Apr 1</span>
                            <span class="text-highlighted font-semibold">Today</span>
                            <span>Apr 23</span>
                          </div>
                        </div>
                        <div class="col-span-2 grid grid-cols-[112px_minmax(0,1fr)] gap-x-4">
                          <div class="contents">
                            <div class="flex h-[62px] min-w-0 flex-col justify-center">
                              <span class="text-muted truncate text-xs font-semibold tracking-[0.1em]">RFC-101</span>
                              <span class="truncate text-sm leading-tight font-medium">In Progress</span>
                            </div>
                            <div class="relative h-[62px]">
                              <div class="bg-(--ui-border) absolute top-1/2 right-0 left-0 h-px dark:bg-(--ui-bg)/10" />
                              <div class="bg-(--ui-text-highlighted)/80 pointer-events-none absolute top-0 bottom-0 z-[1] w-px" style="left: 65.2174%;">
                                <span class="border-t-foreground absolute -top-1 left-1/2 size-0 -translate-x-1/2 border-x-[5px] border-t-[6px] border-x-transparent" />
                              </div>
                              <div title="RFC-101: Finalize issue timeline architecture · In Progress · Apr 2 - Apr 10" class="absolute top-1/2 z-[2] flex h-10 -translate-y-1/2 items-center gap-2 overflow-hidden rounded-full border px-3 text-xs font-medium shadow-sm dark:shadow-none border-warning/80 bg-warning/90 text-warning dark:border-warning/50 dark:bg-warning/70 dark:text-warning" style="left: 4.34783%; width: 39.1304%;">
                                <div class="flex -space-x-2">
                                  <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-6 border-2 sm:size-7">
                                    <img class="aspect-square h-full w-full" alt="Kiara Laras" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                                  </span>
                                  <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-6 border-2 sm:size-7">
                                    <img class="aspect-square h-full w-full" alt="Joe Tesla" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                                  </span>
                                </div>
                                <span class="grid min-w-0 gap-0.5">
                                  <span class="truncate leading-none font-semibold">RFC-101 · Finalize issue timeline architecture</span>
                                  <span class="truncate text-[10px] leading-none opacity-70">In Progress · Apr 2 - Apr 10</span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="contents">
                            <div class="flex h-[62px] min-w-0 flex-col justify-center">
                              <span class="text-muted truncate text-xs font-semibold tracking-[0.1em]">RFC-102</span>
                              <span class="truncate text-sm leading-tight font-medium">Todo</span>
                            </div>
                            <div class="relative h-[62px]">
                              <div class="bg-(--ui-border) absolute top-1/2 right-0 left-0 h-px dark:bg-(--ui-bg)/10" />
                              <div class="bg-(--ui-text-highlighted)/80 pointer-events-none absolute top-0 bottom-0 z-[1] w-px" style="left: 65.2174%;" />
                              <div title="RFC-102: Review gantt interaction states · Todo · Apr 4 - Apr 6" class="absolute top-1/2 z-[2] flex h-10 -translate-y-1/2 items-center gap-2 overflow-hidden rounded-full border px-3 text-xs font-medium shadow-sm dark:shadow-none border-info/80 bg-info/90 text-info dark:border-info/45 dark:bg-info/65 dark:text-info" style="left: 13.0435%; width: 18%;">
                                <span class="grid min-w-0 gap-0.5">
                                  <span class="truncate leading-none font-semibold">RFC-102 · Review gantt interaction states</span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="contents">
                            <div class="flex h-[62px] min-w-0 flex-col justify-center">
                              <span class="text-muted truncate text-xs font-semibold tracking-[0.1em]">RFC-103</span>
                              <span class="truncate text-sm leading-tight font-medium">Review</span>
                            </div>
                            <div class="relative h-[62px]">
                              <div class="bg-(--ui-border) absolute top-1/2 right-0 left-0 h-px dark:bg-(--ui-bg)/10" />
                              <div class="bg-(--ui-text-highlighted)/80 pointer-events-none absolute top-0 bottom-0 z-[1] w-px" style="left: 65.2174%;" />
                              <div title="RFC-103: Sync issue filters with project views · Review · Apr 8 - Apr 16" class="absolute top-1/2 z-[2] flex h-10 -translate-y-1/2 items-center gap-2 overflow-hidden rounded-full border px-3 text-xs font-medium shadow-sm dark:shadow-none border-secondary/80 bg-secondary/90 text-secondary dark:border-secondary/45 dark:bg-secondary/65 dark:text-secondary" style="left: 30.4348%; width: 39.1304%;">
                                <div class="flex -space-x-2">
                                  <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-6 border-2 sm:size-7">
                                    <img class="aspect-square h-full w-full" alt="Kiara Laras" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                                  </span>
                                  <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-6 border-2 sm:size-7">
                                    <img class="aspect-square h-full w-full" alt="Joe Tesla" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                                  </span>
                                </div>
                                <span class="grid min-w-0 gap-0.5">
                                  <span class="truncate leading-none font-semibold">RFC-103 · Sync issue filters with project views</span>
                                  <span class="truncate text-[10px] leading-none opacity-70">Review · Apr 8 - Apr 16</span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="contents">
                            <div class="flex h-[62px] min-w-0 flex-col justify-center">
                              <span class="text-muted truncate text-xs font-semibold tracking-[0.1em]">RFC-105</span>
                              <span class="truncate text-sm leading-tight font-medium">Todo</span>
                            </div>
                            <div class="relative h-[62px]">
                              <div class="bg-(--ui-border) absolute top-1/2 right-0 left-0 h-px dark:bg-(--ui-bg)/10" />
                              <div class="bg-(--ui-text-highlighted)/80 pointer-events-none absolute top-0 bottom-0 z-[1] w-px" style="left: 65.2174%;" />
                              <div title="RFC-105: Create empty and loading timeline states · Todo · Apr 14 - Apr 21" class="absolute top-1/2 z-[2] flex h-10 -translate-y-1/2 items-center gap-2 overflow-hidden rounded-full border px-3 text-xs font-medium shadow-sm dark:shadow-none border-info/80 bg-info/90 text-info dark:border-info/45 dark:bg-info/65 dark:text-info" style="left: 56.5217%; width: 34.7826%;">
                                <div class="flex -space-x-2">
                                  <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-6 border-2 sm:size-7">
                                    <img class="aspect-square h-full w-full" alt="Kiara Laras" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                                  </span>
                                  <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-6 border-2 sm:size-7">
                                    <img class="aspect-square h-full w-full" alt="Joe Tesla" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                                  </span>
                                </div>
                                <span class="grid min-w-0 gap-0.5">
                                  <span class="truncate leading-none font-semibold">RFC-105 · Create empty and loading timeline states</span>
                                  <span class="truncate text-[10px] leading-none opacity-70">Todo · Apr 14 - Apr 21</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section>
                      <div class="mb-3 flex items-center justify-between">
                        <h2 class="text-sm font-semibold text-highlighted">Current Projects</h2>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default px-3 text-xs h-8 rounded-[6px]" aria-label="New Project" type="button" @click="openAction(&quot;New Project&quot;)">
                          <UIcon name="i-lucide-plus" class="size-4" />
                          New Project
                        </UButton>
                      </div>
                      <div class="grid gap-4 md:grid-cols-2">
                        <article class="bg-default rounded-[10px] border p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99] dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none dark:hover:bg-[var(--ui-bg-inverted)] border-default">
                          <div class="flex items-center justify-between gap-3">
                            <div class="flex items-center gap-2">
                              <UIcon name="i-lucide-zap" class="text-muted size-4" />
                              <span class="text-sm font-semibold">REV-241</span>
                            </div>
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default text-xs h-8 rounded-[6px] px-3 shadow-none" aria-label="See details" type="button" @click="openAction(&quot;See details&quot;)">
                              See details
                            </UButton>
                          </div>
                          <div class="mt-4 border-t pt-4 border-default">
                            <p class="text-muted text-xs">Project Name</p>
                            <div class="mt-2 flex min-w-0 items-center gap-2">
                              <h3 class="truncate text-sm font-semibold text-highlighted">Revenue Insights Revamp</h3>
                              <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-[4px] px-1.5 py-0 text-[10px] font-medium border-default">Active</div>
                            </div>
                          </div>
                          <div class="mt-4 grid grid-cols-2 gap-4">
                            <div class="min-w-0">
                              <p class="text-muted text-xs">Project Manager</p>
                              <div class="mt-2 flex min-w-0 items-center gap-2">
                                <span class="relative flex shrink-0 overflow-hidden rounded-full size-7">
                                  <img class="aspect-square h-full w-full" alt="Tania Brooks" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                                </span>
                                <span class="truncate text-sm font-medium">Tania Brooks</span>
                              </div>
                            </div>
                            <div class="min-w-0">
                              <p class="text-muted text-xs">Team Lead</p>
                              <div class="mt-2 flex min-w-0 items-center gap-2">
                                <span class="relative flex shrink-0 overflow-hidden rounded-full size-7">
                                  <img class="aspect-square h-full w-full" alt="Kiara Laras" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                                </span>
                                <span class="truncate text-sm font-medium">Kiara Laras</span>
                              </div>
                            </div>
                          </div>
                          <div class="mt-4">
                            <p class="text-muted text-xs">Team</p>
                            <div class="mt-2 flex items-center gap-3">
                              <div class="flex -space-x-2">
                                <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-6 border-2 sm:size-7">
                                  <img class="aspect-square h-full w-full" alt="Kiara Laras" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                                </span>
                                <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-6 border-2 sm:size-7">
                                  <img class="aspect-square h-full w-full" alt="Joe Tesla" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                                </span>
                                <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-6 border-2 sm:size-7">
                                  <img class="aspect-square h-full w-full" alt="Tania Brooks" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                                </span>
                                <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-6 border-2 sm:size-7">
                                  <img class="aspect-square h-full w-full" alt="Cameron Williamson" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                                </span>
                              </div>
                              <span class="text-muted text-xs">+8 people</span>
                            </div>
                          </div>
                          <div class="mt-4">
                            <p class="text-muted text-xs">Timeline</p>
                            <div class="mt-2 flex items-center gap-2 text-sm font-medium">
                              <UIcon name="i-lucide-calendar-days" class="text-muted size-4" />
                              <span>Apr 8, 2026 - Apr 16, 2026</span>
                            </div>
                          </div>
                        </article>
                        <article class="bg-default rounded-[10px] border p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99] dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none dark:hover:bg-[var(--ui-bg-inverted)] border-default">
                          <div class="flex items-center justify-between gap-3">
                            <div class="flex items-center gap-2">
                              <UIcon name="i-lucide-zap" class="text-muted size-4" />
                              <span class="text-sm font-semibold">ONB-118</span>
                            </div>
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default text-xs h-8 rounded-[6px] px-3 shadow-none" aria-label="See details" type="button" @click="openAction(&quot;See details&quot;)">
                              See details
                            </UButton>
                          </div>
                          <div class="mt-4 border-t pt-4 border-default">
                            <p class="text-muted text-xs">Project Name</p>
                            <div class="mt-2 flex min-w-0 items-center gap-2">
                              <h3 class="truncate text-sm font-semibold text-highlighted">Enterprise Onboarding Flow</h3>
                              <div class="inline-flex items-center border transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-[4px] px-1.5 py-0 text-[10px] font-medium border-default">Active</div>
                            </div>
                          </div>
                          <div class="mt-4 grid grid-cols-2 gap-4">
                            <div class="min-w-0">
                              <p class="text-muted text-xs">Project Manager</p>
                              <div class="mt-2 flex min-w-0 items-center gap-2">
                                <span class="relative flex shrink-0 overflow-hidden rounded-full size-7">
                                  <img class="aspect-square h-full w-full" alt="Cameron Williamson" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                                </span>
                                <span class="truncate text-sm font-medium">Cameron Williamson</span>
                              </div>
                            </div>
                            <div class="min-w-0">
                              <p class="text-muted text-xs">Team Lead</p>
                              <div class="mt-2 flex min-w-0 items-center gap-2">
                                <span class="relative flex shrink-0 overflow-hidden rounded-full size-7">
                                  <img class="aspect-square h-full w-full" alt="Joe Tesla" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                                </span>
                                <span class="truncate text-sm font-medium">Joe Tesla</span>
                              </div>
                            </div>
                          </div>
                          <div class="mt-4">
                            <p class="text-muted text-xs">Team</p>
                            <div class="mt-2 flex items-center gap-3">
                              <div class="flex -space-x-2">
                                <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-6 border-2 sm:size-7">
                                  <img class="aspect-square h-full w-full" alt="Tania Brooks" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                                </span>
                                <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-6 border-2 sm:size-7">
                                  <img class="aspect-square h-full w-full" alt="Cameron Williamson" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                                </span>
                                <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-6 border-2 sm:size-7">
                                  <img class="aspect-square h-full w-full" alt="Robert Fox" src="/reference/247ac7c76922347b.png" loading="lazy" />
                                </span>
                                <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-6 border-2 sm:size-7">
                                  <img class="aspect-square h-full w-full" alt="Kiara Laras" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                                </span>
                              </div>
                              <span class="text-muted text-xs">+6 people</span>
                            </div>
                          </div>
                          <div class="mt-4">
                            <p class="text-muted text-xs">Timeline</p>
                            <div class="mt-2 flex items-center gap-2 text-sm font-medium">
                              <UIcon name="i-lucide-calendar-days" class="text-muted size-4" />
                              <span>Apr 10, 2026 - Apr 18, 2026</span>
                            </div>
                          </div>
                        </article>
                      </div>
                    </section>
                    <div class="grid gap-4 lg:grid-cols-[1fr_1fr]">
                      <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none p-4 border-default" style="opacity: 1; transform: none;">
                        <div class="mb-3 flex flex-wrap items-center justify-between gap-3">
                          <h2 class="text-sm font-semibold text-highlighted">Milestone Tracker</h2>
                          <UTabs v-model="tabs2Active" :items="tabs2Items" :content="false" color="primary" variant="link" class="bg-muted flex rounded-[6px] p-1 text-xs" aria-label="Milestone range" />
                        </div>
                        <!-- Chart 1: SVG geometry and theme tokens are local to this page -->
                        <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden aspect-auto h-[220px] w-full" style=";--color-target:color-mix(in oklch, var(--ui-text-highlighted) 42%, var(--ui-bg));--color-actual:var(--ui-primary)" role="img" aria-label="Analytics chart">
                          <!-- Chart 2: SVG geometry and theme tokens are local to this page -->
                          <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-target:color-mix(in oklch, var(--ui-text-highlighted) 42%, var(--ui-bg));--color-actual:var(--ui-primary);width:100%;height:220px;min-width:0" role="img" aria-label="Analytics chart">
                            <div style="width:0;height:0;overflow:visible">
                              <div width="353" height="220" class="chart-wrapper" style="position: relative; cursor: default; width: 353px; height: 220px;">
                                <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 353 220" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                                  <title />
                                  <desc />
                                  <g class="chart-zIndex-layer_-100">
                                    <g class="chart-cartesian-grid">
                                      <g class="chart-cartesian-grid-horizontal">
                                        <line stroke="var(--ui-text-dimmed)" fill="none" x="5" y="5" width="343" height="180" x1="5" y1="185" x2="348" y2="185" />
                                        <line stroke="var(--ui-text-dimmed)" fill="none" x="5" y="5" width="343" height="180" x1="5" y1="140" x2="348" y2="140" />
                                        <line stroke="var(--ui-text-dimmed)" fill="none" x="5" y="5" width="343" height="180" x1="5" y1="95" x2="348" y2="95" />
                                        <line stroke="var(--ui-text-dimmed)" fill="none" x="5" y="5" width="343" height="180" x1="5" y1="50" x2="348" y2="50" />
                                        <line stroke="var(--ui-text-dimmed)" fill="none" x="5" y="5" width="343" height="180" x1="5" y1="5" x2="348" y2="5" />
                                      </g>
                                    </g>
                                  </g>
                                  <g class="chart-zIndex-layer_-50" />
                                  <defs>
                                    <clipPath id="recharts1-clip">
                                      <rect x="5" y="5" height="180" width="343" />
                                    </clipPath>
                                  </defs>
                                  <g class="chart-zIndex-layer_100" />
                                  <g class="chart-zIndex-layer_200" />
                                  <g class="chart-zIndex-layer_300">
                                    <g class="chart-layer chart-bar" id="recharts-bar-_r_0_">
                                      <g class="chart-layer chart-bar-rectangles">
                                        <g class="chart-layer">
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-target)" name="undefined" x="15" y="109.4" width="16" height="75.6" class="chart-rectangle" d="M 15,113.4
            A 4,4,0,0,1,19,109.4
            L 27,109.4
            A 4,4,0,0,1,31,113.4
            L 31,181
            A 4,4,0,0,1,27,185
            L 19,185
            A 4,4,0,0,1,15,181 Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-target)" name="undefined" x="72.1667" y="129.2" width="16" height="55.8" class="chart-rectangle" d="M 72.1667,133.2
            A 4,4,0,0,1,76.1667,129.2
            L 84.1667,129.2
            A 4,4,0,0,1,88.1667,133.2
            L 88.1667,181
            A 4,4,0,0,1,84.1667,185
            L 76.1667,185
            A 4,4,0,0,1,72.1667,181 Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-target)" name="undefined" x="129.3333" y="120.2" width="16" height="64.8" class="chart-rectangle" d="M 129.3333,124.2
            A 4,4,0,0,1,133.3333,120.2
            L 141.3333,120.2
            A 4,4,0,0,1,145.3333,124.2
            L 145.3333,181
            A 4,4,0,0,1,141.3333,185
            L 133.3333,185
            A 4,4,0,0,1,129.3333,181 Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-target)" name="undefined" x="186.5" y="32" width="16" height="153" class="chart-rectangle" d="M 186.5,36
            A 4,4,0,0,1,190.5,32
            L 198.5,32
            A 4,4,0,0,1,202.5,36
            L 202.5,181
            A 4,4,0,0,1,198.5,185
            L 190.5,185
            A 4,4,0,0,1,186.5,181 Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-target)" name="undefined" x="243.6667" y="46.4" width="16" height="138.6" class="chart-rectangle" d="M 243.6667,50.4
            A 4,4,0,0,1,247.6667,46.4
            L 255.6667,46.4
            A 4,4,0,0,1,259.6667,50.4
            L 259.6667,181
            A 4,4,0,0,1,255.6667,185
            L 247.6667,185
            A 4,4,0,0,1,243.6667,181 Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-target)" name="undefined" x="300.8333" y="51.8" width="16" height="133.2" class="chart-rectangle" d="M 300.8333,55.8
            A 4,4,0,0,1,304.8333,51.8
            L 312.8333,51.8
            A 4,4,0,0,1,316.8333,55.8
            L 316.8333,181
            A 4,4,0,0,1,312.8333,185
            L 304.8333,185
            A 4,4,0,0,1,300.8333,181 Z" />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                    <g class="chart-layer chart-bar" id="recharts-bar-_r_1_">
                                      <g class="chart-layer chart-bar-rectangles">
                                        <g class="chart-layer">
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-actual)" name="undefined" x="35" y="98.6" width="16" height="86.4" class="chart-rectangle" d="M 35,102.6
            A 4,4,0,0,1,39,98.6
            L 47,98.6
            A 4,4,0,0,1,51,102.6
            L 51,181
            A 4,4,0,0,1,47,185
            L 39,185
            A 4,4,0,0,1,35,181 Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-actual)" name="undefined" x="92.1667" y="141.8" width="16" height="43.2" class="chart-rectangle" d="M 92.1667,145.8
            A 4,4,0,0,1,96.1667,141.8
            L 104.1667,141.8
            A 4,4,0,0,1,108.1667,145.8
            L 108.1667,181
            A 4,4,0,0,1,104.1667,185
            L 96.1667,185
            A 4,4,0,0,1,92.1667,181 Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-actual)" name="undefined" x="149.3333" y="96.8" width="16" height="88.2" class="chart-rectangle" d="M 149.3333,100.8
            A 4,4,0,0,1,153.3333,96.8
            L 161.3333,96.8
            A 4,4,0,0,1,165.3333,100.8
            L 165.3333,181
            A 4,4,0,0,1,161.3333,185
            L 153.3333,185
            A 4,4,0,0,1,149.3333,181 Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-actual)" name="undefined" x="206.5" y="37.4" width="16" height="147.6" class="chart-rectangle" d="M 206.5,41.4
            A 4,4,0,0,1,210.5,37.4
            L 218.5,37.4
            A 4,4,0,0,1,222.5,41.4
            L 222.5,181
            A 4,4,0,0,1,218.5,185
            L 210.5,185
            A 4,4,0,0,1,206.5,181 Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-actual)" name="undefined" x="263.6667" y="15.8" width="16" height="169.2" class="chart-rectangle" d="M 263.6667,19.8
            A 4,4,0,0,1,267.6667,15.8
            L 275.6667,15.8
            A 4,4,0,0,1,279.6667,19.8
            L 279.6667,181
            A 4,4,0,0,1,275.6667,185
            L 267.6667,185
            A 4,4,0,0,1,263.6667,181 Z" />
                                            </g>
                                          </g>
                                          <g class="chart-layer chart-bar-rectangle">
                                            <g class="chart-layer chart-inactive-bar">
                                              <path fill="var(--color-actual)" name="undefined" x="320.8333" y="93.2" width="16" height="91.8" class="chart-rectangle" d="M 320.8333,97.2
            A 4,4,0,0,1,324.8333,93.2
            L 332.8333,93.2
            A 4,4,0,0,1,336.8333,97.2
            L 336.8333,181
            A 4,4,0,0,1,332.8333,185
            L 324.8333,185
            A 4,4,0,0,1,320.8333,181 Z" />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                  <g class="chart-zIndex-layer_400" />
                                  <g class="chart-zIndex-layer_500">
                                    <g class="chart-layer chart-cartesian-axis chart-xAxis xAxis">
                                      <g class="chart-cartesian-axis-ticks chart-xAxis-ticks">
                                        <g class="chart-cartesian-axis-tick-lines chart-xAxis-tick-lines">
                                          <g class="chart-layer chart-cartesian-axis-tick" />
                                          <g class="chart-layer chart-cartesian-axis-tick" />
                                          <g class="chart-layer chart-cartesian-axis-tick" />
                                          <g class="chart-layer chart-cartesian-axis-tick" />
                                          <g class="chart-layer chart-cartesian-axis-tick" />
                                          <g class="chart-layer chart-cartesian-axis-tick" />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                  <g class="chart-zIndex-layer_600" />
                                  <g class="chart-zIndex-layer_1000" />
                                  <g class="chart-zIndex-layer_1100" />
                                  <g class="chart-zIndex-layer_1200" />
                                  <g class="chart-zIndex-layer_2000">
                                    <g class="chart-cartesian-axis-tick-labels chart-xAxis-tick-labels">
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="343" stroke="none" x="33.58333333333333" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="33.58333333333333">Jan</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="343" stroke="none" x="90.75" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="90.75">Feb</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="343" stroke="none" x="147.91666666666666" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="147.91666666666666">Mar</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="343" stroke="none" x="205.08333333333334" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="205.08333333333334">Apr</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="343" stroke="none" x="262.25" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="262.25">May</tspan>
                                        </text>
                                      </g>
                                      <g class="chart-layer chart-cartesian-axis-tick-label">
                                        <text height="30" width="343" stroke="none" x="319.41666666666663" y="201" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                          <tspan x="319.41666666666663">Jun</tspan>
                                        </text>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section class="bg-default rounded-[8px] border shadow-sm shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none p-4 border-default" style="opacity: 1; transform: none;">
                        <div class="mb-4 flex items-center justify-between">
                          <div class="flex items-center gap-2">
                            <UIcon name="i-lucide-sticky-note" class="text-muted size-4" />
                            <h2 class="text-sm font-semibold text-highlighted">Notes</h2>
                          </div>
                          <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default px-3 text-xs h-8 rounded-[6px]" aria-label="Add Note" type="button" @click="openAction(&quot;Add Note&quot;)">
                            <UIcon name="i-lucide-plus" class="size-4" />
                            Add Note
                          </UButton>
                        </div>
                        <div class="divide-y">
                          <div class="grid grid-cols-[24px_1fr_auto] gap-3 py-3 first:pt-0 last:pb-0">
                            <UIcon name="i-lucide-circle" class="text-muted mt-0.5 size-4" />
                            <div class="min-w-0">
                              <p class="truncate text-sm font-medium">Confirm revenue review owners</p>
                              <p class="text-muted mt-1 truncate text-xs">Assign final reviewers for REV-241 dashboard exceptions.</p>
                              <div class="mt-2 flex flex-wrap gap-1.5">
                                <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-muted h-5 rounded-full px-2 text-[10px] font-medium border-default">Today</div>
                                <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-muted h-5 rounded-full px-2 text-[10px] font-medium border-default">Owner</div>
                              </div>
                            </div>
                            <div class="text-muted mt-8 flex items-center gap-1 text-xs">
                              <UIcon name="i-lucide-calendar-days" class="size-3.5" />
                              Apr 12
                            </div>
                          </div>
                          <div class="grid grid-cols-[24px_1fr_auto] gap-3 py-3 first:pt-0 last:pb-0">
                            <UIcon name="i-lucide-circle-check" class="text-primary mt-0.5 size-4" />
                            <div class="min-w-0">
                              <p class="truncate text-sm font-medium text-muted">Prep onboarding handoff notes</p>
                              <p class="text-muted mt-1 truncate text-xs">Summarize open blockers before the ONB-118 team sync.</p>
                              <div class="mt-2 flex flex-wrap gap-1.5">
                                <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-muted h-5 rounded-full px-2 text-[10px] font-medium border-default">Handoff</div>
                                <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-muted h-5 rounded-full px-2 text-[10px] font-medium border-default">Active</div>
                              </div>
                            </div>
                            <div class="text-muted mt-8 flex items-center gap-1 text-xs">
                              <UIcon name="i-lucide-calendar-days" class="size-3.5" />
                              Apr 11
                            </div>
                          </div>
                          <div class="grid grid-cols-[24px_1fr_auto] gap-3 py-3 first:pt-0 last:pb-0">
                            <UIcon name="i-lucide-circle-check" class="text-primary mt-0.5 size-4" />
                            <div class="min-w-0">
                              <p class="truncate text-sm font-medium text-muted">Review overdue issue lanes</p>
                              <p class="text-muted mt-1 truncate text-xs">Check backlog spillover before updating the weekly plan.</p>
                              <div class="mt-2 flex flex-wrap gap-1.5">
                                <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-muted h-5 rounded-full px-2 text-[10px] font-medium border-default">Kanban</div>
                                <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-muted h-5 rounded-full px-2 text-[10px] font-medium border-default">Review</div>
                              </div>
                            </div>
                            <div class="text-muted mt-8 flex items-center gap-1 text-xs">
                              <UIcon name="i-lucide-calendar-days" class="size-3.5" />
                              Apr 10
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <aside class="grid content-start gap-4 xl:w-[330px] xl:shrink-0">
                    <section class="rounded-[8px] border shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none border-default bg-default p-5 shadow-sm" style="opacity: 1; transform: none;">
                      <div class="mb-6 flex items-center gap-3">
                        <UIcon name="i-lucide-activity" class="text-primary size-5" />
                        <h2 class="text-lg font-semibold tracking-tight text-highlighted">Activity</h2>
                      </div>
                      <div class="space-y-6">
                        <div class="grid grid-cols-[34px_1fr] gap-3">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-8">
                            <img class="aspect-square h-full w-full" alt="Kiara" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                          </span>
                          <div class="min-w-0 space-y-1">
                            <p class="truncate text-sm font-semibold text-highlighted">
                              Kiara
                              <span class="text-(--ui-text-highlighted)/80 font-medium">updated wireframes</span>
                            </p>
                            <p class="text-muted truncate text-sm font-medium">Checkout flow screens moved to review</p>
                            <p class="text-(--ui-text-muted)/70 text-xs font-medium">2 hours ago</p>
                          </div>
                        </div>
                        <div class="grid grid-cols-[34px_1fr] gap-3">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-8">
                            <img class="aspect-square h-full w-full" alt="Joe" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                          </span>
                          <div class="min-w-0 space-y-1">
                            <p class="truncate text-sm font-semibold text-highlighted">
                              Joe
                              <span class="text-(--ui-text-highlighted)/80 font-medium">cleared blocker</span>
                            </p>
                            <p class="text-muted truncate text-sm font-medium">Deployment checklist is ready</p>
                            <p class="text-(--ui-text-muted)/70 text-xs font-medium">2 hours ago</p>
                          </div>
                        </div>
                        <div class="grid grid-cols-[34px_1fr] gap-3">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-8">
                            <img class="aspect-square h-full w-full" alt="Tania" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                          </span>
                          <div class="min-w-0 space-y-1">
                            <p class="truncate text-sm font-semibold text-highlighted">
                              Tania
                              <span class="text-(--ui-text-highlighted)/80 font-medium">commented on brand guide</span>
                            </p>
                            <p class="text-muted truncate text-sm font-medium">Logo spacing needs one final pass</p>
                            <p class="text-(--ui-text-muted)/70 text-xs font-medium">5 hours ago</p>
                          </div>
                        </div>
                      </div>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default py-2 mt-6 h-9 w-full justify-between rounded-[6px] px-3 text-sm font-semibold shadow-none" aria-label="Open activity log" type="button" @click="openAction(&quot;Open activity log&quot;)">
                        Open activity log
                        <UIcon name="i-lucide-arrow-right" class="size-4" />
                      </UButton>
                    </section>
                    <section class="rounded-[8px] border shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none border-default bg-default p-5 shadow-sm" style="opacity: 1; transform: none;">
                      <div class="mb-6 flex items-baseline gap-3">
                        <h2 class="text-lg font-semibold tracking-tight text-highlighted">Members</h2>
                        <span class="text-muted text-lg">98</span>
                      </div>
                      <div class="grid grid-cols-6 gap-3">
                        <span class="relative flex shrink-0 overflow-hidden rounded-full size-10 border border-default">
                          <img class="aspect-square h-full w-full" alt="Kiara Laras" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                        </span>
                        <span class="relative flex shrink-0 overflow-hidden rounded-full size-10 border border-default">
                          <img class="aspect-square h-full w-full" alt="Joe Tesla" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                        </span>
                        <span class="relative flex shrink-0 overflow-hidden rounded-full size-10 border border-default">
                          <img class="aspect-square h-full w-full" alt="Tania Brooks" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                        </span>
                        <span class="relative flex shrink-0 overflow-hidden rounded-full size-10 border border-default">
                          <img class="aspect-square h-full w-full" alt="Cameron Williamson" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                        </span>
                        <span class="relative flex shrink-0 overflow-hidden rounded-full size-10 border border-default">
                          <img class="aspect-square h-full w-full" alt="Robert Fox" src="/reference/247ac7c76922347b.png" loading="lazy" />
                        </span>
                        <span class="relative flex shrink-0 overflow-hidden rounded-full size-10 border border-default">
                          <img class="aspect-square h-full w-full" alt="Kiara Laras" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                        </span>
                        <span class="relative flex shrink-0 overflow-hidden rounded-full size-10 border border-default">
                          <img class="aspect-square h-full w-full" alt="Joe Tesla" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                        </span>
                        <span class="relative flex shrink-0 overflow-hidden rounded-full size-10 border border-default">
                          <img class="aspect-square h-full w-full" alt="Tania Brooks" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                        </span>
                        <span class="relative flex shrink-0 overflow-hidden rounded-full size-10 border border-default">
                          <img class="aspect-square h-full w-full" alt="Cameron Williamson" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                        </span>
                        <span class="relative flex shrink-0 overflow-hidden rounded-full size-10 border border-default">
                          <img class="aspect-square h-full w-full" alt="Robert Fox" src="/reference/247ac7c76922347b.png" loading="lazy" />
                        </span>
                        <span class="text-muted grid size-10 place-items-center rounded-full text-sm font-medium">+91</span>
                      </div>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default py-2 mt-6 h-9 w-full justify-between rounded-[6px] px-3 text-sm font-semibold shadow-none" aria-label="Manage members" type="button" @click="openAction(&quot;Manage members&quot;)">
                        Manage members
                        <UIcon name="i-lucide-arrow-right" class="size-4" />
                      </UButton>
                    </section>
                    <section class="rounded-[8px] border shadow-zinc-200/40 dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-none border-default bg-default p-5 shadow-sm" style="opacity: 1; transform: none;">
                      <h2 class="mb-6 text-lg font-semibold tracking-tight text-highlighted">Issue Status</h2>
                      <p class="text-muted -mt-4 mb-5 text-sm">18 issues distributed across active statuses</p>
                      <div class="bg-muted flex h-1.5 overflow-hidden rounded-full">
                        <span class="bg-accented dark:bg-accented" style="width:22.22222222222222%" />
                        <span class="bg-info dark:bg-info" style="width:22.22222222222222%" />
                        <span class="bg-warning dark:bg-warning" style="width:16.666666666666664%" />
                        <span class="bg-secondary dark:bg-secondary" style="width:22.22222222222222%" />
                        <span class="bg-success dark:bg-success" style="width:16.666666666666664%" />
                      </div>
                      <div class="mt-6 space-y-4">
                        <div class="flex items-center gap-3 text-sm font-semibold">
                          <span class="size-3 rounded-full bg-accented dark:bg-accented" />
                          <span>Backlog</span>
                          <span class="text-muted">4</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm font-semibold">
                          <span class="size-3 rounded-full bg-info dark:bg-info" />
                          <span>Todo</span>
                          <span class="text-muted">4</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm font-semibold">
                          <span class="size-3 rounded-full bg-warning dark:bg-warning" />
                          <span>In Progress</span>
                          <span class="text-muted">3</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm font-semibold">
                          <span class="size-3 rounded-full bg-secondary dark:bg-secondary" />
                          <span>Review</span>
                          <span class="text-muted">4</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm font-semibold">
                          <span class="size-3 rounded-full bg-success dark:bg-success" />
                          <span>Done</span>
                          <span class="text-muted">3</span>
                        </div>
                      </div>
                    </section>
                  </aside>
                </div>
              </div>
            </main>
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

.chart-container { min-width: 0; }
.chart-wrapper { width: 100% !important; }
.chart-responsive-container > div { width: 100% !important; height: 100% !important; }
svg.chart-surface { width: 100%; overflow: visible; }
.chart-cartesian-axis-tick text { fill: var(--ui-text-muted); font-size: 11px; }
.chart-cartesian-grid line { stroke: var(--ui-border); }
</style>
