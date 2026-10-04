<!-- Page: /project-management/team-list-1 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Team List 1 · Blocks Admin" })

const toast = useToast()

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/team-list-1">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main id="main-content" class="bg-default flex min-h-0 flex-1 flex-col overflow-hidden dark:bg-[radial-gradient(circle_at_top,color-mix(in_oklab,_var(--ui-bg)_3.5000000000000004%,_transparent),transparent_28%)]">
          <div class="border-b dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)]/95 border-default">
            <div class="flex flex-col gap-2 px-4 py-3 sm:px-6 lg:min-h-14 lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:py-0">
              <div class="flex min-w-0 items-center justify-between gap-3">
                <div class="flex min-w-0 items-center gap-2.5 text-sm font-medium dark:text-highlighted">
                  <span class="truncate">Teams</span>
                  <span class="bg-muted text-muted shrink-0 rounded-md px-1.5 py-0.5 text-xs dark:bg-default dark:text-default">8</span>
                </div>
                <UButton color="primary" variant="solid" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 rounded-md text-xs size-9 shrink-0 gap-1.5 p-0 sm:w-auto sm:px-3 lg:hidden" aria-label="Add Team" type="button" @click="openAction(&quot;Add Team&quot;)">
                  <UIcon name="i-lucide-plus" class="size-3.5" />
                  <span class="hidden sm:inline">Add Team</span>
                </UButton>
              </div>
              <div class="grid min-w-0 grid-cols-2 items-center gap-2 lg:flex lg:flex-wrap lg:justify-end">
                <UButton color="neutral" variant="outline" class="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-xs rounded-md text-xs relative h-9 w-full justify-center gap-1.5 px-2.5 lg:h-8 lg:w-auto lg:border-transparent lg:bg-transparent lg:shadow-none border-default bg-default text-highlighted hover:bg-elevated hover:text-default" aria-label="Filter" type="button" @click="openAction(&quot;Filter&quot;)">
                  <UIcon name="i-lucide-list-filter" class="size-3.5" />
                  Filter
                </UButton>
                <UButton color="neutral" variant="outline" class="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-xs rounded-md px-3 text-xs h-9 w-full justify-center gap-1.5 lg:h-8 lg:w-auto border-default bg-default text-highlighted hover:bg-elevated hover:text-default" aria-label="Display" type="button" @click="openAction(&quot;Display&quot;)">
                  <UIcon name="i-lucide-sliders-horizontal" class="size-3.5" />
                  Display
                </UButton>
                <UButton color="primary" variant="solid" class="items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 rounded-md px-3 text-xs hidden h-8 gap-1.5 lg:inline-flex" aria-label="Add Team" type="button" @click="openAction(&quot;Add Team&quot;)">
                  <UIcon name="i-lucide-plus" class="size-3.5" />
                  Add Team
                </UButton>
              </div>
            </div>
          </div>
          <div class="flex-1 overflow-auto dark:bg-[linear-gradient(180deg,color-mix(in_oklab,_var(--ui-bg)_1%,_transparent),transparent_12%)]">
            <div class="min-w-[860px] border-b px-4 py-2 text-sm text-muted sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)]/95 dark:text-muted border-default">
              <div class="flex items-center">
                <div class="w-[300px] shrink-0 lg:w-[30%] lg:shrink">Team</div>
                <div class="w-[120px] shrink-0 lg:w-[14%] lg:shrink">Focus</div>
                <div class="w-[100px] shrink-0 lg:w-[12%] lg:shrink">SLA</div>
                <div class="w-[150px] shrink-0 lg:w-[16%] lg:shrink">Maintainers</div>
                <div class="w-[120px] shrink-0 lg:w-[14%] lg:shrink">Open work</div>
                <div class="w-[90px] shrink-0 pl-2 lg:w-[14%] lg:shrink">Activity</div>
              </div>
            </div>
            <div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[860px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[300px] shrink-0 lg:w-[30%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="bg-(--ui-bg-muted)/60 flex size-7 shrink-0 items-center justify-center rounded-md text-sm dark:bg-(--ui-bg)/80">💬</div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Customer Experience</p>
                      <p class="truncate text-xs text-muted dark:text-muted">CX</p>
                    </div>
                  </div>
                </div>
                <div class="w-[120px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Delivery</div>
                <div class="w-[100px] shrink-0 lg:w-[12%] lg:shrink">
                  <UBadge color="neutral" variant="subtle" class="bg-elevated text-default inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium">
                    <UIcon name="i-lucide-clock-3" class="size-3.5" />
                    8h
                  </UBadge>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[16%] lg:shrink">
                  <UButton color="neutral" variant="ghost" class="flex -space-x-2 transition-transform hover:translate-x-0.5" aria-label="+2" type="button" @click="openAction(&quot;+2&quot;)">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2 dark:border-[var(--ui-text-highlighted)]">
                      <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                    </span>
                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2 dark:border-[var(--ui-text-highlighted)]">
                      <img class="aspect-square h-full w-full" alt="Chloe Park" src="/reference/62828bc2a489837e.png" loading="lazy" />
                    </span>
                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2 dark:border-[var(--ui-text-highlighted)]">
                      <img class="aspect-square h-full w-full" alt="Kabir Sethi" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                    </span>
                    <span class="bg-muted text-muted border-(--ui-bg) flex size-7 items-center justify-center rounded-full border-2 text-[10px] font-medium dark:border-[var(--ui-text-highlighted)] dark:bg-default dark:text-default">+2</span>
                  </UButton>
                </div>
                <div class="flex w-[120px] shrink-0 lg:w-[14%] lg:shrink">
                  <div class="flex items-center gap-3">
                    <UButton color="neutral" variant="ghost" class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted" aria-label="3" type="button" @click="openAction(&quot;3&quot;)">
                      <UIcon name="i-lucide-folder-kanban" class="size-3.5" />
                      3
                    </UButton>
                    <span class="text-xs text-muted dark:text-muted">13 open</span>
                  </div>
                </div>
                <div class="w-[90px] shrink-0 pl-2 lg:w-[14%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <UIcon name="i-lucide-clock-3" class="size-3.5 shrink-0" />
                    <span>Apr 13</span>
                  </div>
                </div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[860px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[300px] shrink-0 lg:w-[30%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="bg-(--ui-bg-muted)/60 flex size-7 shrink-0 items-center justify-center rounded-md text-sm dark:bg-(--ui-bg)/80">🛠️</div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Field Services</p>
                      <p class="truncate text-xs text-muted dark:text-muted">FIELD</p>
                    </div>
                  </div>
                </div>
                <div class="w-[120px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Delivery</div>
                <div class="w-[100px] shrink-0 lg:w-[12%] lg:shrink">
                  <UBadge color="neutral" variant="subtle" class="bg-elevated text-default inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium">
                    <UIcon name="i-lucide-clock-3" class="size-3.5" />
                    8h
                  </UBadge>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[16%] lg:shrink">
                  <UButton color="neutral" variant="ghost" class="flex -space-x-2 transition-transform hover:translate-x-0.5" aria-label="View 3 maintainers" type="button" @click="openAction(&quot;View 3 maintainers&quot;)">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2 dark:border-[var(--ui-text-highlighted)]">
                      <img class="aspect-square h-full w-full" alt="Leo Park" src="/reference/6f77b9b90a56c3cc.png" loading="lazy" />
                    </span>
                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2 dark:border-[var(--ui-text-highlighted)]">
                      <img class="aspect-square h-full w-full" alt="Tia West" src="/reference/01c20c8256a0754a.png" loading="lazy" />
                    </span>
                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2 dark:border-[var(--ui-text-highlighted)]">
                      <img class="aspect-square h-full w-full" alt="Nina Brooks" src="/reference/c856dbf3620c8188.png" loading="lazy" />
                    </span>
                  </UButton>
                </div>
                <div class="flex w-[120px] shrink-0 lg:w-[14%] lg:shrink">
                  <div class="flex items-center gap-3">
                    <UButton color="neutral" variant="ghost" class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted" aria-label="1" type="button" @click="openAction(&quot;1&quot;)">
                      <UIcon name="i-lucide-folder-kanban" class="size-3.5" />
                      1
                    </UButton>
                    <span class="text-xs text-muted dark:text-muted">5 open</span>
                  </div>
                </div>
                <div class="w-[90px] shrink-0 pl-2 lg:w-[14%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <UIcon name="i-lucide-clock-3" class="size-3.5 shrink-0" />
                    <span>Apr 15</span>
                  </div>
                </div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[860px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[300px] shrink-0 lg:w-[30%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="bg-(--ui-bg-muted)/60 flex size-7 shrink-0 items-center justify-center rounded-md text-sm dark:bg-(--ui-bg)/80">📈</div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Growth</p>
                      <p class="truncate text-xs text-muted dark:text-muted">GROWTH</p>
                    </div>
                  </div>
                </div>
                <div class="w-[120px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Experience</div>
                <div class="w-[100px] shrink-0 lg:w-[12%] lg:shrink">
                  <UBadge color="neutral" variant="subtle" class="bg-elevated text-default inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium">
                    <UIcon name="i-lucide-clock-3" class="size-3.5" />
                    24h
                  </UBadge>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[16%] lg:shrink">
                  <UButton color="neutral" variant="ghost" class="flex -space-x-2 transition-transform hover:translate-x-0.5" aria-label="+2" type="button" @click="openAction(&quot;+2&quot;)">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2 dark:border-[var(--ui-text-highlighted)]">
                      <img class="aspect-square h-full w-full" alt="Ben Lewis" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                    </span>
                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2 dark:border-[var(--ui-text-highlighted)]">
                      <img class="aspect-square h-full w-full" alt="Maya Rao" src="/reference/247ac7c76922347b.png" loading="lazy" />
                    </span>
                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2 dark:border-[var(--ui-text-highlighted)]">
                      <img class="aspect-square h-full w-full" alt="Owen Lee" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                    </span>
                    <span class="bg-muted text-muted border-(--ui-bg) flex size-7 items-center justify-center rounded-full border-2 text-[10px] font-medium dark:border-[var(--ui-text-highlighted)] dark:bg-default dark:text-default">+2</span>
                  </UButton>
                </div>
                <div class="flex w-[120px] shrink-0 lg:w-[14%] lg:shrink">
                  <div class="flex items-center gap-3">
                    <UButton color="neutral" variant="ghost" class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted" aria-label="2" type="button" @click="openAction(&quot;2&quot;)">
                      <UIcon name="i-lucide-folder-kanban" class="size-3.5" />
                      2
                    </UButton>
                    <span class="text-xs text-muted dark:text-muted">8 open</span>
                  </div>
                </div>
                <div class="w-[90px] shrink-0 pl-2 lg:w-[14%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <UIcon name="i-lucide-clock-3" class="size-3.5 shrink-0" />
                    <span>Apr 15</span>
                  </div>
                </div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[860px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[300px] shrink-0 lg:w-[30%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="bg-(--ui-bg-muted)/60 flex size-7 shrink-0 items-center justify-center rounded-md text-sm dark:bg-(--ui-bg)/80">📱</div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Mobile</p>
                      <p class="truncate text-xs text-muted dark:text-muted">MOBILE</p>
                    </div>
                  </div>
                </div>
                <div class="w-[120px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Platform</div>
                <div class="w-[100px] shrink-0 lg:w-[12%] lg:shrink">
                  <UBadge color="neutral" variant="subtle" class="bg-elevated text-default inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium">
                    <UIcon name="i-lucide-clock-3" class="size-3.5" />
                    24h
                  </UBadge>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[16%] lg:shrink">
                  <UButton color="neutral" variant="ghost" class="flex -space-x-2 transition-transform hover:translate-x-0.5" aria-label="+1" type="button" @click="openAction(&quot;+1&quot;)">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2 dark:border-[var(--ui-text-highlighted)]">
                      <img class="aspect-square h-full w-full" alt="Leo Park" src="/reference/6f77b9b90a56c3cc.png" loading="lazy" />
                    </span>
                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2 dark:border-[var(--ui-text-highlighted)]">
                      <img class="aspect-square h-full w-full" alt="Ethan Cole" src="/reference/0a5fda67e048ade8.png" loading="lazy" />
                    </span>
                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2 dark:border-[var(--ui-text-highlighted)]">
                      <img class="aspect-square h-full w-full" alt="Nina Brooks" src="/reference/c856dbf3620c8188.png" loading="lazy" />
                    </span>
                    <span class="bg-muted text-muted border-(--ui-bg) flex size-7 items-center justify-center rounded-full border-2 text-[10px] font-medium dark:border-[var(--ui-text-highlighted)] dark:bg-default dark:text-default">+1</span>
                  </UButton>
                </div>
                <div class="flex w-[120px] shrink-0 lg:w-[14%] lg:shrink">
                  <div class="flex items-center gap-3">
                    <UButton color="neutral" variant="ghost" class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted" aria-label="1" type="button" @click="openAction(&quot;1&quot;)">
                      <UIcon name="i-lucide-folder-kanban" class="size-3.5" />
                      1
                    </UButton>
                    <span class="text-xs text-muted dark:text-muted">4 open</span>
                  </div>
                </div>
                <div class="w-[90px] shrink-0 pl-2 lg:w-[14%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <UIcon name="i-lucide-clock-3" class="size-3.5 shrink-0" />
                    <span>Apr 11</span>
                  </div>
                </div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[860px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[300px] shrink-0 lg:w-[30%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="bg-(--ui-bg-muted)/60 flex size-7 shrink-0 items-center justify-center rounded-md text-sm dark:bg-(--ui-bg)/80">🧭</div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Operations</p>
                      <p class="truncate text-xs text-muted dark:text-muted">OPS</p>
                    </div>
                  </div>
                </div>
                <div class="w-[120px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Revenue</div>
                <div class="w-[100px] shrink-0 lg:w-[12%] lg:shrink">
                  <UBadge color="neutral" variant="subtle" class="bg-elevated text-default inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium">
                    <UIcon name="i-lucide-clock-3" class="size-3.5" />
                    8h
                  </UBadge>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[16%] lg:shrink">
                  <UButton color="neutral" variant="ghost" class="flex -space-x-2 transition-transform hover:translate-x-0.5" aria-label="+4" type="button" @click="openAction(&quot;+4&quot;)">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2 dark:border-[var(--ui-text-highlighted)]">
                      <img class="aspect-square h-full w-full" alt="Riya Sharma" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                    </span>
                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2 dark:border-[var(--ui-text-highlighted)]">
                      <img class="aspect-square h-full w-full" alt="Ben Lewis" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                    </span>
                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2 dark:border-[var(--ui-text-highlighted)]">
                      <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                    </span>
                    <span class="bg-muted text-muted border-(--ui-bg) flex size-7 items-center justify-center rounded-full border-2 text-[10px] font-medium dark:border-[var(--ui-text-highlighted)] dark:bg-default dark:text-default">+4</span>
                  </UButton>
                </div>
                <div class="flex w-[120px] shrink-0 lg:w-[14%] lg:shrink">
                  <div class="flex items-center gap-3">
                    <UButton color="neutral" variant="ghost" class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted" aria-label="3" type="button" @click="openAction(&quot;3&quot;)">
                      <UIcon name="i-lucide-folder-kanban" class="size-3.5" />
                      3
                    </UButton>
                    <span class="text-xs text-muted dark:text-muted">9 open</span>
                  </div>
                </div>
                <div class="w-[90px] shrink-0 pl-2 lg:w-[14%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <UIcon name="i-lucide-clock-3" class="size-3.5 shrink-0" />
                    <span>Apr 16</span>
                  </div>
                </div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[860px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[300px] shrink-0 lg:w-[30%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="bg-(--ui-bg-muted)/60 flex size-7 shrink-0 items-center justify-center rounded-md text-sm dark:bg-(--ui-bg)/80">🤝</div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Partnerships</p>
                      <p class="truncate text-xs text-muted dark:text-muted">PARTNER</p>
                    </div>
                  </div>
                </div>
                <div class="w-[120px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Revenue</div>
                <div class="w-[100px] shrink-0 lg:w-[12%] lg:shrink">
                  <UBadge color="neutral" variant="subtle" class="bg-elevated text-default inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium">
                    <UIcon name="i-lucide-clock-3" class="size-3.5" />
                    8h
                  </UBadge>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[16%] lg:shrink">
                  <UButton color="neutral" variant="ghost" class="flex -space-x-2 transition-transform hover:translate-x-0.5" aria-label="View 3 maintainers" type="button" @click="openAction(&quot;View 3 maintainers&quot;)">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2 dark:border-[var(--ui-text-highlighted)]">
                      <img class="aspect-square h-full w-full" alt="Owen Lee" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                    </span>
                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2 dark:border-[var(--ui-text-highlighted)]">
                      <img class="aspect-square h-full w-full" alt="Victor Hale" src="/reference/146332adc3a2c901.png" loading="lazy" />
                    </span>
                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2 dark:border-[var(--ui-text-highlighted)]">
                      <img class="aspect-square h-full w-full" alt="Kabir Sethi" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                    </span>
                  </UButton>
                </div>
                <div class="flex w-[120px] shrink-0 lg:w-[14%] lg:shrink">
                  <div class="flex items-center gap-3">
                    <UButton color="neutral" variant="ghost" class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted" aria-label="2" type="button" @click="openAction(&quot;2&quot;)">
                      <UIcon name="i-lucide-folder-kanban" class="size-3.5" />
                      2
                    </UButton>
                    <span class="text-xs text-muted dark:text-muted">9 open</span>
                  </div>
                </div>
                <div class="w-[90px] shrink-0 pl-2 lg:w-[14%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <UIcon name="i-lucide-clock-3" class="size-3.5 shrink-0" />
                    <span>Apr 9</span>
                  </div>
                </div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[860px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[300px] shrink-0 lg:w-[30%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="bg-(--ui-bg-muted)/60 flex size-7 shrink-0 items-center justify-center rounded-md text-sm dark:bg-(--ui-bg)/80">🗂️</div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Program Office</p>
                      <p class="truncate text-xs text-muted dark:text-muted">PROGRAM</p>
                    </div>
                  </div>
                </div>
                <div class="w-[120px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Platform</div>
                <div class="w-[100px] shrink-0 lg:w-[12%] lg:shrink">
                  <UBadge color="neutral" variant="subtle" class="bg-elevated text-default inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium">
                    <UIcon name="i-lucide-clock-3" class="size-3.5" />
                    24h
                  </UBadge>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[16%] lg:shrink">
                  <UButton color="neutral" variant="ghost" class="flex -space-x-2 transition-transform hover:translate-x-0.5" aria-label="+1" type="button" @click="openAction(&quot;+1&quot;)">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2 dark:border-[var(--ui-text-highlighted)]">
                      <img class="aspect-square h-full w-full" alt="Riya Sharma" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                    </span>
                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2 dark:border-[var(--ui-text-highlighted)]">
                      <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                    </span>
                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2 dark:border-[var(--ui-text-highlighted)]">
                      <img class="aspect-square h-full w-full" alt="Maya Rao" src="/reference/247ac7c76922347b.png" loading="lazy" />
                    </span>
                    <span class="bg-muted text-muted border-(--ui-bg) flex size-7 items-center justify-center rounded-full border-2 text-[10px] font-medium dark:border-[var(--ui-text-highlighted)] dark:bg-default dark:text-default">+1</span>
                  </UButton>
                </div>
                <div class="flex w-[120px] shrink-0 lg:w-[14%] lg:shrink">
                  <div class="flex items-center gap-3">
                    <UButton color="neutral" variant="ghost" class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted" aria-label="3" type="button" @click="openAction(&quot;3&quot;)">
                      <UIcon name="i-lucide-folder-kanban" class="size-3.5" />
                      3
                    </UButton>
                    <span class="text-xs text-muted dark:text-muted">13 open</span>
                  </div>
                </div>
                <div class="w-[90px] shrink-0 pl-2 lg:w-[14%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <UIcon name="i-lucide-clock-3" class="size-3.5 shrink-0" />
                    <span>Apr 13</span>
                  </div>
                </div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[860px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[300px] shrink-0 lg:w-[30%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="bg-(--ui-bg-muted)/60 flex size-7 shrink-0 items-center justify-center rounded-md text-sm dark:bg-(--ui-bg)/80">🧲</div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Talent</p>
                      <p class="truncate text-xs text-muted dark:text-muted">TALENT</p>
                    </div>
                  </div>
                </div>
                <div class="w-[120px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Experience</div>
                <div class="w-[100px] shrink-0 lg:w-[12%] lg:shrink">
                  <UBadge color="neutral" variant="subtle" class="bg-elevated text-default inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium">
                    <UIcon name="i-lucide-clock-3" class="size-3.5" />
                    24h
                  </UBadge>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[16%] lg:shrink">
                  <UButton color="neutral" variant="ghost" class="flex -space-x-2 transition-transform hover:translate-x-0.5" aria-label="View 3 maintainers" type="button" @click="openAction(&quot;View 3 maintainers&quot;)">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2 dark:border-[var(--ui-text-highlighted)]">
                      <img class="aspect-square h-full w-full" alt="Riya Sharma" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                    </span>
                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2 dark:border-[var(--ui-text-highlighted)]">
                      <img class="aspect-square h-full w-full" alt="Sofia Ahmed" src="/reference/ee2ed71ab799f5e3.png" loading="lazy" />
                    </span>
                    <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-7 border-2 dark:border-[var(--ui-text-highlighted)]">
                      <img class="aspect-square h-full w-full" alt="Harper Singh" src="/reference/e92f665d5ff7fc07.png" loading="lazy" />
                    </span>
                  </UButton>
                </div>
                <div class="flex w-[120px] shrink-0 lg:w-[14%] lg:shrink">
                  <div class="flex items-center gap-3">
                    <UButton color="neutral" variant="ghost" class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted" aria-label="1" type="button" @click="openAction(&quot;1&quot;)">
                      <UIcon name="i-lucide-folder-kanban" class="size-3.5" />
                      1
                    </UButton>
                    <span class="text-xs text-muted dark:text-muted">3 open</span>
                  </div>
                </div>
                <div class="w-[90px] shrink-0 pl-2 lg:w-[14%] lg:shrink">
                  <div class="text-muted flex items-center gap-1.5 text-xs font-medium dark:text-muted">
                    <UIcon name="i-lucide-clock-3" class="size-3.5 shrink-0" />
                    <span>Apr 16</span>
                  </div>
                </div>
              </div>
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
