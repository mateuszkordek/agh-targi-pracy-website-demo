<template lang="pug">
v-btn(
    class="custom-button px-7"
    @click="(event) => $emit('click', event)"
    style="border-radius: 10px !important"
    :to="to"
    depressed
    :text="text"
    :disabled="disabled"
    :outlined="outlined"
    :small="small"
    :x-small="xSmall"
    :large="large"
    :x-large="xLarge"
    :input-value="inputValue"
    :active-class="activeClass"
    :class="!outlined ? 'primary' : ''"
)
    CustomText
        slot
</template>

<script>
export default {
    name: "CustomButton",
    props: {
        disabled: Boolean,
        outlined: Boolean,
        to: String,
        small: Boolean,
        large: {
            type: Boolean,
            default: true
        },
        text: Boolean,
        xSmall: Boolean,
        xLarge: Boolean,
        inputValue: Boolean || String,
        activeClass: String
    }
}
</script>

<style lang="sass">
.v-btn
    text-transform: none
    .v-btn--outlined
        // border: thin solid #A05A4B
        // color: #A05A4B
</style>