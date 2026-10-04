<!-- Page: /forgot-password | All content, state and styles live in this file. -->
<script setup lang="ts">
definePageMeta({"layout":false})

const route = useRoute()

useHead({ title: "Forgot Password · Blocks Admin" })

const toast = useToast()

// Page-local form values. Edit these defaults when copying the page.

const form = reactive({
  "email": ""
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
  toast.add({ title: "Reset link requested", color: 'success', icon: 'i-lucide-check' })
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
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/forgot-password">
    <div class="group/body antialiased geist_a71539c9-module__T19VSG__variable geist_mono_8d43a2aa-module__8Li5zG__variable inter_a831cef5-module__RUECIW__variable roboto_22a5a0fa-module__H2rNbq__variable source_sans_3_d96590da-module__zsZsyq__variable lora_1ae38320-module__0WfQHW__variable merriweather_6ba4b84f-module__bLXpKq__variable playfair_display_fa003182-module__E_H7JW__variable roboto_mono_a48da9b6-module__RNpGXW__variable space_mono_55c10f5f-module__70Rwca__variable">
      <div />
      <div class="bg-(--ui-text-inverted) container grid h-svh flex-col items-center justify-center lg:max-w-none lg:px-0">
        <div class="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
          <div class="mb-4 flex items-center justify-center">
            <img alt="Shadcnblocks" width="24" height="24" class="mr-2 dark:hidden" style="color:transparent" src="/reference/4eb49a7be0892386.svg" loading="lazy" />
            <h1 class="text-xl font-medium text-highlighted">Shadcnblocks Admin Kit</h1>
          </div>
          <!-- Card 1: Forgot Password -->
          <UCard class="rounded-lg p-6" :ui="{ body: 'contents' }">
            <div class="mb-2 flex flex-col space-y-2 text-left">
              <h1 class="text-md font-semibold tracking-tight text-highlighted">Forgot Password</h1>
              <p class="text-muted text-sm">
                Enter your registered email and 
                <br />
                 we will send you a link to reset your password.
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
                  <UButton color="primary" variant="solid" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-accented disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-inverted shadow-sm hover:bg-primary/90 h-9 px-4 py-2 mt-2" aria-label="Continue" type="button" @click="openAction(&quot;Continue&quot;)">
                    Continue
                  </UButton>
                </div>
              </UForm>
            </div>
            <p class="text-muted mt-4 px-8 text-center text-sm">
              Don't have an account?
              <NuxtLink class="hover:text-primary underline underline-offset-4" to="/register">
                Register
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
