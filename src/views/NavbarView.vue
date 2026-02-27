<template>
  <div>
    <header class="fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex justify-between items-center h-20">

          <!-- Logo -->
          <router-link to="/" class="text-3xl font-bold uppercase tracking-wide">
            <span class="text-red-800">Zoum</span>
            <span class="text-black text-xl">Sarl</span>
          </router-link>

          <!-- Desktop Menu -->
          <nav class="hidden md:flex items-center gap-8 text-lg">

            <!-- Accueil -->
            <a href="#home" :class="['nav-link', { 'active-link': activeSection === 'home' }]">
              Accueil
            </a>
            <a href="#about" :class="['nav-link', { 'active-link': activeSection === 'about' }]">
              Apropos
            </a>
            <!-- Sections -->

            <a href="#vision" :class="['nav-link', { 'active-link': activeSection === 'vision' }]">
              Vision
            </a>

            <a href="#services" :class="['nav-link', { 'active-link': activeSection === 'services' }]">
              Services
            </a>

            <a href="#engagement" :class="['nav-link', { 'active-link': activeSection === 'engagement' }]">
              Engagement
            </a>

            <a href="#contact" :class="['nav-link', { 'active-link': activeSection === 'contact' }]">
              Contact
            </a>

          </nav>

          <!-- Mobile Button -->
          <button @click="toggleMenu" class="md:hidden focus:outline-none">
            <div class="space-y-2">
              <span class="block w-6 h-0.5 bg-black transition" :class="{ 'rotate-45 translate-y-2': isOpen }"></span>
              <span class="block w-6 h-0.5 bg-black transition" :class="{ 'opacity-0': isOpen }"></span>
              <span class="block w-6 h-0.5 bg-black transition" :class="{ '-rotate-45 -translate-y-2': isOpen }"></span>
            </div>
          </button>

        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isOpen" class="md:hidden bg-white shadow-lg px-6 pb-6 space-y-4 animate-slideDown">
        <router-link @click="closeMenu" to="/" class="mobile-link">
          Accueil
        </router-link>

        <a href="#about" @click="closeMenu" class="mobile-link">Apropos</a>
        <a href="#vision" @click="closeMenu" class="mobile-link">Vision</a>
        <a href="#services" @click="closeMenu" class="mobile-link">Services</a>
        <a href="#engagement" @click="closeMenu" class="mobile-link">Engagement</a>
        <a href="#contact" @click="closeMenu" class="mobile-link">Contact</a>
      </div>

    </header>

    <!-- Spacer -->
    <div class="h-20"></div>

    <router-view name="one" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      activeSection: "",
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },

    closeMenu() {
      this.isOpen = false;
    },

    handleScroll() {
      const sections = [
        "home",
        "about",
        "vision",
        "services",
        "engagement",
        "contact",
      ];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            this.activeSection = id;
          }
        }
      });
    },
  },
};
</script>

<style scoped>
.nav-link {
  @apply relative text-gray-700 font-medium transition duration-300 px-1 cursor-pointer;
}

.nav-link::after {
  content: "";
  @apply absolute left-0 -bottom-1 w-0 h-0.5 bg-red-800 transition-all duration-300;
}

.nav-link:hover::after {
  @apply w-full;
}

.active-link {
  @apply text-red-800;
}

.active-link::after {
  @apply w-full;
}

.mobile-link {
  @apply block text-gray-700 font-medium py-2 border-b border-gray-100 hover:text-red-800 transition;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideDown {
  animation: slideDown 0.3s ease forwards;
}
</style>