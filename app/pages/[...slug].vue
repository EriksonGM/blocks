<script setup lang="ts">
const route = useRoute()
const path = decodeURIComponent(route.path)
const { data: page } = await useAsyncData(`blocks:${path}`, () => usePageBlocks(path))
if (!page.value) throw createError({ statusCode: 404, statusMessage: 'Page not found' })
useHead({ title: `${page.value.label} · Blocks Admin` })
</script>

<template>
  <BlocksPage v-if="page" :key="page.path" :page="page" />
</template>
