<script setup lang="ts">

const emit = defineEmits<{
  (e: 'close'): void
}>()


const newTask = ref('')
const form = ref()

const ProjectRules = [
  (value: string) => !!value || 'Project Name is required.',
]

function handleSubmit() {
  if (form.value) alert('Task Created...')
}
</script>

<template>
  <VCard border class="pa-5">
    <div class="flex items-center justify-between w-full pa-0 mb-4">
      <VCardTitle class="font-space pa-0">New Project</VCardTitle>
      <VIcon @click="emit('close')" icon="i-carbon-close"></VIcon>
    </div>
    <VForm v-model="form" @submit.prevent="handleSubmit" validate-on="input">
      <VCardItem class="pa-0 mb-4">
        <p class="uppercase mb-1 text-sm">Name</p>
        <VTextField v-model="newTask" single-line rounded="0" variant="outlined" density="compact"
          placeholder="Project Name" :rules="ProjectRules" required></VTextField>
      </VCardItem>
      <VCardItem class="pa-0 mb-4">
        <p class="uppercase mb-1 text-sm">Members</p>
        <AssignedTo />
      </VCardItem>
      <VCardItem class="pa-0 mb-4">
        <p class="uppercase mb-1 text-sm">Add to Lead</p>
        <VSelect menu-icon="i-carbon-caret-down" no-data-text="No Leads Available" rounded="0" variant="outlined"
          density="compact" single-line clearable value="None"></VSelect>
      </VCardItem>
      <div class="ma-0 pa-0 w-full d-flex align-center justify-center">
        <VBtn type="submit" rounded="0" variant="flat" class="text-capitalize ma-0">Create Project</VBtn>
      </div>
    </VForm>
  </VCard>
</template>
