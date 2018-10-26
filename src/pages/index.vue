<template>
  <div class="content">
    <!-- FEATURES -->
    <!--FIXME-->
    <section class="features-section">
      <home-features/>
    </section>

    <!-- Guilds -->
    <section class="guilds-section">
      <home-guilds/>
    </section>

    <!-- Projects -->
    <section class="projects-section">
      <home-projects/>
    </section>

    <!-- Slack -->
    <section class="slack-section">
      <home-slack/>
    </section>

    <!-- Team -->
    <section class="team-section">
      <home-team/>
    </section>

    <!-- Sponsors -->
    <section class="sponsors-section">
      <home-sponsors/>
    </section>

    <!-- Video -->
    <section class="video-section">
      <home-video/>
    </section>
  </div>
</template>

<script>
  import HomeFeatures from '~/components/HomeFeatures/Index.vue'
  import HomeProjects from '~/components/HomeProjects/Index.vue'
  import HomeGuilds from '~/components/HomeGuilds/Index.vue'
  import HomeSlack from '~/components/HomeSlack/Index.vue'
  import HomeTeam from '~/components/HomeTeam/Index.vue'
  import HomeSponsors from '~/components/HomeSponsors/Index.vue'
  import HomeVideo from '~/components/HomeVideo/Index.vue'


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
      HomeGuilds,
      HomeSlack,
      HomeTeam,
      HomeSponsors,
      HomeVideo
    },
    data() {
      return {}
    },
  }
</script>


<style lang="stylus" scoped>
  color-blue = #003ea5
  color-white = #f7f7f7
  .features-section
    background-color #f7f7f7
    padding 60px 0 80px

  .projects-section
    background-color color-white
    padding 60px 0 80px

  .guilds-section
    background-color color-blue
    padding 60px 0 80px

  .slack-section
    background-color color-blue
    padding 60px 0 60px

  .team-section
    background-color #f7f7f7
    padding 60px 0 80px

   .sponsors-section
    background-color color-blue
    padding 60px 0 80px

  .video-section
    background-color #f7f7f7
    padding 60px 0 80px
</style>
