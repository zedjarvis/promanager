<script setup lang="ts">
</script>

<template>
  <VFooter class="pa-0 bg-secondary text-white">
    <VContainer class="pt-md-8 px-6">
      <VRow class="mb-2">
        <VCol cols="12" md="" class="my-3 my-md-0">
          <TheLogo />
          <p class="mt-4 hover:underline w-fit">Log in</p>
        </VCol>
        <VDivider thickness="2" class="d-flex d-md-none" />
        <VCol cols="12" md="" class="my-3 my-md-0">
          <VCard rounded="0" flat class="bg-secondary h-full w-full">
            <h5 class="pb-3">About ProManager</h5>
            <p class="text-xs">What's behind the boards.</p>
          </VCard>
        </VCol>
        <VDivider thickness="2" class="d-flex d-md-none" />
        <VCol cols="12" md="" class="my-3 my-md-0">
          <VCard rounded="0" flat class="bg-secondary h-full w-full">
            <h5 class="pb-3">Jobs</h5>
            <p class="text-xs">Learn about open roles on the PM team.</p>
          </VCard>
        </VCol>
        <VDivider thickness="2" class="d-flex d-md-none" />
        <VCol cols="12" md="" class="my-3 my-md-0">
          <VCard rounded="0" flat class="bg-secondary h-full w-full">
            <h5 class="pb-3">Apps</h5>
            <p class="text-xs">Get the PM app for your pc and mobile devices.</p>
          </VCard>
        </VCol>
        <VDivider thickness="2" class="d-flex d-md-none" />
        <VCol cols="12" md="" class="my-3 my-md-0">
          <RouterLink to="/">
            <VCard rounded="0" flat class="bg-secondary h-full w-full">
              <h5 class="pb-3">Contact Us</h5>
              <p class="text-xs">Need anything? Get in touch and we can help.</p>
            </VCard>
          </RouterLink>
        </VCol>
      </VRow>
      <VDivider thickness="2" />
      <VRow class="w-100% align-md-center flex-column flex-md-row py-3 pl-5 pl-md-0">
        <VSelect prepend-inner-icon="i-carbon-globe" value="English"
          :items="['English', 'Swahili', 'Frech', 'Chinese', 'German']" variant="underlined"></VSelect>
        <VSpacer></VSpacer>
        <div class="d-flex flex-column flex-md-row space-y-5 md:space-y-0">
          <p class="footer_text mx-md-4">Terms</p>
          <p class="footer_text mx-md-4">Privacy Policy</p>
          <p class="footer_text mr-md-4">&copy; {{ new Date().getFullYear() }} ProManager.com</p>
          <p class="footer_text mx-md-4">Site Map</p>
        </div>
        <VSpacer class="d-none d-md-flex"></VSpacer>
        <VSpacer class="d-none d-md-flex"></VSpacer>
        <div class="d-flex my-10 my-md-0">
          <VBtn rounded="pill" variant="text" color="white" size="small" class="mr-2" icon="mdi-instagram">
          </VBtn>
          <VBtn rounded="pill" variant="text" color="white" size="small" class="mx-2" icon="mdi-facebook">
          </VBtn>
          <VBtn rounded="pill" variant="text" color="white" size="small" class="mx-2" icon="mdi-linkedin">
          </VBtn>
          <VBtn rounded="pill" variant="text" color="white" size="small" class="mx-2" icon="mdi-twitter">
          </VBtn>
          <VBtn rounded="pill" variant="text" color="white" size="small" class="mx-2" icon="mdi-youtube">
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
