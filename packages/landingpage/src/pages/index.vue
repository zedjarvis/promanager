<script setup lang="ts">
// composables
import { useDisplay } from "vuetify";

// assets
import boardImg from "@assets/images/Carousel_Image_Boards_2x.png";
import cardImg from "@assets/images/Carousel_Image_Cards_2x.png";
import listImg from "@assets/images/Carousel_Image_Lists_2x.png";
import cogSvg from '@assets/images/Gears.svg';
import puzzleSvg from "@assets/images/Integrations_Puzzle.svg";
import searchSvg from '@assets/images/Search_Value.svg';
import cImg from "@assets/images/TrelloBoard_Calendar_2x_004.png";
import tImg from "@assets/images/TrelloBoard_Timeline_2x_004.png";
import heroImg from "@assets/images/hero.png";
import folderImg from "@assets/images/icon-content-folder_2x.png";
import logoHorizontal from "@assets/images/logos-horizontal.svg";
import logoVertical from "@assets/images/logos-vertical.svg";

const { xs } = useDisplay();

const heroForm = ref()
const enterpriceUsers = ref(50)
const aboutCard = useLocalStorage('index-about-card', 'boards')
const { y } = useWindowScroll()
const scrollPos = useLocalStorage('index-scroll-pos', y.value)

const card1 = computed(() => aboutCard.value == 'boards')
const card2 = computed(() => aboutCard.value == 'lists')
const card3 = computed(() => aboutCard.value == 'cards')

const priceLogo = computed(() => xs.value ? logoVertical : logoHorizontal)
const workfowItem = reactive([
  {
    title: 'Project management',
    image: folderImg,
    color: '#FF7452',
    text: 'Keep tasks in order, deadlines on track, and team members aligned with ProManager.'
  },
  {
    title: 'Meetings',
    image: folderImg,
    color: '#2684FF',
    text: 'Empower your team meetings to be more productive, empowering, and dare we say—fun.'
  },
  {
    title: 'Onboarding',
    image: folderImg,
    color: '#57D9A3',
    text: 'Onboarding to a new Company or project is a snap with ProManager\'s visual layout of todo\'s, resources and progress tracking.'
  },
  {
    title: 'Task management',
    image: folderImg,
    color: '#FFC400',
    text: 'Use ProManager to track, manage, complete and bring tasks together like the pieces of a puzzle and make you team\'s prject a cohesive success everytime.'
  },
  {
    title: 'Brainstorming',
    image: folderImg,
    color: '#00C7E5',
    text: 'Unleash your teams creativity and keep ideas visible, collaborative and actionable.'
  },
  {
    title: 'Resource hub',
    image: folderImg,
    color: '#F99CDB',
    text: 'Save time with a well designed hub that helps teams find information easily and quickly.'
  },
])


onMounted(() => {
  window.scroll({
    top: scrollPos.value,
    behavior: 'smooth',
  })
  useEventListener('scroll', () => {
    scrollPos.value = y.value
  })
})
</script>

