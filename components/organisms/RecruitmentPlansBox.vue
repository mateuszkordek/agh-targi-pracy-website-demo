<template lang="pug">
    div(
        class="recruitment-plans-box"
    )
        ColorBox(
            shadow
        )
            v-row
                //- lewa strona
                v-col(
                    :cols="phablet?12:laptop?7:6"
                    class="d-flex align-center"
                )
                    div(
                        class="mb-0 almost-black--text"
                        v-html="exhibitor.plans"
                    )
                v-spacer(
                    class="column-divider"
                    v-if="!phablet"
                )

                //- prawa strona
                v-col(
                    :cols="phablet?12:laptop?4:4"
                    class="d-flex align-center"
                )
                    v-row
                        //- miejsce pracy
                        v-col(
                            :cols="phone?12:phablet?6:12"
                            class="mb-6"
                            v-if="!!exhibitor.workplace"
                        )
                            v-icon(
                                color="primary"
                                size="20"
                                class="mb-2"
                            ) near_me
                            div(
                                class="font-weight-bold mb-2"
                            ) Miejsce pracy:
                            p(
                                class="mb-0"
                            ) {{exhibitor.workplace}}

                        //- maile
                        v-col(
                            :cols="phone?12:phablet?6:12"
                            v-if="getAllEmailAdresses(exhibitor).length || !!exhibitor.contact.contactWebsites"
                        )
                            v-icon(
                                color="primary"
                                size="20"
                                class="mb-2"
                            ) mail_outline
                            div(
                                class="font-weight-bold mb-2"
                            ) Kontakt w sprawie rekrutacji:
                            a(
                                v-for="(email, index) in getAllEmailAdresses(exhibitor)"
                                :href="'mailto:' + email"
                                target="_blank"
                                class="almost-black--text mb-2"
                                style="display: block;"
                            ) {{email}}

                            a(
                                v-for="(website, index) in exhibitor.contact.contactWebsites"
                                :href="website.href"
                                target="_blank"
                                class="almost-black--text mb-2"
                                style="display: block;"
                            ) {{website.href}}

</template>

<script>
export default {
    props: {
        exhibitor: {
            required: true,
            type: Object,
        },
    },
};
</script>

<style lang="sass">
.column-divider
    position: relative
    &::before
        display: block
        content: ''
        position: absolute
        top: 10%
        left: 50%
        background-color: #FDC139
        width: 2px
        height: 80%
</style>