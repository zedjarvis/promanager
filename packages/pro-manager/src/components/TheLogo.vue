<script setup lang="ts">

const props = defineProps<{
  minimize: boolean
  mobile?: boolean
}>();

const emit = defineEmits<{
  (e: 'toggle-rail'): void
}>()

const { minimize, mobile } = toRefs(props)

const rail = computed(() => mobile.value ? mobile.value : minimize.value)
const width = computed(() => rail.value ? 48 : 256)

</script>

<template>
  <VListItem @click="emit('toggle-rail')" class="inline-flex items-center justify-start logo"
    :style="{ width: `${width}px !important`, minWidth: `${width}px !important`, 'paddingLeft': `${rail ? '10px' : '16px'}` }">
    <template v-slot:prepend>
      <span class="logo-icon">PM</span>
    </template>
    <VListItemTitle class="logo-text ml-1">
      ProManager.com
    </VListItemTitle>
  </VListItem>
</template>

<style lang="scss" scoped>
.logo {
  height: 48px;
  overflow: visible;
  // position: relative;
  font-family: 'Space Grotesk' !important;
  font-size: 16px;
  text-align: left;
  font-weight: 400;
  letter-spacing: 0.16px;
  line-height: 18.2px;
  background: rgb(var(--v-theme-nav-background));
  color: rgb(var(--v-theme-on-nav-background));
  vertical-align: top;
  border: 1px solid transparent;
  cursor: pointer;
  outline: none;
  flex-shrink: 1;
  transition-duration: 0.2s;
  transition-property: box-shadow, transform, visibility, width, height, left, right, top, bottom;
  transition: background 70ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 70ms ccubic-bezier(0.4, 0, 0.2, 1), border-color 70ms cubic-bezier(0.4, 0, 0.2, 1), outline 70ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 70ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgb(var(--v-theme-surface));
    color: rgb(var(--v-theme-primary));
  }

  &:focus {
    border-color: rgb(var(--v-theme-primary));
    box-shadow: inset 0 0 0 1px rgb(var(--v-theme-primary, #b3f604)), inset 0 0 0 2px rgb(var(--v-theme-background, #101423))
  }
}

.logo-icon {
  font-size: 11px;
  margin-right: 0.5rem;
  font-family: Inter;
  display: inline-block;
  font-weight: 500;
  border: 2px solid;
  border-radius: 50%;
  padding: 2px;
}
</style>
