<template>
    <div>
        <BannerComponent />
        <section id="partenaires" class=" py-8 lg:py-24">
            <div class="w-full">
                <h1 class="text-4xl uppercase font-roboto text-red-800 font-bold text-center" data-aos="fade-up"
                    data-aos-delay="200" data-aos-duration="1000">Nos partenaires</h1>
            </div>
            <SlideComponent />
        </section>
        <section id="about">

            <aboutComponent />
        </section>
        <section id="vision">
            <visionComponent />
        </section>
        <section id="services">
            <faqComponent />
        </section>
        <section>
            <markComponent />
        </section>
        <section>
            <explainComponent />
        </section>
        <section>
            <excluComponent />
        </section>
        <section id="engagement">
            <EngagementComponent />
        </section>
        <section>
            <confianceComponent />
        </section>
        <section>
            <tlComponent />
        </section>
        <section id="contact">
            <contactComponent />
        </section>
        <section>
            <FooterComponent />
        </section>
    </div>
</template>
<script>
import SlideComponent from '../components/SlideComponent.vue';
import aboutComponent from '../components/aboutComponent.vue';
import visionComponent from '../components/visionComponent.vue';
import faqComponent from '../components/faqComponent.vue';
import markComponent from '../components/markComponent.vue';
import explainComponent from '../components/explainComponent.vue';
import excluComponent from '../components/excluComponent.vue';
import confianceComponent from '../components/confianceComponent.vue';
import image1 from '../assets/zoom/image1.png';
import EngagementComponent from '../components/EngagementComponent.vue';
import tlComponent from '../components/tlComponent.vue';
import contactComponent from '../components/ContactComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import BannerComponent from '../components/bannerComponent.vue';
export default {
    components: {
        SlideComponent,
        aboutComponent,
        visionComponent,
        faqComponent,
        markComponent,
        explainComponent,
        BannerComponent,
        excluComponent,
        EngagementComponent,
        confianceComponent,
        tlComponent,
        contactComponent,
        FooterComponent
    },
    data() {
        return {
            image1: image1
        }
    }
}
</script>
<style></style>