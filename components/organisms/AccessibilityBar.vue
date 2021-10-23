<template lang="pug">
    v-app-bar(
        class="accessibility-bar"
        fixed
        elevation="0"
        height="50"
        :color="isDark?'#121212':'#f5f5f5'"
    )
        v-btn(
            text
            to="/en"
            active-class="no-active-class"
        )
            img(
                src="/iconsAssets/en.png"
                height="24px"
                class="mr-2"
            )
            span(
                style="font-size: 16px; font-weight: 400"
                class="default-black--text"
            ) English
        wcag-panel

</template>

<script>
import WcagPanel from '@/components/organisms/WcagPanel';
export default {
    components: {
        WcagPanel,
    },
};
</script>