<template lang="pug">
    nuxt-link(
        class="fundraiser-logo d-flex align-center justify-center"
        :to="{name: 'wystawcy-slug', params: {slug: fundraiser.slug}}"
        :style="[phone?{'height': '55px'} : phablet?{'height': '60px'} : {'height': '65px'}]"

    )
        //- :style="{'height: 45px':phablet, 'height: 60px':!phablet}"
        img(
            :src="fundraiser.logo.sizes.medium"
            style="width: 100%; height: 100%; object-fit: contain; object-position: center"
            class="logo-link"
            :class="phone?'px-7':'px-12'"
        )

</template>

<script>
export default {
    props: {
        fundraiser: {
            type: Object,
            required: true,
        },
    },
};
</script>