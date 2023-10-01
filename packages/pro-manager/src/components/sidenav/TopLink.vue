<script setup lang="ts">
import { RouteLocationAsString } from 'unplugin-vue-router/types';

const props = defineProps<{
  url: RouteLocationAsString
  icon: string
}>()

const { icon, url } = toRefs(props)


</script>

<template>
  <RouterLink class="inline-flex items-center justify-center logo" :to="url">
    <VIcon size="x-small" :icon="icon" />
  </RouterLink>
</template>

<style lang="scss" scoped>
.logo {
  height: 48px;
  width: 48px;
  overflow: visible;
  padding: 5px;
  position: relative;
  background-color: inherit;
  color: rgb(var(--v-theme-on-background));
  border: 1px solid transparent;
  outline: none;

  &:hover {
    color: rgb(var(--v-theme-primary));
  }

  &:focus {
    border-color: rgb(var(--v-theme-primary));
    box-shadow: inset 0 0 0 1px rgb(var(--v-theme-primary, #b3f604)), inset 0 0 0 2px rgb(var(--v-theme-background, #101423))
  }
}

.router-link-active,
.router-link-exact-active {
  background-color: rgb(var(--v-theme-surface)) !important;
}
</style>
