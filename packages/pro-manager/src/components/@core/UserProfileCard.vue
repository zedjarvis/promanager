<script setup lang="ts">
import type { User } from '@/utils/types';

const props = defineProps<{
  user: User
  name: string
}>()

const user = toRef(props, 'user')
</script>

<template>
  <VCard border>
    <div class="h-450px! overflow-y-auto">
      <div class="grid md:grid-cols-6">
        <div class="md:col-span-2 pl-4 py-4 ">
          <VHover v-slot="{ isHovering, props }">
            <VCard rounded="pill" v-bind="props" height="100" width="100">
              <Avatar size="100" :name="name" />
              <VOverlay :model-value="isHovering" contained scrim="#036358" class="align-center justify-center">
                <VBtn size="small" variant="flat" class="text-capitalize">Edit</VBtn>
              </VOverlay>
            </VCard>
          </VHover>

        </div>
        <div class="md:col-span-4 py-4 pr-5">
          <p class="mb-1">
            <input id="first_name" name="first_name" type="text" placeholder="First Name" v-model="user!.first_name"
              autocomplete="true"
              class="rounded-none outline-none w-full px-1 text-xl font-bold font-space hover:bg-[rgb(var(--v-theme-secondary))] focus:bg-[rgb(var(--v-theme-secondary))]">
          </p>
          <p class="mb-1">
            <input id="last_name" name="last_name" type="text" placeholder="Last Name" v-model="user!.last_name"
              autocomplete="true"
              class="rounded-none outline-none w-full px-1 font-inter hover:bg-[rgb(var(--v-theme-secondary))] focus:bg-[rgb(var(--v-theme-secondary))]">
          </p>
          <p class="mb-1">
            <input id="email" name="email" type="email" placeholder="Email" v-model="user!.email" autocomplete="true"
              class="rounded-none outline-none w-full px-1 font-inter hover:bg-[rgb(var(--v-theme-secondary))] focus:bg-[rgb(var(--v-theme-secondary))]">
          </p>
          <p class="mb-1">
            <input id="address" name="address" type="text" placeholder="Address" v-model="user!.profile!.address"
              autocomplete="true"
              class="rounded-none outline-none w-full px-1 font-inter hover:bg-[rgb(var(--v-theme-secondary))] focus:bg-[rgb(var(--v-theme-secondary))]">
          </p>
          <p class="mb-1">
            <input id="phone_number" name="phone_number" type="tel" placeholder="Phone number"
              v-model="user!.profile!.phone_number" autocomplete="true"
              class="rounded-none outline-none w-full px-1 font-inter hover:bg-[rgb(var(--v-theme-secondary))] focus:bg-[rgb(var(--v-theme-secondary))]">
          </p>
          <p class="mb-1">
            <input id="hourly_rate" name="hourly_rate" type="tel" placeholder="Hourly rate" autocomplete="true"
              class="rounded-none outline-none w-full px-1 font-inter bg-[rgb(var(--v-theme-secondary))]">
          </p>
        </div>
      </div>
      <VDivider />
      <div class="pa-4">
        <div class="grid md:grid-cols-6 items-center mb-2">
          <div class="col-span-2 text-sm uppercase">User Role</div>
          <div class="col-span-4">
            <VSelect menu-icon="i-carbon-caret-down" :items="['Member', 'Manager', 'Admin']" rounded="0"
              variant="outlined" density="compact" single-line clearable value="Member"></VSelect>
          </div>
        </div>
        <div class="grid md:grid-cols-6 items-center mb-2">
          <div class="col-span-2 text-sm uppercase">Project Access (1)</div>
          <div class="col-span-4">
            <VSelect menu-icon="i-carbon-caret-down" :items="['Member', 'Manager', 'Admin']" rounded="0"
              variant="outlined" density="compact" single-line clearable value="Member"></VSelect>
          </div>
        </div>
        <div class="grid md:grid-cols-6 items-center mb-2">
          <div class="col-span-2 text-sm uppercase">Teams</div>
          <div class="col-span-4">
            <VSelect menu-icon="i-carbon-caret-down" :items="['Member', 'Manager', 'Admin']" rounded="0"
              variant="outlined" density="compact" single-line clearable value="Member"></VSelect>
          </div>
        </div>
        <div class="grid md:grid-cols-6 items-center mb-2">
          <div class="col-span-2 text-sm uppercase">Skills</div>
          <div class="col-span-4">
            <VSelect menu-icon="i-carbon-caret-down" :items="['Member', 'Manager', 'Admin']" rounded="0"
              variant="outlined" density="compact" single-line clearable value="Member"></VSelect>
          </div>
        </div>
      </div>
      <VDivider />
      <div class="pa-4">
        <p class="text-sm uppercase">Notes</p>
        <VTextarea rounded="0" variant="outlined" auto-grow rows="1"></VTextarea>
      </div>
    </div>

    <div class="flex justify-center px-4 py-3">
      <VBtn size="small" variant="flat" class="text-capitalize">Done</VBtn>
    </div>
  </VCard>
</template>
