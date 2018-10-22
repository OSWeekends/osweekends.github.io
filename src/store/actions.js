import axios from 'axios'

const actions = {
  getMeetupData( context ) {
    const key = '765c716753752b6f42355a45103155'
    const url = `https://api.meetup.com/Open-Source-Weekends/events?key=${key}&status=upcoming`
    axios.get( url )
      .then( ( res ) => {
        // Save data in store
        context.commit( 'setMeetupData', res.data )
      } )
      .catch( ( err ) => {
        console.log( '😰 Err: [getMeetupData]' )
        console.log( { err } )
      } )
  },
  getTeamMembersData: (context ) => {
    axios.get( 'http://localhost:3000' + '/db/team.json')
      .then( ( res ) => {
        // Save data in store
        context.commit( 'setTeamMembers', res.data )
      } )
      .catch( ( err ) => {
        console.log( '😰 Err: [getTeamMembersData]' )
        console.log( { err } )
      })
  },
  getGuildsData: (context ) => {
    axios.get( 'http://localhost:3000' + '/db/guilds.json')
      .then( ( res ) => {
        // Save data in store
        context.commit( 'setGuilds', res.data )
      } )
      .catch( ( err ) => {
        console.log( '😰 Err: [getGuildsData]' )
        console.log( { err } )
      })
  },
  getProjectsData: (context ) => {
    axios.get( 'http://localhost:3000' + '/db/projects.json')
      .then( ( res ) => {
        // Save data in store
        context.commit( 'setProjects', res.data )
      } )
      .catch( ( err ) => {
        console.log( '😰 Err: [getProjectsData]' )
        console.log( { err } )
      })
  },
  getSponsorsData: (context ) => {
    axios.get( 'http://localhost:3000' + '/db/sponsors.json')
      .then( ( res ) => {
        // Save data in store
        context.commit( 'setSponsors', res.data )
      } )
      .catch( ( err ) => {
        console.log( '😰 Err: [getSponsorsData]' )
        console.log( { err } )
      })
  },
  getFeaturesData: ( context ) => {
    axios.get( 'http://localhost:3000' + '/db/features.json')
      .then( ( res ) => {
        // Save data in store
        context.commit( 'setFeatures', res.data )
      } )
      .catch( ( err ) => {
        console.log( '😰 Err: [getFeaturesData]' )
        console.log( { err } )
      })
  }
}

export default actions