<!-- Page: /login | All content, state and styles live in this file. -->
<script setup lang="ts">
definePageMeta({"layout":false})

const route = useRoute()

useHead({ title: "Login · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "email": "",
  "password": ""
})

// Restore drafts after hydration; the first client render matches SSR.
onMounted(() => {
  const key = 'nuxt-ui-page:' + route.path
  try {
    const draft = localStorage.getItem(key)
    if (draft) Object.assign(form, JSON.parse(draft))
  } catch { /* Use the defaults when no draft exists. */ }
  watch(form, value => localStorage.setItem(key, JSON.stringify(value)), { deep: true, flush: 'sync' })
})

function saveForm() {
  return navigateTo('/ecommerce/dashboard-1')
}

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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/login">
    <div class="group/body antialiased geist_a71539c9-module__T19VSG__variable geist_mono_8d43a2aa-module__8Li5zG__variable inter_a831cef5-module__RUECIW__variable roboto_22a5a0fa-module__H2rNbq__variable source_sans_3_d96590da-module__zsZsyq__variable lora_1ae38320-module__0WfQHW__variable merriweather_6ba4b84f-module__bLXpKq__variable playfair_display_fa003182-module__E_H7JW__variable roboto_mono_a48da9b6-module__RNpGXW__variable space_mono_55c10f5f-module__70Rwca__variable">
      <div />
      <div class="bg-(--ui-text-inverted) container grid h-svh flex-col items-center justify-center lg:max-w-none lg:px-0">
        <div class="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
          <div class="mb-4 flex items-center justify-center">
            <img alt="Shadcnblocks" width="24" height="24" class="mr-2 dark:hidden" style="color:transparent" src="/reference/4eb49a7be0892386.svg" loading="lazy" />
            <h1 class="text-xl font-medium text-highlighted">Shadcnblocks Admin Kit</h1>
          </div>
          <!-- Card 1: Login -->
          <UCard class="rounded-lg p-6" :ui="{ body: 'contents' }">
            <div class="flex flex-col space-y-2 text-left">
              <h1 class="text-2xl font-semibold tracking-tight text-highlighted">Login</h1>
              <p class="text-muted text-sm">
                Enter your email and password below 
                <br />
                to log into your account
              </p>
            </div>
            <div class="grid gap-6">
              <!-- Form: controls and draft state are declared in this page -->
              <UForm :state="form" @submit="saveForm">
                <div class="grid gap-2">
                  <div class="space-y-1">
                    <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="_R_1inpfknmlb_-form-item">Email</label>
                    <UInput v-model="form.email" type="text" placeholder="name@example.com" name="email" id="_R_1inpfknmlb_-form-item" class="flex h-9 w-full rounded-md text-base md:text-sm" :ui="{ base: 'h-full' }" />
                  </div>
                  <div class="space-y-1">
                    <div class="flex items-center justify-between">
                      <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="_R_2inpfknmlb_-form-item">Password</label>
                      <NuxtLink class="text-muted text-sm font-medium hover:opacity-75" to="/forgot-password">
                        Forgot password?
                      </NuxtLink>
                    </div>
                    <div class="relative rounded-md">
                      <UInput v-model="form.password" type="password" placeholder="********" name="password" id="_R_2inpfknmlb_-form-item" class="flex h-9 w-full rounded-md text-sm" :ui="{ base: 'h-full' }" />
                      <UButton color="neutral" variant="soft" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-elevated hover:text-default text-muted absolute top-1/2 right-1 h-6 w-6 -translate-y-1/2 rounded-md" aria-label="Actions" type="button" @click="openAction(&quot;Actions&quot;)">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-eye-off">
                          <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                          <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
                          <path d="M3 3l18 18" />
                        </svg>
                      </UButton>
                    </div>
                  </div>
                  <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2 mt-2" aria-label="Login" type="button" @click="navigateTo('/ecommerce/dashboard-1')">
                    Login
                  </UButton>
                  <div class="relative my-2">
                    <div class="absolute inset-0 flex items-center">
                      <span class="w-full border-t border-default" />
                    </div>
                    <div class="relative flex justify-center text-xs uppercase">
                      <span class="bg-default text-muted px-2">Or continue with</span>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 w-full" aria-label="GitHub" type="button" @click="openAction(&quot;GitHub&quot;)">
                      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github h-4 w-4">
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                      </svg>
                       GitHub
                    </UButton>
                    <UButton color="neutral" variant="outline" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-default bg-default shadow-xs hover:bg-elevated hover:text-default h-9 px-4 py-2 w-full" aria-label="Facebook" type="button" @click="openAction(&quot;Facebook&quot;)">
                      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-facebook h-4 w-4">
                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                      </svg>
                      Facebook
                    </UButton>
                  </div>
                </div>
              </UForm>
            </div>
            <p class="text-muted mt-4 px-8 text-center text-sm">
              By clicking login, you agree to our
              <NuxtLink class="hover:text-primary underline underline-offset-4" to="/terms">
                Terms of Service
              </NuxtLink>
              and
              <NuxtLink class="hover:text-primary underline underline-offset-4" to="/privacy">
                Privacy Policy
              </NuxtLink>
              .
            </p>
          </UCard>
        </div>
      </div>
      <section aria-label="Notifications alt+T" />
      <next-route-announcer style="position: absolute;" />
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
