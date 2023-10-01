<script setup lang="ts">
import { RouteLocationAsString } from 'unplugin-vue-router/types';

const props = defineProps<{
  icon?: string
  title: string | undefined
  url: RouteLocationAsString
  rail?: boolean
}>();

const { icon, title } = toRefs(props)
</script>

<template>
  <!-- <RouterLink :to="url" > -->
  <VListItem :to="url" tabindex="0" active-class="active" :ripple="false" height="48" :class="{ 'pl-12px!': rail }"
    class="nav-link" :title="title">
    <template v-slot:prepend>
      <VIcon :icon="icon" size="small" />
    </template>
    <template v-slot:append>
      <slot />
    </template>
  </VListItem>
  <!-- </RouterLink> -->
</template>

<style lang="scss">
.v-list-item--active {
  background-color: rgb(var(--v-theme-surface)) !important;
  color: rgb(var(--v-theme-on-nav-background)) !important;

  &:hover {
    color: rgb(var(--v-theme-primary)) !important;
  }
}

.v-list-item .nav-link {
  outline: none;
  border: 1px solid transparent !important;
  background-color: inherit !important;

  & .v-list-item-title {
    font-family: Inter, sans-serif !important;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.16px;
    line-height: 18.2px;
    vertical-align: top;
  }

  &:hover {
    background-color: rgb(var(--v-theme-surface));
    color: rgb(var(--v-theme-primary)) !important;
  }

  &:focus {
    border-color: rgb(var(--v-theme-primary));
    box-shadow: inset 0 0 0 2px rgb(var(--v-theme-primary, #b3f604)), inset 0 0 0 2px rgb(var(--v-theme-background, #101423))
  }

  &:active {
    border-color: rgb(var(--v-theme-primary));
    box-shadow: inset 0 0 0 2px rgb(var(--v-theme-primary, #b3f604)), inset 0 0 0 2px rgb(var(--v-theme-background, #101423))
  }

  &:target {
    border-color: rgb(var(--v-theme-primary));
    box-shadow: inset 0 0 0 2px rgb(var(--v-theme-primary, #b3f604)), inset 0 0 0 2px rgb(var(--v-theme-background, #101423))
  }
}

.v-list-item__overlay {
  display: none;
}

.v-list-item__underlay {
  display: none;
}
</style>
