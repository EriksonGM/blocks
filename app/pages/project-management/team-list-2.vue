<!-- Page: /project-management/team-list-2 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Team List 2 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchMembers": ""
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/team-list-2">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main id="main-content" class="bg-default flex min-h-0 flex-1 flex-col overflow-hidden">
          <div class="border-b bg-default dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)] border-default">
            <div class="px-4 pt-5 sm:px-6">
              <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p class="text-sm text-muted dark:text-muted">Teams</p>
                  <h1 class="mt-2 text-4xl font-semibold tracking-tight text-highlighted dark:text-highlighted text-highlighted">Teams</h1>
                </div>
                <div class="flex flex-wrap gap-2">
                  <UButton color="primary" variant="solid" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2 gap-2" aria-label="New Member" type="button" @click="openAction(&quot;New Member&quot;)">
                    <UIcon name="i-lucide-user-plus" class="size-4" />
                    New Member
                  </UButton>
                </div>
              </div>
              <div class="mt-6 flex gap-6 overflow-x-auto text-sm">
                <UButton color="neutral" variant="outline" class="flex shrink-0 items-center gap-2 border-b-2 px-0 pb-3 transition hover:text-highlighted dark:hover:text-highlighted border-accented text-highlighted dark:border-default dark:text-highlighted" aria-label="Directory" type="button" @click="openAction(&quot;Directory&quot;)">
                  <UIcon name="i-lucide-users-round" class="size-4" />
                  Directory
                </UButton>
                <UButton color="neutral" variant="outline" class="flex shrink-0 items-center gap-2 border-b-2 px-0 pb-3 text-muted transition hover:text-highlighted dark:text-muted dark:hover:text-highlighted border-transparent" aria-label="Departments" type="button" @click="openAction(&quot;Departments&quot;)">
                  <UIcon name="i-lucide-layout-grid" class="size-4" />
                  Departments
                </UButton>
                <UButton color="neutral" variant="outline" class="flex shrink-0 items-center gap-2 border-b-2 px-0 pb-3 text-muted transition hover:text-highlighted dark:text-muted dark:hover:text-highlighted border-transparent" aria-label="Tasks" type="button" @click="openAction(&quot;Tasks&quot;)">
                  <UIcon name="i-lucide-list-todo" class="size-4" />
                  Tasks
                </UButton>
              </div>
            </div>
          </div>
          <section class="flex min-h-0 flex-1 flex-col overflow-hidden bg-(--ui-bg)/80 dark:bg-[var(--ui-bg-inverted)]">
            <div class="grid gap-3 border-b bg-default px-4 py-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)] border-default">
              <div>
                <h2 class="text-xl font-semibold text-highlighted dark:text-highlighted text-highlighted">Members</h2>
                <p class="mt-1 text-sm text-muted dark:text-muted">16 people across active project teams</p>
              </div>
              <div class="grid grid-cols-[1fr_auto] gap-2 sm:flex sm:justify-end">
                <div class="relative col-span-2 sm:col-span-1 sm:w-72">
                  <UIcon name="i-lucide-search" class="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-dimmed" />
                  <UInput v-model="form.searchMembers" type="text" placeholder="Search members..." name="searchMembers" class="flex w-full rounded-md text-base md:text-sm h-9 bg-default pl-9 dark:bg-default" :ui="{ base: 'h-full' }" />
                </div>
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-9 gap-2" aria-label="Filter" type="button" @click="openAction(&quot;Filter&quot;)">
                  <UIcon name="i-lucide-sliders-horizontal" class="size-4" />
                  Filter
                </UButton>
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-9" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                  <UIcon name="i-lucide-layout-grid" class="size-4" />
                </UButton>
              </div>
            </div>
            <div class="min-h-0 flex-1 overflow-auto p-4 sm:p-6">
              <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                <article class="group relative flex min-h-[248px] flex-col rounded-xl border border-(--ui-border)/80 bg-default p-4 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition duration-300 hover:-translate-y-0.5 hover:border-accented hover:shadow-[0_14px_32px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:hover:border-(--ui-text-inverted)/18">
                  <div class="flex items-start justify-between gap-3">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border border-default bg-default dark:border-(--ui-text-inverted)/10 dark:bg-default">
                        <img class="aspect-square h-full w-full" alt="Riya Sharma" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                      </span>
                      <span class="absolute right-0.5 bottom-0.5 size-3 rounded-full border-2 border-inverted dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)" />
                    </div>
                    <UBadge color="neutral" variant="subtle" class="inline-flex rounded-full border px-2 py-1 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:border-success dark:bg-success/35 dark:text-success">
                      Active
                    </UBadge>
                  </div>
                  <div class="mt-4 min-w-0">
                    <h2 class="truncate text-[15px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Riya Sharma</h2>
                    <p class="mt-1 truncate text-sm text-muted dark:text-muted">Admin</p>
                  </div>
                  <div class="mt-5 grid grid-cols-2 gap-4">
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Team</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Operations</p>
                    </div>
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Joined</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Mar 11, 2024</p>
                    </div>
                  </div>
                  <div class="mt-4 min-w-0 space-y-1.5 text-sm text-toned dark:text-muted">
                    <div class="flex min-w-0 items-center gap-2">
                      <p class="truncate">riya.sharma@shadcnblocks.dev</p>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated size-6 shrink-0 rounded-md text-dimmed hover:text-highlighted dark:text-dimmed dark:hover:text-highlighted" aria-label="Copy riya.sharma@shadcnblocks.dev" type="button" @click="copyValue(&quot;Copy riya.sharma@shadcnblocks.dev&quot;)">
                        <UIcon name="i-lucide-copy" class="size-3.5" />
                      </UButton>
                    </div>
                    <div class="flex items-center justify-between gap-4 pt-1 text-xs text-muted dark:text-muted">
                      <span class="truncate">(277) 555-1143</span>
                      <span class="shrink-0">3 teams</span>
                    </div>
                  </div>
                </article>
                <article class="group relative flex min-h-[248px] flex-col rounded-xl border border-(--ui-border)/80 bg-default p-4 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition duration-300 hover:-translate-y-0.5 hover:border-accented hover:shadow-[0_14px_32px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:hover:border-(--ui-text-inverted)/18">
                  <div class="flex items-start justify-between gap-3">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border border-default bg-default dark:border-(--ui-text-inverted)/10 dark:bg-default">
                        <img class="aspect-square h-full w-full" alt="Ben Lewis" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                      </span>
                      <span class="absolute right-0.5 bottom-0.5 size-3 rounded-full border-2 border-inverted dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)" />
                    </div>
                    <UBadge color="neutral" variant="subtle" class="inline-flex rounded-full border px-2 py-1 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:border-success dark:bg-success/35 dark:text-success">
                      Active
                    </UBadge>
                  </div>
                  <div class="mt-4 min-w-0">
                    <h2 class="truncate text-[15px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Ben Lewis</h2>
                    <p class="mt-1 truncate text-sm text-muted dark:text-muted">Admin</p>
                  </div>
                  <div class="mt-5 grid grid-cols-2 gap-4">
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Team</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Operations</p>
                    </div>
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Joined</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Nov 8, 2023</p>
                    </div>
                  </div>
                  <div class="mt-4 min-w-0 space-y-1.5 text-sm text-toned dark:text-muted">
                    <div class="flex min-w-0 items-center gap-2">
                      <p class="truncate">ben.lewis@shadcnblocks.dev</p>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated size-6 shrink-0 rounded-md text-dimmed hover:text-highlighted dark:text-dimmed dark:hover:text-highlighted" aria-label="Copy ben.lewis@shadcnblocks.dev" type="button" @click="copyValue(&quot;Copy ben.lewis@shadcnblocks.dev&quot;)">
                        <UIcon name="i-lucide-copy" class="size-3.5" />
                      </UButton>
                    </div>
                    <div class="flex items-center justify-between gap-4 pt-1 text-xs text-muted dark:text-muted">
                      <span class="truncate">(263) 555-1117</span>
                      <span class="shrink-0">2 teams</span>
                    </div>
                  </div>
                </article>
                <article class="group relative flex min-h-[248px] flex-col rounded-xl border border-(--ui-border)/80 bg-default p-4 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition duration-300 hover:-translate-y-0.5 hover:border-accented hover:shadow-[0_14px_32px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:hover:border-(--ui-text-inverted)/18">
                  <div class="flex items-start justify-between gap-3">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border border-default bg-default dark:border-(--ui-text-inverted)/10 dark:bg-default">
                        <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                      </span>
                      <span class="absolute right-0.5 bottom-0.5 size-3 rounded-full border-2 border-inverted dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)" />
                    </div>
                    <UBadge color="neutral" variant="subtle" class="inline-flex rounded-full border px-2 py-1 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:border-success dark:bg-success/35 dark:text-success">
                      Active
                    </UBadge>
                  </div>
                  <div class="mt-4 min-w-0">
                    <h2 class="truncate text-[15px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Ava Reed</h2>
                    <p class="mt-1 truncate text-sm text-muted dark:text-muted">Member</p>
                  </div>
                  <div class="mt-5 grid grid-cols-2 gap-4">
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Team</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Operations</p>
                    </div>
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Joined</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Apr 22, 2024</p>
                    </div>
                  </div>
                  <div class="mt-4 min-w-0 space-y-1.5 text-sm text-toned dark:text-muted">
                    <div class="flex min-w-0 items-center gap-2">
                      <p class="truncate">ava.reed@shadcnblocks.dev</p>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated size-6 shrink-0 rounded-md text-dimmed hover:text-highlighted dark:text-dimmed dark:hover:text-highlighted" aria-label="Copy ava.reed@shadcnblocks.dev" type="button" @click="copyValue(&quot;Copy ava.reed@shadcnblocks.dev&quot;)">
                        <UIcon name="i-lucide-copy" class="size-3.5" />
                      </UButton>
                    </div>
                    <div class="flex items-center justify-between gap-4 pt-1 text-xs text-muted dark:text-muted">
                      <span class="truncate">(256) 555-1104</span>
                      <span class="shrink-0">3 teams</span>
                    </div>
                  </div>
                </article>
                <article class="group relative flex min-h-[248px] flex-col rounded-xl border border-(--ui-border)/80 bg-default p-4 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition duration-300 hover:-translate-y-0.5 hover:border-accented hover:shadow-[0_14px_32px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:hover:border-(--ui-text-inverted)/18">
                  <div class="flex items-start justify-between gap-3">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border border-default bg-default dark:border-(--ui-text-inverted)/10 dark:bg-default">
                        <img class="aspect-square h-full w-full" alt="Maya Rao" src="/reference/247ac7c76922347b.png" loading="lazy" />
                      </span>
                      <span class="absolute right-0.5 bottom-0.5 size-3 rounded-full border-2 border-inverted dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-warning)" />
                    </div>
                    <UBadge color="neutral" variant="subtle" class="inline-flex rounded-full border px-2 py-1 text-[11px] font-medium border-info/20 bg-info/10 text-info dark:border-info dark:bg-info/35 dark:text-info">
                      Part-time
                    </UBadge>
                  </div>
                  <div class="mt-4 min-w-0">
                    <h2 class="truncate text-[15px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Maya Rao</h2>
                    <p class="mt-1 truncate text-sm text-muted dark:text-muted">Member</p>
                  </div>
                  <div class="mt-5 grid grid-cols-2 gap-4">
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Team</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Growth</p>
                    </div>
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Joined</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Jan 17, 2024</p>
                    </div>
                  </div>
                  <div class="mt-4 min-w-0 space-y-1.5 text-sm text-toned dark:text-muted">
                    <div class="flex min-w-0 items-center gap-2">
                      <p class="truncate">maya.rao@shadcnblocks.dev</p>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated size-6 shrink-0 rounded-md text-dimmed hover:text-highlighted dark:text-dimmed dark:hover:text-highlighted" aria-label="Copy maya.rao@shadcnblocks.dev" type="button" @click="copyValue(&quot;Copy maya.rao@shadcnblocks.dev&quot;)">
                        <UIcon name="i-lucide-copy" class="size-3.5" />
                      </UButton>
                    </div>
                    <div class="flex items-center justify-between gap-4 pt-1 text-xs text-muted dark:text-muted">
                      <span class="truncate">(256) 555-1104</span>
                      <span class="shrink-0">2 teams</span>
                    </div>
                  </div>
                </article>
                <article class="group relative flex min-h-[248px] flex-col rounded-xl border border-(--ui-border)/80 bg-default p-4 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition duration-300 hover:-translate-y-0.5 hover:border-accented hover:shadow-[0_14px_32px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:hover:border-(--ui-text-inverted)/18">
                  <div class="flex items-start justify-between gap-3">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border border-default bg-default dark:border-(--ui-text-inverted)/10 dark:bg-default">
                        <img class="aspect-square h-full w-full" alt="Owen Lee" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                      </span>
                      <span class="absolute right-0.5 bottom-0.5 size-3 rounded-full border-2 border-inverted dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-text-muted)" />
                    </div>
                    <UBadge color="neutral" variant="subtle" class="inline-flex rounded-full border px-2 py-1 text-[11px] font-medium border-warning/20 bg-warning/10 text-warning dark:border-warning dark:bg-warning/35 dark:text-warning">
                      Remote
                    </UBadge>
                  </div>
                  <div class="mt-4 min-w-0">
                    <h2 class="truncate text-[15px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Owen Lee</h2>
                    <p class="mt-1 truncate text-sm text-muted dark:text-muted">Member</p>
                  </div>
                  <div class="mt-5 grid grid-cols-2 gap-4">
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Team</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Growth</p>
                    </div>
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Joined</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Feb 10, 2025</p>
                    </div>
                  </div>
                  <div class="mt-4 min-w-0 space-y-1.5 text-sm text-toned dark:text-muted">
                    <div class="flex min-w-0 items-center gap-2">
                      <p class="truncate">owen.lee@shadcnblocks.dev</p>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated size-6 shrink-0 rounded-md text-dimmed hover:text-highlighted dark:text-dimmed dark:hover:text-highlighted" aria-label="Copy owen.lee@shadcnblocks.dev" type="button" @click="copyValue(&quot;Copy owen.lee@shadcnblocks.dev&quot;)">
                        <UIcon name="i-lucide-copy" class="size-3.5" />
                      </UButton>
                    </div>
                    <div class="flex items-center justify-between gap-4 pt-1 text-xs text-muted dark:text-muted">
                      <span class="truncate">(256) 555-1104</span>
                      <span class="shrink-0">2 teams</span>
                    </div>
                  </div>
                </article>
                <article class="group relative flex min-h-[248px] flex-col rounded-xl border border-(--ui-border)/80 bg-default p-4 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition duration-300 hover:-translate-y-0.5 hover:border-accented hover:shadow-[0_14px_32px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:hover:border-(--ui-text-inverted)/18">
                  <div class="flex items-start justify-between gap-3">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border border-default bg-default dark:border-(--ui-text-inverted)/10 dark:bg-default">
                        <img class="aspect-square h-full w-full" alt="Chloe Park" src="/reference/62828bc2a489837e.png" loading="lazy" />
                      </span>
                      <span class="absolute right-0.5 bottom-0.5 size-3 rounded-full border-2 border-inverted dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)" />
                    </div>
                    <UBadge color="neutral" variant="subtle" class="inline-flex rounded-full border px-2 py-1 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:border-success dark:bg-success/35 dark:text-success">
                      Active
                    </UBadge>
                  </div>
                  <div class="mt-4 min-w-0">
                    <h2 class="truncate text-[15px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Chloe Park</h2>
                    <p class="mt-1 truncate text-sm text-muted dark:text-muted">Member</p>
                  </div>
                  <div class="mt-5 grid grid-cols-2 gap-4">
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Team</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Customer Experience</p>
                    </div>
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Joined</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Sep 3, 2024</p>
                    </div>
                  </div>
                  <div class="mt-4 min-w-0 space-y-1.5 text-sm text-toned dark:text-muted">
                    <div class="flex min-w-0 items-center gap-2">
                      <p class="truncate">chloe.park@shadcnblocks.dev</p>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated size-6 shrink-0 rounded-md text-dimmed hover:text-highlighted dark:text-dimmed dark:hover:text-highlighted" aria-label="Copy chloe.park@shadcnblocks.dev" type="button" @click="copyValue(&quot;Copy chloe.park@shadcnblocks.dev&quot;)">
                        <UIcon name="i-lucide-copy" class="size-3.5" />
                      </UButton>
                    </div>
                    <div class="flex items-center justify-between gap-4 pt-1 text-xs text-muted dark:text-muted">
                      <span class="truncate">(270) 555-1130</span>
                      <span class="shrink-0">2 teams</span>
                    </div>
                  </div>
                </article>
                <article class="group relative flex min-h-[248px] flex-col rounded-xl border border-(--ui-border)/80 bg-default p-4 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition duration-300 hover:-translate-y-0.5 hover:border-accented hover:shadow-[0_14px_32px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:hover:border-(--ui-text-inverted)/18">
                  <div class="flex items-start justify-between gap-3">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border border-default bg-default dark:border-(--ui-text-inverted)/10 dark:bg-default">
                        <img class="aspect-square h-full w-full" alt="Victor Hale" src="/reference/146332adc3a2c901.png" loading="lazy" />
                      </span>
                      <span class="absolute right-0.5 bottom-0.5 size-3 rounded-full border-2 border-inverted dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-warning)" />
                    </div>
                    <UBadge color="neutral" variant="subtle" class="inline-flex rounded-full border px-2 py-1 text-[11px] font-medium border-info/20 bg-info/10 text-info dark:border-info dark:bg-info/35 dark:text-info">
                      Part-time
                    </UBadge>
                  </div>
                  <div class="mt-4 min-w-0">
                    <h2 class="truncate text-[15px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Victor Hale</h2>
                    <p class="mt-1 truncate text-sm text-muted dark:text-muted">Admin</p>
                  </div>
                  <div class="mt-5 grid grid-cols-2 gap-4">
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Team</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Growth</p>
                    </div>
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Joined</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Aug 14, 2023</p>
                    </div>
                  </div>
                  <div class="mt-4 min-w-0 space-y-1.5 text-sm text-toned dark:text-muted">
                    <div class="flex min-w-0 items-center gap-2">
                      <p class="truncate">victor.hale@shadcnblocks.dev</p>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated size-6 shrink-0 rounded-md text-dimmed hover:text-highlighted dark:text-dimmed dark:hover:text-highlighted" aria-label="Copy victor.hale@shadcnblocks.dev" type="button" @click="copyValue(&quot;Copy victor.hale@shadcnblocks.dev&quot;)">
                        <UIcon name="i-lucide-copy" class="size-3.5" />
                      </UButton>
                    </div>
                    <div class="flex items-center justify-between gap-4 pt-1 text-xs text-muted dark:text-muted">
                      <span class="truncate">(277) 555-1143</span>
                      <span class="shrink-0">3 teams</span>
                    </div>
                  </div>
                </article>
                <article class="group relative flex min-h-[248px] flex-col rounded-xl border border-(--ui-border)/80 bg-default p-4 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition duration-300 hover:-translate-y-0.5 hover:border-accented hover:shadow-[0_14px_32px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:hover:border-(--ui-text-inverted)/18">
                  <div class="flex items-start justify-between gap-3">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border border-default bg-default dark:border-(--ui-text-inverted)/10 dark:bg-default">
                        <img class="aspect-square h-full w-full" alt="Kabir Sethi" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                      </span>
                      <span class="absolute right-0.5 bottom-0.5 size-3 rounded-full border-2 border-inverted dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)" />
                    </div>
                    <UBadge color="neutral" variant="subtle" class="inline-flex rounded-full border px-2 py-1 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:border-success dark:bg-success/35 dark:text-success">
                      Active
                    </UBadge>
                  </div>
                  <div class="mt-4 min-w-0">
                    <h2 class="truncate text-[15px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Kabir Sethi</h2>
                    <p class="mt-1 truncate text-sm text-muted dark:text-muted">Member</p>
                  </div>
                  <div class="mt-5 grid grid-cols-2 gap-4">
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Team</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Customer Experience</p>
                    </div>
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Joined</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Jun 18, 2024</p>
                    </div>
                  </div>
                  <div class="mt-4 min-w-0 space-y-1.5 text-sm text-toned dark:text-muted">
                    <div class="flex min-w-0 items-center gap-2">
                      <p class="truncate">kabir.sethi@shadcnblocks.dev</p>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated size-6 shrink-0 rounded-md text-dimmed hover:text-highlighted dark:text-dimmed dark:hover:text-highlighted" aria-label="Copy kabir.sethi@shadcnblocks.dev" type="button" @click="copyValue(&quot;Copy kabir.sethi@shadcnblocks.dev&quot;)">
                        <UIcon name="i-lucide-copy" class="size-3.5" />
                      </UButton>
                    </div>
                    <div class="flex items-center justify-between gap-4 pt-1 text-xs text-muted dark:text-muted">
                      <span class="truncate">(277) 555-1143</span>
                      <span class="shrink-0">2 teams</span>
                    </div>
                  </div>
                </article>
                <article class="group relative flex min-h-[248px] flex-col rounded-xl border border-(--ui-border)/80 bg-default p-4 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition duration-300 hover:-translate-y-0.5 hover:border-accented hover:shadow-[0_14px_32px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:hover:border-(--ui-text-inverted)/18">
                  <div class="flex items-start justify-between gap-3">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border border-default bg-default dark:border-(--ui-text-inverted)/10 dark:bg-default">
                        <img class="aspect-square h-full w-full" alt="Dina Moss" src="/reference/ada84674117f0188.png" loading="lazy" />
                      </span>
                      <span class="absolute right-0.5 bottom-0.5 size-3 rounded-full border-2 border-inverted dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-text-muted)" />
                    </div>
                    <UBadge color="neutral" variant="subtle" class="inline-flex rounded-full border px-2 py-1 text-[11px] font-medium border-warning/20 bg-warning/10 text-warning dark:border-warning dark:bg-warning/35 dark:text-warning">
                      Remote
                    </UBadge>
                  </div>
                  <div class="mt-4 min-w-0">
                    <h2 class="truncate text-[15px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Dina Moss</h2>
                    <p class="mt-1 truncate text-sm text-muted dark:text-muted">Guest</p>
                  </div>
                  <div class="mt-5 grid grid-cols-2 gap-4">
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Team</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Customer Experience</p>
                    </div>
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Joined</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Jan 9, 2025</p>
                    </div>
                  </div>
                  <div class="mt-4 min-w-0 space-y-1.5 text-sm text-toned dark:text-muted">
                    <div class="flex min-w-0 items-center gap-2">
                      <p class="truncate">dina.moss@shadcnblocks.dev</p>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated size-6 shrink-0 rounded-md text-dimmed hover:text-highlighted dark:text-dimmed dark:hover:text-highlighted" aria-label="Copy dina.moss@shadcnblocks.dev" type="button" @click="copyValue(&quot;Copy dina.moss@shadcnblocks.dev&quot;)">
                        <UIcon name="i-lucide-copy" class="size-3.5" />
                      </UButton>
                    </div>
                    <div class="flex items-center justify-between gap-4 pt-1 text-xs text-muted dark:text-muted">
                      <span class="truncate">(263) 555-1117</span>
                      <span class="shrink-0">2 teams</span>
                    </div>
                  </div>
                </article>
                <article class="group relative flex min-h-[248px] flex-col rounded-xl border border-(--ui-border)/80 bg-default p-4 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition duration-300 hover:-translate-y-0.5 hover:border-accented hover:shadow-[0_14px_32px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:hover:border-(--ui-text-inverted)/18">
                  <div class="flex items-start justify-between gap-3">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border border-default bg-default dark:border-(--ui-text-inverted)/10 dark:bg-default">
                        <img class="aspect-square h-full w-full" alt="Leo Park" src="/reference/6f77b9b90a56c3cc.png" loading="lazy" />
                      </span>
                      <span class="absolute right-0.5 bottom-0.5 size-3 rounded-full border-2 border-inverted dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)" />
                    </div>
                    <UBadge color="neutral" variant="subtle" class="inline-flex rounded-full border px-2 py-1 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:border-success dark:bg-success/35 dark:text-success">
                      Active
                    </UBadge>
                  </div>
                  <div class="mt-4 min-w-0">
                    <h2 class="truncate text-[15px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Leo Park</h2>
                    <p class="mt-1 truncate text-sm text-muted dark:text-muted">Member</p>
                  </div>
                  <div class="mt-5 grid grid-cols-2 gap-4">
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Team</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Mobile</p>
                    </div>
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Joined</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Jul 1, 2024</p>
                    </div>
                  </div>
                  <div class="mt-4 min-w-0 space-y-1.5 text-sm text-toned dark:text-muted">
                    <div class="flex min-w-0 items-center gap-2">
                      <p class="truncate">leo.park@shadcnblocks.dev</p>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated size-6 shrink-0 rounded-md text-dimmed hover:text-highlighted dark:text-dimmed dark:hover:text-highlighted" aria-label="Copy leo.park@shadcnblocks.dev" type="button" @click="copyValue(&quot;Copy leo.park@shadcnblocks.dev&quot;)">
                        <UIcon name="i-lucide-copy" class="size-3.5" />
                      </UButton>
                    </div>
                    <div class="flex items-center justify-between gap-4 pt-1 text-xs text-muted dark:text-muted">
                      <span class="truncate">(256) 555-1104</span>
                      <span class="shrink-0">2 teams</span>
                    </div>
                  </div>
                </article>
                <article class="group relative flex min-h-[248px] flex-col rounded-xl border border-(--ui-border)/80 bg-default p-4 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition duration-300 hover:-translate-y-0.5 hover:border-accented hover:shadow-[0_14px_32px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:hover:border-(--ui-text-inverted)/18">
                  <div class="flex items-start justify-between gap-3">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border border-default bg-default dark:border-(--ui-text-inverted)/10 dark:bg-default">
                        <img class="aspect-square h-full w-full" alt="Sofia Ahmed" src="/reference/ee2ed71ab799f5e3.png" loading="lazy" />
                      </span>
                      <span class="absolute right-0.5 bottom-0.5 size-3 rounded-full border-2 border-inverted dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-warning)" />
                    </div>
                    <UBadge color="neutral" variant="subtle" class="inline-flex rounded-full border px-2 py-1 text-[11px] font-medium border-info/20 bg-info/10 text-info dark:border-info dark:bg-info/35 dark:text-info">
                      Part-time
                    </UBadge>
                  </div>
                  <div class="mt-4 min-w-0">
                    <h2 class="truncate text-[15px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Sofia Ahmed</h2>
                    <p class="mt-1 truncate text-sm text-muted dark:text-muted">Admin</p>
                  </div>
                  <div class="mt-5 grid grid-cols-2 gap-4">
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Team</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Operations</p>
                    </div>
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Joined</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Dec 5, 2023</p>
                    </div>
                  </div>
                  <div class="mt-4 min-w-0 space-y-1.5 text-sm text-toned dark:text-muted">
                    <div class="flex min-w-0 items-center gap-2">
                      <p class="truncate">sofia.ahmed@shadcnblocks.dev</p>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated size-6 shrink-0 rounded-md text-dimmed hover:text-highlighted dark:text-dimmed dark:hover:text-highlighted" aria-label="Copy sofia.ahmed@shadcnblocks.dev" type="button" @click="copyValue(&quot;Copy sofia.ahmed@shadcnblocks.dev&quot;)">
                        <UIcon name="i-lucide-copy" class="size-3.5" />
                      </UButton>
                    </div>
                    <div class="flex items-center justify-between gap-4 pt-1 text-xs text-muted dark:text-muted">
                      <span class="truncate">(277) 555-1143</span>
                      <span class="shrink-0">2 teams</span>
                    </div>
                  </div>
                </article>
                <article class="group relative flex min-h-[248px] flex-col rounded-xl border border-(--ui-border)/80 bg-default p-4 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition duration-300 hover:-translate-y-0.5 hover:border-accented hover:shadow-[0_14px_32px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:hover:border-(--ui-text-inverted)/18">
                  <div class="flex items-start justify-between gap-3">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border border-default bg-default dark:border-(--ui-text-inverted)/10 dark:bg-default">
                        <img class="aspect-square h-full w-full" alt="Tia West" src="/reference/01c20c8256a0754a.png" loading="lazy" />
                      </span>
                      <span class="absolute right-0.5 bottom-0.5 size-3 rounded-full border-2 border-inverted dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-text-muted)" />
                    </div>
                    <UBadge color="neutral" variant="subtle" class="inline-flex rounded-full border px-2 py-1 text-[11px] font-medium border-warning/20 bg-warning/10 text-warning dark:border-warning dark:bg-warning/35 dark:text-warning">
                      Remote
                    </UBadge>
                  </div>
                  <div class="mt-4 min-w-0">
                    <h2 class="truncate text-[15px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Tia West</h2>
                    <p class="mt-1 truncate text-sm text-muted dark:text-muted">Member</p>
                  </div>
                  <div class="mt-5 grid grid-cols-2 gap-4">
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Team</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Field Services</p>
                    </div>
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Joined</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Mar 7, 2025</p>
                    </div>
                  </div>
                  <div class="mt-4 min-w-0 space-y-1.5 text-sm text-toned dark:text-muted">
                    <div class="flex min-w-0 items-center gap-2">
                      <p class="truncate">tia.west@shadcnblocks.dev</p>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated size-6 shrink-0 rounded-md text-dimmed hover:text-highlighted dark:text-dimmed dark:hover:text-highlighted" aria-label="Copy tia.west@shadcnblocks.dev" type="button" @click="copyValue(&quot;Copy tia.west@shadcnblocks.dev&quot;)">
                        <UIcon name="i-lucide-copy" class="size-3.5" />
                      </UButton>
                    </div>
                    <div class="flex items-center justify-between gap-4 pt-1 text-xs text-muted dark:text-muted">
                      <span class="truncate">(256) 555-1104</span>
                      <span class="shrink-0">2 teams</span>
                    </div>
                  </div>
                </article>
                <article class="group relative flex min-h-[248px] flex-col rounded-xl border border-(--ui-border)/80 bg-default p-4 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition duration-300 hover:-translate-y-0.5 hover:border-accented hover:shadow-[0_14px_32px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:hover:border-(--ui-text-inverted)/18">
                  <div class="flex items-start justify-between gap-3">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border border-default bg-default dark:border-(--ui-text-inverted)/10 dark:bg-default">
                        <img class="aspect-square h-full w-full" alt="Ethan Cole" src="/reference/0a5fda67e048ade8.png" loading="lazy" />
                      </span>
                      <span class="absolute right-0.5 bottom-0.5 size-3 rounded-full border-2 border-inverted dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)" />
                    </div>
                    <UBadge color="neutral" variant="subtle" class="inline-flex rounded-full border px-2 py-1 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:border-success dark:bg-success/35 dark:text-success">
                      Active
                    </UBadge>
                  </div>
                  <div class="mt-4 min-w-0">
                    <h2 class="truncate text-[15px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Ethan Cole</h2>
                    <p class="mt-1 truncate text-sm text-muted dark:text-muted">Member</p>
                  </div>
                  <div class="mt-5 grid grid-cols-2 gap-4">
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Team</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Mobile</p>
                    </div>
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Joined</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">May 13, 2024</p>
                    </div>
                  </div>
                  <div class="mt-4 min-w-0 space-y-1.5 text-sm text-toned dark:text-muted">
                    <div class="flex min-w-0 items-center gap-2">
                      <p class="truncate">ethan.cole@shadcnblocks.dev</p>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated size-6 shrink-0 rounded-md text-dimmed hover:text-highlighted dark:text-dimmed dark:hover:text-highlighted" aria-label="Copy ethan.cole@shadcnblocks.dev" type="button" @click="copyValue(&quot;Copy ethan.cole@shadcnblocks.dev&quot;)">
                        <UIcon name="i-lucide-copy" class="size-3.5" />
                      </UButton>
                    </div>
                    <div class="flex items-center justify-between gap-4 pt-1 text-xs text-muted dark:text-muted">
                      <span class="truncate">(270) 555-1130</span>
                      <span class="shrink-0">1 teams</span>
                    </div>
                  </div>
                </article>
                <article class="group relative flex min-h-[248px] flex-col rounded-xl border border-(--ui-border)/80 bg-default p-4 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition duration-300 hover:-translate-y-0.5 hover:border-accented hover:shadow-[0_14px_32px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:hover:border-(--ui-text-inverted)/18">
                  <div class="flex items-start justify-between gap-3">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border border-default bg-default dark:border-(--ui-text-inverted)/10 dark:bg-default">
                        <img class="aspect-square h-full w-full" alt="Nina Brooks" src="/reference/c856dbf3620c8188.png" loading="lazy" />
                      </span>
                      <span class="absolute right-0.5 bottom-0.5 size-3 rounded-full border-2 border-inverted dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-warning)" />
                    </div>
                    <UBadge color="neutral" variant="subtle" class="inline-flex rounded-full border px-2 py-1 text-[11px] font-medium border-info/20 bg-info/10 text-info dark:border-info dark:bg-info/35 dark:text-info">
                      Part-time
                    </UBadge>
                  </div>
                  <div class="mt-4 min-w-0">
                    <h2 class="truncate text-[15px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Nina Brooks</h2>
                    <p class="mt-1 truncate text-sm text-muted dark:text-muted">Guest</p>
                  </div>
                  <div class="mt-5 grid grid-cols-2 gap-4">
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Team</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Mobile</p>
                    </div>
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Joined</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Feb 24, 2025</p>
                    </div>
                  </div>
                  <div class="mt-4 min-w-0 space-y-1.5 text-sm text-toned dark:text-muted">
                    <div class="flex min-w-0 items-center gap-2">
                      <p class="truncate">nina.brooks@shadcnblocks.dev</p>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated size-6 shrink-0 rounded-md text-dimmed hover:text-highlighted dark:text-dimmed dark:hover:text-highlighted" aria-label="Copy nina.brooks@shadcnblocks.dev" type="button" @click="copyValue(&quot;Copy nina.brooks@shadcnblocks.dev&quot;)">
                        <UIcon name="i-lucide-copy" class="size-3.5" />
                      </UButton>
                    </div>
                    <div class="flex items-center justify-between gap-4 pt-1 text-xs text-muted dark:text-muted">
                      <span class="truncate">(277) 555-1143</span>
                      <span class="shrink-0">2 teams</span>
                    </div>
                  </div>
                </article>
                <article class="group relative flex min-h-[248px] flex-col rounded-xl border border-(--ui-border)/80 bg-default p-4 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition duration-300 hover:-translate-y-0.5 hover:border-accented hover:shadow-[0_14px_32px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:hover:border-(--ui-text-inverted)/18">
                  <div class="flex items-start justify-between gap-3">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border border-default bg-default dark:border-(--ui-text-inverted)/10 dark:bg-default">
                        <img class="aspect-square h-full w-full" alt="Jules Hart" src="/reference/4759e542002c0be5.png" loading="lazy" />
                      </span>
                      <span class="absolute right-0.5 bottom-0.5 size-3 rounded-full border-2 border-inverted dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)" />
                    </div>
                    <UBadge color="neutral" variant="subtle" class="inline-flex rounded-full border px-2 py-1 text-[11px] font-medium border-success/20 bg-success/10 text-success dark:border-success dark:bg-success/35 dark:text-success">
                      Active
                    </UBadge>
                  </div>
                  <div class="mt-4 min-w-0">
                    <h2 class="truncate text-[15px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Jules Hart</h2>
                    <p class="mt-1 truncate text-sm text-muted dark:text-muted">Member</p>
                  </div>
                  <div class="mt-5 grid grid-cols-2 gap-4">
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Team</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Mobile</p>
                    </div>
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Joined</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Aug 26, 2024</p>
                    </div>
                  </div>
                  <div class="mt-4 min-w-0 space-y-1.5 text-sm text-toned dark:text-muted">
                    <div class="flex min-w-0 items-center gap-2">
                      <p class="truncate">jules.hart@shadcnblocks.dev</p>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated size-6 shrink-0 rounded-md text-dimmed hover:text-highlighted dark:text-dimmed dark:hover:text-highlighted" aria-label="Copy jules.hart@shadcnblocks.dev" type="button" @click="copyValue(&quot;Copy jules.hart@shadcnblocks.dev&quot;)">
                        <UIcon name="i-lucide-copy" class="size-3.5" />
                      </UButton>
                    </div>
                    <div class="flex items-center justify-between gap-4 pt-1 text-xs text-muted dark:text-muted">
                      <span class="truncate">(270) 555-1130</span>
                      <span class="shrink-0">2 teams</span>
                    </div>
                  </div>
                </article>
                <article class="group relative flex min-h-[248px] flex-col rounded-xl border border-(--ui-border)/80 bg-default p-4 shadow-[0_1px_2px_color-mix(in_oklab,_var(--ui-info)_4%,_transparent)] transition duration-300 hover:-translate-y-0.5 hover:border-accented hover:shadow-[0_14px_32px_color-mix(in_oklab,_var(--ui-info)_8%,_transparent)] dark:border-(--ui-text-inverted)/10 dark:bg-[var(--ui-bg-inverted)] dark:hover:border-(--ui-text-inverted)/18">
                  <div class="flex items-start justify-between gap-3">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border border-default bg-default dark:border-(--ui-text-inverted)/10 dark:bg-default">
                        <img class="aspect-square h-full w-full" alt="Harper Singh" src="/reference/e92f665d5ff7fc07.png" loading="lazy" />
                      </span>
                      <span class="absolute right-0.5 bottom-0.5 size-3 rounded-full border-2 border-inverted dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-text-muted)" />
                    </div>
                    <UBadge color="neutral" variant="subtle" class="inline-flex rounded-full border px-2 py-1 text-[11px] font-medium border-warning/20 bg-warning/10 text-warning dark:border-warning dark:bg-warning/35 dark:text-warning">
                      Remote
                    </UBadge>
                  </div>
                  <div class="mt-4 min-w-0">
                    <h2 class="truncate text-[15px] font-semibold text-highlighted dark:text-highlighted text-highlighted">Harper Singh</h2>
                    <p class="mt-1 truncate text-sm text-muted dark:text-muted">Member</p>
                  </div>
                  <div class="mt-5 grid grid-cols-2 gap-4">
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Team</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Operations</p>
                    </div>
                    <div class="min-w-0">
                      <p class="text-[11px] text-muted dark:text-muted">Joined</p>
                      <p class="mt-1 truncate text-sm font-medium text-highlighted dark:text-highlighted">Oct 15, 2024</p>
                    </div>
                  </div>
                  <div class="mt-4 min-w-0 space-y-1.5 text-sm text-toned dark:text-muted">
                    <div class="flex min-w-0 items-center gap-2">
                      <p class="truncate">harper.singh@shadcnblocks.dev</p>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated size-6 shrink-0 rounded-md text-dimmed hover:text-highlighted dark:text-dimmed dark:hover:text-highlighted" aria-label="Copy harper.singh@shadcnblocks.dev" type="button" @click="copyValue(&quot;Copy harper.singh@shadcnblocks.dev&quot;)">
                        <UIcon name="i-lucide-copy" class="size-3.5" />
                      </UButton>
                    </div>
                    <div class="flex items-center justify-between gap-4 pt-1 text-xs text-muted dark:text-muted">
                      <span class="truncate">(284) 555-1156</span>
                      <span class="shrink-0">2 teams</span>
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
