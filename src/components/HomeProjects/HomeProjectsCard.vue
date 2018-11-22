<template>
  <div
    :alt="title"
    :style="{ backgroundImage: 'url(' + img + ')' }"
    class="project-card">
    <div class="project-card__details">
      <div class="project-card__title"> {{ title }}</div>
      <div class="project-card__description">{{ description }}</div>
      <div class="project-card__btns">
        <a
          v-if="website"
          :href="website"
          title="website"
          class="project-card__btn"
          target="_blank">Website </a>
        <a
          v-if="github"
          :href="github"
          title="github"
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
  background-size 100%
  background-position center
  position relative
  border-radius 5px
  box-shadow 0 15px 40px rgba(#000, .15);
  overflow hidden
  transition all .4s

  &:hover
    background-size 110%

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
      background-color transparent
      color #fff
      padding 0.75em 1.25em
      transition all .4s
      border-radius 6px
      border 1px solid rgba(255,255,255,0.5);
      box-shadow 0 5px 10px rgba(#000, .2)
    
    &:hover
      background-color #fff
      color: #1c299d
      box-shadow 0 10px 20px rgba(#000, .2)
      backface-visibility hidded

    &:active,
    &:focus 
      outline none;
      box-shadow 0 5px 10px rgba(#000, .2)

</style>
