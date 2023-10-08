<script setup lang="ts">
import { features, plans, resources, solutions } from '@/data/navItems';
import { useAppStore } from '@store/app';


const emit = defineEmits<{
  (e: 'toggle-drawer'): void
}>()


const appStore = useAppStore()
const { drawer, tab } = storeToRefs(appStore)


function onModelUpdate() {
  tab.value = 'drawer'
  emit('toggle-drawer')
}
</script>

<template>
  <VNavigationDrawer @update:model-value="onModelUpdate" border v-model="drawer" temporary location="top" width="auto">

    <VContainer class="display-relative">

      <VWindow v-model="tab">

        <VWindowItem value="drawer">
          <VList class="px-2">
            <VListItem @click="tab = 'features'" height="50" title="Features" append-icon="mdi-chevron-right"></VListItem>
            <VDivider />
            <VListItem @click="tab = 'solutions'" height="50" title="Solutions" append-icon="mdi-chevron-right">
            </VListItem>
            <VDivider />
            <VListItem @click="tab = 'plans'" height="50" title="Plans" append-icon="mdi-chevron-right"></VListItem>
            <VDivider />
            <VListItem height="50" href="#pricing" title="Pricing"></VListItem>
            <VDivider />
            <VListItem @click="tab = 'resources'" height="50" title="Resources" append-icon="mdi-chevron-right">
            </VListItem>
            <VDivider />
            <VBtn height="50" class="my-4" rounded="0" color="primary" variant="flat" block>Start Free Trial</VBtn>
            <VBtn height="50" class="my-4" rounded="0" variant="outlined" block>Login</VBtn>
          </VList>
        </VWindowItem>


        <VWindowItem value="features">
          <div class="fixed top-0 left-0 w-full bg-white z-50 transition-all">
            <VBtn @click="tab = 'drawer'" variant="plain" :ripple="false" prepend-icon="mdi-arrow-left">Back</VBtn>
          </div>
          <VCard rounded="0" :elevation="0" class="pa-4 pt-8 pb-16 overflow-y-auto">
            <h3 class="font-inter pb-4" style="font-size: 16px;">Explore the features that help your team succeed
            </h3>
            <VDivider color="secondary" />
            <div v-for="(feature, i) in features" :key="i">
              <NavContentCard :icon="feature.icon" :title="feature.title" :text="feature.text" />
            </div>
          </VCard>
          <VCard rounded="0" :elevation="0" class="bg-background pa-4 mb-16">
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
        </VWindowItem>


        <VWindowItem value="solutions">
          <div class="fixed top-0 left-0 w-full bg-white z-50 transition-all">
            <VBtn @click="tab = 'drawer'" variant="plain" :ripple="false" prepend-icon="mdi-arrow-left">Back</VBtn>
          </div>
          <VCard rounded="0" :elevation="0" class="pa-4 pt-8 pb-16 overflow-y-auto">
            <h3 class="font-inter pb-4" style="font-size: 16px;">
              Take a page out of these pre-built PM playbooks designed for all teams
            </h3>
            <VDivider color="secondary" />
            <div v-for="(solution, i) in solutions" :key="i" class="">
              <NavContentCard :icon="solution.icon" :title="solution.title" :text="solution.text" />
            </div>
            <VBtn variant="text" class="group flex items-center!">See all teams
              <VIcon class="group-hover:ml-2! mt-1.5 transition-all" icon="mdi-arrow-right" />
            </VBtn>
          </VCard>
          <VCard rounded="0" :elevation="0" class="bg-background pa-4 mb-16">
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
        </VWindowItem>


        <VWindowItem value="plans">
          <div class="fixed top-0 left-0 w-full bg-white z-50 transition-all">
            <VBtn @click="tab = 'drawer'" variant="plain" :ripple="false" prepend-icon="mdi-arrow-left">Back</VBtn>
          </div>
          <VCard rounded="0" :elevation="0" class="pa-4 pt-8 pb-16 overflow-y-auto">
            <div v-for="(plan, i) in plans" :key="i" class="">
              <NavContentCard :icon="plan.icon" :color="plan.color" :title="plan.title" :text="plan.text" />
            </div>
            <VCard :elevation="0" class="d-flex flex-column flex-md-row justify-between w-full pa-3 pa-md-6">
              <div>
                <div class="d-flex align-center">
                  <div class="pr-2">
                    <VIcon color="amber" icon="mdi-lightning-bolt" />
                  </div>
                  <p class="pr-2">Free plan</p>
                </div>
                <p class="text-xs mt-2 mb-4">For individuals or small teams looking to keep work organized</p>
              </div>
              <VBtn height="50" :ripple="false" variant="outlined" class="border-amber">Take a tour</VBtn>
            </VCard>
          </VCard>
          <VCard rounded="0" :elevation="0" class="bg-background pa-4 mb-16">
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
        </VWindowItem>


        <VWindowItem value="resources">
          <div class="fixed top-0 left-0 w-full bg-white z-50 transition-all">
            <VBtn @click="tab = 'drawer'" variant="plain" :ripple="false" prepend-icon="mdi-arrow-left">Back</VBtn>
          </div>
          <VCard rounded="0" :elevation="0" class="pa-4 pt-8 pb-16 overflow-y-auto">
            <h3 class="font-inter pb-4" style="font-size: 16px;">
              Learn & connect
            </h3>
            <VDivider color="secondary" />
            <div v-for="(resource, i) in resources" :key="i" class="">
              <NavContentCard :title="resource.title" :text="resource.text" />
            </div>
          </VCard>
          <VCard rounded="0" :elevation="0" class="bg-background pa-4 mb-16">
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
        </VWindowItem>

      </VWindow>
    </VContainer>
  </VNavigationDrawer>
</template>
