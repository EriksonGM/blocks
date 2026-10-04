<!-- Page: /ai-chat/profile | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Profile · Blocks Admin" })

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/profile">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="min-h-0 flex-1 overflow-y-auto">
        <div class="mx-auto w-full max-w-5xl px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
          <section class="relative border-b pb-9 sm:pb-11 border-default">
            <div class="flex flex-wrap justify-end gap-2">
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Share" type="button" @click="openAction(&quot;Share&quot;)">
                <UIcon name="i-lucide-share-2" class="size-4" />
                Share
              </UButton>
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Edit profile" type="button" @click="openAction(&quot;Edit profile&quot;)">
                <UIcon name="i-lucide-pen-line" class="size-4" />
                Edit profile
              </UButton>
            </div>
            <div class="mx-auto -mt-1 flex max-w-2xl flex-col items-center text-center sm:-mt-3">
              <span class="relative flex shrink-0 overflow-hidden rounded-full border-(--ui-bg) size-20 border-4 shadow-sm sm:size-24">
                <img class="aspect-square h-full w-full" alt="Robert Austin" src="/reference/4bfb635c2f1dd77d.png" loading="lazy" />
              </span>
              <h1 class="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl text-highlighted">Robert Austin</h1>
              <div class="text-muted mt-1 flex items-center gap-2 text-sm">
                <span>@ausrobdev</span>
                <div class="inline-flex items-center rounded-md border py-0.5 font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted h-5 px-1.5 text-[10px] uppercase border-default">Pro</div>
              </div>
              <p class="text-muted mt-3 max-w-xl text-sm leading-6">Designing and shipping AI workflows, agent systems, and production interfaces.</p>
              <p class="mt-2 text-xs font-medium">Product engineer</p>
            </div>
          </section>
          <dl class="grid grid-cols-2 border-b sm:grid-cols-5 border-default">
            <div class="border-b px-3 py-5 text-center sm:border-b-0 border-r sm:border-r border-default">
              <dd class="text-lg font-medium tracking-tight tabular-nums">25.7B</dd>
              <dt class="text-muted mt-1 text-xs">Lifetime tokens</dt>
            </div>
            <div class="border-b px-3 py-5 text-center sm:border-r sm:border-b-0 border-default">
              <dd class="text-lg font-medium tracking-tight tabular-nums">2.4B</dd>
              <dt class="text-muted mt-1 text-xs">Peak tokens</dt>
            </div>
            <div class="border-b px-3 py-5 text-center sm:border-b-0 border-r sm:border-r border-default">
              <dd class="text-lg font-medium tracking-tight tabular-nums">25h 29m</dd>
              <dt class="text-muted mt-1 text-xs">Longest session</dt>
            </div>
            <div class="border-b px-3 py-5 text-center sm:border-r sm:border-b-0 border-default">
              <dd class="text-lg font-medium tracking-tight tabular-nums">10 days</dd>
              <dt class="text-muted mt-1 text-xs">Current streak</dt>
            </div>
            <div class="px-3 py-5 text-center sm:border-b-0 col-span-2 border-r-0 border-b-0 sm:col-span-1 sm:border-r-0">
              <dd class="text-lg font-medium tracking-tight tabular-nums">16 days</dd>
              <dt class="text-muted mt-1 text-xs">Longest streak</dt>
            </div>
          </dl>
          <section class="border-b py-8 border-default">
            <div class="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 class="text-sm font-semibold text-highlighted">Token activity</h2>
                <p class="text-muted mt-1 text-xs">A year of conversations, tools, and agent runs.</p>
              </div>
              <div class="bg-(--ui-bg-muted)/60 flex rounded-lg p-1" aria-label="Activity interval">
                <UButton color="neutral" variant="ghost" class="rounded-md px-3 py-1.5 text-xs transition-colors bg-default text-highlighted shadow-sm" aria-label="Daily" type="button" @click="openAction(&quot;Daily&quot;)">
                  Daily
                </UButton>
                <UButton color="neutral" variant="ghost" class="rounded-md px-3 py-1.5 text-xs transition-colors text-muted hover:text-highlighted" aria-label="Weekly" type="button" @click="openAction(&quot;Weekly&quot;)">
                  Weekly
                </UButton>
                <UButton color="neutral" variant="ghost" class="rounded-md px-3 py-1.5 text-xs transition-colors text-muted hover:text-highlighted" aria-label="Cumulative" type="button" @click="openAction(&quot;Cumulative&quot;)">
                  Cumulative
                </UButton>
              </div>
            </div>
            <div class="flex max-w-full flex-col gap-2 w-full" style="font-size:12px">
              <div class="max-w-full overflow-x-auto overflow-y-hidden pb-1">
                <svg class="text-muted block h-auto w-full overflow-visible" height="100%" style="min-width:738px" viewBox="0 0 738 114" width="100%" role="img" aria-label="Activity contribution calendar">
                  <g class="fill-current">
                    <text dominant-baseline="hanging" x="0">Oct</text>
                    <text dominant-baseline="hanging" x="70">Nov</text>
                    <text dominant-baseline="hanging" x="140">Dec</text>
                    <text dominant-baseline="hanging" x="196">Jan</text>
                    <text dominant-baseline="hanging" x="252">Feb</text>
                    <text dominant-baseline="hanging" x="308">Mar</text>
                    <text dominant-baseline="hanging" x="378">Apr</text>
                    <text dominant-baseline="hanging" x="434">May</text>
                    <text dominant-baseline="hanging" x="504">Jun</text>
                    <text dominant-baseline="hanging" x="560">Jul</text>
                    <text dominant-baseline="hanging" x="616">Aug</text>
                    <text dominant-baseline="hanging" x="686">Sep</text>
                  </g>
                  <g>
                    <title>2025-10-01: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="0" y="62" />
                  </g>
                  <g>
                    <title>2025-10-02: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="0" y="76" />
                  </g>
                  <g>
                    <title>2025-10-03: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="0" y="90" />
                  </g>
                  <g>
                    <title>2025-10-04: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="0" y="104" />
                  </g>
                  <g>
                    <title>2025-10-05: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="14" y="20" />
                  </g>
                  <g>
                    <title>2025-10-06: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="14" y="34" />
                  </g>
                  <g>
                    <title>2025-10-07: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="14" y="48" />
                  </g>
                  <g>
                    <title>2025-10-08: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="14" y="62" />
                  </g>
                  <g>
                    <title>2025-10-09: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="14" y="76" />
                  </g>
                  <g>
                    <title>2025-10-10: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="14" y="90" />
                  </g>
                  <g>
                    <title>2025-10-11: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="14" y="104" />
                  </g>
                  <g>
                    <title>2025-10-12: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="28" y="20" />
                  </g>
                  <g>
                    <title>2025-10-13: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="28" y="34" />
                  </g>
                  <g>
                    <title>2025-10-14: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="28" y="48" />
                  </g>
                  <g>
                    <title>2025-10-15: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="28" y="62" />
                  </g>
                  <g>
                    <title>2025-10-16: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="28" y="76" />
                  </g>
                  <g>
                    <title>2025-10-17: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="28" y="90" />
                  </g>
                  <g>
                    <title>2025-10-18: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="28" y="104" />
                  </g>
                  <g>
                    <title>2025-10-19: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="42" y="20" />
                  </g>
                  <g>
                    <title>2025-10-20: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="42" y="34" />
                  </g>
                  <g>
                    <title>2025-10-21: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="42" y="48" />
                  </g>
                  <g>
                    <title>2025-10-22: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="42" y="62" />
                  </g>
                  <g>
                    <title>2025-10-23: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="42" y="76" />
                  </g>
                  <g>
                    <title>2025-10-24: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="42" y="90" />
                  </g>
                  <g>
                    <title>2025-10-25: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="42" y="104" />
                  </g>
                  <g>
                    <title>2025-10-26: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="56" y="20" />
                  </g>
                  <g>
                    <title>2025-10-27: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="56" y="34" />
                  </g>
                  <g>
                    <title>2025-10-28: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="56" y="48" />
                  </g>
                  <g>
                    <title>2025-10-29: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="56" y="62" />
                  </g>
                  <g>
                    <title>2025-10-30: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="56" y="76" />
                  </g>
                  <g>
                    <title>2025-10-31: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="56" y="90" />
                  </g>
                  <g>
                    <title>2025-11-01: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="56" y="104" />
                  </g>
                  <g>
                    <title>2025-11-02: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="70" y="20" />
                  </g>
                  <g>
                    <title>2025-11-03: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="70" y="34" />
                  </g>
                  <g>
                    <title>2025-11-04: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="70" y="48" />
                  </g>
                  <g>
                    <title>2025-11-05: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="70" y="62" />
                  </g>
                  <g>
                    <title>2025-11-06: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="70" y="76" />
                  </g>
                  <g>
                    <title>2025-11-07: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="70" y="90" />
                  </g>
                  <g>
                    <title>2025-11-08: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="70" y="104" />
                  </g>
                  <g>
                    <title>2025-11-09: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="84" y="20" />
                  </g>
                  <g>
                    <title>2025-11-10: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="84" y="34" />
                  </g>
                  <g>
                    <title>2025-11-11: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="84" y="48" />
                  </g>
                  <g>
                    <title>2025-11-12: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="84" y="62" />
                  </g>
                  <g>
                    <title>2025-11-13: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="84" y="76" />
                  </g>
                  <g>
                    <title>2025-11-14: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="84" y="90" />
                  </g>
                  <g>
                    <title>2025-11-15: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="84" y="104" />
                  </g>
                  <g>
                    <title>2025-11-16: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="98" y="20" />
                  </g>
                  <g>
                    <title>2025-11-17: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="98" y="34" />
                  </g>
                  <g>
                    <title>2025-11-18: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="98" y="48" />
                  </g>
                  <g>
                    <title>2025-11-19: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="98" y="62" />
                  </g>
                  <g>
                    <title>2025-11-20: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="98" y="76" />
                  </g>
                  <g>
                    <title>2025-11-21: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="98" y="90" />
                  </g>
                  <g>
                    <title>2025-11-22: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="98" y="104" />
                  </g>
                  <g>
                    <title>2025-11-23: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="112" y="20" />
                  </g>
                  <g>
                    <title>2025-11-24: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="112" y="34" />
                  </g>
                  <g>
                    <title>2025-11-25: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="112" y="48" />
                  </g>
                  <g>
                    <title>2025-11-26: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="112" y="62" />
                  </g>
                  <g>
                    <title>2025-11-27: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="112" y="76" />
                  </g>
                  <g>
                    <title>2025-11-28: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="112" y="90" />
                  </g>
                  <g>
                    <title>2025-11-29: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="112" y="104" />
                  </g>
                  <g>
                    <title>2025-11-30: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="126" y="20" />
                  </g>
                  <g>
                    <title>2025-12-01: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="126" y="34" />
                  </g>
                  <g>
                    <title>2025-12-02: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="126" y="48" />
                  </g>
                  <g>
                    <title>2025-12-03: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="126" y="62" />
                  </g>
                  <g>
                    <title>2025-12-04: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="126" y="76" />
                  </g>
                  <g>
                    <title>2025-12-05: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="126" y="90" />
                  </g>
                  <g>
                    <title>2025-12-06: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="126" y="104" />
                  </g>
                  <g>
                    <title>2025-12-07: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="140" y="20" />
                  </g>
                  <g>
                    <title>2025-12-08: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="140" y="34" />
                  </g>
                  <g>
                    <title>2025-12-09: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="140" y="48" />
                  </g>
                  <g>
                    <title>2025-12-10: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="140" y="62" />
                  </g>
                  <g>
                    <title>2025-12-11: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="140" y="76" />
                  </g>
                  <g>
                    <title>2025-12-12: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="140" y="90" />
                  </g>
                  <g>
                    <title>2025-12-13: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="140" y="104" />
                  </g>
                  <g>
                    <title>2025-12-14: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="154" y="20" />
                  </g>
                  <g>
                    <title>2025-12-15: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="154" y="34" />
                  </g>
                  <g>
                    <title>2025-12-16: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="154" y="48" />
                  </g>
                  <g>
                    <title>2025-12-17: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="154" y="62" />
                  </g>
                  <g>
                    <title>2025-12-18: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="154" y="76" />
                  </g>
                  <g>
                    <title>2025-12-19: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="154" y="90" />
                  </g>
                  <g>
                    <title>2025-12-20: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="154" y="104" />
                  </g>
                  <g>
                    <title>2025-12-21: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="168" y="20" />
                  </g>
                  <g>
                    <title>2025-12-22: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="168" y="34" />
                  </g>
                  <g>
                    <title>2025-12-23: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="168" y="48" />
                  </g>
                  <g>
                    <title>2025-12-24: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="168" y="62" />
                  </g>
                  <g>
                    <title>2025-12-25: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="168" y="76" />
                  </g>
                  <g>
                    <title>2025-12-26: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="168" y="90" />
                  </g>
                  <g>
                    <title>2025-12-27: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="168" y="104" />
                  </g>
                  <g>
                    <title>2025-12-28: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="182" y="20" />
                  </g>
                  <g>
                    <title>2025-12-29: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="182" y="34" />
                  </g>
                  <g>
                    <title>2025-12-30: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="182" y="48" />
                  </g>
                  <g>
                    <title>2025-12-31: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="182" y="62" />
                  </g>
                  <g>
                    <title>2026-01-01: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="182" y="76" />
                  </g>
                  <g>
                    <title>2026-01-02: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="182" y="90" />
                  </g>
                  <g>
                    <title>2026-01-03: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="182" y="104" />
                  </g>
                  <g>
                    <title>2026-01-04: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="196" y="20" />
                  </g>
                  <g>
                    <title>2026-01-05: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="196" y="34" />
                  </g>
                  <g>
                    <title>2026-01-06: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="196" y="48" />
                  </g>
                  <g>
                    <title>2026-01-07: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="196" y="62" />
                  </g>
                  <g>
                    <title>2026-01-08: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="196" y="76" />
                  </g>
                  <g>
                    <title>2026-01-09: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="196" y="90" />
                  </g>
                  <g>
                    <title>2026-01-10: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="196" y="104" />
                  </g>
                  <g>
                    <title>2026-01-11: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="210" y="20" />
                  </g>
                  <g>
                    <title>2026-01-12: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="210" y="34" />
                  </g>
                  <g>
                    <title>2026-01-13: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="210" y="48" />
                  </g>
                  <g>
                    <title>2026-01-14: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="210" y="62" />
                  </g>
                  <g>
                    <title>2026-01-15: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="210" y="76" />
                  </g>
                  <g>
                    <title>2026-01-16: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="210" y="90" />
                  </g>
                  <g>
                    <title>2026-01-17: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="210" y="104" />
                  </g>
                  <g>
                    <title>2026-01-18: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="224" y="20" />
                  </g>
                  <g>
                    <title>2026-01-19: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="224" y="34" />
                  </g>
                  <g>
                    <title>2026-01-20: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="224" y="48" />
                  </g>
                  <g>
                    <title>2026-01-21: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="224" y="62" />
                  </g>
                  <g>
                    <title>2026-01-22: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="224" y="76" />
                  </g>
                  <g>
                    <title>2026-01-23: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="224" y="90" />
                  </g>
                  <g>
                    <title>2026-01-24: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="224" y="104" />
                  </g>
                  <g>
                    <title>2026-01-25: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="238" y="20" />
                  </g>
                  <g>
                    <title>2026-01-26: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="238" y="34" />
                  </g>
                  <g>
                    <title>2026-01-27: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="238" y="48" />
                  </g>
                  <g>
                    <title>2026-01-28: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="238" y="62" />
                  </g>
                  <g>
                    <title>2026-01-29: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="238" y="76" />
                  </g>
                  <g>
                    <title>2026-01-30: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="238" y="90" />
                  </g>
                  <g>
                    <title>2026-01-31: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="238" y="104" />
                  </g>
                  <g>
                    <title>2026-02-01: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="252" y="20" />
                  </g>
                  <g>
                    <title>2026-02-02: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="252" y="34" />
                  </g>
                  <g>
                    <title>2026-02-03: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="252" y="48" />
                  </g>
                  <g>
                    <title>2026-02-04: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="252" y="62" />
                  </g>
                  <g>
                    <title>2026-02-05: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="252" y="76" />
                  </g>
                  <g>
                    <title>2026-02-06: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="252" y="90" />
                  </g>
                  <g>
                    <title>2026-02-07: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="252" y="104" />
                  </g>
                  <g>
                    <title>2026-02-08: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="266" y="20" />
                  </g>
                  <g>
                    <title>2026-02-09: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="266" y="34" />
                  </g>
                  <g>
                    <title>2026-02-10: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="266" y="48" />
                  </g>
                  <g>
                    <title>2026-02-11: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="266" y="62" />
                  </g>
                  <g>
                    <title>2026-02-12: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="266" y="76" />
                  </g>
                  <g>
                    <title>2026-02-13: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="266" y="90" />
                  </g>
                  <g>
                    <title>2026-02-14: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="266" y="104" />
                  </g>
                  <g>
                    <title>2026-02-15: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="280" y="20" />
                  </g>
                  <g>
                    <title>2026-02-16: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="280" y="34" />
                  </g>
                  <g>
                    <title>2026-02-17: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="280" y="48" />
                  </g>
                  <g>
                    <title>2026-02-18: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="280" y="62" />
                  </g>
                  <g>
                    <title>2026-02-19: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="280" y="76" />
                  </g>
                  <g>
                    <title>2026-02-20: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="280" y="90" />
                  </g>
                  <g>
                    <title>2026-02-21: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="280" y="104" />
                  </g>
                  <g>
                    <title>2026-02-22: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="294" y="20" />
                  </g>
                  <g>
                    <title>2026-02-23: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="294" y="34" />
                  </g>
                  <g>
                    <title>2026-02-24: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="294" y="48" />
                  </g>
                  <g>
                    <title>2026-02-25: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="294" y="62" />
                  </g>
                  <g>
                    <title>2026-02-26: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="294" y="76" />
                  </g>
                  <g>
                    <title>2026-02-27: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="294" y="90" />
                  </g>
                  <g>
                    <title>2026-02-28: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="294" y="104" />
                  </g>
                  <g>
                    <title>2026-03-01: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="308" y="20" />
                  </g>
                  <g>
                    <title>2026-03-02: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="308" y="34" />
                  </g>
                  <g>
                    <title>2026-03-03: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="308" y="48" />
                  </g>
                  <g>
                    <title>2026-03-04: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="308" y="62" />
                  </g>
                  <g>
                    <title>2026-03-05: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="308" y="76" />
                  </g>
                  <g>
                    <title>2026-03-06: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="308" y="90" />
                  </g>
                  <g>
                    <title>2026-03-07: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="308" y="104" />
                  </g>
                  <g>
                    <title>2026-03-08: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="322" y="20" />
                  </g>
                  <g>
                    <title>2026-03-09: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="322" y="34" />
                  </g>
                  <g>
                    <title>2026-03-10: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="322" y="48" />
                  </g>
                  <g>
                    <title>2026-03-11: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="322" y="62" />
                  </g>
                  <g>
                    <title>2026-03-12: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="322" y="76" />
                  </g>
                  <g>
                    <title>2026-03-13: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="322" y="90" />
                  </g>
                  <g>
                    <title>2026-03-14: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="322" y="104" />
                  </g>
                  <g>
                    <title>2026-03-15: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="336" y="20" />
                  </g>
                  <g>
                    <title>2026-03-16: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="336" y="34" />
                  </g>
                  <g>
                    <title>2026-03-17: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="336" y="48" />
                  </g>
                  <g>
                    <title>2026-03-18: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="336" y="62" />
                  </g>
                  <g>
                    <title>2026-03-19: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="336" y="76" />
                  </g>
                  <g>
                    <title>2026-03-20: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="336" y="90" />
                  </g>
                  <g>
                    <title>2026-03-21: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="336" y="104" />
                  </g>
                  <g>
                    <title>2026-03-22: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="350" y="20" />
                  </g>
                  <g>
                    <title>2026-03-23: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="350" y="34" />
                  </g>
                  <g>
                    <title>2026-03-24: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="350" y="48" />
                  </g>
                  <g>
                    <title>2026-03-25: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="350" y="62" />
                  </g>
                  <g>
                    <title>2026-03-26: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="350" y="76" />
                  </g>
                  <g>
                    <title>2026-03-27: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="350" y="90" />
                  </g>
                  <g>
                    <title>2026-03-28: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="350" y="104" />
                  </g>
                  <g>
                    <title>2026-03-29: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="364" y="20" />
                  </g>
                  <g>
                    <title>2026-03-30: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="364" y="34" />
                  </g>
                  <g>
                    <title>2026-03-31: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="364" y="48" />
                  </g>
                  <g>
                    <title>2026-04-01: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="364" y="62" />
                  </g>
                  <g>
                    <title>2026-04-02: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="364" y="76" />
                  </g>
                  <g>
                    <title>2026-04-03: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="364" y="90" />
                  </g>
                  <g>
                    <title>2026-04-04: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="364" y="104" />
                  </g>
                  <g>
                    <title>2026-04-05: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="378" y="20" />
                  </g>
                  <g>
                    <title>2026-04-06: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="378" y="34" />
                  </g>
                  <g>
                    <title>2026-04-07: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="378" y="48" />
                  </g>
                  <g>
                    <title>2026-04-08: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="378" y="62" />
                  </g>
                  <g>
                    <title>2026-04-09: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="378" y="76" />
                  </g>
                  <g>
                    <title>2026-04-10: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="378" y="90" />
                  </g>
                  <g>
                    <title>2026-04-11: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="378" y="104" />
                  </g>
                  <g>
                    <title>2026-04-12: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="392" y="20" />
                  </g>
                  <g>
                    <title>2026-04-13: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="392" y="34" />
                  </g>
                  <g>
                    <title>2026-04-14: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="392" y="48" />
                  </g>
                  <g>
                    <title>2026-04-15: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="392" y="62" />
                  </g>
                  <g>
                    <title>2026-04-16: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="392" y="76" />
                  </g>
                  <g>
                    <title>2026-04-17: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="392" y="90" />
                  </g>
                  <g>
                    <title>2026-04-18: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="392" y="104" />
                  </g>
                  <g>
                    <title>2026-04-19: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="406" y="20" />
                  </g>
                  <g>
                    <title>2026-04-20: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="406" y="34" />
                  </g>
                  <g>
                    <title>2026-04-21: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="406" y="48" />
                  </g>
                  <g>
                    <title>2026-04-22: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="406" y="62" />
                  </g>
                  <g>
                    <title>2026-04-23: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="406" y="76" />
                  </g>
                  <g>
                    <title>2026-04-24: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="406" y="90" />
                  </g>
                  <g>
                    <title>2026-04-25: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="406" y="104" />
                  </g>
                  <g>
                    <title>2026-04-26: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="420" y="20" />
                  </g>
                  <g>
                    <title>2026-04-27: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="420" y="34" />
                  </g>
                  <g>
                    <title>2026-04-28: 0 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="420" y="48" />
                  </g>
                  <g>
                    <title>2026-04-29: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="420" y="62" />
                  </g>
                  <g>
                    <title>2026-04-30: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="420" y="76" />
                  </g>
                  <g>
                    <title>2026-05-01: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="420" y="90" />
                  </g>
                  <g>
                    <title>2026-05-02: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="420" y="104" />
                  </g>
                  <g>
                    <title>2026-05-03: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="434" y="20" />
                  </g>
                  <g>
                    <title>2026-05-04: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="434" y="34" />
                  </g>
                  <g>
                    <title>2026-05-05: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="434" y="48" />
                  </g>
                  <g>
                    <title>2026-05-06: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="434" y="62" />
                  </g>
                  <g>
                    <title>2026-05-07: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="434" y="76" />
                  </g>
                  <g>
                    <title>2026-05-08: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="434" y="90" />
                  </g>
                  <g>
                    <title>2026-05-09: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="434" y="104" />
                  </g>
                  <g>
                    <title>2026-05-10: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="448" y="20" />
                  </g>
                  <g>
                    <title>2026-05-11: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="448" y="34" />
                  </g>
                  <g>
                    <title>2026-05-12: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="448" y="48" />
                  </g>
                  <g>
                    <title>2026-05-13: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="448" y="62" />
                  </g>
                  <g>
                    <title>2026-05-14: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="448" y="76" />
                  </g>
                  <g>
                    <title>2026-05-15: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="448" y="90" />
                  </g>
                  <g>
                    <title>2026-05-16: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="448" y="104" />
                  </g>
                  <g>
                    <title>2026-05-17: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="462" y="20" />
                  </g>
                  <g>
                    <title>2026-05-18: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="462" y="34" />
                  </g>
                  <g>
                    <title>2026-05-19: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="462" y="48" />
                  </g>
                  <g>
                    <title>2026-05-20: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="462" y="62" />
                  </g>
                  <g>
                    <title>2026-05-21: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="462" y="76" />
                  </g>
                  <g>
                    <title>2026-05-22: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="462" y="90" />
                  </g>
                  <g>
                    <title>2026-05-23: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="462" y="104" />
                  </g>
                  <g>
                    <title>2026-05-24: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="476" y="20" />
                  </g>
                  <g>
                    <title>2026-05-25: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="476" y="34" />
                  </g>
                  <g>
                    <title>2026-05-26: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="476" y="48" />
                  </g>
                  <g>
                    <title>2026-05-27: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="476" y="62" />
                  </g>
                  <g>
                    <title>2026-05-28: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="476" y="76" />
                  </g>
                  <g>
                    <title>2026-05-29: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="476" y="90" />
                  </g>
                  <g>
                    <title>2026-05-30: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="476" y="104" />
                  </g>
                  <g>
                    <title>2026-05-31: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="490" y="20" />
                  </g>
                  <g>
                    <title>2026-06-01: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="490" y="34" />
                  </g>
                  <g>
                    <title>2026-06-02: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="490" y="48" />
                  </g>
                  <g>
                    <title>2026-06-03: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="490" y="62" />
                  </g>
                  <g>
                    <title>2026-06-04: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="490" y="76" />
                  </g>
                  <g>
                    <title>2026-06-05: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="490" y="90" />
                  </g>
                  <g>
                    <title>2026-06-06: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="490" y="104" />
                  </g>
                  <g>
                    <title>2026-06-07: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="504" y="20" />
                  </g>
                  <g>
                    <title>2026-06-08: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="504" y="34" />
                  </g>
                  <g>
                    <title>2026-06-09: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="504" y="48" />
                  </g>
                  <g>
                    <title>2026-06-10: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="504" y="62" />
                  </g>
                  <g>
                    <title>2026-06-11: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="504" y="76" />
                  </g>
                  <g>
                    <title>2026-06-12: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="504" y="90" />
                  </g>
                  <g>
                    <title>2026-06-13: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="504" y="104" />
                  </g>
                  <g>
                    <title>2026-06-14: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="518" y="20" />
                  </g>
                  <g>
                    <title>2026-06-15: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="518" y="34" />
                  </g>
                  <g>
                    <title>2026-06-16: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="518" y="48" />
                  </g>
                  <g>
                    <title>2026-06-17: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="518" y="62" />
                  </g>
                  <g>
                    <title>2026-06-18: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="518" y="76" />
                  </g>
                  <g>
                    <title>2026-06-19: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="518" y="90" />
                  </g>
                  <g>
                    <title>2026-06-20: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="518" y="104" />
                  </g>
                  <g>
                    <title>2026-06-21: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="532" y="20" />
                  </g>
                  <g>
                    <title>2026-06-22: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="532" y="34" />
                  </g>
                  <g>
                    <title>2026-06-23: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="532" y="48" />
                  </g>
                  <g>
                    <title>2026-06-24: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="532" y="62" />
                  </g>
                  <g>
                    <title>2026-06-25: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="532" y="76" />
                  </g>
                  <g>
                    <title>2026-06-26: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="532" y="90" />
                  </g>
                  <g>
                    <title>2026-06-27: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="532" y="104" />
                  </g>
                  <g>
                    <title>2026-06-28: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="546" y="20" />
                  </g>
                  <g>
                    <title>2026-06-29: 4 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="546" y="34" />
                  </g>
                  <g>
                    <title>2026-06-30: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="546" y="48" />
                  </g>
                  <g>
                    <title>2026-07-01: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="546" y="62" />
                  </g>
                  <g>
                    <title>2026-07-02: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="546" y="76" />
                  </g>
                  <g>
                    <title>2026-07-03: 20 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="546" y="90" />
                  </g>
                  <g>
                    <title>2026-07-04: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="546" y="104" />
                  </g>
                  <g>
                    <title>2026-07-05: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="560" y="20" />
                  </g>
                  <g>
                    <title>2026-07-06: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="560" y="34" />
                  </g>
                  <g>
                    <title>2026-07-07: 20 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="560" y="48" />
                  </g>
                  <g>
                    <title>2026-07-08: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="560" y="62" />
                  </g>
                  <g>
                    <title>2026-07-09: 20 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="560" y="76" />
                  </g>
                  <g>
                    <title>2026-07-10: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="560" y="90" />
                  </g>
                  <g>
                    <title>2026-07-11: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="560" y="104" />
                  </g>
                  <g>
                    <title>2026-07-12: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="574" y="20" />
                  </g>
                  <g>
                    <title>2026-07-13: 20 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="574" y="34" />
                  </g>
                  <g>
                    <title>2026-07-14: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="574" y="48" />
                  </g>
                  <g>
                    <title>2026-07-15: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="574" y="62" />
                  </g>
                  <g>
                    <title>2026-07-16: 20 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="574" y="76" />
                  </g>
                  <g>
                    <title>2026-07-17: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="574" y="90" />
                  </g>
                  <g>
                    <title>2026-07-18: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="574" y="104" />
                  </g>
                  <g>
                    <title>2026-07-19: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="588" y="20" />
                  </g>
                  <g>
                    <title>2026-07-20: 20 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="588" y="34" />
                  </g>
                  <g>
                    <title>2026-07-21: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="588" y="48" />
                  </g>
                  <g>
                    <title>2026-07-22: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="588" y="62" />
                  </g>
                  <g>
                    <title>2026-07-23: 20 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="588" y="76" />
                  </g>
                  <g>
                    <title>2026-07-24: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="588" y="90" />
                  </g>
                  <g>
                    <title>2026-07-25: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="588" y="104" />
                  </g>
                  <g>
                    <title>2026-07-26: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="602" y="20" />
                  </g>
                  <g>
                    <title>2026-07-27: 20 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="602" y="34" />
                  </g>
                  <g>
                    <title>2026-07-28: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="602" y="48" />
                  </g>
                  <g>
                    <title>2026-07-29: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="602" y="62" />
                  </g>
                  <g>
                    <title>2026-07-30: 20 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="602" y="76" />
                  </g>
                  <g>
                    <title>2026-07-31: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="602" y="90" />
                  </g>
                  <g>
                    <title>2026-08-01: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="602" y="104" />
                  </g>
                  <g>
                    <title>2026-08-02: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="616" y="20" />
                  </g>
                  <g>
                    <title>2026-08-03: 20 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="616" y="34" />
                  </g>
                  <g>
                    <title>2026-08-04: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="616" y="48" />
                  </g>
                  <g>
                    <title>2026-08-05: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="616" y="62" />
                  </g>
                  <g>
                    <title>2026-08-06: 20 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="616" y="76" />
                  </g>
                  <g>
                    <title>2026-08-07: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="616" y="90" />
                  </g>
                  <g>
                    <title>2026-08-08: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="616" y="104" />
                  </g>
                  <g>
                    <title>2026-08-09: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="630" y="20" />
                  </g>
                  <g>
                    <title>2026-08-10: 20 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="630" y="34" />
                  </g>
                  <g>
                    <title>2026-08-11: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="630" y="48" />
                  </g>
                  <g>
                    <title>2026-08-12: 20 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="630" y="62" />
                  </g>
                  <g>
                    <title>2026-08-13: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="630" y="76" />
                  </g>
                  <g>
                    <title>2026-08-14: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="630" y="90" />
                  </g>
                  <g>
                    <title>2026-08-15: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="630" y="104" />
                  </g>
                  <g>
                    <title>2026-08-16: 20 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="644" y="20" />
                  </g>
                  <g>
                    <title>2026-08-17: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="644" y="34" />
                  </g>
                  <g>
                    <title>2026-08-18: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="644" y="48" />
                  </g>
                  <g>
                    <title>2026-08-19: 20 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="644" y="62" />
                  </g>
                  <g>
                    <title>2026-08-20: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="644" y="76" />
                  </g>
                  <g>
                    <title>2026-08-21: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="644" y="90" />
                  </g>
                  <g>
                    <title>2026-08-22: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="644" y="104" />
                  </g>
                  <g>
                    <title>2026-08-23: 20 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="658" y="20" />
                  </g>
                  <g>
                    <title>2026-08-24: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="658" y="34" />
                  </g>
                  <g>
                    <title>2026-08-25: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="658" y="48" />
                  </g>
                  <g>
                    <title>2026-08-26: 20 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="658" y="62" />
                  </g>
                  <g>
                    <title>2026-08-27: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="658" y="76" />
                  </g>
                  <g>
                    <title>2026-08-28: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="658" y="90" />
                  </g>
                  <g>
                    <title>2026-08-29: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="658" y="104" />
                  </g>
                  <g>
                    <title>2026-08-30: 20 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="672" y="20" />
                  </g>
                  <g>
                    <title>2026-08-31: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="672" y="34" />
                  </g>
                  <g>
                    <title>2026-09-01: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="672" y="48" />
                  </g>
                  <g>
                    <title>2026-09-02: 20 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="672" y="62" />
                  </g>
                  <g>
                    <title>2026-09-03: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="672" y="76" />
                  </g>
                  <g>
                    <title>2026-09-04: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="672" y="90" />
                  </g>
                  <g>
                    <title>2026-09-05: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="672" y="104" />
                  </g>
                  <g>
                    <title>2026-09-06: 20 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="686" y="20" />
                  </g>
                  <g>
                    <title>2026-09-07: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="686" y="34" />
                  </g>
                  <g>
                    <title>2026-09-08: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="686" y="48" />
                  </g>
                  <g>
                    <title>2026-09-09: 20 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="686" y="62" />
                  </g>
                  <g>
                    <title>2026-09-10: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="686" y="76" />
                  </g>
                  <g>
                    <title>2026-09-11: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="686" y="90" />
                  </g>
                  <g>
                    <title>2026-09-12: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="686" y="104" />
                  </g>
                  <g>
                    <title>2026-09-13: 20 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="700" y="20" />
                  </g>
                  <g>
                    <title>2026-09-14: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="700" y="34" />
                  </g>
                  <g>
                    <title>2026-09-15: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="700" y="48" />
                  </g>
                  <g>
                    <title>2026-09-16: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="700" y="62" />
                  </g>
                  <g>
                    <title>2026-09-17: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="700" y="76" />
                  </g>
                  <g>
                    <title>2026-09-18: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="700" y="90" />
                  </g>
                  <g>
                    <title>2026-09-19: 20 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="700" y="104" />
                  </g>
                  <g>
                    <title>2026-09-20: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="714" y="20" />
                  </g>
                  <g>
                    <title>2026-09-21: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="714" y="34" />
                  </g>
                  <g>
                    <title>2026-09-22: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="714" y="48" />
                  </g>
                  <g>
                    <title>2026-09-23: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="714" y="62" />
                  </g>
                  <g>
                    <title>2026-09-24: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="714" y="76" />
                  </g>
                  <g>
                    <title>2026-09-25: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="714" y="90" />
                  </g>
                  <g>
                    <title>2026-09-26: 20 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="714" y="104" />
                  </g>
                  <g>
                    <title>2026-09-27: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="728" y="20" />
                  </g>
                  <g>
                    <title>2026-09-28: 12 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="728" y="34" />
                  </g>
                  <g>
                    <title>2026-09-29: 8 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="728" y="48" />
                  </g>
                  <g>
                    <title>2026-09-30: 16 activities</title>
                    <rect class="transition-colors data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" x="728" y="62" />
                  </g>
                </svg>
              </div>
              <div class="flex flex-wrap items-center gap-2 whitespace-nowrap sm:gap-x-4 text-[10px]">
                <div class="text-muted">2,808 activities in this profile year</div>
                <div class="ml-auto flex items-center gap-1">
                  <span class="text-muted mr-1">Less</span>
                  <svg height="100%" width="100%" viewBox="0 0 10 10">
                    <title>0 activity level</title>
                    <rect class="data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" />
                  </svg>
                  <svg height="100%" width="100%" viewBox="0 0 10 10">
                    <title>1 activity level</title>
                    <rect class="data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" />
                  </svg>
                  <svg height="100%" width="100%" viewBox="0 0 10 10">
                    <title>2 activity level</title>
                    <rect class="data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" />
                  </svg>
                  <svg height="100%" width="100%" viewBox="0 0 10 10">
                    <title>3 activity level</title>
                    <rect class="data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" />
                  </svg>
                  <svg height="100%" width="100%" viewBox="0 0 10 10">
                    <title>4 activity level</title>
                    <rect class="data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" />
                  </svg>
                  <svg height="100%" width="100%" viewBox="0 0 10 10">
                    <title>5 activity level</title>
                    <rect class="data-[level=&quot;0&quot;]:fill-(--ui-bg-muted) data-[level=&quot;1&quot;]:fill-success/20 data-[level=&quot;2&quot;]:fill-success/40 data-[level=&quot;3&quot;]:fill-success/60 data-[level=&quot;4&quot;]:fill-success/80 data-[level=&quot;5&quot;]:fill-success" height="10" rx="2.5" ry="2.5" width="10" />
                  </svg>
                  <span class="text-muted ml-1">More</span>
                </div>
              </div>
            </div>
          </section>
          <section class="grid gap-10 border-b py-8 lg:grid-cols-2 lg:gap-16 border-default">
            <div>
              <h2 class="text-sm font-semibold text-highlighted">Activity insights</h2>
              <dl class="mt-5 space-y-3.5">
                <div class="flex items-center justify-between gap-6 text-sm">
                  <dt class="text-muted">Fast mode</dt>
                  <dd class="font-medium tabular-nums">42%</dd>
                </div>
                <div class="flex items-center justify-between gap-6 text-sm">
                  <dt class="text-muted">Most used reasoning</dt>
                  <dd class="font-medium tabular-nums">High · 80%</dd>
                </div>
                <div class="flex items-center justify-between gap-6 text-sm">
                  <dt class="text-muted">Skills explored</dt>
                  <dd class="font-medium tabular-nums">41</dd>
                </div>
                <div class="flex items-center justify-between gap-6 text-sm">
                  <dt class="text-muted">Total skills used</dt>
                  <dd class="font-medium tabular-nums">1,631</dd>
                </div>
                <div class="flex items-center justify-between gap-6 text-sm">
                  <dt class="text-muted">Total chats</dt>
                  <dd class="font-medium tabular-nums">1,562</dd>
                </div>
              </dl>
            </div>
            <div>
              <div class="flex items-center justify-between gap-4">
                <h2 class="text-sm font-semibold text-highlighted">Most used tools</h2>
                <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" to="/ai-chat/skill-library">
                  Browse skills
                  <UIcon name="i-lucide-arrow-up-right" class="size-4" />
                </NuxtLink>
              </div>
              <ul class="mt-3 divide-y">
                <li class="flex items-center gap-3 py-2.5 text-sm">
                  <span class="bg-muted flex size-7 items-center justify-center rounded-md">
                    <UIcon name="i-lucide-blocks" class="size-3.5" />
                  </span>
                  <span class="min-w-0 flex-1 truncate font-medium">$shadcnblocks</span>
                  <span class="text-muted text-xs tabular-nums">333 runs</span>
                </li>
                <li class="flex items-center gap-3 py-2.5 text-sm">
                  <span class="bg-muted flex size-7 items-center justify-center rounded-md">
                    <UIcon name="i-lucide-panels-top-left" class="size-3.5" />
                  </span>
                  <span class="min-w-0 flex-1 truncate font-medium">$design-taste-frontend</span>
                  <span class="text-muted text-xs tabular-nums">250 runs</span>
                </li>
                <li class="flex items-center gap-3 py-2.5 text-sm">
                  <span class="bg-muted flex size-7 items-center justify-center rounded-md">
                    <UIcon name="i-lucide-cloud" class="size-3.5" />
                  </span>
                  <span class="min-w-0 flex-1 truncate font-medium">$cloudflare</span>
                  <span class="text-muted text-xs tabular-nums">169 runs</span>
                </li>
                <li class="flex items-center gap-3 py-2.5 text-sm">
                  <span class="bg-muted flex size-7 items-center justify-center rounded-md">
                    <UIcon name="i-lucide-monitor-up" class="size-3.5" />
                  </span>
                  <span class="min-w-0 flex-1 truncate font-medium">@browser</span>
                  <span class="text-muted text-xs tabular-nums">135 runs</span>
                </li>
                <li class="flex items-center gap-3 py-2.5 text-sm">
                  <span class="bg-muted flex size-7 items-center justify-center rounded-md">
                    <UIcon name="i-lucide-code-xml" class="size-3.5" />
                  </span>
                  <span class="min-w-0 flex-1 truncate font-medium">$react-best-practices</span>
                  <span class="text-muted text-xs tabular-nums">109 runs</span>
                </li>
              </ul>
            </div>
          </section>
          <div class="grid gap-5 border-b py-8 lg:grid-cols-2 border-default">
            <section class="bg-(--ui-bg-muted)/25 overflow-hidden rounded-xl border px-5 py-5 sm:px-6 border-default">
              <div class="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p class="text-muted text-[11px] font-medium tracking-wide uppercase">Agents</p>
                  <div class="mt-1 flex items-center gap-3">
                    <p class="text-xl font-semibold tracking-tight tabular-nums sm:text-2xl text-highlighted">32 agents</p>
                    <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 hover:bg-primary/80 border-success/15 bg-success/10 text-success shadow-none dark:text-success">+12%</div>
                  </div>
                  <p class="text-muted mt-1 text-xs">1,042 runs across active agents</p>
                </div>
                <div class="bg-default flex items-center rounded-lg border p-1 shadow-sm border-default">
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Previous month" type="button" @click="openAction(&quot;Previous month&quot;)">
                    <UIcon name="i-lucide-chevron-left" class="size-4" />
                  </UButton>
                  <span class="min-w-24 text-center text-sm font-medium">December</span>
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Next month" type="button" @click="openAction(&quot;Next month&quot;)">
                    <UIcon name="i-lucide-chevron-right" class="size-4" />
                  </UButton>
                </div>
              </div>
              <div class="mt-5">
                <!-- Chart 1: SVG geometry and theme tokens are local to this page -->
                <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden aspect-auto h-[210px] w-full" style=";--color-runs:var(--ui-success)" role="img" aria-label="Analytics chart">
                  <!-- Chart 2: SVG geometry and theme tokens are local to this page -->
                  <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-runs:var(--ui-success);width:100%;height:210px;min-width:0" role="img" aria-label="Analytics chart">
                    <div style="width:0;height:0;overflow:visible">
                      <div width="412" height="210" class="chart-wrapper" style="position: relative; cursor: default; width: 412px; height: 210px;">
                        <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 412 210" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                          <title />
                          <desc />
                          <g class="chart-zIndex-layer_-100">
                            <g class="chart-cartesian-grid">
                              <g class="chart-cartesian-grid-horizontal">
                                <line stroke="var(--ui-border)" stroke-dasharray="3 5" fill="none" x="32" y="8" width="376" height="172" x1="32" y1="180" x2="408" y2="180" />
                                <line stroke="var(--ui-border)" stroke-dasharray="3 5" fill="none" x="32" y="8" width="376" height="172" x1="32" y1="122.66666666666669" x2="408" y2="122.66666666666669" />
                                <line stroke="var(--ui-border)" stroke-dasharray="3 5" fill="none" x="32" y="8" width="376" height="172" x1="32" y1="65.33333333333334" x2="408" y2="65.33333333333334" />
                                <line stroke="var(--ui-border)" stroke-dasharray="3 5" fill="none" x="32" y="8" width="376" height="172" x1="32" y1="8" x2="408" y2="8" />
                              </g>
                            </g>
                          </g>
                          <g class="chart-zIndex-layer_-50" />
                          <defs>
                            <clipPath id="recharts1-clip">
                              <rect x="32" y="8" height="172" width="376" />
                            </clipPath>
                          </defs>
                          <g class="chart-zIndex-layer_100" />
                          <g class="chart-zIndex-layer_200" />
                          <g class="chart-zIndex-layer_300">
                            <g class="chart-layer chart-bar" id="recharts-bar-_r_0_">
                              <g class="chart-layer chart-bar-rectangles">
                                <g class="chart-layer">
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-runs)" name="undefined" x="33.2533" y="115.0222" width="10" height="64.9778" class="chart-rectangle" d="M33.2533,119.0222A 4,4,0,0,1,37.2533,115.0222L 39.2533,115.0222A 4,4,0,0,1,
        43.2533,119.0222L 43.2533,180L 33.2533,180Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-runs)" name="undefined" x="45.7867" y="61.5111" width="10" height="118.4889" class="chart-rectangle" d="M45.7867,65.5111A 4,4,0,0,1,49.7867,61.5111L 51.7867,61.5111A 4,4,0,0,1,
        55.7867,65.5111L 55.7867,180L 45.7867,180Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-runs)" name="undefined" x="58.32" y="80.6222" width="10" height="99.3778" class="chart-rectangle" d="M58.32,84.6222A 4,4,0,0,1,62.32,80.6222L 64.32,80.6222A 4,4,0,0,1,
        68.32,84.6222L 68.32,180L 58.32,180Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-runs)" name="undefined" x="83.3867" y="80.6222" width="10" height="99.3778" class="chart-rectangle" d="M83.3867,84.6222A 4,4,0,0,1,87.3867,80.6222L 89.3867,80.6222A 4,4,0,0,1,
        93.3867,84.6222L 93.3867,180L 83.3867,180Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-runs)" name="undefined" x="95.92" y="157.0667" width="10" height="22.9333" class="chart-rectangle" d="M95.92,161.0667A 4,4,0,0,1,99.92,157.0667L 101.92,157.0667A 4,4,0,0,1,
        105.92,161.0667L 105.92,180L 95.92,180Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-runs)" name="undefined" x="146.0533" y="99.7333" width="10" height="80.2667" class="chart-rectangle" d="M146.0533,103.7333A 4,4,0,0,1,150.0533,99.7333L 152.0533,99.7333A 4,4,0,0,1,
        156.0533,103.7333L 156.0533,180L 146.0533,180Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-runs)" name="undefined" x="171.12" y="42.4" width="10" height="137.6" class="chart-rectangle" d="M171.12,46.4A 4,4,0,0,1,175.12,42.4L 177.12,42.4A 4,4,0,0,1,
        181.12,46.4L 181.12,180L 171.12,180Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-runs)" name="undefined" x="183.6533" y="111.2" width="10" height="68.8" class="chart-rectangle" d="M183.6533,115.2A 4,4,0,0,1,187.6533,111.2L 189.6533,111.2A 4,4,0,0,1,
        193.6533,115.2L 193.6533,180L 183.6533,180Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-runs)" name="undefined" x="196.1867" y="137.9556" width="10" height="42.0444" class="chart-rectangle" d="M196.1867,141.9556A 4,4,0,0,1,200.1867,137.9556L 202.1867,137.9556A 4,4,0,0,1,
        206.1867,141.9556L 206.1867,180L 196.1867,180Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-runs)" name="undefined" x="221.2533" y="137.9556" width="10" height="42.0444" class="chart-rectangle" d="M221.2533,141.9556A 4,4,0,0,1,225.2533,137.9556L 227.2533,137.9556A 4,4,0,0,1,
        231.2533,141.9556L 231.2533,180L 221.2533,180Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-runs)" name="undefined" x="233.7867" y="65.3333" width="10" height="114.6667" class="chart-rectangle" d="M233.7867,69.3333A 4,4,0,0,1,237.7867,65.3333L 239.7867,65.3333A 4,4,0,0,1,
        243.7867,69.3333L 243.7867,180L 233.7867,180Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-runs)" name="undefined" x="246.32" y="103.5556" width="10" height="76.4444" class="chart-rectangle" d="M246.32,107.5556A 4,4,0,0,1,250.32,103.5556L 252.32,103.5556A 4,4,0,0,1,
        256.32,107.5556L 256.32,180L 246.32,180Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-runs)" name="undefined" x="283.92" y="92.0889" width="10" height="87.9111" class="chart-rectangle" d="M283.92,96.0889A 4,4,0,0,1,287.92,92.0889L 289.92,92.0889A 4,4,0,0,1,
        293.92,96.0889L 293.92,180L 283.92,180Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-runs)" name="undefined" x="296.4533" y="153.2444" width="10" height="26.7556" class="chart-rectangle" d="M296.4533,157.2444A 4,4,0,0,1,300.4533,153.2444L 302.4533,153.2444A 4,4,0,0,1,
        306.4533,157.2444L 306.4533,180L 296.4533,180Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-runs)" name="undefined" x="308.9867" y="137.9556" width="10" height="42.0444" class="chart-rectangle" d="M308.9867,141.9556A 4,4,0,0,1,312.9867,137.9556L 314.9867,137.9556A 4,4,0,0,1,
        318.9867,141.9556L 318.9867,180L 308.9867,180Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-runs)" name="undefined" x="321.52" y="92.0889" width="10" height="87.9111" class="chart-rectangle" d="M321.52,96.0889A 4,4,0,0,1,325.52,92.0889L 327.52,92.0889A 4,4,0,0,1,
        331.52,96.0889L 331.52,180L 321.52,180Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-runs)" name="undefined" x="334.0533" y="107.3778" width="10" height="72.6222" class="chart-rectangle" d="M334.0533,111.3778A 4,4,0,0,1,338.0533,107.3778L 340.0533,107.3778A 4,4,0,0,1,
        344.0533,111.3778L 344.0533,180L 334.0533,180Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-runs)" name="undefined" x="346.5867" y="118.8444" width="10" height="61.1556" class="chart-rectangle" d="M346.5867,122.8444A 4,4,0,0,1,350.5867,118.8444L 352.5867,118.8444A 4,4,0,0,1,
        356.5867,122.8444L 356.5867,180L 346.5867,180Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-runs)" name="undefined" x="359.12" y="157.0667" width="10" height="22.9333" class="chart-rectangle" d="M359.12,161.0667A 4,4,0,0,1,363.12,157.0667L 365.12,157.0667A 4,4,0,0,1,
        369.12,161.0667L 369.12,180L 359.12,180Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-runs)" name="undefined" x="371.6533" y="72.9778" width="10" height="107.0222" class="chart-rectangle" d="M371.6533,76.9778A 4,4,0,0,1,375.6533,72.9778L 377.6533,72.9778A 4,4,0,0,1,
        381.6533,76.9778L 381.6533,180L 371.6533,180Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-runs)" name="undefined" x="384.1867" y="95.9111" width="10" height="84.0889" class="chart-rectangle" d="M384.1867,99.9111A 4,4,0,0,1,388.1867,95.9111L 390.1867,95.9111A 4,4,0,0,1,
        394.1867,99.9111L 394.1867,180L 384.1867,180Z" />
                                    </g>
                                  </g>
                                  <g class="chart-layer chart-bar-rectangle">
                                    <g class="chart-layer chart-inactive-bar">
                                      <path fill="var(--color-runs)" name="undefined" x="396.72" y="145.6" width="10" height="34.4" class="chart-rectangle" d="M396.72,149.6A 4,4,0,0,1,400.72,145.6L 402.72,145.6A 4,4,0,0,1,
        406.72,149.6L 406.72,180L 396.72,180Z" />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                          <g class="chart-zIndex-layer_400" />
                          <g class="chart-zIndex-layer_500">
                            <g class="chart-layer chart-cartesian-axis chart-xAxis xAxis">
                              <g class="chart-cartesian-axis-ticks chart-xAxis-ticks">
                                <g class="chart-cartesian-axis-tick-lines chart-xAxis-tick-lines">
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
                                <text height="30" width="376" stroke="none" x="38.266666666666666" y="196" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                  <tspan x="38.266666666666666">1 Dec</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text height="30" width="376" stroke="none" x="126" y="196" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                  <tspan x="126">8</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text height="30" width="376" stroke="none" x="213.73333333333335" y="196" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                  <tspan x="213.73333333333335">15</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text height="30" width="376" stroke="none" x="301.46666666666664" y="196" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                  <tspan x="301.46666666666664">22</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text height="30" width="376" stroke="none" x="401.7333333333333" y="196" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                  <tspan x="401.7333333333333">30</tspan>
                                </text>
                              </g>
                            </g>
                            <g class="chart-cartesian-axis-tick-labels chart-yAxis-tick-labels">
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text width="32" height="172" stroke="none" x="24" y="180" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                  <tspan x="24">0</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text width="32" height="172" stroke="none" x="24" y="122.66666666666669" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                  <tspan x="24">15</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text width="32" height="172" stroke="none" x="24" y="65.33333333333334" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                  <tspan x="24">30</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text width="32" height="172" stroke="none" x="24" y="9" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                  <tspan x="24">45</tspan>
                                </text>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="bg-(--ui-bg-muted)/25 overflow-hidden rounded-xl border px-5 py-5 sm:px-6 border-default">
              <div class="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p class="text-muted text-[11px] font-medium tracking-wide uppercase">Tokens</p>
                  <div class="mt-1 flex items-center gap-3">
                    <p class="text-xl font-semibold tracking-tight tabular-nums sm:text-2xl text-highlighted">667.7M tokens</p>
                    <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 hover:bg-primary/80 border-success/15 bg-success/10 text-success shadow-none dark:text-success">+9.4%</div>
                  </div>
                  <p class="text-muted mt-1 text-xs">Input and output tokens over 31 days</p>
                </div>
              </div>
              <div class="mt-5">
                <!-- Chart 3: SVG geometry and theme tokens are local to this page -->
                <div data-slot="chart" class="[&amp;_.chart-cartesian-axis-tick_text]:fill-(--ui-text-muted) [&amp;_.chart-cartesian-grid_line]:stroke-(--ui-border)/50 [&amp;_.chart-curve.chart-tooltip-cursor]:stroke-(--ui-border) [&amp;_.chart-polar-grid_]:stroke-(--ui-border) [&amp;_.chart-radial-bar-background-sector]:fill-(--ui-bg-muted) [&amp;_.chart-rectangle.chart-tooltip-cursor]:fill-(--ui-bg-muted) [&amp;_.chart-reference-line_]:stroke-(--ui-border) flex min-h-0 min-w-0 justify-center text-xs [&amp;_.chart-dot]:stroke-transparent [&amp;_.chart-layer]:outline-hidden [&amp;_.chart-sector]:outline-hidden [&amp;_.chart-sector]:stroke-transparent [&amp;_.chart-surface]:outline-hidden aspect-auto h-[210px] w-full" style=";--color-tokens:var(--ui-success)" role="img" aria-label="Analytics chart">
                  <!-- Chart 4: SVG geometry and theme tokens are local to this page -->
                  <div class="chart-responsive-container" style="width:100%;height:100%;min-width:1px;min-height:1px;--color-tokens:var(--ui-success);width:100%;height:210px;min-width:0" role="img" aria-label="Analytics chart">
                    <div style="width:0;height:0;overflow:visible">
                      <div width="412" height="210" class="chart-wrapper" style="position: relative; cursor: default; width: 412px; height: 210px;">
                        <svg role="application" class="chart-surface" width="100%" height="100%" viewBox="0 0 412 210" style="width: 100%; height: 100%; display: block;" preserveAspectRatio="none">
                          <title />
                          <desc />
                          <g class="chart-zIndex-layer_-100">
                            <g class="chart-cartesian-grid">
                              <g class="chart-cartesian-grid-horizontal">
                                <line stroke="var(--ui-border)" stroke-dasharray="3 5" fill="none" x="32" y="8" width="376" height="172" x1="32" y1="180" x2="408" y2="180" />
                                <line stroke="var(--ui-border)" stroke-dasharray="3 5" fill="none" x="32" y="8" width="376" height="172" x1="32" y1="137" x2="408" y2="137" />
                                <line stroke="var(--ui-border)" stroke-dasharray="3 5" fill="none" x="32" y="8" width="376" height="172" x1="32" y1="94" x2="408" y2="94" />
                                <line stroke="var(--ui-border)" stroke-dasharray="3 5" fill="none" x="32" y="8" width="376" height="172" x1="32" y1="51" x2="408" y2="51" />
                                <line stroke="var(--ui-border)" stroke-dasharray="3 5" fill="none" x="32" y="8" width="376" height="172" x1="32" y1="8" x2="408" y2="8" />
                              </g>
                            </g>
                          </g>
                          <g class="chart-zIndex-layer_-50" />
                          <defs>
                            <clipPath id="recharts2-clip">
                              <rect x="32" y="8" height="172" width="376" />
                            </clipPath>
                          </defs>
                          <defs>
                            <linearGradient id="profile-token-fill" x1="0" x2="0" y1="0" y2="1">
                              <stop offset="0%" stop-color="var(--color-tokens)" stop-opacity="0.3" />
                              <stop offset="92%" stop-color="var(--color-tokens)" stop-opacity="0.02" />
                            </linearGradient>
                          </defs>
                          <g class="chart-zIndex-layer_100">
                            <g class="chart-layer chart-area">
                              <g class="chart-layer">
                                <path stroke-width="2.25" fill="url(#profile-token-fill)" fill-opacity="0.6" height="172" stroke="none" width="376" id="recharts-area-_r_1_" class="chart-curve chart-area-area" d="M32,68.2C36.178,71.783,40.356,75.367,44.533,89.7C48.711,104.033,52.889,146.317,57.067,156.35C61.244,166.383,65.422,171.4,69.6,171.4C73.778,171.4,77.956,171.4,82.133,171.4C86.311,171.4,90.489,171.4,94.667,171.4C98.844,171.4,103.022,171.4,107.2,171.4C111.378,171.4,115.556,171.4,119.733,171.4C123.911,171.4,128.089,171.4,132.267,171.4C136.444,171.4,140.622,171.4,144.8,171.4C148.978,171.4,153.156,171.4,157.333,171.4C161.511,171.4,165.689,171.4,169.867,171.4C174.044,171.4,178.222,171.4,182.4,171.4C186.578,171.4,190.756,171.4,194.933,171.4C199.111,171.4,203.289,76.8,207.467,76.8C211.644,76.8,215.822,152.767,220,158.5C224.178,164.233,228.356,164.95,232.533,167.1C236.711,169.25,240.889,171.4,245.067,171.4C249.244,171.4,253.422,156.35,257.6,156.35C261.778,156.35,265.956,171.4,270.133,171.4C274.311,171.4,278.489,171.4,282.667,171.4C286.844,171.4,291.022,49.567,295.2,33.8C299.378,18.033,303.556,10.15,307.733,10.15C311.911,10.15,316.089,13.733,320.267,20.9C324.444,28.067,328.622,49.208,332.8,70.35C336.978,91.492,341.156,134.85,345.333,147.75C349.511,160.65,353.689,167.1,357.867,167.1C362.044,167.1,366.222,122.308,370.4,109.05C374.578,95.792,378.756,97.225,382.933,87.55C387.111,77.875,391.289,51,395.467,51C399.644,51,403.822,61.75,408,72.5L408,180C403.822,180,399.644,180,395.467,180C391.289,180,387.111,180,382.933,180C378.756,180,374.578,180,370.4,180C366.222,180,362.044,180,357.867,180C353.689,180,349.511,180,345.333,180C341.156,180,336.978,180,332.8,180C328.622,180,324.444,180,320.267,180C316.089,180,311.911,180,307.733,180C303.556,180,299.378,180,295.2,180C291.022,180,286.844,180,282.667,180C278.489,180,274.311,180,270.133,180C265.956,180,261.778,180,257.6,180C253.422,180,249.244,180,245.067,180C240.889,180,236.711,180,232.533,180C228.356,180,224.178,180,220,180C215.822,180,211.644,180,207.467,180C203.289,180,199.111,180,194.933,180C190.756,180,186.578,180,182.4,180C178.222,180,174.044,180,169.867,180C165.689,180,161.511,180,157.333,180C153.156,180,148.978,180,144.8,180C140.622,180,136.444,180,132.267,180C128.089,180,123.911,180,119.733,180C115.556,180,111.378,180,107.2,180C103.022,180,98.844,180,94.667,180C90.489,180,86.311,180,82.133,180C77.956,180,73.778,180,69.6,180C65.422,180,61.244,180,57.067,180C52.889,180,48.711,180,44.533,180C40.356,180,36.178,180,32,180Z" />
                                <path stroke-width="2.25" fill="none" fill-opacity="0.6" height="172" stroke="var(--color-tokens)" width="376" class="chart-curve chart-area-curve" d="M32,68.2C36.178,71.783,40.356,75.367,44.533,89.7C48.711,104.033,52.889,146.317,57.067,156.35C61.244,166.383,65.422,171.4,69.6,171.4C73.778,171.4,77.956,171.4,82.133,171.4C86.311,171.4,90.489,171.4,94.667,171.4C98.844,171.4,103.022,171.4,107.2,171.4C111.378,171.4,115.556,171.4,119.733,171.4C123.911,171.4,128.089,171.4,132.267,171.4C136.444,171.4,140.622,171.4,144.8,171.4C148.978,171.4,153.156,171.4,157.333,171.4C161.511,171.4,165.689,171.4,169.867,171.4C174.044,171.4,178.222,171.4,182.4,171.4C186.578,171.4,190.756,171.4,194.933,171.4C199.111,171.4,203.289,76.8,207.467,76.8C211.644,76.8,215.822,152.767,220,158.5C224.178,164.233,228.356,164.95,232.533,167.1C236.711,169.25,240.889,171.4,245.067,171.4C249.244,171.4,253.422,156.35,257.6,156.35C261.778,156.35,265.956,171.4,270.133,171.4C274.311,171.4,278.489,171.4,282.667,171.4C286.844,171.4,291.022,49.567,295.2,33.8C299.378,18.033,303.556,10.15,307.733,10.15C311.911,10.15,316.089,13.733,320.267,20.9C324.444,28.067,328.622,49.208,332.8,70.35C336.978,91.492,341.156,134.85,345.333,147.75C349.511,160.65,353.689,167.1,357.867,167.1C362.044,167.1,366.222,122.308,370.4,109.05C374.578,95.792,378.756,97.225,382.933,87.55C387.111,77.875,391.289,51,395.467,51C399.644,51,403.822,61.75,408,72.5" />
                              </g>
                            </g>
                          </g>
                          <g class="chart-zIndex-layer_200" />
                          <g class="chart-zIndex-layer_300" />
                          <g class="chart-zIndex-layer_400" />
                          <g class="chart-zIndex-layer_500">
                            <g class="chart-layer chart-cartesian-axis chart-xAxis xAxis">
                              <g class="chart-cartesian-axis-ticks chart-xAxis-ticks">
                                <g class="chart-cartesian-axis-tick-lines chart-xAxis-tick-lines">
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
                                <text height="30" width="376" stroke="none" x="32" y="196" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                  <tspan x="32">Jun 14</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text height="30" width="376" stroke="none" x="119.73333333333333" y="196" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                  <tspan x="119.73333333333333">+7d</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text height="30" width="376" stroke="none" x="207.46666666666667" y="196" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                  <tspan x="207.46666666666667">+14d</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text height="30" width="376" stroke="none" x="295.2" y="196" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                  <tspan x="295.2">+21d</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text height="30" width="376" stroke="none" x="395.0390625" y="196" class="chart-text chart-cartesian-axis-tick-value" text-anchor="middle" fill="var(--ui-text-muted)">
                                  <tspan x="395.0390625">Today</tspan>
                                </text>
                              </g>
                            </g>
                            <g class="chart-cartesian-axis-tick-labels chart-yAxis-tick-labels">
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text width="42" height="172" stroke="none" x="24" y="180" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                  <tspan x="24">0M</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text width="42" height="172" stroke="none" x="24" y="137" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                  <tspan x="24">20M</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text width="42" height="172" stroke="none" x="24" y="94" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                  <tspan x="24">40M</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text width="42" height="172" stroke="none" x="24" y="51" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                  <tspan x="24">60M</tspan>
                                </text>
                              </g>
                              <g class="chart-layer chart-cartesian-axis-tick-label">
                                <text width="42" height="172" stroke="none" x="24" y="9" class="chart-text chart-cartesian-axis-tick-value" text-anchor="end" fill="var(--ui-text-muted)">
                                  <tspan x="24">80M</tspan>
                                </text>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="flex flex-wrap items-center justify-between gap-3 py-8">
            <div class="flex items-center gap-3">
              <span class="bg-muted flex size-9 items-center justify-center rounded-lg">
                <UIcon name="i-lucide-bot" class="size-4" />
              </span>
              <div>
                <p class="text-sm font-medium">Agent activity</p>
                <p class="text-muted text-xs">Review the runs behind these profile totals.</p>
              </div>
            </div>
            <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" to="/ai-chat/agent-activity">
              View activity
              <UIcon name="i-lucide-arrow-up-right" class="size-4" />
            </NuxtLink>
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

.chart-container { min-width: 0; }
.chart-wrapper { width: 100% !important; }
.chart-responsive-container > div { width: 100% !important; height: 100% !important; }
svg.chart-surface { width: 100%; overflow: visible; }
.chart-cartesian-axis-tick text { fill: var(--ui-text-muted); font-size: 11px; }
.chart-cartesian-grid line { stroke: var(--ui-border); }
</style>
