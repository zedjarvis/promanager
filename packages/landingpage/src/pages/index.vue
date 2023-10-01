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
import heroImg from "@assets/images/hero.png";
import folderImg from "@assets/images/icon-content-folder_2x.png";

const { xs } = useDisplay();

const heroForm = ref()
const aboutCard = ref('boards')

const card1 = computed(() => aboutCard.value == 'boards')
const card2 = computed(() => aboutCard.value == 'lists')
const card3 = computed(() => aboutCard.value == 'cards')

</script>

<template>
  <!-- HERO SECTION  -->
  <VSheet tag="section" id="hero" class="hero">
    <VContainer fluid>
      <VRow no-gutters>
        <VCol cols="12" md="6" class="text-white pl-md-16 pt-4 pt-md-16">
          <h1 class="hero-text mb-2 mt-4">
            Unlock Business Excellence with AI-Powered Project Management Software
          </h1>
          <h2 class="desc-text mb-10 mt-2">
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
        <VCol cols="12" md="6" class="pt-4">
          <VImg :src="heroImg" />
        </VCol>
      </VRow>
    </VContainer>
  </VSheet>

  <!-- ABOUT SECTION  -->
  <VSheet tag="section" id="about" class="font-inter py-16"
    style="background: linear-gradient(0deg, rgb(230, 252, 255), #eff0f5) 0% 0% / auto repeat scroll padding-box border-box rgb(178, 212, 255)">
    <VContainer>
      <VRow class="mb-4">
        <VCol cols="12" md="7">
          <p class="mb-2" style="font-size: 16px; font-weight: 500; text-transform: uppercase;">ProManager 101</p>
          <h2 class="pb-4 mb-2" style="font-size: 36px; font-weight: 500; line-height: 48px; color: #091E42;">A
            Productivity Powerhouse</h2>
          <p style="font-size: 20px; font-weight: 400;">Simple, flexible, and powerful. All it takes are boards, lists,
            and cards to get a clear view of who’s doing what and what needs to get done. Learn more in our guide for
            getting started.</p>
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
              workflow custom fit to your team’s needs. There’s no wrong way to Trello.</VCardText>
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
          <p class="mb-2" style="font-size: 16px; font-weight: 500; text-transform: uppercase;">ProManager in action</p>
          <h2 class="pb-4 mb-2 font-space" style="font-size: 36px; font-weight: 500; line-height: 48px; color: #091E42;">
            Workflows for any project, big or small</h2>
        </VCol>
        <VCol></VCol>
      </VRow>
      <VSlideGroup class="pa-0 ma-0">
        <VSlideGroupItem class="">
          <VCard rounded="lg" :elevation="2" max-width="350" class="ma-1 pt-16 pb-14">
            <div
              style="height: 48px; width: 100%; display: inline-block; background-color: #FF7452; position: absolute; top: 0; left: 0; overflow: hidden;">
            </div>
            <div
              style="position: absolute; left: 12px; top: 24px; height: 48px; width: 48px; display: inline-block; background-color: white; border-radius: 4px; padding: 8px;">
              <VImg :src="folderImg" />
            </div>
            <VCardItem class="px-5 pt-5">
              <h3 class="pb-2" style="font-size: 24px; color: #091E42;">
                Project Management
              </h3>
              <p class="pt-2">
                Keep tasks in order, deadlines on track, and team members aligned with Trello.
              </p>
            </VCardItem>
          </VCard>
        </VSlideGroupItem>
      </VSlideGroup>
      <VRow no-gutters class="mt-16">
        <VCol cols="12" md="8">
          <p class="pb-4 mb-2" style="font-size: 20px; font-weight: 400; line-height: 30px; color: #091E42;">
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
        <h2 class="pb-4 text-white font-space" style="font-size: 36px; font-weight: 500; line-height: 48px;">
          See work in a whole new way
        </h2>
        <p class="text-white mb-4" style="font-size: 20px; font-weight: 400;">View your team’s projects from every angle
          and bring a fresh
          perspective to the task at hand.
        </p>
        <VBtn height="50" border>Discover all PM views</VBtn>
      </VResponsive>
      <VCard class="pa-8">
        <VRow no-gutters>
          <VCol cols="12" md="7"></VCol>
          <VCol cols="12" md="5">
            <div class="d-flex align-center mb-8">
              <h3 class="text-uppercase" style="font-size: 16px; font-weight: 500; line-height: 20px;">Hit deadlines every
                time</h3>
            </div>
            <p class="text-left mb-6" style="font-size: 20px; line-height: 30px;">From weekly sprints to annual planning,
              Timeline view keeps all tasks on track. Quickly get a glimpse of what’s coming down the pipeline and
              identify any gaps that might impede your team’s progress.</p>
            <p class="text-left text-primary">
              <a class="text-decoration-underline" href="/" style="font-size: 20px;">Learn more about Timeline view</a>
            </p>
          </VCol>
        </VRow>
      </VCard>
      <VCard :elevation="5" class="pa-8 mt-16 mb-n16">
        <VRow no-gutters>
          <VCol cols="12" md="5">
            <div class="d-flex align-center mb-8">
              <h3 class="text-uppercase" style="font-size: 16px; font-weight: 500; line-height: 20px;">Stay on top of
                Tasks</h3>
            </div>
            <p class="text-left mb-6" style="font-size: 20px; line-height: 30px;">Start each day without any surprises.
              Whether scheduling an editorial calendar or staying on top of to-dos, Calendar view is like a crystal ball
              giving you a clear vision of what work lies ahead.

            </p>
            <p class="text-left text-primary">
              <a class="text-decoration-underline" href="/" style="font-size: 20px;">Learn more about Calendar view</a>
            </p>
          </VCol>
          <VCol cols="12" md="7"></VCol>
        </VRow>
      </VCard>
    </VContainer>
  </VSheet>

  <!-- GROW SECTION  -->
  <VSheet tag="section" id="grow-section" class="font-inter py-16">
    <VContainer class="pt-16">
      <VRow no-gutters>
        <VCol cols="12" md="8">
          <p class="mb-2" style="font-size: 16px; font-weight: 500; text-transform: uppercase;">Powerful ways to grow</p>
          <h2 class="pb-4 mb-2 font-space" style="font-size: 36px; font-weight: 500; line-height: 48px; color: #091E42;">
            Do more with ProManager
          </h2>
          <p class="mb-4" style="font-size: 20px; font-weight: 400;">
            ProManager's intuitive features give any team the ability to quickly set up and customize workflows for just
            about
            anything.
          </p>
        </VCol>
        <VCol></VCol>
      </VRow>
      <VRow>
        <VCol cols="12" md="4">
          <VCard :elevation="0" class="pa-6 w-100 h-100 bg-background">
            <div>
              <VImg :src="puzzleSvg" height="100" width="100" />
              <h3 class="font-inter mt-4 mb-2" style="font-size: 24px; font-weight: 500; line-height: 32px;">
                Integrations
              </h3>
              <p style="font-size: 16px; line-height: 24px;">
                Connect the apps your team already uses into your Trello
                workflow or add a Power-Up to fine-tune your specific needs.
              </p>
            </div>
            <VBtn height="50" variant="outlined" class="mt-6 text-uppercase">Browse
              Integrations</VBtn>
          </VCard>
        </VCol>
        <VCol cols="12" md="4">
          <VCard :elevation="0" class="pa-6 w-100 h-100 bg-background">
            <div>
              <VImg :src="cogSvg" height="100" width="100" />
              <h3 class="font-inter mt-4 mb-2" style="font-size: 24px; font-weight: 500; line-height: 32px;">
                PM
                Automation
              </h3>
              <p style="font-size: 16px; line-height: 24px;">
                No-code automation is built into every Trello board. Focus on
                the work that matters most and let the robots do the rest.
              </p>
            </div>
            <VBtn height="50" variant="outlined" class="mt-6 text-uppercase">Get to know
              automation</VBtn>
          </VCard>
        </VCol>
        <VCol cols="12" md="4">
          <VCard :elevation="0" class="pa-6 w-100 h-100 bg-background">
            <div>
              <VImg :src="searchSvg" height="100" width="100" />
              <h3 class="font-inter mt-4 mb-2" style="font-size: 24px; font-weight: 500; line-height: 32px;">
                PM Enterprice
              </h3>
              <p style="font-size: 16px; line-height: 24px;">
                The productivity tool teams love, paired with the features and security needed for scale.
              </p>
            </div>
            <VBtn height="50" variant="outlined" class="mt-6 text-uppercase">Explore Enterprice</VBtn>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </VSheet>

  <!-- PRICING SECTION  -->
  <VSheet tag="section" id="pricing" class="font-inter py-16">
    <VContainer>
      <VCard title="Pricing"></VCard>
    </VContainer>
  </VSheet>

  <!-- INTEGRATION SECTION -->
  <VSheet class="ma-0 pa-0">
    <IntegrationSection />
  </VSheet>


  <!-- CTA SECTION -->
  <VSheet tag="section" id="cta" class="d-flex justify-center align-center text-center py-16"
    style="background: url('/images/BigSwingFooterHeroGraphic__Left.svg') left center / contain no-repeat scroll padding-box border-box, url('/images/BigSwingFooterHeroGraphic__Right.svg') right center / contain no-repeat scroll padding-box border-box, linear-gradient(60deg, rgb(82, 67, 170), rgb(237, 80, 180)) 0% 0% / auto repeat scroll padding-box border-box rgb(82, 67, 170);">
    <VContainer class="text-centers">
      <VResponsive width="500" class="mx-auto">
        <h2 class="font-space section-title mb-8">Get Started with PM today</h2>
        <VForm ref="heroForm" class="d-flex flex-column flex-md-row font-inter">
          <VTextField id="email" type="email" name="email" variant="outlined" bg-color="white" base-color="white"
            color="white" class="w-100" placeholder="Email" density="comfortable" required></VTextField>
          <VBtn class="ml-4" type="submit" :block="xs" height="50" color="primary" :ripple="false">Start Free
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

.hero-text {
  font-family: "Space Grotesk", sans-serif;
  font-size: 48px;
  line-height: 60px;
  font-weight: 500;
}

.desc-text {
  font-size: 18px;
  line-height: 30px;
  font-weight: 400;
}

.section-title {
  font-size: 36px !important;
  line-height: 48px;
  font-weight: 500;
}
</style>
