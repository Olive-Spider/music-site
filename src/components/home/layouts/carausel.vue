<template>
    <carousel :slides="slides" :interval="6000" controls indicators></carousel>
  </template>
  
  <script>
  import Carousel from  "../carousel/Carousel.vue"
  
  export default {
    name: "App",
    components: { Carousel },
    data: () => ({
      slides: [
        "/assets/carousel1.jpg",
        "/assets/carousel2.jpg",
        "/assets/carousel3.jpg",
        "/assets/carousel4.jpg",
        "/assets/carousel5.jpg",
        "/assets/carousel6.jpg",
      ],
    }),
  };
  </script>
  
  <style></style>