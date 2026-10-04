<script setup lang="ts">
import type { BlockNode } from '~/types/blocks'
const props = defineProps<{ node: BlockNode }>()
const image = computed(() => findBlocks(props.node, n => n.tag === 'img')[0])
</script>
<template>
  <UAvatar :src="image?.attrs?.src ? referenceAsset(String(image.attrs.src)) : undefined" :alt="String(image?.attrs?.alt || blockText(node))" :class="node.attrs?.class" />
</template>
