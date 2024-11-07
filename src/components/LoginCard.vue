<template>
    <div class="flex max-w-md mx-auto justify-center items-center gap-6 bg-primary m-4 p-4 rounded-lg">
        <img src="../assets/login-big.svg" alt="" />
        <router-link to="/login" class="bg-white text-primary py-2 px-4 rounded font-semibold">Login
            Sekarang</router-link>
    </div>
</template>

<script>

export default {
    name: 'LoginCard',
};
</script>