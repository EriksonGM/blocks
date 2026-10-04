<!-- Page: /ai-chat/research-brief-builder | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Research 1 · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "researchObjective": "What would make a self-serve onboarding pilot worth expanding?",
  "researchAudience": "Product and customer success teams",
  "question1": "Where do new teams lose momentum before reaching first value?",
  "question2": "Which onboarding interventions have evidence of improving activation?",
  "question3": "What should we measure before expanding a 20-workspace pilot?",
  "researchRegion": "North America",
  "researchPeriod": "Past 12 months",
  "researchSource0": true,
  "researchSource1": true,
  "researchSource2": false,
  "researchExclusions": "Exclude vendor-sponsored rankings and anonymous claims.",
  "step1": "Find relevant sources for each research question.",
  "step2": "Compare evidence, publication dates, and conflicting findings.",
  "step3": "Draft a decision brief with citations and open questions."
})

const researchRegionOptions = [
  "North America",
  "Europe",
  "Asia Pacific",
  "Global"
]

const researchPeriodOptions = [
  "Past 3 months",
  "Past 12 months",
  "Past 3 years",
  "Any time"
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

const messages = ref<{ id: string, role: 'user' | 'assistant', text: string }[]>([])
function sendMessage(field: keyof typeof form) {
  const message = String(form[field]).trim()
  if (!message) return
  messages.value.push({ id: 'user-' + messages.value.length, role: 'user', text: message })
  messages.value.push({ id: 'assistant-' + messages.value.length, role: 'assistant', text: 'Your message has been added to this demo conversation. Connect sendMessage to your AI API for real responses.' })
  Object.assign(form, { [field]: '' })
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/research-brief-builder">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="flex min-h-0 flex-1 overflow-hidden">
        <div class="flex min-h-0 min-w-0 flex-1 flex-col">
          <div class="flex min-h-0 flex-1 flex-col">
            <header class="flex h-14 shrink-0 items-center justify-between gap-3 border-b px-5 border-default">
              <h2 class="text-sm font-medium text-highlighted">Your brief</h2>
              <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted border-default">Draft</div>
            </header>
            <div data-slot="scroll-area" class="relative overflow-hidden min-h-0 flex-1 [&amp;&gt;[data-slot=scroll-area-viewport]&gt;div]:!block" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
              <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                <div style="min-width:100%;display:table">
                  <div class="mx-auto flex w-full max-w-2xl flex-col gap-7 px-5 py-7 sm:px-8">
                    <div class="flex flex-col gap-2">
                      <p class="text-muted text-xs">RESEARCH / NEW BRIEF</p>
                      <h1 class="text-2xl font-semibold tracking-tight text-highlighted">Start with the right question.</h1>
                      <p class="text-muted text-sm leading-relaxed">Define the decision, set the boundaries, and shape the work before research begins.</p>
                    </div>
                    <fieldset data-slot="field-set" class="flex flex-col gap-6 has-[&gt;[data-slot=checkbox-group]]:gap-3 has-[&gt;[data-slot=radio-group]]:gap-3">
                      <legend data-slot="field-legend" class="mb-3 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base sr-only">Research brief</legend>
                      <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                        <UFormField label="What do you want to learn?" name="researchObjective" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                          <UTextarea v-model="form.researchObjective" :rows="4" name="researchObjective" class="flex min-h-[60px] w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                        </UFormField>
                        <UFormField label="Who is this for?" name="researchAudience" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                          <UInput v-model="form.researchAudience" type="text" name="researchAudience" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                        </UFormField>
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                        <fieldset data-slot="field-set" class="flex flex-col gap-6 has-[&gt;[data-slot=checkbox-group]]:gap-3 has-[&gt;[data-slot=radio-group]]:gap-3">
                          <legend data-slot="field-legend" class="mb-3 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base">Research questions</legend>
                          <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 gap-3">
                            <UFormField label="Question1" name="question1" data-slot="field" class="group/field flex w-full data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto gap-2">
                              <!-- Chat composer: form.question1 -->
                              <div v-if="messages.length" class="my-4 space-y-4">
                                <UChatMessage v-for="message in messages" :key="message.id" :id="message.id" :role="message.role" :parts="[{ type: 'text', text: message.text }]" :side="message.role === 'user' ? 'right' : 'left'" :variant="message.role === 'user' ? 'soft' : 'naked'" />
                              </div>
                              <UChatPrompt v-model="form.question1" :autofocus="false" color="primary" :rows="3" data-slot="input-group" class="group/input-group relative flex h-9 w-full min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5" @submit="sendMessage(&quot;question1&quot;)" :ui="{ base: 'px-4 py-3 text-sm', footer: 'p-0 w-full' }">
                                <template #footer>
                                  <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last w-full px-2.5 pb-2 group-has-[&gt;input]/input-group:pb-2 [.border-t]:pt-2 justify-end">
                                    <span class="mr-auto text-xs tabular-nums">Question1</span>
                                    <UButton color="neutral" variant="soft" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default flex items-center gap-2 text-sm shadow-none size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[&gt;svg]:p-0" aria-label="Remove question 1" type="button" @click="openAction(&quot;Remove question 1&quot;)">
                                      <UIcon name="i-lucide-x" class="size-4" />
                                    </UButton>
                                  </div>
                                </template>
                              </UChatPrompt>
                            </UFormField>
                            <UFormField label="Question2" name="question2" data-slot="field" class="group/field flex w-full data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto gap-2">
                              <!-- Chat composer: form.question2 -->
                              <div v-if="messages.length" class="my-4 space-y-4">
                                <UChatMessage v-for="message in messages" :key="message.id" :id="message.id" :role="message.role" :parts="[{ type: 'text', text: message.text }]" :side="message.role === 'user' ? 'right' : 'left'" :variant="message.role === 'user' ? 'soft' : 'naked'" />
                              </div>
                              <UChatPrompt v-model="form.question2" :autofocus="false" color="primary" :rows="3" data-slot="input-group" class="group/input-group relative flex h-9 w-full min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5" @submit="sendMessage(&quot;question2&quot;)" :ui="{ base: 'px-4 py-3 text-sm', footer: 'p-0 w-full' }">
                                <template #footer>
                                  <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last w-full px-2.5 pb-2 group-has-[&gt;input]/input-group:pb-2 [.border-t]:pt-2 justify-end">
                                    <span class="mr-auto text-xs tabular-nums">Question2</span>
                                    <UButton color="neutral" variant="soft" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default flex items-center gap-2 text-sm shadow-none size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[&gt;svg]:p-0" aria-label="Remove question 2" type="button" @click="openAction(&quot;Remove question 2&quot;)">
                                      <UIcon name="i-lucide-x" class="size-4" />
                                    </UButton>
                                  </div>
                                </template>
                              </UChatPrompt>
                            </UFormField>
                            <UFormField label="Question3" name="question3" data-slot="field" class="group/field flex w-full data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto gap-2">
                              <!-- Chat composer: form.question3 -->
                              <div v-if="messages.length" class="my-4 space-y-4">
                                <UChatMessage v-for="message in messages" :key="message.id" :id="message.id" :role="message.role" :parts="[{ type: 'text', text: message.text }]" :side="message.role === 'user' ? 'right' : 'left'" :variant="message.role === 'user' ? 'soft' : 'naked'" />
                              </div>
                              <UChatPrompt v-model="form.question3" :autofocus="false" color="primary" :rows="3" data-slot="input-group" class="group/input-group relative flex h-9 w-full min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5" @submit="sendMessage(&quot;question3&quot;)" :ui="{ base: 'px-4 py-3 text-sm', footer: 'p-0 w-full' }">
                                <template #footer>
                                  <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last w-full px-2.5 pb-2 group-has-[&gt;input]/input-group:pb-2 [.border-t]:pt-2 justify-end">
                                    <span class="mr-auto text-xs tabular-nums">Question3</span>
                                    <UButton color="neutral" variant="soft" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default flex items-center gap-2 text-sm shadow-none size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[&gt;svg]:p-0" aria-label="Remove question 3" type="button" @click="openAction(&quot;Remove question 3&quot;)">
                                      <UIcon name="i-lucide-x" class="size-4" />
                                    </UButton>
                                  </div>
                                </template>
                              </UChatPrompt>
                            </UFormField>
                            <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs self-start" aria-label="Add question" type="button" @click="openAction(&quot;Add question&quot;)">
                              <UIcon name="i-lucide-plus" class="size-4" />
                              Add question
                            </UButton>
                          </div>
                        </fieldset>
                        <div data-orientation="horizontal" role="none" class="bg-(--ui-border) shrink-0 h-[1px] w-full" />
                        <fieldset data-slot="field-set" class="flex flex-col gap-6 has-[&gt;[data-slot=checkbox-group]]:gap-3 has-[&gt;[data-slot=radio-group]]:gap-3">
                          <legend data-slot="field-legend" class="mb-3 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base">Scope &amp; sources</legend>
                          <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 gap-5">
                            <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 @md/field-group:flex-row">
                              <UFormField label="Region" name="researchRegion" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                <USelect v-model="form.researchRegion" :items="researchRegionOptions" aria-label="North America" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-full" />
                              </UFormField>
                              <UFormField label="Publication window" name="researchPeriod" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                <USelect v-model="form.researchPeriod" :items="researchPeriodOptions" aria-label="Past 12 months" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-full" />
                              </UFormField>
                            </div>
                            <fieldset data-slot="field-set" class="flex flex-col gap-6 has-[&gt;[data-slot=checkbox-group]]:gap-3 has-[&gt;[data-slot=radio-group]]:gap-3">
                              <legend data-slot="field-legend" class="mb-3 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base">Allowed source types</legend>
                              <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 gap-3">
                                <div role="group" data-slot="field" data-orientation="horizontal" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-row items-center has-[&gt;[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[&gt;[data-slot=field-content]]:[&amp;&gt;[role=checkbox],[role=radio]]:mt-px">
                                  <UCheckbox v-model="form.researchSource0" aria-label="Toggle setting" />
                                  <label class="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col" data-slot="field-label" for="research-source-0">Official documentation</label>
                                </div>
                                <div role="group" data-slot="field" data-orientation="horizontal" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-row items-center has-[&gt;[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[&gt;[data-slot=field-content]]:[&amp;&gt;[role=checkbox],[role=radio]]:mt-px">
                                  <UCheckbox v-model="form.researchSource1" aria-label="Toggle setting" />
                                  <label class="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col" data-slot="field-label" for="research-source-1">Independent research</label>
                                </div>
                                <div role="group" data-slot="field" data-orientation="horizontal" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-row items-center has-[&gt;[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[&gt;[data-slot=field-content]]:[&amp;&gt;[role=checkbox],[role=radio]]:mt-px">
                                  <UCheckbox v-model="form.researchSource2" aria-label="Toggle setting" />
                                  <label class="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col" data-slot="field-label" for="research-source-2">Customer interviews</label>
                                </div>
                              </div>
                            </fieldset>
                            <UFormField label="Leave out(optional)" name="researchExclusions" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <UTextarea v-model="form.researchExclusions" :rows="4" name="researchExclusions" class="flex min-h-[60px] w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                            </UFormField>
                          </div>
                        </fieldset>
                      </div>
                    </fieldset>
                    <div class="flex justify-end">
                      <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Review plan" type="button" @click="openAction(&quot;Review plan&quot;)">
                        Review plan
                        <UIcon name="i-lucide-arrow-up-right" class="size-4" />
                      </UButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <USeparator orientation="horizontal" aria-label="Resize research plan" class="group bg-(--ui-border) relative z-10 hidden w-px shrink-0 cursor-col-resize outline-none min-[980px]:block" />
        <div class="hidden min-h-0 min-w-[360px] min-[980px]:flex shrink-0" style="width:44%">
          <section class="flex min-h-0 min-w-0 flex-1 flex-col">
            <header class="flex h-14 shrink-0 items-center justify-between gap-2 border-b px-4 border-default">
              <div class="flex items-center gap-2">
                <h2 class="text-sm font-medium text-highlighted">Research plan</h2>
                <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 border-default">3 steps</div>
              </div>
              <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-6" aria-label="Close research plan" type="button" @click="openAction(&quot;Close research plan&quot;)">
                <UIcon name="i-lucide-panel-right-close" class="size-4" />
              </UButton>
            </header>
            <div data-slot="scroll-area" class="relative overflow-hidden bg-(--ui-bg-muted)/30 min-h-0 flex-1 [&amp;&gt;[data-slot=scroll-area-viewport]&gt;div]:!block" style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px">
              <div data-slot="scroll-area-viewport" class="h-full w-full rounded-[inherit]" style="overflow: hidden scroll;">
                <div style="min-width:100%;display:table">
                  <div class="mx-auto flex w-full max-w-2xl flex-col gap-5 p-5 sm:p-7">
                    <div class="flex flex-col gap-2">
                      <h3 class="text-lg font-semibold tracking-tight text-highlighted">A plan you can shape.</h3>
                      <p class="text-muted text-sm leading-relaxed">Edit the sequence before starting. Keep the work focused on the questions in your brief.</p>
                    </div>
                    <div class="bg-default rounded-xl border p-4 border-default">
                      <fieldset data-slot="field-set" class="flex flex-col gap-6 has-[&gt;[data-slot=checkbox-group]]:gap-3 has-[&gt;[data-slot=radio-group]]:gap-3">
                        <legend data-slot="field-legend" class="mb-3 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base sr-only">Plan steps</legend>
                        <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4 gap-3">
                          <UFormField label="Step1" name="step1" data-slot="field" class="group/field flex w-full data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto gap-2">
                            <!-- Chat composer: form.step1 -->
                            <div v-if="messages.length" class="my-4 space-y-4">
                              <UChatMessage v-for="message in messages" :key="message.id" :id="message.id" :role="message.role" :parts="[{ type: 'text', text: message.text }]" :side="message.role === 'user' ? 'right' : 'left'" :variant="message.role === 'user' ? 'soft' : 'naked'" />
                            </div>
                            <UChatPrompt v-model="form.step1" :autofocus="false" color="primary" :rows="3" data-slot="input-group" class="group/input-group relative flex h-9 w-full min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5" @submit="sendMessage(&quot;step1&quot;)" :ui="{ base: 'px-4 py-3 text-sm', footer: 'p-0 w-full' }">
                              <template #footer>
                                <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last w-full px-2.5 pb-2 group-has-[&gt;input]/input-group:pb-2 [.border-t]:pt-2 justify-end">
                                  <span class="mr-auto text-xs tabular-nums">Step1</span>
                                  <UButton color="neutral" variant="soft" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default flex items-center gap-2 text-sm shadow-none size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[&gt;svg]:p-0" aria-label="Move step 1 up" type="button" :disabled="!form.step1.trim()" @click="sendMessage(&quot;step1&quot;)">
                                    <UIcon name="i-lucide-arrow-up" class="size-4" />
                                  </UButton>
                                  <UButton color="neutral" variant="soft" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default flex items-center gap-2 text-sm shadow-none size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[&gt;svg]:p-0" aria-label="Move step 1 down" type="button" @click="openAction(&quot;Move step 1 down&quot;)">
                                    <UIcon name="i-lucide-arrow-down" class="size-4" />
                                  </UButton>
                                  <UButton color="neutral" variant="soft" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default flex items-center gap-2 text-sm shadow-none size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[&gt;svg]:p-0" aria-label="Remove step 1" type="button" @click="openAction(&quot;Remove step 1&quot;)">
                                    <UIcon name="i-lucide-x" class="size-4" />
                                  </UButton>
                                </div>
                              </template>
                            </UChatPrompt>
                          </UFormField>
                          <UFormField label="Step2" name="step2" data-slot="field" class="group/field flex w-full data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto gap-2">
                            <!-- Chat composer: form.step2 -->
                            <div v-if="messages.length" class="my-4 space-y-4">
                              <UChatMessage v-for="message in messages" :key="message.id" :id="message.id" :role="message.role" :parts="[{ type: 'text', text: message.text }]" :side="message.role === 'user' ? 'right' : 'left'" :variant="message.role === 'user' ? 'soft' : 'naked'" />
                            </div>
                            <UChatPrompt v-model="form.step2" :autofocus="false" color="primary" :rows="3" data-slot="input-group" class="group/input-group relative flex h-9 w-full min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5" @submit="sendMessage(&quot;step2&quot;)" :ui="{ base: 'px-4 py-3 text-sm', footer: 'p-0 w-full' }">
                              <template #footer>
                                <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last w-full px-2.5 pb-2 group-has-[&gt;input]/input-group:pb-2 [.border-t]:pt-2 justify-end">
                                  <span class="mr-auto text-xs tabular-nums">Step2</span>
                                  <UButton color="neutral" variant="soft" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default flex items-center gap-2 text-sm shadow-none size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[&gt;svg]:p-0" aria-label="Move step 2 up" type="button" :disabled="!form.step2.trim()" @click="sendMessage(&quot;step2&quot;)">
                                    <UIcon name="i-lucide-arrow-up" class="size-4" />
                                  </UButton>
                                  <UButton color="neutral" variant="soft" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default flex items-center gap-2 text-sm shadow-none size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[&gt;svg]:p-0" aria-label="Move step 2 down" type="button" @click="openAction(&quot;Move step 2 down&quot;)">
                                    <UIcon name="i-lucide-arrow-down" class="size-4" />
                                  </UButton>
                                  <UButton color="neutral" variant="soft" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default flex items-center gap-2 text-sm shadow-none size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[&gt;svg]:p-0" aria-label="Remove step 2" type="button" @click="openAction(&quot;Remove step 2&quot;)">
                                    <UIcon name="i-lucide-x" class="size-4" />
                                  </UButton>
                                </div>
                              </template>
                            </UChatPrompt>
                          </UFormField>
                          <UFormField label="Step3" name="step3" data-slot="field" class="group/field flex w-full data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto gap-2">
                            <!-- Chat composer: form.step3 -->
                            <div v-if="messages.length" class="my-4 space-y-4">
                              <UChatMessage v-for="message in messages" :key="message.id" :id="message.id" :role="message.role" :parts="[{ type: 'text', text: message.text }]" :side="message.role === 'user' ? 'right' : 'left'" :variant="message.role === 'user' ? 'soft' : 'naked'" />
                            </div>
                            <UChatPrompt v-model="form.step3" :autofocus="false" color="primary" :rows="3" data-slot="input-group" class="group/input-group relative flex h-9 w-full min-w-0 items-center rounded-md border border-default shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-accented has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-(--ui-border-accented)/50 has-[[data-slot][aria-invalid=true]]:border-(--ui-error) has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/20 has-[&gt;[data-align=block-end]]:h-auto has-[&gt;[data-align=block-end]]:flex-col has-[&gt;[data-align=block-start]]:h-auto has-[&gt;[data-align=block-start]]:flex-col has-[&gt;textarea]:h-auto dark:bg-(--ui-border)/30 dark:has-[[data-slot][aria-invalid=true]]:ring-(--ui-error)/40 has-[&gt;[data-align=block-end]]:[&amp;&gt;input]:pt-3 has-[&gt;[data-align=block-start]]:[&amp;&gt;input]:pb-3 has-[&gt;[data-align=inline-end]]:[&amp;&gt;input]:pr-1.5 has-[&gt;[data-align=inline-start]]:[&amp;&gt;input]:pl-1.5" @submit="sendMessage(&quot;step3&quot;)" :ui="{ base: 'px-4 py-3 text-sm', footer: 'p-0 w-full' }">
                              <template #footer>
                                <div role="group" data-slot="input-group-addon" class="flex h-auto cursor-text items-center gap-2 py-1.5 text-sm font-medium text-muted select-none group-data-[disabled=true]/input-group:opacity-50 [&amp;&gt;kbd]:rounded-[calc(var(--radius)-5px)] [&amp;&gt;svg:not([class*='size-'])]:size-4 order-last w-full px-2.5 pb-2 group-has-[&gt;input]/input-group:pb-2 [.border-t]:pt-2 justify-end">
                                  <span class="mr-auto text-xs tabular-nums">Step3</span>
                                  <UButton color="neutral" variant="soft" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default flex items-center gap-2 text-sm shadow-none size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[&gt;svg]:p-0" aria-label="Move step 3 up" type="button" :disabled="!form.step3.trim()" @click="sendMessage(&quot;step3&quot;)">
                                    <UIcon name="i-lucide-arrow-up" class="size-4" />
                                  </UButton>
                                  <UButton color="neutral" variant="soft" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default flex items-center gap-2 text-sm shadow-none size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[&gt;svg]:p-0" aria-label="Move step 3 down" type="button" disabled @click="openAction(&quot;Move step 3 down&quot;)">
                                    <UIcon name="i-lucide-arrow-down" class="size-4" />
                                  </UButton>
                                  <UButton color="neutral" variant="soft" class="justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default flex items-center gap-2 text-sm shadow-none size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[&gt;svg]:p-0" aria-label="Remove step 3" type="button" @click="openAction(&quot;Remove step 3&quot;)">
                                    <UIcon name="i-lucide-x" class="size-4" />
                                  </UButton>
                                </div>
                              </template>
                            </UChatPrompt>
                          </UFormField>
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs self-start" aria-label="Add step" type="button" @click="openAction(&quot;Add step&quot;)">
                            <UIcon name="i-lucide-plus" class="size-4" />
                            Add step
                          </UButton>
                        </div>
                      </fieldset>
                    </div>
                    <dl class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-xs leading-relaxed">
                      <dt class="text-muted">Coverage</dt>
                      <dd>3research questions</dd>
                      <dt class="text-muted">Sources</dt>
                      <dd>Official documentation · Independent research</dd>
                      <dt class="text-muted">Deliverable</dt>
                      <dd>Decision brief with evidence and open questions</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <footer class="flex shrink-0 flex-col gap-3 border-t p-4 border-default">
              <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Start demo run" type="button" @click="openAction(&quot;Start demo run&quot;)">
                <UIcon name="i-lucide-play" class="size-4" />
                Start demo run
              </UButton>
              <p class="text-muted text-center text-xs">Runs locally · No external services</p>
            </footer>
          </section>
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
