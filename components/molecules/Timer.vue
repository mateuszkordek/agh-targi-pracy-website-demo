<template lang="pug">
div(
    class="timer d-flex align-center justify-center relative"
    v-if="!timerDisabled && $store.getters['resources/getFairSettings'].timer.showTimer"
)
    div(
        class="timer-content d-flex align-center radius px-3 pt-7 pb-5 z-index-1"
        :class="isDark ? 'agh-grey' : 'white'"
    )
        div(class="timer-section")
            div(class="value border") {{ timer.days }}
            div(class="label") Dni
        div(class="timer-section")
            div(class="value border") {{ timer.hours }}
            div(class="label") Godzin
        div(class="timer-section")
            div(class="value border") {{ timer.minutes }}
            div(class="label") Minut
        div(class="timer-section")
            div(class="value") {{ timer.seconds }}
            div(class="label") Sekund

    //- shapes
    div(class="shape-1 secondary radius")
    div(class="shape-2 primary radius")
</template>

<script>
import moment from "moment-timezone"
export default {
    data: () => ({
        timer: {
            days: null,
            hours: null,
            minutes: null,
            seconds: null
        },
        timerDisabled: false,

        // utc 9:00
        eventTimestamp: 1637049600000

        // old
        // eventTimestamp: 1615798800000
    }),

    methods: {
        setTimer() {
            const now = moment().valueOf()
            const difference = moment.duration(
                this.eventTimestamp - now,
                "milliseconds"
            )

            if (difference >= 0) {
                const newTimerObject = {
                    days: Math.floor(difference.asDays()),
                    hours: difference.hours(),
                    minutes: difference.minutes(),
                    seconds: difference.seconds()
                }

                this.timer = newTimerObject
            } else {
                this.timer = {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                }
                this.timerDisabled = true
            }
        }
    },

    created() {
        this.setTimer()
        if (!this.timerDisabled) setInterval(this.setTimer, 1000)
    }
}
</script>

<style lang="sass" scoped>
.timer
    // max-width: 650px
    width: 110%
    .timer-content
        // background: #fff
        border: 1px solid lightgrey !important
        width: 100%
        overflow: visible
        .timer-section
            display: flex
            flex-direction: column
            align-items: center
            // padding: 5px 10px
            // color: #19191B
            // width: 100px
            flex: 1
            .value
                display: flex
                justify-content: center
                font-weight: 700
                font-size: 25px
                line-height: 20px
                margin-bottom: 15px
                width: 100%
                &.border
                    border-right: 1px solid lightgrey
            .label
                font-weight: 500

    .shape-1
        position: absolute
        left: -25px
        top: -25px
        height: 60px
        width: 60px
    .shape-2
        position: absolute
        right: -45px
        bottom: -25px
        height: 70px
        width: 140px
</style>