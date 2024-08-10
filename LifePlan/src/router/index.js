import { createRouter, createWebHistory } from 'vue-router' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/web/LwHome.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../pages/web/LwAbout.vue')
    },
    {
      path: '/product',
      name: 'Product',
      component: () => import('../pages/web/LwProduct.vue')
    },
    {
      path: '/price',
      name: 'Price',
      component: () => import('../pages/web/LwPrice.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../pages/web/LwLogin.vue')
    },
  ]
  
})
  
export default router