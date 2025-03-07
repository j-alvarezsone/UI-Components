import { createApp } from "vue"
import App from "./App.vue"
import { clickOutside } from "./directives/click-outside"
import { focus } from "./directives/focus"
import { ripple } from "./directives/ripple"
import { tooltip } from "./directives/tooltip"
import "./assets/css/main.css"
import "./assets/css/tooltip.css"

const app = createApp(App)

app.directive("ripple", ripple)
app.directive("tooltip", tooltip)
app.directive("click-outside", clickOutside)
app.directive("focus", focus)

app.mount("#app")
