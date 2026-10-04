<!-- Page: /ai-chat/audio-playground | All content, state and styles live in this file. -->
<script setup lang="ts">
const route = useRoute()

useHead({ title: "Audio playground · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "sampleScenario": "Workspace welcome",
  "voice": "Clear · conversational",
  "playbackSpeed": "1×",
  "audioInstructions": "Be a concise, helpful assistant. Confirm the user's intent before suggesting the next step."
})

const tabs1Active = ref("0")

const tabs1Items = [
  {
    "label": "Live voice",
    "value": "0"
  },
  {
    "label": "Realtime",
    "value": "1"
  },
  {
    "label": "Translate",
    "value": "2"
  },
  {
    "label": "Text to speech",
    "value": "3"
  }
]

const tabs2Active = ref("0")

const tabs2Items = [
  {
    "label": "Transcript",
    "value": "0"
  },
  {
    "label": "Events",
    "value": "1"
  }
]

const sampleScenarioOptions = [
  "Workspace welcome",
  "Delivery update"
]

const voiceOptions = [
  "Clear · conversational",
  "Warm · measured"
]

const playbackSpeedOptions = [
  "0.75×",
  "1×",
  "1.25×",
  "1.5×"
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

function exportCsv() {
  const rows = Object.entries(form).map(([name, value]) => [name, String(value)])
  const csv = rows.map(row => row.map(value => '"' + value.replaceAll('"', '""') + '"').join(',')).join('\n')
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = "ai-chat-audio-playground.csv"
  anchor.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/ai-chat/audio-playground">
    <div id="ai-workspace-content" class="flex min-h-0 flex-1 flex-col">
      <div class="min-h-0 flex-1 overflow-y-auto">
        <div class="mx-auto flex flex-col px-4 sm:px-8 gap-6 py-6 sm:py-8 max-w-7xl">
          <div class="flex flex-wrap gap-4 items-start justify-between">
            <div class="flex flex-col gap-1">
              <h1 class="text-2xl font-semibold tracking-tight text-highlighted">Audio playground</h1>
              <p class="text-muted max-w-2xl text-sm">Configure voice sessions, inspect transcripts, and preview speech.</p>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" aria-label="Export request" type="button" @click="exportCsv()">
                <UIcon name="i-lucide-braces" class="size-4" />
                Export request
              </UButton>
            </div>
          </div>
          <audio src="/reference/cd0fe8784f8ee64c.wav" />
          <div data-orientation="horizontal">
            <div class="overflow-x-auto">
              <UTabs v-model="tabs1Active" :items="tabs1Items" :content="false" color="primary" variant="link" class="bg-muted text-muted inline-flex h-9 items-center justify-center rounded-lg p-1" aria-label="Audio mode" data-orientation="horizontal" style="outline:none" />
            </div>
            <div data-orientation="horizontal" id="radix-_R_ldbsnpfknmlb_-content-live" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-5" style="animation-duration:0s">
              <div class="grid items-start gap-5 xl:grid-cols-[280px_minmax(0,1fr)]">
                <!-- Card 1: Session settings -->
                <UCard class="rounded-lg" :ui="{ body: 'contents' }">
                  <div class="flex flex-col space-y-1.5 p-6">
                    <div class="leading-none font-semibold tracking-tight">Session settings</div>
                    <div class="text-muted text-sm">Prepare a request and try a sample.</div>
                  </div>
                  <div class="p-6 pt-0">
                    <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                      <UFormField label="Sample scenario" name="sampleScenario" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                        <USelect v-model="form.sampleScenario" :items="sampleScenarioOptions" aria-label="Audio sample scenario" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                      </UFormField>
                      <UFormField label="Voice" name="voice" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                        <USelect v-model="form.voice" :items="voiceOptions" aria-label="Audio voice" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                      </UFormField>
                      <UFormField label="Playback speed" name="playbackSpeed" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                        <USelect v-model="form.playbackSpeed" :items="playbackSpeedOptions" aria-label="Audio playback speed" class="border-default ring-offset-background placeholder:text-muted focus:ring-accented flex h-9 items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1 w-auto min-w-36" />
                      </UFormField>
                    </div>
                  </div>
                </UCard>
                <div class="flex min-w-0 flex-col gap-5">
                  <div data-slot="field-group" class="group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4">
                    <UFormField label="Instructions" name="audioInstructions" data-slot="field" class="group/field flex w-full gap-3 data-[invalid=true]:text-error flex-col *:w-full [&amp;&gt;.sr-only]:w-auto">
                      <UTextarea v-model="form.audioInstructions" :rows="4" name="audioInstructions" class="flex w-full rounded-md text-base md:text-sm min-h-20" :ui="{ base: 'h-full' }" />
                    </UFormField>
                  </div>
                  <!-- Card 2: Voice preview -->
                  <UCard class="rounded-lg" :ui="{ body: 'contents' }">
                    <div class="flex space-y-1.5 p-6 flex-row items-center justify-between gap-3">
                      <div>
                        <div class="leading-none font-semibold tracking-tight">Voice preview</div>
                        <div class="text-muted text-sm mt-1">Workspace welcome · clear voice</div>
                      </div>
                      <div class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-accented focus:ring-offset-2 text-highlighted border-default">Ready</div>
                    </div>
                    <div class="p-6 pt-0">
                      <div role="img" aria-label="Waveform of the selected prerecorded audio" class="bg-(--ui-bg-muted)/40 flex h-24 items-center gap-0.5 overflow-hidden rounded-md px-3">
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-highlighted)" style="height:71.92%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:86.13%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:82.64999999999999%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:85.115%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:60.754999999999995%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:46.980000000000004%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:85.405%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:42.195%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:47.415%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:84.97%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:79.46000000000001%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:65.105%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:17.11%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:5%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:5%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:83.66499999999999%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:63.945%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:47.705000000000005%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:84.97%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:77.14%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:52.199999999999996%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:89.03%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:75.4%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:81.49000000000001%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:49.73500000000001%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:86.85499999999999%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:85.405%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:16.240000000000002%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:82.21499999999999%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:87.725%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:81.2%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:75.11%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:34.22%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:5%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:5%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:5.22%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:88.885%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:21.605%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:84.24499999999999%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:82.21499999999999%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:67.28%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:31.755%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:5%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:5%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:12.035%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:65.685%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:83.22999999999999%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:84.97%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:89.03%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:6.96%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:63.22%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:5%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:5%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:5%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:35.525%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:85.25999999999999%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:79.17%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:76.995%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:81.49000000000001%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:55.68%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:72.79%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:68.14999999999999%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:80.04%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:90%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:48.575%" />
                        <span class="min-w-px flex-1 rounded-full bg-(--ui-text-muted)/35" style="height:21.314999999999998%" />
                      </div>
                      <div class="mt-3 flex items-center gap-3">
                        <span class="text-muted w-8 font-mono text-[11px]">0:00</span>
                        <span data-orientation="horizontal" data-slot="slider" class="relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col" aria-label="Seek audio" style="--radix-slider-thumb-transform:translateX(-50%)">
                          <span data-orientation="horizontal" data-slot="slider-track" class="relative grow overflow-hidden rounded-full bg-muted data-horizontal:h-1.5 data-horizontal:w-full data-vertical:h-full data-vertical:w-1.5">
                            <span data-orientation="horizontal" data-slot="slider-range" class="absolute bg-primary select-none data-horizontal:h-full data-vertical:w-full" style="left:0%;right:100%" />
                          </span>
                          <span style="transform: var(--radix-slider-thumb-transform); position: absolute; left: calc(0% + 8px);">
                            <span role="slider" aria-label="Seek audio" aria-valuemin="0" aria-valuemax="8.01" data-orientation="horizontal" data-slot="slider-thumb" class="block size-4 shrink-0 rounded-full border border-primary bg-default shadow-sm ring-(--ui-border-accented)/50 transition-[color,box-shadow] select-none hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50" style="" aria-valuenow="0" />
                          </span>
                        </span>
                        <span class="text-muted w-8 font-mono text-[11px]">0:08</span>
                      </div>
                    </div>
                    <div class="flex items-center p-6 pt-0 flex-wrap justify-between gap-3">
                      <div class="flex items-center gap-2">
                        <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-8 rounded-md px-3 text-xs" aria-label="Start demo session" type="button" @click="openAction(&quot;Start demo session&quot;)">
                          <UIcon name="i-lucide-mic" class="size-4" />
                          Start demo session
                        </UButton>
                        <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default size-8" aria-label="Play audio" type="button" @click="openAction(&quot;Play audio&quot;)">
                          <UIcon name="i-lucide-play" class="size-4" />
                        </UButton>
                        <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default size-8" aria-label="Stop audio" type="button" @click="openAction(&quot;Stop audio&quot;)">
                          <UIcon name="i-lucide-square" class="size-4" />
                        </UButton>
                      </div>
                      <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default h-8 rounded-md px-3 text-xs" to="/reference/cd0fe8784f8ee64c.wav" external>
                        <UIcon name="i-lucide-arrow-down-to-line" class="size-4" />
                        WAV
                      </NuxtLink>
                    </div>
                  </UCard>
                  <div data-orientation="horizontal">
                    <div class="flex flex-wrap items-center justify-between gap-2">
                      <UTabs v-model="tabs2Active" :items="tabs2Items" :content="false" color="primary" variant="link" class="bg-muted text-muted inline-flex h-9 items-center justify-center rounded-lg p-1" aria-label="Audio inspector" data-orientation="horizontal" style="outline:none" />
                      <span class="text-muted text-[11px]">Prerecorded demo · microphone not used</span>
                    </div>
                    <div data-orientation="horizontal" id="radix-_R_3lldbsnpfknmlb_-content-transcript" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-3" style="animation-duration:0s">
                      <div class="min-h-32 divide-y rounded-lg border border-default">
                        <div class="text-muted flex min-h-32 items-center justify-center px-4 text-center text-sm">Start a sample to inspect its transcript.</div>
                      </div>
                    </div>
                    <div data-orientation="horizontal" id="radix-_R_3lldbsnpfknmlb_-content-events" class="ring-offset-background focus-visible:ring-accented focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden mt-3" />
                  </div>
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
