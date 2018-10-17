<template>
  <div
    class="sponsor-card align-center">
    <a
      :href="website"
      :title="alt"
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
  width 90%
  margin 10px auto
  background-size cover
  transition all .5s

  &:hover
    // transform scale(1.03)
  img
    width 80%
    
</style>