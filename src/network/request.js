import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: '',
    timeout: 5000
  })

  instance.interceptors.request.use(
    config => config,
    err => { }
  )

  instance.interceptors.response.use(
    res => res.data,
    err => { }
  )

  return instance(config)
}