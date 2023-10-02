<script setup lang="ts">
// page opgions # unplugin vue router
definePage({
  name: 'HomeFiles',
  meta: {
    canFilter: false,
  }
})

// utils

// composables

// plugins

// variables

</script>

<template>
  <h1>THIS IS THE FILES PAGE</h1>
</template>


<style lang="scss" scoped>
.drag-handle {
  &:hover {
    cursor: grab;
  }

  &:active {
    cursor: grabbing;
  }
}
</style>
