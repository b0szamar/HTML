

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/task/:id',
      name: 'edittask',
      component: () => import('../views/EditTaskView.vue'),
    },
    {
      path: '/newtask',
      name: 'newtask',
      component: () => import('../views/NewTaskView.vue'),
    },
  ],
})

export default router

