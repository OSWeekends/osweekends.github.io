<template>
  <div class="team-card">
    <div
      :alt="name"
      :title="name"
      :style="{ backgroundImage: 'url(' + img + ')' }"
      class="team-card__img"/>
    <h3 class="team-card__name"> {{ name }} </h3>
    <h4 class="team-card__role"> {{ role }} </h4>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: 'Fulanito'
    },
    role: {
      type: String,
      required: true,
      default: 'Guilder'
    },
    img: {
      type: String,
      required: true,
      default: '/v.png'
    }
  }
}
</script>

<style lang="stylus" scoped>
.team-card
  margin 10px 20px
  padding 25px
  text-align center
  color #121212

  &__img
    width 200px
    height 200px
    
    background-size cover
    background-position top
    border-radius 100%
    margin 0 auto
  
  &__name
    font-size 18px
    font-weight 600
    padding-top 10px
</style>
