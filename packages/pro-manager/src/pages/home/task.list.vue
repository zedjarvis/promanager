<script setup lang="ts">

definePage({
  name: 'HomeTaskList',
  meta: {
    canFilter: true,
  }
})

useHead({
  title: 'Task List'
})

// uitls

// composables

// components

// variables
const { height } = useWindowSize()

const pageHeight = computed(() => height.value - 50)
</script>

<template>
  <div class="h-100 w-100 overlow-x-auto">
    <VTable fixed-header fixed-footer density="comfortable" hover :height="pageHeight"
      class="text-sm border-b bg-background">
      <thead class="h-48px bg-background">
        <tr>
          <th class="bg-background">DONE</th>
          <th class="bg-background">TASK NAME</th>
          <th class="bg-background">ASSIGNEE</th>
          <th class="bg-background">STATUS</th>
          <th class="bg-background">%</th>
          <th class="bg-background">PRIORITY</th>
          <th class="bg-background">DUE</th>
          <th class="bg-background">
            <VIcon size="x-small" icon="i-carbon-chat" />
          </th>
          <th class="bg-background">
            <VIcon size="x-small" icon="i-carbon-attachment" />
          </th>
          <th class="bg-background text-right">
            <VIcon icon="i-carbon-audio-console" class="rotate-90" />
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="i in 5" :key="i">
          <VHover v-slot="{ isHovering, props }">
            <tr v-bind="props">
              <td class="relative! w-50px">
                <span class="absolute left-0 top-0 bottom-0.5 w-1 h-full bg-gray"></span>
                <span v-show="isHovering" class="handle absolute left-1 top-2.5 hover:text-[rgb(var(--v-theme-primary))]">
                  <VIcon icon="i-carbon-draggable" />
                </span>
                <VIcon class="ml-1.5 hover:text-[rgb(var(--v-theme-primary))]" size="x-large"
                  icon="i-carbon-checkbox-checked" />
              </td>
              <td class="w-48 text-left truncate">
                {{ i }} Some Task with Long Name
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </VHover>
        </template>
      </tbody>
      <tfoot>
        <tr>
          <td class="bg-background text-left">
            <VIcon size="x-large" icon="i-carbon-add-filled" class="ml-1.5 hover:text-[rgb(var(--v-theme-primary))]" />
          </td>
          <td class="bg-background"></td>
          <td class="bg-background"></td>
          <td class="bg-background"></td>
          <td class="bg-background"></td>
          <td class="bg-background"></td>
          <td class="bg-background"></td>
          <td class="bg-background"></td>
          <td class="bg-background"></td>
          <td class="bg-background"></td>
        </tr>
      </tfoot>
    </VTable>
  </div>
</template>

<style lang="scss">
table {
  display: table !important;
  /* border-collapse: collapse does not work when rows are dragged (transformed) */
  // border-collapse: separate !important;
}

tr {
  display: table-row !important;
  // height: 100% !important;
}

// tr[style*="transform"] {
//   border-collapse: separate !important;
//   height: 100%;
// }


tr>th:first-child,
tr>td:first-child {
  position: sticky !important;
  left: 0 !important;
  background-color: rgb(var(--v-theme-background)) !important;
}

.handle {
  &:hover {
    cursor: grab;
  }

  &:active {
    cursor: grabbing;
  }
}
</style>
