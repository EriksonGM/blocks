<!-- Page: /ai-chat/batch-jobs | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Batch jobs · Blocks Admin" })

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/batch-jobs">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="jsx-c4660c1b72e4d478 flex min-h-0 flex-1 flex-col overflow-hidden">
        <div class="jsx-c4660c1b72e4d478 flex h-full min-h-0 w-full flex-col lg:grid lg:grid-cols-[248px_minmax(0,1fr)]">
          <aside class="jsx-c4660c1b72e4d478 shrink-0 border-b px-3 py-2 lg:h-full lg:overflow-hidden lg:border-r lg:border-b-0 lg:px-6 lg:py-6 border-default">
            <h1 class="jsx-c4660c1b72e4d478 hidden px-2 text-lg font-semibold tracking-tight lg:block text-highlighted">Batch jobs</h1>
            <nav aria-label="Batch job views" class="jsx-c4660c1b72e4d478 grid grid-cols-2 gap-1 sm:flex lg:mt-4 lg:grid lg:grid-cols-1 lg:gap-0.5">
              <UButton color="neutral" variant="soft" class="jsx-c4660c1b72e4d478 flex h-9 w-full shrink-0 items-center gap-2.5 rounded-md px-3 text-left text-[13px] whitespace-nowrap transition-colors outline-none focus-visible:ring-0 sm:w-auto lg:w-full text-muted hover:bg-(--ui-bg-muted)/60 hover:text-highlighted" aria-label="Batches" type="button" @click="openAction(&quot;Batches&quot;)">
                <UIcon name="i-lucide-file-braces" class="size-4 shrink-0" />
                <span class="jsx-c4660c1b72e4d478 truncate">Batches</span>
              </UButton>
              <UButton color="neutral" variant="soft" class="jsx-c4660c1b72e4d478 flex h-9 w-full shrink-0 items-center gap-2.5 rounded-md px-3 text-left text-[13px] whitespace-nowrap transition-colors outline-none focus-visible:ring-0 sm:w-auto lg:w-full bg-(--ui-bg-muted)/80 text-highlighted font-medium" aria-label="Processing timeline" type="button" @click="openAction(&quot;Processing timeline&quot;)">
                <UIcon name="i-lucide-layers" class="size-4 shrink-0" />
                <span class="jsx-c4660c1b72e4d478 truncate">Processing timeline</span>
              </UButton>
              <UButton color="neutral" variant="soft" class="jsx-c4660c1b72e4d478 flex h-9 w-full shrink-0 items-center gap-2.5 rounded-md px-3 text-left text-[13px] whitespace-nowrap transition-colors outline-none focus-visible:ring-0 sm:w-auto lg:w-full text-muted hover:bg-(--ui-bg-muted)/60 hover:text-highlighted" aria-label="Failed batches" type="button" @click="openAction(&quot;Failed batches&quot;)">
                <UIcon name="i-lucide-triangle-alert" class="size-4 shrink-0" />
                <span class="jsx-c4660c1b72e4d478 truncate">Failed batches</span>
              </UButton>
              <UButton color="neutral" variant="soft" class="jsx-c4660c1b72e4d478 flex h-9 w-full shrink-0 items-center gap-2.5 rounded-md px-3 text-left text-[13px] whitespace-nowrap transition-colors outline-none focus-visible:ring-0 sm:w-auto lg:w-full text-muted hover:bg-(--ui-bg-muted)/60 hover:text-highlighted" aria-label="Outputs" type="button" @click="openAction(&quot;Outputs&quot;)">
                <UIcon name="i-lucide-download" class="size-4 shrink-0" />
                <span class="jsx-c4660c1b72e4d478 truncate">Outputs</span>
              </UButton>
            </nav>
          </aside>
          <div class="jsx-c4660c1b72e4d478 flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
            <div class="jsx-c4660c1b72e4d478 flex min-h-0 flex-1 flex-col overflow-hidden">
              <div class="jsx-c4660c1b72e4d478 bg-default z-10 shrink-0 px-5 py-4 sm:px-8">
                <div class="jsx-c4660c1b72e4d478 min-w-0">
                  <h2 class="jsx-c4660c1b72e4d478 text-xl font-semibold tracking-tight text-highlighted">Processing timeline</h2>
                  <p class="jsx-c4660c1b72e4d478 text-muted mt-0.5 text-xs">Batch → shard activity across the current processing window.</p>
                </div>
                <div class="jsx-c4660c1b72e4d478 mt-4 flex flex-wrap items-center gap-2">
                  <span class="jsx-c4660c1b72e4d478 text-muted text-xs">Current processing window</span>
                  <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs ml-auto" aria-label="Pause" type="button" @click="openAction(&quot;Pause&quot;)">
                    <UIcon name="i-lucide-pause" class="size-4" />
                    Pause
                  </UButton>
                </div>
              </div>
              <div class="jsx-c4660c1b72e4d478 min-h-0 flex-1 overflow-auto border-t border-default">
                <div class="min-w-[1040px] border-b border-default">
                  <div class="bg-default sticky top-0 z-30 grid grid-cols-[370px_minmax(660px,1fr)] border-b border-default">
                    <div class="bg-default text-muted sticky left-0 z-40 grid grid-cols-[1fr_86px] items-end border-r px-5 py-3 text-xs border-default">
                      <span>Batch / processing shard</span>
                      <span class="text-right">Progress</span>
                    </div>
                    <div class="grid grid-cols-6">
                      <div class="grid grid-rows-[14px_20px] gap-1 px-3 py-3 border-r border-default">
                        <p class="text-muted text-[10px]">Sep 13</p>
                        <p class="text-muted self-end text-xs">08:00</p>
                      </div>
                      <div class="grid grid-rows-[14px_20px] gap-1 px-3 py-3 border-r border-default">
                        <p class="text-muted text-[10px]" />
                        <p class="text-muted self-end text-xs">09:00</p>
                      </div>
                      <div class="grid grid-rows-[14px_20px] gap-1 px-3 py-3 border-r border-default">
                        <p class="text-muted text-[10px]" />
                        <p class="text-muted self-end text-xs">10:00</p>
                      </div>
                      <div class="grid grid-rows-[14px_20px] gap-1 px-3 py-3 border-r border-default">
                        <p class="text-muted text-[10px]" />
                        <p class="text-muted self-end text-xs">11:00</p>
                      </div>
                      <div class="grid grid-rows-[14px_20px] gap-1 px-3 py-3 border-r border-default">
                        <p class="text-muted text-[10px]" />
                        <p class="text-muted self-end text-xs">12:00</p>
                      </div>
                      <div class="grid grid-rows-[14px_20px] gap-1 px-3 py-3">
                        <p class="text-muted text-[10px]" />
                        <p class="text-muted self-end text-xs">13:00</p>
                      </div>
                    </div>
                  </div>
                  <div class="border-b last:border-b-0 border-default">
                    <div class="bg-(--ui-bg-muted)/15 grid min-h-14 grid-cols-[370px_minmax(660px,1fr)]">
                      <UButton color="neutral" variant="outline" class="bg-default hover:bg-(--ui-bg-muted)/30 sticky left-0 z-20 flex min-w-0 items-center gap-3 border-r px-5 text-left border-default" aria-label="Feedback classificationCustomer intelligence · GPT-4.178%" type="button" @click="openAction(&quot;Feedback classificationCustomer intelligence · GPT-4.178%&quot;)">
                        <UIcon name="i-lucide-chevron-down" class="text-muted size-4" />
                        <span class="bg-muted flex size-7 shrink-0 items-center justify-center rounded-md">
                          <UIcon name="i-lucide-layers" class="size-3.5" />
                        </span>
                        <span class="min-w-0 flex-1">
                          <span class="block truncate text-sm font-medium">Feedback classification</span>
                          <span class="text-muted block truncate text-[11px]">Customer intelligence · GPT-4.1</span>
                        </span>
                        <span class="text-muted text-xs tabular-nums">78%</span>
                      </UButton>
                      <div class="relative" />
                    </div>
                    <div class="grid min-h-12 grid-cols-[370px_minmax(660px,1fr)]">
                      <div class="bg-default sticky left-0 z-20 grid grid-cols-[1fr_86px] items-center border-r px-5 border-default">
                        <div class="relative flex h-full items-center gap-2 pl-[72px]">
                          <span class="text-sm">Shard 1</span>
                          <span class="text-muted text-xs">3,000 req</span>
                        </div>
                        <span class="text-muted text-right text-xs">78%</span>
                      </div>
                      <div class="relative min-h-12">
                        <div class="batch-timeline-reveal absolute inset-x-3 top-1/2 h-6 -translate-y-1/2" style="animation-delay:0s;animation-play-state:running">
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:2%;width:15%" aria-label="Feedback classification, shard 1, Processing" type="button" @click="openAction(&quot;Feedback classification, shard 1, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:20%;width:13%" aria-label="Feedback classification, shard 1, Processing" type="button" @click="openAction(&quot;Feedback classification, shard 1, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:36%;width:18%" aria-label="Feedback classification, shard 1, Processing" type="button" @click="openAction(&quot;Feedback classification, shard 1, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:58%;width:30%" aria-label="Feedback classification, shard 1, Processing" type="button" @click="openAction(&quot;Feedback classification, shard 1, Processing&quot;)" />
                        </div>
                      </div>
                    </div>
                    <div class="grid min-h-12 grid-cols-[370px_minmax(660px,1fr)]">
                      <div class="bg-default sticky left-0 z-20 grid grid-cols-[1fr_86px] items-center border-r px-5 border-default">
                        <div class="relative flex h-full items-center gap-2 pl-[72px]">
                          <span class="text-sm">Shard 2</span>
                          <span class="text-muted text-xs">3,000 req</span>
                        </div>
                        <span class="text-muted text-right text-xs">75%</span>
                      </div>
                      <div class="relative min-h-12">
                        <div class="batch-timeline-reveal absolute inset-x-3 top-1/2 h-6 -translate-y-1/2" style="animation-delay:0.08s;animation-play-state:running">
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:5%;width:18%" aria-label="Feedback classification, shard 2, Processing" type="button" @click="openAction(&quot;Feedback classification, shard 2, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:26%;width:14%" aria-label="Feedback classification, shard 2, Processing" type="button" @click="openAction(&quot;Feedback classification, shard 2, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-chart-4" style="left:43%;width:12%" aria-label="Feedback classification, shard 2, Retrying" type="button" @click="openAction(&quot;Feedback classification, shard 2, Retrying&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:58%;width:26%" aria-label="Feedback classification, shard 2, Processing" type="button" @click="openAction(&quot;Feedback classification, shard 2, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:88%;width:9%" aria-label="Feedback classification, shard 2, Processing" type="button" @click="openAction(&quot;Feedback classification, shard 2, Processing&quot;)" />
                        </div>
                      </div>
                    </div>
                    <div class="grid min-h-12 grid-cols-[370px_minmax(660px,1fr)]">
                      <div class="bg-default sticky left-0 z-20 grid grid-cols-[1fr_86px] items-center border-r px-5 border-default">
                        <div class="relative flex h-full items-center gap-2 pl-[72px]">
                          <span class="text-sm">Shard 3</span>
                          <span class="text-muted text-xs">3,000 req</span>
                        </div>
                        <span class="text-muted text-right text-xs">72%</span>
                      </div>
                      <div class="relative min-h-12">
                        <div class="batch-timeline-reveal absolute inset-x-3 top-1/2 h-6 -translate-y-1/2" style="animation-delay:0.16s;animation-play-state:running">
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:1%;width:21%" aria-label="Feedback classification, shard 3, Processing" type="button" @click="openAction(&quot;Feedback classification, shard 3, Processing&quot;)" />
                          <UButton color="neutral" variant="soft" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-(--ui-text-muted)/35" style="left:25%;width:8%" aria-label="Feedback classification, shard 3, Queued" type="button" @click="openAction(&quot;Feedback classification, shard 3, Queued&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:36%;width:17%" aria-label="Feedback classification, shard 3, Processing" type="button" @click="openAction(&quot;Feedback classification, shard 3, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-(--ui-error)" style="left:57%;width:9%" aria-label="Feedback classification, shard 3, Failed" type="button" @click="openAction(&quot;Feedback classification, shard 3, Failed&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:69%;width:25%" aria-label="Feedback classification, shard 3, Processing" type="button" @click="openAction(&quot;Feedback classification, shard 3, Processing&quot;)" />
                        </div>
                      </div>
                    </div>
                    <div class="grid min-h-12 grid-cols-[370px_minmax(660px,1fr)]">
                      <div class="bg-default sticky left-0 z-20 grid grid-cols-[1fr_86px] items-center border-r px-5 border-default">
                        <div class="relative flex h-full items-center gap-2 pl-[72px]">
                          <span class="text-sm">Shard 4</span>
                          <span class="text-muted text-xs">3,000 req</span>
                        </div>
                        <span class="text-muted text-right text-xs">69%</span>
                      </div>
                      <div class="relative min-h-12">
                        <div class="batch-timeline-reveal absolute inset-x-3 top-1/2 h-6 -translate-y-1/2" style="animation-delay:0.24s;animation-play-state:running">
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:4%;width:10%" aria-label="Feedback classification, shard 4, Processing" type="button" @click="openAction(&quot;Feedback classification, shard 4, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:17%;width:18%" aria-label="Feedback classification, shard 4, Processing" type="button" @click="openAction(&quot;Feedback classification, shard 4, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:38%;width:22%" aria-label="Feedback classification, shard 4, Processing" type="button" @click="openAction(&quot;Feedback classification, shard 4, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-chart-4" style="left:64%;width:6%" aria-label="Feedback classification, shard 4, Retrying" type="button" @click="openAction(&quot;Feedback classification, shard 4, Retrying&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:73%;width:24%" aria-label="Feedback classification, shard 4, Processing" type="button" @click="openAction(&quot;Feedback classification, shard 4, Processing&quot;)" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-b last:border-b-0 border-default">
                    <div class="bg-(--ui-bg-muted)/15 grid min-h-14 grid-cols-[370px_minmax(660px,1fr)]">
                      <UButton color="neutral" variant="outline" class="bg-default hover:bg-(--ui-bg-muted)/30 sticky left-0 z-20 flex min-w-0 items-center gap-3 border-r px-5 text-left border-default" aria-label="September product summariesCatalog enrichment · GPT-4.1 mini100%" type="button" @click="openAction(&quot;September product summariesCatalog enrichment · GPT-4.1 mini100%&quot;)">
                        <UIcon name="i-lucide-chevron-down" class="text-muted size-4" />
                        <span class="bg-muted flex size-7 shrink-0 items-center justify-center rounded-md">
                          <UIcon name="i-lucide-layers" class="size-3.5" />
                        </span>
                        <span class="min-w-0 flex-1">
                          <span class="block truncate text-sm font-medium">September product summaries</span>
                          <span class="text-muted block truncate text-[11px]">Catalog enrichment · GPT-4.1 mini</span>
                        </span>
                        <span class="text-muted text-xs tabular-nums">100%</span>
                      </UButton>
                      <div class="relative" />
                    </div>
                    <div class="grid min-h-12 grid-cols-[370px_minmax(660px,1fr)]">
                      <div class="bg-default sticky left-0 z-20 grid grid-cols-[1fr_86px] items-center border-r px-5 border-default">
                        <div class="relative flex h-full items-center gap-2 pl-[72px]">
                          <span class="text-sm">Shard 1</span>
                          <span class="text-muted text-xs">625 req</span>
                        </div>
                        <span class="text-muted text-right text-xs">100%</span>
                      </div>
                      <div class="relative min-h-12">
                        <div class="batch-timeline-reveal absolute inset-x-3 top-1/2 h-6 -translate-y-1/2" style="animation-delay:0.22s;animation-play-state:running">
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:2%;width:15%" aria-label="September product summaries, shard 1, Processing" type="button" @click="openAction(&quot;September product summaries, shard 1, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:20%;width:13%" aria-label="September product summaries, shard 1, Processing" type="button" @click="openAction(&quot;September product summaries, shard 1, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:36%;width:18%" aria-label="September product summaries, shard 1, Processing" type="button" @click="openAction(&quot;September product summaries, shard 1, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:58%;width:30%" aria-label="September product summaries, shard 1, Processing" type="button" @click="openAction(&quot;September product summaries, shard 1, Processing&quot;)" />
                        </div>
                      </div>
                    </div>
                    <div class="grid min-h-12 grid-cols-[370px_minmax(660px,1fr)]">
                      <div class="bg-default sticky left-0 z-20 grid grid-cols-[1fr_86px] items-center border-r px-5 border-default">
                        <div class="relative flex h-full items-center gap-2 pl-[72px]">
                          <span class="text-sm">Shard 2</span>
                          <span class="text-muted text-xs">625 req</span>
                        </div>
                        <span class="text-muted text-right text-xs">100%</span>
                      </div>
                      <div class="relative min-h-12">
                        <div class="batch-timeline-reveal absolute inset-x-3 top-1/2 h-6 -translate-y-1/2" style="animation-delay:0.3s;animation-play-state:running">
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:5%;width:18%" aria-label="September product summaries, shard 2, Processing" type="button" @click="openAction(&quot;September product summaries, shard 2, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:26%;width:14%" aria-label="September product summaries, shard 2, Processing" type="button" @click="openAction(&quot;September product summaries, shard 2, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:43%;width:12%" aria-label="September product summaries, shard 2, Processing" type="button" @click="openAction(&quot;September product summaries, shard 2, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:58%;width:26%" aria-label="September product summaries, shard 2, Processing" type="button" @click="openAction(&quot;September product summaries, shard 2, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:88%;width:9%" aria-label="September product summaries, shard 2, Processing" type="button" @click="openAction(&quot;September product summaries, shard 2, Processing&quot;)" />
                        </div>
                      </div>
                    </div>
                    <div class="grid min-h-12 grid-cols-[370px_minmax(660px,1fr)]">
                      <div class="bg-default sticky left-0 z-20 grid grid-cols-[1fr_86px] items-center border-r px-5 border-default">
                        <div class="relative flex h-full items-center gap-2 pl-[72px]">
                          <span class="text-sm">Shard 3</span>
                          <span class="text-muted text-xs">625 req</span>
                        </div>
                        <span class="text-muted text-right text-xs">100%</span>
                      </div>
                      <div class="relative min-h-12">
                        <div class="batch-timeline-reveal absolute inset-x-3 top-1/2 h-6 -translate-y-1/2" style="animation-delay:0.38s;animation-play-state:running">
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:1%;width:21%" aria-label="September product summaries, shard 3, Processing" type="button" @click="openAction(&quot;September product summaries, shard 3, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:25%;width:8%" aria-label="September product summaries, shard 3, Processing" type="button" @click="openAction(&quot;September product summaries, shard 3, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:36%;width:17%" aria-label="September product summaries, shard 3, Processing" type="button" @click="openAction(&quot;September product summaries, shard 3, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:57%;width:9%" aria-label="September product summaries, shard 3, Processing" type="button" @click="openAction(&quot;September product summaries, shard 3, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:69%;width:25%" aria-label="September product summaries, shard 3, Processing" type="button" @click="openAction(&quot;September product summaries, shard 3, Processing&quot;)" />
                        </div>
                      </div>
                    </div>
                    <div class="grid min-h-12 grid-cols-[370px_minmax(660px,1fr)]">
                      <div class="bg-default sticky left-0 z-20 grid grid-cols-[1fr_86px] items-center border-r px-5 border-default">
                        <div class="relative flex h-full items-center gap-2 pl-[72px]">
                          <span class="text-sm">Shard 4</span>
                          <span class="text-muted text-xs">625 req</span>
                        </div>
                        <span class="text-muted text-right text-xs">100%</span>
                      </div>
                      <div class="relative min-h-12">
                        <div class="batch-timeline-reveal absolute inset-x-3 top-1/2 h-6 -translate-y-1/2" style="animation-delay:0.45999999999999996s;animation-play-state:running">
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:4%;width:10%" aria-label="September product summaries, shard 4, Processing" type="button" @click="openAction(&quot;September product summaries, shard 4, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:17%;width:18%" aria-label="September product summaries, shard 4, Processing" type="button" @click="openAction(&quot;September product summaries, shard 4, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:38%;width:22%" aria-label="September product summaries, shard 4, Processing" type="button" @click="openAction(&quot;September product summaries, shard 4, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:64%;width:6%" aria-label="September product summaries, shard 4, Processing" type="button" @click="openAction(&quot;September product summaries, shard 4, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:73%;width:24%" aria-label="September product summaries, shard 4, Processing" type="button" @click="openAction(&quot;September product summaries, shard 4, Processing&quot;)" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-b last:border-b-0 border-default">
                    <div class="bg-(--ui-bg-muted)/15 grid min-h-14 grid-cols-[370px_minmax(660px,1fr)]">
                      <UButton color="neutral" variant="outline" class="bg-default hover:bg-(--ui-bg-muted)/30 sticky left-0 z-20 flex min-w-0 items-center gap-3 border-r px-5 text-left border-default" aria-label="Knowledge base tagsCatalog enrichment · GPT-4.1 mini100%" type="button" @click="openAction(&quot;Knowledge base tagsCatalog enrichment · GPT-4.1 mini100%&quot;)">
                        <UIcon name="i-lucide-chevron-down" class="text-muted size-4" />
                        <span class="bg-muted flex size-7 shrink-0 items-center justify-center rounded-md">
                          <UIcon name="i-lucide-layers" class="size-3.5" />
                        </span>
                        <span class="min-w-0 flex-1">
                          <span class="block truncate text-sm font-medium">Knowledge base tags</span>
                          <span class="text-muted block truncate text-[11px]">Catalog enrichment · GPT-4.1 mini</span>
                        </span>
                        <span class="text-muted text-xs tabular-nums">100%</span>
                      </UButton>
                      <div class="relative" />
                    </div>
                    <div class="grid min-h-12 grid-cols-[370px_minmax(660px,1fr)]">
                      <div class="bg-default sticky left-0 z-20 grid grid-cols-[1fr_86px] items-center border-r px-5 border-default">
                        <div class="relative flex h-full items-center gap-2 pl-[72px]">
                          <span class="text-sm">Shard 1</span>
                          <span class="text-muted text-xs">210 req</span>
                        </div>
                        <span class="text-muted text-right text-xs">100%</span>
                      </div>
                      <div class="relative min-h-12">
                        <div class="batch-timeline-reveal absolute inset-x-3 top-1/2 h-6 -translate-y-1/2" style="animation-delay:0.44s;animation-play-state:running">
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:2%;width:15%" aria-label="Knowledge base tags, shard 1, Processing" type="button" @click="openAction(&quot;Knowledge base tags, shard 1, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:20%;width:13%" aria-label="Knowledge base tags, shard 1, Processing" type="button" @click="openAction(&quot;Knowledge base tags, shard 1, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:36%;width:18%" aria-label="Knowledge base tags, shard 1, Processing" type="button" @click="openAction(&quot;Knowledge base tags, shard 1, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:58%;width:30%" aria-label="Knowledge base tags, shard 1, Processing" type="button" @click="openAction(&quot;Knowledge base tags, shard 1, Processing&quot;)" />
                        </div>
                      </div>
                    </div>
                    <div class="grid min-h-12 grid-cols-[370px_minmax(660px,1fr)]">
                      <div class="bg-default sticky left-0 z-20 grid grid-cols-[1fr_86px] items-center border-r px-5 border-default">
                        <div class="relative flex h-full items-center gap-2 pl-[72px]">
                          <span class="text-sm">Shard 2</span>
                          <span class="text-muted text-xs">210 req</span>
                        </div>
                        <span class="text-muted text-right text-xs">100%</span>
                      </div>
                      <div class="relative min-h-12">
                        <div class="batch-timeline-reveal absolute inset-x-3 top-1/2 h-6 -translate-y-1/2" style="animation-delay:0.52s;animation-play-state:running">
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:5%;width:18%" aria-label="Knowledge base tags, shard 2, Processing" type="button" @click="openAction(&quot;Knowledge base tags, shard 2, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:26%;width:14%" aria-label="Knowledge base tags, shard 2, Processing" type="button" @click="openAction(&quot;Knowledge base tags, shard 2, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:43%;width:12%" aria-label="Knowledge base tags, shard 2, Processing" type="button" @click="openAction(&quot;Knowledge base tags, shard 2, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:58%;width:26%" aria-label="Knowledge base tags, shard 2, Processing" type="button" @click="openAction(&quot;Knowledge base tags, shard 2, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:88%;width:9%" aria-label="Knowledge base tags, shard 2, Processing" type="button" @click="openAction(&quot;Knowledge base tags, shard 2, Processing&quot;)" />
                        </div>
                      </div>
                    </div>
                    <div class="grid min-h-12 grid-cols-[370px_minmax(660px,1fr)]">
                      <div class="bg-default sticky left-0 z-20 grid grid-cols-[1fr_86px] items-center border-r px-5 border-default">
                        <div class="relative flex h-full items-center gap-2 pl-[72px]">
                          <span class="text-sm">Shard 3</span>
                          <span class="text-muted text-xs">210 req</span>
                        </div>
                        <span class="text-muted text-right text-xs">100%</span>
                      </div>
                      <div class="relative min-h-12">
                        <div class="batch-timeline-reveal absolute inset-x-3 top-1/2 h-6 -translate-y-1/2" style="animation-delay:0.6s;animation-play-state:running">
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:1%;width:21%" aria-label="Knowledge base tags, shard 3, Processing" type="button" @click="openAction(&quot;Knowledge base tags, shard 3, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:25%;width:8%" aria-label="Knowledge base tags, shard 3, Processing" type="button" @click="openAction(&quot;Knowledge base tags, shard 3, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:36%;width:17%" aria-label="Knowledge base tags, shard 3, Processing" type="button" @click="openAction(&quot;Knowledge base tags, shard 3, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:57%;width:9%" aria-label="Knowledge base tags, shard 3, Processing" type="button" @click="openAction(&quot;Knowledge base tags, shard 3, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:69%;width:25%" aria-label="Knowledge base tags, shard 3, Processing" type="button" @click="openAction(&quot;Knowledge base tags, shard 3, Processing&quot;)" />
                        </div>
                      </div>
                    </div>
                    <div class="grid min-h-12 grid-cols-[370px_minmax(660px,1fr)]">
                      <div class="bg-default sticky left-0 z-20 grid grid-cols-[1fr_86px] items-center border-r px-5 border-default">
                        <div class="relative flex h-full items-center gap-2 pl-[72px]">
                          <span class="text-sm">Shard 4</span>
                          <span class="text-muted text-xs">210 req</span>
                        </div>
                        <span class="text-muted text-right text-xs">100%</span>
                      </div>
                      <div class="relative min-h-12">
                        <div class="batch-timeline-reveal absolute inset-x-3 top-1/2 h-6 -translate-y-1/2" style="animation-delay:0.6799999999999999s;animation-play-state:running">
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:4%;width:10%" aria-label="Knowledge base tags, shard 4, Processing" type="button" @click="openAction(&quot;Knowledge base tags, shard 4, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:17%;width:18%" aria-label="Knowledge base tags, shard 4, Processing" type="button" @click="openAction(&quot;Knowledge base tags, shard 4, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:38%;width:22%" aria-label="Knowledge base tags, shard 4, Processing" type="button" @click="openAction(&quot;Knowledge base tags, shard 4, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:64%;width:6%" aria-label="Knowledge base tags, shard 4, Processing" type="button" @click="openAction(&quot;Knowledge base tags, shard 4, Processing&quot;)" />
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-success" style="left:73%;width:24%" aria-label="Knowledge base tags, shard 4, Processing" type="button" @click="openAction(&quot;Knowledge base tags, shard 4, Processing&quot;)" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="border-b last:border-b-0 border-default">
                    <div class="bg-(--ui-bg-muted)/15 grid min-h-14 grid-cols-[370px_minmax(660px,1fr)]">
                      <UButton color="neutral" variant="outline" class="bg-default hover:bg-(--ui-bg-muted)/30 sticky left-0 z-20 flex min-w-0 items-center gap-3 border-r px-5 text-left border-default" aria-label="Legacy import validationData migration · GPT-4.10%" type="button" @click="openAction(&quot;Legacy import validationData migration · GPT-4.10%&quot;)">
                        <UIcon name="i-lucide-chevron-down" class="text-muted size-4" />
                        <span class="bg-muted flex size-7 shrink-0 items-center justify-center rounded-md">
                          <UIcon name="i-lucide-layers" class="size-3.5" />
                        </span>
                        <span class="min-w-0 flex-1">
                          <span class="block truncate text-sm font-medium">Legacy import validation</span>
                          <span class="text-muted block truncate text-[11px]">Data migration · GPT-4.1</span>
                        </span>
                        <span class="text-muted text-xs tabular-nums">0%</span>
                      </UButton>
                      <div class="relative" />
                    </div>
                    <div class="grid min-h-12 grid-cols-[370px_minmax(660px,1fr)]">
                      <div class="bg-default sticky left-0 z-20 grid grid-cols-[1fr_86px] items-center border-r px-5 border-default">
                        <div class="relative flex h-full items-center gap-2 pl-[72px]">
                          <span class="text-sm">Shard 1</span>
                          <span class="text-muted text-xs">100 req</span>
                        </div>
                        <span class="text-muted text-right text-xs">0%</span>
                      </div>
                      <div class="relative min-h-12">
                        <div class="batch-timeline-reveal absolute inset-x-3 top-1/2 h-6 -translate-y-1/2" style="animation-delay:0.66s;animation-play-state:running">
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-(--ui-error)" style="left:4%;width:10%" aria-label="Legacy import validation, shard 1, Failed" type="button" @click="openAction(&quot;Legacy import validation, shard 1, Failed&quot;)" />
                        </div>
                      </div>
                    </div>
                    <div class="grid min-h-12 grid-cols-[370px_minmax(660px,1fr)]">
                      <div class="bg-default sticky left-0 z-20 grid grid-cols-[1fr_86px] items-center border-r px-5 border-default">
                        <div class="relative flex h-full items-center gap-2 pl-[72px]">
                          <span class="text-sm">Shard 2</span>
                          <span class="text-muted text-xs">100 req</span>
                        </div>
                        <span class="text-muted text-right text-xs">0%</span>
                      </div>
                      <div class="relative min-h-12">
                        <div class="batch-timeline-reveal absolute inset-x-3 top-1/2 h-6 -translate-y-1/2" style="animation-delay:0.74s;animation-play-state:running">
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-(--ui-error)" style="left:4%;width:10%" aria-label="Legacy import validation, shard 2, Failed" type="button" @click="openAction(&quot;Legacy import validation, shard 2, Failed&quot;)" />
                        </div>
                      </div>
                    </div>
                    <div class="grid min-h-12 grid-cols-[370px_minmax(660px,1fr)]">
                      <div class="bg-default sticky left-0 z-20 grid grid-cols-[1fr_86px] items-center border-r px-5 border-default">
                        <div class="relative flex h-full items-center gap-2 pl-[72px]">
                          <span class="text-sm">Shard 3</span>
                          <span class="text-muted text-xs">100 req</span>
                        </div>
                        <span class="text-muted text-right text-xs">0%</span>
                      </div>
                      <div class="relative min-h-12">
                        <div class="batch-timeline-reveal absolute inset-x-3 top-1/2 h-6 -translate-y-1/2" style="animation-delay:0.8200000000000001s;animation-play-state:running">
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-(--ui-error)" style="left:4%;width:10%" aria-label="Legacy import validation, shard 3, Failed" type="button" @click="openAction(&quot;Legacy import validation, shard 3, Failed&quot;)" />
                        </div>
                      </div>
                    </div>
                    <div class="grid min-h-12 grid-cols-[370px_minmax(660px,1fr)]">
                      <div class="bg-default sticky left-0 z-20 grid grid-cols-[1fr_86px] items-center border-r px-5 border-default">
                        <div class="relative flex h-full items-center gap-2 pl-[72px]">
                          <span class="text-sm">Shard 4</span>
                          <span class="text-muted text-xs">100 req</span>
                        </div>
                        <span class="text-muted text-right text-xs">0%</span>
                      </div>
                      <div class="relative min-h-12">
                        <div class="batch-timeline-reveal absolute inset-x-3 top-1/2 h-6 -translate-y-1/2" style="animation-delay:0.9s;animation-play-state:running">
                          <UButton color="neutral" variant="ghost" class="absolute top-1/2 h-2.5 -translate-y-1/2 rounded-full transition-all hover:h-3.5 bg-(--ui-error)" style="left:4%;width:10%" aria-label="Legacy import validation, shard 4, Failed" type="button" @click="openAction(&quot;Legacy import validation, shard 4, Failed&quot;)" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="jsx-c4660c1b72e4d478 flex flex-wrap items-center gap-5 px-5 py-4 text-xs sm:px-8">
                  <span class="jsx-c4660c1b72e4d478 text-muted flex items-center gap-1.5">
                    <span class="jsx-c4660c1b72e4d478 size-2 rounded-full bg-success" />
                    Processing
                  </span>
                  <span class="jsx-c4660c1b72e4d478 text-muted flex items-center gap-1.5">
                    <span class="jsx-c4660c1b72e4d478 size-2 rounded-full bg-(--ui-text-muted)/35" />
                    Queued
                  </span>
                  <span class="jsx-c4660c1b72e4d478 text-muted flex items-center gap-1.5">
                    <span class="jsx-c4660c1b72e4d478 size-2 rounded-full bg-chart-4" />
                    Retrying
                  </span>
                  <span class="jsx-c4660c1b72e4d478 text-muted flex items-center gap-1.5">
                    <span class="jsx-c4660c1b72e4d478 size-2 rounded-full bg-(--ui-error)" />
                    Failed
                  </span>
                  <span class="jsx-c4660c1b72e4d478 text-muted ml-auto">Select a batch or interval to inspect it.</span>
                </div>
              </div>
            </div>
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
