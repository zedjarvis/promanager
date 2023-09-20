<script setup lang="ts">
</script>

<template>
  <VFooter class="pa-0 bg-secondary text-white">
    <VContainer class="d-flex flex-column align-center">
      <VRow class="w-100 align-center flex-column flex-md-row py-3 pl-5 pl-md-0">
        <div class="d-flex flex-column flex-md-row">
          <p class="footer_text mr-md-4">&copy; {{ new Date().getFullYear() }} HaftManager.com</p>
          <p class="footer_text mx-md-4">Terms</p>
          <p class="footer_text mx-md-4">Privacy Policy</p>
          <p class="footer_text mx-md-4">Site Map</p>
        </div>
        <VSpacer class="d-none d-md-flex"></VSpacer>
        <div class="d-flex">
          <VBtn rounded="pill" variant="text" color="white" size="small" class="mr-md-2" icon="mdi-instagram">
          </VBtn>
          <VBtn rounded="pill" variant="text" color="white" size="small" class="mx-md-2" icon="mdi-facebook">
          </VBtn>
          <VBtn rounded="pill" variant="text" color="white" size="small" class="mx-md-2" icon="mdi-linkedin">
          </VBtn>
          <VBtn rounded="pill" variant="text" color="white" size="small" class="mx-md-2" icon="mdi-twitter">
          </VBtn>
          <VBtn rounded="pill" variant="text" color="white" size="small" class="mx-md-2" icon="mdi-youtube">
          </VBtn>
        </div>
      </VRow>
    </VContainer>
  </VFooter>
</template>

<style lang="scss">
.footer_text {
  font-size: 14px !important;
}
</style>
