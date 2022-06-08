export const setToken = (tokenObj) => {
  /*eslint-disable */
  console.log(tokenObj)
  const { refresh_token, access_token } = tokenObj
  localStorage.setItem('@access_token', access_token)
  localStorage.setItem('@refresh_token', refresh_token)
}
export const getAccessToken = ()=> {
  return localStorage.getItem('@access_token')
}
export const getRefreshToken =()=> {
  return localStorage.getItem('@refresh_token')
}
export const clearToken= ()=> {
  localStorage.removeItem('@access_token')
  localStorage.removeItem('@refresh_token')
}

