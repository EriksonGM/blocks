<script setup lang="ts">
import { h, resolveComponent } from 'vue'
import type { TableColumn } from '@nuxt/ui'
import type { BlockNode } from '~/types/blocks'
const props = defineProps<{ node: BlockNode }>()
const headers = computed(() => findBlocks(props.node, n => n.tag === 'th'))
const rows = computed(() => findBlocks(props.node, n => n.tag === 'tr').filter(n => n.children?.some(c => c.tag === 'td')).map((row, index) => {
  const record: Record<string, BlockNode | number> = { _index: index }
  row.children?.filter(n => n.tag === 'td').forEach((cell, i) => { record[`c${i}`] = cell })
  return record
}))
const sorting = ref([])
const selection = ref({})
function checkboxHeader(header: BlockNode) { return findBlocks(header, node => node.attrs?.role === 'checkbox' || node.attrs?.type === 'checkbox').length > 0 }
const query = useState<Record<string, string>>('block-table-filter', () => ({}))
const route = useRoute()
const visibleRows = computed(() => rows.value.filter(row => !query.value[route.path] || Object.values(row).some(cell => typeof cell === 'object' && blockText(cell).toLowerCase().includes(query.value[route.path]!.toLowerCase()))))
const columns = computed<TableColumn<Record<string, BlockNode | number>>[]>(() => headers.value.map((header, i) => ({
  id: `c${i}`,
  accessorFn: row => typeof row[`c${i}`] === 'object' ? blockText(row[`c${i}`] as BlockNode) : '',
  header: ({ column, table }) => checkboxHeader(header) ? h(resolveComponent('UCheckbox'), { modelValue: table.getIsSomePageRowsSelected() ? 'indeterminate' : table.getIsAllPageRowsSelected(), 'onUpdate:modelValue': (value: boolean) => table.toggleAllPageRowsSelected(value), 'aria-label': 'Select all rows' }) : blockText(header).trim() ? h(resolveComponent('UButton'), { label: blockText(header).trim(), color: 'neutral', variant: 'ghost', size: 'xs', trailingIcon: column.getIsSorted() ? 'i-lucide-arrow-down' : undefined, onClick: () => column.toggleSorting(column.getIsSorted() === 'asc') }) : '',
  meta: { class: { th: String(header.attrs?.class || ''), td: 'align-middle' } },
})))
</script>
<template>
  <UTable v-model:sorting="sorting" v-model:row-selection="selection" :data="visibleRows" :columns="columns" :class="node.attrs?.class" :ui="{ th: 'px-4 py-3 bg-muted/30 text-muted-foreground', td: 'px-4 py-3 border-b border-default', tr: 'hover:bg-muted/30' }">
    <template v-for="column in columns" :key="column.id" #[`${column.id}-cell`]="{ row }">
      <UCheckbox v-if="checkboxHeader(headers[Number(column.id?.slice(1))]!)" :model-value="row.getIsSelected()" aria-label="Select row" @update:model-value="row.toggleSelected(Boolean($event))" />
      <template v-else><BlocksRenderer v-for="(child, index) in (row.original[column.id!] as BlockNode)?.children" :key="index" :node="child" /></template>
    </template>
  </UTable>
</template>
