<script setup lang="ts">
import type { BlockNode } from '~/types/blocks'
const props = defineProps<{ node: BlockNode }>()
const attrs = computed(() => props.node.attrs ?? {})
const tag = computed(() => props.node.tag === 'body' ? 'div' : props.node.tag || 'span')
const slot = computed(() => attrs.value['data-slot'])
const role = computed(() => attrs.value.role)
const children = computed(() => blockChildren(props.node))
const isComposer = computed(() => slot.value === 'input-group' && findBlocks(props.node, child => child.tag === 'textarea').length > 0)
const isCard = computed(() => slot.value === 'card' || (tag.value === 'div' && /\bbg-card\b/.test(String(attrs.value.class)) && /\bborder\b/.test(String(attrs.value.class))))
const isBadge = computed(() => slot.value === 'badge' || (tag.value === 'span' && /rounded-(full|md)/.test(String(attrs.value.class)) && /inline-flex/.test(String(attrs.value.class)) && /text-\[|text-xs/.test(String(attrs.value.class))))
const safeAttrs = computed(() => {
  const result = { ...attrs.value }
  delete result.value; delete result.checked; delete result.type
  if (tag.value === 'a') delete result.href
  if (result.src) result.src = referenceAsset(String(result.src))
  if (tag.value === 'img') { result.loading = 'lazy'; result.referrerpolicy = 'no-referrer' }
  if (tag.value === 'svg' && String(result.class).includes('recharts-surface')) result.preserveAspectRatio = 'none'
  return result
})
const actions = useBlockActions()
</script>

<template>
  <template v-if="node.text !== undefined">{{ node.text }}</template>
  <UIcon v-else-if="tag === 'icon'" :name="String(attrs.name)" :class="blockClass(node) || 'size-4'" />
  <BlocksSvg v-else-if="tag === 'svg'" :node="node" />
  <BlocksCanvas v-else-if="String(attrs.class).split(' ').includes('react-flow')" :node="node" />
  <BlocksTable v-else-if="tag === 'table'" :node="node" />
  <BlocksComposer v-else-if="isComposer" :node="node" />
  <BlocksTabs v-else-if="slot === 'tabs' || (role === 'tablist' && node.panels)" :node="node" />
  <BlocksSelect v-else-if="role === 'combobox' && tag === 'button' || tag === 'select'" :node="node" />
  <BlocksCheckbox v-else-if="role === 'checkbox' || tag === 'input' && attrs.type === 'checkbox'" :node="node" />
  <BlocksSwitch v-else-if="role === 'switch'" :node="node" />
  <BlocksInput v-else-if="tag === 'input' || tag === 'textarea'" :node="node" />
  <BlocksButton v-else-if="tag === 'button'" :node="node" />
  <BlocksCard v-else-if="isCard" :node="node" />
  <BlocksBadge v-else-if="isBadge" :node="node" />
  <BlocksAvatar v-else-if="slot === 'avatar'" :node="node" />
  <BlocksProgress v-else-if="role === 'progressbar' || slot === 'progress'" :node="node" />
  <BlocksChart v-else-if="slot === 'chart' || String(attrs.class).includes('recharts-responsive-container')" :node="node" />
  <USeparator v-else-if="role === 'separator' || tag === 'hr'" :orientation="attrs['data-orientation'] === 'vertical' ? 'vertical' : 'horizontal'" :class="attrs.class" />
  <UKbd v-else-if="tag === 'kbd'" :class="attrs.class">{{ blockText(node) }}</UKbd>
  <NuxtLink v-else-if="tag === 'a'" v-bind="safeAttrs" :to="String(attrs.href || '#')" :external="String(attrs.href).startsWith('/reference/')">
    <BlocksRenderer v-for="(child, index) in children" :key="index" :node="child" />
  </NuxtLink>
  <UForm v-else-if="tag === 'form'" v-bind="safeAttrs" :state="actions.values.value" @submit="actions.submit">
    <BlocksRenderer v-for="(child, index) in children" :key="index" :node="child" />
  </UForm>
  <component :is="tag" v-else v-bind="safeAttrs">
    <BlocksRenderer v-for="(child, index) in children" :key="index" :node="child" />
  </component>
</template>
