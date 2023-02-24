import axios from 'axios'

export default class API {
  constructor() {
    this.endpoint = 'http://localhost:5173'
  }
  async getUser(id) {
    const res = await axios.get(`${this.endpoint}/user/${id}`)
    return res.data
  }

  async getUserActivity(id) {
    const res = await axios.get(`${this.endpoint}/user/${id}/activity`)
    return res.data
  }

  async getAverageSessions(id) {
    const res = await axios.get(`${this.endpoint}/user/${id}/average-sessions`)
    return res.data
  }

  async getPerformance(id) {
    const res = await axios.get(`${this.endpoint}/user/${id}/performance`)
    return res.data
  }
}