<template lang="pug">
    div(
        class="exhibitor-cta"
    )
        CustomSpacer
        v-container
            MainHeader(center) Poznaj nas bliżej!
            v-row
                v-col(
                    :cols="phone?12:6"
                    v-for="(box, index) in exhibitor.ctaBoxes" :key="index"
                )
                    CTABox(
                        :box="box"
                    )

        CustomSpacer

</template>

<script>
import CTABox from '@/components/atoms/CTABox';
export default {
    components: {
        CTABox,
    },

    props: {
        exhibitor: {
            required: true,
            type: Object,
        },
    },
};
</script>