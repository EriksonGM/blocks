<!-- Page: /original/settings/plans | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Plans · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "plans": "Plans"
})

const plansOptions = [
  "General",
  "Profile",
  "Billing",
  "Plans",
  "Connected Apps",
  "Notifications"
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/original/settings/plans">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex min-h-0 flex-1 flex-col">
          <header class="bg-default hidden shrink-0 border-b px-4 py-4 sm:px-6 md:block border-default">
            <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-6">
              <div class="flex min-w-0 flex-wrap items-center gap-3 text-sm">
                <span class="text-highlighted font-medium">Shadcnblocks Admin Kit</span>
                <span class="text-muted">/</span>
                <span class="text-highlighted font-medium">Settings</span>
                <span class="text-muted">/</span>
                <span class="text-muted">Plans</span>
              </div>
              <div class="relative xl:mx-auto xl:w-full xl:max-w-md">
                <UButton color="neutral" variant="outline" class="inline-flex items-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default py-2 bg-(--ui-bg-muted)/70 text-muted hover:bg-(--ui-bg-muted)/90 hover:text-highlighted h-10 w-full justify-start rounded-full border-none px-3 font-normal shadow-none" aria-label="Search pages or run commands⌘K" type="button" @click="openAction(&quot;Search pages or run commands⌘K&quot;)">
                  <UIcon name="i-lucide-search" class="size-4 shrink-0" />
                  <span class="min-w-0 flex-1 truncate text-left">Search pages or run commands</span>
                  <UKbd class="bg-default pointer-events-none hidden h-6 shrink-0 items-center gap-1 rounded-full border px-2 font-mono text-[10px] font-medium opacity-100 select-none sm:inline-flex border-default">⌘K</UKbd>
                </UButton>
              </div>
            </div>
          </header>
          <div class="min-h-0 flex-1 overflow-auto">
            <div class="flex flex-1 flex-col gap-4 overflow-hidden p-4">
              <div class="space-y-0.5">
                <h1 class="text-xl font-bold tracking-tight md:text-2xl text-highlighted">Settings</h1>
                <p class="text-muted">Update account preferences and manage integrations.</p>
              </div>
              <div class="flex flex-1 flex-col space-y-8 overflow-auto md:space-y-2 md:overflow-hidden lg:flex-row lg:space-y-0 lg:space-x-12">
                <aside class="lg:sticky lg:w-1/5">
                  <div class="p-1 md:hidden">
                    <USelect v-model="form.plans" :items="plansOptions" aria-label="Plans" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-10 sm:w-48" />
                  </div>
                  <div data-slot="scroll-area" class="relative overflow-hidden bg-default hidden w-full min-w-48 px-1 py-2 md:block" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
                    <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit] overflow-x-auto!" style="overflow: scroll hidden;">
                      <div style="min-width:100%;display:table">
                        <nav class="flex space-x-2 py-1 lg:flex-col lg:space-y-1 lg:space-x-0">
                          <NuxtLink class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default h-9 px-4 py-2 hover:bg-transparent hover:underline justify-start" to="/original/settings">
                            <span class="mr-2 [&amp;_svg]:size-[1.125rem]">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-tool">
                                <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5" />
                              </svg>
                            </span>
                            General
                          </NuxtLink>
                          <NuxtLink class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default h-9 px-4 py-2 hover:bg-transparent hover:underline justify-start" to="/original/settings/profile">
                            <span class="mr-2 [&amp;_svg]:size-[1.125rem]">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-user">
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                              </svg>
                            </span>
                            Profile
                          </NuxtLink>
                          <NuxtLink class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default h-9 px-4 py-2 hover:bg-transparent hover:underline justify-start" to="/original/settings/billing">
                            <span class="mr-2 [&amp;_svg]:size-[1.125rem]">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-coin">
                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
                                <path d="M12 7v10" />
                              </svg>
                            </span>
                            Billing
                          </NuxtLink>
                          <NuxtLink class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default h-9 px-4 py-2 bg-muted hover:bg-muted justify-start" to="/original/settings/plans">
                            <span class="mr-2 [&amp;_svg]:size-[1.125rem]">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-checklist">
                                <path d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
                                <path d="M14 19l2 2l4 -4" />
                                <path d="M9 8h4" />
                                <path d="M9 12h2" />
                              </svg>
                            </span>
                            Plans
                          </NuxtLink>
                          <NuxtLink class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default h-9 px-4 py-2 hover:bg-transparent hover:underline justify-start" to="/original/settings/connected-apps">
                            <span class="mr-2 [&amp;_svg]:size-[1.125rem]">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-apps">
                                <path d="M4 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" />
                                <path d="M4 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" />
                                <path d="M14 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" />
                                <path d="M14 7l6 0" />
                                <path d="M17 4l0 6" />
                              </svg>
                            </span>
                            Connected Apps
                          </NuxtLink>
                          <NuxtLink class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default h-9 px-4 py-2 hover:bg-transparent hover:underline justify-start" to="/original/settings/notifications">
                            <span class="mr-2 [&amp;_svg]:size-[1.125rem]">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-notification">
                                <path d="M10 6h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                <path d="M14 7a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                              </svg>
                            </span>
                            Notifications
                          </NuxtLink>
                        </nav>
                      </div>
                    </div>
                    <div data-orientation="horizontal" data-slot="scroll-area-scrollbar" class="flex touch-none transition-colors select-none h-2.5 flex-col border-t border-t-transparent p-[1px] border-default" style="position:absolute;bottom:0;left:0;right:var(--radix-scroll-area-corner-width);--radix-scroll-area-thumb-width:18px" />
                  </div>
                </aside>
                <div class="flex w-full overflow-y-scroll p-1 pr-4 md:overflow-y-hidden">
                  <div class="flex flex-1 flex-col">
                    <div class="flex-none">
                      <h3 class="text-lg font-medium text-highlighted">Plans</h3>
                      <p class="text-muted text-sm">Your subscriptions will beigin today with a free 14-day trial.</p>
                    </div>
                    <div data-orientation="horizontal" role="none" class="bg-(--ui-border) h-[1px] w-full mt-4 flex-none shadow-sm" />
                    <div data-slot="scroll-area" class="relative overflow-hidden faded-bottom -mx-4 flex-1 scroll-smooth px-4 md:pb-16" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
                      <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                        <div style="min-width:100%;display:table">
                          <div class="-mx-1 px-1.5 pt-4 lg:max-w-3xl">
                            <div class="mb-4 flex flex-col space-y-8 py-3">
                              <div role="radiogroup" class="grid gap-2" style="outline:none">
                                <div class="flex flex-wrap items-center gap-5">
                                  <div class="flex min-w-fit shrink-0 grow basis-0 items-center transition-colors">
                                    <UButton color="neutral" variant="outline" aria-checked="true" class="border-primary text-primary focus-visible:ring-accented aspect-square h-4 w-4 rounded-full border shadow-sm focus:outline-hidden focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 peer sr-only" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                                      <span class="flex items-center justify-center">
                                        <UIcon name="i-lucide-circle" class="fill-primary h-3.5 w-3.5" />
                                      </span>
                                    </UButton>
                                    <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 outline-(--ui-bg-muted) w-full cursor-pointer rounded-md border outline peer-data-[state=checked]:border-info" for="Monthly">
                                      <!-- Card 1: Monthly -->
                                      <UCard class="rounded-lg w-full border-none" :ui="{ body: 'contents' }">
                                        <div class="flex flex-col space-y-1.5 p-6 py-3">
                                          <div class="flex items-center justify-between gap-6">
                                            <div class="flex items-center gap-3">
                                              <div class="h-3 w-3 rounded-full outline-[1px] outline-offset-2 bg-info outline-info" />
                                              <div class="font-semibold tracking-tight text-sm">Monthly</div>
                                            </div>
                                          </div>
                                        </div>
                                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                                        <div class="p-6 py-3">
                                          <div class="flex flex-col items-start gap-1">
                                            <p class="text-sm">$49.99 / month</p>
                                            <p class="text-muted text-xs">Billed monthly</p>
                                          </div>
                                        </div>
                                      </UCard>
                                    </label>
                                  </div>
                                  <div class="flex min-w-fit shrink-0 grow basis-0 items-center transition-colors">
                                    <UButton color="neutral" variant="outline" aria-checked="false" class="border-primary text-primary focus-visible:ring-accented aspect-square h-4 w-4 rounded-full border shadow-sm focus:outline-hidden focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 peer sr-only" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)" />
                                    <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 outline-(--ui-bg-muted) w-full cursor-pointer rounded-md border outline peer-data-[state=checked]:border-info" for="Annual">
                                      <!-- Card 2: Annual -->
                                      <UCard class="rounded-lg w-full border-none" :ui="{ body: 'contents' }">
                                        <div class="flex flex-col space-y-1.5 p-6 py-3">
                                          <div class="flex items-center justify-between gap-6">
                                            <div class="flex items-center gap-3">
                                              <div class="h-3 w-3 rounded-full outline-[1px] outline-offset-2" />
                                              <div class="font-semibold tracking-tight text-sm">Annual</div>
                                            </div>
                                            <div class="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted px-2 py-1 text-xs border-default">Save %100</div>
                                          </div>
                                        </div>
                                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                                        <div class="p-6 py-3">
                                          <div class="flex flex-col items-start gap-1">
                                            <p class="text-sm">$41.40 / month</p>
                                            <p class="text-muted text-xs">$499.99 yearly</p>
                                          </div>
                                        </div>
                                      </UCard>
                                    </label>
                                  </div>
                                  <div class="flex min-w-fit shrink-0 grow basis-0 items-center transition-colors">
                                    <UButton color="neutral" variant="outline" aria-checked="false" class="border-primary text-primary focus-visible:ring-accented aspect-square h-4 w-4 rounded-full border shadow-sm focus:outline-hidden focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 peer sr-only" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)" />
                                    <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 outline-(--ui-bg-muted) w-full cursor-pointer rounded-md border outline peer-data-[state=checked]:border-info" for="Lifeftimes">
                                      <!-- Card 3: Lifeftimes -->
                                      <UCard class="rounded-lg w-full border-none" :ui="{ body: 'contents' }">
                                        <div class="flex flex-col space-y-1.5 p-6 py-3">
                                          <div class="flex items-center justify-between gap-6">
                                            <div class="flex items-center gap-3">
                                              <div class="h-3 w-3 rounded-full outline-[1px] outline-offset-2" />
                                              <div class="font-semibold tracking-tight text-sm">Lifeftimes</div>
                                            </div>
                                          </div>
                                        </div>
                                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                                        <div class="p-6 py-3">
                                          <div class="flex flex-col items-start gap-1">
                                            <p class="text-sm">$899.99</p>
                                            <p class="text-muted text-xs">1x Billed</p>
                                          </div>
                                        </div>
                                      </UCard>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="space-y-3">
                                <h2 class="font-bold text-highlighted">Overview</h2>
                                <p class="text-muted text-sm leading-5">Experience all the core features with the flexibility of a monthly subscription. Stay up-to-date with the latest tools, receive ongoing support, and enjoy uninterrupted access to key functionalities designed to enhance your productivity.</p>
                              </div>
                              <div class="space-y-3">
                                <div class="flex items-center justify-between">
                                  <h2 class="font-bold text-highlighted">Features</h2>
                                  <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline h-9 px-4 py-2 text-xs font-semibold text-info" aria-label="Learn More" type="button" @click="openAction(&quot;Learn More&quot;)">
                                    Learn More
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-arrow-up-right">
                                      <path d="M17 7l-10 10" />
                                      <path d="M8 7l9 0l0 9" />
                                    </svg>
                                  </UButton>
                                </div>
                                <div class="border-(--ui-text-muted) grid grid-cols-6 gap-4 rounded-md border-[1px] p-4">
                                  <div class="col-span-3 flex items-center gap-2">
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-check">
                                      <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                    <p class="text-sm">Dedicated Account Manager</p>
                                  </div>
                                  <div class="col-span-3 flex items-center gap-2">
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-check">
                                      <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                    <p class="text-sm">Community Access &amp; Forum Participation</p>
                                  </div>
                                  <div class="col-span-3 flex items-center gap-2">
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-check">
                                      <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                    <p class="text-sm">Customizable Settings &amp; Preferences</p>
                                  </div>
                                  <div class="col-span-3 flex items-center gap-2">
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-check">
                                      <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                    <p class="text-sm">Regular Performance Reports</p>
                                  </div>
                                </div>
                              </div>
                              <div class="space-y-3">
                                <div class="flex items-center justify-between">
                                  <h2 class="font-bold text-highlighted">Additional Resources</h2>
                                  <UButton color="neutral" variant="ghost" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline h-9 px-4 py-2 text-xs font-semibold text-info" aria-label="Learn More" type="button" @click="openAction(&quot;Learn More&quot;)">
                                    Learn More
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-arrow-up-right">
                                      <path d="M17 7l-10 10" />
                                      <path d="M8 7l9 0l0 9" />
                                    </svg>
                                  </UButton>
                                </div>
                                <div class="border-(--ui-text-muted) grid grid-cols-6 gap-4 rounded-md border-[1px] p-4">
                                  <div class="col-span-3 flex items-center gap-2">
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-check">
                                      <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                    <p class="text-sm">Mentorship Program</p>
                                  </div>
                                  <div class="col-span-3 flex items-center gap-2">
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-check">
                                      <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                    <p class="text-sm">Community Tutorials</p>
                                  </div>
                                  <div class="col-span-3 flex items-center gap-2">
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-check">
                                      <path d="M5 12l5 5l10 -10" />
                                    </svg>
                                    <p class="text-sm">Access to Knowledge Base</p>
                                  </div>
                                </div>
                              </div>
                              <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2 ml-auto w-fit" aria-label="Start Subscribe" type="button" @click="openAction(&quot;Start Subscribe&quot;)">
                                Start Subscribe
                              </UButton>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
