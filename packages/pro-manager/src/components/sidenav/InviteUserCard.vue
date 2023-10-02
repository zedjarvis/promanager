<script setup lang="ts">


const emit = defineEmits<{
  (e: 'close'): void
}>()

const form = ref()

const LeadRules = [
  (value: string) => !!value || 'Field required.',
]

function handleSubmit() {
  if (form.value) alert('User Created...')
}
</script>

<template>
  <VCard border class="pa-0">
    <div class="flex items-center justify-between w-full pa-3">
      <VCardTitle v-draggable class="font-space pa-0">Invite People</VCardTitle>
      <VIcon @click="emit('close')" icon="i-carbon-close"></VIcon>
    </div>
    <VDivider />
    <div class="h-100 bg-secondary pa-3 pr-10">
      <div class="grid md:grid-cols-4 gap-3">
        <div>
          <p class="text-xs mb-1 uppercase">First Name *</p>
          <VTextField rounded="0" density="compact" placeholder="First Name"></VTextField>
        </div>
        <div>
          <p class="text-xs mb-1 uppercase">Last Name</p>
          <VTextField rounded="0" density="compact" placeholder="Last Name"></VTextField>
        </div>
        <div>
          <p class="text-xs mb-1 uppercase">Email *</p>
          <VTextField rounded="0" density="compact" placeholder="Email"></VTextField>
        </div>
        <div class="relative">
          <p class="text-xs mb-1 uppercase">Role</p>
          <VSelect menu-icon="i-carbon-caret-down" :items="['Member', 'Manager', 'Admin']" rounded="0" variant="outlined"
            density="compact" single-line clearable value="Member"></VSelect>
          <VIcon class="absolute -right-7 top-45%" icon="i-carbon-trash-can"></VIcon>
        </div>

      </div>
      <div class="pa-0 mt-3 mb-1">
        <VBtn variant="plain" color="on-secondary" class="pa-0 ma-0 text-capitalize">
          <VIcon icon="i-carbon-add" /> Invite another Person
        </VBtn>
      </div>
    </div>
    <div class="d-flex align-center pa-3 pt-5">
      <p>Add to: </p>
      <VSelect class="ml-3 md:mr-90" menu-icon="i-carbon-caret-down" multiple no-data-text="No Projects Available"
        rounded="0" variant="outlined" density="compact" single-line clearable value="None"></VSelect>
    </div>
    <div class="d-flex pa-3">
      <VBtn class="mr text-capitalize">Send Invite</VBtn>
      <VBtn @click="emit('close')" color="secondary" class="mx-2 text-capitalize">Cancel</VBtn>
    </div>
  </VCard>
</template>
