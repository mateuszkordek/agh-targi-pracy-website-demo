<template lang="pug">

    div(
        class="d-flex align-center wcag-panel justify-end"
        :class="{'dark-mode': isDark}"
    )
        //- contrast
        div(
            :style="{fontSize: font_size + 'px', color: font_color}"
            :class="text_class"
            class="mr-2"
        ) Kontrast:

        v-btn(
            @click="darkmode = false"
            style="border: 1px solid black; background-color: white"
            small
            icon
            color="black"
            class="mr-2"
        )
            span A

        v-btn.mr-12(
            @click="darkmode = true"
            style="background-color: #474747"
            small
            icon
            color="#FFF46C"
        )
            span A

        //- font size
        div(
            :style="{fontSize: font_size + 'px', color: font_color}"
            :class="text_class"
        ) Wielkość liter:

        div(
            class="d-flex align-center justify-center"
        )
            v-btn(
                v-for="(btn, index) in fontSizeButtons"
                :key="index"
                @click="SET_WCAG_STEP(btn.step)"
                medium
                :light="light"
                :dark="dark"
                :class="button_class"
                class="elevation-0 font-size-button mx-1"
            )

                span(
                    style="position: relative"
                    :class="{'wcag-underline' : getWcagStep == btn.step}"
                )
                    span A

                    span(
                        style="font-size: 10px; position: absolute; top: -3px; right: -15px"
                        v-html="btn.suffix"
                        class="no-underline"
                    )



</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'wcag-panel',

    props: {
        font_size: {
            type: Number | String,
            default: 16,
        },

        font_color: {
            type: String,
        },

        button_color: {
            type: String,
            default: '#F8F8F8',
        },

        light: {
            type: Boolean,
        },

        dark: {
            type: Boolean,
        },

        text_class: {
            type: String,
        },

        button_class: {
            type: String,
        },

        pseudo_class: {
            type: String,
        },
    },

    data: () => ({
        darkmode: false,
        fontSizeButtons: [
            {
                step: 1,
                suffix: '',
            },
            {
                step: 2,
                suffix: '+',
            },
            {
                step: 3,
                suffix: '++',
            },
        ],
    }),

    computed: {
        ...mapGetters('accessibility', ['getWcagStep']),
    },

    methods: {
        ...mapActions('accessibility', ['SET_DARK_MODE', 'SET_WCAG_STEP']),
    },

    watch: {
        darkmode(val) {
            this.$vuetify.theme.dark = val;
            this.SET_DARK_MODE(val);
        },
    },
};
</script>

<style lang="sass" scoped>
.wcag-panel
    width: 100%
    .wcag-underline
        border-bottom: 1px solid black
    .font-size-button
        &:nth-of-type(1)
            span
                font-size: 1.1em
        &:nth-of-type(2)
            span
                font-size: 1.2em
        &:nth-of-type(3)
            span
                font-size: 1.3em

    &.dark-mode
        .wcag-underline
            border-bottom: 1px solid white
</style>