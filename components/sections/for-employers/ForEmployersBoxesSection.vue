<template lang="pug">
    div
        CustomSpacer
        v-container
            HeaderWithText(
                class="z-index-1"
                headerBar
                :header="getForEmployersPage.forEmployersBoxesSection.header"
                limitedTextsWidth
                :text="getForEmployersPage.forEmployersBoxesSection.text"
            )
            CustomSpacer
            InfoBoxes(
                :boxes="getForEmployersBoxesSection"
            )
        CustomSpacer
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('resources', [
            'getForEmployersPage',
            'getForEmployersBoxesSection',
        ]),
    },
};
</script>