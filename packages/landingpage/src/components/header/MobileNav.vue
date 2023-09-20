<script setup lang="ts">

const props = defineProps<{
  menu: boolean | null
}>();

const emit = defineEmits<{
  (e: 'toggle-menu'): void
}>()

const menu = toRef(props, 'menu')
</script>

<template>
  <VNavigationDrawer @update:model-value="emit('toggle-menu')" border v-model="menu" temporary location="top" width="auto">
    <VList>
      <VListItem title="Features" append-icon="mdi-chevron-right"></VListItem>
      <VDivider />
      <VListItem title="Solutions" append-icon="mdi-chevron-right"></VListItem>
      <VDivider />
      <VListItem title="Plans" append-icon="mdi-chevron-right"></VListItem>
      <VDivider />
      <VListItem title="Pricing"></VListItem>
      <VDivider />
      <VListItem title="Resources" append-icon="mdi-chevron-right"></VListItem>
      <VDivider />
    </VList>
    <VBtn class="my-4" rounded="0" color="primary" variant="flat" block>Start Free Trial</VBtn>
    <VBtn class="my-4" rounded="0" variant="outlined" block>Login</VBtn>
  </VNavigationDrawer>
</template>
