<template>
    <div
        class="flex max-w-md mx-auto justify-center items-center gap-6 bg-secondary md:bg-secondary m-4 p-4 rounded-lg">
        <img src="../assets/register-big.svg" alt="" />
        <router-link to="/register" class="bg-white text-primary py-2 px-4 rounded font-semibold">Daftar
            Sekarang</router-link>
    </div>
</template>

<script>

export default {
    name: 'RegisterCard',
};
</script>