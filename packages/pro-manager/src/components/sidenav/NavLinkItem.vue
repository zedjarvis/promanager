<script setup lang="ts">

const props = defineProps<{
  icon?: string
  title: string | undefined
  rail?: boolean
}>();

const { icon, title } = toRefs(props)
</script>

<template>
  <VListItem tabindex="0" :active="false" active-class="active" :ripple="false" height="48" :class="{ 'pl-12px!': rail }"
    class="flex items-center justify-start nav-link" :title="title">
    <template v-slot:prepend>
      <VIcon :icon="icon" size="small" />
    </template>
  </VListItem>
</template>

<style lang="scss">
.v-list-item .nav-link {
  display: flex !important;
  outline: none;
  border: 1px solid transparent !important;
  cursor: pointer;

  & .v-list-item-title {
    font-family: Inter, sans-serif !important;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.16px;
    line-height: 18.2px;
    vertical-align: top;
  }

  &:hover {
    background: rgb(var(--v-theme-surface));
    color: rgb(var(--v-theme-primary));
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

  & .v-list-item__overlay {
    display: none;
  }

  & .v-list-item__underlay {
    display: none;
  }
}

.nav-link .active {
  background: rgb(var(--v-theme-surface)) !important;
  color: rgb(var(--v-theme-primary));
}
</style>
