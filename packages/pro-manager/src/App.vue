<script setup lang="ts">
useSeoMeta({
  charset: 'utf-8',
  description: 'Pro-Manager: Project management software',
  ogImage: 'https://example.com/image.jpg',
  ogLocale: 'en',
  ogLocaleAlternate: ['fr', 'zh'],
})

useHead({
  titleTemplate: '%s %separator %siteName',
  // Template params
  templateParams: { separator: '|', siteName: 'Pro-Manager.com' },
  // Classes
  // bodyAttrs: { class: { overflow: true } },
})

import { useTheme } from 'vuetify';
import { useAppStore } from './store';


const theme = useTheme()
const appStore = useAppStore()

const { isDark } = storeToRefs(appStore)

theme.global.name.value = isDark.value ? 'dark' : 'light'
</script>


<template>
  <VApp>
    <RouterView />
  </VApp>
</template>
