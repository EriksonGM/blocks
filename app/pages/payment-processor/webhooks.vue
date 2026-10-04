<!-- Page: /payment-processor/webhooks | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Webhooks · Blocks Admin" })

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/payment-processor/webhooks">
    <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted flex min-h-0 flex-1 overflow-hidden">
          <section class="grid min-h-0 w-full flex-1 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,24rem)] xl:grid-cols-[minmax(0,1fr)_minmax(24rem,26rem)]">
            <div class="vertical-scrollbar min-h-0 overflow-y-auto">
              <div class="px-5 py-6 lg:px-6">
                <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h1 class="text-xl font-semibold tracking-tight text-highlighted">Webhooks</h1>
                    <p class="text-muted mt-1 text-sm">Monitor endpoint health, delivery attempts, and retries.</p>
                  </div>
                  <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 px-4 py-2 h-9 shrink-0 rounded-md" aria-label="Add endpoint" type="button" @click="openAction(&quot;Add endpoint&quot;)">
                    <UIcon name="i-lucide-plus" class="size-4" />
                    Add endpoint
                  </UButton>
                </div>
                <div class="mt-5 grid gap-4 lg:grid-cols-2">
                  <div class="flex flex-col rounded-xl border border-default">
                    <div class="flex items-center gap-2 px-4 pt-3 pb-2">
                      <UIcon name="i-lucide-shield-check" class="text-muted size-4" />
                      <p class="text-sm font-semibold text-highlighted">Delivery Integrity</p>
                    </div>
                    <div class="flex flex-1 flex-col justify-center px-4 pb-3">
                      <div class="flex items-baseline justify-between gap-3 text-xs">
                        <span class="text-muted">
                          Baseline
                          <span class="text-highlighted font-medium tabular-nums">96.4%</span>
                        </span>
                        <span class="text-muted">
                          Target
                          <span class="text-highlighted font-medium tabular-nums">99.5%</span>
                        </span>
                      </div>
                      <div class="mt-2">
                        <div aria-label="97.2% of deliveries succeeded" class="flex items-center gap-[3px]" role="img">
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-success" />
                          <span class="h-4 w-1 rounded-full bg-(--ui-text-muted)/20" />
                        </div>
                      </div>
                      <p class="mt-2 text-sm">
                        <span class="font-medium tabular-nums">97.2%</span>
                        <span class="text-muted">delivered on first attempt</span>
                      </p>
                      <div class="mt-3 flex flex-wrap items-center gap-1.5 border-t pt-3 border-default">
                        <UIcon name="i-lucide-circle-alert" class="size-3.5 shrink-0 text-warning" />
                        <span class="text-muted mr-1 text-xs">Recommended</span>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default py-2 h-7 rounded-full px-2.5 text-xs font-medium shadow-none" aria-label="Review failures" type="button" @click="openAction(&quot;Review failures&quot;)">
                          Review failures
                        </UButton>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default py-2 h-7 rounded-full px-2.5 text-xs font-medium shadow-none" aria-label="Widen retries" type="button" @click="openAction(&quot;Widen retries&quot;)">
                          Widen retries
                        </UButton>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default py-2 h-7 rounded-full px-2.5 text-xs font-medium shadow-none" aria-label="Rotate secrets" type="button" @click="openAction(&quot;Rotate secrets&quot;)">
                          Rotate secrets
                        </UButton>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col rounded-xl border border-default">
                    <div class="flex items-center gap-2 px-4 pt-3 pb-2">
                      <UIcon name="i-lucide-activity" class="text-muted size-4" />
                      <p class="text-sm font-semibold text-highlighted">Endpoint Health</p>
                    </div>
                    <div class="flex flex-1 flex-col justify-center px-4 pb-3">
                      <p class="text-muted text-[11px] font-semibold tracking-[0.14em] uppercase text-highlighted">Events delivered · 24h</p>
                      <div class="mt-1 flex items-center gap-2">
                        <p class="text-2xl font-semibold tracking-tight tabular-nums text-highlighted">11,691</p>
                        <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-5 rounded-full border-success/20 bg-success/10 px-1.5 text-[11px] font-medium text-success shadow-none dark:border-success/20 dark:bg-success/30 dark:text-success">+2.8%</div>
                      </div>
                      <dl class="mt-3 space-y-2 border-t pt-3 border-default">
                        <div class="flex items-center justify-between gap-3">
                          <dt class="text-sm">Retry backlog</dt>
                          <dd class="flex items-center gap-3">
                            <div aria-label="35 out of 100" class="flex items-center gap-1" role="img">
                              <span class="h-2.5 w-3 rounded-[3px] bg-primary" />
                              <span class="h-2.5 w-3 rounded-[3px] bg-primary" />
                              <span class="h-2.5 w-3 rounded-[3px] bg-(--ui-text-muted)/20" />
                              <span class="h-2.5 w-3 rounded-[3px] bg-(--ui-text-muted)/20" />
                              <span class="h-2.5 w-3 rounded-[3px] bg-(--ui-text-muted)/20" />
                            </div>
                            <span class="text-muted w-14 text-right text-xs tabular-nums">35/100</span>
                          </dd>
                        </div>
                        <div class="flex items-center justify-between gap-3">
                          <dt class="text-sm">Latency volatility</dt>
                          <dd class="flex items-center gap-3">
                            <div aria-label="63 out of 100" class="flex items-center gap-1" role="img">
                              <span class="h-2.5 w-3 rounded-[3px] bg-primary" />
                              <span class="h-2.5 w-3 rounded-[3px] bg-primary" />
                              <span class="h-2.5 w-3 rounded-[3px] bg-primary" />
                              <span class="h-2.5 w-3 rounded-[3px] bg-(--ui-text-muted)/20" />
                              <span class="h-2.5 w-3 rounded-[3px] bg-(--ui-text-muted)/20" />
                            </div>
                            <span class="text-muted w-14 text-right text-xs tabular-nums">63/100</span>
                          </dd>
                        </div>
                        <div class="flex items-center justify-between gap-3">
                          <dt class="text-sm">Signature failures</dt>
                          <dd class="flex items-center gap-3">
                            <div aria-label="17 out of 100" class="flex items-center gap-1" role="img">
                              <span class="h-2.5 w-3 rounded-[3px] bg-primary" />
                              <span class="h-2.5 w-3 rounded-[3px] bg-(--ui-text-muted)/20" />
                              <span class="h-2.5 w-3 rounded-[3px] bg-(--ui-text-muted)/20" />
                              <span class="h-2.5 w-3 rounded-[3px] bg-(--ui-text-muted)/20" />
                              <span class="h-2.5 w-3 rounded-[3px] bg-(--ui-text-muted)/20" />
                            </div>
                            <span class="text-muted w-14 text-right text-xs tabular-nums">17/100</span>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
                <div class="mt-6 border-b border-default">
                  <div class="flex gap-6 overflow-x-auto">
                    <UButton color="neutral" variant="outline" class="flex h-11 shrink-0 items-center gap-2 border-b-2 px-1 text-sm font-medium transition-colors border-primary text-primary" aria-label="Endpoints" type="button" @click="openAction(&quot;Endpoints&quot;)">
                      <UIcon name="i-lucide-webhook" class="size-4" />
                      Endpoints
                    </UButton>
                    <UButton color="neutral" variant="outline" class="flex h-11 shrink-0 items-center gap-2 border-b-2 px-1 text-sm font-medium transition-colors text-muted hover:text-highlighted border-transparent" aria-label="Deliveries" type="button" @click="openAction(&quot;Deliveries&quot;)">
                      <UIcon name="i-lucide-activity" class="size-4" />
                      Deliveries
                    </UButton>
                    <UButton color="neutral" variant="outline" class="flex h-11 shrink-0 items-center gap-2 border-b-2 px-1 text-sm font-medium transition-colors text-muted hover:text-highlighted border-transparent" aria-label="Event types" type="button" @click="openAction(&quot;Event types&quot;)">
                      <UIcon name="i-lucide-file-braces" class="size-4" />
                      Event types
                    </UButton>
                  </div>
                </div>
                <div class="mt-6">
                  <p class="text-sm font-semibold text-highlighted">Pipeline</p>
                  <div class="mt-3 rounded-xl border p-4 border-default">
                    <div class="flex flex-wrap items-center justify-between gap-2">
                      <p class="flex items-center gap-2 text-sm font-medium">
                        <UIcon name="i-lucide-loader-circle" class="text-muted size-4" />
                        Delivery lifecycle
                      </p>
                      <p class="text-muted text-xs">Jun 1 – Jun 19, 2026</p>
                    </div>
                    <div class="mt-4 flex gap-1.5">
                      <span class="h-1.5 rounded-full bg-primary" style="width:10.982807287657172%;min-width:6%" />
                      <span class="h-1.5 rounded-full bg-primary/80" style="width:7.202121289881106%;min-width:6%" />
                      <span class="h-1.5 rounded-full bg-primary/60" style="width:80.50637242323154%;min-width:6%" />
                      <span class="h-1.5 rounded-full bg-primary/40" style="width:1.034984175861774%;min-width:6%" />
                      <span class="h-1.5 rounded-full bg-primary/20" style="width:0.273714823368403%;min-width:6%" />
                    </div>
                    <div class="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                      <div class="flex items-center gap-2 text-sm">
                        <span class="text-muted">Queued</span>
                        <span class="font-medium tabular-nums">1,284</span>
                      </div>
                      <div class="flex items-center gap-2 text-sm">
                        <span class="text-muted">Sending</span>
                        <span class="font-medium tabular-nums">842</span>
                      </div>
                      <div class="flex items-center gap-2 text-sm">
                        <span class="text-muted">Delivered</span>
                        <span class="font-medium tabular-nums">9,412</span>
                      </div>
                      <div class="flex items-center gap-2 text-sm">
                        <span class="text-muted">Retrying</span>
                        <span class="font-medium tabular-nums">121</span>
                      </div>
                      <div class="flex items-center gap-2 text-sm">
                        <span class="text-muted">Failed</span>
                        <span class="font-medium tabular-nums">32</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-6">
                  <p class="text-sm font-semibold text-highlighted">Endpoints</p>
                  <div class="mt-3 flex flex-wrap items-center gap-2">
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default px-4 py-2 h-8 rounded-md text-[13px] font-medium shadow-none" aria-label="Add filter" type="button" @click="openAction(&quot;Add filter&quot;)">
                      <UIcon name="i-lucide-list-filter" class="size-4" />
                      Add filter
                    </UButton>
                    <UBadge color="neutral" variant="subtle" class="bg-default inline-flex h-8 shrink-0 items-center gap-1.5 rounded-md border pr-1 pl-3 text-[13px] border-default">
                      <span class="text-muted">Mode is</span>
                      <span class="font-medium">Live</span>
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-6 rounded-sm" aria-label="Clear Mode is filter" type="button" @click="openAction(&quot;Clear Mode is filter&quot;)">
                        <UIcon name="i-lucide-x" class="size-3.5" />
                        <span class="sr-only">Clear Mode is filter</span>
                      </UButton>
                    </UBadge>
                  </div>
                  <div class="mt-3 overflow-hidden rounded-xl border border-default">
                    <UButton color="neutral" variant="outline" class="grid w-full grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-b px-4 py-4 text-left transition-colors last:border-b-0 hover:bg-(--ui-bg-muted)/30 bg-(--ui-bg-muted)/40 border-default" aria-label="api.northline.studioNorthline Studioinvoice.paid, invoice.payment_failed +1Healthyevt_82412h agoliveEnabled" type="button" @click="openAction(&quot;api.northline.studioNorthline Studioinvoice.paid, invoice.payment_failed +1Healthyevt_82412h agoliveEnabled&quot;)">
                      <div class="min-w-0">
                        <p class="truncate font-mono text-sm font-medium">api.northline.studio</p>
                        <p class="text-muted mt-1.5 flex min-w-0 items-center gap-1.5 text-xs">
                          <UIcon name="i-lucide-building-2" class="size-3.5 shrink-0" />
                          <span class="truncate">Northline Studio</span>
                        </p>
                        <p class="text-muted mt-1 flex min-w-0 items-center gap-1.5 text-xs">
                          <UIcon name="i-lucide-activity" class="size-3.5 shrink-0" />
                          <span class="truncate font-mono">invoice.paid, invoice.payment_failed +1</span>
                        </p>
                      </div>
                      <div class="flex flex-col items-end gap-2">
                        <div class="flex items-center gap-2 text-xs">
                          <span class="size-2 rounded-full bg-success" />
                          <span class="font-medium">Healthy</span>
                          <span class="text-muted inline-flex items-center gap-0.5 font-mono underline underline-offset-2">
                            evt_8241
                            <UIcon name="i-lucide-arrow-up-right" class="size-3" />
                          </span>
                          <span class="text-muted whitespace-nowrap">2h ago</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                          <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 h-5 rounded-md px-1.5 text-[11px] font-medium capitalize shadow-none border-default">live</div>
                          <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-5 rounded-md px-1.5 text-[11px] font-medium shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success">Enabled</div>
                        </div>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="grid w-full grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-b px-4 py-4 text-left transition-colors last:border-b-0 hover:bg-(--ui-bg-muted)/30 border-default" aria-label="hooks.veldco.comVeld &amp; Cocharge.succeeded, charge.refunded +1Degradedevt_823618m agoliveRetrying" type="button" @click="openAction(&quot;hooks.veldco.comVeld & Cocharge.succeeded, charge.refunded +1Degradedevt_823618m agoliveRetrying&quot;)">
                      <div class="min-w-0">
                        <p class="truncate font-mono text-sm font-medium">hooks.veldco.com</p>
                        <p class="text-muted mt-1.5 flex min-w-0 items-center gap-1.5 text-xs">
                          <UIcon name="i-lucide-building-2" class="size-3.5 shrink-0" />
                          <span class="truncate">Veld &amp; Co</span>
                        </p>
                        <p class="text-muted mt-1 flex min-w-0 items-center gap-1.5 text-xs">
                          <UIcon name="i-lucide-activity" class="size-3.5 shrink-0" />
                          <span class="truncate font-mono">charge.succeeded, charge.refunded +1</span>
                        </p>
                      </div>
                      <div class="flex flex-col items-end gap-2">
                        <div class="flex items-center gap-2 text-xs">
                          <span class="size-2 rounded-full bg-warning" />
                          <span class="font-medium">Degraded</span>
                          <span class="text-muted inline-flex items-center gap-0.5 font-mono underline underline-offset-2">
                            evt_8236
                            <UIcon name="i-lucide-arrow-up-right" class="size-3" />
                          </span>
                          <span class="text-muted whitespace-nowrap">18m ago</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                          <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 h-5 rounded-md px-1.5 text-[11px] font-medium capitalize shadow-none border-default">live</div>
                          <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-5 rounded-md px-1.5 text-[11px] font-medium shadow-none border-warning/20 bg-warning/10 text-warning dark:border-warning/20 dark:bg-warning/30 dark:text-warning">Retrying</div>
                        </div>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="grid w-full grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-b px-4 py-4 text-left transition-colors last:border-b-0 hover:bg-(--ui-bg-muted)/30 border-default" aria-label="ops.kairosvs.comKairos Venturessubscription.created, subscription.updated +2Failingevt_82296m agoliveFailing" type="button" @click="openAction(&quot;ops.kairosvs.comKairos Venturessubscription.created, subscription.updated +2Failingevt_82296m agoliveFailing&quot;)">
                      <div class="min-w-0">
                        <p class="truncate font-mono text-sm font-medium">ops.kairosvs.com</p>
                        <p class="text-muted mt-1.5 flex min-w-0 items-center gap-1.5 text-xs">
                          <UIcon name="i-lucide-building-2" class="size-3.5 shrink-0" />
                          <span class="truncate">Kairos Ventures</span>
                        </p>
                        <p class="text-muted mt-1 flex min-w-0 items-center gap-1.5 text-xs">
                          <UIcon name="i-lucide-activity" class="size-3.5 shrink-0" />
                          <span class="truncate font-mono">subscription.created, subscription.updated +2</span>
                        </p>
                      </div>
                      <div class="flex flex-col items-end gap-2">
                        <div class="flex items-center gap-2 text-xs">
                          <span class="size-2 rounded-full bg-error" />
                          <span class="font-medium">Failing</span>
                          <span class="text-muted inline-flex items-center gap-0.5 font-mono underline underline-offset-2">
                            evt_8229
                            <UIcon name="i-lucide-arrow-up-right" class="size-3" />
                          </span>
                          <span class="text-muted whitespace-nowrap">6m ago</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                          <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 h-5 rounded-md px-1.5 text-[11px] font-medium capitalize shadow-none border-default">live</div>
                          <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-5 rounded-md px-1.5 text-[11px] font-medium shadow-none border-error/20 bg-error/10 text-error dark:border-error/20 dark:bg-error/30 dark:text-error">Failing</div>
                        </div>
                      </div>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="grid w-full grid-cols-[minmax(0,1fr)_auto] items-start gap-4 border-b px-4 py-4 text-left transition-colors last:border-b-0 hover:bg-(--ui-bg-muted)/30 border-default" aria-label="ledger.quarryinterface.comQuarry Interfacepayout.paid, payout.failed +1Pausedevt_81903d agolivePaused" type="button" @click="openAction(&quot;ledger.quarryinterface.comQuarry Interfacepayout.paid, payout.failed +1Pausedevt_81903d agolivePaused&quot;)">
                      <div class="min-w-0">
                        <p class="truncate font-mono text-sm font-medium">ledger.quarryinterface.com</p>
                        <p class="text-muted mt-1.5 flex min-w-0 items-center gap-1.5 text-xs">
                          <UIcon name="i-lucide-building-2" class="size-3.5 shrink-0" />
                          <span class="truncate">Quarry Interface</span>
                        </p>
                        <p class="text-muted mt-1 flex min-w-0 items-center gap-1.5 text-xs">
                          <UIcon name="i-lucide-activity" class="size-3.5 shrink-0" />
                          <span class="truncate font-mono">payout.paid, payout.failed +1</span>
                        </p>
                      </div>
                      <div class="flex flex-col items-end gap-2">
                        <div class="flex items-center gap-2 text-xs">
                          <span class="size-2 rounded-full bg-accented" />
                          <span class="font-medium">Paused</span>
                          <span class="text-muted inline-flex items-center gap-0.5 font-mono underline underline-offset-2">
                            evt_8190
                            <UIcon name="i-lucide-arrow-up-right" class="size-3" />
                          </span>
                          <span class="text-muted whitespace-nowrap">3d ago</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                          <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 h-5 rounded-md px-1.5 text-[11px] font-medium capitalize shadow-none border-default">live</div>
                          <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-5 rounded-md px-1.5 text-[11px] font-medium shadow-none border-accented bg-default text-toned dark:border-default dark:bg-(--ui-bg)/60 dark:text-default">Paused</div>
                        </div>
                      </div>
                    </UButton>
                  </div>
                </div>
              </div>
            </div>
            <aside class="bg-default flex min-h-0 flex-col overflow-hidden border-t lg:border-t-0 lg:border-l border-default">
              <div class="flex items-center justify-between gap-4 border-b px-5 py-4 border-default">
                <p class="text-sm font-semibold text-highlighted">Endpoint Detail</p>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated text-muted hover:text-highlighted size-7" aria-label="Close endpoint detail" type="button" @click="openAction(&quot;Close endpoint detail&quot;)">
                  <UIcon name="i-lucide-x" class="size-4" />
                  <span class="sr-only">Close endpoint detail</span>
                </UButton>
              </div>
              <div class="vertical-scrollbar min-h-0 flex-1 overflow-y-auto">
                <div class="border-b px-5 py-5 border-default">
                  <div class="flex items-start gap-3">
                    <div class="bg-muted grid size-11 shrink-0 place-items-center rounded-lg border border-default">
                      <UIcon name="i-lucide-webhook" class="size-5" />
                    </div>
                    <div class="min-w-0">
                      <p class="truncate font-mono text-base font-semibold text-highlighted">api.northline.studio</p>
                      <p class="text-muted truncate text-sm">Northline Studio · Livemode</p>
                    </div>
                  </div>
                  <div class="mt-4 flex flex-wrap gap-2">
                    <UBadge color="neutral" variant="subtle" class="bg-(--ui-bg-muted)/50 inline-flex min-w-0 items-center gap-1.5 rounded-md border px-2 py-1 text-xs border-default">
                      <UIcon name="i-lucide-link-2" class="text-muted size-3.5 shrink-0" />
                      <span class="truncate font-mono">https://api.northline.studio/hooks/billing</span>
                    </UBadge>
                    <UBadge color="neutral" variant="subtle" class="bg-(--ui-bg-muted)/50 inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs border-default">
                      <UIcon name="i-lucide-key-round" class="text-muted size-3.5 shrink-0" />
                      <span class="font-mono">whsec_9f2b…4c71</span>
                    </UBadge>
                  </div>
                  <div class="bg-(--ui-bg-muted)/40 mt-4 rounded-lg border p-3 border-default">
                    <p class="text-sm font-medium">Description</p>
                    <p class="text-muted mt-1 text-sm leading-5">Receives invoice and subscription lifecycle events for the billing service.</p>
                  </div>
                  <div class="mt-4 grid grid-cols-3 gap-2">
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default px-4 py-2 h-9 rounded-md text-[13px] shadow-none" aria-label="Pause" type="button" @click="openAction(&quot;Pause&quot;)">
                      <UIcon name="i-lucide-pause" class="size-3.5" />
                      Pause
                    </UButton>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default px-4 py-2 h-9 rounded-md text-[13px] shadow-none" aria-label="Disable" type="button" @click="openAction(&quot;Disable&quot;)">
                      <UIcon name="i-lucide-power" class="size-3.5" />
                      Disable
                    </UButton>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default px-4 py-2 h-9 rounded-md text-[13px] shadow-none" aria-label="Rotate" type="button" @click="openAction(&quot;Rotate&quot;)">
                      <UIcon name="i-lucide-refresh-cw" class="size-3.5" />
                      Rotate
                    </UButton>
                  </div>
                </div>
                <dl class="space-y-3 border-b px-5 py-5 border-default">
                  <div class="grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-3">
                    <dt class="text-muted text-sm">Owner</dt>
                    <dd class="min-w-0 text-sm">
                      <span class="flex min-w-0 items-center gap-2">
                        <span class="bg-muted grid size-6 shrink-0 place-items-center rounded-full border text-[10px] font-semibold border-default">PR</span>
                        <span class="truncate">Priya Raman</span>
                      </span>
                    </dd>
                  </div>
                  <div class="grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-3">
                    <dt class="text-muted text-sm">Status</dt>
                    <dd class="min-w-0 text-sm">
                      <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 h-6 rounded-md px-2 text-[11px] font-medium shadow-none border-success/20 bg-success/10 text-success dark:border-success/20 dark:bg-success/30 dark:text-success">Enabled</div>
                    </dd>
                  </div>
                  <div class="grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-3">
                    <dt class="text-muted text-sm">Mode</dt>
                    <dd class="min-w-0 text-sm">
                      <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 h-6 rounded-md px-2 text-[11px] font-medium capitalize shadow-none border-default">live</div>
                    </dd>
                  </div>
                  <div class="grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-3">
                    <dt class="text-muted text-sm">Health checks</dt>
                    <dd class="min-w-0 text-sm">
                      <span class="flex items-center gap-2">
                        <UIcon name="i-lucide-loader-circle" class="text-muted size-3.5" />
                        6 of 6 checks passing
                      </span>
                    </dd>
                  </div>
                  <div class="grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-3">
                    <dt class="text-muted text-sm">Success rate</dt>
                    <dd class="min-w-0 text-sm">
                      <span class="tabular-nums">99.4%</span>
                    </dd>
                  </div>
                  <div class="grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-3">
                    <dt class="text-muted text-sm">Last event</dt>
                    <dd class="min-w-0 text-sm">
                      <span class="min-w-0 truncate font-mono">invoice.paid</span>
                    </dd>
                  </div>
                  <div class="grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-3">
                    <dt class="text-muted text-sm">Last response</dt>
                    <dd class="min-w-0 text-sm">
                      <span class="font-mono">200 OK</span>
                    </dd>
                  </div>
                </dl>
                <div class="px-5 py-5">
                  <p class="text-sm font-semibold text-highlighted">Activity</p>
                  <ul class="mt-4">
                    <li class="relative pb-6 pl-7 last:pb-0">
                      <UIcon name="i-lucide-circle-check" class="absolute top-0.5 left-0 size-4 text-success dark:text-success" />
                      <div class="flex flex-wrap items-center gap-2">
                        <p class="text-sm">Delivery succeeded for invoice.paid</p>
                        <span class="text-muted text-xs">now</span>
                      </div>
                      <div class="bg-(--ui-bg-muted)/40 mt-2 overflow-x-auto rounded-lg border px-3 py-2 border-default">
                        <code class="text-muted text-xs whitespace-pre">&#123; &quot;id&quot;: &quot;evt_8241&quot;, &quot;type&quot;: &quot;invoice.paid&quot;, &quot;livemode&quot;: true &#125;</code>
                      </div>
                    </li>
                    <li class="relative pb-6 pl-7 last:pb-0">
                      <UIcon name="i-lucide-circle-check" class="text-(--ui-text-muted)/50 absolute top-0.5 left-0 size-4" />
                      <div class="flex flex-wrap items-center gap-2">
                        <p class="text-sm">Signature verified with whsec_9f2b…4c71</p>
                        <span class="text-muted text-xs">2h</span>
                      </div>
                    </li>
                    <li class="relative pb-6 pl-7 last:pb-0">
                      <UIcon name="i-lucide-circle-check" class="text-(--ui-text-muted)/50 absolute top-0.5 left-0 size-4" />
                      <div class="flex flex-wrap items-center gap-2">
                        <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 h-5 rounded-md px-1.5 text-[11px] font-medium shadow-none border-default">Replay</div>
                        <p class="text-sm">Event payload queued</p>
                        <span class="text-muted text-xs">1d</span>
                      </div>
                      <div class="mt-2 flex items-center gap-3 rounded-lg border p-2.5 border-default">
                        <div class="bg-muted grid size-9 shrink-0 place-items-center rounded-md border border-default">
                          <UIcon name="i-lucide-file-braces" class="text-muted size-4" />
                        </div>
                        <div class="min-w-0">
                          <p class="truncate font-mono text-xs font-medium">invoice-paid-payload.json</p>
                          <p class="text-muted text-xs">4KB</p>
                        </div>
                      </div>
                    </li>
                    <li class="relative pb-6 pl-7 last:pb-0">
                      <UIcon name="i-lucide-circle-check" class="text-(--ui-text-muted)/50 absolute top-0.5 left-0 size-4" />
                      <div class="flex flex-wrap items-center gap-2">
                        <p class="text-sm">Endpoint created by Priya Raman</p>
                        <span class="text-muted text-xs">12d</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </section>
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
