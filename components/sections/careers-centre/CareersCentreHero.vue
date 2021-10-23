<template lang="pug">
    div(
        class="relative"
    )
        CustomSpacer(top)
        v-container(
            class="z-index-1"
        )
            SubpageHero(
                :img="getCareersCentrePage.careersCentreHero.img.sizes.large"
            )
                CustomSpacer(
                    small
                    v-if="phone"
                )
                HeaderWithText(
                    :header="getCareersCentrePage.careersCentreHero.header"
                    :text="getCareersCentrePage.careersCentreHero.text"
                    headerLabel="Organizator"
                )
                CustomSpacer
                CustomButton(
                    @click="open('http://www.ck.agh.edu.pl/')"
                    :style="phone?{'width': '100%'}:{}"
                ) Zobacz stronę organizatora
        CustomSpacer
        GreyBackgroundBlock
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('resources', ['getCareersCentrePage']),
    },
};
</script>