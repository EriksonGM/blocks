<!-- Page: /ai-chat/skills-manager | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Skills manager · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "searchSkills": "",
  "enableWeeklyBrief": true,
  "enableDataQualityReview": true,
  "enableMeetingFollowUps": true,
  "enableReleaseNotes": false
})

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
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/skills-manager">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="min-h-0 flex-1 overflow-y-auto">
        <div class="mx-auto flex w-full max-w-6xl flex-col gap-9 px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
          <header class="flex flex-wrap items-start justify-between gap-5">
            <div class="flex flex-col gap-2">
              <h1 class="text-2xl font-semibold tracking-tight text-highlighted">Skills</h1>
              <p class="text-muted text-sm">Reusable instructions for your team’s everyday work.</p>
            </div>
            <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Create skill" type="button" @click="openAction(&quot;Create skill&quot;)">
              <UIcon name="i-lucide-plus" class="size-4" />
              Create skill
            </UButton>
          </header>
          <section class="flex flex-col gap-4">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div class="flex items-baseline gap-2">
                <h2 id="installed-heading" class="text-sm font-medium text-highlighted">Installed</h2>
                <span class="text-muted text-xs">3 enabled · 4 total</span>
              </div>
              <div data-slot="input-group" role="group" class="group/input-group relative flex h-9 min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 w-full sm:w-64">
                <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-first pl-2 has-[&gt;button]:-ml-1 has-[&gt;kbd]:ml-[-0.15rem]">
                  <UIcon name="i-lucide-search" class="size-4" />
                </div>
                <UInput v-model="form.searchSkills" type="text" data-slot="input-group-control" aria-label="Search skills" placeholder="Search skills…" name="searchSkills" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
              </div>
            </div>
            <div class="grid gap-3 md:grid-cols-2">
              <!-- Card 1: Weekly briefTurn project updates into a short, decision-ready team brief. -->
              <UCard class="rounded-lg flex items-center gap-4 px-4 py-4" :ui="{ body: 'contents' }">
                <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented flex min-w-0 flex-1 flex-col gap-1.5 rounded-sm text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="Weekly briefTurn project updates into a short, decision-ready team brief." type="button" @click="openAction(&quot;Weekly briefTurn project updates into a short, decision-ready team brief.&quot;)">
                  <span class="text-sm font-medium">Weekly brief</span>
                  <span class="text-muted line-clamp-1 text-xs leading-5">Turn project updates into a short, decision-ready team brief.</span>
                </UButton>
                <USwitch v-model="form.enableWeeklyBrief" aria-label="Enable Weekly brief" />
              </UCard>
              <!-- Card 2: Data quality reviewCheck a dataset for missing values, duplicates, and unexpected changes. -->
              <UCard class="rounded-lg flex items-center gap-4 px-4 py-4" :ui="{ body: 'contents' }">
                <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented flex min-w-0 flex-1 flex-col gap-1.5 rounded-sm text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="Data quality reviewCheck a dataset for missing values, duplicates, and unexpected changes." type="button" @click="openAction(&quot;Data quality reviewCheck a dataset for missing values, duplicates, and unexpected changes.&quot;)">
                  <span class="text-sm font-medium">Data quality review</span>
                  <span class="text-muted line-clamp-1 text-xs leading-5">Check a dataset for missing values, duplicates, and unexpected changes.</span>
                </UButton>
                <USwitch v-model="form.enableDataQualityReview" aria-label="Enable Data quality review" />
              </UCard>
              <!-- Card 3: Meeting follow-upsExtract decisions and clearly assigned actions from meeting notes. -->
              <UCard class="rounded-lg flex items-center gap-4 px-4 py-4" :ui="{ body: 'contents' }">
                <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented flex min-w-0 flex-1 flex-col gap-1.5 rounded-sm text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="Meeting follow-upsExtract decisions and clearly assigned actions from meeting notes." type="button" @click="openAction(&quot;Meeting follow-upsExtract decisions and clearly assigned actions from meeting notes.&quot;)">
                  <span class="text-sm font-medium">Meeting follow-ups</span>
                  <span class="text-muted line-clamp-1 text-xs leading-5">Extract decisions and clearly assigned actions from meeting notes.</span>
                </UButton>
                <USwitch v-model="form.enableMeetingFollowUps" aria-label="Enable Meeting follow-ups" />
              </UCard>
              <!-- Card 4: Release notesTranslate engineering changes into clear product announcements. -->
              <UCard class="rounded-lg flex items-center gap-4 px-4 py-4" :ui="{ body: 'contents' }">
                <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented flex min-w-0 flex-1 flex-col gap-1.5 rounded-sm text-left focus-visible:ring-2 focus-visible:outline-none" aria-label="Release notesTranslate engineering changes into clear product announcements." type="button" @click="openAction(&quot;Release notesTranslate engineering changes into clear product announcements.&quot;)">
                  <span class="text-sm font-medium">Release notes</span>
                  <span class="text-muted line-clamp-1 text-xs leading-5">Translate engineering changes into clear product announcements.</span>
                </UButton>
                <USwitch v-model="form.enableReleaseNotes" aria-label="Enable Release notes" />
              </UCard>
            </div>
          </section>
          <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
          <section class="flex flex-col gap-4">
            <div class="flex items-baseline justify-between gap-3">
              <h2 id="recent-heading" class="text-sm font-medium text-highlighted">Recently added</h2>
              <span class="text-muted text-xs">8 skills</span>
            </div>
            <div class="grid gap-4 md:grid-cols-2">
              <!-- Card 5: Decision record -->
              <UCard class="rounded-lg flex flex-col" :ui="{ body: 'contents' }">
                <div class="flex flex-col space-y-1.5 flex-1 gap-3 p-5">
                  <div class="flex items-start justify-between gap-3">
                    <div class="flex min-w-0 items-center gap-2.5">
                      <div class="bg-muted flex size-8 shrink-0 items-center justify-center rounded-lg">
                        <UIcon name="i-lucide-file-text" class="size-4" />
                      </div>
                      <div class="leading-none font-semibold tracking-tight">
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented rounded-sm text-left text-sm leading-5 hover:underline focus-visible:ring-2 focus-visible:outline-none" aria-label="Decision record" type="button" @click="openAction(&quot;Decision record&quot;)">
                          Decision record
                        </UButton>
                      </div>
                    </div>
                    <span class="text-muted shrink-0 text-[11px]">Today</span>
                  </div>
                  <div class="text-muted text-sm">Capture the context, alternatives, and trade-offs behind an important team decision.</div>
                </div>
                <div class="flex items-center p-6 pt-0 justify-between gap-3 px-5 pb-4">
                  <span class="text-muted text-xs">By Workspace team</span>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Install" type="button" @click="openAction(&quot;Install&quot;)">
                    <UIcon name="i-lucide-download" class="size-4" />
                    Install
                  </UButton>
                </div>
              </UCard>
              <!-- Card 6: Customer feedback themes -->
              <UCard class="rounded-lg flex flex-col" :ui="{ body: 'contents' }">
                <div class="flex flex-col space-y-1.5 flex-1 gap-3 p-5">
                  <div class="flex items-start justify-between gap-3">
                    <div class="flex min-w-0 items-center gap-2.5">
                      <div class="bg-muted flex size-8 shrink-0 items-center justify-center rounded-lg">
                        <UIcon name="i-lucide-book-open" class="size-4" />
                      </div>
                      <div class="leading-none font-semibold tracking-tight">
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented rounded-sm text-left text-sm leading-5 hover:underline focus-visible:ring-2 focus-visible:outline-none" aria-label="Customer feedback themes" type="button" @click="openAction(&quot;Customer feedback themes&quot;)">
                          Customer feedback themes
                        </UButton>
                      </div>
                    </div>
                    <span class="text-muted shrink-0 text-[11px]">Today</span>
                  </div>
                  <div class="text-muted text-sm">Find recurring patterns in customer conversations and link each theme to supporting examples.</div>
                </div>
                <div class="flex items-center p-6 pt-0 justify-between gap-3 px-5 pb-4">
                  <span class="text-muted text-xs">By Maya Chen</span>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Install" type="button" @click="openAction(&quot;Install&quot;)">
                    <UIcon name="i-lucide-download" class="size-4" />
                    Install
                  </UButton>
                </div>
              </UCard>
              <!-- Card 7: Metric commentary -->
              <UCard class="rounded-lg flex flex-col" :ui="{ body: 'contents' }">
                <div class="flex flex-col space-y-1.5 flex-1 gap-3 p-5">
                  <div class="flex items-start justify-between gap-3">
                    <div class="flex min-w-0 items-center gap-2.5">
                      <div class="bg-muted flex size-8 shrink-0 items-center justify-center rounded-lg">
                        <UIcon name="i-lucide-book-open" class="size-4" />
                      </div>
                      <div class="leading-none font-semibold tracking-tight">
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented rounded-sm text-left text-sm leading-5 hover:underline focus-visible:ring-2 focus-visible:outline-none" aria-label="Metric commentary" type="button" @click="openAction(&quot;Metric commentary&quot;)">
                          Metric commentary
                        </UButton>
                      </div>
                    </div>
                    <span class="text-muted shrink-0 text-[11px]">Yesterday</span>
                  </div>
                  <div class="text-muted text-sm">Explain what changed in a report, why it might matter, and what should be checked next.</div>
                </div>
                <div class="flex items-center p-6 pt-0 justify-between gap-3 px-5 pb-4">
                  <span class="text-muted text-xs">By Priya Shah</span>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Install" type="button" @click="openAction(&quot;Install&quot;)">
                    <UIcon name="i-lucide-download" class="size-4" />
                    Install
                  </UButton>
                </div>
              </UCard>
              <!-- Card 8: Project handoff -->
              <UCard class="rounded-lg flex flex-col" :ui="{ body: 'contents' }">
                <div class="flex flex-col space-y-1.5 flex-1 gap-3 p-5">
                  <div class="flex items-start justify-between gap-3">
                    <div class="flex min-w-0 items-center gap-2.5">
                      <div class="bg-muted flex size-8 shrink-0 items-center justify-center rounded-lg">
                        <UIcon name="i-lucide-list-checks" class="size-4" />
                      </div>
                      <div class="leading-none font-semibold tracking-tight">
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented rounded-sm text-left text-sm leading-5 hover:underline focus-visible:ring-2 focus-visible:outline-none" aria-label="Project handoff" type="button" @click="openAction(&quot;Project handoff&quot;)">
                          Project handoff
                        </UButton>
                      </div>
                    </div>
                    <span class="text-muted shrink-0 text-[11px]">Yesterday</span>
                  </div>
                  <div class="text-muted text-sm">Prepare a handoff that gives the next owner the context, open questions, and next steps.</div>
                </div>
                <div class="flex items-center p-6 pt-0 justify-between gap-3 px-5 pb-4">
                  <span class="text-muted text-xs">By Alex Morgan</span>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Install" type="button" @click="openAction(&quot;Install&quot;)">
                    <UIcon name="i-lucide-download" class="size-4" />
                    Install
                  </UButton>
                </div>
              </UCard>
              <!-- Card 9: Release notes -->
              <UCard class="rounded-lg flex flex-col" :ui="{ body: 'contents' }">
                <div class="flex flex-col space-y-1.5 flex-1 gap-3 p-5">
                  <div class="flex items-start justify-between gap-3">
                    <div class="flex min-w-0 items-center gap-2.5">
                      <div class="bg-muted flex size-8 shrink-0 items-center justify-center rounded-lg">
                        <UIcon name="i-lucide-file-text" class="size-4" />
                      </div>
                      <div class="leading-none font-semibold tracking-tight">
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented rounded-sm text-left text-sm leading-5 hover:underline focus-visible:ring-2 focus-visible:outline-none" aria-label="Release notes" type="button" @click="openAction(&quot;Release notes&quot;)">
                          Release notes
                        </UButton>
                      </div>
                    </div>
                    <span class="text-muted shrink-0 text-[11px]">13 Sep</span>
                  </div>
                  <div class="text-muted text-sm">Translate engineering changes into clear product announcements.</div>
                </div>
                <div class="flex items-center p-6 pt-0 justify-between gap-3 px-5 pb-4">
                  <span class="text-muted text-xs">By Jonas Weber</span>
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Installed" type="button" @click="openAction(&quot;Installed&quot;)">
                    <UIcon name="i-lucide-check" class="size-4" />
                    Installed
                  </UButton>
                </div>
              </UCard>
              <!-- Card 10: Meeting follow-ups -->
              <UCard class="rounded-lg flex flex-col" :ui="{ body: 'contents' }">
                <div class="flex flex-col space-y-1.5 flex-1 gap-3 p-5">
                  <div class="flex items-start justify-between gap-3">
                    <div class="flex min-w-0 items-center gap-2.5">
                      <div class="bg-muted flex size-8 shrink-0 items-center justify-center rounded-lg">
                        <UIcon name="i-lucide-list-checks" class="size-4" />
                      </div>
                      <div class="leading-none font-semibold tracking-tight">
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented rounded-sm text-left text-sm leading-5 hover:underline focus-visible:ring-2 focus-visible:outline-none" aria-label="Meeting follow-ups" type="button" @click="openAction(&quot;Meeting follow-ups&quot;)">
                          Meeting follow-ups
                        </UButton>
                      </div>
                    </div>
                    <span class="text-muted shrink-0 text-[11px]">12 Sep</span>
                  </div>
                  <div class="text-muted text-sm">Extract decisions and clearly assigned actions from meeting notes.</div>
                </div>
                <div class="flex items-center p-6 pt-0 justify-between gap-3 px-5 pb-4">
                  <span class="text-muted text-xs">By Workspace team</span>
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Installed" type="button" @click="openAction(&quot;Installed&quot;)">
                    <UIcon name="i-lucide-check" class="size-4" />
                    Installed
                  </UButton>
                </div>
              </UCard>
              <!-- Card 11: Data quality review -->
              <UCard class="rounded-lg flex flex-col" :ui="{ body: 'contents' }">
                <div class="flex flex-col space-y-1.5 flex-1 gap-3 p-5">
                  <div class="flex items-start justify-between gap-3">
                    <div class="flex min-w-0 items-center gap-2.5">
                      <div class="bg-muted flex size-8 shrink-0 items-center justify-center rounded-lg">
                        <UIcon name="i-lucide-book-open" class="size-4" />
                      </div>
                      <div class="leading-none font-semibold tracking-tight">
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented rounded-sm text-left text-sm leading-5 hover:underline focus-visible:ring-2 focus-visible:outline-none" aria-label="Data quality review" type="button" @click="openAction(&quot;Data quality review&quot;)">
                          Data quality review
                        </UButton>
                      </div>
                    </div>
                    <span class="text-muted shrink-0 text-[11px]">11 Sep</span>
                  </div>
                  <div class="text-muted text-sm">Check a dataset for missing values, duplicates, and unexpected changes.</div>
                </div>
                <div class="flex items-center p-6 pt-0 justify-between gap-3 px-5 pb-4">
                  <span class="text-muted text-xs">By Priya Shah</span>
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Installed" type="button" @click="openAction(&quot;Installed&quot;)">
                    <UIcon name="i-lucide-check" class="size-4" />
                    Installed
                  </UButton>
                </div>
              </UCard>
              <!-- Card 12: Weekly brief -->
              <UCard class="rounded-lg flex flex-col" :ui="{ body: 'contents' }">
                <div class="flex flex-col space-y-1.5 flex-1 gap-3 p-5">
                  <div class="flex items-start justify-between gap-3">
                    <div class="flex min-w-0 items-center gap-2.5">
                      <div class="bg-muted flex size-8 shrink-0 items-center justify-center rounded-lg">
                        <UIcon name="i-lucide-file-text" class="size-4" />
                      </div>
                      <div class="leading-none font-semibold tracking-tight">
                        <UButton color="neutral" variant="ghost" class="focus-visible:ring-accented rounded-sm text-left text-sm leading-5 hover:underline focus-visible:ring-2 focus-visible:outline-none" aria-label="Weekly brief" type="button" @click="openAction(&quot;Weekly brief&quot;)">
                          Weekly brief
                        </UButton>
                      </div>
                    </div>
                    <span class="text-muted shrink-0 text-[11px]">10 Sep</span>
                  </div>
                  <div class="text-muted text-sm">Turn project updates into a short, decision-ready team brief.</div>
                </div>
                <div class="flex items-center p-6 pt-0 justify-between gap-3 px-5 pb-4">
                  <span class="text-muted text-xs">By Workspace team</span>
                  <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Installed" type="button" @click="openAction(&quot;Installed&quot;)">
                    <UIcon name="i-lucide-check" class="size-4" />
                    Installed
                  </UButton>
                </div>
              </UCard>
            </div>
          </section>
          <p class="text-muted pb-2 text-xs">Demo workspace · Changes apply to this session.</p>
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
