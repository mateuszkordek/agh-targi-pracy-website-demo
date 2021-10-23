<template lang="pug">
    div(
        class="home-hero relative"
    )
        v-container(
            class="d-flex justify-center flex-column z-index-1 narrow relative"
            style="min-height: 100vh"
            :class="phablet?'text-center':''"
        )
            div(
                :class="phone?'mt-5 pb-2':desktop?'pb-4':'pb-8'"
            )
                div(
                    class="d-flex justify-center"
                    v-if="phablet"
                )
                    img(
                        src="/images/logo.png"
                        :height="phone?'100px':'130px'"
                        class="mb-8"
                    )
                h1(
                    class="main-header"
                )
                    div Targi Pracy AGH
                h1(
                    class="secondary--text"
                    v-if="phablet"
                ) 15 - 16 Marca 2021

            div(
                class="d-flex justify-space-between flex-wrap"
                :class="phone?'mt-5':phablet?'mt-9':'mt-12'"
            )
                div(
                    class="left"
                    :class="phablet?'order-1':''"
                )

                    h1(
                        class="secondary--text mb-5"
                        v-if="!phablet"
                    ) 15 - 16 Marca 2021

                    div
                        div Strona tegorocznej edycji w przygotowaniu.
                        div Więcej informacji wkrótce.

                    div(
                        class="mt-5"
                    )
                        div Firmy i instytucje zainteresowanie uczestnictwem zapraszamy do kontaktu pod adresem:
                        a(
                            href="mailto:tp@agh.edu.pl"
                            target="_blank"
                            class="font-weight-medium"
                        ) tp@agh.edu.pl


                div(
                    class="right mt-8"
                    :class="phone?'d-flex justify-center pb-3 mb-12':phablet?'d-flex justify-center mb-12 pb-12':''"
                )
                    Timer

            div(
                class="logo"
                v-if="!phablet"
            )
                img(
                    src="/images/logo.png"
                    height="120px"
                )
        GreyBackgroundBlock(
            v-if="!phablet"
        )


</template>

<script>
import Timer from '@/components/molecules/Timer';
import GreyBackgroundBlock from '@/components/atoms/GreyBackgroundBlock';

export default {
    components: {
        Timer,
        GreyBackgroundBlock,
    },
};
</script>

<style lang="sass" scoped>
.home-hero
    .main-header
        font-size: 90px
        @media(max-width: 1903.98px)
            font-size: 70px
        @media(max-width: 1263.98px)
            font-size: 60px
        @media(max-width: 959.98px)
            font-size: 50px
        @media(max-width: 599.98px)
            font-size: 40px
            margin-bottom: 10px
    .sub-header
        font-size: 24px
        @media(max-width: 599.98px)
            font-size: 18px
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
</style>
