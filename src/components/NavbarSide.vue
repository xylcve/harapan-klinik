<template>
    <div class="hidden md:flex h-screen w-36 fixed left-0 top-0">
        <div class="bg-primary m-4 pt-4 w-full flex flex-col items-center rounded">
            <img src="../assets/logo-small.svg" alt="">
            <hr class="h-px mt-6 w-full border-0 bg-gray-light">
            <ul class="flex justify-between flex-col items-center m-2 w-full px-2 gap-12 mt-6">
                <li v-for="item in navItems" :key="item.path" class="w-full">
                    <router-link :to="item.path" exact
                        :class="{ 'bg-white text-primary font-bold': $route.path === item.path }"
                        class="w-full py-2 rounded flex flex-col justify-center items-center gap-1">
                        <img :src="$route.path === item.path ? item.iconFilled : item.icon" :alt="item.name" />
                        <span :class="$route.path === item.path ? 'text-primary' : 'text-white'">{{ item.name }}</span>
                    </router-link>

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import HomeFilledIcon from '../assets/home-filled.svg';
import HomeIcon from '../assets/home.svg';
import HistoryFilledIcon from '../assets/history-filled.svg';
import HistoryIcon from '../assets/history.svg';
import ChatFilledIcon from '../assets/chat-filled.svg';
import ChatIcon from '../assets/chat.svg';
import AccountFilledIcon from '../assets/account-filled.svg';
import AccountIcon from '../assets/account.svg';

export default {
    name: 'NavbarSide',
    data() {
        return {
            navItems: [
                {
                    name: 'Home',
                    path: '/home',
                    icon: HomeIcon,
                    iconFilled: HomeFilledIcon,
                },
                {
                    name: 'Riwayat',
                    path: '/riwayat',
                    icon: HistoryIcon,
                    iconFilled: HistoryFilledIcon,
                },
                {
                    name: 'Pesan',
                    path: '/pesan',
                    icon: ChatIcon,
                    iconFilled: ChatFilledIcon,
                },
                {
                    name: 'Akun',
                    path: '/akun',
                    icon: AccountIcon,
                    iconFilled: AccountFilledIcon,
                },
            ],
        };
    },
};
</script>
