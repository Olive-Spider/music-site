  <template>
    <div class="bg-[#171632] flex-shrink-0">
      <div class="px-[69px] pt-12 pb-8">
        <div class="flex flex-col items-center">
          <div class="slider-container">
            <div class="slider-track">
              <div
                v-for="(occasion, index) in occasions"
                :key="index"
                :class="{
                  'active-slide': currentIndex === index,
                  'hidden': currentIndex !== index
                }"
                class="slider-item flex-shrink-0"
              >
                <img :src="occasion.image" :alt="occasion.alt" class="object-contain" />
              </div>
            </div>
          </div>
          <div class="flex justify-center gap-9">
            <img src="/assets/scroll-back.png" alt="backarrow" @click="prevSlide" />
            <img src="/assets/scroll-forward.png" alt="forward" @click="nextSlide" />
          </div>
        </div>
      </div>
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        timer: null,
        currentIndex: 0,
        occasions: [
    {
        image: '/assets/event1.png',
        alt: 'Occasion 1'
    },
    {
        image: '/assets/event2.png',
        alt: 'Occasion 2'
    },
    {
        image: '/assets/event3.png',
        alt: 'Occasion 3'
    },
    {
        image: '/assets/event4.png',
        alt: 'Occasion 4'
    },
    {
        image: '/assets/event5.png',
        alt: 'Occasion 5'
    }
        ],
        currentIndex: 0,
      };
    },
    created() {
    // Start the automatic carousel when the component is created
    this.startCarousel();
     },
     beforeDestroy() {
    // Clean up the timer when the component is destroyed
    this.stopCarousel();
    },
    methods: {
      startCarousel() {
        this.timer = setInterval(this.nextSlide, 3000); // Change image every 3 seconds
      },

      stopCarousel() {
        clearInterval(this.timer);
      },
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.occasions.length) % this.occasions.length;
      },
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.occasions.length;
      },
    },
  };
  </script>
  
  <style scoped>
  .bg {
    background-color: #171632;
  }
  
  .slider-container {
    display: flex;
    overflow: hidden;
    position: relative;
    max-width: 100%;
  }
  
  .slider-track {
    display: flex;
    transition: transform 0.3s ease;
  }
  
  .slider-item {
    flex: 0 0 100%;
  }
  
  .active-slide {
    transform: translateX(0);
    transition: transform 0.3s ease;
  }
  
  .hidden {
    display: none;
  }
  
  </style>
  