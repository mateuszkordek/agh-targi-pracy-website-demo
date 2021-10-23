<template lang="pug">
div(
    class="fundraisers-row z-index-1"
    v-if="$store.getters['resources/getFairSettings'].otherWebsiteElements.showFundraisers"
)
    CustomSpacer
    v-container
        MainHeader(
            center
        ) Sponsorzy
        CustomSpacer(
            small
        )
        v-row(class="justify-center")
            v-col(
                v-for="(f, index) in getFundraisers"
                :key="index"
                :class="phone ? 'mb-6' : ''"
                class="my-6"
                :cols="phone ? 6 : phablet ? 4 : desktop ? 3 : 2"
            )
                //- :cols="phone?6:3"
                FundraiserLogo(
                    :fundraiser="f"
                )
    CustomSpacer
</template>

<script>
import { mapGetters } from "vuex"
import FundraiserLogo from "@/components/atoms/FundraiserLogo"

export default {
    components: {
        FundraiserLogo
    },
    computed: {
        lotOfFundraisers() {
            return [
                ...this.getFundraisers,
                ...this.getFundraisers,
                ...this.getFundraisers,
                ...this.getFundraisers,
                ...this.getFundraisers
                // this.getFundraisers[0],
            ]
        },
        ...mapGetters("fairData", ["getFundraisers"])
    }
}
</script>