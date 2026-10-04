<script setup lang="ts">
defineProps<{ title: string, value: string, previous?: string, change?: number, icon?: string }>()
</script>
<template>
  <UCard :ui="{ root: 'shadow-none rounded-xl' }">
    <p class="flex items-center gap-2 text-sm font-medium text-muted"><UIcon v-if="icon" :name="icon" class="size-4" />{{ title }}</p>
    <p v-if="previous" class="mt-3 text-xs text-dimmed">{{ previous }} previous month</p>
    <p class="my-3 text-[28px] font-semibold tracking-tight">{{ value }}</p>
    <p v-if="change !== undefined" class="flex items-center gap-1 text-xs"><UIcon :name="change >= 0 ? 'i-lucide-arrow-up-right' : 'i-lucide-arrow-down-right'" :class="change >= 0 ? 'text-emerald-600' : 'text-red-500'" /><span :class="change >= 0 ? 'text-emerald-600' : 'text-red-500'">{{ change >= 0 ? '+' : '' }}{{ change }}%</span><span class="text-muted">vs last month</span></p>
    <slot />
  </UCard>
</template>
