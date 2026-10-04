<script setup lang="ts">
import navigation from '~/data/reference/navigation.json'
const open = defineModel<boolean>('open', { default: false })
const groups = navigation.groups.map(group => ({ id: group.label, label: group.label, items: group.items.flatMap(item => item.links.map(link => ({ label: `${item.label} / ${link.label}`, icon: `i-${item.icon || 'lucide-file'}`, to: link.path, onSelect: () => { open.value = false } }))) }))
</script>
<template>
  <UModal v-model:open="open" title="Navigate to a page" description="Search all 219 pages." :ui="{ content: 'max-w-xl' }">
    <template #content><UCommandPalette :groups="groups" placeholder="Search pages..." class="h-96" /></template>
  </UModal>
</template>
