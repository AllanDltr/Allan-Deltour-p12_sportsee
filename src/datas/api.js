import axios from 'axios'

const endpoint = 'http://localhost:3000'

  export async function getUser(id) {
    const res = await axios.get(`${endpoint}/user/${id}`)
    return res.data
  }

  export async function getUserActivity(id) {
    const res = await axios.get(`${endpoint}/user/${id}/activity`)
    return res.data.data
  }

  export async function getAverageSessions(id) {
    const res = await axios.get(`${endpoint}/user/${id}/average-sessions`)
    return res.data.data
  }

  export async function getPerformance(id) {
    const res = await axios.get(`${endpoint}/user/${id}/performance`)
    return res.data.data
  }