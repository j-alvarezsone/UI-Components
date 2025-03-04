import { createApp } from "vue"
import App from "./App.vue"
import { ripple } from "./directives/ripple"
import "./assets/css/main.css"

const app = createApp(App)

app.directive("ripple", ripple)

app.mount("#app")
