/**
 * plugins/webfontloader.ts
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

export async function loadFonts() {
  const webFontLoader = await import(/* webpackChunkName: "webfontloader" */'webfontloader')

  // webFontLoader.load({
  //   google: {
  //     families: ['Inter:100,300,400,500,700,900&display=swap'],
  //   },
  //   timeout: 2000
  // })

  // webFontLoader.load({
  //   google: {
  //     families: ['Space+Grotesk:100,300,400,500,700,900&display=swap'],
  //   },
  //   timeout: 2000
  // })
}