<script setup lang="ts">
import whcImg from '@assets/images/WomenWhoCode_logo.svg';

const step = ref(1)

function increase() {
  if (step.value == 3) step.value = 1
  else step.value++
}

function decrease() {
  if (step.value == 1) step.value = 3
  else step.value--
}
</script>
<template>
  <div class="w-full flex flex-col space-y-5 px-3 pt-16">
    <div class="w-full flex justify-end space-x-4!">
      <div class="dots flex items-center space-x-2">
        <button @click="step = 1" class="inline-block w-2 h2 rounded-full transition-all"
          :class="{ 'w-60px! opacity-50': step == 1 }"></button>
        <button @click="step = 2" class="inline-block w-2 h2 rounded-full transition-all"
          :class="{ 'w-60px! opacity-50': step == 2 }"></button>
        <button @click="step = 3" class="inline-block w-2 h2 rounded-full transition-all"
          :class="{ 'w-60px! opacity-50': step == 3 }"></button>
      </div>
      <VBtn @click="decrease" color="#35bada" variant="tonal" size="x-small" icon="mdi-chevron-left"></VBtn>
      <VBtn @click="increase" color="#35bada" variant="tonal" size="x-small" icon="mdi-chevron-right"></VBtn>
    </div>
    <div class="w-full">
      <VCard :elevation="5" class="w-full! pa-0 rounded-lg">
        <div class="w-full h-fit grid grid-cols-1 md:grid-cols-6 divide-x">
          <figure class="flex flex-col col-span-4 py-10 px-8 bg-no-repeat bg-[url(/images/testimony-bg.svg)]">
            <blockquote>
              <p class="text-24px leading-36px">[PM is] great for simplifying complex processes. As a manager, I can
                chunck [processes] down into bite sized pieces for my team and then delegate that out, but still keep a
                bird's eye view.</p>
            </blockquote>
            <figcaption
              class="w-full mt-16 pt-13 before:block before:content-[''] before:mb-4 before:h-px before:max-w-36 before:bg-[#091E42]">
              <p>Joey Rosenberg</p>
              <p>Global Leadership Director at Women Who Code</p>
              <div class="flex justify-between items-baseline">
                <img :src="whcImg" class="mt-6" height="36" width="84" />
                <a class="mt-6 underline text-primary" href="#">Read the Story</a>
              </div>
            </figcaption>
          </figure>
          <div class="flex flex-col col-span-2 py-10 px-8 text-white bg-gradient-to-r from-purple-500 from-20%">
            <h3 class="font-500 text-36px leading-48px">
              75% of organizations report that Trello delivers value to their business within 30 days.
            </h3>
          </div>
        </div>
      </VCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dots button {
  background-color: #091E42;
}
</style>
