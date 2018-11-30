<template>
  <div class="guilds-card">
    <v-card class="guilds-card__wrapper">
      <v-img
        :src="img"
        aspect-ratio="2.75"
        class="guilds-card__img"
      />

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0 text-sm-center">{{ title }}</h3>
          <hr class="mb-2">
          <div> {{ description }}</div>
        </div>
      </v-card-title>

      <v-card-actions v-if="github">
        <v-btn
          :href="github"
          title="github"
          target="_blank"
          flat
          color="#003ea5">Github</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'worknpm'
      },
    description: {
      type: String,
      required: true,
      default: 'Lorem ipsun text'
      },
    img: {
      type: String,
      required: true,
      default: 'Title'
      },
    github: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>


<style lang="stylus" scoped>

.guilds-card
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
    box-shadow 0px 0px 15px rgba(0,0,0, .1)

</style>
