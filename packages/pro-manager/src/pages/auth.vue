<script setup lang="ts">
import { useAuthStore } from '@/store';
// assets
import logoWhite from '@images/pm-white.svg';

// SEO
useHead({
  title: 'Submit Form'
})


const authStore = useAuthStore()

if (authStore.isAuthenticated) window.history.back()
</script>

<template>
  <VSheet class="flex justify-center items-center text-center pa-md-16 h-100 w-100"
    style="background-color: rgb(var(--v-theme-background));">
    <VContainer fluid class="pa--md-4 ma-0 text-center">
      <VResponsive class="mx-auto" width="400">
        <VCard rounded="lg" :elevation="16" class="px-2 py-5 pa-md-10">
          <VImg class="mx-auto" :src="logoWhite" width="78" alt="Pro-Manager White Logo" />
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
