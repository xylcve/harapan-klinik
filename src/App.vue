<template>
  <div id="app" class="relative w-full max-w-md min-h-screen font-sans text-gray-800 flex flex-col pb-20 m-auto">
    <NavbarTop v-if="!isLoginPage && !isRegisterPage && !isLandingPage" />
    <main class="flex-grow bg-primary flex flex-col">
      <router-view></router-view> <!-- Konten halaman berdasarkan router -->
    </main>
    <Navbar v-if="!isLoginPage && !isRegisterPage && !isLandingPage" class="fixed bottom-0 w-full max-w-md" />

    <!-- Elemen Message hanya ditampilkan di halaman Contact -->
    <div v-if="isContactPage"
      class="bg-gray-light w-11/12 max-w-md flex justify-between items-center p-2 rounded fixed left-1/2 transform -translate-x-1/2 bottom-20 z-50">
      <p class="text-gray">Message...</p>
      <div class="w-10 h-10 rounded-full bg-secondary grid place-items-center">
        <img src="./assets/send.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import NavbarTop from './components/NavbarTop.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    NavbarTop,
  },
  computed: {
    isLoginPage() {
      return this.$route.path === '/login';
    },
    isRegisterPage() {
      return this.$route.path === '/register';
    },
    isLandingPage() {
      return this.$route.path === '/';
    },
    isContactPage() {
      return this.$route.path === '/contact'; // Menambahkan computed property untuk halaman Contact
    },
  },
};
</script>

<style scoped>
/* Anda dapat menambahkan styling tambahan jika perlu */
</style>
