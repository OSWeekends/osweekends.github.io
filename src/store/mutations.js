const mutations = {
  setMeetupData: ( state, payload ) => {
    state.meetupData = payload
  },
  setTeamMembers: (state, payload) => {
    state.teamMembers = payload
  },
  setGuilds: (state, payload) => {
    state.guilds = payload
  },
  setProjects: (state, payload) => {
    state.projects = payload
  },
  setSponsors: (state, payload) => {
    state.sponsors = payload
  },
  setFeatures: (state, payload) => {
    state.features = payload
  },
}

export default mutations