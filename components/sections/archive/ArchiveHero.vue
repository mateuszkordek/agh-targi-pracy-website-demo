<template lang="pug">
div
    CustomSpacer(
        top
    )
    v-container(class="relative")
        HeaderWithText(
            class="z-index-1"
            headerBar
            :header="getArchivePage.header"
            :text="getArchivePage.text"
            limitedTextsWidth
        )
        CustomSpacer
        XGrid(
            :cols="[2, 2, 1, 1]"
        )
            ColorBox(
                shadow
                v-for="(edition, index) in $store.getters['fairData/getAllEditions']"
                :key="index"
                :to="{ name: 'archiwum-edycji-slug', params: { slug: edition.slug } }"
            )
                h2 {{ edition.name }}
                div(class="d-flex justify-end")
                    div Zobacz szczegóły
                    v-icon(
                        class="arrow z-index-1 ml-1"
                        size="18"
                        color="primary"
                    ) mdi-arrow-right

        CustomSpacer
</template>

<script>
import { mapGetters } from "vuex"
export default {
    computed: {
        ...mapGetters("resources", ["getArchivePage"])
    }
}
</script>