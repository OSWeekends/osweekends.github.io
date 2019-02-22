<template>
  <v-card class="guilds-card__wrapper">
    <v-img
      :src="img"
      position="center center"
      class="guilds-card__img"
    />
    <v-card-title 
      primary-title
      class="guilds-card__title">
      <div>
        <h3 class="headline mb-0 text-sm-center">{{ title }}</h3>
        <hr class="mb-2">
        <div> {{ description }}</div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn
        v-if="github_repo"
        :href="ghUrl"
        title="github"
        target="_blank"
        flat
        color="#003ea5">Github</v-btn>
      <v-btn
        v-if="website"
        :href="website"
        title="github"
        target="_blank"
        flat
        color="#003ea5">Website</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
      default: 'Img'
    },
    title: {
      type: String,
      required: true,
      default: 'Title'
      },
    github_repo: {
      type: String,
      required: false,
      default: ''
    },
    website: {
      type: String,
      required: false,
      default: ''
    },
    description: {
      type: String,
      required: true,
      default: 'Lorem ipsum text'
      }
  },
  computed: {
    ghUrl () {
      return `https://github.com/${this.github_repo}`
    }
  }
}
</script>


<style lang="stylus" scoped>
  .guilds-card
    margin 10px 10px

    &__wrapper
      height 100%
      display flex
      flex-direction column
      border-radius 5px
      overflow hidden
    
    &__title
      flex: 1;
      align-items: start;

    &__img
      max-height 100px
/*
  height 95%
  background-color rgba(#fff, 0.75)
  margin 10px 20px
  border-radius 3px
  overflow hidden
  box-shadow 0 15px 40px rgba(#000, .15)

  &__wrapper 
    height 100%

  &__img
    min-height 200px
    box-shadow 0 0 15px rgba(0,0,0, .1)
    */

</style>
