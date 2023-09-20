<script setup lang="ts">

useSeoMeta({
  charset: 'utf-8',
  description: 'Welcome to my site',
  ogImage: 'https://example.com/image.jpg',
  ogLocale: 'en',
  ogLocaleAlternate: ['fr', 'zh'],
})


useHead({
  titleTemplate: '%s %separator %siteName',
  // Template params
  templateParams: { separator: '|', siteName: 'Pro-Manager.com' },
  // Classes
  bodyAttrs: { class: { overflow: true } },
})
</script>


<template>
  <VApp>
    <RouterView />
  </VApp>
</template>
