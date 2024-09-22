import type Icon from './components/base/Icon.vue'

declare module 'vue' {
  export interface GlobalComponents {
    Icon: typeof Icon
  }
}
