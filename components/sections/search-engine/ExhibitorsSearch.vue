<template lang="pug">
    div(
        class="exhibitors-search"
    )
        CustomSpacer(top)

        v-container
            MainHeader(
                center
            ) Wystawcy

            p(
                class="text-center"
            ) {{getExhibitorsPage.text}}

            CustomSpacer

            v-text-field(
                label="Wyszukaj"
                v-model="searchQuery"
                style="max-width: 700px; margin: 0 auto"
                prepend-inner-icon="search"
                outlined
                :class="laptop?'':'mb-4'"
            )

            div(
                class="tags-container d-flex flex-wrap justify-center"
                v-if="!searchQuery"
            )
                //- pokaz wszystko
                v-btn(
                    :large="false"
                    class="mr-2 mb-2 "
                    @click="setSearchTag('wszystkie')"
                    :inputValue="searchTag == 'wszystkie' || searchTag == null"
                    activeClass="primary white--text"
                    :outlined="searchTag != 'wszystkie' && searchTag != null"
                    text
                )
                    CustomText(
                        class="text-transform-none"
                    ) #wszyscy wystawcy


                //- tagi dnia wystapien
                v-btn(
                    :large="false"
                    class="mr-2 mb-2"
                    v-for="(tag, index) in getDayHashtags" :key="'dh'+index"
                    @click="setSearchTag(tag)"
                    :inputValue="searchTag == tag"
                    activeClass="primary white--text"
                    :outlined="searchTag != tag"
                    text
                )
                    CustomText {{'#'+tag}}

            v-divider(
                class="mb-4 mt-2"
            )

            div(
                class="tags-container d-flex flex-wrap justify-center"
                v-if="!searchQuery"
            )


                //- tagi
                v-btn(
                    :large="false"
                    class="mr-2 mb-2 "
                    v-for="(tag, index) in getHashtagsWithoutDays" :key="'h'+index"
                    @click="setSearchTag(tag)"
                    :inputValue="searchTag == tag"
                    activeClass="primary white--text"
                    :outlined="searchTag != tag"
                    text
                )
                    CustomText {{'#'+tag}}

            CustomSpacer

            ExhibitorsOverview(
                :exhibitors="exhibitorsToShow"
            )
            div(
                v-if="!exhibitorsToShow.length"
                class="text-center"
            ) Brak pasujących wyników.

        CustomSpacer

</template>

<script>
import { mapGetters } from 'vuex';
import ExhibitorsOverview from '@/components/organisms/ExhibitorsOverview';

export default {
    components: {
        ExhibitorsOverview,
    },

    data: () => ({
        searchQuery: null,
        searchTag: null,
    }),

    computed: {
        ...mapGetters('fairData', [
            'getHashtagsWithoutDays',
            'getDayHashtags',
            'getExhibitorsOfCurrentEdition',
        ]),
        ...mapGetters('resources', ['getExhibitorsPage']),

        exhibitorsToShow() {
            if (!!this.searchTag) {
                // tag jest zerowany zawsze gdy w wyszukiwarce pojawi sie slowo w metodzie resetSearchTag() w watcherze
                if (this.searchTag == 'wszystkie') {
                    return this.getExhibitorsOfCurrentEdition;
                } else {
                    return this.getExhibitorsOfCurrentEdition.filter((a) =>
                        a.tags.map((b) => b.tag).includes(this.searchTag)
                    );
                }
            } else if (!!this.searchQuery) {
                return this.getExhibitorsOfCurrentEdition.filter((a) =>
                    // a.name.includes(this.searchQuery)
                    this.returnFoundExhibitor(a)
                );
            } else {
                return this.getExhibitorsOfCurrentEdition;
            }
        },
    },

    methods: {
        returnFoundExhibitor(exh) {
            const asString = JSON.stringify(exh);
            return asString
                .toLowerCase()
                .includes(this.searchQuery.toLowerCase());
        },

        setSearchTag(tag) {
            if (
                this.searchTag == null ||
                (this.searchTag != null && this.searchTag != tag)
            ) {
                // jesli nie ma zadnego lub jakis jest ale user wybiera inny
                this.searchTag = tag;
            } else {
                // jesli jest ten sam ktory chce sie ustawic
                this.searchTag = null;
            }
        },

        resetSearchTag() {
            this.searchTag = null;
        },
    },

    watch: {
        searchQuery: {
            immediate: true,
            handler(val) {
                if (!!val) {
                    this.resetSearchTag();
                }
            },
        },
    },
};
</script>