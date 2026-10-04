<!-- Page: /project-management/issue-calendar-2 | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Issue Calendar 2 · Blocks Admin" })

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/project-management/issue-calendar-2">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex min-h-0 flex-1 flex-col overflow-hidden">
        <main class="bg-default text-highlighted flex h-full min-h-0 flex-1 flex-col">
          <div class="flex h-full flex-col">
            <header class="border-default flex flex-none items-center justify-between border-b px-4 py-3 sm:px-6 sm:py-4">
              <h1 class="text-highlighted text-lg font-semibold sm:text-base text-highlighted">
                <time>April 2026</time>
              </h1>
              <div class="flex items-center gap-3">
                <div class="hidden items-center gap-2 xl:flex">
                  <UButton color="neutral" variant="outline" class="border-default bg-default text-highlighted hover:bg-muted flex h-9 items-center rounded-md border px-3.5 text-sm font-semibold shadow-xs" aria-label="Today" type="button" @click="openAction(&quot;Today&quot;)">
                    Today
                  </UButton>
                  <div class="border-default bg-default text-highlighted flex h-9 overflow-hidden rounded-md border text-sm font-semibold shadow-xs">
                    <UButton color="neutral" variant="soft" class="hover:bg-muted flex items-center gap-2 px-3.5" aria-label="Last 7 days" type="button" @click="openAction(&quot;Last 7 days&quot;)">
                      Last 7 days
                      <UIcon name="i-lucide-chevron-down" class="-mr-1 size-4 text-dimmed" />
                    </UButton>
                    <div class="border-default flex items-center gap-2 border-l px-3.5">
                      <UIcon name="i-lucide-calendar-days" class="size-4 text-muted dark:text-muted" />
                      Apr 13 -Apr 19
                    </div>
                  </div>
                </div>
                <div class="hidden md:ml-4 md:flex md:items-center">
                  <UButton color="primary" variant="solid" class="bg-primary text-inverted inline-flex h-9 items-center gap-1.5 rounded-md px-3.5 text-sm font-semibold shadow-xs hover:opacity-90" aria-label="Add issue" type="button" @click="openAction(&quot;Add issue&quot;)">
                    <UIcon name="i-lucide-plus" class="size-4" />
                    Add issue
                  </UButton>
                </div>
                <UButton color="neutral" variant="outline" class="-mx-2 ml-2 flex items-center rounded-full border border-transparent p-2 text-dimmed hover:text-muted md:hidden dark:text-dimmed border-default" aria-label="Open menu" type="button" @click="openAction(&quot;Open menu&quot;)">
                  <span class="sr-only">Open menu</span>
                  <UIcon name="i-lucide-ellipsis" class="size-5" />
                </UButton>
              </div>
            </header>
            <div class="bg-default isolate flex flex-auto flex-col overflow-auto">
              <div style="width:165%" class="flex min-w-[980px] flex-none flex-col sm:max-w-none sm:min-w-0 md:max-w-full">
                <div class="bg-default border-default sticky top-0 z-30 flex-none border-b">
                  <div class="bg-default text-muted grid grid-cols-7 text-sm/6 sm:hidden">
                    <UButton color="neutral" variant="ghost" class="flex flex-col items-center pt-2 pb-3" aria-label="M13" type="button" @click="openAction(&quot;M13&quot;)">
                      M
                      <span class="mt-1 flex size-8 items-center justify-center font-semibold text-highlighted">13</span>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="flex flex-col items-center pt-2 pb-3" aria-label="T14" type="button" @click="openAction(&quot;T14&quot;)">
                      T
                      <span class="mt-1 flex size-8 items-center justify-center font-semibold text-highlighted">14</span>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="flex flex-col items-center pt-2 pb-3" aria-label="W15" type="button" @click="openAction(&quot;W15&quot;)">
                      W
                      <span class="mt-1 flex size-8 items-center justify-center font-semibold text-highlighted">15</span>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="flex flex-col items-center pt-2 pb-3" aria-label="T16" type="button" @click="openAction(&quot;T16&quot;)">
                      T
                      <span class="mt-1 flex size-8 items-center justify-center font-semibold bg-primary text-inverted rounded-full">16</span>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="flex flex-col items-center pt-2 pb-3" aria-label="F17" type="button" @click="openAction(&quot;F17&quot;)">
                      F
                      <span class="mt-1 flex size-8 items-center justify-center font-semibold text-highlighted">17</span>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="flex flex-col items-center pt-2 pb-3" aria-label="S18" type="button" @click="openAction(&quot;S18&quot;)">
                      S
                      <span class="mt-1 flex size-8 items-center justify-center font-semibold text-highlighted">18</span>
                    </UButton>
                    <UButton color="neutral" variant="ghost" class="flex flex-col items-center pt-2 pb-3" aria-label="S19" type="button" @click="openAction(&quot;S19&quot;)">
                      S
                      <span class="mt-1 flex size-8 items-center justify-center font-semibold text-highlighted">19</span>
                    </UButton>
                  </div>
                  <div class="border-default bg-default text-muted hidden grid-cols-7 divide-x sm:grid">
                    <div class="col-end-1 w-14" />
                    <div class="flex items-center justify-center py-3">
                      <span>
                        Mon
                        <span class="text-highlighted items-center justify-center font-semibold">13</span>
                      </span>
                    </div>
                    <div class="flex items-center justify-center py-3">
                      <span>
                        Tue
                        <span class="text-highlighted items-center justify-center font-semibold">14</span>
                      </span>
                    </div>
                    <div class="flex items-center justify-center py-3">
                      <span>
                        Wed
                        <span class="text-highlighted items-center justify-center font-semibold">15</span>
                      </span>
                    </div>
                    <div class="flex items-center justify-center py-3">
                      <span class="flex items-baseline">
                        Thu
                        <span class="bg-primary text-inverted ml-1.5 flex size-8 items-center justify-center rounded-full font-semibold">16</span>
                      </span>
                    </div>
                    <div class="flex items-center justify-center py-3">
                      <span>
                        Fri
                        <span class="text-highlighted items-center justify-center font-semibold">17</span>
                      </span>
                    </div>
                    <div class="flex items-center justify-center py-3">
                      <span>
                        Sat
                        <span class="text-highlighted items-center justify-center font-semibold">18</span>
                      </span>
                    </div>
                    <div class="flex items-center justify-center py-3">
                      <span>
                        Sun
                        <span class="text-highlighted items-center justify-center font-semibold">19</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-auto">
                  <div class="bg-default border-default sticky left-0 z-10 w-14 flex-none border-r" />
                  <div class="grid flex-auto grid-cols-1 grid-rows-1">
                    <div class="divide-default col-start-1 col-end-2 row-start-1 grid divide-y" style="grid-template-rows:repeat(24, minmax(7rem, 1fr))">
                      <div class="row-end-1 h-7" />
                      <div>
                        <div class="text-muted sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5">12 AM</div>
                      </div>
                      <div>
                        <div class="text-muted sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5">1 AM</div>
                      </div>
                      <div>
                        <div class="text-muted sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5">2 AM</div>
                      </div>
                      <div>
                        <div class="text-muted sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5">3 AM</div>
                      </div>
                      <div>
                        <div class="text-muted sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5">4 AM</div>
                      </div>
                      <div>
                        <div class="text-muted sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5">5 AM</div>
                      </div>
                      <div>
                        <div class="text-muted sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5">6 AM</div>
                      </div>
                      <div>
                        <div class="text-muted sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5">7 AM</div>
                      </div>
                      <div>
                        <div class="text-muted sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5">8 AM</div>
                      </div>
                      <div>
                        <div class="text-muted sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5">9 AM</div>
                      </div>
                      <div>
                        <div class="text-muted sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5">10 AM</div>
                      </div>
                      <div>
                        <div class="text-muted sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5">11 AM</div>
                      </div>
                      <div>
                        <div class="text-muted sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5">12 PM</div>
                      </div>
                      <div>
                        <div class="text-muted sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5">1 PM</div>
                      </div>
                      <div>
                        <div class="text-muted sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5">2 PM</div>
                      </div>
                      <div>
                        <div class="text-muted sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5">3 PM</div>
                      </div>
                      <div>
                        <div class="text-muted sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5">4 PM</div>
                      </div>
                      <div>
                        <div class="text-muted sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5">5 PM</div>
                      </div>
                      <div>
                        <div class="text-muted sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5">6 PM</div>
                      </div>
                      <div>
                        <div class="text-muted sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5">7 PM</div>
                      </div>
                      <div>
                        <div class="text-muted sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5">8 PM</div>
                      </div>
                      <div>
                        <div class="text-muted sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5">9 PM</div>
                      </div>
                      <div>
                        <div class="text-muted sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5">10 PM</div>
                      </div>
                      <div>
                        <div class="text-muted sticky left-0 z-20 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5">11 PM</div>
                      </div>
                    </div>
                    <div class="divide-default border-default col-start-1 col-end-2 row-start-1 grid grid-cols-7 grid-rows-1 divide-x border-r">
                      <div class="row-span-full transition-colors" style="grid-column-start:1" />
                      <div class="row-span-full transition-colors" style="grid-column-start:2" />
                      <div class="row-span-full transition-colors" style="grid-column-start:3" />
                      <div class="row-span-full transition-colors" style="grid-column-start:4" />
                      <div class="row-span-full transition-colors" style="grid-column-start:5" />
                      <div class="row-span-full transition-colors" style="grid-column-start:6" />
                      <div class="relative col-start-7 row-span-full">
                        <div class="pointer-events-none absolute inset-x-0 top-7 bottom-0 transition-colors" style="background-color:color-mix(in oklch, var(--ui-bg-muted) 38%, transparent);background-image:linear-gradient(to bottom, transparent calc(100% - 1px), color-mix(in oklch, var(--ui-border) 72%, transparent) calc(100% - 1px)), repeating-linear-gradient(-32deg, color-mix(in oklch, var(--ui-text-muted) 10%, transparent) 0 2px, transparent 2px 12px);background-repeat:repeat-y, repeat;background-size:100% 7rem, auto" />
                      </div>
                    </div>
                    <div class="pointer-events-none col-start-1 col-end-2 row-start-1" style="background-image:linear-gradient(to bottom, transparent calc(100% - 1px), color-mix(in oklch, var(--ui-border) 72%, transparent) calc(100% - 1px));background-position:0 1.75rem;background-repeat:repeat-y;background-size:100% 7rem" />
                    <ol class="col-start-1 col-end-2 row-start-1 grid grid-cols-7" style="grid-template-rows:1.75rem repeat(288, minmax(0, 1fr)) auto">
                      <li class="relative mt-px flex sm:col-start-1" style="grid-row:14 / span 36;grid-column:1">
                        <NuxtLink class="group absolute inset-1 flex cursor-grab flex-col overflow-hidden rounded-lg px-2.5 py-2 text-xs/5 transition-opacity active:cursor-grabbing sm:px-3 sm:py-2.5 border border-success/90 bg-success/10 hover:bg-success/10 dark:border-success dark:bg-success dark:hover:bg-success/90" to="#">
                          <p class="min-w-0 font-semibold text-[13px] leading-6 text-success dark:text-success text-highlighted" style="display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden">
                            <span class="mr-1.5 font-medium opacity-70">RFC-106</span>
                            Add mock dependencies and handoff notes
                          </p>
                          <p class="mt-1 text-[11px] font-medium text-success group-hover:text-success dark:text-success dark:group-hover:text-success">1:00 - 2:30 AM</p>
                        </NuxtLink>
                      </li>
                      <li class="relative mt-px flex sm:col-start-2" style="grid-row:41 / span 12;grid-column:2">
                        <NuxtLink class="group absolute inset-1 flex cursor-grab flex-col overflow-hidden rounded-lg px-2.5 py-2 text-xs/5 transition-opacity active:cursor-grabbing sm:px-3 sm:py-2.5 border border-(--ui-border)/90 bg-default hover:bg-default dark:border-default dark:bg-default dark:hover:bg-default" to="#">
                          <p class="min-w-0 font-semibold text-[12px] leading-5 text-default dark:text-default text-highlighted" style="display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden">
                            <span class="mr-1.5 font-medium opacity-70">RFC-108</span>
                            Prepare issue calendar follow-up screen
                          </p>
                          <p class="mt-1 text-[11px] font-medium text-muted group-hover:text-default dark:text-muted dark:group-hover:text-default">3:15 - 4:15 AM</p>
                        </NuxtLink>
                      </li>
                      <li class="relative mt-px flex sm:col-start-4" style="grid-row:23 / span 48;grid-column:4">
                        <NuxtLink class="group absolute inset-1 flex cursor-grab flex-col overflow-hidden rounded-lg px-2.5 py-2 text-xs/5 transition-opacity active:cursor-grabbing sm:px-3 sm:py-2.5 border border-secondary/90 bg-secondary/10 hover:bg-secondary/10 dark:border-secondary dark:bg-secondary dark:hover:bg-secondary/90" to="#">
                          <p class="min-w-0 font-semibold text-[13px] leading-6 text-secondary dark:text-secondary text-highlighted" style="display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4;overflow:hidden">
                            <span class="mr-1.5 font-medium opacity-70">RFC-103</span>
                            Sync issue filters with project views
                          </p>
                          <p class="mt-1 text-[11px] font-medium text-secondary group-hover:text-secondary dark:text-secondary dark:group-hover:text-secondary">1:45 - 3:45 AM</p>
                          <div class="mt-auto flex min-w-0 items-end gap-2 pt-3">
                            <div class="flex shrink-0 items-center">
                              <div class="flex items-center">
                                <span class="relative flex shrink-0 overflow-hidden rounded-full -ml-1 size-6 border border-inverted shadow-sm first:ml-0 dark:border-default" style="z-index:3">
                                  <img class="aspect-square h-full w-full" alt="Kai Young" src="/reference/82a5a2284fceeed0.png" loading="lazy" />
                                </span>
                                <span class="relative flex shrink-0 overflow-hidden rounded-full -ml-1 size-6 border border-inverted shadow-sm first:ml-0 dark:border-default" style="z-index:2">
                                  <img class="aspect-square h-full w-full" alt="Ava Reed" src="/reference/5985a55c7498fe2e.png" loading="lazy" />
                                </span>
                                <span class="relative flex shrink-0 overflow-hidden rounded-full -ml-1 size-6 border border-inverted shadow-sm first:ml-0 dark:border-default" style="z-index:1">
                                  <img class="aspect-square h-full w-full" alt="Nina Oliver" src="/reference/ac13c01a479a177b.png" loading="lazy" />
                                </span>
                              </div>
                              <span class="ml-2 shrink-0 text-[11px] font-medium text-secondary group-hover:text-secondary dark:text-secondary dark:group-hover:text-secondary">+2</span>
                            </div>
                            <span class="min-w-0 flex-1 truncate text-right text-[11px] font-medium text-secondary group-hover:text-secondary dark:text-secondary dark:group-hover:text-secondary">Views review</span>
                          </div>
                        </NuxtLink>
                      </li>
                      <li class="relative mt-px flex sm:col-start-6" style="grid-row:56 / span 24;grid-column:6">
                        <NuxtLink class="group absolute inset-1 flex cursor-grab flex-col overflow-hidden rounded-lg px-2.5 py-2 text-xs/5 transition-opacity active:cursor-grabbing sm:px-3 sm:py-2.5 border border-secondary/90 bg-secondary/10 hover:bg-secondary/10 dark:border-secondary dark:bg-secondary dark:hover:bg-secondary/90" to="#">
                          <p class="min-w-0 font-semibold text-[13px] leading-6 text-secondary dark:text-secondary text-highlighted" style="display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden">
                            <span class="mr-1.5 font-medium opacity-70">RFC-101</span>
                            Finalize issue timeline architecture
                          </p>
                          <p class="mt-1 text-[11px] font-medium text-secondary group-hover:text-secondary dark:text-secondary dark:group-hover:text-secondary">4:30 - 5:30 AM</p>
                        </NuxtLink>
                      </li>
                      <li class="relative mt-px flex sm:col-start-2" style="grid-row:110 / span 12;grid-column:2">
                        <NuxtLink class="group absolute inset-1 flex cursor-grab flex-col overflow-hidden rounded-lg px-2.5 py-2 text-xs/5 transition-opacity active:cursor-grabbing sm:px-3 sm:py-2.5 border border-info/90 bg-info/10 hover:bg-info/10 dark:border-info dark:bg-info dark:hover:bg-info/90" to="#">
                          <p class="min-w-0 font-semibold text-[12px] leading-5 text-info dark:text-info text-highlighted" style="display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden">
                            <span class="mr-1.5 font-medium opacity-70">RFC-102</span>
                            Review gantt interaction states
                          </p>
                          <p class="mt-1 text-[11px] font-medium text-info group-hover:text-info dark:text-info dark:group-hover:text-info">9:00 - 9:30 AM</p>
                        </NuxtLink>
                      </li>
                      <li class="relative mt-px flex sm:col-start-3" style="grid-row:122 / span 36;grid-column:3">
                        <NuxtLink class="group absolute inset-1 flex cursor-grab flex-col overflow-hidden rounded-lg px-2.5 py-2 text-xs/5 transition-opacity active:cursor-grabbing sm:px-3 sm:py-2.5 border border-info/90 bg-info/10 hover:bg-info/10 dark:border-info dark:bg-info dark:hover:bg-info/90" to="#">
                          <p class="min-w-0 font-semibold text-[13px] leading-6 text-info dark:text-info text-highlighted" style="display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden">
                            <span class="mr-1.5 font-medium opacity-70">RFC-105</span>
                            Create empty and loading timeline states
                          </p>
                          <p class="mt-1 text-[11px] font-medium text-info group-hover:text-info dark:text-info dark:group-hover:text-info">10:00 - 11:30 AM</p>
                        </NuxtLink>
                      </li>
                      <li class="relative mt-px flex sm:col-start-4" style="grid-row:110 / span 36;grid-column:4">
                        <NuxtLink class="group absolute inset-1 flex cursor-grab flex-col overflow-hidden rounded-lg px-2.5 py-2 text-xs/5 transition-opacity active:cursor-grabbing sm:px-3 sm:py-2.5 border border-secondary/90 bg-secondary/10 hover:bg-secondary/10 dark:border-secondary dark:bg-secondary dark:hover:bg-secondary/90" to="#">
                          <p class="min-w-0 font-semibold text-[13px] leading-6 text-secondary dark:text-secondary text-highlighted" style="display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden">
                            <span class="mr-1.5 font-medium opacity-70">RFC-101</span>
                            Finalize issue timeline architecture
                          </p>
                          <p class="mt-1 text-[11px] font-medium text-secondary group-hover:text-secondary dark:text-secondary dark:group-hover:text-secondary">9:00 - 10:30 AM</p>
                        </NuxtLink>
                      </li>
                      <li class="relative mt-px flex sm:col-start-4" style="grid-row:158 / span 36;grid-column:4">
                        <NuxtLink class="group absolute inset-1 flex cursor-grab flex-col overflow-hidden rounded-lg px-2.5 py-2 text-xs/5 transition-opacity active:cursor-grabbing sm:px-3 sm:py-2.5 border border-secondary/90 bg-secondary/10 hover:bg-secondary/10 dark:border-secondary dark:bg-secondary dark:hover:bg-secondary/90" to="#">
                          <p class="min-w-0 font-semibold text-[13px] leading-6 text-secondary dark:text-secondary text-highlighted" style="display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden">
                            <span class="mr-1.5 font-medium opacity-70">RFC-103</span>
                            Sync issue filters with project views
                          </p>
                          <p class="mt-1 text-[11px] font-medium text-secondary group-hover:text-secondary dark:text-secondary dark:group-hover:text-secondary">11:30 AM - 1:00 PM</p>
                        </NuxtLink>
                      </li>
                      <li class="relative mt-px flex sm:col-start-5" style="grid-row:116 / span 12;grid-column:5">
                        <NuxtLink class="group absolute inset-1 flex cursor-grab flex-col overflow-hidden rounded-lg px-2.5 py-2 text-xs/5 transition-opacity active:cursor-grabbing sm:px-3 sm:py-2.5 border border-secondary/90 bg-secondary/10 hover:bg-secondary/10 dark:border-secondary dark:bg-secondary dark:hover:bg-secondary/90" to="#">
                          <p class="min-w-0 font-semibold text-[12px] leading-5 text-secondary dark:text-secondary text-highlighted" style="display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden">
                            <span class="mr-1.5 font-medium opacity-70">RFC-107</span>
                            Polish the quarter view density
                          </p>
                          <p class="mt-1 text-[11px] font-medium text-secondary group-hover:text-secondary dark:text-secondary dark:group-hover:text-secondary">9:30 - 10:00 AM</p>
                        </NuxtLink>
                      </li>
                      <li class="relative mt-px flex sm:col-start-6" style="grid-row:122 / span 30;grid-column:6">
                        <NuxtLink class="group absolute inset-1 flex cursor-grab flex-col overflow-hidden rounded-lg px-2.5 py-2 text-xs/5 transition-opacity active:cursor-grabbing sm:px-3 sm:py-2.5 border border-(--ui-border)/90 bg-default hover:bg-default dark:border-default dark:bg-default dark:hover:bg-default" to="#">
                          <p class="min-w-0 font-semibold text-[13px] leading-6 text-default dark:text-default text-highlighted" style="display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden">
                            <span class="mr-1.5 font-medium opacity-70">RFC-104</span>
                            Document drag and resize behavior
                          </p>
                          <p class="mt-1 text-[11px] font-medium text-muted group-hover:text-default dark:text-muted dark:group-hover:text-default">10:00 - 11:15 AM</p>
                        </NuxtLink>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
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
</style>
