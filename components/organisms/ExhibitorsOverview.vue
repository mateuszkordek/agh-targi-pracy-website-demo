<template lang="pug">
    div(
        class="exhibitors-overview relative"
    )
        v-row(
            class="z-index-1"
        )
            v-col(
                :cols="phone?12:phablet?4:3"
                v-for="(exh, index) in exhibitors" :key="index"
                class="mb-3"
            )
                ExhibitorBox(
                    :exhibitor="exh"
                )

        CustomShape(
            single
            :top="100"
            :right="-300"
            :width="600"
            style="transform: rotate(90deg)"

        )

</template>

<script>
import ExhibitorBox from '@/components/molecules/ExhibitorBox';
export default {
    components: {
        ExhibitorBox,
    },
    props: {
        exhibitors: {
            type: Array,
            required: true,
        },
    },
};
</script>