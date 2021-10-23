<template lang="pug">
    div(
        class="grey-bg-block agh-grey"
    )
</template>

<style lang="sass" scoped>
.grey-bg-block
    position: absolute
    top: 0
    left: 0
    width: 85%
    height: 95%
    border-radius: 0 0 20px 0
    // background: #fafafa
    @media(min-width: 1904px)
        width: 90%

    @media(max-width: 1903.98px)
        width: 80%

    @media(max-width: 1263.98px)
        width: 75%

    @media(max-width: 959.98px)
        width: 85%
</style>