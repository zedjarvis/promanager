<script setup lang="ts">

definePage({
  meta: {
    layout: 'layoutSideNav',
    requiresAuth: true
  }
})
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>
