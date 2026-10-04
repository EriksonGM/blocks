<script setup lang="ts">
withDefaults(defineProps<{ variant?: 1 | 2 | 3 }>(), { variant: 1 })
</script>
<template><BlocksPreset :path="`/project-management/issue-kanban-${variant}`" /></template>
