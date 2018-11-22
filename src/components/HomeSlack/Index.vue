<template>
  <v-container class="home-slack">
    <v-layout
      row
      wrap
      class="home-slack__title-row text-xs-center">
      <v-flex 
        sm12
        md2
        class="home-slack__icon-wrapper" >
        <!-- <img
          alt="slack"
          src="/img/social-icons/slack-black.svg">  -->
        <i class="fab fa-slack-hash home-slack__icon" />
      </v-flex>
      <v-flex
        sm12
        md10>
        <h2 class="home-slack__title">Conversamos sobre Open Source en Slack</h2>
        <h3 class="home-slack__subtitle">Únete a +2k personas</h3>
        <br>
        <a
          href="http://invitations-osweekends.herokuapp.com/?ref=OSWLanding"
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
      background-color transparent
      color #fff
      padding 0.75em 1.25em
      transition all .2s
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
