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
      light
      hide-delimiters>
      <v-carousel-item
        v-for="(guild, index) in allGuilds"
        :key="index">
        <v-layout
          row
          wrap>
          <v-flex
            sm12
            md4>
            <home-guilds-card
              :title="guild.name"
              :description="guild.description"
              :img="guild.avatar"
              :github="guild.github"
              class="home-guilds__card" />
          </v-flex>
          <v-flex
            v-if="index + 1 < allGuilds.length"
            sm12
            md4>
            <home-guilds-card
              :title="allGuilds[index + 1].name"
              :description="allGuilds[index + 1].description"
              :img="allGuilds[index + 1].avatar"
              :github="allGuilds[index + 1].github"
              class="home-guilds__card" />
          </v-flex>
          <v-flex
            v-if="index + 2 < allGuilds.length"
            sm12
            md4>
            <home-guilds-card
              :title="allGuilds[index + 2].name"
              :description="allGuilds[index + 2].description"
              :img="allGuilds[index + 2].avatar"
              :github="allGuilds[index + 2].github"
              class="home-guilds__card" />
          </v-flex>
        </v-layout>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>


<script>
import HomeGuildsCard from '~/components/HomeGuilds/HomeGuildsCard.vue'
import { mapGetters } from 'vuex'


  export default {
    components: {
      HomeGuildsCard
    },
    data () {

      return {


      }
    },
    computed: {
      ...mapGetters( [ 'allGuilds' ] ),
    }
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

</style>
