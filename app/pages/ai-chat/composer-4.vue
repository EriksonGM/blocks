<!-- Page: /ai-chat/composer-4 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Composer 4 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "message": ""
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/composer-4">
    <section class="min-w-0 flex-1 overflow-y-auto px-4 pt-16 pb-12 sm:px-6 md:pt-16 lg:px-8 lg:pt-24">
      <div class="mx-auto flex w-full max-w-4xl flex-col">
        <div class="mx-auto w-full max-w-[720px]">
          <div class="mb-7">
            <div class="ai-home-reveal ai-home-reveal-kicker w-fit">
              <svg viewBox="0 0 64 64" class="drop-shadow-sm size-11" width="100%" height="100%">
                <defs>
                  <linearGradient id="_R_1btbsnpfknmlb_" x1="10" y1="8" x2="54" y2="56">
                    <stop offset="0" stop-color="var(--ui-text-highlighted)" />
                    <stop offset="0.52" stop-color="var(--ui-text-highlighted)" />
                    <stop offset="1" stop-color="var(--ui-text-highlighted)" />
                  </linearGradient>
                  <mask id="_R_1btbsnpfknmlb_-mask" x="0" y="0" width="64" height="64">
                    <rect width="64" height="64" fill="var(--ui-text-highlighted)" />
                    <path d="M 56.87 32.00 C 56.87 33.08 56.80 34.17 56.66 35.25 C 56.52 36.32 56.30 37.39 56.02 38.44 C 55.74 39.48 55.39 40.52 54.98 41.52 C 54.56 42.52 54.08 43.50 53.54 44.44 C 53.00 45.37 52.39 46.28 51.73 47.14 C 51.07 48.00 50.35 48.82 49.59 49.59 C 48.82 50.35 48.00 51.07 47.14 51.73 C 46.28 52.39 45.37 53.00 44.44 53.54 C 43.50 54.08 42.52 54.56 41.52 54.98 C 40.52 55.39 39.48 55.74 38.44 56.02 C 37.39 56.30 36.32 56.52 35.25 56.66 C 34.17 56.80 33.08 56.87 32.00 56.87 C 30.92 56.87 29.83 56.80 28.75 56.66 C 27.68 56.52 26.61 56.30 25.56 56.02 C 24.52 55.74 23.48 55.39 22.48 54.98 C 21.48 54.56 20.50 54.08 19.56 53.54 C 18.63 53.00 17.72 52.39 16.86 51.73 C 16.00 51.07 15.18 50.35 14.41 49.59 C 13.65 48.82 12.93 48.00 12.27 47.14 C 11.61 46.28 11.00 45.37 10.46 44.44 C 9.92 43.50 9.44 42.52 9.02 41.52 C 8.61 40.52 8.26 39.48 7.98 38.44 C 7.70 37.39 7.48 36.32 7.34 35.25 C 7.20 34.17 7.13 33.08 7.13 32.00 C 7.13 30.92 7.20 29.83 7.34 28.75 C 7.48 27.68 7.70 26.61 7.98 25.56 C 8.26 24.52 8.61 23.48 9.02 22.48 C 9.44 21.48 9.92 20.50 10.46 19.56 C 11.00 18.63 11.61 17.72 12.27 16.86 C 12.93 16.00 13.65 15.18 14.41 14.41 C 15.18 13.65 16.00 12.93 16.86 12.27 C 17.72 11.61 18.63 11.00 19.56 10.46 C 20.50 9.92 21.48 9.44 22.48 9.02 C 23.48 8.61 24.52 8.26 25.56 7.98 C 26.61 7.70 27.68 7.48 28.75 7.34 C 29.83 7.20 30.92 7.13 32.00 7.13 C 33.08 7.13 34.17 7.20 35.25 7.34 C 36.32 7.48 37.39 7.70 38.44 7.98 C 39.48 8.26 40.52 8.61 41.52 9.02 C 42.52 9.44 43.50 9.92 44.44 10.46 C 45.37 11.00 46.28 11.61 47.14 12.27 C 48.00 12.93 48.82 13.65 49.59 14.41 C 50.35 15.18 51.07 16.00 51.73 16.86 C 52.39 17.72 53.00 18.63 53.54 19.56 C 54.08 20.50 54.56 21.48 54.98 22.48 C 55.39 23.48 55.74 24.52 56.02 25.56 C 56.30 26.61 56.52 27.68 56.66 28.75 C 56.80 29.83 56.87 30.92 56.87 32.00 Z" transform="translate(0 0) rotate(0.00 32 32)" fill="var(--ui-text-inverted)" />
                    <rect x="25.1" y="25.200000000000003" width="3.8" height="8.2" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.56 0.09) rotate(-11 27 29.3) translate(0 29.3) scale(1 1.000) translate(0 -29.3)" />
                    <rect x="35.1" y="25.200000000000003" width="3.8" height="8.2" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.56 0.09) rotate(-11 37 29.3) translate(0 29.3) scale(1 1.000) translate(0 -29.3)" />
                  </mask>
                </defs>
                <rect width="64" height="64" fill="url(#_R_1btbsnpfknmlb_)" />
              </svg>
            </div>
            <h1 class="ai-home-reveal ai-home-reveal-title mt-4 text-2xl font-medium tracking-tight sm:text-[28px] text-highlighted">What do you want to build?</h1>
          </div>
          <!-- Form: controls and draft state are declared in this page -->
          <UForm :state="form" @submit="saveForm" class="relative mx-auto w-full max-w-[720px] ai-home-reveal ai-home-reveal-composer" aria-label="AI workspace composer">
            <!-- Chat composer: form.message -->
            <div v-if="messages.length" class="my-4 space-y-4">
              <UChatMessage v-for="message in messages" :key="message.id" :id="message.id" :role="message.role" :parts="[{ type: 'text', text: message.text }]" :side="message.role === 'user' ? 'right' : 'left'" :variant="message.role === 'user' ? 'soft' : 'naked'" />
            </div>
            <UChatPrompt v-model="form.message" :autofocus="false" color="primary" :rows="3" placeholder="Assign a task, ask a question, or describe what to build" data-slot="input-group" class="group/input-group relative flex w-full min-w-0 border shadow-xs outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 h-auto flex-col items-stretch transition-[border-color,box-shadow] duration-200 border-[var(--ai-composer-line)] bg-[var(--ai-composer-surface)] shadow-[var(--ai-composer-shadow)] has-[[data-slot=input-group-control]:focus-visible]:border-[var(--ai-composer-line-strong)] gap-2.5 rounded-[22px] p-3.5 has-[[data-slot=input-group-control]:focus-visible]:ring-0" @submit="sendMessage(&quot;message&quot;)" :ui="{ base: 'px-4 py-3 text-sm', footer: 'p-0 w-full' }">
              <template #footer>
                <div role="group" data-slot="input-group-addon" class="h-auto text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last justify-start group-has-[&gt;input]/input-group:pb-2 [.border-t]:pt-2 grid w-full cursor-default grid-cols-[minmax(0,1fr)_auto] items-center gap-2 p-0">
                  <div class="flex min-w-0 items-center gap-1">
                    <span class="no-scrollbar flex min-w-7 flex-1 items-center gap-1 overflow-x-auto">
                      <UButton color="neutral" variant="ghost" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 flex items-center gap-2 text-sm shadow-none p-0 has-[&gt;svg]:p-0 size-7 rounded-lg text-[var(--ai-composer-ink-tertiary)] hover:bg-[var(--ai-composer-hover)] hover:text-[var(--ai-composer-ink)] active:scale-[0.94] shrink-0" aria-label="Add context" type="button" @click="openAction(&quot;Add context&quot;)">
                        <UIcon name="i-lucide-plus" class="size-4" />
                        <span class="sr-only">Add context</span>
                      </UButton>
                    </span>
                    <UButton color="neutral" variant="ghost" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 flex items-center gap-2 text-sm shadow-none p-0 has-[&gt;svg]:p-0 size-7 rounded-lg text-[var(--ai-composer-ink-tertiary)] hover:bg-[var(--ai-composer-hover)] hover:text-[var(--ai-composer-ink)] active:scale-[0.94]" aria-label="Connect a tool" type="button" @click="openAction(&quot;Connect a tool&quot;)">
                      <UIcon name="i-lucide-link-2" class="size-4" />
                      <span class="sr-only">Connect a tool</span>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 flex items-center gap-2 text-sm shadow-none p-0 has-[&gt;svg]:p-0 size-7 rounded-lg text-[var(--ai-composer-ink-tertiary)] hover:bg-[var(--ai-composer-hover)] hover:text-[var(--ai-composer-ink)] active:scale-[0.94]" aria-label="Configure task" type="button" @click="openAction(&quot;Configure task&quot;)">
                      <UIcon name="i-lucide-sliders-horizontal" class="size-4" />
                      <span class="sr-only">Configure task</span>
                    </UButton>
                  </div>
                  <div class="flex min-w-0 items-center gap-1 justify-self-end">
                    <UButton color="neutral" variant="soft" class="justify-center whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default py-2 flex items-center shadow-none max-w-48 gap-1.5 rounded-lg px-2 text-xs font-normal h-7" aria-label="5.6 Sol" type="button" @click="openAction(&quot;5.6 Sol&quot;)">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-3.5 shrink-0" height="100%" width="100%">
                        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
                      </svg>
                      <span class="truncate">5.6 Sol</span>
                      <UIcon name="i-lucide-chevron-down" class="text-muted size-3.5 shrink-0" />
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 flex items-center gap-2 text-sm shadow-none p-0 has-[&gt;svg]:p-0 size-7 rounded-lg text-[var(--ai-composer-ink-tertiary)] hover:bg-[var(--ai-composer-hover)] hover:text-[var(--ai-composer-ink)] active:scale-[0.94]" aria-label="Use voice input" type="button" @click="openAction(&quot;Use voice input&quot;)">
                      <UIcon name="i-lucide-mic" class="size-4" />
                      <span class="sr-only">Use voice input</span>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 flex items-center gap-2 text-sm shadow-none p-0 has-[&gt;svg]:p-0 size-7 hover:bg-[var(--ai-composer-hover)] hover:text-[var(--ai-composer-ink)] active:scale-[0.94] rounded-lg bg-[var(--ai-composer-ink)] text-[var(--ai-composer-surface)] enabled:hover:bg-[var(--ai-composer-ink)] disabled:bg-[var(--ai-composer-line-strong)] disabled:text-[var(--ai-composer-ink-secondary)] disabled:opacity-100" aria-label="Send message" type="button" :disabled="!form.message.trim()" @click="sendMessage(&quot;message&quot;)">
                      <UIcon name="i-lucide-arrow-up" class="size-4" />
                      <span class="sr-only">Send message</span>
                    </UButton>
                  </div>
                </div>
              </template>
            </UChatPrompt>
            <div class="bg-(--ui-bg-muted)/45 text-muted flex items-center text-xs mx-4 -mt-1 min-h-9 rounded-b-xl px-3 pt-1 gap-2">
              <UIcon name="i-lucide-link-2" class="size-3.5 shrink-0" />
              <span class="min-w-0 flex-1 truncate">Connect tools to AI Admin Kit</span>
              <div class="hidden shrink-0 items-center gap-1 sm:flex">
                <UButton color="neutral" variant="outline" title="GitHub" class="bg-default hover:bg-elevated flex size-6 items-center justify-center rounded-md border border-default" aria-label="GitHub" type="button" @click="openAction(&quot;GitHub&quot;)">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-3 text-highlighted" height="100%" width="100%">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </UButton>
                <UButton color="neutral" variant="outline" title="Notion" class="bg-default hover:bg-elevated flex size-6 items-center justify-center rounded-md border border-default" aria-label="Notion" type="button" @click="openAction(&quot;Notion&quot;)">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-3 text-highlighted" height="100%" width="100%">
                    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
                  </svg>
                </UButton>
                <UButton color="neutral" variant="outline" title="Slack" class="bg-default hover:bg-elevated flex size-6 items-center justify-center rounded-md border border-default" aria-label="Slack" type="button" @click="openAction(&quot;Slack&quot;)">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-3 text-[var(--ui-error)]" height="100%" width="100%">
                    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
                  </svg>
                </UButton>
                <UButton color="neutral" variant="outline" title="Figma" class="bg-default hover:bg-elevated flex size-6 items-center justify-center rounded-md border border-default" aria-label="Figma" type="button" @click="openAction(&quot;Figma&quot;)">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-3 text-[var(--ui-warning)]" height="100%" width="100%">
                    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
                  </svg>
                </UButton>
              </div>
            </div>
          </UForm>
        </div>
        <section class="ai-home-reveal ai-home-reveal-suggestions mx-auto mt-14 grid w-full max-w-[720px] border-y sm:grid-cols-3 border-default">
          <article class="flex min-h-44 flex-col px-4 py-5 sm:min-h-48 sm:px-5 sm:py-6">
            <UIcon name="i-lucide-orbit" class="mb-5 size-4" />
            <h2 class="text-sm font-medium text-highlighted">Build Agent</h2>
            <p class="text-muted mt-1.5 max-w-44 text-xs leading-5">Design your AI teammate from scratch.</p>
            <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-8 rounded-md px-3 text-xs mt-auto w-fit" aria-label="Build" type="button" @click="openAction(&quot;Build&quot;)">
              Build
            </UButton>
          </article>
          <article class="flex min-h-44 flex-col px-4 py-5 sm:min-h-48 sm:px-5 sm:py-6 border-t sm:border-t-0 sm:border-l border-default">
            <div class="mb-5 flex h-4 items-center gap-1.5">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-3.5" aria-label="GitHub" height="100%" width="100%">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-3.5 text-[var(--ui-error)]" aria-label="Slack" height="100%" width="100%">
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
              </svg>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-3.5 text-[var(--ui-warning)]" aria-label="Figma" height="100%" width="100%">
                <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
              </svg>
            </div>
            <h2 class="text-sm font-medium text-highlighted">Connect tools</h2>
            <p class="text-muted mt-1.5 max-w-44 text-xs leading-5">Link your favorite apps in minutes.</p>
            <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-8 rounded-md px-3 text-xs mt-auto w-fit" aria-label="Connect" type="button" @click="openAction(&quot;Connect&quot;)">
              Connect
            </UButton>
          </article>
          <article class="flex min-h-44 flex-col px-4 py-5 sm:min-h-48 sm:px-5 sm:py-6 border-t sm:border-t-0 sm:border-l border-default">
            <UIcon name="i-lucide-waypoints" class="mb-5 size-4" />
            <h2 class="text-sm font-medium text-highlighted">Activate Workflow</h2>
            <p class="text-muted mt-1.5 max-w-44 text-xs leading-5">Automate tasks end to end, hands-free.</p>
            <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-8 rounded-md px-3 text-xs mt-auto w-fit" aria-label="Workflow" type="button" @click="openAction(&quot;Workflow&quot;)">
              Workflow
            </UButton>
          </article>
        </section>
        <section class="ai-home-reveal ai-home-reveal-suggestions mx-auto mt-14 w-full max-w-[720px]">
          <div class="mb-3 flex items-center justify-between">
            <h2 class="text-muted text-sm font-medium text-highlighted">Agents</h2>
            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md px-3 h-7 text-xs font-normal" aria-label="View all" type="button" @click="openAction(&quot;View all&quot;)">
              View all
            </UButton>
          </div>
          <div class="grid gap-3 sm:grid-cols-2">
            <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/25 rounded-lg border p-4 text-left transition-colors border-default" aria-label="Screen Review AgentReviews hierarchy, accessibility, and component consistency." type="button" @click="openAction(&quot;Screen Review AgentReviews hierarchy, accessibility, and component consistency.&quot;)">
              <svg viewBox="0 0 64 64" class="drop-shadow-sm mb-8 size-9" width="100%" height="100%">
                <defs>
                  <linearGradient id="_R_5ntbsnpfknmlb_" x1="10" y1="8" x2="54" y2="56">
                    <stop offset="0" stop-color="var(--ui-info)" />
                    <stop offset="0.52" stop-color="var(--ui-info)" />
                    <stop offset="1" stop-color="var(--ui-info)" />
                  </linearGradient>
                  <mask id="_R_5ntbsnpfknmlb_-mask" x="0" y="0" width="64" height="64">
                    <rect width="64" height="64" fill="var(--ui-text-highlighted)" />
                    <path d="M 59.05 32.00 C 59.05 33.10 57.75 34.26 57.14 35.31 C 56.54 36.36 55.98 37.32 55.43 38.28 C 54.88 39.23 54.36 40.14 53.83 41.04 C 53.31 41.95 52.80 42.82 52.29 43.71 C 51.78 44.61 51.27 45.48 50.75 46.39 C 50.23 47.29 49.70 48.20 49.15 49.15 C 48.60 50.11 48.04 51.07 47.44 52.12 C 46.83 53.17 46.48 54.88 45.53 55.43 C 44.57 55.98 42.91 55.43 41.70 55.43 C 40.50 55.43 39.38 55.43 38.28 55.43 C 37.17 55.43 36.13 55.43 35.08 55.43 C 34.04 55.43 33.03 55.43 32.00 55.43 C 30.97 55.43 29.96 55.43 28.92 55.43 C 27.87 55.43 26.83 55.43 25.72 55.43 C 24.62 55.43 23.50 55.43 22.30 55.43 C 21.09 55.43 19.43 55.98 18.47 55.43 C 17.52 54.88 17.17 53.17 16.56 52.12 C 15.96 51.07 15.40 50.11 14.85 49.15 C 14.30 48.20 13.77 47.29 13.25 46.39 C 12.73 45.48 12.22 44.61 11.71 43.71 C 11.20 42.82 10.69 41.95 10.17 41.04 C 9.64 40.14 9.12 39.23 8.57 38.28 C 8.02 37.32 7.46 36.36 6.86 35.31 C 6.25 34.26 4.95 33.10 4.95 32.00 C 4.95 30.90 6.25 29.74 6.86 28.69 C 7.46 27.64 8.02 26.68 8.57 25.72 C 9.12 24.77 9.64 23.86 10.17 22.96 C 10.69 22.05 11.20 21.18 11.71 20.29 C 12.22 19.39 12.73 18.52 13.25 17.61 C 13.77 16.71 14.30 15.80 14.85 14.85 C 15.40 13.89 15.96 12.93 16.56 11.88 C 17.17 10.83 17.52 9.12 18.47 8.57 C 19.43 8.02 21.09 8.57 22.30 8.57 C 23.50 8.57 24.62 8.57 25.72 8.57 C 26.83 8.57 27.87 8.57 28.92 8.57 C 29.96 8.57 30.97 8.57 32.00 8.57 C 33.03 8.57 34.04 8.57 35.08 8.57 C 36.13 8.57 37.17 8.57 38.28 8.57 C 39.38 8.57 40.50 8.57 41.70 8.57 C 42.91 8.57 44.57 8.02 45.53 8.57 C 46.48 9.12 46.83 10.83 47.44 11.88 C 48.04 12.93 48.60 13.89 49.15 14.85 C 49.70 15.80 50.23 16.71 50.75 17.61 C 51.27 18.52 51.78 19.39 52.29 20.29 C 52.80 21.18 53.31 22.05 53.83 22.96 C 54.36 23.86 54.88 24.77 55.43 25.72 C 55.98 26.68 56.54 27.64 57.14 28.69 C 57.75 29.74 59.05 30.90 59.05 32.00 Z" transform="translate(0 0) rotate(0.00 32 32)" fill="var(--ui-text-inverted)" />
                    <rect x="25.1" y="25.6" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.97 0.45) rotate(-11 27 29.6) translate(0 29.6) scale(1 1.000) translate(0 -29.6)" />
                    <rect x="35.1" y="25.6" width="3.8" height="8" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(0.97 0.45) rotate(-11 37 29.6) translate(0 29.6) scale(1 1.000) translate(0 -29.6)" />
                  </mask>
                </defs>
                <rect width="64" height="64" fill="url(#_R_5ntbsnpfknmlb_)" />
              </svg>
              <h3 class="text-sm font-medium text-highlighted">Screen Review Agent</h3>
              <p class="text-muted mt-1 text-xs leading-5">Reviews hierarchy, accessibility, and component consistency.</p>
            </UButton>
            <UButton color="neutral" variant="outline" class="hover:bg-(--ui-bg-muted)/25 rounded-lg border p-4 text-left transition-colors border-default" aria-label="Release PlannerTurns product changes into a clear launch checklist." type="button" @click="openAction(&quot;Release PlannerTurns product changes into a clear launch checklist.&quot;)">
              <svg viewBox="0 0 64 64" class="drop-shadow-sm mb-8 size-9" width="100%" height="100%">
                <defs>
                  <linearGradient id="_R_6ntbsnpfknmlb_" x1="10" y1="8" x2="54" y2="56">
                    <stop offset="0" stop-color="var(--ui-secondary)" />
                    <stop offset="0.52" stop-color="var(--ui-error)" />
                    <stop offset="1" stop-color="var(--ui-warning)" />
                  </linearGradient>
                  <mask id="_R_6ntbsnpfknmlb_-mask" x="0" y="0" width="64" height="64">
                    <rect width="64" height="64" fill="var(--ui-text-highlighted)" />
                    <path d="M 59.82 32.00 C 59.82 33.19 59.69 34.40 59.44 35.56 C 59.19 36.72 58.80 37.87 58.31 38.95 C 57.82 40.02 57.20 41.06 56.51 42.00 C 55.81 42.95 55.00 43.83 54.13 44.59 C 53.27 45.36 52.31 46.05 51.33 46.62 C 50.35 47.19 49.30 47.66 48.25 48.02 C 47.21 48.38 46.12 48.62 45.06 48.78 C 44.01 48.93 42.92 48.92 41.93 48.95 C 40.94 48.98 40.01 48.95 39.12 48.95 C 38.24 48.95 37.42 48.95 36.61 48.95 C 35.80 48.95 35.03 48.95 34.26 48.95 C 33.50 48.95 32.75 48.95 32.00 48.95 C 31.25 48.95 30.50 48.95 29.74 48.95 C 28.97 48.95 28.20 48.95 27.39 48.95 C 26.58 48.95 25.76 48.95 24.88 48.95 C 23.99 48.95 23.06 48.98 22.07 48.95 C 21.08 48.92 19.99 48.93 18.94 48.78 C 17.88 48.62 16.79 48.38 15.75 48.02 C 14.70 47.66 13.65 47.19 12.67 46.62 C 11.69 46.05 10.73 45.36 9.87 44.59 C 9.00 43.83 8.19 42.95 7.49 42.00 C 6.80 41.06 6.18 40.02 5.69 38.95 C 5.20 37.87 4.81 36.72 4.56 35.56 C 4.31 34.40 4.18 33.19 4.18 32.00 C 4.18 30.81 4.31 29.60 4.56 28.44 C 4.81 27.28 5.20 26.13 5.69 25.05 C 6.18 23.98 6.80 22.94 7.49 22.00 C 8.19 21.05 9.00 20.17 9.87 19.41 C 10.73 18.64 11.69 17.95 12.67 17.38 C 13.65 16.81 14.70 16.34 15.75 15.98 C 16.79 15.62 17.88 15.38 18.94 15.22 C 19.99 15.07 21.08 15.08 22.07 15.05 C 23.06 15.02 23.99 15.05 24.88 15.05 C 25.76 15.05 26.58 15.05 27.39 15.05 C 28.20 15.05 28.97 15.05 29.74 15.05 C 30.50 15.05 31.25 15.05 32.00 15.05 C 32.75 15.05 33.50 15.05 34.26 15.05 C 35.03 15.05 35.80 15.05 36.61 15.05 C 37.42 15.05 38.24 15.05 39.12 15.05 C 40.01 15.05 40.94 15.02 41.93 15.05 C 42.92 15.08 44.01 15.07 45.06 15.22 C 46.12 15.38 47.21 15.62 48.25 15.98 C 49.30 16.34 50.35 16.81 51.33 17.38 C 52.31 17.95 53.27 18.64 54.13 19.41 C 55.00 20.17 55.81 21.05 56.51 22.00 C 57.20 22.94 57.82 23.98 58.31 25.05 C 58.80 26.13 59.19 27.28 59.44 28.44 C 59.69 29.60 59.82 30.81 59.82 32.00 Z" transform="translate(0 0) rotate(0.00 32 32)" fill="var(--ui-text-inverted)" />
                    <rect x="24.6" y="25.8" width="3.8" height="7.6" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(-0.30 -0.54) rotate(-11 26.5 29.6) translate(0 29.6) scale(1 1.000) translate(0 -29.6)" />
                    <rect x="35.6" y="25.8" width="3.8" height="7.6" rx="1.9" fill="var(--ui-text-highlighted)" transform="translate(-0.30 -0.54) rotate(-11 37.5 29.6) translate(0 29.6) scale(1 1.000) translate(0 -29.6)" />
                  </mask>
                </defs>
                <rect width="64" height="64" fill="url(#_R_6ntbsnpfknmlb_)" />
              </svg>
              <h3 class="text-sm font-medium text-highlighted">Release Planner</h3>
              <p class="text-muted mt-1 text-xs leading-5">Turns product changes into a clear launch checklist.</p>
            </UButton>
          </div>
        </section>
      </div>
    </section>
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
