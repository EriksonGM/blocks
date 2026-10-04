<!-- Page: /project-management/project-list-1 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Project List 1 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchProjects": "",
  "newestFirst": "Newest first",
  "teamSize": "Team size"
})

const newestFirstOptions = [
  "Newest first",
  "Oldest first",
  "Name A-Z",
  "Name Z-A"
]

const teamSizeOptions = [
  "Team size",
  "3 members",
  "4+ members"
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/project-list-1">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main id="main-content" class="bg-default flex min-h-0 flex-1 flex-col overflow-hidden dark:bg-[radial-gradient(circle_at_top,color-mix(in_oklab,_var(--ui-bg)_3.5000000000000004%,_transparent),transparent_28%)]">
          <div class="border-b dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)]/95 border-default">
            <div class="flex flex-col gap-3 px-4 py-4 sm:px-6 lg:min-h-14 lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:py-0">
              <div class="flex min-w-0 items-center justify-between gap-3">
                <div class="flex min-w-0 items-center gap-2.5 text-sm font-medium dark:text-highlighted">
                  <UIcon name="i-lucide-folder-kanban" class="text-muted size-4 shrink-0 dark:text-dimmed" />
                  <span class="truncate">Projects</span>
                </div>
                <UButton color="primary" variant="solid" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 rounded-md text-xs size-8 shrink-0 gap-1.5 p-0 sm:w-auto sm:px-3 lg:hidden" aria-label="Add Project" type="button" @click="openAction(&quot;Add Project&quot;)">
                  <UIcon name="i-lucide-plus" class="size-3.5" />
                  <span class="hidden sm:inline">Add Project</span>
                </UButton>
              </div>
              <div class="grid min-w-0 grid-cols-2 items-center gap-2 lg:flex lg:flex-wrap lg:justify-end">
                <div class="relative col-span-2 w-full lg:col-span-1 lg:w-[220px]">
                  <UIcon name="i-lucide-search" class="text-muted pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 dark:text-dimmed" />
                  <UInput v-model="form.searchProjects" type="text" placeholder="Search projects..." name="searchProjects" class="flex w-full md:text-sm h-9 rounded-md pl-8 text-sm lg:h-8 dark:border-(--ui-text-inverted)/10 dark:bg-(--ui-bg)/70 dark:text-highlighted dark:placeholder:text-dimmed" :ui="{ base: 'h-full' }" />
                </div>
                <USelect v-model="form.newestFirst" :items="newestFirstOptions" aria-label="Sort projects" class="ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between rounded-md border px-3 py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-9 w-full gap-1.5 shadow-none lg:h-8 lg:w-[156px] border-default bg-default text-highlighted hover:bg-elevated hover:text-default" />
                <USelect v-model="form.teamSize" :items="teamSizeOptions" aria-label="Filter by team size" class="ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between rounded-md border px-3 py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-9 w-full gap-1.5 shadow-none lg:h-8 lg:w-[132px] border-default bg-default text-highlighted hover:bg-elevated hover:text-default" />
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-xs rounded-md px-3 text-xs col-span-2 h-9 w-full gap-1.5 sm:col-span-1 lg:h-8 lg:w-auto border-default bg-default text-highlighted hover:bg-elevated hover:text-default" aria-label="Filters" type="button" @click="openAction(&quot;Filters&quot;)">
                  <UIcon name="i-lucide-sliders-horizontal" class="size-3.5" />
                  Filters
                </UButton>
                <UButton color="primary" variant="solid" class="items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 rounded-md px-3 text-xs hidden h-8 gap-1.5 lg:inline-flex" aria-label="Add Project" type="button" @click="openAction(&quot;Add Project&quot;)">
                  <UIcon name="i-lucide-plus" class="size-3.5" />
                  Add Project
                </UButton>
              </div>
            </div>
          </div>
          <div class="flex-1 overflow-y-auto px-4 py-5 sm:px-6 dark:bg-[linear-gradient(180deg,color-mix(in_oklab,_var(--ui-bg)_1%,_transparent),transparent_12%)]">
            <div class="mb-4 flex items-center justify-between gap-3">
              <p class="text-muted text-sm dark:text-dimmed">10projects</p>
              <div class="hidden flex-wrap items-center gap-2 md:flex">
                <UBadge color="neutral" variant="subtle" class="inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs dark:border-(--ui-text-inverted)/10 dark:bg-(--ui-bg)/60 dark:text-default border-default">
                  <UIcon name="i-lucide-check" class="size-3" />
                  Active
                </UBadge>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              <!-- Card 1: Revenue Insights Revamp -->
              <UCard class="border-(--ui-border)/70 group w-full overflow-hidden rounded-xl shadow-none transition-colors dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-[0_0_0_1px_color-mix(in_oklab,_var(--ui-bg)_3%,_transparent)]" :ui="{ body: 'contents' }">
                <div class="relative h-[160px] w-full overflow-hidden">
                  <img alt="" class="object-cover transition-transform duration-500 group-hover:scale-105" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/10f307cc01258d9b.png" loading="lazy" />
                  <div class="absolute inset-0 bg-gradient-to-t from-(--ui-bg-inverted)/70 via-(--ui-bg-inverted)/30 to-(--ui-bg-inverted)/5" />
                  <div class="absolute inset-0 flex flex-col justify-between px-5 pt-4 pb-4">
                    <div class="flex items-start justify-between gap-3">
                      <div class="flex items-center gap-2">
                        <UBadge color="neutral" variant="subtle" class="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium bg-success/20 text-success">
                          Active
                        </UBadge>
                      </div>
                      <div class="flex items-center gap-1.5">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-7 w-7 rounded-md border-0 bg-(--ui-bg)/12 text-inverted shadow-none hover:bg-(--ui-bg)/18 dark:bg-(--ui-bg)/10 dark:hover:bg-(--ui-bg)/16" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-link-2" class="size-3.5" />
                        </UButton>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-7 w-7 rounded-md border-0 bg-(--ui-bg)/12 text-inverted shadow-none hover:bg-(--ui-bg)/18 dark:bg-(--ui-bg)/10 dark:hover:bg-(--ui-bg)/16" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-star" class="size-3.5" />
                        </UButton>
                      </div>
                    </div>
                    <div class="min-w-0">
                      <div class="mb-1.5 flex items-center gap-2">
                        <div class="h-4 w-1 rounded-full bg-warning/90" />
                        <span class="text-[11px] font-medium tracking-[0.18em] text-(--ui-text-inverted)/75 uppercase">REV-241</span>
                      </div>
                      <h3 class="truncate text-lg font-semibold text-inverted dark:text-highlighted text-highlighted">Revenue Insights Revamp</h3>
                    </div>
                  </div>
                </div>
                <div class="space-y-4 p-5 dark:bg-gradient-to-b dark:from-[#202020] dark:to-[#1b1b1b]">
                  <div class="grid grid-cols-2 gap-x-4 gap-y-3">
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Cycle</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">Improvement</span>
                        <span class="text-muted text-[11px] dark:text-dimmed">4 weeks</span>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Timeline health</span>
                      <span class="text-muted text-[11px] dark:text-dimmed">34 days left</span>
                    </div>
                    <div class="flex items-center gap-2.5">
                      <div class="h-1.5 flex-1 rounded-full bg-muted dark:bg-elevated">
                        <div class="h-full rounded-full bg-warning" style="width:58%" />
                      </div>
                      <span class="text-highlighted text-sm font-semibold tabular-nums dark:text-default">58%</span>
                    </div>
                  </div>
                  <div class="border-(--ui-border)/60 grid grid-cols-2 gap-x-4 gap-y-3 border-t pt-3.5 dark:border-(--ui-text-inverted)/8 border-default">
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Due date</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">14 Feb 2026</span>
                      </div>
                      <span class="text-muted text-[11px] dark:text-dimmed">6 weeks</span>
                    </div>
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Tasks closed</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">1/11</span>
                      </div>
                      <span class="text-muted text-[11px] dark:text-dimmed">10 open tasks</span>
                    </div>
                  </div>
                </div>
              </UCard>
              <!-- Card 2: Enterprise Onboarding Flow -->
              <UCard class="border-(--ui-border)/70 group w-full overflow-hidden rounded-xl shadow-none transition-colors dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-[0_0_0_1px_color-mix(in_oklab,_var(--ui-bg)_3%,_transparent)]" :ui="{ body: 'contents' }">
                <div class="relative h-[160px] w-full overflow-hidden">
                  <img alt="" class="object-cover transition-transform duration-500 group-hover:scale-105" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/8d94ffe833606904.png" loading="lazy" />
                  <div class="absolute inset-0 bg-gradient-to-t from-(--ui-bg-inverted)/70 via-(--ui-bg-inverted)/30 to-(--ui-bg-inverted)/5" />
                  <div class="absolute inset-0 flex flex-col justify-between px-5 pt-4 pb-4">
                    <div class="flex items-start justify-between gap-3">
                      <div class="flex items-center gap-2">
                        <UBadge color="neutral" variant="subtle" class="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium bg-success/20 text-success">
                          Active
                        </UBadge>
                      </div>
                      <div class="flex items-center gap-1.5">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-7 w-7 rounded-md border-0 bg-(--ui-bg)/12 text-inverted shadow-none hover:bg-(--ui-bg)/18 dark:bg-(--ui-bg)/10 dark:hover:bg-(--ui-bg)/16" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-link-2" class="size-3.5" />
                        </UButton>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-7 w-7 rounded-md border-0 bg-(--ui-bg)/12 text-inverted shadow-none hover:bg-(--ui-bg)/18 dark:bg-(--ui-bg)/10 dark:hover:bg-(--ui-bg)/16" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-star" class="size-3.5" />
                        </UButton>
                      </div>
                    </div>
                    <div class="min-w-0">
                      <div class="mb-1.5 flex items-center gap-2">
                        <div class="h-4 w-1 rounded-full bg-info/90" />
                        <span class="text-[11px] font-medium tracking-[0.18em] text-(--ui-text-inverted)/75 uppercase">ONB-118</span>
                      </div>
                      <h3 class="truncate text-lg font-semibold text-inverted dark:text-highlighted text-highlighted">Enterprise Onboarding Flow</h3>
                    </div>
                  </div>
                </div>
                <div class="space-y-4 p-5 dark:bg-gradient-to-b dark:from-[#202020] dark:to-[#1b1b1b]">
                  <div class="grid grid-cols-2 gap-x-4 gap-y-3">
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Cycle</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">Launch</span>
                        <span class="text-muted text-[11px] dark:text-dimmed">6 weeks</span>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Timeline health</span>
                      <span class="text-muted text-[11px] dark:text-dimmed">41 days left</span>
                    </div>
                    <div class="flex items-center gap-2.5">
                      <div class="h-1.5 flex-1 rounded-full bg-muted dark:bg-elevated">
                        <div class="h-full rounded-full bg-success" style="width:72%" />
                      </div>
                      <span class="text-highlighted text-sm font-semibold tabular-nums dark:text-default">72%</span>
                    </div>
                  </div>
                  <div class="border-(--ui-border)/60 grid grid-cols-2 gap-x-4 gap-y-3 border-t pt-3.5 dark:border-(--ui-text-inverted)/8 border-default">
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Due date</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">22 Feb 2026</span>
                      </div>
                      <span class="text-muted text-[11px] dark:text-dimmed">7 weeks</span>
                    </div>
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Tasks closed</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">5/14</span>
                      </div>
                      <span class="text-muted text-[11px] dark:text-dimmed">9 open tasks</span>
                    </div>
                  </div>
                </div>
              </UCard>
              <!-- Card 3: Claims Resolution Workspace -->
              <UCard class="border-(--ui-border)/70 group w-full overflow-hidden rounded-xl shadow-none transition-colors dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-[0_0_0_1px_color-mix(in_oklab,_var(--ui-bg)_3%,_transparent)]" :ui="{ body: 'contents' }">
                <div class="relative h-[160px] w-full overflow-hidden">
                  <img alt="" class="object-cover transition-transform duration-500 group-hover:scale-105" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/d600a2ed46371a78.png" loading="lazy" />
                  <div class="absolute inset-0 bg-gradient-to-t from-(--ui-bg-inverted)/70 via-(--ui-bg-inverted)/30 to-(--ui-bg-inverted)/5" />
                  <div class="absolute inset-0 flex flex-col justify-between px-5 pt-4 pb-4">
                    <div class="flex items-start justify-between gap-3">
                      <div class="flex items-center gap-2">
                        <UBadge color="neutral" variant="subtle" class="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium bg-success/20 text-success">
                          Active
                        </UBadge>
                      </div>
                      <div class="flex items-center gap-1.5">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-7 w-7 rounded-md border-0 bg-(--ui-bg)/12 text-inverted shadow-none hover:bg-(--ui-bg)/18 dark:bg-(--ui-bg)/10 dark:hover:bg-(--ui-bg)/16" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-link-2" class="size-3.5" />
                        </UButton>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-7 w-7 rounded-md border-0 bg-(--ui-bg)/12 text-inverted shadow-none hover:bg-(--ui-bg)/18 dark:bg-(--ui-bg)/10 dark:hover:bg-(--ui-bg)/16" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-star" class="size-3.5" />
                        </UButton>
                      </div>
                    </div>
                    <div class="min-w-0">
                      <div class="mb-1.5 flex items-center gap-2">
                        <div class="h-4 w-1 rounded-full bg-(--ui-bg-accented)/90" />
                        <span class="text-[11px] font-medium tracking-[0.18em] text-(--ui-text-inverted)/75 uppercase">CLM-084</span>
                      </div>
                      <h3 class="truncate text-lg font-semibold text-inverted dark:text-highlighted text-highlighted">Claims Resolution Workspace</h3>
                    </div>
                  </div>
                </div>
                <div class="space-y-4 p-5 dark:bg-gradient-to-b dark:from-[#202020] dark:to-[#1b1b1b]">
                  <div class="grid grid-cols-2 gap-x-4 gap-y-3">
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Cycle</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">Fix</span>
                        <span class="text-muted text-[11px] dark:text-dimmed">2 weeks</span>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Timeline health</span>
                      <span class="text-muted text-[11px] dark:text-dimmed">8 days left</span>
                    </div>
                    <div class="flex items-center gap-2.5">
                      <div class="h-1.5 flex-1 rounded-full bg-muted dark:bg-elevated">
                        <div class="h-full rounded-full bg-error" style="width:24%" />
                      </div>
                      <span class="text-highlighted text-sm font-semibold tabular-nums dark:text-default">24%</span>
                    </div>
                  </div>
                  <div class="border-(--ui-border)/60 grid grid-cols-2 gap-x-4 gap-y-3 border-t pt-3.5 dark:border-(--ui-text-inverted)/8 border-default">
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Due date</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">20 Jan 2026</span>
                      </div>
                      <span class="text-muted text-[11px] dark:text-dimmed">2 weeks</span>
                    </div>
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Tasks closed</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">3/9</span>
                      </div>
                      <span class="text-muted text-[11px] dark:text-dimmed">6 open tasks</span>
                    </div>
                  </div>
                </div>
              </UCard>
              <!-- Card 4: Retail Launch Readiness -->
              <UCard class="border-(--ui-border)/70 group w-full overflow-hidden rounded-xl shadow-none transition-colors dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-[0_0_0_1px_color-mix(in_oklab,_var(--ui-bg)_3%,_transparent)]" :ui="{ body: 'contents' }">
                <div class="relative h-[160px] w-full overflow-hidden">
                  <img alt="" class="object-cover transition-transform duration-500 group-hover:scale-105" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/6f8d482148578433.png" loading="lazy" />
                  <div class="absolute inset-0 bg-gradient-to-t from-(--ui-bg-inverted)/70 via-(--ui-bg-inverted)/30 to-(--ui-bg-inverted)/5" />
                  <div class="absolute inset-0 flex flex-col justify-between px-5 pt-4 pb-4">
                    <div class="flex items-start justify-between gap-3">
                      <div class="flex items-center gap-2">
                        <UBadge color="neutral" variant="subtle" class="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium bg-success/20 text-success">
                          Active
                        </UBadge>
                      </div>
                      <div class="flex items-center gap-1.5">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-7 w-7 rounded-md border-0 bg-(--ui-bg)/12 text-inverted shadow-none hover:bg-(--ui-bg)/18 dark:bg-(--ui-bg)/10 dark:hover:bg-(--ui-bg)/16" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-link-2" class="size-3.5" />
                        </UButton>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-7 w-7 rounded-md border-0 bg-(--ui-bg)/12 text-inverted shadow-none hover:bg-(--ui-bg)/18 dark:bg-(--ui-bg)/10 dark:hover:bg-(--ui-bg)/16" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-star" class="size-3.5" />
                        </UButton>
                      </div>
                    </div>
                    <div class="min-w-0">
                      <div class="mb-1.5 flex items-center gap-2">
                        <div class="h-4 w-1 rounded-full bg-success/90" />
                        <span class="text-[11px] font-medium tracking-[0.18em] text-(--ui-text-inverted)/75 uppercase">RTL-062</span>
                      </div>
                      <h3 class="truncate text-lg font-semibold text-inverted dark:text-highlighted text-highlighted">Retail Launch Readiness</h3>
                    </div>
                  </div>
                </div>
                <div class="space-y-4 p-5 dark:bg-gradient-to-b dark:from-[#202020] dark:to-[#1b1b1b]">
                  <div class="grid grid-cols-2 gap-x-4 gap-y-3">
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Cycle</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">Improvement</span>
                        <span class="text-muted text-[11px] dark:text-dimmed">3 weeks</span>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Timeline health</span>
                      <span class="text-muted text-[11px] dark:text-dimmed">52 days left</span>
                    </div>
                    <div class="flex items-center gap-2.5">
                      <div class="h-1.5 flex-1 rounded-full bg-muted dark:bg-elevated">
                        <div class="h-full rounded-full bg-success" style="width:85%" />
                      </div>
                      <span class="text-highlighted text-sm font-semibold tabular-nums dark:text-default">85%</span>
                    </div>
                  </div>
                  <div class="border-(--ui-border)/60 grid grid-cols-2 gap-x-4 gap-y-3 border-t pt-3.5 dark:border-(--ui-text-inverted)/8 border-default">
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Due date</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">3 Mar 2026</span>
                      </div>
                      <span class="text-muted text-[11px] dark:text-dimmed">8 weeks</span>
                    </div>
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Tasks closed</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">8/12</span>
                      </div>
                      <span class="text-muted text-[11px] dark:text-dimmed">4 open tasks</span>
                    </div>
                  </div>
                </div>
              </UCard>
              <!-- Card 5: Mobile Release Train -->
              <UCard class="border-(--ui-border)/70 group w-full overflow-hidden rounded-xl shadow-none transition-colors dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-[0_0_0_1px_color-mix(in_oklab,_var(--ui-bg)_3%,_transparent)]" :ui="{ body: 'contents' }">
                <div class="relative h-[160px] w-full overflow-hidden">
                  <img alt="" class="object-cover transition-transform duration-500 group-hover:scale-105" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/663d765bb5e7bed8.png" loading="lazy" />
                  <div class="absolute inset-0 bg-gradient-to-t from-(--ui-bg-inverted)/70 via-(--ui-bg-inverted)/30 to-(--ui-bg-inverted)/5" />
                  <div class="absolute inset-0 flex flex-col justify-between px-5 pt-4 pb-4">
                    <div class="flex items-start justify-between gap-3">
                      <div class="flex items-center gap-2">
                        <UBadge color="neutral" variant="subtle" class="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium bg-success/20 text-success">
                          Active
                        </UBadge>
                      </div>
                      <div class="flex items-center gap-1.5">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-7 w-7 rounded-md border-0 bg-(--ui-bg)/12 text-inverted shadow-none hover:bg-(--ui-bg)/18 dark:bg-(--ui-bg)/10 dark:hover:bg-(--ui-bg)/16" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-link-2" class="size-3.5" />
                        </UButton>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-7 w-7 rounded-md border-0 bg-(--ui-bg)/12 text-inverted shadow-none hover:bg-(--ui-bg)/18 dark:bg-(--ui-bg)/10 dark:hover:bg-(--ui-bg)/16" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-star" class="size-3.5" />
                        </UButton>
                      </div>
                    </div>
                    <div class="min-w-0">
                      <div class="mb-1.5 flex items-center gap-2">
                        <div class="h-4 w-1 rounded-full bg-info/90" />
                        <span class="text-[11px] font-medium tracking-[0.18em] text-(--ui-text-inverted)/75 uppercase">MOB-092</span>
                      </div>
                      <h3 class="truncate text-lg font-semibold text-inverted dark:text-highlighted text-highlighted">Mobile Release Train</h3>
                    </div>
                  </div>
                </div>
                <div class="space-y-4 p-5 dark:bg-gradient-to-b dark:from-[#202020] dark:to-[#1b1b1b]">
                  <div class="grid grid-cols-2 gap-x-4 gap-y-3">
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Cycle</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">Launch</span>
                        <span class="text-muted text-[11px] dark:text-dimmed">5 weeks</span>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Timeline health</span>
                      <span class="text-muted text-[11px] dark:text-dimmed">19 days left</span>
                    </div>
                    <div class="flex items-center gap-2.5">
                      <div class="h-1.5 flex-1 rounded-full bg-muted dark:bg-elevated">
                        <div class="h-full rounded-full bg-warning" style="width:45%" />
                      </div>
                      <span class="text-highlighted text-sm font-semibold tabular-nums dark:text-default">45%</span>
                    </div>
                  </div>
                  <div class="border-(--ui-border)/60 grid grid-cols-2 gap-x-4 gap-y-3 border-t pt-3.5 dark:border-(--ui-text-inverted)/8 border-default">
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Due date</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">1 Feb 2026</span>
                      </div>
                      <span class="text-muted text-[11px] dark:text-dimmed">4 weeks</span>
                    </div>
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Tasks closed</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">6/18</span>
                      </div>
                      <span class="text-muted text-[11px] dark:text-dimmed">12 open tasks</span>
                    </div>
                  </div>
                </div>
              </UCard>
              <!-- Card 6: Inventory Accuracy Audit -->
              <UCard class="border-(--ui-border)/70 group w-full overflow-hidden rounded-xl shadow-none transition-colors dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-[0_0_0_1px_color-mix(in_oklab,_var(--ui-bg)_3%,_transparent)]" :ui="{ body: 'contents' }">
                <div class="relative h-[160px] w-full overflow-hidden">
                  <img alt="" class="object-cover transition-transform duration-500 group-hover:scale-105" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/54844315f212da29.png" loading="lazy" />
                  <div class="absolute inset-0 bg-gradient-to-t from-(--ui-bg-inverted)/70 via-(--ui-bg-inverted)/30 to-(--ui-bg-inverted)/5" />
                  <div class="absolute inset-0 flex flex-col justify-between px-5 pt-4 pb-4">
                    <div class="flex items-start justify-between gap-3">
                      <div class="flex items-center gap-2">
                        <UBadge color="neutral" variant="subtle" class="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium bg-success/20 text-success">
                          Active
                        </UBadge>
                      </div>
                      <div class="flex items-center gap-1.5">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-7 w-7 rounded-md border-0 bg-(--ui-bg)/12 text-inverted shadow-none hover:bg-(--ui-bg)/18 dark:bg-(--ui-bg)/10 dark:hover:bg-(--ui-bg)/16" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-link-2" class="size-3.5" />
                        </UButton>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-7 w-7 rounded-md border-0 bg-(--ui-bg)/12 text-inverted shadow-none hover:bg-(--ui-bg)/18 dark:bg-(--ui-bg)/10 dark:hover:bg-(--ui-bg)/16" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-star" class="size-3.5" />
                        </UButton>
                      </div>
                    </div>
                    <div class="min-w-0">
                      <div class="mb-1.5 flex items-center gap-2">
                        <div class="h-4 w-1 rounded-full bg-success/90" />
                        <span class="text-[11px] font-medium tracking-[0.18em] text-(--ui-text-inverted)/75 uppercase">INV-176</span>
                      </div>
                      <h3 class="truncate text-lg font-semibold text-inverted dark:text-highlighted text-highlighted">Inventory Accuracy Audit</h3>
                    </div>
                  </div>
                </div>
                <div class="space-y-4 p-5 dark:bg-gradient-to-b dark:from-[#202020] dark:to-[#1b1b1b]">
                  <div class="grid grid-cols-2 gap-x-4 gap-y-3">
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Cycle</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">Maintenance</span>
                        <span class="text-muted text-[11px] dark:text-dimmed">8 weeks</span>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Timeline health</span>
                      <span class="text-muted text-[11px] dark:text-dimmed">64 days left</span>
                    </div>
                    <div class="flex items-center gap-2.5">
                      <div class="h-1.5 flex-1 rounded-full bg-muted dark:bg-elevated">
                        <div class="h-full rounded-full bg-success" style="width:91%" />
                      </div>
                      <span class="text-highlighted text-sm font-semibold tabular-nums dark:text-default">91%</span>
                    </div>
                  </div>
                  <div class="border-(--ui-border)/60 grid grid-cols-2 gap-x-4 gap-y-3 border-t pt-3.5 dark:border-(--ui-text-inverted)/8 border-default">
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Due date</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">18 Mar 2026</span>
                      </div>
                      <span class="text-muted text-[11px] dark:text-dimmed">10 weeks</span>
                    </div>
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Tasks closed</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">11/13</span>
                      </div>
                      <span class="text-muted text-[11px] dark:text-dimmed">2 open tasks</span>
                    </div>
                  </div>
                </div>
              </UCard>
              <!-- Card 7: Knowledge Base Migration -->
              <UCard class="border-(--ui-border)/70 group w-full overflow-hidden rounded-xl shadow-none transition-colors dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-[0_0_0_1px_color-mix(in_oklab,_var(--ui-bg)_3%,_transparent)]" :ui="{ body: 'contents' }">
                <div class="relative h-[160px] w-full overflow-hidden">
                  <img alt="" class="object-cover transition-transform duration-500 group-hover:scale-105" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/4c7474a0c6345c23.png" loading="lazy" />
                  <div class="absolute inset-0 bg-gradient-to-t from-(--ui-bg-inverted)/70 via-(--ui-bg-inverted)/30 to-(--ui-bg-inverted)/5" />
                  <div class="absolute inset-0 flex flex-col justify-between px-5 pt-4 pb-4">
                    <div class="flex items-start justify-between gap-3">
                      <div class="flex items-center gap-2">
                        <UBadge color="neutral" variant="subtle" class="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium bg-success/20 text-success">
                          Active
                        </UBadge>
                      </div>
                      <div class="flex items-center gap-1.5">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-7 w-7 rounded-md border-0 bg-(--ui-bg)/12 text-inverted shadow-none hover:bg-(--ui-bg)/18 dark:bg-(--ui-bg)/10 dark:hover:bg-(--ui-bg)/16" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-link-2" class="size-3.5" />
                        </UButton>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-7 w-7 rounded-md border-0 bg-(--ui-bg)/12 text-inverted shadow-none hover:bg-(--ui-bg)/18 dark:bg-(--ui-bg)/10 dark:hover:bg-(--ui-bg)/16" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-star" class="size-3.5" />
                        </UButton>
                      </div>
                    </div>
                    <div class="min-w-0">
                      <div class="mb-1.5 flex items-center gap-2">
                        <div class="h-4 w-1 rounded-full bg-secondary/90" />
                        <span class="text-[11px] font-medium tracking-[0.18em] text-(--ui-text-inverted)/75 uppercase">KB-057</span>
                      </div>
                      <h3 class="truncate text-lg font-semibold text-inverted dark:text-highlighted text-highlighted">Knowledge Base Migration</h3>
                    </div>
                  </div>
                </div>
                <div class="space-y-4 p-5 dark:bg-gradient-to-b dark:from-[#202020] dark:to-[#1b1b1b]">
                  <div class="grid grid-cols-2 gap-x-4 gap-y-3">
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Cycle</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">Improvement</span>
                        <span class="text-muted text-[11px] dark:text-dimmed">4 weeks</span>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Timeline health</span>
                      <span class="text-muted text-[11px] dark:text-dimmed">28 days left</span>
                    </div>
                    <div class="flex items-center gap-2.5">
                      <div class="h-1.5 flex-1 rounded-full bg-muted dark:bg-elevated">
                        <div class="h-full rounded-full bg-warning" style="width:66%" />
                      </div>
                      <span class="text-highlighted text-sm font-semibold tabular-nums dark:text-default">66%</span>
                    </div>
                  </div>
                  <div class="border-(--ui-border)/60 grid grid-cols-2 gap-x-4 gap-y-3 border-t pt-3.5 dark:border-(--ui-text-inverted)/8 border-default">
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Due date</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">8 Feb 2026</span>
                      </div>
                      <span class="text-muted text-[11px] dark:text-dimmed">5 weeks</span>
                    </div>
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Tasks closed</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">4/10</span>
                      </div>
                      <span class="text-muted text-[11px] dark:text-dimmed">6 open tasks</span>
                    </div>
                  </div>
                </div>
              </UCard>
              <!-- Card 8: Partner SLA Tracker -->
              <UCard class="border-(--ui-border)/70 group w-full overflow-hidden rounded-xl shadow-none transition-colors dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-[0_0_0_1px_color-mix(in_oklab,_var(--ui-bg)_3%,_transparent)]" :ui="{ body: 'contents' }">
                <div class="relative h-[160px] w-full overflow-hidden">
                  <img alt="" class="object-cover transition-transform duration-500 group-hover:scale-105" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/3d415530a4e0aff5.png" loading="lazy" />
                  <div class="absolute inset-0 bg-gradient-to-t from-(--ui-bg-inverted)/70 via-(--ui-bg-inverted)/30 to-(--ui-bg-inverted)/5" />
                  <div class="absolute inset-0 flex flex-col justify-between px-5 pt-4 pb-4">
                    <div class="flex items-start justify-between gap-3">
                      <div class="flex items-center gap-2">
                        <UBadge color="neutral" variant="subtle" class="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium bg-success/20 text-success">
                          Active
                        </UBadge>
                      </div>
                      <div class="flex items-center gap-1.5">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-7 w-7 rounded-md border-0 bg-(--ui-bg)/12 text-inverted shadow-none hover:bg-(--ui-bg)/18 dark:bg-(--ui-bg)/10 dark:hover:bg-(--ui-bg)/16" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-link-2" class="size-3.5" />
                        </UButton>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-7 w-7 rounded-md border-0 bg-(--ui-bg)/12 text-inverted shadow-none hover:bg-(--ui-bg)/18 dark:bg-(--ui-bg)/10 dark:hover:bg-(--ui-bg)/16" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-star" class="size-3.5" />
                        </UButton>
                      </div>
                    </div>
                    <div class="min-w-0">
                      <div class="mb-1.5 flex items-center gap-2">
                        <div class="h-4 w-1 rounded-full bg-secondary/90" />
                        <span class="text-[11px] font-medium tracking-[0.18em] text-(--ui-text-inverted)/75 uppercase">SLA-203</span>
                      </div>
                      <h3 class="truncate text-lg font-semibold text-inverted dark:text-highlighted text-highlighted">Partner SLA Tracker</h3>
                    </div>
                  </div>
                </div>
                <div class="space-y-4 p-5 dark:bg-gradient-to-b dark:from-[#202020] dark:to-[#1b1b1b]">
                  <div class="grid grid-cols-2 gap-x-4 gap-y-3">
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Cycle</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">Fix</span>
                        <span class="text-muted text-[11px] dark:text-dimmed">3 weeks</span>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Timeline health</span>
                      <span class="text-muted text-[11px] dark:text-dimmed">12 days left</span>
                    </div>
                    <div class="flex items-center gap-2.5">
                      <div class="h-1.5 flex-1 rounded-full bg-muted dark:bg-elevated">
                        <div class="h-full rounded-full bg-error" style="width:38%" />
                      </div>
                      <span class="text-highlighted text-sm font-semibold tabular-nums dark:text-default">38%</span>
                    </div>
                  </div>
                  <div class="border-(--ui-border)/60 grid grid-cols-2 gap-x-4 gap-y-3 border-t pt-3.5 dark:border-(--ui-text-inverted)/8 border-default">
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Due date</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">24 Jan 2026</span>
                      </div>
                      <span class="text-muted text-[11px] dark:text-dimmed">3 weeks</span>
                    </div>
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Tasks closed</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">2/7</span>
                      </div>
                      <span class="text-muted text-[11px] dark:text-dimmed">5 open tasks</span>
                    </div>
                  </div>
                </div>
              </UCard>
              <!-- Card 9: Hiring Pipeline Cleanup -->
              <UCard class="border-(--ui-border)/70 group w-full overflow-hidden rounded-xl shadow-none transition-colors dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-[0_0_0_1px_color-mix(in_oklab,_var(--ui-bg)_3%,_transparent)]" :ui="{ body: 'contents' }">
                <div class="relative h-[160px] w-full overflow-hidden">
                  <img alt="" class="object-cover transition-transform duration-500 group-hover:scale-105" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/b1ba4cbc553cbb71.png" loading="lazy" />
                  <div class="absolute inset-0 bg-gradient-to-t from-(--ui-bg-inverted)/70 via-(--ui-bg-inverted)/30 to-(--ui-bg-inverted)/5" />
                  <div class="absolute inset-0 flex flex-col justify-between px-5 pt-4 pb-4">
                    <div class="flex items-start justify-between gap-3">
                      <div class="flex items-center gap-2">
                        <UBadge color="neutral" variant="subtle" class="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium bg-success/20 text-success">
                          Active
                        </UBadge>
                      </div>
                      <div class="flex items-center gap-1.5">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-7 w-7 rounded-md border-0 bg-(--ui-bg)/12 text-inverted shadow-none hover:bg-(--ui-bg)/18 dark:bg-(--ui-bg)/10 dark:hover:bg-(--ui-bg)/16" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-link-2" class="size-3.5" />
                        </UButton>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-7 w-7 rounded-md border-0 bg-(--ui-bg)/12 text-inverted shadow-none hover:bg-(--ui-bg)/18 dark:bg-(--ui-bg)/10 dark:hover:bg-(--ui-bg)/16" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-star" class="size-3.5" />
                        </UButton>
                      </div>
                    </div>
                    <div class="min-w-0">
                      <div class="mb-1.5 flex items-center gap-2">
                        <div class="h-4 w-1 rounded-full bg-error/90" />
                        <span class="text-[11px] font-medium tracking-[0.18em] text-(--ui-text-inverted)/75 uppercase">HIR-074</span>
                      </div>
                      <h3 class="truncate text-lg font-semibold text-inverted dark:text-highlighted text-highlighted">Hiring Pipeline Cleanup</h3>
                    </div>
                  </div>
                </div>
                <div class="space-y-4 p-5 dark:bg-gradient-to-b dark:from-[#202020] dark:to-[#1b1b1b]">
                  <div class="grid grid-cols-2 gap-x-4 gap-y-3">
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Cycle</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">Maintenance</span>
                        <span class="text-muted text-[11px] dark:text-dimmed">6 weeks</span>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Timeline health</span>
                      <span class="text-muted text-[11px] dark:text-dimmed">45 days left</span>
                    </div>
                    <div class="flex items-center gap-2.5">
                      <div class="h-1.5 flex-1 rounded-full bg-muted dark:bg-elevated">
                        <div class="h-full rounded-full bg-success" style="width:78%" />
                      </div>
                      <span class="text-highlighted text-sm font-semibold tabular-nums dark:text-default">78%</span>
                    </div>
                  </div>
                  <div class="border-(--ui-border)/60 grid grid-cols-2 gap-x-4 gap-y-3 border-t pt-3.5 dark:border-(--ui-text-inverted)/8 border-default">
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Due date</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">28 Feb 2026</span>
                      </div>
                      <span class="text-muted text-[11px] dark:text-dimmed">7 weeks</span>
                    </div>
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Tasks closed</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">9/15</span>
                      </div>
                      <span class="text-muted text-[11px] dark:text-dimmed">6 open tasks</span>
                    </div>
                  </div>
                </div>
              </UCard>
              <!-- Card 10: Renewal Forecast Console -->
              <UCard class="border-(--ui-border)/70 group w-full overflow-hidden rounded-xl shadow-none transition-colors dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:shadow-[0_0_0_1px_color-mix(in_oklab,_var(--ui-bg)_3%,_transparent)]" :ui="{ body: 'contents' }">
                <div class="relative h-[160px] w-full overflow-hidden">
                  <img alt="" class="object-cover transition-transform duration-500 group-hover:scale-105" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/3df185b9ba4075c4.png" loading="lazy" />
                  <div class="absolute inset-0 bg-gradient-to-t from-(--ui-bg-inverted)/70 via-(--ui-bg-inverted)/30 to-(--ui-bg-inverted)/5" />
                  <div class="absolute inset-0 flex flex-col justify-between px-5 pt-4 pb-4">
                    <div class="flex items-start justify-between gap-3">
                      <div class="flex items-center gap-2">
                        <UBadge color="neutral" variant="subtle" class="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium bg-success/20 text-success">
                          Active
                        </UBadge>
                      </div>
                      <div class="flex items-center gap-1.5">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-7 w-7 rounded-md border-0 bg-(--ui-bg)/12 text-inverted shadow-none hover:bg-(--ui-bg)/18 dark:bg-(--ui-bg)/10 dark:hover:bg-(--ui-bg)/16" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-link-2" class="size-3.5" />
                        </UButton>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-7 w-7 rounded-md border-0 bg-(--ui-bg)/12 text-inverted shadow-none hover:bg-(--ui-bg)/18 dark:bg-(--ui-bg)/10 dark:hover:bg-(--ui-bg)/16" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-star" class="size-3.5" />
                        </UButton>
                      </div>
                    </div>
                    <div class="min-w-0">
                      <div class="mb-1.5 flex items-center gap-2">
                        <div class="h-4 w-1 rounded-full bg-info/90" />
                        <span class="text-[11px] font-medium tracking-[0.18em] text-(--ui-text-inverted)/75 uppercase">REN-133</span>
                      </div>
                      <h3 class="truncate text-lg font-semibold text-inverted dark:text-highlighted text-highlighted">Renewal Forecast Console</h3>
                    </div>
                  </div>
                </div>
                <div class="space-y-4 p-5 dark:bg-gradient-to-b dark:from-[#202020] dark:to-[#1b1b1b]">
                  <div class="grid grid-cols-2 gap-x-4 gap-y-3">
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Cycle</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">Launch</span>
                        <span class="text-muted text-[11px] dark:text-dimmed">2 weeks</span>
                      </div>
                    </div>
                  </div>
                  <div class="space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Timeline health</span>
                      <span class="text-muted text-[11px] dark:text-dimmed">5 days left</span>
                    </div>
                    <div class="flex items-center gap-2.5">
                      <div class="h-1.5 flex-1 rounded-full bg-muted dark:bg-elevated">
                        <div class="h-full rounded-full bg-error" style="width:15%" />
                      </div>
                      <span class="text-highlighted text-sm font-semibold tabular-nums dark:text-default">15%</span>
                    </div>
                  </div>
                  <div class="border-(--ui-border)/60 grid grid-cols-2 gap-x-4 gap-y-3 border-t pt-3.5 dark:border-(--ui-text-inverted)/8 border-default">
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Due date</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">17 Jan 2026</span>
                      </div>
                      <span class="text-muted text-[11px] dark:text-dimmed">2 weeks</span>
                    </div>
                    <div class="space-y-0.5">
                      <span class="text-muted text-[11px] font-medium dark:text-dimmed">Tasks closed</span>
                      <div class="flex items-baseline gap-1.5">
                        <span class="text-highlighted text-sm font-medium dark:text-default">7/20</span>
                      </div>
                      <span class="text-muted text-[11px] dark:text-dimmed">13 open tasks</span>
                    </div>
                  </div>
                </div>
              </UCard>
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
