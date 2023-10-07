<script setup lang="ts">

const props = defineProps<{
  menu: boolean
}>()

const emit = defineEmits<{
  (e: 'toggleMenu'): void
}>()

const menu = toRef(props, 'menu')
</script>


<template>
  <button @click="emit('toggleMenu')" aria-expanded="false" aria-label="Navigation" data-testid="menubutton"
    class="d-flex d-md-none justify-center align-center">
    <div class="menu-icon relative w-6 p-2 mx-4 mb-2">
      <span class="block absolute top-1.5px left-0 w-6 h-3px" :class="{ 'rotate-45': menu }"></span>
      <span class="block absolute top-10.5px left-0 w-6 h-3px" :class="{ 'opacity-0 w-0': menu }"></span>
      <span class="block absolute top-19.5px left-0 w-6 h-3px" :class="{ '-rotate-45': menu }"></span>
    </div>
  </button>
</template>

<style scoped>
.menu-icon span {
  background-color: rgb(23, 43, 77);
  transition: all 0.3s ease 0s;
  transform-origin: left center;
  cursor: pointer;
}
</style>
