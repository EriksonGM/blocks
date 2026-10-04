<!-- Page: /developers/webhooks/44ecb04e-9f49-4b2d-9626-01e6dc54eb6e | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "44ecb04e-9f49-4b2d-9626-01e6dc54eb6e · Blocks Admin" })

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/developers/webhooks/44ecb04e-9f49-4b2d-9626-01e6dc54eb6e">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex min-h-0 flex-1 flex-col">
          <header class="bg-default hidden shrink-0 border-b px-4 py-4 sm:px-6 md:block border-default">
            <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-6">
              <div class="flex min-w-0 flex-wrap items-center gap-3 text-sm">
                <span class="text-highlighted font-medium">Shadcnblocks Admin Kit</span>
                <span class="text-muted">/</span>
                <span class="text-highlighted font-medium">Developers</span>
                <span class="text-muted">/</span>
                <span class="text-muted">Details</span>
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
          <div class="min-h-0 flex-1 overflow-auto has-[&gt;[data-layout=fixed]]:flex has-[&gt;[data-layout=fixed]]:overflow-hidden">
            <template />
            <main aria-label="Loading webhook" class="bg-default flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-auto">
              <div class="border-b px-4 py-4 sm:px-6 border-default">
                <div class="flex items-start justify-between gap-4">
                  <div class="space-y-2">
                    <div class="bg-primary/10 animate-pulse rounded-md h-6 w-48 max-w-full" />
                    <div class="bg-primary/10 animate-pulse rounded-md h-3 w-72 max-w-full" />
                  </div>
                  <div class="bg-primary/10 animate-pulse h-9 w-28 shrink-0 rounded-md" />
                </div>
                <div class="mt-6 flex gap-5">
                  <div class="bg-primary/10 animate-pulse rounded-md h-4 w-20" />
                  <div class="bg-primary/10 animate-pulse rounded-md h-4 w-16" />
                  <div class="bg-primary/10 animate-pulse rounded-md h-4 w-14" />
                </div>
              </div>
              <div class="grid gap-5 p-4 sm:p-6 lg:grid-cols-[minmax(0,2fr)_minmax(240px,1fr)]">
                <div class="space-y-5">
                  <div class="rounded-lg border p-5 border-default">
                    <div class="bg-primary/10 animate-pulse rounded-md h-5 w-40" />
                    <div class="mt-5">
                      <div class="grid gap-5 sm:grid-cols-2">
                        <div class="space-y-2">
                          <div class="bg-primary/10 animate-pulse rounded-md h-3 w-24" />
                          <div class="bg-primary/10 animate-pulse h-10 rounded-md w-full" />
                        </div>
                        <div class="space-y-2">
                          <div class="bg-primary/10 animate-pulse rounded-md h-3 w-24" />
                          <div class="bg-primary/10 animate-pulse h-10 rounded-md w-full" />
                        </div>
                        <div class="space-y-2">
                          <div class="bg-primary/10 animate-pulse rounded-md h-3 w-24" />
                          <div class="bg-primary/10 animate-pulse h-10 rounded-md w-full" />
                        </div>
                        <div class="space-y-2">
                          <div class="bg-primary/10 animate-pulse rounded-md h-3 w-24" />
                          <div class="bg-primary/10 animate-pulse h-10 rounded-md w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="min-w-0 overflow-hidden border-t border-default">
                    <div class="bg-(--ui-bg-muted)/30 grid h-11 items-center gap-3 px-4 sm:px-6" style="grid-template-columns:repeat(4, minmax(0, 1fr))">
                      <div class="bg-primary/10 animate-pulse rounded-md h-3 w-3/5" />
                      <div class="bg-primary/10 animate-pulse rounded-md h-3 w-3/5" />
                      <div class="bg-primary/10 animate-pulse rounded-md h-3 w-3/5" />
                      <div class="bg-primary/10 animate-pulse rounded-md h-3 w-3/5" />
                    </div>
                    <div class="grid h-14 items-center gap-3 border-t px-4 sm:px-6 border-default" style="grid-template-columns:repeat(4, minmax(0, 1fr))">
                      <div class="bg-primary/10 animate-pulse rounded-md h-4 w-4/5" />
                      <div class="bg-primary/10 animate-pulse rounded-md h-3 w-3/5" />
                      <div class="bg-primary/10 animate-pulse rounded-md h-3 w-3/5" />
                      <div class="bg-primary/10 animate-pulse rounded-md h-3 w-3/5" />
                    </div>
                    <div class="grid h-14 items-center gap-3 border-t px-4 sm:px-6 border-default" style="grid-template-columns:repeat(4, minmax(0, 1fr))">
                      <div class="bg-primary/10 animate-pulse rounded-md h-4 w-4/5" />
                      <div class="bg-primary/10 animate-pulse rounded-md h-3 w-3/5" />
                      <div class="bg-primary/10 animate-pulse rounded-md h-3 w-3/5" />
                      <div class="bg-primary/10 animate-pulse rounded-md h-3 w-3/5" />
                    </div>
                    <div class="grid h-14 items-center gap-3 border-t px-4 sm:px-6 border-default" style="grid-template-columns:repeat(4, minmax(0, 1fr))">
                      <div class="bg-primary/10 animate-pulse rounded-md h-4 w-4/5" />
                      <div class="bg-primary/10 animate-pulse rounded-md h-3 w-3/5" />
                      <div class="bg-primary/10 animate-pulse rounded-md h-3 w-3/5" />
                      <div class="bg-primary/10 animate-pulse rounded-md h-3 w-3/5" />
                    </div>
                    <div class="grid h-14 items-center gap-3 border-t px-4 sm:px-6 border-default" style="grid-template-columns:repeat(4, minmax(0, 1fr))">
                      <div class="bg-primary/10 animate-pulse rounded-md h-4 w-4/5" />
                      <div class="bg-primary/10 animate-pulse rounded-md h-3 w-3/5" />
                      <div class="bg-primary/10 animate-pulse rounded-md h-3 w-3/5" />
                      <div class="bg-primary/10 animate-pulse rounded-md h-3 w-3/5" />
                    </div>
                    <div class="grid h-14 items-center gap-3 border-t px-4 sm:px-6 border-default" style="grid-template-columns:repeat(4, minmax(0, 1fr))">
                      <div class="bg-primary/10 animate-pulse rounded-md h-4 w-4/5" />
                      <div class="bg-primary/10 animate-pulse rounded-md h-3 w-3/5" />
                      <div class="bg-primary/10 animate-pulse rounded-md h-3 w-3/5" />
                      <div class="bg-primary/10 animate-pulse rounded-md h-3 w-3/5" />
                    </div>
                  </div>
                </div>
                <div class="space-y-4 rounded-lg border p-5 border-default">
                  <div class="bg-primary/10 animate-pulse rounded-md h-5 w-28" />
                  <div class="grid gap-5 sm:grid-cols-2">
                    <div class="space-y-2">
                      <div class="bg-primary/10 animate-pulse rounded-md h-3 w-24" />
                      <div class="bg-primary/10 animate-pulse h-10 rounded-md w-full" />
                    </div>
                    <div class="space-y-2">
                      <div class="bg-primary/10 animate-pulse rounded-md h-3 w-24" />
                      <div class="bg-primary/10 animate-pulse h-10 rounded-md w-full" />
                    </div>
                    <div class="space-y-2">
                      <div class="bg-primary/10 animate-pulse rounded-md h-3 w-24" />
                      <div class="bg-primary/10 animate-pulse h-10 rounded-md w-full" />
                    </div>
                    <div class="space-y-2">
                      <div class="bg-primary/10 animate-pulse rounded-md h-3 w-24" />
                      <div class="bg-primary/10 animate-pulse h-10 rounded-md w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </main>
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
