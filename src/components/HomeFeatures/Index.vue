<template>
  <v-container class="home-features">
    <v-layout
      row
      class="text-xs-center home-features__title-row">
      <h2 class="home-features__title">Open Source Weekends</h2>
    </v-layout>
    <v-layout
      row
      wrap
      justify-space-around
    >
      <v-flex
        v-for="(feature, index) in features"
        :key="index"
        sm12
        md4
        class="home-features__wrapper text-xs-center">
        <home-features-card
          :title="feature.title"
          :icon="feature.icon"
          :text="feature.text"
          :link="feature.link"
          class="home-features__card" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HomeFeaturesCard from '~/components/HomeFeatures/HomeFeaturesCard.vue'
import features from '../../db/features.json'
  export default {
    components: {
      HomeFeaturesCard
    },
    data () {
      return {
        features
      }
    }
  }
</script>

<style lang="stylus" scoped>
.home-features
  &__title
    color #1c299d
    margin 0 auto
    font-size 40px
    margin-bottom 40px

    &__wrapper{
      height auto
    }

</style>
