import Vuex from 'vuex'
import axios from 'axios'

import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const createStore = () => {
  return new Vuex.Store( {
    state,
    getters,
    actions,
    mutations 
  })
}

export default createStore
