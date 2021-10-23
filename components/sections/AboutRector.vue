<template lang="pug">
div(
    class="about-rector agh-grey"
    v-if="$store.getters['resources/getFairSettings'].otherWebsiteElements.showRectorsSection"
)
    CustomSpacer
    v-container
        TwoColumns(
            reversed
            wide
        )
            template(
                v-slot:bigger
            )
                HeaderWithText(
                    :header="getAboutRector.header"
                    :text="getAboutRector.text"
                    headerBar
                )
                    //- podpis
                    //- div(
                    //-     class="d-flex"
                    //-     :class="phablet?'justify-end':''"
                    //- )
                    //-     img(
                    //-         src="/images/signature.png"
                    //-         height="50px"
                    //-         class="mt-7"
                    //-         v-if="!isDark"
                    //-     )
                    //-     img(
                    //-         src="/images/signature-white.png"
                    //-         height="50px"
                    //-         class="mt-7"
                    //-         v-else
                    //-     )
            template(
                v-slot:smaller
            )
                CustomImage(
                    :src="getAboutRector.img.sizes.large"
                    :maxHeight="desktop ? '450px' : '600px'"
                    :maxWidth="phone ? '250px' : phablet ? '400px' : ''"
                )
                CustomSpacer(
                    v-if="phablet"
                )

    CustomSpacer
    CustomSpacer(
        v-if="phone"
    )
</template>

<script>
import { mapGetters } from "vuex"
export default {
    computed: {
        ...mapGetters("resources", ["getAboutRector"])
    }
}
</script>