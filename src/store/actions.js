import axios from 'axios'

const actions = {
  async getMeetupData( { commit } ) {
    const key = '762274756d3756244d1917424d3c1719'
    const status = {
      past: 'past',
      upcoming: 'upcoming',
    }
    const url = `https://api.meetup.com/Open-Source-Weekends/events?key=${key}&status=${status.upcoming}`
    try {
      let res = await axios.get( url )
      let data = res.data
      commit( 'setMeetupData', data )
    } catch ( error ) {
      console.log( '😰 Err: [getMeetupData]' )
      console.log( { error } )
    }
  },
  async getTeamMembersData (context, data ) {
    context.commit( 'setTeamMembers', data )
  },
  async getGuildsData (context, data ) {
    context.commit( 'setGuilds', data )
  },
  async getProjectsData (context, data ) {
    context.commit( 'setProjects', data )
  },
  async getSponsorsData (context, data ) {
    context.commit( 'setSponsors', data )
  },
  async getCommunitiesData (context, data ) {
    context.commit( 'setCommunities', data )
  },
}

export default actions
