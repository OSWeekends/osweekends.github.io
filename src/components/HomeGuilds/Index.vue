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
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <v-flex
            v-for="(guild, idx) in shuffleArray"
            :key="idx"
            class="swiper-slide">
            <no-ssr>
              <home-guilds-card
                :img="guild.avatar"
                :title="guild.name"
                :website="guild.webdriver"
                :description="guild.description"
                :github_repo="guild.github_repo"/>
            </no-ssr>
          </v-flex>
        </div>
        <div
          slot="button-prev"
          class="swiper-button-prev swiper-button-white"
        />
        <div
          slot="button-next"
          class="swiper-button-next swiper-button-white"
        />
      </div>
    </v-layout>
  </v-container>
</template>


<script>
import HomeGuildsCard from '~/components/HomeGuilds/HomeGuildsCard.vue';
import { mapGetters } from 'vuex';
import Vue from 'vue'

// If used in nuxt.js/ssr, you should keep it only in browser build environment
if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr');
  Vue.use(VueAwesomeSwiper)
}


export default {
  components: {
    HomeGuildsCard,
  },
  data() {
    return {
      swiperOption: {
        effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpointsInverse: true,
        breakpoints: {
          // when window width is >= 450px
          450: {
            slidesPerView: 1,
            // spaceBetween: 20
          },
          // when window width is >= 700px
          700: {
            slidesPerView: 3,
            //spaceBetween: 30
          },
          // when window width is >= 900px
          1264: {
            slidesPerView: 3,
            //spaceBetween: 40
          }
        },
        on: {
          slideChange() {
            // console.log('onSlideChangeEnd', this);
          },
          tap() {
            // console.log('onTap', this);
          }
        }
      }
    };
  },
  computed: {
    ...mapGetters(["allGuilds"]),
    // Randomize array
    shuffleArray () {
      const array = [ ...this.allGuilds ];
      let m = array.length, i, t;
      while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // Swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
      return array;
    },

  }
};
</script>

<style lang="stylus" scoped>
.home-guilds {
  &__title-row {
    padding-left: 20px;
    margin-bottom: 40px;
    color: #f7f7f7;
  }

  &__icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__icon {
    font-size: 72px;
  }

  &__title-wrapper {
    padding: 0 15px;
  }

  &__title {
    font-size: 40px;
  }

  &__wrapper {
    height: auto;
  }

  .hooper {
    height 100%
  }
}

.swiper-button-prev, .swiper-button-next {  
  width 45px 
  margin-left -10px
  margin-right -10px  
  margin-top 0
  background-color rgba(0,0,0,0.4)  
  border-radius 50%
  background-size: 30px 30px

  &:hover {
    background-color rgba(0,0,0,0.8)  
  }
}

@media (max-width: 700px) {
  .swiper-button-prev, .swiper-button-next {
    height 100%
    top 0
    border-radius 1px
    background-color rgba(0,0,0,0.3)  
  }
}
</style>
