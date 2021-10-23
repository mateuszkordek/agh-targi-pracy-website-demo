<template lang="pug">
    div(
        class="about-fair-hero relative"
    )
        CustomSpacer(top)
        v-container(
            class="z-index-1"
        )
            SubpageHero(
                :img="getAboutPage.aboutHero.img.sizes.large"
            )
                CustomSpacer(
                    small
                    v-if="phone"
                )
                MainHeader {{getAboutPage.aboutHero.header}}

                CustomSpacer(
                    small
                    v-if="!phone"
                )

                div(
                    v-for="(point, index) in getAboutPage.aboutHero.points" :key="index"
                    class="mb-12"
                )
                    div(
                        class="d-flex align-center mb-3"
                    )
                        CustomIcon(
                            :icon="point.icon.sizes.thumbnail"
                            class="mr-3"
                        )
                        h2(
                            class="mb-0"
                        ) {{point.header}}
                    p(
                        class="almost-black--text"
                    ) {{point.text}}
        CustomSpacer
        GreyBackgroundBlock
</template>

<script>
import CustomIcon from '@/components/atoms/CustomIcon';
import { mapGetters } from 'vuex';
export default {
    components: {
        CustomIcon,
    },
    computed: {
        ...mapGetters('resources', ['getAboutPage']),
    },
};
</script>