<script setup lang="ts">

const props = defineProps<{
  menu: boolean | null,
  tab: string | null,
}>();

const emit = defineEmits<{
  (e: 'toggle-menu'): void;
}>()

const menu = toRef(props, 'menu')
</script>

<template>
  <VNavigationDrawer @update:model-value="emit('toggle-menu')" border :elevation="5" v-model="menu" temporary location="top" class="h-50">
    <VContainer fluid class="pa-0 ma-0 h-100">
      <VRow class="pa-0 ma-0 h-100">
        <VCol cols="8" class="h-100 px-5 px-lg-16 pt-8 overflow-y-auto">
          <VCard rounded="0" :elevation="0" class="ml-lg-16">
            <h3 class="font-inter pb-4" style="font-size: 16px;">Explore the features that help your team succeed
            </h3>
            <VDivider color="secondary" />
            <VRow class="pt-4">
              <VCol cols="4" class="">
                <RouterLink to="/">
                  <VCard rounded="0" :elevation="0" class="py-4">
                    <div class="d-flex align-center">
                      <div class="pr-2">
                        <VIcon icon="mdi-cookie" />
                      </div>
                      <p>Views</p>
                    </div>
                    <p class="pl-1 mt-4" style="font-size: 12px;">View your team’s projects from every angle.</p>
                  </VCard>
                </RouterLink>
              </VCol>
              <VCol cols="4">
                <RouterLink to="/">
                  <VCard rounded="0" :elevation="0" class="py-4">
                    <div class="d-flex align-center">
                      <div class="pr-2">
                        <VIcon icon="mdi-robot" />
                      </div>
                      <p>Automation</p>
                    </div>
                    <p class="pl-1 mt-4" style="font-size: 12px;">Automate tasks and workflows with Buttler automation.</p>
                  </VCard>
                </RouterLink>
              </VCol>
              <VCol cols="4">
                <RouterLink to="/">
                  <VCard rounded="0" :elevation="0" class="py-4">
                    <div class="d-flex align-center">
                      <div class="pr-2">
                        <VIcon icon="mdi-firework" />
                      </div>
                      <p>Power-Ups</p>
                    </div>
                    <p class="pl-1 mt-4" style="font-size: 12px;">Power up your teams by linking their favourite tools with ProManager plugins.</p>
                  </VCard>
                </RouterLink>
              </VCol>
              <VCol cols="4">
                <RouterLink to="/">
                  <VCard rounded="0" :elevation="0" class="py-4">
                    <div class="d-flex align-center">
                      <div class="pr-2">
                        <VIcon icon="mdi-laptop" />
                      </div>
                      <p>Templates</p>
                    </div>
                    <p class="pl-1 mt-4" style="font-size: 12px;">Give your team blueprints for success with easy-to-use templates from industry leaders and the PM community.</p>
                  </VCard>
                </RouterLink>
              </VCol>
              <VCol cols="4">
                <RouterLink to="/">
                  <VCard rounded="0" :elevation="0" class="py-4">
                    <div class="d-flex align-center">
                      <div class="pr-2">
                        <VIcon icon="mdi-timeline" />
                      </div>
                      <p>Intergrations</p>
                    </div>
                    <p class="pl-1 mt-4" style="font-size: 12px;">Find the apps your team is already using or Discover new ways to get things done.</p>
                  </VCard>
                </RouterLink>
              </VCol>
            </VRow>
          </VCard>
        </VCol>
        <VCol cols="4" class="bg-background h-100 pt-8 pr-5 pr-lg-16 pl-2 pl-lg-6 overflow-y-auto">
          <VCard rounded="0" :elevation="0" class="bg-background mr-lg-16">
            <div>
              <h3 class="font-inter pb-4" style="font-size: 16px;">
                Welcome to <span class="font-space">ProManager<span class="text-primary" style="font-size: 12px;">.com</span></span>
              </h3>
              <VDivider color="secondary" />
            </div>
            <p class="font-inter pt-4 mb-1" style="font-size: 12px !important;">
              <span class="font-space">ProManager</span> makes it easy for your team to get work done.
              No matter the project, workflow, or type of team,
              Trello can help keep things organized. It’s simple – sign-up, create a board, and you’re off! Productivity
              awaits.
            </p>
            <VBtn variant="outlined" class="text-capitalize mt-4">Try ProManager</VBtn>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </VNavigationDrawer>
</template>
