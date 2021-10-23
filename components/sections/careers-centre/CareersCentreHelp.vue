<template lang="pug">
    div
        CustomSpacer
        v-container
            TwoColumns
                template(
                    v-slot:bigger
                )
                    MainHeader(
                        label="Pomoc"
                    ) {{getCareersCentrePage.careersCentreHelp.header}}
                    div(
                        v-html="getCareersCentrePage.careersCentreHelp.text"
                        class="almost-black--text"
                    )
                    //- ul(
                    //-     :class="laptop?'mt-10':'mt-12'"
                    //- )
                    //-     li(
                    //-         v-for="(file, index) in files" :key="index"
                    //-     )
                    //-         a(
                    //-             class="font-weight-medium"
                    //-             :href="file.href"
                    //-             target="_blank"
                    //-         ) {{file.title}}
                template(
                    v-slot:smaller
                )
                    v-card(
                        class="help-tile radius agh-grey"
                        target="_blank"
                        elevation="0"
                        style="border-radius: 10px"
                        :max-width="phablet?'400px':''"
                    )
                        div(
                            class="d-flex align-end"
                            style="border-radius: 10px 10px 0 0; overflow: hidden"
                        )
                            img(
                                src="/images/help.jpg"
                                :height="phone?250:laptop?200:desktop?220:250"
                                width="100%"
                                style="object-fit: cover"
                            )
                        div(
                            :class="phone?'pa-3':'pa-5'"
                        )
                            h3 {{getCareersCentrePage.careersCentreHelp.box.header}}
                            p {{getCareersCentrePage.careersCentreHelp.box.text}}
                            CustomButton(
                                @click="open(getCareersCentrePage.careersCentreHelp.box.file.url)"
                                :style="phone?{'width': '100%'}:{}"
                            ) Pobierz pdf
        CustomSpacer
</template>


<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('resources', ['getCareersCentrePage']),
    },
};
</script>