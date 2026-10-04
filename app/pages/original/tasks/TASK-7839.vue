<!-- Page: /original/tasks/TASK-7839 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "We need to bypass the neural TCP card! · Blocks Admin" })

const toast = useToast()

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "Description",
    "value": "0"
  },
  {
    "label": "Comments",
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/original/tasks/TASK-7839">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex min-h-0 flex-1 flex-col">
          <header class="bg-default hidden shrink-0 border-b px-4 py-4 sm:px-6 md:block border-default">
            <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-6">
              <div class="flex min-w-0 flex-wrap items-center gap-3 text-sm">
                <span class="text-highlighted font-medium">Shadcnblocks Admin Kit</span>
                <span class="text-muted">/</span>
                <span class="text-highlighted font-medium">Tasks</span>
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
            <main id="main-content" class="flex min-h-min flex-1 flex-col p-4 sm:p-6">
              <div class="max-w-3xl">
                <nav aria-label="breadcrumb" class="mb-4">
                  <ol class="text-muted flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5">
                    <li class="inline-flex items-center gap-1.5">
                      <NuxtLink class="hover:text-highlighted transition-colors" to="/">
                        Home
                      </NuxtLink>
                    </li>
                    <li class="inline-flex items-center gap-1.5">
                      <NuxtLink class="hover:text-highlighted transition-colors" to="/original/tasks">
                        Tasks
                      </NuxtLink>
                    </li>
                    <li class="inline-flex items-center gap-1.5">
                      <span role="link" class="text-highlighted font-normal">TASK-7839</span>
                    </li>
                  </ol>
                </nav>
              </div>
              <div class="max-w-3xl">
                <div class="mb-6">
                  <h1 class="text-2xl font-semibold text-highlighted">We need to bypass the neural TCP card!</h1>
                </div>
                <!-- Card 1: High -->
                <UCard class="mb-6 grid grid-cols-1 gap-x-8 gap-y-4 rounded-lg p-6 text-sm md:grid-cols-2" :ui="{ body: 'contents' }">
                  <div class="space-y-4">
                    <div class="flex items-center gap-2">
                      <span class="text-muted w-24">Priority</span>
                      <div class="flex items-center gap-1">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-arrow-up h-3.5 w-3.5 text-error">
                          <path d="M12 5l0 14" />
                          <path d="M18 11l-6 -6" />
                          <path d="M6 11l6 -6" />
                        </svg>
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm text-xs bg-error/10 text-error hover:bg-error/10 hover:text-error border-default">High</div>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="text-muted w-24">Assignees</span>
                      <div>
                        <div class="flex -space-x-2">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) h-5 w-5 border-2">
                            <img class="aspect-square h-full w-full" alt="Michael Kane" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                          </span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) h-5 w-5 border-2">
                            <img class="aspect-square h-full w-full" alt="Olivier Giroud" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                          </span>
                          <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) h-5 w-5 border-2">
                            <img class="aspect-square h-full w-full" alt="Isabella Chen" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="text-muted w-24">Due Date</span>
                      <div class="flex items-center gap-1">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-calendar text-muted h-3.5 w-3.5">
                          <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" />
                          <path d="M16 3v4" />
                          <path d="M8 3v4" />
                          <path d="M4 11h16" />
                          <path d="M11 15h1" />
                          <path d="M12 15v3" />
                        </svg>
                        <span>Dec 13, 2026</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="text-muted w-24">Created</span>
                      <div class="flex items-center gap-1">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-calendar text-muted h-3.5 w-3.5">
                          <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" />
                          <path d="M16 3v4" />
                          <path d="M8 3v4" />
                          <path d="M4 11h16" />
                          <path d="M11 15h1" />
                          <path d="M12 15v3" />
                        </svg>
                        <span>Sep 13, 2026</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="text-muted w-24">Project</span>
                      <span>Shopify</span>
                    </div>
                  </div>
                  <div class="space-y-4">
                    <div class="flex items-center gap-2">
                      <span class="text-muted w-24">Status</span>
                      <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted text-xs capitalize border-default">Todo</div>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="text-muted w-24">Sprint</span>
                      <span>Sprint 23 (April 2024)</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="text-muted w-24">Est. Time</span>
                      <div class="flex items-center gap-1">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-clock-hour-4 text-muted h-3.5 w-3.5">
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                          <path d="M12 12l3 2" />
                          <path d="M12 7v5" />
                        </svg>
                        <span>1 week</span>
                      </div>
                    </div>
                    <div class="flex gap-2">
                      <span class="text-muted w-24">Linked Items</span>
                      <div class="space-y-1">
                        <div class="flex items-center gap-1">
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-git-branch text-muted h-3.5 w-3.5">
                            <path d="M5 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M5 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M15 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M7 8l0 8" />
                            <path d="M9 18h6a2 2 0 0 0 2 -2v-5" />
                            <path d="M14 14l3 -3l3 3" />
                          </svg>
                          <span class="text-xs">PR#1234: Implement new workflow UI</span>
                        </div>
                        <div class="flex items-center gap-1">
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-git-branch text-muted h-3.5 w-3.5">
                            <path d="M5 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M5 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M15 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M7 8l0 8" />
                            <path d="M9 18h6a2 2 0 0 0 2 -2v-5" />
                            <path d="M14 14l3 -3l3 3" />
                          </svg>
                          <span class="text-xs">Issue#5678: Database schema updates</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </UCard>
                <UTabs v-model="tabs1Active" :items="tabs1Items" color="primary" variant="link" data-orientation="horizontal" class="w-full" data-slot="tabs" :ui="{ root: 'gap-4', list: 'justify-start', content: 'min-h-0' }">
                  <template #content="{ item }">
                    <template v-if="item.value === '0'">
                      <div data-orientation="horizontal" id="radix-_R_75fiv5uiv5uknmlb_-content-description" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-4" style="animation-duration:0s">
                        <div class="prose prose-sm text-muted max-w-none">
                          <p>Currently, when a Member reports a physical card as lost, stolen, or damaged, they are automatically issued with a new card. This process needs to be redesigned to improve security and user experience.</p>
                          <h3 class="text-highlighted mt-4 mb-2 font-semibold text-highlighted">Technical Requirements</h3>
                          <p>The new workflow should implement the following security measures:</p>
                          <ul class="mb-4 list-disc pl-4">
                            <li>Two-factor authentication for card replacement requests</li>
                            <li>Automated fraud detection system integration</li>
                            <li>Real-time notification system for both users and administrators</li>
                            <li>Audit trail for all card replacement requests</li>
                          </ul>
                          <h3 class="text-highlighted mt-4 mb-2 font-semibold text-highlighted">Database Changes</h3>
                          <p>New tables and modifications required:</p>
                          <ul class="mb-4 list-disc pl-4">
                            <li>card_replacement_requests</li>
                            <li>audit_logs</li>
                            <li>notification_preferences</li>
                          </ul>
                          <h3 class="text-highlighted mt-4 mb-2 font-semibold text-highlighted">API Endpoints</h3>
                          <p>New REST endpoints to be implemented:</p>
                          <ul class="mb-4 list-disc pl-4">
                            <li>POST /api/v1/cards/replacement-requests</li>
                            <li>GET /api/v1/cards/replacement-status</li>
                            <li>PUT /api/v1/cards/replacement-verification</li>
                          </ul>
                        </div>
                      </div>
                    </template>
                    <template v-if="item.value === '1'">
                      <div data-orientation="horizontal" id="radix-_R_75fiv5uiv5uknmlb_-content-description" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-4" style="animation-duration:0s">
                        <div class="prose prose-sm text-muted max-w-none">
                          <p>Currently, when a Member reports a physical card as lost, stolen, or damaged, they are automatically issued with a new card. This process needs to be redesigned to improve security and user experience.</p>
                          <h3 class="text-highlighted mt-4 mb-2 font-semibold text-highlighted">Technical Requirements</h3>
                          <p>The new workflow should implement the following security measures:</p>
                          <ul class="mb-4 list-disc pl-4">
                            <li>Two-factor authentication for card replacement requests</li>
                            <li>Automated fraud detection system integration</li>
                            <li>Real-time notification system for both users and administrators</li>
                            <li>Audit trail for all card replacement requests</li>
                          </ul>
                          <h3 class="text-highlighted mt-4 mb-2 font-semibold text-highlighted">Database Changes</h3>
                          <p>New tables and modifications required:</p>
                          <ul class="mb-4 list-disc pl-4">
                            <li>card_replacement_requests</li>
                            <li>audit_logs</li>
                            <li>notification_preferences</li>
                          </ul>
                          <h3 class="text-highlighted mt-4 mb-2 font-semibold text-highlighted">API Endpoints</h3>
                          <p>New REST endpoints to be implemented:</p>
                          <ul class="mb-4 list-disc pl-4">
                            <li>POST /api/v1/cards/replacement-requests</li>
                            <li>GET /api/v1/cards/replacement-status</li>
                            <li>PUT /api/v1/cards/replacement-verification</li>
                          </ul>
                        </div>
                      </div>
                    </template>
                  </template>
                </UTabs>
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
