<template lang="pug">
    div(
        class="home-about"
    )
        CustomSpacer

        v-container(
            class="relative"
        )
            TwoColumns(
                class="z-index-1"
                :reversed="phablet"
                wide
            )
                template(
                    v-slot:bigger
                )
                    HeaderWithText(
                        :header="getHomePage.homeAbout.header"
                        :text="getHomePage.homeAbout.text"
                        headerBar
                    )
                        CustomButton(
                            class="mt-6"
                            to="/o-targach"
                            :style="phone?{'width': '100%'}:{}"
                        )
                            span Dowiedz się więcej
                template(
                    v-slot:smaller
                )
                    CustomImage(
                        :src="getHomePage.homeAbout.img.sizes.large"
                        square
                        :height="phone?'270px':phablet?'400px':laptop?'470px':desktop?'600px':'550px'"
                    )
                    CustomSpacer(
                        v-if="phablet"
                    )

            CustomShape(
                single
                :top="-100"
                :right="-180"
                :width="500"
            )

        CustomSpacer


</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('resources', ['getHomePage']),
    },
};
</script>