<template lang="pug">
    img(
        class="custom-shape"
        :width="width"
        :height="height"
        :style="styling"
        :src="single?'/shapes/single.png':double?'/shapes/double.png':''"
        v-if="!isDark && getWcagStep ==1"
    )

</template>

<script>
export default {
    props: {
        single: Boolean,
        double: Boolean,
        width: Number,
        height: Number,
        top: Number,
        bottom: Number,
        left: Number,
        right: Number,
    },

    computed: {
        styling() {
            let top;
            let bottom;
            let left;
            let right;
            if (this.top !== null) {
                top = 'top: ' + this.top + 'px; ';
            }
            if (this.bottom !== null) {
                bottom = 'bottom: ' + this.bottom + 'px; ';
            }
            if (this.left !== null) {
                left = 'left: ' + this.left + 'px; ';
            }
            if (this.right !== null) {
                right = 'right: ' + this.right + 'px; ';
            }
            return `${top} ${left} ${right} ${bottom}`;
        },
    },
};
</script>

<style lang="sass" scoped>
.custom-shape
    position: absolute
    object-fit: contain
    z-index: 0
    pointer-events: none
    // background-color: inherit
    // border: 1px solid red
</style>