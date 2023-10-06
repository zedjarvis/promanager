<script setup lang="ts">

const emit = defineEmits<{
  (e: 'close'): void
}>()


const newTask = ref('')
const form = ref()

const LeadRules = [
  (value: string) => !!value || 'Field required.',
]

function handleSubmit() {
  if (form.value) alert('Task Created...')
}
</script>

<template>
  <VCard border class="pa-0">
    <div class="flex items-center justify-between w-full pa-4">
      <VCardTitle v-draggable class="font-space pa-0">New Lead</VCardTitle>
      <VIcon @click="emit('close')" icon="i-carbon-close"></VIcon>
    </div>
    <VDivider />
    <VForm v-model="form" @submit.prevent="handleSubmit" validate-on="input">
      <div class="pa-4 h-350px overflow-y-auto">
        <VCardItem class="pa-0 mb-4">
          <p class="uppercase mb-1 text-sm">Name (*)</p>
          <VTextField id="leadName" type="text" name="leadName" single-line rounded="0" variant="outlined"
            density="compact" placeholder="Individual or Business name" :rules="LeadRules" required></VTextField>
        </VCardItem>
        <VCardItem class="pa-0 mb-4">
          <p class="uppercase mb-1 text-sm">Email (*)</p>
          <VTextField id="leadEmail" type="email" single-line rounded="0" variant="outlined" density="compact"
            placeholder="Email" :rules="LeadRules" required></VTextField>
        </VCardItem>
        <VCardItem class="pa-0 mb-4">
          <p class="uppercase mb-1 text-sm">Phone</p>
          <VTextField id="leadPhone" type="tel" single-line rounded="0" variant="outlined" density="compact"
            placeholder="Phone Number"></VTextField>
        </VCardItem>
        <VCardItem class="pa-0 mb-4">
          <p class="uppercase mb-1 text-sm">Address</p>
          <VTextField v-model="newTask" single-line rounded="0" variant="outlined" density="compact"
            placeholder="Shipping / Billing Address"></VTextField>
        </VCardItem>
        <VCardItem class="pa-0 mb-4">
          <p class="uppercase mb-1 text-sm">Lead Type</p>
          <VSelect menu-icon="i-carbon-caret-down" :items="['Individual', 'Business']" rounded="0" variant="outlined"
            density="compact" single-line clearable value="Business"></VSelect>
        </VCardItem>
      </div>
      <VDivider />
      <div class="pa-4 w-full d-flex align-center justify-center">
        <VBtn type="submit" rounded="0" variant="flat" class="text-capitalize ma-0">Create Lead</VBtn>
      </div>
    </VForm>
  </VCard>
</template>
