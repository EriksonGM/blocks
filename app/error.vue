<script setup lang="ts">
defineProps<{ error: { statusCode?: number, statusMessage?: string } }>()
</script>
<template>
  <UApp>
    <div class="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 class="text-8xl font-bold">{{ error.statusCode || 500 }}</h1>
      <h2 class="text-xl font-semibold">{{ error.statusMessage || 'Something went wrong' }}</h2>
      <p class="text-muted">The page you’re looking for could not be found.</p>
      <UButton color="neutral" @click="clearError({ redirect: '/ecommerce/dashboard-1' })">Back to dashboard</UButton>
    </div>
  </UApp>
</template>
