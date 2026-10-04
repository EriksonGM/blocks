<script setup lang="ts">
import type { BlockNode } from '~/types/blocks'
const props = defineProps<{ node: BlockNode }>()
const emit = defineEmits<{ nodeMove: [id: string, position: { x: number, y: number }] }>()
const root = useTemplateRef('root')
const pan = reactive({ x: 0, y: 0, scale: 1 })
let drag: { element?: HTMLElement, id: string, startX: number, startY: number, x: number, y: number } | undefined
function viewport() { return root.value?.querySelector<HTMLElement>('.react-flow__viewport') }
function paint() { const element = viewport(); if (element) element.style.transform = `translate(${pan.x}px, ${pan.y}px) scale(${pan.scale})` }
function zoom(factor: number) { pan.scale = Math.max(0.15, Math.min(2.5, pan.scale * factor)); paint() }
function fit() {
  const nodes = root.value?.querySelectorAll<HTMLElement>('.react-flow__node')
  if (!nodes?.length || !root.value) return
  const bounds = [...nodes].map(node => {
    const match = node.style.transform.match(/translate\(([-\d.]+)px,?\s*([-\d.]+)px\)/)
    return { x: Number(match?.[1] || 0), y: Number(match?.[2] || 0), width: node.offsetWidth, height: node.offsetHeight }
  })
  const x = Math.min(...bounds.map(b => b.x)), y = Math.min(...bounds.map(b => b.y))
  const width = Math.max(...bounds.map(b => b.x + b.width)) - x
  const height = Math.max(...bounds.map(b => b.y + b.height)) - y
  pan.scale = Math.max(0.15, Math.min(1, (root.value.clientWidth - 90) / width, (root.value.clientHeight - 130) / height))
  pan.x = (root.value.clientWidth - width * pan.scale) / 2 - x * pan.scale
  pan.y = (root.value.clientHeight - height * pan.scale) / 2 - y * pan.scale
  paint()
}
function down(event: PointerEvent) {
  const target = event.target as HTMLElement
  if (target.closest('button, input, textarea, a, .nodrag')) return
  const element = target.closest<HTMLElement>('.react-flow__node') || undefined
  const match = element?.style.transform.match(/translate\(([-\d.]+)px,?\s*([-\d.]+)px\)/)
  drag = { element, id: element?.dataset.id || '', startX: event.clientX, startY: event.clientY, x: element ? Number(match?.[1] || 0) : pan.x, y: element ? Number(match?.[2] || 0) : pan.y }
  root.value?.setPointerCapture(event.pointerId)
}
function move(event: PointerEvent) {
  if (!drag) return
  const dx = event.clientX - drag.startX, dy = event.clientY - drag.startY
  if (drag.element) {
    const x = drag.x + dx / pan.scale, y = drag.y + dy / pan.scale
    drag.element.style.transform = `translate(${x}px, ${y}px)`
    emit('nodeMove', drag.id, { x, y })
  } else { pan.x = drag.x + dx; pan.y = drag.y + dy; paint() }
}
provide('block-canvas', { zoomIn: () => zoom(1.15), zoomOut: () => zoom(1 / 1.15), fit })
onMounted(() => { requestAnimationFrame(fit) })
</script>
<template>
  <div ref="root" :class="['block-canvas', node.attrs?.class]" :style="node.attrs?.style" role="application" :aria-label="node.attrs?.['aria-label'] || 'Workflow canvas'" @pointerdown="down" @pointermove="move" @pointerup="drag = undefined" @pointercancel="drag = undefined" @wheel.ctrl.prevent="zoom($event.deltaY < 0 ? 1.1 : 1 / 1.1)">
    <BlocksRenderer v-for="(child, index) in node.children" :key="index" :node="child" />
  </div>
</template>
