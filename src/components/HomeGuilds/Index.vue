<template>
  <v-container class="home-guilds">
    <v-layout
      row
      wrap
      class="home-guilds__title-row text-xs-center text-sm-left">
      <v-flex 
        xs12
        sm1
        class="home-guilds__icon-wrapper" >
        <i class="home-guilds__icon material-icons"> build </i>
      </v-flex>
      <v-flex
        xs12
        sm11>
        <h2 class="home-guilds__title">Guilds</h2>
        <h3 class="home-guilds__subtitle">Equipos de trabajo de la comunidad: </h3>
      </v-flex>
    </v-layout>
    <v-layout
      row
      wrap>
      <v-flex
        v-for="(guild, index) in guilds"
        :key="index"
        sm12
        md4>
        <home-guilds-card
          :title="guild.title"
          :description="guild.description"
          :img="guild.img"
          :github="guild.github"
          class="home-guilds__card" />
      </v-flex>
    </v-layout>
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
      ...mapGetters( [ 'guilds' ] ),
    } 
  }
</script>

<style lang="stylus" scoped>
.home-guilds
  &__title-row
    padding-left 20px
    margin-bottom 40px
    color #fff

  &__icon-wrapper
    display flex
    align-items  center
    justify-content center

  &__icon
    font-size 72px


  &__title
    font-size 40px

</style>