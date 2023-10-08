<script setup lang="ts">

const props = withDefaults(defineProps<{ variant?: 'footer' | 'header' }>(), {
  variant: 'header'
})

const variant = toRef(props, 'variant')
</script>

<template>
  <RouterLink to="/">
    <div class="d-flex align-center">
      <span class="logo-icon">PM</span>
      <span class="logo-text ml-1" :class="{ 'd-none d-md-flex': variant == 'header' }">ProManager
        <span style="font-size: 13px;">
          <span class="text-primary">.</span>com
        </span>
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
