<template>
  <section class="relative bg-gray-100 py-24 overflow-hidden">

    <!-- Forme rouge décorative -->
    <div class="absolute -top-32 -left-32 w-[500px] h-[500px] bg-red-700 rounded-full"></div>

    <div class="relative max-w-7xl mx-auto px-6">

      <!-- Images -->
      <div class="grid md:grid-cols-3 gap-10 mb-16">
        <div class="rounded-2xl overflow-hidden shadow-xl" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
          <img src="../assets/zoom/Image11.png" class="w-full h-64 object-cover" />
        </div>

        <div class="rounded-2xl overflow-hidden shadow-xl" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
          <img src="../assets/zoom/Image12.png" class="w-full h-64 object-cover" />
        </div>

        <div class="rounded-2xl overflow-hidden shadow-xl" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">
          <img src="../assets/zoom/Image13.png" class="w-full h-64 object-cover" />
        </div>
      </div>

      <!-- Contenu -->
      <div class="grid lg:grid-cols-2 gap-16 items-start">

        <!-- Bloc gauche -->
        <div>
          <div class="inline-block bg-red-700 text-white px-6 py-2 rounded-full font-semibold mb-6 shadow-md" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            Pourquoi nous choisir ?
          </div>

          <p class="text-gray-700 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            De l’entrepôt à votre porte :<br />
            Notre processus de livraison garantit rapidité,
            sécurité et efficacité à chaque étape.
          </p>
        </div>

        <!-- Services -->
        <div class="space-y-10">

          <!-- Item 1 -->
          <div class="flex gap-5" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <div class="bg-red-100 text-red-700 p-4 rounded-xl">
              <!-- Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M20 12H4m16 0l-4-4m4 4l-4 4" />
              </svg>
            </div>
            <div>
              <h4 class="font-bold text-lg">Tri & Emballage</h4>
              <p class="text-gray-600">
                Vos marchandises sont triées et emballées avec soin
                par notre personnel logistique qualifié.
              </p>
            </div>
          </div>

          <!-- Item 2 -->
          <div class="flex gap-5" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <div class="bg-red-100 text-red-700 p-4 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 17V7m0 0l-4 4m4-4l4 4m6 6H5" />
              </svg>
            </div>
            <div>
              <h4 class="font-bold text-lg">Transport Routier</h4>
              <p class="text-gray-600">
                Acheminement via transport terrestre planifié
                avec suivi en temps réel par GPS.
              </p>
            </div>
          </div>

          <!-- Item 3 -->
          <div class="flex gap-5" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <div class="bg-red-100 text-red-700 p-4 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 11c0-1.1.9-2 2-2s2 .9 2 2m-4 0v2m0 0a2 2 0 104 0v-2m-4 0H8m4 6v2" />
              </svg>
            </div>
            <div>
              <h4 class="font-bold text-lg">Livraison Sécurisée</h4>
              <p class="text-gray-600">
                Chaque article est remis au client en toute sécurité,
                dans le respect strict des délais.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>

    <!-- Bande rouge bas -->
    <div class="absolute bottom-0 left-0 w-full h-16 bg-red-700"></div>

  </section>
</template>