<template lang="pug">
    div(
        class="exhibitor-plans agh-grey"
    )
        CustomSpacer
        v-container
            MainHeader(
                bar
            ) Plany rekrutacyjne
            RecruitmentPlansBox(
                :exhibitor="exhibitor"
            )
        CustomSpacer
</template>

<script>
import RecruitmentPlansBox from '@/components/organisms/RecruitmentPlansBox';
export default {
    props: {
        exhibitor: {
            required: true,
            type: Object,
        },
    },

    components: {
        RecruitmentPlansBox,
    },
};
</script>