<template lang="pug">
div(
    class="nav-boxes-row z-index-1"
    v-if="$store.getters['resources/getFairSettings'].otherWebsiteElements.showNavBoxes"
)
    CustomSpacer
    v-container
        XGrid(
            :cols="[3, 3, 2, 1]"
        )
            NavBox(
                v-for="(box, index) in getNavBoxes"
                :key="index"
                :box="box"
            )
    CustomSpacer
</template>

<script>
import { mapGetters } from "vuex"
import NavBox from "@/components/atoms/NavBox"
export default {
    components: {
        NavBox
    },
    computed: {
        ...mapGetters("navigation", ["getNavBoxes"])
    }
}
</script>