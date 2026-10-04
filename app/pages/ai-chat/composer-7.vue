<!-- Page: /ai-chat/composer-7 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Composer 7 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "message": "/"
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/composer-7">
    <div class="flex min-h-0 flex-1 flex-col">
      <div class="min-h-0 flex-1 overflow-y-auto px-4 py-8 sm:px-6 md:py-10">
        <div class="mx-auto flex min-h-full w-full max-w-2xl items-center justify-center py-8">
          <div class="-mt-10 flex flex-col items-center text-center sm:-mt-16">
            <span class="bg-(--ui-bg-muted)/70 flex size-10 items-center justify-center rounded-xl border shadow-sm border-default">
              <img alt="Shadcnblocks" width="14" height="16" class="shrink-0 object-contain dark:hidden" style="color:transparent" src="/reference/4eb49a7be0892386.svg" loading="lazy" />
            </span>
            <h1 class="mt-4 text-base font-medium tracking-[-0.015em] text-highlighted">Start a focused task</h1>
            <p class="text-muted mt-1 max-w-sm text-[13px] leading-5">Describe the outcome below, or start with a shortcut.</p>
            <div class="mt-5 flex flex-wrap justify-center gap-2">
              <UButton color="neutral" variant="outline" class="bg-default hover:bg-(--ui-bg-muted)/60 active:bg-muted flex h-9 items-center gap-2 rounded-lg border px-2.5 text-xs font-medium shadow-xs transition-[background-color,transform] active:scale-[0.98] border-default" aria-label="/Run a command" type="button" @click="openAction(&quot;/Run a command&quot;)">
                <UKbd data-slot="kbd" class="text-muted pointer-events-none inline-flex min-w-5 items-center justify-center gap-1 rounded-sm font-sans text-xs font-medium select-none [&amp;_svg:not([class*='size-'])]:size-3 [[data-slot=tooltip-content]_&amp;]:bg-(--ui-bg)/20 [[data-slot=tooltip-content]_&amp;]:text-(--ui-bg) dark:[[data-slot=tooltip-content]_&amp;]:bg-(--ui-bg)/10 bg-(--ui-bg-muted)/70 size-5 border-0 px-0">/</UKbd>
                Run a command
              </UButton>
              <UButton color="neutral" variant="outline" class="bg-default hover:bg-(--ui-bg-muted)/60 active:bg-muted flex h-9 items-center gap-2 rounded-lg border px-2.5 text-xs font-medium shadow-xs transition-[background-color,transform] active:scale-[0.98] border-default" aria-label="@Attach context" type="button" @click="openAction(&quot;@Attach context&quot;)">
                <UKbd data-slot="kbd" class="text-muted pointer-events-none inline-flex min-w-5 items-center justify-center gap-1 rounded-sm font-sans text-xs font-medium select-none [&amp;_svg:not([class*='size-'])]:size-3 [[data-slot=tooltip-content]_&amp;]:bg-(--ui-bg)/20 [[data-slot=tooltip-content]_&amp;]:text-(--ui-bg) dark:[[data-slot=tooltip-content]_&amp;]:bg-(--ui-bg)/10 bg-(--ui-bg-muted)/70 size-5 border-0 px-0">@</UKbd>
                Attach context
              </UButton>
              <UButton color="neutral" variant="outline" class="bg-default hover:bg-(--ui-bg-muted)/60 active:bg-muted flex h-9 items-center gap-2 rounded-lg border px-2.5 text-xs font-medium shadow-xs transition-[background-color,transform] active:scale-[0.98] border-default" aria-label="!Open shell mode" type="button" @click="openAction(&quot;!Open shell mode&quot;)">
                <UKbd data-slot="kbd" class="text-muted pointer-events-none inline-flex min-w-5 items-center justify-center gap-1 rounded-sm font-sans text-xs font-medium select-none [&amp;_svg:not([class*='size-'])]:size-3 [[data-slot=tooltip-content]_&amp;]:bg-(--ui-bg)/20 [[data-slot=tooltip-content]_&amp;]:text-(--ui-bg) dark:[[data-slot=tooltip-content]_&amp;]:bg-(--ui-bg)/10 bg-(--ui-bg-muted)/70 size-5 border-0 px-0">!</UKbd>
                Open shell mode
              </UButton>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-default shrink-0 px-3 pb-3 sm:px-5">
        <div class="mx-auto w-full max-w-2xl">
          <div class="relative w-full text-left">
            <div class="bg-default text-default h-full w-full flex-col overflow-hidden rounded-md contents" aria-label="Commands suggestions">
              <label for="radix-_R_5tbsnpfknmlbH2_" id="radix-_R_5tbsnpfknmlbH1_" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0" />
              <div id="composer-7-suggestions" class="bg-default absolute right-0 bottom-full left-0 mb-2 overflow-hidden rounded-xl border shadow-lg border-default">
                <div class="flex items-center justify-between border-b px-3 py-2.5 border-default">
                  <div class="min-w-0">
                    <p class="text-xs font-medium">Commands</p>
                    <p class="text-muted truncate text-[11px]">Choose a workflow</p>
                  </div>
                  <UKbd data-slot="kbd-group" class="inline-flex items-center gap-1">↑↓Enter</UKbd>
                </div>
                <div class="overflow-x-hidden overflow-y-auto max-h-64 p-1" role="listbox" aria-label="Suggestions" id="radix-_R_5tbsnpfknmlb_" style="--cmdk-list-height: 199.0px;">
                  <div>
                    <div class="text-highlighted [&amp;_[cmdk-group-heading]]:text-muted overflow-hidden p-1 [&amp;_[cmdk-group-heading]]:px-2 [&amp;_[cmdk-group-heading]]:py-1.5 [&amp;_[cmdk-group-heading]]:text-xs [&amp;_[cmdk-group-heading]]:font-medium" role="presentation">
                      <div role="group">
                        <div class="data-[selected=true]:bg-elevated data-[selected=true]:text-default relative cursor-default items-center text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 grid grid-cols-[28px_minmax(0,1fr)_auto] gap-2.5 rounded-lg px-2 py-2" id="radix-_R_1mjdtbsnpfknmlb_" role="option">
                          <span class="bg-muted flex size-7 items-center justify-center rounded-md">
                            <UIcon name="i-lucide-git-compare-arrows" class="size-4" />
                          </span>
                          <span class="min-w-0">
                            <span class="block text-xs font-medium">Review changes</span>
                            <span class="text-muted block truncate text-[11px]">Inspect the current diff for regressions and missing tests.</span>
                          </span>
                          <span class="text-muted text-[11px]">/review</span>
                        </div>
                        <div class="data-[selected=true]:bg-elevated data-[selected=true]:text-default relative cursor-default items-center text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 grid grid-cols-[28px_minmax(0,1fr)_auto] gap-2.5 rounded-lg px-2 py-2" id="radix-_R_2mjdtbsnpfknmlb_" role="option">
                          <span class="bg-muted flex size-7 items-center justify-center rounded-md">
                            <UIcon name="i-lucide-test-tube-diagonal" class="size-4" />
                          </span>
                          <span class="min-w-0">
                            <span class="block text-xs font-medium">Run relevant tests</span>
                            <span class="text-muted block truncate text-[11px]">Choose the smallest useful verification set for this change.</span>
                          </span>
                          <span class="text-muted text-[11px]">/test</span>
                        </div>
                        <div class="data-[selected=true]:bg-elevated data-[selected=true]:text-default relative cursor-default items-center text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 grid grid-cols-[28px_minmax(0,1fr)_auto] gap-2.5 rounded-lg px-2 py-2" id="radix-_R_3mjdtbsnpfknmlb_" role="option">
                          <span class="bg-muted flex size-7 items-center justify-center rounded-md">
                            <UIcon name="i-lucide-book-open" class="size-4" />
                          </span>
                          <span class="min-w-0">
                            <span class="block text-xs font-medium">Explain selection</span>
                            <span class="text-muted block truncate text-[11px]">Describe the selected code and the decisions behind it.</span>
                          </span>
                          <span class="text-muted text-[11px]">/explain</span>
                        </div>
                        <div class="data-[selected=true]:bg-elevated data-[selected=true]:text-default relative cursor-default items-center text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 grid grid-cols-[28px_minmax(0,1fr)_auto] gap-2.5 rounded-lg px-2 py-2" id="radix-_R_4mjdtbsnpfknmlb_" role="option">
                          <span class="bg-muted flex size-7 items-center justify-center rounded-md">
                            <UIcon name="i-lucide-wrench" class="size-4" />
                          </span>
                          <span class="min-w-0">
                            <span class="block text-xs font-medium">Fix an issue</span>
                            <span class="text-muted block truncate text-[11px]">Diagnose a bug, implement the smallest fix, and verify it.</span>
                          </span>
                          <span class="text-muted text-[11px]">/fix</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Form: controls and draft state are declared in this page -->
              <UForm :state="form" @submit="saveForm" class="relative mx-auto w-full max-w-none" aria-label="Command and context AI composer">
                <!-- Chat composer: form.message -->
                <div v-if="messages.length" class="my-4 space-y-4">
                  <UChatMessage v-for="message in messages" :key="message.id" :id="message.id" :role="message.role" :parts="[{ type: 'text', text: message.text }]" :side="message.role === 'user' ? 'right' : 'left'" :variant="message.role === 'user' ? 'soft' : 'naked'" />
                </div>
                <UChatPrompt v-model="form.message" :autofocus="false" color="primary" :rows="3" placeholder="Ask anything, / for commands, @ for context, ! for shell..." data-slot="input-group" class="group/input-group relative flex w-full min-w-0 border outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 h-auto flex-col items-stretch transition-[border-color,box-shadow] duration-200 bg-default border-default has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/30 gap-0 rounded-2xl shadow-sm has-[[data-slot=input-group-control]:focus-visible]:ring-3" @submit="sendMessage(&quot;message&quot;)" :ui="{ base: 'px-4 py-3 text-sm', footer: 'p-0 w-full' }">
                  <template #footer>
                    <div role="group" data-slot="input-group-addon" class="h-auto py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last justify-start group-has-[&gt;input]/input-group:pb-2 [.border-t]:pt-2 grid w-full cursor-default grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 pt-0 pb-3">
                      <div class="flex min-w-0 items-center gap-1">
                        <UButton color="neutral" variant="soft" class="justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default flex items-center gap-2 text-sm shadow-none size-8 p-0 has-[&gt;svg]:p-0" aria-label="Add context" type="button" @click="openAction(&quot;Add context&quot;)">
                          <UIcon name="i-lucide-plus" class="size-4" />
                          <span class="sr-only">Add context</span>
                        </UButton>
                        <UButton color="neutral" variant="soft" class="justify-center whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default py-2 flex items-center shadow-none h-8 max-w-48 gap-1.5 rounded-lg px-2 text-xs font-normal" aria-label="5.6 Sol" type="button" @click="openAction(&quot;5.6 Sol&quot;)">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-3.5 shrink-0" height="100%" width="100%">
                            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
                          </svg>
                          <span class="truncate">5.6 Sol</span>
                          <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0" />
                        </UButton>
                      </div>
                      <div class="flex min-w-0 items-center gap-1 justify-self-end">
                        <span class="text-muted hidden text-[11px] md:inline">Esc to close</span>
                        <UButton color="primary" variant="solid" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 flex items-center gap-2 text-sm shadow-none size-8 p-0 has-[&gt;svg]:p-0 rounded-full" aria-label="Send message" type="button" :disabled="!form.message.trim()" @click="sendMessage(&quot;message&quot;)">
                          <UIcon name="i-lucide-arrow-up" class="size-4" />
                          <span class="sr-only">Send message</span>
                        </UButton>
                      </div>
                    </div>
                  </template>
                </UChatPrompt>
              </UForm>
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
