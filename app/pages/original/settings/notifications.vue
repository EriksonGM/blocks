<!-- Page: /original/settings/notifications | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Notifications · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "notifications": "Notifications",
  "enabled": false,
  "enabled2": false,
  "enabled3": true,
  "enabled4": true,
  "enabled5": false
})

const notificationsOptions = [
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

function saveForm() {
  toast.add({ title: "Changes saved", color: 'success', icon: 'i-lucide-check' })
}

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/original/settings/notifications">
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
                <span class="text-muted">Notifications</span>
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
                    <USelect v-model="form.notifications" :items="notificationsOptions" aria-label="Notifications" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-10 sm:w-48" />
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
                          <NuxtLink class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default h-9 px-4 py-2 bg-muted hover:bg-muted justify-start" to="/original/settings/notifications">
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
                      <h3 class="text-lg font-medium text-highlighted">Notifications</h3>
                      <p class="text-muted text-sm">Manage and connect different applications.</p>
                    </div>
                    <div data-orientation="horizontal" role="none" class="bg-(--ui-border) h-[1px] w-full mt-4 flex-none shadow-sm" />
                    <div data-slot="scroll-area" class="relative overflow-hidden faded-bottom -mx-4 flex-1 scroll-smooth px-4 md:pb-16" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
                      <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                        <div style="min-width:100%;display:table">
                          <div class="-mx-1 px-1.5 pt-4 lg:max-w-xl">
                            <!-- Form: controls and draft state are declared in this page -->
                            <UForm :state="form" @submit="saveForm" class="space-y-8">
                              <div class="relative space-y-3">
                                <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="_R_pqnpfl5uiv5uknmlb_-form-item">Notify me about...</label>
                                <div role="radiogroup" class="gap-2 flex flex-col space-y-1" id="_R_pqnpfl5uiv5uknmlb_-form-item" style="outline:none">
                                  <div class="flex items-center space-y-0 space-x-3">
                                    <UButton color="neutral" variant="outline" aria-checked="false" class="border-primary text-primary focus-visible:ring-accented aspect-square h-4 w-4 rounded-full border shadow-sm focus:outline-hidden focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)" />
                                    <label class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal" for="_R_1kpqnpfl5uiv5uknmlb_-form-item">All new messages</label>
                                  </div>
                                  <div class="flex items-center space-y-0 space-x-3">
                                    <UButton color="neutral" variant="outline" aria-checked="false" class="border-primary text-primary focus-visible:ring-accented aspect-square h-4 w-4 rounded-full border shadow-sm focus:outline-hidden focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)" />
                                    <label class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal" for="_R_2kpqnpfl5uiv5uknmlb_-form-item">Direct messages and mentions</label>
                                  </div>
                                  <div class="flex items-center space-y-0 space-x-3">
                                    <UButton color="neutral" variant="outline" aria-checked="false" class="border-primary text-primary focus-visible:ring-accented aspect-square h-4 w-4 rounded-full border shadow-sm focus:outline-hidden focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)" />
                                    <label class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal" for="_R_3kpqnpfl5uiv5uknmlb_-form-item">Nothing</label>
                                  </div>
                                </div>
                              </div>
                              <div class="relative">
                                <h3 class="mb-4 text-lg font-medium text-highlighted">Email Notifications</h3>
                                <div class="space-y-4">
                                  <div class="space-y-2 flex flex-row items-center justify-between rounded-lg border p-4 border-default">
                                    <div class="space-y-0.5">
                                      <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base" for="_R_p9qnpfl5uiv5uknmlb_-form-item">Communication emails</label>
                                      <p id="_R_p9qnpfl5uiv5uknmlb_-form-item-description" class="text-muted text-[0.8rem]">Receive emails about your account activity.</p>
                                    </div>
                                    <USwitch v-model="form.enabled" aria-label="Toggle setting" />
                                  </div>
                                  <div class="space-y-2 flex flex-row items-center justify-between rounded-lg border p-4 border-default">
                                    <div class="space-y-0.5">
                                      <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base" for="_R_199qnpfl5uiv5uknmlb_-form-item">Marketing emails</label>
                                      <p id="_R_199qnpfl5uiv5uknmlb_-form-item-description" class="text-muted text-[0.8rem]">Receive emails about new products, features, and more.</p>
                                    </div>
                                    <USwitch v-model="form.enabled2" aria-label="Toggle setting" />
                                  </div>
                                  <div class="space-y-2 flex flex-row items-center justify-between rounded-lg border p-4 border-default">
                                    <div class="space-y-0.5">
                                      <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base" for="_R_1p9qnpfl5uiv5uknmlb_-form-item">Social emails</label>
                                      <p id="_R_1p9qnpfl5uiv5uknmlb_-form-item-description" class="text-muted text-[0.8rem]">Receive emails for friend requests, follows, and more.</p>
                                    </div>
                                    <USwitch v-model="form.enabled3" aria-label="Toggle setting" />
                                  </div>
                                  <div class="space-y-2 flex flex-row items-center justify-between rounded-lg border p-4 border-default">
                                    <div class="space-y-0.5">
                                      <label class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base" for="_R_299qnpfl5uiv5uknmlb_-form-item">Security emails</label>
                                      <p id="_R_299qnpfl5uiv5uknmlb_-form-item-description" class="text-muted text-[0.8rem]">Receive emails about your account activity and security.</p>
                                    </div>
                                    <USwitch v-model="form.enabled4" aria-label="Toggle setting" />
                                  </div>
                                </div>
                              </div>
                              <div class="relative flex flex-row items-start space-y-0 space-x-3">
                                <UCheckbox v-model="form.enabled5" aria-label="Toggle setting" />
                                <div class="space-y-1 leading-none">
                                  <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="_R_1pqnpfl5uiv5uknmlb_-form-item">Use different settings for my mobile devices</label>
                                  <p id="_R_1pqnpfl5uiv5uknmlb_-form-item-description" class="text-muted text-[0.8rem]">
                                    You can manage your mobile notifications in the
                                    <NuxtLink class="underline decoration-dashed underline-offset-4 hover:decoration-solid" to="/original/settings">
                                      mobile settings
                                    </NuxtLink>
                                    page.
                                  </p>
                                </div>
                              </div>
                              <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Update notifications" type="submit">
                                Update notifications
                              </UButton>
                            </UForm>
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
