<template lang="pug">
    div(
        class="faq"
    )
        CustomSpacer
        v-container
            HeaderWithText(
                :header="getAboutPage.faqSection.header"
                headerBar
                :text="getAboutPage.faqSection.text"
                limitedTextsWidth
            )
            CustomSpacer
            TwoColumns(
                wide
            )
                template(
                    v-slot:bigger
                )
                    CustomSpacer(
                        v-if="phone"
                    )
                    ExpansionPanels(
                        :items="getFaqItems"
                    )
                template(
                    v-slot:smaller
                )
                    ColorBox(
                        class="accent2"
                        height="auto"
                    )
                        h3 {{getAboutPage.faqSection.box.header}}
                        p {{getAboutPage.faqSection.box.text}}
                        a(
                            class="d-flex align-center primary--text no-underline"
                            :href="'mailto:'+getContact.email"
                        )
                            v-icon(
                                color="primary"
                                class="mr-2"
                                size="18"
                            ) mail_outline
                            span(
                                class="font-weight-medium underline"
                            ) {{getContact.email}}

        CustomSpacer
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('resources', [
            'getAboutPage',
            'getContact',
            'getFaqItems',
        ]),
    },
};
</script>