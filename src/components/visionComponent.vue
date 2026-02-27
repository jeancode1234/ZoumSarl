<template>
  <section class="bg-gray-100 py-24">
    <div class="max-w-7xl mx-auto px-6">
      
      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- IMAGE -->
        <div class="relative">
          <!-- Fond décoratif -->
          <div class="absolute -top-6 -left-6 w-full h-full bg-red-700 rounded-2xl hidden lg:block" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"></div>

          <div class="relative rounded-2xl overflow-hidden shadow-2xl" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
            <img
              src="../assets/zoom/Image10.png"
              alt="Vision logistique"
              class="w-full h-[500px] object-cover"
            />
          </div>
        </div>

        <!-- TEXTE -->
        <div>
          <h2 class="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            Notre Vision de la
            <span class="text-red-700">Logistique.</span>
          </h2>

          <p class="mt-8 text-gray-600 leading-relaxed text-lg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            ZOUM SARL modernise le transport et l'import-export avec une
            approche agile et transparente. Nouvel acteur stratégique,
            nous apportons un regard neuf sur vos flux, plaçant l’innovation
            et la rigueur au cœur de chaque kilomètre.
          </p>

          <p class="mt-6 text-gray-600 leading-relaxed text-lg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            Notre jeunesse est un atout : elle garantit une réactivité
            absolue. Bien plus qu’un transporteur, nous bâtissons des
            partenariats basés sur la confiance pour propulser vos projets
            les plus ambitieux.
          </p>

          <!-- Points clés -->
          <div class="mt-10 space-y-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">

            <div class="flex items-center gap-4">
              <div class="bg-red-100 text-red-700 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 21h8m-4-4v4m-6-8h12l-1 4H7l-1-4zm3-8h4l1 4H9l1-4z" />
                </svg>
              </div>
              <p class="text-gray-700 text-lg">
                <span class="font-semibold">Opérations :</span>
                Livraison locale active
              </p>
            </div>

            <div class="flex items-center gap-4">
              <div class="bg-red-100 text-red-700 p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8c-3 0-5 2-5 5h10c0-3-2-5-5-5zm0 0V4m0 4v4m0 0h4m-4 0H8" />
                </svg>
              </div>
              <p class="text-gray-700 text-lg">
                <span class="font-semibold">Croissance :</span>
                Flotte et équipe en expansion
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>
</template>