<template lang="pug">
    div
        AboutFairHero
        NavBoxesRow
        AboutFairBoxesSection
        FundraisersRow
        RegistrationSection
        Faq
        AboutRector

</template>

<script>
import AboutFairHero from '@/components/sections/about-fair/AboutFairHero';
import NavBoxesRow from '@/components/sections/NavBoxesRow';
import FundraisersRow from '@/components/sections/FundraisersRow';
import RegistrationSection from '@/components/sections/RegistrationSection';
import AboutRector from '@/components/sections/AboutRector';
import Faq from '@/components/sections/about-fair/Faq';

export default {
    components: {
        AboutFairHero,
        NavBoxesRow,
        FundraisersRow,
        RegistrationSection,
        Faq,
        AboutRector,
    },
    mounted() {
        this.removeWidowsAndOrphans();
    },
};
</script>