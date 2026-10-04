<script setup lang="ts">
withDefaults(defineProps<{ variant?: 1 | 2 | 3 }>(), { variant: 1 })
</script>
<template><BlocksPreset :path="`/ai-chat/workflow-${variant}`" /></template>
