<script setup lang="ts">
const props = withDefaults(defineProps<{ variant?: 1 | 2, productId?: string }>(), { variant: 1 })
const path = computed(() => `/ecommerce/${props.productId ? 'edit' : 'add'}-product${props.variant === 2 ? '-2' : ''}${props.productId ? `/${props.productId}` : ''}`)
</script>
<template><BlocksPreset :path="path" /></template>
