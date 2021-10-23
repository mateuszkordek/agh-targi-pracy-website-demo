<template lang="pug">
div(
    v-if="$store.getters['resources/getFairSettings'].otherWebsiteElements.showExhibitors"
)
    ExhibitorsSearch(class="agh-grey")
    FundraisersRow
    RegistrationSection
</template>

<script>
import { mapGetters } from "vuex"

import ExhibitorsSearch from "@/components/sections/search-engine/ExhibitorsSearch"
import FundraisersRow from "@/components/sections/FundraisersRow"
import RegistrationSection from "@/components/sections/RegistrationSection"
export default {
    components: {
        ExhibitorsSearch,
        FundraisersRow,
        RegistrationSection
    },
    mounted() {
        this.removeWidowsAndOrphans()
    }
}
</script>