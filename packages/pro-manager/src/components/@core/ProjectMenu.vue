<script setup lang="ts">
import { Project } from '@/utils/types';


const props = defineProps<{
  project: Project
}>()

const project = toRef(props, 'project')
</script>

<template>
  <VMenu location="bottom">
    <template v-slot:activator="{ props }">
      <VListItem v-bind="props" :title="project.name" class="ml-2"></VListItem>
    </template>
    <VList rounded="0" border class="pa-0">
      <MenuItem title="Add to Favourite" />
      <VDivider class="mx-3.5" />
      <MenuItem title="Project Settings" />
      <VDivider class="mx-3.5" />
      <MenuItem title="Workflow & Automation" />
    </VList>
  </VMenu>
</template>

<style lang="scss" scoped>
.v-list-item {
  outline: none;
  border: 1px solid transparent !important;

  &:focus {
    background-color: rgb(var(--v-theme-surface)) !important;
    color: rgb(var(--v-theme-primary)) !important;
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

