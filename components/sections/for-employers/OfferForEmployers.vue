<template lang="pug">
    div(
        class="offer-for-employers"
    )
        CustomSpacer(
            top
        )
        v-container(
            class="relative"
        )
            HeaderWithText(
                class="z-index-1"
                headerBar
                :header="getForEmployersPage.offerForEmployers.header"
                :text="getForEmployersPage.offerForEmployers.text"
                limitedTextsWidth
            )

            CustomSpacer

            v-row(
                class="z-index-1"
            )
                v-col(
                    :cols="phone?12:6"
                )
                    ColorBox(
                        class="offer-box primary white--text d-flex flex-column justify-space-between"
                        :class="!expand?'bundled':''"
                    )
                        div
                            h2(
                                class="white--text"
                            ) Sponsor
                            div(
                                v-html="getForEmployersPage.offerForEmployers.boxes.fundraiser"
                            )
                        CustomButton(
                            class="mt-4"
                            @click="goToContactSection"
                            :class="isDark?'accent white--text':'white primary--text'"
                            :style="phone?{'width': '100%'}:{'max-width': '250px'}"
                        ) Zostań sponsorem
                v-col(
                    :cols="phone?12:6"
                )
                    ColorBox(
                        class="offer-box accent2 d-flex flex-column justify-space-between"
                        :class="!expand?'bundled':''"
                    )
                        div
                            h2 Wystawca
                            div(
                                v-html="getForEmployersPage.offerForEmployers.boxes.exhibitor"
                            )
                        CustomButton(
                            class="secondary mt-4"
                            :style="phone?{'width': '100%'}:{'max-width': '250px'}"
                            @click="goToContactSection"
                        ) Zostań wystawcą

                v-col(
                    cols="12"
                    v-if="!expand && !phone"
                    class="d-flex justify-center relative"
                )
                    //- div(
                    //-     style="background: rgb(255,255,255); background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 49%, rgba(255,255,255,1) 100%); height: 50px; width: 100%; position:absolute; top: -50px; left: 0"
                    //-     class="z-index-1"
                    //- )
                    v-btn(
                        @click="expand = true"
                        depressed
                        style="min-width: 250px"
                    )
                        span Rozwiń
                        v-icon expand_more

            CustomSpacer

            CustomShape(
                single
                :top="250"
                :right="-250"
                :width="450"
                style="transform: rotate(90deg)"
            )


</template>
<script>
import { mapGetters } from 'vuex';
export default {
    data: () => ({
        expand: false,
    }),
    methods: {
        goToContactSection() {
            this.$vuetify.goTo('#contact-section', { offset: 60 });
        },
    },
    computed: {
        ...mapGetters('resources', ['getForEmployersPage']),
    },
};
</script>

<style lang="sass" scoped>
.offer-box
    &.bundled
        @media(min-width: 768px)
            overflow: hidden
            height: 300px !important
</style>