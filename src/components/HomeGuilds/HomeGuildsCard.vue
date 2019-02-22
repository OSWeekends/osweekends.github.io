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
        <div class="guilds-card__description"> {{ description }}</div>
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
      max-height 175px

    &__description
      text-align justify
</style>
