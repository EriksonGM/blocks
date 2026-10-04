<!-- Page: /project-management/member-list-1 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Member List 1 · Blocks Admin" })

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/member-list-1">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main id="main-content" class="bg-default flex min-h-0 flex-1 flex-col overflow-hidden dark:bg-[radial-gradient(circle_at_top,color-mix(in_oklab,_var(--ui-bg)_3.5000000000000004%,_transparent),transparent_28%)]">
          <div class="border-b dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)]/95 border-default">
            <div class="flex flex-col gap-2 px-4 py-3 sm:px-6 lg:min-h-14 lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:py-0">
              <div class="flex min-w-0 items-center justify-between gap-3">
                <div class="flex min-w-0 items-center gap-2.5 text-sm font-medium dark:text-highlighted">
                  <span class="truncate">Members</span>
                  <span class="bg-muted text-muted shrink-0 rounded-md px-1.5 py-0.5 text-xs dark:bg-default dark:text-default">16</span>
                </div>
                <UButton color="primary" variant="solid" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 rounded-md text-xs size-9 shrink-0 gap-1.5 p-0 sm:w-auto sm:px-3 lg:hidden" aria-label="Invite Member" type="button" @click="openAction(&quot;Invite Member&quot;)">
                  <UIcon name="i-lucide-plus" class="size-3.5" />
                  <span class="hidden sm:inline">Invite Member</span>
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
                <UButton color="primary" variant="solid" class="items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 rounded-md px-3 text-xs hidden h-8 gap-1.5 lg:inline-flex" aria-label="Invite Member" type="button" @click="openAction(&quot;Invite Member&quot;)">
                  <UIcon name="i-lucide-plus" class="size-3.5" />
                  Invite Member
                </UButton>
              </div>
            </div>
          </div>
          <div class="flex-1 overflow-auto dark:bg-[linear-gradient(180deg,color-mix(in_oklab,_var(--ui-bg)_1%,_transparent),transparent_12%)]">
            <div class="min-w-[900px] border-b px-4 py-2 text-sm text-muted sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)]/95 dark:text-muted border-default">
              <div class="flex items-center">
                <div class="w-[320px] shrink-0 lg:w-[36%] lg:shrink">Member</div>
                <div class="w-[150px] shrink-0 lg:w-[16%] lg:shrink">Availability</div>
                <div class="w-[100px] shrink-0 lg:w-[14%] lg:shrink">Role</div>
                <div class="w-[220px] shrink-0 lg:w-[20%] lg:shrink">Teams</div>
                <div class="w-[110px] shrink-0 lg:w-[14%] lg:shrink">Joined</div>
              </div>
            </div>
            <div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[900px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[320px] shrink-0 lg:w-[36%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="relative">
                      <span class="relative flex overflow-hidden rounded-full size-8 shrink-0">
                        <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)">
                        <span class="sr-only">online</span>
                      </span>
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Ava Reed</p>
                      <p class="truncate text-xs text-muted dark:text-muted">ava.reed@shadcnblocks.dev</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[16%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-circle-check" class="size-4 shrink-0 text-success" />
                    <span class="truncate text-xs font-medium dark:text-highlighted">Available</span>
                  </div>
                </div>
                <div class="w-[100px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Member</div>
                <div class="flex w-[220px] shrink-0 lg:w-[20%] lg:shrink">
                  <UButton color="neutral" variant="ghost" class="text-muted flex items-center gap-1 truncate text-xs font-medium dark:text-muted" aria-label="OPS, CX +1" type="button" @click="openAction(&quot;OPS, CX +1&quot;)">
                    <UIcon name="i-lucide-contact-round" class="size-3.5 shrink-0" />
                    <span class="truncate">OPS, CX +1</span>
                  </UButton>
                </div>
                <div class="w-[110px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Apr 2024</div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[900px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[320px] shrink-0 lg:w-[36%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="relative">
                      <span class="relative flex overflow-hidden rounded-full size-8 shrink-0">
                        <img class="aspect-square h-full w-full" alt="Ben Lewis" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)">
                        <span class="sr-only">online</span>
                      </span>
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Ben Lewis</p>
                      <p class="truncate text-xs text-muted dark:text-muted">ben.lewis@shadcnblocks.dev</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[16%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-circle-check" class="size-4 shrink-0 text-success" />
                    <span class="truncate text-xs font-medium dark:text-highlighted">Available</span>
                  </div>
                </div>
                <div class="w-[100px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Admin</div>
                <div class="flex w-[220px] shrink-0 lg:w-[20%] lg:shrink">
                  <UButton color="neutral" variant="ghost" class="text-muted flex items-center gap-1 truncate text-xs font-medium dark:text-muted" aria-label="OPS, GROWTH" type="button" @click="openAction(&quot;OPS, GROWTH&quot;)">
                    <UIcon name="i-lucide-contact-round" class="size-3.5 shrink-0" />
                    <span class="truncate">OPS, GROWTH</span>
                  </UButton>
                </div>
                <div class="w-[110px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Nov 2023</div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[900px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[320px] shrink-0 lg:w-[36%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="relative">
                      <span class="relative flex overflow-hidden rounded-full size-8 shrink-0">
                        <img class="aspect-square h-full w-full" alt="Chloe Park" src="/reference/62828bc2a489837e.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)">
                        <span class="sr-only">online</span>
                      </span>
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Chloe Park</p>
                      <p class="truncate text-xs text-muted dark:text-muted">chloe.park@shadcnblocks.dev</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[16%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-circle-check" class="size-4 shrink-0 text-success" />
                    <span class="truncate text-xs font-medium dark:text-highlighted">Available</span>
                  </div>
                </div>
                <div class="w-[100px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Member</div>
                <div class="flex w-[220px] shrink-0 lg:w-[20%] lg:shrink">
                  <UButton color="neutral" variant="ghost" class="text-muted flex items-center gap-1 truncate text-xs font-medium dark:text-muted" aria-label="CX, GROWTH" type="button" @click="openAction(&quot;CX, GROWTH&quot;)">
                    <UIcon name="i-lucide-contact-round" class="size-3.5 shrink-0" />
                    <span class="truncate">CX, GROWTH</span>
                  </UButton>
                </div>
                <div class="w-[110px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Sep 2024</div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[900px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[320px] shrink-0 lg:w-[36%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="relative">
                      <span class="relative flex overflow-hidden rounded-full size-8 shrink-0">
                        <img class="aspect-square h-full w-full" alt="Dina Moss" src="/reference/ada84674117f0188.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-text-muted)">
                        <span class="sr-only">offline</span>
                      </span>
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Dina Moss</p>
                      <p class="truncate text-xs text-muted dark:text-muted">dina.moss@shadcnblocks.dev</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[16%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-circle-dot-dashed" class="size-4 shrink-0 text-muted" />
                    <span class="truncate text-xs font-medium dark:text-highlighted">Offline</span>
                  </div>
                </div>
                <div class="w-[100px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Guest</div>
                <div class="flex w-[220px] shrink-0 lg:w-[20%] lg:shrink">
                  <UButton color="neutral" variant="ghost" class="text-muted flex items-center gap-1 truncate text-xs font-medium dark:text-muted" aria-label="CX, PROGRAM" type="button" @click="openAction(&quot;CX, PROGRAM&quot;)">
                    <UIcon name="i-lucide-contact-round" class="size-3.5 shrink-0" />
                    <span class="truncate">CX, PROGRAM</span>
                  </UButton>
                </div>
                <div class="w-[110px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Jan 2025</div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[900px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[320px] shrink-0 lg:w-[36%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="relative">
                      <span class="relative flex overflow-hidden rounded-full size-8 shrink-0">
                        <img class="aspect-square h-full w-full" alt="Ethan Cole" src="/reference/0a5fda67e048ade8.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)">
                        <span class="sr-only">online</span>
                      </span>
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Ethan Cole</p>
                      <p class="truncate text-xs text-muted dark:text-muted">ethan.cole@shadcnblocks.dev</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[16%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-circle-check" class="size-4 shrink-0 text-success" />
                    <span class="truncate text-xs font-medium dark:text-highlighted">Available</span>
                  </div>
                </div>
                <div class="w-[100px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Member</div>
                <div class="flex w-[220px] shrink-0 lg:w-[20%] lg:shrink">
                  <UButton color="neutral" variant="ghost" class="text-muted flex items-center gap-1 truncate text-xs font-medium dark:text-muted" aria-label="MOBILE" type="button" @click="openAction(&quot;MOBILE&quot;)">
                    <UIcon name="i-lucide-contact-round" class="size-3.5 shrink-0" />
                    <span class="truncate">MOBILE</span>
                  </UButton>
                </div>
                <div class="w-[110px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">May 2024</div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[900px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[320px] shrink-0 lg:w-[36%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="relative">
                      <span class="relative flex overflow-hidden rounded-full size-8 shrink-0">
                        <img class="aspect-square h-full w-full" alt="Harper Singh" src="/reference/e92f665d5ff7fc07.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-text-muted)">
                        <span class="sr-only">offline</span>
                      </span>
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Harper Singh</p>
                      <p class="truncate text-xs text-muted dark:text-muted">harper.singh@shadcnblocks.dev</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[16%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-circle-dot-dashed" class="size-4 shrink-0 text-muted" />
                    <span class="truncate text-xs font-medium dark:text-highlighted">Offline</span>
                  </div>
                </div>
                <div class="w-[100px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Member</div>
                <div class="flex w-[220px] shrink-0 lg:w-[20%] lg:shrink">
                  <UButton color="neutral" variant="ghost" class="text-muted flex items-center gap-1 truncate text-xs font-medium dark:text-muted" aria-label="OPS, TALENT" type="button" @click="openAction(&quot;OPS, TALENT&quot;)">
                    <UIcon name="i-lucide-contact-round" class="size-3.5 shrink-0" />
                    <span class="truncate">OPS, TALENT</span>
                  </UButton>
                </div>
                <div class="w-[110px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Oct 2024</div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[900px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[320px] shrink-0 lg:w-[36%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="relative">
                      <span class="relative flex overflow-hidden rounded-full size-8 shrink-0">
                        <img class="aspect-square h-full w-full" alt="Jules Hart" src="/reference/4759e542002c0be5.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)">
                        <span class="sr-only">online</span>
                      </span>
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Jules Hart</p>
                      <p class="truncate text-xs text-muted dark:text-muted">jules.hart@shadcnblocks.dev</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[16%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-circle-check" class="size-4 shrink-0 text-success" />
                    <span class="truncate text-xs font-medium dark:text-highlighted">Available</span>
                  </div>
                </div>
                <div class="w-[100px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Member</div>
                <div class="flex w-[220px] shrink-0 lg:w-[20%] lg:shrink">
                  <UButton color="neutral" variant="ghost" class="text-muted flex items-center gap-1 truncate text-xs font-medium dark:text-muted" aria-label="MOBILE, CX" type="button" @click="openAction(&quot;MOBILE, CX&quot;)">
                    <UIcon name="i-lucide-contact-round" class="size-3.5 shrink-0" />
                    <span class="truncate">MOBILE, CX</span>
                  </UButton>
                </div>
                <div class="w-[110px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Aug 2024</div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[900px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[320px] shrink-0 lg:w-[36%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="relative">
                      <span class="relative flex overflow-hidden rounded-full size-8 shrink-0">
                        <img class="aspect-square h-full w-full" alt="Kabir Sethi" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)">
                        <span class="sr-only">online</span>
                      </span>
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Kabir Sethi</p>
                      <p class="truncate text-xs text-muted dark:text-muted">kabir.sethi@shadcnblocks.dev</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[16%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-circle-check" class="size-4 shrink-0 text-success" />
                    <span class="truncate text-xs font-medium dark:text-highlighted">Available</span>
                  </div>
                </div>
                <div class="w-[100px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Member</div>
                <div class="flex w-[220px] shrink-0 lg:w-[20%] lg:shrink">
                  <UButton color="neutral" variant="ghost" class="text-muted flex items-center gap-1 truncate text-xs font-medium dark:text-muted" aria-label="CX, PARTNER" type="button" @click="openAction(&quot;CX, PARTNER&quot;)">
                    <UIcon name="i-lucide-contact-round" class="size-3.5 shrink-0" />
                    <span class="truncate">CX, PARTNER</span>
                  </UButton>
                </div>
                <div class="w-[110px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Jun 2024</div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[900px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[320px] shrink-0 lg:w-[36%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="relative">
                      <span class="relative flex overflow-hidden rounded-full size-8 shrink-0">
                        <img class="aspect-square h-full w-full" alt="Leo Park" src="/reference/6f77b9b90a56c3cc.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)">
                        <span class="sr-only">online</span>
                      </span>
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Leo Park</p>
                      <p class="truncate text-xs text-muted dark:text-muted">leo.park@shadcnblocks.dev</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[16%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-circle-check" class="size-4 shrink-0 text-success" />
                    <span class="truncate text-xs font-medium dark:text-highlighted">Available</span>
                  </div>
                </div>
                <div class="w-[100px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Member</div>
                <div class="flex w-[220px] shrink-0 lg:w-[20%] lg:shrink">
                  <UButton color="neutral" variant="ghost" class="text-muted flex items-center gap-1 truncate text-xs font-medium dark:text-muted" aria-label="MOBILE, FIELD" type="button" @click="openAction(&quot;MOBILE, FIELD&quot;)">
                    <UIcon name="i-lucide-contact-round" class="size-3.5 shrink-0" />
                    <span class="truncate">MOBILE, FIELD</span>
                  </UButton>
                </div>
                <div class="w-[110px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Jul 2024</div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[900px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[320px] shrink-0 lg:w-[36%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="relative">
                      <span class="relative flex overflow-hidden rounded-full size-8 shrink-0">
                        <img class="aspect-square h-full w-full" alt="Maya Rao" src="/reference/247ac7c76922347b.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-warning)">
                        <span class="sr-only">away</span>
                      </span>
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Maya Rao</p>
                      <p class="truncate text-xs text-muted dark:text-muted">maya.rao@shadcnblocks.dev</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[16%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-clock-3" class="size-4 shrink-0 text-warning" />
                    <span class="truncate text-xs font-medium dark:text-highlighted">Away</span>
                  </div>
                </div>
                <div class="w-[100px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Member</div>
                <div class="flex w-[220px] shrink-0 lg:w-[20%] lg:shrink">
                  <UButton color="neutral" variant="ghost" class="text-muted flex items-center gap-1 truncate text-xs font-medium dark:text-muted" aria-label="GROWTH, PROGRAM" type="button" @click="openAction(&quot;GROWTH, PROGRAM&quot;)">
                    <UIcon name="i-lucide-contact-round" class="size-3.5 shrink-0" />
                    <span class="truncate">GROWTH, PROGRAM</span>
                  </UButton>
                </div>
                <div class="w-[110px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Jan 2024</div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[900px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[320px] shrink-0 lg:w-[36%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="relative">
                      <span class="relative flex overflow-hidden rounded-full size-8 shrink-0">
                        <img class="aspect-square h-full w-full" alt="Nina Brooks" src="/reference/c856dbf3620c8188.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-warning)">
                        <span class="sr-only">away</span>
                      </span>
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Nina Brooks</p>
                      <p class="truncate text-xs text-muted dark:text-muted">nina.brooks@shadcnblocks.dev</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[16%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-clock-3" class="size-4 shrink-0 text-warning" />
                    <span class="truncate text-xs font-medium dark:text-highlighted">Away</span>
                  </div>
                </div>
                <div class="w-[100px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Guest</div>
                <div class="flex w-[220px] shrink-0 lg:w-[20%] lg:shrink">
                  <UButton color="neutral" variant="ghost" class="text-muted flex items-center gap-1 truncate text-xs font-medium dark:text-muted" aria-label="MOBILE, FIELD" type="button" @click="openAction(&quot;MOBILE, FIELD&quot;)">
                    <UIcon name="i-lucide-contact-round" class="size-3.5 shrink-0" />
                    <span class="truncate">MOBILE, FIELD</span>
                  </UButton>
                </div>
                <div class="w-[110px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Feb 2025</div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[900px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[320px] shrink-0 lg:w-[36%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="relative">
                      <span class="relative flex overflow-hidden rounded-full size-8 shrink-0">
                        <img class="aspect-square h-full w-full" alt="Owen Lee" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-text-muted)">
                        <span class="sr-only">offline</span>
                      </span>
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Owen Lee</p>
                      <p class="truncate text-xs text-muted dark:text-muted">owen.lee@shadcnblocks.dev</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[16%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-circle-dot-dashed" class="size-4 shrink-0 text-muted" />
                    <span class="truncate text-xs font-medium dark:text-highlighted">Offline</span>
                  </div>
                </div>
                <div class="w-[100px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Member</div>
                <div class="flex w-[220px] shrink-0 lg:w-[20%] lg:shrink">
                  <UButton color="neutral" variant="ghost" class="text-muted flex items-center gap-1 truncate text-xs font-medium dark:text-muted" aria-label="GROWTH, PARTNER" type="button" @click="openAction(&quot;GROWTH, PARTNER&quot;)">
                    <UIcon name="i-lucide-contact-round" class="size-3.5 shrink-0" />
                    <span class="truncate">GROWTH, PARTNER</span>
                  </UButton>
                </div>
                <div class="w-[110px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Feb 2025</div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[900px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[320px] shrink-0 lg:w-[36%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="relative">
                      <span class="relative flex overflow-hidden rounded-full size-8 shrink-0">
                        <img class="aspect-square h-full w-full" alt="Riya Sharma" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)">
                        <span class="sr-only">online</span>
                      </span>
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Riya Sharma</p>
                      <p class="truncate text-xs text-muted dark:text-muted">riya.sharma@shadcnblocks.dev</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[16%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-circle-check" class="size-4 shrink-0 text-success" />
                    <span class="truncate text-xs font-medium dark:text-highlighted">Available</span>
                  </div>
                </div>
                <div class="w-[100px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Admin</div>
                <div class="flex w-[220px] shrink-0 lg:w-[20%] lg:shrink">
                  <UButton color="neutral" variant="ghost" class="text-muted flex items-center gap-1 truncate text-xs font-medium dark:text-muted" aria-label="OPS, PROGRAM +1" type="button" @click="openAction(&quot;OPS, PROGRAM +1&quot;)">
                    <UIcon name="i-lucide-contact-round" class="size-3.5 shrink-0" />
                    <span class="truncate">OPS, PROGRAM +1</span>
                  </UButton>
                </div>
                <div class="w-[110px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Mar 2024</div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[900px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[320px] shrink-0 lg:w-[36%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="relative">
                      <span class="relative flex overflow-hidden rounded-full size-8 shrink-0">
                        <img class="aspect-square h-full w-full" alt="Sofia Ahmed" src="/reference/ee2ed71ab799f5e3.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-warning)">
                        <span class="sr-only">away</span>
                      </span>
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Sofia Ahmed</p>
                      <p class="truncate text-xs text-muted dark:text-muted">sofia.ahmed@shadcnblocks.dev</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[16%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-clock-3" class="size-4 shrink-0 text-warning" />
                    <span class="truncate text-xs font-medium dark:text-highlighted">Away</span>
                  </div>
                </div>
                <div class="w-[100px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Admin</div>
                <div class="flex w-[220px] shrink-0 lg:w-[20%] lg:shrink">
                  <UButton color="neutral" variant="ghost" class="text-muted flex items-center gap-1 truncate text-xs font-medium dark:text-muted" aria-label="OPS, TALENT" type="button" @click="openAction(&quot;OPS, TALENT&quot;)">
                    <UIcon name="i-lucide-contact-round" class="size-3.5 shrink-0" />
                    <span class="truncate">OPS, TALENT</span>
                  </UButton>
                </div>
                <div class="w-[110px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Dec 2023</div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[900px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[320px] shrink-0 lg:w-[36%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="relative">
                      <span class="relative flex overflow-hidden rounded-full size-8 shrink-0">
                        <img class="aspect-square h-full w-full" alt="Tia West" src="/reference/01c20c8256a0754a.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-text-muted)">
                        <span class="sr-only">offline</span>
                      </span>
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Tia West</p>
                      <p class="truncate text-xs text-muted dark:text-muted">tia.west@shadcnblocks.dev</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[16%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-circle-dot-dashed" class="size-4 shrink-0 text-muted" />
                    <span class="truncate text-xs font-medium dark:text-highlighted">Offline</span>
                  </div>
                </div>
                <div class="w-[100px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Member</div>
                <div class="flex w-[220px] shrink-0 lg:w-[20%] lg:shrink">
                  <UButton color="neutral" variant="ghost" class="text-muted flex items-center gap-1 truncate text-xs font-medium dark:text-muted" aria-label="FIELD, OPS" type="button" @click="openAction(&quot;FIELD, OPS&quot;)">
                    <UIcon name="i-lucide-contact-round" class="size-3.5 shrink-0" />
                    <span class="truncate">FIELD, OPS</span>
                  </UButton>
                </div>
                <div class="w-[110px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Mar 2025</div>
              </div>
              <div class="hover:bg-(--ui-bg-muted)/40 flex min-w-[900px] items-center border-b px-4 py-3 text-sm transition-colors last:border-b-0 sm:px-6 lg:min-w-0 dark:border-(--ui-text-inverted)/8 dark:hover:bg-(--ui-bg)/4 border-default">
                <div class="w-[320px] shrink-0 lg:w-[36%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <div class="relative">
                      <span class="relative flex overflow-hidden rounded-full size-8 shrink-0">
                        <img class="aspect-square h-full w-full" alt="Victor Hale" src="/reference/146332adc3a2c901.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-warning)">
                        <span class="sr-only">away</span>
                      </span>
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-medium dark:text-highlighted">Victor Hale</p>
                      <p class="truncate text-xs text-muted dark:text-muted">victor.hale@shadcnblocks.dev</p>
                    </div>
                  </div>
                </div>
                <div class="w-[150px] shrink-0 lg:w-[16%] lg:shrink">
                  <div class="flex items-center gap-2">
                    <UIcon name="i-lucide-clock-3" class="size-4 shrink-0 text-warning" />
                    <span class="truncate text-xs font-medium dark:text-highlighted">Away</span>
                  </div>
                </div>
                <div class="w-[100px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Admin</div>
                <div class="flex w-[220px] shrink-0 lg:w-[20%] lg:shrink">
                  <UButton color="neutral" variant="ghost" class="text-muted flex items-center gap-1 truncate text-xs font-medium dark:text-muted" aria-label="GROWTH, PARTNER +1" type="button" @click="openAction(&quot;GROWTH, PARTNER +1&quot;)">
                    <UIcon name="i-lucide-contact-round" class="size-3.5 shrink-0" />
                    <span class="truncate">GROWTH, PARTNER +1</span>
                  </UButton>
                </div>
                <div class="w-[110px] shrink-0 text-xs text-muted lg:w-[14%] lg:shrink dark:text-muted">Aug 2023</div>
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
