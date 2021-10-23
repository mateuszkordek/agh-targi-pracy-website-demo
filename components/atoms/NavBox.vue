<template lang="pug">
    div(
        class="nav-box relative"
        :class="isDark?'dark-mode agh-grey':''"
        height="100%"
        @click="!!box.href?open(box.href):''"
    )

        //- :height="getWcagStep==2||getWcagStep==3?490:phone?380:phablet?470:desktop?400:410"
        nuxt-link(
            target="_self"
            class="nav-box-content z-index-1 no-underline"
            :to="!!box.to?box.to:''"
            :class="isDark?'white--text':''"
        )
            div(
                class="d-flex align-end z-index-1"
                style="border-radius: 10px 10px 0 0; overflow: hidden"
            )
                img(
                    :src="box.img.sizes.large"
                    :height="desktop?200:240"
                    width="100%"
                    style="object-fit: cover"
                    class="box-image"
                )
            div(
                :class="phone?'px-3 py-6':'px-5 pt-5 pb-6'"
                class="z-index-1"
            )
                h3(
                    class="mb-3"
                ) {{ box.header}}
                div(
                    class="box-p"
                ) {{ box.text }}


        v-card(
            class="box-background relative"
            elevation="0"
        )

            v-icon(
                class="arrow z-index-1"
                color="white"
            ) mdi-arrow-right

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
.nav-box
    width: 100%
    cursor: pointer
    border-radius: 10px
    box-shadow: 0px 5px 45px rgba(184, 184, 184, 0.22)
    transition: .2s all ease-in-out

    .nav-box-content
        color: initial
        transition: .2s all ease-in-out

    .box-background
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: url('/shapes/green.png')
        background-position: center
        background-size: cover
        border-radius: 10px
        opacity: 0
        transition: .2s all ease-in-out

    .arrow
        position: absolute
        right: 10px
        bottom: 10px
        opacity: 0
        transition: .2s all ease-in-out

    .box-image
        transition: .2s all ease-in-out

    .box-p
        color: #4C5562
        transition: .2s all ease-in-out

    &.dark-mode
        box-shadow: none
        .box-p
            color: white

    @media(min-width: 960px)
        &:hover
            color: white
            .nav-box-content
                color: white
            .box-background
                opacity: 1
                height: calc(100% + 20px)
            .arrow
                opacity: 1

            .box-image
                transform: scale(1.05)

            .box-p
                color: white

// .nav-box
//     width: 100%
//     cursor: pointer
//     border-radius: 10px
//     overflow: visible
    // .nav-box-content
    //     width: 100%
    //     height: 100%
    //     transition: .2s all ease-in-out
    //     box-shadow: 0px 5px 45px rgba(184, 184, 184, 0.22) !important
    //     .box-background-container
    //         position: absolute
    //         top: 0
    //         left: 0
    //         width: 100%
    //         height: 100%
    //         background-color: #479665
    //         background: url('/shapes/green.png')
    //         background-position: center
    //         background-size: cover
    //         border-radius: 10px
    //         opacity: 0
    //         transition: .2s all ease-in-out
    //     .arrow
    //         position: absolute
    //         right: 10px
    //         bottom: 10px
    //         opacity: 0
    //         transition: .2s all ease-in-out
    //     @media(min-width: 960px)
    //         &:hover
    //             box-shadow: 0px 5px 75px rgba(184, 184, 184, 0.32) !important
    //             // height: calc(100% + 20px)
    //             color: white
    //             h3
    //                 transition: .2s all ease-in-out
    //                 color: white
    //             .box-background-container
    //                 opacity: 1

    //             .arrow
    //                 opacity: 1
    // .v-card--link:focus:before
    //     opacity: 0 !important
    // &.dark-mode
    //     .nav-box-content
    //         box-shadow: none !important
</style>