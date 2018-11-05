<template>
  <header class="header-hero pb-5">
    <v-content class="mt-5">
      <v-container>
        <v-layout
          row
          wrap>
          <HomeHeaderTitle
            :is-full-width="!hasMeetupData"
            msg="La comunidad de software libre que hace cosas 🦄"/>
          <template v-if="hasMeetupData">
            <HomeHeaderMeetup :ev="ev"/>
          </template>
        </v-layout>
      </v-container>
    </v-content>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex'
  import HomeHeaderTitle from './HomeHeaderTitle'
  import HomeHeaderMeetup from './HomeHeaderMeetup'

  export default {
    components: { HomeHeaderMeetup, HomeHeaderTitle },
    computed: {
      ...mapGetters( [ 'getMeetupData' ] ),
      hasMeetupData() {
        return this.getMeetupData.length > 0
      },
      ev() {
        return this.getMeetupData[ 1 ]
      },
    },
  }
</script>

<style scoped lang="stylus">
  .header-hero
    min-height 450px
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
