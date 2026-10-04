<script setup lang="ts">
import type { BlockNode } from '~/types/blocks'
const props = defineProps<{ node: BlockNode }>()
const active = ref('0')
const tabs = computed(() => findBlocks(props.node, n => n.attrs?.role === 'tab'))
const panels = computed(() => findBlocks(props.node, n => n.attrs?.role === 'tabpanel'))
const items = computed(() => (props.node.panels || tabs.value.map((tab, i) => ({ label: blockText(tab), tree: panels.value[i] || panels.value[0] }))).map((item, index) => ({ label: item.label, value: String(index), tree: item.tree })))
</script>
<template>
  <UTabs v-model="active" :items="items" color="neutral" variant="link" :class="node.attrs?.class" :ui="{ root: 'gap-4', list: 'justify-start', content: 'min-h-0' }">
    <template #content="{ item }"><BlocksRenderer v-if="item.tree" :node="item.tree" /></template>
  </UTabs>
</template>
