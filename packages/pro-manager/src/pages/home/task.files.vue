<script setup lang="ts">
// page opgions # unplugin vue router
definePage({
  name: 'HomeFiles',
  meta: {
    canFilter: false,
  }
})

// uitls

// composables

// plugins
import { Container, Draggable } from 'vue3-smooth-dnd';

// variables

</script>

<template>
  <div class="table w-full h-full">
    <div class="grid grid-cols-12 w-full h-48px items-center border-b sticky! top-49px bg-background z-50 text-sm">
      <div class="pl-2">DONE</div>
      <div class="col-span-4">TASK NAME</div>
      <div>ASSIGNEE</div>
      <div>STATUS</div>
      <div>%</div>
      <div>PRIORITY</div>
      <div>DUE</div>
      <div>
        <VIcon size="x-small" icon="i-carbon-chat" />
      </div>
      <div class="relative">
        <VIcon size="x-small" icon="i-carbon-attachment" />
        <VIcon icon="i-carbon-settings-adjust" class="absolute right-0 mx-1" />
      </div>
    </div>
    <Container tag="div" class="h-inherit! w-inherit!" drag-handle-selector=".drag-handle" lock-axis="y"
      drag-class="border border-dashed bg-background transition duration-100 ease-in scale-102" drop-class="transition duration-100
            ease-in z-50 transform
             scale-100" :drop-placeholder="{
               className:
                 `bg-[url('/pm-white.svg')]
            border-dotted border bg-contain bg-repeat
            border-primary h-44px w-full`,
               animationDuration: '200',
               showOnTop: true
             }">
      <Draggable v-for="i in 5" :key="i">
        <div class="group grid grid-cols-12 w-full h-44px items-center border-b">
          <div class="relative! h-full flex items-center sticky left-0">
            <span class="absolute left-0 top-0 bottom-0.5 w-1 h-full bg-gray"></span>
            <span
              class="drag-handle hidden group-hover:flex absolute left-1 top-2.5 hover:text-[rgb(var(--v-theme-primary))]">
              <VIcon icon="i-carbon-draggable" />
            </span>
            <VIcon class="ml-6 hover:text-[rgb(var(--v-theme-primary))]" size="x-large"
              icon="i-carbon-checkbox-checked" />
          </div>
          <div class="col-span-4 pr-4 inline-block w-full truncate">{{ i }} Some Awesome Task with Long Name
          </div>
          <div>
            <AssignedTo />
          </div>
          <div>OPEN</div>
          <div></div>
          <div>High</div>
          <div>Sep 28</div>
          <div>
            3
          </div>
          <div>
            4
          </div>
        </div>
      </Draggable>
    </Container>
    <div class="grid grid-cols-12 items-center sticky bottom-0 bg-background h-44px border w-full z-50">
      <div class="flex items-center">
        <VIcon size="x-large" icon="i-carbon-add-filled" class="ml-6 hover:text-[rgb(var(--v-theme-primary))]" />
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.drag-handle {
  &:hover {
    cursor: grab;
  }

  &:active {
    cursor: grabbing;
  }
}
</style>
