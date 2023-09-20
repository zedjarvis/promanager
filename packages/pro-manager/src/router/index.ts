// Composables
import { useLocalStorage } from '@vueuse/core';
import { setupLayouts } from 'virtual:meta-layouts';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from "vue-router/auto/routes"; // file routes

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: setupLayouts(routes),
})

export default router

router.beforeEach((to, from, next) => {
  if (to.path == "/") {
    const toPath = useLocalStorage('home-current-path', 'portfolio-summary')
    next({ name: toPath.value })
  }
  if (to.meta.requiresAuth) {
    // TOD0: SAVE PREVIOUS PATH
    // authStore.returnUrl = to.fullPath
    next({ name: 'Login' })
  } else next()
})
