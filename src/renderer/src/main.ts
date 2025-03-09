import { createApp } from 'vue'
import App from './App.vue'
import '@renderer/assets/tailwind.css'
import '@icon-park/vue-next/styles/index.css'
import router from '@renderer/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { install } from '@icon-park/vue-next/es/all'

const app = createApp(App)
install(app)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
