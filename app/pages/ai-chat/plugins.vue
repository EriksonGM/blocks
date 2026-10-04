<!-- Page: /ai-chat/plugins | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Plugins · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchIntegrations": "",
  "disableGitHub": true,
  "enableFigma": false,
  "disableNotion": true,
  "disableSlack": true,
  "enableJira": false,
  "enableDropbox": false,
  "enableGmail": false,
  "enableTrello": false
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/plugins">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="min-h-0 flex-1 overflow-y-auto">
        <div class="mx-auto flex flex-col px-4 sm:px-8 gap-6 py-6 sm:py-8">
          <div class="flex flex-wrap gap-4 items-start justify-between">
            <div class="flex flex-col gap-1">
              <h1 class="text-2xl font-semibold tracking-tight text-highlighted">Plugins</h1>
              <p class="text-muted max-w-2xl text-sm">Connect the tools your team already uses and make them available to assistants.</p>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Request integration" type="button" @click="openAction(&quot;Request integration&quot;)">
                Request integration
              </UButton>
              <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-8 rounded-md px-3 text-xs" aria-label="Browse all" type="button" @click="openAction(&quot;Browse all&quot;)">
                <UIcon name="i-lucide-plus" class="size-4" />
                Browse all
              </UButton>
            </div>
          </div>
          <section class="bg-default overflow-hidden rounded-xl border border-default">
            <div class="flex flex-col gap-4 border-b px-4 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-5 border-default">
              <div class="min-w-0">
                <p class="text-sm font-medium">Connection gallery</p>
                <p class="text-muted truncate text-xs">3 active ·8 available</p>
              </div>
              <div class="relative w-full lg:w-80">
                <UIcon name="i-lucide-search" class="text-muted pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                <UInput v-model="form.searchIntegrations" type="text" aria-label="Search plugins" placeholder="Search integrations…" name="searchIntegrations" class="flex w-full rounded-md text-base md:text-sm bg-default h-9 pl-9" :ui="{ base: 'h-full' }" />
              </div>
            </div>
            <div class="flex gap-1 overflow-x-auto border-b px-3 py-2 [scrollbar-width:none] lg:px-5 border-default">
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-default h-8 text-xs shrink-0 gap-1.5 rounded-lg px-3 bg-muted text-highlighted hover:bg-muted font-medium" aria-label="All apps8" type="button" @click="openAction(&quot;All apps8&quot;)">
                All apps
                <span class="text-[11px] tabular-nums text-(--ui-text-highlighted)/65">8</span>
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 text-xs text-muted shrink-0 gap-1.5 rounded-lg px-3 font-normal" aria-label="Connected3" type="button" @click="openAction(&quot;Connected3&quot;)">
                Connected
                <span class="text-muted text-[11px] tabular-nums">3</span>
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 text-xs text-muted shrink-0 gap-1.5 rounded-lg px-3 font-normal" aria-label="Developer tools1" type="button" @click="openAction(&quot;Developer tools1&quot;)">
                Developer tools
                <span class="text-muted text-[11px] tabular-nums">1</span>
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 text-xs text-muted shrink-0 gap-1.5 rounded-lg px-3 font-normal" aria-label="Communication2" type="button" @click="openAction(&quot;Communication2&quot;)">
                Communication
                <span class="text-muted text-[11px] tabular-nums">2</span>
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 text-xs text-muted shrink-0 gap-1.5 rounded-lg px-3 font-normal" aria-label="Productivity3" type="button" @click="openAction(&quot;Productivity3&quot;)">
                Productivity
                <span class="text-muted text-[11px] tabular-nums">3</span>
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 text-xs text-muted shrink-0 gap-1.5 rounded-lg px-3 font-normal" aria-label="Design tools1" type="button" @click="openAction(&quot;Design tools1&quot;)">
                Design tools
                <span class="text-muted text-[11px] tabular-nums">1</span>
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 text-xs text-muted shrink-0 gap-1.5 rounded-lg px-3 font-normal" aria-label="Storage1" type="button" @click="openAction(&quot;Storage1&quot;)">
                Storage
                <span class="text-muted text-[11px] tabular-nums">1</span>
              </UButton>
            </div>
            <div class="p-4 lg:p-5">
              <div class="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
                <!-- Card 1: GitHub -->
                <UCard class="rounded-lg group hover:border-(--ui-text-highlighted)/20 gap-0 overflow-hidden py-0 shadow-none transition-[border-color,box-shadow] duration-200 hover:shadow-sm" :ui="{ body: 'contents' }">
                  <div class="flex flex-col space-y-1.5 p-6 gap-0 px-6 pt-6 pb-5">
                    <div class="flex items-start justify-between gap-4">
                      <div class="flex min-w-0 items-center gap-3">
                        <div class="bg-default flex size-11 shrink-0 items-center justify-center rounded-xl border shadow-xs border-default">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-6 text-highlighted" height="100%" width="100%">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                        </div>
                        <div class="min-w-0">
                          <div class="flex items-center gap-2">
                            <h2 class="truncate text-base font-semibold tracking-tight text-highlighted">GitHub</h2>
                          </div>
                          <p class="text-muted truncate text-xs">By GitHub, Inc.</p>
                        </div>
                      </div>
                      <USwitch v-model="form.disableGitHub" aria-label="Disable GitHub" />
                    </div>
                    <p class="text-muted mt-7 truncate text-sm leading-5" title="GitHub: Search repositories, inspect pull requests, and bring code context into conversations.">GitHub: Search repositories, inspect pull requests, and bring code context into conversations.</p>
                    <div class="mt-5 flex flex-wrap items-center gap-1.5">
                      <div class="inline-flex items-center border px-2.5 py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md text-[10px] font-medium tracking-wide uppercase border-default">Developer tools</div>
                      <div class="inline-flex items-center border px-2.5 py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md text-[10px] font-medium tracking-wide uppercase border-default">2 steps</div>
                    </div>
                  </div>
                  <div class="bg-(--ui-bg-muted)/35 mt-auto flex min-h-14 items-center justify-between gap-3 border-t px-6 py-3 border-default">
                    <div class="flex min-w-0 items-center" />
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated h-8 rounded-md px-3 text-xs text-muted hover:text-highlighted -mr-2 shrink-0 font-normal" aria-label="View instruction" type="button" @click="openAction(&quot;View instruction&quot;)">
                      View instruction
                    </UButton>
                  </div>
                </UCard>
                <!-- Card 2: Figma -->
                <UCard class="rounded-lg group hover:border-(--ui-text-highlighted)/20 gap-0 overflow-hidden py-0 shadow-none transition-[border-color,box-shadow] duration-200 hover:shadow-sm" :ui="{ body: 'contents' }">
                  <div class="flex flex-col space-y-1.5 p-6 gap-0 px-6 pt-6 pb-5">
                    <div class="flex items-start justify-between gap-4">
                      <div class="flex min-w-0 items-center gap-3">
                        <div class="bg-default flex size-11 shrink-0 items-center justify-center rounded-xl border shadow-xs border-default">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-6 text-[var(--ui-warning)]" height="100%" width="100%">
                            <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
                          </svg>
                        </div>
                        <div class="min-w-0">
                          <div class="flex items-center gap-2">
                            <h2 class="truncate text-base font-semibold tracking-tight text-highlighted">Figma</h2>
                            <div class="inline-flex items-center rounded-md border py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-primary text-inverted shadow-sm hover:bg-primary/80 h-5 px-1.5 text-[10px] border-default">New</div>
                          </div>
                          <p class="text-muted truncate text-xs">By Figma, Inc.</p>
                        </div>
                      </div>
                      <USwitch v-model="form.enableFigma" aria-label="Enable Figma" />
                    </div>
                    <p class="text-muted mt-7 truncate text-sm leading-5" title="Figma: Read design files, inspect component properties, and connect product context to your assistant.">Figma: Read design files, inspect component properties, and connect product context to your assistant.</p>
                    <div class="mt-5 flex flex-wrap items-center gap-1.5">
                      <div class="inline-flex items-center border px-2.5 py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md text-[10px] font-medium tracking-wide uppercase border-default">Design tools</div>
                      <div class="inline-flex items-center border px-2.5 py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md text-[10px] font-medium tracking-wide uppercase border-default">4 steps</div>
                    </div>
                  </div>
                  <div class="bg-(--ui-bg-muted)/35 mt-auto flex min-h-14 items-center justify-between gap-3 border-t px-6 py-3 border-default">
                    <div class="flex min-w-0 items-center" />
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated h-8 rounded-md px-3 text-xs text-muted hover:text-highlighted -mr-2 shrink-0 font-normal" aria-label="View instruction" type="button" @click="openAction(&quot;View instruction&quot;)">
                      View instruction
                    </UButton>
                  </div>
                </UCard>
                <!-- Card 3: Notion -->
                <UCard class="rounded-lg group hover:border-(--ui-text-highlighted)/20 gap-0 overflow-hidden py-0 shadow-none transition-[border-color,box-shadow] duration-200 hover:shadow-sm" :ui="{ body: 'contents' }">
                  <div class="flex flex-col space-y-1.5 p-6 gap-0 px-6 pt-6 pb-5">
                    <div class="flex items-start justify-between gap-4">
                      <div class="flex min-w-0 items-center gap-3">
                        <div class="bg-default flex size-11 shrink-0 items-center justify-center rounded-xl border shadow-xs border-default">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-6 text-highlighted" height="100%" width="100%">
                            <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
                          </svg>
                        </div>
                        <div class="min-w-0">
                          <div class="flex items-center gap-2">
                            <h2 class="truncate text-base font-semibold tracking-tight text-highlighted">Notion</h2>
                          </div>
                          <p class="text-muted truncate text-xs">By Notion Labs, Inc.</p>
                        </div>
                      </div>
                      <USwitch v-model="form.disableNotion" aria-label="Disable Notion" />
                    </div>
                    <p class="text-muted mt-7 truncate text-sm leading-5" title="Notion: Search team knowledge and retrieve pages from approved workspaces.">Notion: Search team knowledge and retrieve pages from approved workspaces.</p>
                    <div class="mt-5 flex flex-wrap items-center gap-1.5">
                      <div class="inline-flex items-center border px-2.5 py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md text-[10px] font-medium tracking-wide uppercase border-default">Productivity</div>
                      <div class="inline-flex items-center border px-2.5 py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md text-[10px] font-medium tracking-wide uppercase border-default">4 steps</div>
                    </div>
                  </div>
                  <div class="bg-(--ui-bg-muted)/35 mt-auto flex min-h-14 items-center justify-between gap-3 border-t px-6 py-3 border-default">
                    <div class="flex min-w-0 items-center">
                      <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-(--ui-error)/15 bg-(--ui-error)/8 text-error h-6 gap-1.5 rounded-md px-2 text-[10px] font-medium tracking-wide uppercase border-default">
                        <UIcon name="i-lucide-circle-alert" class="size-3 shrink-0" />
                        Connection error
                      </div>
                    </div>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated h-8 rounded-md px-3 text-xs text-muted hover:text-highlighted -mr-2 shrink-0 font-normal" aria-label="View instruction" type="button" @click="openAction(&quot;View instruction&quot;)">
                      View instruction
                    </UButton>
                  </div>
                </UCard>
                <!-- Card 4: Slack -->
                <UCard class="rounded-lg group hover:border-(--ui-text-highlighted)/20 gap-0 overflow-hidden py-0 shadow-none transition-[border-color,box-shadow] duration-200 hover:shadow-sm" :ui="{ body: 'contents' }">
                  <div class="flex flex-col space-y-1.5 p-6 gap-0 px-6 pt-6 pb-5">
                    <div class="flex items-start justify-between gap-4">
                      <div class="flex min-w-0 items-center gap-3">
                        <div class="bg-default flex size-11 shrink-0 items-center justify-center rounded-xl border shadow-xs border-default">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-6 text-[var(--ui-error)]" height="100%" width="100%">
                            <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
                          </svg>
                        </div>
                        <div class="min-w-0">
                          <div class="flex items-center gap-2">
                            <h2 class="truncate text-base font-semibold tracking-tight text-highlighted">Slack</h2>
                          </div>
                          <p class="text-muted truncate text-xs">By Slack Technologies</p>
                        </div>
                      </div>
                      <USwitch v-model="form.disableSlack" aria-label="Disable Slack" />
                    </div>
                    <p class="text-muted mt-7 truncate text-sm leading-5" title="Slack: Search messages, summarize channels, and ground answers in recent team conversations.">Slack: Search messages, summarize channels, and ground answers in recent team conversations.</p>
                    <div class="mt-5 flex flex-wrap items-center gap-1.5">
                      <div class="inline-flex items-center border px-2.5 py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md text-[10px] font-medium tracking-wide uppercase border-default">Communication</div>
                      <div class="inline-flex items-center border px-2.5 py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md text-[10px] font-medium tracking-wide uppercase border-default">4 steps</div>
                    </div>
                  </div>
                  <div class="bg-(--ui-bg-muted)/35 mt-auto flex min-h-14 items-center justify-between gap-3 border-t px-6 py-3 border-default">
                    <div class="flex min-w-0 items-center" />
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated h-8 rounded-md px-3 text-xs text-muted hover:text-highlighted -mr-2 shrink-0 font-normal" aria-label="View instruction" type="button" @click="openAction(&quot;View instruction&quot;)">
                      View instruction
                    </UButton>
                  </div>
                </UCard>
                <!-- Card 5: Jira -->
                <UCard class="rounded-lg group hover:border-(--ui-text-highlighted)/20 gap-0 overflow-hidden py-0 shadow-none transition-[border-color,box-shadow] duration-200 hover:shadow-sm" :ui="{ body: 'contents' }">
                  <div class="flex flex-col space-y-1.5 p-6 gap-0 px-6 pt-6 pb-5">
                    <div class="flex items-start justify-between gap-4">
                      <div class="flex min-w-0 items-center gap-3">
                        <div class="bg-default flex size-11 shrink-0 items-center justify-center rounded-xl border shadow-xs border-default">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-6 text-[var(--ui-info)]" height="100%" width="100%">
                            <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.001 1.001 0 0 0 23.013 0Z" />
                          </svg>
                        </div>
                        <div class="min-w-0">
                          <div class="flex items-center gap-2">
                            <h2 class="truncate text-base font-semibold tracking-tight text-highlighted">Jira</h2>
                          </div>
                          <p class="text-muted truncate text-xs">By Atlassian</p>
                        </div>
                      </div>
                      <USwitch v-model="form.enableJira" aria-label="Enable Jira" />
                    </div>
                    <p class="text-muted mt-7 truncate text-sm leading-5" title="Jira: Find issues, review sprint progress, and pull delivery context into project conversations.">Jira: Find issues, review sprint progress, and pull delivery context into project conversations.</p>
                    <div class="mt-5 flex flex-wrap items-center gap-1.5">
                      <div class="inline-flex items-center border px-2.5 py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md text-[10px] font-medium tracking-wide uppercase border-default">Productivity</div>
                      <div class="inline-flex items-center border px-2.5 py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md text-[10px] font-medium tracking-wide uppercase border-default">3 steps</div>
                    </div>
                  </div>
                  <div class="bg-(--ui-bg-muted)/35 mt-auto flex min-h-14 items-center justify-between gap-3 border-t px-6 py-3 border-default">
                    <div class="flex min-w-0 items-center" />
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated h-8 rounded-md px-3 text-xs text-muted hover:text-highlighted -mr-2 shrink-0 font-normal" aria-label="View instruction" type="button" @click="openAction(&quot;View instruction&quot;)">
                      View instruction
                    </UButton>
                  </div>
                </UCard>
                <!-- Card 6: Dropbox -->
                <UCard class="rounded-lg group hover:border-(--ui-text-highlighted)/20 gap-0 overflow-hidden py-0 shadow-none transition-[border-color,box-shadow] duration-200 hover:shadow-sm" :ui="{ body: 'contents' }">
                  <div class="flex flex-col space-y-1.5 p-6 gap-0 px-6 pt-6 pb-5">
                    <div class="flex items-start justify-between gap-4">
                      <div class="flex min-w-0 items-center gap-3">
                        <div class="bg-default flex size-11 shrink-0 items-center justify-center rounded-xl border shadow-xs border-default">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-6 text-[var(--ui-info)]" height="100%" width="100%">
                            <path d="M6 1.807L0 5.629l6 3.822 6.001-3.822L6 1.807zM18 1.807l-6 3.822 6 3.822 6-3.822-6-3.822zM0 13.274l6 3.822 6.001-3.822L6 9.452l-6 3.822zM18 9.452l-6 3.822 6 3.822 6-3.822-6-3.822zM6 18.371l6.001 3.822 6-3.822-6-3.822L6 18.371z" />
                          </svg>
                        </div>
                        <div class="min-w-0">
                          <div class="flex items-center gap-2">
                            <h2 class="truncate text-base font-semibold tracking-tight text-highlighted">Dropbox</h2>
                          </div>
                          <p class="text-muted truncate text-xs">By Dropbox, Inc.</p>
                        </div>
                      </div>
                      <USwitch v-model="form.enableDropbox" aria-label="Enable Dropbox" />
                    </div>
                    <p class="text-muted mt-7 truncate text-sm leading-5" title="Dropbox: Locate files and retrieve approved workspace documents without leaving the conversation.">Dropbox: Locate files and retrieve approved workspace documents without leaving the conversation.</p>
                    <div class="mt-5 flex flex-wrap items-center gap-1.5">
                      <div class="inline-flex items-center border px-2.5 py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md text-[10px] font-medium tracking-wide uppercase border-default">Storage</div>
                      <div class="inline-flex items-center border px-2.5 py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md text-[10px] font-medium tracking-wide uppercase border-default">2 steps</div>
                    </div>
                  </div>
                  <div class="bg-(--ui-bg-muted)/35 mt-auto flex min-h-14 items-center justify-between gap-3 border-t px-6 py-3 border-default">
                    <div class="flex min-w-0 items-center" />
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated h-8 rounded-md px-3 text-xs text-muted hover:text-highlighted -mr-2 shrink-0 font-normal" aria-label="View instruction" type="button" @click="openAction(&quot;View instruction&quot;)">
                      View instruction
                    </UButton>
                  </div>
                </UCard>
                <!-- Card 7: Gmail -->
                <UCard class="rounded-lg group hover:border-(--ui-text-highlighted)/20 gap-0 overflow-hidden py-0 shadow-none transition-[border-color,box-shadow] duration-200 hover:shadow-sm" :ui="{ body: 'contents' }">
                  <div class="flex flex-col space-y-1.5 p-6 gap-0 px-6 pt-6 pb-5">
                    <div class="flex items-start justify-between gap-4">
                      <div class="flex min-w-0 items-center gap-3">
                        <div class="bg-default flex size-11 shrink-0 items-center justify-center rounded-xl border shadow-xs border-default">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-6 text-[var(--ui-error)]" height="100%" width="100%">
                            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                          </svg>
                        </div>
                        <div class="min-w-0">
                          <div class="flex items-center gap-2">
                            <h2 class="truncate text-base font-semibold tracking-tight text-highlighted">Gmail</h2>
                          </div>
                          <p class="text-muted truncate text-xs">By Google</p>
                        </div>
                      </div>
                      <USwitch v-model="form.enableGmail" aria-label="Enable Gmail" />
                    </div>
                    <p class="text-muted mt-7 truncate text-sm leading-5" title="Gmail: Find approved email threads and use customer context in assistant responses.">Gmail: Find approved email threads and use customer context in assistant responses.</p>
                    <div class="mt-5 flex flex-wrap items-center gap-1.5">
                      <div class="inline-flex items-center border px-2.5 py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md text-[10px] font-medium tracking-wide uppercase border-default">Communication</div>
                      <div class="inline-flex items-center border px-2.5 py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md text-[10px] font-medium tracking-wide uppercase border-default">3 steps</div>
                    </div>
                  </div>
                  <div class="bg-(--ui-bg-muted)/35 mt-auto flex min-h-14 items-center justify-between gap-3 border-t px-6 py-3 border-default">
                    <div class="flex min-w-0 items-center" />
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated h-8 rounded-md px-3 text-xs text-muted hover:text-highlighted -mr-2 shrink-0 font-normal" aria-label="View instruction" type="button" @click="openAction(&quot;View instruction&quot;)">
                      View instruction
                    </UButton>
                  </div>
                </UCard>
                <!-- Card 8: Trello -->
                <UCard class="rounded-lg group hover:border-(--ui-text-highlighted)/20 gap-0 overflow-hidden py-0 shadow-none transition-[border-color,box-shadow] duration-200 hover:shadow-sm" :ui="{ body: 'contents' }">
                  <div class="flex flex-col space-y-1.5 p-6 gap-0 px-6 pt-6 pb-5">
                    <div class="flex items-start justify-between gap-4">
                      <div class="flex min-w-0 items-center gap-3">
                        <div class="bg-default flex size-11 shrink-0 items-center justify-center rounded-xl border shadow-xs border-default">
                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-6 text-[var(--ui-info)]" height="100%" width="100%">
                            <path d="M21.147 0H2.853A2.86 2.86 0 000 2.853v18.294A2.86 2.86 0 002.853 24h18.294A2.86 2.86 0 0024 21.147V2.853A2.86 2.86 0 0021.147 0zM10.34 17.287a.953.953 0 01-.953.953h-4a.954.954 0 01-.954-.953V5.38a.953.953 0 01.954-.953h4a.954.954 0 01.953.953zm9.233-5.467a.944.944 0 01-.953.947h-4a.947.947 0 01-.953-.947V5.38a.953.953 0 01.953-.953h4a.954.954 0 01.953.953z" />
                          </svg>
                        </div>
                        <div class="min-w-0">
                          <div class="flex items-center gap-2">
                            <h2 class="truncate text-base font-semibold tracking-tight text-highlighted">Trello</h2>
                          </div>
                          <p class="text-muted truncate text-xs">By Atlassian</p>
                        </div>
                      </div>
                      <USwitch v-model="form.enableTrello" aria-label="Enable Trello" />
                    </div>
                    <p class="text-muted mt-7 truncate text-sm leading-5" title="Trello: Read boards, cards, and checklists to keep project answers current and actionable.">Trello: Read boards, cards, and checklists to keep project answers current and actionable.</p>
                    <div class="mt-5 flex flex-wrap items-center gap-1.5">
                      <div class="inline-flex items-center border px-2.5 py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md text-[10px] font-medium tracking-wide uppercase border-default">Productivity</div>
                      <div class="inline-flex items-center border px-2.5 py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-md text-[10px] font-medium tracking-wide uppercase border-default">3 steps</div>
                    </div>
                  </div>
                  <div class="bg-(--ui-bg-muted)/35 mt-auto flex min-h-14 items-center justify-between gap-3 border-t px-6 py-3 border-default">
                    <div class="flex min-w-0 items-center" />
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated h-8 rounded-md px-3 text-xs text-muted hover:text-highlighted -mr-2 shrink-0 font-normal" aria-label="View instruction" type="button" @click="openAction(&quot;View instruction&quot;)">
                      View instruction
                    </UButton>
                  </div>
                </UCard>
              </div>
            </div>
          </section>
          <p class="text-muted px-1 text-xs">Connections use scripted sample results. Configuration stays in this demo workspace.</p>
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
