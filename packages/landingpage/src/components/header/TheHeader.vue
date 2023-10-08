<script setup lang="ts">
// utilities
import { useAppStore } from '@/store/app';

// composables
import { useDisplay } from 'vuetify';

const appStore = useAppStore()
const { drawer, tab } = storeToRefs(appStore)
const { smAndDown } = useDisplay()


function include() {
  return [document.querySelector('.mobile-btn'), document.querySelector('.nav-dropdown'), document.querySelector('.mobile-dropdown')]
}

function onClickOutside() {
  tab.value = "drawer"
  drawer.value = false
}

function onTabClick(value: string): void {
  drawer.value = true
  tab.value = value
}

function toggleDrawer() {
  drawer.value = !drawer.value
  console.log('exec toggle drawer')
}
</script>

<template>
  <VAppBar scroll-behavior="elevate" height="60" class="pl-5 pl-md-10 align-center">
    <ContentBtn />
    <div class="mr-md-4">
      <TheLogo :sm-and-down="smAndDown" />
    </div>
    <VTabs v-click-outside="{ handler: onClickOutside, include }" v-model="tab" color="primary"
      class="font-inter d-none d-md-flex" :mandatory="false">
      <VTab @click="onTabClick('features')" class="nav-tab px-3" :ripple="false" value="features">Features
        <VIcon size="small" icon="mdi-chevron-down" />
      </VTab>
      <VTab @click="onTabClick('solutions')" class="nav-tab px-3" :ripple="false" value="solutions">Solutions
        <VIcon size="small" icon="mdi-chevron-down" />
      </VTab>
      <VTab @click="onTabClick('plans')" class="nav-tab px-3" :ripple="false" value="plans">Plans
        <VIcon size="small" icon="mdi-chevron-down" />
      </VTab>
      <VTab @click="drawer = false" href="#pricing" exact hide-slider class="nav-tab px-3" :ripple="false" value="pricing">
        Pricing</VTab>
      <VTab @click="onTabClick('resources')" class="nav-tab px-3" :ripple="false" value="resources">Resources
        <VIcon size="small" icon="mdi-chevron-down" />
      </VTab>
    </VTabs>
    <VSpacer></VSpacer>
    <VToolbarItems class="font-inter d-none d-md-flex">
      <VBtn class="rounded-0 text-[19.2px]! font-400!">Login</VBtn>
      <VBtn :ripple="false" color="primary" variant="flat" class="px-md-6 rounded-0 text-[19.2px]! font-400!">Start Free
        Trial <VIcon>
          mdi-arrow-right
        </VIcon>
      </VBtn>
    </VToolbarItems>
    <TheHumburger class="mobile-btn" :drawer="drawer" @toggle-drawer="toggleDrawer" />
  </VAppBar>

  <!-- MOBILE MENU  -->
  <MobileNav v-if="smAndDown" :tab="tab" @toggle-drawer="toggleDrawer" class="mobile-dropdown" />
  <!-- DESKTOP NAV  -->
  <DesktopNav v-else :tab="tab" @toggle-drawer="toggleDrawer" class="nav-dropdown" />
</template>

<style lang="scss">
.v-btn {
  text-transform: capitalize !important;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 24px;
  color: rgb(23, 43, 77);
  font-family: Inter;

  &:hover {
    color: rgb(var(--v-theme-primary));
  }

}
</style>
