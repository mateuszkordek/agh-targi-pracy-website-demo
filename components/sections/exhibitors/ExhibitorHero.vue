<template lang="pug">
    div(
        class="exhibitor-hero"
    )
        CustomSpacer(top)
        v-container
            TwoColumns
                template(
                    v-slot:bigger
                )
                    //- logo
                    div(
                        style="height: 100px; max-width: 500px"
                        class="mb-10"
                    )
                        img(
                            :src="exhibitor.logo.sizes.large"
                            style="height: 100%; width: 100%; object-fit: contain; object-position: left center"
                        )

                    //- tagi
                    div(
                        class="tags-container d-flex flex-wrap justify-start mb-4"
                    )
                        CustomButton(
                            class="mr-2 mb-2 "
                            v-for="(tag, index) in exhibitor.tags" :key="index"
                            outlined
                            :class="isDark?'':'grey lighten-2'"
                            :large="false"
                            disabled
                        )
                            span(
                                class="almost-black--text"
                            ) {{'#'+tag.tag}}

                    div(
                        v-if="!!exhibitor.industry"
                        style="font-weight: 500"
                        class="mb-2"
                    )
                        span {{ exhibitor.industry}}


                    //- opis
                    p(
                        class="almost-black--text"
                        v-if="!!exhibitor.desc"
                    ) {{ exhibitor.desc }}

                template(
                    v-slot:smaller
                )
                    ColorBox(
                        class="accent2"
                        height="auto"
                    )
                        //- nazwa
                        h2 {{exhibitor.name}}

                        //- glowny email
                        a(
                            class="d-flex align-center no-underline mb-5"
                            :href="'mailto:'+exhibitor.contact.mainEmailAddress"
                            v-if="!!exhibitor.contact.mainEmailAddress"
                        )
                            v-icon(
                                class="mr-3 default-black--text"
                                size="20"
                            ) mail_outline
                            span(
                                class="default-black--text font-weight-medium underline"
                            ) {{exhibitor.contact.mainEmailAddress}}



                        //- www
                        a(
                            class="d-flex align-center no-underline mb-5"
                            :href="exhibitor.contact.website"
                            v-if="!!exhibitor.contact.website"
                            target="_blank"
                        )
                            v-icon(
                                class="mr-3 default-black--text"
                                size="20"
                            ) desktop_windows
                            span(
                                class="default-black--text font-weight-medium underline"
                            ) {{exhibitor.contact.website}}

                        //- adres
                        div(
                            class="d-flex align-start"
                            v-if="!!exhibitor.contact.address.line1 || !!exhibitor.contact.address.line2"
                        )
                            v-icon(
                                class="mr-3 default-black--text"
                                size="20"
                                style="margin-top: 2px"
                            ) near_me
                            div
                                div(
                                    class="default-black--text font-weight-medium"
                                    v-if="!!exhibitor.contact.address.line1"
                                ) {{exhibitor.contact.address.line1}}
                                div(
                                    class="default-black--text font-weight-medium"
                                    v-if="!!exhibitor.contact.address.line2"
                                ) {{exhibitor.contact.address.line2}}
        CustomSpacer

</template>

<script>
export default {
    props: {
        exhibitor: {
            required: true,
            type: Object,
        },
    },

    // computed: {
    //     exhibitorTagsWithoutDays() {
    //         return this.exhibitor.tags.filter(
    //             (a) =>
    //                 a.tag != 'poniedziałek' &&
    //                 a.tag != 'wtorek'
    //         );
    //     },
    // },
};
</script>