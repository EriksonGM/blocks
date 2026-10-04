<script setup lang="ts">
withDefaults(defineProps<{ domain?: 'ecommerce' | 'project-management' | 'payment-processor' | 'original', variant?: number }>(), { domain: 'ecommerce', variant: 1 })
</script>
<template><BlocksPreset :path="`/${domain}/dashboard-${variant}`" /></template>
