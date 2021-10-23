<template lang="pug">
    div(
        class="info-boxes z-index-1"
    )
        div(
            class="d-flex justify-space-between flex-wrap"
        )
            div(
                class="box-wrapper"
                :class="phone?'my-7':'my-10'"
                v-for="(box, index) in boxes"
                :key="index"
            )
                InfoBox(
                    :box="box"
                )

</template>

<script>
import InfoBox from '@/components/molecules/InfoBox';
export default {
    components: {
        InfoBox,
    },

    props: {
        boxes: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="sass" scoped>
.info-boxes
    .box-wrapper
        width: 27%
        @media(max-width: 959.98px)
            width: 47%
        @media(max-width: 599.98px)
            width: 100%
</style>