import { createApp } from 'vue'
import { createRouter, createMemoryHistory } from 'vue-router/auto'
import App from './App.vue'

const router = createRouter({
  history: createMemoryHistory(),
})

createApp(App).use(router).mount('#app')
