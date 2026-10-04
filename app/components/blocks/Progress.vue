<script setup lang="ts">
import type { BlockNode } from '~/types/blocks'
const props = defineProps<{ node: BlockNode }>()
const value = computed(() => {
  const style = String(props.node.children?.[0]?.attrs?.style || '')
  const translate = Number(style.match(/translateX\(-([\d.]+)%\)/)?.[1] || 0)
  return Number(props.node.attrs?.['aria-valuenow'] || (100 - translate))
})
</script>
<template><UProgress :model-value="value" :class="node.attrs?.class" size="sm" /></template>
