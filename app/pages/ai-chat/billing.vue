<!-- Page: /ai-chat/billing | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Billing · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "billingAuto": true
})

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "Overview",
    "value": "0"
  },
  {
    "label": "Payment methods",
    "value": "1"
  },
  {
    "label": "Billing history",
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/billing">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="min-h-0 flex-1 overflow-y-auto">
        <div class="mx-auto flex flex-col px-4 sm:px-8 gap-6 py-6 sm:py-8 max-w-7xl">
          <div class="flex flex-wrap gap-4 items-start justify-between">
            <div class="flex flex-col gap-1">
              <h1 class="text-2xl font-semibold tracking-tight text-highlighted">Billing</h1>
              <p class="text-muted max-w-2xl text-sm">Workspace credits, payment methods, and monthly statements.</p>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" to="/ai-chat/credit-usage">
                View usage
                <UIcon name="i-lucide-arrow-up-right" class="size-4" />
              </NuxtLink>
            </div>
          </div>
          <UTabs v-model="tabs1Active" :items="tabs1Items" color="primary" variant="link" data-orientation="horizontal" data-slot="tabs" :ui="{ root: 'gap-4', list: 'justify-start', content: 'min-h-0' }">
            <template #content="{ item }">
              <template v-if="item.value === '0'">
                <div data-orientation="horizontal" id="radix-_R_ddbsnpfknmlb_-content-overview" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-6" style="animation-duration:0s">
                  <div class="grid gap-6 xl:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
                    <!-- Card 1: Prepaid -->
                    <UCard class="rounded-lg" :ui="{ body: 'contents' }">
                      <div class="flex flex-col space-y-1.5 p-6">
                        <div class="mb-2 flex items-center justify-between">
                          <UIcon name="i-lucide-wallet" class="text-muted size-5" />
                          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted border-default">Prepaid</div>
                        </div>
                        <div class="leading-none font-semibold tracking-tight">Available credits</div>
                        <div class="text-muted text-sm">Usage is deducted from this balance as it occurs.</div>
                      </div>
                      <div class="p-6 pt-0">
                        <p class="text-4xl font-semibold tracking-tight tabular-nums text-highlighted">$226.06</p>
                        <p class="text-muted mt-2 text-sm">$273.94 used in the current billing period.</p>
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full my-6" />
                        <dl class="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <dt class="text-muted text-xs">Current period</dt>
                            <dd class="mt-1">Sep 1 – 30, 2026</dd>
                          </div>
                          <div>
                            <dt class="text-muted text-xs">Next statement</dt>
                            <dd class="mt-1">Oct 1, 2026</dd>
                          </div>
                        </dl>
                      </div>
                      <div class="flex items-center p-6 pt-0 flex-wrap gap-2">
                        <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Add demo credits" type="button" @click="openAction(&quot;Add demo credits&quot;)">
                          <UIcon name="i-lucide-plus" class="size-4" />
                          Add demo credits
                        </UButton>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="View statements" type="button" @click="openAction(&quot;View statements&quot;)">
                          View statements
                        </UButton>
                      </div>
                    </UCard>
                    <div class="flex flex-col gap-5">
                      <!-- Card 2: Automatic recharge -->
                      <UCard class="rounded-lg" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 p-6">
                          <div class="leading-none font-semibold tracking-tight">Automatic recharge</div>
                          <div class="text-muted text-sm">Keep a planning buffer for ongoing work.</div>
                        </div>
                        <div class="p-6 pt-0">
                          <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                            <div role="group" data-slot="field" data-orientation="horizontal" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-row items-center has-[&gt;[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[&gt;[data-slot=field-content]]:[&amp;&gt;[role=checkbox],[role=radio]]:mt-px">
                              <div class="flex-1">
                                <label class="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col" data-slot="field-label" for="billing-auto">Recharge when below $50</label>
                                <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Add $100 using the default demo payment method.</p>
                              </div>
                              <USwitch v-model="form.billingAuto" aria-label="Toggle setting" />
                            </div>
                          </div>
                          <p class="text-muted mt-3 text-xs">This preference is illustrative; no charges are scheduled.</p>
                        </div>
                      </UCard>
                      <!-- Card 3: Billing details -->
                      <UCard class="rounded-lg" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 p-6">
                          <div class="leading-none font-semibold tracking-tight">Billing details</div>
                          <div class="text-muted text-sm">Shadcnblocks Studio</div>
                        </div>
                        <div class="p-6 pt-0 flex flex-col gap-3 text-sm">
                          <div class="flex items-center gap-2">
                            <UIcon name="i-lucide-credit-card" class="text-muted size-4" />
                            Visa •••• 4242
                          </div>
                          <p class="text-muted">billing@example.com</p>
                        </div>
                        <div class="flex items-center p-6 pt-0 gap-2">
                          <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Manage cards" type="button" @click="openAction(&quot;Manage cards&quot;)">
                            Manage cards
                          </UButton>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Edit contact" type="button" @click="openAction(&quot;Edit contact&quot;)">
                            Edit contact
                          </UButton>
                        </div>
                      </UCard>
                    </div>
                  </div>
                </div>
              </template>
              <template v-if="item.value === '1'">
                <div data-orientation="horizontal" id="radix-_R_ddbsnpfknmlb_-content-overview" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-6" style="animation-duration:0s">
                  <div class="grid gap-6 xl:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
                    <!-- Card 4: Prepaid -->
                    <UCard class="rounded-lg" :ui="{ body: 'contents' }">
                      <div class="flex flex-col space-y-1.5 p-6">
                        <div class="mb-2 flex items-center justify-between">
                          <UIcon name="i-lucide-wallet" class="text-muted size-5" />
                          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted border-default">Prepaid</div>
                        </div>
                        <div class="leading-none font-semibold tracking-tight">Available credits</div>
                        <div class="text-muted text-sm">Usage is deducted from this balance as it occurs.</div>
                      </div>
                      <div class="p-6 pt-0">
                        <p class="text-4xl font-semibold tracking-tight tabular-nums text-highlighted">$226.06</p>
                        <p class="text-muted mt-2 text-sm">$273.94 used in the current billing period.</p>
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full my-6" />
                        <dl class="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <dt class="text-muted text-xs">Current period</dt>
                            <dd class="mt-1">Sep 1 – 30, 2026</dd>
                          </div>
                          <div>
                            <dt class="text-muted text-xs">Next statement</dt>
                            <dd class="mt-1">Oct 1, 2026</dd>
                          </div>
                        </dl>
                      </div>
                      <div class="flex items-center p-6 pt-0 flex-wrap gap-2">
                        <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Add demo credits" type="button" @click="openAction(&quot;Add demo credits&quot;)">
                          <UIcon name="i-lucide-plus" class="size-4" />
                          Add demo credits
                        </UButton>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="View statements" type="button" @click="openAction(&quot;View statements&quot;)">
                          View statements
                        </UButton>
                      </div>
                    </UCard>
                    <div class="flex flex-col gap-5">
                      <!-- Card 5: Automatic recharge -->
                      <UCard class="rounded-lg" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 p-6">
                          <div class="leading-none font-semibold tracking-tight">Automatic recharge</div>
                          <div class="text-muted text-sm">Keep a planning buffer for ongoing work.</div>
                        </div>
                        <div class="p-6 pt-0">
                          <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                            <div role="group" data-slot="field" data-orientation="horizontal" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-row items-center has-[&gt;[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[&gt;[data-slot=field-content]]:[&amp;&gt;[role=checkbox],[role=radio]]:mt-px">
                              <div class="flex-1">
                                <label class="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col" data-slot="field-label" for="billing-auto">Recharge when below $50</label>
                                <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Add $100 using the default demo payment method.</p>
                              </div>
                              <USwitch v-model="form.billingAuto" aria-label="Toggle setting" />
                            </div>
                          </div>
                          <p class="text-muted mt-3 text-xs">This preference is illustrative; no charges are scheduled.</p>
                        </div>
                      </UCard>
                      <!-- Card 6: Billing details -->
                      <UCard class="rounded-lg" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 p-6">
                          <div class="leading-none font-semibold tracking-tight">Billing details</div>
                          <div class="text-muted text-sm">Shadcnblocks Studio</div>
                        </div>
                        <div class="p-6 pt-0 flex flex-col gap-3 text-sm">
                          <div class="flex items-center gap-2">
                            <UIcon name="i-lucide-credit-card" class="text-muted size-4" />
                            Visa •••• 4242
                          </div>
                          <p class="text-muted">billing@example.com</p>
                        </div>
                        <div class="flex items-center p-6 pt-0 gap-2">
                          <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Manage cards" type="button" @click="openAction(&quot;Manage cards&quot;)">
                            Manage cards
                          </UButton>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Edit contact" type="button" @click="openAction(&quot;Edit contact&quot;)">
                            Edit contact
                          </UButton>
                        </div>
                      </UCard>
                    </div>
                  </div>
                </div>
              </template>
              <template v-if="item.value === '2'">
                <div data-orientation="horizontal" id="radix-_R_ddbsnpfknmlb_-content-overview" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-6" style="animation-duration:0s">
                  <div class="grid gap-6 xl:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
                    <!-- Card 7: Prepaid -->
                    <UCard class="rounded-lg" :ui="{ body: 'contents' }">
                      <div class="flex flex-col space-y-1.5 p-6">
                        <div class="mb-2 flex items-center justify-between">
                          <UIcon name="i-lucide-wallet" class="text-muted size-5" />
                          <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted border-default">Prepaid</div>
                        </div>
                        <div class="leading-none font-semibold tracking-tight">Available credits</div>
                        <div class="text-muted text-sm">Usage is deducted from this balance as it occurs.</div>
                      </div>
                      <div class="p-6 pt-0">
                        <p class="text-4xl font-semibold tracking-tight tabular-nums text-highlighted">$226.06</p>
                        <p class="text-muted mt-2 text-sm">$273.94 used in the current billing period.</p>
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full my-6" />
                        <dl class="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <dt class="text-muted text-xs">Current period</dt>
                            <dd class="mt-1">Sep 1 – 30, 2026</dd>
                          </div>
                          <div>
                            <dt class="text-muted text-xs">Next statement</dt>
                            <dd class="mt-1">Oct 1, 2026</dd>
                          </div>
                        </dl>
                      </div>
                      <div class="flex items-center p-6 pt-0 flex-wrap gap-2">
                        <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Add demo credits" type="button" @click="openAction(&quot;Add demo credits&quot;)">
                          <UIcon name="i-lucide-plus" class="size-4" />
                          Add demo credits
                        </UButton>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="View statements" type="button" @click="openAction(&quot;View statements&quot;)">
                          View statements
                        </UButton>
                      </div>
                    </UCard>
                    <div class="flex flex-col gap-5">
                      <!-- Card 8: Automatic recharge -->
                      <UCard class="rounded-lg" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 p-6">
                          <div class="leading-none font-semibold tracking-tight">Automatic recharge</div>
                          <div class="text-muted text-sm">Keep a planning buffer for ongoing work.</div>
                        </div>
                        <div class="p-6 pt-0">
                          <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                            <div role="group" data-slot="field" data-orientation="horizontal" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-row items-center has-[&gt;[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[&gt;[data-slot=field-content]]:[&amp;&gt;[role=checkbox],[role=radio]]:mt-px">
                              <div class="flex-1">
                                <label class="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col" data-slot="field-label" for="billing-auto">Recharge when below $50</label>
                                <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Add $100 using the default demo payment method.</p>
                              </div>
                              <USwitch v-model="form.billingAuto" aria-label="Toggle setting" />
                            </div>
                          </div>
                          <p class="text-muted mt-3 text-xs">This preference is illustrative; no charges are scheduled.</p>
                        </div>
                      </UCard>
                      <!-- Card 9: Billing details -->
                      <UCard class="rounded-lg" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 p-6">
                          <div class="leading-none font-semibold tracking-tight">Billing details</div>
                          <div class="text-muted text-sm">Shadcnblocks Studio</div>
                        </div>
                        <div class="p-6 pt-0 flex flex-col gap-3 text-sm">
                          <div class="flex items-center gap-2">
                            <UIcon name="i-lucide-credit-card" class="text-muted size-4" />
                            Visa •••• 4242
                          </div>
                          <p class="text-muted">billing@example.com</p>
                        </div>
                        <div class="flex items-center p-6 pt-0 gap-2">
                          <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Manage cards" type="button" @click="openAction(&quot;Manage cards&quot;)">
                            Manage cards
                          </UButton>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Edit contact" type="button" @click="openAction(&quot;Edit contact&quot;)">
                            Edit contact
                          </UButton>
                        </div>
                      </UCard>
                    </div>
                  </div>
                </div>
              </template>
            </template>
          </UTabs>
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
