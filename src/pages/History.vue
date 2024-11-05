<template>
  <div class="bg-primary pt-6">
    <p class="text-center text-white">Menu <span class="font-bold">Riwayat</span></p>

    <!-- Summary card -->
    <div class="relative mt-6 flex justify-center items-center">
      <img src="../assets/history-card.svg" alt="" />
      <div class="absolute top-10 text-center">
        <p class="text-primary font-bold text-4xl">10x</p>
        <p class="text-primary mt-4">Total Kunjungan</p>
      </div>
    </div>

    <!-- List of visits -->
    <div class="bg-primary-darker w-fit py-4 px-6 mt-6 text-white rounded-tr-3xl">
      <p>Riwayat Kunjungan</p>
    </div>
    <div class="bg-white w-full rounded-tr-3xl">
      <ul class="p-6">
        <li v-for="(visit, index) in visits" :key="visit.id" class="flex items-center mt-4">
          <div class="bg-secondary rounded-full w-10 h-10 grid place-items-center text-white text-xl">
            {{ visit.id }}
          </div>
          <div class="ml-4 text-primary flex-auto">
            <p class="font-bold">Kunjungan, {{ visit.date }}</p>
            {{ visit.time }}
          </div>
          <!-- Ikon besar hanya untuk kunjungan terbaru (index 0) -->
          <div v-if="index === 0" class="w-6 h-6 bg-secondary rounded relative grid place-items-center">
            <div class="w-3 h-3 bg-white absolute rounded-full"></div>
          </div>
          <div v-else class="w-2 h-2 bg-secondary rounded-full mr-2"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'History',
  data() {
    return {
      visits: [
        { id: 10, date: '12 Oktober 2024', time: '18:15 WIB' },
        { id: 9, date: '5 Oktober 2024', time: '18:45 WIB' },
        { id: 8, date: '28 September 2024', time: '19:10 WIB' },
        { id: 7, date: '21 September 2024', time: '19:35 WIB' },
        { id: 6, date: '14 September 2024', time: '19:50 WIB' },
        { id: 5, date: '7 September 2024', time: '20:05 WIB' },
        { id: 4, date: '31 Agustus 2024', time: '20:20 WIB' },
        { id: 3, date: '24 Agustus 2024', time: '20:40 WIB' },
        { id: 2, date: '17 Agustus 2024', time: '20:55 WIB' },
        { id: 1, date: '10 Agustus 2024', time: '21:00 WIB' },
      ],
    };
  },
};
</script>