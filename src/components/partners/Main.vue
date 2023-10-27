<template>
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
</template>

<style scoped>
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