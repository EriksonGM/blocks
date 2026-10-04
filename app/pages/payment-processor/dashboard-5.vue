<!-- Page: /payment-processor/dashboard-5 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Dashboard 5 · Blocks Admin" })

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/dashboard-5">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-(--ui-bg-muted)/40 text-highlighted relative min-h-0 flex-1 overflow-y-auto jetbrains_mono_34ec1b8b-module__V2O7mW__className">
          <div class="relative mx-auto flex w-full max-w-[1560px] flex-col gap-4 p-3 sm:p-4 lg:p-6">
            <section class="group/card border-(--ui-border)/70 bg-(--ui-bg)/80 relative overflow-hidden border backdrop-blur p-4 lg:p-5 border-default">
              <div class="flex flex-col gap-5">
                <div class="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
                  <div class="flex min-w-0 flex-wrap items-center gap-3">
                    <h1 class="text-highlighted text-2xl font-medium tracking-tight text-balance text-highlighted">Payments Overview</h1>
                    <span class="bg-(--ui-bg-muted)/60 inline-flex items-center gap-1 border px-2.5 py-1 font-mono text-[10px] tracking-[0.16em] uppercase border-primary/25 text-primary">
                      <UIcon name="i-lucide-radio-tower" class="size-3 text-success dark:text-success" />
                      Live Mode
                    </span>
                  </div>
                  <div class="grid grid-cols-2 gap-2 sm:grid-cols-4 xl:flex xl:justify-end">
                    <UButton color="neutral" variant="outline" class="group/action border-(--ui-border)/70 bg-(--ui-bg-muted)/60 hover:border-primary/35 hover:bg-primary/10 focus-visible:ring-accented text-highlighted inline-flex h-9 items-center justify-center gap-2 border px-3 text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none" aria-label="Subscriptions" type="button" @click="navigateTo(&quot;/payment-processor/subscriptions&quot;)">
                      <UIcon name="i-lucide-refresh-cw" class="text-muted group-hover/action:text-primary size-3.5 transition-colors" />
                      Subscriptions
                    </UButton>
                    <UButton color="neutral" variant="outline" class="group/action border-(--ui-border)/70 bg-(--ui-bg-muted)/60 hover:border-primary/35 hover:bg-primary/10 focus-visible:ring-accented text-highlighted inline-flex h-9 items-center justify-center gap-2 border px-3 text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none" aria-label="Invoices" type="button" @click="openAction(&quot;Invoices&quot;)">
                      <UIcon name="i-lucide-file-text" class="text-muted group-hover/action:text-primary size-3.5 transition-colors" />
                      Invoices
                    </UButton>
                    <UButton color="neutral" variant="outline" class="group/action border-(--ui-border)/70 bg-(--ui-bg-muted)/60 hover:border-primary/35 hover:bg-primary/10 focus-visible:ring-accented text-highlighted inline-flex h-9 items-center justify-center gap-2 border px-3 text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none" aria-label="Users" type="button" @click="openAction(&quot;Users&quot;)">
                      <UIcon name="i-lucide-users" class="text-muted group-hover/action:text-primary size-3.5 transition-colors" />
                      Users
                    </UButton>
                    <UButton color="neutral" variant="outline" class="group/action border-(--ui-border)/70 bg-(--ui-bg-muted)/60 hover:border-primary/35 hover:bg-primary/10 focus-visible:ring-accented text-highlighted inline-flex h-9 items-center justify-center gap-2 border px-3 text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none" aria-label="Payouts" type="button" @click="openAction(&quot;Payouts&quot;)">
                      <UIcon name="i-lucide-wallet-cards" class="text-muted group-hover/action:text-primary size-3.5 transition-colors" />
                      Payouts
                    </UButton>
                  </div>
                </div>
                <div class="border-(--ui-border)/70 grid gap-4 border-t pt-5 xl:grid-cols-[minmax(0,520px)_1fr] border-default">
                  <div class="border-(--ui-border)/70 bg-(--ui-bg-muted)/40 grid gap-4 border p-4 sm:grid-cols-[150px_1fr] border-default">
                    <div class="flex items-center justify-center">
                      <div class="relative flex size-32 items-center justify-center rounded-full" style="background:conic-gradient(var(--ui-primary) 0deg 306deg, color-mix(in oklch, var(--ui-text-muted) 22%, transparent) 306deg 360deg)">
                        <div class="bg-default flex size-24 items-center justify-center rounded-full">
                          <span class="text-highlighted text-2xl font-semibold tabular-nums jetbrains_mono_34ec1b8b-module__V2O7mW__className">85%</span>
                        </div>
                      </div>
                    </div>
                    <div class="flex min-w-0 flex-col justify-center">
                      <p class="text-highlighted text-base font-semibold text-highlighted">Payment health</p>
                      <p class="text-muted mt-1 max-w-sm text-sm leading-5">Payouts are above baseline while open invoices remain contained.</p>
                      <div class="border-(--ui-border)/70 mt-5 grid grid-cols-2 gap-4 border-t pt-4 border-default">
                        <div>
                          <p class="text-muted text-xs">Gross volume</p>
                          <p class="text-highlighted mt-1 text-lg font-semibold tabular-nums jetbrains_mono_34ec1b8b-module__V2O7mW__className text-highlighted">$1.84M</p>
                        </div>
                        <div>
                          <p class="text-muted text-xs">Payout trend</p>
                          <p class="text-primary mt-1 text-lg font-semibold tabular-nums jetbrains_mono_34ec1b8b-module__V2O7mW__className text-highlighted">+8.9%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="grid gap-x-8 gap-y-5 py-1 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <p class="text-muted text-xs font-semibold text-highlighted">Window</p>
                      <p class="text-highlighted mt-1 text-sm font-medium tabular-nums jetbrains_mono_34ec1b8b-module__V2O7mW__className">Last 24 hours</p>
                    </div>
                    <div>
                      <p class="text-muted text-xs font-semibold text-highlighted">Active users</p>
                      <p class="text-highlighted mt-1 text-sm font-medium tabular-nums jetbrains_mono_34ec1b8b-module__V2O7mW__className">1,234</p>
                    </div>
                    <div>
                      <p class="text-muted text-xs font-semibold text-highlighted">New signups</p>
                      <p class="text-highlighted mt-1 text-sm font-medium tabular-nums jetbrains_mono_34ec1b8b-module__V2O7mW__className">56</p>
                    </div>
                    <div>
                      <p class="text-muted text-xs font-semibold text-highlighted">Subscriptions</p>
                      <p class="text-highlighted mt-1 text-sm font-medium tabular-nums jetbrains_mono_34ec1b8b-module__V2O7mW__className">1,284 active</p>
                    </div>
                    <div>
                      <p class="text-muted text-xs font-semibold text-highlighted">Payout queue</p>
                      <p class="text-highlighted mt-1 text-sm font-medium tabular-nums jetbrains_mono_34ec1b8b-module__V2O7mW__className">$318K</p>
                    </div>
                    <div>
                      <p class="text-muted text-xs font-semibold text-highlighted">Retention</p>
                      <p class="text-highlighted mt-1 text-sm font-medium tabular-nums jetbrains_mono_34ec1b8b-module__V2O7mW__className">88%</p>
                    </div>
                    <div>
                      <p class="text-muted text-xs font-semibold text-highlighted">Invoices</p>
                      <p class="text-highlighted mt-1 text-sm font-medium tabular-nums jetbrains_mono_34ec1b8b-module__V2O7mW__className">$42.7K open</p>
                    </div>
                    <div>
                      <p class="text-muted text-xs font-semibold text-highlighted">Avg. order</p>
                      <p class="text-highlighted mt-1 text-sm font-medium tabular-nums jetbrains_mono_34ec1b8b-module__V2O7mW__className">$85</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pointer-events-none absolute inset-0">
                <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 top-0 left-0">
                  <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                  <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                </div>
                <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 top-0 right-0 -scale-x-100">
                  <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                  <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                </div>
                <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 bottom-0 left-0 -scale-y-100">
                  <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                  <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                </div>
                <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 right-0 bottom-0 -scale-100">
                  <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                  <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                </div>
              </div>
            </section>
            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <section class="group/card border-(--ui-border)/70 bg-(--ui-bg)/80 relative overflow-hidden border backdrop-blur min-h-[150px] p-4 transition-transform duration-300 hover:-translate-y-0.5 border-default">
                <div class="flex h-full flex-col justify-between gap-8">
                  <div class="flex items-center justify-between gap-3">
                    <span class="border-(--ui-border)/70 bg-(--ui-bg-muted)/60 flex size-10 items-center justify-center border text-primary border-default">
                      <UIcon name="i-lucide-badge-dollar-sign" class="size-5" />
                    </span>
                    <span class="inline-flex items-center gap-1 font-mono text-xs text-primary">
                      <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                      +11.6%
                    </span>
                  </div>
                  <div>
                    <p class="text-muted font-mono text-[10px] tracking-[0.22em] uppercase">MRR</p>
                    <p class="text-highlighted mt-2 text-2xl font-semibold tabular-nums jetbrains_mono_34ec1b8b-module__V2O7mW__className text-highlighted">$284K</p>
                  </div>
                </div>
                <div class="pointer-events-none absolute inset-0">
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 top-0 left-0">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 top-0 right-0 -scale-x-100">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 bottom-0 left-0 -scale-y-100">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 right-0 bottom-0 -scale-100">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                </div>
              </section>
              <section class="group/card border-(--ui-border)/70 bg-(--ui-bg)/80 relative overflow-hidden border backdrop-blur min-h-[150px] p-4 transition-transform duration-300 hover:-translate-y-0.5 border-default">
                <div class="flex h-full flex-col justify-between gap-8">
                  <div class="flex items-center justify-between gap-3">
                    <span class="border-(--ui-border)/70 bg-(--ui-bg-muted)/60 flex size-10 items-center justify-center border text-primary border-default">
                      <UIcon name="i-lucide-shield-check" class="size-5" />
                    </span>
                    <span class="inline-flex items-center gap-1 font-mono text-xs text-primary">
                      <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                      +2.1%
                    </span>
                  </div>
                  <div>
                    <p class="text-muted font-mono text-[10px] tracking-[0.22em] uppercase">Auth rate</p>
                    <p class="text-highlighted mt-2 text-2xl font-semibold tabular-nums jetbrains_mono_34ec1b8b-module__V2O7mW__className text-highlighted">97.4%</p>
                  </div>
                </div>
                <div class="pointer-events-none absolute inset-0">
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 top-0 left-0">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 top-0 right-0 -scale-x-100">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 bottom-0 left-0 -scale-y-100">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 right-0 bottom-0 -scale-100">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                </div>
              </section>
              <section class="group/card border-(--ui-border)/70 bg-(--ui-bg)/80 relative overflow-hidden border backdrop-blur min-h-[150px] p-4 transition-transform duration-300 hover:-translate-y-0.5 border-default">
                <div class="flex h-full flex-col justify-between gap-8">
                  <div class="flex items-center justify-between gap-3">
                    <span class="border-(--ui-border)/70 bg-(--ui-bg-muted)/60 flex size-10 items-center justify-center border text-error border-default">
                      <UIcon name="i-lucide-fingerprint-pattern" class="size-5" />
                    </span>
                    <span class="inline-flex items-center gap-1 font-mono text-xs text-error">
                      <UIcon name="i-lucide-arrow-down-right" class="size-3.5" />
                      -6.3%
                    </span>
                  </div>
                  <div>
                    <p class="text-muted font-mono text-[10px] tracking-[0.22em] uppercase">Risk exposure</p>
                    <p class="text-highlighted mt-2 text-2xl font-semibold tabular-nums jetbrains_mono_34ec1b8b-module__V2O7mW__className text-highlighted">$42.7K</p>
                  </div>
                </div>
                <div class="pointer-events-none absolute inset-0">
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 top-0 left-0">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 top-0 right-0 -scale-x-100">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 bottom-0 left-0 -scale-y-100">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 right-0 bottom-0 -scale-100">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                </div>
              </section>
              <section class="group/card border-(--ui-border)/70 bg-(--ui-bg)/80 relative overflow-hidden border backdrop-blur min-h-[150px] p-4 transition-transform duration-300 hover:-translate-y-0.5 border-default">
                <div class="flex h-full flex-col justify-between gap-8">
                  <div class="flex items-center justify-between gap-3">
                    <span class="border-(--ui-border)/70 bg-(--ui-bg-muted)/60 flex size-10 items-center justify-center border text-primary border-default">
                      <UIcon name="i-lucide-wallet-cards" class="size-5" />
                    </span>
                    <span class="inline-flex items-center gap-1 font-mono text-xs text-primary">
                      <UIcon name="i-lucide-arrow-up-right" class="size-3.5" />
                      +13.2%
                    </span>
                  </div>
                  <div>
                    <p class="text-muted font-mono text-[10px] tracking-[0.22em] uppercase">ARR</p>
                    <p class="text-highlighted mt-2 text-2xl font-semibold tabular-nums jetbrains_mono_34ec1b8b-module__V2O7mW__className text-highlighted">$3.41M</p>
                  </div>
                </div>
                <div class="pointer-events-none absolute inset-0">
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 top-0 left-0">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 top-0 right-0 -scale-x-100">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 bottom-0 left-0 -scale-y-100">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 right-0 bottom-0 -scale-100">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                </div>
              </section>
            </div>
            <section class="group/card border-(--ui-border)/70 bg-(--ui-bg)/80 relative overflow-hidden border backdrop-blur p-4 lg:col-span-12 lg:p-5 border-default">
              <div class="flex items-start justify-between gap-4">
                <div class="min-w-0">
                  <p class="text-muted font-mono text-[10px] tracking-[0.22em] uppercase">Signal 01</p>
                  <h2 class="text-highlighted mt-2 text-base font-semibold text-highlighted">Payments processed today</h2>
                </div>
                <span class="bg-(--ui-bg-muted)/60 items-center gap-1 border px-2.5 py-1 font-mono text-[10px] tracking-[0.16em] uppercase border-primary/20 text-primary hidden sm:inline-flex">
                  <UIcon name="i-lucide-activity" class="size-3" />
                  Live today
                </span>
              </div>
              <div class="jsx-71f64ff6265d7382 mt-3 flex flex-wrap items-center gap-3">
                <div class="jsx-71f64ff6265d7382 ml-auto flex flex-wrap items-center gap-4 text-xs">
                  <span class="jsx-71f64ff6265d7382 text-muted inline-flex items-center gap-2">
                    <span class="jsx-71f64ff6265d7382 bg-primary size-2 rounded-full" />
                    Payment attempts
                  </span>
                  <span class="jsx-71f64ff6265d7382 text-muted inline-flex items-center gap-2">
                    <span class="jsx-71f64ff6265d7382 border-primary size-2 rounded-full border" />
                    Successful payments
                  </span>
                </div>
              </div>
              <!-- Chart 1: SVG geometry and theme tokens are local to this page -->
              <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden mt-5 h-[300px] w-full" style=";--destructive:var(--ui-text-muted);--color-volume:var(--ui-primary);--color-authorized:color-mix(in oklch, var(--ui-text-highlighted) 74%, var(--ui-bg))" role="img" aria-label="Analytics chart">
                <!-- Chart 2: SVG geometry and theme tokens are local to this page -->
                <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-volume:var(--ui-primary);--color-authorized:color-mix(in oklch, var(--ui-text-highlighted) 74%, var(--ui-bg));width:100%;height:300px;min-width:0" role="img" aria-label="Analytics chart">
                  <div style="width:0;height:0;overflow:visible">
                    <div width="1094" height="300" class="chart-wrapper" style="position: relative; cursor: default; width: 1094px; height: 300px;">
                      <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 1094 300" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                        <title />
                        <desc />
                        <g class="chart-zIndex-layer_-100">
                          <g class="chart-cartesian-grid">
                            <g class="chart-cartesian-grid-horizontal">
                              <line stroke="var(--ui-border)" fill="none" x="52" y="8" width="1034" height="262" x1="52" y1="270" x2="1086" y2="270" />
                              <line stroke="var(--ui-border)" fill="none" x="52" y="8" width="1034" height="262" x1="52" y1="204.5" x2="1086" y2="204.5" />
                              <line stroke="var(--ui-border)" fill="none" x="52" y="8" width="1034" height="262" x1="52" y1="139" x2="1086" y2="139" />
                              <line stroke="var(--ui-border)" fill="none" x="52" y="8" width="1034" height="262" x1="52" y1="73.5" x2="1086" y2="73.5" />
                              <line stroke="var(--ui-border)" fill="none" x="52" y="8" width="1034" height="262" x1="52" y1="8" x2="1086" y2="8" />
                            </g>
                          </g>
                        </g>
                        <g class="chart-zIndex-layer_-50" />
                        <defs>
                          <clipPath id="recharts1-clip">
                            <rect x="52" y="8" height="262" width="1034" />
                          </clipPath>
                        </defs>
                        <defs class="jsx-71f64ff6265d7382">
                          <linearGradient id="processorGlow" x1="0" x2="0" y1="0" y2="1" class="jsx-71f64ff6265d7382">
                            <stop offset="0%" stop-color="var(--color-volume)" stop-opacity="0.36" class="jsx-71f64ff6265d7382" />
                            <stop offset="100%" stop-color="var(--color-volume)" stop-opacity="0.02" class="jsx-71f64ff6265d7382" />
                          </linearGradient>
                        </defs>
                        <g class="chart-zIndex-layer_100">
                          <g class="chart-layer chart-area">
                            <g class="chart-layer">
                              <path name="Payment attempts" stroke-width="2" fill="url(#processorGlow)" fill-opacity="0.6" height="262" stroke="none" width="1034" id="recharts-area-_r_0_" class="chart-curve chart-area-area" d="M52,207.993C83.333,204.937,114.667,201.88,146,201.88C177.333,201.88,208.667,204.937,240,204.937C271.333,204.937,302.667,195.257,334,189.653C365.333,184.049,396.667,181.066,428,171.313C459.333,161.561,490.667,142.784,522,131.14C553.333,119.496,584.667,108.943,616,101.447C647.333,93.951,678.667,86.163,710,86.163C741.333,86.163,772.667,96.207,804,96.207C835.333,96.207,866.667,73.937,898,63.893C929.333,53.85,960.667,35.947,992,35.947C1023.333,35.947,1054.667,42.06,1086,48.173L1086,270C1054.667,270,1023.333,270,992,270C960.667,270,929.333,270,898,270C866.667,270,835.333,270,804,270C772.667,270,741.333,270,710,270C678.667,270,647.333,270,616,270C584.667,270,553.333,270,522,270C490.667,270,459.333,270,428,270C396.667,270,365.333,270,334,270C302.667,270,271.333,270,240,270C208.667,270,177.333,270,146,270C114.667,270,83.333,270,52,270Z" />
                              <path name="Payment attempts" stroke-width="2" fill="none" fill-opacity="0.6" height="262" stroke="var(--color-volume)" width="1034" class="chart-curve chart-area-curve" d="M52,207.993C83.333,204.937,114.667,201.88,146,201.88C177.333,201.88,208.667,204.937,240,204.937C271.333,204.937,302.667,195.257,334,189.653C365.333,184.049,396.667,181.066,428,171.313C459.333,161.561,490.667,142.784,522,131.14C553.333,119.496,584.667,108.943,616,101.447C647.333,93.951,678.667,86.163,710,86.163C741.333,86.163,772.667,96.207,804,96.207C835.333,96.207,866.667,73.937,898,63.893C929.333,53.85,960.667,35.947,992,35.947C1023.333,35.947,1054.667,42.06,1086,48.173" />
                            </g>
                          </g>
                        </g>
                        <g class="chart-zIndex-layer_200" />
                        <g class="chart-zIndex-layer_300" />
                        <g class="chart-zIndex-layer_400">
                          <g class="chart-layer chart-reference-line">
                            <line stroke="var(--ui-border)" stroke-dasharray="3 5" y="420" fill="none" fill-opacity="1" stroke-width="1" x1="52" y1="86.60000000000001" x2="1086" y2="86.60000000000001" class="chart-reference-line-line" />
                          </g>
                          <g class="chart-layer chart-line">
                            <g class="chart-layer chart-shape">
                              <path name="Successful payments" stroke="var(--color-authorized)" stroke-dasharray="5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 5px, 2.325800000000072px, 1062.3258056640625px" stroke-width="2" fill="none" id="recharts-line-_r_1_" height="262" width="1034" class="chart-curve chart-line-curve" d="M52,212.36C83.333,209.303,114.667,206.247,146,206.247C177.333,206.247,208.667,209.303,240,209.303C271.333,209.303,302.667,200.716,334,195.33C365.333,189.944,396.667,186.451,428,176.99C459.333,167.529,490.667,149.698,522,138.563C553.333,127.428,584.667,117.167,616,110.18C647.333,103.193,678.667,96.643,710,96.643C741.333,96.643,772.667,106.687,804,106.687C835.333,106.687,866.667,83.034,898,73.063C929.333,63.093,960.667,46.863,992,46.863C1023.333,46.863,1054.667,52.322,1086,57.78" />
                            </g>
                          </g>
                        </g>
                        <g class="chart-zIndex-layer_500">
                          <g class="chart-layer chart-cartesian-axis chart-xAxis xAxis">
                            <g class="chart-cartesian-axis-ticks chart-xAxis-ticks">
                              <g class="chart-cartesian-axis-tick-lines chart-xAxis-tick-lines">
                                <g class="chart-layer chart-cartesian-axis-tick" />
                                <g class="chart-layer chart-cartesian-axis-tick" />
                                <g class="chart-layer chart-cartesian-axis-tick" />
                                <g class="chart-layer chart-cartesian-axis-tick" />
                                <g class="chart-layer chart-cartesian-axis-tick" />
                                <g class="chart-layer chart-cartesian-axis-tick" />
                                <g class="chart-layer chart-cartesian-axis-tick" />
                                <g class="chart-layer chart-cartesian-axis-tick" />
                                <g class="chart-layer chart-cartesian-axis-tick" />
                                <g class="chart-layer chart-cartesian-axis-tick" />
                                <g class="chart-layer chart-cartesian-axis-tick" />
                                <g class="chart-layer chart-cartesian-axis-tick" />
                              </g>
                            </g>
                          </g>
                          <g class="chart-layer chart-cartesian-axis chart-yAxis yAxis">
                            <g class="chart-cartesian-axis-ticks chart-yAxis-ticks">
                              <g class="chart-cartesian-axis-tick-lines chart-yAxis-tick-lines">
                                <g class="chart-layer chart-cartesian-axis-tick" />
                                <g class="chart-layer chart-cartesian-axis-tick" />
                                <g class="chart-layer chart-cartesian-axis-tick" />
                                <g class="chart-layer chart-cartesian-axis-tick" />
                                <g class="chart-layer chart-cartesian-axis-tick" />
                              </g>
                            </g>
                          </g>
                        </g>
                        <g class="chart-zIndex-layer_600" />
                        <g class="chart-zIndex-layer_1000" />
                        <g class="chart-zIndex-layer_1100" />
                        <g class="chart-zIndex-layer_1200" />
                        <g class="chart-zIndex-layer_2000">
                          <g class="chart-cartesian-axis-tick-labels chart-xAxis-tick-labels">
                            <g class="chart-layer chart-cartesian-axis-tick-label">
                              <text height="30" width="1034" stroke="none" x="52" y="288" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                <tspan x="52">00:00</tspan>
                              </text>
                            </g>
                            <g class="chart-layer chart-cartesian-axis-tick-label">
                              <text height="30" width="1034" stroke="none" x="146" y="288" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                <tspan x="146">02:00</tspan>
                              </text>
                            </g>
                            <g class="chart-layer chart-cartesian-axis-tick-label">
                              <text height="30" width="1034" stroke="none" x="240" y="288" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                <tspan x="240">04:00</tspan>
                              </text>
                            </g>
                            <g class="chart-layer chart-cartesian-axis-tick-label">
                              <text height="30" width="1034" stroke="none" x="334" y="288" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                <tspan x="334">06:00</tspan>
                              </text>
                            </g>
                            <g class="chart-layer chart-cartesian-axis-tick-label">
                              <text height="30" width="1034" stroke="none" x="428" y="288" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                <tspan x="428">08:00</tspan>
                              </text>
                            </g>
                            <g class="chart-layer chart-cartesian-axis-tick-label">
                              <text height="30" width="1034" stroke="none" x="522" y="288" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                <tspan x="522">10:00</tspan>
                              </text>
                            </g>
                            <g class="chart-layer chart-cartesian-axis-tick-label">
                              <text height="30" width="1034" stroke="none" x="616" y="288" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                <tspan x="616">12:00</tspan>
                              </text>
                            </g>
                            <g class="chart-layer chart-cartesian-axis-tick-label">
                              <text height="30" width="1034" stroke="none" x="710" y="288" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                <tspan x="710">14:00</tspan>
                              </text>
                            </g>
                            <g class="chart-layer chart-cartesian-axis-tick-label">
                              <text height="30" width="1034" stroke="none" x="804" y="288" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                <tspan x="804">16:00</tspan>
                              </text>
                            </g>
                            <g class="chart-layer chart-cartesian-axis-tick-label">
                              <text height="30" width="1034" stroke="none" x="898" y="288" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                <tspan x="898">18:00</tspan>
                              </text>
                            </g>
                            <g class="chart-layer chart-cartesian-axis-tick-label">
                              <text height="30" width="1034" stroke="none" x="992" y="288" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                <tspan x="992">20:00</tspan>
                              </text>
                            </g>
                            <g class="chart-layer chart-cartesian-axis-tick-label">
                              <text height="30" width="1034" stroke="none" x="1077.3828125" y="288" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                <tspan x="1077.3828125">22:00</tspan>
                              </text>
                            </g>
                          </g>
                          <g class="chart-cartesian-axis-tick-labels chart-yAxis-tick-labels">
                            <g class="chart-layer chart-cartesian-axis-tick-label">
                              <text width="52" height="262" stroke="none" x="44" y="270" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                <tspan x="44">$0K</tspan>
                              </text>
                            </g>
                            <g class="chart-layer chart-cartesian-axis-tick-label">
                              <text width="52" height="262" stroke="none" x="44" y="204.5" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                <tspan x="44">$150K</tspan>
                              </text>
                            </g>
                            <g class="chart-layer chart-cartesian-axis-tick-label">
                              <text width="52" height="262" stroke="none" x="44" y="139" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                <tspan x="44">$300K</tspan>
                              </text>
                            </g>
                            <g class="chart-layer chart-cartesian-axis-tick-label">
                              <text width="52" height="262" stroke="none" x="44" y="73.5" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                <tspan x="44">$450K</tspan>
                              </text>
                            </g>
                            <g class="chart-layer chart-cartesian-axis-tick-label">
                              <text width="52" height="262" stroke="none" x="44" y="9" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                <tspan x="44">$600K</tspan>
                              </text>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="jsx-71f64ff6265d7382 border-(--ui-border)/70 mt-5 border-t pt-4 border-default">
                <div class="jsx-71f64ff6265d7382 mb-3 flex items-center justify-between gap-4">
                  <div class="jsx-71f64ff6265d7382">
                    <p class="jsx-71f64ff6265d7382 text-highlighted text-sm font-semibold text-highlighted">Recent client payments</p>
                  </div>
                  <span class="border-(--ui-border)/70 bg-(--ui-bg-muted)/60 text-muted inline-flex items-center gap-1 border px-2.5 py-1 font-mono text-[10px] tracking-[0.16em] uppercase border-default">5 live</span>
                </div>
                <div class="jsx-71f64ff6265d7382 group/marquee relative overflow-hidden">
                  <div class="jsx-71f64ff6265d7382 from-(--ui-bg) pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r to-transparent" />
                  <div class="jsx-71f64ff6265d7382 from-(--ui-bg) pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l to-transparent" />
                  <div class="jsx-71f64ff6265d7382 client-payments-marquee flex w-max gap-3">
                    <div class="jsx-71f64ff6265d7382 flex gap-3">
                      <div class="jsx-71f64ff6265d7382 border-(--ui-border)/70 bg-(--ui-bg-muted)/40 flex w-[270px] shrink-0 items-center gap-3 border p-3 border-default">
                        <span class="relative flex shrink-0 overflow-hidden border-(--ui-border)/70 size-10 rounded-sm border border-default">
                          <img class="aspect-square h-full w-full" alt="Northstar Clinics contact" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                        </span>
                        <div class="jsx-71f64ff6265d7382 min-w-0 flex-1">
                          <div class="jsx-71f64ff6265d7382 flex items-center justify-between gap-3">
                            <p class="jsx-71f64ff6265d7382 text-highlighted truncate text-sm font-medium">Northstar Clinics</p>
                            <p class="jsx-71f64ff6265d7382 text-highlighted shrink-0 font-mono text-sm font-semibold tabular-nums text-highlighted">$9,842</p>
                          </div>
                          <div class="jsx-71f64ff6265d7382 mt-1 flex items-center justify-between gap-3">
                            <p class="jsx-71f64ff6265d7382 text-muted truncate text-xs">Visa · Stripe</p>
                            <p class="jsx-71f64ff6265d7382 text-muted shrink-0 text-[10px]">12 sec ago</p>
                          </div>
                        </div>
                      </div>
                      <div class="jsx-71f64ff6265d7382 border-(--ui-border)/70 bg-(--ui-bg-muted)/40 flex w-[270px] shrink-0 items-center gap-3 border p-3 border-default">
                        <span class="relative flex shrink-0 overflow-hidden border-(--ui-border)/70 size-10 rounded-sm border border-default">
                          <img class="aspect-square h-full w-full" alt="Atlas Freight contact" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                        </span>
                        <div class="jsx-71f64ff6265d7382 min-w-0 flex-1">
                          <div class="jsx-71f64ff6265d7382 flex items-center justify-between gap-3">
                            <p class="jsx-71f64ff6265d7382 text-highlighted truncate text-sm font-medium">Atlas Freight</p>
                            <p class="jsx-71f64ff6265d7382 text-highlighted shrink-0 font-mono text-sm font-semibold tabular-nums text-highlighted">$18,320</p>
                          </div>
                          <div class="jsx-71f64ff6265d7382 mt-1 flex items-center justify-between gap-3">
                            <p class="jsx-71f64ff6265d7382 text-muted truncate text-xs">ACH · Column</p>
                            <p class="jsx-71f64ff6265d7382 text-muted shrink-0 text-[10px]">38 sec ago</p>
                          </div>
                        </div>
                      </div>
                      <div class="jsx-71f64ff6265d7382 border-(--ui-border)/70 bg-(--ui-bg-muted)/40 flex w-[270px] shrink-0 items-center gap-3 border p-3 border-default">
                        <span class="relative flex shrink-0 overflow-hidden border-(--ui-border)/70 size-10 rounded-sm border border-default">
                          <img class="aspect-square h-full w-full" alt="Mori Labs contact" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                        </span>
                        <div class="jsx-71f64ff6265d7382 min-w-0 flex-1">
                          <div class="jsx-71f64ff6265d7382 flex items-center justify-between gap-3">
                            <p class="jsx-71f64ff6265d7382 text-highlighted truncate text-sm font-medium">Mori Labs</p>
                            <p class="jsx-71f64ff6265d7382 text-highlighted shrink-0 font-mono text-sm font-semibold tabular-nums text-highlighted">$4,680</p>
                          </div>
                          <div class="jsx-71f64ff6265d7382 mt-1 flex items-center justify-between gap-3">
                            <p class="jsx-71f64ff6265d7382 text-muted truncate text-xs">Mastercard · Adyen</p>
                            <p class="jsx-71f64ff6265d7382 text-muted shrink-0 text-[10px]">1 min ago</p>
                          </div>
                        </div>
                      </div>
                      <div class="jsx-71f64ff6265d7382 border-(--ui-border)/70 bg-(--ui-bg-muted)/40 flex w-[270px] shrink-0 items-center gap-3 border p-3 border-default">
                        <span class="relative flex shrink-0 overflow-hidden border-(--ui-border)/70 size-10 rounded-sm border border-default">
                          <img class="aspect-square h-full w-full" alt="Kite Commerce contact" src="/reference/247ac7c76922347b.png" loading="lazy" />
                        </span>
                        <div class="jsx-71f64ff6265d7382 min-w-0 flex-1">
                          <div class="jsx-71f64ff6265d7382 flex items-center justify-between gap-3">
                            <p class="jsx-71f64ff6265d7382 text-highlighted truncate text-sm font-medium">Kite Commerce</p>
                            <p class="jsx-71f64ff6265d7382 text-highlighted shrink-0 font-mono text-sm font-semibold tabular-nums text-highlighted">$12,460</p>
                          </div>
                          <div class="jsx-71f64ff6265d7382 mt-1 flex items-center justify-between gap-3">
                            <p class="jsx-71f64ff6265d7382 text-muted truncate text-xs">UPI · Razorpay</p>
                            <p class="jsx-71f64ff6265d7382 text-muted shrink-0 text-[10px]">2 min ago</p>
                          </div>
                        </div>
                      </div>
                      <div class="jsx-71f64ff6265d7382 border-(--ui-border)/70 bg-(--ui-bg-muted)/40 flex w-[270px] shrink-0 items-center gap-3 border p-3 border-default">
                        <span class="relative flex shrink-0 overflow-hidden border-(--ui-border)/70 size-10 rounded-sm border border-default">
                          <img class="aspect-square h-full w-full" alt="Orbit Travel contact" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                        </span>
                        <div class="jsx-71f64ff6265d7382 min-w-0 flex-1">
                          <div class="jsx-71f64ff6265d7382 flex items-center justify-between gap-3">
                            <p class="jsx-71f64ff6265d7382 text-highlighted truncate text-sm font-medium">Orbit Travel</p>
                            <p class="jsx-71f64ff6265d7382 text-highlighted shrink-0 font-mono text-sm font-semibold tabular-nums text-highlighted">$7,240</p>
                          </div>
                          <div class="jsx-71f64ff6265d7382 mt-1 flex items-center justify-between gap-3">
                            <p class="jsx-71f64ff6265d7382 text-muted truncate text-xs">Visa · Stripe</p>
                            <p class="jsx-71f64ff6265d7382 text-muted shrink-0 text-[10px]">3 min ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pointer-events-none absolute inset-0">
                <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 top-0 left-0">
                  <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                  <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                </div>
                <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 top-0 right-0 -scale-x-100">
                  <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                  <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                </div>
                <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 bottom-0 left-0 -scale-y-100">
                  <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                  <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                </div>
                <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 right-0 bottom-0 -scale-100">
                  <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                  <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                </div>
              </div>
            </section>
            <div class="grid gap-4 lg:grid-cols-12">
              <section class="group/card border-(--ui-border)/70 bg-(--ui-bg)/80 relative overflow-hidden border backdrop-blur flex h-full flex-col p-4 lg:col-span-8 lg:p-5 border-default">
                <div class="flex items-start justify-between gap-4">
                  <div class="min-w-0">
                    <p class="text-muted font-mono text-[10px] tracking-[0.22em] uppercase">Signal 03</p>
                    <h2 class="text-highlighted mt-2 text-base font-semibold text-highlighted">Payment method performance</h2>
                  </div>
                  <span class="border-(--ui-border)/70 bg-(--ui-bg-muted)/60 text-muted inline-flex items-center gap-1 border px-2.5 py-1 font-mono text-[10px] tracking-[0.16em] uppercase border-default">
                    <UIcon name="i-lucide-credit-card" class="size-3" />
                     4 methods
                  </span>
                </div>
                <div class="mt-5 grid gap-3 md:grid-cols-2">
                  <div class="border-(--ui-border)/70 bg-(--ui-bg-muted)/50 hover:bg-(--ui-bg-muted)/70 border p-4 transition-colors duration-300 border-default">
                    <div class="flex items-start justify-between gap-4">
                      <div>
                        <p class="text-highlighted font-mono text-sm font-semibold jetbrains_mono_34ec1b8b-module__V2O7mW__className text-highlighted">Cards</p>
                        <p class="text-muted mt-1 text-xs">Visa, Mastercard, Amex</p>
                      </div>
                      <span class="bg-(--ui-bg-muted)/60 inline-flex items-center gap-1 border px-2.5 py-1 font-mono text-[10px] tracking-[0.16em] uppercase border-primary/20 text-primary">Healthy</span>
                    </div>
                    <div class="mt-5 flex items-end justify-between gap-4">
                      <div class="min-w-0 flex-1">
                        <div class="text-muted mb-2 flex justify-between text-xs">
                          <span>Payment success</span>
                          <span>97.8%</span>
                        </div>
                        <div class="border-(--ui-border)/70 bg-muted h-2 border border-default">
                          <div class="bg-primary h-full" style="background:linear-gradient(90deg, var(--ui-primary), color-mix(in oklch, var(--ui-primary) 74%, var(--ui-bg)));width:97.8%" />
                        </div>
                      </div>
                      <div class="text-right">
                        <p class="text-highlighted font-mono text-lg font-semibold tabular-nums jetbrains_mono_34ec1b8b-module__V2O7mW__className text-highlighted">96ms</p>
                        <p class="text-muted text-xs">$428.6K processed</p>
                      </div>
                    </div>
                  </div>
                  <div class="border-(--ui-border)/70 bg-(--ui-bg-muted)/50 hover:bg-(--ui-bg-muted)/70 border p-4 transition-colors duration-300 border-default">
                    <div class="flex items-start justify-between gap-4">
                      <div>
                        <p class="text-highlighted font-mono text-sm font-semibold jetbrains_mono_34ec1b8b-module__V2O7mW__className text-highlighted">Bank transfers</p>
                        <p class="text-muted mt-1 text-xs">ACH payments</p>
                      </div>
                      <span class="bg-(--ui-bg-muted)/60 inline-flex items-center gap-1 border px-2.5 py-1 font-mono text-[10px] tracking-[0.16em] uppercase border-primary/20 text-primary">Slower today</span>
                    </div>
                    <div class="mt-5 flex items-end justify-between gap-4">
                      <div class="min-w-0 flex-1">
                        <div class="text-muted mb-2 flex justify-between text-xs">
                          <span>Payment success</span>
                          <span>96.4%</span>
                        </div>
                        <div class="border-(--ui-border)/70 bg-muted h-2 border border-default">
                          <div class="bg-primary h-full" style="background:linear-gradient(90deg, var(--ui-primary), color-mix(in oklch, var(--ui-primary) 74%, var(--ui-bg)));width:96.4%" />
                        </div>
                      </div>
                      <div class="text-right">
                        <p class="text-highlighted font-mono text-lg font-semibold tabular-nums jetbrains_mono_34ec1b8b-module__V2O7mW__className text-highlighted">3.8h</p>
                        <p class="text-muted text-xs">$186.2K processed</p>
                      </div>
                    </div>
                  </div>
                  <div class="border-(--ui-border)/70 bg-(--ui-bg-muted)/50 hover:bg-(--ui-bg-muted)/70 border p-4 transition-colors duration-300 border-default">
                    <div class="flex items-start justify-between gap-4">
                      <div>
                        <p class="text-highlighted font-mono text-sm font-semibold jetbrains_mono_34ec1b8b-module__V2O7mW__className text-highlighted">UPI</p>
                        <p class="text-muted mt-1 text-xs">India instant payments</p>
                      </div>
                      <span class="bg-(--ui-bg-muted)/60 inline-flex items-center gap-1 border px-2.5 py-1 font-mono text-[10px] tracking-[0.16em] uppercase border-(--ui-error)/25 text-error border-default">Needs attention</span>
                    </div>
                    <div class="mt-5 flex items-end justify-between gap-4">
                      <div class="min-w-0 flex-1">
                        <div class="text-muted mb-2 flex justify-between text-xs">
                          <span>Payment success</span>
                          <span>91.2%</span>
                        </div>
                        <div class="border-(--ui-border)/70 bg-muted h-2 border border-default">
                          <div class="bg-primary h-full" style="background:linear-gradient(90deg, var(--ui-primary), color-mix(in oklch, var(--ui-primary) 74%, var(--ui-bg)));width:91.2%" />
                        </div>
                      </div>
                      <div class="text-right">
                        <p class="text-highlighted font-mono text-lg font-semibold tabular-nums jetbrains_mono_34ec1b8b-module__V2O7mW__className text-highlighted">118ms</p>
                        <p class="text-muted text-xs">$92.4K processed</p>
                      </div>
                    </div>
                  </div>
                  <div class="border-(--ui-border)/70 bg-(--ui-bg-muted)/50 hover:bg-(--ui-bg-muted)/70 border p-4 transition-colors duration-300 border-default">
                    <div class="flex items-start justify-between gap-4">
                      <div>
                        <p class="text-highlighted font-mono text-sm font-semibold jetbrains_mono_34ec1b8b-module__V2O7mW__className text-highlighted">Digital wallets</p>
                        <p class="text-muted mt-1 text-xs">Apple Pay, Google Pay</p>
                      </div>
                      <span class="bg-(--ui-bg-muted)/60 inline-flex items-center gap-1 border px-2.5 py-1 font-mono text-[10px] tracking-[0.16em] uppercase border-primary/20 text-primary">Healthy</span>
                    </div>
                    <div class="mt-5 flex items-end justify-between gap-4">
                      <div class="min-w-0 flex-1">
                        <div class="text-muted mb-2 flex justify-between text-xs">
                          <span>Payment success</span>
                          <span>96.9%</span>
                        </div>
                        <div class="border-(--ui-border)/70 bg-muted h-2 border border-default">
                          <div class="bg-primary h-full" style="background:linear-gradient(90deg, var(--ui-primary), color-mix(in oklch, var(--ui-primary) 74%, var(--ui-bg)));width:96.9%" />
                        </div>
                      </div>
                      <div class="text-right">
                        <p class="text-highlighted font-mono text-lg font-semibold tabular-nums jetbrains_mono_34ec1b8b-module__V2O7mW__className text-highlighted">104ms</p>
                        <p class="text-muted text-xs">$54.8K processed</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border-(--ui-border)/70 mt-5 border-t pt-5 border-default">
                  <div class="border-primary/25 bg-primary/[0.045] relative overflow-hidden border">
                    <div class="bg-primary absolute inset-y-0 left-0 w-0.5" />
                    <div class="flex min-h-16 items-center gap-3 px-4 py-3">
                      <span class="border-primary/20 bg-primary/10 text-primary flex size-8 shrink-0 items-center justify-center border">
                        <UIcon name="i-lucide-shield-check" class="size-4" />
                      </span>
                      <div class="min-w-0 flex-1 overflow-hidden">
                        <div class="animate-in fade-in-0 slide-in-from-right-4 duration-500">
                          <div class="flex min-w-0 items-baseline gap-3">
                            <p class="text-primary font-mono text-[10px] tracking-[0.18em] uppercase">Insight</p>
                            <p class="text-highlighted shrink-0 text-sm font-semibold text-highlighted">Collection quality</p>
                            <p class="text-primary shrink-0 font-mono text-base font-semibold text-highlighted">96.7%</p>
                            <p class="text-muted min-w-0 truncate text-xs">Across all payment methods, nearly 97 of every 100 attempted payments completed successfully today.</p>
                          </div>
                        </div>
                      </div>
                      <div class="border-primary/15 hidden shrink-0 border-l pl-4 text-right lg:block">
                        <p class="text-muted font-mono text-[10px] tracking-[0.16em] uppercase">Processed</p>
                        <p class="text-highlighted mt-0.5 font-mono text-base font-semibold text-highlighted">$762K</p>
                      </div>
                    </div>
                  </div>
                  <div class="mt-2 flex items-center justify-end gap-1.5 pr-1">
                    <UButton color="neutral" variant="ghost" class="h-1.5 rounded-full transition-all duration-300 bg-primary/20 hover:bg-primary/45 w-1.5" aria-label="Show Recovery opportunity insight" type="button" @click="openAction(&quot;Show Recovery opportunity insight&quot;)" />
                    <UButton color="primary" variant="solid" class="h-1.5 rounded-full transition-all duration-300 bg-primary w-5" aria-label="Show Collection quality insight" type="button" @click="openAction(&quot;Show Collection quality insight&quot;)" />
                    <UButton color="neutral" variant="ghost" class="h-1.5 rounded-full transition-all duration-300 bg-primary/20 hover:bg-primary/45 w-1.5" aria-label="Show Transfer delay insight" type="button" @click="openAction(&quot;Show Transfer delay insight&quot;)" />
                  </div>
                </div>
                <div class="pointer-events-none absolute inset-0">
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 top-0 left-0">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 top-0 right-0 -scale-x-100">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 bottom-0 left-0 -scale-y-100">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 right-0 bottom-0 -scale-100">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                </div>
              </section>
              <section class="group/card border-(--ui-border)/70 bg-(--ui-bg)/80 relative h-full overflow-hidden border p-4 backdrop-blur lg:col-span-4 lg:p-5 border-default">
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <p class="text-muted font-mono text-[10px] tracking-[0.22em] uppercase">Signal 02</p>
                    <h2 class="text-highlighted mt-2 text-base font-semibold text-highlighted">Payment volume by region</h2>
                  </div>
                  <span class="border-primary/20 text-primary inline-flex items-center gap-1 border px-2.5 py-1 font-mono text-[10px] tracking-[0.16em] uppercase">
                    <UIcon name="i-lucide-radio-tower" class="size-3" />
                    Live
                  </span>
                </div>
                <div class="relative mx-auto mt-2 aspect-square w-full max-w-[285px]">
                  <div class="pointer-events-none absolute inset-[12%] rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--ui-primary)_12%,var(--ui-bg-muted))_0%,color-mix(in_oklch,var(--ui-primary)_5%,transparent)_48%,transparent_72%)] blur-2xl dark:bg-[radial-gradient(circle,color-mix(in_oklch,var(--ui-primary)_16%,var(--ui-bg-muted))_0%,color-mix(in_oklch,var(--ui-primary)_7%,transparent)_48%,transparent_72%)]" />
                  <div style="position: relative; width: 100%; height: 100%;">
                    <canvas aria-label="Revenue activity across global customer regions" class="relative size-full cursor-grab touch-none active:cursor-grabbing" role="img" width="285" height="285" />
                    <div style="position: absolute; width: 1px; height: 1px; pointer-events: none; anchor-name: --cobe-americas; left: 53.9065%; top: 31.9153%;" />
                    <div style="position: absolute; width: 1px; height: 1px; pointer-events: none; anchor-name: --cobe-europe; left: 68.7748%; top: 17.1003%;" />
                    <div style="position: absolute; width: 1px; height: 1px; pointer-events: none; anchor-name: --cobe-apac; left: 35.8187%; top: 31.3085%;" />
                  </div>
                  <div class="from-(--ui-bg) pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t to-transparent" />
                  <div class="bg-(--ui-bg)/90 text-default border-(--ui-border)/70 pointer-events-none absolute z-10 flex items-baseline gap-1.5 rounded-sm border px-2 py-1 whitespace-nowrap shadow-lg backdrop-blur-sm border-default" style="position-anchor:--cobe-americas;bottom:anchor(top);left:anchor(center);translate:-50% 0;margin-bottom:6px;opacity:var(--cobe-visible-americas, 0);filter:blur(calc((1 - var(--cobe-visible-americas, 0)) * 8px));transition:opacity 300ms, filter 300ms">
                    <span class="font-mono text-xs font-semibold tracking-tight">$742K</span>
                    <span class="font-mono text-[9px] text-primary">↑8.4%</span>
                  </div>
                  <div class="bg-(--ui-bg)/90 text-default border-(--ui-border)/70 pointer-events-none absolute z-10 flex items-baseline gap-1.5 rounded-sm border px-2 py-1 whitespace-nowrap shadow-lg backdrop-blur-sm border-default" style="position-anchor:--cobe-europe;bottom:anchor(top);left:anchor(center);translate:-50% 0;margin-bottom:6px;opacity:var(--cobe-visible-europe, 0);filter:blur(calc((1 - var(--cobe-visible-europe, 0)) * 8px));transition:opacity 300ms, filter 300ms">
                    <span class="font-mono text-xs font-semibold tracking-tight">$512K</span>
                    <span class="font-mono text-[9px] text-primary">↑3.1%</span>
                  </div>
                  <div class="bg-(--ui-bg)/90 text-default border-(--ui-border)/70 pointer-events-none absolute z-10 flex items-baseline gap-1.5 rounded-sm border px-2 py-1 whitespace-nowrap shadow-lg backdrop-blur-sm border-default" style="position-anchor:--cobe-apac;bottom:anchor(top);left:anchor(center);translate:-50% 0;margin-bottom:6px;opacity:var(--cobe-visible-apac, 0);filter:blur(calc((1 - var(--cobe-visible-apac, 0)) * 8px));transition:opacity 300ms, filter 300ms">
                    <span class="font-mono text-xs font-semibold tracking-tight">$438K</span>
                    <span class="font-mono text-[9px] text-error">↓1.8%</span>
                  </div>
                </div>
                <div class="mt-1 grid grid-cols-2 gap-2">
                  <div class="border-(--ui-border)/70 bg-(--ui-bg-muted)/50 border p-2 border-default">
                    <div class="flex items-center justify-between gap-2">
                      <p class="text-muted truncate text-xs">Americas</p>
                      <p class="text-primary font-mono text-[10px]">40%</p>
                    </div>
                    <p class="text-highlighted mt-1 font-mono text-sm font-semibold tabular-nums text-highlighted">$742K</p>
                  </div>
                  <div class="border-(--ui-border)/70 bg-(--ui-bg-muted)/50 border p-2 border-default">
                    <div class="flex items-center justify-between gap-2">
                      <p class="text-muted truncate text-xs">Europe</p>
                      <p class="text-primary font-mono text-[10px]">28%</p>
                    </div>
                    <p class="text-highlighted mt-1 font-mono text-sm font-semibold tabular-nums text-highlighted">$512K</p>
                  </div>
                  <div class="border-(--ui-border)/70 bg-(--ui-bg-muted)/50 border p-2 border-default">
                    <div class="flex items-center justify-between gap-2">
                      <p class="text-muted truncate text-xs">Asia Pacific</p>
                      <p class="text-primary font-mono text-[10px]">24%</p>
                    </div>
                    <p class="text-highlighted mt-1 font-mono text-sm font-semibold tabular-nums text-highlighted">$438K</p>
                  </div>
                  <div class="border-(--ui-border)/70 bg-(--ui-bg-muted)/50 border p-2 border-default">
                    <div class="flex items-center justify-between gap-2">
                      <p class="text-muted truncate text-xs">Other regions</p>
                      <p class="text-primary font-mono text-[10px]">8%</p>
                    </div>
                    <p class="text-highlighted mt-1 font-mono text-sm font-semibold tabular-nums text-highlighted">$148K</p>
                  </div>
                </div>
                <div class="pointer-events-none absolute inset-0">
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 top-0 left-0">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 top-0 right-0 -scale-x-100">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 bottom-0 left-0 -scale-y-100">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 right-0 bottom-0 -scale-100">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                </div>
              </section>
              <section class="group/card border-(--ui-border)/70 bg-(--ui-bg)/80 relative overflow-hidden border backdrop-blur lg:col-span-12 border-default">
                <div class="grid sm:grid-cols-2 lg:grid-cols-4">
                  <div class="flex min-w-0 items-center gap-3 px-4 py-4 sm:px-5">
                    <span class="border-(--ui-border)/70 text-muted flex size-9 shrink-0 items-center justify-center border border-default">
                      <UIcon name="i-lucide-credit-card" class="size-4" />
                    </span>
                    <div class="min-w-0">
                      <p class="text-muted truncate text-[11px] tracking-[0.12em] uppercase">Payments / min</p>
                      <p class="text-highlighted mt-1 font-mono text-base leading-none font-semibold tabular-nums jetbrains_mono_34ec1b8b-module__V2O7mW__className text-highlighted">1,284</p>
                    </div>
                  </div>
                  <div class="flex min-w-0 items-center gap-3 px-4 py-4 sm:px-5 border-(--ui-border)/70 border-t sm:border-t-0 sm:border-(--ui-border)/70 sm:border-l border-default">
                    <span class="border-(--ui-border)/70 text-muted flex size-9 shrink-0 items-center justify-center border border-default">
                      <UIcon name="i-lucide-shield-check" class="size-4" />
                    </span>
                    <div class="min-w-0">
                      <p class="text-muted truncate text-[11px] tracking-[0.12em] uppercase">Approval rate</p>
                      <p class="text-highlighted mt-1 font-mono text-base leading-none font-semibold tabular-nums jetbrains_mono_34ec1b8b-module__V2O7mW__className text-highlighted">97.4%</p>
                    </div>
                  </div>
                  <div class="flex min-w-0 items-center gap-3 px-4 py-4 sm:px-5 border-(--ui-border)/70 border-t sm:border-t-0 lg:border-(--ui-border)/70 sm:border-l-0 lg:border-l border-default">
                    <span class="border-(--ui-border)/70 text-muted flex size-9 shrink-0 items-center justify-center border border-default">
                      <UIcon name="i-lucide-timer" class="size-4" />
                    </span>
                    <div class="min-w-0">
                      <p class="text-muted truncate text-[11px] tracking-[0.12em] uppercase">Avg. auth time</p>
                      <p class="text-highlighted mt-1 font-mono text-base leading-none font-semibold tabular-nums jetbrains_mono_34ec1b8b-module__V2O7mW__className text-highlighted">108ms</p>
                    </div>
                  </div>
                  <div class="flex min-w-0 items-center gap-3 px-4 py-4 sm:px-5 border-(--ui-border)/70 border-t sm:border-t-0 sm:border-(--ui-border)/70 sm:border-l border-default">
                    <span class="border-(--ui-border)/70 text-muted flex size-9 shrink-0 items-center justify-center border border-default">
                      <UIcon name="i-lucide-circle-gauge" class="size-4" />
                    </span>
                    <div class="min-w-0">
                      <p class="text-muted truncate text-[11px] tracking-[0.12em] uppercase">Next settlement</p>
                      <p class="text-highlighted mt-1 font-mono text-base leading-none font-semibold tabular-nums jetbrains_mono_34ec1b8b-module__V2O7mW__className text-highlighted">$318.4K</p>
                    </div>
                  </div>
                </div>
                <div class="pointer-events-none absolute inset-0">
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 top-0 left-0">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 top-0 right-0 -scale-x-100">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 bottom-0 left-0 -scale-y-100">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 right-0 bottom-0 -scale-100">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                </div>
              </section>
              <section class="group/card border-(--ui-border)/70 bg-(--ui-bg)/80 relative overflow-hidden border backdrop-blur p-4 lg:col-span-4 lg:p-5 border-default">
                <div class="flex items-start justify-between gap-4">
                  <div class="min-w-0">
                    <p class="text-muted font-mono text-[10px] tracking-[0.22em] uppercase">Signal 06</p>
                    <h2 class="text-highlighted mt-2 text-base font-semibold text-highlighted">User engagement mesh</h2>
                  </div>
                </div>
                <!-- Chart 3: SVG geometry and theme tokens are local to this page -->
                <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 aspect-video justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden mt-5 h-[205px]" style=";--destructive:var(--ui-text-muted);--color-volume:var(--ui-primary);--color-authorized:color-mix(in oklch, var(--ui-text-highlighted) 74%, var(--ui-bg));--color-payout:color-mix(in oklch, var(--ui-text-highlighted) 38%, var(--ui-bg));--color-latency:color-mix(in oklch, var(--ui-text-highlighted) 56%, var(--ui-bg))" role="img" aria-label="Analytics chart">
                  <!-- Chart 4: SVG geometry and theme tokens are local to this page -->
                  <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-volume:var(--ui-primary);--color-authorized:color-mix(in oklch, var(--ui-text-highlighted) 74%, var(--ui-bg));--color-payout:color-mix(in oklch, var(--ui-text-highlighted) 38%, var(--ui-bg));--color-latency:color-mix(in oklch, var(--ui-text-highlighted) 56%, var(--ui-bg));width:100%;height:205px;min-width:0" role="img" aria-label="Analytics chart">
                    <div style="width:0;height:0;overflow:visible">
                      <div width="364" height="205" class="chart-wrapper" style="position: relative; cursor: default; width: 364px; height: 205px;">
                        <svg cx="50%" cy="50%" role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 364 205" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                          <title />
                          <desc />
                          <g class="chart-zIndex-layer_-100" />
                          <g class="chart-zIndex-layer_-50">
                            <g class="chart-layer chart-shape">
                              <path name="Activated" fill="var(--ui-bg)" cx="182" cy="102.5" class="chart-sector chart-radial-bar-background-sector undefined" d="M 182,56.5
    A 46,46,0,
    1,1,
    181.9992,56.5
  L 181.9994,66.5
            A 36,36,0,
            1,0,
            182,66.5 Z" />
                            </g>
                            <g class="chart-layer chart-shape">
                              <path name="Returning" fill="var(--ui-bg)" cx="182" cy="102.5" class="chart-sector chart-radial-bar-background-sector undefined" d="M 182,42
    A 60.5,60.5,0,
    1,1,
    181.9989,42
  L 181.9991,52
            A 50.5,50.5,0,
            1,0,
            182,52 Z" />
                            </g>
                            <g class="chart-layer chart-shape">
                              <path name="Power users" fill="var(--ui-bg)" cx="182" cy="102.5" class="chart-sector chart-radial-bar-background-sector undefined" d="M 182,27.5
    A 75,75,0,
    1,1,
    181.9987,27.5
  L 181.9989,37.5
            A 65,65,0,
            1,0,
            182,37.5 Z" />
                            </g>
                            <g class="chart-layer chart-shape">
                              <path name="Winback" fill="var(--ui-bg)" cx="182" cy="102.5" class="chart-sector chart-radial-bar-background-sector undefined" d="M 182,13
    A 89.5,89.5,0,
    1,1,
    181.9984,13
  L 181.9986,23
            A 79.5,79.5,0,
            1,0,
            182,23 Z" />
                            </g>
                          </g>
                          <defs>
                            <clipPath id="recharts2-clip">
                              <rect x="5" y="5" height="195" width="354" />
                            </clipPath>
                          </defs>
                          <g class="chart-zIndex-layer_100" />
                          <g class="chart-zIndex-layer_200" />
                          <g class="chart-zIndex-layer_300">
                            <g class="chart-layer chart-area">
                              <g class="chart-layer chart-radial-bar-background" />
                              <g class="chart-layer chart-radial-bar-sectors">
                                <g class="chart-layer chart-shape">
                                  <path name="Activated" fill="var(--color-volume)" cx="182" cy="102.5" class="chart-sector chart-radial-bar-sector undefined" d="M 182,56.5
    A 46,46,0,
    1,1,
    181.9992,56.5
  L 181.9994,66.5
            A 36,36,0,
            1,0,
            182,66.5 Z" />
                                </g>
                                <g class="chart-layer chart-shape">
                                  <path name="Returning" fill="var(--color-authorized)" cx="182" cy="102.5" class="chart-sector chart-radial-bar-sector undefined" d="M 182,46.1418
    A4,4,0,0,1,186.2832,42.1518
    A60.5,60.5,0,1,1,154.0286,48.8544
    A4,4,0,0,1,159.5468,50.8076
  L160.3457,52.6468
      A4,4,0,0,1,158.5354,57.7824
      A50.5,50.5,0,1,0,185.7064,52.1362
      A4,4,0,0,1,182,48.147Z" />
                                </g>
                                <g class="chart-layer chart-shape">
                                  <path name="Power users" fill="var(--color-payout)" cx="182" cy="102.5" class="chart-sector chart-radial-bar-sector undefined" d="M 182,31.6128
    A4,4,0,0,1,186.2254,27.6191
    A75,75,0,1,1,110.0277,81.4053
    A4,4,0,0,1,115.2057,78.7613
  L117.0933,79.4322
      A4,4,0,0,1,119.5942,84.32
      A65,65,0,1,0,185.7681,37.6093
      A4,4,0,0,1,182,33.616Z" />
                                </g>
                                <g class="chart-layer chart-shape">
                                  <path name="Winback" fill="var(--color-latency)" cx="182" cy="102.5" class="chart-sector chart-radial-bar-sector undefined" d="M 182,17.0936
    A4,4,0,0,1,186.1871,13.098
    A89.5,89.5,0,1,1,107.7888,152.5294
    A4,4,0,0,1,109.0271,146.8758
  L110.7379,145.8355
      A4,4,0,0,1,116.1304,147.0135
      A79.5,79.5,0,1,0,185.8084,23.0913
      A4,4,0,0,1,182,19.0959Z" />
                                </g>
                              </g>
                            </g>
                          </g>
                          <g class="chart-zIndex-layer_400" />
                          <g class="chart-zIndex-layer_500" />
                          <g class="chart-zIndex-layer_600" />
                          <g class="chart-zIndex-layer_1000" />
                          <g class="chart-zIndex-layer_1100" />
                          <g class="chart-zIndex-layer_1200" />
                          <g class="chart-zIndex-layer_2000" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-2 grid grid-cols-2 gap-2">
                  <div class="border-(--ui-border)/70 bg-(--ui-bg-muted)/50 border p-2 border-default">
                    <p class="text-muted text-xs">Activated</p>
                    <p class="text-highlighted mt-1 font-mono text-sm font-semibold jetbrains_mono_34ec1b8b-module__V2O7mW__className text-highlighted">92% active</p>
                  </div>
                  <div class="border-(--ui-border)/70 bg-(--ui-bg-muted)/50 border p-2 border-default">
                    <p class="text-muted text-xs">Returning</p>
                    <p class="text-highlighted mt-1 font-mono text-sm font-semibold jetbrains_mono_34ec1b8b-module__V2O7mW__className text-highlighted">86% active</p>
                  </div>
                  <div class="border-(--ui-border)/70 bg-(--ui-bg-muted)/50 border p-2 border-default">
                    <p class="text-muted text-xs">Power users</p>
                    <p class="text-highlighted mt-1 font-mono text-sm font-semibold jetbrains_mono_34ec1b8b-module__V2O7mW__className text-highlighted">74% active</p>
                  </div>
                  <div class="border-(--ui-border)/70 bg-(--ui-bg-muted)/50 border p-2 border-default">
                    <p class="text-muted text-xs">Winback</p>
                    <p class="text-highlighted mt-1 font-mono text-sm font-semibold jetbrains_mono_34ec1b8b-module__V2O7mW__className text-highlighted">61% active</p>
                  </div>
                </div>
                <div class="pointer-events-none absolute inset-0">
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 top-0 left-0">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 top-0 right-0 -scale-x-100">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 bottom-0 left-0 -scale-y-100">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 right-0 bottom-0 -scale-100">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                </div>
              </section>
              <section class="group/card border-(--ui-border)/70 bg-(--ui-bg)/80 relative overflow-hidden border backdrop-blur p-4 lg:col-span-8 lg:p-5 border-default">
                <div class="flex items-start justify-between gap-4">
                  <div class="min-w-0">
                    <p class="text-muted font-mono text-[10px] tracking-[0.22em] uppercase">Signal 07</p>
                    <h2 class="text-highlighted mt-2 text-base font-semibold text-highlighted">User retention matrix</h2>
                  </div>
                  <span class="bg-(--ui-bg-muted)/60 inline-flex items-center gap-1 border px-2.5 py-1 font-mono text-[10px] tracking-[0.16em] uppercase border-primary/20 text-primary">
                    <UIcon name="i-lucide-brain-circuit" class="size-3" />
                     Cohort model
                  </span>
                </div>
                <div class="mt-5 overflow-x-auto">
                  <div class="min-w-[860px]">
                    <div class="border-(--ui-border)/70 text-muted grid grid-cols-[140px_96px_repeat(6,minmax(82px,1fr))] border-b pb-3 text-xs font-semibold border-default">
                      <div class="px-3">Signup cohort</div>
                      <div class="px-3">New users</div>
                      <div class="px-3 text-center">Jan</div>
                      <div class="px-3 text-center">Feb</div>
                      <div class="px-3 text-center">Mar</div>
                      <div class="px-3 text-center">Apr</div>
                      <div class="px-3 text-center">May</div>
                      <div class="px-3 text-center">Jun</div>
                    </div>
                    <div class="divide-(--ui-border)/70 divide-y">
                      <div class="grid grid-cols-[140px_96px_repeat(6,minmax(82px,1fr))] text-sm">
                        <div class="text-muted flex h-12 items-center px-3 font-semibold">Jan</div>
                        <div class="text-muted flex h-12 items-center px-3 tabular-nums">0</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-muted" style="background-color:color-mix(in oklch, var(--ui-primary) 5%, var(--ui-bg))">0%</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-muted" style="background-color:color-mix(in oklch, var(--ui-primary) 5%, var(--ui-bg))">0%</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-muted" style="background-color:color-mix(in oklch, var(--ui-primary) 5%, var(--ui-bg))">0%</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-muted" style="background-color:color-mix(in oklch, var(--ui-primary) 5%, var(--ui-bg))">0%</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-muted" style="background-color:color-mix(in oklch, var(--ui-primary) 5%, var(--ui-bg))">0%</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-muted" style="background-color:color-mix(in oklch, var(--ui-primary) 5%, var(--ui-bg))">0%</div>
                      </div>
                      <div class="grid grid-cols-[140px_96px_repeat(6,minmax(82px,1fr))] text-sm">
                        <div class="text-muted flex h-12 items-center px-3 font-semibold">Feb</div>
                        <div class="text-muted flex h-12 items-center px-3 tabular-nums">2</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-muted" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, transparent)">-</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-primary" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg))">100%</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-primary" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg))">100%</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-primary" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg))">100%</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-primary" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg))">100%</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-primary" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg))">100%</div>
                      </div>
                      <div class="grid grid-cols-[140px_96px_repeat(6,minmax(82px,1fr))] text-sm">
                        <div class="text-muted flex h-12 items-center px-3 font-semibold">Mar</div>
                        <div class="text-muted flex h-12 items-center px-3 tabular-nums">5</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-muted" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, transparent)">-</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-muted" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, transparent)">-</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-primary" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg))">100%</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-primary" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg))">100%</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-primary" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg))">100%</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-primary" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg))">100%</div>
                      </div>
                      <div class="grid grid-cols-[140px_96px_repeat(6,minmax(82px,1fr))] text-sm">
                        <div class="text-muted flex h-12 items-center px-3 font-semibold">Apr</div>
                        <div class="text-muted flex h-12 items-center px-3 tabular-nums">2</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-muted" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, transparent)">-</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-muted" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, transparent)">-</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-muted" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, transparent)">-</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-primary" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg))">100%</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-primary" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg))">100%</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-primary" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg))">100%</div>
                      </div>
                      <div class="grid grid-cols-[140px_96px_repeat(6,minmax(82px,1fr))] text-sm">
                        <div class="text-muted flex h-12 items-center px-3 font-semibold">May</div>
                        <div class="text-muted flex h-12 items-center px-3 tabular-nums">0</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-muted" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, transparent)">-</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-muted" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, transparent)">-</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-muted" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, transparent)">-</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-muted" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, transparent)">-</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-muted" style="background-color:color-mix(in oklch, var(--ui-primary) 5%, var(--ui-bg))">0%</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-muted" style="background-color:color-mix(in oklch, var(--ui-primary) 5%, var(--ui-bg))">0%</div>
                      </div>
                      <div class="grid grid-cols-[140px_96px_repeat(6,minmax(82px,1fr))] text-sm">
                        <div class="text-muted flex h-12 items-center px-3 font-semibold">Jun</div>
                        <div class="text-muted flex h-12 items-center px-3 tabular-nums">0</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-muted" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, transparent)">-</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-muted" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, transparent)">-</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-muted" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, transparent)">-</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-muted" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, transparent)">-</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-muted" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 42%, transparent)">-</div>
                        <div class="flex h-12 items-center justify-center font-semibold tabular-nums text-muted" style="background-color:color-mix(in oklch, var(--ui-primary) 5%, var(--ui-bg))">0%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-muted mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
                  <span>Monthly retention:</span>
                  <span class="inline-flex items-center gap-2">
                    <span class="size-3 border border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 18%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 34%, transparent)" />
                    80%+
                  </span>
                  <span class="inline-flex items-center gap-2">
                    <span class="size-3 border border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 12%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 26%, transparent)" />
                    60-79%
                  </span>
                  <span class="inline-flex items-center gap-2">
                    <span class="size-3 border border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 8%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 20%, transparent)" />
                    40-59%
                  </span>
                  <span class="inline-flex items-center gap-2">
                    <span class="size-3 border border-default" style="background-color:color-mix(in oklch, var(--ui-primary) 5%, var(--ui-bg));border-color:color-mix(in oklch, var(--ui-primary) 16%, transparent)" />
                    Below 40%
                  </span>
                </div>
                <div class="pointer-events-none absolute inset-0">
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 top-0 left-0">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 top-0 right-0 -scale-x-100">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 bottom-0 left-0 -scale-y-100">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
                  </div>
                  <div class="absolute size-3 opacity-45 transition-opacity duration-300 group-hover/card:animate-[cornerGlitch_0.6s_ease-in-out] group-hover/card:opacity-100 right-0 bottom-0 -scale-100">
                    <span class="bg-primary/70 absolute top-0 left-0.5 h-0.5 w-2.5" />
                    <span class="bg-primary/70 absolute top-0 left-0 h-2.5 w-0.5" />
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

.chart-container { min-width: 0; }
.chart-wrapper { width: 100% !important; }
.chart-responsive-container > div { width: 100% !important; height: 100% !important; }
svg.chart-surface { width: 100%; overflow: visible; }
.chart-cartesian-axis-tick text { fill: var(--ui-text-muted); font-size: 11px; }
.chart-cartesian-grid line { stroke: var(--ui-border); }
</style>
