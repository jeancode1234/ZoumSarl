<template>
    <section class="relative h-screen overflow-hidden">

        <div class="absolute inset-0 overflow-hidden">
            <div class="w-full h-full bg-cover bg-center animate-zoom"
                :style="{ backgroundImage: `url(${bannerImage})` }"></div>
        </div>

        <div class="absolute inset-0 bg-black/50"></div>

        <div class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
            <h1 class="text-4xl md:text-6xl text-center font-extrabold leading-tight">
                <span class="text-red-700 uppercase text-4xl md:text-6xl lg:text-8xl">Zoum Sarl</span><br> Votre Partenaire Logistique
            </h1>

            <p class="mt-6 max-w-2xl text-lg md:text-xl text-gray-200">
                Transport sécurisé, livraison rapide et solutions adaptées
                à vos besoins professionnels.
            </p>

            <button class="mt-10 bg-red-700 hover:bg-red-800 transition px-8 py-3 rounded-lg shadow-lg">
                Demander un devis
            </button>
        </div>

    </section>
</template>

<script>
import bannerImage from "../assets/zoom/image1.png";

export default {
    data() {
        return {
            bannerImage,
        };
    },
};
</script>
<style
    scoped>
    @keyframes zoom {
        0% {
            transform: scale(1) translateX(0);
        }

        100% {
            transform: scale(1.2) translateX(-20px);
        }
    }

    .animate-zoom {
        animation: zoom 20s ease-in-out infinite alternate;
    }
</style>
