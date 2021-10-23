<template lang="pug">
    div(
        class="footer-section white--text"
    )
        CustomSpacer
        v-container(
            class="d-flex justify-space-between"
            :class="phone?'flex-wrap':''"
        )
            div
                nuxt-link(
                    to="/"
                )
                    img(
                        src="/images/logo-white.png"
                        height="90"
                        class="mb-2 logo-link"
                    )
                p(
                    style="max-width: 400px"
                    class="white--text"
                )
                    div(
                        class="font-weight-medium"
                    ) {{getEnPage.footer.text.line1}}
                    div(
                        class="font-weight-medium"
                    ) {{getEnPage.footer.text.line2}}
                    div(
                        class="font-weight-medium"
                    ) {{getEnPage.footer.text.line3}}
                div(
                    class="mt-6 d-flex button-container"
                    :class="laptop?'flex-column':''"
                )

                    CustomButton(
                        to='/dla-pracodawcow'
                        class="white--text"
                        outlined
                        activeClass="no-active-class"
                    ) Become an Exhibitor
            div(
                class="d-flex right-side"
                :class="phone?'mt-12':''"
            )
                //- div(
                //-     v-if="!phablet"
                //- )
                //-     h3(
                //-         style="color: inherit"
                //-         class="mb-8"
                //-     ) Zobacz również:

                //-     nuxt-link(
                //-         v-for="(btn, index) in getNavigation"
                //-         :key="index"
                //-         :to="!!btn.to?btn.to:''"
                //-         @click="!!btn.scrollClass?$vuetify.goTo('.' + btn.scrollClass):''"
                //-         text
                //-         style="text-transform: none; color: white; font-size: 0.875rem"
                //-         class="d-flex justify-start underline-on-hover pb-4 font-weight-medium"
                //-     )
                //-         CustomText {{btn.name}}

                div(
                    class="social-media"
                )
                    h3(
                        style="color: inherit"
                        class="mb-8"
                    ) Follow us:

                    //- facebook
                    a(
                        :href="getSocialMedia.facebook"
                        target="_blank"
                        class="no-underline d-flex align-center pb-8"
                    )
                        img(
                            src="/iconsAssets/fb.png"
                            width="20"
                            class="mr-3"
                        )
                        div(
                            class="white--text underline-on-hover font-weight-medium"
                        ) Facebook

                    //- linkedin
                    a(
                        :href="getSocialMedia.linkedId"
                        target="_blank"
                        class="no-underline d-flex align-center pb-8"
                    )
                        img(
                            src="/iconsAssets/li.png"
                            width="20"
                            class="mr-3"
                        )
                        div(
                            class="white--text underline-on-hover font-weight-medium"
                        ) LinkedIn

                    //- instagram
                    a(
                        :href="getSocialMedia.instagram"
                        target="_blank"
                        class="no-underline d-flex align-center pb-8"
                    )
                        img(
                            src="/iconsAssets/ig.png"
                            width="20"
                            class="mr-3"
                        )
                        div(
                            class="white--text underline-on-hover font-weight-medium"
                        ) Instagram

                    //- youtube
                    a(
                        :href="getSocialMedia.youTube"
                        target="_blank"
                        class="no-underline d-flex align-center pb-8"
                    )
                        img(
                            src="/iconsAssets/yt.png"
                            width="20"
                            class="mr-3"
                        )
                        div(
                            class="white--text underline-on-hover font-weight-medium"
                        ) YouTube
        CustomSpacer
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('navigation', ['getNavigation']),
        ...mapGetters('resources', ['getSocialMedia', 'getEnPage']),
    },
};
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