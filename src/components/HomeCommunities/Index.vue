<template>
  <v-container class="home-communities">
    <v-layout
      row
      class="text-xs-center home-communities__title-row">
      <h2 class="home-communities__title">Comunidades hermanadas</h2>
    </v-layout>
    <v-layout
      row
      wrap>
      <v-flex
        v-for="(community, index) in communities"
        :key="index"
        xs12
        sm3
        xl2
        class="text-xs-center">
        <home-communities-card
          :name="community.name"
          :url="community.url"
          :image_url="community.image_url"
          class="home-team__card"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import HomeCommunitiesCard from '~/components/HomeCommunities/HomeCommunitiesCard.vue'

  export default {
    components: {
      HomeCommunitiesCard,
    },
    data() {
      return {
        communities: [
        {
          url: "https://adalab.es/",
          image_url: "/img/communities/adalab.jpg",
          name: "Adalab"
        },
        {
            url: "https://www.womentechmakers.com/",
            image_url: "/img/communities/women_techmakers.jpg",
            name: "Women Techmakers"
        },
        {
            url: "http://makespacemadrid.org/",
            image_url: "/img/communities/makespace.jpeg",
            name: "Makespace Madrid"
        },
        {
            url: "https://twitter.com/caffelinux?lang=es",
            image_url: "/img/communities/planet_linux.jpg",
            name: "Planet Linux Caffe"
        }, 
        {
            url: "https://www.meetup.com/es-ES/GDG-Huelva/",
            image_url: "/img/communities/gdg_huelva.jpg",
            name: "GDG Huelva"
        },
        {
            url: "https://www.meetup.com/es-ES/codenares/",
            image_url: "/img/communities/codenares.jpg",
            name: "Codenares"
        },
        {
            url: "https://www.meetup.com/es-ES/rladies-madrid/",
            image_url: "/img/communities/rladies.jpg",
            name: "RLadies Madrid"
        },
        {
            url: "https://www.meetup.com/es-ES/Haskell-MAD/",
            image_url: "/img/communities/haskellmad.jpg",
            name: "HaskellMAD"
        },
        {
            url: "http://hackmadrid.org/",
            image_url: "/img/communities/hack_madrid.jpg",
            name: "HackMadrid%27"
        },
        {
            url: "https://www.meetup.com/es-ES/GDGMadrid/",
            image_url: "/img/communities/gdg_madrid.png",
            name: "GDG Madrid"
        },
        {
            url: "http://formulauc3m.com/",
            image_url: "/img/communities/formula_uc3m.jpg",
            name: "Formula UC3M"
        },
        {
            url: "https://www.meetup.com/es-ES/MadRust/",
            image_url: "/img/communities/mad_rust.jpg",
            name: "MadRust"
        },
        {
            url: "https://github.com/MadridTechAlliance/",
            image_url: "/img/communities/madrid_tech_alliance.jpg",
            name: "MadridTechAlliance"
        },
        {
            url: "https://nodeschool.io/madrid/",
            image_url: "/img/communities/node_school.jpg",
            name: "Node School Madrid"
        },
        {
            url: "https://t3chfest.uc3m.es",
            image_url: "/img/communities/t3f.jpg",
            name: "T3chfest"
        },
        {
            url: "https://www.meetup.com/es-ES/PyLadiesMadrid/",
            image_url: "/img/communities/pyladies.jpg",
            name: "PyLadies Madrid"
        },
        {
            url: "https://www.meetup.com/es-ES/Scala-Programming-Madrid/",
            image_url: "/img/communities/scalamad.jpg",
            name: "ScalaMAD"
        },
        {
            url: "https://gul.es/",
            image_url: "/img/communities/gul_uc3m.jpg",
            name: "GUL UC3M"
        },
        {
            url: "https://www.meetup.com/es-ES/BlockMAD/",
            image_url: "/img/communities/blockmad.jpg",
            name: "BlockMAD"
        },
        {
            url: "https://gdg.es/",
            image_url: "/img/communities/gdg_spain.png",
            name: "GDG Spain"
        },
        {
            url: "http://pillarsjs.com/",
            image_url: "/img/communities/pillars.png",
            name: "Pillarsjs"
        }
      ]} 
    },
  }
</script>

<style lang="stylus" scoped>
  .home-communities
    &__title
      color #003ea5
      margin 0 auto
      font-size 40px
      margin-bottom 40px
</style>

