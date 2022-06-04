import axios from 'axios'

const BASE_URL = process.env.VUE_APP_BASE_CORE_URL
console.log(BASE_URL)
const coreApiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  responseType: 'json'
})

export default coreApiInstance
