<!-- Page: /ai-chat/usage-insights | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Usage insights · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "allProjects": "All projects",
  "last12Months": "Last 12 months"
})

const allProjectsOptions = [
  "All projects",
  "Support copilot",
  "Knowledge search",
  "Content studio"
]

const last12MonthsOptions = [
  "Last 12 months",
  "Last 90 days"
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
  anchor.download = "ai-chat-usage-insights.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/usage-insights">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="min-h-0 flex-1 overflow-y-auto">
        <div class="mx-auto flex flex-col px-4 sm:px-8 max-w-[944px] gap-10 py-8 sm:py-12">
          <div class="flex flex-wrap gap-4 items-start justify-between">
            <div class="flex flex-col gap-1">
              <h1 class="text-2xl font-semibold tracking-tight text-highlighted">Usage insights</h1>
              <p class="text-muted max-w-2xl text-sm">A closer look at how your workspace uses AI.</p>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <USelect v-model="form.allProjects" :items="allProjectsOptions" aria-label="Project" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between rounded-md border bg-transparent px-3 py-2 whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto h-8 min-w-0 text-xs" />
              <USelect v-model="form.last12Months" :items="last12MonthsOptions" aria-label="Usage period" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex items-center justify-between rounded-md border bg-transparent px-3 py-2 whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto h-8 min-w-0 text-xs" />
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Export usage insights" type="button" @click="exportCsv()">
                <UIcon name="i-lucide-arrow-down-to-line" class="size-4" />
              </UButton>
            </div>
          </div>
          <section class="space-y-5">
            <div>
              <h2 id="activity-title" class="text-sm font-semibold text-highlighted">Activity</h2>
              <p class="text-muted mt-1 text-sm">
                API requests, day by day 
                <span class="mx-1">·</span>
                <span>143.8K</span>
                 in this period
              </p>
            </div>
            <div class="overflow-x-auto pb-1">
              <div class="min-w-[680px]">
                <div class="flex gap-2">
                  <div class="grid min-w-0 flex-1 grid-flow-col grid-rows-7 gap-[3px]" style="grid-template-columns:repeat(52, minmax(0, 1fr))" aria-label="Daily request activity">
                    <UButton color="neutral" variant="ghost" title="Sep 28 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Sep 28: 0 requests" type="button" @click="openAction(&quot;Sep 28: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Sep 29 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Sep 29: 0 requests" type="button" @click="openAction(&quot;Sep 29: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Sep 30 · 149 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 25%, var(--ui-bg-muted))" aria-label="Sep 30: 149 requests" type="button" @click="openAction(&quot;Sep 30: 149 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 1 · 169 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 26%, var(--ui-bg-muted))" aria-label="Oct 1: 169 requests" type="button" @click="openAction(&quot;Oct 1: 169 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 2 · 172 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 26%, var(--ui-bg-muted))" aria-label="Oct 2: 172 requests" type="button" @click="openAction(&quot;Oct 2: 172 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 3 · 176 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 26%, var(--ui-bg-muted))" aria-label="Oct 3: 176 requests" type="button" @click="openAction(&quot;Oct 3: 176 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 4 · 168 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 26%, var(--ui-bg-muted))" aria-label="Oct 4: 168 requests" type="button" @click="openAction(&quot;Oct 4: 168 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 5 · 64 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 21%, var(--ui-bg-muted))" aria-label="Oct 5: 64 requests" type="button" @click="openAction(&quot;Oct 5: 64 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 6 · 158 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 25%, var(--ui-bg-muted))" aria-label="Oct 6: 158 requests" type="button" @click="openAction(&quot;Oct 6: 158 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 7 · 136 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 24%, var(--ui-bg-muted))" aria-label="Oct 7: 136 requests" type="button" @click="openAction(&quot;Oct 7: 136 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 8 · 157 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 25%, var(--ui-bg-muted))" aria-label="Oct 8: 157 requests" type="button" @click="openAction(&quot;Oct 8: 157 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 9 · 170 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 26%, var(--ui-bg-muted))" aria-label="Oct 9: 170 requests" type="button" @click="openAction(&quot;Oct 9: 170 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 10 · 174 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 26%, var(--ui-bg-muted))" aria-label="Oct 10: 174 requests" type="button" @click="openAction(&quot;Oct 10: 174 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 11 · 180 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 26%, var(--ui-bg-muted))" aria-label="Oct 11: 180 requests" type="button" @click="openAction(&quot;Oct 11: 180 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 12 · 77 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 21%, var(--ui-bg-muted))" aria-label="Oct 12: 77 requests" type="button" @click="openAction(&quot;Oct 12: 77 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 13 · 168 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 26%, var(--ui-bg-muted))" aria-label="Oct 13: 168 requests" type="button" @click="openAction(&quot;Oct 13: 168 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 14 · 160 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 25%, var(--ui-bg-muted))" aria-label="Oct 14: 160 requests" type="button" @click="openAction(&quot;Oct 14: 160 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 15 · 137 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 24%, var(--ui-bg-muted))" aria-label="Oct 15: 137 requests" type="button" @click="openAction(&quot;Oct 15: 137 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 16 · 159 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 25%, var(--ui-bg-muted))" aria-label="Oct 16: 159 requests" type="button" @click="openAction(&quot;Oct 16: 159 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 17 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Oct 17: 0 requests" type="button" @click="openAction(&quot;Oct 17: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 18 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Oct 18: 0 requests" type="button" @click="openAction(&quot;Oct 18: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 19 · 88 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 22%, var(--ui-bg-muted))" aria-label="Oct 19: 88 requests" type="button" @click="openAction(&quot;Oct 19: 88 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 20 · 170 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 26%, var(--ui-bg-muted))" aria-label="Oct 20: 170 requests" type="button" @click="openAction(&quot;Oct 20: 170 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 21 · 168 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 26%, var(--ui-bg-muted))" aria-label="Oct 21: 168 requests" type="button" @click="openAction(&quot;Oct 21: 168 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 22 · 161 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 25%, var(--ui-bg-muted))" aria-label="Oct 22: 161 requests" type="button" @click="openAction(&quot;Oct 22: 161 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 23 · 137 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 24%, var(--ui-bg-muted))" aria-label="Oct 23: 137 requests" type="button" @click="openAction(&quot;Oct 23: 137 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 24 · 158 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 25%, var(--ui-bg-muted))" aria-label="Oct 24: 158 requests" type="button" @click="openAction(&quot;Oct 24: 158 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 25 · 173 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 26%, var(--ui-bg-muted))" aria-label="Oct 25: 173 requests" type="button" @click="openAction(&quot;Oct 25: 173 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 26 · 82 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 22%, var(--ui-bg-muted))" aria-label="Oct 26: 82 requests" type="button" @click="openAction(&quot;Oct 26: 82 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 27 · 198 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 27%, var(--ui-bg-muted))" aria-label="Oct 27: 198 requests" type="button" @click="openAction(&quot;Oct 27: 198 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 28 · 187 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 26%, var(--ui-bg-muted))" aria-label="Oct 28: 187 requests" type="button" @click="openAction(&quot;Oct 28: 187 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 29 · 192 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 27%, var(--ui-bg-muted))" aria-label="Oct 29: 192 requests" type="button" @click="openAction(&quot;Oct 29: 192 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 30 · 162 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 25%, var(--ui-bg-muted))" aria-label="Oct 30: 162 requests" type="button" @click="openAction(&quot;Oct 30: 162 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Oct 31 · 136 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 24%, var(--ui-bg-muted))" aria-label="Oct 31: 136 requests" type="button" @click="openAction(&quot;Oct 31: 136 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 1 · 158 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 25%, var(--ui-bg-muted))" aria-label="Nov 1: 158 requests" type="button" @click="openAction(&quot;Nov 1: 158 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 2 · 79 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 22%, var(--ui-bg-muted))" aria-label="Nov 2: 79 requests" type="button" @click="openAction(&quot;Nov 2: 79 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 3 · 196 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 27%, var(--ui-bg-muted))" aria-label="Nov 3: 196 requests" type="button" @click="openAction(&quot;Nov 3: 196 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 4 · 200 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 27%, var(--ui-bg-muted))" aria-label="Nov 4: 200 requests" type="button" @click="openAction(&quot;Nov 4: 200 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 5 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Nov 5: 0 requests" type="button" @click="openAction(&quot;Nov 5: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 6 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Nov 6: 0 requests" type="button" @click="openAction(&quot;Nov 6: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 7 · 163 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 25%, var(--ui-bg-muted))" aria-label="Nov 7: 163 requests" type="button" @click="openAction(&quot;Nov 7: 163 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 8 · 184 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 26%, var(--ui-bg-muted))" aria-label="Nov 8: 184 requests" type="button" @click="openAction(&quot;Nov 8: 184 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 9 · 71 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 21%, var(--ui-bg-muted))" aria-label="Nov 9: 71 requests" type="button" @click="openAction(&quot;Nov 9: 71 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 10 · 181 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 26%, var(--ui-bg-muted))" aria-label="Nov 10: 181 requests" type="button" @click="openAction(&quot;Nov 10: 181 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 11 · 198 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 27%, var(--ui-bg-muted))" aria-label="Nov 11: 198 requests" type="button" @click="openAction(&quot;Nov 11: 198 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 12 · 202 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 27%, var(--ui-bg-muted))" aria-label="Nov 12: 202 requests" type="button" @click="openAction(&quot;Nov 12: 202 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 13 · 207 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 27%, var(--ui-bg-muted))" aria-label="Nov 13: 207 requests" type="button" @click="openAction(&quot;Nov 13: 207 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 14 · 196 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 27%, var(--ui-bg-muted))" aria-label="Nov 14: 196 requests" type="button" @click="openAction(&quot;Nov 14: 196 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 15 · 196 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 27%, var(--ui-bg-muted))" aria-label="Nov 15: 196 requests" type="button" @click="openAction(&quot;Nov 15: 196 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 16 · 81 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 22%, var(--ui-bg-muted))" aria-label="Nov 16: 81 requests" type="button" @click="openAction(&quot;Nov 16: 81 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 17 · 157 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 25%, var(--ui-bg-muted))" aria-label="Nov 17: 157 requests" type="button" @click="openAction(&quot;Nov 17: 157 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 18 · 182 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 26%, var(--ui-bg-muted))" aria-label="Nov 18: 182 requests" type="button" @click="openAction(&quot;Nov 18: 182 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 19 · 198 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 27%, var(--ui-bg-muted))" aria-label="Nov 19: 198 requests" type="button" @click="openAction(&quot;Nov 19: 198 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 20 · 210 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 28%, var(--ui-bg-muted))" aria-label="Nov 20: 210 requests" type="button" @click="openAction(&quot;Nov 20: 210 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 21 · 207 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 27%, var(--ui-bg-muted))" aria-label="Nov 21: 207 requests" type="button" @click="openAction(&quot;Nov 21: 207 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 22 · 198 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 27%, var(--ui-bg-muted))" aria-label="Nov 22: 198 requests" type="button" @click="openAction(&quot;Nov 22: 198 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 23 · 87 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 22%, var(--ui-bg-muted))" aria-label="Nov 23: 87 requests" type="button" @click="openAction(&quot;Nov 23: 87 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 24 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Nov 24: 0 requests" type="button" @click="openAction(&quot;Nov 24: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 25 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Nov 25: 0 requests" type="button" @click="openAction(&quot;Nov 25: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 26 · 181 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 26%, var(--ui-bg-muted))" aria-label="Nov 26: 181 requests" type="button" @click="openAction(&quot;Nov 26: 181 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 27 · 199 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 27%, var(--ui-bg-muted))" aria-label="Nov 27: 199 requests" type="button" @click="openAction(&quot;Nov 27: 199 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 28 · 210 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 28%, var(--ui-bg-muted))" aria-label="Nov 28: 210 requests" type="button" @click="openAction(&quot;Nov 28: 210 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 29 · 227 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 28%, var(--ui-bg-muted))" aria-label="Nov 29: 227 requests" type="button" @click="openAction(&quot;Nov 29: 227 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Nov 30 · 97 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 22%, var(--ui-bg-muted))" aria-label="Nov 30: 97 requests" type="button" @click="openAction(&quot;Nov 30: 97 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 1 · 223 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 28%, var(--ui-bg-muted))" aria-label="Dec 1: 223 requests" type="button" @click="openAction(&quot;Dec 1: 223 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 2 · 186 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 26%, var(--ui-bg-muted))" aria-label="Dec 2: 186 requests" type="button" @click="openAction(&quot;Dec 2: 186 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 3 · 155 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 25%, var(--ui-bg-muted))" aria-label="Dec 3: 155 requests" type="button" @click="openAction(&quot;Dec 3: 155 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 4 · 181 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 26%, var(--ui-bg-muted))" aria-label="Dec 4: 181 requests" type="button" @click="openAction(&quot;Dec 4: 181 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 5 · 200 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 27%, var(--ui-bg-muted))" aria-label="Dec 5: 200 requests" type="button" @click="openAction(&quot;Dec 5: 200 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 6 · 222 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 28%, var(--ui-bg-muted))" aria-label="Dec 6: 222 requests" type="button" @click="openAction(&quot;Dec 6: 222 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 7 · 101 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 23%, var(--ui-bg-muted))" aria-label="Dec 7: 101 requests" type="button" @click="openAction(&quot;Dec 7: 101 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 8 · 216 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 28%, var(--ui-bg-muted))" aria-label="Dec 8: 216 requests" type="button" @click="openAction(&quot;Dec 8: 216 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 9 · 223 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 28%, var(--ui-bg-muted))" aria-label="Dec 9: 223 requests" type="button" @click="openAction(&quot;Dec 9: 223 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 10 · 186 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 26%, var(--ui-bg-muted))" aria-label="Dec 10: 186 requests" type="button" @click="openAction(&quot;Dec 10: 186 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 11 · 210 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 28%, var(--ui-bg-muted))" aria-label="Dec 11: 210 requests" type="button" @click="openAction(&quot;Dec 11: 210 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 12 · 180 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 26%, var(--ui-bg-muted))" aria-label="Dec 12: 180 requests" type="button" @click="openAction(&quot;Dec 12: 180 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 13 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Dec 13: 0 requests" type="button" @click="openAction(&quot;Dec 13: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 14 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Dec 14: 0 requests" type="button" @click="openAction(&quot;Dec 14: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 15 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Dec 15: 0 requests" type="button" @click="openAction(&quot;Dec 15: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 16 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Dec 16: 0 requests" type="button" @click="openAction(&quot;Dec 16: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 17 · 223 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 28%, var(--ui-bg-muted))" aria-label="Dec 17: 223 requests" type="button" @click="openAction(&quot;Dec 17: 223 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 18 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Dec 18: 0 requests" type="button" @click="openAction(&quot;Dec 18: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 19 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Dec 19: 0 requests" type="button" @click="openAction(&quot;Dec 19: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 20 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Dec 20: 0 requests" type="button" @click="openAction(&quot;Dec 20: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 21 · 93 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 22%, var(--ui-bg-muted))" aria-label="Dec 21: 93 requests" type="button" @click="openAction(&quot;Dec 21: 93 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 22 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Dec 22: 0 requests" type="button" @click="openAction(&quot;Dec 22: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 23 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Dec 23: 0 requests" type="button" @click="openAction(&quot;Dec 23: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 24 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Dec 24: 0 requests" type="button" @click="openAction(&quot;Dec 24: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 25 · 222 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 28%, var(--ui-bg-muted))" aria-label="Dec 25: 222 requests" type="button" @click="openAction(&quot;Dec 25: 222 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 26 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Dec 26: 0 requests" type="button" @click="openAction(&quot;Dec 26: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 27 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Dec 27: 0 requests" type="button" @click="openAction(&quot;Dec 27: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 28 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Dec 28: 0 requests" type="button" @click="openAction(&quot;Dec 28: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 29 · 204 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 27%, var(--ui-bg-muted))" aria-label="Dec 29: 204 requests" type="button" @click="openAction(&quot;Dec 29: 204 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 30 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Dec 30: 0 requests" type="button" @click="openAction(&quot;Dec 30: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Dec 31 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Dec 31: 0 requests" type="button" @click="openAction(&quot;Dec 31: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 1 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Jan 1: 0 requests" type="button" @click="openAction(&quot;Jan 1: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 2 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Jan 2: 0 requests" type="button" @click="openAction(&quot;Jan 2: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 3 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Jan 3: 0 requests" type="button" @click="openAction(&quot;Jan 3: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 4 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Jan 4: 0 requests" type="button" @click="openAction(&quot;Jan 4: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 5 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Jan 5: 0 requests" type="button" @click="openAction(&quot;Jan 5: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 6 · 204 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 27%, var(--ui-bg-muted))" aria-label="Jan 6: 204 requests" type="button" @click="openAction(&quot;Jan 6: 204 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 7 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Jan 7: 0 requests" type="button" @click="openAction(&quot;Jan 7: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 8 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Jan 8: 0 requests" type="button" @click="openAction(&quot;Jan 8: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 9 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Jan 9: 0 requests" type="button" @click="openAction(&quot;Jan 9: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 10 · 244 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 29%, var(--ui-bg-muted))" aria-label="Jan 10: 244 requests" type="button" @click="openAction(&quot;Jan 10: 244 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 11 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Jan 11: 0 requests" type="button" @click="openAction(&quot;Jan 11: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 12 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Jan 12: 0 requests" type="button" @click="openAction(&quot;Jan 12: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 13 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Jan 13: 0 requests" type="button" @click="openAction(&quot;Jan 13: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 14 · 203 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 27%, var(--ui-bg-muted))" aria-label="Jan 14: 203 requests" type="button" @click="openAction(&quot;Jan 14: 203 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 15 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Jan 15: 0 requests" type="button" @click="openAction(&quot;Jan 15: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 16 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Jan 16: 0 requests" type="button" @click="openAction(&quot;Jan 16: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 17 · 256 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 30%, var(--ui-bg-muted))" aria-label="Jan 17: 256 requests" type="button" @click="openAction(&quot;Jan 17: 256 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 18 · 119 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 23%, var(--ui-bg-muted))" aria-label="Jan 18: 119 requests" type="button" @click="openAction(&quot;Jan 18: 119 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 19 · 251 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 29%, var(--ui-bg-muted))" aria-label="Jan 19: 251 requests" type="button" @click="openAction(&quot;Jan 19: 251 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 20 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Jan 20: 0 requests" type="button" @click="openAction(&quot;Jan 20: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 21 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Jan 21: 0 requests" type="button" @click="openAction(&quot;Jan 21: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 22 · 202 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 27%, var(--ui-bg-muted))" aria-label="Jan 22: 202 requests" type="button" @click="openAction(&quot;Jan 22: 202 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 23 · 232 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 29%, var(--ui-bg-muted))" aria-label="Jan 23: 232 requests" type="button" @click="openAction(&quot;Jan 23: 232 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 24 · 251 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 29%, var(--ui-bg-muted))" aria-label="Jan 24: 251 requests" type="button" @click="openAction(&quot;Jan 24: 251 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 25 · 116 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 23%, var(--ui-bg-muted))" aria-label="Jan 25: 116 requests" type="button" @click="openAction(&quot;Jan 25: 116 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 26 · 262 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 30%, var(--ui-bg-muted))" aria-label="Jan 26: 262 requests" type="button" @click="openAction(&quot;Jan 26: 262 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 27 · 250 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 29%, var(--ui-bg-muted))" aria-label="Jan 27: 250 requests" type="button" @click="openAction(&quot;Jan 27: 250 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 28 · 245 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 29%, var(--ui-bg-muted))" aria-label="Jan 28: 245 requests" type="button" @click="openAction(&quot;Jan 28: 245 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 29 · 234 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 29%, var(--ui-bg-muted))" aria-label="Jan 29: 234 requests" type="button" @click="openAction(&quot;Jan 29: 234 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 30 · 200 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 27%, var(--ui-bg-muted))" aria-label="Jan 30: 200 requests" type="button" @click="openAction(&quot;Jan 30: 200 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jan 31 · 230 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 28%, var(--ui-bg-muted))" aria-label="Jan 31: 230 requests" type="button" @click="openAction(&quot;Jan 31: 230 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 1 · 112 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 23%, var(--ui-bg-muted))" aria-label="Feb 1: 112 requests" type="button" @click="openAction(&quot;Feb 1: 112 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 2 · 266 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 30%, var(--ui-bg-muted))" aria-label="Feb 2: 266 requests" type="button" @click="openAction(&quot;Feb 2: 266 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 3 · 285 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 31%, var(--ui-bg-muted))" aria-label="Feb 3: 285 requests" type="button" @click="openAction(&quot;Feb 3: 285 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 4 · 271 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 30%, var(--ui-bg-muted))" aria-label="Feb 4: 271 requests" type="button" @click="openAction(&quot;Feb 4: 271 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 5 · 246 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 29%, var(--ui-bg-muted))" aria-label="Feb 5: 246 requests" type="button" @click="openAction(&quot;Feb 5: 246 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 6 · 234 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 29%, var(--ui-bg-muted))" aria-label="Feb 6: 234 requests" type="button" @click="openAction(&quot;Feb 6: 234 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 7 · 199 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 27%, var(--ui-bg-muted))" aria-label="Feb 7: 199 requests" type="button" @click="openAction(&quot;Feb 7: 199 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 8 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Feb 8: 0 requests" type="button" @click="openAction(&quot;Feb 8: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 9 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Feb 9: 0 requests" type="button" @click="openAction(&quot;Feb 9: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 10 · 266 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 30%, var(--ui-bg-muted))" aria-label="Feb 10: 266 requests" type="button" @click="openAction(&quot;Feb 10: 266 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 11 · 285 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 31%, var(--ui-bg-muted))" aria-label="Feb 11: 285 requests" type="button" @click="openAction(&quot;Feb 11: 285 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 12 · 270 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 30%, var(--ui-bg-muted))" aria-label="Feb 12: 270 requests" type="button" @click="openAction(&quot;Feb 12: 270 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 13 · 280 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 31%, var(--ui-bg-muted))" aria-label="Feb 13: 280 requests" type="button" @click="openAction(&quot;Feb 13: 280 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 14 · 231 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 28%, var(--ui-bg-muted))" aria-label="Feb 14: 231 requests" type="button" @click="openAction(&quot;Feb 14: 231 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 15 · 88 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 22%, var(--ui-bg-muted))" aria-label="Feb 15: 88 requests" type="button" @click="openAction(&quot;Feb 15: 88 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 16 · 227 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 28%, var(--ui-bg-muted))" aria-label="Feb 16: 227 requests" type="button" @click="openAction(&quot;Feb 16: 227 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 17 · 249 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 29%, var(--ui-bg-muted))" aria-label="Feb 17: 249 requests" type="button" @click="openAction(&quot;Feb 17: 249 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 18 · 279 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 31%, var(--ui-bg-muted))" aria-label="Feb 18: 279 requests" type="button" @click="openAction(&quot;Feb 18: 279 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 19 · 284 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 31%, var(--ui-bg-muted))" aria-label="Feb 19: 284 requests" type="button" @click="openAction(&quot;Feb 19: 284 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 20 · 291 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 31%, var(--ui-bg-muted))" aria-label="Feb 20: 291 requests" type="button" @click="openAction(&quot;Feb 20: 291 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 21 · 278 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 31%, var(--ui-bg-muted))" aria-label="Feb 21: 278 requests" type="button" @click="openAction(&quot;Feb 21: 278 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 22 · 104 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 23%, var(--ui-bg-muted))" aria-label="Feb 22: 104 requests" type="button" @click="openAction(&quot;Feb 22: 104 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 23 · 263 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 30%, var(--ui-bg-muted))" aria-label="Feb 23: 263 requests" type="button" @click="openAction(&quot;Feb 23: 263 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 24 · 223 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 28%, var(--ui-bg-muted))" aria-label="Feb 24: 223 requests" type="button" @click="openAction(&quot;Feb 24: 223 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 25 · 257 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 30%, var(--ui-bg-muted))" aria-label="Feb 25: 257 requests" type="button" @click="openAction(&quot;Feb 25: 257 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 26 · 279 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 31%, var(--ui-bg-muted))" aria-label="Feb 26: 279 requests" type="button" @click="openAction(&quot;Feb 26: 279 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 27 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Feb 27: 0 requests" type="button" @click="openAction(&quot;Feb 27: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Feb 28 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Feb 28: 0 requests" type="button" @click="openAction(&quot;Feb 28: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 1 · 123 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 24%, var(--ui-bg-muted))" aria-label="Mar 1: 123 requests" type="button" @click="openAction(&quot;Mar 1: 123 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 2 · 273 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 30%, var(--ui-bg-muted))" aria-label="Mar 2: 273 requests" type="button" @click="openAction(&quot;Mar 2: 273 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 3 · 261 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 30%, var(--ui-bg-muted))" aria-label="Mar 3: 261 requests" type="button" @click="openAction(&quot;Mar 3: 261 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 4 · 221 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 28%, var(--ui-bg-muted))" aria-label="Mar 4: 221 requests" type="button" @click="openAction(&quot;Mar 4: 221 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 5 · 253 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 29%, var(--ui-bg-muted))" aria-label="Mar 5: 253 requests" type="button" @click="openAction(&quot;Mar 5: 253 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 6 · 278 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 31%, var(--ui-bg-muted))" aria-label="Mar 6: 278 requests" type="button" @click="openAction(&quot;Mar 6: 278 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 7 · 295 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 31%, var(--ui-bg-muted))" aria-label="Mar 7: 295 requests" type="button" @click="openAction(&quot;Mar 7: 295 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 8 · 142 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 24%, var(--ui-bg-muted))" aria-label="Mar 8: 142 requests" type="button" @click="openAction(&quot;Mar 8: 142 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 9 · 275 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 30%, var(--ui-bg-muted))" aria-label="Mar 9: 275 requests" type="button" @click="openAction(&quot;Mar 9: 275 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 10 · 273 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 30%, var(--ui-bg-muted))" aria-label="Mar 10: 273 requests" type="button" @click="openAction(&quot;Mar 10: 273 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 11 · 259 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 30%, var(--ui-bg-muted))" aria-label="Mar 11: 259 requests" type="button" @click="openAction(&quot;Mar 11: 259 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 12 · 219 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 28%, var(--ui-bg-muted))" aria-label="Mar 12: 219 requests" type="button" @click="openAction(&quot;Mar 12: 219 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 13 · 252 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 29%, var(--ui-bg-muted))" aria-label="Mar 13: 252 requests" type="button" @click="openAction(&quot;Mar 13: 252 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 14 · 276 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 31%, var(--ui-bg-muted))" aria-label="Mar 14: 276 requests" type="button" @click="openAction(&quot;Mar 14: 276 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 15 · 134 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 24%, var(--ui-bg-muted))" aria-label="Mar 15: 134 requests" type="button" @click="openAction(&quot;Mar 15: 134 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 16 · 314 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 32%, var(--ui-bg-muted))" aria-label="Mar 16: 314 requests" type="button" @click="openAction(&quot;Mar 16: 314 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 17 · 298 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 32%, var(--ui-bg-muted))" aria-label="Mar 17: 298 requests" type="button" @click="openAction(&quot;Mar 17: 298 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 18 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Mar 18: 0 requests" type="button" @click="openAction(&quot;Mar 18: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 19 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Mar 19: 0 requests" type="button" @click="openAction(&quot;Mar 19: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 20 · 216 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 28%, var(--ui-bg-muted))" aria-label="Mar 20: 216 requests" type="button" @click="openAction(&quot;Mar 20: 216 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 21 · 250 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 29%, var(--ui-bg-muted))" aria-label="Mar 21: 250 requests" type="button" @click="openAction(&quot;Mar 21: 250 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 22 · 123 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 24%, var(--ui-bg-muted))" aria-label="Mar 22: 123 requests" type="button" @click="openAction(&quot;Mar 22: 123 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 23 · 309 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 32%, var(--ui-bg-muted))" aria-label="Mar 23: 309 requests" type="button" @click="openAction(&quot;Mar 23: 309 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 24 · 313 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 32%, var(--ui-bg-muted))" aria-label="Mar 24: 313 requests" type="button" @click="openAction(&quot;Mar 24: 313 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 25 · 296 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 31%, var(--ui-bg-muted))" aria-label="Mar 25: 296 requests" type="button" @click="openAction(&quot;Mar 25: 296 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 26 · 305 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 32%, var(--ui-bg-muted))" aria-label="Mar 26: 305 requests" type="button" @click="openAction(&quot;Mar 26: 305 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 27 · 255 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 30%, var(--ui-bg-muted))" aria-label="Mar 27: 255 requests" type="button" @click="openAction(&quot;Mar 27: 255 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 28 · 289 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 31%, var(--ui-bg-muted))" aria-label="Mar 28: 289 requests" type="button" @click="openAction(&quot;Mar 28: 289 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 29 · 111 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 23%, var(--ui-bg-muted))" aria-label="Mar 29: 111 requests" type="button" @click="openAction(&quot;Mar 29: 111 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 30 · 281 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 31%, var(--ui-bg-muted))" aria-label="Mar 30: 281 requests" type="button" @click="openAction(&quot;Mar 30: 281 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Mar 31 · 308 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 32%, var(--ui-bg-muted))" aria-label="Mar 31: 308 requests" type="button" @click="openAction(&quot;Mar 31: 308 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 1 · 311 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 32%, var(--ui-bg-muted))" aria-label="Apr 1: 311 requests" type="button" @click="openAction(&quot;Apr 1: 311 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 2 · 320 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 33%, var(--ui-bg-muted))" aria-label="Apr 2: 320 requests" type="button" @click="openAction(&quot;Apr 2: 320 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 3 · 302 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 32%, var(--ui-bg-muted))" aria-label="Apr 3: 302 requests" type="button" @click="openAction(&quot;Apr 3: 302 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 4 · 299 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 32%, var(--ui-bg-muted))" aria-label="Apr 4: 299 requests" type="button" @click="openAction(&quot;Apr 4: 299 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 5 · 127 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 24%, var(--ui-bg-muted))" aria-label="Apr 5: 127 requests" type="button" @click="openAction(&quot;Apr 5: 127 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 6 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Apr 6: 0 requests" type="button" @click="openAction(&quot;Apr 6: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 7 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Apr 7: 0 requests" type="button" @click="openAction(&quot;Apr 7: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 8 · 306 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 32%, var(--ui-bg-muted))" aria-label="Apr 8: 306 requests" type="button" @click="openAction(&quot;Apr 8: 306 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 9 · 324 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 33%, var(--ui-bg-muted))" aria-label="Apr 9: 324 requests" type="button" @click="openAction(&quot;Apr 9: 324 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 10 · 318 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 32%, var(--ui-bg-muted))" aria-label="Apr 10: 318 requests" type="button" @click="openAction(&quot;Apr 10: 318 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 11 · 301 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 32%, var(--ui-bg-muted))" aria-label="Apr 11: 301 requests" type="button" @click="openAction(&quot;Apr 11: 301 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 12 · 133 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 24%, var(--ui-bg-muted))" aria-label="Apr 12: 133 requests" type="button" @click="openAction(&quot;Apr 12: 133 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 13 · 283 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 31%, var(--ui-bg-muted))" aria-label="Apr 13: 283 requests" type="button" @click="openAction(&quot;Apr 13: 283 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 14 · 241 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 29%, var(--ui-bg-muted))" aria-label="Apr 14: 241 requests" type="button" @click="openAction(&quot;Apr 14: 241 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 15 · 275 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 30%, var(--ui-bg-muted))" aria-label="Apr 15: 275 requests" type="button" @click="openAction(&quot;Apr 15: 275 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 16 · 303 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 32%, var(--ui-bg-muted))" aria-label="Apr 16: 303 requests" type="button" @click="openAction(&quot;Apr 16: 303 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 17 · 322 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 33%, var(--ui-bg-muted))" aria-label="Apr 17: 322 requests" type="button" @click="openAction(&quot;Apr 17: 322 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 18 · 344 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 34%, var(--ui-bg-muted))" aria-label="Apr 18: 344 requests" type="button" @click="openAction(&quot;Apr 18: 344 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 19 · 148 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 25%, var(--ui-bg-muted))" aria-label="Apr 19: 148 requests" type="button" @click="openAction(&quot;Apr 19: 148 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 20 · 335 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 33%, var(--ui-bg-muted))" aria-label="Apr 20: 335 requests" type="button" @click="openAction(&quot;Apr 20: 335 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 21 · 280 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 31%, var(--ui-bg-muted))" aria-label="Apr 21: 280 requests" type="button" @click="openAction(&quot;Apr 21: 280 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 22 · 236 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 29%, var(--ui-bg-muted))" aria-label="Apr 22: 236 requests" type="button" @click="openAction(&quot;Apr 22: 236 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 23 · 273 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 30%, var(--ui-bg-muted))" aria-label="Apr 23: 273 requests" type="button" @click="openAction(&quot;Apr 23: 273 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 24 · 299 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 32%, var(--ui-bg-muted))" aria-label="Apr 24: 299 requests" type="button" @click="openAction(&quot;Apr 24: 299 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 25 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Apr 25: 0 requests" type="button" @click="openAction(&quot;Apr 25: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 26 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Apr 26: 0 requests" type="button" @click="openAction(&quot;Apr 26: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 27 · 325 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 33%, var(--ui-bg-muted))" aria-label="Apr 27: 325 requests" type="button" @click="openAction(&quot;Apr 27: 325 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 28 · 332 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 33%, var(--ui-bg-muted))" aria-label="Apr 28: 332 requests" type="button" @click="openAction(&quot;Apr 28: 332 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 29 · 278 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 31%, var(--ui-bg-muted))" aria-label="Apr 29: 278 requests" type="button" @click="openAction(&quot;Apr 29: 278 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Apr 30 · 313 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 32%, var(--ui-bg-muted))" aria-label="Apr 30: 313 requests" type="button" @click="openAction(&quot;Apr 30: 313 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 1 · 270 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 30%, var(--ui-bg-muted))" aria-label="May 1: 270 requests" type="button" @click="openAction(&quot;May 1: 270 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 2 · 297 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 31%, var(--ui-bg-muted))" aria-label="May 2: 297 requests" type="button" @click="openAction(&quot;May 2: 297 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 3 · 151 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 25%, var(--ui-bg-muted))" aria-label="May 3: 151 requests" type="button" @click="openAction(&quot;May 3: 151 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 4 · 340 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 33%, var(--ui-bg-muted))" aria-label="May 4: 340 requests" type="button" @click="openAction(&quot;May 4: 340 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 5 · 347 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 34%, var(--ui-bg-muted))" aria-label="May 5: 347 requests" type="button" @click="openAction(&quot;May 5: 347 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 6 · 332 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 33%, var(--ui-bg-muted))" aria-label="May 6: 332 requests" type="button" @click="openAction(&quot;May 6: 332 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 7 · 273 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 30%, var(--ui-bg-muted))" aria-label="May 7: 273 requests" type="button" @click="openAction(&quot;May 7: 273 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 8 · 311 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 32%, var(--ui-bg-muted))" aria-label="May 8: 311 requests" type="button" @click="openAction(&quot;May 8: 311 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 9 · 266 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 30%, var(--ui-bg-muted))" aria-label="May 9: 266 requests" type="button" @click="openAction(&quot;May 9: 266 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 10 · 137 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 24%, var(--ui-bg-muted))" aria-label="May 10: 137 requests" type="button" @click="openAction(&quot;May 10: 137 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 11 · 332 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 33%, var(--ui-bg-muted))" aria-label="May 11: 332 requests" type="button" @click="openAction(&quot;May 11: 332 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 12 · 352 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 34%, var(--ui-bg-muted))" aria-label="May 12: 352 requests" type="button" @click="openAction(&quot;May 12: 352 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 13 · 347 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 34%, var(--ui-bg-muted))" aria-label="May 13: 347 requests" type="button" @click="openAction(&quot;May 13: 347 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 14 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="May 14: 0 requests" type="button" @click="openAction(&quot;May 14: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 15 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="May 15: 0 requests" type="button" @click="openAction(&quot;May 15: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 16 · 309 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 32%, var(--ui-bg-muted))" aria-label="May 16: 309 requests" type="button" @click="openAction(&quot;May 16: 309 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 17 · 117 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 23%, var(--ui-bg-muted))" aria-label="May 17: 117 requests" type="button" @click="openAction(&quot;May 17: 117 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 18 · 302 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 32%, var(--ui-bg-muted))" aria-label="May 18: 302 requests" type="button" @click="openAction(&quot;May 18: 302 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 19 · 329 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 33%, var(--ui-bg-muted))" aria-label="May 19: 329 requests" type="button" @click="openAction(&quot;May 19: 329 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 20 · 348 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 34%, var(--ui-bg-muted))" aria-label="May 20: 348 requests" type="button" @click="openAction(&quot;May 20: 348 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 21 · 374 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 35%, var(--ui-bg-muted))" aria-label="May 21: 374 requests" type="button" @click="openAction(&quot;May 21: 374 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 22 · 356 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 34%, var(--ui-bg-muted))" aria-label="May 22: 356 requests" type="button" @click="openAction(&quot;May 22: 356 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 23 · 320 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 33%, var(--ui-bg-muted))" aria-label="May 23: 320 requests" type="button" @click="openAction(&quot;May 23: 320 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 24 · 138 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 24%, var(--ui-bg-muted))" aria-label="May 24: 138 requests" type="button" @click="openAction(&quot;May 24: 138 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 25 · 258 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 30%, var(--ui-bg-muted))" aria-label="May 25: 258 requests" type="button" @click="openAction(&quot;May 25: 258 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 26 · 329 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 33%, var(--ui-bg-muted))" aria-label="May 26: 329 requests" type="button" @click="openAction(&quot;May 26: 329 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 27 · 369 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 35%, var(--ui-bg-muted))" aria-label="May 27: 369 requests" type="button" @click="openAction(&quot;May 27: 369 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 28 · 423 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 37%, var(--ui-bg-muted))" aria-label="May 28: 423 requests" type="button" @click="openAction(&quot;May 28: 423 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 29 · 442 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 38%, var(--ui-bg-muted))" aria-label="May 29: 442 requests" type="button" @click="openAction(&quot;May 29: 442 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 30 · 430 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 38%, var(--ui-bg-muted))" aria-label="May 30: 430 requests" type="button" @click="openAction(&quot;May 30: 430 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="May 31 · 204 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 27%, var(--ui-bg-muted))" aria-label="May 31: 204 requests" type="button" @click="openAction(&quot;May 31: 204 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 1 · 385 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 35%, var(--ui-bg-muted))" aria-label="Jun 1: 385 requests" type="button" @click="openAction(&quot;Jun 1: 385 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 2 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Jun 2: 0 requests" type="button" @click="openAction(&quot;Jun 2: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 3 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Jun 3: 0 requests" type="button" @click="openAction(&quot;Jun 3: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 4 · 441 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 38%, var(--ui-bg-muted))" aria-label="Jun 4: 441 requests" type="button" @click="openAction(&quot;Jun 4: 441 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 5 · 507 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 41%, var(--ui-bg-muted))" aria-label="Jun 5: 507 requests" type="button" @click="openAction(&quot;Jun 5: 507 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 6 · 522 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 42%, var(--ui-bg-muted))" aria-label="Jun 6: 522 requests" type="button" @click="openAction(&quot;Jun 6: 522 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 7 · 247 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 29%, var(--ui-bg-muted))" aria-label="Jun 7: 247 requests" type="button" @click="openAction(&quot;Jun 7: 247 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 8 · 530 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 42%, var(--ui-bg-muted))" aria-label="Jun 8: 530 requests" type="button" @click="openAction(&quot;Jun 8: 530 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 9 · 447 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 38%, var(--ui-bg-muted))" aria-label="Jun 9: 447 requests" type="button" @click="openAction(&quot;Jun 9: 447 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 10 · 520 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 42%, var(--ui-bg-muted))" aria-label="Jun 10: 520 requests" type="button" @click="openAction(&quot;Jun 10: 520 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 11 · 452 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 39%, var(--ui-bg-muted))" aria-label="Jun 11: 452 requests" type="button" @click="openAction(&quot;Jun 11: 452 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 12 · 524 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 42%, var(--ui-bg-muted))" aria-label="Jun 12: 524 requests" type="button" @click="openAction(&quot;Jun 12: 524 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 13 · 580 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 44%, var(--ui-bg-muted))" aria-label="Jun 13: 580 requests" type="button" @click="openAction(&quot;Jun 13: 580 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 14 · 269 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 30%, var(--ui-bg-muted))" aria-label="Jun 14: 269 requests" type="button" @click="openAction(&quot;Jun 14: 269 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 15 · 626 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 46%, var(--ui-bg-muted))" aria-label="Jun 15: 626 requests" type="button" @click="openAction(&quot;Jun 15: 626 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 16 · 604 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 45%, var(--ui-bg-muted))" aria-label="Jun 16: 604 requests" type="button" @click="openAction(&quot;Jun 16: 604 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 17 · 606 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 45%, var(--ui-bg-muted))" aria-label="Jun 17: 606 requests" type="button" @click="openAction(&quot;Jun 17: 606 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 18 · 586 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 45%, var(--ui-bg-muted))" aria-label="Jun 18: 586 requests" type="button" @click="openAction(&quot;Jun 18: 586 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 19 · 507 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 41%, var(--ui-bg-muted))" aria-label="Jun 19: 507 requests" type="button" @click="openAction(&quot;Jun 19: 507 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 20 · 589 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 45%, var(--ui-bg-muted))" aria-label="Jun 20: 589 requests" type="button" @click="openAction(&quot;Jun 20: 589 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 21 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Jun 21: 0 requests" type="button" @click="openAction(&quot;Jun 21: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 22 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Jun 22: 0 requests" type="button" @click="openAction(&quot;Jun 22: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 23 · 762 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 53%, var(--ui-bg-muted))" aria-label="Jun 23: 762 requests" type="button" @click="openAction(&quot;Jun 23: 762 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 24 · 735 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 51%, var(--ui-bg-muted))" aria-label="Jun 24: 735 requests" type="button" @click="openAction(&quot;Jun 24: 735 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 25 · 675 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 49%, var(--ui-bg-muted))" aria-label="Jun 25: 675 requests" type="button" @click="openAction(&quot;Jun 25: 675 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 26 · 649 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 47%, var(--ui-bg-muted))" aria-label="Jun 26: 649 requests" type="button" @click="openAction(&quot;Jun 26: 649 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 27 · 556 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 43%, var(--ui-bg-muted))" aria-label="Jun 27: 556 requests" type="button" @click="openAction(&quot;Jun 27: 556 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 28 · 291 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 31%, var(--ui-bg-muted))" aria-label="Jun 28: 291 requests" type="button" @click="openAction(&quot;Jun 28: 291 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 29 · 720 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 51%, var(--ui-bg-muted))" aria-label="Jun 29: 720 requests" type="button" @click="openAction(&quot;Jun 29: 720 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jun 30 · 774 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 53%, var(--ui-bg-muted))" aria-label="Jun 30: 774 requests" type="button" @click="openAction(&quot;Jun 30: 774 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 1 · 838 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 56%, var(--ui-bg-muted))" aria-label="Jul 1: 838 requests" type="button" @click="openAction(&quot;Jul 1: 838 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 2 · 808 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 55%, var(--ui-bg-muted))" aria-label="Jul 2: 808 requests" type="button" @click="openAction(&quot;Jul 2: 808 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 3 · 838 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 56%, var(--ui-bg-muted))" aria-label="Jul 3: 838 requests" type="button" @click="openAction(&quot;Jul 3: 838 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 4 · 707 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 50%, var(--ui-bg-muted))" aria-label="Jul 4: 707 requests" type="button" @click="openAction(&quot;Jul 4: 707 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 5 · 272 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 30%, var(--ui-bg-muted))" aria-label="Jul 5: 272 requests" type="button" @click="openAction(&quot;Jul 5: 272 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 6 · 703 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 50%, var(--ui-bg-muted))" aria-label="Jul 6: 703 requests" type="button" @click="openAction(&quot;Jul 6: 703 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 7 · 783 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 54%, var(--ui-bg-muted))" aria-label="Jul 7: 783 requests" type="button" @click="openAction(&quot;Jul 7: 783 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 8 · 889 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 58%, var(--ui-bg-muted))" aria-label="Jul 8: 889 requests" type="button" @click="openAction(&quot;Jul 8: 889 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 9 · 911 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 59%, var(--ui-bg-muted))" aria-label="Jul 9: 911 requests" type="button" @click="openAction(&quot;Jul 9: 911 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 10 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Jul 10: 0 requests" type="button" @click="openAction(&quot;Jul 10: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 11 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Jul 11: 0 requests" type="button" @click="openAction(&quot;Jul 11: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 12 · 342 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 34%, var(--ui-bg-muted))" aria-label="Jul 12: 342 requests" type="button" @click="openAction(&quot;Jul 12: 342 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 13 · 873 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 58%, var(--ui-bg-muted))" aria-label="Jul 13: 873 requests" type="button" @click="openAction(&quot;Jul 13: 873 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 14 · 753 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 52%, var(--ui-bg-muted))" aria-label="Jul 14: 753 requests" type="button" @click="openAction(&quot;Jul 14: 753 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 15 · 870 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 57%, var(--ui-bg-muted))" aria-label="Jul 15: 870 requests" type="button" @click="openAction(&quot;Jul 15: 870 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 16 · 955 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 61%, var(--ui-bg-muted))" aria-label="Jul 16: 955 requests" type="button" @click="openAction(&quot;Jul 16: 955 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 17 · 980 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 62%, var(--ui-bg-muted))" aria-label="Jul 17: 980 requests" type="button" @click="openAction(&quot;Jul 17: 980 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 18 · 1,015 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 64%, var(--ui-bg-muted))" aria-label="Jul 18: 1,015 requests" type="button" @click="openAction(&quot;Jul 18: 1,015 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 19 · 437 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 38%, var(--ui-bg-muted))" aria-label="Jul 19: 437 requests" type="button" @click="openAction(&quot;Jul 19: 437 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 20 · 969 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 62%, var(--ui-bg-muted))" aria-label="Jul 20: 969 requests" type="button" @click="openAction(&quot;Jul 20: 969 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 21 · 929 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 60%, var(--ui-bg-muted))" aria-label="Jul 21: 929 requests" type="button" @click="openAction(&quot;Jul 21: 929 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 22 · 800 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 54%, var(--ui-bg-muted))" aria-label="Jul 22: 800 requests" type="button" @click="openAction(&quot;Jul 22: 800 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 23 · 923 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 60%, var(--ui-bg-muted))" aria-label="Jul 23: 923 requests" type="button" @click="openAction(&quot;Jul 23: 923 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 24 · 1,019 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 64%, var(--ui-bg-muted))" aria-label="Jul 24: 1,019 requests" type="button" @click="openAction(&quot;Jul 24: 1,019 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 25 · 1,088 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 67%, var(--ui-bg-muted))" aria-label="Jul 25: 1,088 requests" type="button" @click="openAction(&quot;Jul 25: 1,088 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 26 · 525 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 42%, var(--ui-bg-muted))" aria-label="Jul 26: 525 requests" type="button" @click="openAction(&quot;Jul 26: 525 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 27 · 1,031 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 65%, var(--ui-bg-muted))" aria-label="Jul 27: 1,031 requests" type="button" @click="openAction(&quot;Jul 27: 1,031 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 28 · 1,028 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 65%, var(--ui-bg-muted))" aria-label="Jul 28: 1,028 requests" type="button" @click="openAction(&quot;Jul 28: 1,028 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 29 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Jul 29: 0 requests" type="button" @click="openAction(&quot;Jul 29: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 30 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Jul 30: 0 requests" type="button" @click="openAction(&quot;Jul 30: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Jul 31 · 974 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 62%, var(--ui-bg-muted))" aria-label="Jul 31: 974 requests" type="button" @click="openAction(&quot;Jul 31: 974 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 1 · 1,077 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 67%, var(--ui-bg-muted))" aria-label="Aug 1: 1,077 requests" type="button" @click="openAction(&quot;Aug 1: 1,077 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 2 · 517 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 41%, var(--ui-bg-muted))" aria-label="Aug 2: 517 requests" type="button" @click="openAction(&quot;Aug 2: 517 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 3 · 1,240 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 74%, var(--ui-bg-muted))" aria-label="Aug 3: 1,240 requests" type="button" @click="openAction(&quot;Aug 3: 1,240 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 4 · 1,189 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 72%, var(--ui-bg-muted))" aria-label="Aug 4: 1,189 requests" type="button" @click="openAction(&quot;Aug 4: 1,189 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 5 · 1,229 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 74%, var(--ui-bg-muted))" aria-label="Aug 5: 1,229 requests" type="button" @click="openAction(&quot;Aug 5: 1,229 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 6 · 1,035 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 65%, var(--ui-bg-muted))" aria-label="Aug 6: 1,035 requests" type="button" @click="openAction(&quot;Aug 6: 1,035 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 7 · 878 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 58%, var(--ui-bg-muted))" aria-label="Aug 7: 878 requests" type="button" @click="openAction(&quot;Aug 7: 878 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 8 · 1,020 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 64%, var(--ui-bg-muted))" aria-label="Aug 8: 1,020 requests" type="button" @click="openAction(&quot;Aug 8: 1,020 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 9 · 508 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 41%, var(--ui-bg-muted))" aria-label="Aug 9: 508 requests" type="button" @click="openAction(&quot;Aug 9: 508 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 10 · 1,277 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 76%, var(--ui-bg-muted))" aria-label="Aug 10: 1,277 requests" type="button" @click="openAction(&quot;Aug 10: 1,277 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 11 · 1,306 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 77%, var(--ui-bg-muted))" aria-label="Aug 11: 1,306 requests" type="button" @click="openAction(&quot;Aug 11: 1,306 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 12 · 1,246 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 75%, var(--ui-bg-muted))" aria-label="Aug 12: 1,246 requests" type="button" @click="openAction(&quot;Aug 12: 1,246 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 13 · 1,290 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 77%, var(--ui-bg-muted))" aria-label="Aug 13: 1,290 requests" type="button" @click="openAction(&quot;Aug 13: 1,290 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 14 · 1,078 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 67%, var(--ui-bg-muted))" aria-label="Aug 14: 1,078 requests" type="button" @click="openAction(&quot;Aug 14: 1,078 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 15 · 1,231 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 74%, var(--ui-bg-muted))" aria-label="Aug 15: 1,231 requests" type="button" @click="openAction(&quot;Aug 15: 1,231 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 16 · 477 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 40%, var(--ui-bg-muted))" aria-label="Aug 16: 477 requests" type="button" @click="openAction(&quot;Aug 16: 477 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 17 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Aug 17: 0 requests" type="button" @click="openAction(&quot;Aug 17: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 18 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Aug 18: 0 requests" type="button" @click="openAction(&quot;Aug 18: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 19 · 1,364 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 80%, var(--ui-bg-muted))" aria-label="Aug 19: 1,364 requests" type="button" @click="openAction(&quot;Aug 19: 1,364 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 20 · 1,408 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 82%, var(--ui-bg-muted))" aria-label="Aug 20: 1,408 requests" type="button" @click="openAction(&quot;Aug 20: 1,408 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 21 · 1,344 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 79%, var(--ui-bg-muted))" aria-label="Aug 21: 1,344 requests" type="button" @click="openAction(&quot;Aug 21: 1,344 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 22 · 1,337 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 79%, var(--ui-bg-muted))" aria-label="Aug 22: 1,337 requests" type="button" @click="openAction(&quot;Aug 22: 1,337 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 23 · 577 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 44%, var(--ui-bg-muted))" aria-label="Aug 23: 577 requests" type="button" @click="openAction(&quot;Aug 23: 577 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 24 · 1,098 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 68%, var(--ui-bg-muted))" aria-label="Aug 24: 1,098 requests" type="button" @click="openAction(&quot;Aug 24: 1,098 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 25 · 1,262 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 75%, var(--ui-bg-muted))" aria-label="Aug 25: 1,262 requests" type="button" @click="openAction(&quot;Aug 25: 1,262 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 26 · 1,388 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 81%, var(--ui-bg-muted))" aria-label="Aug 26: 1,388 requests" type="button" @click="openAction(&quot;Aug 26: 1,388 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 27 · 1,480 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 85%, var(--ui-bg-muted))" aria-label="Aug 27: 1,480 requests" type="button" @click="openAction(&quot;Aug 27: 1,480 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 28 · 1,464 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 84%, var(--ui-bg-muted))" aria-label="Aug 28: 1,464 requests" type="button" @click="openAction(&quot;Aug 28: 1,464 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 29 · 1,395 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 81%, var(--ui-bg-muted))" aria-label="Aug 29: 1,395 requests" type="button" @click="openAction(&quot;Aug 29: 1,395 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 30 · 623 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 46%, var(--ui-bg-muted))" aria-label="Aug 30: 623 requests" type="button" @click="openAction(&quot;Aug 30: 623 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Aug 31 · 1,325 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 78%, var(--ui-bg-muted))" aria-label="Aug 31: 1,325 requests" type="button" @click="openAction(&quot;Aug 31: 1,325 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Sep 1 · 1,130 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 69%, var(--ui-bg-muted))" aria-label="Sep 1: 1,130 requests" type="button" @click="openAction(&quot;Sep 1: 1,130 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Sep 2 · 1,305 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 77%, var(--ui-bg-muted))" aria-label="Sep 2: 1,305 requests" type="button" @click="openAction(&quot;Sep 2: 1,305 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Sep 3 · 1,437 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 83%, var(--ui-bg-muted))" aria-label="Sep 3: 1,437 requests" type="button" @click="openAction(&quot;Sep 3: 1,437 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Sep 4 · 1,533 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 88%, var(--ui-bg-muted))" aria-label="Sep 4: 1,533 requests" type="button" @click="openAction(&quot;Sep 4: 1,533 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Sep 5 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Sep 5: 0 requests" type="button" @click="openAction(&quot;Sep 5: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Sep 6 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Sep 6: 0 requests" type="button" @click="openAction(&quot;Sep 6: 0 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Sep 7 · 1,624 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 92%, var(--ui-bg-muted))" aria-label="Sep 7: 1,624 requests" type="button" @click="openAction(&quot;Sep 7: 1,624 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Sep 8 · 1,366 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 80%, var(--ui-bg-muted))" aria-label="Sep 8: 1,366 requests" type="button" @click="openAction(&quot;Sep 8: 1,366 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Sep 9 · 1,158 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 71%, var(--ui-bg-muted))" aria-label="Sep 9: 1,158 requests" type="button" @click="openAction(&quot;Sep 9: 1,158 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Sep 10 · 1,342 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 79%, var(--ui-bg-muted))" aria-label="Sep 10: 1,342 requests" type="button" @click="openAction(&quot;Sep 10: 1,342 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Sep 11 · 1,481 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 85%, var(--ui-bg-muted))" aria-label="Sep 11: 1,481 requests" type="button" @click="openAction(&quot;Sep 11: 1,481 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Sep 12 · 1,670 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 94%, var(--ui-bg-muted))" aria-label="Sep 12: 1,670 requests" type="button" @click="openAction(&quot;Sep 12: 1,670 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Sep 13 · 768 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 53%, var(--ui-bg-muted))" aria-label="Sep 13: 768 requests" type="button" @click="openAction(&quot;Sep 13: 768 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Sep 14 · 1,624 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 92%, var(--ui-bg-muted))" aria-label="Sep 14: 1,624 requests" type="button" @click="openAction(&quot;Sep 14: 1,624 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Sep 15 · 1,675 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 94%, var(--ui-bg-muted))" aria-label="Sep 15: 1,675 requests" type="button" @click="openAction(&quot;Sep 15: 1,675 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Sep 16 · 1,402 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 82%, var(--ui-bg-muted))" aria-label="Sep 16: 1,402 requests" type="button" @click="openAction(&quot;Sep 16: 1,402 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Sep 17 · 1,594 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 90%, var(--ui-bg-muted))" aria-label="Sep 17: 1,594 requests" type="button" @click="openAction(&quot;Sep 17: 1,594 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Sep 18 · 1,375 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 80%, var(--ui-bg-muted))" aria-label="Sep 18: 1,375 requests" type="button" @click="openAction(&quot;Sep 18: 1,375 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Sep 19 · 1,520 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 87%, var(--ui-bg-muted))" aria-label="Sep 19: 1,520 requests" type="button" @click="openAction(&quot;Sep 19: 1,520 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Sep 20 · 774 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 53%, var(--ui-bg-muted))" aria-label="Sep 20: 774 requests" type="button" @click="openAction(&quot;Sep 20: 774 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Sep 21 · 1,752 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 97%, var(--ui-bg-muted))" aria-label="Sep 21: 1,752 requests" type="button" @click="openAction(&quot;Sep 21: 1,752 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Sep 22 · 1,808 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 100%, var(--ui-bg-muted))" aria-label="Sep 22: 1,808 requests" type="button" @click="openAction(&quot;Sep 22: 1,808 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Sep 23 · 1,722 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:color-mix(in oklab, var(--ui-success) 96%, var(--ui-bg-muted))" aria-label="Sep 23: 1,722 requests" type="button" @click="openAction(&quot;Sep 23: 1,722 requests&quot;)" />
                    <UButton color="neutral" variant="ghost" title="Sep 24 · 0 requests" class="focus-visible:ring-accented aspect-square rounded-[3px] outline-none hover:ring-1 hover:ring-success focus-visible:ring-2 focus-visible:ring-offset-1" style="background-color:var(--ui-bg-muted)" aria-label="Sep 24: 0 requests" type="button" @click="openAction(&quot;Sep 24: 0 requests&quot;)" />
                    <span class="aspect-square" />
                    <span class="aspect-square" />
                  </div>
                </div>
              </div>
            </div>
            <div class="text-muted flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs">
              <p>0-day streak · Longest 17 days · BusiestSep 22 (1.8K requests)</p>
              <div class="flex items-center gap-1" aria-label="Color intensity represents request volume">
                <span class="mr-1">Less</span>
                <span class="size-2.5 rounded-[2px]" style="background-color:color-mix(in oklab, var(--ui-success) 0%, var(--ui-bg-muted))" />
                <span class="size-2.5 rounded-[2px]" style="background-color:color-mix(in oklab, var(--ui-success) 20%, var(--ui-bg-muted))" />
                <span class="size-2.5 rounded-[2px]" style="background-color:color-mix(in oklab, var(--ui-success) 40%, var(--ui-bg-muted))" />
                <span class="size-2.5 rounded-[2px]" style="background-color:color-mix(in oklab, var(--ui-success) 60%, var(--ui-bg-muted))" />
                <span class="size-2.5 rounded-[2px]" style="background-color:color-mix(in oklab, var(--ui-success) 80%, var(--ui-bg-muted))" />
                <span class="size-2.5 rounded-[2px]" style="background-color:color-mix(in oklab, var(--ui-success) 100%, var(--ui-bg-muted))" />
                <span class="ml-1">More</span>
              </div>
            </div>
            <p class="text-muted text-xs">Sep 24:0 requests · Select a day, or use the arrow keys to explore.</p>
          </section>
          <section class="space-y-4">
            <div>
              <h2 id="over-time-title" class="text-sm font-semibold text-highlighted">Over time</h2>
              <p class="text-muted mt-1 text-sm">Requests per week, by model</p>
            </div>
            <div class="flex h-28 items-end gap-[3px]" role="img" aria-label="Weekly requests by model. GPT-4.1 leads with 78K.">
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Sep 28
GPT-4.1: 450
Claude Sonnet 4: 242
Gemini 2.5 Flash: 142
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:1.4259891544486845%;background-color:var(--ui-success)" />
                <div style="height:2.4302068688491665%;background-color:var(--ui-success)" />
                <div style="height:4.518979714802169%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Oct 5
GPT-4.1: 547
Claude Sonnet 4: 291
Gemini 2.5 Flash: 201
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:2.018477605944969%;background-color:var(--ui-success)" />
                <div style="height:2.9222735489054026%;background-color:var(--ui-success)" />
                <div style="height:5.493070897770637%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Oct 12
GPT-4.1: 384
Claude Sonnet 4: 174
Gemini 2.5 Flash: 143
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:1.4360313315926894%;background-color:var(--ui-success)" />
                <div style="height:1.7473388230568387%;background-color:var(--ui-success)" />
                <div style="height:3.856196023297851%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Oct 19
GPT-4.1: 573
Claude Sonnet 4: 274
Gemini 2.5 Flash: 208
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:2.088772845953003%;background-color:var(--ui-success)" />
                <div style="height:2.7515565374573208%;background-color:var(--ui-success)" />
                <div style="height:5.754167503514762%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Oct 26
GPT-4.1: 607
Claude Sonnet 4: 302
Gemini 2.5 Flash: 206
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:2.068688491664993%;background-color:var(--ui-success)" />
                <div style="height:3.032737497489456%;background-color:var(--ui-success)" />
                <div style="height:6.095601526410926%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Nov 2
GPT-4.1: 445
Claude Sonnet 4: 215
Gemini 2.5 Flash: 162
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:1.6268326973287808%;background-color:var(--ui-success)" />
                <div style="height:2.1590680859610365%;background-color:var(--ui-success)" />
                <div style="height:4.468768829082145%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Nov 9
GPT-4.1: 688
Claude Sonnet 4: 341
Gemini 2.5 Flash: 222
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:2.22936332596907%;background-color:var(--ui-success)" />
                <div style="height:3.424382406105644%;background-color:var(--ui-success)" />
                <div style="height:6.909017875075317%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Nov 16
GPT-4.1: 649
Claude Sonnet 4: 359
Gemini 2.5 Flash: 225
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:2.2594898574010847%;background-color:var(--ui-success)" />
                <div style="height:3.6051415946977308%;background-color:var(--ui-success)" />
                <div style="height:6.517372966459129%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Nov 23
GPT-4.1: 471
Claude Sonnet 4: 257
Gemini 2.5 Flash: 176
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:1.7674231773448486%;background-color:var(--ui-success)" />
                <div style="height:2.5808395260092385%;background-color:var(--ui-success)" />
                <div style="height:4.72986543482627%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Nov 30
GPT-4.1: 660
Claude Sonnet 4: 349
Gemini 2.5 Flash: 255
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:2.560755171721229%;background-color:var(--ui-success)" />
                <div style="height:3.504719823257682%;background-color:var(--ui-success)" />
                <div style="height:6.627836915043181%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Dec 7
GPT-4.1: 639
Claude Sonnet 4: 281
Gemini 2.5 Flash: 196
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:1.9682667202249446%;background-color:var(--ui-success)" />
                <div style="height:2.8218517774653544%;background-color:var(--ui-success)" />
                <div style="height:6.41695119501908%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Dec 14
GPT-4.1: 132
Claude Sonnet 4: 60
Gemini 2.5 Flash: 31
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:0.31130749146414943%;background-color:var(--ui-success)" />
                <div style="height:0.6025306286402892%;background-color:var(--ui-success)" />
                <div style="height:1.3255673830086363%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Dec 21
GPT-4.1: 175
Claude Sonnet 4: 87
Gemini 2.5 Flash: 53
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:0.5322353886322555%;background-color:var(--ui-success)" />
                <div style="height:0.8736694115284194%;background-color:var(--ui-success)" />
                <div style="height:1.7573810002008434%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Dec 28
GPT-4.1: 94
Claude Sonnet 4: 60
Gemini 2.5 Flash: 50
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:0.502108857200241%;background-color:var(--ui-success)" />
                <div style="height:0.6025306286402892%;background-color:var(--ui-success)" />
                <div style="height:0.9439646515364531%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Jan 4
GPT-4.1: 247
Claude Sonnet 4: 121
Gemini 2.5 Flash: 80
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:0.8033741715203857%;background-color:var(--ui-success)" />
                <div style="height:1.2151034344245832%;background-color:var(--ui-success)" />
                <div style="height:2.4804177545691903%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Jan 11
GPT-4.1: 232
Claude Sonnet 4: 132
Gemini 2.5 Flash: 95
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:0.9540068286804579%;background-color:var(--ui-success)" />
                <div style="height:1.3255673830086363%;background-color:var(--ui-success)" />
                <div style="height:2.3297850974091183%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Jan 18
GPT-4.1: 540
Claude Sonnet 4: 305
Gemini 2.5 Flash: 210
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:2.108857200241012%;background-color:var(--ui-success)" />
                <div style="height:3.0628640289214704%;background-color:var(--ui-success)" />
                <div style="height:5.422775657762603%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Jan 25
GPT-4.1: 860
Claude Sonnet 4: 400
Gemini 2.5 Flash: 277
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:2.7816830688893353%;background-color:var(--ui-success)" />
                <div style="height:4.016870857601928%;background-color:var(--ui-success)" />
                <div style="height:8.636272343844146%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Feb 1
GPT-4.1: 909
Claude Sonnet 4: 415
Gemini 2.5 Flash: 289
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:2.902189194617393%;background-color:var(--ui-success)" />
                <div style="height:4.167503514762001%;background-color:var(--ui-success)" />
                <div style="height:9.128339023900383%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Feb 8
GPT-4.1: 764
Claude Sonnet 4: 355
Gemini 2.5 Flash: 213
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:2.1389837316730267%;background-color:var(--ui-success)" />
                <div style="height:3.564972886121711%;background-color:var(--ui-success)" />
                <div style="height:7.672223338019683%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Feb 15
GPT-4.1: 886
Claude Sonnet 4: 494
Gemini 2.5 Flash: 316
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:3.173327977505523%;background-color:var(--ui-success)" />
                <div style="height:4.960835509138381%;background-color:var(--ui-success)" />
                <div style="height:8.897368949588271%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Feb 22
GPT-4.1: 572
Claude Sonnet 4: 303
Gemini 2.5 Flash: 251
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:2.52058646314521%;background-color:var(--ui-success)" />
                <div style="height:3.0427796746334606%;background-color:var(--ui-success)" />
                <div style="height:5.7441253263707575%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Mar 1
GPT-4.1: 912
Claude Sonnet 4: 453
Gemini 2.5 Flash: 339
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:3.4042980518176345%;background-color:var(--ui-success)" />
                <div style="height:4.549106246234183%;background-color:var(--ui-success)" />
                <div style="height:9.158465555332395%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Mar 8
GPT-4.1: 923
Claude Sonnet 4: 440
Gemini 2.5 Flash: 333
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:3.3440449889536055%;background-color:var(--ui-success)" />
                <div style="height:4.418557943362121%;background-color:var(--ui-success)" />
                <div style="height:9.26892950391645%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Mar 15
GPT-4.1: 636
Claude Sonnet 4: 342
Gemini 2.5 Flash: 234
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:2.3498694516971277%;background-color:var(--ui-success)" />
                <div style="height:3.4344245832496485%;background-color:var(--ui-success)" />
                <div style="height:6.386824663587065%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Mar 22
GPT-4.1: 1.1K
Claude Sonnet 4: 493
Gemini 2.5 Flash: 330
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:3.3139184575215905%;background-color:var(--ui-success)" />
                <div style="height:4.950793331994376%;background-color:var(--ui-success)" />
                <div style="height:10.715003012653144%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Mar 29
GPT-4.1: 1.1K
Claude Sonnet 4: 526
Gemini 2.5 Flash: 341
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:3.424382406105644%;background-color:var(--ui-success)" />
                <div style="height:5.282185177746535%;background-color:var(--ui-success)" />
                <div style="height:10.694918658365134%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Apr 5
GPT-4.1: 757
Claude Sonnet 4: 399
Gemini 2.5 Flash: 220
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:2.2092789716810604%;background-color:var(--ui-success)" />
                <div style="height:4.006828680457923%;background-color:var(--ui-success)" />
                <div style="height:7.601928098011649%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Apr 12
GPT-4.1: 990
Claude Sonnet 4: 525
Gemini 2.5 Flash: 386
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:3.8762803775858603%;background-color:var(--ui-success)" />
                <div style="height:5.27214300060253%;background-color:var(--ui-success)" />
                <div style="height:9.94175537256477%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Apr 19
GPT-4.1: 831
Claude Sonnet 4: 429
Gemini 2.5 Flash: 311
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:3.1231170917854993%;background-color:var(--ui-success)" />
                <div style="height:4.308093994778068%;background-color:var(--ui-success)" />
                <div style="height:8.345049206668005%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Apr 26
GPT-4.1: 1K
Claude Sonnet 4: 468
Gemini 2.5 Flash: 332
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:3.334002811809601%;background-color:var(--ui-success)" />
                <div style="height:4.699738903394255%;background-color:var(--ui-success)" />
                <div style="height:10.192809801164893%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of May 3
GPT-4.1: 1.1K
Claude Sonnet 4: 542
Gemini 2.5 Flash: 354
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:3.5549307089777065%;background-color:var(--ui-success)" />
                <div style="height:5.4428600120506125%;background-color:var(--ui-success)" />
                <div style="height:11.287407109861418%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of May 10
GPT-4.1: 793
Claude Sonnet 4: 422
Gemini 2.5 Flash: 262
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:2.631050411729263%;background-color:var(--ui-success)" />
                <div style="height:4.237798754770035%;background-color:var(--ui-success)" />
                <div style="height:7.963446475195822%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of May 17
GPT-4.1: 1.2K
Claude Sonnet 4: 580
Gemini 2.5 Flash: 395
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:3.9666599718819042%;background-color:var(--ui-success)" />
                <div style="height:5.824462743522796%;background-color:var(--ui-success)" />
                <div style="height:11.759389435629645%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of May 24
GPT-4.1: 1.2K
Claude Sonnet 4: 671
Gemini 2.5 Flash: 474
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:4.759991966258284%;background-color:var(--ui-success)" />
                <div style="height:6.738300863627235%;background-color:var(--ui-success)" />
                <div style="height:12.492468367141997%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of May 31
GPT-4.1: 1.1K
Claude Sonnet 4: 569
Gemini 2.5 Flash: 399
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:4.006828680457923%;background-color:var(--ui-success)" />
                <div style="height:5.7139987949387425%;background-color:var(--ui-success)" />
                <div style="height:10.95601526410926%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Jun 7
GPT-4.1: 1.8K
Claude Sonnet 4: 887
Gemini 2.5 Flash: 653
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:6.557541675035147%;background-color:var(--ui-success)" />
                <div style="height:8.907411126732276%;background-color:var(--ui-success)" />
                <div style="height:17.674231773448483%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Jun 14
GPT-4.1: 2.1K
Claude Sonnet 4: 986
Gemini 2.5 Flash: 681
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:6.838722635067282%;background-color:var(--ui-success)" />
                <div style="height:9.901586663988752%;background-color:var(--ui-success)" />
                <div style="height:21.28941554529022%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Jun 21
GPT-4.1: 2K
Claude Sonnet 4: 819
Gemini 2.5 Flash: 601
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:6.035348463546897%;background-color:var(--ui-success)" />
                <div style="height:8.224543080939947%;background-color:var(--ui-success)" />
                <div style="height:19.652540670817434%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Jun 28
GPT-4.1: 2.8K
Claude Sonnet 4: 1.4K
Gemini 2.5 Flash: 858
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:8.616187989556137%;background-color:var(--ui-success)" />
                <div style="height:13.637276561558545%;background-color:var(--ui-success)" />
                <div style="height:27.716408917453307%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Jul 5
GPT-4.1: 1.7K
Claude Sonnet 4: 1K
Gemini 2.5 Flash: 765
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:7.682265515163687%;background-color:var(--ui-success)" />
                <div style="height:10.494075115485037%;background-color:var(--ui-success)" />
                <div style="height:17.553725647720427%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Jul 12
GPT-4.1: 3.1K
Claude Sonnet 4: 1.6K
Gemini 2.5 Flash: 1.1K
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:11.247238401285399%;background-color:var(--ui-success)" />
                <div style="height:16.198031733279773%;background-color:var(--ui-success)" />
                <div style="height:30.678851174934724%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Jul 19
GPT-4.1: 3.3K
Claude Sonnet 4: 1.6K
Gemini 2.5 Flash: 1.2K
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:12.2916248242619%;background-color:var(--ui-success)" />
                <div style="height:16.519381401887927%;background-color:var(--ui-success)" />
                <div style="height:33.09901586663989%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Jul 26
GPT-4.1: 2.6K
Claude Sonnet 4: 1.2K
Gemini 2.5 Flash: 869
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:8.726651938140188%;background-color:var(--ui-success)" />
                <div style="height:12.201245229965856%;background-color:var(--ui-success)" />
                <div style="height:25.617593894356293%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Aug 2
GPT-4.1: 3.9K
Claude Sonnet 4: 1.9K
Gemini 2.5 Flash: 1.3K
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:13.084956818638279%;background-color:var(--ui-success)" />
                <div style="height:19.31110664792127%;background-color:var(--ui-success)" />
                <div style="height:38.98373167302671%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Aug 9
GPT-4.1: 4.5K
Claude Sonnet 4: 2.1K
Gemini 2.5 Flash: 1.4K
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:13.908415344446675%;background-color:var(--ui-success)" />
                <div style="height:20.70696927093794%;background-color:var(--ui-success)" />
                <div style="height:45.079333199437635%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Aug 16
GPT-4.1: 3.5K
Claude Sonnet 4: 1.6K
Gemini 2.5 Flash: 916
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:9.198634263908415%;background-color:var(--ui-success)" />
                <div style="height:15.595501104639487%;background-color:var(--ui-success)" />
                <div style="height:34.75597509540068%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Aug 23
GPT-4.1: 4.6K
Claude Sonnet 4: 2.5K
Gemini 2.5 Flash: 1.6K
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:15.987146013255673%;background-color:var(--ui-success)" />
                <div style="height:25.316328580036153%;background-color:var(--ui-success)" />
                <div style="height:45.70194818236594%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Aug 30
GPT-4.1: 3.8K
Claude Sonnet 4: 2K
Gemini 2.5 Flash: 1.5K
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:15.364531030327374%;background-color:var(--ui-success)" />
                <div style="height:20.365535248041773%;background-color:var(--ui-success)" />
                <div style="height:38.11006226149829%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Sep 6
GPT-4.1: 4.4K
Claude Sonnet 4: 2.4K
Gemini 2.5 Flash: 1.8K
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:17.995581442056636%;background-color:var(--ui-success)" />
                <div style="height:24.31211086563567%;background-color:var(--ui-success)" />
                <div style="height:44.466760393653345%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Sep 13
GPT-4.1: 5.6K
Claude Sonnet 4: 2.6K
Gemini 2.5 Flash: 1.8K
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:18.236593693512752%;background-color:var(--ui-success)" />
                <div style="height:25.989154448684477%;background-color:var(--ui-success)" />
                <div style="height:55.77425185780277%;background-color:var(--ui-success)" />
              </div>
              <div class="flex h-full min-w-0 flex-1 flex-col justify-end" title="Week of Sep 20
GPT-4.1: 3.4K
Claude Sonnet 4: 1.7K
Gemini 2.5 Flash: 915
Mistral Large: 0">
                <div style="height:0%;background-color:var(--ui-success)" />
                <div style="height:9.18859208676441%;background-color:var(--ui-success)" />
                <div style="height:17.47338823056839%;background-color:var(--ui-success)" />
                <div style="height:34.15344446676039%;background-color:var(--ui-success)" />
              </div>
            </div>
            <div class="text-muted flex flex-wrap gap-x-4 gap-y-2 text-xs">
              <span class="flex items-center gap-1.5">
                <span class="size-2.5 rounded-[2px]" style="background-color:var(--ui-success)" />
                GPT-4.1
              </span>
              <span class="flex items-center gap-1.5">
                <span class="size-2.5 rounded-[2px]" style="background-color:var(--ui-success)" />
                Claude Sonnet 4
              </span>
              <span class="flex items-center gap-1.5">
                <span class="size-2.5 rounded-[2px]" style="background-color:var(--ui-success)" />
                Gemini 2.5 Flash
              </span>
            </div>
          </section>
          <section class="space-y-4">
            <div class="flex items-start justify-between gap-3">
              <div>
                <h2 id="by-hour-title" class="text-sm font-semibold text-highlighted">By hour</h2>
                <p class="text-muted mt-1 text-sm">
                  Most active around 4 PM 
                  <span class="text-xs">· UTC</span>
                </p>
              </div>
              <div class="flex items-center gap-1">
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Previous usage metric" type="button" @click="openAction(&quot;Previous usage metric&quot;)">
                  <UIcon name="i-lucide-chevron-left" class="size-4" />
                </UButton>
                <span class="min-w-14 text-center text-xs">Requests</span>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Next usage metric" type="button" @click="openAction(&quot;Next usage metric&quot;)">
                  <UIcon name="i-lucide-chevron-right" class="size-4" />
                </UButton>
              </div>
            </div>
            <div class="flex h-24 items-end gap-1" role="img" aria-label="Requests by hour in UTC; peak at 4 PM.">
              <div class="min-w-0 flex-1 rounded-t-[3px] bg-success/75 dark:bg-success/60" style="height:2.631578947368421%" title="00:00 UTC · 446.5" />
              <div class="min-w-0 flex-1 rounded-t-[3px] bg-success/75 dark:bg-success/60" style="height:2.631578947368421%" title="01:00 UTC · 446.5" />
              <div class="min-w-0 flex-1 rounded-t-[3px] bg-success/75 dark:bg-success/60" style="height:2.631578947368421%" title="02:00 UTC · 446.5" />
              <div class="min-w-0 flex-1 rounded-t-[3px] bg-success/75 dark:bg-success/60" style="height:2.631578947368421%" title="03:00 UTC · 446.5" />
              <div class="min-w-0 flex-1 rounded-t-[3px] bg-success/75 dark:bg-success/60" style="height:2.631578947368421%" title="04:00 UTC · 446.5" />
              <div class="min-w-0 flex-1 rounded-t-[3px] bg-success/75 dark:bg-success/60" style="height:2.631578947368421%" title="05:00 UTC · 446.5" />
              <div class="min-w-0 flex-1 rounded-t-[3px] bg-success/75 dark:bg-success/60" style="height:2.631578947368421%" title="06:00 UTC · 446.5" />
              <div class="min-w-0 flex-1 rounded-t-[3px] bg-success/75 dark:bg-success/60" style="height:2.631578947368421%" title="07:00 UTC · 446.5" />
              <div class="min-w-0 flex-1 rounded-t-[3px] bg-success/75 dark:bg-success/60" style="height:5.263157894736842%" title="08:00 UTC · 892.9" />
              <div class="min-w-0 flex-1 rounded-t-[3px] bg-success/75 dark:bg-success/60" style="height:47.368421052631575%" title="09:00 UTC · 8K" />
              <div class="min-w-0 flex-1 rounded-t-[3px] bg-success/75 dark:bg-success/60" style="height:73.68421052631578%" title="10:00 UTC · 12.5K" />
              <div class="min-w-0 flex-1 rounded-t-[3px] bg-success/75 dark:bg-success/60" style="height:89.47368421052632%" title="11:00 UTC · 15.2K" />
              <div class="min-w-0 flex-1 rounded-t-[3px] bg-success/75 dark:bg-success/60" style="height:5.263157894736842%" title="12:00 UTC · 892.9" />
              <div class="min-w-0 flex-1 rounded-t-[3px] bg-success/75 dark:bg-success/60" style="height:18.421052631578945%" title="13:00 UTC · 3.1K" />
              <div class="min-w-0 flex-1 rounded-t-[3px] bg-success/75 dark:bg-success/60" style="height:68.42105263157895%" title="14:00 UTC · 11.6K" />
              <div class="min-w-0 flex-1 rounded-t-[3px] bg-success/75 dark:bg-success/60" style="height:76.31578947368422%" title="15:00 UTC · 12.9K" />
              <div class="min-w-0 flex-1 rounded-t-[3px] bg-success" style="height:100%" title="16:00 UTC · 17K" />
              <div class="min-w-0 flex-1 rounded-t-[3px] bg-success/75 dark:bg-success/60" style="height:81.57894736842105%" title="17:00 UTC · 13.8K" />
              <div class="min-w-0 flex-1 rounded-t-[3px] bg-success/75 dark:bg-success/60" style="height:78.94736842105263%" title="18:00 UTC · 13.4K" />
              <div class="min-w-0 flex-1 rounded-t-[3px] bg-success/75 dark:bg-success/60" style="height:92.10526315789474%" title="19:00 UTC · 15.6K" />
              <div class="min-w-0 flex-1 rounded-t-[3px] bg-success/75 dark:bg-success/60" style="height:60.526315789473685%" title="20:00 UTC · 10.3K" />
              <div class="min-w-0 flex-1 rounded-t-[3px] bg-success/75 dark:bg-success/60" style="height:21.052631578947366%" title="21:00 UTC · 3.6K" />
              <div class="min-w-0 flex-1 rounded-t-[3px] bg-success/75 dark:bg-success/60" style="height:5.263157894736842%" title="22:00 UTC · 892.9" />
              <div class="min-w-0 flex-1 rounded-t-[3px] bg-success/75 dark:bg-success/60" style="height:2.631578947368421%" title="23:00 UTC · 446.5" />
            </div>
            <div class="text-muted flex justify-between text-[11px]">
              <span>12 AM</span>
              <span>6 AM</span>
              <span>12 PM</span>
              <span>6 PM</span>
              <span>11 PM</span>
            </div>
          </section>
          <section class="space-y-5">
            <div class="flex items-center justify-between">
              <h2 id="models-title" class="text-sm font-semibold text-highlighted">Models</h2>
              <span class="text-muted text-xs">Requests</span>
            </div>
            <div class="space-y-5">
              <div class="grid grid-cols-[minmax(110px,180px)_minmax(40px,1fr)_60px] items-center gap-3">
                <div class="flex min-w-0 items-center gap-2">
                  <span class="truncate text-xs sm:text-sm">GPT-4.1</span>
                </div>
                <div class="bg-muted h-1.5 overflow-hidden rounded-full">
                  <div class="h-full rounded-full bg-success" style="width:100%" />
                </div>
                <span class="text-muted text-right text-xs tabular-nums">78K</span>
              </div>
              <div class="grid grid-cols-[minmax(110px,180px)_minmax(40px,1fr)_60px] items-center gap-3">
                <div class="flex min-w-0 items-center gap-2">
                  <span class="truncate text-xs sm:text-sm">Claude Sonnet 4</span>
                </div>
                <div class="bg-muted h-1.5 overflow-hidden rounded-full">
                  <div class="h-full rounded-full bg-success" style="width:50.13405857525882%" />
                </div>
                <span class="text-muted text-right text-xs tabular-nums">39.1K</span>
              </div>
              <div class="grid grid-cols-[minmax(110px,180px)_minmax(40px,1fr)_60px] items-center gap-3">
                <div class="flex min-w-0 items-center gap-2">
                  <span class="truncate text-xs sm:text-sm">Gemini 2.5 Flash</span>
                </div>
                <div class="bg-muted h-1.5 overflow-hidden rounded-full">
                  <div class="h-full rounded-full bg-success" style="width:34.29205526548729%" />
                </div>
                <span class="text-muted text-right text-xs tabular-nums">26.7K</span>
              </div>
              <div class="grid grid-cols-[minmax(110px,180px)_minmax(40px,1fr)_60px] items-center gap-3">
                <div class="flex min-w-0 items-center gap-2">
                  <span class="truncate text-xs sm:text-sm">Mistral Large</span>
                </div>
                <div class="bg-muted h-1.5 overflow-hidden rounded-full">
                  <div class="h-full rounded-full bg-success" style="width:0%" />
                </div>
                <span class="text-muted text-right text-xs tabular-nums">0</span>
              </div>
            </div>
          </section>
          <p class="text-muted pb-2 text-xs">Demo usage · Sep 28, 2025 –Sep 24, 2026 · All times UTC</p>
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
