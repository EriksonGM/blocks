<!-- Page: /project-management/project-detail-1 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Project Detail 1 · Blocks Admin" })

const toast = useToast()

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "Timeline",
    "value": "0"
  },
  {
    "label": "Tasks",
    "value": "1"
  },
  {
    "label": "Issues",
    "value": "2"
  },
  {
    "label": "Activity",
    "value": "3"
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

async function copyValue(value: string) {
  await navigator.clipboard.writeText(value)
  toast.add({ title: 'Copied to clipboard', color: 'success' })
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/project-detail-1">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default flex h-full min-h-0 flex-1 flex-col overflow-hidden">
          <div class="flex min-h-0 w-full max-w-full flex-1 flex-col overflow-x-hidden overflow-y-auto xl:flex-row xl:overflow-hidden">
            <div class="flex max-w-full min-w-0 flex-1 flex-col xl:overflow-hidden">
              <div class="border-default flex min-h-14 items-center justify-between gap-4 border-b px-4 sm:px-6 lg:px-8">
                <div class="min-w-0">
                  <nav aria-label="Breadcrumb" class="text-muted flex items-center gap-2 text-sm">
                    <div class="flex items-center gap-2">
                      <NuxtLink class="hover:text-highlighted transition-colors" to="/">
                        Projects
                      </NuxtLink>
                    </div>
                    <div class="flex items-center gap-2">
                      <UIcon name="i-lucide-chevron-right" class="text-muted h-4 w-4" />
                      <span class="text-highlighted">Internal PM System</span>
                    </div>
                  </nav>
                </div>
                <div class="flex shrink-0 items-center gap-1.5">
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Copy link" type="button" @click="copyValue(&quot;Copy link&quot;)">
                    <UIcon name="i-lucide-link" class="size-4" />
                  </UButton>
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6 xl:hidden" aria-label="Open project details panel" type="button" @click="openAction(&quot;Open project details panel&quot;)">
                    <UIcon name="i-lucide-panel-right" class="size-4" />
                  </UButton>
                  <UButton color="neutral" variant="soft" class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6 hidden xl:inline-flex bg-muted" aria-label="Collapse meta panel" type="button" @click="openAction(&quot;Collapse meta panel&quot;)">
                    <UIcon name="i-lucide-panel-right" class="size-4" />
                  </UButton>
                </div>
              </div>
              <div class="min-h-0 flex-1 xl:overflow-y-auto">
                <div class="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-5 sm:px-6 sm:py-6 lg:px-8 xl:gap-7">
                  <section class="mt-4 space-y-5">
                    <div class="flex flex-wrap items-start justify-between gap-3">
                      <div class="flex flex-wrap items-center gap-3">
                        <h1 class="text-highlighted text-2xl leading-tight font-semibold text-highlighted">Internal PM System</h1>
                        <div class="flex items-center gap-2">
                          <div class="rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent hover:bg-(--ui-bg-elevated)/80 flex items-center gap-1 border-none bg-info/10 text-info dark:bg-info/15 dark:text-info border-default">
                            <UIcon name="i-lucide-star" class="h-3 w-3" />
                            Build track
                          </div>
                          <div class="rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 flex items-center gap-1 border-none bg-warning/10 text-warning dark:bg-warning/15 dark:text-warning border-default">
                            <UIcon name="i-lucide-users" class="h-3 w-3" />
                            2 contributors
                          </div>
                          <div class="rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 bg-muted text-muted flex items-center gap-1 border-none border-default">
                            <UIcon name="i-lucide-git-merge" class="h-3 w-3" />
                            Ops system
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mt-3">
                      <div class="flex max-w-full flex-wrap items-center gap-2 text-xs">
                        <div class="flex min-w-0 items-center gap-3 border-(--ui-border)/70 bg-(--ui-bg-muted)/25 rounded-full border px-2.5 py-1.5 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 border-default">
                          <div class="text-muted flex min-w-0 items-center gap-2">
                            <span class="text-muted">Code:</span>
                            <span class="text-highlighted min-w-0 truncate font-medium">PM-OPS-02</span>
                          </div>
                          <div data-orientation="vertical" role="none" class="bg-(--ui-border) shrink-0 w-[1px] hidden h-4 sm:block" />
                        </div>
                        <div class="flex min-w-0 items-center gap-3 border-(--ui-border)/70 bg-(--ui-bg-muted)/25 rounded-full border px-2.5 py-1.5 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 border-default">
                          <div class="text-muted flex min-w-0 items-center gap-2">
                            <span class="text-highlighted min-w-0 truncate font-medium">
                              <span class="text-highlighted inline-flex items-center gap-1.5 text-xs">
                                <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" class="h-3.5 w-3.5 text-muted">
                                  <path d="M4 13.333V13.333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                  <path d="M8 13.333V6.667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                  <path d="M12 13.333V6.667" stroke="var(--ui-text-dimmed)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span class="text-(--ui-text-highlighted)/80">Medium</span>
                              </span>
                            </span>
                          </div>
                          <div data-orientation="vertical" role="none" class="bg-(--ui-border) shrink-0 w-[1px] hidden h-4 sm:block" />
                        </div>
                        <div class="flex min-w-0 items-center gap-3 border-(--ui-border)/70 bg-(--ui-bg-muted)/25 rounded-full border px-2.5 py-1.5 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 border-default">
                          <div class="text-muted flex min-w-0 items-center gap-2">
                            <span class="text-muted">
                              <UIcon name="i-lucide-earth" class="h-4 w-4" />
                            </span>
                            <span class="text-highlighted min-w-0 truncate font-medium">United States</span>
                          </div>
                          <div data-orientation="vertical" role="none" class="bg-(--ui-border) shrink-0 w-[1px] hidden h-4 sm:block" />
                        </div>
                        <div class="flex min-w-0 items-center gap-3 border-(--ui-border)/70 bg-(--ui-bg-muted)/25 rounded-full border px-2.5 py-1.5 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 border-default">
                          <div class="text-muted flex min-w-0 items-center gap-2">
                            <span class="text-muted">
                              <UIcon name="i-lucide-clock" class="h-4 w-4" />
                            </span>
                            <span class="text-muted">Cycle:</span>
                            <span class="text-highlighted min-w-0 truncate font-medium">Improvement 4 weeks</span>
                          </div>
                          <div data-orientation="vertical" role="none" class="bg-(--ui-border) shrink-0 w-[1px] hidden h-4 sm:block" />
                        </div>
                        <div class="flex min-w-0 items-center gap-3 border-(--ui-border)/70 bg-(--ui-bg-muted)/25 rounded-full border px-2.5 py-1.5 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 border-default">
                          <div class="text-muted flex min-w-0 items-center gap-2">
                            <span class="text-muted">
                              <UIcon name="i-lucide-timer-reset" class="h-4 w-4" />
                            </span>
                            <span class="text-muted">Updated:</span>
                            <span class="text-highlighted min-w-0 truncate font-medium">Just now</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section class="border-default bg-(--ui-bg-muted)/20 grid grid-cols-2 overflow-hidden border-y xl:grid-cols-4 xl:border-x-0">
                    <div class="border-(--ui-border)/70 min-w-0 border-b p-3.5 even:border-l sm:p-4 xl:border-b-0 xl:border-l xl:first:border-l-0 [&amp;:nth-last-child(-n+2)]:border-b-0 border-default">
                      <div class="flex items-center gap-2">
                        <UIcon name="i-lucide-gauge" class="text-muted size-3.5 shrink-0" />
                        <p class="text-muted min-w-0 truncate text-xs font-medium">Timeline health</p>
                      </div>
                      <div class="mt-2 flex min-w-0 flex-col gap-1 xl:flex-row xl:items-end xl:justify-between xl:gap-3">
                        <p class="min-w-0 truncate text-lg font-semibold tracking-tight text-highlighted">58%</p>
                        <p class="text-muted min-w-0 truncate text-xs xl:shrink-0">34 days left</p>
                      </div>
                    </div>
                    <div class="border-(--ui-border)/70 min-w-0 border-b p-3.5 even:border-l sm:p-4 xl:border-b-0 xl:border-l xl:first:border-l-0 [&amp;:nth-last-child(-n+2)]:border-b-0 border-default">
                      <div class="flex items-center gap-2">
                        <UIcon name="i-lucide-calendar-days" class="text-muted size-3.5 shrink-0" />
                        <p class="text-muted min-w-0 truncate text-xs font-medium">Due date</p>
                      </div>
                      <div class="mt-2 flex min-w-0 flex-col gap-1 xl:flex-row xl:items-end xl:justify-between xl:gap-3">
                        <p class="min-w-0 truncate text-lg font-semibold tracking-tight text-highlighted">Feb 14, 2026</p>
                        <p class="text-muted min-w-0 truncate text-xs xl:shrink-0">6 weeks</p>
                      </div>
                    </div>
                    <div class="border-(--ui-border)/70 min-w-0 border-b p-3.5 even:border-l sm:p-4 xl:border-b-0 xl:border-l xl:first:border-l-0 [&amp;:nth-last-child(-n+2)]:border-b-0 border-default">
                      <div class="flex items-center gap-2">
                        <UIcon name="i-lucide-circle-check" class="text-muted size-3.5 shrink-0" />
                        <p class="text-muted min-w-0 truncate text-xs font-medium">Tasks closed</p>
                      </div>
                      <div class="mt-2 flex min-w-0 flex-col gap-1 xl:flex-row xl:items-end xl:justify-between xl:gap-3">
                        <p class="min-w-0 truncate text-lg font-semibold tracking-tight text-highlighted">1/11</p>
                        <p class="text-muted min-w-0 truncate text-xs xl:shrink-0">10 open tasks</p>
                      </div>
                    </div>
                    <div class="border-(--ui-border)/70 min-w-0 border-b p-3.5 even:border-l sm:p-4 xl:border-b-0 xl:border-l xl:first:border-l-0 [&amp;:nth-last-child(-n+2)]:border-b-0 border-default">
                      <div class="flex items-center gap-2">
                        <UIcon name="i-lucide-files" class="text-muted size-3.5 shrink-0" />
                        <p class="text-muted min-w-0 truncate text-xs font-medium">Project files</p>
                      </div>
                      <div class="mt-2 flex min-w-0 flex-col gap-1 xl:flex-row xl:items-end xl:justify-between xl:gap-3">
                        <p class="min-w-0 truncate text-lg font-semibold tracking-tight text-highlighted">6</p>
                        <p class="text-muted min-w-0 truncate text-xs xl:shrink-0">3 quick links</p>
                      </div>
                    </div>
                  </section>
                  <section class="space-y-3">
                    <p class="text-muted text-xs font-medium tracking-wide uppercase">Project brief</p>
                    <p class="text-muted max-w-4xl text-sm leading-6">Internal PM System brings project intake, issue planning, role permissions, and delivery reporting into one shared workspace. This detail view tracks the operations work needed to turn the existing dashboards, lists, and issue surfaces into a cohesive project management flow.</p>
                  </section>
                  <section class="space-y-4">
                    <h2 class="text-muted text-xs font-medium tracking-wide uppercase text-highlighted">Project files</h2>
                    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                      <!-- Card 1: PM-system-scope.pdf4.2 MB -->
                      <UCard class="flex items-center justify-between rounded-2xl px-4 py-3" :ui="{ body: 'contents' }">
                        <div class="flex min-w-0 items-start gap-2">
                          <div class="flex items-center justify-center rounded-xl" style="width: 44px; height: 44px;">
                            <span class="relative" style="width: 40px; height: 40px;">
                              <img alt="PDF" class="object-contain" src="/reference/2505767c870f019f.png" style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;" loading="lazy" />
                            </span>
                          </div>
                          <div class="min-w-0">
                            <div class="text-highlighted truncate text-sm font-medium">PM-system-scope.pdf</div>
                            <div class="text-muted text-sm">4.2 MB</div>
                          </div>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated size-6 text-muted hover:text-highlighted h-7 w-7" aria-label="Open actions for PM-system-scope.pdf" type="button" @click="openAction(&quot;Open actions for PM-system-scope.pdf&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="h-4 w-4" />
                        </UButton>
                      </UCard>
                      <!-- Card 2: issue-flow-map.zip8.6 MB -->
                      <UCard class="flex items-center justify-between rounded-2xl px-4 py-3" :ui="{ body: 'contents' }">
                        <div class="flex min-w-0 items-start gap-2">
                          <div class="flex items-center justify-center rounded-xl" style="width: 44px; height: 44px;">
                            <span class="relative" style="width: 40px; height: 40px;">
                              <img alt="ZIP" class="object-contain" src="/reference/44d2cc690dcde2bd.png" style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;" loading="lazy" />
                            </span>
                          </div>
                          <div class="min-w-0">
                            <div class="text-highlighted truncate text-sm font-medium">issue-flow-map.zip</div>
                            <div class="text-muted text-sm">8.6 MB</div>
                          </div>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated size-6 text-muted hover:text-highlighted h-7 w-7" aria-label="Open actions for issue-flow-map.zip" type="button" @click="openAction(&quot;Open actions for issue-flow-map.zip&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="h-4 w-4" />
                        </UButton>
                      </UCard>
                      <!-- Card 3: project-ops-wireframes.fig11.4 MB -->
                      <UCard class="flex items-center justify-between rounded-2xl px-4 py-3" :ui="{ body: 'contents' }">
                        <div class="flex min-w-0 items-start gap-2">
                          <div class="flex items-center justify-center rounded-xl" style="width: 44px; height: 44px;">
                            <span class="relative" style="width: 40px; height: 40px;">
                              <img alt="Figma" class="object-contain" src="/reference/8801d809f883de0b.png" style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;" loading="lazy" />
                            </span>
                          </div>
                          <div class="min-w-0">
                            <div class="text-highlighted truncate text-sm font-medium">project-ops-wireframes.fig</div>
                            <div class="text-muted text-sm">11.4 MB</div>
                          </div>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated size-6 text-muted hover:text-highlighted h-7 w-7" aria-label="Open actions for project-ops-wireframes.fig" type="button" @click="openAction(&quot;Open actions for project-ops-wireframes.fig&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="h-4 w-4" />
                        </UButton>
                      </UCard>
                      <!-- Card 4: dashboard-metrics.fig9.8 MB -->
                      <UCard class="flex items-center justify-between rounded-2xl px-4 py-3" :ui="{ body: 'contents' }">
                        <div class="flex min-w-0 items-start gap-2">
                          <div class="flex items-center justify-center rounded-xl" style="width: 44px; height: 44px;">
                            <span class="relative" style="width: 40px; height: 40px;">
                              <img alt="Figma" class="object-contain" src="/reference/8801d809f883de0b.png" style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;" loading="lazy" />
                            </span>
                          </div>
                          <div class="min-w-0">
                            <div class="text-highlighted truncate text-sm font-medium">dashboard-metrics.fig</div>
                            <div class="text-muted text-sm">9.8 MB</div>
                          </div>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated size-6 text-muted hover:text-highlighted h-7 w-7" aria-label="Open actions for dashboard-metrics.fig" type="button" @click="openAction(&quot;Open actions for dashboard-metrics.fig&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="h-4 w-4" />
                        </UButton>
                      </UCard>
                      <!-- Card 5: permission-matrix.pdf2.7 MB -->
                      <UCard class="flex items-center justify-between rounded-2xl px-4 py-3" :ui="{ body: 'contents' }">
                        <div class="flex min-w-0 items-start gap-2">
                          <div class="flex items-center justify-center rounded-xl" style="width: 44px; height: 44px;">
                            <span class="relative" style="width: 40px; height: 40px;">
                              <img alt="PDF" class="object-contain" src="/reference/2505767c870f019f.png" style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;" loading="lazy" />
                            </span>
                          </div>
                          <div class="min-w-0">
                            <div class="text-highlighted truncate text-sm font-medium">permission-matrix.pdf</div>
                            <div class="text-muted text-sm">2.7 MB</div>
                          </div>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated size-6 text-muted hover:text-highlighted h-7 w-7" aria-label="Open actions for permission-matrix.pdf" type="button" @click="openAction(&quot;Open actions for permission-matrix.pdf&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="h-4 w-4" />
                        </UButton>
                      </UCard>
                      <!-- Card 6: release-readiness.pdf3.1 MB -->
                      <UCard class="flex items-center justify-between rounded-2xl px-4 py-3" :ui="{ body: 'contents' }">
                        <div class="flex min-w-0 items-start gap-2">
                          <div class="flex items-center justify-center rounded-xl" style="width: 44px; height: 44px;">
                            <span class="relative" style="width: 40px; height: 40px;">
                              <img alt="PDF" class="object-contain" src="/reference/2505767c870f019f.png" style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;" loading="lazy" />
                            </span>
                          </div>
                          <div class="min-w-0">
                            <div class="text-highlighted truncate text-sm font-medium">release-readiness.pdf</div>
                            <div class="text-muted text-sm">3.1 MB</div>
                          </div>
                        </div>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated size-6 text-muted hover:text-highlighted h-7 w-7" aria-label="Open actions for release-readiness.pdf" type="button" @click="openAction(&quot;Open actions for release-readiness.pdf&quot;)">
                          <UIcon name="i-lucide-ellipsis" class="h-4 w-4" />
                        </UButton>
                      </UCard>
                    </div>
                  </section>
                  <div data-orientation="horizontal" class="flex min-w-0 flex-col gap-6">
                    <div class="overflow-x-auto border-b border-default">
                      <UTabs v-model="tabs1Active" :items="tabs1Items" :content="false" color="primary" variant="link" class="text-muted items-center inline-flex h-auto min-w-max justify-start gap-7 rounded-none bg-transparent p-0 sm:gap-8" data-orientation="horizontal" style="outline: none;" />
                    </div>
                    <div data-orientation="horizontal" id="radix-_r_c_-content-timeline" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0" style="animation-duration: 0s;">
                      <section class="border-default h-[560px] overflow-hidden border-y">
                        <main id="main-content" class="bg-default flex h-full min-h-0 flex-1 flex-col overflow-hidden">
                          <div class="min-h-0 flex-1 overflow-hidden">
                            <div class="relative flex h-full min-h-0 flex-1 flex-col overflow-hidden">
                              <div class="min-h-0 flex-1 overflow-auto">
                                <div class="flex min-h-full w-max min-w-full">
                                  <aside class="bg-default z-20 shrink-0 border-r sm:sticky sm:left-0 border-default" style="width: 300px;">
                                    <div class="bg-default sticky top-0 z-30 border-b px-4 pb-2 border-default" style="height: 48px;">
                                      <div class="text-muted flex h-full items-end justify-between text-[13px] font-medium">
                                        <span>Issues</span>
                                        <span>Duration</span>
                                      </div>
                                    </div>
                                    <div class="bg-default">
                                      <UButton color="neutral" variant="ghost" class="flex w-full items-center justify-between gap-3 px-4 text-left transition-colors" style="height: 44px;" aria-label="RFC-101Finalize issue timeline architecture9 days" type="button" @click="openAction(&quot;RFC-101Finalize issue timeline architecture9 days&quot;)">
                                        <div class="min-w-0">
                                          <div class="flex items-center gap-2">
                                            <div class="size-2 shrink-0 rounded-full bg-warning/90" />
                                            <span class="text-muted shrink-0 text-[12px]">RFC-101</span>
                                            <span class="truncate text-[13px] font-medium">Finalize issue timeline architecture</span>
                                          </div>
                                        </div>
                                        <span class="text-muted shrink-0 text-xs">9 days</span>
                                      </UButton>
                                      <UButton color="neutral" variant="ghost" class="flex w-full items-center justify-between gap-3 px-4 text-left transition-colors" style="height: 44px;" aria-label="RFC-102Review gantt interaction states3 days" type="button" @click="openAction(&quot;RFC-102Review gantt interaction states3 days&quot;)">
                                        <div class="min-w-0">
                                          <div class="flex items-center gap-2">
                                            <div class="size-2 shrink-0 rounded-full bg-info/90" />
                                            <span class="text-muted shrink-0 text-[12px]">RFC-102</span>
                                            <span class="truncate text-[13px] font-medium">Review gantt interaction states</span>
                                          </div>
                                        </div>
                                        <span class="text-muted shrink-0 text-xs">3 days</span>
                                      </UButton>
                                      <UButton color="neutral" variant="ghost" class="flex w-full items-center justify-between gap-3 px-4 text-left transition-colors" style="height: 44px;" aria-label="RFC-103Sync issue filters with project views9 days" type="button" @click="openAction(&quot;RFC-103Sync issue filters with project views9 days&quot;)">
                                        <div class="min-w-0">
                                          <div class="flex items-center gap-2">
                                            <div class="size-2 shrink-0 rounded-full bg-secondary/90" />
                                            <span class="text-muted shrink-0 text-[12px]">RFC-103</span>
                                            <span class="truncate text-[13px] font-medium">Sync issue filters with project views</span>
                                          </div>
                                        </div>
                                        <span class="text-muted shrink-0 text-xs">9 days</span>
                                      </UButton>
                                      <UButton color="neutral" variant="ghost" class="flex w-full items-center justify-between gap-3 px-4 text-left transition-colors" style="height: 44px;" aria-label="RFC-104Document drag and resize behavior" type="button" @click="openAction(&quot;RFC-104Document drag and resize behavior&quot;)">
                                        <div class="min-w-0">
                                          <div class="flex items-center gap-2">
                                            <div class="size-2 shrink-0 rounded-full bg-(--ui-bg-accented)/80" />
                                            <span class="text-muted shrink-0 text-[12px]">RFC-104</span>
                                            <span class="truncate text-[13px] font-medium">Document drag and resize behavior</span>
                                          </div>
                                        </div>
                                        <span class="text-muted shrink-0 text-xs" />
                                      </UButton>
                                      <UButton color="neutral" variant="ghost" class="flex w-full items-center justify-between gap-3 px-4 text-left transition-colors" style="height: 44px;" aria-label="RFC-105Create empty and loading timeline states8 days" type="button" @click="openAction(&quot;RFC-105Create empty and loading timeline states8 days&quot;)">
                                        <div class="min-w-0">
                                          <div class="flex items-center gap-2">
                                            <div class="size-2 shrink-0 rounded-full bg-info/90" />
                                            <span class="text-muted shrink-0 text-[12px]">RFC-105</span>
                                            <span class="truncate text-[13px] font-medium">Create empty and loading timeline states</span>
                                          </div>
                                        </div>
                                        <span class="text-muted shrink-0 text-xs">8 days</span>
                                      </UButton>
                                      <UButton color="neutral" variant="ghost" class="flex w-full items-center justify-between gap-3 px-4 text-left transition-colors" style="height: 44px;" aria-label="RFC-106Add mock dependencies and handoff notes5 days" type="button" @click="openAction(&quot;RFC-106Add mock dependencies and handoff notes5 days&quot;)">
                                        <div class="min-w-0">
                                          <div class="flex items-center gap-2">
                                            <div class="size-2 shrink-0 rounded-full bg-secondary/90" />
                                            <span class="text-muted shrink-0 text-[12px]">RFC-106</span>
                                            <span class="truncate text-[13px] font-medium">Add mock dependencies and handoff notes</span>
                                          </div>
                                        </div>
                                        <span class="text-muted shrink-0 text-xs">5 days</span>
                                      </UButton>
                                      <UButton color="neutral" variant="ghost" class="flex w-full items-center justify-between gap-3 px-4 text-left transition-colors" style="height: 44px;" aria-label="RFC-107Polish the quarter view density3 days" type="button" @click="openAction(&quot;RFC-107Polish the quarter view density3 days&quot;)">
                                        <div class="min-w-0">
                                          <div class="flex items-center gap-2">
                                            <div class="size-2 shrink-0 rounded-full bg-secondary/90" />
                                            <span class="text-muted shrink-0 text-[12px]">RFC-107</span>
                                            <span class="truncate text-[13px] font-medium">Polish the quarter view density</span>
                                          </div>
                                        </div>
                                        <span class="text-muted shrink-0 text-xs">3 days</span>
                                      </UButton>
                                      <UButton color="neutral" variant="ghost" class="flex w-full items-center justify-between gap-3 px-4 text-left transition-colors" style="height: 44px;" aria-label="RFC-108Prepare issue calendar follow-up screen" type="button" @click="openAction(&quot;RFC-108Prepare issue calendar follow-up screen&quot;)">
                                        <div class="min-w-0">
                                          <div class="flex items-center gap-2">
                                            <div class="size-2 shrink-0 rounded-full bg-(--ui-bg-accented)/80" />
                                            <span class="text-muted shrink-0 text-[12px]">RFC-108</span>
                                            <span class="truncate text-[13px] font-medium">Prepare issue calendar follow-up screen</span>
                                          </div>
                                        </div>
                                        <span class="text-muted shrink-0 text-xs" />
                                      </UButton>
                                    </div>
                                  </aside>
                                  <section class="relative">
                                    <div class="bg-(--ui-bg)/95 sticky top-0 z-10 border-b backdrop-blur-sm border-default" style="width: 3528px; height: 48px;">
                                      <div class="flex h-full">
                                        <div class="border-(--ui-border)/60 flex shrink-0 flex-col border-r border-default" style="width: 392px;">
                                          <div class="border-(--ui-border)/60 flex h-7 items-center justify-between border-b px-3 border-default">
                                            <div class="text-muted text-[13px] font-normal whitespace-nowrap">Mar 2026</div>
                                            <div class="text-(--ui-text-muted)/80 text-[10px] font-medium whitespace-nowrap">Week 12</div>
                                          </div>
                                          <div class="flex h-5">
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">Su</span>
                                              <span class="font-medium">15</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">M</span>
                                              <span class="font-medium">16</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">T</span>
                                              <span class="font-medium">17</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">W</span>
                                              <span class="font-medium">18</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">Th</span>
                                              <span class="font-medium">19</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">F</span>
                                              <span class="font-medium">20</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">Sa</span>
                                              <span class="font-medium">21</span>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="border-(--ui-border)/60 flex shrink-0 flex-col border-r border-default" style="width: 392px;">
                                          <div class="border-(--ui-border)/60 flex h-7 items-center justify-between border-b px-3 border-default">
                                            <div class="text-muted text-[13px] font-normal whitespace-nowrap">Mar 2026</div>
                                            <div class="text-(--ui-text-muted)/80 text-[10px] font-medium whitespace-nowrap">Week 13</div>
                                          </div>
                                          <div class="flex h-5">
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">Su</span>
                                              <span class="font-medium">22</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">M</span>
                                              <span class="font-medium">23</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">T</span>
                                              <span class="font-medium">24</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">W</span>
                                              <span class="font-medium">25</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">Th</span>
                                              <span class="font-medium">26</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">F</span>
                                              <span class="font-medium">27</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">Sa</span>
                                              <span class="font-medium">28</span>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="border-(--ui-border)/60 flex shrink-0 flex-col border-r border-default" style="width: 392px;">
                                          <div class="border-(--ui-border)/60 flex h-7 items-center justify-between border-b px-3 border-default">
                                            <div class="text-muted text-[13px] font-normal whitespace-nowrap">Mar 2026 - Apr 2026</div>
                                            <div class="text-(--ui-text-muted)/80 text-[10px] font-medium whitespace-nowrap">Week 14</div>
                                          </div>
                                          <div class="flex h-5">
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">Su</span>
                                              <span class="font-medium">29</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">M</span>
                                              <span class="font-medium">30</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">T</span>
                                              <span class="font-medium">31</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">W</span>
                                              <span class="font-medium">1</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">Th</span>
                                              <span class="font-medium">2</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">F</span>
                                              <span class="font-medium">3</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">Sa</span>
                                              <span class="font-medium">4</span>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="border-(--ui-border)/60 flex shrink-0 flex-col border-r border-default" style="width: 392px;">
                                          <div class="border-(--ui-border)/60 flex h-7 items-center justify-between border-b px-3 border-default">
                                            <div class="text-muted text-[13px] font-normal whitespace-nowrap">Apr 2026</div>
                                            <div class="text-(--ui-text-muted)/80 text-[10px] font-medium whitespace-nowrap">Week 15</div>
                                          </div>
                                          <div class="flex h-5">
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">Su</span>
                                              <span class="font-medium">5</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">M</span>
                                              <span class="font-medium">6</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">T</span>
                                              <span class="font-medium">7</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">W</span>
                                              <span class="font-medium">8</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">Th</span>
                                              <span class="font-medium">9</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">F</span>
                                              <span class="font-medium">10</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">Sa</span>
                                              <span class="font-medium">11</span>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="border-(--ui-border)/60 flex shrink-0 flex-col border-r border-default" style="width: 392px;">
                                          <div class="border-(--ui-border)/60 flex h-7 items-center justify-between border-b px-3 border-default">
                                            <div class="text-muted text-[13px] font-normal whitespace-nowrap">Apr 2026</div>
                                            <div class="text-(--ui-text-muted)/80 text-[10px] font-medium whitespace-nowrap">Week 16</div>
                                          </div>
                                          <div class="flex h-5">
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">Su</span>
                                              <span class="font-medium">12</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">M</span>
                                              <span class="font-medium">13</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">T</span>
                                              <span class="font-medium">14</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">W</span>
                                              <span class="font-medium">15</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-primary/5 border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">Th</span>
                                              <span class="font-medium border-primary/12 bg-primary/10 text-highlighted rounded-sm border px-1">16</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">F</span>
                                              <span class="font-medium">17</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">Sa</span>
                                              <span class="font-medium">18</span>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="border-(--ui-border)/60 flex shrink-0 flex-col border-r border-default" style="width: 392px;">
                                          <div class="border-(--ui-border)/60 flex h-7 items-center justify-between border-b px-3 border-default">
                                            <div class="text-muted text-[13px] font-normal whitespace-nowrap">Apr 2026</div>
                                            <div class="text-(--ui-text-muted)/80 text-[10px] font-medium whitespace-nowrap">Week 17</div>
                                          </div>
                                          <div class="flex h-5">
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">Su</span>
                                              <span class="font-medium">19</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">M</span>
                                              <span class="font-medium">20</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">T</span>
                                              <span class="font-medium">21</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">W</span>
                                              <span class="font-medium">22</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">Th</span>
                                              <span class="font-medium">23</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">F</span>
                                              <span class="font-medium">24</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">Sa</span>
                                              <span class="font-medium">25</span>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="border-(--ui-border)/60 flex shrink-0 flex-col border-r border-default" style="width: 392px;">
                                          <div class="border-(--ui-border)/60 flex h-7 items-center justify-between border-b px-3 border-default">
                                            <div class="text-muted text-[13px] font-normal whitespace-nowrap">Apr 2026 - May 2026</div>
                                            <div class="text-(--ui-text-muted)/80 text-[10px] font-medium whitespace-nowrap">Week 18</div>
                                          </div>
                                          <div class="flex h-5">
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">Su</span>
                                              <span class="font-medium">26</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">M</span>
                                              <span class="font-medium">27</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">T</span>
                                              <span class="font-medium">28</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">W</span>
                                              <span class="font-medium">29</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">Th</span>
                                              <span class="font-medium">30</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">F</span>
                                              <span class="font-medium">1</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">Sa</span>
                                              <span class="font-medium">2</span>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="border-(--ui-border)/60 flex shrink-0 flex-col border-r border-default" style="width: 392px;">
                                          <div class="border-(--ui-border)/60 flex h-7 items-center justify-between border-b px-3 border-default">
                                            <div class="text-muted text-[13px] font-normal whitespace-nowrap">May 2026</div>
                                            <div class="text-(--ui-text-muted)/80 text-[10px] font-medium whitespace-nowrap">Week 19</div>
                                          </div>
                                          <div class="flex h-5">
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">Su</span>
                                              <span class="font-medium">3</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">M</span>
                                              <span class="font-medium">4</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">T</span>
                                              <span class="font-medium">5</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">W</span>
                                              <span class="font-medium">6</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">Th</span>
                                              <span class="font-medium">7</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">F</span>
                                              <span class="font-medium">8</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">Sa</span>
                                              <span class="font-medium">9</span>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="border-(--ui-border)/60 flex shrink-0 flex-col border-r border-default" style="width: 392px;">
                                          <div class="border-(--ui-border)/60 flex h-7 items-center justify-between border-b px-3 border-default">
                                            <div class="text-muted text-[13px] font-normal whitespace-nowrap">May 2026</div>
                                            <div class="text-(--ui-text-muted)/80 text-[10px] font-medium whitespace-nowrap">Week 20</div>
                                          </div>
                                          <div class="flex h-5">
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">Su</span>
                                              <span class="font-medium">10</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">M</span>
                                              <span class="font-medium">11</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">T</span>
                                              <span class="font-medium">12</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">W</span>
                                              <span class="font-medium">13</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">Th</span>
                                              <span class="font-medium">14</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">F</span>
                                              <span class="font-medium">15</span>
                                            </div>
                                            <div class="border-(--ui-border)/60 flex shrink-0 items-center justify-between border-r px-2 text-[11px] bg-(--ui-bg-muted)/35 border-default" style="width: 56px;">
                                              <span class="text-muted font-medium">Sa</span>
                                              <span class="font-medium">16</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="relative" style="width: 3528px; height: 469px; background-image: linear-gradient(to right, color-mix(in oklab, var(--ui-border) 85%, transparent) 1px, transparent 1px); background-size: 56px 100%;">
                                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left: 0px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 56px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 112px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 168px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 224px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 280px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left: 336px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left: 392px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 448px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 504px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 560px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 616px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 672px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left: 728px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left: 784px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 840px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 896px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 952px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 1008px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 1064px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left: 1120px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left: 1176px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 1232px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 1288px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 1344px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 1400px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 1456px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left: 1512px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left: 1568px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 1624px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 1680px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 1736px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full border-primary/12 bg-primary/4 border-x" style="left: 1792px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 1848px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left: 1904px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left: 1960px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 2016px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 2072px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 2128px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 2184px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 2240px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left: 2296px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left: 2352px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 2408px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 2464px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 2520px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 2576px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 2632px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left: 2688px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left: 2744px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 2800px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 2856px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 2912px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 2968px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 3024px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left: 3080px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left: 3136px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 3192px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 3248px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 3304px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 3360px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full" style="left: 3416px; width: 56px;" />
                                      <div class="pointer-events-none absolute top-0 h-full bg-(--ui-bg-muted)/25" style="left: 3472px; width: 56px;" />
                                      <div>
                                        <div class="absolute left-0 w-full transition-colors" style="top: 0px; height: 44px;" />
                                        <div class="absolute px-1" style="top: 6px; left: 1008px; width: 504px;">
                                          <div class="group relative flex h-[34px] items-center overflow-hidden rounded-md border border-warning/80 bg-warning/90 text-warning dark:border-warning/50 dark:bg-warning/70 dark:text-warning">
                                            <UButton color="neutral" variant="ghost" class="absolute top-0 left-0 h-full w-2 cursor-ew-resize opacity-0 transition-opacity group-hover:opacity-100" aria-label="Resize Finalize issue timeline architecture from start" type="button" @click="openAction(&quot;Resize Finalize issue timeline architecture from start&quot;)" />
                                            <UButton color="neutral" variant="ghost" class="flex h-full w-full cursor-grab items-center px-2.5 text-left active:cursor-grabbing" aria-label="Finalize issue timeline architecture" type="button" @click="openAction(&quot;Finalize issue timeline architecture&quot;)">
                                              <span class="truncate text-[13px] leading-none font-medium">Finalize issue timeline architecture</span>
                                            </UButton>
                                            <UButton color="neutral" variant="ghost" class="absolute top-0 right-0 h-full w-2 cursor-ew-resize opacity-0 transition-opacity group-hover:opacity-100" aria-label="Resize Finalize issue timeline architecture from end" type="button" @click="openAction(&quot;Resize Finalize issue timeline architecture from end&quot;)" />
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <div class="absolute left-0 w-full transition-colors" style="top: 44px; height: 44px;" />
                                        <div class="absolute px-1" style="top: 50px; left: 1120px; width: 168px;">
                                          <div class="group relative flex h-[34px] items-center overflow-hidden rounded-md border border-info/80 bg-info/90 text-info dark:border-info/45 dark:bg-info/65 dark:text-info">
                                            <UButton color="neutral" variant="ghost" class="absolute top-0 left-0 h-full w-2 cursor-ew-resize opacity-0 transition-opacity group-hover:opacity-100" aria-label="Resize Review gantt interaction states from start" type="button" @click="openAction(&quot;Resize Review gantt interaction states from start&quot;)" />
                                            <UButton color="neutral" variant="ghost" class="flex h-full w-full cursor-grab items-center px-2.5 text-left active:cursor-grabbing" aria-label="Review gantt interaction states" type="button" @click="openAction(&quot;Review gantt interaction states&quot;)">
                                              <span class="truncate text-[13px] leading-none font-medium">Review gantt interaction states</span>
                                            </UButton>
                                            <UButton color="neutral" variant="ghost" class="absolute top-0 right-0 h-full w-2 cursor-ew-resize opacity-0 transition-opacity group-hover:opacity-100" aria-label="Resize Review gantt interaction states from end" type="button" @click="openAction(&quot;Resize Review gantt interaction states from end&quot;)" />
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <div class="absolute left-0 w-full transition-colors" style="top: 88px; height: 44px;" />
                                        <div class="absolute px-1" style="top: 94px; left: 1344px; width: 504px;">
                                          <div class="group relative flex h-[34px] items-center overflow-hidden rounded-md border border-secondary/80 bg-secondary/90 text-secondary dark:border-secondary/45 dark:bg-secondary/65 dark:text-secondary">
                                            <UButton color="neutral" variant="ghost" class="absolute top-0 left-0 h-full w-2 cursor-ew-resize opacity-0 transition-opacity group-hover:opacity-100" aria-label="Resize Sync issue filters with project views from start" type="button" @click="openAction(&quot;Resize Sync issue filters with project views from start&quot;)" />
                                            <UButton color="neutral" variant="ghost" class="flex h-full w-full cursor-grab items-center px-2.5 text-left active:cursor-grabbing" aria-label="Sync issue filters with project views" type="button" @click="openAction(&quot;Sync issue filters with project views&quot;)">
                                              <span class="truncate text-[13px] leading-none font-medium">Sync issue filters with project views</span>
                                            </UButton>
                                            <UButton color="neutral" variant="ghost" class="absolute top-0 right-0 h-full w-2 cursor-ew-resize opacity-0 transition-opacity group-hover:opacity-100" aria-label="Resize Sync issue filters with project views from end" type="button" @click="openAction(&quot;Resize Sync issue filters with project views from end&quot;)" />
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <div class="absolute left-0 w-full transition-colors" style="top: 132px; height: 44px;" />
                                      </div>
                                      <div>
                                        <div class="absolute left-0 w-full transition-colors" style="top: 176px; height: 44px;">
                                          <UButton color="neutral" variant="outline" class="bg-(--ui-bg)/95 text-muted hover:text-highlighted absolute top-1/2 z-[6] grid h-8 w-8 -translate-y-1/2 place-items-center rounded-sm border transition-colors border-default" style="left: 1000px;" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                                            <UIcon name="i-lucide-arrow-right" class="size-3.5" />
                                          </UButton>
                                        </div>
                                        <div class="absolute px-1" style="top: 182px; left: 1680px; width: 448px;">
                                          <div class="group relative flex h-[34px] items-center overflow-hidden rounded-md border border-info/80 bg-info/90 text-info dark:border-info/45 dark:bg-info/65 dark:text-info">
                                            <UButton color="neutral" variant="ghost" class="absolute top-0 left-0 h-full w-2 cursor-ew-resize opacity-0 transition-opacity group-hover:opacity-100" aria-label="Resize Create empty and loading timeline states from start" type="button" @click="openAction(&quot;Resize Create empty and loading timeline states from start&quot;)" />
                                            <UButton color="neutral" variant="ghost" class="flex h-full w-full cursor-grab items-center px-2.5 text-left active:cursor-grabbing" aria-label="Create empty and loading timeline states" type="button" @click="openAction(&quot;Create empty and loading timeline states&quot;)">
                                              <span class="truncate text-[13px] leading-none font-medium">Create empty and loading timeline states</span>
                                            </UButton>
                                            <UButton color="neutral" variant="ghost" class="absolute top-0 right-0 h-full w-2 cursor-ew-resize opacity-0 transition-opacity group-hover:opacity-100" aria-label="Resize Create empty and loading timeline states from end" type="button" @click="openAction(&quot;Resize Create empty and loading timeline states from end&quot;)" />
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <div class="absolute left-0 w-full transition-colors" style="top: 220px; height: 44px;" />
                                        <div class="absolute px-1" style="top: 226px; left: 1064px; width: 280px;">
                                          <div class="group relative flex h-[34px] items-center overflow-hidden rounded-md border border-secondary/80 bg-secondary/90 text-secondary dark:border-secondary/45 dark:bg-secondary/65 dark:text-secondary">
                                            <UButton color="neutral" variant="ghost" class="absolute top-0 left-0 h-full w-2 cursor-ew-resize opacity-0 transition-opacity group-hover:opacity-100" aria-label="Resize Add mock dependencies and handoff notes from start" type="button" @click="openAction(&quot;Resize Add mock dependencies and handoff notes from start&quot;)" />
                                            <UButton color="neutral" variant="ghost" class="flex h-full w-full cursor-grab items-center px-2.5 text-left active:cursor-grabbing" aria-label="Add mock dependencies and handoff notes" type="button" @click="openAction(&quot;Add mock dependencies and handoff notes&quot;)">
                                              <span class="truncate text-[13px] leading-none font-medium">Add mock dependencies and handoff notes</span>
                                            </UButton>
                                            <UButton color="neutral" variant="ghost" class="absolute top-0 right-0 h-full w-2 cursor-ew-resize opacity-0 transition-opacity group-hover:opacity-100" aria-label="Resize Add mock dependencies and handoff notes from end" type="button" @click="openAction(&quot;Resize Add mock dependencies and handoff notes from end&quot;)" />
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <div class="absolute left-0 w-full transition-colors" style="top: 264px; height: 44px;" />
                                        <div class="absolute px-1" style="top: 270px; left: 1232px; width: 168px;">
                                          <div class="group relative flex h-[34px] items-center overflow-hidden rounded-md border border-secondary/80 bg-secondary/90 text-secondary dark:border-secondary/45 dark:bg-secondary/65 dark:text-secondary">
                                            <UButton color="neutral" variant="ghost" class="absolute top-0 left-0 h-full w-2 cursor-ew-resize opacity-0 transition-opacity group-hover:opacity-100" aria-label="Resize Polish the quarter view density from start" type="button" @click="openAction(&quot;Resize Polish the quarter view density from start&quot;)" />
                                            <UButton color="neutral" variant="ghost" class="flex h-full w-full cursor-grab items-center px-2.5 text-left active:cursor-grabbing" aria-label="Polish the quarter view density" type="button" @click="openAction(&quot;Polish the quarter view density&quot;)">
                                              <span class="truncate text-[13px] leading-none font-medium">Polish the quarter view density</span>
                                            </UButton>
                                            <UButton color="neutral" variant="ghost" class="absolute top-0 right-0 h-full w-2 cursor-ew-resize opacity-0 transition-opacity group-hover:opacity-100" aria-label="Resize Polish the quarter view density from end" type="button" @click="openAction(&quot;Resize Polish the quarter view density from end&quot;)" />
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <div class="absolute left-0 w-full transition-colors" style="top: 308px; height: 44px;" />
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              </div>
                              <div class="bg-default sticky bottom-0 z-[1] border-t border-default">
                                <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 flex w-full items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors" aria-label="New issue" type="button" @click="openAction(&quot;New issue&quot;)">
                                  <UIcon name="i-lucide-plus" class="size-3.5" />
                                  New issue
                                </UButton>
                              </div>
                            </div>
                          </div>
                        </main>
                      </section>
                    </div>
                    <div data-orientation="horizontal" id="radix-_r_c_-content-tasks" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0" />
                    <div data-orientation="horizontal" id="radix-_r_c_-content-issues" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0" />
                    <div data-orientation="horizontal" id="radix-_r_c_-content-activity" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-0" />
                  </div>
                </div>
              </div>
            </div>
            <aside class="border-default bg-default text-default hidden min-h-0 w-[340px] min-w-0 shrink-0 flex-col overflow-hidden border-l xl:flex">
              <div class="divide-default flex min-h-0 flex-1 flex-col divide-y overflow-y-auto px-5">
                <section class="py-6">
                  <div class="pb-5">
                    <div class="text-sm font-semibold">Project status</div>
                  </div>
                  <div class="space-y-5">
                    <div class="flex items-center gap-4">
                      <div class="text-muted flex w-30 shrink-0 items-center gap-2 text-sm">
                        <span class="shrink-0">
                          <UIcon name="i-lucide-circle-dashed" class="h-4 w-4" />
                        </span>
                        <span>Status</span>
                      </div>
                      <div class="text-highlighted flex-1 text-left text-sm font-medium">
                        <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 bg-info/10 text-info border-none dark:bg-info/15 dark:text-info border-default">Active</div>
                      </div>
                    </div>
                    <div class="flex items-center gap-4">
                      <div class="text-muted flex w-30 shrink-0 items-center gap-2 text-sm">
                        <span class="shrink-0">
                          <UIcon name="i-lucide-cuboid" class="h-4 w-4" />
                        </span>
                        <span>Group</span>
                      </div>
                      <div class="text-highlighted flex-1 text-left text-sm font-medium">
                        <span class="px-2">None</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-4">
                      <div class="text-muted flex w-30 shrink-0 items-center gap-2 text-sm">
                        <span class="shrink-0">
                          <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" class="h-3.5 w-3.5 text-muted">
                            <path d="M4 13.333V13.333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8 13.333V6.667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12 13.333V6.667" stroke="var(--ui-text-dimmed)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </span>
                        <span>Priority</span>
                      </div>
                      <div class="text-highlighted flex-1 text-left text-sm font-medium">
                        <span class="px-2">Medium</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-4">
                      <div class="text-muted flex w-30 shrink-0 items-center gap-2 text-sm">
                        <span class="shrink-0">
                          <UIcon name="i-lucide-tag" class="h-4 w-4" />
                        </span>
                        <span>Label</span>
                      </div>
                      <div class="text-highlighted flex-1 text-left text-sm font-medium">
                        <div class="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 border-default border">Design</div>
                      </div>
                    </div>
                    <div class="flex items-center gap-4">
                      <div class="text-muted flex w-30 shrink-0 items-center gap-2 text-sm">
                        <span class="shrink-0">
                          <UIcon name="i-lucide-user" class="h-4 w-4" />
                        </span>
                        <span>PIC</span>
                      </div>
                      <div class="text-highlighted flex-1 text-left text-sm font-medium">
                        <div class="px-2">
                          <div class="flex items-center">
                            <div class="">
                              <span class="relative flex shrink-0 overflow-hidden rounded-full border-default bg-default size-7 border">
                                <span class="bg-muted flex h-full w-full items-center justify-center rounded-full text-[10px]">AM</span>
                              </span>
                            </div>
                            <div class="-ml-2">
                              <span class="relative flex shrink-0 overflow-hidden rounded-full border-default bg-default size-7 border">
                                <span class="bg-muted flex h-full w-full items-center justify-center rounded-full text-[10px]">MP</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center gap-4">
                      <div class="text-muted flex w-30 shrink-0 items-center gap-2 text-sm">
                        <span class="shrink-0">
                          <UIcon name="i-lucide-users" class="h-4 w-4" />
                        </span>
                        <span>Support</span>
                      </div>
                      <div class="text-highlighted flex-1 text-left text-sm font-medium">
                        <div class="px-2">
                          <div class="flex items-center">
                            <div class="">
                              <span class="relative flex shrink-0 overflow-hidden rounded-full border-default bg-default size-7 border">
                                <span class="bg-muted flex h-full w-full items-center justify-center rounded-full text-[10px]">S</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section class="py-6">
                  <div class="mb-5 flex items-baseline gap-2">
                    <h2 class="text-sm font-semibold text-highlighted">Contributors</h2>
                    <span class="text-muted text-xs">18</span>
                  </div>
                  <div class="grid grid-cols-6 gap-2">
                    <span class="relative flex shrink-0 overflow-hidden rounded-full size-8 border border-default">
                      <img class="aspect-square h-full w-full" alt="Kiara Laras" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                    </span>
                    <span class="relative flex shrink-0 overflow-hidden rounded-full size-8 border border-default">
                      <img class="aspect-square h-full w-full" alt="Joe Tesla" src="/reference/a99c47c2fa3dc656.png" loading="lazy" />
                    </span>
                    <span class="relative flex shrink-0 overflow-hidden rounded-full size-8 border border-default">
                      <img class="aspect-square h-full w-full" alt="Tania Brooks" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                    </span>
                    <span class="relative flex shrink-0 overflow-hidden rounded-full size-8 border border-default">
                      <img class="aspect-square h-full w-full" alt="Cameron Williamson" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                    </span>
                    <span class="relative flex shrink-0 overflow-hidden rounded-full size-8 border border-default">
                      <img class="aspect-square h-full w-full" alt="Robert Fox" src="/reference/247ac7c76922347b.png" loading="lazy" />
                    </span>
                    <span class="relative flex shrink-0 overflow-hidden rounded-full size-8 border border-default">
                      <img class="aspect-square h-full w-full" alt="Megan Chen" src="/reference/62828bc2a489837e.png" loading="lazy" />
                    </span>
                    <span class="relative flex shrink-0 overflow-hidden rounded-full size-8 border border-default">
                      <img class="aspect-square h-full w-full" alt="Alex Morgan" src="/reference/0a5fda67e048ade8.png" loading="lazy" />
                    </span>
                    <span class="relative flex shrink-0 overflow-hidden rounded-full size-8 border border-default">
                      <img class="aspect-square h-full w-full" alt="Maya Patel" src="/reference/4759e542002c0be5.png" loading="lazy" />
                    </span>
                    <div class="text-muted grid size-8 place-items-center rounded-full text-[11px] font-medium">+10</div>
                  </div>
                </section>
                <section class="py-6">
                  <div class="pb-5">
                    <div class="text-sm font-semibold">Schedule</div>
                  </div>
                  <div class="space-y-5">
                    <div class="flex items-center gap-4">
                      <div class="text-muted flex w-30 shrink-0 items-center gap-2 text-sm">
                        <span class="shrink-0">
                          <UIcon name="i-lucide-clock" class="h-4 w-4" />
                        </span>
                        <span>Estimate</span>
                      </div>
                      <div class="text-highlighted flex-1 text-left text-sm font-medium">
                        <span class="px-2">6 weeks</span>
                      </div>
                    </div>
                    <div class="flex items-center gap-4">
                      <div class="text-muted flex w-30 shrink-0 items-center gap-2 text-sm">
                        <span class="shrink-0">
                          <UIcon name="i-lucide-calendar" class="h-4 w-4" />
                        </span>
                        <span>Due Date</span>
                      </div>
                      <div class="text-highlighted flex-1 text-left text-sm font-medium">
                        <span class="px-2">Feb 14, 2026</span>
                      </div>
                    </div>
                  </div>
                </section>
                <section class="py-6">
                  <div class="pb-5">
                    <div class="text-sm font-semibold">Notes</div>
                  </div>
                  <div class="space-y-4">
                    <div class="flex min-w-0 items-start gap-3">
                      <div class="text-muted mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md border border-default">
                        <UIcon name="i-lucide-waves" class="size-3.5" />
                      </div>
                      <div class="min-w-0 flex-1">
                        <div class="flex min-w-0 items-start justify-between gap-2">
                          <p class="min-w-0 truncate text-sm font-medium">Project review</p>
                          <span class="text-muted shrink-0 text-xs">12 Jul</span>
                        </div>
                        <p class="text-muted mt-1 line-clamp-2 text-xs leading-5">The team reviewed project operations, clarified the next sprint boundaries, and agreed to tighten how work moves from intake into implementation. Open questions center on permissions, issue routing, and what dashboard metrics should be visible at launch.</p>
                      </div>
                    </div>
                    <div class="flex min-w-0 items-start gap-3">
                      <div class="text-muted mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md border border-default">
                        <UIcon name="i-lucide-file" class="size-3.5" />
                      </div>
                      <div class="min-w-0 flex-1">
                        <div class="flex min-w-0 items-start justify-between gap-2">
                          <p class="min-w-0 truncate text-sm font-medium">Sprint alignment</p>
                          <span class="text-muted shrink-0 text-xs">18 Sep</span>
                        </div>
                        <p class="text-muted mt-1 line-clamp-2 text-xs leading-5">Reviewed current sprint goals, open issue states, and the handoff points between planning and implementation.</p>
                      </div>
                    </div>
                    <div class="flex min-w-0 items-start gap-3">
                      <div class="text-muted mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md border border-default">
                        <UIcon name="i-lucide-file" class="size-3.5" />
                      </div>
                      <div class="min-w-0 flex-1">
                        <div class="flex min-w-0 items-start justify-between gap-2">
                          <p class="min-w-0 truncate text-sm font-medium">Stakeholder feedback</p>
                          <span class="text-muted shrink-0 text-xs">18 Sep</span>
                        </div>
                        <p class="text-muted mt-1 line-clamp-2 text-xs leading-5">Stakeholders want the detail screen to make ownership, blockers, and due windows visible without opening multiple tables.</p>
                      </div>
                    </div>
                    <div class="flex min-w-0 items-start gap-3">
                      <div class="text-muted mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md border border-default">
                        <UIcon name="i-lucide-file" class="size-3.5" />
                      </div>
                      <div class="min-w-0 flex-1">
                        <div class="flex min-w-0 items-start justify-between gap-2">
                          <p class="min-w-0 truncate text-sm font-medium">Operations brainstorm</p>
                          <span class="text-muted shrink-0 text-xs">17 Sep</span>
                        </div>
                        <p class="text-muted mt-1 line-clamp-2 text-xs leading-5">Ideas for project intake improvements, including required fields, status transitions, and lightweight blocker prompts.</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </aside>
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
