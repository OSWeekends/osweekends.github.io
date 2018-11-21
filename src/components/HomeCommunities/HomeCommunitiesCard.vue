<template>
  <div class="community-card">
    <a
      :href="url"
      target="_blank">
      <div
        :alt="name"
        :title="name"
        :style="{ backgroundImage: 'url(/img/communities/' + image_url + ')' }"
        class="community-card__img"/>
      <h3 class="community-card__name"> {{ name }} </h3>
    </a>
    
  </div>
</template>


<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    },
    url: {
      type: String,
      required: true,
      default: 'Guilder'
    },
    image_url: {
      type: String,
      required: true,
      default: '/v.png'
    }
  }
}
</script>

<style lang="stylus" scoped>
.community-card
  margin 10px 20px
  padding 25px
  text-align center
  color #121212

  &:hover &__img
    // box-shadow 0px 10px 40px rgba(#000, .35);

  &__img
    width 150px
    height 150px    
    background-size cover
    background-position top
    border-radius 100%
    box-shadow 0 15px 40px rgba(#000, .15);
    margin 0 auto
    transition all .5s
  
  &__name
    font-size 18px
    font-weight 600
    padding-top 10px
</style>
