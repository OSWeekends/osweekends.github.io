<template>
  <div class="header">
    <div class="header-content">
      <v-content>
        <v-container>
          <h2 class="display-3">La comunidad de software que hace cosas</h2>
        </v-container>
      </v-content>
    </div>
  </div>
</template>

<style lang="stylus">
  .header
    background-image url("/main.jpg")
    background-size cover
    background-position center center
    min-height 400px
    position relative
    &:after
      content ""
      display block
      position absolute
      width 100%
      height 100%
      background-color rgba(16, 54, 239, 0.64)
      z-index 1

  .header-content
    /*position absolute*/
    margin-top 64px
    width 100%
    z-index 10
    color white

</style>
