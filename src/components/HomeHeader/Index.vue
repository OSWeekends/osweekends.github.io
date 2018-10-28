<template>
  <header class="header-hero pb-5">
    <v-content class="mt-5">
      <v-container>
        <v-layout
          row
          wrap>
          <HomeHeaderTitle msg="La comunidad de software libre que hace cosas 🦄"/>
          <HomeHeaderMeetup/>
        </v-layout>
      </v-container>
    </v-content>
  </header>
</template>

<script>
  import HomeHeaderTitle from './HomeHeaderTitle'
  import HomeHeaderMeetup from './HomeHeaderMeetup'

  export default {
    components: { HomeHeaderMeetup, HomeHeaderTitle },
  }
</script>

<style scoped lang="stylus">
  .header-hero
    min-height 80vh
    position relative
    background-image url("/img/main.jpg")
    background-position center center
    background-size cover
    &:before
      content ''
      position absolute
      width 100%
      height 100%
      background-color rgba(80, 70, 255, 0.5)

</style>
