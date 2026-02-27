<template>
  <footer class="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-16 pb-8 overflow-hidden">
    
    <!-- Glass Effect -->
    <div class="absolute inset-0 backdrop-blur-3xl bg-white/5"></div>

    <div class="relative container mx-auto px-6">
      
      <!-- GRID -->
      <div class="grid md:grid-cols-4 gap-12">

        <!-- Company -->
        <div>
          <h2 class="text-2xl font-bold mb-4 text-white">Zoum Sarl</h2>
          <p class="text-gray-400 text-sm leading-relaxed">
            Entreprise technologique spécialisée dans le développement de solutions digitales modernes et performantes.
          </p>

          <!-- Socials -->
          <div class="flex gap-4 mt-6">
            
            <!-- Facebook -->
            <a href="#" class="group p-3 rounded-full bg-white/10 hover:bg-blue-600 transition duration-300">
              <svg class="w-5 h-5 text-white group-hover:scale-110 transition"
                   fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.63 9.88v-6.99H7.9v-2.9h2.47V9.41c0-2.43 1.45-3.77 3.67-3.77 1.06 0 2.17.19 2.17.19v2.39h-1.22c-1.2 0-1.58.75-1.58 1.52v1.83h2.69l-.43 2.9h-2.26v6.99A10 10 0 0022 12z"/>
              </svg>
            </a>

            <!-- LinkedIn -->
            <a href="#" class="group p-3 rounded-full bg-white/10 hover:bg-blue-500 transition duration-300">
              <svg class="w-5 h-5 text-white group-hover:scale-110 transition"
                   fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8h4.56v14H.22V8zm7.98 0h4.37v1.91h.06c.61-1.16 2.1-2.39 4.32-2.39 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.89c0-1.64-.03-3.75-2.28-3.75-2.28 0-2.63 1.78-2.63 3.63V22H8.2V8z"/>
              </svg>
            </a>

            <!-- WhatsApp -->
            <a href="https://wa.me/237675134037" target="_blank"
               class="group p-3 rounded-full bg-white/10 hover:bg-green-500 transition duration-300">
              <svg class="w-5 h-5 text-white group-hover:scale-110 transition"
                   fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 .01 5.37 0 12c0 2.12.55 4.18 1.6 6.02L0 24l6.18-1.6A11.95 11.95 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 21.8c-1.82 0-3.6-.49-5.15-1.41l-.37-.22-3.67.95.98-3.58-.24-.37A9.77 9.77 0 012.2 12c0-5.4 4.4-9.8 9.8-9.8 2.62 0 5.08 1.02 6.94 2.88A9.75 9.75 0 0121.8 12c0 5.4-4.4 9.8-9.8 9.8z"/>
              </svg>
            </a>

          </div>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-semibold mb-4">Contact</h3>
          <p class="text-gray-400 text-sm">YAOUNDE ESSOS</p>
          <p class="text-gray-400 text-sm">+237 675134037</p>
          <p class="text-gray-400 text-sm">nkengnejacob@yahoo.com</p>
        </div>

        <!-- Links -->
        <div>
          <h3 class="font-semibold mb-4">Liens rapides</h3>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><router-link to="/" class="hover:text-white transition">Accueil</router-link></li>
            <li><a href="#partenaires" class="hover:text-white transition">Partenaires</a></li>
            <li><a href="#about" class="hover:text-white transition">À propos</a></li>
            <li><a href="#vision" class="hover:text-white transition">Vision</a></li>
            <li><a href="#services" class="hover:text-white transition">Services</a></li>
            <li><a href="#engagement" class="hover:text-white transition">Engagement</a></li>
            <li><a href="#contact" class="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="font-semibold mb-4">Newsletter</h3>
          <p class="text-gray-400 text-sm mb-4">
            Recevez nos dernières actualités.
          </p>
          <div class="flex">
            <input type="email"
                   placeholder="Votre email"
                   class="w-full px-4 py-2 rounded-l-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
            <button class="bg-blue-600 px-4 rounded-r-lg hover:bg-blue-700 transition">
              OK
            </button>
          </div>
        </div>

      </div>

      <!-- Bottom -->
      <div class="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
        © 2026 Zoum Sarl. Tous droits réservés.
      </div>

    </div>

    <!-- WHATSAPP FLOAT -->
    <a href="https://wa.me/237675134037"
       target="_blank"
       class="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 z-50">
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 .01 5.37 0 12c0 2.12.55 4.18 1.6 6.02L0 24l6.18-1.6A11.95 11.95 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52z"/>
      </svg>
    </a>

    <!-- SCROLL TOP -->
    <button @click="scrollTop"
            v-show="showScroll"
            class="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white w-12 h-12 rounded-full shadow-lg transition transform hover:scale-110 z-50">
      ↑
    </button>

  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showScroll = ref(false)

const handleScroll = () => {
  showScroll.value = window.scrollY > 300
}

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>