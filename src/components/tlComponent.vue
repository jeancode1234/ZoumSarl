<template>
  <section class="relative py-28 overflow-hidden">

    <!-- Background -->
    <div
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(${bgImage})` }"
    ></div>

    <!-- Overlay sombre -->
    <div class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

    <div class="relative max-w-6xl mx-auto px-6 text-center text-white">

      <!-- Title -->
      <h2 class="inline-block bg-red-700 px-10 py-4 rounded-xl text-4xl md:text-5xl font-extrabold shadow-xl">
        Technologie & Performance
      </h2>

      <p class="mt-6 text-lg text-gray-200 max-w-3xl mx-auto">
        L'innovation est au cœur de notre stratégie logistique.
        Nous combinons technologie avancée et excellence opérationnelle
        pour garantir fiabilité, rapidité et sécurité.
      </p>

      <!-- Grid Cards -->
      <div class="mt-16 grid md:grid-cols-2 gap-10 text-left">

        <!-- Card 1 -->
        <div class="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-500">
          <h3 class="text-2xl font-bold text-red-400 mb-4">
            Innovation Digitale
          </h3>
          <ul class="space-y-3 text-gray-200">
            <li>• Traçabilité Full-GPS en temps réel</li>
            <li>• Reporting instantané et digitalisé</li>
            <li>• Routage intelligent optimisé</li>
          </ul>
        </div>

        <!-- Card 2 -->
        <div class="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-500">
          <h3 class="text-2xl font-bold text-red-400 mb-4">
            Maîtrise & Sécurité
          </h3>
          <ul class="space-y-3 text-gray-200">
            <li>• Parc géolocalisé et surveillé 24h/24</li>
            <li>• Maintenance préventive anti-retard</li>
            <li>• Flotte complète du léger au lourd</li>
          </ul>
        </div>

      </div>

    </div>

  </section>
</template>

<script>
import bgImage from "../assets/zoom/image1.png"; // mets ton image route ici

export default {
  data() {
    return {
      bgImage,
    };
  },
};
</script>