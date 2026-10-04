<script setup lang="ts">
import type { BlockNode } from '~/types/blocks'
const props = defineProps<{ path: string, blockKey?: string, transform?: (node: BlockNode) => BlockNode }>()
const { data } = await useAsyncData(() => `preset:${props.path}`, () => usePageBlocks(props.path), { watch: [() => props.path] })
const node = computed(() => {
  if (!data.value) return undefined
  const original = props.blockKey ? findBlocks(data.value.tree, block => block.key === props.blockKey)[0] : data.value.tree
  if (!original) return undefined
  return props.transform ? props.transform(structuredClone(original)) : original
})
</script>
<template><BlocksRenderer v-if="node" :key="`${path}:${blockKey}`" :node="node" /></template>
