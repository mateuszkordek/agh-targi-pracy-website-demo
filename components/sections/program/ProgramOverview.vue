<template lang="pug">
    div(
        class="program-overview"
    )
        CustomSpacer
        v-container
            div(
                v-for="(day, index) in getWebinarsOfCurrentEditionSortedByDay" :key="index"
            )
                v-divider(
                    :class="phablet?'mt-4 mb-8':'my-12 pb-5'"
                )
                div(
                    class="d-flex"
                    :class="phablet?'flex-wrap':''"
                )
                    div(
                        class="date-container"
                        v-if="!phablet"
                    )
                        div(
                            class="d-flex justify-space-between"
                        )
                            div(
                                :class="isDateToday(day.date)?'primary--text':''"
                                class="d-flex flex-column align-center"
                            )
                                h4(
                                    class="font-weight-medium mb-1"
                                    style="color: inherit"
                                ) Marzec
                                h1(
                                    class="mb-1"
                                    style="color: inherit"
                                ) {{getDayFromDate(day.date)}}
                                //- h3(
                                //-     style="font-weight: 400; color: inherit"
                                //- ) {{getWeekDayFromDate(day.date)}}
                            v-divider(vertical)

                    div(
                        v-else
                        class="date-container-mobile"
                    )
                        div(
                            :class="isDateToday(day.date)?'primary--text':''"
                        )
                            h2(
                                style="color: inherit"
                            ) {{getDayFromDate(day.date)}} Marca

                    div(
                        class="flex-grow-1"
                    )
                        WebinarBox(
                            v-for="(webinar, index) in day.webinars" :key="index"
                            :webinar="webinar"
                            :weekday="getWeekDayFromDate(day.date)"
                            class="mb-4"
                        )
                //- v-row
                //-     v-col(
                //-         cols="1"
                //-     )
                //-         div(
                //-             class="d-flex justify-space-between"
                //-         )
                //-             //- data
                //-             div(
                //-                 :class="isDateToday(day.date)?'primary--text':''"
                //-                 class="d-flex flex-column align-center"
                //-             )
                //-                 h4(
                //-                     class="font-weight-medium mb-1"
                //-                     style="color: inherit"
                //-                 ) Marzec
                //-                 h1(
                //-                     class="mb-1"
                //-                     style="color: inherit"
                //-                 ) {{getDayFromDate(day.date)}}
                //-                 h3(
                //-                     style="font-weight: 400; color: inherit"
                //-                 ) {{getWeekDayFromDate(day.date)}}
                //-             v-divider(vertical)

                //-     v-spacer
                //-     v-col(
                //-         cols="10"
                //-     )
                //-         WebinarBox(
                //-             v-for="(webinar, index) in day.webinars" :key="index"
                //-             :webinar="webinar"
                //-             class="mb-4"
                //-         )


        CustomSpacer

</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('fairData', ['getWebinarsOfCurrentEditionSortedByDay']),
    },
};
</script>

<style lang="sass" scoped>
.program-overview
    .date-container
        min-width: 160px
        padding-right: 48px
        @media(max-width: 959.98px)
            min-width: 100px
            padding-right: 18px

    .date-container-mobile
        width: 100%
</style>