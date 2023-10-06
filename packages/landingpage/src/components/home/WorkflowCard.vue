<script setup lang="ts">

const props = defineProps<{
  title: string
  text: string
  image: string
  color: string
}>()


const { title, text, image, color } = toRefs(props)
</script>


<template>
  <VCard rounded="lg" :elevation="2" max-width="350" max-height="250" class="my-1 mx-3 pt-14 pb-2 font-inter">
    <div class="h-48px w-full block absolute top-0 left-0 overflow-hidden" :style="{ backgroundColor: color }">
    </div>
    <div
      style="position: absolute; left: 12px; top: 24px; height: 48px; width: 48px; display: inline-block; background-color: white; border-radius: 4px; padding: 8px;">
      <VImg :src="image" />
    </div>
    <VCardItem class="px-5 pt-5">
      <h3 class="text-24px text-#091E42">
        {{ title }}
      </h3>
      <p class="pt-1">
        {{ text }}
      </p>
    </VCardItem>
  </VCard>
</template>
