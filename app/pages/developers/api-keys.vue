<!-- Page: /developers/api-keys | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "API Keys · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "server": "Server",
  "live08234153847256": "",
  "live082341538472562": "",
  "live082341538472563": "",
  "live082341538472564": "",
  "live082341538472565": "",
  "live082341538472566": "",
  "live082341538472567": "",
  "live082341538472568": ""
})

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "API Keys",
    "value": "0"
  },
  {
    "label": "Account",
    "value": "1"
  }
]

const serverOptions = [
  "Production",
  "Development"
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

async function copyValue(value: string) {
  await navigator.clipboard.writeText(value)
  toast.add({ title: 'Copied to clipboard', color: 'success' })
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/developers/api-keys">
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
                <span class="text-muted">API Keys</span>
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
            <main id="main-content" class="flex min-h-0 flex-1 flex-col p-4 sm:p-6">
              <div class="flex w-full flex-col gap-2">
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h2 class="text-2xl font-bold text-highlighted">API Keys</h2>
                    <p class="text-muted text-sm">Secure, manage, and monitor your API keys with ease.</p>
                  </div>
                  <USelect v-model="form.server" :items="serverOptions" aria-label="Server" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-fit gap-2 text-sm" />
                </div>
              </div>
              <UTabs v-model="tabs1Active" :items="tabs1Items" color="primary" variant="link" data-orientation="horizontal" class="my-8" data-slot="tabs" :ui="{ root: 'gap-4', list: 'justify-start', content: 'min-h-0' }">
                <template #content="{ item }">
                  <template v-if="item.value === '0'">
                    <div data-orientation="horizontal" id="radix-_R_2av5uiv5uknmlb_-content-api" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-5 w-full max-w-3xl" style="animation-duration:0s">
                      <div class="flex flex-col gap-5">
                        <div class="flex flex-col gap-3">
                          <h2 class="text-lg font-semibold text-highlighted">API Version</h2>
                          <div class="flex items-center justify-between">
                            <h1 class="text-sm font-semibold text-highlighted">Global Version</h1>
                            <div class="flex items-center gap-4">
                              <p class="text-sm font-medium">03-Oct-2026</p>
                              <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 border-default">Latest Version</div>
                            </div>
                          </div>
                        </div>
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                        <div class="flex flex-col gap-3">
                          <div class="flex items-center justify-between">
                            <h2 class="text-lg font-semibold text-highlighted">Secret API Keys</h2>
                            <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-8 rounded-md px-3 text-xs" data-slot="dialog-trigger" aria-label="Create API Key" type="button" @click="openAction(&quot;Create API Key&quot;)">
                              Create API Key
                            </UButton>
                          </div>
                          <div role="alert" class="relative rounded-lg border px-4 py-3 text-sm [&amp;&gt;svg+div]:translate-y-[-3px] [&amp;&gt;svg]:absolute [&amp;&gt;svg]:left-4 [&amp;&gt;svg]:top-4 [&amp;&gt;svg]:text-highlighted [&amp;&gt;svg~*]:pl-7 bg-default text-highlighted w-full border-default">
                            <UIcon name="i-lucide-terminal" class="h-4 w-4" />
                            <h5 class="mb-1 leading-none font-medium tracking-tight text-highlighted">Reminder!</h5>
                            <div class="text-sm [&amp;_p]:leading-relaxed">
                              Live API keys can only be used for the v1/api-end point.See the
                              <NuxtLink class="underline" to="/">
                                documentation
                              </NuxtLink>
                              for more details.
                            </div>
                          </div>
                          <div class="my-4 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                            <h1 class="text-sm font-semibold text-highlighted">Live Environment</h1>
                            <div class="flex w-full flex-col items-end gap-2 md:w-fit">
                              <div class="relative w-full md:max-w-[280px]">
                                <UInput v-model="form.live08234153847256" type="text" placeholder="Live_08234153847256" name="live08234153847256" class="flex h-9 w-full rounded-md text-base md:text-sm pr-10" :ui="{ base: 'h-full' }" />
                                <UButton color="neutral" variant="outline" class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default absolute top-1/2 right-1 flex h-6 w-6 -translate-y-1/2" aria-label="Copy to clipboard" type="button" @click="copyValue(&quot;Copy to clipboard&quot;)">
                                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-copy m-auto">
                                    <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" />
                                    <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                                  </svg>
                                </UButton>
                              </div>
                              <UButton color="neutral" variant="ghost" class="justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline h-9 flex items-center gap-1 p-0 text-success dark:text-success" aria-label="Refresh" type="button" @click="openAction(&quot;Refresh&quot;)">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-refresh">
                                  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                                  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                                </svg>
                                <p class="text-sm font-medium">Refresh</p>
                              </UButton>
                            </div>
                          </div>
                          <div class="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                            <h1 class="text-sm font-semibold text-highlighted">Test Environment</h1>
                            <div class="flex w-full flex-col items-end gap-2 md:w-fit">
                              <div class="relative w-full md:max-w-[280px]">
                                <UInput v-model="form.live082341538472562" type="text" placeholder="Live_08234153847256" name="live082341538472562" class="flex h-9 w-full rounded-md text-base md:text-sm pr-10" :ui="{ base: 'h-full' }" />
                                <UButton color="neutral" variant="outline" class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default absolute top-1/2 right-1 flex h-6 w-6 -translate-y-1/2" aria-label="Copy to clipboard" type="button" @click="copyValue(&quot;Copy to clipboard&quot;)">
                                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-copy m-auto">
                                    <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" />
                                    <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                                  </svg>
                                </UButton>
                              </div>
                              <UButton color="neutral" variant="ghost" class="justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline h-9 flex items-center gap-1 p-0 text-success dark:text-success" aria-label="Refresh" type="button" @click="openAction(&quot;Refresh&quot;)">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-refresh">
                                  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                                  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                                </svg>
                                <p class="text-sm font-medium">Refresh</p>
                              </UButton>
                            </div>
                          </div>
                        </div>
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                        <div class="flex flex-col gap-3">
                          <h2 class="text-lg font-semibold text-highlighted">Publishable API Keys</h2>
                          <div role="alert" class="relative rounded-lg border px-4 py-3 text-sm [&amp;&gt;svg+div]:translate-y-[-3px] [&amp;&gt;svg]:absolute [&amp;&gt;svg]:left-4 [&amp;&gt;svg]:top-4 [&amp;&gt;svg]:text-highlighted [&amp;&gt;svg~*]:pl-7 bg-default text-highlighted w-full border-default">
                            <div class="text-sm [&amp;_p]:leading-relaxed flex flex-col items-start gap-3 md:flex-row md:items-center">
                              <UIcon name="i-lucide-terminal" class="h-4 w-4" />
                              <p>
                                Live API keys can only be used for the v1/api-end point.See the
                                <NuxtLink class="underline" to="/">
                                  documentation
                                </NuxtLink>
                                for more details.
                              </p>
                            </div>
                          </div>
                          <div class="my-4 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                            <h1 class="text-sm font-semibold text-highlighted">Live Environment</h1>
                            <div class="flex w-full flex-col items-end gap-2 md:w-fit">
                              <div class="relative w-full md:max-w-[280px]">
                                <UInput v-model="form.live082341538472563" type="text" placeholder="Live_08234153847256" name="live082341538472563" class="flex h-9 w-full rounded-md text-base md:text-sm pr-10" :ui="{ base: 'h-full' }" />
                                <UButton color="neutral" variant="outline" class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default absolute top-1/2 right-1 flex h-6 w-6 -translate-y-1/2" aria-label="Copy to clipboard" type="button" @click="copyValue(&quot;Copy to clipboard&quot;)">
                                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-copy m-auto">
                                    <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" />
                                    <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                                  </svg>
                                </UButton>
                              </div>
                              <UButton color="neutral" variant="ghost" class="justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline h-9 flex items-center gap-1 p-0 text-success dark:text-success" aria-label="Refresh" type="button" @click="openAction(&quot;Refresh&quot;)">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-refresh">
                                  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                                  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                                </svg>
                                <p class="text-sm font-medium">Refresh</p>
                              </UButton>
                            </div>
                          </div>
                          <div class="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                            <h1 class="text-sm font-semibold text-highlighted">Test Environment</h1>
                            <div class="flex w-full flex-col items-end gap-2 md:w-fit">
                              <div class="relative w-full md:max-w-[280px]">
                                <UInput v-model="form.live082341538472564" type="text" placeholder="Live_08234153847256" name="live082341538472564" class="flex h-9 w-full rounded-md text-base md:text-sm pr-10" :ui="{ base: 'h-full' }" />
                                <UButton color="neutral" variant="outline" class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default absolute top-1/2 right-1 flex h-6 w-6 -translate-y-1/2" aria-label="Copy to clipboard" type="button" @click="copyValue(&quot;Copy to clipboard&quot;)">
                                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-copy m-auto">
                                    <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" />
                                    <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                                  </svg>
                                </UButton>
                              </div>
                              <UButton color="neutral" variant="ghost" class="justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline h-9 flex items-center gap-1 p-0 text-success dark:text-success" aria-label="Refresh" type="button" @click="openAction(&quot;Refresh&quot;)">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-refresh">
                                  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                                  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                                </svg>
                                <p class="text-sm font-medium">Refresh</p>
                              </UButton>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                  <template v-if="item.value === '1'">
                    <div data-orientation="horizontal" id="radix-_R_2av5uiv5uknmlb_-content-api" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-5 w-full max-w-3xl" style="animation-duration:0s">
                      <div class="flex flex-col gap-5">
                        <div class="flex flex-col gap-3">
                          <h2 class="text-lg font-semibold text-highlighted">API Version</h2>
                          <div class="flex items-center justify-between">
                            <h1 class="text-sm font-semibold text-highlighted">Global Version</h1>
                            <div class="flex items-center gap-4">
                              <p class="text-sm font-medium">03-Oct-2026</p>
                              <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 border-default">Latest Version</div>
                            </div>
                          </div>
                        </div>
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                        <div class="flex flex-col gap-3">
                          <div class="flex items-center justify-between">
                            <h2 class="text-lg font-semibold text-highlighted">Secret API Keys</h2>
                            <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-8 rounded-md px-3 text-xs" data-slot="dialog-trigger" aria-label="Create API Key" type="button" @click="openAction(&quot;Create API Key&quot;)">
                              Create API Key
                            </UButton>
                          </div>
                          <div role="alert" class="relative rounded-lg border px-4 py-3 text-sm [&amp;&gt;svg+div]:translate-y-[-3px] [&amp;&gt;svg]:absolute [&amp;&gt;svg]:left-4 [&amp;&gt;svg]:top-4 [&amp;&gt;svg]:text-highlighted [&amp;&gt;svg~*]:pl-7 bg-default text-highlighted w-full border-default">
                            <UIcon name="i-lucide-terminal" class="h-4 w-4" />
                            <h5 class="mb-1 leading-none font-medium tracking-tight text-highlighted">Reminder!</h5>
                            <div class="text-sm [&amp;_p]:leading-relaxed">
                              Live API keys can only be used for the v1/api-end point.See the
                              <NuxtLink class="underline" to="/">
                                documentation
                              </NuxtLink>
                              for more details.
                            </div>
                          </div>
                          <div class="my-4 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                            <h1 class="text-sm font-semibold text-highlighted">Live Environment</h1>
                            <div class="flex w-full flex-col items-end gap-2 md:w-fit">
                              <div class="relative w-full md:max-w-[280px]">
                                <UInput v-model="form.live082341538472565" type="text" placeholder="Live_08234153847256" name="live082341538472565" class="flex h-9 w-full rounded-md text-base md:text-sm pr-10" :ui="{ base: 'h-full' }" />
                                <UButton color="neutral" variant="outline" class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default absolute top-1/2 right-1 flex h-6 w-6 -translate-y-1/2" aria-label="Copy to clipboard" type="button" @click="copyValue(&quot;Copy to clipboard&quot;)">
                                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-copy m-auto">
                                    <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" />
                                    <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                                  </svg>
                                </UButton>
                              </div>
                              <UButton color="neutral" variant="ghost" class="justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline h-9 flex items-center gap-1 p-0 text-success dark:text-success" aria-label="Refresh" type="button" @click="openAction(&quot;Refresh&quot;)">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-refresh">
                                  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                                  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                                </svg>
                                <p class="text-sm font-medium">Refresh</p>
                              </UButton>
                            </div>
                          </div>
                          <div class="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                            <h1 class="text-sm font-semibold text-highlighted">Test Environment</h1>
                            <div class="flex w-full flex-col items-end gap-2 md:w-fit">
                              <div class="relative w-full md:max-w-[280px]">
                                <UInput v-model="form.live082341538472566" type="text" placeholder="Live_08234153847256" name="live082341538472566" class="flex h-9 w-full rounded-md text-base md:text-sm pr-10" :ui="{ base: 'h-full' }" />
                                <UButton color="neutral" variant="outline" class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default absolute top-1/2 right-1 flex h-6 w-6 -translate-y-1/2" aria-label="Copy to clipboard" type="button" @click="copyValue(&quot;Copy to clipboard&quot;)">
                                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-copy m-auto">
                                    <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" />
                                    <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                                  </svg>
                                </UButton>
                              </div>
                              <UButton color="neutral" variant="ghost" class="justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline h-9 flex items-center gap-1 p-0 text-success dark:text-success" aria-label="Refresh" type="button" @click="openAction(&quot;Refresh&quot;)">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-refresh">
                                  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                                  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                                </svg>
                                <p class="text-sm font-medium">Refresh</p>
                              </UButton>
                            </div>
                          </div>
                        </div>
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                        <div class="flex flex-col gap-3">
                          <h2 class="text-lg font-semibold text-highlighted">Publishable API Keys</h2>
                          <div role="alert" class="relative rounded-lg border px-4 py-3 text-sm [&amp;&gt;svg+div]:translate-y-[-3px] [&amp;&gt;svg]:absolute [&amp;&gt;svg]:left-4 [&amp;&gt;svg]:top-4 [&amp;&gt;svg]:text-highlighted [&amp;&gt;svg~*]:pl-7 bg-default text-highlighted w-full border-default">
                            <div class="text-sm [&amp;_p]:leading-relaxed flex flex-col items-start gap-3 md:flex-row md:items-center">
                              <UIcon name="i-lucide-terminal" class="h-4 w-4" />
                              <p>
                                Live API keys can only be used for the v1/api-end point.See the
                                <NuxtLink class="underline" to="/">
                                  documentation
                                </NuxtLink>
                                for more details.
                              </p>
                            </div>
                          </div>
                          <div class="my-4 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                            <h1 class="text-sm font-semibold text-highlighted">Live Environment</h1>
                            <div class="flex w-full flex-col items-end gap-2 md:w-fit">
                              <div class="relative w-full md:max-w-[280px]">
                                <UInput v-model="form.live082341538472567" type="text" placeholder="Live_08234153847256" name="live082341538472567" class="flex h-9 w-full rounded-md text-base md:text-sm pr-10" :ui="{ base: 'h-full' }" />
                                <UButton color="neutral" variant="outline" class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default absolute top-1/2 right-1 flex h-6 w-6 -translate-y-1/2" aria-label="Copy to clipboard" type="button" @click="copyValue(&quot;Copy to clipboard&quot;)">
                                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-copy m-auto">
                                    <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" />
                                    <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                                  </svg>
                                </UButton>
                              </div>
                              <UButton color="neutral" variant="ghost" class="justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline h-9 flex items-center gap-1 p-0 text-success dark:text-success" aria-label="Refresh" type="button" @click="openAction(&quot;Refresh&quot;)">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-refresh">
                                  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                                  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                                </svg>
                                <p class="text-sm font-medium">Refresh</p>
                              </UButton>
                            </div>
                          </div>
                          <div class="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                            <h1 class="text-sm font-semibold text-highlighted">Test Environment</h1>
                            <div class="flex w-full flex-col items-end gap-2 md:w-fit">
                              <div class="relative w-full md:max-w-[280px]">
                                <UInput v-model="form.live082341538472568" type="text" placeholder="Live_08234153847256" name="live082341538472568" class="flex h-9 w-full rounded-md text-base md:text-sm pr-10" :ui="{ base: 'h-full' }" />
                                <UButton color="neutral" variant="outline" class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default absolute top-1/2 right-1 flex h-6 w-6 -translate-y-1/2" aria-label="Copy to clipboard" type="button" @click="copyValue(&quot;Copy to clipboard&quot;)">
                                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-copy m-auto">
                                    <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" />
                                    <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                                  </svg>
                                </UButton>
                              </div>
                              <UButton color="neutral" variant="ghost" class="justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 underline-offset-4 hover:underline h-9 flex items-center gap-1 p-0 text-success dark:text-success" aria-label="Refresh" type="button" @click="openAction(&quot;Refresh&quot;)">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-refresh">
                                  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                                  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                                </svg>
                                <p class="text-sm font-medium">Refresh</p>
                              </UButton>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </template>
              </UTabs>
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
