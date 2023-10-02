<script setup lang="ts">
import { useRouteMeta } from '@/composables';
import { DRAWER, HOME_CURRENT_PATH, HOME_DEFAULT_PATH, RAIL } from '@/constants';
import { useProjectStore, useTaskStore, useUsersStore } from '@/store';
import { useDisplay } from 'vuetify';

const rail = useLocalStorage(RAIL, false)
const drawer = useLocalStorage(DRAWER, true)
const home_path = useLocalStorage(HOME_CURRENT_PATH, HOME_DEFAULT_PATH)
const menu = ref(false)
const nMenu = ref(false)
const uMenu = ref(false)
const aMenu = ref(false)
const hMenu = ref(false)
const showPortfolio = useLocalStorage('portfolio-dropdown-open', false)
const topListRef = ref<HTMLElement | null>()
const bottomListRef = ref<HTMLElement | null>()


const userStore = useUsersStore()
const projectStore = useProjectStore()
const taskStore = useTaskStore()
const { projects } = storeToRefs(projectStore)
const { showTask, currentTask } = storeToRefs(taskStore)
const routeMeta = useRouteMeta()
const windowSize = useWindowSize()
const topListSize = useElementSize(topListRef)
const bListSize = useElementSize(bottomListRef)
const { smAndDown } = useDisplay()
const menuOPen = computed(() => uMenu.value == true || aMenu.value == true || hMenu.value == true || nMenu.value == true)


// get height for portfolio dropdown list
const portfolioDropdownHeight = computed(() => {
  let height = windowSize.height.value - (topListSize.height.value + bListSize.height.value + 48)
  if (height <= 50) return 'auto' // height too small use overlow top list
  else return height // height reasonable overlow dropdown list
})


// open drawer on mobile but toggle rail on desktop
function handleToggleDrawer() {
  if (smAndDown.value) drawer.value = !drawer.value
  else rail.value = !rail.value
}

// handles toggling of notification menu
function handlNotifMenu(value: boolean) {
  nMenu.value = !nMenu.value
  if (menu.value && menuOPen.value) return
  else menu.value = !value
}

// handles toggling of add item menu
function handleAddMenu(value: boolean) {
  aMenu.value = !aMenu.value
  if (menu.value && menuOPen.value) return
  else menu.value = !value
}

// handles toggling of help menu
function handleHelpMenu(value: boolean) {
  hMenu.value = !hMenu.value
  if (menu.value && menuOPen.value) return
  else menu.value = !value
}

// handles toggling of user menu
function handleUserMenu(value: boolean) {
  uMenu.value = !uMenu.value
  if (menu.value && menuOPen.value) return
  else menu.value = !value
}


onMounted(async () => {
  await userStore.getUsers()
  await projectStore.getProjects()
  await taskStore.getTasks()
})
</script>

