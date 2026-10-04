<!-- Page: /ai-chat/tokenizer | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Tokenizer · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "o200kBase": "o200k_base",
  "tokenizerInput": "You are a helpful support assistant. Answer the customer’s question using the provided knowledge base. If you’re unsure, ask a clarifying question.\n\nCustomer: How do I invite my team to a workspace?",
  "supportPrompt": "Support prompt",
  "tokenWhitespace": false,
  "tokenBudget": 4096
})

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "Text → tokens",
    "value": "0"
  },
  {
    "label": "Tokens → text",
    "value": "1"
  }
]

const tabs2Active = ref("0")

const tabs2Items = [
  {
    "label": "Text",
    "value": "0"
  },
  {
    "label": "Token IDs",
    "value": "1"
  },
  {
    "label": "JSON",
    "value": "2"
  }
]

const o200kBaseOptions = [
  "o200k_base",
  "cl100k_base"
]

const supportPromptOptions = [
  "Support prompt",
  "Code",
  "Multilingual",
  "Structured data"
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

function exportCsv() {
  const rows = Object.entries(form).map(([name, value]) => [name, String(value)])
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "ai-chat-tokenizer.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/tokenizer">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="min-h-0 flex-1 overflow-y-auto">
        <div class="mx-auto flex flex-col px-4 sm:px-8 gap-6 py-6 sm:py-8 max-w-7xl">
          <div class="flex flex-wrap gap-4 items-start justify-between">
            <div class="flex flex-col gap-1">
              <h1 class="text-2xl font-semibold tracking-tight text-highlighted">Tokenizer</h1>
              <p class="text-muted max-w-2xl text-sm">See how text becomes tokens. Compare encodings, inspect token IDs, and plan how much context your prompt needs.</p>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Export analysis" type="button" @click="exportCsv()">
                <UIcon name="i-lucide-download" class="size-4" />
                Export analysis
              </UButton>
            </div>
          </div>
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="flex flex-wrap items-center gap-3">
              <USelect v-model="form.o200kBase" :items="o200kBaseOptions" aria-label="Encoding" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
              <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted border-default">
                <span class="bg-success mr-1.5 size-1.5 rounded-full" />
                Local BPE tokenizer
              </div>
            </div>
            <span class="text-muted text-xs">Plain text only · no API calls</span>
          </div>
          <div class="grid grid-cols-3 gap-3 sm:gap-4">
            <!-- Card 1: 41 -->
            <UCard class="rounded-lg shadow-none" :ui="{ body: 'contents' }">
              <div class="flex space-y-1.5 p-6 flex-row items-center justify-between px-3 pt-3 pb-2 sm:px-5 sm:pt-5 sm:pb-3">
                <div class="text-muted text-[11px] sm:text-sm">Tokens</div>
                <UIcon name="i-lucide-hash" class="text-muted hidden size-4 sm:block" />
              </div>
              <div class="p-6 pt-0 flex flex-col gap-1 px-3 pb-3 sm:px-5 sm:pb-5">
                <p class="text-xl font-semibold tracking-tight tabular-nums sm:text-3xl text-highlighted">41</p>
                <p class="text-muted hidden text-xs sm:block">Exact count for o200k_base</p>
              </div>
            </UCard>
            <!-- Card 2: 198 -->
            <UCard class="rounded-lg shadow-none" :ui="{ body: 'contents' }">
              <div class="flex space-y-1.5 p-6 flex-row items-center justify-between px-3 pt-3 pb-2 sm:px-5 sm:pt-5 sm:pb-3">
                <div class="text-muted text-[11px] sm:text-sm">Characters</div>
                <UIcon name="i-lucide-text-initial" class="text-muted hidden size-4 sm:block" />
              </div>
              <div class="p-6 pt-0 flex flex-col gap-1 px-3 pb-3 sm:px-5 sm:pb-5">
                <p class="text-xl font-semibold tracking-tight tabular-nums sm:text-3xl text-highlighted">198</p>
                <p class="text-muted hidden text-xs sm:block">Unicode code points, including spaces</p>
              </div>
            </UCard>
            <!-- Card 3: 4.83 -->
            <UCard class="rounded-lg shadow-none" :ui="{ body: 'contents' }">
              <div class="flex space-y-1.5 p-6 flex-row items-center justify-between px-3 pt-3 pb-2 sm:px-5 sm:pt-5 sm:pb-3">
                <div class="text-muted text-[11px] sm:text-sm">Chars / token</div>
                <UIcon name="i-lucide-type" class="text-muted hidden size-4 sm:block" />
              </div>
              <div class="p-6 pt-0 flex flex-col gap-1 px-3 pb-3 sm:px-5 sm:pb-5">
                <p class="text-xl font-semibold tracking-tight tabular-nums sm:text-3xl text-highlighted">4.83</p>
                <p class="text-muted hidden text-xs sm:block">Varies with language and content</p>
              </div>
            </UCard>
          </div>
          <div class="flex min-w-0 flex-col gap-5">
            <div class="grid min-w-0 items-start gap-5 xl:grid-cols-2">
              <!-- Card 4: Input -->
              <UCard class="rounded-lg min-w-0 shadow-none" :ui="{ body: 'contents' }">
                <div class="space-y-1.5 p-6 flex flex-row flex-wrap items-center justify-between gap-3">
                  <div>
                    <div class="leading-none font-semibold tracking-tight">Input</div>
                    <div class="text-muted text-sm mt-1">Edit text to update the token breakdown.</div>
                  </div>
                  <div data-orientation="horizontal">
                    <UTabs v-model="tabs1Active" :items="tabs1Items" :content="false" color="primary" variant="link" class="bg-muted text-muted inline-flex h-9 items-center justify-center rounded-lg p-1" data-orientation="horizontal" style="outline:none" />
                  </div>
                </div>
                <div class="p-6 pt-0 flex flex-col gap-4">
                  <UFormField label="Text to tokenize" name="tokenizerInput" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                    <UTextarea v-model="form.tokenizerInput" :rows="4" placeholder="Type or paste text…" name="tokenizerInput" class="flex w-full rounded-md md:text-sm min-h-48 resize-y font-mono text-sm leading-7" :ui="{ base: 'h-full' }" />
                  </UFormField>
                  <div class="flex flex-wrap items-center justify-between gap-3">
                    <USelect v-model="form.supportPrompt" :items="supportPromptOptions" aria-label="Load example" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                    <div class="flex items-center gap-3">
                      <span class="text-muted text-xs tabular-nums">198 /20,000</span>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Clear" type="button" @click="openAction(&quot;Clear&quot;)">
                        Clear
                      </UButton>
                    </div>
                  </div>
                </div>
              </UCard>
              <!-- Card 5: Token breakdown -->
              <UCard class="rounded-lg min-w-0 shadow-none" :ui="{ body: 'contents' }">
                <div class="space-y-1.5 p-6 flex flex-row flex-wrap items-center justify-between gap-3">
                  <div>
                    <div class="leading-none font-semibold tracking-tight">Token breakdown</div>
                    <div class="text-muted text-sm mt-1">Hover or focus a token to inspect its ID and bytes.</div>
                  </div>
                  <div class="flex items-center gap-2">
                    <USwitch v-model="form.tokenWhitespace" aria-label="Toggle setting" />
                    <label for="token-whitespace" class="text-muted text-xs">Show whitespace</label>
                  </div>
                </div>
                <div class="p-6 pt-0 flex min-w-0 flex-col gap-4">
                  <UTabs v-model="tabs2Active" :items="tabs2Items" color="primary" variant="link" data-orientation="horizontal" data-slot="tabs" :ui="{ root: 'gap-4', list: 'justify-start', content: 'min-h-0' }">
                    <template #content="{ item }">
                      <template v-if="item.value === '0'">
                        <div data-orientation="horizontal" id="radix-_R_39tdbsnpfknmlb_-content-tokens" class="ring-offset-background focus-visible:ring-accented mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden bg-default rounded-xl border p-4 border-default" style="animation-duration: 0s;">
                          <div class="min-h-40 font-mono text-sm leading-9 break-words">
                            <UButton color="primary" variant="solid" title="Token 1 · 3575" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-primary text-inverted" aria-label="You" type="button" @click="openAction(&quot;You&quot;)">
                              You
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 2 · 553" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="are" type="button" @click="openAction(&quot;are&quot;)">
                               are
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 3 · 261" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="a" type="button" @click="openAction(&quot;a&quot;)">
                               a
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 4 · 10297" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="helpful" type="button" @click="openAction(&quot;helpful&quot;)">
                               helpful
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 5 · 2498" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="support" type="button" @click="openAction(&quot;support&quot;)">
                               support
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 6 · 29186" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="assistant" type="button" @click="openAction(&quot;assistant&quot;)">
                               assistant
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 7 · 13" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="." type="button" @click="openAction(&quot;.&quot;)">
                              .
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 8 · 30985" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="Answer" type="button" @click="openAction(&quot;Answer&quot;)">
                               Answer
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 9 · 290" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="the" type="button" @click="openAction(&quot;the&quot;)">
                               the
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 10 · 5989" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="customer" type="button" @click="openAction(&quot;customer&quot;)">
                               customer
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 11 · 802" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="’s" type="button" @click="openAction(&quot;’s&quot;)">
                              ’s
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 12 · 4928" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="question" type="button" @click="openAction(&quot;question&quot;)">
                               question
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 13 · 2360" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="using" type="button" @click="openAction(&quot;using&quot;)">
                               using
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 14 · 290" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="the" type="button" @click="openAction(&quot;the&quot;)">
                               the
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 15 · 5181" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="provided" type="button" @click="openAction(&quot;provided&quot;)">
                               provided
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 16 · 7124" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="knowledge" type="button" @click="openAction(&quot;knowledge&quot;)">
                               knowledge
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 17 · 3611" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="base" type="button" @click="openAction(&quot;base&quot;)">
                               base
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 18 · 13" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="." type="button" @click="openAction(&quot;.&quot;)">
                              .
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 19 · 1843" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="If" type="button" @click="openAction(&quot;If&quot;)">
                               If
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 20 · 481" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="you" type="button" @click="openAction(&quot;you&quot;)">
                               you
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 21 · 3462" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="’re" type="button" @click="openAction(&quot;’re&quot;)">
                              ’re
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 22 · 62827" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="unsure" type="button" @click="openAction(&quot;unsure&quot;)">
                               unsure
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 23 · 11" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="," type="button" @click="openAction(&quot;,&quot;)">
                              ,
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 24 · 3810" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="ask" type="button" @click="openAction(&quot;ask&quot;)">
                               ask
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 25 · 261" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="a" type="button" @click="openAction(&quot;a&quot;)">
                               a
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 26 · 16702" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="clar" type="button" @click="openAction(&quot;clar&quot;)">
                               clar
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 27 · 13700" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="ifying" type="button" @click="openAction(&quot;ifying&quot;)">
                              ifying
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 28 · 4928" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="question" type="button" @click="openAction(&quot;question&quot;)">
                               question
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 29 · 364" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="." type="button" @click="openAction(&quot;.&quot;)">
                              .


                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 30 · 12581" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="Customer" type="button" @click="openAction(&quot;Customer&quot;)">
                              Customer
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 31 · 25" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label=":" type="button" @click="openAction(&quot;:&quot;)">
                              :
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 32 · 3253" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="How" type="button" @click="openAction(&quot;How&quot;)">
                               How
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 33 · 621" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="do" type="button" @click="openAction(&quot;do&quot;)">
                               do
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 34 · 357" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="I" type="button" @click="openAction(&quot;I&quot;)">
                               I
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 35 · 26191" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="invite" type="button" @click="openAction(&quot;invite&quot;)">
                               invite
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 36 · 922" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="my" type="button" @click="openAction(&quot;my&quot;)">
                               my
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 37 · 3214" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="team" type="button" @click="openAction(&quot;team&quot;)">
                               team
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 38 · 316" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="to" type="button" @click="openAction(&quot;to&quot;)">
                               to
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 39 · 261" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="a" type="button" @click="openAction(&quot;a&quot;)">
                               a
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 40 · 49803" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="workspace" type="button" @click="openAction(&quot;workspace&quot;)">
                               workspace
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 41 · 30" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="?" type="button" @click="openAction(&quot;?&quot;)">
                              ?
                            </UButton>
                          </div>
                          <div aria-label="Selected token details" class="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-dashed pt-4 border-default">
                            <code class="bg-primary text-inverted max-w-full rounded-md px-2 py-1 text-xs break-all whitespace-pre-wrap">&quot;You&quot;</code>
                            <div class="flex min-w-0 flex-wrap items-center gap-3 text-xs">
                              <span class="text-muted">
                                ID
                                <code class="text-highlighted break-all">3575</code>
                              </span>
                              <div class="flex flex-wrap items-center gap-1">
                                <span class="text-muted mr-1">UTF-8</span>
                                <code class="bg-muted rounded px-1.5 py-1">59</code>
                                <code class="bg-muted rounded px-1.5 py-1">6f</code>
                                <code class="bg-muted rounded px-1.5 py-1">75</code>
                              </div>
                            </div>
                          </div>
                        </div>
                      </template>
                      <template v-if="item.value === '1'">
                        <div data-orientation="horizontal" id="radix-_R_39tdbsnpfknmlb_-content-tokens" class="ring-offset-background focus-visible:ring-accented mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden bg-default rounded-xl border p-4 border-default" style="animation-duration: 0s;">
                          <div class="min-h-40 font-mono text-sm leading-9 break-words">
                            <UButton color="primary" variant="solid" title="Token 1 · 3575" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-primary text-inverted" aria-label="You" type="button" @click="openAction(&quot;You&quot;)">
                              You
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 2 · 553" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="are" type="button" @click="openAction(&quot;are&quot;)">
                               are
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 3 · 261" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="a" type="button" @click="openAction(&quot;a&quot;)">
                               a
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 4 · 10297" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="helpful" type="button" @click="openAction(&quot;helpful&quot;)">
                               helpful
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 5 · 2498" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="support" type="button" @click="openAction(&quot;support&quot;)">
                               support
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 6 · 29186" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="assistant" type="button" @click="openAction(&quot;assistant&quot;)">
                               assistant
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 7 · 13" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="." type="button" @click="openAction(&quot;.&quot;)">
                              .
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 8 · 30985" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="Answer" type="button" @click="openAction(&quot;Answer&quot;)">
                               Answer
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 9 · 290" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="the" type="button" @click="openAction(&quot;the&quot;)">
                               the
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 10 · 5989" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="customer" type="button" @click="openAction(&quot;customer&quot;)">
                               customer
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 11 · 802" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="’s" type="button" @click="openAction(&quot;’s&quot;)">
                              ’s
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 12 · 4928" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="question" type="button" @click="openAction(&quot;question&quot;)">
                               question
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 13 · 2360" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="using" type="button" @click="openAction(&quot;using&quot;)">
                               using
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 14 · 290" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="the" type="button" @click="openAction(&quot;the&quot;)">
                               the
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 15 · 5181" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="provided" type="button" @click="openAction(&quot;provided&quot;)">
                               provided
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 16 · 7124" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="knowledge" type="button" @click="openAction(&quot;knowledge&quot;)">
                               knowledge
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 17 · 3611" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="base" type="button" @click="openAction(&quot;base&quot;)">
                               base
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 18 · 13" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="." type="button" @click="openAction(&quot;.&quot;)">
                              .
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 19 · 1843" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="If" type="button" @click="openAction(&quot;If&quot;)">
                               If
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 20 · 481" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="you" type="button" @click="openAction(&quot;you&quot;)">
                               you
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 21 · 3462" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="’re" type="button" @click="openAction(&quot;’re&quot;)">
                              ’re
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 22 · 62827" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="unsure" type="button" @click="openAction(&quot;unsure&quot;)">
                               unsure
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 23 · 11" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="," type="button" @click="openAction(&quot;,&quot;)">
                              ,
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 24 · 3810" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="ask" type="button" @click="openAction(&quot;ask&quot;)">
                               ask
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 25 · 261" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="a" type="button" @click="openAction(&quot;a&quot;)">
                               a
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 26 · 16702" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="clar" type="button" @click="openAction(&quot;clar&quot;)">
                               clar
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 27 · 13700" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="ifying" type="button" @click="openAction(&quot;ifying&quot;)">
                              ifying
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 28 · 4928" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="question" type="button" @click="openAction(&quot;question&quot;)">
                               question
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 29 · 364" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="." type="button" @click="openAction(&quot;.&quot;)">
                              .


                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 30 · 12581" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="Customer" type="button" @click="openAction(&quot;Customer&quot;)">
                              Customer
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 31 · 25" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label=":" type="button" @click="openAction(&quot;:&quot;)">
                              :
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 32 · 3253" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="How" type="button" @click="openAction(&quot;How&quot;)">
                               How
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 33 · 621" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="do" type="button" @click="openAction(&quot;do&quot;)">
                               do
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 34 · 357" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="I" type="button" @click="openAction(&quot;I&quot;)">
                               I
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 35 · 26191" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="invite" type="button" @click="openAction(&quot;invite&quot;)">
                               invite
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 36 · 922" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="my" type="button" @click="openAction(&quot;my&quot;)">
                               my
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 37 · 3214" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="team" type="button" @click="openAction(&quot;team&quot;)">
                               team
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 38 · 316" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="to" type="button" @click="openAction(&quot;to&quot;)">
                               to
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 39 · 261" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="a" type="button" @click="openAction(&quot;a&quot;)">
                               a
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 40 · 49803" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="workspace" type="button" @click="openAction(&quot;workspace&quot;)">
                               workspace
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 41 · 30" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="?" type="button" @click="openAction(&quot;?&quot;)">
                              ?
                            </UButton>
                          </div>
                          <div aria-label="Selected token details" class="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-dashed pt-4 border-default">
                            <code class="bg-primary text-inverted max-w-full rounded-md px-2 py-1 text-xs break-all whitespace-pre-wrap">&quot;You&quot;</code>
                            <div class="flex min-w-0 flex-wrap items-center gap-3 text-xs">
                              <span class="text-muted">
                                ID
                                <code class="text-highlighted break-all">3575</code>
                              </span>
                              <div class="flex flex-wrap items-center gap-1">
                                <span class="text-muted mr-1">UTF-8</span>
                                <code class="bg-muted rounded px-1.5 py-1">59</code>
                                <code class="bg-muted rounded px-1.5 py-1">6f</code>
                                <code class="bg-muted rounded px-1.5 py-1">75</code>
                              </div>
                            </div>
                          </div>
                        </div>
                      </template>
                      <template v-if="item.value === '2'">
                        <div data-orientation="horizontal" id="radix-_R_39tdbsnpfknmlb_-content-tokens" class="ring-offset-background focus-visible:ring-accented mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden bg-default rounded-xl border p-4 border-default" style="animation-duration: 0s;">
                          <div class="min-h-40 font-mono text-sm leading-9 break-words">
                            <UButton color="primary" variant="solid" title="Token 1 · 3575" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-primary text-inverted" aria-label="You" type="button" @click="openAction(&quot;You&quot;)">
                              You
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 2 · 553" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="are" type="button" @click="openAction(&quot;are&quot;)">
                               are
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 3 · 261" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="a" type="button" @click="openAction(&quot;a&quot;)">
                               a
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 4 · 10297" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="helpful" type="button" @click="openAction(&quot;helpful&quot;)">
                               helpful
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 5 · 2498" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="support" type="button" @click="openAction(&quot;support&quot;)">
                               support
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 6 · 29186" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="assistant" type="button" @click="openAction(&quot;assistant&quot;)">
                               assistant
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 7 · 13" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="." type="button" @click="openAction(&quot;.&quot;)">
                              .
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 8 · 30985" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="Answer" type="button" @click="openAction(&quot;Answer&quot;)">
                               Answer
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 9 · 290" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="the" type="button" @click="openAction(&quot;the&quot;)">
                               the
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 10 · 5989" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="customer" type="button" @click="openAction(&quot;customer&quot;)">
                               customer
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 11 · 802" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="’s" type="button" @click="openAction(&quot;’s&quot;)">
                              ’s
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 12 · 4928" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="question" type="button" @click="openAction(&quot;question&quot;)">
                               question
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 13 · 2360" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="using" type="button" @click="openAction(&quot;using&quot;)">
                               using
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 14 · 290" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="the" type="button" @click="openAction(&quot;the&quot;)">
                               the
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 15 · 5181" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="provided" type="button" @click="openAction(&quot;provided&quot;)">
                               provided
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 16 · 7124" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="knowledge" type="button" @click="openAction(&quot;knowledge&quot;)">
                               knowledge
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 17 · 3611" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="base" type="button" @click="openAction(&quot;base&quot;)">
                               base
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 18 · 13" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="." type="button" @click="openAction(&quot;.&quot;)">
                              .
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 19 · 1843" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="If" type="button" @click="openAction(&quot;If&quot;)">
                               If
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 20 · 481" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="you" type="button" @click="openAction(&quot;you&quot;)">
                               you
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 21 · 3462" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="’re" type="button" @click="openAction(&quot;’re&quot;)">
                              ’re
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 22 · 62827" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="unsure" type="button" @click="openAction(&quot;unsure&quot;)">
                               unsure
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 23 · 11" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="," type="button" @click="openAction(&quot;,&quot;)">
                              ,
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 24 · 3810" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="ask" type="button" @click="openAction(&quot;ask&quot;)">
                               ask
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 25 · 261" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="a" type="button" @click="openAction(&quot;a&quot;)">
                               a
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 26 · 16702" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="clar" type="button" @click="openAction(&quot;clar&quot;)">
                               clar
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 27 · 13700" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="ifying" type="button" @click="openAction(&quot;ifying&quot;)">
                              ifying
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 28 · 4928" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="question" type="button" @click="openAction(&quot;question&quot;)">
                               question
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 29 · 364" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="." type="button" @click="openAction(&quot;.&quot;)">
                              .


                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 30 · 12581" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="Customer" type="button" @click="openAction(&quot;Customer&quot;)">
                              Customer
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 31 · 25" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label=":" type="button" @click="openAction(&quot;:&quot;)">
                              :
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 32 · 3253" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="How" type="button" @click="openAction(&quot;How&quot;)">
                               How
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 33 · 621" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="do" type="button" @click="openAction(&quot;do&quot;)">
                               do
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 34 · 357" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="I" type="button" @click="openAction(&quot;I&quot;)">
                               I
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 35 · 26191" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="invite" type="button" @click="openAction(&quot;invite&quot;)">
                               invite
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 36 · 922" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="my" type="button" @click="openAction(&quot;my&quot;)">
                               my
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 37 · 3214" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="team" type="button" @click="openAction(&quot;team&quot;)">
                               team
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 38 · 316" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="to" type="button" @click="openAction(&quot;to&quot;)">
                               to
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 39 · 261" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="a" type="button" @click="openAction(&quot;a&quot;)">
                               a
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 40 · 49803" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="workspace" type="button" @click="openAction(&quot;workspace&quot;)">
                               workspace
                            </UButton>
                            <UButton color="neutral" variant="soft" title="Token 41 · 30" class="mr-1 rounded-md px-1.5 py-0.5 leading-6 break-all whitespace-pre-wrap outline-offset-2 transition-colors duration-150 bg-muted text-(--ui-text-highlighted)/80" aria-label="?" type="button" @click="openAction(&quot;?&quot;)">
                              ?
                            </UButton>
                          </div>
                          <div aria-label="Selected token details" class="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-dashed pt-4 border-default">
                            <code class="bg-primary text-inverted max-w-full rounded-md px-2 py-1 text-xs break-all whitespace-pre-wrap">&quot;You&quot;</code>
                            <div class="flex min-w-0 flex-wrap items-center gap-3 text-xs">
                              <span class="text-muted">
                                ID
                                <code class="text-highlighted break-all">3575</code>
                              </span>
                              <div class="flex flex-wrap items-center gap-1">
                                <span class="text-muted mr-1">UTF-8</span>
                                <code class="bg-muted rounded px-1.5 py-1">59</code>
                                <code class="bg-muted rounded px-1.5 py-1">6f</code>
                                <code class="bg-muted rounded px-1.5 py-1">75</code>
                              </div>
                            </div>
                          </div>
                        </div>
                      </template>
                    </template>
                  </UTabs>
                  <div class="flex flex-wrap items-center justify-between gap-2 border-t pt-4 border-default">
                    <p class="text-muted max-w-md text-xs leading-5">Some Unicode characters span multiple tokens. Their fragments are grouped into one readable piece.</p>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Copy IDs" type="button" @click="copyValue(&quot;Copy IDs&quot;)">
                      <UIcon name="i-lucide-copy" class="size-4" />
                      Copy IDs
                    </UButton>
                  </div>
                </div>
              </UCard>
            </div>
            <div class="grid items-start gap-5 md:grid-cols-2">
              <!-- Card 6: Selected piece -->
              <UCard class="rounded-lg shadow-none" :ui="{ body: 'contents' }">
                <div class="flex flex-col space-y-1.5 p-6">
                  <div class="font-semibold tracking-tight text-base">Selected piece</div>
                  <div class="text-muted text-sm">Explore the text behind a token.</div>
                </div>
                <div class="p-6 pt-0 flex flex-col gap-4">
                  <pre class="bg-(--ui-bg-muted)/60 rounded-lg border p-4 font-mono text-base break-all whitespace-pre-wrap border-default">&quot;You&quot;</pre>
                  <dl class="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <dt class="text-muted text-xs">Position</dt>
                      <dd class="mt-1 tabular-nums">1</dd>
                    </div>
                    <div>
                      <dt class="text-muted text-xs">Tokens in piece</dt>
                      <dd class="mt-1 tabular-nums">1</dd>
                    </div>
                    <div class="col-span-2">
                      <dt class="text-muted text-xs">Token IDs</dt>
                      <dd class="mt-1 font-mono text-xs break-all">3575</dd>
                    </div>
                    <div class="col-span-2">
                      <dt class="text-muted text-xs">Decoded UTF-8 bytes</dt>
                      <dd class="mt-1 font-mono text-xs leading-6 break-all">59 6f 75</dd>
                    </div>
                  </dl>
                </div>
              </UCard>
              <!-- Card 7: Prompt budget -->
              <UCard class="rounded-lg shadow-none" :ui="{ body: 'contents' }">
                <div class="flex flex-col space-y-1.5 p-6">
                  <div class="font-semibold tracking-tight text-base">Prompt budget</div>
                  <div class="text-muted text-sm">Compare this text against your own token limit.</div>
                </div>
                <div class="p-6 pt-0 flex flex-col gap-4">
                  <UFormField label="Token budget" name="tokenBudget" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                    <UInput v-model.number="form.tokenBudget" type="number" min="1" max="10000000" name="tokenBudget" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                  </UFormField>
                  <UProgress :model-value="1.0010000000000048" color="primary" size="sm" class="bg-primary/20 relative h-2 w-full overflow-hidden rounded-full" aria-label="Token budget used" />
                  <p class="text-xs text-muted">4,055 tokens remaining</p>
                  <p class="text-muted text-xs leading-5">This covers plain text. Message formatting, tools, and generated output use additional tokens in an API request.</p>
                </div>
              </UCard>
              <p class="text-muted text-xs leading-5 md:col-span-2">
                Powered by
                <NuxtLink class="underline underline-offset-4" to="https://github.com/niieani/gpt-tokenizer" external>
                  gpt-tokenizer
                </NuxtLink>
                . Your text is processed in a browser worker. Special token strings are treated as ordinary text.
              </p>
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
