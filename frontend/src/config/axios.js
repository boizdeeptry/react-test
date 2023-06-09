import axios from 'axios'
const api = axios.create({
  baseURL: 'http://localhost:4000/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  },
})

export default api
