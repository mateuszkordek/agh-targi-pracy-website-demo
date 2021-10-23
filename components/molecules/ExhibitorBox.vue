<template lang="pug">
    v-card(
        class="exhibitor-box relative"
        elevation="0"
        :height="getWcagStep==2||getWcagStep==3?370:phone?260:desktop?285:270"
        :class="isDark?'dark-mode':''"
    )
        v-card(
            class="exhibitor-box-content"
        )
            nuxt-link(
                class="no-underline"
                :to="!disabled?{name: 'wystawcy-slug', params: {slug: exhibitor.slug}}:{}"
            )
                div(
                    class="d-flex align-center justify-center relative"
                    :class="phone?'px-12 py-7':'px-12 py-7'"
                )
                    div(
                        style="height: 60px"
                    )
                        img(
                            :src="exhibitor.logo.sizes.medium"
                            style="width: 100%; height: 100%; object-fit: contain; object-position: center"
                        )
                    img(
                        src="/iconsAssets/star.png"
                        class="star"
                        height="15"
                        v-if="!!exhibitor.fundraiser"
                    )
                div(
                    :class="phone?'px-3 py-6':'px-5 py-5'"
                    class="exhibitor-box-bottom"
                )
                    h3(
                        class="mb-2 default-black--text"
                    ) {{ exhibitor.name}}
                    div(
                        v-for="(tag, index) in getLast3(exhibitor.tags)"
                        :key="index"
                        style="font-size: .8em"
                        class="almost-black--text mr-1"
                    ) {{'#'+tag.tag}}

                v-icon(
                    class="arrow"
                ) mdi-arrow-right

</template>

<script>
export default {
    props: {
        exhibitor: {
            type: Object,
            required: true,
        },
        disabled: Boolean,
    },
};
</script>

<style lang="sass" scoped>
.exhibitor-box
    width: 100%
    cursor: pointer
    .exhibitor-box-content
        position: absolute
        width: 100%
        height: 100%
        top: 0
        left: 0
        transition: .2s all ease-in-out
        box-shadow: 0px 5px 45px rgba(184, 184, 184, 0.22) !important
        .star
            position: absolute
            top: 10px
            left: 10px
        .exhibitor-box-bottom
            border-top: 1px solid lightgrey
        .arrow
            position: absolute
            right: 10px
            bottom: 10px
            opacity: 0
            transition: .2s all ease-in-out

        @media(min-width: 960px)
            &:hover
                box-shadow: 0px 5px 75px rgba(184, 184, 184, 0.32) !important
                height: calc(100% + 20px)
                .arrow
                    opacity: 1
    .v-card--link:focus:before
        opacity: 0 !important
    &.dark-mode
        .exhibitor-box-content
            box-shadow: none !important
</style>