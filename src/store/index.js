import { createStore } from 'vuex'
import EventModule from './event/index'
import AuthModule from './auth/index'

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
})
