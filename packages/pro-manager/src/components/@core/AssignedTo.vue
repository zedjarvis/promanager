<script setup lang="ts">
import { useUsersStore } from '@/store';
import { User } from '@/utils/types';

interface Props {
  assigned: User[]
  max?: number
  can_add?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  max: 2,
  can_add: false
})

const { max, can_add, assigned } = toRefs(props)

const userStore = useUsersStore()
const { users } = storeToRefs(userStore)
const menu = ref(false)

const assigned_count = computed(() => assigned?.value?.length)
const visible_avatars = computed(() => assigned.value ? assigned.value.slice(0, max.value) : [])
const hidden_avatars = computed(() => assigned.value ? assigned.value.slice(max.value) : [])

</script>


<template>
  <div class="flex items-center v-avatar-group">
    <Avatar v-for="(user, i) in visible_avatars" :key="i" :name="user?.first_name + ' ' + user?.last_name" size="35"
      :image="user?.avatar" />
    <!-- <tippy theme="material" placement="right" touch="hold"> -->
    <VAvatar v-if="hidden_avatars.length > 0 || can_add" size="35" color="secondary" variant="flat">+ {{
      hidden_avatars.length > 0 ? hidden_avatars.length : '' }}
      <VMenu v-if="can_add" activator="parent" v-model="menu" :close-on-content-click="false" location="left"
        :offset="[10, 0]">
        <VCard border width="300" class="pa-0">
          <div class="pa-3 mb-1">
            <VTextField class="mb-4" rounded="0" variant="solo-filled" placeholder="Search..." density="compact"
              hide-details>
              <template v-slot:prepend-inner>
                <VIcon size="small" icon="i-carbon-search" />
              </template>
            </VTextField>
            <p class="uppercase text-sm">Assigned to ({{ assigned_count ? assigned_count : 0 }})</p>
          </div>
          <VDivider />
          <div class="px-4 pt-4 mb-4 h-100px overflow-y-auto">
            <p v-for="(user, i) in users" :key="i" class="text-sm">
              <VIcon icon="i-carbon-checkbox" /> {{ user.first_name }} {{ user.last_name }}
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
    </VAvatar>

    <!-- <template v-if="(hidden_avatars.length > 0)" #content> -->
    <!-- <p v-for="(user, i) in hidden_avatars" :key="i" class="mb-1 flex items-center">
          <Avatar :name="user.first_name + ' ' + user.last_name" size="35" :image="user.avatar" />
          <span class="inline-block mx-3">{{ user.first_name + ' ' + user.last_name }}</span>
        </p> -->
    <!-- </template> -->
    <!-- </tippy> -->

  </div>
</template>

<style lang="scss">
// 👉 Avatar group
.v-avatar-group {
  >* {
    &:not(:first-child) {
      margin-inline-start: -0.8rem;
    }

    &:last-child {
      // margin-inline-start: -0.4rem;
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
