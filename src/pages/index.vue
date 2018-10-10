<template>
  <section>
    <!-- <h1>Home Page</h1>
    <pre>{{ data }}</pre> -->
    <v-container
      fluid
      class="features-section">
      <home-features />
    </v-container>
    
  </section>
</template>

<script>
import HomeFeatures from '~/components/HomeFeatures/Index.vue'

  export default {
    components: {
      HomeFeatures
    },
    data() {
      return {
        data: 'data',
      }
    },
  }
</script>


<style lang="stylus" scoped>
.features-section
  background-color #f7f7f7

</style>
