<script setup lang="ts">
import { useAuthStore } from '@/store';
import { User } from '@/utils/types';


const emit = defineEmits<{
  (e: 'close'): void
}>()


const authStore = useAuthStore()
const newTask = ref('')
const { currentUser } = storeToRefs(authStore)
const assigned = ref<User[]>([currentUser.value])
const form = ref()

const TaskRules = [
  (value: string) => !!value || 'Task Name is required.',
]

function handleSubmit() {
  if (form.value) alert('Task Created...')
}
</script>

<template>
  <VCard border class="pa-5" width="450">
    <div class="flex items-center justify-between w-full pa-0 mb-4">
      <VCardTitle v-draggable class="font-space pa-0">New Task</VCardTitle>
      <VIcon @click="emit('close')" icon="i-carbon-close"></VIcon>
    </div>
    <VForm v-model="form" @submit.prevent="handleSubmit" validate-on="input">
      <VCardItem class="pa-0 mb-4">
        <p class="uppercase mb-1 text-sm">Name</p>
        <VTextField v-model="newTask" single-line rounded="0" variant="outlined" density="compact" placeholder="Task Name"
          :rules="TaskRules" required></VTextField>
      </VCardItem>
      <VCardItem class="pa-0 mb-4">
        <p class="uppercase mb-1 text-sm">Assigned to</p>
        <AssignedTo :assigned="assigned" :can_add="true" />
      </VCardItem>
      <VCardItem class="pa-0 mb-4">
        <p class="uppercase mb-1 text-sm">Add to Project</p>
        <VSelect menu-icon="i-carbon-caret-down" multiple no-data-text="No Projects Available" rounded="0"
          variant="outlined" density="compact" single-line clearable value="None"></VSelect>
      </VCardItem>
      <div class="ma-0 pa-0 w-full d-flex align-center justify-center">
        <VBtn type="submit" rounded="0" variant="flat" class="text-capitalize ma-0">Create Task</VBtn>
      </div>
    </VForm>
  </VCard>
</template>
