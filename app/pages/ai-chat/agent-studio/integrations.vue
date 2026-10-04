<!-- Page: /ai-chat/agent-studio/integrations | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Integrations · Blocks Admin" })

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/agent-studio/integrations">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="flex min-h-0 flex-1">
        <div class="min-w-0 flex-1 overflow-y-auto">
          <div class="mx-auto max-w-[1140px] px-5 py-7 sm:px-8">
            <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 class="text-xl font-semibold tracking-tight text-highlighted">Integrations</h1>
                <p class="text-muted mt-1 text-xs">Your tools, working together.</p>
              </div>
              <div class="flex w-full gap-2 sm:w-auto">
                <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Request app" type="button" @click="openAction(&quot;Request app&quot;)">
                  Request app
                </UButton>
              </div>
            </div>
            <div class="relative mb-8 flex min-h-[146px] items-center overflow-hidden rounded-xl border border-success/60 bg-success/60 px-6 py-6 dark:border-success/50 dark:bg-success/20">
              <div class="pointer-events-none absolute -top-24 right-12 size-72 rounded-full border border-success/15 shadow-[0_0_0_40px_color-mix(in_oklab,var(--color-emerald-400)_5%,transparent),0_0_0_80px_color-mix(in_oklab,var(--color-emerald-400)_4%,transparent)]" />
              <div class="relative max-w-[260px]">
                <span class="text-[10px] font-medium tracking-widest text-success dark:text-success">BETTER CONTEXT. BETTER WORK.</span>
                <h2 class="mt-2 text-lg leading-6 font-medium text-highlighted">
                  Bring your workspace
                  <br />
                  into the conversation.
                </h2>
                <p class="text-muted mt-2 text-xs">6 connections ready for your agents</p>
              </div>
              <div class="relative ml-auto hidden space-y-3 pl-5 xl:block">
                <div class="bg-(--ui-bg)/80 flex items-center gap-2 rounded-full border px-3 py-2 text-[11px] shadow-sm border-default">
                  <UIcon name="i-lucide-check-check" class="size-3.5 text-success" />
                  12 customer signals linked to their sources
                </div>
                <div class="bg-(--ui-bg)/80 ml-7 flex items-center gap-2 rounded-full border px-3 py-2 text-[11px] shadow-sm border-default">
                  <UIcon name="i-lucide-circle-check" class="size-3.5 text-success" />
                  Weekly brief ready for review
                </div>
              </div>
            </div>
            <div class="space-y-8">
              <section aria-label="Recommended for your workspace">
                <h2 class="text-muted mb-3 text-xs font-medium text-highlighted">Recommended for your workspace</h2>
                <div class="grid gap-x-8 md:grid-cols-2">
                  <article class="border-(--ui-border)/50 flex min-w-0 items-center gap-3 border-b py-4 border-default">
                    <div class="bg-default flex size-9 shrink-0 items-center justify-center rounded-lg border shadow-xs border-default">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-[18px]" height="100%" width="100%">
                        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
                      </svg>
                    </div>
                    <div class="min-w-0 flex-1">
                      <h3 class="text-[13px] font-medium text-highlighted">OpenAI</h3>
                      <p class="text-muted mt-0.5 text-[11px] leading-4">Run reasoning and language models</p>
                    </div>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md h-7 shrink-0 gap-1 px-2 text-[11px]" aria-label="Connect" type="button" @click="openAction(&quot;Connect&quot;)">
                      Connect
                    </UButton>
                  </article>
                  <article class="border-(--ui-border)/50 flex min-w-0 items-center gap-3 border-b py-4 border-default">
                    <div class="bg-default flex size-9 shrink-0 items-center justify-center rounded-lg border shadow-xs border-default">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-[18px]" height="100%" width="100%">
                        <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z" />
                      </svg>
                    </div>
                    <div class="min-w-0 flex-1">
                      <h3 class="text-[13px] font-medium text-highlighted">Anthropic</h3>
                      <p class="text-muted mt-0.5 text-[11px] leading-4">Bring Claude into agent runs</p>
                    </div>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md h-7 shrink-0 gap-1 px-2 text-[11px]" aria-label="Connect" type="button" @click="openAction(&quot;Connect&quot;)">
                      Connect
                    </UButton>
                  </article>
                  <article class="border-(--ui-border)/50 flex min-w-0 items-center gap-3 border-b py-4 border-default">
                    <div class="bg-default flex size-9 shrink-0 items-center justify-center rounded-lg border shadow-xs border-default">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-[18px]" height="100%" width="100%">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </div>
                    <div class="min-w-0 flex-1">
                      <h3 class="text-[13px] font-medium text-highlighted">GitHub</h3>
                      <p class="text-muted mt-0.5 text-[11px] leading-4">Read repositories and review pull requests</p>
                    </div>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md h-7 shrink-0 gap-1 px-2 text-[11px] bg-(--ui-bg-muted)/60" aria-label="Connected" type="button" @click="openAction(&quot;Connected&quot;)">
                      <UIcon name="i-lucide-check" class="size-3" />
                      Connected
                    </UButton>
                  </article>
                  <article class="border-(--ui-border)/50 flex min-w-0 items-center gap-3 border-b py-4 border-default">
                    <div class="bg-default flex size-9 shrink-0 items-center justify-center rounded-lg border shadow-xs border-default">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-[18px]" height="100%" width="100%">
                        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
                      </svg>
                    </div>
                    <div class="min-w-0 flex-1">
                      <h3 class="text-[13px] font-medium text-highlighted">Slack</h3>
                      <p class="text-muted mt-0.5 text-[11px] leading-4">Search channels and deliver team updates</p>
                    </div>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md h-7 shrink-0 gap-1 px-2 text-[11px] bg-(--ui-bg-muted)/60" aria-label="Connected" type="button" @click="openAction(&quot;Connected&quot;)">
                      <UIcon name="i-lucide-check" class="size-3" />
                      Connected
                    </UButton>
                  </article>
                  <article class="border-(--ui-border)/50 flex min-w-0 items-center gap-3 border-b py-4 border-default">
                    <div class="bg-default flex size-9 shrink-0 items-center justify-center rounded-lg border shadow-xs border-default">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-[18px]" height="100%" width="100%">
                        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
                      </svg>
                    </div>
                    <div class="min-w-0 flex-1">
                      <h3 class="text-[13px] font-medium text-highlighted">Figma</h3>
                      <p class="text-muted mt-0.5 text-[11px] leading-4">Inspect design files and component libraries</p>
                    </div>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md h-7 shrink-0 gap-1 px-2 text-[11px] bg-(--ui-bg-muted)/60" aria-label="Connected" type="button" @click="openAction(&quot;Connected&quot;)">
                      <UIcon name="i-lucide-check" class="size-3" />
                      Connected
                    </UButton>
                  </article>
                  <article class="border-(--ui-border)/50 flex min-w-0 items-center gap-3 border-b py-4 border-default">
                    <div class="bg-default flex size-9 shrink-0 items-center justify-center rounded-lg border shadow-xs border-default">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-[18px]" height="100%" width="100%">
                        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
                      </svg>
                    </div>
                    <div class="min-w-0 flex-1">
                      <h3 class="text-[13px] font-medium text-highlighted">Notion</h3>
                      <p class="text-muted mt-0.5 text-[11px] leading-4">Find team knowledge and project notes</p>
                    </div>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md h-7 shrink-0 gap-1 px-2 text-[11px] bg-(--ui-bg-muted)/60" aria-label="Connected" type="button" @click="openAction(&quot;Connected&quot;)">
                      <UIcon name="i-lucide-check" class="size-3" />
                      Connected
                    </UButton>
                  </article>
                  <article class="border-(--ui-border)/50 flex min-w-0 items-center gap-3 border-b py-4 border-default">
                    <div class="bg-default flex size-9 shrink-0 items-center justify-center rounded-lg border shadow-xs border-default">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-[18px]" height="100%" width="100%">
                        <path d="M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z" />
                      </svg>
                    </div>
                    <div class="min-w-0 flex-1">
                      <h3 class="text-[13px] font-medium text-highlighted">Linear</h3>
                      <p class="text-muted mt-0.5 text-[11px] leading-4">Track issues, cycles, and product decisions</p>
                    </div>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md h-7 shrink-0 gap-1 px-2 text-[11px]" aria-label="Connect" type="button" @click="openAction(&quot;Connect&quot;)">
                      Connect
                    </UButton>
                  </article>
                  <article class="border-(--ui-border)/50 flex min-w-0 items-center gap-3 border-b py-4 border-default">
                    <div class="bg-default flex size-9 shrink-0 items-center justify-center rounded-lg border shadow-xs border-default">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-[18px]" height="100%" width="100%">
                        <path d="M24 22.525H0l12-21.05 12 21.05z" />
                      </svg>
                    </div>
                    <div class="min-w-0 flex-1">
                      <h3 class="text-[13px] font-medium text-highlighted">Vercel</h3>
                      <p class="text-muted mt-0.5 text-[11px] leading-4">Inspect deployments and preview builds</p>
                    </div>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md h-7 shrink-0 gap-1 px-2 text-[11px]" aria-label="Connect" type="button" @click="openAction(&quot;Connect&quot;)">
                      Connect
                    </UButton>
                  </article>
                </div>
              </section>
              <section aria-label="Explore more connections">
                <h2 class="text-muted mb-3 text-xs font-medium text-highlighted">Explore more connections</h2>
                <div class="grid gap-x-8 md:grid-cols-2">
                  <article class="border-(--ui-border)/50 flex min-w-0 items-center gap-3 border-b py-4 border-default">
                    <div class="bg-default flex size-9 shrink-0 items-center justify-center rounded-lg border shadow-xs border-default">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-[18px]" height="100%" width="100%">
                        <path d="M12.01 1.485c-2.082 0-3.754.02-3.743.047.01.02 1.708 3.001 3.774 6.62l3.76 6.574h3.76c2.081 0 3.753-.02 3.742-.047-.005-.02-1.708-3.001-3.775-6.62l-3.76-6.574zm-4.76 1.73a789.828 789.861 0 0 0-3.63 6.319L0 15.868l1.89 3.298 1.885 3.297 3.62-6.335 3.618-6.33-1.88-3.287C8.1 4.704 7.255 3.22 7.25 3.214zm2.259 12.653-.203.348c-.114.198-.96 1.672-1.88 3.287a423.93 423.948 0 0 1-1.698 2.97c-.01.026 3.24.042 7.222.042h7.244l1.796-3.157c.992-1.734 1.85-3.23 1.906-3.323l.104-.167h-7.249z" />
                      </svg>
                    </div>
                    <div class="min-w-0 flex-1">
                      <h3 class="text-[13px] font-medium text-highlighted">Google Drive</h3>
                      <p class="text-muted mt-0.5 text-[11px] leading-4">Search documents in selected folders</p>
                    </div>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md h-7 shrink-0 gap-1 px-2 text-[11px] bg-(--ui-bg-muted)/60" aria-label="Connected" type="button" @click="openAction(&quot;Connected&quot;)">
                      <UIcon name="i-lucide-check" class="size-3" />
                      Connected
                    </UButton>
                  </article>
                  <article class="border-(--ui-border)/50 flex min-w-0 items-center gap-3 border-b py-4 border-default">
                    <div class="bg-default flex size-9 shrink-0 items-center justify-center rounded-lg border shadow-xs border-default">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-[18px]" height="100%" width="100%">
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                      </svg>
                    </div>
                    <div class="min-w-0 flex-1">
                      <h3 class="text-[13px] font-medium text-highlighted">Gmail</h3>
                      <p class="text-muted mt-0.5 text-[11px] leading-4">Read threads and prepare draft replies</p>
                    </div>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md h-7 shrink-0 gap-1 px-2 text-[11px]" aria-label="Connect" type="button" @click="openAction(&quot;Connect&quot;)">
                      Connect
                    </UButton>
                  </article>
                  <article class="border-(--ui-border)/50 flex min-w-0 items-center gap-3 border-b py-4 border-default">
                    <div class="bg-default flex size-9 shrink-0 items-center justify-center rounded-lg border shadow-xs border-default">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-[18px]" height="100%" width="100%">
                        <path d="M18.316 5.684H24v12.632h-5.684V5.684zM5.684 24h12.632v-5.684H5.684V24zM18.316 5.684V0H1.895A1.894 1.894 0 0 0 0 1.895v16.421h5.684V5.684h12.632zm-7.207 6.25v-.065c.272-.144.5-.349.687-.617s.279-.595.279-.982c0-.379-.099-.72-.3-1.025a2.05 2.05 0 0 0-.832-.714 2.703 2.703 0 0 0-1.197-.257c-.6 0-1.094.156-1.481.467-.386.311-.65.671-.793 1.078l1.085.452c.086-.249.224-.461.413-.633.189-.172.445-.257.767-.257.33 0 .602.088.816.264a.86.86 0 0 1 .322.703c0 .33-.12.589-.36.778-.24.19-.535.284-.886.284h-.567v1.085h.633c.407 0 .748.109 1.02.327.272.218.407.499.407.843 0 .336-.129.614-.387.832s-.565.327-.924.327c-.351 0-.651-.103-.897-.311-.248-.208-.422-.502-.521-.881l-1.096.452c.178.616.505 1.082.977 1.401.472.319.984.478 1.538.477a2.84 2.84 0 0 0 1.293-.291c.382-.193.684-.458.902-.794.218-.336.327-.72.327-1.149 0-.429-.115-.797-.344-1.105a2.067 2.067 0 0 0-.881-.689zm2.093-1.931l.602.913L15 10.045v5.744h1.187V8.446h-.827l-2.158 1.557zM22.105 0h-3.289v5.184H24V1.895A1.894 1.894 0 0 0 22.105 0zm-3.289 23.5l4.684-4.684h-4.684V23.5zM0 22.105C0 23.152.848 24 1.895 24h3.289v-5.184H0v3.289z" />
                      </svg>
                    </div>
                    <div class="min-w-0 flex-1">
                      <h3 class="text-[13px] font-medium text-highlighted">Google Calendar</h3>
                      <p class="text-muted mt-0.5 text-[11px] leading-4">Read events and find a time to meet</p>
                    </div>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md h-7 shrink-0 gap-1 px-2 text-[11px]" aria-label="Connect" type="button" @click="openAction(&quot;Connect&quot;)">
                      Connect
                    </UButton>
                  </article>
                  <article class="border-(--ui-border)/50 flex min-w-0 items-center gap-3 border-b py-4 border-default">
                    <div class="bg-default flex size-9 shrink-0 items-center justify-center rounded-lg border shadow-xs border-default">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" x="0px" y="0px" viewBox="0 0 48 48" class="size-[18px]" height="100%" width="100%">
                        <path fill="var(--ui-warning)" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                        <path fill="var(--ui-warning)" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                        <path fill="var(--ui-success)" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                        <path fill="var(--ui-info)" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                      </svg>
                    </div>
                    <div class="min-w-0 flex-1">
                      <h3 class="text-[13px] font-medium text-highlighted">Google Gemini</h3>
                      <p class="text-muted mt-0.5 text-[11px] leading-4">Use multimodal models in your workspace</p>
                    </div>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md h-7 shrink-0 gap-1 px-2 text-[11px]" aria-label="Connect" type="button" @click="openAction(&quot;Connect&quot;)">
                      Connect
                    </UButton>
                  </article>
                  <article class="border-(--ui-border)/50 flex min-w-0 items-center gap-3 border-b py-4 border-default">
                    <div class="bg-default flex size-9 shrink-0 items-center justify-center rounded-lg border shadow-xs border-default">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-[18px]" height="100%" width="100%">
                        <path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z" />
                      </svg>
                    </div>
                    <div class="min-w-0 flex-1">
                      <h3 class="text-[13px] font-medium text-highlighted">GitLab</h3>
                      <p class="text-muted mt-0.5 text-[11px] leading-4">Review merge requests and pipeline results</p>
                    </div>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md h-7 shrink-0 gap-1 px-2 text-[11px]" aria-label="Connect" type="button" @click="openAction(&quot;Connect&quot;)">
                      Connect
                    </UButton>
                  </article>
                  <article class="border-(--ui-border)/50 flex min-w-0 items-center gap-3 border-b py-4 border-default">
                    <div class="bg-default flex size-9 shrink-0 items-center justify-center rounded-lg border shadow-xs border-default">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-[18px]" height="100%" width="100%">
                        <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.001 1.001 0 0 0 23.013 0Z" />
                      </svg>
                    </div>
                    <div class="min-w-0 flex-1">
                      <h3 class="text-[13px] font-medium text-highlighted">Jira</h3>
                      <p class="text-muted mt-0.5 text-[11px] leading-4">Find tickets and follow sprint progress</p>
                    </div>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md h-7 shrink-0 gap-1 px-2 text-[11px]" aria-label="Connect" type="button" @click="openAction(&quot;Connect&quot;)">
                      Connect
                    </UButton>
                  </article>
                  <article class="border-(--ui-border)/50 flex min-w-0 items-center gap-3 border-b py-4 border-default">
                    <div class="bg-default flex size-9 shrink-0 items-center justify-center rounded-lg border shadow-xs border-default">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-[18px]" height="100%" width="100%">
                        <path d="M12.914 2.904V16.29L24 2.905H12.914zM0 2.906C0 5.966 2.483 8.45 5.543 8.45s5.542-2.484 5.543-5.544H0zm11.086 4.807L0 21.096h11.086V7.713zm7.37 7.84c-3.063 0-5.542 2.48-5.542 5.543H24c0-3.06-2.48-5.543-5.543-5.543z" />
                      </svg>
                    </div>
                    <div class="min-w-0 flex-1">
                      <h3 class="text-[13px] font-medium text-highlighted">Zendesk</h3>
                      <p class="text-muted mt-0.5 text-[11px] leading-4">Surface patterns in customer conversations</p>
                    </div>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md h-7 shrink-0 gap-1 px-2 text-[11px] bg-(--ui-bg-muted)/60" aria-label="Connected" type="button" @click="openAction(&quot;Connected&quot;)">
                      <UIcon name="i-lucide-check" class="size-3" />
                      Connected
                    </UButton>
                  </article>
                  <article class="border-(--ui-border)/50 flex min-w-0 items-center gap-3 border-b py-4 border-default">
                    <div class="bg-default flex size-9 shrink-0 items-center justify-center rounded-lg border shadow-xs border-default">
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-[18px]" height="100%" width="100%">
                        <path d="M13.91 2.505c-.873-1.448-2.972-1.448-3.844 0L6.904 7.92a15.478 15.478 0 0 1 8.53 12.811h-2.221A13.301 13.301 0 0 0 5.784 9.814l-2.926 5.06a7.65 7.65 0 0 1 4.435 5.848H2.194a.365.365 0 0 1-.298-.534l1.413-2.402a5.16 5.16 0 0 0-1.614-.913L.296 19.275a2.182 2.182 0 0 0 .812 2.999 2.24 2.24 0 0 0 1.086.288h6.983a9.322 9.322 0 0 0-3.845-8.318l1.11-1.922a11.47 11.47 0 0 1 4.95 10.24h5.915a17.242 17.242 0 0 0-7.885-15.28l2.244-3.845a.37.37 0 0 1 .504-.13c.255.14 9.75 16.708 9.928 16.9a.365.365 0 0 1-.327.543h-2.287c.029.612.029 1.223 0 1.831h2.297a2.206 2.206 0 0 0 1.922-3.31z" />
                      </svg>
                    </div>
                    <div class="min-w-0 flex-1">
                      <h3 class="text-[13px] font-medium text-highlighted">Sentry</h3>
                      <p class="text-muted mt-0.5 text-[11px] leading-4">Read errors and investigate affected releases</p>
                    </div>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default rounded-md h-7 shrink-0 gap-1 px-2 text-[11px]" aria-label="Connect" type="button" @click="openAction(&quot;Connect&quot;)">
                      Connect
                    </UButton>
                  </article>
                </div>
              </section>
            </div>
            <p class="text-muted mt-9 text-[11px]">Demo connections · No external account is connected. Changes last while this screen is open.</p>
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
