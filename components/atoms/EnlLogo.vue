<template lang="pug">

  svg(
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 184.47 32.68"
    :height="height"
    :fill="fill"
    class="logo-svg"
  )

    title Logo Enlighten

    g(id="symbol-layer" data-name="symbol-layer")
      path(class="cls-1" d="M26.48,26.48H2.41V2.41H26.48ZM0,0V28.89H28.89V0Z" transform="translate(0 0.11)")
      rect(class="cls-1" x="8.83" y="6.53" width="11.23" height="2.41")
      rect(class="cls-1" x="8.83" y="12.95" width="10.43" height="2.41")
      rect(class="cls-1" x="8.83" y="20.17" width="12.04" height="2.41")

    g(id="text-layer" data-name="text-layer")
      text(y="0.11")
      text(y="0.11")
      text(
        style="font-size: 21px; font-family: HelveticaNeue-Bold, Helvetica Neue; font-weight: 700; letter-spacing: 0.13em;"
        transform="translate(37.83 22.58)"
      ) ENLIGHTEN

</template>

<script>
export default {
    name: 'logo',

    props: {
        height: {
            default: 40,
        },

        fill: {
            default: '#000',
        },
    },
};
</script>


<style lang="sass" scoped>
.logo-svg
    transition: .05s linear all
    *
        transition: .05s linear all
</style>