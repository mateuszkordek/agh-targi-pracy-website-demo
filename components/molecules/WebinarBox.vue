<template lang="pug">
div(class="webinar-box d-flex align-center justify-space-between")
    //- opis webinaru itp
    div(
        :style="accentColorBackground"
        class="color-box d-flex flex-grow-1 relative"
        style="height: 100%"
    )
        //- left border
        div(
            :style="mainColorBackground"
            style="position: absolute; top: 0; left: 0; width: 4px; height: 100%"
        )

        //- content
        div(class="px-5 py-4 flex-grow-1")
            h5(
                class="almost-black--text mb-2"
                v-if="phablet"
            ) {{ getPLTimeFromTimestamp(webinar.start) }} – {{ getPLTimeFromTimestamp(webinar.end) }}, {{ weekday }}
            h3(
                class="mb-4"
                :style="mainColorText"
            ) {{ webinar.title }}
            div(class="always-black--text") {{ webinar.host }}

            div(
                :style="mainColorText"
                class="text-uppercase mt-3 font-weight-bold"
            )
                div(
                    v-if="!webinar.workshops"
                    class="d-flex align-center"
                )
                    img(
                        src="/iconsAssets/prezentacja.png"
                        height="16px"
                        class="mr-2"
                    )
                    span Prezentacja
                div(
                    v-else
                    class="d-flex align-center"
                )
                    img(
                        src="/iconsAssets/warsztat.png"
                        height="16px"
                        class="mr-2"
                    )
                    span Warsztaty
            v-expansion-panels(
                flat
            )
                v-expansion-panel(
                    style="border-radius: 10px !important"
                    @change="expanded = !expanded"
                    :style="accentColorBackground"
                )
                    v-expansion-panel-header(
                        class="font-weight-bold px-0"
                        style="line-height: 1.5; width: 110px"
                        :style="mainColorText"
                    ) Rozwiń opis
                        template(
                            v-slot:actions
                        )
                            v-icon(
                                v-if="expanded"
                                :color="webinar.colors.main"
                                style="transition: 0.2s all ease-in-out"
                                size="16"
                            ) remove
                            v-icon(
                                v-if="!expanded"
                                :color="webinar.colors.main"
                                style="transition: 0.2s all ease-in-out"
                                size="16"
                            ) add
                    v-expansion-panel-content(class="always-black--text") {{ webinar.desc }}

    //- godzina i button
    div(
        :class="phablet ? 'pl-6' : 'pl-10'"
        v-if="!phablet"
    )
        div(class="d-flex align-end mb-4 justify-center")
            v-icon(class="mr-2 almost-black--text mb-1") schedule
            div
                div {{ weekday }}
                h3(
                    class="mb-0 almost-black--text"
                    :class="phablet ? '' : 'd-flex'"
                )
                    div {{ getPLTimeFromTimestamp(webinar.start) }}
                    div(
                        v-if="!phabletOnly"
                        class="mx-1"
                    ) –
                    div {{ getPLTimeFromTimestamp(webinar.end) }}

            div(
                class="d-flex align-start ml-2"
                style="height: 29px"
                v-if="!phablet"
            )
                v-tooltip(
                    right
                )
                    template(
                        v-slot:activator="{ on, attrs }"
                    )
                        v-icon(
                            v-bind="attrs"
                            v-on="on"
                            size="16"
                        ) help_outline
                    span Czasu środkowoeuropejskiego (Polska)
        //- CustomButton(
        //-     disabled
        //-     :large="!phablet"
        //- )
        //-     span Wejdź
        //-     span(
        //-         v-if="!phablet"
        //-     ) do pokoju
        CustomButton(
            @click="goToCTAPage"
        ) {{ getFairSettings.callToAction.ctaButtons.text }}
</template>

<script>
export default {
    props: {
        webinar: {
            required: true,
            type: Object
        },
        weekday: String
    },

    data: () => ({
        expanded: null
    }),

    computed: {
        mainColorBackground() {
            return `background-color: ${this.webinar.colors.main}`
        },
        accentColorBackground() {
            return `background-color: ${this.webinar.colors.accent}`
        },
        mainColorText() {
            return `color: ${this.webinar.colors.main}`
        }
    }
}
</script>

<style lang="sass">
.webinar-box
    width: 100%
    .v-expansion-panel-content__wrap
        padding: 0
    .color-box
        border-radius: 0 10px 10px 0
</style>