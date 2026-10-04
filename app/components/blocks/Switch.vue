<script setup lang="ts">
import type { BlockNode } from '~/types/blocks'
const props = defineProps<{ node: BlockNode }>()
const { values, key } = useBlockActions()
const id = key(props.node)
const checked = computed({ get: () => Boolean(values.value[id] ?? (props.node.attrs?.['data-state'] === 'checked')), set: value => { values.value[id] = value } })
</script>
<template><USwitch v-model="checked" :aria-label="String(node.attrs?.['aria-label'] || 'Toggle setting')" /></template>
