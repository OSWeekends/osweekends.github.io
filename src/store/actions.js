import axios from 'axios'

const actions = {
  // getMeetupData
  // Call to the meetup Api to retrieve the meetup information
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

  // getTeamMembersData
  // Call to team.json Api to retrieve the teamMembers information
  async getTeamMembersData (context, host ) {
    // console.log('Dentro de actions' + host + '/db/team.json')    
    try {
      let res = await axios.get( 'http://' + host + '/db/team.json')
      let data = res.data
      context.commit( 'setTeamMembers', res.data )
    } catch (error) {
      console.log( '😰 Err: [getTeamMembersData1]' )
      console.log( { error } )
    }
  },
  
  // getGuildsData
  // Call to guilds.json Api to retrieve the guilds information
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
  // getProjectsData
  // Call to projects.json Api to retrieve the projects information
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
  // getSponsorsData
  // Call to sponsors.json Api to retrieve the sponsors information
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
  // getFeaturesData
  // Call to features.json Api to retrieve the features information
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