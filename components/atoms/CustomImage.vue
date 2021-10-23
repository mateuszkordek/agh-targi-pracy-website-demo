<template lang="pug">
    v-card(
        class="custom-image"
        :width="width"
        :height="height"
        elevation="0"
        :ripple="clickable?true:false"
        style="border-radius: 10px"
        color="transparent"
    )

        img(
            :src="src"
            :class="[{'zoom': zoom}, {'clickable': clickable}]"
            @click="$emit('click')"
            :style="styling"
        )
        
</template>

<script>
export default {
    props: {
        src: {
            required: true,
            type: String,
        },
        height: {
            type: String,
            default: '100%',
        },
        width: {
            type: String,
            default: '100%',
        },
        maxHeight: {
            type: String,
            default: '100%',
        },
        maxWidth: {
            type: String,
            default: '100%',
        },
        zoom: Boolean,
        clickable: Boolean,
    },

    computed: {
        aspectRatio() {
            if (this.square == true) {
                return 1;
            } else return 'undefined';
        },
        styling() {
            return `
                max-width: ${this.maxWidth};
                max-height: ${this.maxHeight};
            `;
        },
    },
};
</script>

<style lang="sass" scoped>
.custom-image
    overflow: hidden
    img
        height: 100%
        width: 100%
        object-fit: cover
        transition: .2s all ease-in-out
        &.zoom
            &:hover
                transform: scale(1.04)
        &.clickable
            cursor: pointer
    .block
        position: absolute
        width: 100%
        height: 100%
        top: -10%
        left: 10%
</style>