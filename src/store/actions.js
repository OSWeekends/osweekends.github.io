import axios from 'axios'

const actions = {
  async getMeetupData( context ) {
    const key = '765c716753752b6f42355a45103155'
    const url = `https://api.meetup.com/Open-Source-Weekends/events?key=${key}&status=upcoming`

    try {
      let res = await axios.get( url )
      let data = res.data
      context.commit( 'setMeetupData', data )
    } catch (error) {
      console.log( '😰 Err: [getMeetupData]' )
      console.log( { error } )
    }
  },
  async getTeamMembersData (context, host ) {
    console.log('Dentro de actions' + host + '/db/team.json')
    
    try {
      let res = await axios.get( 'http://' + host + '/db/team.json')
      let data = res.data
      context.commit( 'setTeamMembers', res.data )
    } catch (error) {
      console.log( '😰 Err: [getTeamMembersData1]' )
      console.log( { error } )
    }
    
  },
  async getGuildsData (context , host) {
    try {
      let res = await axios.get( 'http://' +  host + '/db/guilds.json')
      let data = res.data
      context.commit( 'setGuilds', res.data )
    } catch (error) {
      console.log( '😰 Err: [getGuildsData]' )
      console.log( { error } )
    }
  },
  async getProjectsData (context, host ) {
    try {
      let res = await axios.get( 'http://' + host + '/db/projects.json')
      let data = res.data
      context.commit( 'setProjects', data )
    } catch (error) {
      console.log( '😰 Err: [getProjectsData]' )
      console.log( { error } )
    }
  },
  async getSponsorsData (context, host ) {
    try {
      let res = await axios.get( 'http://' + host + '/db/sponsors.json')
      let data = res.data
      context.commit( 'setSponsors', data )
    } catch (error) {
      console.log( '😰 Err: [getSponsorsData]' )
      console.log( { error } )
    }
  },
  async getFeaturesData ( context, host ) {
    try {
      let res = await axios.get( 'http://' + host + '/db/features.json')
      let data = res.data
      context.commit( 'setFeatures', data )
    } catch (error) {
      console.log( '😰 Err: [getFeaturesData]' )
      console.log( { error } )
    }
  }
}

export default actions