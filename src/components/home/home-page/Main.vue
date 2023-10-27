<script setup>
import { ref } from 'vue'
import Navbar from '../../navbar/Main.vue';
import Clients from '../layouts/Clients.vue';
import Footer from '../../footer/Main.vue';
import carausel from '../layouts/carausel.vue';
import Occasions from '../layouts/Occasions.vue';

const services = ref([
    {
        image: '/assets/distribution.png',
        title: 'Distribution',
        description: 'We deliver to a network of 200+ international and African platforms. With 6 years in Africa, we understand the unique environment of the African market and have built the network to match it.'
    },
    {
        image: '/assets/videoMonetisation.png',
        title: 'Video Monetisation',
        description: 'Our team of certified video experts will take care of your video content optimisation, YouTube channel management, ownership conflict resolution and music video submissions to TV stations.'
    },
    {
        image: '/assets/marketing.png',
        title: 'Marketing',
        description: 'Our team of certified video experts will take care of your video content optimisation, YouTube channel management, ownership conflict resolution and music video submissions to TV stations.'
    }
])

// Arrays for the different styling of the services section
const cardBackgrounds = [
    'bg-cardblue',
    'bg-cardwhite',
    'bg-cardwhite',
]
const textColors = [
    'text-gray6',
    'text-black',
    'text-black',
]
// Functions to assign background color based on index
const cardClass = (index) => {
    const colorIndex = index % cardBackgrounds.length;
    return `${cardBackgrounds[colorIndex]} py-6 px-5`;
}
const titleClass = (index) => {
    const colorIndex = index % textColors.length;
    return `${textColors[colorIndex]} text-center text-2xl tracking-[0.24px] leading-10 font-semibold font-poppins uppercase font-semibold mb-2`;
}

const about = ref([
    {
        title: 'The Home of African Music',
        description: 'Destination for independent African artists and labels from across the continent and in the Diaspora.'
    },
    {
        title: 'Our Root Run Deep',
        description: 'TTL was established to provide digital opportunities for African artists, recognizing the lack of such opportunities in the nascent digital industry.'
    },
    {
        title: 'Local and International',
        description: 'TTL is a Kenyan-based platform for independent African artists and labels, strategically positioned at the intersection between Africa and the global music industry'
    }
])

const scrollImages = (step) => {
    const container = document.querySelector('.overflow-x-auto');
    if (container) {
        container.scrollLeft += container.offsetWidth * step;
    }
};

</script>

<template>
    <Navbar />

    <!-- The home page hero section -->

    <carausel />

    <!-- The home page services section  -->
    <div class="flex bg-bgservices flex-shrink-0 pt-[77px] pb-[74px] pl-[69px] pr-[81.6px]">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div v-for="(service, index) in services" :key="index" :class="cardClass(index)">
                <img :src="service.image" :alt="service.title" class="w-16 h-16 mx-auto mb-4" />
                <h3 :class="titleClass(index)">{{ service.title }}</h3>
                <p class="text-textservices text-center font-poppins text-sm font-normal tracking-[0.14px]">{{ service.description }}</p>
            </div>
        </div>
    </div>

    <!-- The home page about section -->
    <div class=" bg-cd-background md:px-20 pt-14 pb-7 flex">
        <div class="py-3 px-12 bg-white flex">
            <div class="py-5 flex flex-col lg:flex-row">
                <div class="py-5">
                    <h2 class="flex text-[#333333] font-poppins font-semibold text-4xl leading-[57px] tracking-[0.32px] pl-5 capitalize">Who we are</h2>
                    <div v-for="(about, index) in about" :key="index" class="m-5">
                        <h3 class="text-gray2 font-roboto text-base font-semibold">{{ about.title }}</h3>
                        <p class="text-textservices font-poppins text-sm font-normal leading-6 tracking-[0.14px]">{{ about.description }}</p>
                    </div>
                    <div class="pl-5">
                        <button class="bg-[#262772] flex px-10 py-2 items-start gap-3 text-white font-roboto text-base font-medium leading-6 capitalize">Start Your Journey</button> 
                    </div>
                </div>
                <img src="/assets/cdimage.png" alt="company description image">
            </div>
        </div>
    </div>

    <!-- Home page Clients section -->
    <Clients />

    <!-- Home page call to action (CTA) -->
    <div class="bg-[url('/assets/cta-bg-image.png')] bg-no-repeat bg-cover bg-center">
        <div class="px-7 lg:px-72 pt-[91px] pb-20 text-center flex flex-col">
            <h1 class="text-white font-poppins text-3xl font-bold capitalize">Transformin Music Industry</h1>
            <p class="text-white py-5 font-poppins text-base font-normal leading-7 capitalize">Lorem ipsum dolor sit amet consectetur. Massa convallis sed a dui id scelerisque tellus vestibulum. Eros sit porttitor est vel sed mus turpis pellentesque lectus. Nisl enim at velit porta amet tincidunt porttitor nunc. Eu turpis ut malesuada nisl.</p>
            <div class="flex justify-center">
                <button class="flex px-10 py-3 items-start gap-3 bg-iris/100 text-white font-roboto text-base font-normal leading-6 capitalize">Join Us</button>
            </div>
        </div>
    </div>

    <!-- Home page events section -->
    <Occasions />

    <!-- Home page footer -->
    <Footer />

</template>


