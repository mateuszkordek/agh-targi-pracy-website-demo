<template lang="pug">
div(
    v-if="$store.getters['resources/getFairSettings'].otherWebsiteElements.showProgram"
)
    v-container(class="relative")
        CustomSpacer(
            top
        )
        HeaderWithText(
            :header="getProgramPage.header"
            headerBar
            :text="getProgramPage.text"
            limitedTextsWidth
            class="z-index-1"
        )
        CustomShape(
            single
            :top="0"
            :right="-250"
            :width="500"
        )
    ProgramOverview
    FundraisersRow
    RegistrationSection
</template>

<script>
import HeaderWithText from "@/components/molecules/HeaderWithText"
import ProgramOverview from "@/components/sections/program/ProgramOverview"

import { mapGetters } from "vuex"

export default {
    components: {
        HeaderWithText,
        ProgramOverview
    },
    computed: {
        ...mapGetters("resources", ["getProgramPage"])
    },
    mounted() {
        this.removeWidowsAndOrphans()
    }
}
</script>