<template lang="pug">
  .enl-footer(
    style="padding: 0px; background-color: #19191B"
  )
    v-container.py-1
        .d-flex(
            :style="[phone ? {'height': '55px'} : {'height': '35px'}]"
            :class="{'flex-column align-center justify-center' : phone}"
        )
            div.align-center.d-flex.font-style(
                style="opacity: 1;"
                :class="phone?'mb-1':''"
            )
                v-icon.mr-1(
                    left
                    dark
                    :style="[phone ? {'font-size': '13px'} : {'font-size': '13px'}]"
                ) copyright
                span.mr-1 {{ copyrightDate }}
                span {{ name }}

            v-spacer(v-if="!phone")

            div.font-style.align-center.d-flex(
                :style="[phone ? {'margin-right': '-10px'} : {}]"
            )
                span Designed & Developed with

                v-icon(
                    small
                    left
                    right
                    light
                    color="white"
                    :style="[phone ? {'font-size': '13px', 'margin': '0 3px -1px'} : {'font-size': '14px', 'margin': '0 4px -1px'}]"
                ) favorite

                span by

                //- v-btn.font-style(
                //-     style="padding: 4px 7px 0 7px"
                //-     :height="phone ? 20 : 30"
                //-     text
                //-     @click="open('https://enlighten.pl/')"
                //-     :ripple="false"
                //- )
                //-     logo(
                //-         fill="#fff"
                //-         :height="phone ? 17 : 19"
                //-         style="margin-top: 0px"
                //-     )

                a(
                    href="https://enlighten.pl/"
                    class="d-flex align-center ml-2"
                    target="_blank"
                )
                    EnlLogo(
                        fill="#fff"
                        :height="phone ? 17 : 19"
                    )


</template>

<script>
import moment from 'moment';
import EnlLogo from '@/components/atoms/EnlLogo';

export default {
    name: 'enl-footer',
    components: { EnlLogo },
    props: ['name'],

    computed: {
        copyrightDate() {
            return new moment().format('YYYY');
        },
    },
};
</script>

<style lang="sass">
.enl-footer
    .font-style
        color: white
        font-size: 14px !important
        @media (max-width: 576.98px)
            font-size: 12px

        .container
            padding-top: 8px !important
            padding-bottom: 8px !important
            @media (max-width: 768.98px)
                padding-top: 7px !important
                padding-bottom: 7px !important

    .v-btn
        &:hover
            &::before
                opacity: 0
</style>