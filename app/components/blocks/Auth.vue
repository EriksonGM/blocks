<script setup lang="ts">
withDefaults(defineProps<{ mode?: 'login' | 'register' | 'forgot-password' }>(), { mode: 'login' })
</script>
<template><BlocksPreset :path="`/${mode}`" /></template>
