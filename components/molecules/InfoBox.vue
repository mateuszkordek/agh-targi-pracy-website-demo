<template lang="pug">
    div(
        class="info-box d-flex flex-column"
    )
        CustomIcon(
            :icon="box.icon.sizes.thumbnail"
            :class="phone?'mb-2':'mb-6'"
        )
        div(
            class="d-flex flex-column"
            style="flex: auto"
        )
            div(
                class="d-flex align-center"
                :style="[(getWcagStep==2||getWcagStep==3)?{'height': 'auto'}:{'height': '65px'}]"
            )
                h3 {{box.header}}
            div(
                class="almost-black--text"
            )
                p {{box.text}}

</template>

<script>
import CustomIcon from '@/components/atoms/CustomIcon';
export default {
    components: {
        CustomIcon,
    },

    props: {
        box: {
            required: true,
            type: Object,
        },
    },
};
</script>

<style lang="sass" scoped>
.info-box
    width: 100%
    height: 100%
</style>