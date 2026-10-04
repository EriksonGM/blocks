<!-- Page: /payment-processor/customer-detail-3 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Customer Detail 3 · Blocks Admin" })

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/customer-detail-3">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted flex min-h-0 flex-1 overflow-hidden">
          <div class="min-h-0 w-full flex-1 overflow-y-auto">
            <section class="px-6 py-10 lg:px-8 lg:py-12">
              <div class="mx-auto grid max-w-[1080px] gap-10 lg:grid-cols-[minmax(0,720px)_260px]">
                <div class="flex flex-col gap-4">
                  <div class="text-default bg-(--ui-bg-muted)/30 rounded-lg border-0 shadow-none">
                    <div class="flex flex-col space-y-1.5 p-6">
                      <div class="flex items-start justify-between gap-6">
                        <div class="flex min-w-0 items-center gap-4">
                          <span class="relative flex shrink-0 overflow-hidden rounded-full size-14">
                            <span class="bg-muted flex h-full w-full items-center justify-center rounded-full">NS</span>
                          </span>
                          <div class="min-w-0">
                            <div class="font-semibold tracking-tight truncate text-sm">Northstar Supply Co.</div>
                            <p class="text-muted mt-1 text-sm">Business customer</p>
                          </div>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-8" aria-label="Edit customer profile" type="button" @click="openAction(&quot;Edit customer profile&quot;)">
                          <UIcon name="i-lucide-pencil" class="size-4" />
                        </UButton>
                      </div>
                    </div>
                    <div class="p-6 px-6 pt-0 pb-6">
                      <div class="grid gap-6 text-sm sm:grid-cols-[minmax(0,1.25fr)_minmax(0,1.45fr)_0.7fr]">
                        <div class="min-w-0">
                          <p class="text-muted">Email</p>
                          <p class="mt-1.5 flex min-w-0 items-center gap-2 font-medium">
                            <UIcon name="i-lucide-mail" class="size-4 shrink-0" />
                            <span class="truncate">billing@northstarsupply.com</span>
                          </p>
                        </div>
                        <div class="min-w-0">
                          <p class="text-muted">Customer ID</p>
                          <p class="mt-1.5 truncate font-medium">cus_0Nc5kjuQhtcEhS2p6SOxz</p>
                        </div>
                        <div>
                          <p class="text-muted">Created</p>
                          <p class="mt-1.5 font-medium">6 Apr 2026</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-default bg-(--ui-bg-muted)/30 rounded-lg border-0 shadow-none">
                    <div class="flex flex-col space-y-1.5 p-6 pb-4">
                      <div class="flex items-center justify-between gap-5">
                        <div class="font-semibold tracking-tight text-sm">Transaction history</div>
                      </div>
                    </div>
                    <div class="p-6 px-6 pt-0 pb-5">
                      <div class="flex flex-col">
                        <div>
                          <div class="grid gap-3 py-3 text-sm sm:grid-cols-[minmax(0,1fr)_auto]">
                            <div class="min-w-0">
                              <div class="flex min-w-0 items-center gap-2">
                                <p class="truncate font-medium">Invoice payment</p>
                                <div class="inline-flex items-center py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-5 rounded-md border px-1.5 text-[11px] font-medium shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success">Succeeded</div>
                              </div>
                              <p class="text-muted mt-1">Visa 4242 / Jun 19</p>
                            </div>
                            <div class="font-medium tabular-nums sm:text-right">$18,420.00</div>
                          </div>
                          <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                        </div>
                        <div>
                          <div class="grid gap-3 py-3 text-sm sm:grid-cols-[minmax(0,1fr)_auto]">
                            <div class="min-w-0">
                              <div class="flex min-w-0 items-center gap-2">
                                <p class="truncate font-medium">Subscription renewal</p>
                                <div class="inline-flex items-center py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-5 rounded-md border px-1.5 text-[11px] font-medium shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success">Succeeded</div>
                              </div>
                              <p class="text-muted mt-1">ACH 7781 / Jun 14</p>
                            </div>
                            <div class="font-medium tabular-nums sm:text-right">$2,400.00</div>
                          </div>
                          <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                        </div>
                        <div>
                          <div class="grid gap-3 py-3 text-sm sm:grid-cols-[minmax(0,1fr)_auto]">
                            <div class="min-w-0">
                              <div class="flex min-w-0 items-center gap-2">
                                <p class="truncate font-medium">Payment retry</p>
                                <div class="inline-flex items-center py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-5 rounded-md border px-1.5 text-[11px] font-medium shadow-none border-error/20 bg-error/10 text-error dark:border-error/20 dark:bg-error/30 dark:text-error">Declined</div>
                              </div>
                              <p class="text-muted mt-1">Mastercard 1881 / Jun 08</p>
                            </div>
                            <div class="font-medium tabular-nums sm:text-right">$840.00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-default bg-(--ui-bg-muted)/30 rounded-lg border-0 shadow-none">
                    <div class="flex flex-col space-y-1.5 p-6 pb-4">
                      <div class="flex items-center justify-between gap-5">
                        <div class="font-semibold tracking-tight text-sm">Active subscriptions</div>
                      </div>
                    </div>
                    <div class="p-6 px-6 pt-0 pb-5">
                      <div class="flex flex-col">
                        <div>
                          <div class="grid gap-3 py-3 text-sm sm:grid-cols-[minmax(0,1fr)_auto]">
                            <div class="min-w-0">
                              <p class="truncate font-medium">Platform processing</p>
                              <p class="text-muted mt-1">Monthly / Renews Jul 06</p>
                            </div>
                            <div class="font-medium tabular-nums sm:text-right">$2,400.00</div>
                          </div>
                          <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                        </div>
                        <div>
                          <div class="grid gap-3 py-3 text-sm sm:grid-cols-[minmax(0,1fr)_auto]">
                            <div class="min-w-0">
                              <p class="truncate font-medium">Advanced risk monitoring</p>
                              <p class="text-muted mt-1">Monthly / Renews Jul 12</p>
                            </div>
                            <div class="font-medium tabular-nums sm:text-right">$480.00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="text-default bg-(--ui-bg-muted)/30 rounded-lg border-0 shadow-none">
                    <div class="flex flex-col space-y-1.5 p-5">
                      <div class="flex items-center justify-between gap-4">
                        <div class="font-semibold tracking-tight text-sm">Delete customer</div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-error size-8" aria-label="Delete customer" type="button" @click="openAction(&quot;Delete customer&quot;)">
                          <UIcon name="i-lucide-trash-2" class="size-4" />
                        </UButton>
                      </div>
                    </div>
                  </div>
                </div>
                <aside class="flex flex-col gap-5 pt-0.5">
                  <dl class="flex flex-col gap-4">
                    <div class="flex items-center justify-between gap-5">
                      <dt class="text-sm font-medium">Open invoices</dt>
                      <dd class="text-muted text-sm tabular-nums">11</dd>
                    </div>
                    <div class="flex items-center justify-between gap-5">
                      <dt class="text-sm font-medium">Payment methods</dt>
                      <dd class="text-muted text-sm tabular-nums">3 items</dd>
                    </div>
                    <div class="flex items-center justify-between gap-5">
                      <dt class="text-sm font-medium">Saved mandates</dt>
                      <dd class="text-muted text-sm tabular-nums">2 items</dd>
                    </div>
                    <div class="flex items-center justify-between gap-5">
                      <dt class="text-sm font-medium">Risk status</dt>
                      <dd class="text-muted text-sm tabular-nums">Clear</dd>
                    </div>
                    <div class="flex items-center justify-between gap-5">
                      <dt class="text-sm font-medium">Customer ID</dt>
                      <dd class="text-muted text-sm tabular-nums">cus_0Nc...SOxz</dd>
                    </div>
                  </dl>
                  <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                  <dl class="flex flex-col gap-4">
                    <div class="flex items-center justify-between gap-5">
                      <dt class="text-sm font-medium">Last payment</dt>
                      <dd class="text-muted flex items-center gap-2 text-sm">
                        <UIcon name="i-lucide-activity" class="size-3.5" />
                        3h ago
                      </dd>
                    </div>
                    <div class="flex items-center justify-between gap-5">
                      <dt class="text-sm font-medium">Last edited</dt>
                      <dd class="text-muted flex items-center gap-2 text-sm">Jun 18</dd>
                    </div>
                    <div class="flex items-center justify-between gap-5">
                      <dt class="text-sm font-medium">Created</dt>
                      <dd class="text-muted flex items-center gap-2 text-sm">Apr 06</dd>
                    </div>
                  </dl>
                </aside>
              </div>
            </section>
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
