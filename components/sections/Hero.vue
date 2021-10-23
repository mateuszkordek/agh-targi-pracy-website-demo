<template lang="pug">
.hero.relative
    v-container.z-index-1.relative.d-flex.align-center(
        style="min-height: 100vh"
    )
        v-row
            v-col.d-flex.flex-column.justify-center(
                :cols="phablet ? 12 : 7"
                :class="phablet ? 'align-center' : 'align-start'"
            )
                //- logo z headerem
                .d-flex.align-end(
                    :class="phone ? 'flex-column align-center pb-10' : phablet ? 'flex-column align-center pb-12' : desktop ? 'pb-8' : 'pb-12'"
                )
                    //- logo
                    img(
                        src="/images/logo.png"
                        :height="phone ? '110px' : desktop ? '110px' : '140px'"
                        v-if="!isDark"
                    )
                    img(
                        src="/images/logo-white.png"
                        :height="phone ? '110px' : desktop ? '110px' : '140px'"
                        v-else
                    )

                    //- header
                    div(
                        :class="phablet ? 'text-center mt-6' : 'ml-8'"
                    )
                        h1.hero-main-header(
                            :class="phablet ? 'mb-2' : ''"
                        )
                            div {{ heroSection.header.line1 }}
                        h1.hero-sub-header {{ heroSection.header.line2 }}

                //- data
                h1.hero-sub-header.secondary--text(
                    :class="phablet ? 'text-center' : laptop ? 'py-3' : desktop ? 'pt-2' : 'py-12'"
                ) {{ heroSection.date }}

                //- timer od tabletu w dol
                Timer.mt-12(
                    v-if="phablet"
                    style="width: 90%"
                )

                //- text
                div(
                    :class="phablet ? 'text-center mt-12' : 'mt-8'"
                )
                    .hero-text(
                        v-html="heroSection.text"
                    )
                    //- div
                    //-     div Strona tegorocznej edycji w przygotowaniu.
                    //-     div Więcej informacji wkrótce.

                    //- div(
                    //-     class="mt-5"
                    //- )
                    //-     div Firmy i instytucje zainteresowanie uczestnictwem
                    //-     div zapraszamy do kontaktu pod adresem:
                    //-     a(
                    //-         href="mailto:tp@agh.edu.pl"
                    //-         target="_blank"
                    //-         class="font-weight-medium"
                    //-     ) tp@agh.edu.pl

                //- buttony
                div(
                    :class="phone ? 'mt-12' : desktop ? 'mt-8' : 'mt-12'"
                )
                    CustomButton(
                        @click="goToCTAPage"
                        :style="[phone ? { width: '100%' } : { width: '220px' }]"
                        :class="phone ? 'mb-3' : 'mr-5'"
                        v-if="$store.getters['resources/getFairSettings'].callToAction.ctaButtons.showCtaButtons"
                    ) {{ getFairSettings.callToAction.ctaButtons.text }}

                    CustomButton.primary--text(
                        :style="[phone ? { width: '100%' } : { width: '220px' }]"
                        to="/wystawcy"
                        outlined
                        v-if="$store.getters['resources/getFairSettings'].otherWebsiteElements.showExhibitors"
                    ) Zobacz wystawców

            v-col(
                cols="5"
                v-if="!phablet"
            )
                .relative(
                    style="height: 100%"
                )
                    CustomImage(
                        :src="heroSection.img.sizes.large"
                        height="100%"
                    )
                        //- :height="laptop?'500px':desktop?'650px':'750px'"
                    Timer(
                        style="position: absolute; bottom: 10%; left: -5%"
                    )

            //- v-col(
            //-     cols="12"
            //-     v-if="phablet"
            //- )
    GreyBackgroundBlock(
        v-if="!phablet"
    )
</template>

<script>
import Timer from "@/components/molecules/Timer"
import GreyBackgroundBlock from "@/components/atoms/GreyBackgroundBlock"

export default {
    components: {
        Timer,
        GreyBackgroundBlock
    },

    props: {
        heroSection: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="sass" scoped>
.hero
    padding-top: 20px
    @media(max-height: 950px)
        padding-top: 60px
    @media(max-height: 830px)
        padding-top: 120px

    .hero-main-header
        font-size: 70px
        @media(max-width: 1903.98px)
            font-size: 55px
            @media(max-width: 1263.98px)
                font-size: 50px
            @media(max-width: 959.98px)
                font-size: 50px
            @media(max-width: 599.98px)
                font-size: 40px
    .hero-sub-header
        font-size: 38px
        line-height: 1
        @media(max-width: 1903.98px)
            font-size: 35px
        @media(max-width: 959.98px)
            font-size: 35px
        @media(max-width: 599.98px)
            font-size: 28px
    .left
        width: 40%
        @media(max-width: 959.98px)
            width: 100%
    .right
        width: 50%
        @media(max-width: 959.98px)
            width: 100%
    .logo
        position: absolute
        top: 20px
        left: 0
    .hero-text
        @media(min-width: 960px)
            max-width: 80%
        // max-width: 680px
        // @media(max-width: 1903.98px)
        //     max-width: 550px
</style>
