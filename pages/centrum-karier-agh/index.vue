<template lang="pug">
    div
        CareersCentreHero(
            class="z-index-1"
        )
        CareersCentreBoxesSection
        CareersCentreHelp
        FundraisersRow
        RegistrationSection
</template>

<script>
export default {
    mounted() {
        this.removeWidowsAndOrphans();
    },
};
</script>