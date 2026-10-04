<script setup lang="ts">
import type { BlockNode } from '~/types/blocks'
const props = defineProps<{ node: BlockNode }>()
const { values, key } = useBlockActions()
const label = blockText(props.node).trim()
const id = key(props.node)
const options = computed(() => props.node.options?.length ? props.node.options : props.node.tag === 'select' ? (props.node.children || []).map(blockText) : [label, ...(/status|active|draft|published/i.test(label) ? ['Active', 'Draft', 'Published', 'Archived'] : /category|skin|serum/i.test(label) ? ['Skincare', 'Electronics', 'Clothing', 'Home & Garden'] : /month|year|days/i.test(label) ? ['Today', 'Last 7 days', 'Last 30 days', 'This year'] : ['All', 'Default'])].filter((v, i, a) => v && a.indexOf(v) === i))
const model = computed({ get: () => String(values.value[id] ?? label), set: value => { values.value[id] = value } })
</script>
<template><USelect v-model="model" :items="options" :aria-label="String(node.attrs?.['aria-label'] || label || 'Select option')" :class="['min-w-28', node.attrs?.class]" :ui="{ base: 'ring-0' }" /></template>
