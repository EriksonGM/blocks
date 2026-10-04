<!-- Page: /payment-processor/transaction-detail-2 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Transaction Detail 2 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchTransactionPayload": ""
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/transaction-detail-2">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-(--ui-bg-muted)/30 text-highlighted h-full min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div class="mb-5 flex min-w-0 items-center gap-3">
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default shadow-xs hover:bg-elevated hover:text-default bg-default size-9 rounded-md" aria-label="Back" type="button" @click="navigateTo(&quot;/payment-processor/transactions&quot;)">
                <UIcon name="i-lucide-arrow-left" class="size-4" />
                <span class="sr-only">Back</span>
              </UButton>
              <div class="min-w-0">
                <p class="text-muted text-sm font-medium">Transactions</p>
                <div class="flex min-w-0 items-center gap-2">
                  <h1 class="truncate text-xl font-semibold tracking-tight text-highlighted">7842196085530904</h1>
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default py-2 gap-1.5 text-muted h-7 shrink-0 rounded-md px-2 text-xs" aria-label="CCooppyy" type="button" @click="openAction(&quot;CCooppyy&quot;)">
                    <UIcon name="i-lucide-copy" class="size-4" />
                    <span aria-label="Copy" class="slot-text">
                      <span class="char-slot">
                        <span class="char-sizer">C</span>
                        <span class="char-face">C</span>
                      </span>
                      <span class="char-slot">
                        <span class="char-sizer">o</span>
                        <span class="char-face">o</span>
                      </span>
                      <span class="char-slot">
                        <span class="char-sizer">p</span>
                        <span class="char-face">p</span>
                      </span>
                      <span class="char-slot">
                        <span class="char-sizer">y</span>
                        <span class="char-face">y</span>
                      </span>
                    </span>
                  </UButton>
                </div>
              </div>
            </div>
            <div class="space-y-5">
              <section class="bg-default overflow-hidden rounded-lg border shadow-sm border-default">
                <div class="flex flex-col gap-3 border-b p-4 xl:flex-row xl:items-center xl:justify-between border-default">
                  <div class="flex min-w-0 items-center gap-3">
                    <div class="bg-primary text-inverted grid size-11 shrink-0 place-items-center rounded-md">
                      <img alt="Shadcnblocks" width="24" height="24" class="size-6 object-contain brightness-0 invert dark:invert-0" style="color:transparent" src="/reference/4eb49a7be0892386.svg" loading="lazy" />
                    </div>
                    <div class="min-w-0">
                      <div class="flex flex-wrap items-center gap-2">
                        <p class="text-3xl font-semibold tracking-tight text-highlighted">$149.00</p>
                        <UBadge color="neutral" variant="subtle" class="inline-flex min-h-5 items-center rounded-md px-1.5 text-xs font-semibold bg-muted text-highlighted">
                          Credit Card
                        </UBadge>
                        <UBadge color="neutral" variant="subtle" class="inline-flex min-h-5 items-center rounded-md px-1.5 text-xs font-semibold bg-success/10 text-success">
                          Approved
                        </UBadge>
                      </div>
                      <p class="text-muted mt-1 text-xs font-medium">14:18 - 18 Sep 2026</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-8 rounded-md" aria-label="Bookmark transaction" type="button" @click="openAction(&quot;Bookmark transaction&quot;)">
                      <UIcon name="i-lucide-bookmark" class="size-4" />
                      <span class="sr-only">Bookmark transaction</span>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default py-2 h-8 rounded-md px-3 text-xs" aria-label="More Actions" type="button" @click="openAction(&quot;More Actions&quot;)">
                      More Actions
                      <UIcon name="i-lucide-chevron-down" class="size-4" />
                    </UButton>
                  </div>
                </div>
                <div class="grid items-stretch gap-4 p-4 xl:grid-cols-[0.95fr_1fr_1fr]">
                  <section class="flex h-full flex-col">
                    <h2 class="text-muted mb-3 text-base font-semibold text-highlighted">Transaction details</h2>
                    <dl class="bg-(--ui-bg-muted)/60 flex flex-1 flex-col justify-center rounded-md p-3">
                      <div class="grid grid-cols-[6.5rem_minmax(0,1fr)] items-center gap-2 py-1.5">
                        <dt class="text-muted flex items-center gap-1 text-[13px]">Type</dt>
                        <dd class="min-w-0 truncate text-[13px] font-semibold" title="Refund">
                          <UBadge color="neutral" variant="subtle" class="inline-flex min-h-5 items-center rounded-md px-1.5 text-xs font-semibold bg-warning/10 text-warning">
                            Refund
                          </UBadge>
                        </dd>
                      </div>
                      <div class="grid grid-cols-[6.5rem_minmax(0,1fr)] items-center gap-2 py-1.5">
                        <dt class="text-muted flex items-center gap-1 text-[13px]">
                          Method
                          <UIcon name="i-lucide-circle-question-mark" class="size-3.5" />
                        </dt>
                        <dd class="min-w-0 truncate text-[13px] font-semibold" title="Credit Card">
                          <UBadge color="neutral" variant="subtle" class="inline-flex min-h-5 items-center rounded-md px-1.5 text-xs font-semibold bg-muted text-highlighted">
                            Credit Card
                          </UBadge>
                        </dd>
                      </div>
                      <div class="grid grid-cols-[6.5rem_minmax(0,1fr)] items-center gap-2 py-1.5">
                        <dt class="text-muted flex items-center gap-1 text-[13px]">Status</dt>
                        <dd class="min-w-0 truncate text-[13px] font-semibold" title="Approved">
                          <UBadge color="neutral" variant="subtle" class="inline-flex min-h-5 items-center rounded-md px-1.5 text-xs font-semibold bg-success/10 text-success">
                            Approved
                          </UBadge>
                        </dd>
                      </div>
                      <div class="grid grid-cols-[6.5rem_minmax(0,1fr)] items-center gap-2 py-1.5">
                        <dt class="text-muted flex items-center gap-1 text-[13px]">Refund amount</dt>
                        <dd class="min-w-0 truncate text-[13px] font-semibold" title="$149.00">$149.00</dd>
                      </div>
                      <div class="grid grid-cols-[6.5rem_minmax(0,1fr)] items-center gap-2 py-1.5">
                        <dt class="text-muted flex items-center gap-1 text-[13px]">Convenience fee</dt>
                        <dd class="min-w-0 truncate text-[13px] font-semibold" title="$0.00">$0.00</dd>
                      </div>
                      <div class="grid grid-cols-[6.5rem_minmax(0,1fr)] items-center gap-2 py-1.5">
                        <dt class="text-muted flex items-center gap-1 text-[13px]">TXID</dt>
                        <dd class="min-w-0 truncate text-[13px] font-semibold" title="7842196085530904">7842196085530904</dd>
                      </div>
                      <div class="grid grid-cols-[6.5rem_minmax(0,1fr)] items-center gap-2 py-1.5">
                        <dt class="text-muted flex items-center gap-1 text-[13px]">
                          Network ID
                          <UIcon name="i-lucide-circle-question-mark" class="size-3.5" />
                        </dt>
                        <dd class="min-w-0 truncate text-[13px] font-semibold" title="NID-7C92M4K">NID-7C92M4K</dd>
                      </div>
                      <div class="grid grid-cols-[6.5rem_minmax(0,1fr)] items-center gap-2 py-1.5">
                        <dt class="text-muted flex items-center gap-1 text-[13px]">Card</dt>
                        <dd class="min-w-0 truncate text-[13px] font-semibold" title="Visa ending in 4242">Visa ending in 4242</dd>
                      </div>
                      <div class="grid grid-cols-[6.5rem_minmax(0,1fr)] items-center gap-2 py-1.5">
                        <dt class="text-muted flex items-center gap-1 text-[13px]">Source</dt>
                        <dd class="min-w-0 truncate text-[13px] font-semibold" title="SDK">
                          <UBadge color="neutral" variant="subtle" class="inline-flex min-h-5 items-center rounded-md px-1.5 text-xs font-semibold bg-muted text-highlighted">
                            SDK
                          </UBadge>
                        </dd>
                      </div>
                    </dl>
                  </section>
                  <section class="flex h-full flex-col">
                    <h2 class="text-muted mb-3 text-base font-semibold text-highlighted">From</h2>
                    <div class="flex flex-1 flex-col rounded-md border p-3 border-default">
                      <div class="flex min-w-0 items-center gap-3 border-b pb-3 border-default">
                        <div class="bg-muted text-highlighted grid size-10 shrink-0 place-items-center rounded-md border border-default">
                          <img alt="Shadcnblocks" width="20" height="20" class="size-5 object-contain dark:hidden" style="color:transparent" src="/reference/4eb49a7be0892386.svg" loading="lazy" />
                        </div>
                        <div class="min-w-0">
                          <p class="truncate text-[13px] font-semibold text-highlighted">Shadcnblocks.com</p>
                          <NuxtLink class="text-(--ui-text-highlighted)/80 hover:text-highlighted block truncate text-[13px] font-medium underline-offset-4 transition-colors hover:underline" to="mailto:billing@shadcnblocks.com">
                            billing@shadcnblocks.com
                          </NuxtLink>
                        </div>
                      </div>
                      <div class="bg-(--ui-bg-muted)/60 my-3 space-y-2 rounded-md p-3 text-[13px]">
                        <p class="flex items-center gap-3 font-medium">
                          <UIcon name="i-lucide-map-pin" class="text-muted size-4 shrink-0" />
                          <span class="min-w-0 truncate">Level 12, 45 Clarence Street, Sydney NSW 2000</span>
                        </p>
                        <p class="flex items-center gap-3 font-medium">
                          <UIcon name="i-lucide-phone" class="text-muted size-4 shrink-0" />
                          <span class="min-w-0 truncate">+61 2 7908 4420</span>
                        </p>
                        <p class="flex items-center gap-3 font-medium">
                          <UIcon name="i-lucide-monitor" class="text-muted size-4 shrink-0" />
                          <span class="min-w-0 truncate">192.0.2.44</span>
                        </p>
                      </div>
                      <dl class="mt-auto space-y-2.5 text-[13px]">
                        <div class="grid grid-cols-[7.5rem_minmax(0,1fr)] items-center gap-2">
                          <dt class="text-muted">Last transaction</dt>
                          <dd class="flex min-w-0 items-center gap-2 font-semibold">
                            <span class="bg-muted text-muted grid size-5 shrink-0 place-items-center rounded-full">
                              <UIcon name="i-lucide-calendar-days" class="size-3.5" />
                            </span>
                            <span class="min-w-0 truncate">Sep 17, 2026</span>
                          </dd>
                        </div>
                        <div class="grid grid-cols-[7.5rem_minmax(0,1fr)] items-center gap-2">
                          <dt class="text-muted">Payment partner</dt>
                          <dd class="flex min-w-0 items-center gap-2 font-semibold">
                            <span class="bg-muted text-muted grid size-5 shrink-0 place-items-center rounded-full">
                              <UIcon name="i-lucide-landmark" class="size-3.5" />
                            </span>
                            <span class="min-w-0 truncate">Stripe</span>
                          </dd>
                        </div>
                        <div class="grid grid-cols-[7.5rem_minmax(0,1fr)] items-center gap-2">
                          <dt class="text-muted">Website</dt>
                          <dd class="flex min-w-0 items-center gap-2 font-semibold">
                            <span class="bg-muted text-muted grid size-5 shrink-0 place-items-center rounded-full">
                              <UIcon name="i-lucide-globe" class="size-3.5" />
                            </span>
                            <span class="min-w-0 truncate">
                              <NuxtLink class="text-(--ui-text-highlighted)/80 hover:text-highlighted inline-flex items-center gap-1 underline-offset-4 transition-colors hover:underline" to="https://shadcnblocks.com" external>
                                shadcnblocks.com
                              </NuxtLink>
                            </span>
                          </dd>
                        </div>
                        <div class="grid grid-cols-[7.5rem_minmax(0,1fr)] items-center gap-2">
                          <dt class="text-muted">Product</dt>
                          <dd class="flex min-w-0 items-center gap-2 font-semibold">
                            <span class="bg-muted text-muted grid size-5 shrink-0 place-items-center rounded-full">
                              <UIcon name="i-lucide-shield-check" class="size-3.5" />
                            </span>
                            <span class="min-w-0 truncate">Pro lifetime access</span>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </section>
                  <section class="flex h-full flex-col">
                    <h2 class="text-muted mb-3 text-base font-semibold text-highlighted">To</h2>
                    <div class="flex flex-1 flex-col rounded-md border p-3 border-default">
                      <div class="flex min-w-0 items-center gap-3 border-b pb-3 border-default">
                        <span class="relative flex overflow-hidden size-10 shrink-0 rounded-md border border-default">
                          <img class="aspect-square h-full w-full object-cover" alt="Olivia Bennett" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                        </span>
                        <div class="min-w-0">
                          <p class="truncate text-[13px] font-semibold text-highlighted">Olivia Bennett</p>
                          <NuxtLink class="text-(--ui-text-highlighted)/80 hover:text-highlighted block truncate text-[13px] font-medium underline-offset-4 transition-colors hover:underline" to="mailto:olivia.bennett@icloud.com">
                            olivia.bennett@icloud.com
                          </NuxtLink>
                        </div>
                      </div>
                      <div class="bg-(--ui-bg-muted)/60 my-3 space-y-2 rounded-md p-3 text-[13px]">
                        <p class="flex items-center gap-3 font-medium">
                          <UIcon name="i-lucide-map-pin" class="text-muted size-4 shrink-0" />
                          <span class="min-w-0 truncate">18 Collins Street, Melbourne VIC 3000</span>
                        </p>
                        <p class="flex items-center gap-3 font-medium">
                          <UIcon name="i-lucide-phone" class="text-muted size-4 shrink-0" />
                          <span class="min-w-0 truncate">+61 3 9010 4382</span>
                        </p>
                        <p class="flex items-center gap-3 font-medium">
                          <UIcon name="i-lucide-monitor" class="text-muted size-4 shrink-0" />
                          <span class="min-w-0 truncate">198.51.100.42</span>
                        </p>
                      </div>
                      <dl class="mt-auto space-y-2.5 text-[13px]">
                        <div class="grid grid-cols-[7.5rem_minmax(0,1fr)] items-center gap-2">
                          <dt class="text-muted">Last transaction</dt>
                          <dd class="flex min-w-0 items-center gap-2 font-semibold">
                            <span class="bg-muted text-muted grid size-5 shrink-0 place-items-center rounded-full">
                              <UIcon name="i-lucide-calendar-days" class="size-3.5" />
                            </span>
                            <span class="min-w-0 truncate">Sep 14, 2026</span>
                          </dd>
                        </div>
                        <div class="grid grid-cols-[7.5rem_minmax(0,1fr)] items-center gap-2">
                          <dt class="text-muted">Card issuer</dt>
                          <dd class="flex min-w-0 items-center gap-2 font-semibold">
                            <span class="bg-muted text-muted grid size-5 shrink-0 place-items-center rounded-full">
                              <UIcon name="i-lucide-landmark" class="size-3.5" />
                            </span>
                            <span class="min-w-0 truncate">Visa ending in 4242</span>
                          </dd>
                        </div>
                        <div class="grid grid-cols-[7.5rem_minmax(0,1fr)] items-center gap-2">
                          <dt class="text-muted">KYC status</dt>
                          <dd class="flex min-w-0 items-center gap-2 font-semibold">
                            <span class="bg-muted text-muted grid size-5 shrink-0 place-items-center rounded-full">
                              <UIcon name="i-lucide-user-check" class="size-3.5" />
                            </span>
                            <span class="min-w-0 truncate">
                              <UBadge color="neutral" variant="subtle" class="inline-flex min-h-5 items-center rounded-md px-1.5 text-xs font-semibold bg-success/10 text-success">
                                Confirmed
                              </UBadge>
                            </span>
                          </dd>
                        </div>
                        <div class="grid grid-cols-[7.5rem_minmax(0,1fr)] items-center gap-2">
                          <dt class="text-muted">Refund policy</dt>
                          <dd class="flex min-w-0 items-center gap-2 font-semibold">
                            <span class="bg-muted text-muted grid size-5 shrink-0 place-items-center rounded-full">
                              <UIcon name="i-lucide-shield-check" class="size-3.5" />
                            </span>
                            <span class="min-w-0 truncate">Eligible</span>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </section>
                </div>
              </section>
              <section class="bg-default overflow-hidden rounded-lg border shadow-sm border-default">
                <div class="flex min-w-0 gap-6 overflow-x-auto border-b px-4 border-default">
                  <UButton color="neutral" variant="outline" class="text-muted h-12 shrink-0 border-b-2 border-transparent text-[13px] font-semibold" aria-label="Emails" type="button" @click="openAction(&quot;Emails&quot;)">
                    Emails
                  </UButton>
                  <UButton color="neutral" variant="outline" class="text-muted h-12 shrink-0 border-b-2 border-transparent text-[13px] font-semibold" aria-label="Notes" type="button" @click="openAction(&quot;Notes&quot;)">
                    Notes
                  </UButton>
                  <UButton color="neutral" variant="outline" class="text-muted h-12 shrink-0 border-b-2 border-transparent text-[13px] font-semibold" aria-label="Timeline" type="button" @click="openAction(&quot;Timeline&quot;)">
                    Timeline
                  </UButton>
                  <UButton color="neutral" variant="outline" class="h-12 shrink-0 border-b-2 text-[13px] font-semibold text-highlighted border-success" aria-label="Developers" type="button" @click="openAction(&quot;Developers&quot;)">
                    Developers
                  </UButton>
                  <UButton color="neutral" variant="outline" class="text-muted h-12 shrink-0 border-b-2 border-transparent text-[13px] font-semibold" aria-label="Postback" type="button" @click="openAction(&quot;Postback&quot;)">
                    Postback
                  </UButton>
                  <UButton color="neutral" variant="outline" class="text-muted h-12 shrink-0 border-b-2 border-transparent text-[13px] font-semibold" aria-label="Rules" type="button" @click="openAction(&quot;Rules&quot;)">
                    Rules
                  </UButton>
                </div>
                <div class="p-4">
                  <div class="overflow-hidden rounded-lg bg-inverted text-inverted">
                    <div class="border-b border-(--ui-text-inverted)/10 p-3 border-default">
                      <div class="relative">
                        <UIcon name="i-lucide-search" class="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" />
                        <UInput v-model="form.searchTransactionPayload" type="search" placeholder="Search transaction payload" name="searchTransactionPayload" class="h-9 w-full rounded-md bg-inverted pl-10 text-[13px] transition outline-none focus:border-success" :ui="{ base: 'h-full' }" />
                      </div>
                      <div class="mt-4 flex min-w-0 gap-6 overflow-x-auto">
                        <UButton color="neutral" variant="outline" class="h-9 shrink-0 border-b-2 text-[13px] font-semibold border-success text-success" aria-label="Transaction Details" type="button" @click="openAction(&quot;Transaction Details&quot;)">
                          Transaction Details
                        </UButton>
                        <UButton color="neutral" variant="outline" class="h-9 shrink-0 border-b-2 border-transparent text-[13px] font-semibold text-muted" aria-label="Authorization" type="button" @click="openAction(&quot;Authorization&quot;)">
                          Authorization
                        </UButton>
                        <UButton color="neutral" variant="outline" class="h-9 shrink-0 border-b-2 border-transparent text-[13px] font-semibold text-muted" aria-label="Gateway Process" type="button" @click="openAction(&quot;Gateway Process&quot;)">
                          Gateway Process
                        </UButton>
                        <UButton color="neutral" variant="outline" class="h-9 shrink-0 border-b-2 border-transparent text-[13px] font-semibold text-muted" aria-label="Refund Process" type="button" @click="openAction(&quot;Refund Process&quot;)">
                          Refund Process
                        </UButton>
                        <UButton color="neutral" variant="outline" class="h-9 shrink-0 border-b-2 border-transparent text-[13px] font-semibold text-muted" aria-label="Postback Process" type="button" @click="openAction(&quot;Postback Process&quot;)">
                          Postback Process
                        </UButton>
                      </div>
                    </div>
                    <div class="grid gap-0 xl:grid-cols-[minmax(0,1fr)_16rem]">
                      <pre class="horizontal-scrollbar overflow-auto p-4 text-xs leading-6 text-inverted">
                        <code>&#123;
  &quot;txn&quot;: &quot;7842196085530904&quot;,
  &quot;parent_txn&quot;: &quot;PNT-445918730162&quot;,
  &quot;kind&quot;: &quot;refund&quot;,
  &quot;status&quot;: &quot;approved&quot;,
  &quot;amount&quot;: &#123;
    &quot;value&quot;: 149.00,
    &quot;currency&quot;: &quot;USD&quot;
  &#125;,
  &quot;processor&quot;: &#123;
    &quot;gateway&quot;: &quot;stripe-us&quot;,
    &quot;trace_id&quot;: &quot;gw_9f42c18a6d&quot;,
    &quot;latency_ms&quot;: 384
  &#125;,
  &quot;recipient&quot;: &#123;
    &quot;id&quot;: &quot;cus_6GV4PZ0&quot;,
    &quot;risk_score&quot;: 18,
    &quot;kyc&quot;: &quot;confirmed&quot;
  &#125;,
  &quot;webhooks&quot;: [
    &quot;refund.created&quot;,
    &quot;refund.approved&quot;,
    &quot;ledger.balance.updated&quot;
  ]
