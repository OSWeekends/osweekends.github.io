<template>
  <v-container class="home-sponsor">
    <div
      class="home-sponsor__title-row">
      <h2 class="text-xs-center home-sponsor__title">PATROCINADORES</h2>
    </div>
    <v-layout
      row
      wrap>
      <v-flex
        v-for="(sponsor, index) in sponsors"
        :key="index"
        xs12
        sm6
        md4
        class="text-xs-center justify-space-around home-sponsor__cards">
        <home-sponsor-card
          :img="sponsor.imgLocalName"
          :website="sponsor.url"
          :name="sponsor.name"
          class="home-sponsor__card"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
  import HomeSponsorCard from '~/components/HomeSponsors/HomeSponsorsCard.vue'
  import { mapGetters } from 'vuex'


  export default {
    components: {
      HomeSponsorCard,
    },
    data() {
      return {
        
      }
    },
    computed: {
      ...mapGetters( [ 'sponsors' ] ),
    }
  }
</script>

<style lang="stylus" scoped>

  .home-sponsor
    &__title-row
      padding-left 20px
      margin-bottom 40px

    &__title
      color #fff
      font-size 40px

</style>
