import { fetchEvents } from '@/repository/event/index'

export default {
  namespaced: true,

  state: {
    event: {},
    eventsArray: [],
    error: {
      raiseError: false,
      blueprint: ''
    }
  },
  getters: {
    eventsData: (state) => {
      return state.eventsArray.data
    }
  },
  mutations: {
    SET_EVENT (state, payload) {
      state.event = payload
    },
    SET_EVENTS (state, payload) {
      state.eventsArray = payload
    },
    SET_ERROR (state, payload) {
      state.error = payload
    }
  },
  actions: {
    async getEvents (context, page) {
      try {
        const data = await fetchEvents(page)
        context.commit('SET_EVENTS', data.data)
      } catch (error) {
        context.commit('SET_ERROR', { error: true, blueprint: error })
        console.log(error)
      }
    }
  }
}
