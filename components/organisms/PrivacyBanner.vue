<template lang="pug">

    div(
        style="width: 100vw; height: 100vh; pointer-events: none; position: fixed; z-index: 9;"
    )

        div(
            style="pointer-events: all; position: absolute; bottom: 0px; right: 0px;"
            :class="phone?'pb-12':'pr-3 pb-3'"
        )
            //- :style="{padding: bpPhone ? 0 : '20px'}"
            transition(name="fade-up")
                v-card(
                    v-if="show"
                    class="banner-card pa-5"
                    :tile="phone"
                )
                    h4(
                        class="mb-3"
                    ) Strona wykorzystuje pliki cookies i localStorage


                    p
                        span Korzystamy z plików cookies w celach monitorowania ruchu witryny. Dalsze korzystanie z serwisu bez zmiany ustawień przeglądarki oznacza akceptację plików cookies. Więcej informacji o zamieszczanych plikach cookies oraz o możliwości zmiany ustawień przeglądarki oraz polityce przetwarzania danych osobowych znajdą Państwo w naszej 

                        a(
                            :href="getRegulations.cookies"
                            @click="event=>event.stopPropagation()"
                            target="_blank"
                        ) polityce obsługi plików cookies.

                    v-btn.font-weight-bold.px-7(
                        rounded
                        color="secondary"
                        depressed
                        @click="accept_cookies()"
                        :width="phone?'100%':''"
                    ) Akceptuję


</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'enlighten-privacy-banner',

    data: () => ({
        show: false,
    }),

    mounted() {
        this.check_cookies();
    },

    computed: {
        ...mapGetters('resources', ['getRegulations']),
    },

    methods: {
        accept_cookies() {
            localStorage.setItem('enlighten-cookies-accepted', 'true');
            this.show = false;
        },

        async check_cookies() {
            if (!localStorage.getItem('enlighten-cookies-accepted')) {
                // await this.wait(2000);
                await setTimeout(() => (this.show = true), 2000);
            }
        },
    },
};
</script>
<style lang="sass">
.banner-card
    max-width: 450px
</style>