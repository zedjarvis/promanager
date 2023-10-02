<script setup lang="ts">

const props = defineProps<{
  rail?: boolean
}>()

const emit = defineEmits<{
  (e: 'model-changed', value: boolean): void
}>()

const rail = toRef(props, 'rail')
const addMenu = ref(false)
const taskDialog = ref(false)
const projectDialog = ref(false)
const leadDialog = ref(false)
const inviteDialog = ref(false)


</script>

<template>
  <VMenu @update:model-value="emit('model-changed', addMenu)" v-model="addMenu" location="right"
    :close-on-content-click="true">

    <template v-slot:activator="{ props }">
      <NavLinkItem v-bind="props" :rail="rail" icon="i-carbon-add" title="New" :class="{ 'bg-surface': addMenu }" />
    </template>
    <VList rounded="0" border width="225" class="ml-1 pa-0">
      <VListSubheader><span class="uppercase text-xs">Actions</span></VListSubheader>
      <VDivider class="mx-3.5" />
      <!-- 👉 CREATE TASK  -->
      <MenuItem @click="taskDialog = !taskDialog" title="Task">
      <span class="text-primary h-28px! border px-1 rounded">t</span>
      </MenuItem>
      <VDivider class="mx-3.5" />

      <!-- 👉 CREATE LEAD  -->
      <MenuItem @click="leadDialog = !leadDialog" title="Lead">
      <div class="text-primary h-28px! border px-1 rounded">l</div>
      </MenuItem>
      <VDivider class="mx-3.5" />

      <!-- 👉 CREATE PROJECT  -->
      <MenuItem @click="projectDialog = !projectDialog" title="Project">
      <div class="text-primary h-28px! border px-1 rounded">p</div>
      </MenuItem>
      <VDivider class="mx-3.5" />

      <!-- 👉 INVITE USER  -->
      <MenuItem @click="inviteDialog = !inviteDialog" title="Invite">
      <div class="text-primary h-28px! border px-1 rounded">i</div>
      </MenuItem>
    </VList>
  </VMenu>

  <!-- 👉 CREATE NEW TASK MODAL  -->
  <VDialog absolute eager no-click-animation v-model="taskDialog" transition="dialog-top-transition" persistent
    :scrim="false" width="450">
    <CreateTaskCard @close="taskDialog = false" />
  </VDialog>

  <!-- 👉 CREATE NEW LEAD MODAL  -->
  <VDialog absolute eager no-click-animation v-model="leadDialog" scrollable transition="dialog-top-transition"
    :scrim="false" width="450">
    <CreateLeadCard @close="leadDialog = false" />
  </VDialog>

  <!-- 👉 CREATE NEW PROJECT MODAL  -->
  <VDialog absolute eager no-click-animation v-model="projectDialog" persistent transition="dialog-top-transition"
    :scrim="false" width="450">
    <CreateProjectCard @close="projectDialog = false" />
  </VDialog>

  <!-- 👉 INVITE NEW USER MODAL  -->
  <VDialog absolute eager no-click-animation v-model="inviteDialog" persistent transition="dialog-top-transition"
    :scrim="false" width="800">
    <InviteUserCard @close="inviteDialog = false" />
</VDialog></template>
