import { login } from '@/repository/auth'
import { setToken } from '@/service/LocalStorageService'

export default {
  namespaced: true,

  state: {
    tokens: {},
    error: {
      raiseError: false,
      blueprint: ''
    }
  },
  getters: {
  },
  mutations: {
    SET_TOKENS (state, payload) {
      state.tokens = payload
    },

    SET_ERROR (state, payload) {
      state.error = payload
    }
  },
  actions: {
    async callLogin (context, credentials) {
      try {
        const { data } = await login(credentials)
        setToken({ access_token: data.access_token, refresh_token: data.refresh_token })
        context.commit('SET_TOKENS', data)
      } catch (error) {
        context.commit('SET_ERROR', { error: true, blueprint: error })
        console.log(error)
      }
    }

  }
}
