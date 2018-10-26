<template>
  <div
    class="sponsor-card align-center">
    <a
      :href="url"
      :title="name"
      target="_blank">
      <img
        :src="img"
        :alt="name">
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
    name: {
      type: String,
      required: true,
      default: ''
    }
  },
  computed: {
    url() {
      return `${this.website}?ref=OSWeekends`
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
  max-height 100px

  &:hover
    // transform scale(1.03)
  img
    // FIXME
    width 80%
    max-height 100px
    max-width 100%

</style>
