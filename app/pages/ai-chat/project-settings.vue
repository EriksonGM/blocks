<!-- Page: /ai-chat/project-settings | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Project settings · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "projectName": "Support copilot",
  "projectDescription": "Production support triage, knowledge retrieval, and customer-facing assistance.",
  "dataRegion": "US East",
  "logRetention": "30 days",
  "projectEnabled": true,
  "dataRegion2": "US East",
  "logRetention2": "30 days",
  "dataRegion3": "US East",
  "logRetention3": "30 days",
  "dataRegion4": "US East",
  "logRetention4": "30 days",
  "dataRegion5": "US East",
  "logRetention5": "30 days"
})

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "General",
    "value": "0"
  },
  {
    "label": "Model limits",
    "value": "1"
  },
  {
    "label": "Members",
    "value": "2"
  },
  {
    "label": "Groups",
    "value": "3"
  },
  {
    "label": "Roles",
    "value": "4"
  }
]

const dataRegionOptions = [
  "US East",
  "EU West"
]

const logRetentionOptions = [
  "7 days",
  "30 days",
  "90 days"
]

const dataRegion2Options = [
  "US East",
  "EU West"
]

const logRetention2Options = [
  "7 days",
  "30 days",
  "90 days"
]

const dataRegion3Options = [
  "US East",
  "EU West"
]

const logRetention3Options = [
  "7 days",
  "30 days",
  "90 days"
]

const dataRegion4Options = [
  "US East",
  "EU West"
]

const logRetention4Options = [
  "7 days",
  "30 days",
  "90 days"
]

const dataRegion5Options = [
  "US East",
  "EU West"
]

