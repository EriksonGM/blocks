<!-- Page: /project-management/member-list-2 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Member List 2 · Blocks Admin" })

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
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/member-list-2">
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
              <div class="grid min-w-0 grid-cols-3 items-center gap-2 lg:flex lg:flex-wrap lg:justify-end">
                <UButton color="neutral" variant="outline" class="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-xs rounded-md text-xs h-9 w-full justify-center gap-1.5 px-2 lg:h-8 lg:w-auto lg:px-3 border-default bg-default text-highlighted hover:bg-elevated hover:text-default" aria-label="Sort" type="button" @click="openAction(&quot;Sort&quot;)">
                  <UIcon name="i-lucide-arrow-up-down" class="size-3.5" />
                  Sort
                </UButton>
                <UButton color="neutral" variant="outline" class="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-xs rounded-md text-xs h-9 w-full justify-center gap-1.5 px-2 lg:h-8 lg:w-auto lg:px-3 border-default bg-default text-highlighted hover:bg-elevated hover:text-default" aria-label="Recent" type="button" @click="openAction(&quot;Recent&quot;)">
                  <UIcon name="i-lucide-shield" class="size-3.5" />
                  Recent
                </UButton>
                <UButton color="neutral" variant="outline" class="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-xs rounded-md text-xs h-9 w-full justify-center gap-1.5 px-2 lg:h-8 lg:w-auto lg:px-3 border-default bg-default text-highlighted hover:bg-elevated hover:text-default" aria-label="Display" type="button" @click="openAction(&quot;Display&quot;)">
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
          <div class="flex-1 overflow-y-auto px-4 py-5 sm:px-6 dark:bg-[linear-gradient(180deg,color-mix(in_oklab,_var(--ui-bg)_1%,_transparent),transparent_12%)]">
            <div class="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 class="text-xl font-semibold tracking-tight dark:text-highlighted text-highlighted">Member List 2</h1>
                <p class="text-muted mt-1 text-sm dark:text-muted">Contact-card grid with team ownership and quick member actions.</p>
              </div>
              <div class="relative w-full sm:max-w-sm">
                <UIcon name="i-lucide-search" class="text-muted pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 dark:text-dimmed" />
                <UInput v-model="form.searchMembers" type="text" placeholder="Search members..." name="searchMembers" class="flex w-full rounded-md text-base md:text-sm h-9 pl-9 dark:border-(--ui-text-inverted)/10 dark:bg-(--ui-bg)/70 dark:text-highlighted dark:placeholder:text-dimmed" :ui="{ base: 'h-full' }" />
              </div>
            </div>
            <ul role="list" class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              <li>
                <!-- Card 1: Ava Reed -->
                <UCard class="group overflow-hidden rounded-xl shadow-none transition-colors hover:border-accented dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)]/95 dark:hover:border-(--ui-text-inverted)/16" :ui="{ body: 'contents' }">
                  <div class="flex flex-col space-y-1.5 items-center gap-3 p-4 text-center">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border dark:border-(--ui-text-inverted)/10 border-default">
                        <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute right-0.5 bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)" />
                    </div>
                    <div class="min-w-0">
                      <h3 class="truncate text-sm font-semibold dark:text-highlighted text-highlighted">Ava Reed</h3>
                      <p class="text-muted mt-1 truncate text-xs dark:text-muted">Experience owner</p>
                    </div>
                    <div class="flex flex-wrap items-center justify-center gap-2">
                      <div class="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-full border-default">Member</div>
                      <span class="text-muted inline-flex items-center gap-1 text-xs dark:text-muted">
                        <UIcon name="i-lucide-circle-check" class="size-3.5 text-success" />
                        Available
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center divide-default border-t p-0 dark:divide-(--ui-text-inverted)/8 dark:border-(--ui-text-inverted)/8 border-default">
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium transition-colors dark:text-highlighted dark:hover:bg-(--ui-bg)/5" to="mailto:ava.reed@shadcnblocks.dev">
                      <UIcon name="i-lucide-mail" class="text-muted size-4 dark:text-dimmed" />
                      Email
                    </NuxtLink>
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 border-l px-3 py-2.5 text-sm font-medium transition-colors dark:border-(--ui-text-inverted)/8 dark:text-highlighted dark:hover:bg-(--ui-bg)/5 border-default" to="tel:+1-202-555-0184">
                      <UIcon name="i-lucide-phone" class="text-muted size-4 dark:text-dimmed" />
                      Call
                    </NuxtLink>
                  </div>
                </UCard>
              </li>
              <li>
                <!-- Card 2: Ben Lewis -->
                <UCard class="group overflow-hidden rounded-xl shadow-none transition-colors hover:border-accented dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)]/95 dark:hover:border-(--ui-text-inverted)/16" :ui="{ body: 'contents' }">
                  <div class="flex flex-col space-y-1.5 items-center gap-3 p-4 text-center">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border dark:border-(--ui-text-inverted)/10 border-default">
                        <img class="aspect-square h-full w-full" alt="Ben Lewis" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute right-0.5 bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)" />
                    </div>
                    <div class="min-w-0">
                      <h3 class="truncate text-sm font-semibold dark:text-highlighted text-highlighted">Ben Lewis</h3>
                      <p class="text-muted mt-1 truncate text-xs dark:text-muted">Field strategist</p>
                    </div>
                    <div class="flex flex-wrap items-center justify-center gap-2">
                      <div class="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-full border-default">Admin</div>
                      <span class="text-muted inline-flex items-center gap-1 text-xs dark:text-muted">
                        <UIcon name="i-lucide-circle-check" class="size-3.5 text-success" />
                        Available
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center divide-default border-t p-0 dark:divide-(--ui-text-inverted)/8 dark:border-(--ui-text-inverted)/8 border-default">
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium transition-colors dark:text-highlighted dark:hover:bg-(--ui-bg)/5" to="mailto:ben.lewis@shadcnblocks.dev">
                      <UIcon name="i-lucide-mail" class="text-muted size-4 dark:text-dimmed" />
                      Email
                    </NuxtLink>
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 border-l px-3 py-2.5 text-sm font-medium transition-colors dark:border-(--ui-text-inverted)/8 dark:text-highlighted dark:hover:bg-(--ui-bg)/5 border-default" to="tel:+1-202-555-0146">
                      <UIcon name="i-lucide-phone" class="text-muted size-4 dark:text-dimmed" />
                      Call
                    </NuxtLink>
                  </div>
                </UCard>
              </li>
              <li>
                <!-- Card 3: Chloe Park -->
                <UCard class="group overflow-hidden rounded-xl shadow-none transition-colors hover:border-accented dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)]/95 dark:hover:border-(--ui-text-inverted)/16" :ui="{ body: 'contents' }">
                  <div class="flex flex-col space-y-1.5 items-center gap-3 p-4 text-center">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border dark:border-(--ui-text-inverted)/10 border-default">
                        <img class="aspect-square h-full w-full" alt="Chloe Park" src="/reference/62828bc2a489837e.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute right-0.5 bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)" />
                    </div>
                    <div class="min-w-0">
                      <h3 class="truncate text-sm font-semibold dark:text-highlighted text-highlighted">Chloe Park</h3>
                      <p class="text-muted mt-1 truncate text-xs dark:text-muted">Program lead</p>
                    </div>
                    <div class="flex flex-wrap items-center justify-center gap-2">
                      <div class="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-full border-default">Member</div>
                      <span class="text-muted inline-flex items-center gap-1 text-xs dark:text-muted">
                        <UIcon name="i-lucide-circle-check" class="size-3.5 text-success" />
                        Available
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center divide-default border-t p-0 dark:divide-(--ui-text-inverted)/8 dark:border-(--ui-text-inverted)/8 border-default">
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium transition-colors dark:text-highlighted dark:hover:bg-(--ui-bg)/5" to="mailto:chloe.park@shadcnblocks.dev">
                      <UIcon name="i-lucide-mail" class="text-muted size-4 dark:text-dimmed" />
                      Email
                    </NuxtLink>
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 border-l px-3 py-2.5 text-sm font-medium transition-colors dark:border-(--ui-text-inverted)/8 dark:text-highlighted dark:hover:bg-(--ui-bg)/5 border-default" to="tel:+1-202-555-0197">
                      <UIcon name="i-lucide-phone" class="text-muted size-4 dark:text-dimmed" />
                      Call
                    </NuxtLink>
                  </div>
                </UCard>
              </li>
              <li>
                <!-- Card 4: Dina Moss -->
                <UCard class="group overflow-hidden rounded-xl shadow-none transition-colors hover:border-accented dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)]/95 dark:hover:border-(--ui-text-inverted)/16" :ui="{ body: 'contents' }">
                  <div class="flex flex-col space-y-1.5 items-center gap-3 p-4 text-center">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border dark:border-(--ui-text-inverted)/10 border-default">
                        <img class="aspect-square h-full w-full" alt="Dina Moss" src="/reference/ada84674117f0188.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute right-0.5 bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-text-muted)" />
                    </div>
                    <div class="min-w-0">
                      <h3 class="truncate text-sm font-semibold dark:text-highlighted text-highlighted">Dina Moss</h3>
                      <p class="text-muted mt-1 truncate text-xs dark:text-muted">Customer operations</p>
                    </div>
                    <div class="flex flex-wrap items-center justify-center gap-2">
                      <div class="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-full border-default">Guest</div>
                      <span class="text-muted inline-flex items-center gap-1 text-xs dark:text-muted">
                        <UIcon name="i-lucide-circle-dot-dashed" class="size-3.5 text-muted" />
                        Offline
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center divide-default border-t p-0 dark:divide-(--ui-text-inverted)/8 dark:border-(--ui-text-inverted)/8 border-default">
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium transition-colors dark:text-highlighted dark:hover:bg-(--ui-bg)/5" to="mailto:dina.moss@shadcnblocks.dev">
                      <UIcon name="i-lucide-mail" class="text-muted size-4 dark:text-dimmed" />
                      Email
                    </NuxtLink>
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 border-l px-3 py-2.5 text-sm font-medium transition-colors dark:border-(--ui-text-inverted)/8 dark:text-highlighted dark:hover:bg-(--ui-bg)/5 border-default" to="tel:+1-202-555-0184">
                      <UIcon name="i-lucide-phone" class="text-muted size-4 dark:text-dimmed" />
                      Call
                    </NuxtLink>
                  </div>
                </UCard>
              </li>
              <li>
                <!-- Card 5: Ethan Cole -->
                <UCard class="group overflow-hidden rounded-xl shadow-none transition-colors hover:border-accented dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)]/95 dark:hover:border-(--ui-text-inverted)/16" :ui="{ body: 'contents' }">
                  <div class="flex flex-col space-y-1.5 items-center gap-3 p-4 text-center">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border dark:border-(--ui-text-inverted)/10 border-default">
                        <img class="aspect-square h-full w-full" alt="Ethan Cole" src="/reference/0a5fda67e048ade8.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute right-0.5 bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)" />
                    </div>
                    <div class="min-w-0">
                      <h3 class="truncate text-sm font-semibold dark:text-highlighted text-highlighted">Ethan Cole</h3>
                      <p class="text-muted mt-1 truncate text-xs dark:text-muted">Support partner</p>
                    </div>
                    <div class="flex flex-wrap items-center justify-center gap-2">
                      <div class="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-full border-default">Member</div>
                      <span class="text-muted inline-flex items-center gap-1 text-xs dark:text-muted">
                        <UIcon name="i-lucide-circle-check" class="size-3.5 text-success" />
                        Available
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center divide-default border-t p-0 dark:divide-(--ui-text-inverted)/8 dark:border-(--ui-text-inverted)/8 border-default">
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium transition-colors dark:text-highlighted dark:hover:bg-(--ui-bg)/5" to="mailto:ethan.cole@shadcnblocks.dev">
                      <UIcon name="i-lucide-mail" class="text-muted size-4 dark:text-dimmed" />
                      Email
                    </NuxtLink>
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 border-l px-3 py-2.5 text-sm font-medium transition-colors dark:border-(--ui-text-inverted)/8 dark:text-highlighted dark:hover:bg-(--ui-bg)/5 border-default" to="tel:+1-202-555-0108">
                      <UIcon name="i-lucide-phone" class="text-muted size-4 dark:text-dimmed" />
                      Call
                    </NuxtLink>
                  </div>
                </UCard>
              </li>
              <li>
                <!-- Card 6: Harper Singh -->
                <UCard class="group overflow-hidden rounded-xl shadow-none transition-colors hover:border-accented dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)]/95 dark:hover:border-(--ui-text-inverted)/16" :ui="{ body: 'contents' }">
                  <div class="flex flex-col space-y-1.5 items-center gap-3 p-4 text-center">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border dark:border-(--ui-text-inverted)/10 border-default">
                        <img class="aspect-square h-full w-full" alt="Harper Singh" src="/reference/e92f665d5ff7fc07.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute right-0.5 bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-text-muted)" />
                    </div>
                    <div class="min-w-0">
                      <h3 class="truncate text-sm font-semibold dark:text-highlighted text-highlighted">Harper Singh</h3>
                      <p class="text-muted mt-1 truncate text-xs dark:text-muted">Planning lead</p>
                    </div>
                    <div class="flex flex-wrap items-center justify-center gap-2">
                      <div class="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-full border-default">Member</div>
                      <span class="text-muted inline-flex items-center gap-1 text-xs dark:text-muted">
                        <UIcon name="i-lucide-circle-dot-dashed" class="size-3.5 text-muted" />
                        Offline
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center divide-default border-t p-0 dark:divide-(--ui-text-inverted)/8 dark:border-(--ui-text-inverted)/8 border-default">
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium transition-colors dark:text-highlighted dark:hover:bg-(--ui-bg)/5" to="mailto:harper.singh@shadcnblocks.dev">
                      <UIcon name="i-lucide-mail" class="text-muted size-4 dark:text-dimmed" />
                      Email
                    </NuxtLink>
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 border-l px-3 py-2.5 text-sm font-medium transition-colors dark:border-(--ui-text-inverted)/8 dark:text-highlighted dark:hover:bg-(--ui-bg)/5 border-default" to="tel:+1-202-555-0129">
                      <UIcon name="i-lucide-phone" class="text-muted size-4 dark:text-dimmed" />
                      Call
                    </NuxtLink>
                  </div>
                </UCard>
              </li>
              <li>
                <!-- Card 7: Jules Hart -->
                <UCard class="group overflow-hidden rounded-xl shadow-none transition-colors hover:border-accented dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)]/95 dark:hover:border-(--ui-text-inverted)/16" :ui="{ body: 'contents' }">
                  <div class="flex flex-col space-y-1.5 items-center gap-3 p-4 text-center">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border dark:border-(--ui-text-inverted)/10 border-default">
                        <img class="aspect-square h-full w-full" alt="Jules Hart" src="/reference/4759e542002c0be5.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute right-0.5 bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)" />
                    </div>
                    <div class="min-w-0">
                      <h3 class="truncate text-sm font-semibold dark:text-highlighted text-highlighted">Jules Hart</h3>
                      <p class="text-muted mt-1 truncate text-xs dark:text-muted">Release coordinator</p>
                    </div>
                    <div class="flex flex-wrap items-center justify-center gap-2">
                      <div class="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-full border-default">Member</div>
                      <span class="text-muted inline-flex items-center gap-1 text-xs dark:text-muted">
                        <UIcon name="i-lucide-circle-check" class="size-3.5 text-success" />
                        Available
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center divide-default border-t p-0 dark:divide-(--ui-text-inverted)/8 dark:border-(--ui-text-inverted)/8 border-default">
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium transition-colors dark:text-highlighted dark:hover:bg-(--ui-bg)/5" to="mailto:jules.hart@shadcnblocks.dev">
                      <UIcon name="i-lucide-mail" class="text-muted size-4 dark:text-dimmed" />
                      Email
                    </NuxtLink>
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 border-l px-3 py-2.5 text-sm font-medium transition-colors dark:border-(--ui-text-inverted)/8 dark:text-highlighted dark:hover:bg-(--ui-bg)/5 border-default" to="tel:+1-202-555-0184">
                      <UIcon name="i-lucide-phone" class="text-muted size-4 dark:text-dimmed" />
                      Call
                    </NuxtLink>
                  </div>
                </UCard>
              </li>
              <li>
                <!-- Card 8: Kabir Sethi -->
                <UCard class="group overflow-hidden rounded-xl shadow-none transition-colors hover:border-accented dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)]/95 dark:hover:border-(--ui-text-inverted)/16" :ui="{ body: 'contents' }">
                  <div class="flex flex-col space-y-1.5 items-center gap-3 p-4 text-center">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border dark:border-(--ui-text-inverted)/10 border-default">
                        <img class="aspect-square h-full w-full" alt="Kabir Sethi" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute right-0.5 bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)" />
                    </div>
                    <div class="min-w-0">
                      <h3 class="truncate text-sm font-semibold dark:text-highlighted text-highlighted">Kabir Sethi</h3>
                      <p class="text-muted mt-1 truncate text-xs dark:text-muted">Planning lead</p>
                    </div>
                    <div class="flex flex-wrap items-center justify-center gap-2">
                      <div class="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-full border-default">Member</div>
                      <span class="text-muted inline-flex items-center gap-1 text-xs dark:text-muted">
                        <UIcon name="i-lucide-circle-check" class="size-3.5 text-success" />
                        Available
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center divide-default border-t p-0 dark:divide-(--ui-text-inverted)/8 dark:border-(--ui-text-inverted)/8 border-default">
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium transition-colors dark:text-highlighted dark:hover:bg-(--ui-bg)/5" to="mailto:kabir.sethi@shadcnblocks.dev">
                      <UIcon name="i-lucide-mail" class="text-muted size-4 dark:text-dimmed" />
                      Email
                    </NuxtLink>
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 border-l px-3 py-2.5 text-sm font-medium transition-colors dark:border-(--ui-text-inverted)/8 dark:text-highlighted dark:hover:bg-(--ui-bg)/5 border-default" to="tel:+1-202-555-0146">
                      <UIcon name="i-lucide-phone" class="text-muted size-4 dark:text-dimmed" />
                      Call
                    </NuxtLink>
                  </div>
                </UCard>
              </li>
              <li>
                <!-- Card 9: Leo Park -->
                <UCard class="group overflow-hidden rounded-xl shadow-none transition-colors hover:border-accented dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)]/95 dark:hover:border-(--ui-text-inverted)/16" :ui="{ body: 'contents' }">
                  <div class="flex flex-col space-y-1.5 items-center gap-3 p-4 text-center">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border dark:border-(--ui-text-inverted)/10 border-default">
                        <img class="aspect-square h-full w-full" alt="Leo Park" src="/reference/6f77b9b90a56c3cc.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute right-0.5 bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)" />
                    </div>
                    <div class="min-w-0">
                      <h3 class="truncate text-sm font-semibold dark:text-highlighted text-highlighted">Leo Park</h3>
                      <p class="text-muted mt-1 truncate text-xs dark:text-muted">Field strategist</p>
                    </div>
                    <div class="flex flex-wrap items-center justify-center gap-2">
                      <div class="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-full border-default">Member</div>
                      <span class="text-muted inline-flex items-center gap-1 text-xs dark:text-muted">
                        <UIcon name="i-lucide-circle-check" class="size-3.5 text-success" />
                        Available
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center divide-default border-t p-0 dark:divide-(--ui-text-inverted)/8 dark:border-(--ui-text-inverted)/8 border-default">
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium transition-colors dark:text-highlighted dark:hover:bg-(--ui-bg)/5" to="mailto:leo.park@shadcnblocks.dev">
                      <UIcon name="i-lucide-mail" class="text-muted size-4 dark:text-dimmed" />
                      Email
                    </NuxtLink>
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 border-l px-3 py-2.5 text-sm font-medium transition-colors dark:border-(--ui-text-inverted)/8 dark:text-highlighted dark:hover:bg-(--ui-bg)/5 border-default" to="tel:+1-202-555-0129">
                      <UIcon name="i-lucide-phone" class="text-muted size-4 dark:text-dimmed" />
                      Call
                    </NuxtLink>
                  </div>
                </UCard>
              </li>
              <li>
                <!-- Card 10: Maya Rao -->
                <UCard class="group overflow-hidden rounded-xl shadow-none transition-colors hover:border-accented dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)]/95 dark:hover:border-(--ui-text-inverted)/16" :ui="{ body: 'contents' }">
                  <div class="flex flex-col space-y-1.5 items-center gap-3 p-4 text-center">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border dark:border-(--ui-text-inverted)/10 border-default">
                        <img class="aspect-square h-full w-full" alt="Maya Rao" src="/reference/247ac7c76922347b.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute right-0.5 bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-warning)" />
                    </div>
                    <div class="min-w-0">
                      <h3 class="truncate text-sm font-semibold dark:text-highlighted text-highlighted">Maya Rao</h3>
                      <p class="text-muted mt-1 truncate text-xs dark:text-muted">Delivery manager</p>
                    </div>
                    <div class="flex flex-wrap items-center justify-center gap-2">
                      <div class="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-full border-default">Member</div>
                      <span class="text-muted inline-flex items-center gap-1 text-xs dark:text-muted">
                        <UIcon name="i-lucide-clock-3" class="size-3.5 text-warning" />
                        Away
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center divide-default border-t p-0 dark:divide-(--ui-text-inverted)/8 dark:border-(--ui-text-inverted)/8 border-default">
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium transition-colors dark:text-highlighted dark:hover:bg-(--ui-bg)/5" to="mailto:maya.rao@shadcnblocks.dev">
                      <UIcon name="i-lucide-mail" class="text-muted size-4 dark:text-dimmed" />
                      Email
                    </NuxtLink>
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 border-l px-3 py-2.5 text-sm font-medium transition-colors dark:border-(--ui-text-inverted)/8 dark:text-highlighted dark:hover:bg-(--ui-bg)/5 border-default" to="tel:+1-202-555-0129">
                      <UIcon name="i-lucide-phone" class="text-muted size-4 dark:text-dimmed" />
                      Call
                    </NuxtLink>
                  </div>
                </UCard>
              </li>
              <li>
                <!-- Card 11: Nina Brooks -->
                <UCard class="group overflow-hidden rounded-xl shadow-none transition-colors hover:border-accented dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)]/95 dark:hover:border-(--ui-text-inverted)/16" :ui="{ body: 'contents' }">
                  <div class="flex flex-col space-y-1.5 items-center gap-3 p-4 text-center">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border dark:border-(--ui-text-inverted)/10 border-default">
                        <img class="aspect-square h-full w-full" alt="Nina Brooks" src="/reference/c856dbf3620c8188.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute right-0.5 bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-warning)" />
                    </div>
                    <div class="min-w-0">
                      <h3 class="truncate text-sm font-semibold dark:text-highlighted text-highlighted">Nina Brooks</h3>
                      <p class="text-muted mt-1 truncate text-xs dark:text-muted">Program lead</p>
                    </div>
                    <div class="flex flex-wrap items-center justify-center gap-2">
                      <div class="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-full border-default">Guest</div>
                      <span class="text-muted inline-flex items-center gap-1 text-xs dark:text-muted">
                        <UIcon name="i-lucide-clock-3" class="size-3.5 text-warning" />
                        Away
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center divide-default border-t p-0 dark:divide-(--ui-text-inverted)/8 dark:border-(--ui-text-inverted)/8 border-default">
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium transition-colors dark:text-highlighted dark:hover:bg-(--ui-bg)/5" to="mailto:nina.brooks@shadcnblocks.dev">
                      <UIcon name="i-lucide-mail" class="text-muted size-4 dark:text-dimmed" />
                      Email
                    </NuxtLink>
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 border-l px-3 py-2.5 text-sm font-medium transition-colors dark:border-(--ui-text-inverted)/8 dark:text-highlighted dark:hover:bg-(--ui-bg)/5 border-default" to="tel:+1-202-555-0146">
                      <UIcon name="i-lucide-phone" class="text-muted size-4 dark:text-dimmed" />
                      Call
                    </NuxtLink>
                  </div>
                </UCard>
              </li>
              <li>
                <!-- Card 12: Owen Lee -->
                <UCard class="group overflow-hidden rounded-xl shadow-none transition-colors hover:border-accented dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)]/95 dark:hover:border-(--ui-text-inverted)/16" :ui="{ body: 'contents' }">
                  <div class="flex flex-col space-y-1.5 items-center gap-3 p-4 text-center">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border dark:border-(--ui-text-inverted)/10 border-default">
                        <img class="aspect-square h-full w-full" alt="Owen Lee" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute right-0.5 bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-text-muted)" />
                    </div>
                    <div class="min-w-0">
                      <h3 class="truncate text-sm font-semibold dark:text-highlighted text-highlighted">Owen Lee</h3>
                      <p class="text-muted mt-1 truncate text-xs dark:text-muted">Support partner</p>
                    </div>
                    <div class="flex flex-wrap items-center justify-center gap-2">
                      <div class="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-full border-default">Member</div>
                      <span class="text-muted inline-flex items-center gap-1 text-xs dark:text-muted">
                        <UIcon name="i-lucide-circle-dot-dashed" class="size-3.5 text-muted" />
                        Offline
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center divide-default border-t p-0 dark:divide-(--ui-text-inverted)/8 dark:border-(--ui-text-inverted)/8 border-default">
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium transition-colors dark:text-highlighted dark:hover:bg-(--ui-bg)/5" to="mailto:owen.lee@shadcnblocks.dev">
                      <UIcon name="i-lucide-mail" class="text-muted size-4 dark:text-dimmed" />
                      Email
                    </NuxtLink>
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 border-l px-3 py-2.5 text-sm font-medium transition-colors dark:border-(--ui-text-inverted)/8 dark:text-highlighted dark:hover:bg-(--ui-bg)/5 border-default" to="tel:+1-202-555-0163">
                      <UIcon name="i-lucide-phone" class="text-muted size-4 dark:text-dimmed" />
                      Call
                    </NuxtLink>
                  </div>
                </UCard>
              </li>
              <li>
                <!-- Card 13: Riya Sharma -->
                <UCard class="group overflow-hidden rounded-xl shadow-none transition-colors hover:border-accented dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)]/95 dark:hover:border-(--ui-text-inverted)/16" :ui="{ body: 'contents' }">
                  <div class="flex flex-col space-y-1.5 items-center gap-3 p-4 text-center">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border dark:border-(--ui-text-inverted)/10 border-default">
                        <img class="aspect-square h-full w-full" alt="Riya Sharma" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute right-0.5 bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-success)" />
                    </div>
                    <div class="min-w-0">
                      <h3 class="truncate text-sm font-semibold dark:text-highlighted text-highlighted">Riya Sharma</h3>
                      <p class="text-muted mt-1 truncate text-xs dark:text-muted">Customer operations</p>
                    </div>
                    <div class="flex flex-wrap items-center justify-center gap-2">
                      <div class="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-full border-default">Admin</div>
                      <span class="text-muted inline-flex items-center gap-1 text-xs dark:text-muted">
                        <UIcon name="i-lucide-circle-check" class="size-3.5 text-success" />
                        Available
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center divide-default border-t p-0 dark:divide-(--ui-text-inverted)/8 dark:border-(--ui-text-inverted)/8 border-default">
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium transition-colors dark:text-highlighted dark:hover:bg-(--ui-bg)/5" to="mailto:riya.sharma@shadcnblocks.dev">
                      <UIcon name="i-lucide-mail" class="text-muted size-4 dark:text-dimmed" />
                      Email
                    </NuxtLink>
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 border-l px-3 py-2.5 text-sm font-medium transition-colors dark:border-(--ui-text-inverted)/8 dark:text-highlighted dark:hover:bg-(--ui-bg)/5 border-default" to="tel:+1-202-555-0108">
                      <UIcon name="i-lucide-phone" class="text-muted size-4 dark:text-dimmed" />
                      Call
                    </NuxtLink>
                  </div>
                </UCard>
              </li>
              <li>
                <!-- Card 14: Sofia Ahmed -->
                <UCard class="group overflow-hidden rounded-xl shadow-none transition-colors hover:border-accented dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)]/95 dark:hover:border-(--ui-text-inverted)/16" :ui="{ body: 'contents' }">
                  <div class="flex flex-col space-y-1.5 items-center gap-3 p-4 text-center">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border dark:border-(--ui-text-inverted)/10 border-default">
                        <img class="aspect-square h-full w-full" alt="Sofia Ahmed" src="/reference/ee2ed71ab799f5e3.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute right-0.5 bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-warning)" />
                    </div>
                    <div class="min-w-0">
                      <h3 class="truncate text-sm font-semibold dark:text-highlighted text-highlighted">Sofia Ahmed</h3>
                      <p class="text-muted mt-1 truncate text-xs dark:text-muted">Experience owner</p>
                    </div>
                    <div class="flex flex-wrap items-center justify-center gap-2">
                      <div class="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-full border-default">Admin</div>
                      <span class="text-muted inline-flex items-center gap-1 text-xs dark:text-muted">
                        <UIcon name="i-lucide-clock-3" class="size-3.5 text-warning" />
                        Away
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center divide-default border-t p-0 dark:divide-(--ui-text-inverted)/8 dark:border-(--ui-text-inverted)/8 border-default">
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium transition-colors dark:text-highlighted dark:hover:bg-(--ui-bg)/5" to="mailto:sofia.ahmed@shadcnblocks.dev">
                      <UIcon name="i-lucide-mail" class="text-muted size-4 dark:text-dimmed" />
                      Email
                    </NuxtLink>
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 border-l px-3 py-2.5 text-sm font-medium transition-colors dark:border-(--ui-text-inverted)/8 dark:text-highlighted dark:hover:bg-(--ui-bg)/5 border-default" to="tel:+1-202-555-0163">
                      <UIcon name="i-lucide-phone" class="text-muted size-4 dark:text-dimmed" />
                      Call
                    </NuxtLink>
                  </div>
                </UCard>
              </li>
              <li>
                <!-- Card 15: Tia West -->
                <UCard class="group overflow-hidden rounded-xl shadow-none transition-colors hover:border-accented dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)]/95 dark:hover:border-(--ui-text-inverted)/16" :ui="{ body: 'contents' }">
                  <div class="flex flex-col space-y-1.5 items-center gap-3 p-4 text-center">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border dark:border-(--ui-text-inverted)/10 border-default">
                        <img class="aspect-square h-full w-full" alt="Tia West" src="/reference/01c20c8256a0754a.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute right-0.5 bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-text-muted)" />
                    </div>
                    <div class="min-w-0">
                      <h3 class="truncate text-sm font-semibold dark:text-highlighted text-highlighted">Tia West</h3>
                      <p class="text-muted mt-1 truncate text-xs dark:text-muted">Delivery manager</p>
                    </div>
                    <div class="flex flex-wrap items-center justify-center gap-2">
                      <div class="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-full border-default">Member</div>
                      <span class="text-muted inline-flex items-center gap-1 text-xs dark:text-muted">
                        <UIcon name="i-lucide-circle-dot-dashed" class="size-3.5 text-muted" />
                        Offline
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center divide-default border-t p-0 dark:divide-(--ui-text-inverted)/8 dark:border-(--ui-text-inverted)/8 border-default">
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium transition-colors dark:text-highlighted dark:hover:bg-(--ui-bg)/5" to="mailto:tia.west@shadcnblocks.dev">
                      <UIcon name="i-lucide-mail" class="text-muted size-4 dark:text-dimmed" />
                      Email
                    </NuxtLink>
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 border-l px-3 py-2.5 text-sm font-medium transition-colors dark:border-(--ui-text-inverted)/8 dark:text-highlighted dark:hover:bg-(--ui-bg)/5 border-default" to="tel:+1-202-555-0197">
                      <UIcon name="i-lucide-phone" class="text-muted size-4 dark:text-dimmed" />
                      Call
                    </NuxtLink>
                  </div>
                </UCard>
              </li>
              <li>
                <!-- Card 16: Victor Hale -->
                <UCard class="group overflow-hidden rounded-xl shadow-none transition-colors hover:border-accented dark:border-(--ui-text-inverted)/8 dark:bg-[var(--ui-bg-inverted)]/95 dark:hover:border-(--ui-text-inverted)/16" :ui="{ body: 'contents' }">
                  <div class="flex flex-col space-y-1.5 items-center gap-3 p-4 text-center">
                    <div class="relative">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full size-14 border dark:border-(--ui-text-inverted)/10 border-default">
                        <img class="aspect-square h-full w-full" alt="Victor Hale" src="/reference/146332adc3a2c901.png" loading="lazy" />
                      </span>
                      <span class="border-(--ui-bg) absolute right-0.5 bottom-0.5 size-2.5 rounded-full border-2 dark:border-[var(--ui-text-highlighted)]" style="background-color:var(--ui-warning)" />
                    </div>
                    <div class="min-w-0">
                      <h3 class="truncate text-sm font-semibold dark:text-highlighted text-highlighted">Victor Hale</h3>
                      <p class="text-muted mt-1 truncate text-xs dark:text-muted">Release coordinator</p>
                    </div>
                    <div class="flex flex-wrap items-center justify-center gap-2">
                      <div class="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-full border-default">Admin</div>
                      <span class="text-muted inline-flex items-center gap-1 text-xs dark:text-muted">
                        <UIcon name="i-lucide-clock-3" class="size-3.5 text-warning" />
                        Away
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center divide-default border-t p-0 dark:divide-(--ui-text-inverted)/8 dark:border-(--ui-text-inverted)/8 border-default">
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium transition-colors dark:text-highlighted dark:hover:bg-(--ui-bg)/5" to="mailto:victor.hale@shadcnblocks.dev">
                      <UIcon name="i-lucide-mail" class="text-muted size-4 dark:text-dimmed" />
                      Email
                    </NuxtLink>
                    <NuxtLink class="hover:bg-(--ui-bg-muted)/50 flex min-w-0 flex-1 items-center justify-center gap-2 border-l px-3 py-2.5 text-sm font-medium transition-colors dark:border-(--ui-text-inverted)/8 dark:text-highlighted dark:hover:bg-(--ui-bg)/5 border-default" to="tel:+1-202-555-0108">
                      <UIcon name="i-lucide-phone" class="text-muted size-4 dark:text-dimmed" />
                      Call
                    </NuxtLink>
                  </div>
                </UCard>
              </li>
            </ul>
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
