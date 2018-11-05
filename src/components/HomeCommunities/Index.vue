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
  import communities from '../../db/communities.json'

  export default {
    components: {
      HomeCommunitiesCard,
    },
    data() {
        return {
            communities
        } 
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

