import { getAccessToken, getRefreshToken } from '@/service/LocalStorageService'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const guardMyroute = (to, from, next) => {
  let isAuthenticated = false
  if (getAccessToken() && getRefreshToken()
  ) { isAuthenticated = true } else { isAuthenticated = false }
  if (isAuthenticated) {
    next()
  } else {
    next('/login')
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/create-event',
    name: 'createEvent',
    beforeEnter: guardMyroute,

    component: () => import('../views/CreateEventView.vue')
  },
  {
    path: '/event/:id',
    name: 'event',
    component: () => import('../views/EventDetailsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
