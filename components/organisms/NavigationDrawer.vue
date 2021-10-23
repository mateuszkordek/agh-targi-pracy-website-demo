<template lang="pug">
    div(
        class="navigation-drawer relative"
        :style="[phone?{'height': '100%', 'padding': '25% 0 20%'}:{'height': '100%', 'padding': '20% 0 20%'}]"
    )
        v-list(
            height="100%"
            class="d-flex flex-column justify-space-around pt-0"
        )
            div(
                style="width: 100%"
                class="d-flex align-center justify-center mb-10"
            )
                nuxt-link(
                    to="/"
                    active-class="no-active-class"
                    class="d-flex align-center justify-center no-underline flex-column"
                )
                    img(
                        @click="$vuetify.goTo(0), $emit('closeDrawer')"
                        src="/images/logo.png"
                        width="70px"
                    )
                    h2(
                        class="text-center mt-2 always-black--text"
                    ) Targi Pracy AGH

            //- v-list-item(
            //-     to="/"
            //-     class="justify-center"
            //-     active-class="primary white--text"
            //- ) Strona główna

            v-list-item(
                v-for="(btn, index) in getNavigation" :key="index"
                :to="!!btn.to?btn.to:''"
                @click="btn.name == 'Kontakt'?(goToContactForm, $emit('closeDrawer')):''"
                class="justify-center"
                active-class="primary white--text"
            ) {{btn.name}}

        v-icon(
            style="position: absolute; right: 20px; top: 20px"
            @click="$emit('closeDrawer')"
            size="30"
        ) close


</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('navigation', ['getNavigation']),
    },
};
</script>
