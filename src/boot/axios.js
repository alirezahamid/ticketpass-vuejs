import axios from 'axios'
// import jwtDecode from 'jwt-decode'
// import dayjs from 'dayjs'

// import { getAccessToken, getRefreshToken, setToken } from '@/service/LocalStorageService'

const BASE_URL = process.env.VUE_APP_BASE_CORE_URL

const coreApiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  responseType: 'json'
})

// let access = getAccessToken() ? getAccessToken() : null
// let refresh = getRefreshToken() ? getRefreshToken() : null

// coreApiInstance.interceptors.request.use(async req => {
//   if (!access && !refresh) {
//     access = getAccessToken() ? getAccessToken() : null
//     refresh = getRefreshToken() ? getRefreshToken() : null
//     req.headers.Authorization = `Bearer ${access}`
//   }

//   const user = jwtDecode(getAccessToken())
//   const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1

//   if (!isExpired) return req

//   const response = await axios.post(`${BASE_URL}/v1/auth/refresh-token/`, {
//     refreshToken: getRefreshToken()
//   })

//   setToken({
//     access: response.data.accessToken,
//     refresh: response.data.refreshToken
//   })
//   req.headers.Authorization = `Bearer ${response.data.accessToken}`
//   return req
// })

export default coreApiInstance
