<script setup lang="ts">

// assets
import logoWhite from '@images/pm-white.svg';

// SEO
useHead({
  title: 'Submit Form'
})


</script>

<template>
  <VSheet class="d-flex justify-center align-center text-center pa-16 h-100 w-100"
    style="background-color: rgb(var(--v-theme-background));">
    <VContainer fluid class="pa-4 ma-0 text-center">
      <VResponsive class="mx-auto" width="400">
        <VCard rounded="lg" :elevation="24" class="pa-10">
          <img :src="logoWhite" :width="78" alt="Pro-Manager White Logo">
          <RouterView />
        </VCard>
      </VResponsive>
    </VContainer>
  </VSheet>
</template>

<route lang="json">
{
  "meta": {
    "requiresAuth": false,
    "layout": "default"
  }
}
</route>

<style lang="scss" scoped></style>
