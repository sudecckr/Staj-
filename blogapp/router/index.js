import { createRouter, createWebHistory } from 'vue-router'
import BlogList from '../views/BlogList.vue'
import BlogDetail from '../views/BlogDetail.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', component: BlogList },
  { path: '/blog/:id', component: BlogDetail },
  { path: '/:pathMatch(.*)*', component: NotFound } // 404 yakalayıcı
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
