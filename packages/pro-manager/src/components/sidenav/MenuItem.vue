<script setup lang="ts">

const props = defineProps<{
  title: string
  subtitle?: string
}>()

const { title } = toRefs(props)
</script>

<template>
  <VListItem density="compact" class="pl-6 font-inter">
    <VListItemTitle><span style="font-size: 14px !important;">{{ title }}</span></VListItemTitle>
    <template v-slot:append>
      <slot />
    </template>
  </VListItem>
</template>
