<!-- Page: /ai-chat/agent-configuration | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Agent configuration · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "agentName": "Support triage",
  "agentDescription": "Resolve common questions and route the rest to the right team.",
  "model": "gpt-4.1",
  "environment": "Support · production",
  "agentInstructions": "You are a helpful support specialist for Acme.\n\n1. Identify the customer's issue and its urgency.\n2. Search the help center for an approved answer.\n3. Cite the article you use, and be clear about next steps.\n4. Escalate billing disputes or account security issues to a human.\n\nBe warm, concise, and never promise an action you cannot perform.",
  "outputFormat": "Text",
  "agentMaxTurns": 12,
  "model2": "gpt-4.1",
  "environment2": "Support · production",
  "outputFormat2": "Text",
  "model3": "gpt-4.1",
  "environment3": "Support · production",
  "outputFormat3": "Text",
  "agentTestPrompt": "A customer was charged twice for their subscription. How should we help?"
})

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "Configuration",
    "value": "0"
  },
  {
    "label": "Tools 2",
    "value": "1"
  },
  {
    "label": "Versions",
    "value": "2"
  }
]

const tabs2Active = ref("0")

const tabs2Items = [
  {
    "label": "Test agent",
    "value": "0"
  },
  {
    "label": "Configuration JSON",
    "value": "1"
  }
]

const modelOptions = [
  "gpt-4.1",
  "claude-sonnet-4",
  "gemini-2.5-flash"
]

const environmentOptions = [
  "Support · production",
  "Development sandbox",
  "Research runtime"
]

const outputFormatOptions = [
  "Text",
  "JSON"
]

const model2Options = [
  "gpt-4.1",
  "claude-sonnet-4",
  "gemini-2.5-flash"
]

const environment2Options = [
  "Support · production",
  "Development sandbox",
  "Research runtime"
]

const outputFormat2Options = [
  "Text",
  "JSON"
]

const model3Options = [
  "gpt-4.1",
  "claude-sonnet-4",
  "gemini-2.5-flash"
]

const environment3Options = [
  "Support · production",
  "Development sandbox",
  "Research runtime"
]

