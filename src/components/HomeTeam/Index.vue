<template>
  <v-container class="home-team">
    <v-layout
      row
      class="text-xs-center home-team__title-row">
      <h2 class="home-team__title">Equipo OSW</h2>
    </v-layout>
    <v-layout
      row
      wrap>
      <v-flex
        v-for="(member, index) in teamMembers"
        :key="index"
        xs12
        sm4
        class="text-xs-center">
        <home-team-card
          :name="member.name"
          :img="member.img"
          :role="member.role"
          class="home-team__card" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HomeTeamCard from '~/components/HomeTeam/HomeTeamCard.vue'
  export default {
    components: {
      HomeTeamCard
    },
    data () {
      return {
        teamMembers: [
          {
            img: '/img/team/ulises.jpg',
            name: 'Ulises Gascón',
            role: 'Co-Founder'
          },
          {
            img: '/img/team/jose.jpg',
            name: 'José Manuel Gallego',
            role: 'Co-Founder'
         
          },
          {
            img: '/img/team/carlos.jpg',
            name: 'Carlos Hernández',
            role: 'Co-Founder'
          },
          {
            img: '/img/team/teba.jpg',
            name: 'Teba Gómez',
            role: 'Co-Founder'
          },
          {
            img: '/img/team/ivo.png',
            name: 'Ivo Vilches',
            role: 'Dev to human translator'
          },
          {
            img: '/img/team/baumann.jpg',
            name: 'Jorge Baumann',
            role: 'Embajador'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
.home-team
  &__title
    color #003ea5
    margin 0 auto
    font-size 40px
    margin-bottom 40px
</style>

