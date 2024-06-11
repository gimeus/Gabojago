import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Isu from '@/pages/Isu.vue';
import Hyunsoo from '@/pages/Hyunsoo.vue';
import Gun from '@/pages/Gun.vue';
import Siwan from '@/pages/Siwan.vue';
import TravleName from '@/pages/TravleName.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/isu',
      name: 'isu',
      component: Isu,
    },
    {
      path: '/hyunsoo',
      name: 'hyunsoo',
      component: Hyunsoo,
    },
    {
      path: '/gun',
      name: 'gun',
      component: Gun,
    },
    {
      path: '/siwan',
      name: 'siwan',
      component: Siwan,
    },
    {
      path: '/TravleName',
      name: 'TravleName',
      component: TravleName,
    },
  ],
});

export default router;
