import { createStore } from 'vuex'
// import VuexPersistence from 'vuex-persist'

import EventModule from './event/index'
import AuthModule from './auth/index'

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage
// })

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    event: EventModule,
    auth: AuthModule
  }
  // plugins: [vuexLocal.plugin]
})
