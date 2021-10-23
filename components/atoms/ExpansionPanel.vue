<template lang="pug">
    v-expansion-panel(
        class="agh-grey mb-3"
        style="border-radius: 10px !important"
        @change="expanded=!expanded"
    )
        v-expansion-panel-header(
            class="font-weight-bold"
            style="line-height: 1.5"
        ) {{ item.q }}
            template(
                v-slot:actions
            )
                v-icon(
                    v-if="expanded"
                    color="primary"
                    style="transition: .2s all ease-in-out"
                ) remove
                v-icon(
                    v-if="!expanded"
                    color="primary"
                    style="transition: .2s all ease-in-out"
                ) add
        v-expansion-panel-content  {{ item.a }}
</template>

<script>
export default {
    props: {
        item: {
            required: true,
            type: Object,
        },
    },

    data: () => ({
        expanded: null,
    }),
};
</script>