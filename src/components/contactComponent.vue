<template>
  <section class="bg-gray-100 py-24">
    <div class="max-w-7xl mx-auto px-6">
      
      <!-- Titre -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-extrabold text-gray-900">
          Contactez <span class="text-red-700">Nous</span>
        </h2>
        <p class="text-gray-600 mt-4">
          Notre équipe est disponible pour répondre à toutes vos demandes.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16">

        <!-- FORMULAIRE -->
        <div class="bg-white p-10 rounded-2xl shadow-xl">
          <form @submit.prevent="submitForm" class="space-y-6">

            <div>
              <label class="block text-gray-700 font-medium mb-2">Nom complet</label>
              <input
                v-model="form.name"
                type="text"
                required
                class="input"
              />
            </div>

            <div>
              <label class="block text-gray-700 font-medium mb-2">Email</label>
              <input
                v-model="form.email"
                type="email"
                required
                class="input"
              />
            </div>

            <div>
              <label class="block text-gray-700 font-medium mb-2">Sujet</label>
              <input
                v-model="form.subject"
                type="text"
                class="input"
              />
            </div>

            <div>
              <label class="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                v-model="form.message"
                rows="5"
                required
                class="input"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-red-700 text-white py-3 rounded-lg shadow-md hover:bg-red-800 transition duration-300"
            >
              Envoyer le message
            </button>

          </form>
        </div>

        <!-- INFOS + MAP -->
        <div class="space-y-8">

          <!-- Coordonnées -->
          <div class="bg-white p-8 rounded-2xl shadow-xl space-y-6">
            
            <div class="flex items-center gap-4">
              <div class="icon-box">
                <img src="../assets/zoom/icon/Image10.png" class="h-12" alt="Email Icon">
              </div>
              <div>
                <p class="font-semibold text-gray-800">Adresse</p>
                <p class="text-gray-600">YAOUNDE ESSOS</p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="icon-box">
                <img src="../assets/zoom/icon/Image9.png" class="h-12" alt="Phone Icon">
              </div>
              <div>
                <p class="font-semibold text-gray-800">Téléphone</p>
                <p class="text-gray-600">+237 675134037</p>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="icon-box">
                <img src="../assets/zoom/icon/Image11.png" class="h-12" alt="Email Icon">
              </div>
              <div>
                <p class="font-semibold text-gray-800">Email</p>
                <p class="text-gray-600">nkengnejacob@yahoo.com</p>
              </div>
            </div>

          </div>

          <!-- MAP -->
          <div class="rounded-2xl overflow-hidden shadow-xl h-[300px]">
            <iframe
              class="w-full h-full"
              loading="lazy"
              allowfullscreen
              src="https://maps.google.com/maps?q=Yaounde%20Essos&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log(this.form);

      alert("Message envoyé avec succès !");
      
      this.form = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };
    },
  },
};
</script>

<style scoped>
.input {
  @apply w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:outline-none;
}

.icon-box {
  @apply bg-red-100 text-red-700 p-3 rounded-lg text-xl;
}
</style>