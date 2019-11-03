import Vue from 'vue'
import Vuex from 'vuex'
import systemMessage from './systemMessage'
import footer from './footer'
import search from './search'
import auth from './auth'
import helpers from './helpers'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      systemMessage: systemMessage,
      footer: footer,
      search: search,
      auth: auth,
      helpers: helpers
    }
  })
}

export default createStore
