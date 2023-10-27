<template>
    <div>
      <div class="bg-gray1 cursor-pointer fixed w-full z-10">
        <nav
          class="
            container
            px-6
            py-4
            mx-auto
            md:flex md:justify-between md:items-center
          "
        >
          <div class="flex items-center justify-between">
            <div class="flex">
                <img src="/assets/Rectangle2.png" alt="logo">
                <p class="text-gray3 font-poppins text-[25px] font-medium">tl</p>
            </div>
            
            <!-- Mobile menu button -->
            <div @click="showMenu = !showMenu" class="flex md:hidden">
              <button
                type="button"
                class="
                  text-gray-800
                  hover:text-gray-400
                  focus:outline-none focus:text-gray-400
                "
              >
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
  
  
          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <ul
            :class="showMenu ? 'flex' : 'hidden'"
            class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
          > 
            <router-link to="/" class="text-xs font-roboto font-normal text-gray2 hover:text-iris/100 hover:underline">
                Home
            </router-link>
            <router-link to="/about" class="text-xs font-roboto font-normal text-gray2 hover:text-iris/100 hover:underline">
                About TTL
            </router-link>
            <router-link to="/membership" class="text-xs font-roboto font-normal text-gray2 hover:text-iris/100 hover:underline">
                MEMBERSHIPS
            </router-link>
            <router-link to="/artists" class="text-xs font-roboto font-normal text-gray2 hover:text-iris/100 hover:underline">
                OUR ARTISTS
            </router-link>
            <!-- <router-link to="/" class="text-xs font-roboto font-normal text-gray2 hover:text-iris/100 hover:underline">
                OUR PRODUCTS
            </router-link> -->
            <!-- <router-link to="/" class="text-xs font-roboto font-normal text-gray2 hover:text-iris/100 hover:underline">
                SKIZA
            </router-link> -->
            <router-link to="/distribution" class="text-xs font-roboto font-normal text-gray2 hover:text-iris/100 hover:underline">
                Digital Distribution
            </router-link>
            <router-link to="/contact" class="text-xs font-roboto font-normal text-gray2 hover:text-iris/100 hover:underline">
                TALK TO US
            </router-link>
          </ul>
        </nav>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        showMenu: false,
      };
    },
  };
  </script>