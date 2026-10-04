<!-- Page: /todo/tasks/new | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Create Task · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "taskTitle": "",
  "description": "",
  "addALocation": ""
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/todo/tasks/new">
    <div class="contents">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex h-14 shrink-0 items-center gap-2 border-b px-4 sm:px-6 border-default">
          <div class="flex flex-1 items-center gap-2">
            <nav aria-label="breadcrumb">
              <ol class="text-muted flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5">
                <li class="inline-flex items-center gap-1.5">
                  <span role="link" class="text-highlighted font-normal line-clamp-1">Create Task</span>
                </li>
              </ol>
            </nav>
          </div>
          <div class="flex items-center gap-2 text-sm">
            <div class="group relative flex items-center">
              <div class="text-muted font-medium transition-transform duration-200 ease-out group-hover:-translate-x-16">Oct 3</div>
              <div class="text-muted absolute right-0 translate-x-2 scale-50 font-medium whitespace-nowrap opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100">12:57 PM</div>
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
            <div class="w-full space-y-6 transition-all duration-300">
              <div class="mx-auto w-full max-w-5xl">
                <div class="mb-6 flex items-center justify-between border-b pb-4 border-default">
                  <div class="flex items-center gap-4">
                    <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" to="/todo">
                      <UIcon name="i-lucide-arrow-left" class="size-4" />
                    </NuxtLink>
                    <div class="flex items-center gap-2">
                      <UIcon name="i-lucide-hash" class="text-muted size-4" />
                      <span class="text-sm font-medium">Personal Tasks 🏠</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" to="/todo">
                      Cancel
                    </NuxtLink>
                    <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Create task" type="button" disabled @click="openAction(&quot;Create task&quot;)">
                      Create task
                    </UButton>
                  </div>
                </div>
                <div class="grid grid-cols-1 gap-6 md:grid-cols-8">
                  <div class="md:col-span-5">
                    <div class="flex flex-col p-4 md:p-6">
                      <UInput v-model="form.taskTitle" type="text" placeholder="Task title" aria-label="Task title" name="taskTitle" class="flex h-9 w-full rounded-md text-base md:text-sm mb-4 text-xl! font-semibold" :ui="{ base: 'h-full' }" />
                      <UTextarea v-model="form.description" :rows="4" placeholder="Description" name="description" class="flex w-full rounded-md md:text-sm mb-4 min-h-32 resize-none text-sm" :ui="{ base: 'h-full' }" />
                      <div class="border-t pt-4 border-default">
                        <div class="mb-3 flex items-center gap-2">
                          <UIcon name="i-lucide-chevron-down" class="text-muted size-4" />
                          <h3 class="text-sm font-medium text-highlighted">Subtasks</h3>
                        </div>
                        <div>
                          <div class="pt-2">
                            <UButton color="neutral" variant="ghost" class="text-muted flex w-full items-center justify-start gap-2 text-sm transition-all" aria-label="Add Subtask" type="button" @click="openAction(&quot;Add Subtask&quot;)">
                              <UIcon name="i-lucide-plus" class="size-4" />
                              Add Subtask
                            </UButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-(--ui-bg-muted)/70 space-y-6 divide-y p-4 md:col-span-3 md:p-6">
                    <div>
                      <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-1.5 block">Project</label>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs w-full justify-between gap-2" aria-label="Personal Tasks 🏠" type="button" @click="navigateTo(&quot;/todo/projects/personal&quot;)">
                        <span class="flex items-center gap-2 truncate">
                          <UIcon name="i-lucide-hash" class="text-muted size-3.5 shrink-0" />
                          Personal Tasks 🏠
                        </span>
                        <UIcon name="i-lucide-chevron-down" class="size-3.5 shrink-0" />
                      </UButton>
                    </div>
                    <div>
                      <div class="mb-1.5 flex items-center justify-between">
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Date</label>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-4 p-0" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-plus" class="text-muted size-4" />
                        </UButton>
                      </div>
                    </div>
                    <div>
                      <div class="mb-1.5 flex items-center justify-between">
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Deadline</label>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-4 p-0" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-plus" class="text-muted size-4" />
                        </UButton>
                      </div>
                    </div>
                    <div>
                      <div class="mb-1.5 flex items-center justify-between">
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Priority</label>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-4 p-0" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-plus" class="text-muted size-4" />
                        </UButton>
                      </div>
                    </div>
                    <div class="py-1.5">
                      <div class="mb-1.5 flex items-center justify-between">
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Labels</label>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-4 p-0" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-plus" class="text-muted size-4" />
                        </UButton>
                      </div>
                    </div>
                    <div>
                      <div class="mb-1.5 flex items-center justify-between">
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Reminders</label>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-4 p-0" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                          <UIcon name="i-lucide-plus" class="text-muted size-4" />
                        </UButton>
                      </div>
                    </div>
                    <div>
                      <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-1.5 block">Location</label>
                      <div class="relative">
                        <UIcon name="i-lucide-map-pin" class="text-muted absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2" />
                        <UInput v-model="form.addALocation" type="text" placeholder="Add a location" name="addALocation" class="flex h-9 w-full rounded-md text-base md:text-sm pl-8" :ui="{ base: 'h-full' }" />
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