&#125;</code>
                      </pre>
                      <aside class="border-t border-(--ui-text-inverted)/10 p-4 xl:border-t-0 xl:border-l border-default">
                        <div class="flex items-center gap-3">
                          <UIcon name="i-lucide-file-braces-corner" class="size-5 text-success" />
                          <h3 class="text-sm font-semibold text-highlighted">Payload checks</h3>
                        </div>
                        <div class="mt-4 space-y-2.5">
                          <div class="flex items-center gap-2 text-[13px]">
                            <span class="grid size-5 place-items-center rounded-full bg-success/15 text-success">
                              <UIcon name="i-lucide-check" class="size-3.5" />
                            </span>
                            Schema validated
                          </div>
                          <div class="flex items-center gap-2 text-[13px]">
                            <span class="grid size-5 place-items-center rounded-full bg-success/15 text-success">
                              <UIcon name="i-lucide-check" class="size-3.5" />
                            </span>
                            Postback signed
                          </div>
                          <div class="flex items-center gap-2 text-[13px]">
                            <span class="grid size-5 place-items-center rounded-full bg-success/15 text-success">
                              <UIcon name="i-lucide-check" class="size-3.5" />
                            </span>
                            Ledger synced
                          </div>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-elevated text-default shadow-xs hover:bg-(--ui-bg-elevated)/80 px-4 py-2 gap-1.5 mt-5 h-8 w-full rounded-md text-xs" aria-label="CCooppyy" type="button" @click="openAction(&quot;CCooppyy&quot;)">
                          <UIcon name="i-lucide-copy" class="size-4" />
                          <span aria-label="Copy" class="slot-text">
                            <span class="char-slot">
                              <span class="char-sizer">C</span>
                              <span class="char-face">C</span>
                            </span>
                            <span class="char-slot">
                              <span class="char-sizer">o</span>
                              <span class="char-face">o</span>
                            </span>
                            <span class="char-slot">
                              <span class="char-sizer">p</span>
                              <span class="char-face">p</span>
                            </span>
                            <span class="char-slot">
                              <span class="char-sizer">y</span>
                              <span class="char-face">y</span>
                            </span>
                          </span>
                        </UButton>
                      </aside>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
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
