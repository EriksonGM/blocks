<!-- Page: /todo/activity | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Activity · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "allProjects": "All Projects"
})

const allProjectsOptions = [
  "All Projects",
  "Personal Tasks 🏠",
  "Work Projects 💼",
  "Shopping List 🛒",
  "Health & Fitness 💪",
  "Learning Goals 📚"
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/todo/activity">
    <div class="contents">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex h-14 shrink-0 items-center gap-2 border-b px-4 sm:px-6 border-default">
          <div class="flex flex-1 items-center gap-2">
            <nav aria-label="breadcrumb">
              <ol class="text-muted flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5">
                <li class="inline-flex items-center gap-1.5">
                  <span role="link" class="text-highlighted font-normal line-clamp-1">Activity</span>
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
              <div class="flex items-center gap-2">
                <h1 class="text-2xl font-bold text-highlighted">Activity:</h1>
                <USelect v-model="form.allProjects" :items="allProjectsOptions" aria-label="All Projects" class="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default h-9 px-4 py-2 gap-2 text-2xl font-bold hover:bg-transparent" />
              </div>
              <div class="space-y-6">
                <div class="">
                  <div class="text-muted bg-default sticky top-0 border-b pb-2 text-sm font-medium border-default">Wednesday, October 23, 2024</div>
                  <div role="list" data-slot="item-group" class="group/item-group flex flex-col space-y-2">
                    <div data-slot="item" class="group/item flex items-center text-sm rounded-md transition-colors [a]:hover:bg-(--ui-bg-elevated)/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-accented focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-[3px] border-default p-4 gap-4 border-0 px-0">
                      <div data-slot="item-media" class="flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&amp;_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5 bg-transparent">
                        <span class="relative flex shrink-0 overflow-hidden rounded-full size-10">
                          <img class="aspect-square h-full w-full" alt="Profile" src="/reference/6c33e643eac5dd42.png" loading="lazy" />
                        </span>
                      </div>
                      <div data-slot="item-content" class="flex flex-1 flex-col gap-1 [&amp;+[data-slot=item-content]]:flex-none">
                        <div class="flex items-end justify-between">
                          <div class="">
                            <p class="text-sm">
                              <span class="font-medium">You</span>
                              completed a task:
                              <UButton color="neutral" variant="ghost" class="decoration-muted-foreground hover:text-highlighted cursor-pointer font-medium underline underline-offset-4" aria-label="Morning workout routine" type="button" @click="openAction(&quot;Morning workout routine&quot;)">
                                Morning workout routine
                              </UButton>
                              <UIcon name="i-lucide-circle-check" class="text-success inline h-4 w-4" />
                            </p>
                            <p class="text-muted mt-1 text-xs">12:00 AM</p>
                          </div>
                          <div class="text-muted text-xs">Health &amp; Fitness 💪</div>
                        </div>
                      </div>
                    </div>
                    <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full my-0" data-slot="item-separator" />
                    <div data-slot="item" class="group/item flex items-center text-sm rounded-md transition-colors [a]:hover:bg-(--ui-bg-elevated)/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-accented focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-[3px] border-default p-4 gap-4 border-0 px-0">
                      <div data-slot="item-media" class="flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&amp;_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5 bg-transparent">
                        <span class="relative flex shrink-0 overflow-hidden rounded-full size-10">
                          <img class="aspect-square h-full w-full" alt="Profile" src="/reference/6c33e643eac5dd42.png" loading="lazy" />
                        </span>
                      </div>
                      <div data-slot="item-content" class="flex flex-1 flex-col gap-1 [&amp;+[data-slot=item-content]]:flex-none">
                        <div class="flex items-end justify-between">
                          <div class="">
                            <p class="text-sm">
                              <span class="font-medium">You</span>
                              completed a task:
                              <UButton color="neutral" variant="ghost" class="decoration-muted-foreground hover:text-highlighted cursor-pointer font-medium underline underline-offset-4" aria-label="Review pull request #234" type="button" @click="openAction(&quot;Review pull request #234&quot;)">
                                Review pull request #234
                              </UButton>
                              <UIcon name="i-lucide-circle-check" class="text-success inline h-4 w-4" />
                            </p>
                            <p class="text-muted mt-1 text-xs">12:00 AM</p>
                          </div>
                          <div class="text-muted text-xs">Work Projects 💼</div>
                        </div>
                      </div>
                    </div>
                    <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full my-0" data-slot="item-separator" />
                    <div data-slot="item" class="group/item flex items-center text-sm rounded-md transition-colors [a]:hover:bg-(--ui-bg-elevated)/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-accented focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-[3px] border-default p-4 gap-4 border-0 px-0">
                      <div data-slot="item-media" class="flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&amp;_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5 bg-transparent">
                        <span class="relative flex shrink-0 overflow-hidden rounded-full size-10">
                          <img class="aspect-square h-full w-full" alt="Profile" src="/reference/6c33e643eac5dd42.png" loading="lazy" />
                        </span>
                      </div>
                      <div data-slot="item-content" class="flex flex-1 flex-col gap-1 [&amp;+[data-slot=item-content]]:flex-none">
                        <div class="flex items-end justify-between">
                          <div class="">
                            <p class="text-sm">
                              <span class="font-medium">You</span>
                              completed a task:
                              <UButton color="neutral" variant="ghost" class="decoration-muted-foreground hover:text-highlighted cursor-pointer font-medium underline underline-offset-4" aria-label="Update project documentation" type="button" @click="openAction(&quot;Update project documentation&quot;)">
                                Update project documentation
                              </UButton>
                              <UIcon name="i-lucide-circle-check" class="text-success inline h-4 w-4" />
                            </p>
                            <p class="text-muted mt-1 text-xs">12:00 AM</p>
                          </div>
                          <div class="text-muted text-xs">Work Projects 💼</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="">
                  <div class="text-muted bg-default sticky top-0 border-b pb-2 text-sm font-medium border-default">Tuesday, October 22, 2024</div>
                  <div role="list" data-slot="item-group" class="group/item-group flex flex-col space-y-2">
                    <div data-slot="item" class="group/item flex items-center text-sm rounded-md transition-colors [a]:hover:bg-(--ui-bg-elevated)/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-accented focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-[3px] border-default p-4 gap-4 border-0 px-0">
                      <div data-slot="item-media" class="flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&amp;_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5 bg-transparent">
                        <span class="relative flex shrink-0 overflow-hidden rounded-full size-10">
                          <img class="aspect-square h-full w-full" alt="Profile" src="/reference/6c33e643eac5dd42.png" loading="lazy" />
                        </span>
                      </div>
                      <div data-slot="item-content" class="flex flex-1 flex-col gap-1 [&amp;+[data-slot=item-content]]:flex-none">
                        <div class="flex items-end justify-between">
                          <div class="">
                            <p class="text-sm">
                              <span class="font-medium">You</span>
                              completed a task:
                              <UButton color="neutral" variant="ghost" class="decoration-muted-foreground hover:text-highlighted cursor-pointer font-medium underline underline-offset-4" aria-label="Fix responsive design issues" type="button" @click="openAction(&quot;Fix responsive design issues&quot;)">
                                Fix responsive design issues
                              </UButton>
                              <UIcon name="i-lucide-circle-check" class="text-success inline h-4 w-4" />
                            </p>
                            <p class="text-muted mt-1 text-xs">12:00 AM</p>
                          </div>
                          <div class="text-muted text-xs">Work Projects 💼</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-muted border-t pt-4 text-center text-sm border-default">That's it. No more history to load.</div>
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
