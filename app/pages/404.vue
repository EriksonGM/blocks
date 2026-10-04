<!-- Page: /404 | All content, state and styles live in this file. -->
<script setup lang="ts">
definePageMeta({"layout":false})

const route = useRoute()

useHead({ title: "Not Found · Blocks Admin" })
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/404">
    <div class="group/body antialiased geist_a71539c9-module__T19VSG__variable geist_mono_8d43a2aa-module__8Li5zG__variable inter_a831cef5-module__RUECIW__variable roboto_22a5a0fa-module__H2rNbq__variable source_sans_3_d96590da-module__zsZsyq__variable lora_1ae38320-module__0WfQHW__variable merriweather_6ba4b84f-module__bLXpKq__variable playfair_display_fa003182-module__E_H7JW__variable roboto_mono_a48da9b6-module__RNpGXW__variable space_mono_55c10f5f-module__70Rwca__variable">
      <div />
      <div class="h-svh">
        <div class="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
          <h1 class="text-[7rem] leading-tight font-bold text-highlighted">404</h1>
          <span class="font-medium">Oops! Page Not Found!</span>
          <p class="text-muted text-center">
            It seems like the page you're looking for 
            <br />
            does not exist or might have been removed.
          </p>
          <div class="mt-6 flex gap-4">
            <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2" aria-label="Go Back" type="button" @click="navigateTo(&quot;/ecommerce/dashboard-1&quot;)">
              Go Back
            </UButton>
            <NuxtLink class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2" to="/">
              Back to Home
            </NuxtLink>
          </div>
        </div>
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
