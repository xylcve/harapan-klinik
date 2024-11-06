<template>
  <div id="app"
    class="relative w-full max-w-md h-screen font-sans text-gray-800 flex flex-col m-auto text-sm drop-shadow-2xl">

    <!-- Navbar Top (Hanya tampil saat bukan di halaman Login, Register, dan Landing) -->
    <NavbarTop v-if="!isLoginPage && !isRegisterPage && !isLandingPage" class="sticky top-0 w-full z-10 bg-primary" />

    <!-- Main Content yang dapat di-scroll -->
    <main class="flex-grow bg-white overflow-auto">
      <router-view></router-view> <!-- Konten halaman berdasarkan router -->
    </main>

    <!-- Elemen Message hanya ditampilkan di halaman Contact -->
    <div class="sticky bottom-0 z-50 bg-white">
      <div v-if="isContactPage"
        class="bg-gray-light w-11/12 max-w-md flex justify-between items-center mx-auto mb-4 p-2 rounded">
        <input type="text" placeholder="Type your message..." v-model="messageText"
          class="w-full p-2 rounded text-gray outline-none bg-gray-light" />
        <div class="w-10 h-10 rounded-full bg-secondary grid place-items-center">
          <img src="./assets/send.svg" alt="Send" />
        </div>
      </div>

      <!-- Navbar Sticky di Bagian Bawah Layar -->
      <Navbar v-if="!isLoginPage && !isRegisterPage && !isLandingPage" />
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
  data() {
    return {
      messageText: '', // Menyimpan nilai input pesan
    };
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
/* Styling tambahan jika diperlukan */
</style>
