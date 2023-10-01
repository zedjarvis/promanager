<script setup lang="ts">

const props = defineProps<{
  rail?: boolean
}>()

const emit = defineEmits<{
  (e: 'model-changed', value: boolean): void
}>()

const rail = toRef(props, 'rail')
const helpMenu = ref(false)
</script>

<template>
  <NavLinkItem id="help-menu-activator" :rail="rail" icon="i-carbon-help" title="Help" :class="{ 'bg-surface': helpMenu }" />

  <VMenu @update:model-value="emit('model-changed', helpMenu)" v-model="helpMenu" activator="#help-menu-activator"
    location="right" :close-on-content-click="false">
    <VList rounded="0" border width="225" class="ml-1 pa-0">
      <VListSubheader><span class="uppercase text-xs">Help</span></VListSubheader>
      <VDivider class="mx-3.5" />
      <MenuItem title="Contact Us" />
      <VDivider class="mx-3.5" />
      <MenuItem title="Knowledge Base &UpperRightArrow;" />
      <VDivider class="mx-3.5" />
      <MenuItem title="Tutorial Videos &UpperRightArrow;" />
      <VDivider class="mx-3.5" />
      <MenuItem title="Product Feedback" />
    </VList>
  </VMenu>
</template>