<template>
  <!-- HERO SECTION  -->
  <VSheet tag="section" id="hero" class="hero">
    <VContainer fluid>
      <VRow no-gutters>
        <VCol cols="12" md="6" class="text-white pl-md-16 pt-4 pt-md-16 text-center text-md-left">
          <h1 class="font-space font-400 md:font-500 text-4xl lg:leading-[60px] lg:text-5xl mb-2 mt-4">
            Unlock Business Excellence with AI-Powered Project Management Software
          </h1>
          <h2 class="desc-text font-inter mb-10 mt-2">
            Elevate your project planning and resource management with our empowering features, accessible to your
            entire team!
          </h2>
          <VForm @submit.prevent="() => { }" ref="heroForm" class="d-flex flex-column flex-md-row font-inter">
            <VRow>
              <VCol cols="12" md="6" class="d-none d-md-flex">
                <VTextField id="email" type="email" name="email" variant="outlined" bg-color="white" base-color="white"
                  color="white" class="w-100" placeholder="Email" density="comfortable" autofocus autocomplete="true"
                  required="true"></VTextField>
              </VCol>
              <VCol cols="12" md="4">
                <VBtn type="submit" :block="xs" height="50" color="primary" :ripple="false">Start Free
                  Trial
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCol>
        <VCol cols="12" md="6" class="pt-12 px-4">
          <VImg :src="heroImg" />
        </VCol>
      </VRow>
    </VContainer>
  </VSheet>

  <!-- ABOUT SECTION  -->
  <VSheet tag="section" id="about" class="font-inter py-16"
    style="background: linear-gradient(0deg, rgb(230, 252, 255), #eff0f5) 0% 0% / auto repeat scroll padding-box border-box rgb(178, 212, 255)">
    <VContainer class="pb-10">
      <VRow class="mb-4">
        <VCol cols="12" md="7">
          <p class="section-subtitle">ProManager 101</p>
          <h2 class="section-title">A Productivity Powerhouse</h2>
          <p class="section-description">
            Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing
            what and what needs to get done. Learn more in our guide for getting started.
          </p>
        </VCol>
        <VCol></VCol>
      </VRow>
      <VRow>
        <VCol cols="12" md="4">
          <VCard @click="aboutCard = 'boards'" :elevation="card1 ? 4 : 0" class="mb-3 pl-2 position-relative"
            :class="card1 ? 'bg-surface' : 'bg-transparent'">
            <div v-if="card1"
              style="position: absolute; top: 0; left: 0; height: 100%; width: 8px; display: inline-block; background-color: #00C7e5;">
            </div>
            <VCardTitle class="mb-2" style="font-size: 16px;">Boards</VCardTitle>
            <VCardText style="font-size: 16px;">
              ProManager boards keep tasks organized and work moving forward. In a glance, see everything from “things to
              do”
              to “aww yeah, we did it!”
            </VCardText>
          </VCard>
          <VCard @click="aboutCard = 'lists'" :elevation="card2 ? 4 : 0" class="my-3 pl-2 position-relative"
            :class="card2 ? 'bg-surface' : 'bg-transparent'">
            <div v-if="card2"
              style="position: absolute; top: 0; left: 0; height: 100%; width: 8px; display: inline-block; background-color: #00C7e5;">
            </div>
            <VCardTitle class="mb-2" style="font-size: 16px;">Lists</VCardTitle>
            <VCardText style="font-size: 16px;">The different stages of a task. Start as simple as To Do, Doing or Done—or
              build a
              workflow custom fit to your team’s needs. There’s no wrong way to ProManger.</VCardText>
          </VCard>
          <VCard @click="aboutCard = 'cards'" :elevation="card3 ? 4 : 0" class="my-3 pl-2 position-relative"
            :class="card3 ? 'bg-surface' : 'bg-transparent'">
            <div v-if="card3"
              style="position: absolute; top: 0; left: 0; height: 100%; width: 8px; display: inline-block; background-color: #00C7e5;">
            </div>
            <VCardTitle class="mb-2" style="font-size: 16px;">Cards</VCardTitle>
            <VCardText style="font-size: 16px;">Cards represent tasks and ideas and hold all the information to get the
              job done.
              As you make progress, move cards across lists to show their status.</VCardText>
          </VCard>
        </VCol>
        <VCol cols="12" md="8">
          <VWindow v-model="aboutCard" :show-arrows="false">
            <VWindowItem value="boards">
              <VImg :src="boardImg" />
            </VWindowItem>
            <VWindowItem value="lists">
              <VImg :src="listImg" />
            </VWindowItem>
            <VWindowItem value="cards">
              <VImg :src="cardImg" />
            </VWindowItem>
          </VWindow>
        </VCol>
      </VRow>
    </VContainer>
  </VSheet>

  <!-- WORKFLOW SECTION  -->
  <VSheet tag="section" id="workflow" class="font-inter py-16">
    <VContainer>
      <VRow no-gutters>
        <VCol cols="12" md="8">
          <p class="section-subtitle">ProManager in action</p>
          <h2 class="section-title">
            Workflows for any project, big or small</h2>
        </VCol>
        <VCol></VCol>
      </VRow>
      <VSlideGroup :show-arrows="false" class="pa-0 ma-0">
        <VSlideGroupItem v-for="(item, i) in workfowItem" :key="i">
          <WorkflowCard :title="item.title" :text="item.text" :image="item.image" :color="item.color" />
        </VSlideGroupItem>
      </VSlideGroup>
      <VRow no-gutters class="mt-16">
        <VCol cols="12" md="8">
          <p class="section-description">
            No need to start from scratch. Jump-start your workflow with a proven playbook designed for different teams.
            Customize it to make it yours.
          </p>
        </VCol>
        <VCol class="d-flex justify-md-end">
          <VBtn height="50" variant="outlined" class="text-uppercase">Explore all use cases</VBtn>
        </VCol>
      </VRow>
    </VContainer>
  </VSheet>

  <!-- UI SECTION  -->
  <VSheet tag="section" id="ui" class="d-flex justify-center align-center text-center pt-16 font-inter"
    style="background: url('/images/ViewsBackground_Left_Narrow.svg') left center / contain no-repeat scroll padding-box border-box, url('/images/ViewsBackground_Right_Narrow.svg') right center / contain no-repeat scroll padding-box border-box, linear-gradient(240deg, rgb(0, 184, 217), rgb(0, 101, 255)) 0% 0% / auto repeat scroll padding-box border-box rgb(0, 101, 255);">
    <VContainer class="text-center">
      <VResponsive width="750" class="mx-auto pb-16">
        <h2 class="section-title text-white font-space">
          See work in a whole new way
        </h2>
        <p class="text-white section-description">View your team’s projects from every angle
          and bring a fresh
          perspective to the task at hand.
        </p>
        <VBtn height="50" border>Discover all PM views</VBtn>
      </VResponsive>
      <VCard class="pa-4 pa-md-8 rounded-lg">
        <VRow no-gutters>
          <VCol cols="12" md="7" class="pr-md-16 pb-4 pb-md-0">
            <VImg :src="tImg" :height="xs ? '' : '300'" class="mr-md-5" />
          </VCol>
          <VCol cols="12" md="5">
            <div class="d-flex align-center mb-8">
              <h3 class="section-subtitle flex items-center">
                <span class="h-32px w-32px" style="color: rgb(135, 119, 217);">
                  <svg fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
                    <path
                      d="M6 5.333h9.333a3.333 3.333 0 0 1 0 6.667H6a3.333 3.333 0 0 1 0-6.667Zm9.333 4a.667.667 0 0 0 0-1.333H6a.667.667 0 0 0 0 1.333h9.333Zm-6.666 4H18A3.333 3.333 0 1 1 18 20H8.667a3.333 3.333 0 0 1 0-6.667Zm9.333 4A.667.667 0 0 0 18 16H8.667a.667.667 0 0 0 0 1.333H18Zm6.667 4h-9.334a3.333 3.333 0 1 0 0 6.667h9.334a3.333 3.333 0 0 0 0-6.667Zm-9.334 4a.667.667 0 0 1 0-1.333h9.334a.667.667 0 1 1 0 1.333h-9.334Zm8-20H26A3.333 3.333 0 1 1 26 12h-2.667a3.333 3.333 0 1 1 0-6.667Zm2.667 4A.667.667 0 1 0 26 8h-2.667a.667.667 0 1 0 0 1.333H26Z">
                    </path>
                  </svg>
                </span>
                <span class="mx-3">
                  Hit deadlines every time
                </span>
              </h3>
            </div>
            <p class="text-left mb-6 section-description">From weekly sprints to annual planning,
              Timeline view keeps all tasks on track. Quickly get a glimpse of what’s coming down the pipeline and
              identify any gaps that might impede your team’s progress.</p>
            <p class="text-left text-primary">
              <a class="text-decoration-underline" href="/" style="font-size: 20px;">Learn more about Timeline view</a>
            </p>
          </VCol>
        </VRow>
      </VCard>
      <VCard :elevation="5" class="pa-8 mt-16 mb-n16 rounded-lg">
        <VRow no-gutters>
          <VCol cols="12" md="5">
            <div class="d-flex align-center mb-6">
              <h3 class="section-subtitle flex items-center">
                <span class="h-32px w-32px" style="color: rgb(0, 199, 229)">
                  <svg fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
                    <path
                      d="M6.66 6.667h18.68A2.66 2.66 0 0 1 28 9.325v16.016A2.659 2.659 0 0 1 25.34 28H6.66A2.66 2.66 0 0 1 4 25.341V9.325a2.659 2.659 0 0 1 2.66-2.658ZM6.667 12v12A1.333 1.333 0 0 0 8 25.333h16A1.333 1.333 0 0 0 25.333 24V12H6.667ZM8 5.333a1.333 1.333 0 0 1 2.667 0v1.334H8V5.333Zm13.333 0a1.333 1.333 0 0 1 2.667 0v1.334h-2.667V5.333Zm-12 12v-2.668H12v2.668H9.333Zm10.667 0v-2.668h2.667v2.668H20Zm-5.333 0v-2.668h2.668v2.668h-2.668Zm-5.334 5.334V20H12v2.667H9.333Zm5.334 0V20h2.668v2.667h-2.668Zm5.333 0V20h2.667v2.667H20Z">
                    </path>
                  </svg>
                </span>
                <span class="mx-3">
                  Stay on top of Tasks
                </span>
              </h3>
            </div>
            <p class="text-left mb-6 section-description">Start each day without any surprises.
              Whether scheduling an editorial calendar or staying on top of to-dos, Calendar view is like a crystal ball
              giving you a clear vision of what work lies ahead.

            </p>
            <p class="text-left text-primary">
              <a class="underline" href="/" style="font-size: 20px;">Learn more about Calendar view</a>
            </p>
          </VCol>
          <VCol cols="12" md="7" class="pl-md-16 pt-4 pt-md-0">
            <VImg :src="cImg" :height="xs ? '' : '300'" class="ml-md-5" />
          </VCol>
        </VRow>
      </VCard>
    </VContainer>
  </VSheet>

  <!-- GROW SECTION  -->
  <VSheet tag="section" id="grow-section" class="font-inter py-16">
    <VContainer class="pt-16 mb-16">
      <VRow no-gutters>
        <VCol cols="12" md="8">
          <p class="section-subtitle">Powerful ways to grow</p>
          <h2 class="section-title">
            Do more with ProManager
          </h2>
          <p class="section-description">
            ProManager's intuitive features give any team the ability to quickly set up and customize workflows for just
            about
            anything.
          </p>
        </VCol>
        <VCol></VCol>
      </VRow>
      <VRow>
        <VCol cols="12" md="4">
          <VCard :elevation="0" class="pa-6 w-100 h-100 bg-background d-flex flex-column">
            <VImg :src="puzzleSvg" height="100" width="100" />
            <h3 class="font-inter mt-4 mb-2" style="font-size: 24px; font-weight: 500; line-height: 32px;">
              Integrations
            </h3>
            <p class="flex-grow" style="font-size: 16px; line-height: 24px;">
              Connect the apps your team already uses into your ProManger
              workflow or add a Power-Up to fine-tune your specific needs.
            </p>
            <VBtn height="50" variant="outlined" class="mt-6 text-uppercase">Browse
              Integrations</VBtn>
          </VCard>
        </VCol>
        <VCol cols="12" md="4">
          <VCard :elevation="0" class="pa-6 w-100 h-100 bg-background d-flex flex-column">
            <VImg :src="cogSvg" height="100" width="100" />
            <h3 class="font-inter mt-4 mb-2" style="font-size: 24px; font-weight: 500; line-height: 32px;">
              PM
              Automation
            </h3>
            <p class="flex-grow" style="font-size: 16px; line-height: 24px;">
              No-code automation is built into every ProManger board. Focus on
              the work that matters most and let the robots do the rest.
            </p>
            <VBtn height="50" variant="outlined" class="mt-6 text-uppercase">Get to know
              automation</VBtn>
          </VCard>
        </VCol>
        <VCol cols="12" md="4">
          <VCard :elevation="0" class="pa-6 w-100 h-100 bg-background d-flex flex-column">
            <VImg :src="searchSvg" height="100" width="100" />
            <h3 class="font-inter mt-4 mb-2" style="font-size: 24px; font-weight: 500; line-height: 32px;">
              PM Enterprice
            </h3>
            <p class="flex-grow" style="font-size: 16px; line-height: 24px;">
              The productivity tool teams love, paired with the features and security needed for scale.
            </p>
            <VBtn height="50" variant="outlined" class="mt-6 text-uppercase">Explore Enterprice</VBtn>
          </VCard>
        </VCol>
      </VRow>
      <VRow class="pt-16">
        <TestimonyCarousel />
      </VRow>
    </VContainer>
  </VSheet>

  <!-- PRICING SECTION  -->
  <VSheet tag="section" id="pricing" class="font-inter py-16 d-flex justify-center align-center"
    style="background: linear-gradient(rgb(230, 252, 255), rgb(255, 255, 255)) 0% 0% / auto no-repeat scroll padding-box border-box transparent;">
    <VContainer class="pb-16">
      <VResponsive width="750" class="mx-auto pb-16 text-center">
        <h2 class="section-title font-space">
          ProManager priced your way
        </h2>
        <p class="section-description">
          Trusted by millions, ProManager powers teams all around the world.
        </p>
        <VBtn height="50" variant="flat" color="primary" border>Compare plans</VBtn>
      </VResponsive>
      <div class="h-max w-full pb-20">
        <div class="w-full h-max md:min-h-515px grid-cols-1 grid md:grid-cols-4">

          <div class="price-card border flex flex-col col-span-1 h-full bg-white text-[#091E42]">
            <div class="pt-6 px-4 w-full">
              <h3>FREE</h3>
            </div>
            <div class="pt-6 px-4 w-full">
              <p class="text-48px leading-48px">
                <span class="text-16px">$</span>0<span class="text-16px">USD</span>
              </p>
              <p class="text-xs text-[#505F79]">Free for your whole team</p>
            </div>
            <div class="pt-6 px-4 w-full flex-grow">
              <p>For individuals or teams looking to organize any project</p>
            </div>
            <div class="pt-6 px-4 w-full">
              <VBtn height="50" color="primary" variant="outlined">Get Started</VBtn>
            </div>
            <div class="px-4 pt-4 pb-8">
              <p class="inline-block h-30px w-full"></p>
            </div>
          </div>

          <div class="border flex flex-col col-span-1 h-full bg-white text-[#091E42]">
            <div class="pt-6 px-4 w-full">
              <h3>STANDARD</h3>
            </div>
            <div class="pt-6 px-4 w-full">
              <p class="text-48px leading-48px">
                <span class="text-16px">$</span>5<span class="text-16px">USD</span>
              </p>
              <p class="text-xs text-[#505F79]">Per user/month if billed annually ($6 billed monthly)</p>
            </div>
            <div class="pt-6 px-4 w-full flex-grow">
              <p>For small teams that need to manage work and scale collaboration.</p>
            </div>
            <div class="pt-6 px-4 w-full">
              <VBtn height="50" color="primary" variant="outlined">Sign up now</VBtn>
            </div>
            <div class="px-4 pt-4 pb-8">
              <p class="inline-block h-30px w-full">
                <a href="#" class="underline text-primary">Learn more about standard</a>
              </p>
            </div>
          </div>

          <div class="border-2 flex flex-col col-span-1 h-full bg-white text-[#091E42] border-[#35bada]">
            <div class="pt-6 px-4 w-full">
              <h3>PREMIUM</h3>
            </div>
            <div class="pt-6 px-4 w-full">
              <p class="text-48px leading-48px">
                <span class="text-16px">$</span>10<span class="text-16px">USD</span>
              </p>
              <p class="text-xs text-[#505F79]">Per user/month if billed annually ($12.50 billed monthly)</p>
            </div>
            <div class="pt-6 px-4 w-full flex-grow">
              <p>For teams that need to track and visualize multiple projects in several ways, including boards,
                timelines, calendars, etc.</p>
            </div>
            <div class="pt-6 px-4 w-full">
              <VBtn height="50" color="#35bada" variant="outlined">Try for free</VBtn>
            </div>
            <div class="px-4 pt-4 pb-8">
              <p class="inline-block h-30px w-full">
                <a href="#" class="underline text-primary">Learn more about premium</a>
              </p>
            </div>
          </div>

          <div class="border flex flex-col col-span-1 h-full bg-white text-[#091E42]">
            <div class="pt-6 px-4 w-full">
              <h3>ENTERPRICE</h3>
            </div>
            <div class="pt-6 px-4 w-full">
              <p class="text-48px leading-48px">
                <span class="text-16px">$</span>17.50<span class="text-16px">USD</span>
              </p>
              <p class="text-xs text-[#505F79]">Per user/month - billed annually ($210.00 annual price per user)</p>
            </div>
            <div class="pt-6 px-4 w-full flex-grow">
              <p>For organizations that need to connect work across teams with more security and controls.</p>
              <p>Est. cost for <span class="inline-block w-18 border-b-2px border-[#091E42]"><input type="number"
                    v-model="enterpriceUsers" min="50" max="5000"
                    class="border-none w-full outline-none text-24px text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"></span>
                users</p>
              <VSlider v-model="enterpriceUsers" :min="50" :max="5000" :step="1" class="mt-4"></VSlider>
              <VExpandTransition>
                <p v-show="enterpriceUsers >= 5000"><span>
                    <VIcon color="primary" size="x-small" icon="i-carbon-information" class="mb-1" />
                  </span> For organizations with more than 5,000 users please contact sales for pricing.</p>
              </VExpandTransition>
            </div>
            <div class="pt-6 px-4 w-full">
              <VBtn height="50" color="primary" variant="outlined">Contact sales</VBtn>
            </div>
            <div class="px-4 pt-4 pb-8">
              <p class="inline-block h-30px w-full">
                <a href="#" class="underline text-primary">Learn more about enterprice</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full text-center">
        <p class="section-description mb-6">
          Join over 2,000,000 teams worldwide that are using ProManger to get more done.
        </p>
        <img class="mx-auto" :src="priceLogo" width="960" height="80" />
      </div>
    </VContainer>
  </VSheet>


  <!-- CTA SECTION -->
  <VSheet tag="section" id="cta" class="d-flex justify-center align-center text-center py-16 bg-secondary"
    style="background: url('/images/BigSwingFooterHeroGraphic__Left.svg') left center / contain no-repeat scroll padding-box border-box, url('/images/BigSwingFooterHeroGraphic__Right.svg') right center / contain no-repeat scroll padding-box border-box, linear-gradient(60deg, rgb(82, 67, 170), rgb(237, 80, 180)) 0% 0% / auto repeat scroll padding-box border-box rgb(82, 67, 170);">
    <VContainer class="text-centers">
      <VResponsive width="500" class="mx-auto">
        <h2 class="font-space section-title mb-8 text-white">Get Started with PM today</h2>
        <VForm ref="heroForm" class="d-flex flex-column flex-md-row font-inter">
          <VTextField id="email" type="email" name="email" variant="outlined" bg-color="white" base-color="white"
            color="white" class="d-none d-md-block" placeholder="Email" density="comfortable" required></VTextField>
          <VBtn class="ml-md-4" type="submit" :block="xs" height="50" color="primary" :ripple="false">Start Free
            Trial
          </VBtn>
        </VForm>
      </VResponsive>
    </VContainer>
  </VSheet>
</template>

<style lang="scss">
.hero {
  background: url("/images/hero-bg.png") center bottom -0.5px / 100% 14% no-repeat scroll padding-box border-box, linear-gradient(60deg, rgb(82, 67, 170), rgb(237, 80, 180)) 0% 0% / auto repeat scroll padding-box border-box rgb(82, 67, 170) !important;
}
</style>
