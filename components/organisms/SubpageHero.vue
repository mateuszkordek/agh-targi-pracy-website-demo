<template lang="pug">
    v-row(
        class="subpage-hero"
    )
        v-col(
            :cols="phone?12:phablet?7:6"
            :class="phone?'order-1':''"
        )
            slot

        v-spacer

        v-col(
            :cols="phone?12:5"
        )
            div(
                class="relative"
            )
                CustomImage(
                    :src="img"
                    class="z-index-1"
                    :maxHeight="phone?'230px':laptop?'400px':'500px'"
                )
                ColorBox(
                    class="secondary"
                    style="position: absolute; top: -5%; right: -5%"
                    width="85%"
                    height="85%"
                )
</template>

<script>
export default {
    props: {
        img: {
            required: true,
            type: String,
        },
    },
};
</script>