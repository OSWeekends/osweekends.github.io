import axios from 'axios'

const actions = {
  async getMeetupData( context ) {
    const key = '765c716753752b6f42355a45103155'
    const status = {
      past: 'past',
      upcoming: 'upcoming',
    }
    const url = `https://api.meetup.com/Open-Source-Weekends/events?key=${key}&status=${status.upcoming}`
    try {
      let res = await axios.get( url )
      let data = res.data
      context.commit( 'setMeetupData', data )
    } catch ( error ) {
      console.log( '😰 Err: [getMeetupData]' )
      console.log( { error } )
    }
  },
  getTeamMembersData (context, data ) {
    context.commit( 'setTeamMembers', data )
  },
  getGuildsData (context, data ) {
    context.commit( 'setGuilds', data )
  },
  getProjectsData (context, data ) {
    context.commit( 'setProjects', data )
  },
  getSponsorsData (context, data ) {
    context.commit( 'setSponsors', data )
  },
  getCommunititesData (context, data ) {
    context.commit( 'setCommunities', data )
  },
}

export default actions
