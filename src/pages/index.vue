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

    <!-- Comunidades -->
    <section class="communities-section">
      <home-communities/>
    </section>

    <!-- Slack -->
    <section class="slack-section">
      <home-slack/>
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
  import HomeCommunities from '~/components/HomeCommunities/Index.vue'
  import HomeSponsors from '~/components/HomeSponsors/Index.vue'
  import HomeVideo from '~/components/HomeVideo/Index.vue'

  import axios from 'axios'

  export default {
    async asyncData ({store}) {
      axios.get('https://raw.githubusercontent.com/OSWeekends/Organizacion/master/data/team.json').then((res) => {
        store.dispatch('getTeamMembersData', res.data)
      }).catch((err)=> {
        console.log( '😰 Err: [getTeamMembersData]' )
        console.log( { error } )
      })
      axios.get('https://raw.githubusercontent.com/OSWeekends/Organizacion/master/data/guilds.json').then((res) => {
        store.dispatch('getGuildsData', res.data)
      }).catch((err)=> {
        console.log( '😰 Err: [getGuildsData]' )
        console.log( { error } )
      })
      axios.get('https://raw.githubusercontent.com/OSWeekends/Organizacion/master/data/projects.json').then((res) => {
        store.dispatch('getProjectsData', res.data)
      }).catch((err)=> {
        console.log( '😰 Err: [getProjectsData]' )
        console.log( { error } )
      })
      axios.get('https://raw.githubusercontent.com/OSWeekends/Organizacion/master/data/sponsors.json').then((res) => {
        store.dispatch('getSponsorsData', res.data)
      }).catch((err)=> {
        console.log( '😰 Err: [getSponsorsData]' )
        console.log( { error } )
      })
      axios.get('https://raw.githubusercontent.com/OSWeekends/Organizacion/master/data/communities.json').then((res) => {
        store.dispatch('getCommunititesData', res.data)
      }).catch((err)=> {
        console.log( '😰 Err: [getCommunititesData]' )
        console.log( { error } )
      })
    },
    async fetch( { store, params, req } ) {
      // If no meetup data
      if ( store.state.meetupData.length === 0 ) {
        await store.dispatch( 'getMeetupData' )
      }
    },
    components: {
      HomeFeatures,
      HomeProjects,
      HomeGuilds,
      HomeSlack,
      HomeTeam,
      HomeCommunities,
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

  .communities-section
    background-color #f7f7f7
    padding 60px 0 80px
  
  .video-section
    background-color #f7f7f7
    padding 60px 0 80px
</style>
