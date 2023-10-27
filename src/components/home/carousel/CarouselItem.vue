<template>

      <transition :name="transitionEffect">
    <div
      class="carousel-item relative"
      :class="{ 'current': currentSlide === index }"
      @mouseenter="$emit('mouseenter')"
      @mouseout="$emit('mouseout')"
    >
      <img :src="slide" class="fade-transition" />
      <div class="text-overlay">
        <div class="text-center w-[80%] lg:w-[50%]">
          <h1 class="text-white text-center text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            The home of African Music
          </h1>
          <p class="text-lightgray text-center text-sm md:text-base lg:text-lg font-light leading-normal mx-6">
            TTL, based in Kenya, pioneers African music on the global stage, empowering indie artists and labels in the digital realm. With a dynamic team of DJs, producers, radio hosts, and entrepreneurs, TTL stands at Africa's crossroads of opportunity.
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  emits: ["mouseenter", "mouseout"],
  // props: ["slide", "currentSlide", "index", "direction"],
  props: {
    index: Number,
    currentSlide: Number,
    slide: String,
  },
  computed: {
    transitionEffect() {
      // return this.direction === "right" ? "slide-out" : "slide-in";
      return this.currentSlide === this.index ? 'fade-in' : 'fade-out';
    },
  },
};
</script>

<style scoped>
.text-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.text-content {
  max-width: 50%;
  text-align: center;
}

.carousel-item {
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; */
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1.0s ease-in-out;
  z-index: -1;
}

.carousel-item.current {
  opacity: 1;
  z-index: 1;
}

.fade-transition-enter-active,
.fade-transition-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-transition-enter, .fade-transition-leave-to {
  opacity: 0;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
