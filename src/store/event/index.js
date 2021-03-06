import { fetchEvent, fetchEvents, createEvent } from '@/repository/event/index'

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
    },
    eventsMeta: (state) => {
      return state.eventsArray.meta
    },
    eventData: (state) => {
      return state.event.data
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
    },
    async getSingleEvent (context, id) {
      try {
        const data = await fetchEvent(id)
        context.commit('SET_EVENT', data.data)
      } catch (error) {
        context.commit('SET_ERROR', { error: true, blueprint: error })
        console.log(error)
      }
    },
    async createEvent (context, body) {
      try {
        await createEvent(body)
      } catch (error) {
        context.commit('SET_ERROR', { error: true, blueprint: error })
        console.log(error)
      }
    }
  }
}
