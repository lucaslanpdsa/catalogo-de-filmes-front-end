import { createRouter, createWebHistory } from 'vue-router';
import Search from '../views/Search.vue';
import NotFoundView from '../views/NotFoundView.vue';
import Favorites from '../views/Favorite.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Search },
    { path: '/Favorites', component: Favorites },
    { path: '/:pathMatch(.*)*', component: NotFoundView },
  ],
});

export default router;
