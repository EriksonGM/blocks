<!-- Page: /todo/settings | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Settings · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "name": "Alex Johnson",
  "email": "alex@example.com",
  "username": "alexjohnson",
  "currentPassword": "",
  "newPassword": "",
  "confirmPassword": ""
})

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "Account",
    "value": "0"
  },
  {
    "label": "General",
    "value": "1"
  },
  {
    "label": "Subscription",
    "value": "2"
  },
  {
    "label": "Themes",
    "value": "3"
  },
  {
    "label": "Integrations",
    "value": "4"
  },
  {
    "label": "Apps",
    "value": "5"
  }
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/todo/settings">
    <div class="contents">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex h-14 shrink-0 items-center gap-2 border-b px-4 sm:px-6 border-default">
          <div class="flex flex-1 items-center gap-2">
            <nav aria-label="breadcrumb">
              <ol class="text-muted flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5">
                <li class="inline-flex items-center gap-1.5">
                  <span role="link" class="text-highlighted font-normal line-clamp-1">Settings</span>
                </li>
              </ol>
            </nav>
          </div>
          <div class="flex items-center gap-2 text-sm">
            <div class="group relative flex items-center">
              <div class="text-muted font-medium transition-transform duration-200 ease-out group-hover:-translate-x-16">Oct 3</div>
              <div class="text-muted absolute right-0 translate-x-2 scale-50 font-medium whitespace-nowrap opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100">12:58 PM</div>
            </div>
            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated rounded-md text-xs text-muted hover:text-highlighted h-7 gap-2 px-2" aria-label="Search" type="button" @click="openAction(&quot;Search&quot;)">
              <UIcon name="i-lucide-search" class="size-3.5" />
              <span class="text-xs">Search</span>
            </UButton>
            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default data-[state=open]:bg-elevated h-7 w-7" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
              <UIcon name="i-lucide-ellipsis" class="size-4" />
            </UButton>
          </div>
        </div>
        <div class="flex min-h-0 flex-1 flex-col overflow-auto">
          <div class="flex flex-1 flex-col gap-6 py-6 px-6">
            <div class="w-full space-y-6 transition-all duration-300 mx-auto max-w-3xl">
              <h1 class="text-2xl font-bold text-highlighted">Settings</h1>
              <div data-orientation="horizontal" class="mt-4">
                <div data-slot="scroll-area" class="relative overflow-hidden w-full whitespace-nowrap" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
                  <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: scroll;">
                    <div style="min-width:100%;display:table">
                      <UTabs v-model="tabs1Active" :items="tabs1Items" :content="false" color="primary" variant="link" class="bg-muted text-muted inline-flex h-9 items-center rounded-lg p-1 w-max justify-start" data-orientation="horizontal" style="outline:none" />
                    </div>
                  </div>
                </div>
                <div data-orientation="horizontal" id="radix-_R_1anpfj5uknmlb_-content-account" class="ring-offset-background focus-visible:ring-accented mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden" style="animation-duration:0s">
                  <div class="mt-6 space-y-6">
                    <!-- Card 1: Profile Information -->
                    <UCard class="rounded-lg" :ui="{ body: 'contents' }">
                      <div class="flex flex-col space-y-1.5 p-6">
                        <div class="leading-none font-semibold tracking-tight">Profile Information</div>
                        <div class="text-muted text-sm">Update your account profile and email address</div>
                      </div>
                      <div class="p-6 pt-0">
                        <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                          <div class="flex items-center gap-6">
                            <span class="relative flex shrink-0 overflow-hidden rounded-full size-20">
                              <img class="aspect-square h-full w-full" alt="Profile" src="/reference/6c33e643eac5dd42.png" loading="lazy" />
                            </span>
                            <div class="flex flex-col gap-2">
                              <div>
                                <p class="text-sm font-medium">Profile Photo</p>
                                <p class="text-muted text-xs">JPG, PNG or GIF. Max size 2MB.</p>
                              </div>
                              <div class="flex gap-2">
                                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Change photo" type="button" @click="openAction(&quot;Change photo&quot;)">
                                  Change photo
                                </UButton>
                                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Remove" type="button" @click="openAction(&quot;Remove&quot;)">
                                  Remove
                                </UButton>
                              </div>
                            </div>
                          </div>
                          <UFormField label="Full name" name="name" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                            <UInput v-model="form.name" type="text" name="name" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                          </UFormField>
                          <UFormField label="Email address" name="email" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                            <UInput v-model="form.email" type="email" name="email" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                            <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">We'll use this email for account notifications</p>
                          </UFormField>
                          <UFormField label="Username" name="username" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                            <UInput v-model="form.username" type="text" name="username" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                          </UFormField>
                        </div>
                      </div>
                    </UCard>
                    <!-- Card 2: Password -->
                    <UCard class="rounded-lg" :ui="{ body: 'contents' }">
                      <div class="flex flex-col space-y-1.5 p-6">
                        <div class="leading-none font-semibold tracking-tight">Password</div>
                        <div class="text-muted text-sm">Change your password to keep your account secure</div>
                      </div>
                      <div class="p-6 pt-0">
                        <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                          <UFormField label="Current password" name="currentPassword" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                            <UInput v-model="form.currentPassword" type="password" name="currentPassword" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                          </UFormField>
                          <UFormField label="New password" name="newPassword" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                            <UInput v-model="form.newPassword" type="password" name="newPassword" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                          </UFormField>
                          <UFormField label="Confirm password" name="confirmPassword" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                            <UInput v-model="form.confirmPassword" type="password" name="confirmPassword" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                          </UFormField>
                          <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2 w-fit" aria-label="Update password" type="button" @click="openAction(&quot;Update password&quot;)">
                            Update password
                          </UButton>
                        </div>
                      </div>
                    </UCard>
                    <!-- Card 3: Danger Zone -->
                    <UCard class="rounded-lg border-(--ui-error)/50" :ui="{ body: 'contents' }">
                      <div class="flex flex-col space-y-1.5 p-6">
                        <div class="leading-none font-semibold tracking-tight text-error">Danger Zone</div>
                        <div class="text-muted text-sm">Irreversible actions that affect your account</div>
                      </div>
                      <div class="p-6 pt-0 space-y-4">
                        <div class="flex items-center justify-between">
                          <div>
                            <p class="font-medium">Delete account</p>
                            <p class="text-muted text-sm">Permanently delete your account and all data</p>
                          </div>
                          <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs text-error" aria-label="Delete" type="button" @click="openAction(&quot;Delete&quot;)">
                            Delete
                          </UButton>
                        </div>
                      </div>
                    </UCard>
                  </div>
                </div>
                <div data-orientation="horizontal" id="radix-_R_1anpfj5uknmlb_-content-general" class="ring-offset-background focus-visible:ring-accented mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden" />
                <div data-orientation="horizontal" id="radix-_R_1anpfj5uknmlb_-content-subscription" class="ring-offset-background focus-visible:ring-accented mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden" />
                <div data-orientation="horizontal" id="radix-_R_1anpfj5uknmlb_-content-themes" class="ring-offset-background focus-visible:ring-accented mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden" />
                <div data-orientation="horizontal" id="radix-_R_1anpfj5uknmlb_-content-integrations" class="ring-offset-background focus-visible:ring-accented mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden" />
                <div data-orientation="horizontal" id="radix-_R_1anpfj5uknmlb_-content-apps" class="ring-offset-background focus-visible:ring-accented mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden" />
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
