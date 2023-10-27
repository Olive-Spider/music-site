<template>
    <div class=" flex h-[421px] justify-center items-center gap-[10px] bg-cd-background">
      <div class="flex flex-col items-start gap-6 py-3 px-5">
          <img class="rounded-t" :src="image" :alt="altText">
            <div class="w-[286px] h-[71px] pt-6 pb-3">
              <p class="text-[#333333] font-poppins text-xl font-medium leading-6 tracking-[0.2px] pb-3">{{ title }}</p>
              <p class="overflow-hidden text-[#424242] overflow-ellipsis whitespace-nowrap font-poppins text-base font-normal leading-8 tracking-[0.16px]">{{ description }}</p>
            </div>
            <div class="flex w-150px items-center gap-[10px] pt-6">
                <a href="#"><p class="text-[#242587] font-poppins text-base font-normal">Checkout Job</p></a>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
                  <g clip-path="url(#clip0_386_10)">
                    <path d="M4.1665 12H15.8332" stroke="#242587" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.5 16L15.8333 12" stroke="#242587" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.5 8L15.8333 12" stroke="#242587" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_386_10">
                    <rect width="20" height="24" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              
            </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      image: String,
      altText: String,
      title: String,
      description: String,
      tags: Array,
    },
  };
  </script>

  <!-- <style scoped>
  .cardboxshadow {
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.20);
  }
  </style> -->
  