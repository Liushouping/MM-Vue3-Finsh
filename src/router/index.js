import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Lab from '../views/Lab.vue'
import Stroy from '../views/Stroy.vue'
import ComicWorld from '../views/ComicWorld.vue'
import Fututre from '../views/Future.vue'
import Team from '../views/Team.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/lab',
      name: 'Lab',
      component: () => import('../views/Lab.vue')
    },
    {
      path: '/story',
      name: 'Stroy',
      component: () => import('../views/Stroy.vue')
    },
    {
      path: '/comicworld',
      name: 'ComicWorld',
      component: () => import('../views/ComicWorld.vue')
    },
    {
      path: '/future',
      name: 'Future',
      component: () => import('../views/Future.vue')
    },
    {
      path: '/team',
      name: 'Team',
      component: () => import('../views/Team.vue')
    },
    {
      path: '/store', component: Home, alias: '/store',
      beforeEnter() { window.open('https://allizart.io','_blank') },
    },
    {
      path: "/:catchAll(.*)",
      component: Home
    }, 
  ],
  scrollBehavior () {
    return { top: 0 }
  }
})

export default router
