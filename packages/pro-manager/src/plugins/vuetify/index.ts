import { createVuetify } from 'vuetify'
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'
// import { icons } from './icons'
import defaults from './defaults'
import theme from './themes'

// Styles
import '@styles/main.scss'
import 'vuetify/styles'

export default createVuetify({
  components: {
    VSkeletonLoader,
  },
  // icons,
  defaults,
  theme,
})
