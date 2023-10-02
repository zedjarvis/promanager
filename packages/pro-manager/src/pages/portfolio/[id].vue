<script setup lang="ts">
// page opgions # unplugin vue router
definePage({
  name: 'ProjectTasks',
  meta: {
    canFilter: true,
  }
})


// uitls
import { applyDrag } from '@/utils/helpers';
import type { Task } from '@/utils/types';
// composables
import { useParams, type RouteParams } from '@/composables';
import { useProjectStore, useTaskStore } from '@/store';

// plugins
import { Container, Draggable } from 'vue3-smooth-dnd';


// plugins

// variables
const projectStore = useProjectStore()
const taskStore = useTaskStore()
const { projects } = storeToRefs(projectStore)
const { showTask, currentTask } = storeToRefs(taskStore)
const params = useParams<RouteParams<'ProjectTasks'>>()
const isLoading = ref(true)


const tasks = computed({
  get: () => (projects.value.find((p) => p.id == params.value.id))?.tasks,
  set: (val) => (projects.value.find((p) => p.id == params.value.id))!.tasks = val
})

function onDrop(dropResults: any) {
  tasks.value = applyDrag(tasks.value, dropResults)
}

function resetTasks() {
  projectStore.$reset()
}

function toggleTaskDetail(task: Task) {
  currentTask.value = task
  showTask.value = true
}


onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1500)
})

watch(params, () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 1500)
})

</script>

<template>
  <VContainer fluid class="pa-0 ma-0 w-full h-full">
    <VSkeletonLoader :loading="isLoading" type="table-thead, table-tbody" class="bg-background">
      <div class="grid grid-cols-12 w-full h-48px items-center border sticky! top-49px bg-background z-50 text-sm">
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
          <VIcon v-tippy="{ content: 'Reset', theme: 'light' }" @click="resetTasks" class="mx-2 absolute right-0"
            icon="i-carbon-reset" />
        </div>
      </div>
      <Container tag="div" @drop="onDrop" class="w-full! border" drag-handle-selector=".drag-handle"
        drag-class="border border-dashed cursor-grabbing bg-background transition duration-100 ease-in scale-102"
        drop-class="transition duration-100
            ease-in z-50 transform
             scale-100" :drop-placeholder="{
               className:
                 `bg-surface
            border-dashed border-2 bg-contain bg-repeat
            border-[rgb(var(--v-theme-primary))] w-full m-2`,
               animationDuration: '200',
               showOnTop: true
             }">
        <Draggable v-for="(task, i) in tasks" :key="i">
          <div @click="toggleTaskDetail(task)" :class="{ 'bg-surface opacity-70': currentTask.id == task.id && showTask }"
            class="group grid grid-cols-12 w-full cursor-pointer h-44px items-center border-b bg-background hover:bg-[rgb(var(--v-theme-surface))]/30">
            <div class="relative! h-full flex items-center sticky left-0">
              <span class="absolute left-0 top-0 bottom-0.5 w-1 h-full bg-gray"></span>
              <span
                class="drag-handle hidden group-hover:flex absolute left-1 top-2.5 hover:text-[rgb(var(--v-theme-primary))]">
                <VIcon icon="i-carbon-draggable" />
              </span>
              <VIcon @click.stop="task.done = !task.done" class="ml-6 hover:text-[rgb(var(--v-theme-primary))]"
                size="x-large" :icon="task.done ? 'i-carbon-checkbox-checked' : 'i-carbon-checkbox'" />
            </div>
            <div class="col-span-4 pr-4 inline-block w-full truncate" :class="{ 'line-through': task.done }">{{ task.name
            }}
            </div>
            <div>
              <AssignedTo :assigned="task.users" />
            </div>
            <div class="capitalize">{{ task.status }}</div>
            <div>{{ task.done ? '100%' : task.percentage }}</div>
            <div class="capitalize">{{ task.priority }}</div>
            <div>Sep 28</div>
            <div>
              3
            </div>
            <div>
              4
            </div>
          </div>
        </Draggable>
        <div class="group grid grid-cols-12 items-center sticky bottom-0 bg-background h-44px border w-full z-50">
          <div class="flex items-center">
            <VIcon size="x-large" icon="i-carbon-add-filled" class="ml-6 hover:text-[rgb(var(--v-theme-primary))]" />
          </div>
          <div class="col-span-4"><input type="text" placeholder="New Task" class="w-full border-none outline-none"></div>
        </div>
      </Container>
    </VSkeletonLoader>
  </VContainer>
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
