<template>
  <v-container class="home-slack">
    <v-layout
      row
      wrap
      class="home-slack__title-row text-xs-center">
      <v-flex 
        xs12
        sm2
        class="home-slack__icon-wrapper" >
        <!-- <img
          alt="slack"
          src="/img/social-icons/slack-black.svg">  -->
        <i class="fab fa-slack-hash home-slack__icon" />
      </v-flex>
      <v-flex
        xs12
        sm10>
        <h2 class="home-slack__title">Conversamos sobre Open Source en Slack</h2>
        <h3 class="home-slack__subtitle">Únete a +2k personas</h3>
        <br>
        <a
          href="http://invitations-osweekends.herokuapp.com/"
          title="Únete al Slack"
          class="home-slack__btn"
          target="_black">únete al Slack</a>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="stylus" scoped>
.home-slack

  &__title-row
    padding-left 20px
    margin-bottom 40px
    color #fff

  &__title
    font-size 40px
    font-weight 100

  &__subtitle
    font-size 40px
    // font-weight 100

  &__icon-wrapper
        justify-content center
        align-content center
        display flex

  &__icon
    font-size 180px

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
      border-radius 30px
      box-shadow 0 5px 10px rgba(#000, .2)
    
    &:hover
      background-color #333
      color: #f7f7f7
      box-shadow 0 10px 20px rgba(#000, .2)
      backface-visibility hidded

    &:active,
    &:focus 
      outline none;
      box-shadow 0 5px 10px rgba(#000, .2)
</style>
