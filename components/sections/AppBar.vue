<template lang="pug">
v-app-bar.app-bar(
    fixed
    :color="scrollTop > 10 && !isDark ? 'white' : scrollTop > 10 && isDark ? 'agh-grey' : 'transparent'"
    :class="{ scrolled: scrollTop, 'dark-mode': isDark }"
    height="90"
)
    v-app-bar-nav-icon(
        v-if="phablet || getWcagStep != 1"
        @click="$emit('openDrawer')"
    )
    div(
        style="width: 300px"
        v-if="!phablet && getWcagStep == 1"
    )
        nuxt-link(
            to="/"
        )
            CustomImage.px-3.py-1.mr-3(
                v-if="!isDark"
                @click="$vuetify.goTo(0)"
                src="/images/logo.png"
                width="50px"
                zoom
                clickable
                style="border-radius: 0"
            )
            CustomImage.px-3.py-1.mr-3(
                v-else
                @click="$vuetify.goTo(0)"
                src="/images/logo-white.png"
                width="50px"
                zoom
                clickable
                style="border-radius: 0"
            )

    v-spacer

    .d-flex.align-center.justify-end(
        v-if="!phablet && getWcagStep == 1"
    )
        v-btn.px-4.mr-2(
            v-for="(btn, index) in appBarNavigation"
            :key="index"
            :to="!!btn.to ? btn.to : ''"
            @click="btn.name == 'Kontakt' ? goToContactForm() : ''"
            text
            style="text-transform: none"
            active-class="primary--text"
        )
            CustomText {{ btn.name }}
            //- @click="!!btn.scrollClass?$vuetify.goTo('.' + btn.scrollClass):''"

    v-spacer(
        v-if="$store.getters['resources/getFairSettings'].callToAction.ctaButtons.showCtaButtons"
    )

    div(
        class="d-flex justify-end"
        style="width: 300px"
        v-if="$store.getters['resources/getFairSettings'].callToAction.ctaButtons.showCtaButtons"
    )
        CustomButton.ml-5(
            @click="goToCTAPage"
            class="px-2"
        ) {{ getFairSettings.callToAction.ctaButtons.text }}
</template>

<script>
import { mapGetters } from "vuex"
export default {
    data: () => ({
        scrollTop: null
    }),

    computed: {
        ...mapGetters("navigation", ["getNavigation"]),
        appBarNavigation() {
            if (!!this.laptop) {
                return this.getNavigation.filter(
                    (a) => a.name != "Kontakt" && a.name != "Centrum Karier"
                )
            } else {
                return this.getNavigation
            }
            return this.getNavigation
        }
    },

    methods: {
        updateScroll() {
            this.scrollTop = window.scrollY
        }
    },

    beforeMount() {
        this.scrollTop = window.scrollY
        window.addEventListener("scroll", this.updateScroll)
    }
}
</script>

<style lang="sass">
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined)
    box-shadow: none
    padding-left: 5%
    padding-right: 5%
    &.scrolled
        box-shadow: 0px 5px 45px rgba(184, 184, 184, 0.22)
        &.dark-mode
            box-shadow: none

    @media(max-width: 1400px)
        padding-left: initial
        padding-right: initial
</style>