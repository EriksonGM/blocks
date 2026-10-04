<script setup lang="ts">
import type { BlockNode } from '~/types/blocks'
defineProps<{ node: BlockNode }>()
</script>
<template>
  <UBadge color="neutral" variant="outline" :class="node.attrs?.class" :ui="{ base: 'ring-0 font-normal' }">
    <BlocksRenderer v-for="(child, index) in node.children" :key="index" :node="child" />
  </UBadge>
</template>