<template>
  <!-- 👉 TASK DETAIL VIEW  -->
  <VNavigationDrawer :elevation="24" :scrim="false" location="right" v-model="showTask" class="w-3/5!" temporary>
    <VToolbar height="48" class="border-b bg-surface align-center pr-3">
      <VSpacer></VSpacer>
      <VIcon size="small" icon="i-carbon-overflow-menu-vertical" />
      <span class="d-inline-block w-0.5 h-15px mx-2 bg-[rgb(var(--v-theme-on-surface))] opacity-50"></span>
      <VIcon @click="showTask = false" size="small" icon="i-carbon-close" />
    </VToolbar>
    <p>{{ currentTask.name }}</p>
  </VNavigationDrawer>


  <!-- 👉 TOP NAVIGATION  -->
  <VAppBar tag="header" :elevation="0" height="48" class="bg-background pa-0 border-b align-center">

    <!-- 👉 APP LOGO  -->
    <TheLogo :mobile="smAndDown" :minimize="rail" @toggle-rail="handleToggleDrawer" />

    <!-- 👉 TOP NAVIGATION LINKS  -->
    <div class="grid md:grid-cols-3 items-center w-full">
      <div class="col-span-1 hidden md:flex"></div>
      <div class="col-span-1 hidden md:flex items-center justify-center">
        <TopLink v-tippy="{ content: 'MY SUMMARY', theme: 'light' }" icon="i-carbon-user-activity" url="/home/my-summary"
          @click="home_path = '/home/my-summary'" />
        <TopLink v-tippy="{ content: 'PORTFOLIO SUMMARY', theme: 'light' }" icon="i-carbon-business-processes"
          url="/home/portfolio-summary" @click="home_path = '/home/portfolio-summary'" />
        <span class="d-inline-block w-0.5 h-15px bg-[rgb(var(--v-theme-on-background))] opacity-50"></span>
        <TopLink v-tippy="{ content: 'LIST', theme: 'light' }" icon="i-carbon-list" url="/home/task/list"
          @click="home_path = '/home/task/list'" />
        <TopLink class="rotate-90" v-tippy="{ content: 'BOARD', theme: 'light' }" icon="i-carbon-roadmap"
          url="/home/task/kanban-board" @click="home_path = '/home/task/kanban-board'" />
        <TopLink v-tippy="{ content: 'CALENDAR', theme: 'light' }" icon="i-carbon-calendar" url="/home/task/calendar"
          @click="home_path = '/home/task/calendar'" />
        <TopLink v-tippy="{ content: 'FILES', theme: 'light' }" icon="i-carbon-document-blank" url="/home/task/files"
          @click="home_path = '/home/task/files'" />
        <TopLink v-tippy="{ content: 'SETTINGS', theme: 'light' }" icon="i-carbon-add" url="" @click="() => { }" />
      </div>
      <div class="col-span-1 flex shrink items-center justify-end">
        <VBtn size="small" rounded="0" color="primary" variant="flat" class="d-none d-md-flex mr-2 text-capitalize">
          Buy Now
        </VBtn>
        <VBtn v-show="routeMeta.canFilter" color="on-background" icon variant="plain" :ripple="false">
          <VIcon size="x-small" icon="i-carbon-view" />
        </VBtn>
        <VBtn v-show="routeMeta.canFilter" color="on-background" icon variant="plain" :ripple="false">
          <VIcon size="x-small" icon="i-carbon-filter" />
        </VBtn>
        <VBtn class="ma-0" color="on-background" icon variant="plain" :ripple="false">
          <VIcon size="x-small" icon="i-carbon-search" />
        </VBtn>
      </div>
    </div>

  </VAppBar>

  <!-- 👉 SIDE NAVIGATION  -->
  <VNavigationDrawer tag="nav" v-model="drawer" :expand-on-hover="true" :rail="smAndDown ? false : rail" rail-width="48"
    width="256" :elevation="0" floating class="group bg-nav-background" :class="{ 'w-256px!': menu }">

    <!-- 👉 TOP LINKS  -->
    <VList ref="topListRef" class="pa-0">
      <NavLink :rail="rail" icon="i-carbon-home" title="Home" :url="home_path" />
      <NotificationMenu :rail="rail" @model-changed="handlNotifMenu" />
      <NavLink :rail="rail" icon="i-carbon-time" title="Time" url="/timesheet" />
      <VDivider />
      <NavLink :rail="rail" icon="i-carbon-user-multiple" title="Team" url="/team" />
      <NavLink :rail="rail" icon="i-carbon-portfolio" title="Portfolio" url="/portfolio">
        <div @click.prevent.stop="showPortfolio = !showPortfolio"
          class="border-2 border-transparent hover:border-[rgb(var(--v-theme-primary))] hover:text-[rgb(var(--v-theme-primary))]">
          <VIcon :icon="showPortfolio ? 'i-carbon-caret-down' : 'i-carbon-caret-left'" />
        </div>
      </NavLink>
    </VList>

    <!-- 👉 PORTFOLIO DROPDOWN  -->
    <VExpandTransition>
      <VList v-show="showPortfolio" class="pa-0 overflow-y-auto position-relative" :max-height="portfolioDropdownHeight"
        :class="{ 'hidden group-hover:block': rail && !menu }">
        <template v-for="(project, i) in projects" :key="i">
          <div class="h-12 pl-12 flex relative">
            <span vertical class="absolute left-0 top-0 inline-block h-0.5 w-48px border-b -rotate-90"></span>
            <span class="absolute left-6 top-24px inline-block w-5 h-0.5 border-b"></span>
            <RouterLink :to="`/portfolio/${project.id}`"
              class="inline-block w-full pl-2 py-3 truncate hover:bg-[rgb(var(--v-theme-surface))]">
              {{ project.name }}
            </RouterLink>
          </div>
        </template>
      </VList>
    </VExpandTransition>


    <!-- 👉 BOTTOM LINKS  -->
    <template v-slot:append>
      <VList ref="bottomListRef" class="pa-0">
        <AddMenu :rail="rail" @model-changed="handleAddMenu" />
        <HelpMenu :rail="rail" @model-changed="handleHelpMenu" />
        <UserMenu :rail="rail" @model-changed="handleUserMenu" />
      </VList>
    </template>
  </VNavigationDrawer>
  <VMain>
    <RouterView />
  </VMain>
</template>
