<template lang="pug">
    v-card(
        class="custom-icon radius accent d-flex align-center justify-center radius"
        elevation="0"
        :width="getWcagStep==2||getWcagStep==3?90:50"
        :height="getWcagStep==2||getWcagStep==3?90:50"
        style="min-width: 50px; min-height: 50px"
    )
        img(
            :src="icon"
            :width="getWcagStep==2||getWcagStep==3?50:28"
            :height="getWcagStep==2||getWcagStep==3?50:28"
        )
</template>

<script>
export default {
    props: {
        icon: {
            required: true,
            type: String,
        },
        color: {
            default: 'primary',
            type: String,
        },
    },
};
</script>