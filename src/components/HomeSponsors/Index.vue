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
          :img="sponsor.img"
          :website="sponsor.url"
          :name="sponsor.name"
          class="home-sponsor__card"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
  import HomeSponsorCard from '~/components/HomeSponsors/HomeSponsorsCard.vue'

  export default {
    components: {
      HomeSponsorCard,
    },
    data() {
      return {
        sponsors: [
          {
            name: 'Fictizia',
            url: 'https://www.fictizia.com/',
            img: '/img/sponsor/fictizia.svg',
          }, {
            name: 'Hiwook',
            url: 'https://hiwook.com/',
            img: '/img/sponsor/hiwook.png',
          }, {
            name: 'OVH',
            url: 'https://www.ovh.es/',
            img: '/img/sponsor/ovh.png',
          }, {
            name: 'Google Developers',
            url: 'https://developers.google.com/',
            img: '/img/sponsor/google-developers.png',
          }, {
            name: 'Github',
            url: 'https://github.com/',
            img: '/img/sponsor/github.png',
          }, {
            name: 'Github for Education',
            url: 'https://education.github.com/',
            img: '/img/sponsor/github-ed.png',
          }, {
            name: 'Tetuan Valley',
            url: 'https://www.tetuanvalley.com/',
            img: '/img/sponsor/tetuan-valley.png',
          }, {
            name: 'Tecnicrea',
            url: 'http://tecnicrea.es/',
            img: '/img/sponsor/tecnicrea.png',
          }, {
            name: 'Pillarsjs',
            url: 'http://pillarsjs.com/',
            img: '/img/sponsor/pillars.svg',
          }, {
            name: 'Slowlife Glamping',
            url: 'https://www.slowlifeglamping.com/',
            img: '/img/sponsor/slowlife.png',
          }
        ],
      }
    },
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
