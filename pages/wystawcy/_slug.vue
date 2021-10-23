<template lang="pug">
    div
        div(
            v-if="!!currentExhibitor"
        )
            ExhibitorHero(
                :exhibitor="currentExhibitor"
            )
            ExhibitorPlans(
                :exhibitor="currentExhibitor"
            )
            ExhibitorCTA(
                :exhibitor="currentExhibitor"
            )
            SimilarExhibitors(
                :exhibitor="currentExhibitor"
                class="agh-grey"
            )
            RegistrationSection(
                :background="!!currentExhibitor.similar.length"
            )
        div(
            v-else
        )
            v-container(
                class="d-flex justify-center align-center"
                style="height: 500px"
            )
                h2(
                    class="text-center"
                ) Nie znaleziono wystawcy

</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data: () => ({
        currentExhibitor: null,
    }),

    computed: {
        ...mapGetters('fairData', ['getExhibitorsOfCurrentEdition']),
    },

    methods: {
        setCurrentExhibitor() {
            this.currentExhibitor = this.getExhibitorsOfCurrentEdition.find(
                (a) => a.slug == this.$route.params.slug
            );
        },
    },

    created() {
        this.setCurrentExhibitor();
    },
    mounted() {
        this.removeWidowsAndOrphans();
    },
};
</script>