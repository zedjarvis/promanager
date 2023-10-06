<script setup lang="ts">
import { useAppStore, useAuthStore } from '@/store';
import { useTheme } from 'vuetify';


const props = defineProps<{
  rail?: boolean
}>()

const emit = defineEmits<{
  (e: 'model-changed', value: boolean): void
}>()


const rail = toRef(props, 'rail')
const theme = useTheme()
const appStore = useAppStore()
const authStore = useAuthStore()
const { isDark } = storeToRefs(appStore)
const { currentUser } = storeToRefs(authStore)
const userMenu = ref(false)
const profileDialog = ref(false)

function toggleTheme() {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
  isDark.value = !isDark.value
}

async function Logout() {
  await authStore.logout()
}
</script>

<template>
  <VListItem id="user-menu-activator" aria-label="User Button" tabindex="0" :ripple="false" height="48" :active="false"
    active-class="active" class="flex items-center justify-start nav-link" :class="{ 'bg-surface': userMenu }"
    :title="currentUser?.first_name ? currentUser?.first_name : currentUser?.email">
    <template v-slot:prepend>
      <Avatar size="20" class="text-xs" :class="{ 'ml-n1': rail }" :name="authStore.getCurrentUserFullName" />
    </template>
  </VListItem>
  <VMenu @update:model-value="emit('model-changed', userMenu)" v-model="userMenu" activator="#user-menu-activator"
    :close-on-content-click="true" location="right">
    <VList rounded="0" width="225" border class="ml-1 pa-0">
      <VListSubheader><span class="uppercase text-xs">Account Settings</span></VListSubheader>
      <VDivider class="mx-3.5" />
      <MenuItem @click="toggleTheme" :title="isDark ? 'Enable light mode' : 'Enable dark mode'" />
      <VDivider class="mx-3.5" />
      <MenuItem @click="profileDialog = !profileDialog" title="Profile" />
      <VDivider class="mx-3.5" />
      <MenuItem title="Alerts" />
      <VDivider class="mx-3.5" />
      <MenuItem title="Security" />
      <VDivider class="mx-3.5" />
      <MenuItem title="Account" />
      <VDivider class="mx-3.5" />
      <MenuItem title="Manage Leads" />
      <VDivider class="mx-3.5" />
      <MenuItem title="Manage Users" />
      <VDivider class="mx-3.5" />
      <MenuItem title="Account Exports" />
      <VDivider class="mx-3.5" />
      <MenuItem title="Logout" @click="Logout" />
    </VList>
  </VMenu>


  <!-- USER PROFILE  -->
  <VDialog v-model="profileDialog" width="450" :scrim="false">
    <UserProfileCard :name="authStore.getCurrentUserFullName" :user="currentUser" />
  </VDialog>
</template>

<style lang="scss">
.nav-link {
  outline: none;
  border: 1px solid transparent !important;
  cursor: pointer;

  >.v-list-item-title {
    font-family: Inter, sans-serif !important;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.16px;
    line-height: 18.2px;
    vertical-align: top;
  }

  &:hover {
    background: rgb(var(--v-theme-surface));
    color: rgb(var(--v-theme-primary));
  }

  &:focus {
    border-color: rgb(var(--v-theme-primary));
    box-shadow: inset 0 0 0 2px rgb(var(--v-theme-primary, #b3f604)), inset 0 0 0 2px rgb(var(--v-theme-background, #101423))
  }

  &:active {
    border-color: rgb(var(--v-theme-primary));
    box-shadow: inset 0 0 0 2px rgb(var(--v-theme-primary, #b3f604)), inset 0 0 0 2px rgb(var(--v-theme-background, #101423))
  }

  &:target {
    border-color: rgb(var(--v-theme-primary));
    box-shadow: inset 0 0 0 2px rgb(var(--v-theme-primary, #b3f604)), inset 0 0 0 2px rgb(var(--v-theme-background, #101423))
  }

  >.v-list-item__overlay {
    display: none;
  }

  >.v-list-item__underlay {
    display: none;
  }
}
</style>

