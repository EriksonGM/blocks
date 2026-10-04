<script setup lang="ts">
import type { BlockNode } from '~/types/blocks'
defineProps<{ node: BlockNode }>()
</script>
<template>
  <UCard :class="node.attrs?.class" :style="node.attrs?.style" :ui="{ root: 'ring-0 shadow-none', body: 'contents' }">
    <BlocksRenderer v-for="(child, index) in node.children" :key="index" :node="child" />
  </UCard>
</template>
