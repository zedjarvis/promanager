/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue';

// Composables
import { createApp } from 'vue';

// Plugins
import { registerPlugins } from '@/plugins';
import '@unocss/reset/tailwind-compat.css';
import 'tippy.js/dist/tippy.css'; // optional for styling
import 'tippy.js/themes/light.css';
import 'tippy.js/themes/material.css';
import { makeServer } from './server';

import 'uno.css';
import { plugin as VueTippy } from 'vue-tippy';

const app = createApp(App)

makeServer()
registerPlugins(app)
app.use(VueTippy)

app.directive("draggable", (el) => {
  el.classList.add('vss-movable')
})
app.mount('#app')
