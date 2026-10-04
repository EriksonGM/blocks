<script lang="ts">
import { defineComponent, h, type PropType, type VNodeChild } from 'vue'
import type { BlockNode } from '~/types/blocks'

/** Render vector primitives together so SVG namespaces survive SSR hydration. */
export default defineComponent({
  props: { node: { type: Object as PropType<BlockNode>, required: true } },
  setup(props) {
    function vector(node: BlockNode): VNodeChild {
      if (node.text !== undefined) return node.text
      const attrs = { ...node.attrs }
      if (node.tag === 'svg' && String(attrs.class).includes('recharts-surface')) attrs.preserveAspectRatio = 'none'
      const tags: Record<string, string> = { clippath: 'clipPath', lineargradient: 'linearGradient', radialgradient: 'radialGradient', foreignobject: 'foreignObject', textpath: 'textPath' }
      return h(tags[node.tag || ''] || node.tag || 'g', attrs, node.children?.map(vector))
    }
    return () => vector(props.node)
  },
})
</script>
