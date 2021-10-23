<template lang="pug">
v-app(
    style="position: relative"
)
    CustomText(
        v-show="loaded"
    )
        PrivacyBanner

        div(
            class="d-flex flex-column justify-space-between"
            style="min-height: 100vh"
        )
            div
                div(class="app-bars")
                    AccessibilityBar(
                        :class="scrolled ? 'hide-accessibility-bar' : ''"
                        v-if="!phone"
                    )
                    AppBar(
                        :class="scrolled ? 'move-app-bar' : ''"
                        @openDrawer="drawerOpened = true"
                    )
                v-main
                    transition(
                        name="fade"
                    )
                        nuxt(
                            style="overflow: hidden"
                        )
                v-navigation-drawer(
                    app
                    v-model="drawerOpened"
                    temporary
                )
                    NavigationDrawer(
                        @closeDrawer="drawerOpened = false"
                        style="width: 100%"
                    )
            div
                FooterSection(
                    v-if="$route.name != 'en'"
                )
                EnlFooter(
                    name="Targi Pracy AGH"
                )

    GlobalLoading(
        v-if="!loaded"
    )
        //- v-else
    //- v-dialog(
    //-     v-model="oldPageModal"
    //-     max-width="500px"
    //- )
    //-     v-card(class="pa-10")
    //-         h4(class="mb-0 text-center")
    //-             div(class="mb-3") Pierwsza edycja Wirtualnych Targów Pracy AGH dobiegła końca.
    //-             div Wchodzisz na archiwalną wersję strony.
    //-             CustomButton(
    //-                 @click="oldPageModal = false"
    //-                 :large="false"
    //-                 class="mt-6"
    //-             )
    //-                 span(
    //-                     style="font-size: 14px"
    //-                 ) Kontynuuj
</template>

<script>
import fetchData from "@/plugins/fetch"

import AppBar from "@/components/sections/AppBar"
import FooterSection from "@/components/sections/FooterSection"
import NavigationDrawer from "@/components/organisms/NavigationDrawer"
export default {
    components: {
        AppBar,
        FooterSection,
        NavigationDrawer
    },

    data: () => ({
        drawerOpened: false,
        scrolled: null,
        loaded: false,
        oldPageModal: false
    }),

    methods: {
        updateScroll() {
            if (window.scrollY > 10) {
                this.scrolled = true
            } else {
                this.scrolled = false
            }
        }
    },

    beforeMount() {
        window.addEventListener("scroll", this.updateScroll)
    },

    mounted() {
        this.$nextTick(() => {
            setTimeout(() => {
                this.loaded = true
            }, 500)
            setTimeout(() => {
                this.oldPageModal = true
            }, 1000)
        })
    },

    watch: {
        $route: {
            handler(val) {
                setTimeout(() => this.$vuetify.goTo(0), 300)
            }
        }
    },

    async fetch() {
        await fetchData(this)
    }
}
</script>

<style lang="sass">
.v-application--wrap
    display: flex
    flex-direction: column
    justify-content: space-between
.app-bars
    @media(min-width: 600px)
        .accessibility-bar
            transform: translateY(0px) !important
            &.hide-accessibility-bar
                transform: translateY(-50px) !important
        .app-bar
            transform: translateY(50px) !important
            &.move-app-bar
                transform: translateY(0px) !important
</style>