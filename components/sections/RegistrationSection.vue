<template lang="pug">
.registration-section.relative(
    :class="{ background: background, 'dark-mode': isDark }"
    v-if="$store.getters['resources/getFairSettings'].callToAction.showRegistrationSection"
)
    CustomSpacer
    v-container
        .register-box.primary.radius.px-10.py-8.relative.z-index-1
            .register-box-content.d-flex.align-center.justify-space-between.z-index-1(
                :class="phablet ? 'flex-column' : ''"
            )
                .pr-4(
                    :class="phablet ? 'mb-3 text-center' : ''"
                )
                    h2.white--text {{ getFairSettings.callToAction.section.header }}
                    .white--text.register-p {{ getFairSettings.callToAction.section.text }}

                CustomButton.secondary.px-12.mt-5(
                    :xLarge="!phablet"
                    @click="goToCTAPage"
                    :style="phone ? { width: '100%' } : phablet ? { width: '350px' } : { width: '220px' }"
                ) {{ getFairSettings.callToAction.section.buttonText }}

            .shape-wrapper
                img.pr-5(
                    src="/shapes/reg.png"
                )
    CustomSpacer
</template>

<script>
export default {
    props: {
        background: Boolean
    }
}
</script>

<style lang="sass" scoped>
.registration-section
    &.background
        &::after
            content: ''
            display: block
            position: absolute
            top: 0
            left: 0
            width: 100%
            height: 50%
            background-color: #fafafa
        &.dark-mode
            &::after
                background-color: #1a1a1a
    .register-p
        max-width: 640px
    .shape-wrapper
        position: absolute
        height: 100%
        width: 100%
        right: 0
        top: 0
        img
            width: 100%
            height: 100%
            object-fit: cover
            object-position: right
</style>