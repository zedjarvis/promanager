/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import '@unocss/reset/tailwind-compat.css'
import PrettyCheckbox from 'pretty-checkbox-vue'
import 'tippy.js/dist/tippy.css'; // optional for styling
import 'tippy.js/themes/light.css'

import 'uno.css'
import { plugin as VueTippy } from 'vue-tippy'

const app = createApp(App)

registerPlugins(app)
app.use(VueTippy)
app.use(PrettyCheckbox)
app.mount('#app')
