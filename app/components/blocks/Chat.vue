<script setup lang="ts">
withDefaults(defineProps<{ mode?: 'composer' | 'conversation', variant?: number }>(), { mode: 'composer', variant: 1 })
</script>
<template><BlocksPreset :path="`/ai-chat/${mode}-${variant}`" /></template>
