<!-- Page: /ecommerce/customer-detail-1 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Customer Detail 1 · Blocks Admin" })

const toast = useToast()

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "Purchases",
    "value": "0"
  },
  {
    "label": "Reviews",
    "value": "1"
  },
  {
    "label": "Activity",
    "value": "2"
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
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ecommerce/customer-detail-1">
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
                <span class="text-muted">Customer Detail 1</span>
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
            <div class="flex flex-col">
              <div class="flex flex-col p-6 md:p-8">
                <div class="flex flex-col gap-5 pb-6 md:hidden">
                  <div class="flex items-center gap-2 text-xs">
                    <span class="text-highlighted font-medium">Acme Store</span>
                    <span class="text-muted">/</span>
                    <span class="text-highlighted font-medium">Customers</span>
                  </div>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-9 rounded-md border shadow-none border-default" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                    <UIcon name="i-lucide-arrow-left" class="size-4" />
                  </UButton>
                  <div class="flex items-start gap-3">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full size-14">
                      <img class="aspect-square h-full w-full" alt="Theo Hammond" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                    </span>
                    <div class="flex min-w-0 flex-1 flex-col gap-2">
                      <h1 class="text-2xl font-semibold tracking-tight text-highlighted">Theo Hammond</h1>
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm bg-success/10 text-success hover:bg-success/10 border-default">Active</div>
                        <span class="text-muted text-sm">CUS-1742</span>
                      </div>
                    </div>
                  </div>
                  <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 px-4 py-2 h-11 rounded-xl shadow-none" aria-label="Send message" type="button" @click="openAction(&quot;Send message&quot;)">
                    <UIcon name="i-lucide-message-square-more" class="size-4" />
                    Send message
                  </UButton>
                </div>
                <div class="hidden items-start justify-between gap-6 pb-8 md:flex">
                  <div class="flex min-w-0 items-start gap-4">
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-10 rounded-full" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                      <UIcon name="i-lucide-arrow-left" class="size-4" />
                    </UButton>
                    <span class="relative flex shrink-0 overflow-hidden rounded-full size-16">
                      <img class="aspect-square h-full w-full" alt="Theo Hammond" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                    </span>
                    <div class="flex min-w-0 flex-col gap-3">
                      <h1 class="text-4xl font-medium tracking-tight text-highlighted">Theo Hammond</h1>
                      <div class="flex flex-wrap items-center gap-2 text-sm">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent shadow-sm bg-success/10 text-success hover:bg-success/10 border-default">Active</div>
                        <span class="text-muted">•</span>
                        <span class="text-muted">Customer ID CUS-1742</span>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col items-end gap-3">
                    <div class="flex items-center gap-2">
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-9 rounded-lg" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                        <UIcon name="i-lucide-ellipsis" class="size-4" />
                      </UButton>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 rounded-lg" aria-label="Send Message" type="button" @click="openAction(&quot;Send Message&quot;)">
                        <UIcon name="i-lucide-message-square-more" class="size-4" />
                        Send Message
                      </UButton>
                    </div>
                  </div>
                </div>
                <div data-orientation="horizontal" class="pb-2">
                  <div class="overflow-x-auto border-b border-default">
                    <UTabs v-model="tabs1Active" :items="tabs1Items" :content="false" color="primary" variant="link" class="text-muted inline-flex items-center rounded-lg h-auto justify-start gap-5 bg-transparent p-0" data-orientation="horizontal" style="outline:none" />
                  </div>
                  <div class="grid gap-8 pt-6 xl:grid-cols-[minmax(0,1fr)_1px_340px] xl:gap-8">
                    <div class="flex flex-col gap-6">
                      <div data-orientation="horizontal" id="radix-_R_3av5uiv5uknmlb_-content-reviews" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 flex flex-col gap-6" />
                      <div data-orientation="horizontal" id="radix-_R_3av5uiv5uknmlb_-content-purchases" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 flex flex-col gap-5" style="animation-duration:0s">
                        <div class="flex flex-col gap-5">
                          <article class="flex flex-col gap-5">
                            <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                              <div class="flex flex-col gap-1">
                                <div class="flex flex-wrap items-center gap-2">
                                  <span class="text-base font-semibold">ORD-34021</span>
                                  <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-warning/10 text-warning hover:bg-warning/10 border-default">Processing</div>
                                </div>
                                <p class="text-muted text-sm">Placed on Mar 18, 2026 • Online Store</p>
                              </div>
                              <div class="text-left sm:text-right">
                                <p class="text-muted text-xs tracking-[0.16em] uppercase">Order total</p>
                                <p class="text-lg font-semibold text-highlighted">$389.00</p>
                              </div>
                            </div>
                            <div class="mt-5 flex flex-col gap-4">
                              <div class="flex items-center gap-3">
                                <div class="bg-muted relative size-12 overflow-hidden rounded-md">
                                  <img alt="Radiance Ritual Set" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/6316e6ac87fcaa0e.jpg" loading="lazy" />
                                </div>
                                <div class="min-w-0">
                                  <p class="truncate text-sm font-medium">Radiance Ritual Set</p>
                                  <p class="text-muted text-xs">SKU-SKIN-4006</p>
                                </div>
                              </div>
                              <div class="flex items-center gap-3">
                                <div class="bg-muted relative size-12 overflow-hidden rounded-md">
                                  <img alt="Barrier Repair Drops" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/a6971d86435f2b61.jpg" loading="lazy" />
                                </div>
                                <div class="min-w-0">
                                  <p class="truncate text-sm font-medium">Barrier Repair Drops</p>
                                  <p class="text-muted text-xs">SKU-TREAT-6612</p>
                                </div>
                              </div>
                            </div>
                          </article>
                          <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                        </div>
                        <div class="flex flex-col gap-5">
                          <article class="flex flex-col gap-5">
                            <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                              <div class="flex flex-col gap-1">
                                <div class="flex flex-wrap items-center gap-2">
                                  <span class="text-base font-semibold">ORD-33682</span>
                                  <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default">Delivered</div>
                                </div>
                                <p class="text-muted text-sm">Placed on Feb 27, 2026 • Marketplace</p>
                              </div>
                              <div class="text-left sm:text-right">
                                <p class="text-muted text-xs tracking-[0.16em] uppercase">Order total</p>
                                <p class="text-lg font-semibold text-highlighted">$168.00</p>
                              </div>
                            </div>
                            <div class="mt-5 flex flex-col gap-4">
                              <div class="flex items-center gap-3">
                                <div class="bg-muted relative size-12 overflow-hidden rounded-md">
                                  <img alt="Botanical Body Polish" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/8b166c336110df82.jpg" loading="lazy" />
                                </div>
                                <div class="min-w-0">
                                  <p class="truncate text-sm font-medium">Botanical Body Polish</p>
                                  <p class="text-muted text-xs">SKU-BODY-6118</p>
                                </div>
                              </div>
                            </div>
                          </article>
                          <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                        </div>
                        <div class="flex flex-col gap-5">
                          <article class="flex flex-col gap-5">
                            <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                              <div class="flex flex-col gap-1">
                                <div class="flex flex-wrap items-center gap-2">
                                  <span class="text-base font-semibold">ORD-33340</span>
                                  <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent font-normal bg-success/10 text-success hover:bg-success/10 border-default">Delivered</div>
                                </div>
                                <p class="text-muted text-sm">Placed on Jan 19, 2026 • Subscription</p>
                              </div>
                              <div class="text-left sm:text-right">
                                <p class="text-muted text-xs tracking-[0.16em] uppercase">Order total</p>
                                <p class="text-lg font-semibold text-highlighted">$84.00</p>
                              </div>
                            </div>
                            <div class="mt-5 flex flex-col gap-4">
                              <div class="flex items-center gap-3">
                                <div class="bg-muted relative size-12 overflow-hidden rounded-md">
                                  <img alt="Barrier Repair Drops" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="/reference/a6971d86435f2b61.jpg" loading="lazy" />
                                </div>
                                <div class="min-w-0">
                                  <p class="truncate text-sm font-medium">Barrier Repair Drops</p>
                                  <p class="text-muted text-xs">SKU-TREAT-6612</p>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                      <div data-orientation="horizontal" id="radix-_R_3av5uiv5uknmlb_-content-activity" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0 flex flex-col gap-6" />
                    </div>
                    <div data-orientation="vertical" role="none" class="bg-(--ui-border) shrink-0 h-full w-[1px] hidden xl:block xl:h-auto" />
                    <div class="flex flex-col gap-5">
                      <!-- Card 1: Customer details -->
                      <UCard class="rounded-lg shadow-none" :ui="{ body: 'contents' }">
                        <div class="p-6 flex flex-col gap-6 pt-5">
                          <div class="flex flex-col gap-5">
                            <div class="flex items-center justify-between gap-3">
                              <h3 class="font-medium text-highlighted">Customer details</h3>
                            </div>
                            <div class="grid gap-4 text-sm">
                              <div class="flex items-start justify-between gap-4">
                                <span class="text-muted">Customer source</span>
                                <span class="font-medium">Online Store</span>
                              </div>
                              <div class="flex items-start justify-between gap-4">
                                <span class="text-muted">Last online</span>
                                <span class="font-medium">22 Mar 2026, 11:24 AM</span>
                              </div>
                            </div>
                          </div>
                          <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                          <div class="flex flex-col gap-5">
                            <div class="flex items-center justify-between gap-3">
                              <h3 class="font-medium text-highlighted">Shipping address</h3>
                              <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-md" to="/ecommerce/edit-customer/cus-1742">
                                <UIcon name="i-lucide-pencil" class="size-4" />
                              </NuxtLink>
                            </div>
                            <div class="relative overflow-hidden rounded-md border border-default">
                              <div class="h-36 w-full">
                                <div class="relative h-full w-full maplibregl-map">
                                  <div class="bg-(--ui-bg)/50 absolute inset-0 z-10 flex items-center justify-center backdrop-blur-xs">
                                    <div class="flex gap-1">
                                      <span class="bg-(--ui-text-muted)/60 size-1.5 animate-pulse rounded-full" />
                                      <span class="bg-(--ui-text-muted)/60 size-1.5 animate-pulse rounded-full [animation-delay:150ms]" />
                                      <span class="bg-(--ui-text-muted)/60 size-1.5 animate-pulse rounded-full [animation-delay:300ms]" />
                                    </div>
                                  </div>
                                  <div class="maplibregl-canvas-container">
                                    <canvas class="maplibregl-canvas" aria-label="Map" role="region" width="288" height="144" style="width: 288px; height: 144px;" />
                                  </div>
                                  <div class="maplibregl-control-container">
                                    <div class="maplibregl-ctrl-top-left" />
                                    <div class="maplibregl-ctrl-top-right" />
                                    <div class="maplibregl-ctrl-bottom-left" />
                                    <div class="maplibregl-ctrl-bottom-right" />
                                  </div>
                                </div>
                              </div>
                              <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
                                <div class="relative flex items-center justify-center">
                                  <span class="bg-primary/15 absolute size-10 rounded-full" />
                                  <div class="bg-primary text-inverted relative flex size-8 items-center justify-center rounded-full border-2 border-inverted shadow-sm">
                                    <UIcon name="i-lucide-map-pin" class="size-4" />
                                  </div>
                                </div>
                              </div>
                              <div class="pointer-events-none absolute top-3 left-3">
                                <div class="bg-(--ui-bg)/95 rounded-sm border px-2.5 py-1 text-xs font-medium shadow-sm border-default">Seattle, WA</div>
                              </div>
                            </div>
                            <div class="flex flex-col gap-3 px-1">
                              <div class="flex flex-col gap-1">
                                <p class="font-medium">Theo Hammond</p>
                                <p class="text-muted text-sm leading-6">
                                  7841 Mercer Street, Suite 12
                                  <br />
                                  Capitol Hill, Building North
                                  <br />
                                  Seattle, WA 98102,United States
                                </p>
                              </div>
                            </div>
                          </div>
                          <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                          <div class="flex flex-col gap-5">
                            <div class="flex items-center justify-between gap-3">
                              <h3 class="font-medium text-highlighted">Contact information</h3>
                              <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8 rounded-md" to="/ecommerce/edit-customer/cus-1742">
                                <UIcon name="i-lucide-pencil" class="size-4" />
                              </NuxtLink>
                            </div>
                            <div class="flex flex-wrap gap-2">
                              <div class="inline-flex items-center border text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-3 py-1 font-normal border-default">theo.hammond@caldwell.app</div>
                              <div class="inline-flex items-center border text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted rounded-md px-3 py-1 font-normal border-default">+1 (206) 555-0198</div>
                            </div>
                          </div>
                          <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                          <div class="flex flex-col gap-4">
                            <div class="flex items-center justify-between gap-3">
                              <h3 class="font-medium text-highlighted">Segments</h3>
                            </div>
                            <div class="flex flex-wrap gap-2">
                              <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 font-normal border-default">VIP</div>
                              <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 font-normal border-default">Skincare Routine</div>
                              <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 font-normal border-default">High retention</div>
                            </div>
                          </div>
                        </div>
                      </UCard>
                    </div>
                  </div>
                </div>
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
