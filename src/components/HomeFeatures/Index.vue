<template>
  <v-container class="home-features">
    <v-layout
      row
      class="text-xs-center home-features__title-row">
      <h2 class="home-features__title">Open Source Weekends</h2>
    </v-layout>
    <v-layout
      row
      wrap>
      <v-flex
        v-for="(feature, index) in features"
        :key="index"
        xs12
        sm4
        class="text-xs-center">
        <home-features-card
          :title="feature.title"
          :icon="feature.icon"
          :text="feature.text"
          class="home-features__card" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HomeFeaturesCard from '~/components/HomeFeatures/HomeFeaturesCard.vue'
  export default {
    components: {
      HomeFeaturesCard
    },
    data () {
      return {
        features: [
          {
            icono: 'far fa-sticky-note',
            title: 'Titulo 1',
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit conubia tincidunt augue, dictum dis nisl pretium leo aliquam hac per nascetur vehicula ornare, cursus senectus tempor tortor himenaeos ridiculus fermentum metus proin. Montes hac ultricies faucibus laoreet vel purus non et cursus ornare, convallis sapien semper mus luctus primis magna cubilia interdum est, scelerisque enim suscipit habitant porta duis lacus pretium hendrerit. Eros platea eleifend ut viverra montes nisl non, ultricies curae pulvinar eget sem convallis conubia, odio habitant accumsan commodo vestibulum velit.'
          },
          {
            icono: 'far fa-sticky-note',
            title: 'Titulo 2',
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit conubia tincidunt augue, dictum dis nisl pretium leo aliquam hac per nascetur vehicula ornare, cursus senectus tempor tortor himenaeos ridiculus fermentum metus proin. Montes hac ultricies faucibus laoreet vel purus non et cursus ornare, convallis sapien semper mus luctus primis magna cubilia interdum est, scelerisque enim suscipit habitant porta duis lacus pretium hendrerit. Eros platea eleifend ut viverra montes nisl non, ultricies curae pulvinar eget sem convallis conubia, odio habitant accumsan commodo vestibulum velit.'
         
          },
          {
            icono: 'far fa-sticky-note',
            title: 'Titulo 3',
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit conubia tincidunt augue, dictum dis nisl pretium leo aliquam hac per nascetur vehicula ornare, cursus senectus tempor tortor himenaeos ridiculus fermentum metus proin. Montes hac ultricies faucibus laoreet vel purus non et cursus ornare, convallis sapien semper mus luctus primis magna cubilia interdum est, scelerisque enim suscipit habitant porta duis lacus pretium hendrerit. Eros platea eleifend ut viverra montes nisl non, ultricies curae pulvinar eget sem convallis conubia, odio habitant accumsan commodo vestibulum velit.'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
.home-features
  &__title
    color #003ea5
    margin 0 auto
    font-size 40px
    margin-bottom 40px
    animation moveInLeft 1s ease-out .75s
    animation-fill-mode backwards

  &__card
    // opacity 0
    animation moveInBottom 1s ease-out .75s
    animation-fill-mode backwards

// ANIMATIONS
@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px)
  }
  
  80% {
    transform: translateX(-10px);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}


@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}
</style>
