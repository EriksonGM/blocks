<!-- Page: /ai-chat/visual-inspection | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Visual inspection · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "field1": "",
  "orderDetailDesktop": "Order detail · desktop",
  "field3": "Make order status actionable",
  "addANoteAboutThisRegion": "",
  "field5": 3,
  "field6": 1,
  "field7": 56,
  "field8": 12
})

const orderDetailDesktopOptions = [
  "Order detail · desktop"
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

function saveForm() {
  toast.add({ title: "Changes saved", color: 'success', icon: 'i-lucide-check' })
}

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
  anchor.download = "ai-chat-visual-inspection.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/visual-inspection">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="flex min-h-0 flex-1 flex-col overflow-y-auto xl:overflow-hidden">
        <header class="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b px-5 py-4 md:px-7 border-default">
          <div>
            <p class="text-muted flex items-center gap-1.5 text-xs">
              Commerce experience 
              <UIcon name="i-lucide-chevron-right" class="size-3" />
               Design review
            </p>
            <h1 class="mt-1.5 text-xl font-semibold tracking-tight text-highlighted">A closer look.</h1>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <UInput type="file" accept="image/png,image/jpeg,image/webp" aria-label="Open an image for inspection" name="field1" class="sr-only" @change="form.field1 = ($event.target as HTMLInputElement).files?.[0]?.name || ''" />
            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Open image" type="button" @click="openAction(&quot;Open image&quot;)">
              <UIcon name="i-lucide-upload" class="size-4" />
               Open image
            </UButton>
            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Export review" type="button" @click="exportCsv()">
              <UIcon name="i-lucide-download" class="size-4" />
               Export review
            </UButton>
            <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-8 rounded-md px-3 text-xs" aria-label="Review image" type="button" @click="openAction(&quot;Review image&quot;)">
              <UIcon name="i-lucide-bot" class="size-4" />
              Review image
            </UButton>
          </div>
        </header>
        <div class="flex min-h-0 flex-1 flex-col xl:flex-row">
          <section class="flex min-w-0 flex-1 flex-col" aria-label="Image review canvas">
            <div class="flex min-h-14 shrink-0 flex-wrap items-center justify-between gap-2 border-b px-4 py-2 border-default">
              <div class="flex min-w-0 items-center gap-2">
                <UIcon name="i-lucide-image" class="text-muted size-4 shrink-0" />
                <USelect v-model="form.orderDetailDesktop" :items="orderDetailDesktopOptions" aria-label="Review image" class="max-w-52 min-w-0 bg-transparent text-xs font-medium outline-offset-4" />
              </div>
              <div class="flex items-center gap-1">
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-elevated text-default shadow-xs hover:bg-(--ui-bg-elevated)/80 size-6" aria-label="Select regions" type="button" @click="openAction(&quot;Select regions&quot;)">
                  <UIcon name="i-lucide-mouse-pointer-2" class="size-4" />
                </UButton>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Draw a region" type="button" @click="openAction(&quot;Draw a region&quot;)">
                  <UIcon name="i-lucide-square-dashed" class="size-4" />
                </UButton>
                <span class="bg-(--ui-border) mx-1 h-4 w-px" />
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Zoom out" type="button" @click="openAction(&quot;Zoom out&quot;)">
                  <UIcon name="i-lucide-minus" class="size-4" />
                </UButton>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 w-14 font-mono text-xs" aria-label="100%" type="button" @click="openAction(&quot;100%&quot;)">
                  100%
                </UButton>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Zoom in" type="button" @click="openAction(&quot;Zoom in&quot;)">
                  <UIcon name="i-lucide-plus" class="size-4" />
                </UButton>
              </div>
            </div>
            <div class="bg-(--ui-bg-muted)/50 min-h-[360px] overflow-auto p-6 xl:min-h-0 xl:flex-1" style="background-image:radial-gradient(var(--ui-border) 1px, transparent 1px);background-size:18px 18px">
              <div class="relative mx-auto bg-default shadow-sm outline-offset-4" aria-label="Image canvas. Use Draw a region or Add region to annotate." style="width:700px;aspect-ratio:1452 / 900">
                <img alt="Order detail screen under review; numbered regions link to observations" width="1452" height="900" class="pointer-events-none h-full w-full select-none" style="color:transparent" src="/reference/764e2e752a87f6e8.png" loading="lazy" />
                <UButton color="neutral" variant="outline" class="absolute border transition-[background-color,box-shadow] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none border-info/60 bg-info/5 ring-2 ring-info/70" style="left:3%;top:1%;width:56%;height:12%" aria-label="1" type="button" @click="openAction(&quot;1&quot;)">
                  <span class="absolute -top-3 -left-3 flex size-6 items-center justify-center rounded-full border-2 border-inverted text-[10px] font-semibold text-inverted shadow-sm bg-info">1</span>
                </UButton>
                <UButton color="neutral" variant="outline" class="absolute border transition-[background-color,box-shadow] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none border-info/60 bg-info/5" style="left:3%;top:69%;width:66%;height:28%" aria-label="2" type="button" @click="openAction(&quot;2&quot;)">
                  <span class="absolute -top-3 -left-3 flex size-6 items-center justify-center rounded-full border-2 border-inverted text-[10px] font-semibold text-inverted shadow-sm bg-info">2</span>
                </UButton>
                <UButton color="neutral" variant="outline" class="absolute border transition-[background-color,box-shadow] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none border-success/60 bg-success/5" style="left:74%;top:57%;width:24%;height:29%" aria-label="Select region 3: Keep customer context close" type="button" @click="openAction(&quot;Select region 3: Keep customer context close&quot;)">
                  <span class="absolute -top-3 -left-3 flex size-6 items-center justify-center rounded-full border-2 border-inverted text-[10px] font-semibold text-inverted shadow-sm bg-success">
                    <UIcon name="i-lucide-check" class="size-3" />
                  </span>
                </UButton>
              </div>
            </div>
          </section>
          <aside class="flex w-full shrink-0 flex-col border-t xl:w-[360px] xl:overflow-y-auto xl:border-t-0 xl:border-l border-default" aria-label="Region observations">
            <div class="flex items-center justify-between px-5 pt-4 pb-3">
              <h2 class="text-sm font-semibold text-highlighted">
                Observations
                <span class="text-muted ml-1 font-normal">3</span>
              </h2>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Add region" type="button" @click="openAction(&quot;Add region&quot;)">
                <UIcon name="i-lucide-plus" class="size-4" />
                 Add region
              </UButton>
            </div>
            <div class="flex gap-1 px-5 pb-3" aria-label="Filter observations">
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-elevated text-default shadow-xs hover:bg-(--ui-bg-elevated)/80 rounded-md px-3 h-7 text-xs" aria-label="All" type="button" @click="openAction(&quot;All&quot;)">
                All
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md px-3 h-7 text-xs" aria-label="Open" type="button" @click="openAction(&quot;Open&quot;)">
                Open
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md px-3 h-7 text-xs" aria-label="Resolved" type="button" @click="openAction(&quot;Resolved&quot;)">
                Resolved
              </UButton>
            </div>
            <div class="max-h-52 shrink-0 overflow-y-auto border-y py-1 border-default">
              <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/50 flex w-full items-center gap-3 px-5 py-3 text-left text-xs outline-offset-[-3px] bg-muted" aria-label="1Make order status actionable1" type="button" @click="openAction(&quot;1Make order status actionable1&quot;)">
                <span class="flex size-5 shrink-0 items-center justify-center rounded-full border text-[10px] border-default">1</span>
                <span class="min-w-0 flex-1 truncate font-medium">Make order status actionable</span>
                <UIcon name="i-lucide-message-square" class="text-muted size-3" />
                <span class="text-muted">1</span>
              </UButton>
              <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/50 flex w-full items-center gap-3 px-5 py-3 text-left text-xs outline-offset-[-3px]" aria-label="2Keep line items easy to scan0" type="button" @click="openAction(&quot;2Keep line items easy to scan0&quot;)">
                <span class="flex size-5 shrink-0 items-center justify-center rounded-full border text-[10px] border-default">2</span>
                <span class="min-w-0 flex-1 truncate font-medium">Keep line items easy to scan</span>
                <UIcon name="i-lucide-message-square" class="text-muted size-3" />
                <span class="text-muted">0</span>
              </UButton>
              <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/50 flex w-full items-center gap-3 px-5 py-3 text-left text-xs outline-offset-[-3px]" aria-label="Keep customer context close0" type="button" @click="openAction(&quot;Keep customer context close0&quot;)">
                <span class="flex size-5 shrink-0 items-center justify-center rounded-full border text-[10px] border-success/20 text-success dark:text-success">
                  <UIcon name="i-lucide-check" class="size-3" />
                </span>
                <span class="min-w-0 flex-1 truncate font-medium">Keep customer context close</span>
                <UIcon name="i-lucide-message-square" class="text-muted size-3" />
                <span class="text-muted">0</span>
              </UButton>
            </div>
            <div class="flex flex-1 flex-col px-5 py-5">
              <div class="mb-3 flex items-center justify-between gap-2">
                <span class="text-muted text-[10px] font-medium tracking-widest uppercase">Region 1</span>
                <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default rounded-md px-3 h-7 text-xs" aria-label="Resolve" type="button" @click="openAction(&quot;Resolve&quot;)">
                  <UIcon name="i-lucide-check-check" class="size-4" />
                  Resolve
                </UButton>
              </div>
              <UInput v-model="form.field3" type="text" aria-label="Region title" name="field3" class="flex w-full rounded-md md:text-sm h-auto text-base font-semibold" :ui="{ base: 'h-full' }" />
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs mt-4 self-start" aria-label="Draft observation" type="button" @click="openAction(&quot;Draft observation&quot;)">
                <UIcon name="i-lucide-bot" class="size-4" />
                 Draft observation
              </UButton>
              <div class="mt-4 space-y-3" aria-label="Region discussion">
                <div class="border-l-2 pl-3">
                  <span class="text-muted text-[10px] font-medium">REVIEW NOTE</span>
                  <p class="mt-1 text-[13px] leading-6 break-words whitespace-pre-wrap">Keep the record itself primary. The assistant should explain the exception, not replace the order details.</p>
                </div>
              </div>
              <!-- Form: controls and draft state are declared in this page -->
              <UForm :state="form" @submit="saveForm" class="mt-5 rounded-xl border p-2 shadow-xs border-default">
                <UTextarea v-model="form.addANoteAboutThisRegion" :rows="4" aria-label="Note for selected region" placeholder="Add a note about this region…" name="addANoteAboutThisRegion" class="flex w-full rounded-md md:text-sm min-h-20 resize-none text-sm" :ui="{ base: 'h-full' }" />
                <div class="flex items-center justify-between px-1 pt-1">
                  <span class="text-muted text-[10px]">Only attached to this region</span>
                  <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 rounded-md px-3 h-7 text-xs" aria-label="Add note" type="submit" disabled>
                    Add note
                  </UButton>
                </div>
              </UForm>
              <details class="mt-5 text-xs">
                <summary class="text-muted cursor-pointer">Region coordinates</summary>
                <div class="mt-3 grid grid-cols-4 gap-2">
                  <label class="text-muted text-[10px]">
                    x %
                    <UInput v-model.number="form.field5" type="number" aria-label="Region x" min="0" max="100" step="0.1" name="field5" class="flex w-full rounded-md md:text-sm mt-1 h-8 text-xs" :ui="{ base: 'h-full' }" />
                  </label>
                  <label class="text-muted text-[10px]">
                    y %
                    <UInput v-model.number="form.field6" type="number" aria-label="Region y" min="0" max="100" step="0.1" name="field6" class="flex w-full rounded-md md:text-sm mt-1 h-8 text-xs" :ui="{ base: 'h-full' }" />
                  </label>
                  <label class="text-muted text-[10px]">
                    width %
                    <UInput v-model.number="form.field7" type="number" aria-label="Region width" min="1" max="100" step="0.1" name="field7" class="flex w-full rounded-md md:text-sm mt-1 h-8 text-xs" :ui="{ base: 'h-full' }" />
                  </label>
                  <label class="text-muted text-[10px]">
                    height %
                    <UInput v-model.number="form.field8" type="number" aria-label="Region height" min="1" max="100" step="0.1" name="field8" class="flex w-full rounded-md md:text-sm mt-1 h-8 text-xs" :ui="{ base: 'h-full' }" />
                  </label>
                </div>
              </details>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md text-muted mt-4 self-start px-0 text-xs" aria-label="Remove region" type="button" @click="openAction(&quot;Remove region&quot;)">
                <UIcon name="i-lucide-trash-2" class="size-4" />
                 Remove region
              </UButton>
            </div>
          </aside>
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
