/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          'primary': '#0065FF',
          'on-primary': '#fff',
          'secondary': 'rgb(23, 43, 77)',
          'on-secondary': '#fff',
          'success': '#198038',
          'on-success': '#fff',
          'info': '#0043ce',
          'on-info': '#fff',
          'warning': '#f1c21b',
          'on-warning': '#fff',
          'error': '#da1e28',
          'background': '#eff0f5',
          surface: '#FFFFFF',
          'on-background': '#172B4D',
          'on-surface': '#172B4D',
        },
      },
      dark: {
        colors: {
          'primary': '#0065FF',
          'on-primary': '#161616',
          'text-priamry': '#f4f4f4',
          'text-secondary': '#c6c6c6',
          'secondary': '#8592A3',
          'on-secondary': '#fff',
          'success': '#42be65',
          'on-success': '#fff',
          'info': '#4589ff',
          'on-info': '#fff',
          'warning': '#f1c21b',
          'on-warning': '#fff',
          'error': '#fa4d56',
          'background': '#121E2F',
          'on-background': '#DBDBEB',
          'surface': '#1A2B45',
          'on-surface': '#DBDBEB',
        }
      }
    },
  },
})
