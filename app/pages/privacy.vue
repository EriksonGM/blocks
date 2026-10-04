<!-- Page: /privacy | All content, state and styles live in this file. -->
<script setup lang="ts">
definePageMeta({"layout":false})

const route = useRoute()

useHead({ title: "Privacy Policy · Blocks Admin" })
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/privacy">
    <div class="group/body antialiased geist_a71539c9-module__T19VSG__variable geist_mono_8d43a2aa-module__8Li5zG__variable inter_a831cef5-module__RUECIW__variable roboto_22a5a0fa-module__H2rNbq__variable source_sans_3_d96590da-module__zsZsyq__variable lora_1ae38320-module__0WfQHW__variable merriweather_6ba4b84f-module__bLXpKq__variable playfair_display_fa003182-module__E_H7JW__variable roboto_mono_a48da9b6-module__RNpGXW__variable space_mono_55c10f5f-module__70Rwca__variable">
      <div />
      <div class="mx-auto max-w-prose space-y-4 p-8">
        <h1 class="text-2xl font-semibold text-highlighted">Privacy Policy</h1>
        <p class="text-muted text-sm">This is placeholder copy for the admin template. Replace with your real privacy policy before production.</p>
        <p>
          <NuxtLink class="text-primary underline underline-offset-4" to="/login">
            Back to login
          </NuxtLink>
        </p>
      </div>
      <section aria-label="Notifications alt+T" />
      <next-route-announcer style="position: absolute;" />
    </div>
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
