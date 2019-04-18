export const state = () => ({
  locales: ['es', 'en'],
  locale: 'es'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}