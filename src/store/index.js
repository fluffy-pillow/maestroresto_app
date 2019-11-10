import Vue from 'vue'
import Vuex from 'vuex'
import systemMessage from './systemMessage/index'
import footer from './footer/index'
import search from './search/index'
import globalPreloader from './globalPreloader/index'
import user from './user/index'

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
