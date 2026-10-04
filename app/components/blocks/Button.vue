<script setup lang="ts">
import type { BlockNode } from '~/types/blocks'
const props = defineProps<{ node: BlockNode }>()
const { act } = useBlockActions()
const composer = inject<{ submit: () => void, enabled: ComputedRef<boolean> } | undefined>('block-composer', undefined)
const canvas = inject<{ zoomIn: () => void, zoomOut: () => void, fit: () => void } | undefined>('block-canvas', undefined)
function click() {
  const label = String(props.node.attrs?.['aria-label'] || blockText(props.node)).toLowerCase()
  if (canvas && label === 'zoom in') return canvas.zoomIn()
  if (canvas && label === 'zoom out') return canvas.zoomOut()
  if (canvas && label === 'fit view') return canvas.fit()
  if (isSend.value) return composer?.submit()
  if (props.node.attrs?.type !== 'submit') return act(props.node)
}
const isSend = computed(() => composer && (/send|submit/i.test(String(props.node.attrs?.['aria-label'] || blockText(props.node))) || findBlocks(props.node, node => node.tag === 'icon' && /arrow-up$|send$/.test(String(node.attrs?.name))).length > 0))
const classes = computed(() => blockClass(props.node))
const variant = computed(() => /bg-primary(?!\/)|bg-foreground|bg-neutral-900|bg-black/.test(classes.value) ? 'solid' : /border-input|\bborder\b/.test(classes.value) ? 'outline' : /bg-secondary|bg-muted|bg-accent/.test(classes.value) ? 'soft' : 'ghost')
const menu = computed(() => props.node.options?.map(label => ({ label, onSelect: () => act({ ...props.node, children: [{ text: label }] }) })))
</script>
<template>
  <UDropdownMenu v-if="menu?.length" :items="menu">
    <UButton color="neutral" :variant="variant" :class="classes" :aria-label="String(node.attrs?.['aria-label'] || blockText(node) || 'Actions')">
      <BlocksRenderer v-for="(child, index) in node.children" :key="index" :node="child" />
    </UButton>
  </UDropdownMenu>
  <UButton v-else color="neutral" :variant="variant" :class="classes" :form="node.attrs?.form" :disabled="isSend ? !composer?.enabled.value : node.attrs?.disabled !== undefined" :type="!isSend && node.attrs?.type === 'submit' ? 'submit' : 'button'" :aria-label="String(node.attrs?.['aria-label'] || blockText(node) || 'Actions')" @click="click">
    <BlocksRenderer v-for="(child, index) in node.children" :key="index" :node="child" />
  </UButton>
</template>
