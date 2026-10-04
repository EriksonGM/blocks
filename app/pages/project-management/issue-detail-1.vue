<!-- Page: /project-management/issue-detail-1 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Issue Detail 1 · Blocks Admin" })

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/issue-detail-1">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="bg-default text-highlighted h-[calc(100vh-4rem)] overflow-hidden text-sm">
          <div class="bg-default grid h-full grid-cols-1 overflow-hidden xl:grid-cols-[minmax(0,1fr)_360px]">
            <div class="min-h-0 min-w-0">
              <main class="h-full min-h-0 overflow-y-auto">
                <div class="mx-auto flex max-w-[900px] flex-col gap-8 px-5 py-8 sm:px-8">
                  <div class="text-muted flex min-w-0 flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                    <div class="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
                      <span class="text-highlighted font-medium">Redwood Flow</span>
                      <span class="text-(--ui-border)">/</span>
                      <span>RFC-101</span>
                      <span class="text-(--ui-border)">/</span>
                      <span>RFC-109 (Issue)</span>
                    </div>
                    <div class="flex w-full min-w-0 items-center justify-between gap-3 sm:ml-auto sm:w-auto sm:shrink-0 sm:justify-end">
                      <div class="flex min-w-0 items-center gap-3">
                        <UIcon name="i-lucide-github" class="size-4 shrink-0" />
                        <div class="flex min-w-0 items-center gap-2">
                          <span class="truncate">planning-ui</span>
                          <span class="text-highlighted shrink-0 font-semibold">#8744</span>
                        </div>
                      </div>
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-9 shrink-0 xl:hidden" aria-label="Open issue details" type="button" @click="openAction(&quot;Open issue details&quot;)">
                        <UIcon name="i-lucide-panel-right" class="size-4" />
                      </UButton>
                    </div>
                  </div>
                  <div class="bg-default w-fit rounded-md border px-3 py-2.5 shadow-xs border-default">
                    <div class="text-muted flex items-center gap-2.5 text-sm">
                      <UIcon name="i-lucide-circle" class="text-primary size-4" />
                      <span>RFC-101</span>
                      <span>Timeline architecture</span>
                      <span class="border-l pl-3 border-default">65</span>
                      <UIcon name="i-lucide-grid-2x2" class="size-4" />
                    </div>
                  </div>
                  <section class="flex max-w-[760px] flex-col gap-6">
                    <h1 class="text-xl font-medium tracking-normal text-highlighted">Bug: timeline density loses issue context</h1>
                    <div class="text-muted flex flex-col gap-5 text-[15px] leading-6">
                      <p>When the project timeline is filtered down to a focused sprint, the issue bars keep their dates but lose the parent issue context. The result is still editable, but it is difficult to tell whether a row belongs to the parent planning track or to a nested follow-up issue.</p>
                      <p>Here you can see the nested timeline issue still appears in the direct planning view, but the same issue loses its parent marker after switching to the compact calendar view:</p>
                    </div>
                  </section>
                  <section class="flex max-w-[820px] flex-col gap-5">
                    <div class="grid gap-4">
                      <figure class="bg-default overflow-hidden rounded-lg border border-default">
                        <img alt="Timeline UI screenshot showing missing parent context in compact timeline view" width="1440" height="810" class="w-full object-cover" style="color:transparent" src="/reference/8883a20bdfbf861f.png" loading="lazy" />
                        <figcaption class="text-muted border-t px-4 py-2.5 text-xs font-medium border-default">Compact timeline loses parent context</figcaption>
                      </figure>
                      <figure class="bg-default overflow-hidden rounded-lg border border-default">
                        <img alt="Calendar UI screenshot showing missing parent context in compact calendar view" width="1440" height="810" class="w-full object-cover" style="color:transparent" src="/reference/c8ce880658a49c03.png" loading="lazy" />
                        <figcaption class="text-muted border-t px-4 py-2.5 text-xs font-medium border-default">Calendar view keeps the issue but drops hierarchy</figcaption>
                      </figure>
                    </div>
                  </section>
                  <section class="flex max-w-[820px] flex-col gap-6">
                    <div class="flex flex-col gap-3">
                      <div class="grid gap-2 md:grid-cols-3">
                        <div class="flex items-center justify-between rounded-md border px-3 py-2 border-default">
                          <div class="flex min-w-0 items-center gap-3">
                            <div class="flex shrink-0 items-center justify-center rounded-lg">
                              <img alt="PDF" width="36" height="36" class="rounded" style="color:transparent" src="/reference/2505767c870f019f.png" loading="lazy" />
                            </div>
                            <div class="min-w-0">
                              <div class="text-highlighted truncate text-sm font-medium">Timeline architecture notes.pdf</div>
                              <div class="text-muted text-sm">1.8 MB</div>
                            </div>
                          </div>
                          <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-10 w-10 rounded-xl" aria-label="Download Timeline architecture notes.pdf" to="#">
                            <UIcon name="i-lucide-download" class="h-4 w-4" />
                          </NuxtLink>
                        </div>
                        <div class="flex items-center justify-between rounded-md border px-3 py-2 border-default">
                          <div class="flex min-w-0 items-center gap-3">
                            <div class="flex shrink-0 items-center justify-center rounded-lg">
                              <img alt="Figma" width="36" height="36" class="rounded" style="color:transparent" src="/reference/8801d809f883de0b.png" loading="lazy" />
                            </div>
                            <div class="min-w-0">
                              <div class="text-highlighted truncate text-sm font-medium">Interaction states.fig</div>
                              <div class="text-muted text-sm">3.4 MB</div>
                            </div>
                          </div>
                          <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-10 w-10 rounded-xl" aria-label="Download Interaction states.fig" to="#">
                            <UIcon name="i-lucide-download" class="h-4 w-4" />
                          </NuxtLink>
                        </div>
                        <div class="flex items-center justify-between rounded-md border px-3 py-2 border-default">
                          <div class="flex min-w-0 items-center gap-3">
                            <div class="flex shrink-0 items-center justify-center rounded-lg">
                              <img alt="ZIP" width="36" height="36" class="rounded" style="color:transparent" src="/reference/44d2cc690dcde2bd.png" loading="lazy" />
                            </div>
                            <div class="min-w-0">
                              <div class="text-highlighted truncate text-sm font-medium">Review packet.zip</div>
                              <div class="text-muted text-sm">7.2 MB</div>
                            </div>
                          </div>
                          <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-10 w-10 rounded-xl" aria-label="Download Review packet.zip" to="#">
                            <UIcon name="i-lucide-download" class="h-4 w-4" />
                          </NuxtLink>
                        </div>
                      </div>
                    </div>
                    <UButton color="neutral" variant="ghost" class="text-highlighted flex w-fit items-center gap-2.5 text-[15px]" aria-label="Add sub-issue" type="button" @click="openAction(&quot;Add sub-issue&quot;)">
                      <UIcon name="i-lucide-plus" class="size-5" />
                      Add sub-issue
                    </UButton>
                    <div class="divide-y rounded-md border border-default">
                      <div class="grid grid-cols-[92px_minmax(0,1fr)_120px] items-center gap-3 px-4 py-3">
                        <span class="text-muted text-xs font-semibold">RFC-112</span>
                        <span class="truncate text-sm font-medium">Normalize parent markers across timeline rows</span>
                        <span class="text-muted justify-self-end text-xs">In Progress</span>
                      </div>
                      <div class="grid grid-cols-[92px_minmax(0,1fr)_120px] items-center gap-3 px-4 py-3">
                        <span class="text-muted text-xs font-semibold">RFC-118</span>
                        <span class="truncate text-sm font-medium">Render image attachments in issue activity</span>
                        <span class="text-muted justify-self-end text-xs">Todo</span>
                      </div>
                      <div class="grid grid-cols-[92px_minmax(0,1fr)_120px] items-center gap-3 px-4 py-3">
                        <span class="text-muted text-xs font-semibold">RFC-121</span>
                        <span class="truncate text-sm font-medium">Check compact rail behavior in admin shell</span>
                        <span class="text-muted justify-self-end text-xs">Under review</span>
                      </div>
                    </div>
                  </section>
                  <section class="max-w-[820px]">
                    <div class="mb-4 flex items-center justify-between gap-4 border-b pb-3 border-default">
                      <div class="flex items-center gap-3">
                        <UIcon name="i-lucide-history" class="size-5" />
                        <h2 class="text-lg font-medium tracking-normal sm:text-xl text-highlighted">Activity</h2>
                      </div>
                      <div class="flex shrink-0 items-center gap-2 sm:gap-4">
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default py-2 h-9 px-3 sm:h-10 sm:px-4" aria-label="All" type="button" @click="openAction(&quot;All&quot;)">
                          All
                        </UButton>
                        <UIcon name="i-lucide-list-filter" class="size-5" />
                      </div>
                    </div>
                    <div class="flex flex-col divide-y">
                      <div class="group hover:bg-(--ui-bg-muted)/60 focus-within:bg-(--ui-bg-muted)/60 relative flex gap-3 rounded-md px-0 py-3 transition-colors sm:gap-4 sm:px-4">
                        <span class="relative flex overflow-hidden size-9 shrink-0 rounded-md">
                          <img class="aspect-square h-full w-full" alt="Maya Chen" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                        </span>
                        <div class="min-w-0 flex-1">
                          <div class="flex min-w-0 flex-col gap-0.5 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-2">
                            <span class="font-semibold">Maya Chen</span>
                            <span class="text-muted text-sm">at 28/04, 19:54</span>
                          </div>
                          <div class="mt-1.5 flex max-w-[62ch] items-start gap-2 text-sm leading-5">
                            <UIcon name="i-lucide-circle-user" class="text-muted mt-0.5 size-4 shrink-0" />
                            <span class="min-w-0">Unset assignee</span>
                          </div>
                        </div>
                        <div class="bg-default mt-0 hidden h-10 shrink-0 items-center gap-3 rounded-md border px-3 opacity-0 shadow-xl transition-opacity group-focus-within:opacity-100 group-hover:opacity-100 md:flex border-default">
                          <UIcon name="i-lucide-smile-plus" class="size-4" />
                          <UIcon name="i-lucide-bell" class="size-4" />
                          <UIcon name="i-lucide-star" class="size-4" />
                          <UIcon name="i-lucide-message-circle" class="size-4" />
                          <UIcon name="i-lucide-ellipsis-vertical" class="size-4" />
                        </div>
                      </div>
                      <div class="group hover:bg-(--ui-bg-muted)/60 focus-within:bg-(--ui-bg-muted)/60 relative flex gap-3 rounded-md px-0 py-3 transition-colors sm:gap-4 sm:px-4">
                        <span class="relative flex overflow-hidden size-9 shrink-0 rounded-md">
                          <img class="aspect-square h-full w-full" alt="Aarav Mehta" src="/reference/247ac7c76922347b.png" loading="lazy" />
                        </span>
                        <div class="min-w-0 flex-1">
                          <div class="flex min-w-0 flex-col gap-0.5 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-2">
                            <span class="font-semibold">Aarav Mehta</span>
                            <span class="text-muted text-sm">at 28/04, 19:54</span>
                          </div>
                          <div class="mt-1.5 flex max-w-[62ch] items-start gap-2 text-sm leading-5">
                            <UIcon name="i-lucide-clock-3" class="text-muted mt-0.5 size-4 shrink-0" />
                            <span class="min-w-0">Status set to Under review</span>
                          </div>
                        </div>
                        <div class="bg-default mt-0 hidden h-10 shrink-0 items-center gap-3 rounded-md border px-3 opacity-0 shadow-xl transition-opacity group-focus-within:opacity-100 group-hover:opacity-100 md:flex border-default">
                          <UIcon name="i-lucide-smile-plus" class="size-4" />
                          <UIcon name="i-lucide-bell" class="size-4" />
                          <UIcon name="i-lucide-star" class="size-4" />
                          <UIcon name="i-lucide-message-circle" class="size-4" />
                          <UIcon name="i-lucide-ellipsis-vertical" class="size-4" />
                        </div>
                      </div>
                      <div class="group hover:bg-(--ui-bg-muted)/60 focus-within:bg-(--ui-bg-muted)/60 relative flex gap-3 rounded-md px-0 py-3 transition-colors sm:gap-4 sm:px-4">
                        <span class="relative flex overflow-hidden size-9 shrink-0 rounded-md">
                          <img class="aspect-square h-full w-full" alt="Aarav Mehta" src="/reference/247ac7c76922347b.png" loading="lazy" />
                        </span>
                        <div class="min-w-0 flex-1">
                          <div class="flex min-w-0 flex-col gap-0.5 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-2">
                            <span class="font-semibold">Aarav Mehta</span>
                            <span class="text-muted text-sm">at 28/04, 19:42</span>
                          </div>
                          <div class="mt-1.5 flex max-w-[62ch] items-start gap-2 text-sm leading-5">
                            <UIcon name="i-lucide-circle-user" class="text-muted mt-0.5 size-4 shrink-0" />
                            <span class="min-w-0">Assignee set to Aarav Mehta</span>
                          </div>
                        </div>
                        <div class="bg-default mt-0 hidden h-10 shrink-0 items-center gap-3 rounded-md border px-3 opacity-0 shadow-xl transition-opacity group-focus-within:opacity-100 group-hover:opacity-100 md:flex border-default">
                          <UIcon name="i-lucide-smile-plus" class="size-4" />
                          <UIcon name="i-lucide-bell" class="size-4" />
                          <UIcon name="i-lucide-star" class="size-4" />
                          <UIcon name="i-lucide-message-circle" class="size-4" />
                          <UIcon name="i-lucide-ellipsis-vertical" class="size-4" />
                        </div>
                      </div>
                      <div class="group hover:bg-(--ui-bg-muted)/60 focus-within:bg-(--ui-bg-muted)/60 relative flex gap-3 rounded-md px-0 py-3 transition-colors sm:gap-4 sm:px-4">
                        <span class="relative flex overflow-hidden size-9 shrink-0 rounded-md">
                          <img class="aspect-square h-full w-full" alt="Maya Chen" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                        </span>
                        <div class="min-w-0 flex-1">
                          <div class="flex min-w-0 flex-col gap-0.5 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-2">
                            <span class="font-semibold">Maya Chen</span>
                            <span class="text-muted text-sm">left a comment at 28/04, 19:38</span>
                          </div>
                          <div class="mt-1.5 flex max-w-[62ch] items-start gap-2 text-sm leading-5">
                            <UIcon name="i-lucide-message-circle" class="text-muted mt-0.5 size-4 shrink-0" />
                            <span class="min-w-0">Also - the timeline freezes when I open any issue that is using a compact nested date range.</span>
                          </div>
                        </div>
                        <div class="bg-default mt-0 hidden h-10 shrink-0 items-center gap-3 rounded-md border px-3 opacity-0 shadow-xl transition-opacity group-focus-within:opacity-100 group-hover:opacity-100 md:flex border-default">
                          <UIcon name="i-lucide-smile-plus" class="size-4" />
                          <UIcon name="i-lucide-bell" class="size-4" />
                          <UIcon name="i-lucide-star" class="size-4" />
                          <UIcon name="i-lucide-message-circle" class="size-4" />
                          <UIcon name="i-lucide-ellipsis-vertical" class="size-4" />
                        </div>
                      </div>
                      <div class="group hover:bg-(--ui-bg-muted)/60 focus-within:bg-(--ui-bg-muted)/60 relative flex gap-3 rounded-md px-0 py-3 transition-colors sm:gap-4 sm:px-4">
                        <span class="relative flex overflow-hidden size-9 shrink-0 rounded-md">
                          <span class="bg-muted flex h-full w-full items-center justify-center rounded-full">GH</span>
                        </span>
                        <div class="min-w-0 flex-1">
                          <div class="flex min-w-0 flex-col gap-0.5 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-2">
                            <span class="font-semibold">System</span>
                            <span class="text-muted text-sm">28/04, 19:37</span>
                          </div>
                          <div class="mt-1.5 flex max-w-[62ch] items-start gap-2 text-sm leading-5">
                            <UIcon name="i-lucide-github" class="text-muted mt-0.5 size-4 shrink-0" />
                            <span class="min-w-0">connected to Issue #8744 inside planning-ui</span>
                          </div>
                        </div>
                        <div class="bg-default mt-0 hidden h-10 shrink-0 items-center gap-3 rounded-md border px-3 opacity-0 shadow-xl transition-opacity group-focus-within:opacity-100 group-hover:opacity-100 md:flex border-default">
                          <UIcon name="i-lucide-smile-plus" class="size-4" />
                          <UIcon name="i-lucide-bell" class="size-4" />
                          <UIcon name="i-lucide-star" class="size-4" />
                          <UIcon name="i-lucide-message-circle" class="size-4" />
                          <UIcon name="i-lucide-ellipsis-vertical" class="size-4" />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </main>
            </div>
            <aside class="bg-default hidden min-h-0 overflow-y-auto border-l xl:block border-default">
              <section class="border-b px-7 py-5 border-default">
                <div class="grid grid-cols-[118px_minmax(0,1fr)] items-center gap-5 py-2.5">
                  <div class="text-muted text-sm font-normal">Status</div>
                  <div class="text-highlighted flex min-w-0 items-center gap-2 text-sm">
                    <UIcon name="i-lucide-clock-3" class="size-4 text-primary" />
                    <span class="text-muted truncate">Under review</span>
                  </div>
                </div>
                <div class="grid grid-cols-[118px_minmax(0,1fr)] items-center gap-5 py-2.5">
                  <div class="text-muted text-sm font-normal">Priority</div>
                  <div class="text-highlighted flex min-w-0 items-center gap-2 text-sm">
                    <UIcon name="i-lucide-flag" class="text-muted size-4" />
                    <span class="text-muted truncate">Medium</span>
                  </div>
                </div>
                <div class="grid grid-cols-[118px_minmax(0,1fr)] items-center gap-5 py-2.5">
                  <div class="text-muted text-sm font-normal">Created by</div>
                  <div class="text-highlighted flex min-w-0 items-center gap-2 text-sm">
                    <span class="relative flex shrink-0 overflow-hidden size-6 rounded-md">
                      <img class="aspect-square h-full w-full" alt="Maya Chen" src="/reference/9310a24e0d573ddb.png" loading="lazy" />
                    </span>
                    <span class="text-muted truncate">Maya Chen</span>
                  </div>
                </div>
                <div class="grid grid-cols-[118px_minmax(0,1fr)] items-center gap-5 py-2.5">
                  <div class="text-muted text-sm font-normal">Assignee</div>
                  <div class="text-highlighted flex min-w-0 items-center gap-2 text-sm">
                    <UIcon name="i-lucide-circle-user" class="text-muted size-4" />
                    <span class="text-muted truncate">Aarav Mehta</span>
                  </div>
                </div>
                <div class="grid grid-cols-[118px_minmax(0,1fr)] items-center gap-5 py-2.5">
                  <div class="text-muted text-sm font-normal">Labels</div>
                  <div class="text-highlighted flex min-w-0 items-center gap-2 text-sm">
                    <div class="inline-flex items-center border py-0.5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted h-7 rounded-full px-2.5 text-xs font-normal border-default">
                      <span class="bg-primary mr-2 size-2 rounded-full" />
                      bug
                    </div>
                  </div>
                </div>
              </section>
              <section class="border-b px-7 py-5 border-default">
                <div class="grid grid-cols-[118px_minmax(0,1fr)] items-center gap-5 py-2.5">
                  <div class="text-muted text-sm font-normal">Component</div>
                  <div class="text-highlighted flex min-w-0 items-center gap-2 text-sm">
                    <UIcon name="i-lucide-diamond" class="text-muted size-4" />
                    <span class="text-muted truncate">Timeline surfaces</span>
                  </div>
                </div>
                <div class="grid grid-cols-[118px_minmax(0,1fr)] items-center gap-5 py-2.5">
                  <div class="text-muted text-sm font-normal">Milestone</div>
                  <div class="text-highlighted flex min-w-0 items-center gap-2 text-sm">
                    <UIcon name="i-lucide-flag" class="text-muted size-4" />
                    <span class="text-muted truncate">Sprint 18</span>
                  </div>
                </div>
              </section>
              <section class="border-b px-7 py-5 border-default">
                <div class="grid grid-cols-[118px_minmax(0,1fr)] items-center gap-5 py-2.5">
                  <div class="text-muted text-sm font-normal">Task type</div>
                  <div class="text-highlighted flex min-w-0 items-center gap-2 text-sm">
                    <UIcon name="i-lucide-square-check-big" class="text-muted size-4" />
                    <span class="text-muted truncate">Issue</span>
                  </div>
                </div>
                <div class="grid grid-cols-[118px_minmax(0,1fr)] items-center gap-5 py-2.5">
                  <div class="text-muted text-sm font-normal">Estimation</div>
                  <div class="text-highlighted flex min-w-0 items-center gap-2 text-sm">
                    <span class="text-muted truncate">0h</span>
                  </div>
                </div>
                <div class="grid grid-cols-[118px_minmax(0,1fr)] items-center gap-5 py-2.5">
                  <div class="text-muted text-sm font-normal">Spent time</div>
                  <div class="text-highlighted flex min-w-0 items-center gap-2 text-sm">
                    <span class="text-muted truncate">0h</span>
                  </div>
                </div>
                <div class="grid grid-cols-[118px_minmax(0,1fr)] items-center gap-5 py-2.5">
                  <div class="text-muted text-sm font-normal">Remaining time</div>
                  <div class="text-highlighted flex min-w-0 items-center gap-2 text-sm">
                    <span class="text-muted truncate">0h</span>
                  </div>
                </div>
              </section>
              <section class="border-b px-7 py-5 border-default">
                <div class="grid grid-cols-[118px_minmax(0,1fr)] items-center gap-5 py-2.5">
                  <div class="text-muted text-sm font-normal">Repository</div>
                  <div class="text-highlighted flex min-w-0 items-center gap-2 text-sm">
                    <UIcon name="i-lucide-github" class="text-muted size-4" />
                    <span class="text-muted truncate">planning-ui</span>
                  </div>
                </div>
              </section>
              <section class="border-b px-7 py-5 border-default">
                <div class="grid grid-cols-[118px_minmax(0,1fr)] items-center gap-5 py-2.5">
                  <div class="text-muted text-sm font-normal">Status</div>
                  <div class="text-highlighted flex min-w-0 items-center gap-2 text-sm">
                    <span class="text-muted truncate">Status</span>
                  </div>
                </div>
              </section>
              <section class="border-b px-7 py-5 border-default">
                <div class="grid grid-cols-[118px_minmax(0,1fr)] items-center gap-5 py-2.5">
                  <div class="text-muted text-sm font-normal">Collaborators</div>
                  <div class="text-highlighted flex min-w-0 items-center gap-2 text-sm">
                    <UIcon name="i-lucide-users" class="text-muted size-4" />
                    <span class="text-muted truncate">2 members</span>
                  </div>
                </div>
              </section>
              <section class="border-b px-7 py-5 border-default">
                <div class="text-muted mb-4 text-sm">State History:</div>
                <div class="flex flex-col gap-4">
                  <div class="grid grid-cols-[140px_minmax(0,1fr)] items-center gap-4">
                    <div class="flex items-center gap-3">
                      <UIcon name="i-lucide-clock-3" class="text-primary size-4" />
                      <span class="text-sm">Under review</span>
                    </div>
                    <span class="text-muted text-sm">a year</span>
                  </div>
                  <div class="grid grid-cols-[140px_minmax(0,1fr)] items-center gap-4">
                    <div class="flex items-center gap-3">
                      <UIcon name="i-lucide-clock-3" class="text-primary size-4" />
                      <span class="text-sm">In Progress</span>
                    </div>
                    <span class="text-muted text-sm">12 minutes</span>
                  </div>
                  <div class="grid grid-cols-[140px_minmax(0,1fr)] items-center gap-4">
                    <div class="flex items-center gap-3">
                      <UIcon name="i-lucide-clock-3" class="text-primary size-4" />
                      <span class="text-sm">Todo</span>
                    </div>
                    <span class="text-muted text-sm">4 minutes</span>
                  </div>
                </div>
              </section>
            </aside>
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
