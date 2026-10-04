<!-- Page: /ai-chat/mobile-screen-workspace | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Mobile screen workspace · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "message": "",
  "askAnything": ""
})

const tabs1Active = ref("1")

const tabs1Items = [
  {
    "label": "Preview",
    "value": "0"
  },
  {
    "label": "Source",
    "value": "1"
  },
  {
    "label": "Changes",
    "value": "2"
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

const messages = ref<{ id: string, role: 'user' | 'assistant', text: string }[]>([])
function sendMessage(field: keyof typeof form) {
  const message = String(form[field]).trim()
  if (!message) return
  messages.value.push({ id: 'user-' + messages.value.length, role: 'user', text: message })
  messages.value.push({ id: 'assistant-' + messages.value.length, role: 'assistant', text: 'Your message has been added to this demo conversation. Connect sendMessage to your AI API for real responses.' })
  Object.assign(form, { [field]: '' })
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/mobile-screen-workspace">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="flex min-h-0 flex-1 flex-col overflow-y-auto lg:grid lg:grid-cols-[clamp(220px,calc(50%_-_280px),640px)_minmax(0,1fr)] lg:overflow-hidden">
        <aside aria-label="Review conversation" class="bg-(--ui-bg-muted)/20 flex min-h-0 shrink-0 flex-col border-b lg:border-r lg:border-b-0 border-default">
          <div class="flex h-10 shrink-0 items-center gap-2 border-b px-4 text-xs font-medium border-default">
            <UIcon name="i-lucide-message-square" class="size-4" />
            Conversation
          </div>
          <div class="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto p-4 max-lg:max-h-64">
            <div class="flex flex-col gap-5">
              <div class="bg-default rounded-xl border p-4 text-sm leading-relaxed border-default">Review the mobile chat flow. Keep messages readable and the composer within reach.</div>
              <p class="text-muted text-sm leading-relaxed">Try a starter prompt, send a message, or open the conversation menu in the preview.</p>
            </div>
          </div>
          <div class="shrink-0 p-3">
            <!-- Form: controls and draft state are declared in this page -->
            <UForm :state="form" @submit="saveForm" class="relative mx-auto w-full max-w-2xl" aria-label="Add a review note">
              <!-- Chat composer: form.message -->
              <div v-if="messages.length" class="my-4 space-y-4">
                <UChatMessage v-for="message in messages" :key="message.id" :id="message.id" :role="message.role" :parts="[{ type: 'text', text: message.text }]" :side="message.role === 'user' ? 'right' : 'left'" :variant="message.role === 'user' ? 'soft' : 'naked'" />
              </div>
              <UChatPrompt v-model="form.message" :autofocus="false" color="primary" :rows="3" placeholder="Add a review note…" data-slot="input-group" class="group/input-group relative flex w-full min-w-0 border outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 h-auto flex-col items-stretch transition-[border-color,box-shadow] duration-200 bg-default border-default has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/30 gap-0 rounded-2xl shadow-sm has-[[data-slot=input-group-control]:focus-visible]:ring-3" @submit="sendMessage(&quot;message&quot;)" :ui="{ base: 'px-4 py-3 text-sm', footer: 'p-0 w-full' }">
                <template #footer>
                  <div role="group" data-slot="input-group-addon" class="h-auto py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last justify-start group-has-[&gt;input]/input-group:pb-2 [.border-t]:pt-2 grid w-full cursor-default grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 pt-0 pb-3">
                    <span class="text-muted flex-1 text-[11px]">Saved in this browser</span>
                    <UButton color="primary" variant="solid" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 flex items-center gap-2 text-sm shadow-none size-8 p-0 has-[&gt;svg]:p-0 rounded-full" aria-label="Send message" type="button" :disabled="!form.message.trim()" @click="sendMessage(&quot;message&quot;)">
                      <UIcon name="i-lucide-arrow-up" class="size-4" />
                      <span class="sr-only">Send message</span>
                    </UButton>
                  </div>
                </template>
              </UChatPrompt>
            </UForm>
          </div>
        </aside>
        <section aria-label="Review artifact" class="bg-default flex min-h-[740px] min-w-0 shrink-0 flex-col lg:min-h-0">
          <div data-orientation="horizontal" class="mobile-screen-workspace-module__5VZfrq__artifact">
            <header class="flex h-10 shrink-0 items-center justify-between gap-2 border-b px-3 border-default">
              <UTabs v-model="tabs1Active" :items="tabs1Items" :content="false" color="primary" variant="link" class="bg-muted text-muted inline-flex items-center justify-center rounded-lg h-7 p-0.5" aria-label="Workspace view" data-orientation="horizontal" style="outline:none" />
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Show preview" type="button" @click="openAction(&quot;Show preview&quot;)">
                Show preview
              </UButton>
            </header>
            <div data-orientation="horizontal" id="radix-_R_5dbsnpfknmlb_-content-code" class="ring-offset-background focus-visible:ring-accented mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mobile-screen-workspace-module__5VZfrq__panels" style="animation-duration:0s">
              <section aria-label="Screen source" class="mobile-screen-workspace-module__5VZfrq__source">
                <div class="flex h-8 shrink-0 items-center border-b px-4 border-default">
                  <span class="truncate font-mono text-xs">ai-mobile-preview-screen.tsx</span>
                </div>
                <div class="min-h-0 min-w-0 flex-1 overflow-hidden">
                  <diffs-container class="block h-full min-w-full" />
                </div>
              </section>
              <section aria-label="Mobile mock preview" class="mobile-screen-workspace-module__5VZfrq__preview">
                <div class="flex h-8 shrink-0 items-center border-b px-4 text-xs font-medium border-default">Mobile chat</div>
                <div class="mobile-screen-workspace-module__5VZfrq__stage">
                  <div class="mobile-screen-workspace-module__5VZfrq__phone" aria-label="Interactive mobile chat preview">
                    <div class="mobile-screen-workspace-module__5VZfrq__screen">
                      <div class="bg-default size-full overflow-hidden">
                        <div class="mobile-screen-workspace-module__5VZfrq__device" style="transform: scale(0.727684); visibility: visible;">
                          <div class="bg-default text-highlighted relative flex h-full w-full flex-col overflow-hidden">
                            <header class="flex h-14 shrink-0 items-center gap-3 border-b px-4 border-default">
                              <UButton color="neutral" variant="soft" class="hover:bg-muted flex size-9 items-center justify-center rounded-xl" aria-label="Open conversations" type="button" @click="openAction(&quot;Open conversations&quot;)">
                                <UIcon name="i-lucide-menu" class="size-5" />
                              </UButton>
                              <div class="bg-primary text-inverted flex size-8 items-center justify-center rounded-xl">
                                <UIcon name="i-lucide-list-checks" class="size-4" />
                              </div>
                              <div class="min-w-0 flex-1">
                                <p class="truncate text-[13px] font-semibold text-highlighted">Release handoff</p>
                                <p class="text-muted text-[11px]">AI workspace</p>
                              </div>
                              <UButton color="neutral" variant="soft" class="hover:bg-muted flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-medium" aria-label="Focus" type="button" @click="openAction(&quot;Focus&quot;)">
                                Focus
                                <UIcon name="i-lucide-chevron-down" class="size-3" />
                              </UButton>
                            </header>
                            <div class="min-h-0 flex-1 overflow-y-auto px-4 py-5">
                              <p class="text-muted mb-5 text-center text-[11px]">Today</p>
                              <div class="space-y-5">
                                <div class="flex justify-start">
                                  <div class="bg-muted max-w-[86%] rounded-2xl rounded-bl-md px-3.5 py-2.5 text-[13px] leading-[1.45]">I reviewed the launch notes. Want a short handoff plan for the team?</div>
                                </div>
                                <div class="flex justify-end">
                                  <div class="bg-primary text-inverted max-w-[82%] rounded-2xl rounded-br-md px-3.5 py-2.5 text-[13px] leading-[1.45]">Yes. Keep it to three clear steps.</div>
                                </div>
                                <div class="flex justify-start">
                                  <div class="bg-muted max-w-[86%] rounded-2xl rounded-bl-md px-3.5 py-2.5 text-[13px] leading-[1.45]">Start with the release checklist, name an owner for each open item, then share a final status update before launch.</div>
                                </div>
                                <div class="ml-1 max-w-[86%] rounded-2xl border p-3 border-default">
                                  <p class="text-[11px] font-semibold text-highlighted">Release checklist</p>
                                  <div class="mt-2 space-y-2">
                                    <div class="flex items-center gap-2 text-[11px]">
                                      <span class="bg-muted text-muted flex size-5 shrink-0 items-center justify-center rounded-full text-[10px]">1</span>
                                      Confirm owners
                                    </div>
                                    <div class="flex items-center gap-2 text-[11px]">
                                      <span class="bg-muted text-muted flex size-5 shrink-0 items-center justify-center rounded-full text-[10px]">2</span>
                                      Review open checks
                                    </div>
                                    <div class="flex items-center gap-2 text-[11px]">
                                      <span class="bg-muted text-muted flex size-5 shrink-0 items-center justify-center rounded-full text-[10px]">3</span>
                                      Post launch update
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="shrink-0 px-4 pb-2">
                              <div class="mb-3 flex gap-2 overflow-x-auto whitespace-nowrap">
                                <UButton color="neutral" variant="outline" class="hover:bg-muted rounded-full border px-3 py-1.5 text-[11px] border-default" aria-label="Draft team update" type="button" @click="openAction(&quot;Draft team update&quot;)">
                                  Draft team update
                                </UButton>
                                <UButton color="neutral" variant="outline" class="hover:bg-muted rounded-full border px-3 py-1.5 text-[11px] border-default" aria-label="Find open risks" type="button" @click="openAction(&quot;Find open risks&quot;)">
                                  Find open risks
                                </UButton>
                              </div>
                              <!-- Form: controls and draft state are declared in this page -->
                              <UForm :state="form" @submit="saveForm" class="rounded-2xl border p-2.5 shadow-sm border-default">
                                <UTextarea v-model="form.askAnything" :rows="4" aria-label="Message" placeholder="Ask anything…" name="askAnything" class="w-full resize-none text-[13px] outline-none" :ui="{ base: 'h-full' }" />
                                <div class="flex justify-end">
                                  <UButton color="primary" variant="solid" class="bg-primary text-inverted flex size-7 items-center justify-center rounded-full disabled:opacity-40" aria-label="Send message" type="submit" disabled>
                                    <UIcon name="i-lucide-arrow-up" class="size-4" />
                                  </UButton>
                                </div>
                              </UForm>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
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
