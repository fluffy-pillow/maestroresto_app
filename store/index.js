import Vue from 'vue'
import Vuex from 'vuex'
import systemMessage from './systemMessage'
import footer from './footer'
import search from './search'
import auth from './auth'
import globalPreloader from './globalPreloader'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      systemMessage: systemMessage,
      footer: footer,
      search: search,
      auth: auth,
      globalPreloader: globalPreloader
    }
  })
}

export default createStore
