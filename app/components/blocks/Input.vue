<script setup lang="ts">
import type { BlockNode } from '~/types/blocks'
const props = defineProps<{ node: BlockNode }>()
const { values, key, send } = useBlockActions()
const id = key(props.node)
const model = computed({ get: () => String(values.value[id] ?? props.node.attrs?.value ?? ''), set: value => { values.value[id] = value } })
const type = computed(() => String(props.node.attrs?.type || 'text'))
const baseClass = computed(() => blockClass(props.node).replace(/\b(px-\d+|py-\d+|border|border-input|shadow-xs|bg-transparent)\b/g, ''))
const route = useRoute()
const filters = useState<Record<string, string>>('block-table-filter', () => ({}))
watch(model, value => { if (/search|filter/i.test(String(props.node.attrs?.placeholder))) filters.value[route.path] = value })
</script>
<template>
  <UTextarea v-if="node.tag === 'textarea'" v-model="model" :id="node.attrs?.id" :name="node.attrs?.name" :placeholder="String(node.attrs?.placeholder || '')" :rows="4" :class="baseClass" :ui="{ base: 'h-full resize-none' }" @keydown.meta.enter.prevent="send(node, model)" @keydown.ctrl.enter.prevent="send(node, model)" />
  <UInput v-else-if="type !== 'file' && type !== 'hidden'" v-model="model" :id="node.attrs?.id" :name="node.attrs?.name" :type="type" :required="node.attrs?.required !== undefined" :disabled="node.attrs?.disabled !== undefined" :placeholder="String(node.attrs?.placeholder || '')" :class="baseClass" :ui="{ base: 'h-full' }" />
  <input v-else :id="node.attrs?.id" :type="type" :class="node.attrs?.class" @change="values[id] = ($event.target as HTMLInputElement).files?.[0]?.name || ''">
</template>
