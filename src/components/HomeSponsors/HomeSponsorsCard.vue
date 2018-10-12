<template>
  <div
    class="sponsor-card align-center">
    <a
      :href="website"
      target="_blank">
      <img
        :src="img"
        :alt="alt">
    </a>
  </div>
</template>
<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
      default: ''
    },
    website: {
      type: String,
      required: false,
      default: ''
    },
    alt: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.sponsor-card
  background-color rgba(#BBB)
  width 90%
  margin 10px auto
  background-size cover
  &:hover
    width 95%
    transition all .5s
  img
    width 80%
    
</style>