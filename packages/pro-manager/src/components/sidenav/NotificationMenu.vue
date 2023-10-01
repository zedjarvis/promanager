<script setup lang="ts">
import { useAuthStore, useNotificationStore } from '@/store';


const props = defineProps<{
  rail?: boolean
}>()

const emit = defineEmits<{
  (e: 'model-changed', value: boolean): void
}>()

const authStore = useAuthStore()
const notifStore = useNotificationStore()
const { notifications } = storeToRefs(notifStore)
const { accessToken } = storeToRefs(authStore)

const rail = toRef(props, 'rail')
const notifMenu = ref(false)

const unread_count = computed(() => notifStore.unread.length)

// const { status, data, send, open, close } = useWebSocket(`ws://127.0.0.1:8000/ws/notifications/?token=${accessToken.value}`, {
//   heartbeat: true,
//   autoReconnect: true,
// })

onMounted(async () => {
  // get notifications for user
  await notifStore.get()
})
</script>

<template>
  <NavLinkItem id="notif-menu-activator" :rail="rail"
    :icon="unread_count > 0 ? 'i-carbon-notification-new' : 'i-carbon-notification'" title="Notifications"
    :class="{ 'bg-surface': notifMenu }" />

  <VMenu @update:model-value="emit('model-changed', notifMenu)" v-model="notifMenu" activator="#notif-menu-activator"
    location="right" :close-on-content-click="false" :offset="[5, 100]">
    <VCard :elevation="10" border width="500" height="350" class="position-relative font-inter">
      <div class="flex items-center justify-between w-full fixed top-0 left-1 pr-4">
        <VCardTitle class="font-space">Notifications</VCardTitle>
        <VIcon icon="i-carbon-settings" />
      </div>
      <div class="d-flex flex-column align-center justify-center w-full h-full">
        <VIcon size="xx-large" icon="i-carbon-notification" />
        <p>No notifications</p>
      </div>
    </VCard>
  </VMenu>
</template>
