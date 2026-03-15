/**
 * API.JS - Backend se baat karne wale calls
 *
 * - getActivities() = saari activities list
 * - addActivity(activity) = nayi activity add karo
 * - getActivityDetail(id) = ek activity ki detail + AI recommendation
 *
 * Har request me token (localStorage se) Authorization header me bhejta hai
//  */
// import axios from 'axios'

// const API_URL = 'http://localhost:8080/api'
// const api = axios.create({ baseURL: API_URL })

// api.interceptors.request.use((config) => {
//   const userId = localStorage.getItem('userId')
//   const token = localStorage.getItem('token')
//   if (token) config.headers['Authorization'] = `Bearer ${token}`
//   if (userId) config.headers['X-User-ID'] = userId
//   return config
// })

// export const getActivities = () => api.get('/activities')
// export const addActivity = (activity) => api.post('/activities', activity)
// export const getActivityDetail = (id) => api.get(`/recommendations/activities/${id}`)


import axios from 'axios'

const API_URL = 'http://localhost:8080/api'
const api = axios.create({ baseURL: API_URL })

api.interceptors.request.use((config) => {
  const userId = localStorage.getItem('userId')
  const token = localStorage.getItem('token')
  if (token) config.headers['Authorization'] = `Bearer ${token}`
  if (userId) config.headers['X-User-ID'] = userId
  return config
})

export const getActivities = () => api.get('/activities')
export const addActivity = (activity) => api.post('/activities', activity)
export const getActivityDetail = (id) => api.get(`/recommendations/activities/${id}`)
