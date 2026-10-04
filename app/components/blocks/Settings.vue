<script setup lang="ts">
withDefaults(defineProps<{ section?: string }>(), { section: '' })
</script>
<template><BlocksPreset :path="`/original/settings${section ? `/${section}` : ''}`" /></template>
