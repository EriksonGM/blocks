<script setup lang="ts">
import type { BlockNode } from '~/types/blocks'
const props = defineProps<{ node: BlockNode }>()
const style = computed(() => String(props.node.attrs?.style || '').replace(/lab\(7\.782[^)]+\)/g, 'var(--chart-1)').replace(/lab\(100%[^)]+\)/g, 'var(--ui-bg)'))
</script>
<template>
  <div :class="['block-chart', node.attrs?.class]" :style="style" role="img" aria-label="Analytics chart">
    <BlocksRenderer v-for="(child, index) in node.children" :key="index" :node="child" />
  </div>
</template>
