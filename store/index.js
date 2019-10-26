import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import systemMessage from './systemMessage'
import footer from './footer'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      user: user,
      systemMessage: systemMessage,
      footer: footer
    }
  })
}

export default createStore
