const getters = {
  getMeetupData( state ) {
    return state.meetupData
  },
  teamMembers( state ) {
    return state.teamMembers
  },
  guilds( state ) {
    return state.guilds.slice(0, 3)
  },
  allGuilds (state) {
    return state.guilds
  },
  projects( state ) {
    return state.projects
  },
  sponsors( state ) {
    return state.sponsors
  },
  communities( state ) {
    return state.communities
  }
}

export default getters
