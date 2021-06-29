import { api } from './apiUrl'

export default {
  async signup(name, email, password, role) {
    const response = await api.post('/auth/signup', {
      name: name,
      email: email,
      password: password,
      role: role
    })
    console.log(response)
    return response.data    
  },
  async login(email, password) {
    const response = await api.post('/auth/login', {
      email: email,
      password: password,
    })
    return response.data
  }
}