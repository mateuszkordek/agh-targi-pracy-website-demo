<template lang="pug">
    div(
        class="custom-text"
    )
        div(
            class="wcag-multiplier"
            :class="{'step-1' : getWcagStep == 1, 'step-2' : getWcagStep == 2, 'step-3' : getWcagStep == 3}"
        )
            slot
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('accessibility', ['getWcagStep']),
    },
};
</script>


<style lang="sass">
.custom-text
    // base em
    font-size: 16px

    // multiply base size due to wcag step set in store
    .wcag-multiplier
        font-size: 1em
        &.step-1
            font-size: 1em
        &.step-2
            font-size: 1.3em
            .container
                width: 95% !important
                max-width: 1485px !important
        &.step-3
            font-size: 1.5em
            .container
                width: 95% !important
                max-width: 1485px !important

        div
            font-size: 1em

        p
            font-size: 1em

        h1
            font-size: 2.2em
            @media(max-width: 599.98px)
                font-size: 1.75em

        h2
            line-height: 1.5
            @media(max-width: 599.98px)
                font-size: 1.25em

        h3
            font-size: 1.3em
            @media(max-width: 599.98px)
                font-size: 1.125em

        h4
            font-size: 1em
</style>