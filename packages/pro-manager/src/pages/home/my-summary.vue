<script setup lang="ts">

definePage({
  name: "MySummary",
  meta: {
    canFilter: false,
    isHome: true,
  }
})

useHead({
  title: 'Your Summary'
})

const { height } = useWindowSize()

const mainH = computed(() => height.value - 49)
const containerH = computed(() => mainH.value - 96)
</script>

<template>
  <div class="font-inter w-full!" :style="{ 'height': `${mainH}px` }">
    <div class="w-full bg-surface h-24 pt-8px pb-24px px-5px md:px-32px flex-shrink flex-grow">
      <h1 class="font-space font-light text-xl md:text-[28px] leading-9">Good Morning, Cedrouseroll</h1>
      <p class="text-xs md:text-[14px]">July 19, 2023</p>
    </div>
    <VContainer fluid class="pa-0">
      <VRow no-gutters :style="{ 'height': `${containerH}px` }">
        <VCol cols="12" lg="6" class="ma-0 pa-0">
          <VRow no-gutters class="flex-column h-100">
            <VCol class="d-flex h-50">01</VCol>
            <VDivider class="mx-4" />
            <VCol class="d-flex">02</VCol>
          </VRow>
        </VCol>
        <VDivider vertical class="d-none d-lg-flex" />
        <VCol cols="12" lg="6" class="ma-0 pa-0">
          <VRow no-gutters class="h-100">
            <VCol cols="12" lg="6" class="d-flex">03</VCol>
            <VDivider vertical class="d-none d-lg-flex" />
            <VCol cols="12" lg="6" class="d-flex">04</VCol>
          </VRow>
        </VCol>
      </VRow>
    </VContainer>

  </div>
</template>
