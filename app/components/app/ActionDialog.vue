<script setup lang="ts">
const { dialog, save } = useBlockActions()
const name = ref('')
const description = ref('')
</script>
<template>
  <UModal v-model:open="dialog.open" :title="dialog.title" :description="dialog.mode === 'delete' ? 'Confirm this action.' : dialog.mode === 'save' ? 'Save your changes to this demo workspace.' : 'Update the details below.'">
    <template #body>
      <div v-if="dialog.mode === 'edit'" class="space-y-4">
        <UFormField label="Name" required><UInput v-model="name" placeholder="Enter a name" class="w-full" /></UFormField>
        <UFormField label="Description"><UTextarea v-model="description" placeholder="Add a description..." class="w-full" /></UFormField>
      </div>
      <p v-else class="text-sm text-muted">{{ dialog.mode === 'delete' ? 'Are you sure you want to remove this item?' : 'Your field values will be saved in this browser.' }}</p>
    </template>
    <template #footer><div class="flex w-full justify-end gap-2"><UButton color="neutral" variant="outline" @click="dialog.open = false">Cancel</UButton><UButton :color="dialog.mode === 'delete' ? 'error' : 'neutral'" @click="save">{{ dialog.mode === 'delete' ? 'Remove' : 'Save changes' }}</UButton></div></template>
  </UModal>
</template>
