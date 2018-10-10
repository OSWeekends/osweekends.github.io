<template>
  <div class="feature-card">
    <v-icon
      color="indigo"
      size="80px"
      class="feature-card__icon">
      {{ icon }}
    </v-icon>
    <h3 class="feature-card__title">{{ title }}</h3>
    <p class="feature-card__text"> {{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
      default: 'far fa-sticky-note'
      },
    text: {
      type: String,
      required: true,
      default: 'Lorem ipsun text'
      },
    title: {
      type: String,
      required: true,
      default: 'Title'
      }
  }
}
</script>


<style lang="stylus" scoped>
.feature-card
  background-color rgba(#fff, 0.75)
  margin 10px 20px
  padding 25px
  text-align center
  border-radius 3px
  box-shadow 0 15px 40px rgba(#000, .15);
  transition all .3s;
  &:hover
    transform translateY(-10px) scale(1.03)
    box-shadow 0 15px 40px rgba(#000, .25)

  &__title
    color #003ea5
    text-transform uppercase
    margin-bottom 10px
  
  &__text
    text-align justify
</style>
