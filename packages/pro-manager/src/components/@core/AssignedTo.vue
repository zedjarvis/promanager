<script setup lang="ts"></script>


<template>
  <div class="v-avatar-group">
    <Avatar v-for="i in 1" :key="i" name="Cedrouse Omondi" size="35" />
    <VAvatar id="assign-menu-activator" size="35" color="primary" variant="tonal">+</VAvatar>
  </div>

  <VMenu activator="#assign-menu-activator" :close-on-content-click="false" location="left" :offset="[10, 0]">
    <VCard border width="300" class="pa-0">
      <div class="pa-3 mb-1">
        <VTextField class="mb-4" rounded="0" variant="solo-filled" placeholder="Search..." density="compact" hide-details>
          <template v-slot:prepend-inner>
            <VIcon size="small" icon="i-carbon-search" />
          </template>
        </VTextField>
        <p class="uppercase text-sm">Assigned to (1)</p>
      </div>
      <div class="px-4 mb-4 h-100px overflow-y-auto">
        <p v-for="i in 2" :key="i" class="text-sm">
          <VIcon color="primary" icon="i-carbon-checkbox-checked" /> Cedrouseroll Omondi
        </p>
      </div>
      <VDivider />
      <div class="px-4 pt-4 mb-4 h-100px overflow-y-auto">
        <p v-for="i in 5" :key="i" class="text-sm">
          <VIcon icon="i-carbon-checkbox" /> Cedrouseroll Omondi
        </p>
      </div>
      <VDivider />
      <div class="d-flex align-center justify-end pa-3">
        <VBtn color="on-surface" variant="plain" size="small" rounded="0" class="text-capitalize pa-0">
          <VIcon icon="i-carbon-add" /> Add People
        </VBtn>
      </div>
    </VCard>
  </VMenu>
</template>

<style lang="scss">
// 👉 Avatar group
.v-avatar-group {
  display: flex;
  align-items: center;

  >* {
    &:not(:first-child) {
      margin-inline-start: -0.8rem;
    }

    &:last-child {
      margin-inline-start: -0.4rem;
      background-color: rgb(var(--v-theme-background));
    }

    transition: transform 0.25s ease,
    box-shadow 0.15s ease;

    &:hover:not(:last-child) {
      z-index: 2;
      transform: translateY(-5px) scale(1.05);
    }
  }

  >.v-avatar {
    border: 2px solid rgb(var(--v-theme-surface));
    cursor: pointer;
  }
}
</style>
