import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
// import router from './router'
// import store from './store'

const emitter = mitt()
const app = createApp(App)

app.config.globalProperties.emitter = emitter

app
.mount('#app')
