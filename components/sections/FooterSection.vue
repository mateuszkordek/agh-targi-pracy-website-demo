<template lang="pug">
.footer-section.white--text
    CustomSpacer
    v-container.d-flex.justify-space-between(
        :class="phone ? 'flex-wrap' : ''"
    )
        div
            //- logo
            nuxt-link(
                to="/"
            )
                img.mb-2.logo-link(
                    src="/images/logo-white.png"
                    height="90"
                )

            //- tekst
            p.white--text(
                style="max-width: 400px"
            )
                .font-weight-medium {{ getFooter.text.line1 }}
                .font-weight-medium {{ getFooter.text.line2 }}
                .font-weight-medium {{ getFooter.text.line3 }}

            //- buttony
            .mt-7.d-flex.button-container(
                :class="laptop ? 'flex-column' : ''"
            )
                CustomButton(
                    @click="goToCTAPage"
                    :class="laptop ? 'mb-3' : 'mr-3'"
                    v-if="$store.getters['resources/getFairSettings'].callToAction.ctaButtons.showCtaButtons"
                ) {{ getFairSettings.callToAction.ctaButtons.text }}
                CustomButton.white--text(
                    to="/dla-pracodawcow"
                    outlined
                    activeClass="no-active-class"
                ) Zostań wystawcą

            //- regulaminy
            div
                v-divider.agh-grey.mt-7.mb-3(
                    style="width: 40px"
                )
                div
                    a.white--text.underline-on-hover(
                        text
                        style="font-size: 14px"
                        target="_blank"
                        :href="getRegulations.terms"
                    ) Regulamin uczestnictwa w Targach Pracy AGH
                div
                    a.white--text.underline-on-hover(
                        text
                        style="font-size: 14px"
                        target="_blank"
                        :href="getRegulations.cookies"
                    ) Polityka prywatności i obsługi cookies
        .d-flex.right-side(
            :class="phone ? 'mt-12' : ''"
        )
            div(
                v-if="!phablet"
            )
                h3.mb-8(
                    style="color: inherit"
                ) Zobacz również:

                nuxt-link.d-flex.justify-start.underline-on-hover.pb-4.font-weight-medium(
                    v-for="(btn, index) in getNavigation"
                    :key="index"
                    :to="!!btn.to ? btn.to : ''"
                    @click="!!btn.scrollClass ? $vuetify.goTo('.' + btn.scrollClass) : ''"
                    text
                    style="text-transform: none; color: white; font-size: 0.875rem"
                )
                    CustomText {{ btn.name }}

            .social-media
                h3.mb-8(
                    style="color: inherit"
                ) Obserwuj nas:

                //- facebook
                a.no-underline.d-flex.align-center.pb-8(
                    :href="getSocialMedia.facebook"
                    target="_blank"
                )
                    img.mr-3(
                        src="/iconsAssets/fb.png"
                        width="20"
                    )
                    .white--text.underline-on-hover.font-weight-medium Facebook

                //- linkedin
                a.no-underline.d-flex.align-center.pb-8(
                    :href="getSocialMedia.linkedIn"
                    target="_blank"
                )
                    img.mr-3(
                        src="/iconsAssets/li.png"
                        width="20"
                    )
                    .white--text.underline-on-hover.font-weight-medium LinkedIn

                //- instagram
                a.no-underline.d-flex.align-center.pb-8(
                    :href="getSocialMedia.instagram"
                    target="_blank"
                )
                    img.mr-3(
                        src="/iconsAssets/ig.png"
                        width="20"
                    )
                    .white--text.underline-on-hover.font-weight-medium Instagram

                //- youtube
                a.no-underline.d-flex.align-center.pb-8(
                    :href="getSocialMedia.youTube"
                    target="_blank"
                )
                    img.mr-3(
                        src="/iconsAssets/yt.png"
                        width="20"
                    )
                    .white--text.underline-on-hover.font-weight-medium YouTube
    CustomSpacer
</template>

<script>
import { mapGetters } from "vuex"

export default {
    computed: {
        ...mapGetters("navigation", ["getNavigation"]),
        ...mapGetters("resources", [
            "getSocialMedia",
            "getFooter",
            "getRegulations"
        ])
    }
}
</script>

<style lang="sass" scoped>
.footer-section
    background-color: #19191B
    .right-side
        .social-media
            margin-left: 130px

    @media(max-width: 1263.98px)
        .button-container
            max-width: 250px

    @media(max-width: 959.98px)
        .right-side
            width: 30%
            .social-media
                margin-left: 0
    @media(max-width: 599.98px)
        .right-side
            width: 100%
</style>