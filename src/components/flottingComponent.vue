<template>
  <div>

    <!-- WhatsApp Floating -->
    <a
      href="https://wa.me/237675134037"
      target="_blank"
      class="fixed bottom-6 left-6 z-50 group"
    >
      <div class="relative">
        <div class="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition"></div>

        <div class="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition duration-300 relative">
          <!-- WhatsApp SVG -->
          <svg xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24">
            <path d="M20.5 3.5A11.8 11.8 0 0012 
            0C5.4 0 .1 5.3.1 11.9c0 
            2.1.5 4.2 1.6 6.1L0 
            24l6.2-1.6c1.8 1 3.9 1.5 
            6 1.5h.1c6.6 0 11.9-5.3 
            11.9-11.9 0-3.2-1.2-6.2-3.7-8.5z"/>
          </svg>
        </div>
      </div>
    </a>

    <!-- Scroll To Top -->
    <button
      v-show="showScroll"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-50 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 hover:scale-110 transition duration-300"
    >
      <!-- Arrow Up SVG -->
      <svg xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 15l7-7 7 7" />
      </svg>
    </button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      showScroll: false,
    };
  },
  methods: {
    handleScroll() {
      this.showScroll = window.scrollY > 300;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>