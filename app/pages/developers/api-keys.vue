<!-- Page: /developers/api-keys | Portable API-key UI with in-memory, non-functional demo values. -->
<script setup lang="ts">
useHead({ title: 'API Keys · Blocks Admin' })

// @copy:developer-api-keys:start
import { computed, reactive, ref } from 'vue'
import type { FormError } from '@nuxt/ui'

type DemoKey = { id: string, name: string, kind: 'secret' | 'publishable', environment: 'Production' | 'Development', value: string }
const environment = ref('Production')
const environments = ['Production', 'Development']
const activeTab = ref('keys')
const tabs = [
  { label: 'API Keys', value: 'keys', slot: 'keys' as const },
  { label: 'Account', value: 'account', slot: 'account' as const },
]
const keys = ref<DemoKey[]>([
  { id: 'demo-key-1', name: 'Server integration', kind: 'secret', environment: 'Production', value: 'demo_sk_live_0001_not_a_real_key' },
  { id: 'demo-key-2', name: 'Development server', kind: 'secret', environment: 'Development', value: 'demo_sk_test_0002_not_a_real_key' },
  { id: 'demo-key-3', name: 'Web storefront', kind: 'publishable', environment: 'Production', value: 'demo_pk_live_0003_not_a_real_key' },
  { id: 'demo-key-4', name: 'Development storefront', kind: 'publishable', environment: 'Development', value: 'demo_pk_test_0004_not_a_real_key' },
])
const keyGroups = [
  { kind: 'secret' as const, title: 'Secret API Keys', description: 'Keep real secret keys on your server. The values below are demonstration strings only.' },
  { kind: 'publishable' as const, title: 'Publishable API Keys', description: 'Publishable keys identify a client integration. These examples do not authenticate any request.' },
]
const filteredKeys = computed(() => keys.value.filter(key => key.environment === environment.value))
const revealedKeys = ref<string[]>([])
const serial = ref(4)
const feedback = ref('Demo only: keys and changes stay in memory and reset when this component is reloaded.')
const createOpen = ref(false)
const createForm = reactive({ name: '', kind: 'secret' as DemoKey['kind'], environment: 'Production' as DemoKey['environment'] })
function validateKey(state: Partial<typeof createForm>): FormError[] {
  return state.name?.trim() ? [] : [{ name: 'name', message: 'Enter a name for the demo key.' }]
}
function openCreate(kind: DemoKey['kind']) {
  Object.assign(createForm, { name: '', kind, environment: environment.value })
  createOpen.value = true
}
function demoValue(kind: DemoKey['kind'], targetEnvironment: DemoKey['environment']) {
  serial.value += 1
  return `demo_${kind === 'secret' ? 'sk' : 'pk'}_${targetEnvironment === 'Production' ? 'live' : 'test'}_${String(serial.value).padStart(4, '0')}_not_a_real_key`
}
function createKey() {
  if (validateKey(createForm).length) return
  const value = demoValue(createForm.kind, createForm.environment)
  keys.value.push({ id: `demo-key-${serial.value}`, name: createForm.name.trim(), kind: createForm.kind, environment: createForm.environment, value })
  environment.value = createForm.environment
  feedback.value = `Demo key “${createForm.name.trim()}” created locally. It cannot authenticate API requests.`
  createOpen.value = false
}
function toggleReveal(id: string) {
  revealedKeys.value = revealedKeys.value.includes(id) ? revealedKeys.value.filter(value => value !== id) : [...revealedKeys.value, id]
}
const rotateOpen = ref(false)
const rotateId = ref('')
const rotateTarget = computed(() => keys.value.find(key => key.id === rotateId.value))
function requestRotation(id: string) {
  rotateId.value = id
  rotateOpen.value = true
}
function rotateKey() {
  const key = rotateTarget.value
  if (!key) return
  key.value = demoValue(key.kind, key.environment)
  revealedKeys.value = revealedKeys.value.filter(id => id !== key.id)
  feedback.value = `Demo key “${key.name}” rotated locally. No real credential was changed.`
  rotateOpen.value = false
}
const manualCopyOpen = ref(false)
const manualCopyValue = ref('')
async function copyKey(key: DemoKey) {
  try {
    await navigator.clipboard.writeText(key.value)
    feedback.value = `Demo key “${key.name}” copied to clipboard.`
  } catch {
    manualCopyValue.value = key.value
    manualCopyOpen.value = true
    feedback.value = 'Automatic copying is unavailable. Select the demo value and copy it manually.'
  }
}
const documentationOpen = ref(false)
// @copy:developer-api-keys:end
</script>

