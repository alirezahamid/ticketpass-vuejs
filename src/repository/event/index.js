import CORE from '@/boot/axios'
import { getAccessToken } from '@/service/LocalStorageService'

export const fetchEvents = async (page) => CORE.get(`/api/events?page=${page}`)

export const fetchEvent = async (id) => CORE.get(`/api/events/${id}`)

export const createEvent = async (body) => CORE.post('/api/events', body, {
  headers: {
    Authorization: `Bearer ${getAccessToken()}`
  }
}
)
