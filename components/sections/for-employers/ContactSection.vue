<template lang="pug">
    div(
        class="contact-section"
    )
        CustomSpacer
        v-container(
            class="relative"
        )
            HeaderWithText(
                :header="getForEmployersPage.contactSection.header"
                headerBar
                :text="getForEmployersPage.contactSection.text"
                limitedTextsWidth
                class="z-index-1"
            )
            CustomSpacer
            TwoColumns(
                wide
                reversed
                class="z-index-1"
            )
                template(
                    v-slot:smaller
                )
                    ColorBox(
                        class="accent2"
                        height="auto"
                    )
                        h2 Dane kontaktowe

                        //- mail
                        a(
                            class="d-flex align-center no-underline mb-5"
                            :href="'mailto:'+getContact.email"
                        )
                            v-icon(
                                class="mr-3 default-black--text"
                                size="20"
                            ) mail_outline
                            span(
                                class="default-black--text font-weight-medium underline"
                            ) {{getContact.email}}



                        //- www
                        a(
                            class="d-flex align-center no-underline mb-5"
                            :href="getContact.website"
                            target="_blank"
                        )
                            v-icon(
                                class="mr-3 default-black--text"
                                size="20"
                            ) desktop_windows
                            span(
                                class="default-black--text font-weight-medium underline"
                            ) {{getContact.website}}

                        //- adres
                        div(
                            class="d-flex align-start"
                        )
                            v-icon(
                                class="mr-3 default-black--text"
                                size="20"
                                style="margin-top: 2px"
                            ) near_me
                            div
                                div(
                                    class="default-black--text font-weight-medium"
                                    v-if="!!getContact.address.line1"
                                ) {{getContact.address.line1}}
                                div(
                                    class="default-black--text font-weight-medium"
                                    v-if="!!getContact.address.line2"
                                ) {{getContact.address.line2}}
                template(
                    v-slot:bigger
                )
                    CustomSpacer(
                        v-if="phone"
                    )
                    ContactForm

            CustomShape(
                single
                :top="-100"
                :right="-250"
                :width="450"
            )
        CustomSpacer
</template>

<script>
import { mapGetters } from 'vuex';
import ContactForm from '@/components/organisms/ContactForm';
export default {
    components: {
        ContactForm,
    },
    computed: {
        ...mapGetters('resources', ['getContact', 'getForEmployersPage']),
    },
};
</script>