<script setup>
import { ref } from 'vue'
import Navbar from '../navbar/Main.vue'
import Footer from '../footer/Main.vue'

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
    },
    {
        image: '/assets/licensing.png',
        title: 'Licensing',
        description: 'We deliver to a network of 200+ international and African platforms. With 6 years in Africa, we understand the unique environment of the African market and have built the network to match it.'
    },
    {
        image: '/assets/musicdownload.png',
        title: 'MUSIC DOWNLOAD',
        description: 'Our team of certified video experts will take care of your video content optimisation, YouTube channel management, ownership conflict resolution and music video submissions to TV stations.'
    },
    {
        image: '/assets/analytics.png',
        title: 'Analytics',
        description: 'Our powerful dashboard allows you to view your daily sales, streams and playlist data from the key platforms. Set up Campaigns to monitor performance and tweak your marketing activities.'
    },
])
const cardBackgrounds = [
    'bg-[#FFFEFE]',
    'bg-[#F1F1F1]',
    'bg-[#F1F1F1]',
    'bg-[#F1F1F1]',
    'bg-[#F1F1F1]',
    'bg-[#F1F1F1]',
]
const textColors = [
    'text-black',  
]
const cardClass = (index) => {
    const colorIndex = index % cardBackgrounds.length;
    return `${cardBackgrounds[colorIndex]} py-6 px-5`;
}
const titleClass = (index) => {
    const colorIndex = index % textColors.length;
    return `${textColors[colorIndex]} text-center text-2xl tracking-[0.24px] leading-10 font-semibold font-poppins uppercase font-semibold mb-2`;
}

const agreement = ref([
    {
        image: '/assets/service-rendering.png',
        title: 'Service Rendering',
        year: 'Since. 2019'
    },
    {
        image: '/assets/music-investor.png',
        title: 'Music Investor Contract',
        year: 'Since. 2011'
    },
    {
        image: '/assets/recording-contract.png',
        title: 'Music Recording Contract',
        year: 'Since. 2011'
    },
    {
        image: '/assets/filming-contract.png',
        title: 'Filming Contract',
        year: 'Since. 2011'
    },
    {
        image: '/assets/filming-contract.png',
        title: 'Music Management',
        year: 'Since. 2011'
    },
    {
        image: '/assets/producer-agreement.png',
        title: 'Producer Agreement',
        year: 'Since. 2011'
    },
])
</script>

