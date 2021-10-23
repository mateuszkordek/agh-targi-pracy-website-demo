<template lang="pug">
div
    CustomSpacer(
        top
    )
    v-container(class="relative")
        MainHeader(
            bar
        ) {{ currentEdition.name }}
        h2 Targi odbyły się {{ currentEdition.edition_date }}
        CustomSpacer
        h3(class="mb-10") Wystawcy uczestniczący w wydarzeniu:
        XGrid(
            :cols="[4, 3, 2, 2]"
        )
            ColorBox(
                v-for="(exhibitor, index) in getExhibitorsOfEdition(currentEdition.id)"
                :key="index"
                shadow
                :height="phone ? '150px' : '200px'"
                class="d-flex align-center justify-center"
            )
                div(
                    :style="phone ? [{ width: '75%' }, { height: '75%' }] : [{ width: '60%' }, { height: '60%' }]"
                )
                    img(
                        :src="exhibitor.logo.sizes.medium"
                        width="100%"
                        height="100%"
                        style="object-fit: contain"
                    )

    CustomSpacer
</template>

<script>
import { mapGetters } from "vuex"
export default {
    data: () => ({
        currentEdition: null
    }),

    computed: {
        ...mapGetters("fairData", ["getAllEditions", "getExhibitorsOfEdition"])
    },

    methods: {
        setCurrentEdition() {
            this.currentEdition = this.getAllEditions.find(
                (a) => a.slug == this.$route.params.slug
            )
        }
    },

    created() {
        this.setCurrentEdition()
    },
    mounted() {
        this.removeWidowsAndOrphans()
    }
}
</script>