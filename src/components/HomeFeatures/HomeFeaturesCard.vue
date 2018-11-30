<template>
  <div class="feature-card">
    <i class="feature-card__icon material-icons">  {{ icon }} </i>
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
      default: 'worknpm'
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
  height 95%
  background-color rgba(#fff, 0.75)
  margin 10px 20px
  padding 25px
  text-align center
  border-radius 3px
  box-shadow 0 0 40px rgba(#000, .1);
  transition all .3s;
  &:hover
    box-shadow 0 0 40px rgba(#000, .2)

  &__icon
    font-size 72px
    color #333

  &__title
    color #333
    text-transform uppercase
    font-size 18px
    margin-bottom 10px
  
  &__text
    text-align justify
</style>
