<template>
  <div
    :style="{ backgroundImage: 'url(' + img + ')' }"
    class="project-card">
    <div class="project-card__details">
      <div class="project-card__title"> {{ title }}</div>
      <div class="project-card__description">{{ description }}</div>
      <div class="project-card__btns">
        <a
          v-if="website"
          :href="website"
          class="project-card__btn"
          target="_blank">Website </a>
        <a
          v-if="github"
          :href="github"
          class="project-card__btn"
          target="_blank">Github </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'Titulo del proyecto'
    },
    description: {
      type: String,
      required: true,
      default: 'Descripcion del proyecto'
    },
    img: {
      type: String,
      required: true,
      default: '/v.png'
    },
    website: {
      type: String,
      required: false,
      default: ''
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
.project-card
  background-color #fff
  width 90%
  padding-top: 90%;
  margin 10px auto
  background-size cover
  background-position top
  position relative
  border-radius 5px

  &:hover &__details
    opacity: 1
    transition all .4s

  &__details
    background-color rgba(#000, .8)
    position absolute 
    top 0
    left 0
    width 100%
    height 100%
    padding: 15px
    opacity 0
  
  &__title
    color #ffffff
    font-size 24px
    margin 10% 0

  &__description
    color #ffffff

  &__btns
    position absolute
    width 100%
    top 80%
    left 50%
    transform translate(-50%, 50%)

  &__btn
    &,
    &:link,
    &:visited
      text-transform uppercase
      text-decoration none
      font-weight 600
      margin-right 10px
      background-color #f7f7f7
      color: #003ea5
      padding 10px 20px
      transition all .4s
      border-radius 3px
      box-shadow 0 5px 10px rgba(#000, .2)
    
    &:hover
      background-color #003ea5
      color: #f7f7f7
      box-shadow 0 10px 20px rgba(#000, .2)
      backface-visibility hidded

    &:active,
    &:focus 
      outline none;
      box-shadow 0 5px 10px rgba(#000, .2)




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
