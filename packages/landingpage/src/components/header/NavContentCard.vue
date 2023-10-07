<script setup lang="ts">

const props = defineProps<{
  icon?: string
  color?: string
  title: string
  text: string
}>();


const { icon, color, title, text } = toRefs(props)
</script>


<template>
  <RouterLink to="/">
    <VCard rounded="0" :elevation="0" class="py-4">
      <div class="d-flex align-center">
        <div v-show="icon" class="pr-2">
          <VIcon :color="color" :icon="icon" />
        </div>
        <p class="pr-2">{{ title }}</p>
      </div>
      <p class="pl-1 mt-4" style="font-size: 12px;">{{ text }}</p>
    </VCard>
  </RouterLink>
</template>