const logRetention5Options = [
  "7 days",
  "30 days",
  "90 days"
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

async function copyValue(value: string) {
  await navigator.clipboard.writeText(value)
  toast.add({ title: 'Copied to clipboard', color: 'success' })
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/project-settings">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="min-h-0 flex-1 overflow-y-auto">
        <div class="mx-auto flex flex-col px-4 sm:px-8 gap-6 py-6 sm:py-8 max-w-7xl">
          <div class="flex flex-wrap gap-4 items-start justify-between">
            <div class="flex flex-col gap-1">
              <h1 class="text-2xl font-semibold tracking-tight text-highlighted">Project settings</h1>
              <p class="text-muted max-w-2xl text-sm">Support copilot · Configure resources and access for this project.</p>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" to="/ai-chat/organization-settings">
                Organization
                <UIcon name="i-lucide-arrow-up-right" class="size-4" />
              </NuxtLink>
            </div>
          </div>
          <div data-orientation="horizontal" class="min-w-0">
            <UTabs v-model="tabs1Active" :items="tabs1Items" color="primary" variant="link" class="grid min-w-0 items-start gap-6 lg:grid-cols-[176px_minmax(0,1fr)] lg:gap-8" data-slot="tabs" :ui="{ root: 'gap-4', list: 'justify-start', content: 'min-h-0' }">
              <template #content="{ item }">
                <template v-if="item.value === '0'">
                  <div data-orientation="horizontal" id="radix-_R_5dbsnpfknmlb_-content-general" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 min-w-0" style="animation-duration:0s">
                    <section class="flex max-w-3xl flex-col gap-6">
                      <div>
                        <h2 class="text-lg font-semibold text-highlighted">General</h2>
                        <p class="text-muted mt-1 text-sm">The identity and operating defaults for this project.</p>
                      </div>
                      <div class="flex flex-wrap items-center justify-between gap-2 rounded-lg border px-4 py-3 border-default">
                        <div>
                          <p class="text-muted text-xs">Project ID</p>
                          <code class="mt-1 block text-xs">proj_support_8f21</code>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Copy project ID" type="button" @click="copyValue(&quot;Copy project ID&quot;)">
                          <UIcon name="i-lucide-copy" class="size-4" />
                        </UButton>
                      </div>
                      <!-- Form: controls and draft state are declared in this page -->
                      <UForm :state="form" @submit="saveForm">
                        <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                          <UFormField label="Project name" name="projectName" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto" required>
                            <UInput v-model="form.projectName" type="text" name="projectName" class="flex h-9 w-full rounded-md text-base md:text-sm" required :ui="{ base: 'h-full' }" />
                          </UFormField>
                          <UFormField label="Description" name="projectDescription" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                            <UTextarea v-model="form.projectDescription" :rows="4" name="projectDescription" class="flex min-h-[60px] w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                          </UFormField>
                          <div class="grid gap-5 sm:grid-cols-2">
                            <UFormField label="Data region" name="dataRegion" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.dataRegion" :items="dataRegionOptions" aria-label="Data region" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                              <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Applies to future requests in this demo.</p>
                            </UFormField>
                            <UFormField label="Log retention" name="logRetention" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.logRetention" :items="logRetentionOptions" aria-label="Log retention" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                            </UFormField>
                          </div>
                          <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                          <div role="group" data-slot="field" data-orientation="horizontal" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-row items-center has-[&gt;[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[&gt;[data-slot=field-content]]:[&amp;&gt;[role=checkbox],[role=radio]]:mt-px">
                            <div class="flex-1">
                              <label class="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col" data-slot="field-label" for="project-enabled">Accept new requests</label>
                              <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Pause new work without removing files or member access.</p>
                            </div>
                            <USwitch v-model="form.projectEnabled" aria-label="Toggle setting" />
                          </div>
                        </div>
                        <div class="mt-6 flex items-center justify-between gap-3">
                          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted border-default">Active</div>
                          <div class="flex gap-2">
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Discard" type="button" disabled @click="openAction(&quot;Discard&quot;)">
                              Discard
                            </UButton>
                            <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Save changes" type="submit" disabled>
                              <UIcon name="i-lucide-save" class="size-4" />
                              Save changes
                            </UButton>
                          </div>
                        </div>
                      </UForm>
                      <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                      <div class="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <h3 class="text-sm font-medium text-highlighted">Project integrations</h3>
                          <p class="text-muted mt-1 text-xs">Manage endpoints and evaluation providers in their workspaces.</p>
                        </div>
                        <div class="flex gap-2">
                          <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" to="/ai-chat/api-requests">
                            API requests
                          </NuxtLink>
                          <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" to="/ai-chat/evaluations">
                            Evaluations
                          </NuxtLink>
                        </div>
                      </div>
                    </section>
                    <div />
                  </div>
                </template>
                <template v-if="item.value === '1'">
                  <div data-orientation="horizontal" id="radix-_R_5dbsnpfknmlb_-content-general" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 min-w-0" style="animation-duration:0s">
                    <section class="flex max-w-3xl flex-col gap-6">
                      <div>
                        <h2 class="text-lg font-semibold text-highlighted">General</h2>
                        <p class="text-muted mt-1 text-sm">The identity and operating defaults for this project.</p>
                      </div>
                      <div class="flex flex-wrap items-center justify-between gap-2 rounded-lg border px-4 py-3 border-default">
                        <div>
                          <p class="text-muted text-xs">Project ID</p>
                          <code class="mt-1 block text-xs">proj_support_8f21</code>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Copy project ID" type="button" @click="copyValue(&quot;Copy project ID&quot;)">
                          <UIcon name="i-lucide-copy" class="size-4" />
                        </UButton>
                      </div>
                      <!-- Form: controls and draft state are declared in this page -->
                      <UForm :state="form" @submit="saveForm">
                        <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                          <UFormField label="Project name" name="projectName" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto" required>
                            <UInput v-model="form.projectName" type="text" name="projectName" class="flex h-9 w-full rounded-md text-base md:text-sm" required :ui="{ base: 'h-full' }" />
                          </UFormField>
                          <UFormField label="Description" name="projectDescription" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                            <UTextarea v-model="form.projectDescription" :rows="4" name="projectDescription" class="flex min-h-[60px] w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                          </UFormField>
                          <div class="grid gap-5 sm:grid-cols-2">
                            <UFormField label="Data region" name="dataRegion2" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.dataRegion2" :items="dataRegion2Options" aria-label="Data region" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                              <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Applies to future requests in this demo.</p>
                            </UFormField>
                            <UFormField label="Log retention" name="logRetention2" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.logRetention2" :items="logRetention2Options" aria-label="Log retention" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                            </UFormField>
                          </div>
                          <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                          <div role="group" data-slot="field" data-orientation="horizontal" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-row items-center has-[&gt;[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[&gt;[data-slot=field-content]]:[&amp;&gt;[role=checkbox],[role=radio]]:mt-px">
                            <div class="flex-1">
                              <label class="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col" data-slot="field-label" for="project-enabled">Accept new requests</label>
                              <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Pause new work without removing files or member access.</p>
                            </div>
                            <USwitch v-model="form.projectEnabled" aria-label="Toggle setting" />
                          </div>
                        </div>
                        <div class="mt-6 flex items-center justify-between gap-3">
                          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted border-default">Active</div>
                          <div class="flex gap-2">
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Discard" type="button" disabled @click="openAction(&quot;Discard&quot;)">
                              Discard
                            </UButton>
                            <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Save changes" type="submit" disabled>
                              <UIcon name="i-lucide-save" class="size-4" />
                              Save changes
                            </UButton>
                          </div>
                        </div>
                      </UForm>
                      <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                      <div class="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <h3 class="text-sm font-medium text-highlighted">Project integrations</h3>
                          <p class="text-muted mt-1 text-xs">Manage endpoints and evaluation providers in their workspaces.</p>
                        </div>
                        <div class="flex gap-2">
                          <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" to="/ai-chat/api-requests">
                            API requests
                          </NuxtLink>
                          <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" to="/ai-chat/evaluations">
                            Evaluations
                          </NuxtLink>
                        </div>
                      </div>
                    </section>
                    <div />
                  </div>
                </template>
                <template v-if="item.value === '2'">
                  <div data-orientation="horizontal" id="radix-_R_5dbsnpfknmlb_-content-general" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 min-w-0" style="animation-duration:0s">
                    <section class="flex max-w-3xl flex-col gap-6">
                      <div>
                        <h2 class="text-lg font-semibold text-highlighted">General</h2>
                        <p class="text-muted mt-1 text-sm">The identity and operating defaults for this project.</p>
                      </div>
                      <div class="flex flex-wrap items-center justify-between gap-2 rounded-lg border px-4 py-3 border-default">
                        <div>
                          <p class="text-muted text-xs">Project ID</p>
                          <code class="mt-1 block text-xs">proj_support_8f21</code>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Copy project ID" type="button" @click="copyValue(&quot;Copy project ID&quot;)">
                          <UIcon name="i-lucide-copy" class="size-4" />
                        </UButton>
                      </div>
                      <!-- Form: controls and draft state are declared in this page -->
                      <UForm :state="form" @submit="saveForm">
                        <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                          <UFormField label="Project name" name="projectName" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto" required>
                            <UInput v-model="form.projectName" type="text" name="projectName" class="flex h-9 w-full rounded-md text-base md:text-sm" required :ui="{ base: 'h-full' }" />
                          </UFormField>
                          <UFormField label="Description" name="projectDescription" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                            <UTextarea v-model="form.projectDescription" :rows="4" name="projectDescription" class="flex min-h-[60px] w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                          </UFormField>
                          <div class="grid gap-5 sm:grid-cols-2">
                            <UFormField label="Data region" name="dataRegion3" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.dataRegion3" :items="dataRegion3Options" aria-label="Data region" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                              <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Applies to future requests in this demo.</p>
                            </UFormField>
                            <UFormField label="Log retention" name="logRetention3" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.logRetention3" :items="logRetention3Options" aria-label="Log retention" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                            </UFormField>
                          </div>
                          <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                          <div role="group" data-slot="field" data-orientation="horizontal" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-row items-center has-[&gt;[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[&gt;[data-slot=field-content]]:[&amp;&gt;[role=checkbox],[role=radio]]:mt-px">
                            <div class="flex-1">
                              <label class="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col" data-slot="field-label" for="project-enabled">Accept new requests</label>
                              <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Pause new work without removing files or member access.</p>
                            </div>
                            <USwitch v-model="form.projectEnabled" aria-label="Toggle setting" />
                          </div>
                        </div>
                        <div class="mt-6 flex items-center justify-between gap-3">
                          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted border-default">Active</div>
                          <div class="flex gap-2">
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Discard" type="button" disabled @click="openAction(&quot;Discard&quot;)">
                              Discard
                            </UButton>
                            <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Save changes" type="submit" disabled>
                              <UIcon name="i-lucide-save" class="size-4" />
                              Save changes
                            </UButton>
                          </div>
                        </div>
                      </UForm>
                      <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                      <div class="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <h3 class="text-sm font-medium text-highlighted">Project integrations</h3>
                          <p class="text-muted mt-1 text-xs">Manage endpoints and evaluation providers in their workspaces.</p>
                        </div>
                        <div class="flex gap-2">
                          <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" to="/ai-chat/api-requests">
                            API requests
                          </NuxtLink>
                          <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" to="/ai-chat/evaluations">
                            Evaluations
                          </NuxtLink>
                        </div>
                      </div>
                    </section>
                    <div />
                  </div>
                </template>
                <template v-if="item.value === '3'">
                  <div data-orientation="horizontal" id="radix-_R_5dbsnpfknmlb_-content-general" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 min-w-0" style="animation-duration:0s">
                    <section class="flex max-w-3xl flex-col gap-6">
                      <div>
                        <h2 class="text-lg font-semibold text-highlighted">General</h2>
                        <p class="text-muted mt-1 text-sm">The identity and operating defaults for this project.</p>
                      </div>
                      <div class="flex flex-wrap items-center justify-between gap-2 rounded-lg border px-4 py-3 border-default">
                        <div>
                          <p class="text-muted text-xs">Project ID</p>
                          <code class="mt-1 block text-xs">proj_support_8f21</code>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Copy project ID" type="button" @click="copyValue(&quot;Copy project ID&quot;)">
                          <UIcon name="i-lucide-copy" class="size-4" />
                        </UButton>
                      </div>
                      <!-- Form: controls and draft state are declared in this page -->
                      <UForm :state="form" @submit="saveForm">
                        <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                          <UFormField label="Project name" name="projectName" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto" required>
                            <UInput v-model="form.projectName" type="text" name="projectName" class="flex h-9 w-full rounded-md text-base md:text-sm" required :ui="{ base: 'h-full' }" />
                          </UFormField>
                          <UFormField label="Description" name="projectDescription" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                            <UTextarea v-model="form.projectDescription" :rows="4" name="projectDescription" class="flex min-h-[60px] w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                          </UFormField>
                          <div class="grid gap-5 sm:grid-cols-2">
                            <UFormField label="Data region" name="dataRegion4" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.dataRegion4" :items="dataRegion4Options" aria-label="Data region" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                              <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Applies to future requests in this demo.</p>
                            </UFormField>
                            <UFormField label="Log retention" name="logRetention4" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.logRetention4" :items="logRetention4Options" aria-label="Log retention" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                            </UFormField>
                          </div>
                          <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                          <div role="group" data-slot="field" data-orientation="horizontal" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-row items-center has-[&gt;[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[&gt;[data-slot=field-content]]:[&amp;&gt;[role=checkbox],[role=radio]]:mt-px">
                            <div class="flex-1">
                              <label class="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col" data-slot="field-label" for="project-enabled">Accept new requests</label>
                              <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Pause new work without removing files or member access.</p>
                            </div>
                            <USwitch v-model="form.projectEnabled" aria-label="Toggle setting" />
                          </div>
                        </div>
                        <div class="mt-6 flex items-center justify-between gap-3">
                          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted border-default">Active</div>
                          <div class="flex gap-2">
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Discard" type="button" disabled @click="openAction(&quot;Discard&quot;)">
                              Discard
                            </UButton>
                            <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Save changes" type="submit" disabled>
                              <UIcon name="i-lucide-save" class="size-4" />
                              Save changes
                            </UButton>
                          </div>
                        </div>
                      </UForm>
                      <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                      <div class="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <h3 class="text-sm font-medium text-highlighted">Project integrations</h3>
                          <p class="text-muted mt-1 text-xs">Manage endpoints and evaluation providers in their workspaces.</p>
                        </div>
                        <div class="flex gap-2">
                          <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" to="/ai-chat/api-requests">
                            API requests
                          </NuxtLink>
                          <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" to="/ai-chat/evaluations">
                            Evaluations
                          </NuxtLink>
                        </div>
                      </div>
                    </section>
                    <div />
                  </div>
                </template>
                <template v-if="item.value === '4'">
                  <div data-orientation="horizontal" id="radix-_R_5dbsnpfknmlb_-content-general" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 min-w-0" style="animation-duration:0s">
                    <section class="flex max-w-3xl flex-col gap-6">
                      <div>
                        <h2 class="text-lg font-semibold text-highlighted">General</h2>
                        <p class="text-muted mt-1 text-sm">The identity and operating defaults for this project.</p>
                      </div>
                      <div class="flex flex-wrap items-center justify-between gap-2 rounded-lg border px-4 py-3 border-default">
                        <div>
                          <p class="text-muted text-xs">Project ID</p>
                          <code class="mt-1 block text-xs">proj_support_8f21</code>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Copy project ID" type="button" @click="copyValue(&quot;Copy project ID&quot;)">
                          <UIcon name="i-lucide-copy" class="size-4" />
                        </UButton>
                      </div>
                      <!-- Form: controls and draft state are declared in this page -->
                      <UForm :state="form" @submit="saveForm">
                        <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                          <UFormField label="Project name" name="projectName" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto" required>
                            <UInput v-model="form.projectName" type="text" name="projectName" class="flex h-9 w-full rounded-md text-base md:text-sm" required :ui="{ base: 'h-full' }" />
                          </UFormField>
                          <UFormField label="Description" name="projectDescription" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                            <UTextarea v-model="form.projectDescription" :rows="4" name="projectDescription" class="flex min-h-[60px] w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                          </UFormField>
                          <div class="grid gap-5 sm:grid-cols-2">
                            <UFormField label="Data region" name="dataRegion5" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.dataRegion5" :items="dataRegion5Options" aria-label="Data region" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                              <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Applies to future requests in this demo.</p>
                            </UFormField>
                            <UFormField label="Log retention" name="logRetention5" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <USelect v-model="form.logRetention5" :items="logRetention5Options" aria-label="Log retention" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                            </UFormField>
                          </div>
                          <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                          <div role="group" data-slot="field" data-orientation="horizontal" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-row items-center has-[&gt;[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[&gt;[data-slot=field-content]]:[&amp;&gt;[role=checkbox],[role=radio]]:mt-px">
                            <div class="flex-1">
                              <label class="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col" data-slot="field-label" for="project-enabled">Accept new requests</label>
                              <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Pause new work without removing files or member access.</p>
                            </div>
                            <USwitch v-model="form.projectEnabled" aria-label="Toggle setting" />
                          </div>
                        </div>
                        <div class="mt-6 flex items-center justify-between gap-3">
                          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted border-default">Active</div>
                          <div class="flex gap-2">
                            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Discard" type="button" disabled @click="openAction(&quot;Discard&quot;)">
                              Discard
                            </UButton>
                            <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Save changes" type="submit" disabled>
                              <UIcon name="i-lucide-save" class="size-4" />
                              Save changes
                            </UButton>
                          </div>
                        </div>
                      </UForm>
                      <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                      <div class="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <h3 class="text-sm font-medium text-highlighted">Project integrations</h3>
                          <p class="text-muted mt-1 text-xs">Manage endpoints and evaluation providers in their workspaces.</p>
                        </div>
                        <div class="flex gap-2">
                          <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" to="/ai-chat/api-requests">
                            API requests
                          </NuxtLink>
                          <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" to="/ai-chat/evaluations">
                            Evaluations
                          </NuxtLink>
                        </div>
                      </div>
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
