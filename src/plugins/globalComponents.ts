import type { App } from 'vue'
import Icon from '../components/base/Icon.vue'
import Loader from '../components/Loader.vue'

export default {
  install: (app: App<Element>) => {
    app.component('Icon', Icon)
    app.component('Loader', Loader)
  },
}
