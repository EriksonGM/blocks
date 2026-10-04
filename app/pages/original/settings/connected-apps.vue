<!-- Page: /original/settings/connected-apps | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Connected Apps · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "connectedApps": "Connected Apps"
})

const connectedAppsOptions = [
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/original/settings/connected-apps">
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
                <span class="text-muted">Connected Apps</span>
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
                    <USelect v-model="form.connectedApps" :items="connectedAppsOptions" aria-label="Connected Apps" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-10 sm:w-48" />
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
                          <NuxtLink class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default h-9 px-4 py-2 hover:bg-transparent hover:underline justify-start" to="/original/settings/plans">
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
                          <NuxtLink class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default h-9 px-4 py-2 bg-muted hover:bg-muted justify-start" to="/original/settings/connected-apps">
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
                    <div data-orientation="horizontal" data-slot="scroll-area-scrollbar" class="flex touch-none transition-colors select-none h-2.5 flex-col border-t border-t-transparent p-[1px] border-default" style="position: absolute; bottom: 0px; left: 0px; right: var(--radix-scroll-area-corner-width); --radix-scroll-area-thumb-width: 190px;" />
                  </div>
                </aside>
                <div class="flex w-full overflow-y-scroll p-1 pr-4 md:overflow-y-hidden">
                  <div class="flex flex-1 flex-col">
                    <div class="flex-none">
                      <h3 class="text-lg font-medium text-highlighted">Connected Apps</h3>
                      <p class="text-muted text-sm">Manage and connect different applications.</p>
                    </div>
                    <div data-orientation="horizontal" role="none" class="bg-(--ui-border) h-[1px] w-full mt-4 flex-none shadow-sm" />
                    <div data-slot="scroll-area" class="relative overflow-hidden faded-bottom -mx-4 flex-1 scroll-smooth px-4 md:pb-16" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
                      <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                        <div style="min-width:100%;display:table">
                          <div class="-mx-1 px-1.5 pt-4 lg:max-w-xl">
                            <div class="text-muted text-start text-sm font-medium tracking-tight">
                              <p>To get the best experience, we recommand setting up at least one integration.</p>
                              <p>This is necessary for us to have a source to generate reports for you.</p>
                            </div>
                            <div class="my-10 flex w-full flex-col gap-4" data-orientation="vertical">
                              <div data-orientation="vertical" class="rounded-md border px-4 py-0 border-default">
                                <h3 data-orientation="vertical" class="flex text-highlighted">
                                  <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex-1 justify-between py-4 text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 flex items-center hover:no-underline" aria-label="TelegramConnectLearn More" type="button" @click="openAction(&quot;TelegramConnectLearn More&quot;)">
                                    <div class="flex items-center gap-2">
                                      <div class="bg-muted flex size-9 items-center justify-center rounded-lg p-2">
                                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-telegram">
                                          <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                                        </svg>
                                      </div>
                                      <p>Telegram</p>
                                    </div>
                                    <div class="mr-3 ml-auto flex h-full items-center gap-4">
                                      <div aria-label="Connect" class="rounded-md border px-2 py-1 text-xs font-semibold hover:bg-default dark:hover:bg-elevated border-default">Connect</div>
                                      <div data-orientation="vertical" role="none" class="bg-(--ui-border) shrink-0 w-[1px] h-6" />
                                      <div class="flex items-center gap-2">
                                        <p class="text-xs font-semibold text-highlighted">Learn More</p>
                                      </div>
                                    </div>
                                    <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                                  </UButton>
                                </h3>
                                <div id="radix-_R_139qnpfl5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                              </div>
                              <div data-orientation="vertical" class="rounded-md border px-4 py-0 border-default">
                                <h3 data-orientation="vertical" class="flex text-highlighted">
                                  <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex-1 justify-between py-4 text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 flex items-center hover:no-underline" aria-label="NotionConnectedLearn More" type="button" @click="openAction(&quot;NotionConnectedLearn More&quot;)">
                                    <div class="flex items-center gap-2">
                                      <div class="bg-muted flex size-9 items-center justify-center rounded-lg p-2">
                                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-notion">
                                          <path d="M11 17.5v-6.5h.5l4 6h.5v-6.5" />
                                          <path d="M19.077 20.071l-11.53 .887a1 1 0 0 1 -.876 -.397l-2.471 -3.294a1 1 0 0 1 -.2 -.6v-10.741a1 1 0 0 1 .923 -.997l11.389 -.876a2 2 0 0 1 1.262 .33l1.535 1.023a2 2 0 0 1 .891 1.664v12.004a1 1 0 0 1 -.923 .997" />
                                          <path d="M4.5 5.5l2.5 2.5" />
                                          <path d="M20 7l-13 1v12.5" />
                                        </svg>
                                      </div>
                                      <p>Notion</p>
                                    </div>
                                    <div class="mr-3 ml-auto flex h-full items-center gap-4">
                                      <div aria-label="Connected" class="rounded-md border px-2 py-1 text-xs font-semibold border-info/20 bg-info/10 hover:bg-info/10 dark:border-info dark:bg-info dark:hover:bg-info">Connected</div>
                                      <div data-orientation="vertical" role="none" class="bg-(--ui-border) shrink-0 w-[1px] h-6" />
                                      <div class="flex items-center gap-2">
                                        <p class="text-xs font-semibold text-highlighted">Learn More</p>
                                      </div>
                                    </div>
                                    <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                                  </UButton>
                                </h3>
                                <div id="radix-_R_159qnpfl5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                              </div>
                              <div data-orientation="vertical" class="rounded-md border px-4 py-0 border-default">
                                <h3 data-orientation="vertical" class="flex text-highlighted">
                                  <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex-1 justify-between py-4 text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 flex items-center hover:no-underline" aria-label="FigmaConnectedLearn More" type="button" @click="openAction(&quot;FigmaConnectedLearn More&quot;)">
                                    <div class="flex items-center gap-2">
                                      <div class="bg-muted flex size-9 items-center justify-center rounded-lg p-2">
                                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-figma">
                                          <path d="M12 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                          <path d="M6 6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3" />
                                          <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" />
                                        </svg>
                                      </div>
                                      <p>Figma</p>
                                    </div>
                                    <div class="mr-3 ml-auto flex h-full items-center gap-4">
                                      <div aria-label="Connected" class="rounded-md border px-2 py-1 text-xs font-semibold border-info/20 bg-info/10 hover:bg-info/10 dark:border-info dark:bg-info dark:hover:bg-info">Connected</div>
                                      <div data-orientation="vertical" role="none" class="bg-(--ui-border) shrink-0 w-[1px] h-6" />
                                      <div class="flex items-center gap-2">
                                        <p class="text-xs font-semibold text-highlighted">Learn More</p>
                                      </div>
                                    </div>
                                    <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                                  </UButton>
                                </h3>
                                <div id="radix-_R_179qnpfl5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                              </div>
                              <div data-orientation="vertical" class="rounded-md border px-4 py-0 border-default">
                                <h3 data-orientation="vertical" class="flex text-highlighted">
                                  <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex-1 justify-between py-4 text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 flex items-center hover:no-underline" aria-label="TrelloConnectLearn More" type="button" @click="openAction(&quot;TrelloConnectLearn More&quot;)">
                                    <div class="flex items-center gap-2">
                                      <div class="bg-muted flex size-9 items-center justify-center rounded-lg p-2">
                                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-trello">
                                          <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
                                          <path d="M7 7h3v10h-3l0 -10" />
                                          <path d="M14 7h3v6h-3l0 -6" />
                                        </svg>
                                      </div>
                                      <p>Trello</p>
                                    </div>
                                    <div class="mr-3 ml-auto flex h-full items-center gap-4">
                                      <div aria-label="Connect" class="rounded-md border px-2 py-1 text-xs font-semibold hover:bg-default dark:hover:bg-elevated border-default">Connect</div>
                                      <div data-orientation="vertical" role="none" class="bg-(--ui-border) shrink-0 w-[1px] h-6" />
                                      <div class="flex items-center gap-2">
                                        <p class="text-xs font-semibold text-highlighted">Learn More</p>
                                      </div>
                                    </div>
                                    <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                                  </UButton>
                                </h3>
                                <div id="radix-_R_199qnpfl5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                              </div>
                              <div data-orientation="vertical" class="rounded-md border px-4 py-0 border-default">
                                <h3 data-orientation="vertical" class="flex text-highlighted">
                                  <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex-1 justify-between py-4 text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 flex items-center hover:no-underline" aria-label="SlackConnectLearn More" type="button" @click="openAction(&quot;SlackConnectLearn More&quot;)">
                                    <div class="flex items-center gap-2">
                                      <div class="bg-muted flex size-9 items-center justify-center rounded-lg p-2">
                                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-slack">
                                          <path d="M12 12v-6a2 2 0 0 1 4 0v6m0 -2a2 2 0 1 1 2 2h-6" />
                                          <path d="M12 12h6a2 2 0 0 1 0 4h-6m2 0a2 2 0 1 1 -2 2v-6" />
                                          <path d="M12 12v6a2 2 0 0 1 -4 0v-6m0 2a2 2 0 1 1 -2 -2h6" />
                                          <path d="M12 12h-6a2 2 0 0 1 0 -4h6m-2 0a2 2 0 1 1 2 -2v6" />
                                        </svg>
                                      </div>
                                      <p>Slack</p>
                                    </div>
                                    <div class="mr-3 ml-auto flex h-full items-center gap-4">
                                      <div aria-label="Connect" class="rounded-md border px-2 py-1 text-xs font-semibold hover:bg-default dark:hover:bg-elevated border-default">Connect</div>
                                      <div data-orientation="vertical" role="none" class="bg-(--ui-border) shrink-0 w-[1px] h-6" />
                                      <div class="flex items-center gap-2">
                                        <p class="text-xs font-semibold text-highlighted">Learn More</p>
                                      </div>
                                    </div>
                                    <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                                  </UButton>
                                </h3>
                                <div id="radix-_R_1b9qnpfl5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                              </div>
                              <div data-orientation="vertical" class="rounded-md border px-4 py-0 border-default">
                                <h3 data-orientation="vertical" class="flex text-highlighted">
                                  <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex-1 justify-between py-4 text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 flex items-center hover:no-underline" aria-label="ZoomConnectedLearn More" type="button" @click="openAction(&quot;ZoomConnectedLearn More&quot;)">
                                    <div class="flex items-center gap-2">
                                      <div class="bg-muted flex size-9 items-center justify-center rounded-lg p-2">
                                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-zoom">
                                          <path d="M17.011 9.385v5.128l3.989 3.487v-12l-3.989 3.385" />
                                          <path d="M3.887 6h10.08c1.468 0 3.033 1.203 3.033 2.803v8.196a.991 .991 0 0 1 -.975 1h-10.373c-1.667 0 -2.652 -1.5 -2.652 -3l.01 -8a.882 .882 0 0 1 .208 -.71a.841 .841 0 0 1 .67 -.287l-.001 -.002" />
                                        </svg>
                                      </div>
                                      <p>Zoom</p>
                                    </div>
                                    <div class="mr-3 ml-auto flex h-full items-center gap-4">
                                      <div aria-label="Connected" class="rounded-md border px-2 py-1 text-xs font-semibold border-info/20 bg-info/10 hover:bg-info/10 dark:border-info dark:bg-info dark:hover:bg-info">Connected</div>
                                      <div data-orientation="vertical" role="none" class="bg-(--ui-border) shrink-0 w-[1px] h-6" />
                                      <div class="flex items-center gap-2">
                                        <p class="text-xs font-semibold text-highlighted">Learn More</p>
                                      </div>
                                    </div>
                                    <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                                  </UButton>
                                </h3>
                                <div id="radix-_R_1d9qnpfl5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                              </div>
                              <div data-orientation="vertical" class="rounded-md border px-4 py-0 border-default">
                                <h3 data-orientation="vertical" class="flex text-highlighted">
                                  <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex-1 justify-between py-4 text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 flex items-center hover:no-underline" aria-label="StripeConnectLearn More" type="button" @click="openAction(&quot;StripeConnectLearn More&quot;)">
                                    <div class="flex items-center gap-2">
                                      <div class="bg-muted flex size-9 items-center justify-center rounded-lg p-2">
                                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-stripe">
                                          <path d="M11.453 8.056c0 -.623 .518 -.979 1.442 -.979c1.69 0 3.41 .343 4.605 .923l.5 -4c-.948 -.449 -2.82 -1 -5.5 -1c-1.895 0 -3.373 .087 -4.5 1c-1.172 .956 -2 2.33 -2 4c0 3.03 1.958 4.906 5 6c1.961 .69 3 .743 3 1.5c0 .735 -.851 1.5 -2 1.5c-1.423 0 -3.963 -.609 -5.5 -1.5l-.5 4c1.321 .734 3.474 1.5 6 1.5c2 0 3.957 -.468 5.084 -1.36c1.263 -.979 1.916 -2.268 1.916 -4.14c0 -3.096 -1.915 -4.547 -5 -5.637c-1.646 -.605 -2.544 -1.07 -2.544 -1.807l-.003 0" />
                                        </svg>
                                      </div>
                                      <p>Stripe</p>
                                    </div>
                                    <div class="mr-3 ml-auto flex h-full items-center gap-4">
                                      <div aria-label="Connect" class="rounded-md border px-2 py-1 text-xs font-semibold hover:bg-default dark:hover:bg-elevated border-default">Connect</div>
                                      <div data-orientation="vertical" role="none" class="bg-(--ui-border) shrink-0 w-[1px] h-6" />
                                      <div class="flex items-center gap-2">
                                        <p class="text-xs font-semibold text-highlighted">Learn More</p>
                                      </div>
                                    </div>
                                    <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                                  </UButton>
                                </h3>
                                <div id="radix-_R_1f9qnpfl5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                              </div>
                              <div data-orientation="vertical" class="rounded-md border px-4 py-0 border-default">
                                <h3 data-orientation="vertical" class="flex text-highlighted">
                                  <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex-1 justify-between py-4 text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 flex items-center hover:no-underline" aria-label="GmailConnectedLearn More" type="button" @click="openAction(&quot;GmailConnectedLearn More&quot;)">
                                    <div class="flex items-center gap-2">
                                      <div class="bg-muted flex size-9 items-center justify-center rounded-lg p-2">
                                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-gmail">
                                          <path d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16" />
                                          <path d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1" />
                                          <path d="M16 4l-4 4l-4 -4" />
                                          <path d="M4 6.5l8 7.5l8 -7.5" />
                                        </svg>
                                      </div>
                                      <p>Gmail</p>
                                    </div>
                                    <div class="mr-3 ml-auto flex h-full items-center gap-4">
                                      <div aria-label="Connected" class="rounded-md border px-2 py-1 text-xs font-semibold border-info/20 bg-info/10 hover:bg-info/10 dark:border-info dark:bg-info dark:hover:bg-info">Connected</div>
                                      <div data-orientation="vertical" role="none" class="bg-(--ui-border) shrink-0 w-[1px] h-6" />
                                      <div class="flex items-center gap-2">
                                        <p class="text-xs font-semibold text-highlighted">Learn More</p>
                                      </div>
                                    </div>
                                    <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                                  </UButton>
                                </h3>
                                <div id="radix-_R_1h9qnpfl5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                              </div>
                              <div data-orientation="vertical" class="rounded-md border px-4 py-0 border-default">
                                <h3 data-orientation="vertical" class="flex text-highlighted">
                                  <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex-1 justify-between py-4 text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 flex items-center hover:no-underline" aria-label="MediumConnectLearn More" type="button" @click="openAction(&quot;MediumConnectLearn More&quot;)">
                                    <div class="flex items-center gap-2">
                                      <div class="bg-muted flex size-9 items-center justify-center rounded-lg p-2">
                                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-medium">
                                          <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
                                          <path d="M8 9h1l3 3l3 -3h1" />
                                          <path d="M8 15l2 0" />
                                          <path d="M14 15l2 0" />
                                          <path d="M9 9l0 6" />
                                          <path d="M15 9l0 6" />
                                        </svg>
                                      </div>
                                      <p>Medium</p>
                                    </div>
                                    <div class="mr-3 ml-auto flex h-full items-center gap-4">
                                      <div aria-label="Connect" class="rounded-md border px-2 py-1 text-xs font-semibold hover:bg-default dark:hover:bg-elevated border-default">Connect</div>
                                      <div data-orientation="vertical" role="none" class="bg-(--ui-border) shrink-0 w-[1px] h-6" />
                                      <div class="flex items-center gap-2">
                                        <p class="text-xs font-semibold text-highlighted">Learn More</p>
                                      </div>
                                    </div>
                                    <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                                  </UButton>
                                </h3>
                                <div id="radix-_R_1j9qnpfl5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                              </div>
                              <div data-orientation="vertical" class="rounded-md border px-4 py-0 border-default">
                                <h3 data-orientation="vertical" class="flex text-highlighted">
                                  <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex-1 justify-between py-4 text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 flex items-center hover:no-underline" aria-label="SkypeConnectLearn More" type="button" @click="openAction(&quot;SkypeConnectLearn More&quot;)">
                                    <div class="flex items-center gap-2">
                                      <div class="bg-muted flex size-9 items-center justify-center rounded-lg p-2">
                                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-skype">
                                          <path d="M12 3a9 9 0 0 1 8.603 11.65a4.5 4.5 0 0 1 -5.953 5.953a9 9 0 0 1 -11.253 -11.253a4.5 4.5 0 0 1 5.953 -5.954a8.987 8.987 0 0 1 2.65 -.396" />
                                          <path d="M8 14.5c.5 2 2.358 2.5 4 2.5c2.905 0 4 -1.187 4 -2.5c0 -1.503 -1.927 -2.5 -4 -2.5s-4 -1 -4 -2.5c0 -1.313 1.095 -2.5 4 -2.5c1.642 0 3.5 .5 4 2.5" />
                                        </svg>
                                      </div>
                                      <p>Skype</p>
                                    </div>
                                    <div class="mr-3 ml-auto flex h-full items-center gap-4">
                                      <div aria-label="Connect" class="rounded-md border px-2 py-1 text-xs font-semibold hover:bg-default dark:hover:bg-elevated border-default">Connect</div>
                                      <div data-orientation="vertical" role="none" class="bg-(--ui-border) shrink-0 w-[1px] h-6" />
                                      <div class="flex items-center gap-2">
                                        <p class="text-xs font-semibold text-highlighted">Learn More</p>
                                      </div>
                                    </div>
                                    <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                                  </UButton>
                                </h3>
                                <div id="radix-_R_1l9qnpfl5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                              </div>
                              <div data-orientation="vertical" class="rounded-md border px-4 py-0 border-default">
                                <h3 data-orientation="vertical" class="flex text-highlighted">
                                  <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex-1 justify-between py-4 text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 flex items-center hover:no-underline" aria-label="DockerConnectLearn More" type="button" @click="openAction(&quot;DockerConnectLearn More&quot;)">
                                    <div class="flex items-center gap-2">
                                      <div class="bg-muted flex size-9 items-center justify-center rounded-lg p-2">
                                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-docker">
                                          <path d="M22 12.54c-1.804 -.345 -2.701 -1.08 -3.523 -2.94c-.487 .696 -1.102 1.568 -.92 2.4c.028 .238 -.32 1 -.557 1h-14c0 5.208 3.164 7 6.196 7c4.124 .022 7.828 -1.376 9.854 -5c1.146 -.101 2.296 -1.505 2.95 -2.46" />
                                          <path d="M5 10h3v3h-3l0 -3" />
                                          <path d="M8 10h3v3h-3l0 -3" />
                                          <path d="M11 10h3v3h-3l0 -3" />
                                          <path d="M8 7h3v3h-3l0 -3" />
                                          <path d="M11 7h3v3h-3l0 -3" />
                                          <path d="M11 4h3v3h-3l0 -3" />
                                          <path d="M4.571 18c1.5 0 2.047 -.074 2.958 -.78" />
                                          <path d="M10 16l0 .01" />
                                        </svg>
                                      </div>
                                      <p>Docker</p>
                                    </div>
                                    <div class="mr-3 ml-auto flex h-full items-center gap-4">
                                      <div aria-label="Connect" class="rounded-md border px-2 py-1 text-xs font-semibold hover:bg-default dark:hover:bg-elevated border-default">Connect</div>
                                      <div data-orientation="vertical" role="none" class="bg-(--ui-border) shrink-0 w-[1px] h-6" />
                                      <div class="flex items-center gap-2">
                                        <p class="text-xs font-semibold text-highlighted">Learn More</p>
                                      </div>
                                    </div>
                                    <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                                  </UButton>
                                </h3>
                                <div id="radix-_R_1n9qnpfl5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                              </div>
                              <div data-orientation="vertical" class="rounded-md border px-4 py-0 border-default">
                                <h3 data-orientation="vertical" class="flex text-highlighted">
                                  <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex-1 justify-between py-4 text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 flex items-center hover:no-underline" aria-label="GitHubConnectLearn More" type="button" @click="openAction(&quot;GitHubConnectLearn More&quot;)">
                                    <div class="flex items-center gap-2">
                                      <div class="bg-muted flex size-9 items-center justify-center rounded-lg p-2">
                                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github">
                                          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                        </svg>
                                      </div>
                                      <p>GitHub</p>
                                    </div>
                                    <div class="mr-3 ml-auto flex h-full items-center gap-4">
                                      <div aria-label="Connect" class="rounded-md border px-2 py-1 text-xs font-semibold hover:bg-default dark:hover:bg-elevated border-default">Connect</div>
                                      <div data-orientation="vertical" role="none" class="bg-(--ui-border) shrink-0 w-[1px] h-6" />
                                      <div class="flex items-center gap-2">
                                        <p class="text-xs font-semibold text-highlighted">Learn More</p>
                                      </div>
                                    </div>
                                    <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                                  </UButton>
                                </h3>
                                <div id="radix-_R_1p9qnpfl5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                              </div>
                              <div data-orientation="vertical" class="rounded-md border px-4 py-0 border-default">
                                <h3 data-orientation="vertical" class="flex text-highlighted">
                                  <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex-1 justify-between py-4 text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 flex items-center hover:no-underline" aria-label="GitLabConnectLearn More" type="button" @click="openAction(&quot;GitLabConnectLearn More&quot;)">
                                    <div class="flex items-center gap-2">
                                      <div class="bg-muted flex size-9 items-center justify-center rounded-lg p-2">
                                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-gitlab">
                                          <path d="M21 14l-9 7l-9 -7l3 -11l3 7h6l3 -7l3 11" />
                                        </svg>
                                      </div>
                                      <p>GitLab</p>
                                    </div>
                                    <div class="mr-3 ml-auto flex h-full items-center gap-4">
                                      <div aria-label="Connect" class="rounded-md border px-2 py-1 text-xs font-semibold hover:bg-default dark:hover:bg-elevated border-default">Connect</div>
                                      <div data-orientation="vertical" role="none" class="bg-(--ui-border) shrink-0 w-[1px] h-6" />
                                      <div class="flex items-center gap-2">
                                        <p class="text-xs font-semibold text-highlighted">Learn More</p>
                                      </div>
                                    </div>
                                    <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                                  </UButton>
                                </h3>
                                <div id="radix-_R_1r9qnpfl5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                              </div>
                              <div data-orientation="vertical" class="rounded-md border px-4 py-0 border-default">
                                <h3 data-orientation="vertical" class="flex text-highlighted">
                                  <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex-1 justify-between py-4 text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 flex items-center hover:no-underline" aria-label="DiscordConnectLearn More" type="button" @click="openAction(&quot;DiscordConnectLearn More&quot;)">
                                    <div class="flex items-center gap-2">
                                      <div class="bg-muted flex size-9 items-center justify-center rounded-lg p-2">
                                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-discord">
                                          <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                                          <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                                          <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
                                          <path d="M7 16.5c3.5 1 6.5 1 10 0" />
                                        </svg>
                                      </div>
                                      <p>Discord</p>
                                    </div>
                                    <div class="mr-3 ml-auto flex h-full items-center gap-4">
                                      <div aria-label="Connect" class="rounded-md border px-2 py-1 text-xs font-semibold hover:bg-default dark:hover:bg-elevated border-default">Connect</div>
                                      <div data-orientation="vertical" role="none" class="bg-(--ui-border) shrink-0 w-[1px] h-6" />
                                      <div class="flex items-center gap-2">
                                        <p class="text-xs font-semibold text-highlighted">Learn More</p>
                                      </div>
                                    </div>
                                    <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                                  </UButton>
                                </h3>
                                <div id="radix-_R_1t9qnpfl5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
                              </div>
                              <div data-orientation="vertical" class="rounded-md border px-4 py-0 border-default">
                                <h3 data-orientation="vertical" class="flex text-highlighted">
                                  <UButton color="neutral" variant="ghost" data-orientation="vertical" class="flex-1 justify-between py-4 text-left text-sm font-medium transition-all [&amp;[data-state=open]&gt;svg]:rotate-180 flex items-center hover:no-underline" aria-label="WhatsAppConnectLearn More" type="button" @click="openAction(&quot;WhatsAppConnectLearn More&quot;)">
                                    <div class="flex items-center gap-2">
                                      <div class="bg-muted flex size-9 items-center justify-center rounded-lg p-2">
                                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-whatsapp">
                                          <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                          <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                                        </svg>
                                      </div>
                                      <p>WhatsApp</p>
                                    </div>
                                    <div class="mr-3 ml-auto flex h-full items-center gap-4">
                                      <div aria-label="Connect" class="rounded-md border px-2 py-1 text-xs font-semibold hover:bg-default dark:hover:bg-elevated border-default">Connect</div>
                                      <div data-orientation="vertical" role="none" class="bg-(--ui-border) shrink-0 w-[1px] h-6" />
                                      <div class="flex items-center gap-2">
                                        <p class="text-xs font-semibold text-highlighted">Learn More</p>
                                      </div>
                                    </div>
                                    <UIcon name="i-lucide-chevron-down" class="text-muted h-4 w-4 shrink-0 transition-transform duration-200" />
                                  </UButton>
                                </h3>
                                <div id="radix-_R_1v9qnpfl5uiv5uknmlb_" role="region" data-orientation="vertical" class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);" />
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
