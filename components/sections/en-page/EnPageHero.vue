<template lang="pug">
    div(
        class="en-page-hero relative"
    )
        CustomSpacer(top)
        v-container(
            class="z-index-1"
        )
            SubpageHero(
                :img="getEnPage.img.sizes.large"
            )
                //- logo z headerem
                div(
                    class="d-flex align-end"
                    :class="desktop?'pb-8':'pb-12'"
                )
                    //- logo
                    img(
                        src="/images/logo.png"
                        :height="phone?'90px':laptop?'100px':desktop?'110px':'140px'"
                        v-if="!isDark"
                    )
                    img(
                        src="/images/logo-white.png"
                        :height="phone?'110px':laptop?'100px':desktop?'110px':'140px'"
                        v-else
                    )

                    //- header
                    div(
                        :class="phone?'ml-5':'ml-8'"
                    )
                        h1(
                            class="hero-main-header"
                            :class="phablet?'mb-2':''"
                        )
                            div {{getEnPage.header.line1}}
                        h1(
                            class="hero-sub-header"
                        ) {{getEnPage.header.line2}}

                //- data
                h1(
                    class="hero-sub-header secondary--text"
                    :class="laptop?'py-6':desktop?'pt-2 pb-8':'pt-5 pb-10'"
                ) {{getEnPage.date}}

                //- CustomSpacer

                //- tekst
                div(
                    v-html="getEnPage.text"
                )

                //- CustomSpacer

                CustomButton(
                    @click="open('mailto:'+getContact.email)"
                    :class="phablet?'mt-5':'mt-8'"
                ) Contact us!
        CustomSpacer
        GreyBackgroundBlock

</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('resources', ['getEnPage', 'getContact']),
    },
};
</script>

<style lang="sass" scoped>
.en-page-hero
    .hero-main-header
        font-size: 70px
        @media(max-width: 1903.98px)
            font-size: 55px
            @media(max-width: 1263.98px)
                font-size: 40px
            @media(max-width: 959.98px)
                font-size: 35px
            @media(max-width: 599.98px)
                font-size: 30px
    .hero-sub-header
        font-size: 38px
        line-height: 1
        @media(max-width: 1903.98px)
            font-size: 35px
        @media(max-width: 1263.98px)
            font-size: 30px
        @media(max-width: 959.98px)
            font-size: 30px
        @media(max-width: 599.98px)
            font-size: 24px
</style>
