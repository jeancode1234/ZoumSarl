<template>
  <section class="relative bg-gray-50 overflow-hidden">
    
    <!-- Décor rouge à droite -->
    <div class="hidden lg:block absolute right-0 top-0 w-1/3 h-full bg-red-700"></div>

    <div class="max-w-7xl mx-auto px-6 py-20 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- Texte -->
        <div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            Partenaire de votre
            <span class="text-red-700">Logistique</span>
          </h1>

          <p class="mt-8 text-lg text-gray-600 leading-relaxed max-w-xl" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            Chez <strong>ZOUM SARL</strong>, nous redéfinissons la mobilité de vos
            marchandises. Notre expertise en transport routier garantit une
            gestion fluide de vos flux logistiques, du point de départ jusqu'à
            la destination finale.
            <br /><br />
            Grâce à notre flotte moderne et notre parfaite maîtrise des
            corridors régionaux, nous transformons chaque trajet en opportunité
            de croissance pour votre entreprise.
          </p>

          <!-- Boutons -->
          <div class="mt-10 flex gap-6">
            <button
              class="bg-red-700 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-red-800 transition duration-300"
            >
              Demander un devis
            </button>

            <button
              class="border border-gray-400 px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Nos services
            </button>
          </div>
        </div>

        <!-- Image -->
        <div class="relative">
          <div class="relative z-10 rounded-3xl overflow-hidden shadow-2xl" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <img
              src="../assets/zoom/Image9.png"
              alt="Transport logistique"
              class="w-full h-[500px] object-cover"
            />
          </div>

          <!-- Carte flottante -->
          <div
            class="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-xl p-6 hidden md:block"
          >
            <h3 class="text-red-700 font-bold text-xl">+10 ans</h3>
            <p class="text-gray-600 text-sm">D’expérience logistique</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>