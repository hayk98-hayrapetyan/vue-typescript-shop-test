import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: () => import('@/views/ProductView.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('@/views/CartView.vue')
    }
  ]
})

export default router
