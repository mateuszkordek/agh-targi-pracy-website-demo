<template lang="pug">
    div
        Hero(
            :heroSection="getHomePage.homeHero"
        )
        FundraisersRow
        AboutRector
        NavBoxesRow
        HomeAbout
        HomeBoxesSection
        RegistrationSection
        HomeCareersCentre

        //- RegistrationSection(
        //-     background
        //- )
</template>

<script>
import Hero from '@/components/sections/Hero';
import PlugHero from '@/components/sections/PlugHero';
import HomeAbout from '@/components/sections/home/HomeAbout';
import FundraisersRow from '@/components/sections/FundraisersRow';
import HomeCareersCentre from '@/components/sections/home/HomeCareersCentre';
import AboutRector from '@/components/sections/AboutRector';
import RegistrationSection from '@/components/sections/RegistrationSection';
import NavBoxesRow from '@/components/sections/NavBoxesRow';

import { mapGetters } from 'vuex';

export default {
    components: {
        Hero,
        HomeAbout,
        FundraisersRow,
        HomeCareersCentre,
        PlugHero,
        AboutRector,
        RegistrationSection,
        NavBoxesRow,
    },

    computed: {
        ...mapGetters('resources', ['getHomePage']),
    },

    mounted() {
        this.removeWidowsAndOrphans();
    },
};
</script>