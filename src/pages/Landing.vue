<template>
  <div class="grid place-items-center min-h-screen">
    <div class="relative w-full md:hidden">
      <div class="absolute top-0 w-full h-96 bg-primary rounded-b-xl z-10"></div>
      <div class="absolute top-0 w-full h-full bg-white z-0"></div>
      <div class="relative z-20 pt-6">
        <img src="../assets/logo-big.svg" alt="" class="m-auto" />
        <div class="m-4 mt-10 p-4 sm:p-12 bg-pure-white shadow-xl rounded-lg">
          <p class="text-lg font-bold text-primary text-center">Selamat datang di Harapan Klinik</p>
          <p class="text-primary text-center mt-2">Kesehatan Anda, prioritas kami. Antri lebih mudah, pelayanan
            lebih
            cepat.</p>
          <hr class="text-primary mt-6 w-2/4 m-auto" />
          <hr class="text-primary mt-2 w-3/4 m-auto" />
          <hr class="text-primary mt-2 w-full m-auto" />
          <p class="mt-4 text-primary sm:text-center">Silahkan <span class="font-bold">Login</span> untuk melanjutkan ke
            Aplikasi
          </p>

          <!-- Login Button -->
          <LoginCard />

          <p class="mt-4 text-primary sm:text-center">Belum punya akun? <span class="font-bold">Daftar Sekarang!</span>
          </p>

          <!-- Register Button -->
          <RegisterCard />
        </div>

        <div class="m-4 p-4">
          <Information />
        </div>
      </div>
    </div>
    <div class="hidden md:flex w-full h-full lg:h-fit lg:w-10/12 bg-primary lg:rounded-lg items-center">
      <div class="flex-1 p-8"><img src="../assets/logo-big.svg" alt="" class="mb-12 mx-auto">
        <Information />
      </div>
      <div class="flex-1 p-8">
        <div class="relative z-20">
          <div class="p-4 sm:p-12 bg-pure-white shadow-xl rounded-lg">
            <p class="text-lg font-bold text-primary text-center">Selamat datang di Harapan Klinik</p>
            <p class="text-primary text-center mt-2">Kesehatan Anda, prioritas kami. Antri lebih mudah, pelayanan
              lebih
              cepat.</p>
            <hr class="text-primary mt-6 w-2/4 m-auto" />
            <hr class="text-primary mt-2 w-3/4 m-auto" />
            <hr class="text-primary mt-2 w-full m-auto" />
            <p class="mt-4 text-primary sm:text-center">Silahkan <span class="font-bold">Login</span> untuk melanjutkan
              ke
              Aplikasi
            </p>

            <!-- Login Button -->
            <LoginCard />

            <p class="mt-4 text-primary sm:text-center">Belum punya akun? <span class="font-bold">Daftar
                Sekarang!</span>
            </p>

            <!-- Register Button -->
            <RegisterCard />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Information from '../components/Information.vue';
import LoginCard from '../components/LoginCard.vue';
import RegisterCard from '../components/RegisterCard.vue';

export default {
  name: 'Landing',
  components: {
    Information,
    LoginCard,
    RegisterCard
  },
};
</script>
