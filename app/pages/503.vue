<!-- Page: /503 | Portable maintenance screen; catalogue controls are excluded from copying. -->
<script setup lang="ts">
definePageMeta({ layout: false })
useHead({ title: 'Maintenance · Blocks Admin' })

// @copy:maintenance-state:start
import { ref } from 'vue'

const detailsOpen = ref(false)
// @copy:maintenance-state:end
</script>

<template>
  <div class="page-content w-full bg-default text-default" data-page="/503">
    <main data-copy-block="maintenance-screen" tabindex="0" class="flex min-h-dvh w-full flex-col items-center justify-center gap-2 bg-default px-6 py-12 text-center text-default" aria-labelledby="maintenance-heading">
      <h1 id="maintenance-heading" class="text-[7rem] font-bold leading-tight text-highlighted">503</h1>
      <p class="font-medium text-highlighted">Website is under maintenance!</p>
      <p class="max-w-sm text-pretty text-muted">The site is not available at the moment. We'll be back online shortly.</p>
      <UButton class="mt-6" label="Learn more" color="neutral" variant="outline" @click="detailsOpen = true" />
      <UModal v-model:open="detailsOpen" title="Scheduled maintenance" description="Maintenance information for this demo screen.">
        <template #body>
          <p class="text-sm text-muted">Routine maintenance temporarily interrupts access while updates are applied. Please try again later. This screen uses demonstration content, not a live service-status feed.</p>
        </template>
        <template #footer>
          <UButton label="Close" aria-label="Close maintenance information" color="neutral" variant="outline" @click="detailsOpen = false" />
        </template>
      </UModal>
    </main>
    <BlockCopyTools page="/503" />
  </div>
</template>
