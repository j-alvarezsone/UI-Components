import type Icon from "./components/base/Icon.vue"
import type Loader from "./components/Loader.vue"

declare module "vue" {
  export interface GlobalComponents {
    Icon: typeof Icon
    Loader: typeof Loader
  }
}
