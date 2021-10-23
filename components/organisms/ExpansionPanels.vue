<template lang="pug">
    div(
        class="expansion-panels"
    )
        v-expansion-panels(
            multiple
            flat
        )
            ExpansionPanel(
                v-for="(item, index) in items" :key="index"
                :item="item"
            )
            //- v-expansion-panel(
            //-     v-for="(item, index) in items" :key="index"
            //-     class="agh-grey mb-3"
            //-     style="border-radius: 10px !important"
            //-     @change="expanded=!expanded"
            //- )
            //-     v-expansion-panel-header(
            //-         class="font-weight-bold"
            //-     ) {{ item.q }}
            //-         template(
            //-             v-slot:actions
            //-         )
            //-             v-icon(
            //-                 v-if="expanded"

            //-                 style="transition: 2s all ease-in-out"
            //-             ) remove
            //-             v-icon(
            //-                 v-if="!expanded"

            //-                 style="transition: 2s all ease-in-out"
            //-             ) add
            //-     v-expansion-panel-content  {{ item.a }}

</template>

<script>
import ExpansionPanel from '@/components/atoms/ExpansionPanel';
export default {
    components: {
        ExpansionPanel,
    },

    props: {
        items: {
            type: Array,
            required: true,
        },
    },

    data: () => ({
        expanded: null,
    }),
};
</script>