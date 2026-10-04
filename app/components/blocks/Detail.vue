<script setup lang="ts">
withDefaults(defineProps<{ domain?: string, entity?: string, variant?: number, path?: string }>(), { domain: 'ecommerce', entity: 'product', variant: 1 })
</script>
<template><BlocksPreset :path="path || `/${domain}/${entity}-detail-${variant}`" /></template>
