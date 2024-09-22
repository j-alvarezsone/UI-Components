import { createApp } from 'vue'
import App from './App.vue'
import globalComponents from './plugins/globalComponents'
import './assets/style.css'

const app = createApp(App)

app.use(globalComponents)

app.mount('#app')