<template>
      <div>
        <Navbar />

          <!-- hero section -->
        <div class="bg-[url('/assets/membership-herobg.png')] bg-no-repeat bg-cover bg-center">
              <div class="pt-[185px] pl-3 md:pl-[70px] pb-16">
                  <h1 class=" text-white font-poppins text-5xl lg:text-[56px] font-semibold">Membership</h1>
                  <p class="pt-[9px] text-white font-poppins text-lg font-normal">What we do</p>
              </div>
        </div>

        <!-- associate record label -->
        <div class="inline-flex flex-col items-center gap-6 py-12 md:px-40">
          <h2 class="text-black px-4 md:px-14 lg:px-[190px] font-poppins text-[27px] font-semibold leading-[48px] tracking-[0.27px]">Associate Record Label</h2>
          <p class="text-[#505050] text-center items-center font-poppins text-base font-normal leading-7 tracking-[0.15px] px-5 md:px-0">As an Associate Record Label with TTL, you'll gain access to a platform that is dedicated to promoting and uplifting African music globally. Our team of passionate experts will work with you to develop and execute effective strategies that help you achieve your goals. Join us in our mission to amplify the sounds of Africa to the world.</p>
        </div>
          
         <!-- services section  -->
        <div class="flex bg-white flex-shrink-0 pt-[77px] pb-[74px] pl-[69px] pr-[81.6px]">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div v-for="(service, index) in services" :key="index" :class="cardClass(index)">
                    <img :src="service.image" :alt="service.title" class="w-16 h-16 mx-auto mb-4" />
                    <h3 :class="titleClass(index)">{{ service.title }}</h3>
                    <p class="text-textservices text-center font-poppins text-sm font-normal tracking-[0.14px]">{{ service.description }}</p>
                </div>
            </div>
        </div>

        <!-- how to apply -->
        <div class="bg-black">
            <div class="px-16 py-40">
                <h2 class="text-[#FFFFFF] font-poppins text-[32px] font-bold leading-[57px] tracking-[0.32px] uppercase">How To Apply</h2>
                <p class="text-white font-poppins text-base font-normal leading-[34px] tracking-[0.16px] pt-5">TTL was founded in Kenya to promote African music globally</p>
                <div class="pt-[74px] flex items-start">
                    <div class="flex flex-col md:flex-row gap-5">
                        <!-- 1 -->
                        <div class="flex flex-col items-start gap-[23px]">
                            <h2 class="text-[#5D5FEF] font-poppins text-base font-medium leading-[33px] tracking-[0.16px]">How To Apply</h2>
                            <h2 class="text-white font-poppins text-base font-normal leading-[33px] tracking-[0.16px]">TTL was founded in Kenya to promote African music </h2>
                            <h2 class="text-white font-poppins text-base font-light leading-[33px] tracking-[0.16px]">TTL was founded in Kenya to promote African music globally, providing digital opportunities a</h2>
                            <div class=" inline-flex">
                                <h2 class=" inline-flex items-center gap-4 text-white font-poppins text-base font-normal leading-[33px] tracking-[0.16px]">Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
                                        <g clip-path="url(#clip0_247_1666)">
                                            <path d="M4.1665 12H15.8332" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12.5 16L15.8333 12" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12.5 8L15.8333 12" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_247_1666">
                                            <rect width="20" height="24" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </h2>
                            </div>
                        </div>

                        <!-- 2 -->
                        <div class="flex flex-col items-start gap-[23px]">
                            <h2 class="text-[#5D5FEF] font-poppins text-base font-medium leading-[33px] tracking-[0.16px]">How To Apply</h2>
                            <h2 class="text-white font-poppins text-base font-normal leading-[33px] tracking-[0.16px]">TTL was founded in Kenya to promote African music </h2>
                            <h2 class="text-white font-poppins text-base font-light leading-[33px] tracking-[0.16px]">TTL was founded in Kenya to promote African music globally, providing digital opportunities a</h2>
                            <div class=" inline-flex">
                                <h2 class=" inline-flex items-center gap-4 text-white font-poppins text-base font-normal leading-[33px] tracking-[0.16px]">Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
                                        <g clip-path="url(#clip0_247_1666)">
                                            <path d="M4.1665 12H15.8332" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12.5 16L15.8333 12" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12.5 8L15.8333 12" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_247_1666">
                                            <rect width="20" height="24" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </h2>
                            </div>
                        </div>

                        <!-- 3 -->
                        <div class="flex flex-col items-start gap-[23px]">
                            <h2 class="text-[#5D5FEF] font-poppins text-base font-medium leading-[33px] tracking-[0.16px]">MEMBERSHIP APPLICATION </h2>
                            <h2 class="text-white font-poppins text-base font-normal leading-[33px] tracking-[0.16px]">TTL was founded in Kenya to promote African music </h2>
                            <h2 class="text-white font-poppins text-base font-light leading-[33px] tracking-[0.16px]">TTL was founded in Kenya to promote African music globally, providing digital opportunities a</h2>
                            <div class=" inline-flex">
                                <h2 class=" inline-flex items-center gap-4 text-white font-poppins text-base font-normal leading-[33px] tracking-[0.16px]">Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
                                        <g clip-path="url(#clip0_247_1666)">
                                            <path d="M4.1665 12H15.8332" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12.5 16L15.8333 12" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12.5 8L15.8333 12" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_247_1666">
                                            <rect width="20" height="24" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </h2>
                            </div>
                        </div>

                        <!-- 4 -->
                        <div class="flex flex-col items-start gap-[23px]">
                            <h2 class="text-[#5D5FEF] font-poppins text-base font-medium leading-[33px] tracking-[0.16px]">PAYING REGISTRATION FEES</h2>
                            <h2 class="text-white font-poppins text-base font-normal leading-[33px] tracking-[0.16px]">TTL was founded in Kenya to promote African music </h2>
                            <h2 class="text-white font-poppins text-base font-light leading-[33px] tracking-[0.16px]">TTL was founded in Kenya to promote African music globally, providing digital opportunities a</h2>
                            <div class=" inline-flex">
                                <h2 class=" inline-flex items-center gap-4 text-white font-poppins text-base font-normal leading-[33px] tracking-[0.16px]">Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
                                        <g clip-path="url(#clip0_247_1666)">
                                            <path d="M4.1665 12H15.8332" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12.5 16L15.8333 12" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12.5 8L15.8333 12" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_247_1666">
                                            <rect width="20" height="24" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- agreement section -->
        <div class="bg-cd-background">
            <div class="px-[70px] py-20 inline-flex flex-col items-start gap-9">
                <h1 class="text-black font-poppins text-3xl font-normal">Our Agreement</h1>
                <div>
                    <div class="flex flex-wrap items-start gap-14">
                        <div
                            v-for="(agreement, index) in agreement" :key="index"
                            class="flex p-4 flex-col items-start gap-6 bg-white box-shadow">
                                <img :src="agreement.image" :alt="agreement.title" />
                                
                                <h3 class="text-black font-poppins text-2xl font-normal">
                                    {{ agreement.title }}
                                </h3>
                                <p class="text-black font-poppins text-base font-normal">
                                    {{ agreement.year }}
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- digital music exploitation -->
        <div class="bg-white">
            <div class="py-20 px-16">
                <h2 class="text-black font-poppins text-3xl font-normal">Digital Music Exploitation</h2>
                <div class=" overflow-x-auto">
                 <div class="flex flex-nowrap p-3 text-center">
                    <div class="relative pt-10 carousel-item">
                        <img src="/assets/music-cover.png" alt="musical cover">
                        <h3 class="text-white font-poppins text-2xl font-normal overlay-text">Musical Cover</h3>
                    </div>
                    <div class=" relative pt-10 carousel-item">
                        <img src="/assets/music2.png" alt="music2">
                        <h3 class="text-white font-poppins text-2xl font-normal overlay-text">Music2</h3>
                    </div>
                    <div class="relative pt-10 carousel-item">
                        <img src="/assets/sydney.png" alt="Sydney">
                        <h3 class="text-white font-poppins text-2xl font-normal overlay-text">Sydney, Australia</h3>
                    </div>
                    <!-- <div class="relative pt-10 selection:carousel-item">
                        <img src="/assets/paris2.png" alt="paris">
                        <h3 class="text-white font-poppins text-2xl font-normal overlay-text">Paris, France</h3>
                    </div> -->
                    <div class="relative pt-10 carousel-item">
                        <img src="/assets/music-cover.png" alt="musical cover">
                        <h3 class="text-white font-poppins text-2xl font-normal overlay-text">Musical Cover</h3>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- partners -->
        <div class="bg-cd-background flex-shrink-0">
            <div class="px-[70px] py-[69px] inline-flex items-center flex-col gap-[42px]">
                <div class="flex flex-col md:px-46 lg:px-72 items-center gap-5">
                    <h2 class="text-gray2 font-poppins text-[32px] font-semibold leading-[57px] tracking-[0.32px]">Our Partners</h2>
                    <p class=" text-gray3 text-center font-roboto text-lg font-normal leading-7 capitalize">Lorem ipsum dolor sit amet consectetur. Massa convallis sed a dui id scelerisque tellus vestibulum. Eros sit porttitor est vel sed </p>
                </div>
                <div class="flex items-start gap-7 overflow-x-auto">
                 <div class="flex flex-nowrap p-3 text-center">
                    <div class=" carousel-item">
                        <a href="#"><img src="/assets/the-orchard.png" alt="The Orchard"></a>
                    </div>
                    <div class=" carousel-item">
                        <a href="#"><img src="/assets/boomplay.png" alt="boomplay"></a>
                    </div>
                    <div class=" carousel-item">
                        <a href="#"><img src="/assets/safaricom.png" alt="Safaricom"></a>
                    </div>
                    <div class=" carousel-item">
                        <a href="#"><img src="/assets/headphones.png" alt="headphones"></a>
                    </div>
                    <div class="carousel-item">
                        <a href="#"><img src="/assets/africori.png" alt="africori"></a>
                    </div>
                    <!-- <div class="carousel-item w-[191px] h-0.5">
                        <img src="/assets/copyright-board.png" alt="kenya copyright board">
                    </div> -->
                    </div>
                </div>
            </div>
        </div>

        <Footer />
      </div>
</template>

<style scoped>
.box-shadow{
    box-shadow: 0px 4px 16px 0px rgba(158, 158, 158, 0.25);
}
.overlay-text {
  position: absolute;
  top: 85%;
  left: 35%;
  transform: translate(-50%, -50%);
}
.carousel-item {
    flex: 0 0 auto;
    margin-right: 20px;
    text-align: center;
}

.carousel-item img {
    max-width: 100%; /* Ensure images are responsive within their container */
    height: auto;
}
</style>