<!-- Page: /ai-chat/model-detail | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Model details · Blocks Admin" })

const toast = useToast()

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "TypeScript",
    "value": "0"
  },
  {
    "label": "cURL",
    "value": "1"
  }
]

const tabs2Active = ref("0")

const tabs2Items = [
  {
    "label": "Output",
    "value": "0"
  },
  {
    "label": "JSON",
    "value": "1"
  }
]

const tabs3Active = ref("0")

const tabs3Items = [
  {
    "label": "Parameters",
    "value": "0"
  },
  {
    "label": "JSON schema",
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

async function copyValue(value: string) {
  await navigator.clipboard.writeText(value)
  toast.add({ title: 'Copied to clipboard', color: 'success' })
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/model-detail">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="min-h-0 flex-1 overflow-y-auto">
        <div class="mx-auto max-w-[1480px] px-5 py-8 sm:px-8 lg:px-10">
          <header class="border-b pb-7 border-default">
            <div class="flex items-center gap-3">
              <div class="flex size-11 shrink-0 items-center justify-center rounded-lg border border-default">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="size-6" height="100%" width="100%">
                  <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z" />
                </svg>
              </div>
              <div>
                <p class="text-muted mb-1 text-xs">Anthropic</p>
                <h1 class="text-2xl font-semibold tracking-tight text-highlighted">Claude Fable 5.1</h1>
              </div>
            </div>
            <UButton color="neutral" variant="ghost" class="text-muted hover:text-highlighted mt-4 inline-flex max-w-full items-center gap-2 rounded-sm text-xs focus-visible:outline-2 focus-visible:outline-offset-4" aria-label="anthropic/claude-fable-5.1" type="button" @click="openAction(&quot;anthropic/claude-fable-5.1&quot;)">
              <code class="truncate">anthropic/claude-fable-5.1</code>
              <UIcon name="i-lucide-copy" class="size-3.5 shrink-0" />
            </UButton>
            <p class="text-muted mt-3 max-w-3xl text-sm leading-6">Built for complex coding, long-running agent workflows, and knowledge work. A million-token context window keeps large codebases and lengthy conversations within reach.</p>
            <div class="text-muted mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs">
              <span class="inline-flex items-center gap-1.5">
                <UIcon name="i-lucide-message-square" class="size-3.5" />
                Text generation
              </span>
              <span class="inline-flex items-center gap-1.5">
                <UIcon name="i-lucide-eye" class="size-3.5" />
                Vision
              </span>
              <span class="inline-flex items-center gap-1.5">
                <UIcon name="i-lucide-braces" class="size-3.5" />
                Reasoning
              </span>
              <span class="inline-flex items-center gap-1.5">
                <UIcon name="i-lucide-wrench" class="size-3.5" />
                Tool use
              </span>
              <span class="inline-flex items-center gap-1.5">
                <UIcon name="i-lucide-file-text" class="size-3.5" />
                File input
              </span>
            </div>
          </header>
          <div class="grid min-w-0 gap-9 pt-7 lg:grid-cols-[minmax(0,1fr)_240px] xl:grid-cols-[minmax(0,1fr)_260px] xl:gap-10">
            <div class="min-w-0 space-y-9">
              <section>
                <div class="mb-4 flex items-center justify-between gap-3">
                  <h2 id="quickstart-title" class="text-base font-semibold text-highlighted">Quick start</h2>
                  <span class="text-muted text-xs">Sample requests &amp; responses</span>
                </div>
                <div class="mb-5 grid gap-2 sm:grid-cols-3" role="group" aria-label="Request examples">
                  <UButton color="neutral" variant="outline" class="relative rounded-lg border p-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 border-(--ui-text-highlighted)/35 bg-(--ui-bg-muted)/40 border-default" aria-label="System instructionsGive your assistant a role and context." type="button" @click="openAction(&quot;System instructionsGive your assistant a role and context.&quot;)">
                    <span class="flex items-center justify-between gap-2 text-xs font-medium">
                      System instructions
                      <UIcon name="i-lucide-check" class="size-3.5 shrink-0" />
                    </span>
                    <span class="text-muted mt-1.5 block text-xs leading-5">Give your assistant a role and context.</span>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="relative rounded-lg border p-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-(--ui-bg-muted)/30 border-default" aria-label="Multi-turn conversationBuild on the context of earlier messages." type="button" @click="openAction(&quot;Multi-turn conversationBuild on the context of earlier messages.&quot;)">
                    <span class="flex items-center justify-between gap-2 text-xs font-medium">Multi-turn conversation</span>
                    <span class="text-muted mt-1.5 block text-xs leading-5">Build on the context of earlier messages.</span>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="relative rounded-lg border p-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-(--ui-bg-muted)/30 border-default" aria-label="Streaming responseDeliver the answer as it’s generated." type="button" @click="openAction(&quot;Streaming responseDeliver the answer as it’s generated.&quot;)">
                    <span class="flex items-center justify-between gap-2 text-xs font-medium">Streaming response</span>
                    <span class="text-muted mt-1.5 block text-xs leading-5">Deliver the answer as it’s generated.</span>
                  </UButton>
                </div>
                <div class="grid min-w-0 overflow-hidden rounded-lg border 2xl:grid-cols-2 border-default">
                  <div class="min-w-0 border-b 2xl:border-r 2xl:border-b-0 border-default">
                    <div data-orientation="horizontal">
                      <div class="bg-default flex min-w-0 flex-col overflow-hidden rounded-none border-0">
                        <div class="bg-(--ui-bg-muted)/25 flex shrink-0 items-center justify-between gap-2 border-b h-12 px-3 border-default">
                          <div class="flex items-center gap-3">
                            <span class="text-xs font-medium">Request</span>
                            <UTabs v-model="tabs1Active" :items="tabs1Items" :content="false" color="primary" variant="link" class="text-muted inline-flex items-center justify-center rounded-lg h-7 bg-transparent p-0" data-orientation="horizontal" style="outline:none" />
                          </div>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted size-7" aria-label="Copy code" type="button" @click="copyValue(&quot;Copy code&quot;)">
                            <UIcon name="i-lucide-copy" class="size-4" />
                          </UButton>
                        </div>
                        <div class="bg-default min-h-0 min-w-0 flex-1">
                          <diffs-container class="block min-h-56 min-w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="min-w-0">
                    <div data-orientation="horizontal">
                      <div class="bg-(--ui-bg-muted)/25 flex h-12 items-center justify-between gap-2 border-b px-3 border-default">
                        <div class="flex items-center gap-3">
                          <span class="text-xs font-medium">Response</span>
                          <UTabs v-model="tabs2Active" :items="tabs2Items" :content="false" color="primary" variant="link" class="text-muted inline-flex items-center justify-center rounded-lg h-7 bg-transparent p-0" data-orientation="horizontal" style="outline:none" />
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Copy sample response" type="button" @click="copyValue(&quot;Copy sample response&quot;)">
                          <UIcon name="i-lucide-copy" class="size-3.5" />
                        </UButton>
                      </div>
                      <div data-orientation="horizontal" id="radix-_R_2dddbsnpfknmlb_-content-output" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden m-0 h-[360px] overflow-auto p-5" style="animation-duration:0s">
                        <p class="text-sm leading-6 whitespace-pre-wrap">Northstar · Account handoff

Growth plan · 24 seats
Account owner: Maya
Kickoff: Thursday

Next steps
1. Confirm the SSO requirements with Northstar’s IT contact.
2. Ask Maya to share the kickoff agenda before Thursday.
3. Track SSO setup as the remaining onboarding dependency.

The IT contact and target activation date weren’t included in the handoff. Confirm both before scheduling setup.</p>
                      </div>
                      <div data-orientation="horizontal" id="radix-_R_2dddbsnpfknmlb_-content-json" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden m-0" />
                    </div>
                  </div>
                  <div class="bg-(--ui-bg-muted)/15 flex flex-wrap items-center justify-between gap-3 border-t px-3 py-2.5 2xl:col-span-2 border-default">
                    <span class="text-muted text-xs">Illustrative output · No API request is sent</span>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Replay sample" type="button" @click="openAction(&quot;Replay sample&quot;)">
                      <UIcon name="i-lucide-play" class="size-3" />
                      Replay sample
                    </UButton>
                  </div>
                </div>
                <p class="text-muted mt-3 text-xs leading-5">Set API_BASE_URL and API_KEY to use these examples with your workspace’s Messages API.</p>
              </section>
              <section>
                <div data-orientation="horizontal">
                  <div class="flex flex-wrap items-center justify-between gap-3 border-b pb-3 border-default">
                    <h2 id="api-title" class="text-base font-semibold text-highlighted">API reference</h2>
                    <UTabs v-model="tabs3Active" :items="tabs3Items" :content="false" color="primary" variant="link" class="bg-muted text-muted inline-flex h-9 items-center justify-center rounded-lg p-1" data-orientation="horizontal" style="outline:none" />
                  </div>
                  <div data-orientation="horizontal" id="radix-_R_2ddbsnpfknmlb_-content-parameters" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0" style="animation-duration:0s">
                    <div class="grid gap-7 lg:grid-cols-2">
                      <div>
                        <h3 class="py-4 text-sm font-medium text-highlighted">Input</h3>
                        <div class="divide-y">
                          <div class="py-3 first:pt-0">
                            <div class="flex flex-wrap items-center gap-2">
                              <code class="text-xs font-medium">messages</code>
                              <span class="text-muted text-xs">object[]</span>
                              <span class="text-muted ml-auto text-[11px]">Required</span>
                            </div>
                            <p class="text-muted mt-1.5 text-xs leading-5">Conversation history with a role and content for each message.</p>
                          </div>
                          <div class="py-3 first:pt-0">
                            <div class="flex flex-wrap items-center gap-2">
                              <code class="text-xs font-medium">max_tokens</code>
                              <span class="text-muted text-xs">number</span>
                              <span class="text-muted ml-auto text-[11px]">Required</span>
                            </div>
                            <p class="text-muted mt-1.5 text-xs leading-5">Maximum number of tokens to generate in the response.</p>
                          </div>
                          <div class="py-3 first:pt-0">
                            <div class="flex flex-wrap items-center gap-2">
                              <code class="text-xs font-medium">system</code>
                              <span class="text-muted text-xs">string</span>
                            </div>
                            <p class="text-muted mt-1.5 text-xs leading-5">Instructions that define the assistant’s role and behavior.</p>
                          </div>
                          <div class="py-3 first:pt-0">
                            <div class="flex flex-wrap items-center gap-2">
                              <code class="text-xs font-medium">stream</code>
                              <span class="text-muted text-xs">boolean</span>
                            </div>
                            <p class="text-muted mt-1.5 text-xs leading-5">Return incremental output as server-sent events.</p>
                          </div>
                          <div class="py-3 first:pt-0">
                            <div class="flex flex-wrap items-center gap-2">
                              <code class="text-xs font-medium">metadata</code>
                              <span class="text-muted text-xs">object</span>
                            </div>
                            <p class="text-muted mt-1.5 text-xs leading-5">Optional metadata associated with the request.</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 class="py-4 text-sm font-medium text-highlighted">Output</h3>
                        <div class="divide-y">
                          <div class="py-3 first:pt-0">
                            <div class="flex items-center gap-2">
                              <code class="text-xs font-medium">id</code>
                              <span class="text-muted text-xs">string</span>
                            </div>
                            <p class="text-muted mt-1.5 text-xs leading-5">Unique identifier for the generated message.</p>
                          </div>
                          <div class="py-3 first:pt-0">
                            <div class="flex items-center gap-2">
                              <code class="text-xs font-medium">content</code>
                              <span class="text-muted text-xs">object[]</span>
                            </div>
                            <p class="text-muted mt-1.5 text-xs leading-5">The text and other content blocks returned by the model.</p>
                          </div>
                          <div class="py-3 first:pt-0">
                            <div class="flex items-center gap-2">
                              <code class="text-xs font-medium">stop_reason</code>
                              <span class="text-muted text-xs">string | null</span>
                            </div>
                            <p class="text-muted mt-1.5 text-xs leading-5">Why the model stopped, such as end_turn or max_tokens.</p>
                          </div>
                          <details class="group py-3">
                            <summary class="flex cursor-pointer list-none items-center gap-2 text-xs">
                              <code class="font-medium">usage</code>
                              <span class="text-muted">object</span>
                              <UIcon name="i-lucide-chevron-down" class="ml-auto size-3.5 transition-transform group-open:rotate-180" />
                            </summary>
                            <p class="text-muted mt-1.5 text-xs leading-5">Token counts for the completed request.</p>
                            <div class="mt-3 space-y-3 border-l pl-3 border-default">
                              <div class="flex justify-between text-xs">
                                <code>input_tokens</code>
                                <span class="text-muted">integer</span>
                              </div>
                              <div class="flex justify-between text-xs">
                                <code>output_tokens</code>
                                <span class="text-muted">integer</span>
                              </div>
                            </div>
                          </details>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-orientation="horizontal" id="radix-_R_2ddbsnpfknmlb_-content-schema" class="ring-offset-background focus-visible:ring-accented mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden" />
                </div>
              </section>
            </div>
            <aside class="min-w-0 space-y-7 border-t pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-7 border-default">
              <section>
                <h2 class="text-sm font-semibold text-highlighted">Pricing</h2>
                <p class="text-muted mt-1 text-xs">USD per 1M tokens</p>
                <dl class="mt-3 divide-y">
                  <div class="flex items-center justify-between py-3 text-sm">
                    <dt class="text-muted">Input</dt>
                    <dd class="font-medium tabular-nums">$10.00</dd>
                  </div>
                  <div class="flex items-center justify-between py-3 text-sm">
                    <dt class="text-muted">Output</dt>
                    <dd class="font-medium tabular-nums">$50.00</dd>
                  </div>
                  <div class="flex items-center justify-between py-3 text-sm">
                    <dt class="text-muted">Cache read</dt>
                    <dd class="font-medium tabular-nums">$0.25</dd>
                  </div>
                  <div class="flex items-center justify-between py-3 text-sm">
                    <dt class="text-muted">Cache write</dt>
                    <dd class="font-medium tabular-nums">$12.50</dd>
                  </div>
                </dl>
              </section>
              <section class="border-t pt-6 border-default">
                <h2 class="text-sm font-semibold text-highlighted">Model specifications</h2>
                <dl class="mt-4 space-y-4">
                  <div>
                    <dt class="text-muted text-xs">Context window</dt>
                    <dd class="mt-1 text-sm">1M tokens</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-xs">Maximum output</dt>
                    <dd class="mt-1 text-sm">128K tokens</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-xs">Adaptive thinking</dt>
                    <dd class="mt-1 text-sm">Supported</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-xs">Architecture</dt>
                    <dd class="mt-1 text-sm">Transformer</dd>
                  </div>
                  <div>
                    <dt class="text-muted text-xs">API format</dt>
                    <dd class="mt-1 text-sm">Messages API</dd>
                  </div>
                </dl>
              </section>
              <section class="border-t pt-6 border-default">
                <h2 class="mb-3 text-sm font-semibold text-highlighted">Resources</h2>
                <NuxtLink class="text-muted hover:text-highlighted flex items-center justify-between gap-2 py-2 text-xs" to="/ai-chat/model-catalog">
                  Model catalog
                  <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                </NuxtLink>
                <NuxtLink class="text-muted hover:text-highlighted flex items-center justify-between gap-2 py-2 text-xs" to="/ai-chat/model-pricing">
                  Compare pricing
                  <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                </NuxtLink>
                <NuxtLink class="text-muted hover:text-highlighted flex items-center justify-between gap-2 py-2 text-xs" to="/ai-chat/api-keys">
                  Manage API keys
                  <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                </NuxtLink>
              </section>
              <p class="text-muted border-t pt-4 text-[11px] leading-5 border-default">Pricing snapshot · 19 September 2026. Rates may vary by provider.</p>
            </aside>
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
