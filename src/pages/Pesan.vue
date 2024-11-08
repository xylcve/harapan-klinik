<template>
  <div class="bg-primary md:bg-white md:py-4 flex flex-col h-screen md:ml-36 md:pr-4">
    <div class="bg-primary h-screen rounded flex flex-col md:pb-4">
      <p class="text-white text-center md:mt-10">Menu <span class="font-bold">Pesan</span></p>
      <div class="md:mx-4 flex-grow mt-6 bg-white rounded-t-3xl md:rounded relative">
        <div class="w-full bg-white flex-grow mt-6 rounded-t-3xl p-6 flex flex-col overflow-y-auto">
          <div class="bg-gray-light w-fit p-2 rounded-tl-xl rounded-tr-xl rounded-br-xl">
            <p class="pr-2 text-gray">Hai, Afif</p>
          </div>
          <div class="bg-gray-light w-fit p-2 rounded-tl-xl rounded-tr-xl rounded-br-xl mt-2">
            <p class="pr-2 text-gray">Ada yang bisa kami bantu?</p>
          </div>
          <div class="bg-secondary w-fit p-2 rounded-tl-xl rounded-tr-xl rounded-bl-xl mt-2 ml-auto">
            <p class="pr-2 text-white">Hai, apakah bisa pakai BPJS?</p>
          </div>

        </div>
        <div class="absolute top-0 w-full h-full flex flex-col">
          <div class="flex-1"></div>
          <div class="hidden sticky bottom-0 md:flex z-50 w-full px-4">
            <div v-if="isContactPage"
              class="bg-gray-light w-full flex justify-between items-center mx-auto mb-4 p-2 rounded">
              <input type="text" placeholder="Type your message..." v-model="messageText"
                class="w-full p-2 rounded text-gray outline-none bg-gray-light" />
              <div class="w-10 h-10 rounded-full bg-secondary grid place-items-center">
                <img src="../assets/send.svg" alt="Send" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Contact',
  computed: {
    isContactPage() {
      return this.$route.path === '/pesan';
    },
  },
};
</script>