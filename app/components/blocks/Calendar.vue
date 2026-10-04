<script setup lang="ts">
withDefaults(defineProps<{ variant?: 1 | 2 }>(), { variant: 1 })
</script>
<template><BlocksPreset :path="`/project-management/issue-calendar-${variant}`" /></template>
