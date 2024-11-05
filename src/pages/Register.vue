<template>
  <div class="relative">
    <div class="absolute top-0 w-full h-96 bg-primary rounded-b-xl z-10"></div>
    <div class="absolute top-0 w-full h-full bg-white z-0"></div>
    <div class="relative z-20 pt-12 px-6">
      <img src="../assets/logo-small.svg" alt="" class="m-auto">
      <p class="text-white text-lg mt-6 font-semibold">Menu <span class="font-bold">Daftar</span></p>
      <p class="text-white">Silahkan Daftar untuk melanjutkan ke dalam <br> Aplikasi.</p>
      <div class="bg-pure-white shadow-lg rounded-lg p-10 mt-6">
        <div class="bg-white flex items-center rounded xl:p-4">
          <img src="../assets/person.svg" alt="" class="w-8 h-8">
          <input type="text" placeholder="Nama Lengkap" v-model="fullName"
            class="text-gray font-semibold ml-2 w-full outline-none bg-white" />
        </div>
        <div class="mt-8 bg-white flex items-center rounded xl:p-4">
          <img src="../assets/email.svg" alt="" class="w-8 h-8">
          <input type="text" placeholder="Email" v-model="email"
            class="text-gray font-semibold ml-2 w-full outline-none bg-white" />
        </div>
        <div class="mt-8 bg-white flex items-center rounded xl:p-4 relative">
          <img src="../assets/lock.svg" alt="" class="w-8 h-8">
          <input :type="showPassword ? 'text' : 'password'" placeholder="Password" v-model="password"
            class="text-gray font-semibold ml-2 w-full outline-none bg-white" />
          <img :src="showPassword ? eyeOpenIcon : eyeClosedIcon" alt="" class="w-6 h-6 absolute right-3 cursor-pointer"
            @click="togglePasswordVisibility" />
        </div>
        <div class="mt-8 bg-white flex items-center rounded xl:p-4 relative">
          <img src="../assets/lock.svg" alt="" class="w-8 h-8">
          <input :type="showConfirmPassword ? 'text' : 'password'" placeholder="Konfirmasi Password"
            v-model="confirmPassword" class="text-gray font-semibold ml-2 w-full outline-none bg-white" />
          <img :src="showConfirmPassword ? eyeOpenIcon : eyeClosedIcon" alt=""
            class="w-6 h-6 absolute right-3 cursor-pointer" @click="toggleConfirmPasswordVisibility" />
        </div>
        <div class="mt-8 bg-white flex items-center rounded xl:p-4">
          <img src="../assets/phone.svg" alt="" class="w-8 h-8">
          <input type="text" placeholder="No HP" v-model="phoneNumber"
            class="text-gray font-semibold ml-2 w-full outline-none bg-white" />
        </div>
        <div class="mt-8 bg-white flex items-center rounded xl:p-4">
          <img src="../assets/date.svg" alt="" class="w-8 h-8">
          <input type="text" placeholder="Tanggal Lahir" v-model="birthDate"
            class="text-gray font-semibold ml-2 w-full outline-none bg-white" />
        </div>
        <div class="mt-8 bg-white flex items-center rounded xl:p-4">
          <img src="../assets/location.svg" alt="" class="w-8 h-8">
          <input type="text" placeholder="Alamat" v-model="address"
            class="text-gray font-semibold ml-2 w-full outline-none bg-white" />
        </div>
        <div class="mt-8 flex text-gray">
          <p class="font-semibold">Jenis Kelamin: </p>
          <div class="flex gap-2 items-center ml-4">
            <input type="radio" id="pria" value="Pria" v-model="gender" />
            <label for="pria">Pria</label>
          </div>
          <div class="flex gap-2 items-center ml-4">
            <input type="radio" id="wanita" value="Wanita" v-model="gender" />
            <label for="wanita">Wanita</label>
          </div>
        </div>
        <button @click="handleRegister" class="w-full bg-secondary mt-8 text-white p-3 rounded font-bold">Daftar
          Sekarang</button>
      </div>
      <p class="mt-8 text-primary">Sudah punya akun? <span class="font-bold">Login Sekarang!</span></p>
      <LoginCard />
      <Information class="mt-8" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import LoginCard from '../components/LoginCard.vue';
import Information from '../components/Information.vue';

// Import ikon mata
import eyeOpenIcon from '../assets/eye-open.svg';
import eyeClosedIcon from '../assets/eye-closed.svg';

export default {
  name: 'Register',
  components: {
    LoginCard,
    Information
  },
  setup() {
    const fullName = ref('');
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const phoneNumber = ref('');
    const birthDate = ref('');
    const address = ref('');
    const gender = ref(''); // Menyimpan nilai "Pria" atau "Wanita"

    const showPassword = ref(false);
    const showConfirmPassword = ref(false);
    const router = useRouter();

    const handleRegister = () => {
      // Simulasi register berhasil tanpa validasi
      router.push('/home');
    };

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };

    const toggleConfirmPasswordVisibility = () => {
      showConfirmPassword.value = !showConfirmPassword.value;
    };

    return {
      fullName,
      email,
      password,
      confirmPassword,
      phoneNumber,
      birthDate,
      address,
      gender,
      showPassword,
      showConfirmPassword,
      eyeOpenIcon,
      eyeClosedIcon,
      handleRegister,
      togglePasswordVisibility,
      toggleConfirmPasswordVisibility,
    };
  },
};
</script>
