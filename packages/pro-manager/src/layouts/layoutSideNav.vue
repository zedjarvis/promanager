<script setup lang="ts"></script>

<template>
  <VAppBar density="compact">
    <VAppBarTitle>
      HaftManager
    </VAppBarTitle>
  </VAppBar>
  <VNavigationDrawer floating :elevation="0"></VNavigationDrawer>
  <VMain>
    <RouterView />
  </VMain>
</template>
