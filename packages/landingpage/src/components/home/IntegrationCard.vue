<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps<{
  title: string;
  avatar: string;
  description: string;
  color: string;
  url: string;
}>();

const { title, avatar, description, color, url } = toRefs(props)
</script>

<template>
  <VCard :color="color" width="317px" class="pa-10 ma-2">
    <p class="w-100 pb-7">
      <VImg :src="avatar" width="85px" height="85px" />
    </p>
    <h3 style="font-size: 18px; line-height: 28px; font-weight: 700; margin: 0 0 6px;">{{ title }}</h3>
    <p style="font-size: 18px; line-height: 28px; font-weight: 400; margin: 0 0 12px;">{{  description }}</p>
    <p>
      <VBtn :to="url" variant="plain" class="text-capitalize pl-0" style="font-size: 18px !important; font-weight: 500;">
        Learn More <VIcon>mdi-arrow-right</VIcon>
      </VBtn>
    </p>
  </VCard>
</template>
