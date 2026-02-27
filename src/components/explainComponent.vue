<template>
    <div>
        <div class="container mx-auto px-4 py-12 font-roboto">
            <h1 class="text-4xl font-bold text-center mb-8 text-red-800" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">COMMENT ÇA MARCHE ?</h1>
            <p class="text-center text-2xl font-bold " data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Le processus de nos services</p>
            <p class="text-lg text-gray-400 text-center  mb-8" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Optimiser vos flux logistiques n'a jamais été aussi simple. <br> Nous avons conçu un parcours fluide pour
                garantir la sécurité et la rapidité de vos expéditions.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div v-for="step in steps" :key="step.id" class="bg-red-800 rounded-3xl shadow-md p-6 space-y-8"
                    data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <p class="text-white font-extrabold mb-4 text-4xl">{{ step.number }}.</p>
                    <h2 class="text-2xl font-bold mb-2 text-white">{{ step.title }}</h2>
                    <p class="text-gray-300">{{ step.description }}</p>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            steps: [
                {
                    id: 1,
                    title: "Étude & Devis Personnalisé",
                    description: "Dès votre prise de contact, nos experts analysent vos besoins spécifiques (type de marchandise, destination, délais). Nous vous proposons une solution logistique sur mesure, accompagnée d'une tarification transparente et compétitive.",
                    number: "01"
                },
                {
                    id: 2,
                    title: "Prise en Charge & Planification",
                    description: "Une fois validée, votre commande entre dans notre système de gestion. Nous planifions l'enlèvement, préparons la documentation nécessaire (notamment pour l'import-export) et assignons le véhicule le plus adapté à votre fret.",
                    number: "02"
                },
                {
                    id: 3,
                    title: "Transit Sécurisé & Livraison",
                    description: "Votre marchandise est acheminée sous haute surveillance. Grâce à notre système de suivi en temps réel, vous êtes informé de la progression du trajet jusqu'à la remise finale au destinataire, effectuée en main propre et en toute sécurité.",
                    number: "03"
                }
            ]

        }
    }
}
</script>