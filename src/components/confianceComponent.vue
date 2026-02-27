<template>
  <section class="relative py-28 overflow-hidden">

    <!-- Background image -->
    <div
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(${bgImage})` }"
    ></div>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

    <div class="relative max-w-7xl mx-auto px-6 text-center">

      <!-- Title -->
      <h2 class="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
        La Confiance de Nombreux
        <span class="block">Partenaires & Clients</span>
      </h2>

      <p class="mt-6 text-gray-600 text-lg">
        Plébiscité par nos partenaires & clients pour notre engagement et notre rigueur.
      </p>

      <!-- Cards -->
      <div class="mt-20 grid md:grid-cols-2 gap-12 lg:p-24">

        <!-- Card 1 -->
        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" class="group relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="../assets/zoom/Image7.png"
            class="w-full h-96 object-cover group-hover:scale-110 transition duration-700"
          />

          <div class="absolute bottom-0 left-0 w-full bg-red-700 text-white p-6">
            <p class="font-semibold text-lg">
              Une ponctualité exemplaire, même sur les trajets les plus complexes.
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" class="group relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="../assets/zoom/Image8.png"
            class="w-full h-96 object-cover group-hover:scale-110 transition duration-700"
          />

          <div class="absolute bottom-0 left-0 w-full bg-red-700 text-white p-6">
            <p class="font-semibold text-lg">
              Un partenaire fiable sur lequel nous comptons durablement, sans aucun regret.
            </p>
          </div>
        </div>

      </div>

    </div>

    <!-- Bottom red line -->
    <div class="absolute bottom-0 left-0 w-full h-2 bg-red-700"></div>

  </section>
</template>

<script>
import bgImage from "../assets/zoom/image1.png"; // mets ton image handshake ici

export default {
  data() {
    return {
      bgImage,
    };
  },
};
</script>