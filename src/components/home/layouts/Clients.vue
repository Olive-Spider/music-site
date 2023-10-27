<template>
    <div class="bg-black">
        <div class="px-16 pb-32 pt-20">
            <div class="flex flex-col items-center gap-4 pb-14 lg:px-40">
                <h2 class="text-gray6 font-poppins text-3xl font-semibold leading-[56px] tracking-[0.32px] uppercase">Clients</h2>
                <p class="text-gray3 pt-4 text-center font-roboto text-lg font-normal leading-7 capitalize">Lorem ipsum dolor sit amet consectetur. Massa convallis sed a dui id scelerisque tellus vestibulum. Eros sit porttitor est vel sed</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div v-for="(client, index) in clients" :key="index" class="text-white">
                    <img :src="client.image" :alt="client.artist" class="w-full h-auto" />
                    <h3 class="pt-5 text-gray6 font-poppins text-lg font-bold uppercase">{{ client.artist }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// Initialize empty array to store client images
const clients = ref([])

for (let i = 0; i < 12; i++) {
    const randomImage = `https://picsum.photos/270/260?random=${i}`;
    clients.value.push({
        image: randomImage,
        artist: `Artist name`,
    });
}
</script>

