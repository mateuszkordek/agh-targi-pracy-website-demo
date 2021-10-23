<template lang="pug">
    div
        CustomSpacer
        v-container
            InfoBoxes(
                :boxes="getHomeBoxesSection"
            )
        CustomSpacer
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('resources', ['getHomeBoxesSection']),
    },
};
</script>