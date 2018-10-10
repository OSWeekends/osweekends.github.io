<template>
  <section class="content">
    <v-container
      fluid
      class="features-section">
      <home-features/>
    </v-container>

  </section>
</template>

<script>
  import HomeFeatures from '~/components/HomeFeatures/Index.vue'

  export default {
    fetch( { store, params } ) {
      // If no meetup data
      if ( store.state.meetupData.length === 0 ) {
        return store.dispatch( 'getMeetupData' )
          .then( ( res ) => {
            // Save data in store
            store.commit( 'setMeetupData', res.data )
          } )
          .catch( ( err ) => {
            console.log( '😰 Err: [getMeetupData]' )
            console.log( { err } )
          } )
      }
    },
    components: {
      HomeFeatures,
    },
    data() {
      return {}
    },
  }
</script>


<style lang="stylus" scoped>
  .features-section
    background-color #f7f7f7

</style>
