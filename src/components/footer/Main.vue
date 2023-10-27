<template>
    <div class="bg-[#1E2833]">
        <div class="px-8 lg:px-[303px] py-[90px]">
            <h3 class="text-white text-center font-dm-sans text-base font-normal tracking-[-0.232px] text-opacity-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h3>
            <ul class="my-12 flex flex-col items-center md:flex-row gap-4 md:gap-10 lg:gap-10 justify-center text-white font-dm-sans text-base font-normal tracking-[-0.205px]">
                <a href="#"><li>Campaigns</li></a>
                <a href="#"><li>Email Marketing</li></a>
                <a href="#"><li>Branding</li></a>
                <a href="#"><li>Offline</li></a>
                <a href="#"><li>Contact</li></a>
                <a href="#"><li>FAQs</li></a>
            </ul>

            <div class="flex justify-center text-4xl" id="app">
                <a href="#"><font-awesome-icon icon="fa-brands fa-facebook" class="social-icon" /></a>
                <a href="#"><font-awesome-icon icon="fa-brands fa-twitter" class="social-icon" /></a>
                <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" class="social-icon" /></a>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style scoped>
.social-icon {
  /* Set icon color to white */
  color: white;
  margin: 20px;
}
</style>