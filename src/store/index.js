import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store( {
    state: {
      meetupData: [],
    },
    mutations: {
      setMeetupData: ( state, payload ) => {
        state.meetupData = payload
      },
    },
    actions: {
      getMeetupData( { commit } ) {
        const key = '765c716753752b6f42355a45103155'
        const url = `https://api.meetup.com/Open-Source-Weekends/events?key=${key}&status=upcoming`
        return axios.get( url )
      },
    },
    getters: {
      getMeetupData( state ) {
        return state.meetupData
      },
    },
  } )
}

export default createStore
