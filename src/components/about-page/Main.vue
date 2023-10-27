<template>
   <div>
        <!-- navbar -->
        <Navbar />

    <!-- hero section -->
    <div class="bg-[url('/assets/about-herobg.png')] bg-no-repeat bg-cover bg-center">
        <div class="inline-flex flex-col items-start gap-[9px] py-[155px] pl-[86px] pr-[522px]">
            <h1 class="text-gray6 font-poppins text-[50px] font-bold">About Us</h1>
            <h3 class="text-gray5 font-poppins text-lg font-medium">What we do</h3>
        </div>
    </div>

    <!-- our story -->
    <div class="bg-cd-background py-[84px] px-[75px]">
        <div class="flex flex-col md:flex-row items-center">
            <div class=" w-auto md:w-[472px] pr-11">
                <h2 class="text-black font-poppins text-[32px] font-bold leading-[57px] tracking-[0.32px] uppercase">Our Story</h2>
                <p class="py-5 text-[#424242] font-poppins text-base font-normal leading-[34px] tracking-[0.16px]">TTL was founded in Kenya to promote African music globally, providing digital opportunities for independent artists and labels in a nascent digital industry. With a team of passionate DJs, producers, radio presenters, record label owners, artist agents, and entrepreneurs, TTL is strategically positioned at the intersection of Africa</p> 
                <button class="bg-[#262772] flex px-10 py-[10px] items-start gap-[10px] text-white font-roboto text-base font-medium leading-6 capitalize">Start your Journey</button>
            </div>

            <div class="relative p-5 w-screen md:w-[618px] h-[390px] pt-9">
                <video controls src="/assets/about-ourstory.mp4"></video>
            </div>
        </div>
    </div>

    <!-- artist and producer -->
    <div class="bg-cardblue">
        <div class="px-16 pb-16 pt-11">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div v-for="(client, index) in clients" :key="index" class="text-white">
                    <div class="image-container">
                        <img :src="client.image" :alt="client.artist" class="w-full h-auto" />
                        <div class="overlay-container">
                        <div class="overlay-text">
                        <h2 class="font-poppins text-[20px] font-bold uppercase">Artist Name</h2>
                        <h2 class="font-poppins text-base font-medium uppercase">Music Producer</h2>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- careers section -->
    <div class=" bg-cd-background md:px-10 pt-[106px] pb-[120px]">
        <h2 class="text-black font-poppins text-3xl font-bold leading-[57px] tracking-[0.32px] uppercase pl-1 py-6">CAREERS</h2>
        <div class=" bg-white px-[38px] py-[40px] flex flex-wrap gap-6 justify-center">
                    <CardComponent 
                        image="/assets/card1.png"
                        altText="card1"
                        title="Content Creator and Video Editor"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has"
                    />
                    <CardComponent 
                        image="/assets/card2.png"
                        altText="card2"
                        title="Content Creator and Video Editor"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has"
                    />
                    <CardComponent 
                        image="/assets/card3.png"
                        altText="card3"
                        title="Content Creator and Video Editor"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has"
                    />
                    <CardComponent 
                        image="/assets/card4.png"
                        altText="card5"
                        title="Content Creator and Video Editor"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has"
                    />
                    <CardComponent 
                        image="/assets/card5.png"
                        altText="card5"
                        title="Content Creator and Video Editor"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has"
                    />
                    <CardComponent 
                        image="/assets/card6.png"
                        altText="card6"
                        title="Content Creator and Video Editor"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has"
                    />
        </div>
    </div>

    <!-- Footer -->
    <Footer />
   </div>
</template>

<script setup>
import Navbar from '../navbar/Main.vue';
import { ref } from 'vue'
import CardComponent from './CardComponent.vue';
import Footer from '../footer/Main.vue';

// Initialize an array of different image URLs
const imageUrls = [
  '/assets/artist1.png',
  '/assets/artist2.png',
  '/assets/artist3.png',
  '/assets/artist4.png',
  '/assets/artist5.png',
  '/assets/artist6.png',
  '/assets/artist7.png',
  '/assets/artist8.png',
];

// Shuffle the imageUrls array using Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle the imageUrls array
shuffleArray(imageUrls);

// Initialize empty array to store client images
const clients = ref([])

// Loop through the imageUrls array and assign images to clients
for (let i = 0; i < 8; i++) {
    const imageUrl = imageUrls[i];
  
  clients.value.push({
    image: imageUrl,
    artist: `Artist name ${i + 1}`,
  });
}
</script>

<style scoped>
.image-container {
  position: relative;
  width: 100%;
}

.overlay-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top: 306px;
  padding-bottom: 18px;
}

.overlay-text {
    display: inline-flex;
    padding: 12px 36px;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    text-align: center;
    background: #FFF;
    color: var(--gray-1, #333);
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 24px;
}
</style>