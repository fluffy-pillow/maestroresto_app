import Vue from 'vue'
import Vuex from 'vuex'
import systemMessage from './systemMessage'
import footer from './footer'
import search from './search'
import globalPreloader from './globalPreloader'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
      systemMessage: systemMessage,
      footer: footer,
      search: search,
      globalPreloader: globalPreloader,
      user: user
    }
})
