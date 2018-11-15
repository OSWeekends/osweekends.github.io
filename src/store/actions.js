import axios from 'axios'

const actions = {
  async getMeetupData( { commit } ) {
    const key = '765c716753752b6f42355a45103155'
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
}

export default actions
