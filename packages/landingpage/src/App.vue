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
      <VCard border>
        <VCardTitle>Disclaimer!!</VCardTitle>
        <VCardText>
          This project is Demo purposes only and does not mean to copy or infringe Trello in any way.
        </VCardText>
        <VCardActions class="justify-center">
          <VBtn @click="dialog = false">Close</VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </VApp>
</template>

