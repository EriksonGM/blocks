<!-- Page: /project-management/team-list-3 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Team List 3 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchTasks": ""
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/team-list-3">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main id="main-content" class="bg-default flex min-h-0 flex-1 flex-col overflow-hidden">
          <div class="border-b bg-default dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)] border-default">
            <div class="px-4 pt-5 sm:px-6">
              <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p class="text-sm text-muted dark:text-muted">Teams</p>
                  <h1 class="mt-2 text-4xl font-semibold tracking-tight text-highlighted dark:text-highlighted text-highlighted">Team Tasks</h1>
                </div>
                <div class="flex flex-wrap gap-2">
                  <UButton color="primary" variant="solid" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2 gap-2" aria-label="New Member" type="button" @click="openAction(&quot;New Member&quot;)">
                    <UIcon name="i-lucide-user-plus" class="size-4" />
                    New Member
                  </UButton>
                </div>
              </div>
              <div class="mt-6 flex gap-6 overflow-x-auto text-sm">
                <UButton color="neutral" variant="outline" class="flex shrink-0 items-center gap-2 border-b-2 px-0 pb-3 transition hover:text-highlighted dark:hover:text-highlighted border-accented text-highlighted dark:border-default dark:text-highlighted" aria-label="Workload" type="button" @click="openAction(&quot;Workload&quot;)">
                  <UIcon name="i-lucide-users-round" class="size-4" />
                  Workload
                </UButton>
                <UButton color="neutral" variant="outline" class="flex shrink-0 items-center gap-2 border-b-2 px-0 pb-3 text-muted transition hover:text-highlighted dark:text-muted dark:hover:text-highlighted border-transparent" aria-label="Departments" type="button" @click="openAction(&quot;Departments&quot;)">
                  <UIcon name="i-lucide-layout-grid" class="size-4" />
                  Departments
                </UButton>
                <UButton color="neutral" variant="outline" class="flex shrink-0 items-center gap-2 border-b-2 px-0 pb-3 text-muted transition hover:text-highlighted dark:text-muted dark:hover:text-highlighted border-transparent" aria-label="Task pool" type="button" @click="openAction(&quot;Task pool&quot;)">
                  <UIcon name="i-lucide-list-todo" class="size-4" />
                  Task pool
                </UButton>
              </div>
            </div>
          </div>
          <section class="flex min-h-0 flex-1 flex-col overflow-hidden bg-(--ui-bg)/80 dark:bg-[var(--ui-bg-inverted)]">
            <div class="grid gap-3 border-b bg-default px-4 py-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)] border-default">
              <div>
                <h2 class="text-xl font-semibold text-highlighted dark:text-highlighted text-highlighted">Workload</h2>
                <p class="mt-1 text-sm text-muted dark:text-muted">8 teammate task cards</p>
              </div>
              <div class="grid grid-cols-[1fr_auto] gap-2 sm:flex sm:justify-end">
                <div class="relative col-span-2 sm:col-span-1 sm:w-72">
                  <UIcon name="i-lucide-search" class="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-dimmed" />
                  <UInput v-model="form.searchTasks" type="text" placeholder="Search tasks..." name="searchTasks" class="flex w-full rounded-md text-base md:text-sm h-9 bg-default pl-9 dark:bg-default" :ui="{ base: 'h-full' }" />
                </div>
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-9 gap-2" aria-label="Filter" type="button" @click="openAction(&quot;Filter&quot;)">
                  <UIcon name="i-lucide-sliders-horizontal" class="size-4" />
                  Filter
                </UButton>
              </div>
            </div>
            <div class="min-h-0 flex-1 overflow-auto p-4 sm:p-6">
              <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <article class="flex min-h-[276px] flex-col rounded-xl border border-(--ui-border)/80 bg-default p-4 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition duration-300 hover:-translate-y-0.5 hover:border-accented hover:shadow-[0_14px_34px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:hover:border-(--ui-text-inverted)/18">
                  <div class="flex items-center gap-3">
                    <div class="relative shrink-0">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-9 border border-default bg-default dark:border-(--ui-text-inverted)/10 dark:bg-default">
                        <span class="bg-muted flex h-full w-full items-center justify-center rounded-full text-xs">RS</span>
                      </span>
                      <span class="absolute right-0 bottom-0 size-2.5 rounded-full border-2 border-inverted dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)" />
                    </div>
                    <div class="min-w-0 flex-1">
                      <div class="flex min-w-0 items-center gap-2">
                        <h2 class="truncate text-[15px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Riya Sharma</h2>
                        <UBadge color="neutral" variant="subtle" class="inline-flex shrink-0 rounded-full border px-1.5 py-0.5 text-[10px] font-medium border-success/20 bg-success/10 text-success dark:border-success dark:bg-success/35 dark:text-success">
                          Active
                        </UBadge>
                      </div>
                      <p class="mt-0.5 truncate text-xs text-muted dark:text-muted">Mar 11, 2024</p>
                    </div>
                  </div>
                  <div class="mt-4 border-t border-default pt-3 dark:border-(--ui-text-inverted)/10">
                    <div class="flex items-center justify-between">
                      <h3 class="text-sm font-medium text-highlighted dark:text-highlighted text-highlighted">Tasks</h3>
                      <div class="flex items-center gap-2">
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-7 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-plus" class="size-4" />
                        </UButton>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-7 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-chevron-up" class="size-4" />
                        </UButton>
                      </div>
                    </div>
                    <div class="mt-2 space-y-2">
                      <div class="flex items-start gap-2 text-xs text-toned dark:text-muted">
                        <span class="mt-1.5 size-2 shrink-0 rounded-full border border-accented bg-muted dark:border-default dark:bg-default" />
                        <span class="line-clamp-1">Review handoff notes for active project owners</span>
                      </div>
                      <div class="flex items-start gap-2 text-xs text-toned dark:text-muted">
                        <span class="mt-1.5 size-2 shrink-0 rounded-full border border-accented bg-muted dark:border-default dark:bg-default" />
                        <span class="line-clamp-1">Prepare dependency summary for weekly sync</span>
                      </div>
                      <div class="flex items-start gap-2 text-xs text-toned dark:text-muted">
                        <span class="mt-1.5 size-2 shrink-0 rounded-full border border-accented bg-muted dark:border-default dark:bg-default" />
                        <span class="line-clamp-1">Follow up on blocked implementation details</span>
                      </div>
                    </div>
                  </div>
                  <div class="mt-auto border-t border-dashed border-default pt-4 dark:border-(--ui-text-inverted)/10">
                    <div class="min-w-0 space-y-1.5 text-sm text-toned dark:text-muted">
                      <p class="truncate">riya.sharma@shadcnblocks.dev</p>
                      <div class="flex items-center justify-between gap-4 pt-1 text-xs text-muted dark:text-muted">
                        <span class="truncate">(277) 555-1143</span>
                        <span class="shrink-0">3 teams</span>
                      </div>
                    </div>
                  </div>
                </article>
                <article class="flex min-h-[276px] flex-col rounded-xl border border-(--ui-border)/80 bg-default p-4 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition duration-300 hover:-translate-y-0.5 hover:border-accented hover:shadow-[0_14px_34px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:hover:border-(--ui-text-inverted)/18">
                  <div class="flex items-center gap-3">
                    <div class="relative shrink-0">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-9 border border-default bg-default dark:border-(--ui-text-inverted)/10 dark:bg-default">
                        <span class="bg-muted flex h-full w-full items-center justify-center rounded-full text-xs">BL</span>
                      </span>
                      <span class="absolute right-0 bottom-0 size-2.5 rounded-full border-2 border-inverted dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)" />
                    </div>
                    <div class="min-w-0 flex-1">
                      <div class="flex min-w-0 items-center gap-2">
                        <h2 class="truncate text-[15px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Ben Lewis</h2>
                        <UBadge color="neutral" variant="subtle" class="inline-flex shrink-0 rounded-full border px-1.5 py-0.5 text-[10px] font-medium border-success/20 bg-success/10 text-success dark:border-success dark:bg-success/35 dark:text-success">
                          Active
                        </UBadge>
                      </div>
                      <p class="mt-0.5 truncate text-xs text-muted dark:text-muted">Nov 8, 2023</p>
                    </div>
                  </div>
                  <div class="mt-4 border-t border-default pt-3 dark:border-(--ui-text-inverted)/10">
                    <div class="flex items-center justify-between">
                      <h3 class="text-sm font-medium text-highlighted dark:text-highlighted text-highlighted">Tasks</h3>
                      <div class="flex items-center gap-2">
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-7 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-plus" class="size-4" />
                        </UButton>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-7 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-chevron-up" class="size-4" />
                        </UButton>
                      </div>
                    </div>
                    <div class="mt-2 space-y-2">
                      <div class="flex items-start gap-2 text-xs text-toned dark:text-muted">
                        <span class="mt-1.5 size-2 shrink-0 rounded-full border border-accented bg-muted dark:border-default dark:bg-default" />
                        <span class="line-clamp-1">Create spec for task dependency logic</span>
                      </div>
                      <div class="flex items-start gap-2 text-xs text-toned dark:text-muted">
                        <span class="mt-1.5 size-2 shrink-0 rounded-full border border-accented bg-muted dark:border-default dark:bg-default" />
                        <span class="line-clamp-1">Define review queue for cross-team work</span>
                      </div>
                    </div>
                  </div>
                  <div class="mt-auto border-t border-dashed border-default pt-4 dark:border-(--ui-text-inverted)/10">
                    <div class="min-w-0 space-y-1.5 text-sm text-toned dark:text-muted">
                      <p class="truncate">ben.lewis@shadcnblocks.dev</p>
                      <div class="flex items-center justify-between gap-4 pt-1 text-xs text-muted dark:text-muted">
                        <span class="truncate">(263) 555-1117</span>
                        <span class="shrink-0">2 teams</span>
                      </div>
                    </div>
                  </div>
                </article>
                <article class="flex min-h-[276px] flex-col rounded-xl border border-(--ui-border)/80 bg-default p-4 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition duration-300 hover:-translate-y-0.5 hover:border-accented hover:shadow-[0_14px_34px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:hover:border-(--ui-text-inverted)/18">
                  <div class="flex items-center gap-3">
                    <div class="relative shrink-0">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-9 border border-default bg-default dark:border-(--ui-text-inverted)/10 dark:bg-default">
                        <span class="bg-muted flex h-full w-full items-center justify-center rounded-full text-xs">AR</span>
                      </span>
                      <span class="absolute right-0 bottom-0 size-2.5 rounded-full border-2 border-inverted dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)" />
                    </div>
                    <div class="min-w-0 flex-1">
                      <div class="flex min-w-0 items-center gap-2">
                        <h2 class="truncate text-[15px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Ava Reed</h2>
                        <UBadge color="neutral" variant="subtle" class="inline-flex shrink-0 rounded-full border px-1.5 py-0.5 text-[10px] font-medium border-success/20 bg-success/10 text-success dark:border-success dark:bg-success/35 dark:text-success">
                          Active
                        </UBadge>
                      </div>
                      <p class="mt-0.5 truncate text-xs text-muted dark:text-muted">Apr 22, 2024</p>
                    </div>
                  </div>
                  <div class="mt-4 border-t border-default pt-3 dark:border-(--ui-text-inverted)/10">
                    <div class="flex items-center justify-between">
                      <h3 class="text-sm font-medium text-highlighted dark:text-highlighted text-highlighted">Tasks</h3>
                      <div class="flex items-center gap-2">
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-7 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-plus" class="size-4" />
                        </UButton>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-7 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-chevron-up" class="size-4" />
                        </UButton>
                      </div>
                    </div>
                    <div class="mt-2 space-y-2">
                      <div class="flex items-start gap-2 text-xs text-toned dark:text-muted">
                        <span class="mt-1.5 size-2 shrink-0 rounded-full border border-accented bg-muted dark:border-default dark:bg-default" />
                        <span class="line-clamp-1">Audit calendar ownership with project leads</span>
                      </div>
                      <div class="flex items-start gap-2 text-xs text-toned dark:text-muted">
                        <span class="mt-1.5 size-2 shrink-0 rounded-full border border-accented bg-muted dark:border-default dark:bg-default" />
                        <span class="line-clamp-1">Confirm launch checklist assignments</span>
                      </div>
                      <div class="flex items-start gap-2 text-xs text-toned dark:text-muted">
                        <span class="mt-1.5 size-2 shrink-0 rounded-full border border-accented bg-muted dark:border-default dark:bg-default" />
                        <span class="line-clamp-1">Write QA notes for reopened work</span>
                      </div>
                    </div>
                  </div>
                  <div class="mt-auto border-t border-dashed border-default pt-4 dark:border-(--ui-text-inverted)/10">
                    <div class="min-w-0 space-y-1.5 text-sm text-toned dark:text-muted">
                      <p class="truncate">ava.reed@shadcnblocks.dev</p>
                      <div class="flex items-center justify-between gap-4 pt-1 text-xs text-muted dark:text-muted">
                        <span class="truncate">(256) 555-1104</span>
                        <span class="shrink-0">3 teams</span>
                      </div>
                    </div>
                  </div>
                </article>
                <article class="flex min-h-[276px] flex-col rounded-xl border border-(--ui-border)/80 bg-default p-4 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition duration-300 hover:-translate-y-0.5 hover:border-accented hover:shadow-[0_14px_34px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:hover:border-(--ui-text-inverted)/18">
                  <div class="flex items-center gap-3">
                    <div class="relative shrink-0">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-9 border border-default bg-default dark:border-(--ui-text-inverted)/10 dark:bg-default">
                        <span class="bg-muted flex h-full w-full items-center justify-center rounded-full text-xs">MR</span>
                      </span>
                      <span class="absolute right-0 bottom-0 size-2.5 rounded-full border-2 border-inverted dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-warning)" />
                    </div>
                    <div class="min-w-0 flex-1">
                      <div class="flex min-w-0 items-center gap-2">
                        <h2 class="truncate text-[15px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Maya Rao</h2>
                        <UBadge color="neutral" variant="subtle" class="inline-flex shrink-0 rounded-full border px-1.5 py-0.5 text-[10px] font-medium border-info/20 bg-info/10 text-info dark:border-info dark:bg-info/35 dark:text-info">
                          Part-time
                        </UBadge>
                      </div>
                      <p class="mt-0.5 truncate text-xs text-muted dark:text-muted">Jan 17, 2024</p>
                    </div>
                  </div>
                  <div class="mt-4 border-t border-default pt-3 dark:border-(--ui-text-inverted)/10">
                    <div class="flex items-center justify-between">
                      <h3 class="text-sm font-medium text-highlighted dark:text-highlighted text-highlighted">Tasks</h3>
                      <div class="flex items-center gap-2">
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-7 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-plus" class="size-4" />
                        </UButton>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-7 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-chevron-up" class="size-4" />
                        </UButton>
                      </div>
                    </div>
                    <div class="mt-2 space-y-2">
                      <div class="flex items-start gap-2 text-xs text-toned dark:text-muted">
                        <span class="mt-1.5 size-2 shrink-0 rounded-full border border-accented bg-muted dark:border-default dark:bg-default" />
                        <span class="line-clamp-1">Collaborate on schema-driven task flow</span>
                      </div>
                      <div class="flex items-start gap-2 text-xs text-toned dark:text-muted">
                        <span class="mt-1.5 size-2 shrink-0 rounded-full border border-accented bg-muted dark:border-default dark:bg-default" />
                        <span class="line-clamp-1">Review rate limiting strategy with backend team</span>
                      </div>
                      <div class="flex items-start gap-2 text-xs text-toned dark:text-muted">
                        <span class="mt-1.5 size-2 shrink-0 rounded-full border border-accented bg-muted dark:border-default dark:bg-default" />
                        <span class="line-clamp-1">Draft acceptance criteria for release module</span>
                      </div>
                    </div>
                  </div>
                  <div class="mt-auto border-t border-dashed border-default pt-4 dark:border-(--ui-text-inverted)/10">
                    <div class="min-w-0 space-y-1.5 text-sm text-toned dark:text-muted">
                      <p class="truncate">maya.rao@shadcnblocks.dev</p>
                      <div class="flex items-center justify-between gap-4 pt-1 text-xs text-muted dark:text-muted">
                        <span class="truncate">(256) 555-1104</span>
                        <span class="shrink-0">2 teams</span>
                      </div>
                    </div>
                  </div>
                </article>
                <article class="flex min-h-[276px] flex-col rounded-xl border border-(--ui-border)/80 bg-default p-4 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition duration-300 hover:-translate-y-0.5 hover:border-accented hover:shadow-[0_14px_34px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:hover:border-(--ui-text-inverted)/18">
                  <div class="flex items-center gap-3">
                    <div class="relative shrink-0">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-9 border border-default bg-default dark:border-(--ui-text-inverted)/10 dark:bg-default">
                        <span class="bg-muted flex h-full w-full items-center justify-center rounded-full text-xs">OL</span>
                      </span>
                      <span class="absolute right-0 bottom-0 size-2.5 rounded-full border-2 border-inverted dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-text-muted)" />
                    </div>
                    <div class="min-w-0 flex-1">
                      <div class="flex min-w-0 items-center gap-2">
                        <h2 class="truncate text-[15px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Owen Lee</h2>
                        <UBadge color="neutral" variant="subtle" class="inline-flex shrink-0 rounded-full border px-1.5 py-0.5 text-[10px] font-medium border-warning/20 bg-warning/10 text-warning dark:border-warning dark:bg-warning/35 dark:text-warning">
                          Remote
                        </UBadge>
                      </div>
                      <p class="mt-0.5 truncate text-xs text-muted dark:text-muted">Feb 10, 2025</p>
                    </div>
                  </div>
                  <div class="mt-4 border-t border-default pt-3 dark:border-(--ui-text-inverted)/10">
                    <div class="flex items-center justify-between">
                      <h3 class="text-sm font-medium text-highlighted dark:text-highlighted text-highlighted">Tasks</h3>
                      <div class="flex items-center gap-2">
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-7 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-plus" class="size-4" />
                        </UButton>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-7 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-chevron-up" class="size-4" />
                        </UButton>
                      </div>
                    </div>
                    <div class="mt-2 space-y-2">
                      <div class="flex items-start gap-2 text-xs text-toned dark:text-muted">
                        <span class="mt-1.5 size-2 shrink-0 rounded-full border border-accented bg-muted dark:border-default dark:bg-default" />
                        <span class="line-clamp-1">Review handoff notes for active project owners</span>
                      </div>
                      <div class="flex items-start gap-2 text-xs text-toned dark:text-muted">
                        <span class="mt-1.5 size-2 shrink-0 rounded-full border border-accented bg-muted dark:border-default dark:bg-default" />
                        <span class="line-clamp-1">Prepare dependency summary for weekly sync</span>
                      </div>
                      <div class="flex items-start gap-2 text-xs text-toned dark:text-muted">
                        <span class="mt-1.5 size-2 shrink-0 rounded-full border border-accented bg-muted dark:border-default dark:bg-default" />
                        <span class="line-clamp-1">Follow up on blocked implementation details</span>
                      </div>
                    </div>
                  </div>
                  <div class="mt-auto border-t border-dashed border-default pt-4 dark:border-(--ui-text-inverted)/10">
                    <div class="min-w-0 space-y-1.5 text-sm text-toned dark:text-muted">
                      <p class="truncate">owen.lee@shadcnblocks.dev</p>
                      <div class="flex items-center justify-between gap-4 pt-1 text-xs text-muted dark:text-muted">
                        <span class="truncate">(256) 555-1104</span>
                        <span class="shrink-0">2 teams</span>
                      </div>
                    </div>
                  </div>
                </article>
                <article class="flex min-h-[276px] flex-col rounded-xl border border-(--ui-border)/80 bg-default p-4 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition duration-300 hover:-translate-y-0.5 hover:border-accented hover:shadow-[0_14px_34px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:hover:border-(--ui-text-inverted)/18">
                  <div class="flex items-center gap-3">
                    <div class="relative shrink-0">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-9 border border-default bg-default dark:border-(--ui-text-inverted)/10 dark:bg-default">
                        <span class="bg-muted flex h-full w-full items-center justify-center rounded-full text-xs">CP</span>
                      </span>
                      <span class="absolute right-0 bottom-0 size-2.5 rounded-full border-2 border-inverted dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)" />
                    </div>
                    <div class="min-w-0 flex-1">
                      <div class="flex min-w-0 items-center gap-2">
                        <h2 class="truncate text-[15px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Chloe Park</h2>
                        <UBadge color="neutral" variant="subtle" class="inline-flex shrink-0 rounded-full border px-1.5 py-0.5 text-[10px] font-medium border-success/20 bg-success/10 text-success dark:border-success dark:bg-success/35 dark:text-success">
                          Active
                        </UBadge>
                      </div>
                      <p class="mt-0.5 truncate text-xs text-muted dark:text-muted">Sep 3, 2024</p>
                    </div>
                  </div>
                  <div class="mt-4 border-t border-default pt-3 dark:border-(--ui-text-inverted)/10">
                    <div class="flex items-center justify-between">
                      <h3 class="text-sm font-medium text-highlighted dark:text-highlighted text-highlighted">Tasks</h3>
                      <div class="flex items-center gap-2">
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-7 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-plus" class="size-4" />
                        </UButton>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-7 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-chevron-up" class="size-4" />
                        </UButton>
                      </div>
                    </div>
                    <div class="mt-2 space-y-2">
                      <div class="flex items-start gap-2 text-xs text-toned dark:text-muted">
                        <span class="mt-1.5 size-2 shrink-0 rounded-full border border-accented bg-muted dark:border-default dark:bg-default" />
                        <span class="line-clamp-1">Create spec for task dependency logic</span>
                      </div>
                      <div class="flex items-start gap-2 text-xs text-toned dark:text-muted">
                        <span class="mt-1.5 size-2 shrink-0 rounded-full border border-accented bg-muted dark:border-default dark:bg-default" />
                        <span class="line-clamp-1">Define review queue for cross-team work</span>
                      </div>
                    </div>
                  </div>
                  <div class="mt-auto border-t border-dashed border-default pt-4 dark:border-(--ui-text-inverted)/10">
                    <div class="min-w-0 space-y-1.5 text-sm text-toned dark:text-muted">
                      <p class="truncate">chloe.park@shadcnblocks.dev</p>
                      <div class="flex items-center justify-between gap-4 pt-1 text-xs text-muted dark:text-muted">
                        <span class="truncate">(270) 555-1130</span>
                        <span class="shrink-0">2 teams</span>
                      </div>
                    </div>
                  </div>
                </article>
                <article class="flex min-h-[276px] flex-col rounded-xl border border-(--ui-border)/80 bg-default p-4 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition duration-300 hover:-translate-y-0.5 hover:border-accented hover:shadow-[0_14px_34px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:hover:border-(--ui-text-inverted)/18">
                  <div class="flex items-center gap-3">
                    <div class="relative shrink-0">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-9 border border-default bg-default dark:border-(--ui-text-inverted)/10 dark:bg-default">
                        <span class="bg-muted flex h-full w-full items-center justify-center rounded-full text-xs">VH</span>
                      </span>
                      <span class="absolute right-0 bottom-0 size-2.5 rounded-full border-2 border-inverted dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-warning)" />
                    </div>
                    <div class="min-w-0 flex-1">
                      <div class="flex min-w-0 items-center gap-2">
                        <h2 class="truncate text-[15px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Victor Hale</h2>
                        <UBadge color="neutral" variant="subtle" class="inline-flex shrink-0 rounded-full border px-1.5 py-0.5 text-[10px] font-medium border-info/20 bg-info/10 text-info dark:border-info dark:bg-info/35 dark:text-info">
                          Part-time
                        </UBadge>
                      </div>
                      <p class="mt-0.5 truncate text-xs text-muted dark:text-muted">Aug 14, 2023</p>
                    </div>
                  </div>
                  <div class="mt-4 border-t border-default pt-3 dark:border-(--ui-text-inverted)/10">
                    <div class="flex items-center justify-between">
                      <h3 class="text-sm font-medium text-highlighted dark:text-highlighted text-highlighted">Tasks</h3>
                      <div class="flex items-center gap-2">
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-7 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-plus" class="size-4" />
                        </UButton>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-7 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-chevron-up" class="size-4" />
                        </UButton>
                      </div>
                    </div>
                    <div class="mt-2 space-y-2">
                      <div class="flex items-start gap-2 text-xs text-toned dark:text-muted">
                        <span class="mt-1.5 size-2 shrink-0 rounded-full border border-accented bg-muted dark:border-default dark:bg-default" />
                        <span class="line-clamp-1">Audit calendar ownership with project leads</span>
                      </div>
                      <div class="flex items-start gap-2 text-xs text-toned dark:text-muted">
                        <span class="mt-1.5 size-2 shrink-0 rounded-full border border-accented bg-muted dark:border-default dark:bg-default" />
                        <span class="line-clamp-1">Confirm launch checklist assignments</span>
                      </div>
                      <div class="flex items-start gap-2 text-xs text-toned dark:text-muted">
                        <span class="mt-1.5 size-2 shrink-0 rounded-full border border-accented bg-muted dark:border-default dark:bg-default" />
                        <span class="line-clamp-1">Write QA notes for reopened work</span>
                      </div>
                    </div>
                  </div>
                  <div class="mt-auto border-t border-dashed border-default pt-4 dark:border-(--ui-text-inverted)/10">
                    <div class="min-w-0 space-y-1.5 text-sm text-toned dark:text-muted">
                      <p class="truncate">victor.hale@shadcnblocks.dev</p>
                      <div class="flex items-center justify-between gap-4 pt-1 text-xs text-muted dark:text-muted">
                        <span class="truncate">(277) 555-1143</span>
                        <span class="shrink-0">3 teams</span>
                      </div>
                    </div>
                  </div>
                </article>
                <article class="flex min-h-[276px] flex-col rounded-xl border border-(--ui-border)/80 bg-default p-4 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition duration-300 hover:-translate-y-0.5 hover:border-accented hover:shadow-[0_14px_34px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:hover:border-(--ui-text-inverted)/18">
                  <div class="flex items-center gap-3">
                    <div class="relative shrink-0">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-9 border border-default bg-default dark:border-(--ui-text-inverted)/10 dark:bg-default">
                        <span class="bg-muted flex h-full w-full items-center justify-center rounded-full text-xs">KS</span>
                      </span>
                      <span class="absolute right-0 bottom-0 size-2.5 rounded-full border-2 border-inverted dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)" />
                    </div>
                    <div class="min-w-0 flex-1">
                      <div class="flex min-w-0 items-center gap-2">
                        <h2 class="truncate text-[15px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Kabir Sethi</h2>
                        <UBadge color="neutral" variant="subtle" class="inline-flex shrink-0 rounded-full border px-1.5 py-0.5 text-[10px] font-medium border-success/20 bg-success/10 text-success dark:border-success dark:bg-success/35 dark:text-success">
                          Active
                        </UBadge>
                      </div>
                      <p class="mt-0.5 truncate text-xs text-muted dark:text-muted">Jun 18, 2024</p>
                    </div>
                  </div>
                  <div class="mt-4 border-t border-default pt-3 dark:border-(--ui-text-inverted)/10">
                    <div class="flex items-center justify-between">
                      <h3 class="text-sm font-medium text-highlighted dark:text-highlighted text-highlighted">Tasks</h3>
                      <div class="flex items-center gap-2">
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-7 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-plus" class="size-4" />
                        </UButton>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-7 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-chevron-up" class="size-4" />
                        </UButton>
                      </div>
                    </div>
                    <div class="mt-2 space-y-2">
                      <div class="flex items-start gap-2 text-xs text-toned dark:text-muted">
                        <span class="mt-1.5 size-2 shrink-0 rounded-full border border-accented bg-muted dark:border-default dark:bg-default" />
                        <span class="line-clamp-1">Collaborate on schema-driven task flow</span>
                      </div>
                      <div class="flex items-start gap-2 text-xs text-toned dark:text-muted">
                        <span class="mt-1.5 size-2 shrink-0 rounded-full border border-accented bg-muted dark:border-default dark:bg-default" />
                        <span class="line-clamp-1">Review rate limiting strategy with backend team</span>
                      </div>
                      <div class="flex items-start gap-2 text-xs text-toned dark:text-muted">
                        <span class="mt-1.5 size-2 shrink-0 rounded-full border border-accented bg-muted dark:border-default dark:bg-default" />
                        <span class="line-clamp-1">Draft acceptance criteria for release module</span>
                      </div>
                    </div>
                  </div>
                  <div class="mt-auto border-t border-dashed border-default pt-4 dark:border-(--ui-text-inverted)/10">
                    <div class="min-w-0 space-y-1.5 text-sm text-toned dark:text-muted">
                      <p class="truncate">kabir.sethi@shadcnblocks.dev</p>
                      <div class="flex items-center justify-between gap-4 pt-1 text-xs text-muted dark:text-muted">
                        <span class="truncate">(277) 555-1143</span>
                        <span class="shrink-0">2 teams</span>
                      </div>
                    </div>
                  </div>
                </article>
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
