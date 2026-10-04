<!-- Page: /ai-chat/organization-settings | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Organization settings · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "organizationName": "Shadcnblocks Studio",
  "organizationContact": "platform@example.com",
  "timeZone": "UTC",
  "defaultMemberRole": "Reader",
  "timeZone2": "UTC",
  "defaultMemberRole2": "Reader",
  "timeZone3": "UTC",
  "defaultMemberRole3": "Reader",
  "timeZone4": "UTC",
  "defaultMemberRole4": "Reader",
  "timeZone5": "UTC",
  "defaultMemberRole5": "Reader",
  "timeZone6": "UTC",
  "defaultMemberRole6": "Reader",
  "timeZone7": "UTC",
  "defaultMemberRole7": "Reader",
  "timeZone8": "UTC",
  "defaultMemberRole8": "Reader"
})

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "General",
    "value": "0"
  },
  {
    "label": "Verification & features",
    "value": "1"
  },
  {
    "label": "Admin keys",
    "value": "2"
  },
  {
    "label": "Members",
    "value": "3"
  },
  {
    "label": "Invitations",
    "value": "4"
  },
  {
    "label": "Groups",
    "value": "5"
  },
  {
    "label": "Roles",
    "value": "6"
  },
  {
    "label": "Projects",
    "value": "7"
  }
]

const timeZoneOptions = [
  "UTC",
  "America/New_York",
  "Europe/London",
  "Asia/Kolkata"
]

const defaultMemberRoleOptions = [
  "Reader",
  "Developer"
]

const timeZone2Options = [
  "UTC",
  "America/New_York",
  "Europe/London",
  "Asia/Kolkata"
]

const defaultMemberRole2Options = [
  "Reader",
  "Developer"
]

const timeZone3Options = [
  "UTC",
  "America/New_York",
  "Europe/London",
  "Asia/Kolkata"
]

const defaultMemberRole3Options = [
  "Reader",
  "Developer"
]

const timeZone4Options = [
  "UTC",
  "America/New_York",
  "Europe/London",
  "Asia/Kolkata"
]

const defaultMemberRole4Options = [
  "Reader",
  "Developer"
]

const timeZone5Options = [
  "UTC",
  "America/New_York",
  "Europe/London",
  "Asia/Kolkata"
]

const defaultMemberRole5Options = [
  "Reader",
  "Developer"
]

const timeZone6Options = [
  "UTC",
  "America/New_York",
  "Europe/London",
  "Asia/Kolkata"
]

const defaultMemberRole6Options = [
  "Reader",
  "Developer"
]

const timeZone7Options = [
  "UTC",
  "America/New_York",
  "Europe/London",
  "Asia/Kolkata"
]

const defaultMemberRole7Options = [
  "Reader",
  "Developer"
]

const timeZone8Options = [
  "UTC",
  "America/New_York",
  "Europe/London",
  "Asia/Kolkata"
]

