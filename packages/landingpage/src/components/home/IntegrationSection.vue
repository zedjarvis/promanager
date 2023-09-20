<script setup lang="ts">
// utilities
import { ref } from "vue";

// assets/images
import apiTile from "@assets/images/home-tiles-api-100x100.png";
import googleTile from "@assets/images/home-tiles-google-100x100.png";
import jiraTile from "@assets/images/home-tiles-jira-100x100.png";
import msTile from "@assets/images/home-tiles-ms-100x100.png";
import slackTile from "@assets/images/home-tiles-slack-100x100.png";

export interface integrationItem {
  id: number | string
  title: string
  avatar: string
  desc: string
  color: string
  url: string
}

const slide = ref()

const integrations: integrationItem[] = [
  {
    id: 1,
    title: 'Slack',
    avatar: slackTile,
    desc: 'Seamlessly Share and Collaborate on Project Conversations, Straight to Your Beloved Slack Channels!',
    color: '#531853',
    url: '/slack'
  },
  {
    id: 2,
    title: 'Google',
    avatar: googleTile,
    desc: 'Manage Tasks in Gmail, Sync with Google Drive & Calendars for Seamless Project Management.',
    color: '#4285f4',
    url: '/google'
  },
  {
    id: 3,
    title: 'Microsoft',
    avatar: msTile,
    desc: 'Seamlessly Import and Round-Trip Microsoft Project Plans, Excel, and CSV Files for Effortless Data Integration.',
    color: '#81bc06',
    url: '/ms'
  },
  {
    id: 4,
    title: 'Jira',
    avatar: jiraTile,
    desc: 'Boost Efficiency: View and Update All ProjectManager Tasks in Jira with Ease.',
    color: '#0052cc',
    url: '/jira'
  },
  {
    id: 5,
    title: 'API',
    avatar: apiTile,
    desc: 'For more Advanced Integrations: Leverage our Custom API for Tailored Solutions',
    color: '#00adb2',
    url: '/api'
  }
]

</script>

<template>
  <VCard rounded="0" :elevation="0" class="py-5 bg-background">
    <h2 class="section-title text-center my-16" style="width: 60%; margin: 20px auto;">Connect with over
      <strong>500</strong>
      businesses
      & Project management apps.</h2>
    <VRow>
      <VSlideGroup v-model="slide" class="pa-0" show-arrows="desktop">
        <VSlideGroupItem v-for="integration in integrations" :key="integration.id" v-slot="{}">
          <IntegrationCard :title="integration.title" :avatar="integration.avatar" :description="integration.desc"
            :color="integration.color" :url="integration.url" />
        </VSlideGroupItem>
      </VSlideGroup>
    </VRow>
  </VCard>
</template>
