<script setup lang="ts">
import type { BlockNode } from '~/types/blocks'
const props = defineProps<{ node: BlockNode }>()
const emit = defineEmits<{ submit: [text: string] }>()
const { values, messages, key, send } = useBlockActions()
const route = useRoute()
const field = computed(() => findBlocks(props.node, node => node.tag === 'textarea')[0]!)
const id = key(field.value)
const model = computed({ get: () => String(values.value[id] ?? field.value.attrs?.value ?? ''), set: value => { values.value[id] = value } })
const addons = computed(() => props.node.children?.filter(child => child.attrs?.['data-slot'] === 'input-group-addon') || [])
function submit() { if (model.value.trim()) { emit('submit', model.value); send(field.value, model.value) } }
provide('block-composer', { submit, enabled: computed(() => Boolean(model.value.trim())) })
</script>
<template>
  <div class="contents">
    <div v-if="messages[route.path]?.length" class="my-4 space-y-4">
      <UChatMessage v-for="(message, index) in messages[route.path]" :id="`demo-${index}`" :key="index" :role="message.role as 'user' | 'assistant'" :parts="[{ type: 'text', text: message.text }]" :side="message.role === 'user' ? 'right' : 'left'" :variant="message.role === 'user' ? 'soft' : 'naked'" />
    </div>
    <UChatPrompt v-model="model" :autofocus="false" :placeholder="field.attrs?.placeholder" color="neutral" :class="node.attrs?.class" :rows="3" :ui="{ base: 'px-4 py-3 text-sm', footer: 'p-0 w-full' }" @submit="submit">
      <template #footer><BlocksRenderer v-for="(addon, index) in addons" :key="index" :node="addon" /></template>
    </UChatPrompt>
  </div>
</template>
