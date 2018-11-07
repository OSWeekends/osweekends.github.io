<template>
  <v-container class="home-guilds">
    <v-layout
      row
      wrap
      class="home-guilds__title-row text-xs-center text-md-left">
      <v-flex
        sm12
        md1
        class="home-guilds__icon-wrapper" >
        <i class="home-guilds__icon material-icons"> group </i>
      </v-flex>
      <v-flex
        sm12
        md11
        class="home-guilds__title-wrapper ">
        <h2 class="home-guilds__title">Guilds</h2>
        <h3 class="home-guilds__subtitle">Equipos de trabajo de la comunidad: </h3>
      </v-flex>
    </v-layout>
    <v-carousel
      hide-delimiters
    >
      <v-carousel-item
        v-for="(guild, index) in guilds"
        :key="index">
        <v-layout
          row
          wrap>
          <v-flex
            sm12
            md4>
            <home-carousel-card
              :title="guild.name"
              :description="guild.description"
              :img="guild.avatar"
              :github="guild.github_repo"
              class="home-guilds__card" />
          </v-flex>
          <v-flex
            v-if="index + 1 < guilds.length"
            sm12
            md4>
            <home-carousel-card
              :title="guilds[index + 1].name"
              :description="guilds[index + 1].description"
              :img="guilds[index + 1].avatar"
              :github="guilds[index + 1].github_repo"
              class="home-guilds__card" />
          </v-flex>
          <v-flex
            v-if="index + 2 < guilds.length"
            sm12
            md4>
            <home-carousel-card
              :title="guilds[index + 2].name"
              :description="guilds[index + 2].description"
              :img="guilds[index + 2].avatar"
              :github="guilds[index + 2].github_repo"
              class="guilds__card" />
          </v-flex>
        </v-layout>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>


<script>
import HomeCarouselCard from '~/components/HomeGuilds/HomeGuildsCard.vue'
import guilds from '../../db/guilds.json'


  export default {
    components: {
      HomeCarouselCard
    },
    data () {
      return {
        guilds,
      }
    },
  }
</script>

<style lang="stylus" scoped>
.home-guilds
  &__title-row
    padding-left 20px
    margin-bottom 40px
    color #f7f7f7

  &__icon-wrapper
    display flex
    align-items center
    justify-content center

  &__icon
    font-size 72px

  &__title-wrapper
    padding 0 15px

  &__title
    font-size 40px

.guilds-carusel
  margin 10px 10px 10px
  border: none !important

  &__img
    min-height 200px

.v-carousel
    box-shadow none
</style>
