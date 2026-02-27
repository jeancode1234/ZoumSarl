<template>
    <div>
        <div class="p-8 bg-red-600">
        <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" class="text-4xl font-bold text-center text-white mb-8">NOS ENGAGEMENTS CLÉS</h1>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 w-5/6 mx-auto">
            <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" v-for="engagement in engagements" :key="engagement.id" class="bg-white rounded-3xl shadow-md p-14 text-center">
                <img :src="engagement.icon" alt="Icône" class="mx-auto mb-4 w-16 h-16">
                <h2 class="text-lg font-semibold">{{ engagement.title }}</h2>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import icon1 from '../assets/zoom/icon/Image1.png';
import icon2 from '../assets/zoom/icon/Image2.png';
import icon3 from '../assets/zoom/icon/Image3.png';
import icon4 from '../assets/zoom/icon/Image4.png';
import icon5 from '../assets/zoom/icon/Image5.png';
import icon6 from '../assets/zoom/icon/Image6.png';

export default {
    name: "EngagementComponent",
    data() {
        return {
            engagements: [
                { id: 1, title: "Garantie de Ponctualité", icon: icon1 },
                { id: 2, title: "Livraison Flexible", icon: icon2 },
                { id: 3, title: "Approche Analytique", icon: icon3 },
                { id: 4, title: "Suivi en Temps Réel", icon: icon4 },
                { id: 5, title: "Couverture Globale", icon: icon5 },
                { id: 6, title: "Manutention Sécurisée", icon: icon6 },
            ],
        };
    },
};
</script>