<template>
  <div class="w-full bg-white py-8 overflow-hidden">
    <div class="relative">
      <div
        class="flex w-max animate-scroll"
      >
        <!-- Première série -->
        <div
          v-for="(logo, index) in logos"
          :key="'first-' + index"
          class="mx-8 flex items-center justify-center"
        >
          <img
            :src="logo"
            class="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        </div>

        <!-- Duplication pour effet infini -->
        <div
          v-for="(logo, index) in logos"
          :key="'second-' + index"
          class="mx-8 flex items-center justify-center"
        >
          <img
            :src="logo"
            class="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img from '../assets/zoom/partainers/Image2.png';
import img1 from '../assets/zoom/partainers/Image3.png';
import img2 from '../assets/zoom/partainers/Image4.png';
import img3 from '../assets/zoom/partainers/Image5.png';
import img4 from '../assets/zoom/partainers/Image6.png';
import img5 from '../assets/zoom/partainers/Image7.png';
import img6 from '../assets/zoom/partainers/Image8.png';
export default {
  name: "LogoSlider",
  data() {
    return {
      logos: [
        img,
        img1,
        img2,
        img3,
        img4,
        img5,
        img6
      ],
    };
  },
};
</script>

<style>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 20s linear infinite;
}
</style>