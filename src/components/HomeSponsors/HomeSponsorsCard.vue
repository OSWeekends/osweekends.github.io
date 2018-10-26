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
  display: flex;
  justify-content: center;
  align-items: center;
  width 90%
  margin 10px auto
  background-size cover
  background-position top
  transition all .5s
  height 150px

  padding 30px
  border 1px solid #fff
  border-radius 5px

  &:hover
    // transform scale(1.03)
    background-color rgba(#000, .8)
    border 1px solid rgba(#000, .8)
    cursor pointer

  &:hover img 
    transform scale(1.05)

  img
    // FIXME
    width 75%
    max-height 100px
    max-width 100%
    transition all .5s

</style>