const defaultMemberRole8Options = [
  "Reader",
  "Developer"
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/organization-settings">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="min-h-0 flex-1 overflow-y-auto">
        <div class="mx-auto flex flex-col px-4 sm:px-8 gap-6 py-6 sm:py-8 max-w-7xl">
          <div class="flex flex-wrap gap-4 items-start justify-between">
            <div class="flex flex-col gap-1">
              <h1 class="text-2xl font-semibold tracking-tight text-highlighted">Organization settings</h1>
              <p class="text-muted max-w-2xl text-sm">Shadcnblocks Studio · Organization-wide identity, access, and projects.</p>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" to="/ai-chat/billing">
                Billing
                <UIcon name="i-lucide-arrow-up-right" class="size-4" />
              </NuxtLink>
            </div>
          </div>
          <div data-orientation="horizontal" class="min-w-0">
            <UTabs v-model="tabs1Active" :items="tabs1Items" color="primary" variant="link" class="grid min-w-0 items-start gap-6 lg:grid-cols-[176px_minmax(0,1fr)] lg:gap-8" data-slot="tabs" :ui="{ root: 'gap-4', list: 'justify-start', content: 'min-h-0' }">
              <template #content="{ item }">
                <template v-if="item.value === '0'">
                  <div data-orientation="horizontal" id="radix-_R_ddbsnpfknmlb_-content-general" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 min-w-0" style="animation-duration:0s">
                    <section class="flex max-w-3xl flex-col gap-6">
                      <div>
                        <h2 class="text-lg font-semibold text-highlighted">Organization profile</h2>
                        <p class="text-muted mt-1 text-sm">Defaults shared by every project in this organization.</p>
                      </div>
                      <div class="flex items-center gap-4 rounded-lg border p-4 border-default">
                        <span class="bg-muted grid size-12 place-items-center rounded-lg">
                          <UIcon name="i-lucide-building-2" class="size-5" />
                        </span>
                        <div>
                          <p class="text-sm font-medium">Shadcnblocks Studio</p>
                          <code class="text-muted text-xs">org_studio_0192</code>
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted ml-auto border-default">Team workspace</div>
                      </div>
                      <!-- Form: controls and draft state are declared in this page -->
                      <UForm :state="form" @submit="saveForm">
                        <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                          <UFormField label="Organization name" name="organizationName" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto" required>
                            <UInput v-model="form.organizationName" type="text" name="organizationName" class="flex h-9 w-full rounded-md text-base md:text-sm" required :ui="{ base: 'h-full' }" />
                          </UFormField>
                          <UFormField label="Contact email" name="organizationContact" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto" required>
                            <UInput v-model="form.organizationContact" type="email" name="organizationContact" class="flex h-9 w-full rounded-md text-base md:text-sm" required :ui="{ base: 'h-full' }" />
                            <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Shown in demo organization communications.</p>
                          </UFormField>
                          <div class="grid gap-5 sm:grid-cols-2">
                            <UFormField label="Time zone" name="timeZone" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.timeZone" :items="timeZoneOptions" aria-label="Organization time zone" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                            </UFormField>
                            <UFormField label="Default member role" name="defaultMemberRole" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.defaultMemberRole" :items="defaultMemberRoleOptions" aria-label="Default member role" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                            </UFormField>
                          </div>
                        </div>
                        <div class="mt-6 flex justify-end gap-2">
                          <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Discard" type="button" @click="openAction(&quot;Discard&quot;)">
                            Discard
                          </UButton>
                          <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Save changes" type="submit" disabled>
                            Save changes
                          </UButton>
                        </div>
                      </UForm>
                    </section>
                    <div />
                  </div>
                </template>
                <template v-if="item.value === '1'">
                  <div data-orientation="horizontal" id="radix-_R_ddbsnpfknmlb_-content-general" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 min-w-0" style="animation-duration:0s">
                    <section class="flex max-w-3xl flex-col gap-6">
                      <div>
                        <h2 class="text-lg font-semibold text-highlighted">Organization profile</h2>
                        <p class="text-muted mt-1 text-sm">Defaults shared by every project in this organization.</p>
                      </div>
                      <div class="flex items-center gap-4 rounded-lg border p-4 border-default">
                        <span class="bg-muted grid size-12 place-items-center rounded-lg">
                          <UIcon name="i-lucide-building-2" class="size-5" />
                        </span>
                        <div>
                          <p class="text-sm font-medium">Shadcnblocks Studio</p>
                          <code class="text-muted text-xs">org_studio_0192</code>
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted ml-auto border-default">Team workspace</div>
                      </div>
                      <!-- Form: controls and draft state are declared in this page -->
                      <UForm :state="form" @submit="saveForm">
                        <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                          <UFormField label="Organization name" name="organizationName" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto" required>
                            <UInput v-model="form.organizationName" type="text" name="organizationName" class="flex h-9 w-full rounded-md text-base md:text-sm" required :ui="{ base: 'h-full' }" />
                          </UFormField>
                          <UFormField label="Contact email" name="organizationContact" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto" required>
                            <UInput v-model="form.organizationContact" type="email" name="organizationContact" class="flex h-9 w-full rounded-md text-base md:text-sm" required :ui="{ base: 'h-full' }" />
                            <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Shown in demo organization communications.</p>
                          </UFormField>
                          <div class="grid gap-5 sm:grid-cols-2">
                            <UFormField label="Time zone" name="timeZone2" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.timeZone2" :items="timeZone2Options" aria-label="Organization time zone" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                            </UFormField>
                            <UFormField label="Default member role" name="defaultMemberRole2" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.defaultMemberRole2" :items="defaultMemberRole2Options" aria-label="Default member role" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                            </UFormField>
                          </div>
                        </div>
                        <div class="mt-6 flex justify-end gap-2">
                          <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Discard" type="button" @click="openAction(&quot;Discard&quot;)">
                            Discard
                          </UButton>
                          <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Save changes" type="submit" disabled>
                            Save changes
                          </UButton>
                        </div>
                      </UForm>
                    </section>
                    <div />
                  </div>
                </template>
                <template v-if="item.value === '2'">
                  <div data-orientation="horizontal" id="radix-_R_ddbsnpfknmlb_-content-general" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 min-w-0" style="animation-duration:0s">
                    <section class="flex max-w-3xl flex-col gap-6">
                      <div>
                        <h2 class="text-lg font-semibold text-highlighted">Organization profile</h2>
                        <p class="text-muted mt-1 text-sm">Defaults shared by every project in this organization.</p>
                      </div>
                      <div class="flex items-center gap-4 rounded-lg border p-4 border-default">
                        <span class="bg-muted grid size-12 place-items-center rounded-lg">
                          <UIcon name="i-lucide-building-2" class="size-5" />
                        </span>
                        <div>
                          <p class="text-sm font-medium">Shadcnblocks Studio</p>
                          <code class="text-muted text-xs">org_studio_0192</code>
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted ml-auto border-default">Team workspace</div>
                      </div>
                      <!-- Form: controls and draft state are declared in this page -->
                      <UForm :state="form" @submit="saveForm">
                        <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                          <UFormField label="Organization name" name="organizationName" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto" required>
                            <UInput v-model="form.organizationName" type="text" name="organizationName" class="flex h-9 w-full rounded-md text-base md:text-sm" required :ui="{ base: 'h-full' }" />
                          </UFormField>
                          <UFormField label="Contact email" name="organizationContact" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto" required>
                            <UInput v-model="form.organizationContact" type="email" name="organizationContact" class="flex h-9 w-full rounded-md text-base md:text-sm" required :ui="{ base: 'h-full' }" />
                            <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Shown in demo organization communications.</p>
                          </UFormField>
                          <div class="grid gap-5 sm:grid-cols-2">
                            <UFormField label="Time zone" name="timeZone3" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.timeZone3" :items="timeZone3Options" aria-label="Organization time zone" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                            </UFormField>
                            <UFormField label="Default member role" name="defaultMemberRole3" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.defaultMemberRole3" :items="defaultMemberRole3Options" aria-label="Default member role" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                            </UFormField>
                          </div>
                        </div>
                        <div class="mt-6 flex justify-end gap-2">
                          <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Discard" type="button" @click="openAction(&quot;Discard&quot;)">
                            Discard
                          </UButton>
                          <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Save changes" type="submit" disabled>
                            Save changes
                          </UButton>
                        </div>
                      </UForm>
                    </section>
                    <div />
                  </div>
                </template>
                <template v-if="item.value === '3'">
                  <div data-orientation="horizontal" id="radix-_R_ddbsnpfknmlb_-content-general" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 min-w-0" style="animation-duration:0s">
                    <section class="flex max-w-3xl flex-col gap-6">
                      <div>
                        <h2 class="text-lg font-semibold text-highlighted">Organization profile</h2>
                        <p class="text-muted mt-1 text-sm">Defaults shared by every project in this organization.</p>
                      </div>
                      <div class="flex items-center gap-4 rounded-lg border p-4 border-default">
                        <span class="bg-muted grid size-12 place-items-center rounded-lg">
                          <UIcon name="i-lucide-building-2" class="size-5" />
                        </span>
                        <div>
                          <p class="text-sm font-medium">Shadcnblocks Studio</p>
                          <code class="text-muted text-xs">org_studio_0192</code>
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted ml-auto border-default">Team workspace</div>
                      </div>
                      <!-- Form: controls and draft state are declared in this page -->
                      <UForm :state="form" @submit="saveForm">
                        <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                          <UFormField label="Organization name" name="organizationName" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto" required>
                            <UInput v-model="form.organizationName" type="text" name="organizationName" class="flex h-9 w-full rounded-md text-base md:text-sm" required :ui="{ base: 'h-full' }" />
                          </UFormField>
                          <UFormField label="Contact email" name="organizationContact" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto" required>
                            <UInput v-model="form.organizationContact" type="email" name="organizationContact" class="flex h-9 w-full rounded-md text-base md:text-sm" required :ui="{ base: 'h-full' }" />
                            <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Shown in demo organization communications.</p>
                          </UFormField>
                          <div class="grid gap-5 sm:grid-cols-2">
                            <UFormField label="Time zone" name="timeZone4" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.timeZone4" :items="timeZone4Options" aria-label="Organization time zone" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                            </UFormField>
                            <UFormField label="Default member role" name="defaultMemberRole4" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.defaultMemberRole4" :items="defaultMemberRole4Options" aria-label="Default member role" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                            </UFormField>
                          </div>
                        </div>
                        <div class="mt-6 flex justify-end gap-2">
                          <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Discard" type="button" @click="openAction(&quot;Discard&quot;)">
                            Discard
                          </UButton>
                          <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Save changes" type="submit" disabled>
                            Save changes
                          </UButton>
                        </div>
                      </UForm>
                    </section>
                    <div />
                  </div>
                </template>
                <template v-if="item.value === '4'">
                  <div data-orientation="horizontal" id="radix-_R_ddbsnpfknmlb_-content-general" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 min-w-0" style="animation-duration:0s">
                    <section class="flex max-w-3xl flex-col gap-6">
                      <div>
                        <h2 class="text-lg font-semibold text-highlighted">Organization profile</h2>
                        <p class="text-muted mt-1 text-sm">Defaults shared by every project in this organization.</p>
                      </div>
                      <div class="flex items-center gap-4 rounded-lg border p-4 border-default">
                        <span class="bg-muted grid size-12 place-items-center rounded-lg">
                          <UIcon name="i-lucide-building-2" class="size-5" />
                        </span>
                        <div>
                          <p class="text-sm font-medium">Shadcnblocks Studio</p>
                          <code class="text-muted text-xs">org_studio_0192</code>
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted ml-auto border-default">Team workspace</div>
                      </div>
                      <!-- Form: controls and draft state are declared in this page -->
                      <UForm :state="form" @submit="saveForm">
                        <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                          <UFormField label="Organization name" name="organizationName" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto" required>
                            <UInput v-model="form.organizationName" type="text" name="organizationName" class="flex h-9 w-full rounded-md text-base md:text-sm" required :ui="{ base: 'h-full' }" />
                          </UFormField>
                          <UFormField label="Contact email" name="organizationContact" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto" required>
                            <UInput v-model="form.organizationContact" type="email" name="organizationContact" class="flex h-9 w-full rounded-md text-base md:text-sm" required :ui="{ base: 'h-full' }" />
                            <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Shown in demo organization communications.</p>
                          </UFormField>
                          <div class="grid gap-5 sm:grid-cols-2">
                            <UFormField label="Time zone" name="timeZone5" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.timeZone5" :items="timeZone5Options" aria-label="Organization time zone" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                            </UFormField>
                            <UFormField label="Default member role" name="defaultMemberRole5" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.defaultMemberRole5" :items="defaultMemberRole5Options" aria-label="Default member role" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                            </UFormField>
                          </div>
                        </div>
                        <div class="mt-6 flex justify-end gap-2">
                          <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Discard" type="button" @click="openAction(&quot;Discard&quot;)">
                            Discard
                          </UButton>
                          <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Save changes" type="submit" disabled>
                            Save changes
                          </UButton>
                        </div>
                      </UForm>
                    </section>
                    <div />
                  </div>
                </template>
                <template v-if="item.value === '5'">
                  <div data-orientation="horizontal" id="radix-_R_ddbsnpfknmlb_-content-general" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 min-w-0" style="animation-duration:0s">
                    <section class="flex max-w-3xl flex-col gap-6">
                      <div>
                        <h2 class="text-lg font-semibold text-highlighted">Organization profile</h2>
                        <p class="text-muted mt-1 text-sm">Defaults shared by every project in this organization.</p>
                      </div>
                      <div class="flex items-center gap-4 rounded-lg border p-4 border-default">
                        <span class="bg-muted grid size-12 place-items-center rounded-lg">
                          <UIcon name="i-lucide-building-2" class="size-5" />
                        </span>
                        <div>
                          <p class="text-sm font-medium">Shadcnblocks Studio</p>
                          <code class="text-muted text-xs">org_studio_0192</code>
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted ml-auto border-default">Team workspace</div>
                      </div>
                      <!-- Form: controls and draft state are declared in this page -->
                      <UForm :state="form" @submit="saveForm">
                        <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                          <UFormField label="Organization name" name="organizationName" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto" required>
                            <UInput v-model="form.organizationName" type="text" name="organizationName" class="flex h-9 w-full rounded-md text-base md:text-sm" required :ui="{ base: 'h-full' }" />
                          </UFormField>
                          <UFormField label="Contact email" name="organizationContact" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto" required>
                            <UInput v-model="form.organizationContact" type="email" name="organizationContact" class="flex h-9 w-full rounded-md text-base md:text-sm" required :ui="{ base: 'h-full' }" />
                            <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Shown in demo organization communications.</p>
                          </UFormField>
                          <div class="grid gap-5 sm:grid-cols-2">
                            <UFormField label="Time zone" name="timeZone6" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.timeZone6" :items="timeZone6Options" aria-label="Organization time zone" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                            </UFormField>
                            <UFormField label="Default member role" name="defaultMemberRole6" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.defaultMemberRole6" :items="defaultMemberRole6Options" aria-label="Default member role" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                            </UFormField>
                          </div>
                        </div>
                        <div class="mt-6 flex justify-end gap-2">
                          <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Discard" type="button" @click="openAction(&quot;Discard&quot;)">
                            Discard
                          </UButton>
                          <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Save changes" type="submit" disabled>
                            Save changes
                          </UButton>
                        </div>
                      </UForm>
                    </section>
                    <div />
                  </div>
                </template>
                <template v-if="item.value === '6'">
                  <div data-orientation="horizontal" id="radix-_R_ddbsnpfknmlb_-content-general" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 min-w-0" style="animation-duration:0s">
                    <section class="flex max-w-3xl flex-col gap-6">
                      <div>
                        <h2 class="text-lg font-semibold text-highlighted">Organization profile</h2>
                        <p class="text-muted mt-1 text-sm">Defaults shared by every project in this organization.</p>
                      </div>
                      <div class="flex items-center gap-4 rounded-lg border p-4 border-default">
                        <span class="bg-muted grid size-12 place-items-center rounded-lg">
                          <UIcon name="i-lucide-building-2" class="size-5" />
                        </span>
                        <div>
                          <p class="text-sm font-medium">Shadcnblocks Studio</p>
                          <code class="text-muted text-xs">org_studio_0192</code>
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted ml-auto border-default">Team workspace</div>
                      </div>
                      <!-- Form: controls and draft state are declared in this page -->
                      <UForm :state="form" @submit="saveForm">
                        <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                          <UFormField label="Organization name" name="organizationName" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto" required>
                            <UInput v-model="form.organizationName" type="text" name="organizationName" class="flex h-9 w-full rounded-md text-base md:text-sm" required :ui="{ base: 'h-full' }" />
                          </UFormField>
                          <UFormField label="Contact email" name="organizationContact" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto" required>
                            <UInput v-model="form.organizationContact" type="email" name="organizationContact" class="flex h-9 w-full rounded-md text-base md:text-sm" required :ui="{ base: 'h-full' }" />
                            <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Shown in demo organization communications.</p>
                          </UFormField>
                          <div class="grid gap-5 sm:grid-cols-2">
                            <UFormField label="Time zone" name="timeZone7" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.timeZone7" :items="timeZone7Options" aria-label="Organization time zone" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                            </UFormField>
                            <UFormField label="Default member role" name="defaultMemberRole7" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.defaultMemberRole7" :items="defaultMemberRole7Options" aria-label="Default member role" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                            </UFormField>
                          </div>
                        </div>
                        <div class="mt-6 flex justify-end gap-2">
                          <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Discard" type="button" @click="openAction(&quot;Discard&quot;)">
                            Discard
                          </UButton>
                          <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Save changes" type="submit" disabled>
                            Save changes
                          </UButton>
                        </div>
                      </UForm>
                    </section>
                    <div />
                  </div>
                </template>
                <template v-if="item.value === '7'">
                  <div data-orientation="horizontal" id="radix-_R_ddbsnpfknmlb_-content-general" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 min-w-0" style="animation-duration:0s">
                    <section class="flex max-w-3xl flex-col gap-6">
                      <div>
                        <h2 class="text-lg font-semibold text-highlighted">Organization profile</h2>
                        <p class="text-muted mt-1 text-sm">Defaults shared by every project in this organization.</p>
                      </div>
                      <div class="flex items-center gap-4 rounded-lg border p-4 border-default">
                        <span class="bg-muted grid size-12 place-items-center rounded-lg">
                          <UIcon name="i-lucide-building-2" class="size-5" />
                        </span>
                        <div>
                          <p class="text-sm font-medium">Shadcnblocks Studio</p>
                          <code class="text-muted text-xs">org_studio_0192</code>
                        </div>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted ml-auto border-default">Team workspace</div>
                      </div>
                      <!-- Form: controls and draft state are declared in this page -->
                      <UForm :state="form" @submit="saveForm">
                        <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                          <UFormField label="Organization name" name="organizationName" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto" required>
                            <UInput v-model="form.organizationName" type="text" name="organizationName" class="flex h-9 w-full rounded-md text-base md:text-sm" required :ui="{ base: 'h-full' }" />
                          </UFormField>
                          <UFormField label="Contact email" name="organizationContact" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto" required>
                            <UInput v-model="form.organizationContact" type="email" name="organizationContact" class="flex h-9 w-full rounded-md text-base md:text-sm" required :ui="{ base: 'h-full' }" />
                            <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Shown in demo organization communications.</p>
                          </UFormField>
                          <div class="grid gap-5 sm:grid-cols-2">
                            <UFormField label="Time zone" name="timeZone8" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.timeZone8" :items="timeZone8Options" aria-label="Organization time zone" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                            </UFormField>
                            <UFormField label="Default member role" name="defaultMemberRole8" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.defaultMemberRole8" :items="defaultMemberRole8Options" aria-label="Default member role" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                            </UFormField>
                          </div>
                        </div>
                        <div class="mt-6 flex justify-end gap-2">
                          <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Discard" type="button" @click="openAction(&quot;Discard&quot;)">
                            Discard
                          </UButton>
                          <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Save changes" type="submit" disabled>
                            Save changes
                          </UButton>
                        </div>
                      </UForm>
                    </section>
                    <div />
                  </div>
                </template>
              </template>
            </UTabs>
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
