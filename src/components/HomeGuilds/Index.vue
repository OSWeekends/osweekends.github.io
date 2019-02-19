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
      <hooper :settings="hooperSettings">
        <slide
          v-for="(guild, index) in shuffleArray"
          :key="index"
          class="">
          <home-guilds-card
            :img="guild.avatar"
            :title="guild.name"
            :website="guild.webdriver"
            :description="guild.description"
            :github_repo="guild.github_repo"/>
        </slide>
        <hooper-navigation slot="hooper-addons" />
        <!--<hooper-pagination slot="hooper-addons" /> -->
        <!--<hooper-progress slot="hooper-addons" /> -->
      </hooper>
    </v-layout>
  </v-container>
</template>


<script>
import HomeGuildsCard from "~/components/HomeGuilds/HomeGuildsCard.vue";
import { mapGetters } from "vuex";
import {
  Hooper,
  Slide,
  Progress as HooperProgress,
  Pagination as HooperPagination,
  Navigation as HooperNavigation
} from 'hooper';

import 'hooper/dist/hooper.css';

export default {
  components: {
    HomeGuildsCard,
    Hooper,
    Slide,
    HooperProgress,
    HooperPagination,
    HooperNavigation,
  },
  data() {
    return {
      hooperSettings: {
        centerMode: false,
        breakpoints: {
          600: {
            itemsToShow: 1,
            pagination: 'fraction'
          },
          768: {
            itemsToShow: 2
          },
          960: {
            itemsToShow: 3,
          },
          1264: {
            itemsToShow: 4,
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
      console.log('<<<<<<<<<<<<<<<<<<ITEMS>>>>>>>>>>>>>>>>>>');
      console.table(array);
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
</style>
