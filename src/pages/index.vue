<template>
  <div class="content">
    <!-- FEATURES -->
    <section class="features-section">
      <home-features/>
    </section>

    <!-- Projects -->
    <section class="projects-section">
      <home-projects/>
    </section>

    <!-- Sponsors -->
    <section class="sponsors-section">
      <home-sponsors/>
    </section>

    <!-- Slack -->
    <section class="slack-section">
      <home-slack/>
    </section>
  </div>
</template>

<script>
  import HomeFeatures from '~/components/HomeFeatures/Index.vue'
  import HomeProjects from '~/components/HomeProjects/Index.vue'
  import HomeSponsors from '~/components/HomeSponsors/Index.vue'
  import HomeSlack from '~/components/HomeSlack/Index.vue'

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
      HomeProjects,
      HomeSponsors,
      HomeSlack
    },
    data() {
      return {}
    },
  }
</script>


<style lang="stylus" scoped>
  .features-section
    background-color #f7f7f7
    padding 60px 0 80px

  .projects-section
    background-color #003ea5
    padding 60px 0 80px
  
  .sponsors-section
    background-color #BBB
    padding 60px 0 80px

  .slack-section
    background-color #003ea5
    padding 60px 0 60px

</style>
