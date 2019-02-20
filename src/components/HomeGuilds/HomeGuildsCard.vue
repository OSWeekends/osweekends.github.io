<template>
  <div class="guilds-card">
    <v-card class="guilds-card__wrapper">
      <v-img
        :src="img"
        aspect-ratio="2.75"
        class="guilds-card__img"/>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0 text-sm-center"> {{ title }} </h3>
          <hr class="mb-2">
          <div> {{ description }} </div>
        </div>
      </v-card-title>

      <v-card-actions>
        <template v-if="github_repo">
          <v-btn
            :href="ghUrl"
            title="github"
            target="_blank"
            flat
            color="#003ea5">Github
          </v-btn>
        </template>
        <template v-if="website">
          <v-btn
            :href="website"
            title="github"
            target="_blank"
            flat
            color="#003ea5">Website
          </v-btn>
        </template>
      </v-card-actions>
    </v-card>
  </div>
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
