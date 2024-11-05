<template>
  <div class="relative">
    <div class="w-full h-64 bg-primary rounded-b-xl absolute top-0 z-10"></div>
    <div class="bg-white w-full min-h-screen absolute top-0 z-0"></div>
    <div class="relative z-20 pt-6">
      <p class="text-white text-center">Menu <span class="font-bold">Profile</span></p>
      <div class="bg-pure-white p-4 m-4 rounded-lg shadow-lg">
        <div v-for="(item, index) in profileFields" :key="index" class="mt-4 bg-white flex p-3 items-center rounded">
          <img :src="item.icon" alt="" class="w-6 h-6">
          <!-- Menampilkan input type date untuk tanggal lahir -->
          <input v-if="item.placeholder === 'Tanggal Lahir'" type="date" v-model="item.value" readonly
            class="ml-2 w-full outline-none bg-white text-gray cursor-not-allowed" />
          <input v-else type="text" v-model="item.value" :placeholder="item.placeholder" readonly
            class="ml-2 w-full outline-none bg-white text-gray cursor-not-allowed" />
        </div>
        <div class="mt-4 flex text-gray">
          <p class="font-semibold">Jenis Kelamin: </p>
          <div class="flex gap-2 items-center ml-4">
            <input type="checkbox" v-model="gender.pria" disabled>
            <span>Pria</span>
          </div>
          <div class="flex gap-2 items-center ml-4">
            <input type="checkbox" v-model="gender.wanita" disabled>
            <span>Wanita</span>
          </div>
        </div>
        <button @click="openEditDialog"
          class="bg-primary w-full flex justify-center p-2 rounded mt-4 text-white gap-2 items-center">
          <img src="../assets/edit-profile.svg" alt="" class="w-8 h-8"><span class="font-bold">Edit Profile</span>
        </button>
      </div>
      <div class="px-4 mx-4">
        <button @click="showConfirmDialog = true"
          class="bg-red w-full mx-auto flex justify-center p-2 rounded mt-4 text-white gap-2 items-center">
          <img src="../assets/logout.svg" alt="" class="w-8 h-8"><span class="font-bold">Logout</span>
        </button>
      </div>
    </div>

    <!-- Dialog Edit Profile -->
    <div v-if="showEditDialog" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
      <div class="bg-white p-6 m-6 w-full rounded-lg shadow-lg">
        <p class="text-gray font-bold text-lg">Edit Profile</p>
        <hr class="my-2 h-px border-0 bg-gray-light">
        <div v-for="(item, index) in editProfileFields" :key="index"
          class="mt-4 bg-white flex p-3 items-center rounded">
          <img :src="item.icon" alt="" class="w-6 h-6">
          <!-- Menampilkan input type date untuk tanggal lahir -->
          <input v-if="item.placeholder === 'Tanggal Lahir'" type="date" v-model="item.value"
            class="ml-2 w-full outline-none bg-white text-gray" />
          <input v-else type="text" v-model="item.value" :placeholder="item.placeholder"
            class="ml-2 w-full outline-none bg-white text-gray" />
        </div>
        <div class="mt-4 flex text-gray">
          <p class="font-semibold">Jenis Kelamin: </p>
          <div class="flex gap-2 items-center ml-4">
            <input type="checkbox" v-model="editGender.pria">
            <span>Pria</span>
          </div>
          <div class="flex gap-2 items-center ml-4">
            <input type="checkbox" v-model="editGender.wanita">
            <span>Wanita</span>
          </div>
        </div>
        <div class="flex justify-end gap-4 mt-4">
          <button @click="showEditDialog = false"
            class="bg-gray-light px-4 py-2 text-gray rounded font-bold">Batal</button>
          <button @click="updateProfile" class="bg-primary text-white px-4 py-2 rounded font-bold">Simpan</button>
        </div>
      </div>
    </div>

    <!-- Dialog Konfirmasi -->
    <div v-if="showConfirmDialog" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
      <div class="bg-white p-6 m-6 w-full rounded-lg shadow-lg">
        <p class="text-gray font-bold text-lg">Konfirmasi</p>
        <hr class="my-2 h-px border-0 bg-gray-light">
        <p class="text-gray font-semibold mt-4">Apakah Anda yakin ingin logout?</p>
        <div class="flex justify-end gap-4 mt-4">
          <button @click="showConfirmDialog = false"
            class="bg-gray-light px-4 py-2 text-gray rounded font-bold">Batal</button>
          <button @click="logout" class="bg-red text-white px-4 py-2 rounded font-bold">Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PersonIcon from '../assets/person.svg';
import EmailIcon from '../assets/email.svg';
import PhoneIcon from '../assets/phone.svg';
import DateIcon from '../assets/date.svg';
import LocationIcon from '../assets/location.svg';

export default {
  name: 'Account',
  data() {
    return {
      showConfirmDialog: false,
      showEditDialog: false,
      profileFields: [
        { icon: PersonIcon, value: 'Afif Arifin', placeholder: 'Nama Lengkap' },
        { icon: EmailIcon, value: 'afif@example.com', placeholder: 'Email' },
        { icon: PhoneIcon, value: '08123456789', placeholder: 'No. HP' },
        { icon: DateIcon, value: '2000-01-01', placeholder: 'Tanggal Lahir' }, // Format tanggal
        { icon: LocationIcon, value: 'Jl. Contoh No. 123', placeholder: 'Alamat Lengkap' }
      ],
      gender: {
        pria: true,
        wanita: false
      },
      // Properti untuk menyimpan salinan data yang sedang diedit
      editProfileFields: [],
      editGender: {}
    };
  },
  methods: {
    openEditDialog() {
      // Salin data ke dalam editProfileFields dan editGender
      this.editProfileFields = JSON.parse(JSON.stringify(this.profileFields));
      this.editGender = { ...this.gender };
      this.showEditDialog = true; // Tampilkan dialog edit
    },
    logout() {
      this.$router.push('/'); // Mengarahkan ke halaman utama
    },
    updateProfile() {
      // Perbarui data asli dengan data yang diedit
      this.profileFields = JSON.parse(JSON.stringify(this.editProfileFields));
      this.gender = { ...this.editGender };
      console.log('Profile updated:', this.profileFields);
      this.showEditDialog = false; // Tutup dialog setelah menyimpan
    }
  }
};
</script>

<style scoped>
/* CSS tambahan untuk tampilan readonly */
input[readonly] {
  background-color: #edf2f7;
}
</style>
