<template lang="pug">
    div
        EnPageHero
        EnFooterSection
</template>

<script>
export default {
    mounted() {
        this.removeWidowsAndOrphans();
    },
};
</script>
