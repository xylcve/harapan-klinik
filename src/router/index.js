import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../pages/Landing.vue';
import Home from '../pages/Home.vue';
import History from '../pages/History.vue';
import Contact from '../pages/Contact.vue';
import Account from '../pages/Account.vue';
import Login from '../pages/Login.vue'; // Import halaman Login
import Register from '../pages/Register.vue'; // Import halaman Register
import HomeAntrian from '../pages/HomeAntrian.vue';

const routes = [
  { path: '/', component: Landing }, // Halaman landing
  { path: '/home', component: Home },
  { path: '/home-antrian', component: HomeAntrian },
  { path: '/history', component: History },
  { path: '/contact', component: Contact },
  { path: '/account', component: Account },
  { path: '/login', component: Login }, // Rute untuk halaman Login
  { path: '/register', component: Register }, // Rute untuk halaman Register
];

const router = createRouter({
  history: createWebHistory('/harapan-klinik/'), 
  routes,
});

export default router;
