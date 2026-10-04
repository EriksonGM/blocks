<!-- Page: /project-management/project-list-2 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Project List 2 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchProjects": "",
  "newestFirst": "Newest first"
})

const newestFirstOptions = [
  "Newest first",
  "Oldest first",
  "Name A-Z",
  "Name Z-A"
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/project-list-2">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main id="main-content" class="bg-default flex min-h-0 flex-1 flex-col overflow-hidden dark:bg-[radial-gradient(circle_at_top,color-mix(in_oklab,_var(--ui-bg)_3.5000000000000004%,_transparent),transparent_28%)]">
          <div class="border-b dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)]/95 border-default">
            <div class="flex min-h-14 items-center justify-between gap-3 px-4 sm:px-6">
              <div class="flex min-w-0 items-center gap-2.5 text-sm font-medium dark:text-highlighted">
                <UIcon name="i-lucide-folder-kanban" class="text-muted size-4 shrink-0 dark:text-dimmed" />
                <span class="truncate">Projects</span>
              </div>
              <div class="flex shrink-0 items-center gap-2">
                <UButton color="primary" variant="solid" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 rounded-md text-xs size-8 gap-1.5 p-0 sm:h-8 sm:w-auto sm:px-3" aria-label="Add Project" type="button" @click="openAction(&quot;Add Project&quot;)">
                  <UIcon name="i-lucide-plus" class="size-3.5" />
                  <span class="hidden sm:inline">Add Project</span>
                </UButton>
              </div>
            </div>
          </div>
          <div class="flex min-h-0 flex-1 flex-col overflow-hidden lg:flex-row">
            <aside class="w-full shrink-0 border-b px-4 py-4 sm:px-6 lg:w-[280px] lg:overflow-y-auto lg:border-r lg:border-b-0 lg:px-5 lg:py-5 dark:border-(--ui-text-inverted)/8 border-default">
              <div class="flex flex-col gap-3 lg:gap-5">
                <div class="relative">
                  <UIcon name="i-lucide-search" class="text-muted pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 dark:text-dimmed" />
                  <UInput v-model="form.searchProjects" type="text" placeholder="Search projects..." name="searchProjects" class="flex w-full md:text-sm h-10 rounded-xl pl-9 text-sm dark:border-(--ui-text-inverted)/10 dark:bg-(--ui-bg)/70 dark:text-highlighted dark:placeholder:text-dimmed" :ui="{ base: 'h-full' }" />
                </div>
                <div class="horizontal-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0 lg:pb-0">
                  <UButton color="neutral" variant="soft" class="flex h-9 items-center justify-between gap-3 rounded-xl text-left text-sm transition-colors lg:h-auto lg:py-2 text-muted hover:bg-(--ui-bg-muted)/60 hover:text-highlighted w-auto shrink-0 px-4 lg:w-full lg:px-3" aria-label="Browse all" type="button" @click="openAction(&quot;Browse all&quot;)">
                    <span>Browse all</span>
                  </UButton>
                  <UButton color="neutral" variant="soft" class="flex h-9 items-center justify-between gap-3 rounded-xl text-left text-sm transition-colors lg:h-auto lg:py-2 bg-muted text-highlighted w-auto shrink-0 px-4 lg:w-full lg:px-3" aria-label="Active" type="button" @click="openAction(&quot;Active&quot;)">
                    <span>Active</span>
                  </UButton>
                  <UButton color="neutral" variant="soft" class="flex h-9 items-center justify-between gap-3 rounded-xl text-left text-sm transition-colors lg:h-auto lg:py-2 text-muted hover:bg-(--ui-bg-muted)/60 hover:text-highlighted w-auto shrink-0 px-4 lg:w-full lg:px-3" aria-label="Archived" type="button" @click="openAction(&quot;Archived&quot;)">
                    <span>Archived</span>
                  </UButton>
                  <UButton color="neutral" variant="soft" class="flex h-9 items-center justify-between gap-3 rounded-xl text-left text-sm transition-colors lg:h-auto lg:py-2 text-muted hover:bg-(--ui-bg-muted)/60 hover:text-highlighted w-auto shrink-0 px-4 lg:w-full lg:px-3" aria-label="Recently updated" type="button" @click="openAction(&quot;Recently updated&quot;)">
                    <span>Recently updated</span>
                  </UButton>
                  <UButton color="neutral" variant="soft" class="flex h-9 items-center justify-between gap-3 rounded-xl text-left text-sm transition-colors lg:h-auto lg:py-2 text-muted hover:bg-(--ui-bg-muted)/60 hover:text-highlighted w-auto shrink-0 px-4 lg:w-full lg:px-3" aria-label="3-member teams" type="button" @click="openAction(&quot;3-member teams&quot;)">
                    <span>3-member teams</span>
                  </UButton>
                  <UButton color="neutral" variant="soft" class="flex h-9 items-center justify-between gap-3 rounded-xl text-left text-sm transition-colors lg:h-auto lg:py-2 text-muted hover:bg-(--ui-bg-muted)/60 hover:text-highlighted w-auto shrink-0 px-4 lg:w-full lg:px-3" aria-label="4+ member teams" type="button" @click="openAction(&quot;4+ member teams&quot;)">
                    <span>4+ member teams</span>
                  </UButton>
                </div>
              </div>
            </aside>
            <section class="flex min-h-0 flex-1 flex-col overflow-hidden">
              <div class="border-b px-4 py-4 sm:px-6 dark:border-(--ui-text-inverted)/8 border-default">
                <div class="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                  <div class="flex min-w-0 items-center gap-3">
                    <div class="min-w-0">
                      <h1 class="text-xl font-semibold tracking-tight text-highlighted">Projects</h1>
                      <p class="text-muted pt-1 text-sm">10projects in this view</p>
                      <p class="sr-only">A simple browse-first project surface with quick sidebar views.Browse curated views for your projects.</p>
                    </div>
                  </div>
                  <div class="flex min-w-0 flex-wrap items-center gap-2 sm:justify-end">
                    <USelect v-model="form.newestFirst" :items="newestFirstOptions" aria-label="Sort projects" class="ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between border px-3 py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-9 w-full gap-1.5 rounded-md shadow-none sm:w-[156px] border-default bg-default text-highlighted hover:bg-elevated hover:text-default" />
                  </div>
                </div>
              </div>
              <div class="flex-1 overflow-y-auto p-4 dark:bg-[linear-gradient(180deg,color-mix(in_oklab,_var(--ui-bg)_1%,_transparent),transparent_12%)]">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                  <!-- Card 1: Revenue Insights Revamp -->
                  <UCard class="dark:bg-default w-full cursor-pointer overflow-hidden rounded-2xl shadow-none transition-shadow focus-within:outline-none hover:shadow-lg/5 max-w-none" :ui="{ body: 'contents' }">
                    <div class="p-4">
                      <div class="flex items-center justify-between gap-3">
                        <div class="flex min-w-0 items-center gap-2">
                          <div class="bg-muted text-muted flex size-8 shrink-0 items-center justify-center rounded-lg">
                            <UIcon name="i-lucide-panels-top-left" class="size-4" />
                          </div>
                          <span class="text-muted truncate text-xs font-medium tracking-[0.14em] uppercase">REV-241</span>
                        </div>
                        <div class="inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium border-primary/20 bg-primary/5 text-highlighted">
                          <span class="size-1.5 rounded-full bg-primary" />
                          Active
                        </div>
                      </div>
                      <div class="mt-3 min-w-0">
                        <p class="text-highlighted text-[15px] leading-6 font-semibold text-highlighted">Revenue Insights Revamp</p>
                        <p class="text-muted mt-1 truncate text-sm">Improvement • 4 weeks</p>
                      </div>
                      <p class="text-muted mt-3 line-clamp-2 min-h-10 text-sm leading-5">Consolidate reporting, exception tracking, and approval notes into one operating surface for the weekly revenue review.</p>
                      <div class="text-muted mt-2 flex items-center justify-between gap-3 text-sm">
                        <div class="flex min-w-0 items-center gap-2">
                          <UIcon name="i-lucide-calendar-days" class="size-4 shrink-0" />
                          <span class="truncate">14 Feb 2026</span>
                        </div>
                        <div class="flex shrink-0 -space-x-2">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Riya Sharma">
                            <img class="aspect-square h-full w-full" alt="Riya Sharma" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                          </span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Ben Lewis">
                            <img class="aspect-square h-full w-full" alt="Ben Lewis" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                          </span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Ava Reed">
                            <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                          </span>
                        </div>
                      </div>
                      <div class="border-(--ui-border)/60 mt-4 border-t border-default" />
                      <div class="mt-3">
                        <div class="flex items-center justify-between gap-3 text-sm">
                          <span class="text-highlighted font-medium">58%</span>
                          <span class="text-muted text-xs tabular-nums">1/11 done · 10 open</span>
                        </div>
                        <div class="bg-muted mt-2 h-1.5 overflow-hidden rounded-full">
                          <div class="h-full rounded-full" style="width:58%;background-color:var(--ui-text-highlighted)" />
                        </div>
                      </div>
                    </div>
                  </UCard>
                  <!-- Card 2: Enterprise Onboarding Flow -->
                  <UCard class="dark:bg-default w-full cursor-pointer overflow-hidden rounded-2xl shadow-none transition-shadow focus-within:outline-none hover:shadow-lg/5 max-w-none" :ui="{ body: 'contents' }">
                    <div class="p-4">
                      <div class="flex items-center justify-between gap-3">
                        <div class="flex min-w-0 items-center gap-2">
                          <div class="bg-muted text-muted flex size-8 shrink-0 items-center justify-center rounded-lg">
                            <UIcon name="i-lucide-panels-top-left" class="size-4" />
                          </div>
                          <span class="text-muted truncate text-xs font-medium tracking-[0.14em] uppercase">ONB-118</span>
                        </div>
                        <div class="inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium border-primary/20 bg-primary/5 text-highlighted">
                          <span class="size-1.5 rounded-full bg-primary" />
                          Active
                        </div>
                      </div>
                      <div class="mt-3 min-w-0">
                        <p class="text-highlighted text-[15px] leading-6 font-semibold text-highlighted">Enterprise Onboarding Flow</p>
                        <p class="text-muted mt-1 truncate text-sm">Launch • 6 weeks</p>
                      </div>
                      <p class="text-muted mt-3 line-clamp-2 min-h-10 text-sm leading-5">Reduce activation time for new enterprise accounts with clearer handoffs, owner visibility, and unblock queues.</p>
                      <div class="text-muted mt-2 flex items-center justify-between gap-3 text-sm">
                        <div class="flex min-w-0 items-center gap-2">
                          <UIcon name="i-lucide-calendar-days" class="size-4 shrink-0" />
                          <span class="truncate">22 Feb 2026</span>
                        </div>
                        <div class="flex shrink-0 -space-x-2">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Maya Rao">
                            <img class="aspect-square h-full w-full" alt="Maya Rao" src="/reference/247ac7c76922347b.png" loading="lazy" />
                          </span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Owen Lee">
                            <img class="aspect-square h-full w-full" alt="Owen Lee" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                          </span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Chloe Park">
                            <img class="aspect-square h-full w-full" alt="Chloe Park" src="/reference/62828bc2a489837e.png" loading="lazy" />
                          </span>
                          <span class="border-(--ui-bg) bg-muted text-muted dark:border-(--ui-bg) grid size-7 place-items-center rounded-full border-2 text-[10px] font-medium">+1</span>
                        </div>
                      </div>
                      <div class="border-(--ui-border)/60 mt-4 border-t border-default" />
                      <div class="mt-3">
                        <div class="flex items-center justify-between gap-3 text-sm">
                          <span class="text-highlighted font-medium">72%</span>
                          <span class="text-muted text-xs tabular-nums">5/14 done · 9 open</span>
                        </div>
                        <div class="bg-muted mt-2 h-1.5 overflow-hidden rounded-full">
                          <div class="h-full rounded-full" style="width:72%;background-color:var(--ui-primary)" />
                        </div>
                      </div>
                    </div>
                  </UCard>
                  <!-- Card 3: Claims Resolution Workspace -->
                  <UCard class="dark:bg-default w-full cursor-pointer overflow-hidden rounded-2xl shadow-none transition-shadow focus-within:outline-none hover:shadow-lg/5 max-w-none" :ui="{ body: 'contents' }">
                    <div class="p-4">
                      <div class="flex items-center justify-between gap-3">
                        <div class="flex min-w-0 items-center gap-2">
                          <div class="bg-muted text-muted flex size-8 shrink-0 items-center justify-center rounded-lg">
                            <UIcon name="i-lucide-panels-top-left" class="size-4" />
                          </div>
                          <span class="text-muted truncate text-xs font-medium tracking-[0.14em] uppercase">CLM-084</span>
                        </div>
                        <div class="inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium border-primary/20 bg-primary/5 text-highlighted">
                          <span class="size-1.5 rounded-full bg-primary" />
                          Active
                        </div>
                      </div>
                      <div class="mt-3 min-w-0">
                        <p class="text-highlighted text-[15px] leading-6 font-semibold text-highlighted">Claims Resolution Workspace</p>
                        <p class="text-muted mt-1 truncate text-sm">Fix • 2 weeks</p>
                      </div>
                      <p class="text-muted mt-3 line-clamp-2 min-h-10 text-sm leading-5">Bring case intake, review steps, and escalation notes together so the support and finance teams stop working from separate trackers.</p>
                      <div class="text-muted mt-2 flex items-center justify-between gap-3 text-sm">
                        <div class="flex min-w-0 items-center gap-2">
                          <UIcon name="i-lucide-calendar-days" class="size-4 shrink-0" />
                          <span class="truncate">20 Jan 2026</span>
                        </div>
                        <div class="flex shrink-0 -space-x-2">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Kabir Sethi">
                            <img class="aspect-square h-full w-full" alt="Kabir Sethi" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                          </span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Dina Moss">
                            <img class="aspect-square h-full w-full" alt="Dina Moss" src="/reference/ada84674117f0188.png" loading="lazy" />
                          </span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Leo Park">
                            <img class="aspect-square h-full w-full" alt="Leo Park" src="/reference/6f77b9b90a56c3cc.png" loading="lazy" />
                          </span>
                        </div>
                      </div>
                      <div class="border-(--ui-border)/60 mt-4 border-t border-default" />
                      <div class="mt-3">
                        <div class="flex items-center justify-between gap-3 text-sm">
                          <span class="text-highlighted font-medium">24%</span>
                          <span class="text-muted text-xs tabular-nums">3/9 done · 6 open</span>
                        </div>
                        <div class="bg-muted mt-2 h-1.5 overflow-hidden rounded-full">
                          <div class="h-full rounded-full" style="width:24%;background-color:var(--destructive)" />
                        </div>
                      </div>
                    </div>
                  </UCard>
                  <!-- Card 4: Retail Launch Readiness -->
                  <UCard class="dark:bg-default w-full cursor-pointer overflow-hidden rounded-2xl shadow-none transition-shadow focus-within:outline-none hover:shadow-lg/5 max-w-none" :ui="{ body: 'contents' }">
                    <div class="p-4">
                      <div class="flex items-center justify-between gap-3">
                        <div class="flex min-w-0 items-center gap-2">
                          <div class="bg-muted text-muted flex size-8 shrink-0 items-center justify-center rounded-lg">
                            <UIcon name="i-lucide-panels-top-left" class="size-4" />
                          </div>
                          <span class="text-muted truncate text-xs font-medium tracking-[0.14em] uppercase">RTL-062</span>
                        </div>
                        <div class="inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium border-primary/20 bg-primary/5 text-highlighted">
                          <span class="size-1.5 rounded-full bg-primary" />
                          Active
                        </div>
                      </div>
                      <div class="mt-3 min-w-0">
                        <p class="text-highlighted text-[15px] leading-6 font-semibold text-highlighted">Retail Launch Readiness</p>
                        <p class="text-muted mt-1 truncate text-sm">Improvement • 3 weeks</p>
                      </div>
                      <p class="text-muted mt-3 line-clamp-2 min-h-10 text-sm leading-5">Coordinate launch blockers, merchandising deadlines, and store feedback ahead of the summer retail rollout.</p>
                      <div class="text-muted mt-2 flex items-center justify-between gap-3 text-sm">
                        <div class="flex min-w-0 items-center gap-2">
                          <UIcon name="i-lucide-calendar-days" class="size-4 shrink-0" />
                          <span class="truncate">3 Mar 2026</span>
                        </div>
                        <div class="flex shrink-0 -space-x-2">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Sofia Ahmed">
                            <img class="aspect-square h-full w-full" alt="Sofia Ahmed" src="/reference/ee2ed71ab799f5e3.png" loading="lazy" />
                          </span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Ava Reed">
                            <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                          </span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Tia West">
                            <img class="aspect-square h-full w-full" alt="Tia West" src="/reference/01c20c8256a0754a.png" loading="lazy" />
                          </span>
                        </div>
                      </div>
                      <div class="border-(--ui-border)/60 mt-4 border-t border-default" />
                      <div class="mt-3">
                        <div class="flex items-center justify-between gap-3 text-sm">
                          <span class="text-highlighted font-medium">85%</span>
                          <span class="text-muted text-xs tabular-nums">8/12 done · 4 open</span>
                        </div>
                        <div class="bg-muted mt-2 h-1.5 overflow-hidden rounded-full">
                          <div class="h-full rounded-full" style="width:85%;background-color:var(--ui-primary)" />
                        </div>
                      </div>
                    </div>
                  </UCard>
                  <!-- Card 5: Mobile Release Train -->
                  <UCard class="dark:bg-default w-full cursor-pointer overflow-hidden rounded-2xl shadow-none transition-shadow focus-within:outline-none hover:shadow-lg/5 max-w-none" :ui="{ body: 'contents' }">
                    <div class="p-4">
                      <div class="flex items-center justify-between gap-3">
                        <div class="flex min-w-0 items-center gap-2">
                          <div class="bg-muted text-muted flex size-8 shrink-0 items-center justify-center rounded-lg">
                            <UIcon name="i-lucide-panels-top-left" class="size-4" />
                          </div>
                          <span class="text-muted truncate text-xs font-medium tracking-[0.14em] uppercase">MOB-092</span>
                        </div>
                        <div class="inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium border-primary/20 bg-primary/5 text-highlighted">
                          <span class="size-1.5 rounded-full bg-primary" />
                          Active
                        </div>
                      </div>
                      <div class="mt-3 min-w-0">
                        <p class="text-highlighted text-[15px] leading-6 font-semibold text-highlighted">Mobile Release Train</p>
                        <p class="text-muted mt-1 truncate text-sm">Launch • 5 weeks</p>
                      </div>
                      <p class="text-muted mt-3 line-clamp-2 min-h-10 text-sm leading-5">Track release scope, QA sign-off, and ship-room notes across the next three mobile drops without losing ownership.</p>
                      <div class="text-muted mt-2 flex items-center justify-between gap-3 text-sm">
                        <div class="flex min-w-0 items-center gap-2">
                          <UIcon name="i-lucide-calendar-days" class="size-4 shrink-0" />
                          <span class="truncate">1 Feb 2026</span>
                        </div>
                        <div class="flex shrink-0 -space-x-2">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Ethan Cole">
                            <img class="aspect-square h-full w-full" alt="Ethan Cole" src="/reference/0a5fda67e048ade8.png" loading="lazy" />
                          </span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Nina Brooks">
                            <img class="aspect-square h-full w-full" alt="Nina Brooks" src="/reference/c856dbf3620c8188.png" loading="lazy" />
                          </span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Jules Hart">
                            <img class="aspect-square h-full w-full" alt="Jules Hart" src="/reference/4759e542002c0be5.png" loading="lazy" />
                          </span>
                          <span class="border-(--ui-bg) bg-muted text-muted dark:border-(--ui-bg) grid size-7 place-items-center rounded-full border-2 text-[10px] font-medium">+1</span>
                        </div>
                      </div>
                      <div class="border-(--ui-border)/60 mt-4 border-t border-default" />
                      <div class="mt-3">
                        <div class="flex items-center justify-between gap-3 text-sm">
                          <span class="text-highlighted font-medium">45%</span>
                          <span class="text-muted text-xs tabular-nums">6/18 done · 12 open</span>
                        </div>
                        <div class="bg-muted mt-2 h-1.5 overflow-hidden rounded-full">
                          <div class="h-full rounded-full" style="width:45%;background-color:var(--ui-text-highlighted)" />
                        </div>
                      </div>
                    </div>
                  </UCard>
                  <!-- Card 6: Inventory Accuracy Audit -->
                  <UCard class="dark:bg-default w-full cursor-pointer overflow-hidden rounded-2xl shadow-none transition-shadow focus-within:outline-none hover:shadow-lg/5 max-w-none" :ui="{ body: 'contents' }">
                    <div class="p-4">
                      <div class="flex items-center justify-between gap-3">
                        <div class="flex min-w-0 items-center gap-2">
                          <div class="bg-muted text-muted flex size-8 shrink-0 items-center justify-center rounded-lg">
                            <UIcon name="i-lucide-panels-top-left" class="size-4" />
                          </div>
                          <span class="text-muted truncate text-xs font-medium tracking-[0.14em] uppercase">INV-176</span>
                        </div>
                        <div class="inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium border-primary/20 bg-primary/5 text-highlighted">
                          <span class="size-1.5 rounded-full bg-primary" />
                          Active
                        </div>
                      </div>
                      <div class="mt-3 min-w-0">
                        <p class="text-highlighted text-[15px] leading-6 font-semibold text-highlighted">Inventory Accuracy Audit</p>
                        <p class="text-muted mt-1 truncate text-sm">Maintenance • 8 weeks</p>
                      </div>
                      <p class="text-muted mt-3 line-clamp-2 min-h-10 text-sm leading-5">Close the gap between warehouse counts and storefront availability with a focused audit stream for the highest-variance SKUs.</p>
                      <div class="text-muted mt-2 flex items-center justify-between gap-3 text-sm">
                        <div class="flex min-w-0 items-center gap-2">
                          <UIcon name="i-lucide-calendar-days" class="size-4 shrink-0" />
                          <span class="truncate">18 Mar 2026</span>
                        </div>
                        <div class="flex shrink-0 -space-x-2">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Harper Singh">
                            <img class="aspect-square h-full w-full" alt="Harper Singh" src="/reference/e92f665d5ff7fc07.png" loading="lazy" />
                          </span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Victor Hale">
                            <img class="aspect-square h-full w-full" alt="Victor Hale" src="/reference/146332adc3a2c901.png" loading="lazy" />
                          </span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Ben Lewis">
                            <img class="aspect-square h-full w-full" alt="Ben Lewis" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                          </span>
                        </div>
                      </div>
                      <div class="border-(--ui-border)/60 mt-4 border-t border-default" />
                      <div class="mt-3">
                        <div class="flex items-center justify-between gap-3 text-sm">
                          <span class="text-highlighted font-medium">91%</span>
                          <span class="text-muted text-xs tabular-nums">11/13 done · 2 open</span>
                        </div>
                        <div class="bg-muted mt-2 h-1.5 overflow-hidden rounded-full">
                          <div class="h-full rounded-full" style="width:91%;background-color:var(--ui-primary)" />
                        </div>
                      </div>
                    </div>
                  </UCard>
                  <!-- Card 7: Knowledge Base Migration -->
                  <UCard class="dark:bg-default w-full cursor-pointer overflow-hidden rounded-2xl shadow-none transition-shadow focus-within:outline-none hover:shadow-lg/5 max-w-none" :ui="{ body: 'contents' }">
                    <div class="p-4">
                      <div class="flex items-center justify-between gap-3">
                        <div class="flex min-w-0 items-center gap-2">
                          <div class="bg-muted text-muted flex size-8 shrink-0 items-center justify-center rounded-lg">
                            <UIcon name="i-lucide-panels-top-left" class="size-4" />
                          </div>
                          <span class="text-muted truncate text-xs font-medium tracking-[0.14em] uppercase">KB-057</span>
                        </div>
                        <div class="inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium border-primary/20 bg-primary/5 text-highlighted">
                          <span class="size-1.5 rounded-full bg-primary" />
                          Active
                        </div>
                      </div>
                      <div class="mt-3 min-w-0">
                        <p class="text-highlighted text-[15px] leading-6 font-semibold text-highlighted">Knowledge Base Migration</p>
                        <p class="text-muted mt-1 truncate text-sm">Improvement • 4 weeks</p>
                      </div>
                      <p class="text-muted mt-3 line-clamp-2 min-h-10 text-sm leading-5">Move support guides into the new publishing workflow with clean ownership, review checkpoints, and release-linked updates.</p>
                      <div class="text-muted mt-2 flex items-center justify-between gap-3 text-sm">
                        <div class="flex min-w-0 items-center gap-2">
                          <UIcon name="i-lucide-calendar-days" class="size-4 shrink-0" />
                          <span class="truncate">8 Feb 2026</span>
                        </div>
                        <div class="flex shrink-0 -space-x-2">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Chloe Park">
                            <img class="aspect-square h-full w-full" alt="Chloe Park" src="/reference/62828bc2a489837e.png" loading="lazy" />
                          </span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Maya Rao">
                            <img class="aspect-square h-full w-full" alt="Maya Rao" src="/reference/247ac7c76922347b.png" loading="lazy" />
                          </span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Ava Reed">
                            <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                          </span>
                        </div>
                      </div>
                      <div class="border-(--ui-border)/60 mt-4 border-t border-default" />
                      <div class="mt-3">
                        <div class="flex items-center justify-between gap-3 text-sm">
                          <span class="text-highlighted font-medium">66%</span>
                          <span class="text-muted text-xs tabular-nums">4/10 done · 6 open</span>
                        </div>
                        <div class="bg-muted mt-2 h-1.5 overflow-hidden rounded-full">
                          <div class="h-full rounded-full" style="width:66%;background-color:var(--ui-text-highlighted)" />
                        </div>
                      </div>
                    </div>
                  </UCard>
                  <!-- Card 8: Partner SLA Tracker -->
                  <UCard class="dark:bg-default w-full cursor-pointer overflow-hidden rounded-2xl shadow-none transition-shadow focus-within:outline-none hover:shadow-lg/5 max-w-none" :ui="{ body: 'contents' }">
                    <div class="p-4">
                      <div class="flex items-center justify-between gap-3">
                        <div class="flex min-w-0 items-center gap-2">
                          <div class="bg-muted text-muted flex size-8 shrink-0 items-center justify-center rounded-lg">
                            <UIcon name="i-lucide-panels-top-left" class="size-4" />
                          </div>
                          <span class="text-muted truncate text-xs font-medium tracking-[0.14em] uppercase">SLA-203</span>
                        </div>
                        <div class="inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium border-primary/20 bg-primary/5 text-highlighted">
                          <span class="size-1.5 rounded-full bg-primary" />
                          Active
                        </div>
                      </div>
                      <div class="mt-3 min-w-0">
                        <p class="text-highlighted text-[15px] leading-6 font-semibold text-highlighted">Partner SLA Tracker</p>
                        <p class="text-muted mt-1 truncate text-sm">Fix • 3 weeks</p>
                      </div>
                      <p class="text-muted mt-3 line-clamp-2 min-h-10 text-sm leading-5">Create a shared tracker for partner response commitments, renewal risk, and the exceptions that need follow-up each week.</p>
                      <div class="text-muted mt-2 flex items-center justify-between gap-3 text-sm">
                        <div class="flex min-w-0 items-center gap-2">
                          <UIcon name="i-lucide-calendar-days" class="size-4 shrink-0" />
                          <span class="truncate">24 Jan 2026</span>
                        </div>
                        <div class="flex shrink-0 -space-x-2">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Owen Lee">
                            <img class="aspect-square h-full w-full" alt="Owen Lee" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                          </span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Dina Moss">
                            <img class="aspect-square h-full w-full" alt="Dina Moss" src="/reference/ada84674117f0188.png" loading="lazy" />
                          </span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Kabir Sethi">
                            <img class="aspect-square h-full w-full" alt="Kabir Sethi" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                          </span>
                        </div>
                      </div>
                      <div class="border-(--ui-border)/60 mt-4 border-t border-default" />
                      <div class="mt-3">
                        <div class="flex items-center justify-between gap-3 text-sm">
                          <span class="text-highlighted font-medium">38%</span>
                          <span class="text-muted text-xs tabular-nums">2/7 done · 5 open</span>
                        </div>
                        <div class="bg-muted mt-2 h-1.5 overflow-hidden rounded-full">
                          <div class="h-full rounded-full" style="width:38%;background-color:var(--destructive)" />
                        </div>
                      </div>
                    </div>
                  </UCard>
                  <!-- Card 9: Hiring Pipeline Cleanup -->
                  <UCard class="dark:bg-default w-full cursor-pointer overflow-hidden rounded-2xl shadow-none transition-shadow focus-within:outline-none hover:shadow-lg/5 max-w-none" :ui="{ body: 'contents' }">
                    <div class="p-4">
                      <div class="flex items-center justify-between gap-3">
                        <div class="flex min-w-0 items-center gap-2">
                          <div class="bg-muted text-muted flex size-8 shrink-0 items-center justify-center rounded-lg">
                            <UIcon name="i-lucide-panels-top-left" class="size-4" />
                          </div>
                          <span class="text-muted truncate text-xs font-medium tracking-[0.14em] uppercase">HIR-074</span>
                        </div>
                        <div class="inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium border-primary/20 bg-primary/5 text-highlighted">
                          <span class="size-1.5 rounded-full bg-primary" />
                          Active
                        </div>
                      </div>
                      <div class="mt-3 min-w-0">
                        <p class="text-highlighted text-[15px] leading-6 font-semibold text-highlighted">Hiring Pipeline Cleanup</p>
                        <p class="text-muted mt-1 truncate text-sm">Maintenance • 6 weeks</p>
                      </div>
                      <p class="text-muted mt-3 line-clamp-2 min-h-10 text-sm leading-5">Standardize interview stages, recruiter notes, and decision handoffs so open roles stop stalling between reviews.</p>
                      <div class="text-muted mt-2 flex items-center justify-between gap-3 text-sm">
                        <div class="flex min-w-0 items-center gap-2">
                          <UIcon name="i-lucide-calendar-days" class="size-4 shrink-0" />
                          <span class="truncate">28 Feb 2026</span>
                        </div>
                        <div class="flex shrink-0 -space-x-2">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Sofia Ahmed">
                            <img class="aspect-square h-full w-full" alt="Sofia Ahmed" src="/reference/ee2ed71ab799f5e3.png" loading="lazy" />
                          </span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Riya Sharma">
                            <img class="aspect-square h-full w-full" alt="Riya Sharma" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                          </span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Harper Singh">
                            <img class="aspect-square h-full w-full" alt="Harper Singh" src="/reference/e92f665d5ff7fc07.png" loading="lazy" />
                          </span>
                        </div>
                      </div>
                      <div class="border-(--ui-border)/60 mt-4 border-t border-default" />
                      <div class="mt-3">
                        <div class="flex items-center justify-between gap-3 text-sm">
                          <span class="text-highlighted font-medium">78%</span>
                          <span class="text-muted text-xs tabular-nums">9/15 done · 6 open</span>
                        </div>
                        <div class="bg-muted mt-2 h-1.5 overflow-hidden rounded-full">
                          <div class="h-full rounded-full" style="width:78%;background-color:var(--ui-primary)" />
                        </div>
                      </div>
                    </div>
                  </UCard>
                  <!-- Card 10: Renewal Forecast Console -->
                  <UCard class="dark:bg-default w-full cursor-pointer overflow-hidden rounded-2xl shadow-none transition-shadow focus-within:outline-none hover:shadow-lg/5 max-w-none" :ui="{ body: 'contents' }">
                    <div class="p-4">
                      <div class="flex items-center justify-between gap-3">
                        <div class="flex min-w-0 items-center gap-2">
                          <div class="bg-muted text-muted flex size-8 shrink-0 items-center justify-center rounded-lg">
                            <UIcon name="i-lucide-panels-top-left" class="size-4" />
                          </div>
                          <span class="text-muted truncate text-xs font-medium tracking-[0.14em] uppercase">REN-133</span>
                        </div>
                        <div class="inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium border-primary/20 bg-primary/5 text-highlighted">
                          <span class="size-1.5 rounded-full bg-primary" />
                          Active
                        </div>
                      </div>
                      <div class="mt-3 min-w-0">
                        <p class="text-highlighted text-[15px] leading-6 font-semibold text-highlighted">Renewal Forecast Console</p>
                        <p class="text-muted mt-1 truncate text-sm">Launch • 2 weeks</p>
                      </div>
                      <p class="text-muted mt-3 line-clamp-2 min-h-10 text-sm leading-5">Give account teams one place to review upcoming renewals, pricing changes, and intervention plans before quarter close.</p>
                      <div class="text-muted mt-2 flex items-center justify-between gap-3 text-sm">
                        <div class="flex min-w-0 items-center gap-2">
                          <UIcon name="i-lucide-calendar-days" class="size-4 shrink-0" />
                          <span class="truncate">17 Jan 2026</span>
                        </div>
                        <div class="flex shrink-0 -space-x-2">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Ben Lewis">
                            <img class="aspect-square h-full w-full" alt="Ben Lewis" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                          </span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Victor Hale">
                            <img class="aspect-square h-full w-full" alt="Victor Hale" src="/reference/146332adc3a2c901.png" loading="lazy" />
                          </span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) dark:border-(--ui-bg) size-7 border-2" title="Maya Rao">
                            <img class="aspect-square h-full w-full" alt="Maya Rao" src="/reference/247ac7c76922347b.png" loading="lazy" />
                          </span>
                        </div>
                      </div>
                      <div class="border-(--ui-border)/60 mt-4 border-t border-default" />
                      <div class="mt-3">
                        <div class="flex items-center justify-between gap-3 text-sm">
                          <span class="text-highlighted font-medium">15%</span>
                          <span class="text-muted text-xs tabular-nums">7/20 done · 13 open</span>
                        </div>
                        <div class="bg-muted mt-2 h-1.5 overflow-hidden rounded-full">
                          <div class="h-full rounded-full" style="width:15%;background-color:var(--destructive)" />
                        </div>
                      </div>
                    </div>
                  </UCard>
                  <UButton color="neutral" variant="outline" class="border-(--ui-border)/60 bg-default text-muted hover:border-(--ui-border)/80 hover:text-highlighted flex min-h-[180px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed p-6 text-center text-sm transition-colors hover:border-solid border-default" aria-label="Create new project" type="button" @click="openAction(&quot;Create new project&quot;)">
                    <UIcon name="i-lucide-plus" class="mb-2 size-5" />
                    Create new project
                  </UButton>
                </div>
              </div>
            </section>
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
