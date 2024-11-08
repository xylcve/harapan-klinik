<template>
  <div id="app" class="relative w-full h-screen flex flex-col m-auto text-sm drop-shadow-2xl">

    <NavbarTop v-if="!isLoginPage && !isRegisterPage && !isLandingPage" />
    <NavbarSide v-if="!isLoginPage && !isRegisterPage && !isLandingPage" />

    <main class="flex-grow bg-white overflow-auto">
      <router-view></router-view>
    </main>

    <div class="sticky bottom-0 z-50 bg-white md:hidden">
      <div class="w-full">
        <div v-if="isContactPage"
          class="bg-gray-light w-11/12 flex justify-between items-center mx-auto mb-4 p-2 rounded">
          <input type="text" placeholder="Type your message..." v-model="messageText"
            class="w-full p-2 rounded text-gray outline-none bg-gray-light" />
          <div class="w-10 h-10 rounded-full bg-secondary grid place-items-center">
            <img src="./assets/send.svg" alt="Send" />
          </div>
        </div>
      </div>
      <Navbar v-if="!isLoginPage && !isRegisterPage && !isLandingPage" />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import NavbarTop from './components/NavbarTop.vue';
import NavbarSide from './components/NavbarSide.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    NavbarTop,
    NavbarSide
  },
  data() {
    return {
      messageText: '',
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
      return this.$route.path === '/pesan';
    },
  },
};
</script>
