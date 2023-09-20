<script setup lang="ts">
// utilities
import { ref } from 'vue';

// composables
import { useDisplay } from 'vuetify';

const { smAndDown } = useDisplay()

const menu = ref<boolean | null>(null)
const tab = ref<string | null>(null)

function include() {
  return [document.querySelector('.mobile-btn'), document.querySelector('.nav-dropdown')]
}

function onClickOutside() {
  tab.value = null
  menu.value = false
}

function onTabClick(value: string): void {
  menu.value = true
  tab.value = value
}

function toggleMenu() {
  menu.value = !menu.value
  console.log('exec toggle menu')
}
</script>

<template>
  <VAppBar scroll-behavior="elevate" height="60" class="pl-5 pl-md-10">
    <ContentBtn />
    <div class="mr-md-4">
      <TheLogo :sm-and-down="smAndDown" />
    </div>
    <VTabs v-click-outside="{ handler: onClickOutside, include }" v-model="tab" color="primary"
      class="font-inter d-none d-md-flex" :mandatory="false">
      <VTab @click="onTabClick('features')" class="nav-tab px-3" :ripple="false" value="features">Features
        <VIcon icon="mdi-chevron-down" />
      </VTab>
      <VTab @click="onTabClick('solutions')" class="nav-tab px-3" :ripple="false" value="solutions">Solutions
        <VIcon icon="mdi-chevron-down" />
      </VTab>
      <VTab @click="onTabClick('plans')" class="nav-tab px-3" :ripple="false" value="plans">Plans
        <VIcon icon="mdi-chevron-down" />
      </VTab>
      <VTab @click="menu = false" href="#pricing" exact hide-slider class="nav-tab px-3" :ripple="false"
        value="pricing">
        Pricing</VTab>
      <VTab @click="onTabClick('resources')" class="nav-tab px-3" :ripple="false" value="resources">Resources
        <VIcon icon="mdi-chevron-down" />
      </VTab>
    </VTabs>
    <VSpacer></VSpacer>
    <VToolbarItems class="font-inter d-none d-md-flex">
      <VBtn class="">Login</VBtn>
      <VBtn :ripple="false" color="primary" variant="flat" class="px-md-6 rounded-0">Start Free Trial <VIcon>
          mdi-arrow-right
        </VIcon>
      </VBtn>
    </VToolbarItems>
    <VBtn :ripple="false" variant="plain" :icon="menu ? 'mdi-close' : 'mdi-menu'"
      class="mobile-btn d-sm-flex d-md-none ma-0" @click="toggleMenu"></VBtn>
  </VAppBar>

  <!-- MOBILE MENU  -->
  <MobileNav v-if="smAndDown" :menu="menu" @toggle-menu="toggleMenu" />
  <!-- DESKTOP NAV  -->
  <DesktopNav v-else :menu="menu" :tab="tab" @toggle-menu="toggleMenu" class="nav-dropdown" />
</template>

<style lang="scss">
.v-btn {
  text-transform: capitalize !important;
  font-size: 14px !important;
  appearance: none;
  user-select: none;

  &:hover {
    color: rgb(var(--v-theme-primary));
  }

}
</style>
