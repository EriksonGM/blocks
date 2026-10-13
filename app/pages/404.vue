<!-- Page: /404 | Portable not-found screen; catalogue controls are excluded from copying. -->
<script setup lang="ts">
definePageMeta({ layout: false })
useHead({ title: 'Not Found · Blocks Admin' })

// @copy:not-found-actions:start
function goBack() {
  if (window.history.length > 1) window.history.back()
  else window.location.assign('/')
}
// @copy:not-found-actions:end
</script>

<template>
  <div class="page-content w-full bg-default text-default" data-page="/404">
    <main data-copy-block="not-found-screen" tabindex="0" class="flex min-h-dvh w-full flex-col items-center justify-center gap-2 bg-default px-6 py-12 text-center text-default" aria-labelledby="not-found-heading">
      <h1 id="not-found-heading" class="text-[7rem] font-bold leading-tight text-highlighted">404</h1>
      <p class="font-medium text-highlighted">Oops! Page Not Found!</p>
      <p class="max-w-sm text-pretty text-muted">The page you're looking for does not exist or might have been removed.</p>
      <div class="mt-6 flex flex-wrap justify-center gap-4">
        <UButton label="Go Back" color="neutral" variant="outline" @click="goBack" />
        <UButton label="Back to Home" to="/" />
      </div>
    </main>
    <BlockCopyTools page="/404" />
  </div>
</template>
