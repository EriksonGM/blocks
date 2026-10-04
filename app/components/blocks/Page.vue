<script setup lang="ts">
import type { PageBlocks } from '~/types/blocks'
defineProps<{ page: PageBlocks }>()
</script>
<template>
  <div class="block-page flex h-full min-h-0 w-full flex-col" :data-page="page.path">
    <BlocksRenderer :node="page.tree" />
  </div>
</template>
