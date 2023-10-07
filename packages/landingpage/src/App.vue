<script setup lang="ts">

const dialog = ref(false)

onMounted(() => {
  dialog.value = true
})
</script>

<template>
  <VApp>
    <RouterView />

    <!-- DISCLAIMER DIALOG  -->
    <VDialog v-model="dialog" width="500" persistent>
      <VCard border rounded="0" :elevation="24" class="text-center">
        <VCardText>
          This is a Demo project
        </VCardText>
        <VCardActions class="justify-center">
          <VBtn @click="dialog = false">Close</VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </VApp>
</template>

