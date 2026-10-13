<!-- Page: /401 | Portable unauthorized screen; catalogue controls are excluded from copying. -->
<script setup lang="ts">
definePageMeta({ layout: false })
useHead({ title: 'Unauthorized · Blocks Admin' })

// @copy:unauthorized-actions:start
function goBack() {
  if (window.history.length > 1) window.history.back()
  else window.location.assign('/')
}
// @copy:unauthorized-actions:end
</script>

<template>
  <div class="page-content w-full bg-default text-default" data-page="/401">
    <main data-copy-block="unauthorized-screen" tabindex="0" class="flex min-h-dvh w-full flex-col items-center justify-center gap-2 bg-default px-6 py-12 text-center text-default" aria-labelledby="unauthorized-heading">
      <h1 id="unauthorized-heading" class="text-[7rem] font-bold leading-tight text-highlighted">401</h1>
      <p class="font-medium text-highlighted">Unauthorized Access</p>
      <p class="max-w-sm text-pretty text-muted">Please log in with the appropriate credentials to access this resource.</p>
      <div class="mt-6 flex flex-wrap justify-center gap-4">
        <UButton label="Go Back" color="neutral" variant="outline" @click="goBack" />
        <UButton label="Back to Home" to="/" />
      </div>
    </main>
    <BlockCopyTools page="/401" />
  </div>
</template>
