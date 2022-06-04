import CORE from '@/boot/axios'

export const fetchEvents = async (page) => CORE.get(`/api/events?page=${page}`)

export const fetchEvent = async (id) => CORE.get(`/api/events/${id}`)
