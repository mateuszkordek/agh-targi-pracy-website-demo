<template lang="pug">
    div(
        class="similar-exhibitors"
        v-if="!!similarExhibitors.length"
    )
        CustomSpacer
        v-container
            div(
                class="d-flex justify-space-between"
                :class="phone?'flex-column':''"
            )
                //- HeaderWithText(
                //-     header="Podobni wystawcy"
                //-     headerBar
                //-     text="Cray pok pok tbh, flannel pug man bun try-hard farm-to-table austin salvia fixie flexitarian. Godard selfies four dollar toast freegan tattooed"
                //-     limitedTextsWidth
                //- )
                MainHeader(
                    bar
                ) Podobni wystawcy
                CustomButton(
                    to="/wystawcy"
                    :class="phone?'my-6':''"
                ) Zobacz wszystkich

            CustomSpacer

            ExhibitorsOverview(
                :exhibitors="similarExhibitors"
            )
        CustomSpacer
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    props: {
        exhibitor: {
            type: Object,
            required: true,
        },
    },

    computed: {
        ...mapGetters('fairData', ['getExhibitorsOfCurrentEdition']),

        similarExhibitors() {
            return this.getExhibitorsOfCurrentEdition
                .filter((a) =>
                    this.exhibitor.similar.map((b) => b.ID).includes(a.id)
                )
                .splice(0, 4);
        },
    },
};
</script>