const outputFormat3Options = [
  "Text",
  "JSON"
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
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/agent-configuration">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="min-h-0 flex-1 overflow-y-auto">
        <div class="mx-auto flex flex-col px-4 sm:px-8 gap-6 py-6 sm:py-8 max-w-7xl">
          <div class="flex flex-wrap gap-4 items-start justify-between">
            <div class="flex flex-col gap-1">
              <h1 class="text-2xl font-semibold tracking-tight text-highlighted">Agent configuration</h1>
              <p class="text-muted max-w-2xl text-sm">Shape how your agent thinks, uses tools, and hands work back to you.</p>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 border-transparent bg-elevated text-default hover:bg-(--ui-bg-elevated)/80 border-default">Version 3</div>
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Discard" type="button" disabled @click="openAction(&quot;Discard&quot;)">
                <UIcon name="i-lucide-rotate-ccw" class="size-4" />
                Discard
              </UButton>
              <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Save version" type="button" disabled @click="openAction(&quot;Save version&quot;)">
                <UIcon name="i-lucide-save" class="size-4" />
                Save version
              </UButton>
            </div>
          </div>
          <div class="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(350px,0.9fr)]">
            <div class="min-w-0">
              <UTabs v-model="tabs1Active" :items="tabs1Items" color="primary" variant="link" data-orientation="horizontal" data-slot="tabs" :ui="{ root: 'gap-4', list: 'justify-start', content: 'min-h-0' }">
                <template #content="{ item }">
                  <template v-if="item.value === '0'">
                    <div data-orientation="horizontal" id="radix-_R_1ddbsnpfknmlb_-content-configuration" class="ring-offset-background focus-visible:ring-accented mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden" style="animation-duration:0s">
                      <!-- Card 1: Support triage -->
                      <UCard class="rounded-lg" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 p-6">
                          <div class="flex items-center gap-3">
                            <div class="bg-muted flex size-10 items-center justify-center rounded-xl">
                              <UIcon name="i-lucide-bot" class="size-5" />
                            </div>
                            <div class="flex flex-col gap-1">
                              <div class="leading-none font-semibold tracking-tight">Support triage</div>
                              <div class="text-muted text-sm">Support copilot · agent_support_triage</div>
                            </div>
                          </div>
                        </div>
                        <div class="p-6 pt-0">
                          <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                            <UFormField label="Name" name="agentName" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <UInput v-model="form.agentName" type="text" name="agentName" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                            </UFormField>
                            <UFormField label="Description" name="agentDescription" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <UInput v-model="form.agentDescription" type="text" name="agentDescription" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                            </UFormField>
                            <div class="grid gap-4 sm:grid-cols-2">
                              <UFormField label="Model" name="model" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                <USelect v-model="form.model" :items="modelOptions" aria-label="Agent model" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 min-w-36 w-full" />
                              </UFormField>
                              <UFormField label="Environment" name="environment" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                <USelect v-model="form.environment" :items="environmentOptions" aria-label="Agent environment" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 min-w-36 w-full" />
                              </UFormField>
                            </div>
                            <div role="group" data-slot="field" data-orientation="vertical" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <div class="flex items-center justify-between gap-2">
                                <label class="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col" data-slot="field-label" for="agent-instructions">Instructions</label>
                                <span class="text-muted text-xs">342 characters</span>
                              </div>
                              <UTextarea v-model="form.agentInstructions" :rows="4" name="agentInstructions" id="agent-instructions" class="flex w-full rounded-md md:text-sm min-h-64 resize-y text-sm leading-relaxed" :ui="{ base: 'h-full' }" />
                              <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Define the goal, boundaries, and when to ask a person for help.</p>
                            </div>
                            <div class="grid gap-4 sm:grid-cols-2">
                              <UFormField label="Output format" name="outputFormat" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                <USelect v-model="form.outputFormat" :items="outputFormatOptions" aria-label="Agent output format" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 min-w-36 w-full" />
                              </UFormField>
                              <UFormField label="Maximum turns" name="agentMaxTurns" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                <UInput v-model.number="form.agentMaxTurns" type="number" min="1" max="50" name="agentMaxTurns" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                              </UFormField>
                            </div>
                          </div>
                        </div>
                      </UCard>
                    </div>
                  </template>
                  <template v-if="item.value === '1'">
                    <div data-orientation="horizontal" id="radix-_R_1ddbsnpfknmlb_-content-configuration" class="ring-offset-background focus-visible:ring-accented mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden" style="animation-duration:0s">
                      <!-- Card 2: Support triage -->
                      <UCard class="rounded-lg" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 p-6">
                          <div class="flex items-center gap-3">
                            <div class="bg-muted flex size-10 items-center justify-center rounded-xl">
                              <UIcon name="i-lucide-bot" class="size-5" />
                            </div>
                            <div class="flex flex-col gap-1">
                              <div class="leading-none font-semibold tracking-tight">Support triage</div>
                              <div class="text-muted text-sm">Support copilot · agent_support_triage</div>
                            </div>
                          </div>
                        </div>
                        <div class="p-6 pt-0">
                          <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                            <UFormField label="Name" name="agentName" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <UInput v-model="form.agentName" type="text" name="agentName" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                            </UFormField>
                            <UFormField label="Description" name="agentDescription" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <UInput v-model="form.agentDescription" type="text" name="agentDescription" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                            </UFormField>
                            <div class="grid gap-4 sm:grid-cols-2">
                              <UFormField label="Model" name="model2" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                <USelect v-model="form.model2" :items="model2Options" aria-label="Agent model" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 min-w-36 w-full" />
                              </UFormField>
                              <UFormField label="Environment" name="environment2" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                <USelect v-model="form.environment2" :items="environment2Options" aria-label="Agent environment" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 min-w-36 w-full" />
                              </UFormField>
                            </div>
                            <div role="group" data-slot="field" data-orientation="vertical" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <div class="flex items-center justify-between gap-2">
                                <label class="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col" data-slot="field-label" for="agent-instructions">Instructions</label>
                                <span class="text-muted text-xs">342 characters</span>
                              </div>
                              <UTextarea v-model="form.agentInstructions" :rows="4" name="agentInstructions" id="agent-instructions" class="flex w-full rounded-md md:text-sm min-h-64 resize-y text-sm leading-relaxed" :ui="{ base: 'h-full' }" />
                              <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Define the goal, boundaries, and when to ask a person for help.</p>
                            </div>
                            <div class="grid gap-4 sm:grid-cols-2">
                              <UFormField label="Output format" name="outputFormat2" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                <USelect v-model="form.outputFormat2" :items="outputFormat2Options" aria-label="Agent output format" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 min-w-36 w-full" />
                              </UFormField>
                              <UFormField label="Maximum turns" name="agentMaxTurns" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                <UInput v-model.number="form.agentMaxTurns" type="number" min="1" max="50" name="agentMaxTurns" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                              </UFormField>
                            </div>
                          </div>
                        </div>
                      </UCard>
                    </div>
                  </template>
                  <template v-if="item.value === '2'">
                    <div data-orientation="horizontal" id="radix-_R_1ddbsnpfknmlb_-content-configuration" class="ring-offset-background focus-visible:ring-accented mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden" style="animation-duration:0s">
                      <!-- Card 3: Support triage -->
                      <UCard class="rounded-lg" :ui="{ body: 'contents' }">
                        <div class="flex flex-col space-y-1.5 p-6">
                          <div class="flex items-center gap-3">
                            <div class="bg-muted flex size-10 items-center justify-center rounded-xl">
                              <UIcon name="i-lucide-bot" class="size-5" />
                            </div>
                            <div class="flex flex-col gap-1">
                              <div class="leading-none font-semibold tracking-tight">Support triage</div>
                              <div class="text-muted text-sm">Support copilot · agent_support_triage</div>
                            </div>
                          </div>
                        </div>
                        <div class="p-6 pt-0">
                          <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                            <UFormField label="Name" name="agentName" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <UInput v-model="form.agentName" type="text" name="agentName" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                            </UFormField>
                            <UFormField label="Description" name="agentDescription" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <UInput v-model="form.agentDescription" type="text" name="agentDescription" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                            </UFormField>
                            <div class="grid gap-4 sm:grid-cols-2">
                              <UFormField label="Model" name="model3" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                <USelect v-model="form.model3" :items="model3Options" aria-label="Agent model" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 min-w-36 w-full" />
                              </UFormField>
                              <UFormField label="Environment" name="environment3" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                <USelect v-model="form.environment3" :items="environment3Options" aria-label="Agent environment" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 min-w-36 w-full" />
                              </UFormField>
                            </div>
                            <div role="group" data-slot="field" data-orientation="vertical" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                              <div class="flex items-center justify-between gap-2">
                                <label class="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-data-checked:border-primary/30 has-data-checked:bg-primary/5 has-[&gt;[data-slot=field]]:rounded-md has-[&gt;[data-slot=field]]:border *:data-[slot=field]:p-3 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 has-[&gt;[data-slot=field]]:w-full has-[&gt;[data-slot=field]]:flex-col" data-slot="field-label" for="agent-instructions">Instructions</label>
                                <span class="text-muted text-xs">342 characters</span>
                              </div>
                              <UTextarea v-model="form.agentInstructions" :rows="4" name="agentInstructions" id="agent-instructions" class="flex w-full rounded-md md:text-sm min-h-64 resize-y text-sm leading-relaxed" :ui="{ base: 'h-full' }" />
                              <p data-slot="field-description" class="text-left text-sm leading-normal font-normal text-muted group-has-data-horizontal/field:text-balance [[data-variant=legend]+&amp;]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&amp;&gt;a]:underline [&amp;&gt;a]:underline-offset-4 [&amp;&gt;a:hover]:text-primary">Define the goal, boundaries, and when to ask a person for help.</p>
                            </div>
                            <div class="grid gap-4 sm:grid-cols-2">
                              <UFormField label="Output format" name="outputFormat3" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                <USelect v-model="form.outputFormat3" :items="outputFormat3Options" aria-label="Agent output format" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 min-w-36 w-full" />
                              </UFormField>
                              <UFormField label="Maximum turns" name="agentMaxTurns" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                                <UInput v-model.number="form.agentMaxTurns" type="number" min="1" max="50" name="agentMaxTurns" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                              </UFormField>
                            </div>
                          </div>
                        </div>
                      </UCard>
                    </div>
                  </template>
                </template>
              </UTabs>
            </div>
            <!-- Card 4: Preview -->
            <UCard class="rounded-lg min-w-0 xl:sticky xl:top-0" :ui="{ body: 'contents' }">
              <div class="flex flex-col space-y-1.5 p-6">
                <div class="flex items-center justify-between">
                  <div class="leading-none font-semibold tracking-tight">Preview</div>
                  <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted border-default">Scripted test</div>
                </div>
                <div class="text-muted text-sm">Try the billing scenario with your current configuration.</div>
              </div>
              <div class="p-6 pt-0 flex flex-col gap-5">
                <UTabs v-model="tabs2Active" :items="tabs2Items" color="primary" variant="link" data-orientation="horizontal" data-slot="tabs" :ui="{ root: 'gap-4', list: 'justify-start', content: 'min-h-0' }">
                  <template #content="{ item }">
                    <template v-if="item.value === '0'">
                      <div data-orientation="horizontal" id="radix-_R_qddbsnpfknmlb_-content-test" class="ring-offset-background focus-visible:ring-accented mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden flex flex-col gap-5" style="animation-duration:0s">
                        <div class="flex items-center justify-between text-xs">
                          <span class="text-muted">gpt-4.1</span>
                          <span class="text-muted">2 tools enabled</span>
                        </div>
                        <div class="bg-(--ui-bg-muted)/30 flex min-h-48 flex-col items-center justify-center gap-3 rounded-lg border border-dashed p-6 text-center border-default">
                          <UIcon name="i-lucide-bot" class="text-muted size-7" />
                          <p class="text-sm font-medium">See your agent’s approach</p>
                          <p class="text-muted max-w-xs text-xs">Run the sample scenario to preview tool choices, approvals, and the response format.</p>
                        </div>
                        <UFormField label="Test message" name="agentTestPrompt" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                          <UTextarea v-model="form.agentTestPrompt" :rows="4" name="agentTestPrompt" class="flex w-full rounded-md text-base md:text-sm min-h-24" :ui="{ base: 'h-full' }" />
                        </UFormField>
                        <div class="flex justify-between gap-2">
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Clear preview" type="button" @click="openAction(&quot;Clear preview&quot;)">
                            Clear preview
                          </UButton>
                          <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Run test" type="button" @click="openAction(&quot;Run test&quot;)">
                            <UIcon name="i-lucide-play" class="size-4" />
                            Run test
                          </UButton>
                        </div>
                      </div>
                    </template>
                    <template v-if="item.value === '1'">
                      <div data-orientation="horizontal" id="radix-_R_qddbsnpfknmlb_-content-test" class="ring-offset-background focus-visible:ring-accented mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden flex flex-col gap-5" style="animation-duration:0s">
                        <div class="flex items-center justify-between text-xs">
                          <span class="text-muted">gpt-4.1</span>
                          <span class="text-muted">2 tools enabled</span>
                        </div>
                        <div class="bg-(--ui-bg-muted)/30 flex min-h-48 flex-col items-center justify-center gap-3 rounded-lg border border-dashed p-6 text-center border-default">
                          <UIcon name="i-lucide-bot" class="text-muted size-7" />
                          <p class="text-sm font-medium">See your agent’s approach</p>
                          <p class="text-muted max-w-xs text-xs">Run the sample scenario to preview tool choices, approvals, and the response format.</p>
                        </div>
                        <UFormField label="Test message" name="agentTestPrompt" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                          <UTextarea v-model="form.agentTestPrompt" :rows="4" name="agentTestPrompt" class="flex w-full rounded-md text-base md:text-sm min-h-24" :ui="{ base: 'h-full' }" />
                        </UFormField>
                        <div class="flex justify-between gap-2">
                          <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Clear preview" type="button" @click="openAction(&quot;Clear preview&quot;)">
                            Clear preview
                          </UButton>
                          <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" aria-label="Run test" type="button" @click="openAction(&quot;Run test&quot;)">
                            <UIcon name="i-lucide-play" class="size-4" />
                            Run test
                          </UButton>
                        </div>
                      </div>
                    </template>
                  </template>
                </UTabs>
                <div class="text-muted flex items-start gap-2 border-t pt-4 text-xs border-default">
                  <UIcon name="i-lucide-check-check" class="size-4 shrink-0" />
                  <p>The preview demonstrates a fixed billing scenario. Model, tools, output format, and approval settings shape the example; instructions are not executed.</p>
                </div>
              </div>
            </UCard>
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
