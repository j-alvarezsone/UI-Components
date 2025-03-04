import { createApp } from 'vue'
import App from './App.vue'
import { ripple } from './directives/ripple'
import globalComponents from './plugins/globalComponents'
import './assets/css/main.css'

const app = createApp(App)

app.use(globalComponents)
app.directive('ripple', ripple)

app.mount('#app')
