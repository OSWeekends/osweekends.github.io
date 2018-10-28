<template>
  <v-flex
    md7
    sm12>
    <h1 class="hero-title display-3 text-xs-center mb-3">
      {{ msg }}
    </h1>
  </v-flex>
</template>
<script>
  export default {
    name: 'HomeHeaderTitle',
    props: {
      msg: {
        required: false,
        type: String,
        default: 'La comunidad más molona de todas ;)',
      },
    },
  }
</script>

<style scoped lang="stylus">
  .hero-title
    color white
    font-weight bolder
</style>
