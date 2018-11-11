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
          :twitter="member.Twitter"
          :github="member.github"
          class="home-team__card"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import HomeTeamCard from '~/components/HomeTeam/HomeTeamCard.vue'
  import { mapGetters } from 'vuex'


  export default {
    components: {
      HomeTeamCard,
    },
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters( [ 'teamMembers' ] ),
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

