import { login } from '@/repository/auth'
import { clearToken, setToken } from '@/service/LocalStorageService'
import router from '@/router'

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
    errorData: (state) => {
      return state.error
    }
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
        router.push('/')
      } catch (error) {
        context.commit('SET_ERROR', { raiseError: true, blueprint: error })
        console.log(error)
      }
    },
    async callLogout (context) {
      clearToken()
      router.push('/login')
    }
  }
}
