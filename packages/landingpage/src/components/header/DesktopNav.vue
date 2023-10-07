<script setup lang="ts">
import { features, plans, resources, solutions } from '@/data/navItems';

const props = defineProps<{
  menu: boolean | null,
  tab: string | null,
}>();

const emit = defineEmits<{
  (e: 'toggle-menu'): void;
}>()

const { menu, tab } = toRefs(props)


</script>

<template>
  <VNavigationDrawer @update:model-value="emit('toggle-menu')" border :elevation="5" v-model="menu" temporary
    location="top" class="d-flex flex-grow-1! flex-shrink-1! h-max!">
    <VContainer fluid class="pa-0 ma-0 h-full!">
      <VRow no-gutters class="pa-0 ma-0 h-full!">
        <VCol cols="8" class="h-full! px-5 px-lg-16 pt-8 pb-16 overflow-y-auto">
          <VWindow v-model="tab">
            <VWindowItem value="features">
              <VCard rounded="0" :elevation="0" class="ml-lg-16">
                <h3 class="font-inter pb-4" style="font-size: 16px;">Explore the features that help your team succeed
                </h3>
                <VDivider color="secondary" />
                <VRow class="pt-4">
                  <VCol v-for="(feature, i) in features" :key="i" cols="4" class="">
                    <NavContentCard :icon="feature.icon" :title="feature.title" :text="feature.text" />
                  </VCol>
                </VRow>
              </VCard>
            </VWindowItem>

            <VWindowItem value="solutions">
              <VCard rounded="0" :elevation="0" class="ml-lg-16">
                <h3 class="font-inter pb-4" style="font-size: 16px;">
                  Take a page out of these pre-built PM playbooks designed for all teams
                </h3>
                <VDivider color="secondary" />
                <VRow class="pt-4">
                  <VCol v-for="(solution, i) in solutions" :key="i" cols="4" class="">
                    <NavContentCard :icon="solution.icon" :title="solution.title" :text="solution.text" />
                  </VCol>
                </VRow>
                <VBtn variant="text" class="group flex items-center!">See all teams
                  <VIcon class="group-hover:ml-2! mt-1.5 transition-all" icon="mdi-arrow-right" />
                </VBtn>
              </VCard>
            </VWindowItem>

            <VWindowItem value="plans">
              <VCard rounded="0" :elevation="0" class="ml-lg-16">
                <VRow class="pt-4">
                  <VCol v-for="(plan, i) in plans" :key="i" cols="4" class="">
                    <NavContentCard :icon="plan.icon" :color="plan.color" :title="plan.title" :text="plan.text" />
                  </VCol>
                </VRow>
                <VCard :elevation="0" class="d-flex justify-between w-full pa-3 pa-md-6">
                  <div>
                    <div class="d-flex align-center">
                      <div class="pr-2">
                        <VIcon color="amber" icon="mdi-lightning-bolt" />
                      </div>
                      <p class="pr-2">Free plan</p>
                    </div>
                    <p class="text-xs mt-2">For individuals or small teams looking to keep work organized</p>
                  </div>
                  <VBtn height="50" :ripple="false" variant="outlined" class="border-amber">Take a tour</VBtn>
                </VCard>
              </VCard>
            </VWindowItem>

            <VWindowItem value="resources">
              <VCard rounded="0" :elevation="0" class="ml-lg-16">
                <h3 class="font-inter pb-4" style="font-size: 16px;">
                  Learn & connect
                </h3>
                <VDivider color="secondary" />
                <VRow class="pt-4">
                  <VCol v-for="(resource, i) in resources" :key="i" cols="4" class="">
                    <NavContentCard :title="resource.title" :text="resource.text" />
                  </VCol>
                </VRow>
              </VCard>
            </VWindowItem>
          </VWindow>
        </VCol>
        <VCol cols="4" class="bg-background pt-8 pb-5 pr-5 pr-lg-16 pl-2 pl-lg-6 overflow-y-auto">
          <VCard rounded="0" :elevation="0" class="bg-background mr-lg-16 h-full!">
            <div>
              <h3 class="font-inter pb-4" style="font-size: 16px;">
                Welcome to <span class="font-space">ProManager<span class="text-primary"
                    style="font-size: 12px;">.com</span></span>
              </h3>
              <VDivider color="secondary" />
            </div>
            <p class="font-inter pt-4 mb-1" style="font-size: 12px !important;">
              <span class="font-space">ProManager</span> makes it easy for your team to get work done.
              No matter the project, workflow, or type of team,
              PM can help keep things organized. It’s simple – sign-up, create a board, and you’re off! Productivity
              awaits.
            </p>
            <VBtn variant="outlined" class="text-capitalize mt-4">Try ProManager</VBtn>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </VNavigationDrawer>
</template>
