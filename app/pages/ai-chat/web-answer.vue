<!-- Page: /ai-chat/web-answer | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Conversation 22 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "askAFollowUp": ""
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

async function copyValue(value: string) {
  await navigator.clipboard.writeText(value)
  toast.add({ title: 'Copied to clipboard', color: 'success' })
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/web-answer">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="relative flex min-h-0 flex-1 flex-col">
        <div class="min-h-0 flex-1 scroll-pb-40 overflow-y-auto">
          <div class="mx-auto max-w-[1160px] px-5 pt-10 pb-40 md:px-10 md:pt-16">
            <div class="text-muted mb-9 flex items-center gap-2 text-xs">
              <span>Web answer</span>
              <span>·</span>
              <span>Sources checked September 7, 2026</span>
            </div>
            <h1 class="mb-8 text-3xl font-semibold tracking-tight md:text-4xl text-highlighted">What can you build with Shadcnblocks?</h1>
            <div class="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_240px]">
              <div class="min-w-0">
                <div class="mb-6 overflow-hidden rounded-lg border border-default">
                  <UButton color="neutral" variant="soft" class="hover:bg-(--ui-bg-muted)/40 focus-visible:ring-accented group flex min-h-12 w-full items-center gap-3 px-4 py-3 text-left outline-none focus-visible:ring-1 focus-visible:ring-inset" aria-label="Research5 steps completed" type="button" @click="openAction(&quot;Research5 steps completed&quot;)">
                    <UIcon name="i-lucide-search" class="size-4 shrink-0" />
                    <span class="text-sm font-medium">Research</span>
                    <span class="text-muted ml-auto text-xs">5 steps completed</span>
                    <UIcon name="i-lucide-chevron-down" class="text-muted size-4 shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                  </UButton>
                  <div id="radix-_R_nbdbsnpfknmlb_" class="border-t border-default" style="" />
                </div>
                <section aria-label="Sources" class="mb-4">
                  <h2 class="text-muted mb-2 text-xs font-medium text-highlighted">Sources</h2>
                  <div class="grid grid-cols-2 gap-2 md:grid-cols-4">
                    <UButton color="neutral" variant="outline" class="bg-(--ui-bg-muted)/30 hover:bg-(--ui-bg-muted)/60 focus-visible:ring-accented border-(--ui-border)/60 flex min-w-0 flex-col gap-1 rounded-lg border px-2.5 py-2 text-left focus-visible:ring-2 border-default" aria-label="Shadcnblocks overviewShadcnblocks· 1" type="button" @click="openAction(&quot;Shadcnblocks overviewShadcnblocks· 1&quot;)">
                      <span class="w-full truncate text-xs font-medium">Shadcnblocks overview</span>
                      <span class="text-muted flex w-full items-center gap-1.5 text-[11px]">
                        <UIcon name="i-lucide-globe" class="size-3 shrink-0" />
                        <span class="truncate">Shadcnblocks</span>
                        <span class="ml-auto">· 1</span>
                      </span>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="bg-(--ui-bg-muted)/30 hover:bg-(--ui-bg-muted)/60 focus-visible:ring-accented border-(--ui-border)/60 flex min-w-0 flex-col gap-1 rounded-lg border px-2.5 py-2 text-left focus-visible:ring-2 border-default" aria-label="Browse blocksBlock library· 2" type="button" @click="openAction(&quot;Browse blocksBlock library· 2&quot;)">
                      <span class="w-full truncate text-xs font-medium">Browse blocks</span>
                      <span class="text-muted flex w-full items-center gap-1.5 text-[11px]">
                        <UIcon name="i-lucide-globe" class="size-3 shrink-0" />
                        <span class="truncate">Block library</span>
                        <span class="ml-auto">· 2</span>
                      </span>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="bg-(--ui-bg-muted)/30 hover:bg-(--ui-bg-muted)/60 focus-visible:ring-accented border-(--ui-border)/60 flex min-w-0 flex-col gap-1 rounded-lg border px-2.5 py-2 text-left focus-visible:ring-2 border-default" aria-label="Website templatesTemplates· 3" type="button" @click="openAction(&quot;Website templatesTemplates· 3&quot;)">
                      <span class="w-full truncate text-xs font-medium">Website templates</span>
                      <span class="text-muted flex w-full items-center gap-1.5 text-[11px]">
                        <UIcon name="i-lucide-globe" class="size-3 shrink-0" />
                        <span class="truncate">Templates</span>
                        <span class="ml-auto">· 3</span>
                      </span>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="bg-(--ui-bg-muted)/30 hover:bg-(--ui-bg-muted)/60 border-(--ui-border)/60 flex flex-col items-center justify-center gap-1 rounded-lg border px-2.5 py-2 text-xs border-default" aria-label="View all 5 sources" type="button" @click="openAction(&quot;View all 5 sources&quot;)">
                      <span class="flex gap-1">
                        <UIcon name="i-lucide-globe" class="bg-default size-5 rounded-full border p-1" />
                        <UIcon name="i-lucide-book-open" class="bg-default size-5 rounded-full border p-1" />
                      </span>
                      <span>View all 5 sources</span>
                    </UButton>
                  </div>
                </section>
                <article class="flex flex-col gap-6 text-[16px] leading-7">
                  <h2 class="flex items-center gap-2 text-lg font-medium text-highlighted">
                    <UIcon name="i-lucide-book-open" class="size-5" />
                    Answer
                  </h2>
                  <p>
                    <strong>Shadcnblocks is a library of ready-made interface sections, components and website templates</strong>
                    for React, shadcn/ui and Tailwind CSS. Start with a complete design, then adapt its source code to your product.
                    <UButton color="neutral" variant="soft" class="bg-muted text-muted hover:text-highlighted mx-0.5 inline-flex size-5 items-center justify-center rounded align-middle text-[11px]" aria-label="1" type="button" @click="openAction(&quot;1&quot;)">
                      1
                    </UButton>
                  </p>
                  <h2 class="mt-2 text-2xl font-semibold text-highlighted">From a landing page to an application</h2>
                  <section>
                    <h3 class="mb-2 text-lg font-semibold text-highlighted">1. Assemble a product website</h3>
                    <p>
                      Combine a hero, feature sections, testimonials and pricing into a landing page. The block library groups these designs by purpose, so you can browse the section you need. 
                      <UButton color="neutral" variant="soft" class="bg-muted text-muted hover:text-highlighted mx-0.5 inline-flex size-5 items-center justify-center rounded align-middle text-[11px]" aria-label="2" type="button" @click="openAction(&quot;2&quot;)">
                        2
                      </UButton>
                    </p>
                  </section>
                  <section>
                    <h3 class="mb-2 text-lg font-semibold text-highlighted">2. Start from a complete template</h3>
                    <p>
                      For a coordinated website, choose a template with its sections already composed. Browse the Next.js and Astro options and check the framework listed for your chosen design. 
                      <UButton color="neutral" variant="soft" class="bg-muted text-muted hover:text-highlighted mx-0.5 inline-flex size-5 items-center justify-center rounded align-middle text-[11px]" aria-label="3" type="button" @click="openAction(&quot;3&quot;)">
                        3
                      </UButton>
                    </p>
                  </section>
                  <section>
                    <h3 class="mb-2 text-lg font-semibold text-highlighted">3. Build the workspace behind the product</h3>
                    <p>
                      The 
                      <strong>Shadcn Admin Kit</strong>
                       brings ecommerce, project management, payments, tasks and developer screens into a shared Next.js application. Its navigation and themes provide a foundation for the workspace surrounding these AI screens. 
                      <UButton color="neutral" variant="soft" class="bg-muted text-muted hover:text-highlighted mx-0.5 inline-flex size-5 items-center justify-center rounded align-middle text-[11px]" aria-label="5" type="button" @click="openAction(&quot;5&quot;)">
                        5
                      </UButton>
                    </p>
                  </section>
                  <section>
                    <h2 class="mb-3 text-2xl font-semibold text-highlighted">How do you bring it into your project?</h2>
                    <p>
                      Pick a block and follow its installation instructions. The
                      <strong> shadcn CLI</strong>
                       adds the source and resolves required components and dependencies. The guide covers registry setup and authentication for premium blocks.
                      <UButton color="neutral" variant="soft" class="bg-muted text-muted hover:text-highlighted mx-0.5 inline-flex size-5 items-center justify-center rounded align-middle text-[11px]" aria-label="4" type="button" @click="openAction(&quot;4&quot;)">
                        4
                      </UButton>
                    </p>
                  </section>
                  <p class="text-muted text-sm">The previews alongside this answer come from Shadcnblocks. Explore a source to browse the actual collection and its installation details.</p>
                  <div class="flex items-center gap-2">
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Copy answer" type="button" @click="copyValue(&quot;Copy answer&quot;)">
                      <UIcon name="i-lucide-copy" class="size-4" />
                      Copy answer
                    </UButton>
                    <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Inspect sources" type="button" @click="openAction(&quot;Inspect sources&quot;)">
                      Inspect sources
                    </UButton>
                  </div>
                </article>
                <section class="mt-8 flex flex-col gap-3" aria-label="Related questions">
                  <h2 class="text-sm font-medium text-highlighted">Explore the sources</h2>
                  <UButton color="neutral" variant="outline" class="flex items-center justify-between border-b py-3 text-left text-sm border-default" aria-label="Which blocks can I use for a landing page?" type="button" @click="openAction(&quot;Which blocks can I use for a landing page?&quot;)">
                    Which blocks can I use for a landing page?
                    <UIcon name="i-lucide-arrow-up-right" class="size-4" />
                  </UButton>
                  <UButton color="neutral" variant="outline" class="flex items-center justify-between border-b py-3 text-left text-sm border-default" aria-label="How do I install a block?" type="button" @click="openAction(&quot;How do I install a block?&quot;)">
                    How do I install a block?
                    <UIcon name="i-lucide-arrow-up-right" class="size-4" />
                  </UButton>
                  <UButton color="neutral" variant="outline" class="flex items-center justify-between border-b py-3 text-left text-sm border-default" aria-label="What is included in the Admin Kit?" type="button" @click="openAction(&quot;What is included in the Admin Kit?&quot;)">
                    What is included in the Admin Kit?
                    <UIcon name="i-lucide-arrow-up-right" class="size-4" />
                  </UButton>
                </section>
                <div />
              </div>
              <aside class="flex flex-col gap-5 lg:sticky lg:top-6" aria-label="Related media">
                <section>
                  <h2 class="mb-3 flex items-center gap-2 text-sm font-medium text-highlighted">
                    <UIcon name="i-lucide-images" class="size-4" />
                    Images
                  </h2>
                  <div class="grid grid-cols-2 gap-2">
                    <UButton color="neutral" variant="outline" class="group relative overflow-hidden rounded-lg border text-left border-default" aria-label="Feature showcase" type="button" @click="openAction(&quot;Feature showcase&quot;)">
                      <img alt="Feature showcase preview published by Shadcnblocks" width="500" height="280" class="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105" style="color:transparent" src="/reference/d69884218f13d922.webp" loading="lazy" />
                      <span class="bg-(--ui-bg)/90 absolute inset-x-0 bottom-0 truncate px-2 py-1 text-[10px]">Feature showcase</span>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="group relative overflow-hidden rounded-lg border text-left border-default" aria-label="Pricing section" type="button" @click="openAction(&quot;Pricing section&quot;)">
                      <img alt="Pricing section preview published by Shadcnblocks" width="500" height="280" class="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105" style="color:transparent" src="/reference/7a049d8b65b586e1.webp" loading="lazy" />
                      <span class="bg-(--ui-bg)/90 absolute inset-x-0 bottom-0 truncate px-2 py-1 text-[10px]">Pricing section</span>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="group relative overflow-hidden rounded-lg border text-left border-default" aria-label="Testimonials" type="button" @click="openAction(&quot;Testimonials&quot;)">
                      <img alt="Testimonials preview published by Shadcnblocks" width="500" height="280" class="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105" style="color:transparent" src="/reference/f043317dc0a760b1.webp" loading="lazy" />
                      <span class="bg-(--ui-bg)/90 absolute inset-x-0 bottom-0 truncate px-2 py-1 text-[10px]">Testimonials</span>
                    </UButton>
                    <UButton color="neutral" variant="outline" class="group relative overflow-hidden rounded-lg border text-left border-default" aria-label="Feature layout" type="button" @click="openAction(&quot;Feature layout&quot;)">
                      <img alt="Feature layout preview published by Shadcnblocks" width="500" height="280" class="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105" style="color:transparent" src="/reference/787d1d024ac71917.webp" loading="lazy" />
                      <span class="bg-(--ui-bg)/90 absolute inset-x-0 bottom-0 truncate px-2 py-1 text-[10px]">Feature layout</span>
                    </UButton>
                  </div>
                  <p class="text-muted mt-2 text-[11px]">Previews: Shadcnblocks</p>
                </section>
                <NuxtLink class="bg-(--ui-bg-muted)/30 hover:bg-muted flex flex-col gap-2 overflow-hidden rounded-xl border p-4 border-default" to="https://www.shadcnblocks.com/admin-dashboard" external>
                  <span class="text-muted text-xs">Explore the product</span>
                  <span class="flex items-center justify-between text-sm font-medium">
                    Shadcn Admin Kit 
                    <UIcon name="i-lucide-arrow-up-right" class="size-4" />
                  </span>
                  <span class="text-muted text-xs leading-5">The application foundation for dashboards and workspaces.</span>
                </NuxtLink>
              </aside>
            </div>
          </div>
        </div>
        <div class="pointer-events-none absolute inset-x-0 bottom-4">
          <div class="mx-auto grid max-w-[1160px] gap-8 px-5 md:px-10 lg:grid-cols-[minmax(0,1fr)_240px]">
            <!-- Form: controls and draft state are declared in this page -->
            <UForm :state="form" @submit="saveForm" aria-label="Follow-up composer" class="bg-default pointer-events-auto relative min-w-0 rounded-full shadow-sm">
              <div data-slot="input-group" role="group" class="group/input-group relative flex w-full min-w-0 items-center border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5 h-12 rounded-full px-2 has-[[data-slot=input-group-control]:focus-visible]:ring-1">
                <UInput v-model="form.askAFollowUp" type="text" data-slot="input-group-control" aria-label="Ask a follow-up" placeholder="Ask a follow-up" name="askAFollowUp" class="flex h-9 w-full text-base md:text-sm flex-1 rounded-none ring-0 aria-invalid:ring-0 dark:bg-transparent" :ui="{ base: 'h-full' }" />
                <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last pr-2 has-[&gt;button]:-mr-1 has-[&gt;kbd]:mr-[-0.15rem]">
                  <UButton color="primary" variant="solid" class="justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted hover:bg-primary/90 flex items-center gap-2 text-sm shadow-none size-8 p-0 has-[&gt;svg]:p-0" aria-label="Send follow-up" type="submit" disabled>
                    <UIcon name="i-lucide-arrow-up" class="size-4" />
                  </UButton>
                </div>
              </div>
              <p id="web-answer-followup-help" class="sr-only">Follow-ups find relevant passages in the five saved sources.</p>
              <p role="status" class="sr-only" />
            </UForm>
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
