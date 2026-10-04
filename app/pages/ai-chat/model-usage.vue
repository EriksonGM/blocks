<!-- Page: /ai-chat/model-usage | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Model usage · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "allProjects": "All projects",
  "last14Days": "Last 14 days"
})

const allProjectsOptions = [
  "All projects",
  "Support copilot",
  "Knowledge search",
  "Content studio"
]

const last14DaysOptions = [
  "Last 14 days",
  "Last 30 days"
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

function exportCsv() {
  const rows = Object.entries(form).map(([name, value]) => [name, String(value)])
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "ai-chat-model-usage.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/model-usage">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="min-h-0 flex-1 overflow-y-auto">
        <div class="mx-auto flex flex-col px-4 sm:px-8 max-w-[944px] gap-6 py-8 sm:py-12">
          <div class="flex flex-wrap gap-4 items-start justify-between">
            <div class="flex flex-col gap-1">
              <h1 class="text-2xl font-semibold tracking-tight text-highlighted">Model usage</h1>
              <p class="text-muted max-w-2xl text-sm">Track usage, spend, and reliability across your models.</p>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-8 rounded-md px-3 text-xs" aria-label="Export" type="button" @click="exportCsv()">
                <UIcon name="i-lucide-download" class="size-3.5" />
                Export
              </UButton>
            </div>
          </div>
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="flex flex-wrap gap-2">
              <USelect v-model="form.allProjects" :items="allProjectsOptions" aria-label="Project" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between rounded-md border bg-transparent px-3 py-2 whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto h-8 min-w-0 text-xs" />
              <USelect v-model="form.last14Days" :items="last14DaysOptions" aria-label="Usage period" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between rounded-md border bg-transparent px-3 py-2 whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto h-8 min-w-0 text-xs" />
            </div>
            <span class="text-muted text-xs">As of Sep 24, 2026</span>
          </div>
          <div class="grid gap-3 sm:grid-cols-3">
            <div class="flex min-h-24 flex-col justify-between gap-4 rounded-2xl border p-4 border-default">
              <span class="text-muted text-sm">Total requests</span>
              <div class="flex items-end justify-between gap-2">
                <span class="text-xl font-medium tabular-nums">19.2K</span>
                <span class="text-muted text-xs">29M tokens</span>
              </div>
            </div>
            <div class="flex min-h-24 flex-col justify-between gap-4 rounded-2xl border p-4 border-default">
              <span class="text-muted text-sm">Usage spend</span>
              <div class="flex items-end justify-between gap-2">
                <span class="text-xl font-medium tabular-nums">$116.51</span>
                <span class="text-muted text-xs">USD · this period</span>
              </div>
            </div>
            <div class="flex min-h-24 flex-col justify-between gap-4 rounded-2xl border p-4 border-default">
              <span class="text-muted text-sm">Models in use</span>
              <div class="flex items-end justify-between gap-2">
                <span class="text-xl font-medium tabular-nums">
                  3
                  <span class="text-muted text-sm">of 4</span>
                </span>
                <span class="text-xs text-warning dark:text-warning">1 needs attention</span>
              </div>
            </div>
          </div>
          <div class="grid items-start gap-5 md:grid-cols-2">
            <article aria-label="GPT-4.1 usage" class="bg-(--ui-bg-muted)/35 overflow-hidden rounded-2xl">
              <div class="flex h-11 items-center justify-between gap-3 px-4">
                <div class="flex min-w-0 items-center gap-2">
                  <h2 class="truncate text-sm font-medium text-highlighted">GPT-4.1</h2>
                </div>
                <span class="text-muted shrink-0 text-xs">OpenAI</span>
              </div>
              <div class="bg-default flex min-h-[258px] flex-col rounded-2xl border p-4 border-default">
                <div class="flex items-center justify-between gap-2">
                  <p class="text-muted text-xs">Reasoning &amp; tools</p>
                  <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-[10px] font-normal border-success/20 bg-success/10 text-success dark:border-success dark:bg-success dark:text-success">Healthy</div>
                </div>
                <div class="mt-6 flex h-[76px] items-end gap-1" role="img" aria-label="GPT-4.1: 10,489 requests, 43 failed, 119 rate limited in 14 days.">
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:67.67485822306239%" title="Sep 11: 716 requests · 3 failed · 4 rate limited">
                    <span class="min-h-0 bg-error" style="height:0.41899441340782123%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.5586592178770949%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:77.31568998109641%" title="Sep 12: 818 requests · 3 failed · 5 rate limited">
                    <span class="min-h-0 bg-error" style="height:0.36674816625916873%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.6112469437652812%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:39.22495274102079%" title="Sep 13: 415 requests · 2 failed · 3 rate limited">
                    <span class="min-h-0 bg-error" style="height:0.48192771084337355%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.7228915662650602%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:96.88090737240076%" title="Sep 14: 1,025 requests · 4 failed · 6 rate limited">
                    <span class="min-h-0 bg-error" style="height:0.3902439024390244%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.5853658536585366%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:93.38374291115312%" title="Sep 15: 988 requests · 4 failed · 6 rate limited">
                    <span class="min-h-0 bg-error" style="height:0.4048582995951417%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.6072874493927125%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:78.54442344045368%" title="Sep 16: 831 requests · 3 failed · 5 rate limited">
                    <span class="min-h-0 bg-error" style="height:0.36101083032490977%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.601684717208183%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:88.468809073724%" title="Sep 17: 936 requests · 4 failed · 61 rate limited">
                    <span class="min-h-0 bg-error" style="height:0.4273504273504274%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:6.517094017094018%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:59.262759924385634%" title="Sep 18: 627 requests · 3 failed · 4 rate limited">
                    <span class="min-h-0 bg-error" style="height:0.4784688995215311%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.6379585326953748%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:69.18714555765595%" title="Sep 19: 732 requests · 3 failed · 5 rate limited">
                    <span class="min-h-0 bg-error" style="height:0.4098360655737705%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.6830601092896175%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:35.72778827977316%" title="Sep 20: 378 requests · 2 failed · 2 rate limited">
                    <span class="min-h-0 bg-error" style="height:0.5291005291005291%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.5291005291005291%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:89.5085066162571%" title="Sep 21: 947 requests · 4 failed · 6 rate limited">
                    <span class="min-h-0 bg-error" style="height:0.42238648363252373%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.6335797254487857%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:100%" title="Sep 22: 1,058 requests · 4 failed · 6 rate limited">
                    <span class="min-h-0 bg-error" style="height:0.3780718336483932%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.5671077504725899%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:96.21928166351607%" title="Sep 23: 1,018 requests · 4 failed · 6 rate limited">
                    <span class="min-h-0 bg-error" style="height:0.3929273084479371%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.5893909626719057%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:0%" title="Sep 24: 0 requests · 0 failed · 0 rate limited">
                    <span class="min-h-0 bg-error" style="height:0%;min-height:0" />
                    <span class="min-h-0 bg-warning" style="height:0%;min-height:0" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                </div>
                <div class="mt-3 flex items-center justify-between text-xs">
                  <span>10.5K requests</span>
                  <span class="text-muted">$62.93 used</span>
                </div>
                <p class="text-muted mt-2 text-[11px]">14-day usage · 13M tokens</p>
                <div class="mt-auto grid grid-cols-2 gap-2 pt-5">
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default rounded-md px-3 h-7 text-xs shadow-none" aria-label="Activity for GPT-4.1" type="button" @click="openAction(&quot;Activity for GPT-4.1&quot;)">
                    Activity
                    <span class="sr-only"> for GPT-4.1</span>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default rounded-md px-3 h-7 text-xs shadow-none" aria-label="Budget for GPT-4.1" type="button" @click="openAction(&quot;Budget for GPT-4.1&quot;)">
                    Budget
                    <span class="sr-only"> for GPT-4.1</span>
                  </UButton>
                </div>
              </div>
            </article>
            <article aria-label="Claude Sonnet 4 usage" class="bg-(--ui-bg-muted)/35 overflow-hidden rounded-2xl">
              <div class="flex h-11 items-center justify-between gap-3 px-4">
                <div class="flex min-w-0 items-center gap-2">
                  <h2 class="truncate text-sm font-medium text-highlighted">Claude Sonnet 4</h2>
                </div>
                <span title="Elevated errors in the last 7 days">
                  <UIcon name="i-lucide-triangle-alert" class="size-4 text-warning" />
                </span>
              </div>
              <div class="bg-default flex min-h-[258px] flex-col rounded-2xl border p-4 border-default">
                <div class="flex items-center justify-between gap-2">
                  <p class="text-muted text-xs">Writing &amp; analysis</p>
                  <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-[10px] font-normal border-warning/20 bg-warning/10 text-warning dark:border-warning dark:bg-warning dark:text-warning">Elevated errors</div>
                </div>
                <div class="mt-6 flex h-[76px] items-end gap-1" role="img" aria-label="Claude Sonnet 4: 5,272 requests, 94 failed, 53 rate limited in 14 days.">
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:81.23861566484517%" title="Sep 11: 446 requests · 2 failed · 3 rate limited">
                    <span class="min-h-0 bg-error" style="height:0.4484304932735426%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.672645739910314%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:90.7103825136612%" title="Sep 12: 498 requests · 2 failed · 3 rate limited">
                    <span class="min-h-0 bg-error" style="height:0.4016064257028112%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.6024096385542169%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:39.34426229508197%" title="Sep 13: 216 requests · 0 failed · 1 rate limited">
                    <span class="min-h-0 bg-error" style="height:0%;min-height:0" />
                    <span class="min-h-0 bg-warning" style="height:0.4629629629629629%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:73.04189435336977%" title="Sep 14: 401 requests · 1 failed · 2 rate limited">
                    <span class="min-h-0 bg-error" style="height:0.24937655860349126%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.4987531172069825%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:82.5136612021858%" title="Sep 15: 453 requests · 1 failed · 3 rate limited">
                    <span class="min-h-0 bg-error" style="height:0.22075055187637968%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.6622516556291391%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:54.826958105646625%" title="Sep 16: 301 requests · 1 failed · 2 rate limited">
                    <span class="min-h-0 bg-error" style="height:0.33222591362126247%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.6644518272425249%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:64.11657559198542%" title="Sep 17: 352 requests · 1 failed · 23 rate limited">
                    <span class="min-h-0 bg-error" style="height:0.2840909090909091%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:6.534090909090909%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:73.95264116575592%" title="Sep 18: 406 requests · 2 failed · 3 rate limited">
                    <span class="min-h-0 bg-error" style="height:0.49261083743842365%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.7389162561576355%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:83.60655737704919%" title="Sep 19: 459 requests · 18 failed · 3 rate limited">
                    <span class="min-h-0 bg-error" style="height:3.9215686274509802%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.6535947712418301%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:42.07650273224044%" title="Sep 20: 231 requests · 9 failed · 1 rate limited">
                    <span class="min-h-0 bg-error" style="height:3.896103896103896%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.4329004329004329%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:89.98178506375227%" title="Sep 21: 494 requests · 19 failed · 3 rate limited">
                    <span class="min-h-0 bg-error" style="height:3.8461538461538463%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.6072874493927125%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:100%" title="Sep 22: 549 requests · 21 failed · 3 rate limited">
                    <span class="min-h-0 bg-error" style="height:3.825136612021858%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.546448087431694%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:84.8816029143898%" title="Sep 23: 466 requests · 17 failed · 3 rate limited">
                    <span class="min-h-0 bg-error" style="height:3.648068669527897%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.6437768240343348%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:0%" title="Sep 24: 0 requests · 0 failed · 0 rate limited">
                    <span class="min-h-0 bg-error" style="height:0%;min-height:0" />
                    <span class="min-h-0 bg-warning" style="height:0%;min-height:0" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                </div>
                <div class="mt-3 flex items-center justify-between text-xs">
                  <span>5.3K requests</span>
                  <span class="text-muted">$47.45 used</span>
                </div>
                <p class="text-muted mt-2 text-[11px]">14-day usage · 8.8M tokens</p>
                <div class="mt-auto grid grid-cols-2 gap-2 pt-5">
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default rounded-md px-3 h-7 text-xs shadow-none" aria-label="Activity for Claude Sonnet 4" type="button" @click="openAction(&quot;Activity for Claude Sonnet 4&quot;)">
                    Activity
                    <span class="sr-only"> for Claude Sonnet 4</span>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default rounded-md px-3 h-7 text-xs shadow-none" aria-label="Budget for Claude Sonnet 4" type="button" @click="openAction(&quot;Budget for Claude Sonnet 4&quot;)">
                    Budget
                    <span class="sr-only"> for Claude Sonnet 4</span>
                  </UButton>
                </div>
              </div>
            </article>
            <article aria-label="Gemini 2.5 Flash usage" class="bg-(--ui-bg-muted)/35 overflow-hidden rounded-2xl">
              <div class="flex h-11 items-center justify-between gap-3 px-4">
                <div class="flex min-w-0 items-center gap-2">
                  <h2 class="truncate text-sm font-medium text-highlighted">Gemini 2.5 Flash</h2>
                </div>
                <span class="text-muted shrink-0 text-xs">Google</span>
              </div>
              <div class="bg-default flex min-h-[258px] flex-col rounded-2xl border p-4 border-default">
                <div class="flex items-center justify-between gap-2">
                  <p class="text-muted text-xs">Fast responses</p>
                  <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-[10px] font-normal border-success/20 bg-success/10 text-success dark:border-success dark:bg-success dark:text-success">Healthy</div>
                </div>
                <div class="mt-6 flex h-[76px] items-end gap-1" role="img" aria-label="Gemini 2.5 Flash: 3,404 requests, 8 failed, 37 rate limited in 14 days.">
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:90.11299435028248%" title="Sep 11: 319 requests · 1 failed · 2 rate limited">
                    <span class="min-h-0 bg-error" style="height:0.3134796238244514%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.6269592476489028%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:100%" title="Sep 12: 354 requests · 2 failed · 2 rate limited">
                    <span class="min-h-0 bg-error" style="height:0.5649717514124294%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.5649717514124294%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:38.70056497175141%" title="Sep 13: 137 requests · 0 failed · 1 rate limited">
                    <span class="min-h-0 bg-error" style="height:0%;min-height:0" />
                    <span class="min-h-0 bg-warning" style="height:0.7299270072992701%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:55.932203389830505%" title="Sep 14: 198 requests · 0 failed · 1 rate limited">
                    <span class="min-h-0 bg-error" style="height:0%;min-height:0" />
                    <span class="min-h-0 bg-warning" style="height:0.5050505050505051%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:66.10169491525424%" title="Sep 15: 234 requests · 0 failed · 1 rate limited">
                    <span class="min-h-0 bg-error" style="height:0%;min-height:0" />
                    <span class="min-h-0 bg-warning" style="height:0.4273504273504274%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:76.27118644067797%" title="Sep 16: 270 requests · 0 failed · 2 rate limited">
                    <span class="min-h-0 bg-error" style="height:0%;min-height:0" />
                    <span class="min-h-0 bg-warning" style="height:0.7407407407407408%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:86.4406779661017%" title="Sep 17: 306 requests · 1 failed · 20 rate limited">
                    <span class="min-h-0 bg-error" style="height:0.32679738562091504%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:6.535947712418301%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:96.61016949152543%" title="Sep 18: 342 requests · 1 failed · 2 rate limited">
                    <span class="min-h-0 bg-error" style="height:0.29239766081871343%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.5847953216374269%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:92.93785310734464%" title="Sep 19: 329 requests · 2 failed · 2 rate limited">
                    <span class="min-h-0 bg-error" style="height:0.60790273556231%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.60790273556231%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:46.61016949152542%" title="Sep 20: 165 requests · 0 failed · 1 rate limited">
                    <span class="min-h-0 bg-error" style="height:0%;min-height:0" />
                    <span class="min-h-0 bg-warning" style="height:0.6060606060606061%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:87.85310734463276%" title="Sep 21: 311 requests · 1 failed · 1 rate limited">
                    <span class="min-h-0 bg-error" style="height:0.3215434083601286%;min-height:2px" />
                    <span class="min-h-0 bg-warning" style="height:0.3215434083601286%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:56.779661016949156%" title="Sep 22: 201 requests · 0 failed · 1 rate limited">
                    <span class="min-h-0 bg-error" style="height:0%;min-height:0" />
                    <span class="min-h-0 bg-warning" style="height:0.4975124378109453%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:67.2316384180791%" title="Sep 23: 238 requests · 0 failed · 1 rate limited">
                    <span class="min-h-0 bg-error" style="height:0%;min-height:0" />
                    <span class="min-h-0 bg-warning" style="height:0.42016806722689076%;min-height:2px" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                  <div class="flex min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-t-[3px]" style="height:0%" title="Sep 24: 0 requests · 0 failed · 0 rate limited">
                    <span class="min-h-0 bg-error" style="height:0%;min-height:0" />
                    <span class="min-h-0 bg-warning" style="height:0%;min-height:0" />
                    <span class="min-h-0 flex-1 bg-success" />
                  </div>
                </div>
                <div class="mt-3 flex items-center justify-between text-xs">
                  <span>3.4K requests</span>
                  <span class="text-muted">$6.13 used</span>
                </div>
                <p class="text-muted mt-2 text-[11px]">14-day usage · 7.2M tokens</p>
                <div class="mt-auto grid grid-cols-2 gap-2 pt-5">
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default rounded-md px-3 h-7 text-xs shadow-none" aria-label="Activity for Gemini 2.5 Flash" type="button" @click="openAction(&quot;Activity for Gemini 2.5 Flash&quot;)">
                    Activity
                    <span class="sr-only"> for Gemini 2.5 Flash</span>
                  </UButton>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default rounded-md px-3 h-7 text-xs shadow-none" aria-label="Budget for Gemini 2.5 Flash" type="button" @click="openAction(&quot;Budget for Gemini 2.5 Flash&quot;)">
                    Budget
                    <span class="sr-only"> for Gemini 2.5 Flash</span>
                  </UButton>
                </div>
              </div>
            </article>
            <article aria-label="Mistral Large usage" class="bg-(--ui-bg-muted)/35 overflow-hidden rounded-2xl">
              <div class="flex h-11 items-center justify-between gap-3 px-4">
                <div class="flex min-w-0 items-center gap-2">
                  <h2 class="truncate text-sm font-medium text-highlighted">Mistral Large</h2>
                </div>
                <span class="text-muted shrink-0 text-xs">Mistral</span>
              </div>
              <div class="bg-default flex min-h-[258px] flex-col rounded-2xl border p-4 border-default">
                <div class="flex items-center justify-between gap-2">
                  <p class="text-muted text-xs">Multilingual tasks</p>
                  <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-[10px] font-normal border-success/20 bg-success/10 text-success dark:border-success dark:bg-success dark:text-success">Ready</div>
                </div>
                <div class="mt-auto pt-8">
                  <p class="text-sm font-medium">No requests yet</p>
                  <p class="text-muted mt-2 text-xs leading-relaxed">This model is available to your workspace. Its usage will appear here after your first API request.</p>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default hover:bg-elevated hover:text-default rounded-md px-3 mt-5 h-7 w-full text-xs shadow-none" aria-label="View model" type="button" @click="openAction(&quot;View model&quot;)">
                    View model
                  </UButton>
                </div>
              </div>
            </article>
          </div>
          <div class="text-muted flex flex-wrap items-center justify-between gap-3 text-xs">
            <div class="flex flex-wrap gap-4">
              <span class="flex items-center gap-1.5">
                <span class="size-2 rounded-[2px] bg-success" />
                Successful
              </span>
              <span class="flex items-center gap-1.5">
                <span class="size-2 rounded-[2px] bg-warning" />
                Rate limited
              </span>
              <span class="flex items-center gap-1.5">
                <span class="size-2 rounded-[2px] bg-error" />
                Failed
              </span>
            </div>
            <NuxtLink class="text-highlighted underline-offset-4 hover:underline" to="/ai-chat/usage-insights">
              Explore usage insights 
            </NuxtLink>
          </div>
          <p class="text-muted text-xs">Demo workspace · Illustrative usage and costs. Budget changes apply to this demo session.</p>
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
