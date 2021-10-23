<template lang="pug">
    div(
        class="header-with-text"
    )
        //- :class="phone?'mb-5':''"
        MainHeader(
            :bar="headerBar"
            :label="headerLabel"
        )
            span {{ header }}
        div(
            class="header-with-text-text almost-black--text"
            :class="limitedTextsWidth?'limited':''"
        )
            span(
                v-html="text"
            )
        slot
</template>

<script>
export default {
    props: {
        header: {
            required: true,
            type: String,
        },
        text: {
            required: true,
            type: String,
        },
        headerBar: Boolean,
        headerLabel: String,
        limitedTextsWidth: Boolean,
    },
};
</script>

<style lang="sass" scoped>
.header-with-text
    .header-with-text-text
        &.limited
            max-width: 1000px
            @media(max-width: 1903.98px)
                max-width: 700px
</style>