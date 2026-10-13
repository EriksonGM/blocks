<!-- Page: /403 | Portable forbidden screen; catalogue controls are excluded from copying. -->
<script setup lang="ts">
definePageMeta({ layout: false })
useHead({ title: 'Forbidden · Blocks Admin' })

// @copy:forbidden-actions:start
function goBack() {
  if (window.history.length > 1) window.history.back()
  else window.location.assign('/')
}
// @copy:forbidden-actions:end
</script>

<template>
  <div class="page-content w-full bg-default text-default" data-page="/403">
    <main data-copy-block="forbidden-screen" tabindex="0" class="flex min-h-dvh w-full flex-col items-center justify-center gap-2 bg-default px-6 py-12 text-center text-default" aria-labelledby="forbidden-heading">
      <h1 id="forbidden-heading" class="text-[7rem] font-bold leading-tight text-highlighted">403</h1>
      <p class="font-medium text-highlighted">Access Forbidden</p>
      <p class="max-w-sm text-pretty text-muted">You don't have the necessary permissions to view this resource.</p>
      <div class="mt-6 flex flex-wrap justify-center gap-4">
        <UButton label="Go Back" color="neutral" variant="outline" @click="goBack" />
        <UButton label="Back to Home" to="/" />
      </div>
    </main>
    <BlockCopyTools page="/403" />
  </div>
</template>
