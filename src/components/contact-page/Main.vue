<script setup>
import Navbar from '../navbar/Main.vue';
import Footer from '../footer/Main.vue';
</script>

<template>
    <div>
        <Navbar />

        <!-- hero section -->
        <div class="bg-[url('/assets/contact-herobg.png')] bg-no-repeat bg-cover bg-center">
            <div class="pt-[185px] pl-3 md:pl-[70px] pb-16">
                <h1 class=" text-white font-poppins text-5xl lg:text-[56px] font-semibold">Contact Us</h1>
            </div>
        </div>

        <!-- form -->
        <div class="flex flex-col md:py-[49px] md:px-[72px]">
            <div class="flex py-[67px] md:px-[61px] flex-col items-start gap-[10px] bg-white">
                  <div class="flex flex-col md:flex-row items-center md:gap-[23px] bg-white">
                    <div class="flex flex-col pl-5 md:pl-0 items-start gap-4">
                        <h2 class="text-[#646464] font-poppins text-[42px] font-medium leading-[58px]">Welcome back</h2>
                        <p class="w-[60%] md:w-full text-gray3 font-poppins text-base font-normal leading-[26px] py-4">Welcome back! It's great to have you here again. We hope you're ready for more exciting experiences and opportunities with us. Let's pick up where we left off and continue on this journey together.</p>
                        <router-link to="/" class="text-[#242587] pl-2 font-poppins text-[17px] font-medium leading-8">
                            <span class="border-b-2 border-[#242587] pb-1">Back to homepage</span>
                        </router-link>
                        <div class="inline-flex items-center gap-16 text-[#242587] pt-[40px] text-3xl" id="app">
                            <a href="#"><font-awesome-icon icon="fa-brands fa-facebook" class="p-[10px] flex justify-center items-center gap-[10px] rounded-[10px] bg-[#A5A6F633]" /></a>
                            <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" class="p-[10px] flex justify-center items-center gap-[10px] rounded-[10px] bg-[#A5A6F633]" /></a>
                            <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" class="p-[10px] flex justify-center items-center gap-[10px] rounded-[10px] bg-[#A5A6F633]" /></a>
                        </div>
                    </div>
                     
                     <div class="px-[72px] py-9 w-full">
                        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div class="flex py-7 pr-2 items-center gap-[10px]">
                                <h2 class=" text-gray2 font-poppins text-[34px] font-medium leading-6">Contact us</h2>
                            </div>

                            <!-- address -->
                            <div class="mt-2 flex items-start gap-2">
                                <a href="#"><font-awesome-icon icon="fa-solid fa-location-dot" class="text-3xl" /></a>
                                <div class="text-gray2 items-start flex flex-col font-normal leading-6 pl-3">
                                    <h3 class="font-medium text-2xl font-poppins">Address</h3>
                                    <p class="py-3 font-roboto text-lg">We are located at</p>
                                </div>
                            </div>

                            <!-- phone -->
                            <div class="mt-2 flex items-start gap-2">
                                <a href="#"><font-awesome-icon icon="fa-solid fa-phone" class="text-3xl" /></a>
                                <div class="text-gray2 items-start flex flex-col font-normal leading-6 pl-3">
                                    <h3 class="font-medium text-2xl font-poppins">Phone</h3>
                                    <p class="py-3 font-roboto text-lg">123 456 789</p>
                                </div>
                            </div>

                            <!-- email -->
                            <div class="mt-2 flex items-start gap-2">
                                <a href="#"><font-awesome-icon icon="fa-solid fa-envelope" class="text-3xl" /></a>
                                <div class="text-gray2 items-start flex flex-col font-normal leading-6 pl-3">
                                    <h3 class="font-medium text-2xl font-poppins">Email</h3>
                                    <p class="py-3 font-roboto text-lg">support@email.com</p>
                                </div>
                            </div>

                            <!-- p.o box -->
                            <div class="mt-2 flex items-start gap-2">
                                <a href="#"><font-awesome-icon icon="fa-solid fa-address-card" class="text-3xl" /></a>
                                <div class="text-gray2 items-start flex flex-col font-normal leading-6 pl-3">
                                    <h3 class="font-medium text-2xl font-poppins">P.O Box</h3>
                                    <p class="py-3 font-roboto text-lg">123, 00100, Nairobi</p>
                                </div>
                            </div>
                        </form> 
                     </div>
                 </div>
            </div>
             <!-- embedded map -->
             <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.808350790823!2d36.82388227494151!3d-1.2892120986985305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1127a1c9cb1b%3A0xaa4e8c5153b98a7b!2sCooperative%20House%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1692018061416!5m2!1sen!2ske"
                    width="600" height="450" style="border:0;"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>

        <Footer />
    </div>
</template>

<style scoped>
.map-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 75%; /* Adjust the padding to maintain aspect ratio (height/width) */
  overflow: hidden;
}

.map-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>
