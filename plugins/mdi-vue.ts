import * as mdijs from '@mdi/js'
import mdiVue from 'mdi-vue/v3'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(mdiVue, { icons: mdijs })
})
