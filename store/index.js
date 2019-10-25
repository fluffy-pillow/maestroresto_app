import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import systemMessage from './systemMessage'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      user: user,
      systemMessage: systemMessage
    }
  })
}

export default createStore
