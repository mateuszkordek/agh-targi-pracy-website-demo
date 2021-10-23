<template lang="pug">
    div(
        class="sample-exhibitor agh-grey"
    )
        CustomSpacer
        v-container
            v-row
                v-col(
                    :cols="phone?12:laptop?7:8"
                )
                    HeaderWithText(
                        :header="getForEmployersPage.sampleExhibitorSection.header"
                        :text="getForEmployersPage.sampleExhibitorSection.text"
                        headerBar
                        limitedTextsWidth
                    )
                    CustomSpacer(
                        v-if="phone"
                    )
                v-spacer
                v-col(
                    :cols="phone?12:laptop?4:3"
                )
                    div(
                        class="primary--text mb-3"
                    ) Przykład
                    ExhibitorBox(
                        :exhibitor="getSampleExhibitor"
                        disabled
                    )
            CustomSpacer

            div(
                class="primary--text mb-3"
            ) Przykład
            RecruitmentPlansBox(
                :exhibitor="getSampleExhibitor"
            )
        CustomSpacer

</template>

<script>
import { mapGetters } from 'vuex';
import RecruitmentPlansBox from '@/components/organisms/RecruitmentPlansBox';
import ExhibitorBox from '@/components/molecules/ExhibitorBox';
export default {
    components: {
        RecruitmentPlansBox,
        ExhibitorBox,
    },

    computed: {
        ...mapGetters('fairData', ['getSampleExhibitor']),
        ...mapGetters('resources', ['getForEmployersPage']),
    },
};
</script>