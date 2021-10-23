<template lang="pug">
    v-card(
        class="cta-box radius agh-grey"
        target="_blank"
        elevation="0"
        style="border-radius: 10px"
        :href="box.href"
    )

        div(
            class="d-flex align-end"
            style="border-radius: 10px 10px 0 0; overflow: hidden"
        )
            img(
                v-if="!!box.img"
                :src="box.img.sizes.large"
                :height="phone?190:laptop?220:desktop?300:350"
                width="100%"
                style="object-fit: cover"
            )
        div(
            :class="phone?'pa-3':'pa-7'"
        )
            h2(
                class="mb-4"
            ) {{box.header}}
            p(
                class="mb-0"
            ) {{box.text}}

</template>

<script>
export default {
    props: {
        box: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="sass" scoped>
.cta-box
    &:hover
        img
            transition: .2s all ease-in-out
            transform: scale(1.04)
</style>