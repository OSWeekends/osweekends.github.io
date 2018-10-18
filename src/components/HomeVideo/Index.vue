<template>
  <v-container class="home-video">
    <v-layout
      row
      class="text-xs-center home-video__title-row">
      <h2 class="home-video__title">Nos lo pasamos pipa</h2>
    </v-layout>
    <div class="home-video__video-wrapper">
      <iframe
        class="home-video__video"
        src="https://www.youtube.com/embed/PoDAibGlh20?showinfo=0"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen />
    </div>
  </v-container>
</template>

<style lang="stylus" scoped>
.home-video
  &__title
    color #003ea5
    margin 0 auto
    font-size 40px
    margin-bottom 40px

  &__video-wrapper
    width 100%
    height 0
    padding-bottom 56.25%
    position relative
    text-align center

  &__video
    position absolute
    top 0
    left 0
    width 100%
    height 100%
</style>