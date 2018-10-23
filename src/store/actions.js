import axios from 'axios'

const actions = {
  getMeetupData( context ) {
    const key = '765c716753752b6f42355a45103155'
    const url = `https://api.meetup.com/Open-Source-Weekends/events?key=${key}&status=upcoming`
    return axios.get( url )
  },
  getTeamMembersData (context, referer ) {
    // console.log(referer + '/db/team.json')
    // console.log("url ", req);

    axios.get( referer + '/db/team.json')
      .then( ( res ) => {
        // Save data in store
        context.commit( 'setTeamMembers', res.data )
      } )
      .catch( ( err ) => {
        console.log( '😰 Err: [getTeamMembersData1]' )
        console.log( { err } )
      })
  },
  getGuildsData: (context , referer) => {
    axios.get( referer + '/db/guilds.json')
      .then( ( res ) => {
        // Save data in store
        context.commit( 'setGuilds', res.data )
      } )
      .catch( ( err ) => {
        console.log( '😰 Err: [getGuildsData]' )
        console.log( { err } )
      })
  },
  getProjectsData: (context, referer ) => {
    axios.get( referer + '/db/projects.json')
      .then( ( res ) => {
        // Save data in store
        context.commit( 'setProjects', res.data )
      } )
      .catch( ( err ) => {
        console.log( '😰 Err: [getProjectsData]' )
        console.log( { err } )
      })
  },
  getSponsorsData: (context, referer ) => {
    axios.get( referer + '/db/sponsors.json')
      .then( ( res ) => {
        // Save data in store
        context.commit( 'setSponsors', res.data )
      } )
      .catch( ( err ) => {
        console.log( '😰 Err: [getSponsorsData]' )
        console.log( { err } )
      })
  },
  getFeaturesData: ( context, referer ) => {
    axios.get( referer + '/db/features.json')
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