<script setup lang="ts"></script>

<template>
  <RouterLink to="/">
    <div class="d-flex align-center">
      <span class="logo-icon">PM</span>
      <span class="logo-text ml-1 d-none d-md-flex">
        ProManager
      </span>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
.logo-icon {
  border: 3px solid;
  border-radius: 50%;
  padding: 3px;
  font-size: 14px;
  font-weight: bold;
  font-family: Inter;
}

.logo-text {
  font-family: 'Space Grotesk' !important;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  line-height: 18px;
}
</style>
