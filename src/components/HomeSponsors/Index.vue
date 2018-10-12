<template>
  <v-container class="home-sponsor">
    <div
      class="home-sponsor__title-row">
      <h2 class="text-xs-center home-sponsor__title">Patrocinadores</h2>
    </div>
    <v-layout
      row
      wrap>
      <v-flex
        v-for="(sponsor, index) in sponsors"
        :key="index"
        xs12
        sm4
        class="text-xs-center justify-space-around home-sponsor__cards">
        <home-sponsor-card
          :img="sponsor.img"
          :website="sponsor.website"
          :alt="sponsor.alt"
          class="home-sponsor__card" />
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import HomeSponsorCard from '~/components/HomeSponsors/HomeSponsorsCard.vue'

  export default {
    components: {
      HomeSponsorCard
    },
    data () {
      return {
        sponsors: [
          {
            img: '/img/sponsor/fictizia-logo.svg',
            website: 'https://www.fictizia.com/',
            atl: 'Fictizia'
          },
          {
            img: '/img/sponsor/pillarsJS-logo.svg',
            website: 'http://pillarsjs.com/',
            alt: 'Pillars'
          },
          {
            img:'/img/sponsor/ovh-logo.png',
            website: 'https://www.ovh.es/',
            alt: 'ovh'
          },
          {
            img: '/img/sponsor/gamify-logo.png',
            website: 'http://www.gamify.com/',
            alt: 'Gamify'
          },
          {
            img: '/img/sponsor/tecnicrea-logo.png',
            website: 'http://tecnicrea.es/',
            alt: 'Tecnicrea'
          },
          {
            img: '/img/sponsor/tetuan-valley-logo.png',
            website: 'https://www.tetuanvalley.com/',
            alt: 'Tetuanvalley'
          },
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>

.home-sponsor
  background-color rgba(#BBB)
  &__title-row
    padding-left 20px
    margin-bottom 40px

  &__title
    color #003ea5
    font-size 40px

</style>
