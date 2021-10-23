<template lang="pug">
    div(
        :class="top?'padding-top':''"
    )
        div(
            :class="phone?'py-5':desktop?'py-8':'py-12'"
            v-if="!small"
        )
        div(
            :class="phone?'py-5':'py-5'"
            v-if="small"
        )
</template>

<script>
export default {
    props: {
        small: Boolean,
        top: Boolean,
    },
};
</script>

<style lang="sass" scoped>
.padding-top
    padding-top: 130px
    @media(max-width: 767.98px)
        padding-top: 90px
</style>