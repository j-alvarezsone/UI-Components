import type { App } from 'vue'
import Icon from '../components/base/Icon.vue'

export default {
  install: (app: App<Element>) => {
    app.component('Icon', Icon)
  },
}
