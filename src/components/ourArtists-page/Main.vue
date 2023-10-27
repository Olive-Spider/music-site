<script setup>
import NavBar from '../navbar/Main.vue'
import Partners from '../partners/Main.vue'
import Footer from '../footer/Main.vue'
import { ref } from 'vue'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon, PlusIcon, MinusIcon } from '@heroicons/vue/20/solid'

const clients = ref([])

for (let i = 0; i < 12; i++) {
    const randomImage = `https://picsum.photos/270/260?random=${i}`;
    clients.value.push({
        image: randomImage,
        artist: `Artist name`,
    });
}

const faqs = ref([
  {
    question: 'How is you registation process',
    answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',
    showAnswer: false,
  },
  {
    question: 'What is your favorite template from BRIX Templates?',
    answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',
    showAnswer: false,
  },
  {
    question: 'How do you clone a template from the Showcase?',
    answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',
    showAnswer: false,
  },
  {
    question: 'Why is BRIX Templates the best Webflow agency?',
    answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',
    showAnswer: false,
  },
  {
    question: 'When was Webflow officially launched?',
    answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',
    showAnswer: false,
  },
  {
    question: 'How do you integrate Jetboost with Webflow?',
    answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',
    showAnswer: false,
  },
  {
    question: 'What is your favorite template from BRIX Templates?',
    answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',
    showAnswer: false,
  },
  {
    question: 'How do you clone a template from the Showcase?',
    answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',
    showAnswer: false,
  },
  {
    question: 'What is Webflow and why is it the best website builder?',
    answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',
    showAnswer: false,
  },
  {
    question: 'Why is BRIX Templates the best Webflow agency?',
    answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',
    showAnswer: false,
  },
  {
    question: 'When was Webflow officially launched?',
    answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',
    showAnswer: false,
  },
  {
    question: 'How do you integrate Jetboost with Webflow?',
    answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',
    showAnswer: false,
  },

]);

const toggleFAQ = (index) => {
  faqs.value.forEach((faq, faqIndex) => {
    if (faqIndex === index) {
      faq.showAnswer = !faq.showAnswer;
      faq.active = !faq.active;
    } else {
      faq.showAnswer = false;
      faq.active = false;
    }
  });
};

const agreement = ref([
    {
        image: '/assets/artist-agreement.png',
        title: 'Agreement Title',
        year: 'Since. 2019'
        
    },
    {
        image: '/assets/artist-agreement.png',
        title: 'Agreement Title',
        year: 'Since. 2019'
    },
    {
        image: '/assets/artist-agreement.png',
        title: 'Agreement Title',
        year: 'Since. 2019'
    },
    {
        image: '/assets/artist-agreement.png',
        title: 'Agreement Title',
        year: 'Since. 2019'
    },
    
])
</script>

<template>
    <div>
        <NavBar />
            <!-- hero section -->
        <div class="bg-[url('/assets/membership-herobg.png')] bg-no-repeat bg-cover bg-center">
            <div class="pt-[185px] pl-3 md:pl-[70px] pb-16">
                <h1 class=" text-gray6 font-poppins text-5xl lg:text-[56px] font-semibold">Our Artists</h1>
                <p class="pt-[9px] text-gray5 font-poppins text-lg font-normal">What we do</p>
            </div>
        </div>

        <!-- Artists -->
        <div class="bg-black">
            <div class="px-16 pb-32 pt-20">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div v-for="(client, index) in clients" :key="index" class="text-white">
                        <img :src="client.image" :alt="client.artist" class="w-full h-auto" />
                        <h3 class="pt-5 text-gray6 font-poppins text-lg font-bold uppercase">{{ client.artist }}</h3>
                    </div>
                </div>
            </div>
        </div>

        <!-- FAQS -->
        <div class="bg-cd-background">
            <div class="pt-[49px] px-4 md:px-[203px] inline-flex flex-col items-center gap-7">
                <h2 class="text-black font-poppins text-[32px] font-semibold leading-[57px] tracking-[0.32px] md:px-40 lg:px-64">FAQ</h2>
                <p class="text-[#424242] text-center font-poppins text-base font-normal leading-[34px] tracking-[0.16px]">Data is your most valuable asset.But only if you make the most of it. AFQ Tech data scientists and analysts are skilled at mining, modeling,</p>
            </div>

            <div class="pl-[71px] pr-[62px] pt-[59px] pb-[103px] flex-shrink-0 text-[#303A42]">
                <div class="w-full mx-auto mt-6">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
                            <div class="border-t border-gray-300">
                                <div
                                    @click="toggleFAQ(index)"
                                    :class="{
                                        'text-[#1A1B6F]': faq.active,
                                        'cursor-pointer p-4 font-poppins text-lg font-medium leading-6 flex justify-between items-center':true
                                    }"
                                >
                                    {{ faq.question }}
                                    <component
                                    :is="faq.showAnswer ? MinusIcon : PlusIcon"
                                    class="w-6 h-6 text-gray-500"
                                    />
                                </div>
                                <div
                                    v-if="faq.showAnswer"
                                    class="p-4 font-poppins text-base font-normal leading-7"
                                >
                                    {{ faq.answer }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- regional representation -->
        <div class="bg-[#030717]">
            <div class="px-5 md:px-[70px] pt-[49px] pb-[96px] inline-flex flex-col items-start gap-9">
                <h2 class="text-gray6 font-poppins text-3xl font-normal">Our Regional representation</h2>
                <div class=" overflow-x-auto">
                    <div class="flex flex-nowrap p-3 text-center">
                        <div
                            v-for="(agreement, index) in agreement" :key="index"
                            class="flex p-4 flex-col items-start gap-6 bg-white box-shadow carousel-item">
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


        <Partners />
        <Footer />
    </div>
</template>

<style>
.carousel-item {
    flex: 0 0 auto;
    margin-right: 20px;
    text-align: center;
}
</style>