<template>
  <div class="page-content flex h-full min-h-0 w-full flex-col text-default" data-page="/developers/api-keys">
    <div class="min-h-0 flex-1 overflow-y-auto">
      <main class="mx-auto w-full max-w-5xl space-y-6 p-4 sm:p-6">
        <header class="space-y-1">
          <h1 class="text-2xl font-bold text-highlighted">API Keys</h1>
          <p class="text-sm text-muted">Manage example credentials in a local developer workspace.</p>
        </header>
        <UCard data-copy-block="developer-api-version" tabindex="0" aria-label="API version summary">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div><h2 class="font-semibold text-highlighted">API Version</h2><p class="mt-1 text-sm text-muted">Global version used by this UI example.</p></div>
            <div class="flex flex-wrap items-center gap-3"><span class="text-sm font-medium">03-Oct-2026</span><UBadge label="Demo version" color="neutral" variant="subtle" /></div>
          </div>
        </UCard>
        <section data-copy-block="developer-api-key-manager" tabindex="0" aria-label="Demo API key manager" class="min-w-0 space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <h2 class="font-semibold text-highlighted">Developer workspace</h2>
            <USelect v-model="environment" :items="environments" aria-label="API key environment" class="w-44" />
          </div>
          <UTabs v-model="activeTab" :items="tabs" variant="link" :ui="{ list: 'justify-start' }" class="w-full gap-5">
            <template #keys>
              <div class="space-y-6">
                <UCard v-for="group in keyGroups" :key="group.kind">
                  <template #header>
                    <div class="flex flex-wrap items-center justify-between gap-3">
                      <h3 class="text-lg font-semibold text-highlighted">{{ group.title }}</h3>
                      <UButton :label="group.kind === 'secret' ? 'Create secret key' : 'Create publishable key'" :aria-label="`Create ${group.kind} demo key`" icon="i-lucide-plus" size="sm" @click="openCreate(group.kind)" />
                    </div>
                    <p class="mt-2 text-sm text-muted">{{ group.description }}</p>
                  </template>
                  <div class="space-y-5">
                    <div v-for="key in filteredKeys.filter(key => key.kind === group.kind)" :key="key.id" :data-demo-key-id="key.id" class="space-y-3 rounded-lg border border-default p-4">
                      <div class="flex flex-wrap items-center justify-between gap-2"><p class="break-words font-medium">{{ key.name }}</p><UBadge :label="key.environment" color="neutral" variant="outline" /></div>
                      <div class="flex flex-wrap items-center gap-2">
                        <UInput :model-value="key.value" :type="key.kind === 'secret' && !revealedKeys.includes(key.id) ? 'password' : 'text'" :aria-label="`Demo key value for ${key.name}`" readonly class="min-w-0 flex-1 basis-48" :ui="{ base: 'font-mono text-xs' }" />
                        <UButton v-if="key.kind === 'secret'" :icon="revealedKeys.includes(key.id) ? 'i-lucide-eye-off' : 'i-lucide-eye'" :aria-label="`${revealedKeys.includes(key.id) ? 'Hide' : 'Reveal'} ${key.name} demo key`" :aria-pressed="revealedKeys.includes(key.id)" color="neutral" variant="outline" @click="toggleReveal(key.id)" />
                        <UButton icon="i-lucide-copy" :aria-label="`Copy ${key.name} demo key`" color="neutral" variant="outline" @click="copyKey(key)" />
                        <UButton label="Rotate" icon="i-lucide-refresh-cw" :aria-label="`Rotate ${key.name} demo key`" color="neutral" variant="ghost" @click="requestRotation(key.id)" />
                      </div>
                    </div>
                    <p v-if="!filteredKeys.some(key => key.kind === group.kind)" class="text-sm text-muted">No {{ group.kind }} keys in this environment.</p>
                  </div>
                </UCard>
                <div class="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-muted p-4">
                  <p class="max-w-xl text-sm text-muted">All values are explicitly fake. This block does not create, store, or rotate real credentials.</p>
                  <UButton label="Key usage guide" aria-label="Open demo key usage guide" color="neutral" variant="outline" @click="documentationOpen = true" />
                </div>
              </div>
            </template>
            <template #account>
              <UCard>
                <template #header><h3 class="font-semibold text-highlighted">Demo account</h3></template>
                <dl class="grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-3 text-sm">
                  <dt class="text-muted">Workspace</dt><dd>Example developer workspace</dd>
                  <dt class="text-muted">Environment</dt><dd>{{ environment }}</dd>
                  <dt class="text-muted">Demo keys</dt><dd>{{ filteredKeys.length }} in this environment · {{ keys.length }} total</dd>
                  <dt class="text-muted">Storage</dt><dd>In memory only. Reloading resets all changes.</dd>
                </dl>
                <p class="mt-5 text-sm text-muted">No account, authentication provider, or external API is connected.</p>
              </UCard>
            </template>
          </UTabs>
          <p role="status" class="text-sm text-muted">{{ feedback }}</p>
          <UModal v-model:open="createOpen" :title="`Create ${createForm.kind} demo key`" description="Generate a non-functional example value, stored in memory only.">
            <template #body>
              <UForm :state="createForm" :validate="validateKey" class="space-y-4" @submit="createKey">
                <UFormField label="Name" name="name" required><UInput v-model="createForm.name" name="demoKeyName" class="w-full" /></UFormField>
                <UFormField label="Environment" name="environment"><USelect v-model="createForm.environment" :items="environments" aria-label="New demo key environment" class="w-full" /></UFormField>
                <div class="flex flex-wrap justify-end gap-2"><UButton label="Cancel" aria-label="Cancel demo key creation" color="neutral" variant="outline" @click="createOpen = false" /><UButton label="Create demo key" aria-label="Confirm demo key creation" type="submit" /></div>
              </UForm>
            </template>
          </UModal>
          <UModal v-model:open="rotateOpen" title="Rotate demo key" description="Replace the example value locally. This does not rotate a real credential.">
            <template #body><p class="text-sm text-muted">Replace the current demo value for <strong>{{ rotateTarget?.name }}</strong>?</p></template>
            <template #footer><div class="flex w-full justify-end gap-2"><UButton label="Cancel" aria-label="Cancel demo key rotation" color="neutral" variant="outline" @click="rotateOpen = false" /><UButton label="Rotate demo key" aria-label="Confirm demo key rotation" @click="rotateKey" /></div></template>
          </UModal>
          <UModal v-model:open="manualCopyOpen" title="Copy demo key manually" description="Automatic clipboard access is unavailable. Select the value below to copy it.">
            <template #body><UTextarea :model-value="manualCopyValue" aria-label="Demo key for manual copying" readonly class="w-full" /></template>
            <template #footer><UButton label="Close" aria-label="Close manual demo key copying" color="neutral" variant="outline" @click="manualCopyOpen = false" /></template>
          </UModal>
          <UModal v-model:open="documentationOpen" title="Demo key usage guide" description="Example guidance for an API-key management interface.">
            <template #body><div class="space-y-3 text-sm text-muted"><p>Keep real secret keys on a trusted server. Never expose them in client code or commit them to source control.</p><p>Only keys documented as publishable by your API provider belong in a browser. These demo strings do not work with any endpoint.</p><p>Creating or rotating an example here changes only this component's in-memory state.</p></div></template>
            <template #footer><UButton label="Close" aria-label="Close demo key usage guide" color="neutral" variant="outline" @click="documentationOpen = false" /></template>
          </UModal>
        </section>
      </main>
    </div>
    <BlockCopyTools page="/developers/api-keys" />
  </div>
</template>
