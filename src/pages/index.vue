<template>
  <div class="content">
    <!-- FEATURES -->
    <!--FIXME-->
    <section
      id="welcome"
      class="features-section">
      <home-features/>
    </section>

    <!-- Guilds -->
    <section
      id="guilds"
      class="guilds-section">
      <home-guilds/>
    </section>

    <!-- Projects -->
    <section
      id="proyectos"
      class="projects-section">
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

    <!-- Meetup -->
    <section class="slack-section">
      <home-meetup/>
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
  import HomeMeetup from '~/components/HomeMeetup/Index.vue'
  import HomeVideo from '~/components/HomeVideo/Index.vue'
  

  import axios from 'axios'

  export default {
    async asyncData ({store}) {
      const url = 'https://raw.githubusercontent.com/OSWeekends/Organizacion/master/data/';
      let  teamMembers  = await axios.get(`${url}team.json`)
      let  guilds  = await axios.get(`${url}guilds.json`)
      let  projects  = await axios.get(`${url}projects.json`)
      let  sponsors  = await axios.get(`${url}sponsors.json`)
      let  communities  = await axios.get(`${url}communities.json`)

      await store.dispatch('getTeamMembersData', teamMembers.data)
      await store.dispatch('getGuildsData', guilds.data)
      await store.dispatch('getProjectsData', projects.data)
      await store.dispatch('getSponsorsData', sponsors.data)
      await store.dispatch('getCommunitiesData', communities.data)
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
      HomeMeetup,
      HomeVideo
    },
    data() {
      return {}
    },
  }
</script>


<style lang="stylus" scoped>
  color-blue = #003ea5
  color-light-grey = #f7f7f7
  color-white = #fff
  
  .features-section
    background-color color-white
    padding 60px 0 80px

  .projects-section
    background-color color-light-grey
    padding 60px 0 80px

  .guilds-section
    background-color color-blue
    padding 60px 0 80px

  .slack-section
    background-color #1c299d
    padding 60px 0 60px

  .team-section
    background-color color-white
    padding 60px 0 80px

  .sponsors-section
    background-color color-blue
    padding 60px 0 80px

  .communities-section
    background-color color-light-grey
    padding 60px 0 80px

  .video-section
    background-color color-white
    padding 60px 0 80px
</style>
