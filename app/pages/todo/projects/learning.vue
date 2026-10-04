<!-- Page: /todo/projects/learning | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Learning Goals 📚 · Blocks Admin" })

const toast = useToast()

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/todo/projects/learning">
    <div class="contents">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex h-14 shrink-0 items-center gap-2 border-b px-4 sm:px-6 border-default">
          <div class="flex flex-1 items-center gap-2">
            <nav aria-label="breadcrumb">
              <ol class="text-muted flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5">
                <li class="inline-flex items-center gap-1.5">
                  <span role="link" class="text-highlighted font-normal line-clamp-1">Learning Goals 📚</span>
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
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <h2 class="text-lg font-semibold text-highlighted">Active Tasks (1)</h2>
                </div>
                <div class="space-y-3">
                  <div class="flex flex-wrap items-center gap-2">
                    <div class="flex items-center gap-1 rounded-md border p-1 border-default">
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-elevated text-default shadow-xs hover:bg-(--ui-bg-elevated)/80 rounded-md text-xs h-8 px-3" aria-label="List" type="button" @click="openAction(&quot;List&quot;)">
                        <UIcon name="i-lucide-list" class="h-4 w-4" />
                        <span class="hidden sm:inline">List</span>
                      </UButton>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md text-xs h-8 px-3" aria-label="Kanban" type="button" @click="openAction(&quot;Kanban&quot;)">
                        <UIcon name="i-lucide-layout-grid" class="h-4 w-4" />
                        <span class="hidden sm:inline">Kanban</span>
                      </UButton>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md text-xs h-8 px-3" aria-label="Calendar" type="button" @click="openAction(&quot;Calendar&quot;)">
                        <UIcon name="i-lucide-calendar" class="h-4 w-4" />
                        <span class="hidden sm:inline">Calendar</span>
                      </UButton>
                    </div>
                    <div data-orientation="vertical" role="none" class="bg-(--ui-border) shrink-0 w-[1px] h-8" />
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-8" aria-label="Filter" type="button" @click="openAction(&quot;Filter&quot;)">
                      <UIcon name="i-lucide-funnel" class="h-4 w-4" />
                      Filter
                    </UButton>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md px-3 text-xs h-8" aria-label="SortM" type="button" @click="openAction(&quot;SortM&quot;)">
                      <UIcon name="i-lucide-arrow-up-narrow-wide" class="h-4 w-4" />
                      Sort
                      <div class="inline-flex items-center rounded-md border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 px-1.5 py-0 border-default">M</div>
                    </UButton>
                    <div class="text-muted ml-auto text-sm">1task</div>
                  </div>
                </div>
                <div class="space-y-6">
                  <div>
                    <div class="[&amp;&gt;*:last-child_[data-slot=item]]:border-b-0">
                      <div style="opacity: 1;">
                        <div style="transform: none; transform-origin: 50% 50% 0px; opacity: 1;">
                          <div data-slot="item" class="group/item flex text-sm transition-colors [a]:hover:bg-(--ui-bg-elevated)/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-accented focus-visible:ring-(--ui-border-accented)/50 focus-visible:ring-[3px] bg-transparent p-4 gap-4 group border-default cursor-pointer items-start rounded-none border-0 border-b py-2">
                            <div data-slot="item-media" class="flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&amp;_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5 bg-transparent">
                              <div class="flex items-center gap-0.5">
                                <div class="relative flex items-center">
                                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6 absolute -translate-x-1 scale-50 opacity-0 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 -left-8" aria-label="Drag to reorder" type="button" @click="openAction(&quot;Drag to reorder&quot;)">
                                    <UIcon name="i-lucide-grip-vertical" class="text-muted size-4" />
                                  </UButton>
                                </div>
                                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6 shrink-0 rounded-full transition-all duration-200 -ml-1" aria-label="Mark &quot;Read React documentation&quot; as complete" type="button" @click="openAction(&quot;Mark \&quot;Read React documentation\&quot; as complete&quot;)">
                                  <div class="relative">
                                    <div class="" style="opacity: 1; transform: none;">
                                      <UIcon name="i-lucide-circle" class="size-5 text-priority-4" />
                                    </div>
                                  </div>
                                </UButton>
                              </div>
                            </div>
                            <div data-slot="item-content" class="flex flex-1 flex-col gap-1 [&amp;+[data-slot=item-content]]:flex-none min-w-0">
                              <div class="min-w-0 flex-1">
                                <div class="flex items-center gap-1.5">
                                  <div data-slot="item-title" class="flex w-fit items-center gap-2 text-sm leading-snug font-medium flex-1">
                                    <span class="relative inline-block">
                                      Read React documentation
                                      <span class="bg-(--ui-text-muted) absolute top-1/2 left-0 h-[1.5px] -translate-y-1/2" style="width: 0px; opacity: 0;" />
                                    </span>
                                  </div>
                                  <div class="flex shrink-0 items-center gap-1">
                                    <div class="">
                                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6 -mr-2 transition-all duration-200 ease-out -translate-x-2 scale-50 opacity-0 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100" aria-label="More actions" type="button" @click="openAction(&quot;More actions&quot;)">
                                        <UIcon name="i-lucide-ellipsis-vertical" class="size-4" />
                                      </UButton>
                                    </div>
                                  </div>
                                </div>
                                <div class="text-(--ui-text-muted)/60 mt-0.5 flex items-center gap-1 text-xs">
                                  <span>Learning Goals 📚</span>
                                  <span>·</span>
                                  <span>#react</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="DndDescribedBy-2" style="display: none;">
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  </div>
                    <div id="DndLiveRegion-2" role="status" style="position: fixed; top: 0px; left: 0px; width: 1px; height: 1px; margin: -1px; border: 0px; padding: 0px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(100%); white-space: nowrap;" />
                    <div style="opacity: 1;">
                      <UButton color="neutral" variant="soft" class="inline-flex items-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-10 rounded-md px-8 w-full justify-start gap-2" aria-label="Add New Task" type="button" @click="openAction(&quot;Add New Task&quot;)">
                        <UIcon name="i-lucide-plus" class="h-4 w-4" />
                        Add New Task
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
