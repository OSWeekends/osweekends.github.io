<template>
  <!-- ... -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- It is important to set "left" style prop on every slide -->
      <div
        v-for="(slide, index) in virtualData.slides"
        :key="index"
        :style="{left: `${virtualData.offset}px`}"
        class="swiper-slide"
      >{{ slide }}</div>
    </div>
  </div>
  <!-- ... -->
</template>
<script>
  import Swiper from 'swiper/dist/js/swiper.esm.bundle';
  import HomeGuildsCard from '~/components/HomeGuilds/HomeGuildsCard.vue'
  import { mapGetters } from 'vuex'

  export default {

    data() {
      return {
        // dummy slides data
        slides: (function () {
          var slides = [];
          let slide =''
          for (var i = 0; i < allGuilds.length; i += 1) {
            slide += `
              <v-flex
                v-if="index + 1 < allGuilds.length"
                sm12
              md4>
              <home-guilds-card
                :title="allGuilds[i].name"
                :description="allGuilds[i].description"
                :img="allGuilds[i].avatar"
                :github="allGuilds[i].github"
                class="home-guilds__card" />
              </v-flex>
            `
            slides.push(slides);
          }
          return slides
        }()),
        // virtual data
        virtualData: {
          slides: [],
        },
      }
    },
      computed: {
    ...mapGetters( [ 'allGuilds' ] ),
    },
    mounted() {
      const self = this;
      const swiper = new Swiper('.swiper-container', {
        // ...
        virtual: {
          slides: self.slides,
          renderExternal(data) {
            // assign virtual slides data
            self.virtualData = data;
          },
        },
      }).init();
    },
  };
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
