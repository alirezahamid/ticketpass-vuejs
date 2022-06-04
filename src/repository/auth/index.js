import CORE from '@/boot/axios'

export const login = async (credentials) => CORE.post('/api/login', {
  username: credentials.username,
  password: credentials.password,
  grant_type: 'password',
  client_id: '966c01ba-31b1-40a2-8f4c-fab8b1373bd7'
})
