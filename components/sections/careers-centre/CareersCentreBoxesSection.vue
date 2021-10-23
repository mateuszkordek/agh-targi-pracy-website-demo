<template lang="pug">
    div
        CustomSpacer

        v-container(
            class="relative z-index-1"
        )
            HeaderWithText(
                :header="getCareersCentrePage.careersCentreBoxesSection.header"
                :text="getCareersCentrePage.careersCentreBoxesSection.text"
                headerBar
                limitedTextsWidth
                class="z-index-1"
            )
            CustomSpacer
            InfoBoxes(
                :boxes="getCareersCentreBoxesSection"
            )
            CustomShape(
                single
                :top="160"
                :right="-250"
                :width="550"
                style="transform: rotate(90deg)"
            )
        CustomSpacer
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('resources', [
            'getCareersCentrePage',
            'getCareersCentreBoxesSection',
        ]),
    },
};
</script>