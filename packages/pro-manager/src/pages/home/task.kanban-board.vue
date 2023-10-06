<script setup lang="ts">
// page opgions # unplugin vue router
definePage({
  name: 'HomeBoard',
  meta: {
    canFilter: false,
    isHome: true,
  }
})

useHead({
  title: 'Board',
})


import { Container, Draggable } from 'vue3-smooth-dnd';
// import { applyDrag, generateItems.value, generateWords } from '../utils/helpers'
// import KanbanItem from '../components/KanbanItem.vue';

// mock
let items = ref({
  type: 'container',
  props: {
    orientation: 'horizontal'
  },
  children: generateItems(8, (i: any) => ({
    id: `column${i}`,
    type: 'container',
    name: "Awesome Name",
    props: {
      orientation: 'vertical',
    },
    children: generateItems(+(Math.random() * 10).toFixed() + 5, (j: any) => ({
      type: 'draggable',
      id: `${i}${j}`,
      loading: false,
      data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, praesentium!"
    }))
  }))
})

function applyDrag(arr: any, dragResult: any) {
  const { removedIndex, addedIndex, payload } = dragResult
  if (removedIndex === null && addedIndex === null) return arr

  const result = [...arr]
  let itemToAdd = payload

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0]
  }

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd)
  }

  return result
}

function generateItems(count: any, creator: any) {
  const result = []
  for (let i = 0; i < count; i++) {
    result.push(creator(i))
  }
  return result
}

// function getColumnHeightPx() {
//   let kanban = document.getElementById('kanbanContainer');
//   return kanban ? kanban.offsetHeight - 122 : 0;
// }

function onColumnDrop(dropResult: any): void {
  const scene = Object.assign({}, items.value)
  scene.children = applyDrag(scene.children, dropResult)
  items.value = scene
}
function onCardDrop(columnId: any, dropResult: any) {

  // check if element where ADDED or REMOVED in current collumn
  if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {

    const scene = Object.assign({}, items.value)
    const column = scene.children.filter((p: any) => p.id === columnId)[0]
    const itemIndex = scene.children.indexOf(column)
    const newColumn = Object.assign({}, column)

    // check if element was ADDED in current column
    if ((dropResult.removedIndex == null && dropResult.addedIndex >= 0)) {
      // your action / api call
      dropResult.payload.loading = true
      // simulate api call
      setTimeout(function () { dropResult.payload.loading = false }, (Math.random() * 5000) + 1000);
    }

    newColumn.children = applyDrag(newColumn.children, dropResult)
    scene.children.splice(itemIndex, 1, newColumn)
    items.value = scene
  }
}
function getCardPayload(columnId: any) {
  return (index: any) => {
    return items.value.children.filter((p: any) => p.id === columnId)[0].children[index]
  }
}

const { height } = useWindowSize()

const cHeight = computed(() => height.value - 49)
</script>

<template>
  <Container :style="{ 'height': `${cHeight}px` }" class="h-full flex overflow-x-auto gap-0  p-0" group-name="cols"
    tag="div" orientation="horizontal" @drop="onColumnDrop($event)">
    <Draggable class="bg-background border rounded-0 h-full w-96 flex-shrink-0" v-for="column in items.children"
      :key="column.id">
      <div class="h-full flex flex-col">
        <!-- header-->
        <div class="cursor-move h-48px p-3 space-x-4 bg-background border-b flex space-x-2">
          <VIcon icon="i-carbon-draggable"></VIcon>
          <span class="text-lg">{{ column.name }}</span>
        </div>
        <!-- column -->
        <Container class="flex-grow overflow-y-auto overflow-x-hidden" group-name="col-items"
          :shouldAcceptDrop="(e: any, payload: any) => (e.groupName === 'col-items' && !payload.loading)"
          :get-child-payload="getCardPayload(column.id)" :drop-placeholder="{
            className:
              `bg-[url('/drop-bg.gif')] bg-opacity-20
            border-dotted border
            border-primary mx-4 my-2`,
            animationDuration: '200',
            showOnTop: true
          }" drag-class="bg-background
            border border-dashed text-white
            transition duration-100 ease-in z-50
            transform scale-110" drop-class="transition duration-100
            ease-in z-50 transform
             scale-90" @drop="(e: Event) => onCardDrop(column.id, e)">

          <!-- Items.value -->
          <Draggable v-for="item in column.children" :key="item.id">
            <div class="cursor-move border-b p-4">
              <span>{{ item.id }}</span>
              <p>{{ item.data }}</p>
            </div>
          </Draggable>
        </Container>
      </div>
    </Draggable>
  </Container>
</template>


<style>
/** NB: dont remove,
* When using orientation="horizontal" it auto sets "display: table"
* In this case we need flex and not display table
*/
.smooth-dnd-container.horizontal {
  display: flex !important;
}
</style>
