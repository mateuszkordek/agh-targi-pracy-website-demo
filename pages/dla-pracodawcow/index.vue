<template lang="pug">
    div
        OfferForEmployers
        ForEmployersBoxesSection
        SampleExhibitor(
            class="z-index-1"
        )
        ContactSection(
            id="contact-section"
        )
</template>

<script>
import { mapGetters } from 'vuex';
import OfferForEmployers from '@/components/sections/for-employers/OfferForEmployers';
import SampleExhibitor from '@/components/sections/for-employers/SampleExhibitor';
import ContactSection from '@/components/sections/for-employers/ContactSection';
export default {
    components: {
        OfferForEmployers,
        SampleExhibitor,
        ContactSection,
    },
    mounted() {
        this.removeWidowsAndOrphans();
    },
};
</script>