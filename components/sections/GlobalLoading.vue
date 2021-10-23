<template lang="pug">
div(class="global-loading d-flex flex-column align-center justify-center")
    img(
        src="/images/logo.png"
        height="150"
        class="mb-4"
    )
    h1(class="mb-1") Targi Pracy AGH
    h2 Edycja wirtualna
    v-progress-circular(
        indeterminate
        color="primary"
        class="mb-4"
    )
</template>

<style lang="sass" scoped>
.global-loading
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0
    z-index: 100

</style>