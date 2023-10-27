<template>
  <div class="carousel-buttons-container">
    <button class="carousel-control left" @click="$emit('prev')">
      <div class="button-content">
        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
          <circle cx="24.5" cy="24.5" r="24.5" :fill="hovered ? '#DCE6F5' : 'none'"/>
          <path d="M14.5281 25.4038L32.1125 37.3932C32.3579 37.5594 32.6744 37.5778 32.9366 37.4396C33.198 37.3013 33.3618 37.0295 33.3618 36.733L33.3618 12.7543C33.3618 12.4577 33.198 12.186 32.9358 12.0477C32.8191 11.9853 32.6904 11.955 32.5625 11.955C32.4051 11.955 32.2476 12.0021 32.1125 12.094L14.5281 24.0834C14.3099 24.2321 14.1788 24.4791 14.1788 24.7436C14.1788 25.0082 14.3099 25.2552 14.5281 25.4038ZM31.7632 14.2673L31.7632 35.2199L16.3969 24.7436L31.7632 14.2673Z"/>
          <path d="M14.8129 24.9858L14.8131 24.9859L32.3962 36.9744C32.3964 36.9745 32.3966 36.9747 32.3967 36.9748C32.4883 37.0366 32.6048 37.0426 32.7003 36.9923C32.7958 36.9417 32.856 36.8421 32.856 36.733L32.856 12.7543C32.856 12.6452 32.7959 12.5458 32.6998 12.4951L32.6974 12.4938C32.657 12.4722 32.6107 12.4608 32.5625 12.4608C32.5058 12.4608 32.4478 12.4778 32.3975 12.512L14.8129 24.9858ZM14.8129 24.9858C14.7326 24.9311 14.6846 24.8404 14.6846 24.7436C14.6846 24.6468 14.7326 24.5561 14.8129 24.5014L14.8131 24.5013L32.3971 12.5122L14.8129 24.9858ZM32.269 14.2673L32.269 13.3103L31.4783 13.8494L16.1119 24.3257L15.4989 24.7436L16.1119 25.1615L31.4783 35.6378L32.269 36.1769L32.269 35.2199L32.269 14.2673Z" stroke="#1A0303" stroke-opacity="0.8" stroke-width="1.01162"/>
        </svg>
      </div>
    </button>
    <button class="carousel-control right" @click="$emit('next')">
      <div class="button-content">
        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
          <circle cx="24.5" cy="24.5" r="24.5" :fill="hovered ? '#DCE6F5' : 'none'"/>
          <path d="M36.919 24.2525L36.9192 24.2526C37.0012 24.3085 37.0502 24.4012 37.0502 24.5001C37.0502 24.599 37.0012 24.6916 36.9192 24.7476L36.919 24.7477L18.9527 36.9974C18.9012 37.0324 18.8418 37.0499 18.7837 37.0499C18.7345 37.0499 18.6871 37.0382 18.6459 37.0162L18.6434 37.0149C18.5452 36.9631 18.4838 36.8615 18.4838 36.7501V12.2501C18.4838 12.1386 18.5453 12.0369 18.6429 11.9851C18.7406 11.9337 18.8595 11.9399 18.9531 12.003C18.9533 12.0032 18.9534 12.0033 18.9536 12.0034L36.919 24.2525ZM19.0836 35.2041V36.182L19.8915 35.6311L35.5919 24.9271L36.2182 24.5001L35.5919 24.0731L19.8915 13.369L19.0836 12.8182V13.796V35.2041Z" stroke="#1A0303" stroke-opacity="0.8" stroke-width="1.01162"/>
          <path d="M0.516807 24.5C0.516807 11.2761 11.2761 0.516807 24.5 0.516807C37.7239 0.516807 48.4832 11.2761 48.4832 24.5C48.4832 37.7239 37.7239 48.4832 24.5 48.4832C11.2761 48.4832 0.516807 37.7239 0.516807 24.5ZM1.11653 24.5C1.11653 37.3939 11.6061 47.8835 24.5 47.8835C37.3939 47.8835 47.8835 37.3939 47.8835 24.5C47.8835 11.6061 37.3939 1.11653 24.5 1.11653C11.6061 1.11653 1.11653 11.6061 1.11653 24.5Z"/>
        </svg>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  emits: ["prev", "next"],
  data() {
    return {
      hovered: false
    };
  }
};
</script>

<style scoped>
.carousel-buttons-container {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 10;
}
.carousel-control {
  border: none;
  display: inline-block;
  position: absolute;
  height: 50px;
  width: 70px;
  top: calc(50% - 25px);
  color: #f3f3f3;
  cursor: pointer;
  overflow: hidden;
  transition: width 0.3s ease;
}

.left {
  left: 0;
}

.right {
  right: 0;
}

.button-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  transition: transform 0.3s ease;
}
.carousel-buttons-container:hover svg circle {
  fill: #DCE6F5;
}

</style>
