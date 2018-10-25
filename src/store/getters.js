const getters = {
  getMeetupData( state ) {
    return state.meetupData
  },
  teamMembers( state ) {
    return state.teamMembers
  },
  guilds( state ) {
    return state.guilds
  },
  projects( state ) {
    return state.projects
  },
  sponsors( state ) {
    return state.sponsors
  },
  features( state ) {
    return state.features
  }
}

export default getters