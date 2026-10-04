<!-- Page: /ecommerce/edit-customer/cus-1742 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Edit Customer · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "field1": "Theo",
  "field2": "Hammond",
  "field3": "CUS-1742",
  "field4": "Caldwell",
  "vIP": "VIP",
  "onlineStore": "Online store",
  "averyHall": "Avery Hall",
  "eMAIL": "EMAIL",
  "enabled": true,
  "field10": "Primary",
  "field11": "theo.hammond@caldwell.app",
  "field12": "+1 (206) 555-0198",
  "billingContactName": "Theo Hammond",
  "streetAddress": "7841 Mercer Street, Suite 12",
  "suiteBuildingFloor": "Capitol Hill, Building North",
  "city": "Seattle",
  "state": "WA",
  "zIPCode": "98102",
  "country": "United States",
  "label": "Primary shipping",
  "recipient": "Theo Hammond",
  "streetAddress2": "7841 Mercer Street, Suite 12",
  "suiteBuildingFloor2": "Capitol Hill, Building North",
  "city2": "Seattle",
  "state2": "WA",
  "zIPCode2": "98102",
  "country2": "United States",
  "visa": "Visa",
  "last4": "4242",
  "mMYY": "08/28",
  "cardholder": "Theo Hammond",
  "enabled2": true,
  "amex": "Amex",
  "last42": "1034",
  "mMYY2": "03/29",
  "cardholder2": "Theo Hammond",
  "enabled3": false,
  "addSegment": "",
  "internalNotes": "Prefers new product drops by email and tends to bundle hero skincare sets with replenishment orders."
})

const vIPOptions = [
  "Active",
  "VIP",
  "At risk"
]

const onlineStoreOptions = [
  "Online store",
  "Subscription",
  "Marketplace",
  "Retail partner"
]

const averyHallOptions = [
  "Avery Hall",
  "Riley Chen",
  "Jordan Lee",
  "Mina Patel"
]

const eMAILOptions = [
  "EMAIL",
  "SMS",
  "PHONE"
]

const visaOptions = [
  "Visa"
]

