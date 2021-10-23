<template lang="pug">
    div
        v-container(
            class="relative"
        )
            CustomSpacer
            HeaderWithText(
                :header="getAboutPage.aboutBoxesSection.header"
                headerBar
                :text="getAboutPage.aboutBoxesSection.text"
                limitedTextsWidth
                class="z-index-1"
            )

            CustomSpacer

            InfoBoxes(
                :boxes="getAboutBoxesSection"
            )

            CustomSpacer

            CustomShape(
                single
                :top="150"
                :right="-150"
                :width="500"
                style="transform: rotate(90deg)"
            )
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('resources', ['getAboutPage', 'getAboutBoxesSection']),
    },
};
</script>