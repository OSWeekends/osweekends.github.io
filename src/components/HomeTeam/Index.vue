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
          :img="member.avatar"
          :role="member.role"
          :twitter="member.twitter"
          :github="member.github"
          class="home-team__card"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import HomeTeamCard from '~/components/HomeTeam/HomeTeamCard.vue'

  export default {
    components: {
      HomeTeamCard,
    },
    data() {
      return {
        teamMembers: [
          {
            name: 'Ulises Gascón',
            avatar: '/img/team/ulises.jpg',
            role: 'Co-Founder',
            github: 'https://github.com/ulisesGascon',
            twitter: 'https://twitter.com/kom_256',
          }, {
            name: 'Carlos Hernández',
            avatar: '/img/team/carlos.jpg',
            role: 'Co-Founder',
            github: 'https://github.com/codingCarlos',
            twitter: 'https://twitter.com/codingCarlos',
          }, {
            name: 'José Manuel Gallego',
            avatar: '/img/team/jose.jpg',
            role: 'Co-Founder',
            github: 'https://github.com/josheriff',
            twitter: 'https://twitter.com/josheriff',
          }, {
            name: 'Theba Gómez',
            avatar: '/img/team/teba.png',
            role: 'Co-Organizadora & Embajadora de los Guilds',
            github: 'https://github.com/KoolTheba',
            twitter: 'https://twitter.com/kooltheba',
          }, {
            name: 'Jorge Baumann',
            avatar: '/img/team/baumann.jpg',
            role: 'Emabajador de l@s mentor@s',
            github: 'https://github.com/baumannzone',
            twitter: 'https://twitter.com/baumannzone',
          }, {
            name: 'Elena Mateos',
            avatar: 'https://s3.amazonaws.com/media-p.slid.es/uploads/479298/images/4132505/27022503.jpeg',
            role: 'OSW Hacker Space Manager',
            github: 'https://github.com/ElenaMLopez',
            twitter: 'https://twitter.com/lpez_elena',
          }, {
            name: 'Pepe Sanchez',
            avatar: '/img/team/pepe.jpeg',
            role: 'Embajador de Newcomers',
            github: 'https://github.com/pepesb',
            twitter: 'https://twitter.com/pepe_sb1',
          }, {
            name: 'Paola García',
            avatar: '/img/team/paola.jpeg',
            role: 'Embajadora de la diversidad',
            github: 'https://github.com/olapaola',
            twitter: 'https://twitter.com/ggarciapaola',
          }, {
            name: 'Ivo Vilches',
            avatar: '/img/team/ivo.png',
            role: 'Dev to human translator',
            github: 'https://github.com/ivoriginal',
            twitter: 'https://twitter.com/ivoriginal',
          }
        ],
      }
    },
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

