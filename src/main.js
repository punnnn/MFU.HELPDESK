import { createApp  } from 'vue'
import App from './App.vue'
import router from './router'
import naive from "naive-ui"

import './assets/main.css'

const app = createApp(App)

app.use(router, naive)

app.mount('#app')
