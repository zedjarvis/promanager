import { defineConfig, presetIcons, presetTypography, presetUno } from 'unocss'


export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetTypography(),
  ],
  shortcuts: {
    'section-subtitle': 'text-14px md:text-16px font-500 uppercase mb-2',
    'section-title': 'mb-4 text-24px lg:text-36px md:font-500 md:leading-48px text-#091E42',
    'section-description': 'mb-4 text-16px md:text-20px font-400 leading-30px'
  }
})
