<template>
  <section class="content">
    <h1>Home Page</h1>
    <pre>{{ data }}</pre>
  </section>

</template>

<script>

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
    components: {},
    data() {
      return {
        data: 'data',
      }
    },
  }
</script>
