import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Vue3VideoPlayer from '@cloudgeek/vue3-video-player'
import '@cloudgeek/vue3-video-player/dist/vue3-video-player.css'

import VueLazyLoad from 'vue3-lazyload'

import { createHead } from '@vueuse/head'

import './index.css'

import 'animate.css'



const app = createApp(App)
const head = createHead()


app.use(head)
app.use(router)
app.use(Vue3VideoPlayer, {
  lang: 'en'
})
app.use(VueLazyLoad, {})
app.mount('#app')
