<template lang="pug">
    div(
        class="home-careers-centre"
    )
        CustomSpacer

        v-container(
            class="relative"
        )
            v-row(
                class="z-index-1"
            )

                v-col(
                    :cols="phablet?12:5"
                    :class="phablet?'order-1':''"
                )
                    ColorBox(
                        class="accent2"
                        height="auto"
                    )
                        div(
                            v-html="getHomePage.homeCareersCentre.box"
                        )

                v-spacer

                v-col(
                    :cols="phablet?12:6"
                )
                    HeaderWithText(
                        :header="getHomePage.homeCareersCentre.header"
                        :text="getHomePage.homeCareersCentre.text"
                        headerLabel="Organizator"
                    )
                        CustomButton(
                            class="mt-6"
                            to="/centrum-karier-agh"
                            :style="phone?{'width': '100%'}:{}"
                        )
                            span Dowiedz się więcej
                    CustomSpacer(
                        v-if="phablet"
                    )
            //- TwoColumns(
            //-     class="z-index-1"
            //-     :reversed="!phablet"
            //- )

            //-     template(
            //-         v-slot:smaller
            //-     )
            //-         ColorBox(
            //-             class="accent2"
            //-             height="auto"
            //-         )
            //-             div(
            //-                 v-html="getHomeCareersCentre.box"
            //-             )
            //-             //- h2 Poszukujesz nowych członków zespołu?
            //-             //- p Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum.
            //-             //- ul(
            //-             //-     :class="laptop?'mt-10':'mt-12'"
            //-             //- )
            //-             //-     li
            //-             //-         nuxt-link(
            //-             //-             class="font-weight-medium"
            //-             //-             to="dla-pracodawcow"
            //-             //-         ) Zostań wystawcą

            //-     template(
            //-         v-slot:bigger
            //-     )
            //-         HeaderWithText(
            //-             header="Centrum Karier AGH"
            //-             :text="getHomeCareersCentre.text"
            //-             headerLabel="Organizator"
            //-         )
            //-             CustomButton(
            //-                 class="mt-6"
            //-                 to="/centrum-karier-agh"
            //-                 :style="phone?{'width': '100%'}:{}"
            //-             )
            //-                 span Dowiedz się więcej
            //-         CustomSpacer(
            //-             v-if="phablet"
            //-         )

            CustomShape(
                single
                :bottom="100"
                :right="-250"
                :width="600"
                style="transform: rotate(90deg)"
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