const amexOptions = [
  "Amex"
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/edit-customer/cus-1742">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="flex min-h-0 flex-1 flex-col">
          <header class="bg-default hidden shrink-0 border-b px-4 py-4 sm:px-6 md:block border-default">
            <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-6">
              <div class="flex min-w-0 flex-wrap items-center gap-3 text-sm">
                <span class="text-highlighted font-medium">Shadcnblocks Admin Kit</span>
                <span class="text-muted">/</span>
                <span class="text-highlighted font-medium">Customers</span>
                <span class="text-muted">/</span>
                <span class="text-muted">Edit Customer</span>
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
          <div class="min-h-0 flex-1 overflow-auto">
            <div class="flex h-full min-h-0 flex-1 overflow-hidden">
              <div class="bg-default flex min-h-0 flex-1 flex-col overflow-hidden">
                <div data-orientation="vertical" class="flex min-h-0 flex-1 overflow-hidden">
                  <div class="flex min-h-0 flex-1 flex-col overflow-hidden p-4 sm:p-6 md:p-8">
                    <div class="mx-auto flex min-h-0 w-full max-w-[1360px] flex-1 flex-col gap-6">
                      <header class="grid gap-4 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-center">
                        <div class="flex max-w-4xl flex-col gap-3">
                          <div class="flex items-center gap-3 text-sm md:hidden">
                            <span class="text-highlighted font-medium">Customers</span>
                            <span class="text-muted">/</span>
                            <span class="text-muted">Edit Customer</span>
                          </div>
                          <div class="flex flex-col gap-1">
                            <h1 class="text-3xl font-semibold tracking-tight text-highlighted">Edit Customer</h1>
                            <p class="text-muted max-w-2xl text-sm">Add the account, contacts, addresses, and payment methods the team needs to operate this customer.</p>
                          </div>
                        </div>
                        <div class="flex shrink-0 items-center gap-2 self-start xl:self-center">
                          <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default py-2 h-10 rounded-full px-4" aria-label="Reset changes" type="button" @click="openAction(&quot;Reset changes&quot;)">
                            Reset changes
                          </UButton>
                          <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default py-2 h-10 rounded-full px-4" aria-label="Save draft" type="button" @click="openAction(&quot;Save draft&quot;)">
                            Save draft
                          </UButton>
                          <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 py-2 h-10 rounded-full px-5" aria-label="Save customer" type="button" @click="openAction(&quot;Save customer&quot;)">
                            Save customer
                          </UButton>
                        </div>
                      </header>
                      <div class="grid min-h-0 flex-1 gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
                        <aside class="hidden lg:block">
                          <div class="sticky top-0">
                            <div data-orientation="vertical" class="flex flex-col border-(--ui-border)/60 bg-default rounded-2xl border p-3 border-default">
                              <UButton color="primary" variant="solid" class="rounded-xl border px-4 py-3 text-left transition-colors data-[state=active]:border-(--ui-text-highlighted) data-[state=active]:bg-(--ui-text-highlighted) data-[state=active]:text-(--ui-bg) data-[state=inactive]:text-(--ui-text-highlighted)/80 data-[state=inactive]:hover:border-(--ui-border)/60 data-[state=inactive]:hover:bg-(--ui-bg-muted)/35 data-[state=inactive]:hover:text-highlighted data-[state=inactive]:border-transparent border-default" aria-label="Account" type="button" @click="openAction(&quot;Account&quot;)">
                                <p class="text-[15px] font-medium">Account</p>
                              </UButton>
                              <UButton color="primary" variant="solid" class="rounded-xl border px-4 py-3 text-left transition-colors data-[state=active]:border-(--ui-text-highlighted) data-[state=active]:bg-(--ui-text-highlighted) data-[state=active]:text-(--ui-bg) data-[state=inactive]:text-(--ui-text-highlighted)/80 data-[state=inactive]:hover:border-(--ui-border)/60 data-[state=inactive]:hover:bg-(--ui-bg-muted)/35 data-[state=inactive]:hover:text-highlighted data-[state=inactive]:border-transparent border-default" aria-label="Contacts" type="button" @click="openAction(&quot;Contacts&quot;)">
                                <p class="text-[15px] font-medium">Contacts</p>
                              </UButton>
                              <UButton color="primary" variant="solid" class="rounded-xl border px-4 py-3 text-left transition-colors data-[state=active]:border-(--ui-text-highlighted) data-[state=active]:bg-(--ui-text-highlighted) data-[state=active]:text-(--ui-bg) data-[state=inactive]:text-(--ui-text-highlighted)/80 data-[state=inactive]:hover:border-(--ui-border)/60 data-[state=inactive]:hover:bg-(--ui-bg-muted)/35 data-[state=inactive]:hover:text-highlighted data-[state=inactive]:border-transparent border-default" aria-label="Billing" type="button" @click="openAction(&quot;Billing&quot;)">
                                <p class="text-[15px] font-medium">Billing</p>
                              </UButton>
                              <UButton color="primary" variant="solid" class="rounded-xl border px-4 py-3 text-left transition-colors data-[state=active]:border-(--ui-text-highlighted) data-[state=active]:bg-(--ui-text-highlighted) data-[state=active]:text-(--ui-bg) data-[state=inactive]:text-(--ui-text-highlighted)/80 data-[state=inactive]:hover:border-(--ui-border)/60 data-[state=inactive]:hover:bg-(--ui-bg-muted)/35 data-[state=inactive]:hover:text-highlighted data-[state=inactive]:border-transparent border-default" aria-label="Shipping" type="button" @click="openAction(&quot;Shipping&quot;)">
                                <p class="text-[15px] font-medium">Shipping</p>
                              </UButton>
                              <UButton color="primary" variant="solid" class="rounded-xl border px-4 py-3 text-left transition-colors data-[state=active]:border-(--ui-text-highlighted) data-[state=active]:bg-(--ui-text-highlighted) data-[state=active]:text-(--ui-bg) data-[state=inactive]:text-(--ui-text-highlighted)/80 data-[state=inactive]:hover:border-(--ui-border)/60 data-[state=inactive]:hover:bg-(--ui-bg-muted)/35 data-[state=inactive]:hover:text-highlighted data-[state=inactive]:border-transparent border-default" aria-label="Cards" type="button" @click="openAction(&quot;Cards&quot;)">
                                <p class="text-[15px] font-medium">Cards</p>
                              </UButton>
                              <UButton color="primary" variant="solid" class="rounded-xl border px-4 py-3 text-left transition-colors data-[state=active]:border-(--ui-text-highlighted) data-[state=active]:bg-(--ui-text-highlighted) data-[state=active]:text-(--ui-bg) data-[state=inactive]:text-(--ui-text-highlighted)/80 data-[state=inactive]:hover:border-(--ui-border)/60 data-[state=inactive]:hover:bg-(--ui-bg-muted)/35 data-[state=inactive]:hover:text-highlighted data-[state=inactive]:border-transparent border-default" aria-label="Preferences" type="button" @click="openAction(&quot;Preferences&quot;)">
                                <p class="text-[15px] font-medium">Preferences</p>
                              </UButton>
                            </div>
                          </div>
                        </aside>
                        <div class="min-h-0 overflow-hidden">
                          <div class="mb-4 flex gap-2 overflow-x-auto pb-1 lg:hidden">
                            <UButton color="primary" variant="solid" class="shrink-0 rounded-full border px-3 py-2 text-sm transition-colors data-[state=active]:border-(--ui-text-highlighted) data-[state=active]:bg-(--ui-text-highlighted) data-[state=active]:text-(--ui-bg) data-[state=inactive]:border-(--ui-border)/60 data-[state=inactive]:bg-default border-default" aria-label="Account" type="button" @click="openAction(&quot;Account&quot;)">
                              Account
                            </UButton>
                            <UButton color="primary" variant="solid" class="shrink-0 rounded-full border px-3 py-2 text-sm transition-colors data-[state=active]:border-(--ui-text-highlighted) data-[state=active]:bg-(--ui-text-highlighted) data-[state=active]:text-(--ui-bg) data-[state=inactive]:border-(--ui-border)/60 data-[state=inactive]:bg-default border-default" aria-label="Contacts" type="button" @click="openAction(&quot;Contacts&quot;)">
                              Contacts
                            </UButton>
                            <UButton color="primary" variant="solid" class="shrink-0 rounded-full border px-3 py-2 text-sm transition-colors data-[state=active]:border-(--ui-text-highlighted) data-[state=active]:bg-(--ui-text-highlighted) data-[state=active]:text-(--ui-bg) data-[state=inactive]:border-(--ui-border)/60 data-[state=inactive]:bg-default border-default" aria-label="Billing" type="button" @click="openAction(&quot;Billing&quot;)">
                              Billing
                            </UButton>
                            <UButton color="primary" variant="solid" class="shrink-0 rounded-full border px-3 py-2 text-sm transition-colors data-[state=active]:border-(--ui-text-highlighted) data-[state=active]:bg-(--ui-text-highlighted) data-[state=active]:text-(--ui-bg) data-[state=inactive]:border-(--ui-border)/60 data-[state=inactive]:bg-default border-default" aria-label="Shipping" type="button" @click="openAction(&quot;Shipping&quot;)">
                              Shipping
                            </UButton>
                            <UButton color="primary" variant="solid" class="shrink-0 rounded-full border px-3 py-2 text-sm transition-colors data-[state=active]:border-(--ui-text-highlighted) data-[state=active]:bg-(--ui-text-highlighted) data-[state=active]:text-(--ui-bg) data-[state=inactive]:border-(--ui-border)/60 data-[state=inactive]:bg-default border-default" aria-label="Cards" type="button" @click="openAction(&quot;Cards&quot;)">
                              Cards
                            </UButton>
                            <UButton color="primary" variant="solid" class="shrink-0 rounded-full border px-3 py-2 text-sm transition-colors data-[state=active]:border-(--ui-text-highlighted) data-[state=active]:bg-(--ui-text-highlighted) data-[state=active]:text-(--ui-bg) data-[state=inactive]:border-(--ui-border)/60 data-[state=inactive]:bg-default border-default" aria-label="Preferences" type="button" @click="openAction(&quot;Preferences&quot;)">
                              Preferences
                            </UButton>
                          </div>
                          <div data-orientation="vertical" class="min-h-0 h-full overflow-y-auto pr-2">
                            <div class="space-y-6 pb-24">
                              <section data-orientation="vertical" class="scroll-mt-6">
                                <div class="border-(--ui-border)/60 bg-default rounded-[24px] border p-6 shadow-[0_20px_45px_-34px_color-mix(in_oklab,_var(--ui-info)_16%,_transparent)] border-default">
                                  <div class="mb-5 space-y-1">
                                    <h2 class="text-lg font-semibold tracking-tight text-highlighted">Account</h2>
                                    <p class="text-muted text-sm leading-6">Identity, source, and internal ownership for this customer record.</p>
                                  </div>
                                  <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                                    <div class="grid gap-2">
                                      <label class="text-muted text-[11px] font-medium tracking-[0.18em] uppercase">First name</label>
                                      <UInput v-model="form.field1" type="text" name="field1" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default" :ui="{ base: 'h-full' }" />
                                    </div>
                                    <div class="grid gap-2">
                                      <label class="text-muted text-[11px] font-medium tracking-[0.18em] uppercase">Last name</label>
                                      <UInput v-model="form.field2" type="text" name="field2" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default" :ui="{ base: 'h-full' }" />
                                    </div>
                                    <div class="grid gap-2">
                                      <label class="text-muted text-[11px] font-medium tracking-[0.18em] uppercase">Customer ID</label>
                                      <UInput v-model="form.field3" type="text" name="field3" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default" :ui="{ base: 'h-full' }" />
                                    </div>
                                    <div class="grid gap-2">
                                      <label class="text-muted text-[11px] font-medium tracking-[0.18em] uppercase">Company</label>
                                      <UInput v-model="form.field4" type="text" name="field4" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default" :ui="{ base: 'h-full' }" />
                                    </div>
                                    <div class="grid gap-2">
                                      <label class="text-muted text-[11px] font-medium tracking-[0.18em] uppercase">Status</label>
                                      <USelect v-model="form.vIP" :items="vIPOptions" aria-label="VIP" class="ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between border px-3 py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-11 rounded-xl border-(--ui-border)/60 bg-default shadow-none border-default" />
                                    </div>
                                    <div class="grid gap-2">
                                      <label class="text-muted text-[11px] font-medium tracking-[0.18em] uppercase">Source</label>
                                      <USelect v-model="form.onlineStore" :items="onlineStoreOptions" aria-label="Online store" class="ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between border px-3 py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-11 rounded-xl border-(--ui-border)/60 bg-default shadow-none border-default" />
                                    </div>
                                    <div class="grid gap-2 xl:col-span-3">
                                      <label class="text-muted text-[11px] font-medium tracking-[0.18em] uppercase">Account owner</label>
                                      <USelect v-model="form.averyHall" :items="averyHallOptions" aria-label="Avery Hall" class="ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between border px-3 py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-11 rounded-xl border-(--ui-border)/60 bg-default shadow-none border-default" />
                                    </div>
                                  </div>
                                </div>
                              </section>
                              <section data-orientation="vertical" class="scroll-mt-6">
                                <div class="border-(--ui-border)/60 bg-default rounded-[24px] border p-6 shadow-[0_20px_45px_-34px_color-mix(in_oklab,_var(--ui-info)_16%,_transparent)] border-default">
                                  <div class="mb-5 space-y-1">
                                    <h2 class="text-lg font-semibold tracking-tight text-highlighted">Contacts</h2>
                                    <p class="text-muted text-sm leading-6">Keep the real people and preferred communication path attached to the account.</p>
                                  </div>
                                  <div class="border-(--ui-border)/60 bg-(--ui-bg-muted)/15 mb-5 grid gap-4 rounded-2xl border p-4 lg:grid-cols-[minmax(0,1fr)_220px_220px] border-default">
                                    <div class="grid gap-1">
                                      <p class="text-sm font-medium">Primary channel</p>
                                      <p class="text-muted text-sm leading-6">Choose how the team usually reaches this customer.</p>
                                    </div>
                                    <div class="grid gap-2">
                                      <label class="text-muted text-[11px] font-medium tracking-[0.18em] uppercase">Preferred channel</label>
                                      <USelect v-model="form.eMAIL" :items="eMAILOptions" aria-label="EMAIL" class="ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between border px-3 py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-11 rounded-xl border-(--ui-border)/60 bg-default shadow-none border-default" />
                                    </div>
                                    <div class="border-(--ui-border)/60 bg-default flex items-center justify-between rounded-xl border px-4 py-3 border-default">
                                      <div>
                                        <p class="text-sm font-medium">Marketing opt-in</p>
                                        <p class="text-muted text-xs">Include this customer in campaign sends</p>
                                      </div>
                                      <USwitch v-model="form.enabled" aria-label="Toggle setting" />
                                    </div>
                                  </div>
                                  <div class="space-y-4">
                                    <div class="border-(--ui-border)/60 bg-default rounded-2xl border p-4 border-default">
                                      <div class="mb-4 flex items-center justify-between gap-3">
                                        <div class="flex items-center gap-3">
                                          <div class="border-(--ui-border)/60 bg-(--ui-bg-muted)/20 flex h-10 w-10 items-center justify-center rounded-2xl border border-default">
                                            <UIcon name="i-lucide-user-round" class="size-4" />
                                          </div>
                                          <div>
                                            <p class="text-sm font-medium">Primary</p>
                                            <p class="text-muted text-xs">Customer contact</p>
                                          </div>
                                        </div>
                                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-xl" aria-label="Actions" type="button" disabled @click="openAction(&quot;Actions&quot;)">
                                          <UIcon name="i-lucide-trash-2" class="size-4" />
                                        </UButton>
                                      </div>
                                      <div class="grid gap-4 md:grid-cols-[180px_minmax(0,1fr)_220px]">
                                        <div class="grid gap-2">
                                          <label class="text-muted text-[11px] font-medium tracking-[0.18em] uppercase">Label</label>
                                          <UInput v-model="form.field10" type="text" name="field10" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default" :ui="{ base: 'h-full' }" />
                                        </div>
                                        <div class="grid gap-2">
                                          <label class="text-muted text-[11px] font-medium tracking-[0.18em] uppercase">Email</label>
                                          <div class="relative">
                                            <UIcon name="i-lucide-mail" class="text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                                            <UInput v-model="form.field11" type="text" name="field11" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default pl-9" :ui="{ base: 'h-full' }" />
                                          </div>
                                        </div>
                                        <div class="grid gap-2">
                                          <label class="text-muted text-[11px] font-medium tracking-[0.18em] uppercase">Phone</label>
                                          <div class="relative">
                                            <UIcon name="i-lucide-phone" class="text-muted absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                                            <UInput v-model="form.field12" type="text" name="field12" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default pl-9" :ui="{ base: 'h-full' }" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-full" aria-label="Add contact" type="button" @click="openAction(&quot;Add contact&quot;)">
                                      <UIcon name="i-lucide-plus" class="size-4" />
                                      Add contact
                                    </UButton>
                                  </div>
                                </div>
                              </section>
                              <section data-orientation="vertical" class="scroll-mt-6">
                                <div class="border-(--ui-border)/60 bg-default rounded-[24px] border p-6 shadow-[0_20px_45px_-34px_color-mix(in_oklab,_var(--ui-info)_16%,_transparent)] border-default">
                                  <div class="mb-5 space-y-1">
                                    <h2 class="text-lg font-semibold tracking-tight text-highlighted">Billing address</h2>
                                    <p class="text-muted text-sm leading-6">Where invoices, statements, and account paperwork should land.</p>
                                  </div>
                                  <div class="grid gap-4 md:grid-cols-2">
                                    <UInput v-model="form.billingContactName" type="text" placeholder="Billing contact name" name="billingContactName" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default" :ui="{ base: 'h-full' }" />
                                    <div class="hidden md:block" />
                                    <UInput v-model="form.streetAddress" type="text" placeholder="Street address" name="streetAddress" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default md:col-span-2" :ui="{ base: 'h-full' }" />
                                    <UInput v-model="form.suiteBuildingFloor" type="text" placeholder="Suite, building, floor" name="suiteBuildingFloor" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default md:col-span-2" :ui="{ base: 'h-full' }" />
                                    <UInput v-model="form.city" type="text" placeholder="City" name="city" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default" :ui="{ base: 'h-full' }" />
                                    <UInput v-model="form.state" type="text" placeholder="State" name="state" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default" :ui="{ base: 'h-full' }" />
                                    <UInput v-model="form.zIPCode" type="text" placeholder="ZIP code" name="zIPCode" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default" :ui="{ base: 'h-full' }" />
                                    <UInput v-model="form.country" type="text" placeholder="Country" name="country" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default" :ui="{ base: 'h-full' }" />
                                  </div>
                                </div>
                              </section>
                              <section data-orientation="vertical" class="scroll-mt-6">
                                <div class="border-(--ui-border)/60 bg-default rounded-[24px] border p-6 shadow-[0_20px_45px_-34px_color-mix(in_oklab,_var(--ui-info)_16%,_transparent)] border-default">
                                  <div class="mb-5 space-y-1">
                                    <h2 class="text-lg font-semibold tracking-tight text-highlighted">Shipping addresses</h2>
                                    <p class="text-muted text-sm leading-6">Keep delivery points separate so repeat orders can route cleanly.</p>
                                  </div>
                                  <div class="space-y-4">
                                    <div class="border-(--ui-border)/60 bg-default rounded-2xl border p-4 border-default">
                                      <div class="mb-4 flex items-center justify-between gap-3">
                                        <div class="flex items-center gap-3">
                                          <div class="border-(--ui-border)/60 bg-(--ui-bg-muted)/20 flex h-10 w-10 items-center justify-center rounded-2xl border border-default">
                                            <UIcon name="i-lucide-map-pin" class="size-4" />
                                          </div>
                                          <div>
                                            <p class="text-sm font-medium">Primary shipping</p>
                                            <p class="text-muted text-xs">Delivery destination</p>
                                          </div>
                                        </div>
                                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-xl" aria-label="Actions" type="button" disabled @click="openAction(&quot;Actions&quot;)">
                                          <UIcon name="i-lucide-trash-2" class="size-4" />
                                        </UButton>
                                      </div>
                                      <div class="grid gap-4 md:grid-cols-2">
                                        <UInput v-model="form.label" type="text" placeholder="Label" name="label" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default" :ui="{ base: 'h-full' }" />
                                        <UInput v-model="form.recipient" type="text" placeholder="Recipient" name="recipient" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default" :ui="{ base: 'h-full' }" />
                                        <UInput v-model="form.streetAddress2" type="text" placeholder="Street address" name="streetAddress2" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default md:col-span-2" :ui="{ base: 'h-full' }" />
                                        <UInput v-model="form.suiteBuildingFloor2" type="text" placeholder="Suite, building, floor" name="suiteBuildingFloor2" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default md:col-span-2" :ui="{ base: 'h-full' }" />
                                        <UInput v-model="form.city2" type="text" placeholder="City" name="city2" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default" :ui="{ base: 'h-full' }" />
                                        <UInput v-model="form.state2" type="text" placeholder="State" name="state2" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default" :ui="{ base: 'h-full' }" />
                                        <UInput v-model="form.zIPCode2" type="text" placeholder="ZIP code" name="zIPCode2" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default" :ui="{ base: 'h-full' }" />
                                        <UInput v-model="form.country2" type="text" placeholder="Country" name="country2" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default" :ui="{ base: 'h-full' }" />
                                      </div>
                                    </div>
                                  </div>
                                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 mt-5 rounded-full" aria-label="Add shipping address" type="button" @click="openAction(&quot;Add shipping address&quot;)">
                                    <UIcon name="i-lucide-plus" class="size-4" />
                                    Add shipping address
                                  </UButton>
                                </div>
                              </section>
                              <section data-orientation="vertical" class="scroll-mt-6">
                                <div class="border-(--ui-border)/60 bg-default rounded-[24px] border p-6 shadow-[0_20px_45px_-34px_color-mix(in_oklab,_var(--ui-info)_16%,_transparent)] border-default">
                                  <div class="mb-5 space-y-1">
                                    <h2 class="text-lg font-semibold tracking-tight text-highlighted">Saved cards</h2>
                                    <p class="text-muted text-sm leading-6">Keep one default payment method visible, with backups underneath.</p>
                                  </div>
                                  <div class="space-y-4">
                                    <div class="border-(--ui-border)/60 bg-default rounded-2xl border p-4 border-default">
                                      <div class="mb-4 flex items-center justify-between gap-3">
                                        <div class="flex items-center gap-3">
                                          <div class="border-(--ui-border)/60 bg-(--ui-bg-muted)/20 flex h-10 w-10 items-center justify-center rounded-2xl border border-default">
                                            <UIcon name="i-lucide-credit-card" class="size-4" />
                                          </div>
                                          <div>
                                            <p class="text-sm font-medium">Visa ending in4242</p>
                                            <p class="text-muted text-xs">Default payment source</p>
                                          </div>
                                        </div>
                                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-xl" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                                          <UIcon name="i-lucide-trash-2" class="size-4" />
                                        </UButton>
                                      </div>
                                      <div class="grid gap-4 md:grid-cols-[150px_120px_120px_minmax(0,1fr)]">
                                        <USelect v-model="form.visa" :items="visaOptions" aria-label="Visa" class="ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between border px-3 py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-11 rounded-xl border-(--ui-border)/60 bg-default shadow-none border-default" />
                                        <UInput v-model="form.last4" type="text" placeholder="Last 4" name="last4" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default" :ui="{ base: 'h-full' }" />
                                        <UInput v-model="form.mMYY" type="text" placeholder="MM/YY" name="mMYY" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default" :ui="{ base: 'h-full' }" />
                                        <UInput v-model="form.cardholder" type="text" placeholder="Cardholder" name="cardholder" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default" :ui="{ base: 'h-full' }" />
                                      </div>
                                      <div class="border-(--ui-border)/60 bg-(--ui-bg-muted)/10 mt-4 flex items-center justify-between rounded-xl border px-4 py-3 border-default">
                                        <div>
                                          <p class="text-sm font-medium">Default card</p>
                                          <p class="text-muted text-xs">Keep one preferred payment method pinned.</p>
                                        </div>
                                        <USwitch v-model="form.enabled2" aria-label="Toggle setting" />
                                      </div>
                                    </div>
                                    <div class="border-(--ui-border)/60 bg-default rounded-2xl border p-4 border-default">
                                      <div class="mb-4 flex items-center justify-between gap-3">
                                        <div class="flex items-center gap-3">
                                          <div class="border-(--ui-border)/60 bg-(--ui-bg-muted)/20 flex h-10 w-10 items-center justify-center rounded-2xl border border-default">
                                            <UIcon name="i-lucide-credit-card" class="size-4" />
                                          </div>
                                          <div>
                                            <p class="text-sm font-medium">Amex ending in1034</p>
                                            <p class="text-muted text-xs">Backup payment source</p>
                                          </div>
                                        </div>
                                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-xl" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                                          <UIcon name="i-lucide-trash-2" class="size-4" />
                                        </UButton>
                                      </div>
                                      <div class="grid gap-4 md:grid-cols-[150px_120px_120px_minmax(0,1fr)]">
                                        <USelect v-model="form.amex" :items="amexOptions" aria-label="Amex" class="ring-offset-background placeholder:text-muted focus:ring-accented flex w-full items-center justify-between border px-3 py-2 text-sm whitespace-nowrap focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 h-11 rounded-xl border-(--ui-border)/60 bg-default shadow-none border-default" />
                                        <UInput v-model="form.last42" type="text" placeholder="Last 4" name="last42" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default" :ui="{ base: 'h-full' }" />
                                        <UInput v-model="form.mMYY2" type="text" placeholder="MM/YY" name="mMYY2" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default" :ui="{ base: 'h-full' }" />
                                        <UInput v-model="form.cardholder2" type="text" placeholder="Cardholder" name="cardholder2" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default" :ui="{ base: 'h-full' }" />
                                      </div>
                                      <div class="border-(--ui-border)/60 bg-(--ui-bg-muted)/10 mt-4 flex items-center justify-between rounded-xl border px-4 py-3 border-default">
                                        <div>
                                          <p class="text-sm font-medium">Default card</p>
                                          <p class="text-muted text-xs">Keep one preferred payment method pinned.</p>
                                        </div>
                                        <USwitch v-model="form.enabled3" aria-label="Toggle setting" />
                                      </div>
                                    </div>
                                  </div>
                                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 mt-5 rounded-full" aria-label="Add card" type="button" @click="openAction(&quot;Add card&quot;)">
                                    <UIcon name="i-lucide-plus" class="size-4" />
                                    Add card
                                  </UButton>
                                </div>
                              </section>
                              <section data-orientation="vertical" class="scroll-mt-6">
                                <div class="border-(--ui-border)/60 bg-default rounded-[24px] border p-6 shadow-[0_20px_45px_-34px_color-mix(in_oklab,_var(--ui-info)_16%,_transparent)] border-default">
                                  <div class="mb-5 space-y-1">
                                    <h2 class="text-lg font-semibold tracking-tight text-highlighted">Preferences &amp; notes</h2>
                                    <p class="text-muted text-sm leading-6">Segments, internal notes, and lightweight account context.</p>
                                  </div>
                                  <div class="grid gap-6">
                                    <div class="grid gap-3">
                                      <div class="grid gap-2">
                                        <label class="text-muted text-[11px] font-medium tracking-[0.18em] uppercase">Segments</label>
                                        <div class="flex flex-wrap gap-2">
                                          <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-full px-3 py-1 border-default">
                                            VIP
                                            <UButton color="neutral" variant="ghost" class="ml-2" aria-label="x" type="button" @click="openAction(&quot;x&quot;)">
                                              x
                                            </UButton>
                                          </div>
                                          <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-full px-3 py-1 border-default">
                                            Skincare Routine
                                            <UButton color="neutral" variant="ghost" class="ml-2" aria-label="x" type="button" @click="openAction(&quot;x&quot;)">
                                              x
                                            </UButton>
                                          </div>
                                          <div class="inline-flex items-center border text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 rounded-full px-3 py-1 border-default">
                                            High retention
                                            <UButton color="neutral" variant="ghost" class="ml-2" aria-label="x" type="button" @click="openAction(&quot;x&quot;)">
                                              x
                                            </UButton>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="flex flex-col gap-3 sm:flex-row">
                                        <UInput v-model="form.addSegment" type="text" placeholder="Add segment" name="addSegment" class="flex w-full text-base md:text-sm h-11 rounded-xl bg-default sm:flex-1" :ui="{ base: 'h-full' }" />
                                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-full" aria-label="Add segment" type="button" @click="openAction(&quot;Add segment&quot;)">
                                          <UIcon name="i-lucide-plus" class="size-4" />
                                          Add segment
                                        </UButton>
                                      </div>
                                    </div>
                                    <div class="grid gap-2">
                                      <label class="text-muted text-[11px] font-medium tracking-[0.18em] uppercase">Notes</label>
                                      <UTextarea v-model="form.internalNotes" :rows="4" placeholder="Internal notes" name="internalNotes" class="flex w-full text-base md:text-sm bg-default min-h-36 rounded-2xl" :ui="{ base: 'h-full' }" />
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <footer class="border-(--ui-border)/70 bg-default border-t px-6 py-4 border-default">
                  <div class="flex flex-wrap items-center justify-end gap-2">
                    <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-full" to="/ecommerce/customer-list-1">
                      Cancel
                    </NuxtLink>
                    <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 py-2 rounded-full px-6" aria-label="Save customer" type="button" @click="openAction(&quot;Save customer&quot;)">
                      Save customer
                    </UButton>
                  </div>
                </footer>
              </div>
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
