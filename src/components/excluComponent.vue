<template>
    <section class="relative bg-gray-100 py-24 overflow-hidden">
        <h2 class="text-4xl md:text-5xl font-extrabold leading-tight text-center text-gray-900" data-aos="fade-up"
            data-aos-delay="200" data-aos-duration="1000">
            Notre Sélection
            <span class="text-red-700">Exclusive.</span>
        </h2>
        <div class="w-full h-16"></div>
        <!-- Forme rouge décorative -->
        <div class="absolute -top-32 -right-32 w-[500px] h-[500px] bg-red-700 rounded-full "></div>

        <div class="relative max-w-7xl mx-auto px-6">

            <!-- Images -->
            <div class="grid md:grid-cols-3 gap-10 mb-16">
                <div v-for="(vehicule, index) in vehicules" :key="index" class="rounded-2xl overflow-hidden shadow-xl "
                    data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <img :src="vehicule.image" class="w-full h-64 object-cover" />
                </div>


            </div>
        </div>


    </section>
</template>
<script>
import vehicule1 from '../assets/zoom/exclusive/Image19.png';
import vehicule2 from '../assets/zoom/exclusive/Image20.png';
import vehicule3 from '../assets/zoom/exclusive/Image21.png';
import vehicule4 from '../assets/zoom/exclusive/Image22.png';
import vehicule5 from '../assets/zoom/exclusive/Image23.png';
import vehicule6 from '../assets/zoom/exclusive/Image24.png';
export default {
    name: "ExcluComponent",
    data() {
        return {
            vehicules: [
                { id: 1, name: "Camion 1", image: vehicule1 },
                { id: 2, name: "Camion 2", image: vehicule2 },
                { id: 3, name: "Camion 3", image: vehicule3 },
                { id: 4, name: "Camion 4", image: vehicule4 },
                { id: 5, name: "Camion 5", image: vehicule5 },
                { id: 6, name: "Camion 6", image: vehicule6 },
            ],
        };
    },
};
</script>