import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../pages/Landing.vue';
import Home from '../pages/Home.vue';
import Riwayat from '../pages/Riwayat.vue';
import Pesan from '../pages/Pesan.vue';
import Akun from '../pages/Akun.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';

const routes = [
  { path: '/', component: Landing },
  { path: '/home', component: Home },
  { path: '/riwayat', component: Riwayat },
  { path: '/pesan', component: Pesan },
  { path: '/akun', component: Akun },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
];

const router = createRouter({
  history: createWebHistory('/harapan-klinik/'), 
  routes,
});

export default router;
