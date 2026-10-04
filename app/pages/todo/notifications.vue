<!-- Page: /todo/notifications | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Notifications · Blocks Admin" })

const toast = useToast()

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "All",
    "value": "0"
  },
  {
    "label": "Unread (1)",
    "value": "1"
  }
]

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/todo/notifications">
    <div class="contents">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex h-14 shrink-0 items-center gap-2 border-b px-4 sm:px-6 border-default">
          <div class="flex flex-1 items-center gap-2">
            <nav aria-label="breadcrumb">
              <ol class="text-muted flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5">
                <li class="inline-flex items-center gap-1.5">
                  <span role="link" class="text-highlighted font-normal line-clamp-1">Notifications</span>
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
              <h1 class="text-2xl font-bold text-highlighted">Notifications</h1>
              <UTabs v-model="tabs1Active" :items="tabs1Items" color="primary" variant="link" data-orientation="horizontal" class="mt-4" data-slot="tabs" :ui="{ root: 'gap-4', list: 'justify-start', content: 'min-h-0' }">
                <template #content="{ item }">
                  <template v-if="item.value === '0'">
                    <div data-orientation="horizontal" id="radix-_R_inpfj5uknmlb_-content-all" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-4" style="animation-duration:0s">
                      <div role="list" data-slot="item-group" class="group/item-group flex flex-col">
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full my-0" data-slot="item-separator" />
                        <div data-slot="item" class="group/item flex text-sm rounded-md transition-colors [a]:hover:bg-(--ui-bg-elevated)/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-accented focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-[3px] border-default p-4 gap-4 items-start border-0 border-l-4 bg-muted border-l-red-500">
                          <div data-slot="item-media" class="flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&amp;_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5 bg-transparent">
                            <div class="mt-1 flex size-8 items-center justify-center rounded-full bg-error">
                              <UIcon name="i-lucide-zap" class="size-4 text-inverted" />
                            </div>
                          </div>
                          <div data-slot="item-content" class="flex flex-1 flex-col gap-1 [&amp;+[data-slot=item-content]]:flex-none">
                            <div class="flex items-start justify-between gap-4">
                              <div class="flex-1">
                                <p class="text-sm">
                                  <span class="font-medium">Karma unlocked!</span>
                                  You're now a Karma Novice. Get things done to earn points and climb the ranks.
                                </p>
                                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs my-1" aria-label="Explore Productivity" type="button" @click="openAction(&quot;Explore Productivity&quot;)">
                                  Explore Productivity
                                </UButton>
                                <div class="flex items-end justify-between">
                                  <p class="text-muted mt-1 text-xs">50 minutes ago</p>
                                  <UButton color="neutral" variant="ghost" class="text-error hover:text-(--ui-error)/80 shrink-0 transition-colors" title="Mark as read" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                                    <div class="border-(--ui-error) bg-(--ui-error) flex size-2 animate-pulse items-center justify-center rounded-full border border-default" />
                                  </UButton>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full my-0" data-slot="item-separator" />
                        <div data-slot="item" class="group/item flex text-sm rounded-md transition-colors [a]:hover:bg-(--ui-bg-elevated)/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-accented focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-[3px] border-default p-4 gap-4 items-start border-0 border-l-4 border-l-transparent">
                          <div data-slot="item-media" class="flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&amp;_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5 bg-transparent">
                            <div class="mt-1 flex size-8 items-center justify-center rounded-full bg-success">
                              <UIcon name="i-lucide-circle-check-big" class="size-4 text-inverted" />
                            </div>
                          </div>
                          <div data-slot="item-content" class="flex flex-1 flex-col gap-1 [&amp;+[data-slot=item-content]]:flex-none">
                            <div class="flex items-start justify-between gap-4">
                              <div class="flex-1">
                                <p class="text-sm">
                                  <span class="font-medium">Task completed!</span>
                                  You completed &quot;Design new landing page&quot; in Project Alpha.
                                </p>
                                <div class="flex items-end justify-between">
                                  <p class="text-muted mt-1 text-xs">2 hours ago</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full my-0" data-slot="item-separator" />
                        <div data-slot="item" class="group/item flex text-sm rounded-md transition-colors [a]:hover:bg-(--ui-bg-elevated)/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-accented focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-[3px] border-default p-4 gap-4 items-start border-0 border-l-4 border-l-transparent">
                          <div data-slot="item-media" class="flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&amp;_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5 bg-transparent">
                            <div class="mt-1 flex size-8 items-center justify-center rounded-full bg-info">
                              <UIcon name="i-lucide-users" class="size-4 text-inverted" />
                            </div>
                          </div>
                          <div data-slot="item-content" class="flex flex-1 flex-col gap-1 [&amp;+[data-slot=item-content]]:flex-none">
                            <div class="flex items-start justify-between gap-4">
                              <div class="flex-1">
                                <p class="text-sm">
                                  <span class="font-medium">New collaborator</span>
                                  John Doe has been added to your workspace.
                                </p>
                                <div class="flex items-end justify-between">
                                  <p class="text-muted mt-1 text-xs">5 hours ago</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full my-0" data-slot="item-separator" />
                        <div data-slot="item" class="group/item flex text-sm rounded-md transition-colors [a]:hover:bg-(--ui-bg-elevated)/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-accented focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-[3px] border-default p-4 gap-4 items-start border-0 border-l-4 border-l-transparent">
                          <div data-slot="item-media" class="flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&amp;_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5 bg-transparent">
                            <div class="mt-1 flex size-8 items-center justify-center rounded-full bg-secondary">
                              <UIcon name="i-lucide-trending-up" class="size-4 text-inverted" />
                            </div>
                          </div>
                          <div data-slot="item-content" class="flex flex-1 flex-col gap-1 [&amp;+[data-slot=item-content]]:flex-none">
                            <div class="flex items-start justify-between gap-4">
                              <div class="flex-1">
                                <p class="text-sm">
                                  <span class="font-medium">Weekly summary</span>
                                  You completed 12 tasks this week. Great work!
                                </p>
                                <div class="flex items-end justify-between">
                                  <p class="text-muted mt-1 text-xs">1 day ago</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                  <template v-if="item.value === '1'">
                    <div data-orientation="horizontal" id="radix-_R_inpfj5uknmlb_-content-all" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-4" style="animation-duration:0s">
                      <div role="list" data-slot="item-group" class="group/item-group flex flex-col">
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full my-0" data-slot="item-separator" />
                        <div data-slot="item" class="group/item flex text-sm rounded-md transition-colors [a]:hover:bg-(--ui-bg-elevated)/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-accented focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-[3px] border-default p-4 gap-4 items-start border-0 border-l-4 bg-muted border-l-red-500">
                          <div data-slot="item-media" class="flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&amp;_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5 bg-transparent">
                            <div class="mt-1 flex size-8 items-center justify-center rounded-full bg-error">
                              <UIcon name="i-lucide-zap" class="size-4 text-inverted" />
                            </div>
                          </div>
                          <div data-slot="item-content" class="flex flex-1 flex-col gap-1 [&amp;+[data-slot=item-content]]:flex-none">
                            <div class="flex items-start justify-between gap-4">
                              <div class="flex-1">
                                <p class="text-sm">
                                  <span class="font-medium">Karma unlocked!</span>
                                  You're now a Karma Novice. Get things done to earn points and climb the ranks.
                                </p>
                                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs my-1" aria-label="Explore Productivity" type="button" @click="openAction(&quot;Explore Productivity&quot;)">
                                  Explore Productivity
                                </UButton>
                                <div class="flex items-end justify-between">
                                  <p class="text-muted mt-1 text-xs">50 minutes ago</p>
                                  <UButton color="neutral" variant="ghost" class="text-error hover:text-(--ui-error)/80 shrink-0 transition-colors" title="Mark as read" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                                    <div class="border-(--ui-error) bg-(--ui-error) flex size-2 animate-pulse items-center justify-center rounded-full border border-default" />
                                  </UButton>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full my-0" data-slot="item-separator" />
                        <div data-slot="item" class="group/item flex text-sm rounded-md transition-colors [a]:hover:bg-(--ui-bg-elevated)/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-accented focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-[3px] border-default p-4 gap-4 items-start border-0 border-l-4 border-l-transparent">
                          <div data-slot="item-media" class="flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&amp;_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5 bg-transparent">
                            <div class="mt-1 flex size-8 items-center justify-center rounded-full bg-success">
                              <UIcon name="i-lucide-circle-check-big" class="size-4 text-inverted" />
                            </div>
                          </div>
                          <div data-slot="item-content" class="flex flex-1 flex-col gap-1 [&amp;+[data-slot=item-content]]:flex-none">
                            <div class="flex items-start justify-between gap-4">
                              <div class="flex-1">
                                <p class="text-sm">
                                  <span class="font-medium">Task completed!</span>
                                  You completed &quot;Design new landing page&quot; in Project Alpha.
                                </p>
                                <div class="flex items-end justify-between">
                                  <p class="text-muted mt-1 text-xs">2 hours ago</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full my-0" data-slot="item-separator" />
                        <div data-slot="item" class="group/item flex text-sm rounded-md transition-colors [a]:hover:bg-(--ui-bg-elevated)/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-accented focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-[3px] border-default p-4 gap-4 items-start border-0 border-l-4 border-l-transparent">
                          <div data-slot="item-media" class="flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&amp;_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5 bg-transparent">
                            <div class="mt-1 flex size-8 items-center justify-center rounded-full bg-info">
                              <UIcon name="i-lucide-users" class="size-4 text-inverted" />
                            </div>
                          </div>
                          <div data-slot="item-content" class="flex flex-1 flex-col gap-1 [&amp;+[data-slot=item-content]]:flex-none">
                            <div class="flex items-start justify-between gap-4">
                              <div class="flex-1">
                                <p class="text-sm">
                                  <span class="font-medium">New collaborator</span>
                                  John Doe has been added to your workspace.
                                </p>
                                <div class="flex items-end justify-between">
                                  <p class="text-muted mt-1 text-xs">5 hours ago</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full my-0" data-slot="item-separator" />
                        <div data-slot="item" class="group/item flex text-sm rounded-md transition-colors [a]:hover:bg-(--ui-bg-elevated)/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-accented focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-[3px] border-default p-4 gap-4 items-start border-0 border-l-4 border-l-transparent">
                          <div data-slot="item-media" class="flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&amp;_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5 bg-transparent">
                            <div class="mt-1 flex size-8 items-center justify-center rounded-full bg-secondary">
                              <UIcon name="i-lucide-trending-up" class="size-4 text-inverted" />
                            </div>
                          </div>
                          <div data-slot="item-content" class="flex flex-1 flex-col gap-1 [&amp;+[data-slot=item-content]]:flex-none">
                            <div class="flex items-start justify-between gap-4">
                              <div class="flex-1">
                                <p class="text-sm">
                                  <span class="font-medium">Weekly summary</span>
                                  You completed 12 tasks this week. Great work!
                                </p>
                                <div class="flex items-end justify-between">
                                  <p class="text-muted mt-1 text-xs">1 day ago</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </template>
              </UTabs>
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
