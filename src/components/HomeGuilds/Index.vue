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

  export default {
    components: {
      HomeGuildsCard
    },
    data () {
      return {
        guilds: [
          {
            title: 'Guild 1',
            description: 'decripción Guild 1. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ',
            img: '/img/guilds/anvil.jpg',
            github: 'https://github.com/OSWeekends'
          },
          {
            title: 'Guild 2',
            description: 'Descripcion Guild 2. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur',
            img: '/img/guilds/anvil.jpg',
            github: 'https://github.com/OSWeekends'
          },
          {
            title: 'Guild 3',
            description: 'Descripcion Guild 3. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur',
            img: '/img/guilds/anvil.jpg',
            github: 'https://github.com/OSWeekends'
          }
        ]
      }
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
