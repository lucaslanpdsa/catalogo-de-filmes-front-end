import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Search',
      component: () => import('@/views/Search.vue')
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: () => import('@/views/Favorite.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
});

export default router;