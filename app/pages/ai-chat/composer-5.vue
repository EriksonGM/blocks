<!-- Page: /ai-chat/composer-5 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Composer 5 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "message": "Draft a follow-up for my last customer meeting"
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

function exportCsv() {
  const rows = Object.entries(form).map(([name, value]) => [name, String(value)])
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "ai-chat-composer-5.csv"
  anchor.click()
  URL.revokeObjectURL(url)
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/composer-5">
    <div data-slot="scroll-area" class="relative overflow-hidden min-h-0 w-screen max-w-[100vw] min-w-0 flex-1 pt-12 md:w-full md:max-w-none md:pt-0" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
      <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
        <div style="min-width:100%;display:table">
          <div class="flex min-h-[calc(100svh-4rem)] w-screen max-w-[100vw] min-w-0 flex-col overflow-x-hidden md:w-full md:max-w-full">
            <section class="mx-auto flex w-full max-w-[100vw] min-w-0 flex-1 flex-col items-center px-4 pt-[clamp(3rem,10vh,7rem)] sm:px-6 md:max-w-4xl">
              <img alt="Workspace assistant" width="28" height="32" class="ai-home-reveal ai-home-reveal-kicker object-contain dark:hidden" style="color:transparent" src="/reference/4eb49a7be0892386.svg" loading="lazy" />
              <h1 class="ai-home-reveal ai-home-reveal-title mt-5 text-center text-2xl font-medium tracking-tight sm:text-3xl text-highlighted">What would you like to accomplish?</h1>
              <p class="ai-home-reveal ai-home-reveal-title text-muted mt-2 text-center text-sm">Ask across your meetings, documents, and connected workspace.</p>
              <div class="ai-home-reveal ai-home-reveal-suggestions mt-7 w-full max-w-[720px]">
                <div class="relative w-full max-w-full min-w-0 overflow-hidden pr-8">
                  <div class="flex min-w-0 overflow-x-auto py-1 [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden" style="mask-image:linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);-webkit-mask-image:linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)">
                    <div class="flex shrink-0 gap-2 pr-2">
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default hover:bg-elevated hover:text-default py-2 bg-default h-9 shrink-0 rounded-xl px-3 font-normal shadow-xs" aria-label="Import a CSV" type="button" @click="exportCsv()">
                        <UIcon name="i-lucide-table-2" class="text-muted size-3.5" />
                        Import a CSV
                        <UIcon name="i-lucide-arrow-down" class="text-muted size-3" />
                      </UButton>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default hover:bg-elevated hover:text-default py-2 bg-default h-9 shrink-0 rounded-xl px-3 font-normal shadow-xs" aria-label="Ask about a project" type="button" @click="openAction(&quot;Ask about a project&quot;)">
                        <UIcon name="i-lucide-database" class="text-muted size-3.5" />
                        Ask about a project
                        <UIcon name="i-lucide-arrow-down" class="text-muted size-3" />
                      </UButton>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border hover:bg-elevated hover:text-default py-2 h-9 shrink-0 rounded-xl px-3 font-normal shadow-xs border-(--ui-text-highlighted)/20 bg-muted border-default" aria-label="Draft a follow-up" type="button" @click="openAction(&quot;Draft a follow-up&quot;)">
                        <UIcon name="i-lucide-mail" class="text-muted size-3.5" />
                        Draft a follow-up
                        <UIcon name="i-lucide-arrow-down" class="text-muted size-3" />
                      </UButton>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default hover:bg-elevated hover:text-default py-2 bg-default h-9 shrink-0 rounded-xl px-3 font-normal shadow-xs" aria-label="Recap a meeting" type="button" @click="openAction(&quot;Recap a meeting&quot;)">
                        <UIcon name="i-lucide-calendar-days" class="text-muted size-3.5" />
                        Recap a meeting
                        <UIcon name="i-lucide-arrow-down" class="text-muted size-3" />
                      </UButton>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default hover:bg-elevated hover:text-default py-2 bg-default h-9 shrink-0 rounded-xl px-3 font-normal shadow-xs" aria-label="Write a brief" type="button" @click="openAction(&quot;Write a brief&quot;)">
                        <UIcon name="i-lucide-file-text" class="text-muted size-3.5" />
                        Write a brief
                        <UIcon name="i-lucide-arrow-down" class="text-muted size-3" />
                      </UButton>
                    </div>
                  </div>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default hover:bg-elevated hover:text-default size-6 bg-(--ui-bg)/90 absolute top-1/2 right-0 z-10 -translate-y-1/2 rounded-full shadow-sm backdrop-blur" aria-label="Show more suggestions" type="button" @click="openAction(&quot;Show more suggestions&quot;)">
                    <UIcon name="i-lucide-chevron-right" class="size-4" />
                  </UButton>
                </div>
              </div>
              <!-- Form: controls and draft state are declared in this page -->
              <UForm :state="form" @submit="saveForm" class="relative mx-auto w-full ai-home-reveal ai-home-reveal-composer mt-4 max-w-[calc(100vw-2rem)] sm:max-w-[720px]" aria-label="Start a workspace session">
                <!-- Chat composer: form.message -->
                <div v-if="messages.length" class="my-4 space-y-4">
                  <UChatMessage v-for="message in messages" :key="message.id" :id="message.id" :role="message.role" :parts="[{ type: 'text', text: message.text }]" :side="message.role === 'user' ? 'right' : 'left'" :variant="message.role === 'user' ? 'soft' : 'naked'" />
                </div>
                <UChatPrompt v-model="form.message" :autofocus="false" color="primary" :rows="3" placeholder="Ask about a project, meeting, or document" data-slot="input-group" class="group/input-group relative flex w-full min-w-0 border shadow-xs outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 h-auto flex-col items-stretch transition-[border-color,box-shadow] duration-200 border-[var(--ai-composer-line)] bg-[var(--ai-composer-surface)] shadow-[var(--ai-composer-shadow)] has-[[data-slot=input-group-control]:focus-visible]:border-[var(--ai-composer-line-strong)] gap-2.5 rounded-[22px] p-3.5 has-[[data-slot=input-group-control]:focus-visible]:ring-0" @submit="sendMessage(&quot;message&quot;)" :ui="{ base: 'px-4 py-3 text-sm', footer: 'p-0 w-full' }">
                  <template #footer>
                    <div role="group" data-slot="input-group-addon" class="h-auto text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last justify-start group-has-[&gt;input]/input-group:pb-2 [.border-t]:pt-2 grid w-full cursor-default grid-cols-[minmax(0,1fr)_auto] items-center gap-2 p-0">
                      <div class="flex min-w-0 items-center gap-1">
                        <span class="no-scrollbar flex min-w-7 flex-1 items-center gap-1 overflow-x-auto">
                          <UButton color="neutral" variant="ghost" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 flex items-center gap-2 text-sm shadow-none p-0 has-[&gt;svg]:p-0 size-7 rounded-lg text-[var(--ai-composer-ink-tertiary)] hover:bg-[var(--ai-composer-hover)] hover:text-[var(--ai-composer-ink)] active:scale-[0.94] shrink-0" aria-label="Add context" type="button" @click="openAction(&quot;Add context&quot;)">
                            <UIcon name="i-lucide-plus" class="size-4" />
                            <span class="sr-only">Add context</span>
                          </UButton>
                        </span>
                      </div>
                      <div class="flex min-w-0 items-center gap-1 justify-self-end">
                        <UButton color="neutral" variant="ghost" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 flex items-center gap-2 text-sm shadow-none p-0 has-[&gt;svg]:p-0 size-7 rounded-lg text-[var(--ai-composer-ink-tertiary)] hover:bg-[var(--ai-composer-hover)] hover:text-[var(--ai-composer-ink)] active:scale-[0.94]" aria-label="Use voice input" type="button" @click="openAction(&quot;Use voice input&quot;)">
                          <UIcon name="i-lucide-mic" class="size-4" />
                          <span class="sr-only">Use voice input</span>
                        </UButton>
                        <UButton color="neutral" variant="soft" class="justify-center whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default py-2 flex items-center shadow-none max-w-48 gap-1.5 rounded-lg px-2 text-xs font-normal h-7" aria-label="5.6 Sol" type="button" @click="openAction(&quot;5.6 Sol&quot;)">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-3.5 shrink-0" height="100%" width="100%">
                            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
                          </svg>
                          <span class="truncate">5.6 Sol</span>
                          <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0" />
                        </UButton>
                        <UButton color="neutral" variant="ghost" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 flex items-center gap-2 text-sm shadow-none p-0 has-[&gt;svg]:p-0 size-7 hover:bg-[var(--ai-composer-hover)] hover:text-[var(--ai-composer-ink)] active:scale-[0.94] rounded-lg bg-[var(--ai-composer-ink)] text-[var(--ai-composer-surface)] enabled:hover:bg-[var(--ai-composer-ink)] disabled:bg-[var(--ai-composer-line-strong)] disabled:text-[var(--ai-composer-ink-secondary)] disabled:opacity-100" aria-label="Send message" type="button" :disabled="!form.message.trim()" @click="sendMessage(&quot;message&quot;)">
                          <UIcon name="i-lucide-arrow-up" class="size-4" />
                          <span class="sr-only">Send message</span>
                        </UButton>
                      </div>
                    </div>
                  </template>
                </UChatPrompt>
                <div class="bg-(--ui-bg-muted)/45 text-muted flex items-center gap-4 text-xs mx-4 -mt-1 rounded-b-xl px-3 min-h-10 py-1.5">
                  <span class="mr-auto">Get better answers from your apps</span>
                  <div class="flex items-center gap-0.5">
                    <UButton color="neutral" variant="ghost" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 flex items-center gap-2 text-sm shadow-none p-0 has-[&gt;svg]:p-0 size-7 rounded-lg text-[var(--ai-composer-ink-tertiary)] hover:bg-[var(--ai-composer-hover)] hover:text-[var(--ai-composer-ink)] active:scale-[0.94]" aria-label="Notion connected" type="button" @click="openAction(&quot;Notion connected&quot;)">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="text-highlighted" height="100%" width="100%">
                        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
                      </svg>
                      <span class="sr-only">Notion connected</span>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 flex items-center gap-2 text-sm shadow-none p-0 has-[&gt;svg]:p-0 size-7 rounded-lg text-[var(--ai-composer-ink-tertiary)] hover:bg-[var(--ai-composer-hover)] hover:text-[var(--ai-composer-ink)] active:scale-[0.94]" aria-label="Slack connected" type="button" @click="openAction(&quot;Slack connected&quot;)">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="text-[var(--ui-secondary)] dark:text-[var(--ui-error)]" height="100%" width="100%">
                        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
                      </svg>
                      <span class="sr-only">Slack connected</span>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 flex items-center gap-2 text-sm shadow-none p-0 has-[&gt;svg]:p-0 size-7 rounded-lg text-[var(--ai-composer-ink-tertiary)] hover:bg-[var(--ai-composer-hover)] hover:text-[var(--ai-composer-ink)] active:scale-[0.94]" aria-label="Linear connected" type="button" @click="openAction(&quot;Linear connected&quot;)">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="text-[var(--ui-info)]" height="100%" width="100%">
                        <path d="M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z" />
                      </svg>
                      <span class="sr-only">Linear connected</span>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 flex items-center gap-2 text-sm shadow-none p-0 has-[&gt;svg]:p-0 size-7 rounded-lg text-[var(--ai-composer-ink-tertiary)] hover:bg-[var(--ai-composer-hover)] hover:text-[var(--ai-composer-ink)] active:scale-[0.94]" aria-label="Google Drive connected" type="button" @click="openAction(&quot;Google Drive connected&quot;)">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="text-[var(--ui-success)]" height="100%" width="100%">
                        <path d="M12.01 1.485c-2.082 0-3.754.02-3.743.047.01.02 1.708 3.001 3.774 6.62l3.76 6.574h3.76c2.081 0 3.753-.02 3.742-.047-.005-.02-1.708-3.001-3.775-6.62l-3.76-6.574zm-4.76 1.73a789.828 789.861 0 0 0-3.63 6.319L0 15.868l1.89 3.298 1.885 3.297 3.62-6.335 3.618-6.33-1.88-3.287C8.1 4.704 7.255 3.22 7.25 3.214zm2.259 12.653-.203.348c-.114.198-.96 1.672-1.88 3.287a423.93 423.948 0 0 1-1.698 2.97c-.01.026 3.24.042 7.222.042h7.244l1.796-3.157c.992-1.734 1.85-3.23 1.906-3.323l.104-.167h-7.249z" />
                      </svg>
                      <span class="sr-only">Google Drive connected</span>
                    </UButton>
                  </div>
                </div>
              </UForm>
              <div class="text-muted mt-3 flex h-5 items-center gap-1.5 text-xs transition-opacity opacity-0" role="status">
                <UIcon name="i-lucide-circle-check" class="size-3.5" />
              </div>
            </section>
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
