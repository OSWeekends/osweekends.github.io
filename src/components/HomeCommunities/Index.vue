<template>
  <v-container class="home-communities">
    <v-layout
      row
      class="text-xs-center home-communities__title-row">
      <h2 class="home-communities__title">Comunidades hermanadas</h2>
    </v-layout>
    <v-layout
      row
      wrap
      justify-space-around
    >
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
          :image_url="community.imgLocalName"
          class="home-team__card"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HomeCommunitiesCard from "~/components/HomeCommunities/HomeCommunitiesCard.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    HomeCommunitiesCard
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["communities"])
  }
};
</script>

<style lang="stylus" scoped>
.home-communities {
  &__title {
    color: #003ea5;
    margin: 0 auto;
    font-size: 40px;
    margin-bottom: 40px;
  }
}
</style>

