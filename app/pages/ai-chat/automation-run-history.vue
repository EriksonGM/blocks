<!-- Page: /ai-chat/automation-run-history | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Automation 2 · Blocks Admin" })

const toast = useToast()

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "Response",
    "value": "0"
  },
  {
    "label": "Captured event",
    "value": "1"
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
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/automation-run-history">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="flex-1 overflow-auto px-6 py-8 lg:px-10">
        <div class="mx-auto max-w-5xl">
          <div class="mb-8">
            <p class="text-muted mb-3 text-xs tracking-widest uppercase">Automation observability</p>
            <h1 class="text-2xl font-semibold tracking-tight text-highlighted">Every trigger leaves a record.</h1>
            <p class="text-muted mt-3 text-sm">Inspect outcomes, trace captured inputs and replay a failed demo event.</p>
          </div>
          <div class="mb-4 flex flex-wrap gap-1" aria-label="Filter automation">
            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-elevated text-default shadow-xs hover:bg-(--ui-bg-elevated)/80 h-8 rounded-md px-3 text-xs" aria-label="All automations" type="button" @click="openAction(&quot;All automations&quot;)">
              All automations
            </UButton>
            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Weekly project brief" type="button" @click="openAction(&quot;Weekly project brief&quot;)">
              Weekly project brief
            </UButton>
            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Support digest" type="button" @click="openAction(&quot;Support digest&quot;)">
              Support digest
            </UButton>
            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Document review" type="button" @click="openAction(&quot;Document review&quot;)">
              Document review
            </UButton>
          </div>
          <div class="mb-8 flex flex-wrap items-center justify-between gap-4 border-b pb-4 border-default">
            <div class="flex flex-wrap gap-1" aria-label="Filter run outcome">
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="All outcomes" type="button" @click="openAction(&quot;All outcomes&quot;)">
                All outcomes
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Success" type="button" @click="openAction(&quot;Success&quot;)">
                Success
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Error" type="button" @click="openAction(&quot;Error&quot;)">
                Error
              </UButton>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Blocked" type="button" @click="openAction(&quot;Blocked&quot;)">
                Blocked
              </UButton>
            </div>
            <p class="text-muted text-xs">5 runs ·3 successful</p>
          </div>
          <h2 class="text-muted mb-5 text-xs font-medium text-highlighted">September 6, 2026 · Demo history</h2>
          <ol class="space-y-2">
            <li class="grid grid-cols-[54px_minmax(0,1fr)] gap-3 sm:grid-cols-[70px_minmax(0,1fr)]">
              <span class="text-muted pt-5 font-mono text-xs">09:00</span>
              <div class="overflow-hidden rounded-lg border border-default">
                <UButton color="neutral" variant="ghost" class="group focus-visible:outline-accented flex w-full items-center gap-3 p-4 text-left focus-visible:outline-2" aria-label="Weekly project briefSuccessexec-205 · schedule.weekly8.2s" type="button" @click="openAction(&quot;Weekly project briefSuccessexec-205 · schedule.weekly8.2s&quot;)">
                  <span class="bg-muted grid size-8 shrink-0 place-items-center rounded-full">
                    <UIcon name="i-lucide-check" class="size-4" />
                  </span>
                  <span class="min-w-0 flex-1">
                    <span class="flex flex-wrap items-center gap-2">
                      <span class="text-sm font-medium">Weekly project brief</span>
                      <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted border-default">Success</div>
                    </span>
                    <span class="text-muted mt-1.5 block font-mono text-xs">exec-205 · schedule.weekly</span>
                  </span>
                  <span class="text-muted text-xs">8.2s</span>
                  <UIcon name="i-lucide-chevron-down" class="text-muted size-4 transition-transform group-data-[state=open]:rotate-180" />
                </UButton>
                <div id="radix-_R_8rdbsnpfknmlb_" style="" />
              </div>
            </li>
            <li class="grid grid-cols-[54px_minmax(0,1fr)] gap-3 sm:grid-cols-[70px_minmax(0,1fr)]">
              <span class="text-muted pt-5 font-mono text-xs">08:45</span>
              <div class="overflow-hidden rounded-lg border border-default">
                <UButton color="neutral" variant="ghost" class="group focus-visible:outline-accented flex w-full items-center gap-3 p-4 text-left focus-visible:outline-2" aria-label="Support digestErrorexec-204 · support.digest.ready10.0s" type="button" @click="openAction(&quot;Support digestErrorexec-204 · support.digest.ready10.0s&quot;)">
                  <span class="grid size-8 shrink-0 place-items-center rounded-full bg-(--ui-error)/10 text-error">
                    <UIcon name="i-lucide-x" class="size-4" />
                  </span>
                  <span class="min-w-0 flex-1">
                    <span class="flex flex-wrap items-center gap-2">
                      <span class="text-sm font-medium">Support digest</span>
                      <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted border-default">Error</div>
                    </span>
                    <span class="text-muted mt-1.5 block font-mono text-xs">exec-204 · support.digest.ready</span>
                  </span>
                  <span class="text-muted text-xs">10.0s</span>
                  <UIcon name="i-lucide-chevron-down" class="text-muted size-4 transition-transform group-data-[state=open]:rotate-180" />
                </UButton>
                <div id="radix-_R_9bdbsnpfknmlb_" style="transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 327px; --radix-collapsible-content-width: 940px;">
                  <div class="border-t px-4 py-5 sm:pl-15 border-default">
                    <p class="mb-4 text-sm leading-6">The demo delivery endpoint did not respond before the timeout.</p>
                    <UTabs v-model="tabs1Active" :items="tabs1Items" color="primary" variant="link" data-orientation="horizontal" data-slot="tabs" :ui="{ root: 'gap-4', list: 'justify-start', content: 'min-h-0' }">
                      <template #content="{ item }">
                        <template v-if="item.value === '0'">
                          <div data-orientation="horizontal" id="radix-_R_epbdbsnpfknmlb_-content-response" class="ring-offset-background focus-visible:ring-accented mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden" style="animation-duration:0s">
                            <pre class="bg-(--ui-bg-muted)/40 max-h-48 overflow-auto rounded-md border p-4 font-mono text-xs leading-6 border-default">&#123;
  &quot;status&quot;: &quot;504&quot;,
  &quot;message&quot;: &quot;The demo delivery endpoint did not respond before the timeout.&quot;,
  &quot;duration&quot;: &quot;10.0s&quot;
&#125;</pre>
                          </div>
                        </template>
                        <template v-if="item.value === '1'">
                          <div data-orientation="horizontal" id="radix-_R_epbdbsnpfknmlb_-content-response" class="ring-offset-background focus-visible:ring-accented mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden" style="animation-duration:0s">
                            <pre class="bg-(--ui-bg-muted)/40 max-h-48 overflow-auto rounded-md border p-4 font-mono text-xs leading-6 border-default">&#123;
  &quot;status&quot;: &quot;504&quot;,
  &quot;message&quot;: &quot;The demo delivery endpoint did not respond before the timeout.&quot;,
  &quot;duration&quot;: &quot;10.0s&quot;
&#125;</pre>
                          </div>
                        </template>
                      </template>
                    </UTabs>
                    <div class="mt-4 flex flex-wrap items-center gap-3">
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Replay demo event" type="button" @click="openAction(&quot;Replay demo event&quot;)">
                        <UIcon name="i-lucide-rotate-ccw" class="size-4" />
                        Replay demo event
                      </UButton>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="grid grid-cols-[54px_minmax(0,1fr)] gap-3 sm:grid-cols-[70px_minmax(0,1fr)]">
              <span class="text-muted pt-5 font-mono text-xs">08:30</span>
              <div class="overflow-hidden rounded-lg border border-default">
                <UButton color="neutral" variant="ghost" class="group focus-visible:outline-accented flex w-full items-center gap-3 p-4 text-left focus-visible:outline-2" aria-label="Document reviewBlockedexec-203 · document.updated0.2s" type="button" @click="openAction(&quot;Document reviewBlockedexec-203 · document.updated0.2s&quot;)">
                  <span class="bg-muted grid size-8 shrink-0 place-items-center rounded-full">
                    <UIcon name="i-lucide-shield-alert" class="size-4" />
                  </span>
                  <span class="min-w-0 flex-1">
                    <span class="flex flex-wrap items-center gap-2">
                      <span class="text-sm font-medium">Document review</span>
                      <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted border-default">Blocked</div>
                    </span>
                    <span class="text-muted mt-1.5 block font-mono text-xs">exec-203 · document.updated</span>
                  </span>
                  <span class="text-muted text-xs">0.2s</span>
                  <UIcon name="i-lucide-chevron-down" class="text-muted size-4 transition-transform group-data-[state=open]:rotate-180" />
                </UButton>
                <div id="radix-_R_9rdbsnpfknmlb_" style="" />
              </div>
            </li>
            <li class="grid grid-cols-[54px_minmax(0,1fr)] gap-3 sm:grid-cols-[70px_minmax(0,1fr)]">
              <span class="text-muted pt-5 font-mono text-xs">08:00</span>
              <div class="overflow-hidden rounded-lg border border-default">
                <UButton color="neutral" variant="ghost" class="group focus-visible:outline-accented flex w-full items-center gap-3 p-4 text-left focus-visible:outline-2" aria-label="Support digestSuccessexec-202 · support.digest.ready4.6s" type="button" @click="openAction(&quot;Support digestSuccessexec-202 · support.digest.ready4.6s&quot;)">
                  <span class="bg-muted grid size-8 shrink-0 place-items-center rounded-full">
                    <UIcon name="i-lucide-check" class="size-4" />
                  </span>
                  <span class="min-w-0 flex-1">
                    <span class="flex flex-wrap items-center gap-2">
                      <span class="text-sm font-medium">Support digest</span>
                      <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted border-default">Success</div>
                    </span>
                    <span class="text-muted mt-1.5 block font-mono text-xs">exec-202 · support.digest.ready</span>
                  </span>
                  <span class="text-muted text-xs">4.6s</span>
                  <UIcon name="i-lucide-chevron-down" class="text-muted size-4 transition-transform group-data-[state=open]:rotate-180" />
                </UButton>
                <div id="radix-_R_abdbsnpfknmlb_" style="" />
              </div>
            </li>
            <li class="grid grid-cols-[54px_minmax(0,1fr)] gap-3 sm:grid-cols-[70px_minmax(0,1fr)]">
              <span class="text-muted pt-5 font-mono text-xs">07:30</span>
              <div class="overflow-hidden rounded-lg border border-default">
                <UButton color="neutral" variant="ghost" class="group focus-visible:outline-accented flex w-full items-center gap-3 p-4 text-left focus-visible:outline-2" aria-label="Document reviewSuccessexec-201 · document.updated3.1s" type="button" @click="openAction(&quot;Document reviewSuccessexec-201 · document.updated3.1s&quot;)">
                  <span class="bg-muted grid size-8 shrink-0 place-items-center rounded-full">
                    <UIcon name="i-lucide-check" class="size-4" />
                  </span>
                  <span class="min-w-0 flex-1">
                    <span class="flex flex-wrap items-center gap-2">
                      <span class="text-sm font-medium">Document review</span>
                      <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted border-default">Success</div>
                    </span>
                    <span class="text-muted mt-1.5 block font-mono text-xs">exec-201 · document.updated</span>
                  </span>
                  <span class="text-muted text-xs">3.1s</span>
                  <UIcon name="i-lucide-chevron-down" class="text-muted size-4 transition-transform group-data-[state=open]:rotate-180" />
                </UButton>
                <div id="radix-_R_ardbsnpfknmlb_" style="" />
              </div>
            </li>
          </ol>
          <p class="text-muted mt-6 text-xs">Replay uses the captured local fixture. No webhook is sent and no schedule is changed.</p>
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
